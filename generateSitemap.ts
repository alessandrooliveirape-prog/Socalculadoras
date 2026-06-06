import fs from 'fs';
import path from 'path';
import { CALCULATORS_CATALOG } from './src/data/calculatorsCatalog';
import { CATEGORY_KEY_TO_SLUG, CATEGORY_MAP_RAW } from './src/utils/seoContentGenerator';

const sitemapPath = path.resolve('./public/sitemap.xml');

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Página Principal / Central Geral -->
  <url>
    <loc>https://brasilcalculadoras.com.br/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

// Hubs de Categorias
Object.entries(CATEGORY_KEY_TO_SLUG).forEach(([key, slug]) => {
  const label = CATEGORY_MAP_RAW[key] || key;
  xml += `
  <!-- Categoria: ${label} -->
  <url>
    <loc>https://brasilcalculadoras.com.br/${slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.90</priority>
  </url>`;
});

CALCULATORS_CATALOG.forEach((calc) => {
  xml += `
  <!-- ${calc.name} -->
  <url>
    <loc>https://brasilcalculadoras.com.br/${calc.id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>`;
});

xml += `\n</urlset>`;

fs.writeFileSync(sitemapPath, xml, 'utf-8');
console.log(`✅ Sitemap gerado com sucesso contendo ${CALCULATORS_CATALOG.length + 1 + Object.keys(CATEGORY_KEY_TO_SLUG).length} URLs!`);

