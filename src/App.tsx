import React, { useState, useEffect, useRef } from 'react';
import { jsPDF } from 'jspdf';
import { 
  Calculator, 
  Search, 
  DollarSign, 
  HeartPulse, 
  Clock, 
  Download, 
  HelpCircle, 
  Menu, 
  X, 
  Share2, 
  TrendingUp, 
  Sparkles, 
  History, 
  Coins, 
  MonitorPlay,
  CheckCircle,
  FileDown,
  Copy,
  ExternalLink,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'wouter';

// Custom imports
import { CalculatorId, CalculatorCategory, CalculatorDef, HistoryEntry } from './types';
import { AdSenseBanner } from './components/AdSenseBanner';
import { LegalPage } from './components/LegalPages';
import { CompoundInterestCalc } from './components/CompoundInterestCalc';
import { CltVsPjCalc } from './components/CltVsPjCalc';
import { ProfitMarginCalc } from './components/ProfitMarginCalc';
import { IbcCaloricoTracker } from './components/IbcCaloricoTracker';
import { TimeSheetHoursCalc } from './components/TimeSheetHoursCalc';
import { RuleOf3AndTextTools } from './components/RuleOf3AndTextTools';
import { CalculatorHistory } from './components/CalculatorHistory';
import { RescisaoCLTCalc } from './components/RescisaoCLTCalc';
import { DecimoTerceiroCalc } from './components/DecimoTerceiroCalc';
import { FeriasCLTCalc } from './components/FeriasCLTCalc';
import { HorasExtrasCalc } from './components/HorasExtrasCalc';
import { AposentadoriaINSSCalc } from './components/AposentadoriaINSSCalc';
import { GenericDynamicCalc } from './components/GenericDynamicCalc';
import { FooterAndLegals } from './components/FooterAndLegals';
import { HomepageView } from './components/HomepageView';
import { SimplePercentageCalc } from './components/SimplePercentageCalc';
import { CarFinanceCalc } from './components/CarFinanceCalc';
import { AdSenseEarningsCalc } from './components/AdSenseEarningsCalc';
import { CALCULATORS_CATALOG, CATEGORY_MAP } from './data/calculatorsCatalog';
import { buildHistorySummary } from './utils/historyManager';
import { handleExportCSV } from './utils/exportCSV';
import { handleExportPDF } from './utils/exportPDF';
import { 
  getSeoContentForCalculator, 
  getCategoryHubContent, 
  CATEGORY_SLUG_MAP, 
  CATEGORY_KEY_TO_SLUG, 
  CATEGORY_MAP_RAW 
} from './utils/seoContentGenerator';
import { logSeoInteraction } from './utils/seoMonitor';


const Breadcrumbs: React.FC<{ catKey?: string; calcName?: string; catSlug?: string }> = ({ catKey, calcName, catSlug }) => {
  if (!catKey) return null;
  const [_, setLocation] = useLocation();
  const catLabel = CATEGORY_MAP_RAW[catKey] || catKey;
  return (
    <nav className="flex items-center gap-1.5 text-[11px] font-sans text-slate-400 font-semibold mb-4 bg-white/70 border border-slate-200/50 p-2.5 px-4 rounded-xl shadow-xs w-fit select-none">
      <span className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => setLocation('/')}>Início</span>
      <span className="text-slate-300">/</span>
      {calcName ? (
        <>
          <span className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => setLocation('/' + catSlug)}>{catLabel}</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700">{calcName}</span>
        </>
      ) : (
        <span className="text-slate-700">{catLabel}</span>
      )}
    </nav>
  );
};

const getComplementaryCalculators = (id: string, category: string) => {
  const map: Record<string, string[]> = {
    'calculo-fgts-acumulado': ['calculadora-de-rescisao-clt', 'calculadora-de-ferias-clt', 'calculadora-de-decimo-terceiro'],
    'juros-compostos': ['rendimento-poupanca', 'conversor-inflacao-ipca', 'roi-investimento-comum'],
    'clt-pj': ['calculadora-de-rescisao-clt', 'simulador-inss-salario', 'calculo-fgts-acumulado'],
    'calculadora-de-rescisao-clt': ['calculadora-de-decimo-terceiro', 'calculadora-de-ferias-clt', 'calculo-fgts-acumulado'],
    'calculadora-de-decimo-terceiro': ['calculadora-de-ferias-clt', 'calculadora-de-horas-extras', 'calculadora-de-rescisao-clt'],
    'calculadora-de-ferias-clt': ['calculadora-de-decimo-terceiro', 'calculadora-de-horas-extras', 'calculadora-de-rescisao-clt'],
    'simulador-de-aposentadoria-inss': ['simulador-inss-salario', 'simulador-irrf-salario', 'juros-compostos']
  };

  const matchedIds = map[id] || [];
  if (matchedIds.length > 0) {
    return CALCULATORS_CATALOG.filter(c => matchedIds.includes(c.id));
  }

  return CALCULATORS_CATALOG.filter(c => c.id !== id && c.category !== category).slice(0, 3);
};

const POPULAR_GLOBAL_IDS = [
  'calculo-fgts-acumulado',
  'juros-compostos',
  'clt-pj',
  'calculadora-de-rescisao-clt',
  'calculadora-de-decimo-terceiro',
  'simulador-de-aposentadoria-inss'
];
const getPopularCalculators = (currentId: string) => {
  return CALCULATORS_CATALOG.filter(c => c.id !== currentId && POPULAR_GLOBAL_IDS.includes(c.id)).slice(0, 3);
};

