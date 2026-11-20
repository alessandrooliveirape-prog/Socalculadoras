import fs from 'fs';
import path from 'path';
import { CALCULATORS_CATALOG } from './src/data/calculatorsCatalog';
import {
  getSeoContentForCalculator,
  getCategoryHubContent,
  CATEGORY_KEY_TO_SLUG,
  CATEGORY_MAP_RAW,
  CATEGORY_HOME_DESCRIPTIONS
} from './src/utils/seoContentGenerator';
import { GUIDES_ARTICLES, getRelatedGuidesForCalculator } from './src/data/guidesArticles';
import { generateApiData } from './scripts/generateApiEndpoints';

const distPath = path.resolve('./dist');
const templatePath = path.join(distPath, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Template dist/index.html not found! Build the project first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function escapeHtml(text: string): string {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatBrDate(isoDate: string): string {
  const parts = (isoDate || '').split('-');
  if (parts.length !== 3) return isoDate;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const currentYear = new Date().getFullYear();

function buildHeaderHtml(_isHome = false): string {
  const logoBlock = `
    <div style="display: flex; align-items: center; gap: 10px;">
      <img src="/logo.svg" alt="" aria-hidden="true" width="36" height="36" style="height: 36px; width: 36px;" />
      <div>
        <strong style="font-size: 18px; color: #1e293b;">Brasil Calculadoras</strong><br/>
        <small style="color: #64748b; font-size: 10px; font-weight: bold;">FERRAMENTAS DE EXCELÊNCIA</small>
      </div>
    </div>
  `;

  return `
    <header style="padding: 16px 20px; border-bottom: 1px solid #e2e8f0; background: #ffffff; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; font-family: sans-serif;">
      <a href="/" style="text-decoration: none; color: inherit;">${logoBlock}</a>
      <nav aria-label="Navegação principal" style="display: flex; flex-wrap: wrap; align-items: center; gap: 16px; font-size: 13px; font-weight: 700;">
        <a href="/" style="color: #334155; text-decoration: none;">Início</a>
        <a href="/guias" style="color: #1d4ed8; background: #eff6ff; padding: 7px 12px; border-radius: 8px; text-decoration: none;">Guias &amp; Artigos</a>
        <a href="/sobre" style="color: #334155; text-decoration: none;">Sobre</a>
        <a href="/contato" style="color: #334155; text-decoration: none;">Contato</a>
      </nav>
    </header>
  `;
}

const sharedFooterHtml = `
  <footer style="background: #0f172a; color: #94a3b8; padding: 45px 20px 30px; font-family: sans-serif; margin-top: 60px; border-top: 1px solid #1e293b;">
    <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px; margin-bottom: 35px;">
      <div>
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
          <img src="/logo.svg" alt="" aria-hidden="true" width="32" height="32" style="height: 32px; width: 32px;" />
          <strong style="color: #ffffff; font-size: 16px;">Brasil Calculadoras</strong>
        </div>
        <p style="font-size: 12.5px; line-height: 1.6; color: #94a3b8; margin: 0 0 15px;">
          Central utilitária de simuladores de alta precisão e guias educativos para finanças, trabalho CLT/PJ, saúde, engenharia e dia a dia. Ferramentas gratuitas, sem cadastro e 100% transparentes.
        </p>
      </div>

      <div>
        <h4 style="color: #ffffff; font-size: 14px; font-weight: 700; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.5px;">Institucional &amp; Editorial</h4>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px; line-height: 2;">
          <li><a href="/guias" style="color: #93c5fd; font-weight: 700; text-decoration: none;">Guias &amp; Artigos Educativos</a></li>
          <li><a href="/politica-de-privacidade" style="color: #cbd5e1; text-decoration: none;">Política de Privacidade (LGPD)</a></li>
          <li><a href="/cookies" style="color: #cbd5e1; text-decoration: none;">Política de Cookies</a></li>
          <li><a href="/termos-de-uso" style="color: #cbd5e1; text-decoration: none;">Termos e Condições de Uso</a></li>
          <li><a href="/sobre" style="color: #cbd5e1; text-decoration: none;">Sobre Nós &amp; Metodologia</a></li>
          <li><a href="/contato" style="color: #cbd5e1; text-decoration: none;">Contato &amp; Suporte</a></li>
          <li><a href="/anunciantes" style="color: #cbd5e1; text-decoration: none;">Mídia &amp; Anunciantes</a></li>
          <li><a href="/desenvolvedores" style="color: #cbd5e1; text-decoration: none;">API &amp; Desenvolvedores</a></li>
        </ul>
      </div>

      <div>
        <h4 style="color: #ffffff; font-size: 14px; font-weight: 700; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.5px;">Principais Categorias</h4>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px; line-height: 2;">
          <li><a href="/trabalhista-profissoes" style="color: #cbd5e1; text-decoration: none;">Cálculos Trabalhistas (CLT)</a></li>
          <li><a href="/financas-negocios" style="color: #cbd5e1; text-decoration: none;">Investimentos &amp; Finanças</a></li>
          <li><a href="/imobiliario-aluguel" style="color: #cbd5e1; text-decoration: none;">Imobiliário &amp; SAC/Price</a></li>
          <li><a href="/saude-dietas" style="color: #cbd5e1; text-decoration: none;">Saúde &amp; Metabolismo</a></li>
          <li><a href="/matematica-escola" style="color: #cbd5e1; text-decoration: none;">Matemática &amp; Proporções</a></li>
        </ul>
      </div>

      <div>
        <h4 style="color: #ffffff; font-size: 14px; font-weight: 700; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.5px;">Compromisso</h4>
        <p style="font-size: 12px; line-height: 1.6; color: #94a3b8; margin: 0 0 10px;">
          Nossas ferramentas operam com fórmulas abertas e parâmetros atualizados de 2026. Os resultados têm caráter exclusivamente educativo e orientativo.
        </p>
        <span style="display: inline-block; font-size: 11px; background: #1e293b; color: #38bdf8; padding: 4px 8px; border-radius: 6px; font-weight: 600;">
          Processamento 100% Local (Client-Side)
        </span>
      </div>
    </div>

    <div style="max-width: 1200px; margin: 0 auto; border-top: 1px solid #1e293b; padding-top: 20px; text-align: center; font-size: 12px; color: #64748b;">
      <p style="margin: 0;">&copy; ${currentYear} Brasil Calculadoras. Todos os direitos reservados.</p>
    </div>
  </footer>
`;

function injectMetadata(htmlTemplate: string, title: string, description: string, url: string, schema: any, bodyContent: string, ogType = 'website') {
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);
  const safeUrl = escapeHtml(url);

  let res = htmlTemplate;
  res = res.replace(/<title>[^<]*<\/title>/i, `<title>${safeTitle}</title>`);

  if (res.includes('name="description"')) {
    res = res.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${safeDesc}" />`);
  } else {
    res = res.replace('</head>', `<meta name="description" content="${safeDesc}" />\n</head>`);
  }

  if (res.includes('rel="canonical"')) {
    res = res.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${safeUrl}" />`);
  } else {
    res = res.replace('</head>', `<link rel="canonical" href="${safeUrl}" />\n</head>`);
  }

  if (res.includes('property="og:title"')) {
    res = res.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${safeTitle}" />`);
  } else {
    res = res.replace('</head>', `<meta property="og:title" content="${safeTitle}" />\n</head>`);
  }

  if (res.includes('property="og:description"')) {
    res = res.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${safeDesc}" />`);
  } else {
    res = res.replace('</head>', `<meta property="og:description" content="${safeDesc}" />\n</head>`);
  }

  if (res.includes('property="og:url"')) {
    res = res.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${safeUrl}" />`);
  } else {
    res = res.replace('</head>', `<meta property="og:url" content="${safeUrl}" />\n</head>`);
  }

  if (res.includes('property="og:type"')) {
    res = res.replace(/<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:type" content="${ogType}" />`);
  } else {
    res = res.replace('</head>', `<meta property="og:type" content="${ogType}" />\n</head>`);
  }

  if (schema && (Array.isArray(schema) ? schema.length > 0 : Object.keys(schema).length > 0)) {
    const safeJson = JSON.stringify(schema).replace(/</g, '\\u003c');
    const schemaScript = `<script type="application/ld+json" id="jsonld-seo">${safeJson}</script>`;
    res = res.replace('</head>', `${schemaScript}\n</head>`);
  }

  res = res.replace('<div id="root"></div>', `<div id="root">${bodyContent}</div>`);
  return res;
}

// 1. Pre-render Homepage
const homeTitle = 'Brasil Calculadoras | Calculadoras Online Gratuitas Finanças, Trabalho e Saúde';
const homeDesc = 'Calculadoras online gratuitas para finanças, trabalho, saúde, estudos, veículos e muito mais. Simulações rápidas, sem cadastro e 100% gratuitas.';
const homeUrl = 'https://www.brasilcalculadoras.com.br/';

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.brasilcalculadoras.com.br/#website",
      "name": "Brasil Calculadoras",
      "url": "https://www.brasilcalculadoras.com.br/",
      "description": homeDesc,
      "inLanguage": "pt-BR",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.brasilcalculadoras.com.br/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.brasilcalculadoras.com.br/#organization",
      "name": "Brasil Calculadoras",
      "url": "https://www.brasilcalculadoras.com.br/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.brasilcalculadoras.com.br/logo.svg"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "url": "https://www.brasilcalculadoras.com.br/contato",
        "availableLanguage": "Portuguese"
      }
    }
  ]
};

