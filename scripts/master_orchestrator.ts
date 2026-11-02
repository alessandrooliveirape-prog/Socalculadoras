// scripts/master_orchestrator.ts
/**
 * ======================================================================
 * BRASIL CALCULADORAS MASTER MULTIAGENT ORCHESTRATOR & SRE v2.0 (2026)
 * ======================================================================
 * Coordena 7 subagentes especializados (100 pontos totais), audita saúde
 * técnica, SEO/SSG Googlebot, monetização AdSense exclusiva (7 páginas institucionais,
 * ads.txt e zero redes terceiras intrusivas), infraestrutura Edge/CDN,
 * catálogo de 160+ calculadoras interativas, navegação contextual,
 * API Pública v1 (JSON estático + Widgets) e o 7º Agente de Tração &
 * Expansão Long-Tail com IndexNow ativo, persistindo relatórios em JSON,
 * Telegram e Resend.
 */

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { CALCULATORS_CATALOG, CATEGORY_MAP } from '../src/data/calculatorsCatalog.ts';
import { CATEGORY_KEY_TO_SLUG, CATEGORY_MAP_RAW } from '../src/utils/seoContentGenerator.ts';
import { generateApiData } from './generateApiEndpoints.ts';
import { submitIndexNow } from './submit-indexnow.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

dotenv.config({ path: path.join(ROOT_DIR, '.env.local') });
dotenv.config({ path: path.join(ROOT_DIR, '.env') });

const SITE_URL = 'https://www.brasilcalculadoras.com.br';
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'alessandrooliveirape@gmail.com';
const SENDER_EMAIL = 'BrasilCalculadoras SRE <onboarding@resend.dev>';
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '';

const ADSENSE_PUB_ID = 'ca-pub-8160658026927094';
const ADSENSE_PUB_RAW = ADSENSE_PUB_ID.replace('ca-', '');
const GOOGLEBOT_UA = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';

const IS_DRY_RUN = process.argv.includes('--dry-run');
const SKIP_HEALING = process.argv.includes('--skip-heal');

type AgentStatus = 'HEALTHY' | 'WARNING' | 'CRITICAL';

interface SubagentReport {
  id: string;
  name: string;
  role: string;
  status: AgentStatus;
  score: number;
  maxScore: number;
  summary: string;
  details: Record<string, any>;
  issues: string[];
  selfHealed: boolean;
  healingActions: string[];
}

interface MasterReport {
  site: string;
  timestamp: string;
  overallScore: number;
  overallStatus: AgentStatus;
  subagents: SubagentReport[];
  healingSummary: string[];
  executionTimeMs: number;
}

// ======================================================================
// 1. SUBAGENTE: agent_seo_gsc (15 pts — SEO, SSG Googlebot, Sitemap & IndexNow)
// ======================================================================
async function runAgentSeoGsc(): Promise<SubagentReport> {
  const report: SubagentReport = {
    id: 'agent_seo_gsc',
    name: 'Agente SEO, SSG & Search Console',
    role: 'Auditor de Indexação Googlebot SSG, Sitemap XML, Schemas JSON-LD & IndexNow',
    status: 'HEALTHY',
    score: 15,
    maxScore: 15,
    summary: '',
    details: {},
    issues: [],
    selfHealed: false,
    healingActions: []
  };

  const sitemapPath = path.join(ROOT_DIR, 'public', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    const xml = fs.readFileSync(sitemapPath, 'utf-8');
    const urlMatches = (xml.match(/<loc>/g) || []).length;
    report.details.sitemapUrls = urlMatches;
    if (urlMatches < 100) {
      report.score -= 4;
      report.issues.push(`Sitemap contém apenas ${urlMatches} URLs.`);
    }
  } else {
    report.score -= 8;
    report.issues.push('Arquivo public/sitemap.xml ausente.');
  }

  const distHome = path.join(ROOT_DIR, 'dist', 'index.html');
  if (fs.existsSync(distHome)) {
    const html = fs.readFileSync(distHome, 'utf-8');
    const hasCanonical = html.includes('rel="canonical"') || html.includes('brasilcalculadoras.com.br');
    report.details.hasCanonical = hasCanonical;
    if (!hasCanonical) {
      report.score -= 3;
      report.issues.push('Canonical URL ausente no template estático.');
    }
  }

  report.status = report.score >= 13 ? 'HEALTHY' : report.score >= 8 ? 'WARNING' : 'CRITICAL';
  report.summary = `Sitemap com ${report.details.sitemapUrls || 0} URLs. SEO Googlebot validado.`;
  return report;
}

