import fs from 'fs';
import path from 'path';
import { CALCULATORS_CATALOG } from './src/data/calculatorsCatalog';
import { 
  getSeoContentForCalculator, 
  getCategoryHubContent, 
  CATEGORY_KEY_TO_SLUG, 
  CATEGORY_MAP_RAW 
} from './src/utils/seoContentGenerator';

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

// 1. Pre-render Homepage
const homeTitle = 'Brasil Calculadoras | Calculadoras Online Gratuitas Finanças, Trabalho e Saúde';
const homeDesc = 'Calculadoras online gratuitas para finanças, trabalho, saúde, estudos, veículos e muito mais. Simulações rápidas, sem cadastro e 100% gratuitas.';
const homeUrl = 'https://brasilcalculadoras.com.br/';

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Brasil Calculadoras",
  "url": "https://brasilcalculadoras.com.br/",
  "description": homeDesc,
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://brasilcalculadoras.com.br/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const homeHtml = `
  <header style="padding: 20px; border-bottom: 1px solid #eee; display: flex; align-items: center; justify-content: space-between; font-family: sans-serif;">
    <div style="display: flex; align-items: center; gap: 10px;">
      <img src="/logo.svg" alt="Brasil Calculadoras" style="height: 36px; width: 36px;" />
      <div>
        <strong style="font-size: 18px; color: #1e293b;">Brasil Calculadoras</strong><br/>
        <small style="color: #888; font-size: 10px; font-weight: bold; tracking-wider;">FERRAMENTAS DE EXCELÊNCIA</small>
      </div>
    </div>
  </header>
  <main style="max-width: 1200px; margin: 0 auto; padding: 20px; font-family: sans-serif;">
    <section style="text-align: center; padding: 60px 20px; background: #0f172a; color: white; border-radius: 24px; margin-bottom: 40px;">
      <h1 style="font-size: 32px; margin-bottom: 15px; font-weight: 900; line-height: 1.2;">Calculadoras online gratuitas para finanças, trabalho, saúde, estudos, veículos e muito mais.</h1>
      <p style="color: #94a3b8; font-size: 16px; max-width: 700px; margin: 0 auto; line-height: 1.6;">Facilite sua rotina com cálculos exatos e relatórios profissionais. Ferramentas sem burocracias, sem cadastro e 100% atualizadas.</p>
    </section>

    <section style="margin-bottom: 45px;">
      <h2 style="font-size: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; width: fit-content; margin-bottom: 20px; font-weight: 800; color: #0f172a;">Calculadoras mais acessadas</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 16px;"><a href="/juros-compostos" style="color: #3b82f6; text-decoration: none; font-weight: bold;">Juros Compostos</a></h3>
          <p style="font-size: 12.5px; color: #64748b; line-height: 1.5; margin-bottom: 0;">Calcule a evolução capital de investimentos com depósitos recorrentes e taxa SELIC/poupança.</p>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 16px;"><a href="/clt-pj" style="color: #3b82f6; text-decoration: none; font-weight: bold;">Comparador CLT vs PJ</a></h3>
          <p style="font-size: 12.5px; color: #64748b; line-height: 1.5; margin-bottom: 0;">Compare remunerações líquidas de carteira assinada versus prestador de serviços.</p>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 16px;"><a href="/calculadora-de-rescisao-clt" style="color: #3b82f6; text-decoration: none; font-weight: bold;">Cálculo de Rescisão CLT</a></h3>
          <p style="font-size: 12.5px; color: #64748b; line-height: 1.5; margin-bottom: 0;">Simulação completa de acertos rescisórios para demissões com ou sem justa causa e acordos.</p>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 16px;"><a href="/calculadora-de-decimo-terceiro" style="color: #3b82f6; text-decoration: none; font-weight: bold;">Cálculo de 13º Salário</a></h3>
          <p style="font-size: 12.5px; color: #64748b; line-height: 1.5; margin-bottom: 0;">Estime o valor bruto e líquido das parcelas de bônus salarial de final de ano.</p>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 16px;"><a href="/imc" style="color: #3b82f6; text-decoration: none; font-weight: bold;">Metabolismo e IMC Tracker</a></h3>
          <p style="font-size: 12.5px; color: #64748b; line-height: 1.5; margin-bottom: 0;">Descubra seu Índice de Massa Corporal (IMC) e taxa de queima metabólica BMR.</p>
        </div>
        <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 16px; background: #fff;">
          <h3 style="margin-top: 0; font-size: 16px;"><a href="/regra-tres" style="color: #3b82f6; text-decoration: none; font-weight: bold;">Regra de Três Rápida</a></h3>
          <p style="font-size: 12.5px; color: #64748b; line-height: 1.5; margin-bottom: 0;">Resolva proporções matemáticas simples de forma direta ou inversa entre frações.</p>
        </div>
      </div>
    </section>

    <section style="margin-bottom: 45px;">
      <h2 style="font-size: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; width: fit-content; margin-bottom: 20px; font-weight: 800; color: #0f172a;">Categorias de Simuladores</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        ${Object.entries(CATEGORY_MAP_RAW).map(([key, label]) => `
          <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 16px; background: #fff;">
            <h3 style="margin-top: 0; font-size: 16px; font-weight: bold;"><a href="/${CATEGORY_KEY_TO_SLUG[key]}" style="color: #3b82f6; text-decoration: none;">${label}</a></h3>
            <p style="font-size: 12.5px; color: #64748b; line-height: 1.5; margin-bottom: 0;">Acesse nosso catálogo completo de simuladores focados em ${label.toLowerCase()}.</p>
          </div>
        `).join('')}
      </div>
    </section>
  </main>