const homeHtml = `
  ${buildHeaderHtml(true)}
  <main style="max-width: 1200px; margin: 0 auto; padding: 20px; font-family: sans-serif;">
    <section style="text-align: center; padding: 55px 20px; background: #0f172a; color: white; border-radius: 24px; margin-bottom: 40px;">
      <h1 style="font-size: 32px; margin-bottom: 15px; font-weight: 900; line-height: 1.2;">Calculadoras online gratuitas para finanças, trabalho, saúde, estudos, veículos e muito mais.</h1>
      <p style="color: #cbd5e1; font-size: 16px; max-width: 760px; margin: 0 auto 20px; line-height: 1.6;">Central brasileira de simuladores precisos e guias práticos. Ferramentas sem burocracias, sem cadastro, processadas localmente e 100% atualizadas com as regras de 2026.</p>
      <a href="/guias" style="display: inline-block; background: #2563eb; color: #ffffff; padding: 11px 22px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 14px;">Explorar Guias e Artigos Educativos</a>
    </section>

    <section style="margin-bottom: 45px;">
      <h2 style="font-size: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; width: fit-content; margin-bottom: 20px; font-weight: 800; color: #0f172a;">Calculadoras mais acessadas</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 16px;"><a href="/juros-compostos" style="color: #1d4ed8; text-decoration: none; font-weight: bold;">Juros Compostos</a></h3>
          <p style="font-size: 13px; color: #475569; line-height: 1.5; margin-bottom: 0;">Calcule a evolução capital de investimentos com depósitos recorrentes, taxa mensal/anual e poder dos rendimentos compostos.</p>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 16px;"><a href="/clt-pj" style="color: #1d4ed8; text-decoration: none; font-weight: bold;">Comparador CLT vs PJ</a></h3>
          <p style="font-size: 13px; color: #475569; line-height: 1.5; margin-bottom: 0;">Compare remunerações líquidas de carteira assinada com 13º, férias e FGTS versus prestador PJ no Simples Nacional.</p>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 16px;"><a href="/calculadora-de-rescisao-clt" style="color: #1d4ed8; text-decoration: none; font-weight: bold;">Cálculo de Rescisão CLT</a></h3>
          <p style="font-size: 13px; color: #475569; line-height: 1.5; margin-bottom: 0;">Simulação completa de acertos rescisórios para demissões sem justa causa, pedido de demissão e acordo consensual.</p>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 16px;"><a href="/calculadora-de-decimo-terceiro" style="color: #1d4ed8; text-decoration: none; font-weight: bold;">Cálculo de 13º Salário</a></h3>
          <p style="font-size: 13px; color: #475569; line-height: 1.5; margin-bottom: 0;">Estime o valor bruto e líquido da primeira e da segunda parcela da gratificação natalina com INSS e IRRF.</p>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 16px;"><a href="/imc" style="color: #1d4ed8; text-decoration: none; font-weight: bold;">Metabolismo e IMC Tracker</a></h3>
          <p style="font-size: 13px; color: #475569; line-height: 1.5; margin-bottom: 0;">Descubra seu Índice de Massa Corporal (IMC), classificação OMS e necessidade energética diária.</p>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 16px;"><a href="/regra-tres" style="color: #1d4ed8; text-decoration: none; font-weight: bold;">Regra de Três Rápida</a></h3>
          <p style="font-size: 13px; color: #475569; line-height: 1.5; margin-bottom: 0;">Resolva proporções matemáticas simples de forma direta ou inversa com passo a passo explicativo.</p>
        </div>
      </div>
    </section>

    <section style="margin-bottom: 45px;">
      <h2 style="font-size: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; width: fit-content; margin-bottom: 20px; font-weight: 800; color: #0f172a;">Simuladores em Alta nas Buscas (2026)</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px;">
        <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 15px;"><a href="/move-brasil" style="color: #1d4ed8; text-decoration: none; font-weight: bold;">Simulador Move Brasil 2026 (Moto, Carro, Caixa e BB)</a></h3>
          <p style="font-size: 12.5px; color: #475569; line-height: 1.5; margin-bottom: 0;">Simule parcelas, entrada e prazo para motos, carros e caminhões via Caixa Econômica Federal e Banco do Brasil.</p>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 15px;"><a href="/falta-injustificada" style="color: #1d4ed8; text-decoration: none; font-weight: bold;">Calculadora de Faltas Injustificadas 2026 (Tabela e DSR)</a></h3>
          <p style="font-size: 12.5px; color: #475569; line-height: 1.5; margin-bottom: 0;">Calcule o desconto em folha, perda do DSR (Lei 605/49) e consulte a tabela oficial de férias do Art. 130 da CLT.</p>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 15px;"><a href="/salario-professor" style="color: #1d4ed8; text-decoration: none; font-weight: bold;">Calculadora de Salário de Professor 2026 (20h/40h)</a></h3>
          <p style="font-size: 12.5px; color: #475569; line-height: 1.5; margin-bottom: 0;">Simule hora-aula, Piso do Magistério, hora-atividade, DSR e descontos atualizados de INSS e IRRF 2026.</p>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 15px;"><a href="/log-calculo-frete" style="color: #1d4ed8; text-decoration: none; font-weight: bold;">Cálculo de Frete e Margem de Lucro Rodoviário</a></h3>
          <p style="font-size: 12.5px; color: #475569; line-height: 1.5; margin-bottom: 0;">Forme o valor ideal do frete considerando diesel, pedágios, manutenção por km e margem líquida desejada.</p>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 15px;"><a href="/financiamento-veiculo" style="color: #1d4ed8; text-decoration: none; font-weight: bold;">Financiamento de Veículos CDC (Carros e Motos)</a></h3>
          <p style="font-size: 12.5px; color: #475569; line-height: 1.5; margin-bottom: 0;">Simule parcelas fixas pela Tabela Price, compare entradas e descubra o total de juros no financiamento CDC.</p>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 15px;"><a href="/tempo-viagem" style="color: #1d4ed8; text-decoration: none; font-weight: bold;">Calculadora de Tempo de Viagem Rodoviária</a></h3>
          <p style="font-size: 12.5px; color: #475569; line-height: 1.5; margin-bottom: 0;">Planeje a duração real do trajeto combinando distância em km, velocidade média efetiva e paradas na estrada.</p>
        </div>
      </div>
    </section>

    <section style="margin-bottom: 45px;">
      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 20px;">
        <h2 style="font-size: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin: 0; font-weight: 800; color: #0f172a;">Guias Práticos e Artigos Educativos</h2>
        <a href="/guias" style="font-size: 13px; font-weight: 700; color: #1d4ed8; text-decoration: none;">Ver Todos os Guias (${GUIDES_ARTICLES.length}) &rarr;</a>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px;">
        ${GUIDES_ARTICLES.slice(0, 4).map(article => `
          <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 16px; background: #f8fafc;">
            <span style="display: inline-block; font-size: 11px; font-weight: 700; color: #1d4ed8; background: #dbeafe; padding: 3px 8px; border-radius: 6px; margin-bottom: 10px;">${escapeHtml(article.categoryLabel)}</span>
            <h3 style="margin: 0 0 10px; font-size: 15px; font-weight: 800; line-height: 1.4;">
              <a href="/guias/${article.slug}" style="color: #0f172a; text-decoration: none;">${escapeHtml(article.title)}</a>
            </h3>
            <p style="font-size: 12.5px; color: #475569; line-height: 1.5; margin: 0 0 12px;">${escapeHtml(article.excerpt)}</p>
            <small style="font-size: 11px; color: #64748b;">Atualizado em ${formatBrDate(article.updatedAt)} &bull; ${escapeHtml(article.readingTime)}</small>
          </div>
        `).join('')}
      </div>
    </section>

    <section style="margin-bottom: 45px;">
      <h2 style="font-size: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; width: fit-content; margin-bottom: 20px; font-weight: 800; color: #0f172a;">Categorias de Simuladores (21 Segmentos)</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
        ${Object.entries(CATEGORY_MAP_RAW).map(([key, label]) => `
          <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 16px; background: #fff;">
            <h3 style="margin-top: 0; font-size: 15px; font-weight: bold;"><a href="/${CATEGORY_KEY_TO_SLUG[key]}" style="color: #1d4ed8; text-decoration: none;">${escapeHtml(label)}</a></h3>
            <p style="font-size: 12.5px; color: #64748b; line-height: 1.5; margin-bottom: 0;">${escapeHtml(CATEGORY_HOME_DESCRIPTIONS[key] || `Simuladores especializados de ${label.toLowerCase()}.`)}</p>
          </div>
        `).join('')}
      </div>
    </section>

    <article style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 30px; margin-bottom: 40px;">
      <h2 style="font-size: 20px; color: #0f172a; margin-top: 0; margin-bottom: 15px; font-weight: 800;">Metodologia, Padrão Editorial e Privacidade Client-Side</h2>
      <p style="font-size: 14px; color: #334155; line-height: 1.7; margin-bottom: 14px;">
        Tomar decisões financeiras, trabalhistas ou patrimoniais no Brasil exige mais do que fórmulas genéricas importadas de planilhas estrangeiras. O holerite brasileiro segue fatiamento progressivo oficial para INSS e Imposto de Renda Retido na Fonte (IRRF), projeção do aviso prévio proporcional (Lei nº 12.506/2011), reflexos no Descanso Semanal Remunerado (DSR), regras próprias de amortização habitacional (SAC vs Tabela Price) e tributação diferenciada entre MEI, Simples Nacional (Anexos III e V pelo Fator R) e Lucro Presumido.
      </p>
      <p style="font-size: 14px; color: #334155; line-height: 1.7; margin-bottom: 14px;">
        Cada uma das nossas 175 calculadoras distribuídas em 21 categorias temáticas passa por curadoria contínua para entregar resultados transparentes acompanhados de passo a passo prático, demonstração matemática da equação aplicada, exemplos numéricos reais e perguntas frequentes respondidas com linguagem clara e objetiva.
      </p>
      <p style="font-size: 14px; color: #334155; line-height: 1.7; margin-bottom: 0;">
        Todos os cálculos inseridos no Brasil Calculadoras — sejam rendimentos financeiros, dados salariais, parcelas de financiamento de veículos e imóveis ou parâmetros nutricionais e clínicos — são executados integralmente no navegador do usuário sem envio ou armazenamento de dados pessoais em servidores externos.
      </p>
    </article>

    <section style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 20px; padding: 25px;">
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 0; margin-bottom: 16px; font-weight: 800;">Perguntas Frequentes Sobre o Portal</h2>
      <div style="margin-bottom: 14px;">
        <h3 style="font-size: 14px; color: #1e293b; margin: 0 0 6px; font-weight: 700;">O Brasil Calculadoras é 100% gratuito?</h3>
        <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0;">Sim, absolutamente gratuito. Nosso propósito é democratizar o acesso a ferramentas matemáticas, financeiras e trabalhistas sem cobrar assinaturas, taxas ou exigir cadastros.</p>
      </div>
      <div style="margin-bottom: 14px;">
        <h3 style="font-size: 14px; color: #1e293b; margin: 0 0 6px; font-weight: 700;">Como são atualizadas as fórmulas trabalhistas e fiscais?</h3>
        <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0;">Utilizamos lógica alinhada às fontes oficiais brasileiras (Receita Federal, CLT, Ministério do Trabalho, Caixa Econômica Federal e Banco Central), revisando faixas previdenciárias e tributárias anualmente para 2026.</p>
      </div>
      <div>
        <h3 style="font-size: 14px; color: #1e293b; margin: 0 0 6px; font-weight: 700;">Meus dados financeiros digitados ficam salvos no site?</h3>
        <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0;">Não. Todas as contas rodam localmente no seu navegador (Client-Side) e o histórico opcional fica armazenado estritamente no localStorage do seu dispositivo.</p>
      </div>
    </section>
  </main>
  ${sharedFooterHtml}
`;

