import fs from 'fs';
import path from 'path';
import { CALCULATORS_CATALOG } from './src/data/calculatorsCatalog';

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
console.log(`✅ Sitemap gerado com sucesso contendo ${CALCULATORS_CATALOG.length + 1} URLs!`);