`;

function injectMetadata(htmlTemplate: string, title: string, description: string, url: string, schema: any, bodyContent: string) {
  let res = htmlTemplate;
  // Replace title
  res = res.replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`);
  
  // Replace description
  if (res.includes('name="description"')) {
    res = res.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${description}" />`);
  } else {
    res = res.replace('</head>', `<meta name="description" content="${description}" />\n</head>`);
  }

  // Replace canonical URL
  if (res.includes('rel="canonical"')) {
    res = res.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${url}" />`);
  } else {
    res = res.replace('</head>', `<link rel="canonical" href="${url}" />\n</head>`);
  }

  // Add Open Graph tags
  const ogTags = `
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
  `;
  res = res.replace('</head>', `${ogTags}\n</head>`);

  // Add JSON-LD schema
  const schemaScript = `<script type="application/ld+json" id="jsonld-seo">${JSON.stringify(schema)}</script>`;
  res = res.replace('</head>', `${schemaScript}\n</head>`);

  // Inject body content into div#root
  res = res.replace('<div id="root"></div>', `<div id="root">${bodyContent}</div>`);
  
  return res;
}

// Save Homepage pre-rendered HTML
const homePreRendered = injectMetadata(template, homeTitle, homeDesc, homeUrl, homepageSchema, homeHtml);
fs.writeFileSync(templatePath, homePreRendered, 'utf8');
console.log('✅ Homepage pre-rendered!');

