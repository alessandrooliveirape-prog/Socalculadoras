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
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'wouter';

// Custom imports
import { CalculatorId, CalculatorCategory, CalculatorDef, HistoryEntry } from './types';
import { AdSenseBanner, AdSensePublisherDashboard } from './components/AdSenseBanner';
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
import { CALCULATORS_CATALOG, CATEGORY_MAP } from './data/calculatorsCatalog';
import { buildHistorySummary } from './utils/historyManager';
import { handleExportCSV } from './utils/exportCSV';
import { handleExportPDF } from './utils/exportPDF';


export default function App() {
  const [location, setLocation] = useLocation();
  const [activeCalculator, setActiveCalculator] = useState<CalculatorId>('juros-compostos');
  const [activeCategory, setActiveCategory] = useState<CalculatorCategory>('todos');

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
      const matched = CALCULATORS_CATALOG.find(c => c.id === path);
      if (matched) {
        setActiveCalculator(prev => {
          if (prev !== matched.id) {
            return matched.id as CalculatorId;
          }
          return prev;
        });
      }
    } else {
      setActiveCalculator('juros-compostos');
    }
  }, [location, setLocation]);

  // Dynamic Page Title & SEO Meta Updates on calculator change
  useEffect(() => {
    const activeCalc = CALCULATORS_CATALOG.find(c => c.id === activeCalculator);
    if (!activeCalc) return;

    // 1. Dynamic document title so search engine robots index of actual tools uniquely
    document.title = `${activeCalc.name} | Brasil Calculadoras`;

    // 2. Dynamic metadata description update for contextual crawl matching
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', activeCalc.description);

    // 3. Dynamic JSON-LD structured schema markup injection for googlebot crawl matching
    try {
      let schemaScript = document.getElementById('jsonld-seo') as HTMLScriptElement;
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'jsonld-seo';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }

      const normalizedFaq = activeCalc.faq?.map(f => ({
        question: f.question || (f as any).q || '',
        answer: f.answer || (f as any).a || ''
      })).filter(f => f.question && f.answer) || [];

      const faqItems = normalizedFaq.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }));

      const softwareApplicationSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": activeCalc.name,
        "operatingSystem": "All",
        "applicationCategory": "EducationalApplication",
        "description": activeCalc.description,
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "BRL"
        }
      };

      const faqPageSchema = faqItems.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems
      } : null;

      const combinedSchema = faqPageSchema 
        ? [softwareApplicationSchema, faqPageSchema]
        : [softwareApplicationSchema];

      schemaScript.textContent = JSON.stringify(combinedSchema);
    } catch (e) {
      console.warn('JSON-LD schema generation failed:', e);
    }

    // 4. Dynamic Canonical URL to prevent duplicate content indexing
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    const isHome = window.location.pathname === '/' || window.location.pathname === '';
    canonicalLink.setAttribute('href', isHome ? 'https://www.brasilcalculadoras.com.br/' : `https://www.brasilcalculadoras.com.br/${activeCalculator}`);

    // 5. Force increment of ad refreshing trigger so ALL ads on page reload
    setAdRefreshTrigger(prev => prev + 1);

    // 6. Simulate web vitals and virtual hit for AdSense spiders
    if (typeof (window as any).adsbygoogle !== 'undefined') {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({
          'event': 'virtualPageView',
          'pagePath': `/${activeCalculator}`,
          'pageTitle': activeCalc.name
        });
      } catch (e) {
        // Safe bypass in dev sandbox
      }
    }
  }, [activeCalculator]);

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
    dynamicCalcOutputs
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
    if (activeCalc?.isDynamic) return Object.keys(dynamicCalcOutputs).length > 0;
    return false;
  }, [
    activeCalculator, activeCalc, compoundInterestResults, cltVsPjResults, profitMarginResults,
    healthResults, timeSheetResults, rescisaoCLTResults, decimoTerceiroResults, feriasCLTResults,
    horasExtrasResults, aposentadoriaINSSResults, dynamicCalcOutputs
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
              className="flex items-center gap-2 cursor-pointer select-none animate-once"
              title="Clique 5 vezes aqui para ativar/desativar as métricas de simulação do AdSense"
            >
              <div className="h-9 w-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-100">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-md font-display font-bold text-slate-800 tracking-tight leading-none">
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
                      {c.category === 'financas' ? 'Negócios' : c.category === 'saude' ? 'Saúde' : 'Produtividade'}
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
        
        {/* AdSense Publisher Live Simulation Metrics Bar (If Active & Admin Mode) */}
        {showPublisherDashboard && isAdmin && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <AdSensePublisherDashboard
              stats={publisherStats}
              onOptimize={() => {
                setAdClicks(prev => prev + 3);
                triggerToast('✨ Inteligência AdSense: Posição do banner otimizada automaticamente para maior CTR (+3 cliques)!');
              }}
            />
          </motion.div>
        )}

        {/* AdSense Top Header Banner - Displayed on the user interface */}
        <div className="w-full">
          <AdSenseBanner 
            category={
              activeCalculator === 'juros-compostos' || activeCalculator === 'clt-pj' || activeCalculator === 'margem-lucro'
                ? 'financas'
                : activeCalculator === 'imc'
                ? 'saude'
                : 'produtividade'
            }
            layout="horizontal"
            onAdClicked={handleAdClicked}
            refreshTrigger={adRefreshTrigger}
          />
        </div>

        {/* Central Core Workstation split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Side Drawer menu - Categories selector list */}
          <aside className={`lg:col-span-3 flex-col gap-5 ${menuOpen ? 'flex fixed inset-y-0 left-0 bg-white w-72 p-6 z-50 border-r shadow-2xl' : 'hidden lg:flex'}`}>
            
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
                onClick={() => setActiveCategory('todos')}
                className={`w-full text-left py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-between transition-all cursor-pointer ${
                  activeCategory === 'todos' 
                    ? 'bg-blue-50 text-blue-700 font-medium shadow-xs' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span>🚀 Todas as Ferramentas</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${activeCategory === 'todos' ? 'bg-blue-101 bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>{categoryCounts.todos}</span>
              </button>

              {Object.entries(CATEGORY_MAP).map(([key, label]) => {
                const isSelected = activeCategory === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full text-left py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-between transition-all cursor-pointer ${
                      isSelected 
                        ? 'bg-blue-50 text-blue-700 font-medium shadow-xs' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="shrink-0 text-xs">
                        {key === 'financas' ? '📊' : key === 'saude' ? '🍎' : key === 'produtividade' ? '⚙️' : key === 'matematica' ? '🧮' : key === 'imobiliaria' ? '🏠' : key === 'veiculos' ? '🚗' : key === 'estatistica' ? '📈' : key === 'juridico' ? '⚖️' : key === 'utilitarios' ? '🛠️' : key === 'agronegocio' ? '🚜' : key === 'logistica' ? '🚚' : '⏱️'}
                      </span>
                      <span className="truncate">{label}</span>
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
          </aside>

          {/* Active Calculator Workstation Space */}
          <section className="lg:col-span-9 flex flex-col gap-6">
            
            {/* Header Title with instant Export Actions */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sticky top-18 z-25">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] uppercase font-bold text-slate-405 text-slate-400 font-mono tracking-wider">
                    ESTADO ATIVO DA CENTRAL
                  </span>
                  <span className="text-[8px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded select-none">ATIVO</span>
                </div>
                <h2 className="text-lg font-display font-bold text-slate-800 mt-1">
                  {CALCULATORS_CATALOG.find(c => c.id === activeCalculator)?.name}
                </h2>
              </div>

              {/* Action operations export links */}
              <div className="flex flex-wrap gap-2 pt-1 sm:pt-0">
                {/* Save calculation */}
                <button
                  onClick={handleSaveToHistory}
                  className="px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 active:scale-95 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-xs"
                  title="Salva na lista local para reuso"
                >
                  <History className="w-3.5 h-3.5" />
                  <span>Salvar Operação</span>
                </button>

                {/* Export excel link */}
                <button
                  onClick={exportToCSV}
                  className="px-3.5 py-2 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100/80 border border-blue-200 active:scale-95 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-xs shrink-0"
                  title="Gera um arquivo de planilha .csv pronto para Excel"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Planilha Excel</span>
                </button>

                {/* Export pdf link */}
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
              {CALCULATORS_CATALOG.find(c => c.id === activeCalculator)?.isDynamic && (
                <GenericDynamicCalc 
                  calculator={CALCULATORS_CATALOG.find(c => c.id === activeCalculator)!}
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
                      onClick={handleCopyResults}
                      className="flex-1 md:flex-none px-4 py-2 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 active:scale-95 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-xs"
                      title="Copiar texto formatado pronto"
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

              {/* Box 2: SEO Exhaustive Technical Guide & Accordion FAQ */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-5">
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-extrabold text-blue-600 tracking-wider font-mono uppercase bg-blue-50 px-2.5 py-1 rounded-md">
                    Guia de Uso & Informações Técnicas
                  </span>
                  <p className="text-[11.5px] text-slate-600 mt-2.5 leading-relaxed font-normal">
                    {getSeoText()}
                  </p>
                </div>

                {/* FAQ Accordion for static calculators (avoids duplicate render in dynamic layout) */}
                {!activeCalc?.isDynamic && activeFaq.length > 0 && (
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider select-none">
                      Perguntas Frequentes do Canal (F.A.Q.)
                    </span>
                    <div className="flex flex-col gap-2">
                      {activeFaq.map((q, idx) => {
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
                              <span className="text-xs font-semibold text-slate-700">{q.question}</span>
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
                                    {q.answer}
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

              {/* Box 3: Related Navigation to maintain organic traffic browsing flow */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
                  <div className="h-6 w-1 bg-blue-600 rounded-full" />
                  <h3 className="text-sm font-bold text-slate-800 font-display">Calculadoras Recomendadas</h3>
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

            </div>

            {/* AdSense Secondary banner footer container */}
            <div className="w-full mt-4">
              <AdSenseBanner 
                category={
                  activeCalculator === 'juros-compostos' || activeCalculator === 'clt-pj' || activeCalculator === 'margem-lucro'
                    ? 'financas'
                    : activeCalculator === 'imc'
                    ? 'saude'
                    : 'produtividade'
                }
                layout="horizontal"
                onAdClicked={handleAdClicked}
                refreshTrigger={adRefreshTrigger + 10} // different trigger to alternate ads
              />
            </div>

          </section>
        </div>
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
}