// Save Homepage pre-rendered HTML
const homePreRendered = injectMetadata(template, homeTitle, homeDesc, homeUrl, homepageSchema, homeHtml);
fs.writeFileSync(templatePath, homePreRendered, 'utf8');
console.log('✅ Homepage pre-rendered!');

// 2. Pre-render Category Hubs
Object.entries(CATEGORY_KEY_TO_SLUG).forEach(([catKey, slug]) => {
  const hubData = getCategoryHubContent(catKey);
  const canonicalUrl = `https://www.brasilcalculadoras.com.br/${slug}`;
  const label = CATEGORY_MAP_RAW[catKey] || catKey;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#collection`,
    "name": hubData.title,
    "description": hubData.description,
    "url": canonicalUrl
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://www.brasilcalculadoras.com.br/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": label,
        "item": canonicalUrl
      }
    ]
  };

  const catCalcs = CALCULATORS_CATALOG.filter(c => c.category === catKey);
  const catGuides = GUIDES_ARTICLES.filter(g => g.categoryKey === catKey);
  const displayGuides = catGuides.length > 0 ? catGuides : GUIDES_ARTICLES.slice(0, 2);

  const hubHtml = `
    ${buildHeaderHtml(false)}
    <main style="max-width: 1000px; margin: 0 auto; padding: 20px; font-family: sans-serif;">
      <nav style="font-size: 12px; color: #666; margin-bottom: 20px; font-weight: 600;">
        <a href="/" style="color: #3b82f6; text-decoration: none;">Início</a> / <span>${escapeHtml(label)}</span>
      </nav>

      <article style="background: white; border: 1px solid #ddd; padding: 30px; border-radius: 16px; margin-bottom: 30px;">
        <h1 style="font-size: 26px; color: #1e293b; margin-top: 0; margin-bottom: 15px; font-weight: 900;">${escapeHtml(hubData.title)}</h1>
        <p style="color: #334155; font-size: 14px; line-height: 1.7; margin-bottom: 20px;">${escapeHtml(hubData.introduction)}</p>
        <div style="border-top: 1px solid #eee; padding-top: 16px; margin-bottom: 16px;">
          <h2 style="font-size: 17px; color: #0f172a; margin-top: 0; margin-bottom: 10px; font-weight: 800;">Por que planejar nesta categoria?</h2>
          <p style="color: #475569; font-size: 13.5px; line-height: 1.65; margin: 0;">${escapeHtml(hubData.importance)}</p>
        </div>
        ${hubData.methodology ? `
          <div style="border-top: 1px solid #eee; padding-top: 16px; margin-bottom: 16px;">
            <h2 style="font-size: 17px; color: #0f172a; margin-top: 0; margin-bottom: 10px; font-weight: 800;">Metodologia e Rigor Matemático dos Cálculos</h2>
            <p style="color: #475569; font-size: 13.5px; line-height: 1.65; margin: 0;">${escapeHtml(hubData.methodology)}</p>
          </div>
        ` : ''}
        ${hubData.practicalApplications && hubData.practicalApplications.length > 0 ? `
          <div style="border-top: 1px solid #eee; padding-top: 16px;">
            <h2 style="font-size: 17px; color: #0f172a; margin-top: 0; margin-bottom: 10px; font-weight: 800;">Principais Aplicações Práticas</h2>
            <ul style="padding-left: 20px; margin: 0; color: #475569; font-size: 13.5px; line-height: 1.7;">
              ${hubData.practicalApplications.map(appItem => `<li>${escapeHtml(appItem)}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </article>

      <section style="margin-bottom: 35px;">
        <h2 style="font-size: 18px; color: #0f172a; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 5px; width: fit-content; font-weight: 800;">Calculadoras Disponíveis em ${escapeHtml(label)}</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
          ${catCalcs.map(c => `
            <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; background: #fff;">
              <h3 style="margin-top: 0; font-size: 15px; font-weight: bold;"><a href="/${c.id}" style="color: #1d4ed8; text-decoration: none;">${escapeHtml(c.name)}</a></h3>
              <p style="font-size: 12.5px; color: #64748b; line-height: 1.5; margin-bottom: 0;">${escapeHtml(c.description)}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 24px; border-radius: 16px; margin-bottom: 35px;">
        <h2 style="font-size: 17px; color: #0f172a; margin-top: 0; margin-bottom: 14px; font-weight: 800;">Guias Editoriais Recomendados</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px;">
          ${displayGuides.map(guide => `
            <div style="background: #ffffff; border: 1px solid #dbeafe; padding: 16px; border-radius: 12px;">
              <h3 style="margin: 0 0 8px; font-size: 14px; font-weight: 700;">
                <a href="/guias/${guide.slug}" style="color: #1d4ed8; text-decoration: none;">${escapeHtml(guide.title)}</a>
              </h3>
              <p style="font-size: 12px; color: #475569; margin: 0; line-height: 1.5;">${escapeHtml(guide.excerpt)}</p>
            </div>
          `).join('')}
        </div>
      </section>

      ${hubData.faq.length > 0 ? `
        <section style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 25px; border-radius: 16px;">
          <h2 style="font-size: 18px; color: #0f172a; margin-top: 0; margin-bottom: 15px; font-weight: 800;">Perguntas Frequentes da Categoria</h2>
          ${hubData.faq.map(q => `
            <div style="margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">
              <h3 style="font-size: 14px; color: #334155; margin-bottom: 8px; font-weight: 700;">${escapeHtml(q.q)}</h3>
              <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0;">${escapeHtml(q.a)}</p>
            </div>
          `).join('')}
        </section>
      ` : ''}
    </main>
    ${sharedFooterHtml}
  `;

  const hubSchemas: any[] = [collectionSchema, breadcrumbSchema];
  if (hubData.faq && hubData.faq.length > 0) {
    hubSchemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      "mainEntity": hubData.faq.map((q: any) => ({
        "@type": "Question",
        "name": q.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.a
        }
      }))
    });
  }
  const rendered = injectMetadata(template, hubData.title, hubData.description, canonicalUrl, hubSchemas, hubHtml);
  const catDir = path.join(distPath, slug);
  ensureDir(catDir);
  fs.writeFileSync(path.join(catDir, 'index.html'), rendered, 'utf8');
  fs.writeFileSync(path.join(distPath, `${slug}.html`), rendered, 'utf8');
});
console.log('✅ Category Hubs pre-rendered!');

function renderPrerenderForm(calc: any): string {
  const inputs = calc.inputs || [];
  const outputs = calc.outputs || [];

  if (inputs.length > 0) {
    return `
      <section style="background: #ffffff; border: 2px solid #2563eb; padding: 25px; border-radius: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); margin-bottom: 35px;">
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e2e8f0; padding-bottom: 15px; margin-bottom: 20px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="background: #eff6ff; color: #2563eb; padding: 6px 12px; border-radius: 8px; font-size: 12px; font-weight: 700;">Simulador Online</span>
            <span style="color: #64748b; font-size: 13px;">Preencha os campos abaixo para simular</span>
          </div>
          <span style="color: #10b981; font-size: 12px; font-weight: 600;">Cálculo Instantâneo</span>
        </div>

        <form style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; margin-bottom: 20px;">
          ${inputs.map((inp: any) => {
            const ph = escapeHtml(inp.placeholder || (inp.defaultValue !== undefined ? String(inp.defaultValue) : 'Digite o valor'));
            const val = escapeHtml(inp.defaultValue !== undefined ? String(inp.defaultValue) : '');
            return `
              <div>
                <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 6px;">
                  ${escapeHtml(inp.label)}
                </label>
                <input
                  type="text"
                  placeholder="${ph}"
                  value="${val}"
                  readonly
                  style="width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 10px; font-size: 14px; background: #f8fafc; color: #1e293b; box-sizing: border-box;"
                />
                ${inp.helperText ? `<small style="font-size: 11px; color: #64748b; display: block; margin-top: 4px;">${escapeHtml(inp.helperText)}</small>` : ''}
              </div>
            `;
          }).join('')}
        </form>

        <div style="display: flex; gap: 12px; align-items: center; justify-content: flex-start; margin-top: 10px;">
          <button type="button" style="background: #2563eb; color: #ffffff; border: none; padding: 12px 28px; border-radius: 10px; font-size: 14px; font-weight: 700; cursor: pointer;">
            Calcular Agora
          </button>
          <span style="font-size: 12px; color: #64748b;">(Processamento 100% local, seguro e sem cadastro)</span>
        </div>

        ${outputs.length > 0 ? `
          <div style="margin-top: 25px; padding-top: 20px; border-top: 1px dashed #cbd5e1; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px;">
            ${outputs.map((out: any) => `
              <div style="background: #f8fafc; padding: 14px; border-radius: 12px; border-left: 4px solid #3b82f6;">
                <span style="font-size: 11.5px; color: #64748b; font-weight: 600; display: block; text-transform: uppercase;">${escapeHtml(out.label)}</span>
                <strong style="font-size: 18px; color: #0f172a; margin-top: 4px; display: block;">Simulação Pronta</strong>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </section>
    `;
  }

  return `
    <section style="background: #ffffff; border: 2px solid #2563eb; padding: 25px; border-radius: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); margin-bottom: 35px;">
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e2e8f0; padding-bottom: 15px; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="background: #eff6ff; color: #2563eb; padding: 6px 12px; border-radius: 8px; font-size: 12px; font-weight: 700;">Simulador Oficial</span>
          <span style="color: #64748b; font-size: 13px;">Insira os parâmetros para obter o relatório completo</span>
        </div>
        <span style="color: #10b981; font-size: 12px; font-weight: 600;">Parâmetros Oficiais 2026</span>
      </div>

      <form style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; margin-bottom: 20px;">
        <div>
          <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 6px;">Valor Base / Referência</label>
          <input type="text" placeholder="Ex: R$ 3.500,00" value="R$ 3.500,00" readonly style="width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 10px; font-size: 14px; background: #f8fafc; color: #1e293b; box-sizing: border-box;" />
        </div>
        <div>
          <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 6px;">Prazo / Período de Referência</label>
          <input type="text" placeholder="Ex: 12 meses" value="12 meses" readonly style="width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 10px; font-size: 14px; background: #f8fafc; color: #1e293b; box-sizing: border-box;" />
        </div>
        <div>
          <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 6px;">Modalidade / Regra</label>
          <input type="text" placeholder="Padrão Vigente 2026" value="Padrão Vigente 2026" readonly style="width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 10px; font-size: 14px; background: #f8fafc; color: #1e293b; box-sizing: border-box;" />
        </div>
      </form>

      <div style="display: flex; gap: 12px; align-items: center; justify-content: flex-start; margin-top: 10px;">
        <button type="button" style="background: #2563eb; color: #ffffff; border: none; padding: 12px 28px; border-radius: 10px; font-size: 14px; font-weight: 700; cursor: pointer;">
          Calcular Agora
        </button>
        <span style="font-size: 12px; color: #64748b;">(Atualizado com as regras oficiais de 2026)</span>
      </div>
    </section>
  `;
}

// 3. Pre-render All 175 Calculators
CALCULATORS_CATALOG.forEach(calc => {
  const seoData = getSeoContentForCalculator(calc);
  const canonicalUrl = `https://www.brasilcalculadoras.com.br/${calc.id}`;
  const catLabel = CATEGORY_MAP_RAW[calc.category] || calc.category;
  const catSlug = CATEGORY_KEY_TO_SLUG[calc.category] || '';
  const relatedGuides = getRelatedGuidesForCalculator(calc.id, calc.category);

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${canonicalUrl}#webapp`,
    "name": calc.name,
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript",
    "applicationCategory": calc.category === 'financas' || calc.category === 'imobiliario' || calc.category === 'aposentadoria' ? "FinanceApplication" : "UtilitiesApplication",
    "isAccessibleForFree": true,
    "inLanguage": "pt-BR",
    "description": seoData.description,
    "url": canonicalUrl
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://www.brasilcalculadoras.com.br/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": catLabel,
        "item": `https://www.brasilcalculadoras.com.br/${catSlug}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": calc.name,
        "item": canonicalUrl
      }
    ]
  };

  const calcHtml = `
    ${buildHeaderHtml(false)}
    <main style="max-width: 920px; margin: 0 auto; padding: 20px; font-family: sans-serif;">
      <nav style="font-size: 12px; color: #64748b; margin-bottom: 20px; font-weight: 600;">
        <a href="/" style="color: #1d4ed8; text-decoration: none;">Início</a> /
        <a href="/${catSlug}" style="color: #1d4ed8; text-decoration: none;">${escapeHtml(catLabel)}</a> /
        <span>${escapeHtml(calc.name)}</span>
      </nav>

      <section style="background: white; border: 1px solid #e2e8f0; padding: 25px; border-radius: 16px; margin-bottom: 28px;">
        <h1 style="font-size: 25px; color: #0f172a; margin-top: 0; margin-bottom: 10px; font-weight: 900;">${escapeHtml(calc.name)}</h1>
        <p style="color: #475569; font-size: 14px; line-height: 1.65; margin-bottom: 0;">${escapeHtml(calc.description)}</p>
      </section>

      ${renderPrerenderForm(calc)}

      <article style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 30px; margin-bottom: 35px;">
        <section style="margin-bottom: 24px;">
          <h2 style="font-size: 19px; color: #0f172a; margin-top: 0; margin-bottom: 12px; font-weight: 800;">O que é e para que serve: ${escapeHtml(calc.name)}</h2>
          <p style="font-size: 14px; color: #334155; line-height: 1.7; margin: 0;">${escapeHtml(seoData.whatIs)}</p>
        </section>

        ${seoData.stepByStep && seoData.stepByStep.length > 0 ? `
          <section style="margin-bottom: 24px; border-top: 1px solid #f1f5f9; padding-top: 20px;">
            <h2 style="font-size: 17px; color: #0f172a; margin-top: 0; margin-bottom: 12px; font-weight: 800;">Como usar esta ferramenta passo a passo</h2>
            <ul style="padding-left: 20px; margin: 0; color: #475569; font-size: 13.5px; line-height: 1.7;">
              ${seoData.stepByStep.map(step => `<li>${escapeHtml(step)}</li>`).join('')}
            </ul>
          </section>
        ` : ''}

        <section style="margin-bottom: 24px; border-top: 1px solid #f1f5f9; padding-top: 20px;">
          <h2 style="font-size: 17px; color: #0f172a; margin-top: 0; margin-bottom: 10px; font-weight: 800;">Fórmula, Exemplo Prático e Orientações</h2>
          <h3 style="font-size: 14.5px; color: #1e293b; margin: 14px 0 6px; font-weight: 700;">Fórmula e Lógica de Cálculo</h3>
          <p style="font-size: 13.5px; color: #475569; line-height: 1.65; margin: 0 0 14px;">${escapeHtml(seoData.howItWorks)}</p>

          <h3 style="font-size: 14.5px; color: #1e293b; margin: 14px 0 6px; font-weight: 700;">Exemplo Prático Numérico</h3>
          <p style="font-size: 13.5px; color: #475569; line-height: 1.65; margin: 0 0 14px;">${escapeHtml(seoData.practicalExample)}</p>

          <h3 style="font-size: 14.5px; color: #1e293b; margin: 14px 0 6px; font-weight: 700;">Quando Utilizar</h3>
          <p style="font-size: 13.5px; color: #475569; line-height: 1.65; margin: 0 0 14px;">${escapeHtml(seoData.whenToUse)}</p>

          <h3 style="font-size: 14.5px; color: #1e293b; margin: 14px 0 6px; font-weight: 700;">Dicas Importantes e Metodologia 2026</h3>
          <p style="font-size: 13.5px; color: #475569; line-height: 1.65; margin: 0 0 10px;">${escapeHtml(seoData.importantTips)}</p>
          ${seoData.methodologyNote ? `<p style="font-size: 13px; color: #475569; line-height: 1.65; margin: 0;">${escapeHtml(seoData.methodologyNote)}</p>` : ''}
        </section>

        ${seoData.referenceTable ? `
          <section style="margin-bottom: 24px; border-top: 1px solid #f1f5f9; padding-top: 20px;">
            <h2 style="font-size: 17px; color: #0f172a; margin-top: 0; margin-bottom: 8px; font-weight: 800;">${escapeHtml(seoData.referenceTable.heading)}</h2>
            ${seoData.referenceTable.caption ? `<p style="font-size: 13px; color: #475569; margin: 0 0 12px; line-height: 1.6;">${escapeHtml(seoData.referenceTable.caption)}</p>` : ''}
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 13px; border: 1px solid #e2e8f0;">
                <thead>
                  <tr style="background: #f8fafc; text-align: left;">
                    ${seoData.referenceTable.headers.map(h => `<th scope="col" style="padding: 10px 12px; border-bottom: 1px solid #cbd5e1; color: #0f172a; font-weight: 700;">${escapeHtml(h)}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${seoData.referenceTable.rows.map((row, rIdx) => `
                    <tr style="background: ${rIdx % 2 === 1 ? '#f8fafc' : '#ffffff'};">
                      ${row.map((cell, cIdx) => `<td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; color: ${cIdx === 0 ? '#0f172a' : '#334155'}; font-weight: ${cIdx === 0 ? '600' : '400'};">${escapeHtml(cell)}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            ${seoData.referenceTable.note ? `<p style="font-size: 12px; color: #64748b; margin: 10px 0 0; line-height: 1.55;">${escapeHtml(seoData.referenceTable.note)}</p>` : ''}
          </section>
        ` : ''}

        ${seoData.extraSections && seoData.extraSections.length > 0 ? seoData.extraSections.map(sec => `
          <section style="margin-bottom: 24px; border-top: 1px solid #f1f5f9; padding-top: 20px;">
            <h2 style="font-size: 17px; color: #0f172a; margin-top: 0; margin-bottom: 10px; font-weight: 800;">${escapeHtml(sec.heading)}</h2>
            ${sec.paragraphs.map(p => `<p style="font-size: 13.5px; color: #475569; line-height: 1.65; margin: 0 0 12px;">${escapeHtml(p)}</p>`).join('')}
            ${sec.bullets && sec.bullets.length > 0 ? `
              <ul style="padding-left: 20px; margin: 0; color: #475569; font-size: 13.5px; line-height: 1.7;">
                ${sec.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('')}
              </ul>
            ` : ''}
          </section>
        `).join('') : ''}

        ${relatedGuides.length > 0 ? `
          <section style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 14px; padding: 18px; margin-bottom: 24px;">
            <h2 style="font-size: 15px; color: #0f172a; margin-top: 0; margin-bottom: 10px; font-weight: 800;">Guias Editoriais Relacionados</h2>
            <ul style="padding-left: 18px; margin: 0; font-size: 13px; line-height: 1.8;">
              ${relatedGuides.map(g => `<li><a href="/guias/${g.slug}" style="color: #1d4ed8; font-weight: 700; text-decoration: none;">${escapeHtml(g.title)}</a></li>`).join('')}
            </ul>
          </section>
        ` : ''}

        ${seoData.faq.length > 0 ? `
          <section style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 22px; border-radius: 16px; margin-bottom: 20px;">
            <h2 style="font-size: 17px; color: #0f172a; margin-top: 0; margin-bottom: 15px; font-weight: 800;">Perguntas Frequentes (FAQ)</h2>
            ${seoData.faq.map(q => `
              <div style="margin-bottom: 14px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">
                <h3 style="font-size: 14px; color: #1e293b; margin: 0 0 6px; font-weight: 700;">${escapeHtml(q.q)}</h3>
                <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0;">${escapeHtml(q.a)}</p>
              </div>
            `).join('')}
          </section>
        ` : ''}

        ${seoData.sources.length > 0 ? `
          <section style="font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 14px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px;">
            <div>
              <span>Fontes Oficiais: </span>
              ${seoData.sources.map(src => `<a href="${escapeHtml(src.url)}" target="_blank" rel="noopener noreferrer" style="color: #1d4ed8; text-decoration: none; margin-left: 6px; font-weight: 600;">${escapeHtml(src.name)}</a>`).join(' | ')}
            </div>
            <span>Revisado em: ${escapeHtml(seoData.lastUpdated)}</span>
          </section>
        ` : ''}
      </article>
    </main>
    ${sharedFooterHtml}
  `;

  const calcSchemas: any[] = [webAppSchema, breadcrumbSchema];
  if (seoData.faq && seoData.faq.length > 0) {
    calcSchemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      "mainEntity": seoData.faq.map((q: any) => ({
        "@type": "Question",
        "name": q.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.a
        }
      }))
    });
  }
  const rendered = injectMetadata(template, seoData.title, seoData.description, canonicalUrl, calcSchemas, calcHtml);
  const calcDir = path.join(distPath, calc.id);
  ensureDir(calcDir);
  fs.writeFileSync(path.join(calcDir, 'index.html'), rendered, 'utf8');
  fs.writeFileSync(path.join(distPath, `${calc.id}.html`), rendered, 'utf8');
});
console.log('✅ All 175 Calculators pre-rendered!');

// 4. Pre-render Guides Hub (/guias) and Editorial Articles (/guias/:slug)
const guidesHubTitle = 'Guias Educativos, Manuais Técnicos & Tutoriais | Brasil Calculadoras';
const guidesHubDesc = 'Artigos completos e guias práticos sobre rescisão CLT, CLT vs PJ, juros compostos, financiamento SAC vs Price, precificação empresarial e saúde.';
const guidesHubUrl = 'https://www.brasilcalculadoras.com.br/guias';

const guidesHubSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${guidesHubUrl}#collection`,
    "name": guidesHubTitle,
    "description": guidesHubDesc,
    "url": guidesHubUrl
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.brasilcalculadoras.com.br/" },
      { "@type": "ListItem", "position": 2, "name": "Guias & Artigos", "item": guidesHubUrl }
    ]
  }
];

