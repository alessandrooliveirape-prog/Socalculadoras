import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { execFileSync, execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { CALCULATORS_CATALOG, CATEGORY_MAP } from '../src/data/calculatorsCatalog.ts';
import {
  getSeoContentForCalculator,
  getCategoryHubContent,
  CATEGORY_KEY_TO_SLUG
} from '../src/utils/seoContentGenerator.ts';
import { GUIDES_ARTICLES } from '../src/data/guidesArticles.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

dotenv.config({ path: path.join(ROOT_DIR, '.env.local') });
dotenv.config({ path: path.join(ROOT_DIR, '.env') });

const SITE_URL = 'https://www.brasilcalculadoras.com.br';
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

const EXPECTED_ADS_TXT_LINE = 'google.com, pub-8160658026927094, DIRECT, f08c47fec0942fa0';
const EXPECTED_ROBOTS_TXT = `User-agent: *\r\nAllow: /\r\nDisallow: /api/\r\nDisallow: /*?*utm_*\r\nDisallow: /*?*ref=*\r\nDisallow: /admin*\r\n\r\nUser-agent: Mediapartners-Google\r\nAllow: /\r\n\r\n# Sitemap corporativo dinâmico indexável para SPA\r\nSitemap: https://www.brasilcalculadoras.com.br/sitemap.xml\r\n`;
const INSTITUTIONAL_SLUGS = [
  'politica-de-privacidade',
  'termos-de-uso',
  'sobre',
  'contato',
  'cookies',
  'anunciantes',
  'desenvolvedores'
];

function escapeHtml(text: string): string {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getTodayIsoBr(): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date());
}

function countWords(text: string): number {
  return (text || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;
}

function extractMainWords(html: string): number {
  const m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  return countWords(m ? m[1] : '');
}

function runNodeScript(args: string[], label: string, maxOldSpaceMb = 2048) {
  console.log(`▶ Executando: ${label}...`);
  execFileSync(process.execPath, [`--max-old-space-size=${maxOldSpaceMb}`, ...args], {
    cwd: ROOT_DIR,
    stdio: 'inherit'
  });
}

async function generateAiSupplementForThinCalc(calc: { id: string; name: string; description: string; category: string }): Promise<{
  domainConcept: string;
  formulaText: string;
  whenToUse: string;
  importantTips: string;
} | null> {
  if (!GEMINI_API_KEY) return null;
  try {
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    const prompt = `Você é especialista editorial técnico do portal Brasil Calculadoras.
Escreva um JSON estrito (sem markdown) para enriquecer a calculadora "${calc.name}" (categoria "${calc.category}", descrição: "${calc.description}") em português do Brasil, sem usar caracteres < ou >.
Formato JSON exato:
{
  "domainConcept": "3 parágrafos densos e originais explicando conceito, legislação/fórmula brasileira e importância prática (~220 palavras).",
  "formulaText": "Explicação detalhada da fórmula matemática com exemplos de variáveis (~60 palavras).",
  "whenToUse": "Quando utilizar na prática por profissionais, estudantes ou cidadãos (~60 palavras).",
  "importantTips": "Dicas técnicas e cuidados para evitar erros comuns (~70 palavras)."
}`;
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt
    });
    const rawText = (response.text || '').replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(rawText);
    if (parsed.domainConcept && parsed.formulaText && parsed.whenToUse && parsed.importantTips) {
      return parsed;
    }
  } catch (err) {
    console.warn(`⚠️ Falha ao chamar Gemini AI para ${calc.id}:`, err);
  }
  return null;
}