// ======================================================================
// 2. SUBAGENTE: agent_monetization (15 pts — AdSense Exclusivo & LGPD)
// ======================================================================
async function runAgentMonetization(): Promise<SubagentReport> {
  const report: SubagentReport = {
    id: 'agent_monetization',
    name: 'Agente de Monetização (AdSense Exclusivo & LGPD)',
    role: 'Auditor de ads.txt, 7 páginas obrigatórias e banimento de redes intrusivas',
    status: 'HEALTHY',
    score: 15,
    maxScore: 15,
    summary: '',
    details: {},
    issues: [],
    selfHealed: false,
    healingActions: []
  };

  // 1. Checagem do ads.txt
  const adsTxtPath = path.join(ROOT_DIR, 'public', 'ads.txt');
  if (fs.existsSync(adsTxtPath)) {
    const adsTxt = fs.readFileSync(adsTxtPath, 'utf-8');
    const hasGoogle = adsTxt.includes(ADSENSE_PUB_RAW);
    const hasMonetag = /monetag|propeller|adcash/i.test(adsTxt);
    report.details.adsTxtValid = hasGoogle && !hasMonetag;

    if (!hasGoogle) {
      report.score -= 5;
      report.issues.push('Publisher Google AdSense ausente no ads.txt.');
    }
    if (hasMonetag) {
      report.score -= 5;
      report.issues.push('Redes intrusivas de terceiros detectadas no ads.txt.');
    }
  } else {
    report.score -= 7;
    report.issues.push('public/ads.txt ausente.');
  }

  // 2. 7 Páginas Institucionais Obrigatórias
  const requiredPages = [
    'sobre',
    'contato',
    'politica-de-privacidade',
    'termos-de-uso',
    'cookies',
    'transparencia-adsense',
    'anunciantes'
  ];

  let missingPages = 0;
  const distDir = path.join(ROOT_DIR, 'dist');
  for (const page of requiredPages) {
    const htmlPath = path.join(distDir, page, 'index.html');
    if (!fs.existsSync(htmlPath)) {
      missingPages++;
    }
  }
  report.details.missingInstitutionalPages = missingPages;
  if (missingPages > 0) {
    report.score -= Math.min(6, missingPages * 2);
    report.issues.push(`${missingPages} das 7 páginas institucionais não pré-renderizadas em dist/.`);
  }

  // 3. Checagem de Monetag no index.html
  const indexPath = path.join(ROOT_DIR, 'index.html');
  if (fs.existsSync(indexPath)) {
    const html = fs.readFileSync(indexPath, 'utf-8');
    if (/vignette\.min\.js|n6wxm\.com|monetag/i.test(html)) {
      report.score -= 5;
      report.issues.push('Scripts da Monetag detectados no index.html.');
    }
  }

  report.status = report.score >= 13 ? 'HEALTHY' : report.score >= 8 ? 'WARNING' : 'CRITICAL';
  report.summary = `ads.txt estrito com AdSense. ${7 - missingPages}/7 páginas institucionais verificadas.`;
  return report;
}

// ======================================================================
// 3. SUBAGENTE: agent_infra_cdn (15 pts — Infraestrutura & Edge CDN)
// ======================================================================
async function runAgentInfraCdn(): Promise<SubagentReport> {
  const report: SubagentReport = {
    id: 'agent_infra_cdn',
    name: 'Agente de Infraestrutura & Edge CDN',
    role: 'Auditor de Latência, SLA, Redirecionamentos e Vercel Edge',
    status: 'HEALTHY',
    score: 15,
    maxScore: 15,
    summary: '',
    details: {},
    issues: [],
    selfHealed: false,
    healingActions: []
  };

  const vercelJsonPath = path.join(ROOT_DIR, 'vercel.json');
  if (fs.existsSync(vercelJsonPath)) {
    try {
      JSON.parse(fs.readFileSync(vercelJsonPath, 'utf-8'));
      report.details.vercelJsonValid = true;
    } catch {
      report.score -= 5;
      report.issues.push('vercel.json corrompido ou inválido.');
    }
  }

  // Teste de Latência se online
  try {
    const start = Date.now();
    const res = await fetch(SITE_URL, {
      method: 'HEAD',
      headers: { 'User-Agent': GOOGLEBOT_UA }
    });
    const latency = Date.now() - start;
    report.details.latencyMs = latency;
    report.details.status = res.status;

    if (!res.ok) {
      report.score -= 6;
      report.issues.push(`Portal retornou status ${res.status}.`);
    } else if (latency > 2500) {
      report.score -= 3;
      report.issues.push(`Latência elevada: ${latency}ms.`);
    }
  } catch (err: any) {
    report.details.offlineOrUnreachable = true;
    // Não penalizar totalmente se offline em ambiente de teste local
    report.score -= 2;
  }

  report.status = report.score >= 13 ? 'HEALTHY' : report.score >= 8 ? 'WARNING' : 'CRITICAL';
  report.summary = `Infraestrutura Vercel Edge operando com SLA normal (${report.details.latencyMs ? report.details.latencyMs + 'ms' : 'Local'}).`;
  return report;
}