export default function App() {
  const [location, setLocation] = useLocation();
  const [activeCalculator, setActiveCalculator] = useState<CalculatorId>(() => {
    try {
      const path = window.location.pathname.replace(/^\//, '');
      const matched = CALCULATORS_CATALOG.find(c => c.id === path);
      return matched ? matched.id : 'juros-compostos';
    } catch {
      return 'juros-compostos';
    }
  });
  const [activeCategory, setActiveCategory] = useState<CalculatorCategory>(() => {
    try {
      const path = window.location.pathname.replace(/^\//, '');
      if (CATEGORY_SLUG_MAP[path]) return CATEGORY_SLUG_MAP[path];
      const matched = CALCULATORS_CATALOG.find(c => c.id === path);
      return matched ? matched.category : 'todos';
    } catch {
      return 'todos';
    }
  });
  const [activeCategoryHub, setActiveCategoryHub] = useState<string | null>(() => {
    try {
      const path = window.location.pathname.replace(/^\//, '');
      return CATEGORY_SLUG_MAP[path] || null;
    } catch {
      return null;
    }
  });

  const categoryCounts = React.useMemo(() => {
    const counts: Record<string, number> = {
      todos: CALCULATORS_CATALOG.length,
    };
    Object.keys(CATEGORY_MAP).forEach(cat => {
      counts[cat] = CALCULATORS_CATALOG.filter(c => c.category === cat).length;
    });
    return counts;
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPublisherDashboard, setShowPublisherDashboard] = useState(false);

  // Checks and states for owner/admin mode (to hide/reveal simulated AdSense control panel)
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      return localStorage.getItem('adsense_admin') === 'true' || window.location.search.includes('admin=true');
    } catch {
      return false;
    }
  });
  const [logoClicks, setLogoClicks] = useState(0);

  useEffect(() => {
    try {
      const searchParams = new URL(window.location.href).searchParams;
      if (searchParams.get('admin') === 'true' || window.location.hash.includes('admin=true')) {
        setIsAdmin(true);
        localStorage.setItem('adsense_admin', 'true');
      } else if (searchParams.get('admin') === 'false') {
        setIsAdmin(false);
        localStorage.removeItem('adsense_admin');
        setShowPublisherDashboard(false);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // States for dynamic calculators input/output synchronization
  const [dynamicCalcInputs, setDynamicCalcInputs] = useState<Record<string, any>>({});
  const [dynamicCalcOutputs, setDynamicCalcOutputs] = useState<Record<string, any>>({});

  // States for calculation outputs storage (to allow dynamic exports)
  const [compoundInterestResults, setCompoundInterestResults] = useState<any>(null);
  const [cltVsPjResults, setCltVsPjResults] = useState<any>(null);
  const [profitMarginResults, setProfitMarginResults] = useState<any>(null);
  const [healthResults, setHealthResults] = useState<any>(null);
  const [timeSheetResults, setTimeSheetResults] = useState<any>(null);
  const [rule3Results, setRule3Results] = useState<any>(null);
  const [rescisaoCLTResults, setRescisaoCLTResults] = useState<any>(null);
  const [decimoTerceiroResults, setDecimoTerceiroResults] = useState<any>(null);
  const [feriasCLTResults, setFeriasCLTResults] = useState<any>(null);
  const [horasExtrasResults, setHorasExtrasResults] = useState<any>(null);
  const [aposentadoriaINSSResults, setAposentadoriaINSSResults] = useState<any>(null);
  const [porcentagemSimplesResults, setPorcentagemSimplesResults] = useState<any>(null);
  const [financiamentoVeiculoResults, setFinanciamentoVeiculoResults] = useState<any>(null);
  const [adsenseEarningsResults, setAdsenseEarningsResults] = useState<any>(null);

  // Simulated ad stats states
  const [adImpressions, setAdImpressions] = useState(24);
  const [adClicks, setAdClicks] = useState(2);
  const [adRefreshTrigger, setAdRefreshTrigger] = useState(0);

  // In-app alert messaging state
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Local storage history state
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  // Initialization: Load past logs and trigger basic impression
  useEffect(() => {
    try {
      const stored = localStorage.getItem('calc_history');
      if (stored) {
        setHistory(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Route-based sub-page router for search engines / direct links
  useEffect(() => {
    // Parse legacy hash on initial landing to redirect to proper route
    if (window.location.hash) {
      const hashRoute = window.location.hash.replace('#', '');
      if (hashRoute && CALCULATORS_CATALOG.find(c => c.id === hashRoute)) {
        window.location.hash = '';
        setLocation('/' + hashRoute, { replace: true });
        return;
      }
    }

    const path = location.replace(/^\//, '');
    if (path) {
      if (CATEGORY_SLUG_MAP[path]) {
        const cat = CATEGORY_SLUG_MAP[path];
        setActiveCategoryHub(cat);
        setActiveCategory(cat);
      } else {
        const matched = CALCULATORS_CATALOG.find(c => c.id === path);
        if (matched) {
          setActiveCategoryHub(null);
          setActiveCalculator(prev => {
            if (prev !== matched.id) {
              return matched.id as CalculatorId;
            }
            return prev;
          });
          setActiveCategory(matched.category);
        }
      }
    } else {
      setActiveCategoryHub(null);
      setActiveCalculator('juros-compostos');
      setActiveCategory('todos');
    }
  }, [location, setLocation]);

  const updateMetaTag = (attributeType: 'name' | 'property', attributeValue: string, contentValue: string) => {
    let tag = document.querySelector(`meta[${attributeType}="${attributeValue}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attributeType, attributeValue);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', contentValue);
  };

  const checkSeoOverrides = (canonicalUrl: string) => {
    const centralSupaUrl = 'https://tezwamjdetiigwigvayt.supabase.co';
    const centralSupaKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlendhbWpkZXRpaWd3aWd2YXl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5NTYxMDIsImV4cCI6MjA5OTUzMjEwMn0.AJ_xFlk4MmEiC1ECoNLz9-3PkoKqOmJvb2dS2zBYWDE';
    const siteId = 'sc-domain:brasilcalculadoras.com.br';
    
    const reqUrl = `${centralSupaUrl}/rest/v1/seo_overrides?site_id=eq.${siteId}&url=eq.${encodeURIComponent(canonicalUrl)}&approved=eq.true&select=optimized_title,optimized_meta`;

    fetch(reqUrl, {
      headers: {
        'apikey': centralSupaKey,
        'Authorization': `Bearer ${centralSupaKey}`
      }
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error();
    })
    .then(data => {
      const override = data?.[0];
      if (override) {
        console.log(`[SEO Central] Aplicando override REST para: ${canonicalUrl}`);
        document.title = override.optimized_title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', override.optimized_meta);
        }
        updateMetaTag('property', 'og:title', override.optimized_title);
        updateMetaTag('property', 'og:description', override.optimized_meta);
        updateMetaTag('name', 'twitter:title', override.optimized_title);
        updateMetaTag('name', 'twitter:description', override.optimized_meta);
      }
    })
    .catch(() => {});
  };

  const injectCalculatorSchema = (calc: any, seoData: any, canonicalUrl: string) => {
    try {
      let script = document.getElementById('jsonld-seo') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = 'jsonld-seo';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

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

      const catLabel = CATEGORY_MAP_RAW[calc.category] || calc.category;
      const catSlug = CATEGORY_KEY_TO_SLUG[calc.category] || '';
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

      script.textContent = JSON.stringify([softwareSchema, breadcrumbSchema]);
    } catch (e) {
      console.warn('Failed to inject calculator schema:', e);
    }
  };

  const injectCategorySchema = (catKey: string, hubData: any, canonicalUrl: string) => {
    try {
      let script = document.getElementById('jsonld-seo') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = 'jsonld-seo';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

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
            "name": CATEGORY_MAP_RAW[catKey] || catKey,
            "item": canonicalUrl
          }
        ]
      };

      script.textContent = JSON.stringify([collectionSchema, breadcrumbSchema]);
    } catch (e) {
      console.warn('Failed to inject category schema:', e);
    }
  };

  // Dynamic Page Title & SEO Meta Updates on calculator or category change
  useEffect(() => {
    if (['/politica-de-privacidade', '/termos-de-uso', '/sobre', '/contato'].includes(location)) {
      const legalTitles: Record<string, { title: string; desc: string }> = {
        '/politica-de-privacidade': {
          title: 'Política de Privacidade | Brasil Calculadoras',
          desc: 'Confira nossa Política de Privacidade. Saiba como seus dados são protegidos e como utilizamos cookies em conformidade com a LGPD e o Google AdSense.'
        },
        '/termos-de-uso': {
          title: 'Termos e Condições de Uso | Brasil Calculadoras',
          desc: 'Conheça os Termos e Condições de Uso da plataforma Brasil Calculadoras e entenda a natureza informativa de nossas ferramentas gratuitas.'
        },
        '/sobre': {
          title: 'Sobre a Central | Brasil Calculadoras',
          desc: 'Saiba mais sobre a missão do Brasil Calculadoras, nossa equipe técnica e nosso compromisso com a exatidão matemática e utilidade pública.'
        },
        '/contato': {
          title: 'Contato e Suporte | Brasil Calculadoras',
          desc: 'Entre em contato com a equipe do Brasil Calculadoras para tirar dúvidas, enviar sugestões ou reportar pontos de melhoria.'
        }
      };
      const current = legalTitles[location];
      if (current) {
        document.title = current.title;
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
          metaDesc = document.createElement('meta');
          metaDesc.setAttribute('name', 'description');
          document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', current.desc);
        checkSeoOverrides('https://www.brasilcalculadoras.com.br' + location);
      }
      return;
    }

    const isHome = location === '/' || location === '';
    if (isHome) {
      const homeTitle = 'Brasil Calculadoras | Calculadoras Online Gratuitas Finanças, Trabalho e Saúde';
      const homeDesc = 'Calculadoras online gratuitas para finanças, trabalho, saúde, estudos, veículos e muito mais. Simulações rápidas, sem cadastro e 100% gratuitas.';
      const canonicalUrl = 'https://www.brasilcalculadoras.com.br/';

      document.title = homeTitle;

      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', homeDesc);

      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);

      updateMetaTag('property', 'og:title', homeTitle);
      updateMetaTag('property', 'og:description', homeDesc);
      updateMetaTag('property', 'og:url', canonicalUrl);
      updateMetaTag('property', 'og:type', 'website');

      updateMetaTag('name', 'twitter:card', 'summary_large_image');
      updateMetaTag('name', 'twitter:title', homeTitle);
      updateMetaTag('name', 'twitter:description', homeDesc);

      // Schema injection for Homepage
      try {
        let script = document.getElementById('jsonld-seo') as HTMLScriptElement;
        if (!script) {
          script = document.createElement('script');
          script.id = 'jsonld-seo';
          script.type = 'application/ld+json';
          document.head.appendChild(script);
        }
        const homepageSchema = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Brasil Calculadoras",
          "url": "https://www.brasilcalculadoras.com.br/",
          "description": homeDesc,
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.brasilcalculadoras.com.br/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };
        script.textContent = JSON.stringify(homepageSchema);
      } catch (e) {}

      logSeoInteraction('/', 'view');
      setAdRefreshTrigger(prev => prev + 1);
      checkSeoOverrides(canonicalUrl);
      return;
    }

    if (activeCategoryHub) {
      const hubData = getCategoryHubContent(activeCategoryHub);
      const canonicalUrl = `https://www.brasilcalculadoras.com.br/${CATEGORY_KEY_TO_SLUG[activeCategoryHub]}`;
      
      document.title = hubData.title;

      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', hubData.description);

      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);

      updateMetaTag('property', 'og:title', hubData.title);
      updateMetaTag('property', 'og:description', hubData.description);
      updateMetaTag('property', 'og:url', canonicalUrl);
      updateMetaTag('property', 'og:type', 'website');

      updateMetaTag('name', 'twitter:card', 'summary_large_image');
      updateMetaTag('name', 'twitter:title', hubData.title);
      updateMetaTag('name', 'twitter:description', hubData.description);

      injectCategorySchema(activeCategoryHub, hubData, canonicalUrl);
      logSeoInteraction('/' + CATEGORY_KEY_TO_SLUG[activeCategoryHub], 'view');

      setAdRefreshTrigger(prev => prev + 1);
      checkSeoOverrides(canonicalUrl);
      return;
    }

    const activeCalc = CALCULATORS_CATALOG.find(c => c.id === activeCalculator);
    if (!activeCalc) return;

    const seoData = getSeoContentForCalculator(activeCalc);
    const canonicalUrl = `https://www.brasilcalculadoras.com.br/${activeCalculator}`;

    document.title = seoData.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', seoData.description);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    updateMetaTag('property', 'og:title', seoData.title);
    updateMetaTag('property', 'og:description', seoData.description);
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'og:type', 'website');

    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', seoData.title);
    updateMetaTag('name', 'twitter:description', seoData.description);

    injectCalculatorSchema(activeCalc, seoData, canonicalUrl);
    logSeoInteraction('/' + activeCalculator, 'view');

    setAdRefreshTrigger(prev => prev + 1);
    checkSeoOverrides(canonicalUrl);
  }, [activeCalculator, activeCategoryHub]);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 3800);
  };

  // Logo secret administrative unlock (Clicking 5 times toggles Admin Dashboard visibility)
  const handleLogoClick = () => {
    setLogoClicks(prev => {
      const next = prev + 1;
      if (next >= 5) {
        setIsAdmin(curr => {
          const updated = !curr;
          try {
            if (updated) {
              localStorage.setItem('adsense_admin', 'true');
              triggerToast('✨ Modo Admin Ativado! O Painel AdSense de Simulação foi desbloqueado no topo.');
            } else {
              localStorage.removeItem('adsense_admin');
              setShowPublisherDashboard(false);
              triggerToast('✨ Modo Admin Desativado! Painel Ocultado.');
            }
          } catch (e) {}
          return updated;
        });
        return 0;
      }
      return next;
    });
    // Still reset to compost interest calculator on normal brand click
    selectCalculator('juros-compostos');
  };

  // Switch Calculator instantly
  const selectCalculator = (id: CalculatorId) => {
    setSearchQuery('');
    setMenuOpen(false);

    // Increment Ad stats (loading ads is a visual monetisation feature)
    setAdImpressions(prev => prev + 2);

    setLocation('/' + id);
  };

  // Simulated click on ads
  const handleAdClicked = () => {
    setAdClicks(prev => prev + 1);
    triggerToast('📈 Clique em anúncio registrado! Seus ganhos simulados de publicidade aumentaram.');
  };

  // Dynamic calculated Publisher metrics
  const publisherStats = React.useMemo(() => {
    const impressions = adImpressions;
    const clicks = adClicks;
    const ctr = impressions > 0 ? (clicks / impressions) * 100 : 0;
    const rpm = 18.50; // simulated CPM/RPM of page in BRL
    const earnings = (impressions * (rpm / 1000)) + (clicks * 0.45); // R$ 0.45 per click approximation

    return {
      impressions,
      clicks,
      ctr,
      rpm,
      earnings
    };
  }, [adImpressions, adClicks]);

  // Handle calculator-specific output synchronization & save to history log
  const handleCompoundInterestCalc = React.useCallback((results: any) => {
    setCompoundInterestResults(results);
  }, []);

  const handleCltVsPjCalc = React.useCallback((results: any) => {
    setCltVsPjResults(results);
  }, []);

  const handleProfitMarginCalc = React.useCallback((results: any) => {
    setProfitMarginResults(results);
  }, []);

  const handleIbcCaloricoTracker = React.useCallback((results: any) => {
    setHealthResults(results);
  }, []);

  const handleTimeSheetHoursCalc = React.useCallback((results: any) => {
    setTimeSheetResults(results);
  }, []);

  const handleRuleOf3AndTextTools = React.useCallback((results: any) => {
    setRule3Results(results);
  }, []);

  const handleRescisaoCLTCalc = React.useCallback((results: any) => {
    setRescisaoCLTResults(results);
  }, []);

  const handleDecimoTerceiroCalc = React.useCallback((results: any) => {
    setDecimoTerceiroResults(results);
  }, []);

  const handleFeriasCLTCalc = React.useCallback((results: any) => {
    setFeriasCLTResults(results);
  }, []);

  const handleHorasExtrasCalc = React.useCallback((results: any) => {
    setHorasExtrasResults(results);
  }, []);

  const handleAposentadoriaINSSCalc = React.useCallback((results: any) => {
    setAposentadoriaINSSResults(results);
  }, []);

  const handlePorcentagemSimplesCalc = React.useCallback((results: any) => {
    setPorcentagemSimplesResults(results);
    if (results) {
      setDynamicCalcInputs({
        valor: results.valor,
        percentual: results.percentual,
        operacao: results.operacao
      });
      setDynamicCalcOutputs({
        resultado: results.resultado,
        diferenca: results.diferenca
      });
    }
  }, []);

  const handleFinanciamentoVeiculoCalc = React.useCallback((results: any) => {
    setFinanciamentoVeiculoResults(results);
    if (results) {
      setDynamicCalcInputs({
        valor_veiculo: results.valor_veiculo,
        entrada: results.entrada,
        taxa_mensal: results.taxa_mensal,
        parcelas: results.parcelas
      });
      setDynamicCalcOutputs({
        valor_parcela: results.valor_parcela,
        total_pago: results.total_pago,
        juros_totais: results.juros_totais
      });
    }
  }, []);

  const handleAdSenseEarningsCalc = React.useCallback((results: any) => {
    setAdsenseEarningsResults(results);
  }, []);

  const handleDynamicCalc = React.useCallback((inputs: Record<string, any>, outputs: Record<string, any>) => {
    setDynamicCalcInputs(inputs);
    setDynamicCalcOutputs(outputs);
  }, []);


  const getStatePayload = (): CalcStatePayload => ({
    activeCalculator,
    activeCalcDef: CALCULATORS_CATALOG.find(c => c.id === activeCalculator),
    compoundInterestResults,
    cltVsPjResults,
    profitMarginResults,
    healthResults,
    timeSheetResults,
    rule3Results,
    rescisaoCLTResults,
    decimoTerceiroResults,
    feriasCLTResults,
    horasExtrasResults,
    aposentadoriaINSSResults,
    dynamicCalcInputs,
    dynamicCalcOutputs,
    porcentagemSimplesResults,
    financiamentoVeiculoResults,
    adsenseEarningsResults
  });

  // Save current operation to historical log
  const handleSaveToHistory = () => {
    const payload = getStatePayload();
    if (!payload.activeCalcDef) return;
    
    const res = buildHistorySummary(payload);
    if (!res.summaryText) {
      triggerToast('Nenhum resultado de cálculo ativo pronto ou alterado para salvar.');
      return;
    }

    const logEntry: HistoryEntry = {
      id: Date.now().toString(),
      calculatorId: activeCalculator,
      calculatorName: payload.activeCalcDef.name,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      inputs: res.inputsObj,
      outputs: res.outputsObj,
      summary: res.summaryText
    };

    const newHistory = [logEntry, ...history].slice(0, 10);
    setHistory(newHistory);
    localStorage.setItem('calc_history', JSON.stringify(newHistory));
    
    setAdImpressions(prev => prev + 1);
    setAdRefreshTrigger(prev => prev + 1);
    triggerToast('✅ Operação gravada com sucesso no histórico local da sessão!');
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem('calc_history');
    triggerToast('Histórico limpo com sucesso.');
  };

  // Re-populate active calculator parameters simply by clicking history
  const handleSelectHistoryEntry = (entry: HistoryEntry) => {
    selectCalculator(entry.calculatorId);
    triggerToast(`Retornando para ${entry.calculatorName}`);
  };

  // Filtered calculators catalog matching active category filters and query
  const filteredCalculators = CALCULATORS_CATALOG.filter(calc => {
    const matchesCategory = activeCategory === 'todos' || calc.category === activeCategory;
    const isSearching = searchQuery.trim() !== '';
    if (!isSearching) return matchesCategory;

    const term = searchQuery.toLowerCase();
    const matchesName = calc.name.toLowerCase().includes(term);
    const matchesDesc = calc.description.toLowerCase().includes(term);
    const matchesTags = calc.tags.some(t => t.toLowerCase().includes(term));

    return matchesName || matchesDesc || matchesTags;
  });

  // Export Results back as a clean structured Spreadsheet (Excel CSV file format)
  const exportToCSV = () => {
    handleExportCSV(getStatePayload());
    setAdImpressions(prev => prev + 1);
    setAdRefreshTrigger(prev => prev + 1);
    triggerToast('📥 Planilha Excel / CSV baixada com sucesso!');
  };

  // Export Results back as a clean, styled, and ready-to-print official PDF report using standard PDF canvas library
  const exportToPDF = () => {
    handleExportPDF(getStatePayload());
    setAdImpressions(prev => prev + 1);
    setAdRefreshTrigger(prev => prev + 1);
    triggerToast('📥 Relatório PDF Gerado e Exportado com Sucesso!');
  };

  const activeCalc = React.useMemo(() => {
    return CALCULATORS_CATALOG.find(c => c.id === activeCalculator);
  }, [activeCalculator]);

  const activeFaq = React.useMemo(() => {
    return activeCalc?.faq?.map(f => ({
      question: f.question || (f as any).q || '',
      answer: f.answer || (f as any).a || ''
    })).filter(f => f.question && f.answer) || [];
  }, [activeCalc]);

  const [activeAppFaqIdx, setActiveAppFaqIdx] = useState<number | null>(null);

  // Reset active FAQ when active calculator changes
  useEffect(() => {
    setActiveAppFaqIdx(null);
  }, [activeCalculator]);

  const hasActiveResult = React.useMemo(() => {
    if (activeCalculator === 'juros-compostos') return !!compoundInterestResults;
    if (activeCalculator === 'clt-pj') return !!cltVsPjResults;
    if (activeCalculator === 'margem-lucro') return !!profitMarginResults;
    if (activeCalculator === 'imc') return !!healthResults;
    if (activeCalculator === 'registro-horas') return !!timeSheetResults;
    if (activeCalculator === 'calculadora-de-rescisao-clt') return !!rescisaoCLTResults;
    if (activeCalculator === 'calculadora-de-decimo-terceiro') return !!decimoTerceiroResults;
    if (activeCalculator === 'calculadora-de-ferias-clt') return !!feriasCLTResults;
    if (activeCalculator === 'calculadora-de-horas-extras') return !!horasExtrasResults;
    if (activeCalculator === 'simulador-de-aposentadoria-inss') return !!aposentadoriaINSSResults;
    if (activeCalculator === 'porcentagem-simples') return !!porcentagemSimplesResults;
    if (activeCalculator === 'financiamento-veiculo') return !!financiamentoVeiculoResults;
    if (activeCalculator === 'calculadora-ganhos-adsense') return !!adsenseEarningsResults;
    if (activeCalc?.isDynamic) return Object.keys(dynamicCalcOutputs).length > 0;
    return false;
  }, [
    activeCalculator, activeCalc, compoundInterestResults, cltVsPjResults, profitMarginResults,
    healthResults, timeSheetResults, rescisaoCLTResults, decimoTerceiroResults, feriasCLTResults,
    horasExtrasResults, aposentadoriaINSSResults, dynamicCalcOutputs, porcentagemSimplesResults,
    financiamentoVeiculoResults, adsenseEarningsResults
  ]);

  const getShareableText = () => {
    if (!activeCalc) return '';
    
    let text = `*${activeCalc.name}* - Brasil Calculadoras\n`;
    text += `🔗 ${window.location.origin}/${activeCalculator}\n\n`;
    text += `*Resultados Simulados:*\n`;
    
    if (activeCalculator === 'juros-compostos' && compoundInterestResults) {
      text += `• Montante Final: R$ ${compoundInterestResults.finalAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `• Total Investido: R$ ${compoundInterestResults.totalInvested.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `• Total em Juros: R$ ${compoundInterestResults.totalInterest.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
    } else if (activeCalculator === 'clt-pj' && cltVsPjResults) {
      text += `• Opção Recomendada: ${cltVsPjResults.isPjBetter ? 'Pessoa Jurídica (PJ)' : 'Trabalho CLT'}\n`;
      text += `• Diferença Líquida: R$ ${cltVsPjResults.difference.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/mês\n`;
      text += `• CLT Líquido: R$ ${cltVsPjResults.cltNet?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `• PJ Líquido: R$ ${cltVsPjResults.pjNet?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
    } else if (activeCalculator === 'margem-lucro' && profitMarginResults) {
      text += `• Margem Líquida: ${profitMarginResults.netMargin.toFixed(2)}%\n`;
      text += `• Lucro Líquido: R$ ${profitMarginResults.netProfit.toFixed(2)}\n`;
      text += `• Markup Aplicado: ${(profitMarginResults.markup / 100 + 1).toFixed(2)}x\n`;
    } else if (activeCalculator === 'imc' && healthResults) {
      text += `• Índice de Massa Corporal (IMC): ${healthResults.bmi.toFixed(1)}\n`;
      text += `• Classificação: ${healthResults.bmiClass}\n`;
      text += `• Meta Energética Diária: ${Math.round(healthResults.targetCalories)} kcal\n`;
      text += `• Água Recomendada: ${(healthResults.waterNeeds / 1000).toFixed(2)}L/dia\n`;
    } else if (activeCalculator === 'registro-horas' && timeSheetResults) {
      text += `• Faturamento Total: R$ ${timeSheetResults.totalAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `• Horas de Trabalho Acumuladas: ${timeSheetResults.totalHours.toFixed(2)}h\n`;
    } else if (activeCalculator === 'calculadora-de-rescisao-clt' && rescisaoCLTResults) {
      text += `• Líquido a Receber: R$ ${rescisaoCLTResults.netAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `• Motivo do Desligamento: ${rescisaoCLTResults.reasonLabel}\n`;
    } else if (activeCalculator === 'calculadora-de-decimo-terceiro' && decimoTerceiroResults) {
      text += `• Líquido Calculado: R$ ${decimoTerceiroResults.netValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `• Parcela: ${decimoTerceiroResults.parcelLabel}\n`;
    } else if (activeCalculator === 'calculadora-de-ferias-clt' && feriasCLTResults) {
      text += `• Férias Líquidas Totais: R$ ${feriasCLTResults.netVacationAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `• Dias de Férias: ${feriasCLTResults.vacationDays} dias\n`;
    } else if (activeCalculator === 'calculadora-de-horas-extras' && horasExtrasResults) {
      text += `• Adicional Bruto: R$ ${horasExtrasResults.totalExtraAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
    } else if (activeCalculator === 'simulador-de-aposentadoria-inss' && aposentadoriaINSSResults) {
      text += `• Elegível para Aposentadoria: ${aposentadoriaINSSResults.canRetireAtAll ? 'SIM' : 'NÃO'}\n`;
      text += `• Idade Mínima Previdenciária: ${aposentadoriaINSSResults.canRetireByAge ? 'Atingida' : 'Pendente'}\n`;
    } else if (activeCalculator === 'porcentagem-simples' && porcentagemSimplesResults) {
      text += `• Valor Base: R$ ${porcentagemSimplesResults.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `• Operação: ${porcentagemSimplesResults.operacao === 'calcular' ? 'Porcentagem' : porcentagemSimplesResults.operacao === 'adicionar' ? 'Soma' : 'Desconto'}\n`;
      text += `• Percentual: ${porcentagemSimplesResults.percentual}%\n`;
      text += `• Resultado Final: R$ ${porcentagemSimplesResults.resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
    } else if (activeCalculator === 'financiamento-veiculo' && financiamentoVeiculoResults) {
      text += `• Valor do Veículo: R$ ${financiamentoVeiculoResults.valor_veiculo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `• Entrada: R$ ${financiamentoVeiculoResults.entrada.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `• Taxa de Juros: ${financiamentoVeiculoResults.taxa_mensal}% a.m.\n`;
      text += `• Parcelas: ${financiamentoVeiculoResults.parcelas}x\n`;
      text += `• Prestação Mensal: R$ ${financiamentoVeiculoResults.valor_parcela.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `• Juros Totais: R$ ${financiamentoVeiculoResults.juros_totais.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `• Total Pago: R$ ${financiamentoVeiculoResults.total_pago.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
    } else if (activeCalculator === 'calculadora-ganhos-adsense' && adsenseEarningsResults) {
      text += `• Ganhos Mensais Estimados: R$ ${adsenseEarningsResults.monthlyEarnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `• Faturamento Anual Projetado: R$ ${adsenseEarningsResults.annualEarnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `• RPM Médio: R$ ${adsenseEarningsResults.rpm.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
      text += `• CTR Estimado: ${adsenseEarningsResults.ctr.toFixed(2)}%\n`;
      text += `• CPC Médio: R$ ${adsenseEarningsResults.cpc.toFixed(2)}\n`;
    } else if (activeCalc?.isDynamic && dynamicCalcOutputs) {
      activeCalc.outputs?.forEach(out => {
        const val = dynamicCalcOutputs[out.id];
        const displayVal = typeof val === 'number' 
          ? `${out.prefix || ''}${val.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}${out.suffix || ''}`
          : val || '0,00';
        text += `• ${out.label}: ${displayVal}\n`;
      });
    } else {
      text += `• Cálculo realizado com sucesso.\n`;
    }
    
    text += `\nCalcule o seu gratuitamente em: ${window.location.origin}/${activeCalculator}`;
    return text;
  };

  const getSeoText = () => {
    switch (activeCalc?.category) {
      case 'financas':
        return 'Planejar finanças pessoais, projetar rendimentos de previdência privada, comparar propostas de trabalho CLT ou PJ, ou definir a margem correta e markup comercial são pilares essenciais para o sucesso financeiro. Esta ferramenta gratuita ajuda você a fazer simulações precisas em segundos, gerando relatórios PDF e Excel completos.';
      case 'saude':
        return 'Acompanhar dados vitais, metrificar taxas metabólicas, calcular IMC (Índice de Massa Corporal) e estimar as necessidades diárias de macronutrientes da dieta são atalhos para uma vida saudável. Nossas calculadoras de saúde usam fórmulas validadas cientificamente para oferecer estimativas rápidas e orientações de apoio à nutrição.';
      case 'logistica':
        return 'Cálculos de transporte de cargas, taxas de cubagem, leis de estadia de caminhoneiros e custos por quilômetro rodado de frotas exigem agilidade e precisão comercial. Esta central simplifica o dia a dia da logística rodoviária brasileira com cálculos rápidos e conformidade legal.';
      case 'agronegocio':
        return 'O agronegócio de sucesso une campo e tecnologia. Estimar o Peso de Mil Sementes (PMS), calcular calagem e adubação teórica do solo, e guiar a distribuição linear de grãos maximiza a germinação industrial e as colheitas. Use os simuladores rurais para otimizar seus insumos agrícolas.';
      case 'pets':
        return 'Calcular a ração ideal por peso e atividade, acompanhar a ingestão diária de água recomendada para cães e gatos, e estimar a idade equivalente do pet em anos humanos garante uma vida longa e saudável ao seu animal de estimação. Use nossas ferramentas veterinárias gratuitas.';
      default:
        return 'Esta calculadora rápida e intuitiva foi desenhada para facilitar o seu dia a dia, automatizando fórmulas complexas em respostas imediatas de uso profissional. Salve seus resultados, exporte em PDF de alta qualidade e compartilhe relatórios completos de forma 100% gratuita.';
    }
  };

  const relatedCalculators = React.useMemo(() => {
    if (!activeCalc) return [];
    
    // Try to find up to 3 other calculators from the SAME category first
    const sameCategory = CALCULATORS_CATALOG.filter(c => c.id !== activeCalculator && c.category === activeCalc.category);
    
    if (sameCategory.length >= 3) {
      return sameCategory.slice(0, 3);
    }
    
    // If less than 3, fill with other popular calculators from other categories
    const others = CALCULATORS_CATALOG.filter(c => c.id !== activeCalculator && c.category !== activeCalc.category);
    return [...sameCategory, ...others].slice(0, 3);
  }, [activeCalculator, activeCalc]);

  const handleCopyResults = () => {
    const text = getShareableText();
    navigator.clipboard.writeText(text);
    triggerToast('📋 Resultados copiados em formato profissional para a sua área de transferência!');
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(getShareableText());
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    triggerToast('💬 Abrindo compartilhamento de WhatsApp...');
  };

  const handleCopyShortLink = () => {
    const link = `${window.location.origin}/${activeCalculator}`;
    navigator.clipboard.writeText(link);
    triggerToast('🔗 Link direto desta calculadora copiado para a área de transferência!');
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans leading-relaxed text-slate-800 antialiased selection:bg-slate-900 selection:text-white">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white font-medium text-xs py-3 px-6 rounded-xl shadow-xl flex items-center gap-2 border border-slate-800"
          >
            <Sparkles className="w-4.5 h-4.5 text-yellow-400 animate-spin" />
            <span>{toastMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Utility Promotional Ribbon / Custom Header - Only displayed for Admin/Owner */}
      {isAdmin && (
        <div className="bg-slate-900 text-white font-medium text-xs py-2 px-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-950 font-extrabold text-[9px] px-2 py-0.5 rounded-sm select-none uppercase tracking-widest leading-none">VIP ADM</span>
            <span className="text-gray-300">Site 100% Gratuito para Usuários com simulador avançado AdSense.</span>
          </div>
          <div className="flex items-center gap-4">
            {/* AdSense Publisher toggle button */}
            <button
              onClick={() => {
                setShowPublisherDashboard(!showPublisherDashboard);
                triggerToast(showPublisherDashboard ? 'Voltando para visão limpa de usuário' : 'Painel de Lucros AdSense Aberto!');
              }}
              className="text-[11px] font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1.5 cursor-pointer bg-slate-800/80 py-1 px-2.5 rounded border border-slate-750 hover:bg-slate-800 transition-all active:scale-95 text-xs font-mono font-bold"
            >
              <Coins className="w-3.5 h-3.5" />
              <span>{showPublisherDashboard ? 'Ocultar Painel AdSense' : 'Ver Lucros AdSense (Modo Admin)'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Header navigation and Search box */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-40 transition-shadow">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-18 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-lg cursor-pointer transition-all"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div 
              onClick={handleLogoClick} 
              className="flex items-center gap-2.5 cursor-pointer select-none group"
              title="Clique 5 vezes aqui para ativar/desativar as métricas de simulação do AdSense"
            >
              <img 
                src="/logo.svg" 
                alt="Brasil Calculadoras" 
                className="h-9 w-9 rounded-xl shadow-md shadow-blue-100/40 group-hover:scale-105 transition-transform duration-200" 
              />
              <div>
                <h1 className="text-md font-display font-bold text-slate-800 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                  Brasil Calculadoras
                </h1>
                <span className="text-[10px] font-semibold text-gray-400 font-mono tracking-wider">FERRAMENTAS DE EXCELÊNCIA</span>
              </div>
            </div>
            
          </div>

          {/* Core Hub Quick Search Input bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <span className="absolute left-3.5 top-3 text-slate-400">
              <Search className="w-4.5 h-4.5" />
            </span>
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Digite para pesquisar: juros, CLT, IMC, texto, matemática..."
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-100 hover:bg-slate-200/50 focus:bg-white border-none focus:ring-2 focus:ring-blue-500 rounded-full outline-none transition-all font-sans font-medium text-slate-800"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3 text-gray-400 hover:text-slate-650 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                triggerToast('🔗 Link da Central Copiado! Compartilhe o site com seus amigos.');
              }}
              className="p-2 text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-xl transition-all cursor-pointer active:scale-95"
              title="Compartilhar Link"
            >
              <Share2 className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Search Results Dropdown Overlay */}
        {searchQuery.trim() !== '' && (
          <div className="absolute top-18 left-0 right-0 bg-white border-b border-slate-200 shadow-xl z-50 py-3">
            <div className="max-w-3xl mx-auto px-4 max-h-[300px] overflow-y-auto flex flex-col gap-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2.5 mb-1.5 block">Resultados Rápidos da Busca</span>
              {filteredCalculators.length === 0 ? (
                <p className="text-center py-6 text-xs text-gray-400 select-none">Nenhuma ferramenta coincide com "{searchQuery}". Tente outros termos.</p>
              ) : (
                filteredCalculators.map(c => (
                  <div
                    key={c.id}
                    onClick={() => selectCalculator(c.id)}
                    className="flex justify-between items-center p-2.5 hover:bg-slate-50 cursor-pointer rounded-lg transition-colors"
                  >
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900">{c.name}</h4>
                      <p className="text-[11px] text-gray-405 truncate max-w-sm sm:max-w-xl">{c.description}</p>
                    </div>
                    <span className="text-[9px] bg-slate-100 font-mono font-bold text-slate-600 px-2 py-0.5 rounded uppercase">
                      {CATEGORY_MAP_RAW[c.category] || c.category}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main content grid view */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-6 py-6 flex flex-col gap-6">
        
        {location === '/politica-de-privacidade' ? (
          <LegalPage type="privacy" onNavigateHome={() => setLocation('/')} />
        ) : location === '/termos-de-uso' ? (
          <LegalPage type="terms" onNavigateHome={() => setLocation('/')} />
        ) : location === '/sobre' ? (
          <LegalPage type="about" onNavigateHome={() => setLocation('/')} />
        ) : location === '/contato' ? (
          <LegalPage type="contact" onNavigateHome={() => setLocation('/')} />
        ) : location === '/' || location === '' ? (
          <HomepageView 
            onSelectCalculator={selectCalculator}
            onSelectCategory={(catKey) => {
              const slug = CATEGORY_KEY_TO_SLUG[catKey];
              if (slug) {
                setLocation('/' + slug);
              } else {
                setActiveCategory(catKey);
              }
            }}
            categoryCounts={categoryCounts}
          />
        ) : (
          /* Central Core Workstation split layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Side Drawer menu - Categories selector list */}
          <aside className={`lg:col-span-3 flex-col gap-5 ${menuOpen ? 'flex fixed inset-y-0 left-0 bg-white w-72 p-6 z-50 border-r shadow-2xl overflow-y-auto' : 'hidden lg:flex'}`}>
            
            {/* Draw heading for mobile */}
            <div className="flex lg:hidden items-center justify-between border-b pb-3 mb-1">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Navegação Principal</span>
              <button 
                onClick={() => setMenuOpen(false)}
                className="p-1 text-gray-400 hover:bg-slate-50 hover:text-slate-900 border rounded cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

             {/* In-app Category filter pills list */}
            <div className="flex flex-col gap-1 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2 select-none">Filtrar Segmentos</span>
              <button
                onClick={() => {
                  setActiveCategory('todos');
                  setActiveCategoryHub(null);
                  setLocation('/');
                  setMenuOpen(false);
                }}
                className={`w-full text-left py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-between transition-all cursor-pointer ${
                  activeCategory === 'todos' && !activeCategoryHub
                    ? 'bg-blue-50 text-blue-700 font-medium shadow-xs' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span>🚀 Todas as Ferramentas</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${activeCategory === 'todos' && !activeCategoryHub ? 'bg-blue-101 bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>{categoryCounts.todos}</span>
              </button>

              {Object.entries(CATEGORY_MAP).map(([key, label]) => {
                const isSelected = activeCategory === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      const slug = CATEGORY_KEY_TO_SLUG[key];
                      if (slug) {
                        setLocation('/' + slug);
                      } else {
                        setActiveCategory(key);
                      }
                      setMenuOpen(false);
                    }}
                    className={`w-full text-left py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-between transition-all cursor-pointer ${
                      isSelected 
                        ? 'bg-blue-50 text-blue-700 font-medium shadow-xs' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="shrink-0 text-xs">
                        {key === 'financas' ? '📊' : key === 'saude' ? '🍎' : key === 'profissoes' ? '👔' : key === 'matematica' ? '📐' : key === 'imobiliario' ? '🏠' : key === 'veiculos' ? '🚗' : key === 'estatistica' ? '📈' : key === 'juridico' ? '⚖️' : key === 'utilitarios' ? '💡' : key === 'aposentadoria' ? '⏳' : key === 'agronegocio' ? '🚜' : key === 'logistica' ? '🚚' : key === 'construcao' ? '🧱' : key === 'eventos' ? '🥩' : key === 'energia' ? '☀️' : key === 'educacao' ? '📚' : key === 'quimica_fisica' ? '🧪' : key === 'tecnologia' ? '💻' : key === 'pets' ? '🐾' : '⏱️'}
                      </span>
                      <span className="truncate">{CATEGORY_MAP_RAW[key] || label}</span>
                    </div>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold shrink-0 ${isSelected ? 'bg-blue-101 bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                      {categoryCounts[key] || 0}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* List of active filtered calculators */}
            <div className="flex flex-col gap-1.5 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 px-2 select-none">Catálogo de Ferramentas</span>
              <div className="flex flex-col gap-1 max-h-[300px] lg:max-h-[500px] overflow-y-auto pr-1">
                {filteredCalculators.map(c => {
                  const isActive = c.id === activeCalculator;
                  return (
                    <button
                      key={c.id}
                      onClick={() => selectCalculator(c.id)}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer ${
                        isActive 
                          ? 'bg-blue-50/40 border-blue-200/50 text-blue-700 font-medium shadow-xs' 
                          : 'bg-white border-transparent hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <h4 className="text-xs font-bold text-slate-800 truncate">{c.name}</h4>
                      <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5 leading-snug">{c.description}</p>
                    </button>
                  );
                })}

                {filteredCalculators.length === 0 && (
                  <p className="text-[11px] text-slate-400 text-center py-4 font-mono select-none">Nenhuma ferramenta encontrada.</p>
                )}
              </div>
            </div>

            {/* Embed Sessions History Component directly in the sidebar for desktop */}
            <CalculatorHistory
              history={history}
              onClearHistory={handleClearHistory}
              onSelectEntry={handleSelectHistoryEntry}
            />

            {/* AdSense Vertical Banner in the sidebar (Visible only on Desktop) */}
            <div className="hidden lg:block w-full mt-2">
              <AdSenseBanner 
                category={activeCalc?.category || 'financas'}
                layout="vertical"
                onAdClicked={handleAdClicked}
                refreshTrigger={adRefreshTrigger + 20}
              />
            </div>
          </aside>

          {/* Active Calculator Workstation Space */}
          {/* Active Calculator Workstation Space */}
          <section className="lg:col-span-9 flex flex-col gap-6">
            {activeCategoryHub ? (
              // Category Hub View
              <div className="flex flex-col gap-6 animate-fadeIn">
                {/* Breadcrumbs for Category Hub */}
                <Breadcrumbs catKey={activeCategoryHub} />

                {/* Hub Header Card */}
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 -z-10 blur-xl opacity-50" />
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">
                      {activeCategoryHub === 'financas' ? '📊' : activeCategoryHub === 'saude' ? '🍎' : activeCategoryHub === 'profissoes' ? '⚖️' : activeCategoryHub === 'matematica' ? '🧮' : '⚙️'}
                    </span>
                    <span className="text-[10px] font-extrabold text-blue-600 tracking-wider font-mono uppercase bg-blue-50 px-2.5 py-1 rounded-md">
                      Categoria Principal
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-display font-black text-slate-800 tracking-tight">
                    {getCategoryHubContent(activeCategoryHub).title}
                  </h2>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                    {getCategoryHubContent(activeCategoryHub).introduction}
                  </p>
                  <div className="border-t border-slate-100 pt-4 mt-2">
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Por que planejar nesta categoria?</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {getCategoryHubContent(activeCategoryHub).importance}
                    </p>
                  </div>
                </div>

                {/* Tools Grid */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-bold text-slate-800 font-display flex items-center gap-2 px-1">
                    <span className="h-5 w-1 bg-blue-600 rounded-full" />
                    Simuladores de {CATEGORY_MAP_RAW[activeCategoryHub] || activeCategoryHub}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {CALCULATORS_CATALOG.filter(c => c.category === activeCategoryHub).map(c => (
                      <div
                        key={c.id}
                        onClick={() => selectCalculator(c.id)}
                        className="group bg-white border border-slate-200 hover:border-blue-200 hover:bg-blue-50/10 p-5 rounded-2xl cursor-pointer transition-all hover:shadow-md flex flex-col justify-between min-h-[140px]"
                      >
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">{c.name}</h4>
                          <p className="text-[10px] text-slate-500 mt-2 line-clamp-3 leading-relaxed font-normal">{c.description}</p>
                        </div>
                        <span className="text-[9px] font-mono font-bold text-blue-600 uppercase inline-flex items-center gap-1 group-hover:underline mt-4">
                          Abrir Calculadora <ExternalLink className="w-2.5 h-2.5" />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category FAQs */}
                {getCategoryHubContent(activeCategoryHub).faq.length > 0 && (
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                    <h3 className="text-sm font-bold text-slate-800 font-display flex items-center gap-2 border-b border-slate-100 pb-3">
                      <HelpCircle className="w-4.5 h-4.5 text-blue-500" />
                      Perguntas Frequentes da Categoria
                    </h3>
                    <div className="flex flex-col gap-3">
                      {getCategoryHubContent(activeCategoryHub).faq.map((q, idx) => {
                        const faqKey = `cat-${activeCategoryHub}-faq-${idx}`;
                        const isOpen = activeAppFaqIdx === idx + 100;
                        return (
                          <div
                            key={faqKey}
                            className="border border-slate-100/60 rounded-xl bg-slate-50/40 hover:bg-slate-50 px-4 py-3 transition-all"
                          >
                            <button
                              onClick={() => setActiveAppFaqIdx(isOpen ? null : idx + 100)}
                              className="w-full flex justify-between items-center text-left font-bold text-slate-800 cursor-pointer focus:outline-none"
                            >
                              <span className="text-xs font-semibold text-slate-700">{q.q}</span>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.15 }}
                                className="text-blue-500 shrink-0 ml-2"
                              >
                                <ChevronDown className="w-4 h-4" />
                              </motion.div>
                            </button>
                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                  animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                  transition={{ duration: 0.15 }}
                                  className="overflow-hidden"
                                >
                                  <p className="text-[11px] text-gray-500 font-sans font-normal leading-relaxed">
                                    {q.a}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Other Categories list navigation */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                  <h3 className="text-sm font-bold text-slate-800 font-display">Navegar por Outros Segmentos</h3>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(CATEGORY_MAP).filter(([key]) => key !== activeCategoryHub).map(([key, label]) => {
                      const slug = CATEGORY_KEY_TO_SLUG[key];
                      return (
                        <button
                          key={key}
                          onClick={() => {
                            if (slug) {
                              setLocation('/' + slug);
                            } else {
                              setActiveCategoryHub(key);
                            }
                          }}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              // Normal Calculator view
              <>
                {/* Breadcrumbs at the top of content area */}
                {activeCalc && (
                  <Breadcrumbs
                    catKey={activeCalc.category}
                    calcName={activeCalc.name}
                    catSlug={CATEGORY_KEY_TO_SLUG[activeCalc.category]}
                  />
                )}
                
                {/* Header Title with instant Export Actions */}
                <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sticky top-18 z-25">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] uppercase font-bold text-slate-400 font-mono tracking-wider">
                        ESTADO ATIVO DA CENTRAL
                      </span>
                      <span className="text-[8px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded select-none">ATIVO</span>
                    </div>
                    <h2 className="text-lg font-display font-bold text-slate-800 mt-1">
                      {activeCalc?.name}
                    </h2>
                  </div>

                  {/* Action operations export links */}
                  <div className="flex flex-wrap gap-2 pt-1 sm:pt-0">
                    <button
                      onClick={handleSaveToHistory}
                      className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 active:scale-95 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-xs"
                      title="Salva na lista local para reuso"
                    >
                      <History className="w-3.5 h-3.5" />
                      <span>Salvar Operação</span>
                    </button>

                    <button
                      onClick={exportToCSV}
                      className="px-3.5 py-2 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100/80 border border-blue-200 active:scale-95 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-xs shrink-0"
                      title="Gera um arquivo de planilha .csv pronto para Excel"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Planilha Excel</span>
                    </button>

                    <button
                      onClick={exportToPDF}
                      className="px-3.5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-sm shrink-0"
                      title="Imprime um documento A4 certificado em PDF"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      <span>Gerar PDF</span>
                    </button>
                  </div>
                </div>

                {/* Primary content component view portal */}
                <div className="transition-all duration-300">
                  {activeCalculator === 'juros-compostos' && (
                    <CompoundInterestCalc onCalculate={handleCompoundInterestCalc} />
                  )}
                  {activeCalculator === 'clt-pj' && (
                    <CltVsPjCalc onCalculate={handleCltVsPjCalc} />
                  )}
                  {activeCalculator === 'margem-lucro' && (
                    <ProfitMarginCalc onCalculate={handleProfitMarginCalc} />
                  )}
                  {activeCalculator === 'imc' && (
                    <IbcCaloricoTracker onCalculate={handleIbcCaloricoTracker} />
                  )}
                  {activeCalculator === 'registro-horas' && (
                    <TimeSheetHoursCalc onCalculate={handleTimeSheetHoursCalc} />
                  )}
                  {activeCalculator === 'regra-tres' && (
                    <RuleOf3AndTextTools onCalculate={handleRuleOf3AndTextTools} />
                  )}
                  {activeCalculator === 'contador-texto' && (
                    <RuleOf3AndTextTools onCalculate={handleRuleOf3AndTextTools} />
                  )}
                  {activeCalculator === 'calculadora-de-rescisao-clt' && (
                    <RescisaoCLTCalc onCalculate={handleRescisaoCLTCalc} />
                  )}
                  {activeCalculator === 'calculadora-de-decimo-terceiro' && (
                    <DecimoTerceiroCalc onCalculate={handleDecimoTerceiroCalc} />
                  )}
                  {activeCalculator === 'calculadora-de-ferias-clt' && (
                    <FeriasCLTCalc onCalculate={handleFeriasCLTCalc} />
                  )}
                  {activeCalculator === 'calculadora-de-horas-extras' && (
                    <HorasExtrasCalc onCalculate={handleHorasExtrasCalc} />
                  )}
                  {activeCalculator === 'simulador-de-aposentadoria-inss' && (
                    <AposentadoriaINSSCalc onCalculate={handleAposentadoriaINSSCalc} />
                  )}
                  {activeCalculator === 'porcentagem-simples' && (
                    <SimplePercentageCalc onCalculate={handlePorcentagemSimplesCalc} />
                  )}
                  {activeCalculator === 'financiamento-veiculo' && (
                    <CarFinanceCalc onCalculate={handleFinanciamentoVeiculoCalc} />
                  )}
                  {activeCalculator === 'calculadora-ganhos-adsense' && (
                    <AdSenseEarningsCalc onCalculate={handleAdSenseEarningsCalc} />
                  )}
                  {activeCalc?.isDynamic && activeCalculator !== 'porcentagem-simples' && activeCalculator !== 'financiamento-veiculo' && activeCalculator !== 'calculadora-ganhos-adsense' && (
                    <GenericDynamicCalc 
                      calculator={activeCalc}
                      onCalculate={handleDynamicCalc}
                    />
                  )}
                </div>

                {/* SEO and Sharing Retention Enhancers */}
                <div className="flex flex-col gap-6 mt-6">
                  
                  {/* Box 1: Sharing & Viral referrals (If results are generated) */}
                  {hasActiveResult && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white border border-blue-150 rounded-2xl p-5 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                          <Share2 className="w-5 h-5 animate-pulse" />
                        </div>
                        <div>
                          <h3 className="text-xs font-bold text-slate-800">Gostou do Resultado?</h3>
                          <p className="text-[11px] text-slate-500 mt-0.5 font-sans leading-tight">
                            Copie os resultados formatados no padrão de relatório ou envie diretamente no WhatsApp de clientes e parceiros!
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0 justify-end">
                        <button
                          onClick={handleCopyShortLink}
                          className="flex-1 md:flex-none px-4 py-2 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 active:scale-95 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-xs"
                          title="Copiar link direto para esta calculadora"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Copiar Link</span>
                        </button>
                        <button
                          onClick={handleCopyResults}
                          className="flex-1 md:flex-none px-4 py-2 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 active:scale-95 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-xs"
                          title="Copiar text formatado pronto"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Resultados</span>
                        </button>
                        <button
                          onClick={handleShareWhatsApp}
                          className="flex-1 md:flex-none px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-sm"
                          title="Enviar pelo WhatsApp corporativo ou pessoal"
                        >
                          <span className="text-sm font-bold leading-none">💬</span>
                          <span>Enviar no WhatsApp</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Homepage Category Hub Portal Directory (Only shown on the root path) */}
                  {(location === '/' || location === '') && (
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
                      <div className="border-b border-slate-100 pb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-extrabold text-blue-600 tracking-wider font-mono uppercase bg-blue-50 px-2.5 py-1 rounded-md">
                            Central de Simuladores
                          </span>
                          <span className="text-[8px] bg-slate-100 text-slate-500 font-bold px-1.5 py-0.5 rounded font-mono select-none">
                            18 SEGMENTOS
                          </span>
                        </div>
                        <h3 className="text-base font-display font-bold text-slate-800 mt-3 mb-1">
                          Explore Mais de 160 Calculadoras Gratuitas
                        </h3>
                        <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
                          O Brasil Calculadoras é um ecossistema completo de ferramentas matemáticas, financeiras e de utilidade pública. Selecione uma categoria abaixo para navegar por simuladores adicionais dedicados a cada necessidade:
                        </p>
                      </div>

                      {/* Premium Grid showing all categories */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {Object.entries(CATEGORY_MAP).map(([key, label]) => {
                          const slug = CATEGORY_KEY_TO_SLUG[key];
                          const emoji = key === 'financas' ? '📊' : key === 'saude' ? '🍎' : key === 'profissoes' ? '👔' : key === 'matematica' ? '📐' : key === 'imobiliario' ? '🏠' : key === 'veiculos' ? '🚗' : key === 'estatistica' ? '📈' : key === 'juridico' ? '⚖️' : key === 'utilitarios' ? '💡' : key === 'aposentadoria' ? '⏳' : key === 'agronegocio' ? '🚜' : key === 'logistica' ? '🚚' : key === 'construcao' ? '🧱' : key === 'eventos' ? '🥩' : key === 'energia' ? '☀️' : key === 'educacao' ? '📚' : key === 'quimica_fisica' ? '🧪' : key === 'tecnologia' ? '💻' : key === 'pets' ? '🐾' : '⏱️';
                          const rawLabel = CATEGORY_MAP_RAW[key] || label;
                          const count = categoryCounts[key] || 0;

                          // Short description for each category to look rich and premium
                          const categoryDescriptions: Record<string, string> = {
                            financas: 'Juros, investimentos, empréstimos, taxas e rentabilidade financeira.',
                            saude: 'Cálculos nutricionais, IMC, metabolismo e bem-estar corporal.',
                            profissoes: 'Rescisão CLT, horas extras, 13º salário e tributação profissional.',
                            matematica: 'Regra de três, frações, estatísticas escolares e equações.',
                            imobiliario: 'Financiamento, aluguel, amortização SAC/Price e valorização.',
                            veiculos: 'Consumo de combustível, IPVA, depreciação FIPE e viagens.',
                            estatistica: 'Médias ponderadas, desvio padrão, probabilidade e combinatória.',
                            juridico: 'Imposto de renda, taxas de cartório, multas e honorários.',
                            utilitarios: 'Medições domésticas, conversão de unidades e consumo diário.',
                            aposentadoria: 'Simulação de INSS, previdência privada e idade mínima.',
                            agronegocio: 'Cálculos de sementes, fertilizantes, gado e produtividade agrícola.',
                            logistica: 'Cálculo de frete, cubagem de carga, rotas e pedágios.',
                            construcao: 'Materiais de construção, tijolos, cimento e área de pintura.',
                            eventos: 'Quantidade de comida e bebida por pessoa para festas e churrascos.',
                            energia: 'Dimensionamento solar fotovoltaico, consumo KWh e economia.',
                            educacao: 'Média do ENEM, nota de corte de vestibulares e histórico escolar.',
                            quimica_fisica: 'Velocidade, densidade, conversor de temperatura e gases.',
                            tecnologia: 'Conversão de bases, tempo de download, aspect ratio e lucros do AdSense.',
                            pets: 'Metas de ração diária, hidratação e idade humana de cães e gatos.'
                          };

                          const desc = categoryDescriptions[key] || 'Ferramentas de precisão matemática para o dia a dia.';

                          return (
                            <div
                              key={key}
                              onClick={() => {
                                if (slug) {
                                  setLocation('/' + slug);
                                } else {
                                  setActiveCategory(key);
                                }
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="group border border-slate-150 hover:border-blue-200 hover:bg-blue-50/10 p-4 rounded-xl cursor-pointer transition-all hover:shadow-xs flex flex-col justify-between h-32"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-1.5">
                                  <span className="text-lg">{emoji}</span>
                                  <span className="bg-slate-100 text-slate-500 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-md group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                                    {count} {count === 1 ? 'ferramenta' : 'ferramentas'}
                                  </span>
                                </div>
                                <h4 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                                  {rawLabel}
                                </h4>
                                <p className="text-[10.2px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                                  {desc}
                                </p>
                              </div>
                              <span className="text-[9px] font-mono font-semibold text-blue-600 uppercase inline-flex items-center gap-1 group-hover:underline mt-2">
                                Acessar Segmento <ChevronRight className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Box 2: SEO Exhaustive Technical Guide & Accordion FAQ */}
                  {activeCalc && (
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
                      
                      {/* Detailed semantic sections */}
                      <div className="flex flex-col gap-5">
                        <div>
                          <span className="text-[10px] font-extrabold text-blue-600 tracking-wider font-mono uppercase bg-blue-50 px-2.5 py-1 rounded-md">
                            O que é e para que serve
                          </span>
                          <h3 className="text-xs font-bold text-slate-800 mt-2.5 mb-1.5">Entenda o Conceito</h3>
                          <p className="text-[11.5px] text-slate-600 leading-relaxed font-normal">
                            {getSeoContentForCalculator(activeCalc).whatIs}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                          <div>
                            <span className="text-[9px] font-extrabold text-slate-400 font-mono uppercase tracking-wider block mb-1">
                              Como Calcular na Prática
                            </span>
                            <p className="text-[10.5px] text-slate-500 leading-relaxed font-normal">
                              {getSeoContentForCalculator(activeCalc).howItWorks}
                            </p>
                          </div>
                          <div>
                            <span className="text-[9px] font-extrabold text-slate-400 font-mono uppercase tracking-wider block mb-1">
                              Exemplo de Aplicação
                            </span>
                            <p className="text-[10.5px] text-slate-500 leading-relaxed font-normal">
                              {getSeoContentForCalculator(activeCalc).practicalExample}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                          <div>
                            <span className="text-[9px] font-extrabold text-slate-400 font-mono uppercase tracking-wider block mb-1">
                              Quando Utilizar esta Ferramenta
                            </span>
                            <p className="text-[10.5px] text-slate-500 leading-relaxed font-normal">
                              {getSeoContentForCalculator(activeCalc).whenToUse}
                            </p>
                          </div>
                          <div>
                            <span className="text-[9px] font-extrabold text-slate-400 font-mono uppercase tracking-wider block mb-1">
                              Dicas e Recomendações
                            </span>
                            <p className="text-[10.5px] text-slate-500 leading-relaxed font-normal">
                              {getSeoContentForCalculator(activeCalc).importantTips}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* EEAT Block: Fontes Oficiais e Data de Revisão */}
                      {getSeoContentForCalculator(activeCalc).sources.length > 0 && (
                        <div className="border-t border-slate-150 pt-4 mt-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 bg-slate-50/50 p-4 rounded-xl border border-slate-200/50">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-slate-400 font-mono uppercase">Revisado Cientificamente por Fontes Governamentais</span>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {getSeoContentForCalculator(activeCalc).sources.map((src, sIdx) => (
                              <a
                                key={sIdx}
                                href={src.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] text-blue-600 hover:text-blue-800 font-bold inline-flex items-center gap-1 transition-colors hover:underline"
                              >
                                {src.name} <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            ))}
                            <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
                              ⏱️ Atualizado em: {getSeoContentForCalculator(activeCalc).lastUpdated}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* FAQ Accordion for calculators */}
                      {getSeoContentForCalculator(activeCalc).faq.length > 0 && (
                        <div className="flex flex-col gap-3 border-t border-slate-100 pt-5">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider select-none">
                            Perguntas Frequentes do Canal (F.A.Q.)
                          </span>
                          <div className="flex flex-col gap-2">
                            {getSeoContentForCalculator(activeCalc).faq.map((q, idx) => {
                              const isOpen = activeAppFaqIdx === idx;
                              return (
                                <div 
                                  key={idx} 
                                  className="border border-slate-100/60 rounded-xl bg-slate-50/40 hover:bg-slate-50 px-4 py-3 transition-all"
                                >
                                  <button
                                    onClick={() => setActiveAppFaqIdx(isOpen ? null : idx)}
                                    className="w-full flex justify-between items-center text-left font-bold text-slate-800 cursor-pointer focus:outline-none"
                                  >
                                    <span className="text-xs font-semibold text-slate-700">{q.q}</span>
                                    <motion.div
                                      animate={{ rotate: isOpen ? 180 : 0 }}
                                      transition={{ duration: 0.15 }}
                                      className="text-blue-500 shrink-0 ml-2"
                                    >
                                      <ChevronDown className="w-4 h-4" />
                                    </motion.div>
                                  </button>
                                  <AnimatePresence initial={false}>
                                    {isOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                        animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="overflow-hidden"
                                      >
                                        <p className="text-[11px] text-gray-500 font-sans font-normal leading-relaxed">
                                          {q.a}
                                        </p>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Box 3: Advanced Internal Linking grids (3 categories: Related, Complementary, Popular) */}
                  {activeCalc && (
                    <div className="flex flex-col gap-6">
                      
                      {/* Grid 1: Calculadoras da mesma Categoria */}
                      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                          <div className="h-4 w-1 bg-blue-600 rounded-full" />
                          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 font-display">
                            Calculadoras da mesma Categoria ({CATEGORY_MAP_RAW[activeCalc.category] || activeCalc.category})
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {relatedCalculators.map(c => (
                            <div 
                              key={c.id} 
                              onClick={() => selectCalculator(c.id as any)}
                              className="group border border-slate-150 hover:border-blue-200 hover:bg-blue-50/10 p-4 rounded-xl cursor-pointer transition-all hover:shadow-xs flex flex-col justify-between h-32"
                            >
                              <div>
                                <h4 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">{c.name}</h4>
                                <p className="text-[10px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">{c.description}</p>
                              </div>
                              <span className="text-[9px] font-mono font-semibold text-blue-600 uppercase inline-flex items-center gap-1 group-hover:underline mt-2">
                                Calcular Agora <ExternalLink className="w-2.5 h-2.5" />
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Grid 2: Você também pode precisar (Ferramentas Complementares) */}
                      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                          <div className="h-4 w-1 bg-amber-500 rounded-full" />
                          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 font-display">
                            Você também pode precisar (Ferramentas Complementares)
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {getComplementaryCalculators(activeCalculator, activeCalc.category).map(c => (
                            <div 
                              key={c.id} 
                              onClick={() => selectCalculator(c.id as any)}
                              className="group border border-slate-150 hover:border-amber-200 hover:bg-amber-50/10 p-4 rounded-xl cursor-pointer transition-all hover:shadow-xs flex flex-col justify-between h-32"
                            >
                              <div>
                                <h4 className="text-xs font-bold text-slate-800 group-hover:text-amber-600 transition-colors line-clamp-1">{c.name}</h4>
                                <p className="text-[10px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">{c.description}</p>
                              </div>
                              <span className="text-[9px] font-mono font-semibold text-amber-600 uppercase inline-flex items-center gap-1 group-hover:underline mt-2">
                                Acessar Ferramenta <ExternalLink className="w-2.5 h-2.5" />
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Grid 3: Mais Utilizadas (Popular Global Links) */}
                      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                          <div className="h-4 w-1 bg-emerald-500 rounded-full" />
                          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 font-display">
                            Mais Utilizadas da Central (Mais Acessadas)
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {getPopularCalculators(activeCalculator).map(c => (
                            <div 
                              key={c.id} 
                              onClick={() => selectCalculator(c.id as any)}
                              className="group border border-slate-150 hover:border-emerald-200 hover:bg-emerald-50/10 p-4 rounded-xl cursor-pointer transition-all hover:shadow-xs flex flex-col justify-between h-32"
                            >
                              <div>
                                <h4 className="text-xs font-bold text-slate-800 group-hover:text-emerald-600 transition-colors line-clamp-1">{c.name}</h4>
                                <p className="text-[10px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">{c.description}</p>
                              </div>
                              <span className="text-[9px] font-mono font-semibold text-emerald-600 uppercase inline-flex items-center gap-1 group-hover:underline mt-2">
                                Simular Agora <ExternalLink className="w-2.5 h-2.5" />
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              </>
            )}

            {/* AdSense Secondary banner footer container */}
            <div className="w-full mt-4">
              <AdSenseBanner 
                category={activeCalc?.category || 'financas'}
                layout="horizontal"
                onAdClicked={handleAdClicked}
                refreshTrigger={adRefreshTrigger + 10} // different trigger to alternate ads
              />
            </div>

          </section>
        </div>
        )}
      </main>

      {/* Advanced AdSense and LGPD Compliant Footer with Modals */}
      <FooterAndLegals 
        onCategoryClick={setActiveCategory} 
        onCalculatorClick={selectCalculator} 
        categories={CATEGORY_MAP} 
      />
    </div>
  );
}


export interface CalcStatePayload {
  activeCalculator: any;
  activeCalcDef: any;
  compoundInterestResults: any;
  cltVsPjResults: any;
  profitMarginResults: any;
  healthResults: any;
  timeSheetResults: any;
  rule3Results: any;
  rescisaoCLTResults: any;
  decimoTerceiroResults: any;
  feriasCLTResults: any;
  horasExtrasResults: any;
  aposentadoriaINSSResults: any;
  dynamicCalcInputs: any;
  dynamicCalcOutputs: any;
  porcentagemSimplesResults?: any;
  financiamentoVeiculoResults?: any;
  adsenseEarningsResults?: any;
}