const guidesHubHtml = `
  ${buildHeaderHtml(false)}
  <main style="max-width: 1040px; margin: 0 auto; padding: 24px 20px; font-family: sans-serif;">
    <nav style="font-size: 12px; color: #64748b; margin-bottom: 20px; font-weight: 600;">
      <a href="/" style="color: #1d4ed8; text-decoration: none;">Início</a> / <span>Guias &amp; Artigos</span>
    </nav>

    <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 32px; margin-bottom: 30px;">
      <h1 style="font-size: 28px; color: #0f172a; margin-top: 0; margin-bottom: 12px; font-weight: 900;">Guias Práticos, Metodologia &amp; Artigos Educativos</h1>
      <p style="font-size: 14.5px; color: #475569; line-height: 1.7; margin: 0;">
        Os guias aprofundados do <strong>Brasil Calculadoras</strong> detalham a legislação trabalhista vigente, fórmulas financeiras, equações biométricas e técnicas matemáticas aplicadas que fundamentam nossas 175 ferramentas. Cada publicação recebe revisão contínua com exemplos numéricos práticos e links diretos para os simuladores interativos correspondentes.
      </p>
    </section>

    <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px;">
      ${GUIDES_ARTICLES.map(article => `
        <article style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 24px;">
          <span style="display: inline-block; font-size: 11px; font-weight: 700; color: #1d4ed8; background: #eff6ff; padding: 4px 10px; border-radius: 6px; margin-bottom: 12px;">${escapeHtml(article.categoryLabel)}</span>
          <h2 style="font-size: 18px; margin: 0 0 10px; line-height: 1.35;">
            <a href="/guias/${article.slug}" style="color: #0f172a; text-decoration: none;">${escapeHtml(article.title)}</a>
          </h2>
          <p style="font-size: 13.5px; color: #475569; line-height: 1.6; margin: 0 0 14px;">${escapeHtml(article.excerpt)}</p>
          <p style="font-size: 12px; color: #64748b; margin: 0 0 14px;">
            Por <strong>${escapeHtml(article.author)}</strong> &bull; Atualizado em ${formatBrDate(article.updatedAt)} &bull; ${escapeHtml(article.readingTime)}
          </p>
          <a href="/guias/${article.slug}" style="display: inline-block; background: #2563eb; color: #ffffff; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-size: 12.5px; font-weight: 700;">Ler Guia Completo</a>
        </article>
      `).join('')}
    </section>
  </main>
  ${sharedFooterHtml}
`;

