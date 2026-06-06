import { CALCULATORS_CATALOG } from '../data/calculatorsCatalog';
import { CATEGORY_KEY_TO_SLUG } from './seoContentGenerator';

export interface SeoPerformanceMetric {
  url: string;
  views: number;
  conversions: number; // saves, exports, shares
  ctrEstimated?: number;
  priority: 'High' | 'Medium' | 'Low';
  targetKeywords: string[];
}

// Initial Google Search Console target tracking registry
export const SEO_MONITOR_REGISTRY: Record<string, { priority: 'High' | 'Medium' | 'Low'; keywords: string[] }> = {
  '/': { priority: 'High', keywords: ['calculadoras online', 'calculadora gratis', 'central de calculos'] },
  '/calculo-fgts-acumulado': { priority: 'High', keywords: ['calculadora de fgts', 'calcular saldo fgts', 'calculo fgts acumulado'] },
  '/juros-compostos': { priority: 'High', keywords: ['calculadora juros compostos', 'simular juros compostos', 'evolucao investimentos'] },
  '/clt-pj': { priority: 'High', keywords: ['comparador clt pj', 'clt ou pj', 'salario clt equivalente pj'] },
  '/calculadora-de-rescisao-clt': { priority: 'High', keywords: ['calculadora rescisao clt', 'acerto rescisao trabalhista', 'saldo rescisao'] },
  '/calculadora-de-decimo-terceiro': { priority: 'High', keywords: ['calculo decimo terceiro', 'parcela 13o salario', 'simulador 13'] },
  '/calculadora-de-ferias-clt': { priority: 'High', keywords: ['calculadora de ferias', 'ferias clt terco constitucional', 'vender ferias'] },
  '/calculadora-de-horas-extras': { priority: 'High', keywords: ['calcular hora extra', 'adicional hora extra 50% 100%'] },
  '/simulador-de-aposentadoria-inss': { priority: 'High', keywords: ['simulador inss aposentadoria', 'tempo contribuicao inss'] },
  '/imc': { priority: 'Medium', keywords: ['calculadora imc tracker', 'taxa metabolica basal bmr', 'gasto calorico diario'] }
};

// Log a pageview, export, or save operation in local analytics state
export const logSeoInteraction = (path: string, eventType: 'view' | 'click' | 'conversion') => {
  try {
    const rawData = localStorage.getItem('seo_page_metrics') || '{}';
    const metrics = JSON.parse(rawData);

    if (!metrics[path]) {
      metrics[path] = { views: 0, clicks: 0, conversions: 0 };
    }

    if (eventType === 'view') {
      metrics[path].views += 1;
    } else if (eventType === 'click') {
      metrics[path].clicks += 1;
    } else if (eventType === 'conversion') {
      metrics[path].conversions += 1;
    }

    localStorage.setItem('seo_page_metrics', JSON.stringify(metrics));

    // Console logging to help monitoring without breaking SPA performance
    console.info(`[SEO Monitor] Logged ${eventType} on ${path}`);
  } catch (e) {
    console.warn('[SEO Monitor] Failed to log interaction:', e);
  }
};

// Return a sorted report of pages by potential (low conversions vs high views, or vice versa)
export const getSeoPerformanceReport = (): SeoPerformanceMetric[] => {
  try {
    const rawData = localStorage.getItem('seo_page_metrics') || '{}';
    const loggedMetrics = JSON.parse(rawData);

    const report: SeoPerformanceMetric[] = [];

    // Add home
    report.push({
      url: '/',
      views: loggedMetrics['/']?.views || 0,
      conversions: loggedMetrics['/']?.conversions || 0,
      priority: 'High',
      targetKeywords: SEO_MONITOR_REGISTRY['/']?.keywords || []
    });

    // Add category hubs
    Object.keys(CATEGORY_KEY_TO_SLUG).forEach((catKey) => {
      const slug = '/' + CATEGORY_KEY_TO_SLUG[catKey];
      report.push({
        url: slug,
        views: loggedMetrics[slug]?.views || 0,
        conversions: loggedMetrics[slug]?.conversions || 0,
        priority: SEO_MONITOR_REGISTRY[slug]?.priority || 'Medium',
        targetKeywords: SEO_MONITOR_REGISTRY[slug]?.keywords || [`calculadoras de ${catKey}`, `simuladores ${catKey}`]
      });
    });

    // Add calculators
    CALCULATORS_CATALOG.forEach((calc) => {
      const path = '/' + calc.id;
      const target = SEO_MONITOR_REGISTRY[path];
      report.push({
        url: path,
        views: loggedMetrics[path]?.views || 0,
        conversions: loggedMetrics[path]?.conversions || 0,
        priority: target?.priority || 'Low',
        targetKeywords: target?.keywords || [calc.name.toLowerCase(), `calcular ${calc.name.toLowerCase()}`]
      });
    });

    return report.sort((a, b) => b.views - a.views);
  } catch (e) {
    console.error('[SEO Monitor] Failed to compile report:', e);
    return [];
  }
};
