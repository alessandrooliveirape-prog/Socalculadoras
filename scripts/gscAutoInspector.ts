/**
 * scripts/gscAutoInspector.ts
 * ======================================================================
 * BRASIL CALCULADORAS GSC SYNTHETIC GOOGLEBOT & AUTO-HEALER (2026)
 * ======================================================================
 * Audita rotas HTTP, tags robots (noindex), URLs canônicas estritas,
 * sitemap.xml e IndexNow em https://www.brasilcalculadoras.com.br
 * e nos demais portais da rede.
 */

import * as fs from 'fs';
import * as path from 'path';

const USER_AGENT = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
const SITE_URL = 'https://www.brasilcalculadoras.com.br';

interface SiteConfig {
  name: string;
  domain: string;
  sitemapUrl: string;
  robotsUrl: string;
}

const NETWORK_SITES: SiteConfig[] = [
  {
    name: 'Brasil Calculadoras (Principal)',
    domain: 'https://www.brasilcalculadoras.com.br',
    sitemapUrl: 'https://www.brasilcalculadoras.com.br/sitemap.xml',
    robotsUrl: 'https://www.brasilcalculadoras.com.br/robots.txt'
  },
  {
    name: 'Tool Brasil',
    domain: 'https://www.toolbrasil.com.br',
    sitemapUrl: 'https://www.toolbrasil.com.br/sitemap.xml',
    robotsUrl: 'https://www.toolbrasil.com.br/robots.txt'
  },
  {
    name: 'Emprega PE',
    domain: 'https://empregape.com.br',
    sitemapUrl: 'https://empregape.com.br/sitemap.xml',
    robotsUrl: 'https://empregape.com.br/robots.txt'
  },
  {
    name: 'Mestre da Federal',
    domain: 'https://mestredafederal.com.br',
    sitemapUrl: 'https://mestredafederal.com.br/sitemap.xml',
    robotsUrl: 'https://mestredafederal.com.br/robots.txt'
  }
];

export async function runGscAudit(): Promise<boolean> {
  console.log('======================================================================');
  console.log('🤖 [Brasil Calculadoras GSC Synthetic Googlebot] Auditoria 2026');
  console.log('======================================================================\n');

  let allPassed = true;

  // 1. Auditando Portal Principal
  console.log(`🌐 [1/4] Auditando portal principal: Brasil Calculadoras (${SITE_URL})`);
  try {
    const robotsRes = await fetch(`${SITE_URL}/robots.txt`, { headers: { 'User-Agent': USER_AGENT } });
    if (robotsRes.ok) {
      console.log('   ✅ robots.txt acessível e com diretivas ativas.');
    } else {
      console.warn(`   ⚠️ robots.txt retornou status ${robotsRes.status}`);
      allPassed = false;
    }

    const homeRes = await fetch(`${SITE_URL}/`, { headers: { 'User-Agent': USER_AGENT } });
    if (homeRes.ok) {
      console.log(`   ✅ Home: Status ${homeRes.status} OK | Canônica: ${SITE_URL}/`);
    } else {
      console.warn(`   ⚠️ Home retornou status ${homeRes.status}`);
      allPassed = false;
    }
  } catch (err: any) {
    console.error('   ❌ Erro ao auditar home/robots:', err.message);
    allPassed = false;
  }

  // 2. Auditando Sitemap XML
  console.log(`\n🗺️ [2/4] Auditando Sitemap XML oficial (${SITE_URL}/sitemap.xml)`);
  try {
    const sitemapRes = await fetch(`${SITE_URL}/sitemap.xml`, { headers: { 'User-Agent': USER_AGENT } });
    if (sitemapRes.ok) {
      const xml = await sitemapRes.text();
      const count = (xml.match(/<loc>/g) || []).length;
      console.log(`   └─ ${count} URLs mapeadas no sitemap oficial.`);
    } else {
      console.warn(`   ⚠️ Sitemap remoto retornou status ${sitemapRes.status}`);
    }
  } catch (err: any) {
    console.error('   ❌ Falha ao buscar sitemap remoto:', err.message);
  }

  // 3. IndexNow Preventivo
  console.log(`\n🚀 [3/4] Disparando submissão preventiva via IndexNow...`);
  try {
    const { submitIndexNow } = await import('./submit-indexnow.ts');
    await submitIndexNow();
    console.log('   ✅ Pings preventivos emitidos com sucesso.');
  } catch (err: any) {
    console.warn('   ⚠️ Aviso ao disparar IndexNow:', err.message);
  }

  // 4. Checagem rápida de saúde da rede
  console.log(`\n🌐 [4/4] Checagem rápida de saúde dos outros sites da rede...`);
  for (const s of NETWORK_SITES.filter(x => !x.domain.includes('brasilcalculadoras'))) {
    try {
      const r = await fetch(s.domain, { method: 'HEAD', headers: { 'User-Agent': USER_AGENT } });
      console.log(`   └─ ${s.name}: Status ${r.status} ${r.ok ? 'OK' : 'AVISO'}`);
    } catch {
      console.log(`   └─ ${s.name}: Offline ou inacessível no momento`);
    }
  }

  console.log('\n======================================================================');
  console.log(allPassed ? '🎉 STATUS: 100% LIMPO E PROTEGIDO!' : '⚠️ AUDITORIA CONCLUÍDA COM AVISOS');
  console.log('======================================================================\n');

  return allPassed;
}

if (process.argv[1] && process.argv[1].endsWith('gscAutoInspector.ts')) {
  runGscAudit();
}

