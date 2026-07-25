import fs from 'fs';
import path from 'path';
import { CALCULATORS_CATALOG } from './src/data/calculatorsCatalog';
import { CATEGORY_KEY_TO_SLUG, CATEGORY_MAP_RAW } from './src/utils/seoContentGenerator';

const sitemapPath = path.resolve('./public/sitemap.xml');

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Página Principal / Central Geral -->
  <url>
    <loc>https://www.brasilcalculadoras.com.br/</loc>
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
    <loc>https://www.brasilcalculadoras.com.br/${slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
  </url>`;
});

CALCULATORS_CATALOG.forEach((calc) => {
  xml += `
  <!-- ${calc.name} -->
  <url>
    <loc>https://www.brasilcalculadoras.com.br/${calc.id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.70</priority>
  </url>`;
});

// Páginas Institucionais (E-E-A-T e AdSense)
xml += `
  <!-- Páginas Institucionais -->
  <url>
    <loc>https://www.brasilcalculadoras.com.br/politica-de-privacidade</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.50</priority>
  </url>
  <url>
    <loc>https://www.brasilcalculadoras.com.br/termos-de-uso</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.50</priority>
  </url>
  <url>
    <loc>https://www.brasilcalculadoras.com.br/sobre</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.50</priority>
  </url>
  <url>
    <loc>https://www.brasilcalculadoras.com.br/contato</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.50</priority>
  </url>
</urlset>`;

fs.writeFileSync(sitemapPath, xml, 'utf-8');
console.log(`✅ Sitemap gerado com sucesso contendo ${CALCULATORS_CATALOG.length + 5 + Object.keys(CATEGORY_KEY_TO_SLUG).length} URLs!`);