const guidesDir = path.join(distPath, 'guias');
ensureDir(guidesDir);
const guidesHubRendered = injectMetadata(template, guidesHubTitle, guidesHubDesc, guidesHubUrl, guidesHubSchema, guidesHubHtml);
fs.writeFileSync(path.join(guidesDir, 'index.html'), guidesHubRendered, 'utf8');
fs.writeFileSync(path.join(distPath, 'guias.html'), guidesHubRendered, 'utf8');

GUIDES_ARTICLES.forEach(article => {
  const canonicalUrl = `https://www.brasilcalculadoras.com.br/guias/${article.slug}`;
  const fullTitle = `${article.title} | Brasil Calculadoras`;
  const otherArticles = GUIDES_ARTICLES.filter(a => a.slug !== article.slug).slice(0, 3);

  const articleHtml = `
    ${buildHeaderHtml(false)}
    <main style="max-width: 900px; margin: 0 auto; padding: 24px 20px; font-family: sans-serif;">
      <nav style="font-size: 12px; color: #64748b; margin-bottom: 20px; font-weight: 600;">
        <a href="/" style="color: #1d4ed8; text-decoration: none;">Início</a> /
        <a href="/guias" style="color: #1d4ed8; text-decoration: none;">Guias &amp; Artigos</a> /
        <span>${escapeHtml(article.title)}</span>
      </nav>

      <article style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 32px; margin-bottom: 35px;">
        <div style="margin-bottom: 14px;">
          <a href="/${article.categorySlug}" style="display: inline-block; font-size: 11px; font-weight: 700; color: #1d4ed8; background: #eff6ff; padding: 4px 10px; border-radius: 999px; text-decoration: none;">${escapeHtml(article.categoryLabel)}</a>
          <span style="font-size: 12px; color: #64748b; margin-left: 10px;">${escapeHtml(article.readingTime)}</span>
        </div>

        <h1 style="font-size: 28px; color: #0f172a; margin: 0 0 14px; line-height: 1.25; font-weight: 900;">${escapeHtml(article.title)}</h1>
        <p style="font-size: 15.5px; color: #475569; line-height: 1.65; margin: 0 0 18px;">${escapeHtml(article.excerpt)}</p>

        <div style="border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; padding: 14px 0; margin-bottom: 24px; font-size: 12.5px; color: #475569;">
          <strong>${escapeHtml(article.author)}</strong> (${escapeHtml(article.authorRole)}) &bull;
          Publicado em ${formatBrDate(article.publishedAt)} &bull;
          Atualizado em ${formatBrDate(article.updatedAt)}
        </div>

        <section style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 14px; padding: 20px; margin-bottom: 28px;">
          <h2 style="font-size: 15px; color: #0f172a; margin: 0 0 12px; font-weight: 800; text-transform: uppercase;">Calculadoras Conectadas a Este Guia</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">
            ${article.relatedCalculators.map(rc => `
              <div style="background: #ffffff; border: 1px solid #dbeafe; border-radius: 10px; padding: 12px;">
                <a href="/${rc.id}" style="color: #1d4ed8; font-weight: 700; font-size: 13px; text-decoration: none;">${escapeHtml(rc.name)}</a>
                <p style="font-size: 12px; color: #64748b; margin: 4px 0 0; line-height: 1.45;">${escapeHtml(rc.description)}</p>
              </div>
            `).join('')}
          </div>
        </section>

        ${article.sections.map(section => `
          <section style="margin-bottom: 28px;">
            <h2 style="font-size: 20px; color: #0f172a; margin: 0 0 12px; font-weight: 800;">${escapeHtml(section.heading)}</h2>
            ${section.paragraphs.map(p => `<p style="font-size: 14.5px; color: #334155; line-height: 1.75; margin: 0 0 14px;">${escapeHtml(p)}</p>`).join('')}
            ${section.bullets && section.bullets.length > 0 ? `
              <ul style="padding-left: 20px; margin: 0 0 16px; color: #334155; font-size: 14px; line-height: 1.7;">
                ${section.bullets.map(b => `<li style="margin-bottom: 6px;">${escapeHtml(b)}</li>`).join('')}
              </ul>
            ` : ''}
            ${section.highlightBox ? `
              <div style="background: #0f172a; color: #e2e8f0; border-radius: 14px; padding: 18px; margin-top: 12px;">
                <h3 style="font-size: 14px; color: #93c5fd; margin: 0 0 8px; font-weight: 700;">${escapeHtml(section.highlightBox.title)}</h3>
                <p style="font-size: 13.5px; color: #e2e8f0; line-height: 1.6; margin: 0;">${escapeHtml(section.highlightBox.text)}</p>
              </div>
            ` : ''}
          </section>
        `).join('')}

        <section style="border-top: 1px solid #e2e8f0; padding-top: 24px;">
          <h2 style="font-size: 19px; color: #0f172a; margin: 0 0 16px; font-weight: 800;">Perguntas Frequentes Sobre Este Tema</h2>
          ${article.faq.map(f => `
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
              <h3 style="font-size: 14.5px; color: #0f172a; margin: 0 0 6px; font-weight: 700;">${escapeHtml(f.q)}</h3>
              <p style="font-size: 13.5px; color: #475569; line-height: 1.65; margin: 0;">${escapeHtml(f.a)}</p>
            </div>
          `).join('')}
        </section>
      </article>

      <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 18px; padding: 24px;">
        <h2 style="font-size: 17px; color: #0f172a; margin: 0 0 14px; font-weight: 800;">Outros Guias Educativos Recomendados</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px;">
          ${otherArticles.map(other => `
            <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px;">
              <a href="/guias/${other.slug}" style="color: #1d4ed8; font-weight: 700; font-size: 13.5px; text-decoration: none;">${escapeHtml(other.title)}</a>
            </div>
          `).join('')}
        </div>
      </section>
    </main>
    ${sharedFooterHtml}
  `;

  const articleSchemas: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.metaDescription,
      "datePublished": article.publishedAt,
      "dateModified": article.updatedAt,
      "author": { "@type": "Organization", "name": article.author },
      "publisher": { "@type": "Organization", "name": "Brasil Calculadoras", "url": "https://www.brasilcalculadoras.com.br" },
      "mainEntityOfPage": canonicalUrl
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.brasilcalculadoras.com.br/" },
        { "@type": "ListItem", "position": 2, "name": "Guias & Artigos", "item": guidesHubUrl },
        { "@type": "ListItem", "position": 3, "name": article.title, "item": canonicalUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": article.faq.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  ];

  const rendered = injectMetadata(template, fullTitle, article.metaDescription, canonicalUrl, articleSchemas, articleHtml, 'article');
  const articleDir = path.join(guidesDir, article.slug);
  ensureDir(articleDir);
  fs.writeFileSync(path.join(articleDir, 'index.html'), rendered, 'utf8');
  fs.writeFileSync(path.join(guidesDir, `${article.slug}.html`), rendered, 'utf8');
});
console.log('✅ Guides Hub and Articles pre-rendered!');

// 5. Pre-render Institutional & Legal Pages (AdSense & E-E-A-T Compliance)
const legalPagesConfig = [
  {
    slug: 'cookies',
    title: 'Política de Cookies e Publicidade (LGPD) | Brasil Calculadoras',
    description: 'Saiba como o Brasil Calculadoras utiliza cookies técnicos, analíticos (GA4) e publicitários (Google AdSense / DART) em total conformidade com a LGPD.',
    heading: 'Política de Cookies e Gestão de Consentimento',
    content: `
      <p style="font-size: 14px; line-height: 1.7; color: #334155; margin-bottom: 20px;">Esta Política de Cookies explica com transparência como o portal <strong>Brasil Calculadoras</strong> utiliza cookies técnicos, armazenamento local (<code>localStorage</code>), métricas estatísticas e tecnologia de anúncios para manter todas as 175 ferramentas acessíveis gratuitamente sem exigir cadastro.</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">1. Processamento Local nos Simuladores (Client-Side)</h2>
      <p style="font-size: 13.5px; line-height: 1.7; color: #475569; margin-bottom: 15px;">Todos os valores financeiros, salariais, trabalhistas e biométricos inseridos nas calculadoras são processados exclusivamente na memória do navegador do usuário. Não coletamos, transmitimos ou vinculamos números digitados em formulários a cookies publicitários.</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">2. Categorias de Cookies Utilizadas</h2>
      <ul style="font-size: 13.5px; line-height: 1.75; color: #475569; margin-bottom: 18px; padding-left: 20px;">
        <li><strong>Cookies Essenciais e LocalStorage Funcional:</strong> Registram preferências de consentimento (<code>cc_adsense_consent</code>) e histórico recente local de ferramentas usadas no dispositivo.</li>
        <li><strong>Cookies Analíticos Agregados (Google Analytics 4):</strong> Mensuram volume agregado de acessos e estabilidade de carregamento (Core Web Vitals) para guiar melhorias editoriais.</li>
        <li><strong>Cookies de Publicidade (Google AdSense / Cookie DART):</strong> Permitem ao Google e parceiros exibirem anúncios contextuais ou baseados em interesses gerais de navegação, viabilizando a gratuidade do site.</li>
      </ul>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">3. Como Gerenciar ou Desativar Cookies</h2>
      <p style="font-size: 13.5px; line-height: 1.7; color: #475569;">Você pode gerenciar ou bloquear cookies a qualquer momento nas configurações do seu navegador (Chrome, Safari, Firefox, Edge) ou desativar a personalização de anúncios diretamente nas <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" style="color: #1d4ed8; font-weight: 700;">Configurações de Anúncios do Google</a>.</p>
    `
  },
  {
    slug: 'politica-de-privacidade',
    title: 'Política de Privacidade | Brasil Calculadoras',
    description: 'Confira nossa Política de Privacidade. Saiba como seus dados são protegidos e como utilizamos cookies em conformidade com a LGPD e o Google AdSense.',
    heading: 'Política de Privacidade',
    content: `
      <p style="font-size: 14px; line-height: 1.7; color: #334155; margin-bottom: 20px;">A sua privacidade e a segurança das informações de navegação são prioridades absolutas para o <strong>Brasil Calculadoras</strong> (<code>https://www.brasilcalculadoras.com.br</code>). Esta Política detalha o tratamento de informações em estrita observância à Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018) e ao GDPR.</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">1. Sigilo dos Cálculos Realizados (Client-Side)</h2>
      <p style="font-size: 13.5px; line-height: 1.7; color: #475569; margin-bottom: 15px;">Todas as simulações efetuadas no portal — incluindo salários, cálculos rescisórios CLT, juros compostos, financiamento habitacional, tributos e índices de saúde — rodam integralmente no dispositivo do visitante. Nenhum dado digitado nos simuladores é enviado para bancos de dados remotos ou compartilhado com terceiros.</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">2. Registros Técnicos e Google Analytics 4</h2>
      <p style="font-size: 13.5px; line-height: 1.7; color: #475569; margin-bottom: 15px;">Servidores de hospedagem e CDN mantêm logs técnicos padrão (IP anonimizado, navegador, data/hora e páginas acessadas) para segurança contra abusos e estatísticas agregadas de uso via GA4.</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">3. Cookies do Google AdSense (Cookie DART) e Parceiros</h2>
      <ul style="font-size: 13.5px; line-height: 1.75; color: #475569; margin-bottom: 18px; padding-left: 20px;">
        <li>Terceiros, incluindo o <strong>Google</strong>, utilizam cookies para veicular anúncios com base em visitas anteriores do usuário a este portal ou a outros sites da Internet.</li>
        <li>Com o uso de cookies de publicidade (incluindo o cookie DART), o Google e seus parceiros podem exibir anúncios pertinentes sem acessar dados inseridos nos simuladores.</li>
        <li>Os visitantes podem desativar a publicidade personalizada acessando as <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style="color: #1d4ed8; font-weight: 700;">Configurações de Anúncios do Google</a> ou <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" style="color: #1d4ed8; font-weight: 700;">aboutads.info/choices</a>.</li>
      </ul>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">4. Dados de Contato e Direitos do Titular (LGPD)</h2>
      <p style="font-size: 13.5px; line-height: 1.7; color: #475569;">Mensagens enviadas voluntariamente pelo formulário de <a href="/contato" style="color: #1d4ed8; font-weight: 700;">Contato</a> são usadas exclusivamente para atendimento da solicitação. Solicitações de confirmação, correção ou exclusão previstas na LGPD podem ser encaminhadas ao e-mail institucional: <strong>contato@brasilcalculadoras.com.br</strong>.</p>
    `
  },
  {
    slug: 'termos-de-uso',
    title: 'Termos e Condições de Uso | Brasil Calculadoras',
    description: 'Conheça os Termos e Condições de Uso da plataforma Brasil Calculadoras e entenda a natureza informativa de nossas ferramentas gratuitas.',
    heading: 'Termos e Condições de Uso',
    content: `
      <p style="font-size: 14px; line-height: 1.7; color: #334155; margin-bottom: 20px;">Ao acessar ou utilizar o portal <strong>Brasil Calculadoras</strong>, suas 175 calculadoras interativas, guias educativos e documentação técnica, você manifesta concordância integral com os Termos e Condições de Uso descritos abaixo.</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">1. Finalidade Exclusivamente Educativa e Informativa (Não Substitui Conferência Oficial)</h2>
      <p style="font-size: 13.5px; line-height: 1.7; color: #475569; margin-bottom: 15px;">Todas as ferramentas, tabelas referenciais e guias publicados no site têm caráter estritamente educativo, informativo e orientativo preliminar. Embora mantenhamos revisão contínua de alíquotas de INSS, IRRF, regras da CLT, SAC/Price e equações científicas segundo fontes oficiais brasileiras para 2026, os simuladores não produzem laudos oficiais, certidões contábeis, pareceres jurídicos ou prescrições clínicas.</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">2. Conferência Profissional Obrigatória em Decisões Definitivas</h2>
      <p style="font-size: 13.5px; line-height: 1.7; color: #475569; margin-bottom: 15px;">Particularidades de acordos e convenções coletivas sindicais, regimes tributários específicos, alterações normativas recentes e condições individuais de saúde podem alterar valores reais. Antes de celebrar contratos financeiros, homologar rescisões trabalhistas, recolher tributos ou iniciar dietas, realize sempre conferência oficial junto a contador habilitado (CRC), advogado, instituição financeira ou médico/nutricionista.</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">3. Propriedade Intelectual e Sustentação Gratuita</h2>
      <p style="font-size: 13.5px; line-height: 1.7; color: #475569;">Textos autorais, código-fonte e interface são protegidos por direitos autorais. É permitido o compartilhamento de links para as páginas e exportação pessoal dos resultados simulados, vedada a cópia automatizada em massa do conteúdo editorial. A gratuidade integral do serviço é mantida por meio do Google AdSense.</p>
    `
  },
  {
    slug: 'sobre',
    title: 'Sobre a Central | Brasil Calculadoras',
    description: 'Saiba mais sobre a missão do Brasil Calculadoras, nossa equipe técnica e nosso compromisso com a exatidão matemática e utilidade pública.',
    heading: 'Sobre o Brasil Calculadoras',
    content: `
      <p style="font-size: 14.5px; line-height: 1.7; color: #334155; margin-bottom: 20px;">O <strong>Brasil Calculadoras</strong> nasceu com a missão de democratizar o acesso a cálculos trabalhistas, financeiros, tributários, matemáticos e de bem-estar para todo o público brasileiro — oferecendo 175 simuladores gratuitos distribuídos em 21 categorias temáticas, acompanhados de guias educativos profundos e verificáveis.</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">Metodologia em Três Camadas e Revisão 2026</h2>
      <p style="font-size: 13.5px; line-height: 1.7; color: #475569; margin-bottom: 15px;">Em vez de entregar apenas caixas de entrada sem contexto, adotamos uma curadoria estruturada: primeiro, implementamos algoritmos alinhados às tabelas e legislações brasileiras (como INSS/IRRF progressivos, aviso prévio proporcional, Fator R do Simples Nacional e amortização SAC/Price); segundo, redigimos guias técnicos únicos de mais de 600 palavras por página com passo a passo, fórmulas, exemplos numéricos e FAQs; terceiro, publicamos artigos aprofundados na central <a href="/guias" style="color: #1d4ed8; font-weight: 700;">Guias &amp; Artigos</a>.</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">Compromisso com Transparência (E-E-A-T) e Privacidade</h2>
      <p style="font-size: 13.5px; line-height: 1.7; color: #475569;">Priorizamos o rigor técnico (Expertise, Autoridade e Confiabilidade) citando abertamente referências da Receita Federal, Ministério do Trabalho e Emprego, Banco Central, Caixa Econômica Federal, IBGE e OMS. Todas as contas rodam localmente no dispositivo do usuário sem cadastro, e o canal de melhorias contínuas permanece aberto em <strong>contato@brasilcalculadoras.com.br</strong>.</p>
    `
  },
  {
    slug: 'contato',
    title: 'Contato e Suporte | Brasil Calculadoras',
    description: 'Entre em contato com a equipe do Brasil Calculadoras para tirar dúvidas, enviar sugestões ou reportar pontos de melhoria.',
    heading: 'Contato & Suporte Editorial',
    content: `
      <p style="font-size: 14px; line-height: 1.7; color: #334155; margin-bottom: 20px;">A transparência e o diálogo contínuo com nossos usuários sustentam o aprimoramento do <strong>Brasil Calculadoras</strong>. Estamos abertos para receber sugestões de novas calculadoras, solicitações de atualização normativa de tabelas, apontamentos técnicos e requisições previstas pela LGPD.</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">Canais Oficiais de Atendimento</h2>
      <p style="font-size: 13.5px; line-height: 1.7; color: #475569; margin-bottom: 15px;">O atendimento direto com nossa equipe editorial e de engenharia funciona de segunda a sexta-feira, das 09h às 18h (Horário de Brasília), com prazo médio de resposta de até 48 horas úteis pelo formulário interativo do site ou diretamente via correio eletrônico.</p>
      <p style="font-size: 14px; font-weight: bold; color: #1d4ed8; background: #eff6ff; padding: 15px 18px; border-radius: 10px; display: inline-block; border: 1px solid #bfdbfe;">E-mail oficial de contato e DPO: contato@brasilcalculadoras.com.br</p>
    `
  },
  {
    slug: 'desenvolvedores',
    title: 'API Pública & Ferramentas para Desenvolvedores | Brasil Calculadoras',
    description: 'Acesse endpoints JSON gratuitos das tabelas oficiais de INSS, IRRF, parâmetros trabalhistas e índices econômicos. Widgets embebíveis para blogs e portais.',
    heading: 'APIs Públicas & Central de Desenvolvedores',
    content: `
      <p style="font-size: 14px; line-height: 1.7; color: #334155; margin-bottom: 20px;">O Brasil Calculadoras disponibiliza endpoints JSON estáticos gratuitos para desenvolvedores de software, contadores, analistas de RH e criadores de conteúdo do Brasil, servidos via CDN com baixa latência e alta disponibilidade.</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">Endpoints Públicos REST (JSON)</h2>
      <ul style="font-size: 13.5px; line-height: 1.8; color: #475569; margin-bottom: 20px; padding-left: 20px;">
        <li><b>Tabela INSS:</b> <code>GET /api/v1/tabelas/inss.json</code> — Alíquotas progressivas (7,5% a 14%), faixas salariais e teto previdenciário.</li>
        <li><b>Tabela IRRF:</b> <code>GET /api/v1/tabelas/irrf.json</code> — Faixas de isenção, alíquotas progressivas (7,5% a 27,5%) e parcelas a deduzir.</li>
        <li><b>Parâmetros Trabalhistas:</b> <code>GET /api/v1/tabelas/trabalhista.json</code> — Salário mínimo vigente, FGTS (8%), multa rescisória e regras de aviso prévio.</li>
        <li><b>Índices Financeiros:</b> <code>GET /api/v1/indices/financeiros.json</code> — Taxa Selic meta, CDI estimado e rendimentos referenciais.</li>
        <li><b>Catálogo de Calculadoras:</b> <code>GET /api/v1/calculadoras/catalogo.json</code> — Relação estruturada das ferramentas e URLs canônicas.</li>
      </ul>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">Termos de Uso da Documentação Aberta</h2>
      <p style="font-size: 13.5px; line-height: 1.7; color: #475569;">Todos os dados JSON públicos são livres para consulta técnica e educacional, recomendando-se sempre a conferência normativa periódica junto aos diários oficiais governamentais em aplicações críticas de produção.</p>
    `
  },
  {
    slug: 'transparencia-adsense',
    title: 'Transparência Google AdSense e Modelo de Sustentação | Brasil Calculadoras',
    description: 'Entenda nosso modelo de sustentação através do Google AdSense, nossas políticas contra anúncios invasivos e o compromisso com a privacidade e gratuidade dos simuladores.',
    heading: 'Transparência Google AdSense & Modelo Editorial',
    content: `
      <p style="font-size: 14px; line-height: 1.7; color: #334155; margin-bottom: 20px;">No <strong>Brasil Calculadoras</strong>, todas as 175 calculadoras especializadas, os 21 hubs de categoria e os artigos completos do diretório editorial são mantidos 100% gratuitos sem paywall nem assinatura, financiados por publicidade programática qualificada do <strong>Google AdSense</strong>.</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">Diretrizes Inegociáveis de Experiência e Pureza</h2>
      <ul style="font-size: 13.5px; line-height: 1.75; color: #475569; margin-bottom: 16px; padding-left: 20px;">
        <li><strong>ads.txt Exclusivo e Verificável:</strong> Nosso arquivo público <code>/ads.txt</code> autoriza exclusivamente nosso identificador oficial Google AdSense, garantindo transparência plena ao ecossistema publicitário.</li>
        <li><strong>Zero Scripts Intrusivos:</strong> Proibimos terminantemente pop-ups, pop-unders, redirecionamentos forçados ou blocos que prejudiquem o preenchimento das calculadoras.</li>
        <li><strong>Independência Editorial:</strong> Resultados matemáticos e conteúdos educativos não são influenciados por anunciantes.</li>
      </ul>
    `
  },
  {
    slug: 'anunciantes',
    title: 'Mídia, Publicidade e Parcerias Comerciais | Brasil Calculadoras',
    description: 'Conheça as oportunidades de mídia, veiculação programática via Google AdSense e parcerias institucionais no portal Brasil Calculadoras.',
    heading: 'Mídia & Parcerias Institucionais',
    content: `
      <p style="font-size: 14px; line-height: 1.7; color: #334155; margin-bottom: 20px;">O <strong>Brasil Calculadoras</strong> conecta ferramentas utilitárias gratuitas e educação prática a milhares de cidadãos, profissionais liberais, estudantes e empresários em todo o Brasil interessados em finanças pessoais, direitos trabalhistas CLT/PJ, mercado imobiliário e saúde.</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">Veiculação Programática e Cooperação Técnica</h2>
      <p style="font-size: 13.5px; line-height: 1.7; color: #475569; margin-bottom: 15px;">Toda veiculação comercial regular ocorre exclusivamente dentro dos espaços qualificados do inventário Google AdSense, respeitando métricas saudáveis de visibilidade e estabilidade visual (Core Web Vitals). Portais educativos e parceiros interessados em integração via API aberta podem consultar nossa documentação em <a href="/desenvolvedores" style="color: #1d4ed8; font-weight: 700;">/desenvolvedores</a> ou contatar nossa equipe pelo e-mail <strong>contato@brasilcalculadoras.com.br</strong>.</p>
    `
  }
];

legalPagesConfig.forEach(page => {
  const canonicalUrl = `https://www.brasilcalculadoras.com.br/${page.slug}`;
  const legalHtml = `
    ${buildHeaderHtml(false)}
    <main style="max-width: 820px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif;">
      <nav style="font-size: 12px; color: #666; margin-bottom: 25px;">
        <a href="/" style="color: #1d4ed8; text-decoration: none;">Início</a> / <span>${escapeHtml(page.heading)}</span>
      </nav>
      <article style="background: white; border: 1px solid #e2e8f0; padding: 35px; border-radius: 20px;">
        <h1 style="font-size: 26px; color: #0f172a; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; font-weight: 900;">${escapeHtml(page.heading)}</h1>
        ${page.content}
      </article>
    </main>
    ${sharedFooterHtml}
  `;
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": page.title,
    "description": page.description,
    "url": canonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Brasil Calculadoras",
      "url": "https://www.brasilcalculadoras.com.br"
    }
  };

  const rendered = injectMetadata(template, page.title, page.description, canonicalUrl, pageSchema, legalHtml);
  const pageDir = path.join(distPath, page.slug);
  ensureDir(pageDir);
  fs.writeFileSync(path.join(pageDir, 'index.html'), rendered, 'utf8');
  fs.writeFileSync(path.join(distPath, `${page.slug}.html`), rendered, 'utf8');
});
console.log('✅ Institutional & Legal Pages pre-rendered!');

// Generate static JSON API files
generateApiData();
console.log('✅ Endpoints públicos da API gerados com sucesso!');