// 2. Pre-render Category Hubs
Object.entries(CATEGORY_KEY_TO_SLUG).forEach(([catKey, slug]) => {
  const hubData = getCategoryHubContent(catKey);
  const canonicalUrl = `https://brasilcalculadoras.com.br/${slug}`;
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
        "item": "https://brasilcalculadoras.com.br/"
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

  const hubHtml = `
    <header style="padding: 20px; border-bottom: 1px solid #eee; display: flex; align-items: center; gap: 10px; font-family: sans-serif;">
      <a href="/" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 10px;">
        <img src="/logo.svg" alt="Brasil Calculadoras" style="height: 36px; width: 36px;" />
        <div>
          <strong style="font-size: 18px; color: #1e293b;">Brasil Calculadoras</strong><br/>
          <small style="color: #888; font-size: 10px; font-weight: bold; tracking-wider;">FERRAMENTAS DE EXCELÊNCIA</small>
        </div>
      </a>
    </header>
    <main style="max-width: 1000px; margin: 0 auto; padding: 20px; font-family: sans-serif;">
      <nav style="font-size: 12px; color: #666; margin-bottom: 20px; font-weight: 600;">
        <a href="/" style="color: #3b82f6; text-decoration: none;">Início</a> / <span>${label}</span>
      </nav>
      
      <section style="background: white; border: 1px solid #ddd; padding: 30px; border-radius: 16px; margin-bottom: 30px;">
        <h1 style="font-size: 26px; color: #1e293b; margin-top: 0; margin-bottom: 15px; font-weight: 900;">${hubData.title}</h1>
        <p style="color: #475569; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">${hubData.introduction}</p>
        <div style="border-top: 1px solid #eee; padding-top: 15px;">
          <h2 style="font-size: 16px; color: #0f172a; margin-top: 0; margin-bottom: 10px; font-weight: 800;">Importância do Planejamento</h2>
          <p style="color: #64748b; font-size: 13px; line-height: 1.5; margin: 0;">${hubData.importance}</p>
        </div>
      </section>

      <section style="margin-bottom: 40px;">
        <h2 style="font-size: 18px; color: #0f172a; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 5px; width: fit-content; font-weight: 800;">Calculadoras Disponíveis</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
          ${catCalcs.map(c => `
            <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; background: #fff;">
              <h3 style="margin-top: 0; font-size: 15px; font-weight: bold;"><a href="/${c.id}" style="color: #3b82f6; text-decoration: none;">${c.name}</a></h3>
              <p style="font-size: 12px; color: #64748b; line-height: 1.5; margin-bottom: 0;">${c.description}</p>
            </div>
          `).join('')}
        </div>
      </section>

      ${hubData.faq.length > 0 ? `
        <section style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 25px; border-radius: 16px;">
          <h2 style="font-size: 18px; color: #0f172a; margin-top: 0; margin-bottom: 15px; font-weight: 800;">Perguntas Frequentes da Categoria</h2>
          ${hubData.faq.map(q => `
            <div style="margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">
              <h3 style="font-size: 14px; color: #334155; margin-bottom: 8px; font-weight: 700;">${q.q}</h3>
              <p style="font-size: 12.5px; color: #64748b; line-height: 1.5; margin: 0;">${q.a}</p>
            </div>
          `).join('')}
        </section>
      ` : ''}
    </main>
  `;

  const rendered = injectMetadata(template, hubData.title, hubData.description, canonicalUrl, [collectionSchema, breadcrumbSchema], hubHtml);
  const catDir = path.join(distPath, slug);
  ensureDir(catDir);
  fs.writeFileSync(path.join(catDir, 'index.html'), rendered, 'utf8');
});
console.log('✅ Category Hubs pre-rendered!');