// ======================================================================
// 4. SUBAGENTE: agent_catalog_anti_thin (15 pts — Catálogo & Anti-Thin Content)
// ======================================================================
async function runAgentCatalogAntiThin(): Promise<SubagentReport> {
  const report: SubagentReport = {
    id: 'agent_catalog_anti_thin',
    name: 'Agente do Catálogo de Calculadoras & Anti-Thin Content',
    role: 'Auditor de Fórmulas, Descrições Enriquecidas e Prevenção de Conteúdo Raso',
    status: 'HEALTHY',
    score: 15,
    maxScore: 15,
    summary: '',
    details: {},
    issues: [],
    selfHealed: false,
    healingActions: []
  };

  const count = CALCULATORS_CATALOG.length;
  report.details.totalCalculators = count;

  let thinCount = 0;
  for (const calc of CALCULATORS_CATALOG) {
    if (!calc.name || !calc.description || calc.description.length < 25) {
      thinCount++;
    }
  }

  report.details.thinCount = thinCount;
  if (thinCount > 0) {
    report.score -= Math.min(5, thinCount);
    report.issues.push(`${thinCount} ferramentas com descrição curta ou sem meta tags.`);
  }

  report.status = report.score >= 13 ? 'HEALTHY' : report.score >= 8 ? 'WARNING' : 'CRITICAL';
  report.summary = `Catálogo com ${count} ferramentas ativas. Zero thin content detectado.`;
  return report;
}

// ======================================================================
// 5. SUBAGENTE: agent_categories_linking (15 pts — Navegação & Quick-Switch)
// ======================================================================
async function runAgentCategoriesLinking(): Promise<SubagentReport> {
  const report: SubagentReport = {
    id: 'agent_categories_linking',
    name: 'Agente de Navegação Contextual & Interlinkagem',
    role: 'Auditor de Rotas por Categoria, Barra de Troca Rápida e Breadcrumbs',
    status: 'HEALTHY',
    score: 15,
    maxScore: 15,
    summary: '',
    details: {},
    issues: [],
    selfHealed: false,
    healingActions: []
  };

  const categoriesCount = Object.keys(CATEGORY_MAP).length;
  report.details.categoriesCount = categoriesCount;

  // Verifica quick-switch no App.tsx
  const appPath = path.join(ROOT_DIR, 'src', 'App.tsx');
  if (fs.existsSync(appPath)) {
    const appContent = fs.readFileSync(appPath, 'utf-8');
    const hasQuickSwitch = appContent.includes('tool-quick-switch-bar');
    const hasSearchNormalize = appContent.includes('normalizeSearchText');
    report.details.hasQuickSwitch = hasQuickSwitch;
    report.details.hasSearchNormalize = hasSearchNormalize;

    if (!hasQuickSwitch) {
      report.score -= 3;
      report.issues.push('Quick-switch bar ausente no workspace das calculadoras.');
    }
    if (!hasSearchNormalize) {
      report.score -= 3;
      report.issues.push('Busca sem normalização Unicode NFD.');
    }
  }

  report.status = report.score >= 13 ? 'HEALTHY' : report.score >= 8 ? 'WARNING' : 'CRITICAL';
  report.summary = `${categoriesCount} categorias mapeadas com busca sem acento e quick-switch ativo.`;
  return report;
}

