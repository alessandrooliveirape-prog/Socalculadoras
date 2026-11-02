/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Script de Envio Automático para a API do IndexNow (Brasil Calculadoras)
 * Envia instantaneamente todas as URLs do sitemap.xml para Bing, Yandex e motores parceiros.
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = 'www.brasilcalculadoras.com.br';
const INDEXNOW_KEY = 'antigravityseokey2026';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

export async function submitIndexNow(): Promise<number> {
  console.log('📡 Iniciando submissão em lote para o protocolo IndexNow (Brasil Calculadoras)...');

  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error(`❌ Erro: Arquivo sitemap não encontrado em '${sitemapPath}'.`);
    return 0;
  }

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const locRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  const urls: string[] = [];
  let match;

  while ((match = locRegex.exec(sitemapContent)) !== null) {
    urls.push(match[1].trim());
  }

  console.log(`🔍 Total de URLs extraídas do sitemap: ${urls.length}`);

  if (urls.length === 0) {
    console.error('❌ Nenhuma URL encontrada no sitemap.');
    return 0;
  }

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow'
  ];

  let successCount = 0;
  for (const endpoint of endpoints) {
    try {
      console.log(`🚀 Enviando ${urls.length} URLs para ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok || response.status === 200 || response.status === 202) {
        console.log(`✅ Sucesso! IndexNow respondeu com status ${response.status} (${endpoint}).`);
        successCount++;
      } else {
        const errorText = await response.text();
        console.warn(`⚠️ Aviso: Resposta inesperada de ${endpoint}: ${response.status} - ${errorText}`);
      }
    } catch (err: any) {
      console.error(`❌ Erro ao conectar com o endpoint ${endpoint}:`, err.message);
    }
  }

  return successCount;
}

if (process.argv[1] && process.argv[1].endsWith('submit-indexnow.ts')) {
  submitIndexNow().then(count => {
    console.log(`🎉 Processo concluído com ${count} envios bem-sucedidos.`);
  });
}