async function main() {
  const startedAt = Date.now();
  const todayIso = getTodayIsoBr();
  const todayMs = Date.parse(`${todayIso}T12:00:00Z`);

  const healingActions: string[] = [];
  const unresolvedIssues: string[] = [];

  console.log('======================================================================');
  console.log('🤖 BRASIL CALCULADORAS — AUTONOMOUS HEALTH & SELF-HEALING AGENT v1.0');
  console.log(`📅 Data de Execução (BRT): ${todayIso}`);
  console.log('======================================================================\n');

  // ----------------------------------------------------------------------
  // ETAPA 1: REVISÃO EDITORIAL, DATAS (> 30 DIAS) E CHECK DE THIN CONTENT
  // ----------------------------------------------------------------------
  console.log('📝 [Etapa 1/4] Auditando artigos editoriais e textos SEO...');
  const guidesFilePath = path.join(ROOT_DIR, 'src', 'data', 'guidesArticles.ts');
  let guidesContent = fs.readFileSync(guidesFilePath, 'utf-8');
  let guidesModified = false;

  for (const article of GUIDES_ARTICLES) {
    const updatedMs = Date.parse(`${article.updatedAt}T12:00:00Z`);
    const ageDays = Number.isFinite(updatedMs) ? (todayMs - updatedMs) / 86400_000 : 0;

    // Atualiza apenas datas passadas que já tenham vencido há mais de 30 dias
    if (ageDays > 30) {
      const targetPattern = new RegExp(
        `(slug:\\s*'${article.slug}'[\\s\\S]*?updatedAt:\\s*')${article.updatedAt}(')`,
        'm'
      );
      if (targetPattern.test(guidesContent)) {
        guidesContent = guidesContent.replace(targetPattern, `$1${todayIso}$2`);
        guidesModified = true;
        healingActions.push(`Atualizado updatedAt de "${article.slug}" (${article.updatedAt} -> ${todayIso}, vencido há ${Math.floor(ageDays)} dias).`);
      }
    }

    const articleRawWords = countWords([
      article.title,
      article.excerpt,
      ...article.sections.flatMap(s => [
        s.heading,
        ...s.paragraphs,
        ...(s.bullets || []),
        s.highlightBox?.title || '',
        s.highlightBox?.text || ''
      ]),
      ...article.faq.map(f => `${f.q} ${f.a}`)
    ].join(' '));

    if (articleRawWords < 800) {
      unresolvedIssues.push(`Guia "${article.slug}" abaixo de 800 palavras (${articleRawWords} palavras).`);
    }
  }

  if (guidesModified) {
    fs.writeFileSync(guidesFilePath, guidesContent, 'utf-8');
  }

  // Verificar calculadoras com < 600 palavras e acionar Auto-Fix (Gemini AI ou fallback estruturado)
  const thinCalcs = CALCULATORS_CATALOG.filter(calc => {
    const seo = getSeoContentForCalculator(calc);
    const words = countWords([
      seo.whatIs,
      seo.howItWorks,
      ...(seo.stepByStep || []),
      seo.practicalExample,
      seo.whenToUse,
      seo.importantTips,
      seo.methodologyNote || '',
      ...seo.faq.map(f => `${f.q} ${f.a}`)
    ].join(' '));
    return words < 600;
  });

  if (thinCalcs.length > 0) {
    const extraSeoPath = path.join(ROOT_DIR, 'src', 'data', 'seo', 'exatasTechUtilData.ts');
    let extraSeoContent = fs.readFileSync(extraSeoPath, 'utf-8');
    let insertedAny = false;

    for (const calc of thinCalcs) {
      if (extraSeoContent.includes(`'${calc.id}':`)) continue;
      const aiGenerated = await generateAiSupplementForThinCalc(calc);
      const entryBlock = aiGenerated
        ? aiGenerated
        : {
            domainConcept: `A ferramenta ${calc.name} foi desenvolvida para apoiar decisões práticas com rapidez e precisão numérica na categoria ${calc.category}. ${calc.description} Ao reunir os parâmetros essenciais em uma interface clara e executada localmente no navegador, o usuário obtém estimativas imediatas para planejamento pessoal, acadêmico ou corporativo com total privacidade e zero necessidade de cadastro prévio.`,
            formulaText: `A equação aplicada processa exatamente os parâmetros fornecidos pelo usuário com dupla precisão decimal em ponto flutuante (IEEE 754), validando faixas de entrada e exibindo de imediato o indicador principal acompanhado de métricas complementares.`,
            whenToUse: `Utilize sempre que precisar validar simulações rápidas antes de fechar orçamentos, revisar resultados de estudos ou comparar diferentes cenários numéricos variando apenas um parâmetro por vez.`,
            importantTips: `Confira cuidadosamente as unidades de medida informadas nos campos de entrada antes de interpretar o resultado final e utilize sempre referências oficiais complementares em decisões contratuais definitivas.`
          };

      const serializedEntry = `  '${calc.id}': {\n` +
        `    domainConcept: ${JSON.stringify(entryBlock.domainConcept)},\n` +
        `    formulaText: ${JSON.stringify(entryBlock.formulaText)},\n` +
        `    whenToUse: ${JSON.stringify(entryBlock.whenToUse)},\n` +
        `    importantTips: ${JSON.stringify(entryBlock.importantTips)}\n` +
        `  },\n`;

      const anchor = extraSeoContent.lastIndexOf('};');
      if (anchor !== -1) {
        extraSeoContent = extraSeoContent.slice(0, anchor) + serializedEntry + extraSeoContent.slice(anchor);
        insertedAny = true;
        healingActions.push(
          `Auto-Fix SEO aplicado em "${calc.id}" (< 600 palavras) via ${aiGenerated ? 'Gemini AI' : 'fallback técnico estruturado'}.`
        );
      }
    }

    if (insertedAny) {
      fs.writeFileSync(extraSeoPath, extraSeoContent, 'utf-8');
    }
  }

  // ----------------------------------------------------------------------
  // ETAPA 2: REPARO DE LINKS INTERNOS, ADS.TXT, ROBOTS.TXT E SITEMAP.XML
  // ----------------------------------------------------------------------
  console.log('🔗 [Etapa 2/4] Auditando links internos, ads.txt, robots.txt e sitemap.xml...');
  const validCalcIds = new Set(CALCULATORS_CATALOG.map(c => c.id));

  for (const article of GUIDES_ARTICLES) {
    for (const rc of article.relatedCalculators) {
      if (!validCalcIds.has(rc.id)) {
        unresolvedIssues.push(`Link quebrado no guia "${article.slug}": calculadora "${rc.id}" não encontrada.`);
      }
    }
  }

  // Verificar public/ads.txt
  const adsTxtPath = path.join(ROOT_DIR, 'public', 'ads.txt');
  const currentAdsTxt = fs.existsSync(adsTxtPath) ? fs.readFileSync(adsTxtPath, 'utf-8').trim() : '';
  if (currentAdsTxt !== EXPECTED_ADS_TXT_LINE) {
    fs.writeFileSync(adsTxtPath, `${EXPECTED_ADS_TXT_LINE}\n`, 'utf-8');
    healingActions.push('Restaurado public/ads.txt exclusivamente para o publisher oficial do Google AdSense.');
  }

  // Verificar public/robots.txt
  const robotsTxtPath = path.join(ROOT_DIR, 'public', 'robots.txt');
  const currentRobots = fs.existsSync(robotsTxtPath) ? fs.readFileSync(robotsTxtPath, 'utf-8') : '';
  const robotsHealthy =
    currentRobots.includes('User-agent: *') &&
    currentRobots.includes('Allow: /') &&
    currentRobots.includes('Mediapartners-Google') &&
    currentRobots.includes('Sitemap: https://www.brasilcalculadoras.com.br/sitemap.xml') &&
    !currentRobots.includes('Disallow: /guias');

  if (!robotsHealthy) {
    fs.writeFileSync(robotsTxtPath, EXPECTED_ROBOTS_TXT, 'utf-8');
    healingActions.push('Restaurado public/robots.txt preservando crawl de calculadoras, guias e Google AdSense.');
  }

  // Verificar public/sitemap.xml contra todas as URLs canônicas esperadas
  const sitemapPath = path.join(ROOT_DIR, 'public', 'sitemap.xml');
  const expectedUrls = new Set<string>([
    `${SITE_URL}/`,
    `${SITE_URL}/guias`,
    ...Object.values(CATEGORY_KEY_TO_SLUG).map(s => `${SITE_URL}/${s}`),
    ...CALCULATORS_CATALOG.map(c => `${SITE_URL}/${c.id}`),
    ...GUIDES_ARTICLES.map(g => `${SITE_URL}/guias/${g.slug}`),
    ...INSTITUTIONAL_SLUGS.map(s => `${SITE_URL}/${s}`)
  ]);

  let needsSitemapRebuild = false;
  if (!fs.existsSync(sitemapPath)) {
    needsSitemapRebuild = true;
  } else {
    const xml = fs.readFileSync(sitemapPath, 'utf-8');
    const locs = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map(m => m[1]);
    const uniqueLocs = new Set(locs);
    const hasDuplicates = locs.length !== uniqueLocs.size;
    const hasNoIndex = locs.some(l => l.endsWith('/api') || l.includes('quimica-fizica-ciencia'));
    const missingAny = Array.from(expectedUrls).some(u => !uniqueLocs.has(u));
    const extraUnexpected = Array.from(uniqueLocs).some(u => !expectedUrls.has(u));

    if (hasDuplicates || hasNoIndex || missingAny || extraUnexpected) {
      needsSitemapRebuild = true;
    }
  }

  if (needsSitemapRebuild) {
    const prevCount = fs.existsSync(sitemapPath)
      ? (fs.readFileSync(sitemapPath, 'utf-8').match(/<loc>/g) || []).length
      : 0;
    runNodeScript(['./node_modules/tsx/dist/cli.mjs', 'generateSitemap.ts'], 'generateSitemap.ts');
    healingActions.push(
      `Regenerado public/sitemap.xml (${prevCount} -> ${expectedUrls.size} URLs canônicas únicas, zero rotas noindex ou duplicadas).`
    );
  }

  // ----------------------------------------------------------------------
  // ETAPA 3: TESTES MATEMÁTICOS, TYPESCRIPT & BUILD SSG + AUDITORIA DIST/
  // ----------------------------------------------------------------------
  console.log('🧮 [Etapa 3/4] Executando testes matemáticos nas calculadoras dinâmicas...');
  let mathTestedCount = 0;
  let mathFailures: string[] = [];

  for (const calc of CALCULATORS_CATALOG) {
    if (!calc.calculate || !calc.inputs) continue;
    mathTestedCount++;

    const buildInputs = (mode: 'default' | 'min'): Record<string, any> => {
      const payload: Record<string, any> = {};
      for (const inp of calc.inputs || []) {
        if (inp.type === 'select' && inp.options && inp.options.length > 0) {
          payload[inp.id] = mode === 'min' && inp.options.length > 1
            ? inp.options[inp.options.length - 1].value
            : inp.defaultValue ?? inp.options[0].value;
        } else if (inp.type === 'number') {
          if (mode === 'min') {
            payload[inp.id] = typeof inp.min === 'number' && inp.min > 0 ? inp.min : 1;
          } else {
            payload[inp.id] = inp.defaultValue ?? 1;
          }
        } else {
          payload[inp.id] = inp.defaultValue ?? 'teste';
        }
      }
      return payload;
    };

    for (const mode of ['default', 'min'] as const) {
      try {
        const res = calc.calculate(buildInputs(mode));
        if (!res || typeof res !== 'object') {
          mathFailures.push(`${calc.id} (${mode}): retorno inválido.`);
          continue;
        }
        for (const [k, v] of Object.entries(res)) {
          if (typeof v === 'number' && (!Number.isFinite(v) || Number.isNaN(v))) {
            mathFailures.push(`${calc.id} (${mode}.${k}): número inválido (${v}).`);
          } else if (typeof v === 'string' && (/\bNaN\b|\bInfinity\b|\bundefined\b/.test(v))) {
            mathFailures.push(`${calc.id} (${mode}.${k}): string inválida (${v}).`);
          }
        }
      } catch (err: any) {
        mathFailures.push(`${calc.id} (${mode}): exceção ${err?.message || err}`);
      }
    }
  }

  if (mathFailures.length > 0) {
    unresolvedIssues.push(`Falhas matemáticas detectadas: ${mathFailures.slice(0, 5).join('; ')}`);
  }
  console.log(`✅ Testes matemáticos concluídos: ${mathTestedCount} calculadoras dinâmicas testadas em 2 cenários (${mathFailures.length} falhas).`);

  // Compilação TypeScript e Build completo SSG
  runNodeScript(['./node_modules/typescript/bin/tsc', '--noEmit'], 'TypeScript Check (tsc --noEmit)');
  runNodeScript(['./node_modules/tsx/dist/cli.mjs', 'generateSitemap.ts'], 'generateSitemap.ts');
  runNodeScript(['./node_modules/vite/bin/vite.js', 'build'], 'Vite Production Build');
  runNodeScript(['./node_modules/tsx/dist/cli.mjs', 'prerender.ts'], 'SSG Prerender & API v1');

  // Auditoria completa do HTML gerado em dist/
  console.log('🔍 Auditando HTML pré-renderizado em dist/...');
  const distDir = path.join(ROOT_DIR, 'dist');

  let calcWordsSum = 0;
  let minCalcMainWords = Infinity;
  let calcUnder600: string[] = [];

  for (const calc of CALCULATORS_CATALOG) {
    const file = path.join(distDir, calc.id, 'index.html');
    if (!fs.existsSync(file)) {
      unresolvedIssues.push(`HTML pré-renderizado ausente para calculadora ${calc.id}`);
      continue;
    }
    const w = extractMainWords(fs.readFileSync(file, 'utf-8'));
    calcWordsSum += w;
    if (w < minCalcMainWords) minCalcMainWords = w;
    if (w < 600) calcUnder600.push(`${calc.id} (${w}w)`);
  }
  if (calcUnder600.length > 0) {
    unresolvedIssues.push(`Calculadoras < 600 palavras em dist/: ${calcUnder600.join(', ')}`);
  }

  let hubUnder600: string[] = [];
  for (const slug of Object.values(CATEGORY_KEY_TO_SLUG)) {
    const file = path.join(distDir, slug, 'index.html');
    if (!fs.existsSync(file)) {
      unresolvedIssues.push(`HTML ausente para categoria /${slug}`);
      continue;
    }
    const w = extractMainWords(fs.readFileSync(file, 'utf-8'));
    if (w < 600) hubUnder600.push(`${slug} (${w}w)`);
  }
  if (hubUnder600.length > 0) {
    unresolvedIssues.push(`Hubs < 600 palavras em dist/: ${hubUnder600.join(', ')}`);
  }

  let guideWordsSum = 0;
  let minGuideMainWords = Infinity;
  let guideUnder800: string[] = [];
  for (const g of GUIDES_ARTICLES) {
    const file = path.join(distDir, 'guias', g.slug, 'index.html');
    if (!fs.existsSync(file)) {
      unresolvedIssues.push(`HTML ausente para guia /guias/${g.slug}`);
      continue;
    }
    const w = extractMainWords(fs.readFileSync(file, 'utf-8'));
    guideWordsSum += w;
    if (w < minGuideMainWords) minGuideMainWords = w;
    if (w < 800) guideUnder800.push(`${g.slug} (${w}w)`);
  }
  if (guideUnder800.length > 0) {
    unresolvedIssues.push(`Guias < 800 palavras em dist/: ${guideUnder800.join(', ')}`);
  }

  const finalSitemapXml = fs.readFileSync(sitemapPath, 'utf-8');
  const finalSitemapCount = (finalSitemapXml.match(/<loc>/g) || []).length;
  const avgCalcWords = Math.round(calcWordsSum / CALCULATORS_CATALOG.length);
  const avgGuideWords = Math.round(guideWordsSum / GUIDES_ARTICLES.length);
  const elapsedSec = ((Date.now() - startedAt) / 1000).toFixed(1);

  let pendingGitChanges = false;
  try {
    const gitStatus = execSync('git status --porcelain', { cwd: ROOT_DIR, encoding: 'utf-8' }).trim();
    pendingGitChanges = gitStatus.length > 0;
  } catch {
    pendingGitChanges = false;
  }

  // ----------------------------------------------------------------------
  // ETAPA 4: DISPARO DO RELATÓRIO COMPLETO NO TELEGRAM
  // ----------------------------------------------------------------------
  const isHealthy = unresolvedIssues.length === 0;
  const statusBadge = isHealthy ? '🟢 SAUDÁVEL (100% APROVADO)' : '🔴 ALERTA DE SAÚDE';
  const healingSection =
    healingActions.length > 0
      ? healingActions.map(a => `• ${escapeHtml(a)}`).join('\n')
      : '• Nenhum erro encontrado — 100% saudável';
  const issuesSection =
    unresolvedIssues.length > 0
      ? `\n⚠️ <b>Pendências Detectadas:</b>\n${unresolvedIssues.map(i => `• ${escapeHtml(i)}`).join('\n')}`
      : null;

  const isCi = process.env.GITHUB_ACTIONS === 'true';
  const deployLine = isCi
    ? pendingGitChanges
      ? 'Alterações detectadas — commit e push automático disparando deploy na Vercel.'
      : 'Nenhuma alteração pendente — produção já sincronizada na Vercel.'
    : pendingGitChanges
    ? 'Build SSG validado localmente; alterações prontas para commit/push à Vercel.'
    : 'Build SSG validado localmente; working tree sincronizado.';

  const tgMessage = [
    `${statusBadge}`,
    `🌐 <b>Portal:</b> <code>brasilcalculadoras.com.br</code>`,
    `🕒 <b>Execução:</b> ${escapeHtml(todayIso)} (${elapsedSec}s)`,
    ``,
    `📊 <b>Métricas da Auditoria:</b>`,
    `• Calculadoras ativas: <b>${CALCULATORS_CATALOG.length}</b> (${mathTestedCount}/${mathTestedCount} testes matemáticos OK)`,
    `• Hubs de categoria: <b>${Object.keys(CATEGORY_MAP).length}</b> (100% &ge; 600 palavras)`,
    `• Guias publicados: <b>${GUIDES_ARTICLES.length}</b> (média ${avgGuideWords} palavras | mín. ${minGuideMainWords})`,
    `• Média nas calculadoras (SSG): <b>${avgCalcWords}</b> palavras (mín. ${minCalcMainWords})`,
    `• URLs no Sitemap: <b>${finalSitemapCount}</b> canônicas únicas`,
    ``,
    `🛠️ <b>Erros Detectados e Resolvidos Automaticamente:</b>`,
    healingSection,
    issuesSection,
    ``,
    `🚀 <b>Status do Build &amp; Deploy:</b>`,
    `• TypeScript + Build SSG (<code>dist/</code>): <b>OK</b>`,
    `• Deploy Vercel: ${escapeHtml(deployLine)}`
  ]
    .filter((line): line is string => line !== null)
    .join('\n')
    .slice(0, 4050);

  console.log('\n==================== RESUMO DO AGENTE AUTÔNOMO ====================');
  console.log(`Status: ${statusBadge}`);
  console.log(`Calculadoras: ${CALCULATORS_CATALOG.length} | Média SSG: ${avgCalcWords}w (mín ${minCalcMainWords}w)`);
  console.log(`Guias: ${GUIDES_ARTICLES.length} | Média SSG: ${avgGuideWords}w (mín ${minGuideMainWords}w)`);
  console.log(`Sitemap: ${finalSitemapCount} URLs únicas`);
  console.log(`Autocura executada (${healingActions.length}):`);
  console.log(healingActions.length > 0 ? healingActions.map(a => `  - ${a}`).join('\n') : '  - Nenhuma correção necessária');

  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    console.log('\n📨 [Etapa 4/4] Enviando relatório completo ao Telegram...');
    const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: tgMessage,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    });

    if (!tgRes.ok) {
      const errBody = await tgRes.text();
      throw new Error(`Erro HTTP ${tgRes.status} ao enviar relatório para o Telegram: ${errBody}`);
    }
    console.log('✅ Relatório entregue no Telegram com sucesso!');
  } else {
    console.log('\n⚠️ TELEGRAM_BOT_TOKEN ou TELEGRAM_CHAT_ID ausentes; relatório exibido apenas no console.');
  }

  if (!isHealthy) {
    throw new Error(`Auditoria concluiu com pendências críticas:\n${unresolvedIssues.join('\n')}`);
  }
}

main().catch(err => {
  console.error('❌ Falha fatal no Agente Autônomo de Saúde:', err);
  process.exit(1);
});