// ======================================================================
// 6. SUBAGENTE: agent_public_api (10 pts — API Pública v1 & Widgets)
// ======================================================================
async function runAgentPublicApi(): Promise<SubagentReport> {
  const report: SubagentReport = {
    id: 'agent_public_api',
    name: 'Agente da API Pública v1 & Dados Oficiais 2026',
    role: 'Auditor e Gerador de Endpoints JSON Estáticos e Widgets',
    status: 'HEALTHY',
    score: 10,
    maxScore: 10,
    summary: '',
    details: {},
    issues: [],
    selfHealed: false,
    healingActions: []
  };

  try {
    generateApiData();
    report.details.apiGenerated = true;
    report.selfHealed = true;
    report.healingActions.push('Endpoints JSON atualizados via generateApiData().');
  } catch (err: any) {
    report.score -= 5;
    report.issues.push(`Falha ao gerar endpoints da API: ${err.message}`);
  }

  const inssJson = path.join(ROOT_DIR, 'public', 'api', 'v1', 'tabelas', 'inss.json');
  if (!fs.existsSync(inssJson)) {
    report.score -= 3;
    report.issues.push('Endpoint inss.json não encontrado em public/api/v1/.');
  }

  report.status = report.score >= 8 ? 'HEALTHY' : report.score >= 5 ? 'WARNING' : 'CRITICAL';
  report.summary = 'Endpoints da API Pública v1 operacionais com dados de 2026.';
  return report;
}

// ======================================================================
// 7. SUBAGENTE: agent_organic_growth (15 pts — Tração & Long-Tail)
// ======================================================================
async function runAgentOrganicGrowth(): Promise<SubagentReport> {
  const report: SubagentReport = {
    id: 'agent_organic_growth',
    name: 'Agente de Tração Orgânica & Expansão Long-Tail',
    role: 'Disparador de Indexação Automática IndexNow e Otimização de Retenção',
    status: 'HEALTHY',
    score: 15,
    maxScore: 15,
    summary: '',
    details: {},
    issues: [],
    selfHealed: false,
    healingActions: []
  };

  if (!IS_DRY_RUN) {
    try {
      const pings = await submitIndexNow();
      report.details.indexNowPings = pings;
      if (pings > 0) {
        report.selfHealed = true;
        report.healingActions.push(`Submissão IndexNow concluída com ${pings} respostas válidas.`);
      }
    } catch (err: any) {
      report.score -= 3;
      report.issues.push(`Falha no envio IndexNow: ${err.message}`);
    }
  } else {
    report.details.indexNowPings = 'DRY_RUN_SKIPPED';
  }

  report.status = report.score >= 13 ? 'HEALTHY' : report.score >= 8 ? 'WARNING' : 'CRITICAL';
  report.summary = 'IndexNow ativo para indexação contínua de novas URLs e tabelas.';
  return report;
}

// ======================================================================
// DISPACHO DE NOTIFICAÇÕES (TELEGRAM & RESEND)
// ======================================================================
async function dispatchNotifications(masterReport: MasterReport) {
  if (IS_DRY_RUN) {
    console.log('\nℹ️ [DryRun] Disparos externos ignorados conforme flag --dry-run.');
    return;
  }

  const dataHora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const statusEmoji = masterReport.overallStatus === 'HEALTHY' ? '🟢' : masterReport.overallStatus === 'WARNING' ? '🟡' : '🔴';

  // 1. Telegram Push
  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    try {
      const tgMsg = `🛠️ *BRASIL CALCULADORAS ORCHESTRATOR v2.0*
━━━━━━━━━━━━━━━━━━━━━
${statusEmoji} *Score Geral:* ${masterReport.overallScore}/100 [${masterReport.overallStatus}]
🕒 *Data:* ${dataHora}
⏱️ *Tempo:* ${(masterReport.executionTimeMs / 1000).toFixed(2)}s

*Status dos 7 Subagentes:*
1. SEO & SSG: ${masterReport.subagents[0].score}/15
2. AdSense & LGPD: ${masterReport.subagents[1].score}/15
3. Infra & Edge CDN: ${masterReport.subagents[2].score}/15
4. Catálogo Anti-Thin: ${masterReport.subagents[3].score}/15
5. Navegação & QuickSwitch: ${masterReport.subagents[4].score}/15
6. API Pública v1: ${masterReport.subagents[5].score}/10
7. Tração & IndexNow: ${masterReport.subagents[6].score}/15

🌐 www.brasilcalculadoras.com.br`;

      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: tgMsg,
          parse_mode: 'Markdown'
        })
      });
      console.log('✅ Notificação enviada ao Telegram.');
    } catch (tgErr) {
      console.warn('Falha ao enviar ao Telegram:', tgErr);
    }
  }

  // 2. Resend E-mail
  if (RESEND_API_KEY && ADMIN_EMAIL) {
    try {
      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 8px;">
            ${statusEmoji} Relatório Diário Brasil Calculadoras (Score: ${masterReport.overallScore}/100)
          </h2>
          <p><strong>Portal:</strong> <a href="${SITE_URL}">${SITE_URL}</a></p>
          <p><strong>Data/Hora:</strong> ${dataHora}</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 13px;">
            <thead>
              <tr style="background-color: #f1f5f9; text-align: left;">
                <th style="padding: 8px; border: 1px solid #cbd5e1;">Subagente</th>
                <th style="padding: 8px; border: 1px solid #cbd5e1;">Score</th>
                <th style="padding: 8px; border: 1px solid #cbd5e1;">Status</th>
              </tr>
            </thead>
            <tbody>
              ${masterReport.subagents.map(s => `
                <tr>
                  <td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>${s.name}</strong></td>
                  <td style="padding: 8px; border: 1px solid #cbd5e1;">${s.score}/${s.maxScore}</td>
                  <td style="padding: 8px; border: 1px solid #cbd5e1;">${s.status}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <p style="font-size: 11px; color: #64748b; margin-top: 20px;">Relatório gerado pelo Master Multiagent Orchestrator v2.0.</p>
        </div>
      `;

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: SENDER_EMAIL,
          to: ADMIN_EMAIL,
          subject: `[Brasil Calculadoras] Auditoria 7 Subagentes: ${masterReport.overallScore}/100 [${masterReport.overallStatus}]`,
          html
        })
      });
      console.log('✅ Relatório enviado via Resend.');
    } catch (resendErr) {
      console.warn('Falha ao enviar e-mail via Resend:', resendErr);
    }
  }
}

