import fs from 'fs';
import path from 'path';
import { CALCULATORS_CATALOG } from './src/data/calculatorsCatalog';
import { CATEGORY_KEY_TO_SLUG, CATEGORY_MAP_RAW } from './src/utils/seoContentGenerator';
import { GUIDES_ARTICLES } from './src/data/guidesArticles';

const sitemapPath = path.resolve('./public/sitemap.xml');

const today = new Date().toISOString().split('T')[0];
const seenUrls = new Set<string>(['https://www.brasilcalculadoras.com.br/']);

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Página Principal / Central Geral -->
  <url>
    <loc>https://www.brasilcalculadoras.com.br/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

// Hubs de Categorias (somente slugs canônicos indexáveis)
Object.entries(CATEGORY_KEY_TO_SLUG).forEach(([key, slug]) => {
  const loc = `https://www.brasilcalculadoras.com.br/${slug}`;
  if (seenUrls.has(loc)) return;
  seenUrls.add(loc);
  const label = CATEGORY_MAP_RAW[key] || key;
  xml += `
  <!-- Categoria: ${label} -->
  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>`;
});

// Calculadoras Canônicas Únicas (deduplicadas por ID)
CALCULATORS_CATALOG.forEach((calc) => {
  const loc = `https://www.brasilcalculadoras.com.br/${calc.id}`;
  if (seenUrls.has(loc)) return;
  seenUrls.add(loc);
  xml += `
  <!-- ${calc.name} -->
  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.70</priority>
  </url>`;
});

// Hub Editorial e Artigos Educativos (/guias)
const guidesHubLoc = 'https://www.brasilcalculadoras.com.br/guias';
if (!seenUrls.has(guidesHubLoc)) {
  seenUrls.add(guidesHubLoc);
  xml += `
  <!-- Central de Guias e Artigos Educativos -->
  <url>
    <loc>${guidesHubLoc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>`;
}

GUIDES_ARTICLES.forEach((article) => {
  const loc = `https://www.brasilcalculadoras.com.br/guias/${article.slug}`;
  if (seenUrls.has(loc)) return;
  seenUrls.add(loc);
  xml += `
  <!-- Guia: ${article.title} -->
  <url>
    <loc>${loc}</loc>
    <lastmod>${article.updatedAt || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>`;
});

// Páginas Institucionais e Técnicas Canônicas (E-E-A-T e AdSense)
const institutionalEntries = [
  { slug: 'politica-de-privacidade', changefreq: 'monthly', priority: '0.50' },
  { slug: 'termos-de-uso', changefreq: 'monthly', priority: '0.50' },
  { slug: 'sobre', changefreq: 'monthly', priority: '0.50' },
  { slug: 'contato', changefreq: 'monthly', priority: '0.50' },
  { slug: 'cookies', changefreq: 'monthly', priority: '0.50' },
  { slug: 'anunciantes', changefreq: 'monthly', priority: '0.50' },
  { slug: 'desenvolvedores', changefreq: 'weekly', priority: '0.85' }
];

institutionalEntries.forEach(({ slug, changefreq, priority }) => {
  const loc = `https://www.brasilcalculadoras.com.br/${slug}`;
  if (seenUrls.has(loc)) return;
  seenUrls.add(loc);
  xml += `
  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
});

xml += `
</urlset>`;

fs.writeFileSync(sitemapPath, xml, 'utf-8');
console.log(`✅ Sitemap gerado com sucesso contendo ${seenUrls.size} URLs canônicas únicas!`);