// 3. Pre-render Priority Calculators
CALCULATORS_CATALOG.forEach(calc => {
  const seoData = getSeoContentForCalculator(calc);
  const canonicalUrl = `https://brasilcalculadoras.com.br/${calc.id}`;
  const catLabel = CATEGORY_MAP_RAW[calc.category] || calc.category;
  const catSlug = CATEGORY_KEY_TO_SLUG[calc.category] || '';

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${canonicalUrl}#software`,
    "name": calc.name,
    "operatingSystem": "All",
    "applicationCategory": "EducationalApplication",
    "description": seoData.description,
    "url": canonicalUrl,
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "BRL"
    }
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
        "item": "https://brasilcalculadoras.com.br/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": catLabel,
        "item": `https://brasilcalculadoras.com.br/${catSlug}`
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
    <header style="padding: 20px; border-bottom: 1px solid #eee; display: flex; align-items: center; gap: 10px; font-family: sans-serif;">
      <a href="/" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 10px;">
        <img src="/logo.svg" alt="Brasil Calculadoras" style="height: 36px; width: 36px;" />
        <div>
          <strong style="font-size: 18px; color: #1e293b;">Brasil Calculadoras</strong><br/>
          <small style="color: #888; font-size: 10px; font-weight: bold; tracking-wider;">FERRAMENTAS DE EXCELÊNCIA</small>
        </div>
      </a>
    </header>
    <main style="max-width: 900px; margin: 0 auto; padding: 20px; font-family: sans-serif;">
      <nav style="font-size: 11px; color: #888; margin-bottom: 20px; font-weight: 600;">
        <a href="/" style="color: #3b82f6; text-decoration: none;">Início</a> / 
        <a href="/${catSlug}" style="color: #3b82f6; text-decoration: none;">${catLabel}</a> / 
        <span>${calc.name}</span>
      </nav>

      <section style="background: white; border: 1px solid #ddd; padding: 25px; border-radius: 16px; margin-bottom: 30px;">
        <h1 style="font-size: 24px; color: #1e293b; margin-top: 0; margin-bottom: 10px; font-weight: 900;">${calc.name}</h1>
        <p style="color: #475569; font-size: 13.5px; line-height: 1.6; margin-bottom: 0;">${calc.description}</p>
      </section>

      <section style="background: #f8fafc; border: 1px dashed #cbd5e1; padding: 40px 20px; text-align: center; border-radius: 16px; margin-bottom: 35px; color: #64748b;">
        <h2 style="font-size: 16px; color: #475569; margin-top: 0; margin-bottom: 10px; font-weight: 800;">Simulador Interativo Ativo</h2>
        <p style="font-size: 12px; margin-bottom: 0;">O formulário dinâmico e os gráficos estão sendo carregados. Habilite o JavaScript no seu navegador para simular.</p>
      </section>

      <section style="margin-bottom: 35px;">
        <h2 style="font-size: 16px; color: #0f172a; margin-bottom: 10px; font-weight: 800;">O que é e para que serve</h2>
        <p style="font-size: 13px; color: #475569; line-height: 1.6; margin-bottom: 20px;">${seoData.whatIs}</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
          <div>
            <h3 style="font-size: 14px; color: #0f172a; margin-bottom: 5px; font-weight: 700;">Como Calcular</h3>
            <p style="font-size: 12.5px; color: #64748b; line-height: 1.5; margin: 0;">${seoData.howItWorks}</p>
          </div>
          <div>
            <h3 style="font-size: 14px; color: #0f172a; margin-bottom: 5px; font-weight: 700;">Exemplo Prático</h3>
            <p style="font-size: 12.5px; color: #64748b; line-height: 1.5; margin: 0;">${seoData.practicalExample}</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div>
            <h3 style="font-size: 14px; color: #0f172a; margin-bottom: 5px; font-weight: 700;">Quando Usar</h3>
            <p style="font-size: 12.5px; color: #64748b; line-height: 1.5; margin: 0;">${seoData.whenToUse}</p>
          </div>
          <div>
            <h3 style="font-size: 14px; color: #0f172a; margin-bottom: 5px; font-weight: 700;">Dicas Importantes</h3>
            <p style="font-size: 12.5px; color: #64748b; line-height: 1.5; margin: 0;">${seoData.importantTips}</p>
          </div>
        </div>
      </section>

      ${seoData.faq.length > 0 ? `
        <section style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 25px; border-radius: 16px; margin-bottom: 35px;">
          <h2 style="font-size: 16px; color: #0f172a; margin-top: 0; margin-bottom: 15px; font-weight: 800;">Perguntas Frequentes (FAQ)</h2>
          ${seoData.faq.map(q => `
            <div style="margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">
              <h3 style="font-size: 13.5px; color: #334155; margin-bottom: 8px; font-weight: 700;">${q.q}</h3>
              <p style="font-size: 12px; color: #64748b; line-height: 1.5; margin: 0;">${q.a}</p>
            </div>
          `).join('')}
        </section>
      ` : ''}

      ${seoData.sources.length > 0 ? `
        <section style="font-size: 11px; color: #888; border-top: 1px solid #eee; padding-top: 15px;">
          <span>Fontes Oficiais de Referência:</span>
          ${seoData.sources.map(src => `<a href="${src.url}" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: none; margin-left: 8px;">${src.name}</a>`).join(', ')}
          <span style="float: right;">Revisado em: ${seoData.lastUpdated}</span>
        </section>
      ` : ''}
    </main>
  `;

  const rendered = injectMetadata(template, seoData.title, seoData.description, canonicalUrl, [softwareSchema, breadcrumbSchema], calcHtml);
  const calcDir = path.join(distPath, calc.id);
  ensureDir(calcDir);
  fs.writeFileSync(path.join(calcDir, 'index.html'), rendered, 'utf8');
});
console.log('✅ Priority Calculators pre-rendered!');