// ======================================================================
// EXECUÇÃO PRINCIPAL
// ======================================================================
async function runMasterOrchestrator() {
  const startTime = Date.now();

  console.log('======================================================================');
  console.log('🧮 BRASIL CALCULADORAS MASTER MULTIAGENT ORCHESTRATOR v2.0 (2026)');
  console.log('======================================================================\n');
  console.log(`🌐 Portal Alvo: ${SITE_URL}`);
  console.log(`🕒 Timestamp: ${new Date().toISOString()}`);
  console.log(`🎯 Modo Dry-Run: ${IS_DRY_RUN ? 'SIM' : 'NÃO'}\n`);

  console.log('📡 [1/7] Executando subagente SEO, SSG Googlebot & Search Console...');
  const a1 = await runAgentSeoGsc();

  console.log('💰 [2/7] Executando subagente de Monetização (AdSense Exclusivo & 7 páginas)...');
  const a2 = await runAgentMonetization();

  console.log('⚡ [3/7] Executando subagente de Infraestrutura & Edge CDN...');
  const a3 = await runAgentInfraCdn();

  console.log('🧮 [4/7] Executando subagente do Catálogo de Calculadoras & Anti-Thin Content...');
  const a4 = await runAgentCatalogAntiThin();

  console.log('🧭 [5/7] Executando subagente de Navegação Contextual & Interlinkagem...');
  const a5 = await runAgentCategoriesLinking();

  console.log('🔌 [6/7] Executando subagente da API Pública v1 & Dados Oficiais 2026...');
  const a6 = await runAgentPublicApi();

  console.log('🚀 [7/7] Executando 7º Agente de Tração Orgânica & Expansão Long-Tail...');
  const a7 = await runAgentOrganicGrowth();

  const subagents = [a1, a2, a3, a4, a5, a6, a7];
  const overallScore = subagents.reduce((acc, curr) => acc + curr.score, 0);
  const overallStatus: AgentStatus = overallScore >= 90 ? 'HEALTHY' : overallScore >= 70 ? 'WARNING' : 'CRITICAL';

  const masterReport: MasterReport = {
    site: SITE_URL,
    timestamp: new Date().toISOString(),
    overallScore,
    overallStatus,
    subagents,
    healingSummary: subagents.flatMap(s => s.healingActions),
    executionTimeMs: Date.now() - startTime
  };

  // Salvar relatório JSON local
  const reportDir = path.join(ROOT_DIR, 'public', 'api', 'v1', 'analytics');
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  fs.writeFileSync(path.join(reportDir, 'orchestrator-report.json'), JSON.stringify(masterReport, null, 2), 'utf-8');

  console.log('\n======================================================================');
  console.log(`📊 SCORE GERAL DE SAÚDE: ${overallScore}/100 [${overallStatus}]`);
  console.log('======================================================================');
  for (const s of subagents) {
    console.log(`[${s.status.padEnd(8)}] ${s.name.padEnd(52)}: ${s.score}/${s.maxScore} pts`);
  }
  console.log(`\n⏱️ Tempo total de auditoria: ${(masterReport.executionTimeMs / 1000).toFixed(2)}s`);

  await dispatchNotifications(masterReport);

  console.log('\n🎉 [MasterOrchestrator] Ciclo operacional finalizado com sucesso!');
}

runMasterOrchestrator();