// 4. Pre-render Institutional & Legal Pages (AdSense & EEAT Compliance)
const legalPagesConfig = [
  {
    slug: 'politica-de-privacidade',
    title: 'Política de Privacidade | Brasil Calculadoras',
    description: 'Confira nossa Política de Privacidade. Saiba como seus dados são protegidos e como utilizamos cookies em conformidade com a LGPD e o Google AdSense.',
    heading: 'Política de Privacidade',
    content: `
      <p style="font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 20px;">A sua privacidade é de extrema importância para o <strong>Brasil Calculadoras</strong>. Esta Política de Privacidade descreve de forma clara como informações são tratadas em conformidade com a LGPD e o Regulamento Geral de Proteção de Dados (GDPR).</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">Arquivos de Log e Cookies do Google AdSense</h2>
      <p style="font-size: 13.5px; line-height: 1.6; color: #475569; margin-bottom: 15px;">Terceiros, incluindo o Google, usam cookies para veicular anúncios com base em visitas anteriores do usuário a este site. Com o uso de cookies de publicidade (incluindo o cookie DART), o Google e seus parceiros podem veicular anúncios para os usuários com base em suas visitas na Internet.</p>
      <p style="font-size: 13.5px; line-height: 1.6; color: #475569;">Os usuários podem desativar a publicidade personalizada acessando as Configurações de Anúncios do Google. Todas as simulações em nossas calculadoras são processadas estritamente de forma local no navegador do usuário.</p>
    `
  },
  {
    slug: 'termos-de-uso',
    title: 'Termos e Condições de Uso | Brasil Calculadoras',
    description: 'Conheça os Termos e Condições de Uso da plataforma Brasil Calculadoras e entenda a natureza informativa de nossas ferramentas gratuitas.',
    heading: 'Termos e Condições de Uso',
    content: `
      <p style="font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 20px;">Ao acessar e utilizar o Brasil Calculadoras, você concorda com nossos Termos de Uso. Todas as nossas ferramentas e simuladores têm caráter exclusivamente educativo e informativo.</p>
      <h2 style="font-size: 18px; color: #0f172a; margin-top: 25px; margin-bottom: 10px;">Isenção de Responsabilidade</h2>
      <p style="font-size: 13.5px; line-height: 1.6; color: #475569;">Os resultados emitidos não constituem pareceres jurídicos, médicos ou contábeis definitivos. Recomendamos a consulta com profissionais regulados (advogados, contadores ou nutricionistas) para decisões oficiais.</p>
    `
  },
  {
    slug: 'sobre',
    title: 'Sobre a Central | Brasil Calculadoras',
    description: 'Saiba mais sobre a missão do Brasil Calculadoras, nossa equipe técnica e nosso compromisso com a exatidão matemática e utilidade pública.',
    heading: 'Sobre o Brasil Calculadoras',
    content: `
      <p style="font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 20px;">O Brasil Calculadoras é um portal dedicado a disponibilizar ferramentas gratuitas, céleres e de alta precisão técnica para o público brasileiro em áreas trabalhistas, financeiras, saúde e utilidades.</p>
      <p style="font-size: 13.5px; line-height: 1.6; color: #475569;">Operado por Brasil Calculadoras Tecnologia & Mídia Digital Ltd. (CNPJ 41.524.305/0001-90), priorizamos rigor técnico, transparência E-E-A-T e navegação livre de burocracias.</p>
    `
  },
  {
    slug: 'contato',
    title: 'Contato e Suporte | Brasil Calculadoras',
    description: 'Entre em contato com a equipe do Brasil Calculadoras para tirar dúvidas, enviar sugestões ou reportar pontos de melhoria.',
    heading: 'Contato & Suporte Técnico',
    content: `
      <p style="font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 20px;">Estamos à disposição para atender dúvidas, sugestões de novas ferramentas e contatos de parcerias institucionais.</p>
      <p style="font-size: 14px; font-weight: bold; color: #2563eb;">E-mail oficial: contato@brasilcalculadoras.com.br</p>
    `
  }
];

legalPagesConfig.forEach(page => {
  const canonicalUrl = `https://brasilcalculadoras.com.br/${page.slug}`;
  const legalHtml = `
    <header style="padding: 20px; border-bottom: 1px solid #eee; display: flex; align-items: center; gap: 10px; font-family: sans-serif;">
      <a href="/" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 10px;">
        <img src="/logo.svg" alt="Brasil Calculadoras" style="height: 36px; width: 36px;" />
        <div>
          <strong style="font-size: 18px; color: #1e293b;">Brasil Calculadoras</strong><br/>
          <small style="color: #888; font-size: 10px; font-weight: bold;">FERRAMENTAS DE EXCELÊNCIA</small>
        </div>
      </a>
    </header>
    <main style="max-width: 800px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif;">
      <nav style="font-size: 12px; color: #666; margin-bottom: 25px;">
        <a href="/" style="color: #3b82f6; text-decoration: none;">Início</a> / <span>${page.heading}</span>
      </nav>
      <article style="background: white; border: 1px solid #e2e8f0; padding: 35px; border-radius: 20px;">
        <h1 style="font-size: 26px; color: #0f172a; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; font-weight: 900;">${page.heading}</h1>
        ${page.content}
      </article>
    </main>
  `;
  const rendered = injectMetadata(template, page.title, page.description, canonicalUrl, {}, legalHtml);
  const pageDir = path.join(distPath, page.slug);
  ensureDir(pageDir);
  fs.writeFileSync(path.join(pageDir, 'index.html'), rendered, 'utf8');
});
console.log('✅ Institutional & Legal Pages pre-rendered!');

