import React, { useState, useMemo, useEffect } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  RotateCcw, 
  Percent, 
  Eye, 
  MousePointer, 
  Settings, 
  HelpCircle, 
  BookOpen, 
  ShieldAlert, 
  Coins, 
  Info
} from 'lucide-react';

interface AdSenseEarningsCalcProps {
  onCalculate: (results: {
    monthlyEarnings: number;
    annualEarnings: number;
    monthlyPageviews: number;
    adImpressions: number;
    ctr: number;
    cpc: number;
    rpm: number;
    clicks: number;
    category: string;
    region: string;
    visitors: number;
    pagesPerVisit: number;
    adsPerPage: number;
    data: Array<{
      trafficLevel: number;
      visitors: number;
      pageviews: number;
      earnings: number;
    }>;
  }) => void;
}

// RPM Base Values per Category (Global reference)
const CATEGORY_RATES: Record<string, { rpm: number; cpc: number; name: string }> = {
  financas: { rpm: 45.0, cpc: 1.25, name: '💰 Finanças & Negócios' },
  tecnologia: { rpm: 35.0, cpc: 0.95, name: '💻 Tecnologia & Computação' },
  saude: { rpm: 28.0, cpc: 0.75, name: '❤️ Saúde & Dietas' },
  imobiliario: { rpm: 25.0, cpc: 0.70, name: '🏠 Imobiliário & Aluguel' },
  veiculos: { rpm: 22.0, cpc: 0.60, name: '🚗 Veículos & Combustível' },
  educacao: { rpm: 18.0, cpc: 0.50, name: '📚 Educação & ENEM' },
  viagens: { rpm: 24.0, cpc: 0.65, name: '✈️ Viagens & Turismo' },
  entretenimento: { rpm: 12.0, cpc: 0.35, name: '🎭 Entretenimento & Cultura' },
  noticias: { rpm: 8.0, cpc: 0.22, name: '📰 Notícias & Portais Gerais' },
  geral: { rpm: 15.0, cpc: 0.40, name: '💡 Geral & Outros' }
};

// Region Multipliers
const REGION_MULTIPLIERS: Record<string, { multiplier: number; name: string }> = {
  na: { multiplier: 1.50, name: '🇺🇸 América do Norte (EUA/Canadá)' },
  eu: { multiplier: 1.25, name: '🇪🇺 Europa Ocidental' },
  as: { multiplier: 0.95, name: '🇯🇵 Ásia & Oceania (Japão/Austrália)' },
  la: { multiplier: 0.65, name: '🇧🇷 América Latina & Brasil' },
  global: { multiplier: 0.80, name: '🌐 Resto do Mundo / Global' }
};

export const AdSenseEarningsCalc: React.FC<AdSenseEarningsCalcProps> = ({ onCalculate }) => {
  // Main parameters state
  const [category, setCategory] = useState<string>('tecnologia');
  const [region, setRegion] = useState<string>('la');
  const [visitors, setVisitors] = useState<number>(100000);
  const [pagesPerVisit, setPagesPerVisit] = useState<number>(2.2);

  // Advanced settings state
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);
  const [autoEstimate, setAutoEstimate] = useState<boolean>(true);
  const [manualCtr, setManualCtr] = useState<number>(1.8);
  const [manualCpc, setManualCpc] = useState<number>(0.85);
  const [adsPerPage, setAdsPerPage] = useState<number>(3);

  // Calculate outputs
  const results = useMemo(() => {
    const rawCategory = CATEGORY_RATES[category] || CATEGORY_RATES.geral;
    const rawRegion = REGION_MULTIPLIERS[region] || REGION_MULTIPLIERS.global;

    const monthlyPageviews = Math.round(visitors * pagesPerVisit);
    const adImpressions = monthlyPageviews * adsPerPage;

    let ctr = 1.8; // baseline CTR
    let cpc = 0.85; // baseline CPC

    if (autoEstimate) {
      // Calculate from Category and Region multipliers
      cpc = rawCategory.cpc * rawRegion.multiplier;
      // Derived CTR adjusted slightly by category interest density
      ctr = category === 'financas' || category === 'imobiliario' ? 2.1 : 1.7;
    } else {
      ctr = manualCtr;
      cpc = manualCpc;
    }

    // Mathematical formula consistency
    // Clicks = Impressions * CTR (%)
    const clicks = Math.round(adImpressions * (ctr / 100));
    const monthlyEarnings = clicks * cpc;
    const annualEarnings = monthlyEarnings * 12;

    // RPM = (Earnings / Pageviews) * 1000
    const rpm = monthlyPageviews > 0 ? (monthlyEarnings / monthlyPageviews) * 1000 : 0;

    // Generate data for graph projections (50%, 75%, 100%, 125%, 150% traffic variations)
    const trafficLevels = [50, 75, 100, 125, 150];
    const data = trafficLevels.map(level => {
      const levelVisitors = Math.round((visitors * level) / 100);
      const levelPageviews = Math.round(levelVisitors * pagesPerVisit);
      const levelImpressions = levelPageviews * adsPerPage;
      const levelClicks = Math.round(levelImpressions * (ctr / 100));
      const levelEarnings = levelClicks * cpc;

      return {
        trafficLevel: level,
        visitors: levelVisitors,
        pageviews: levelPageviews,
        earnings: Math.round(levelEarnings)
      };
    });

    return {
      monthlyEarnings: Math.round(monthlyEarnings * 100) / 100,
      annualEarnings: Math.round(annualEarnings * 100) / 100,
      monthlyPageviews,
      adImpressions,
      ctr,
      cpc: Math.round(cpc * 100) / 100,
      rpm: Math.round(rpm * 100) / 100,
      clicks,
      data
    };
  }, [category, region, visitors, pagesPerVisit, autoEstimate, manualCtr, manualCpc, adsPerPage]);

  // Callback to share with parent whenever calculation triggers
  useEffect(() => {
    onCalculate({
      monthlyEarnings: results.monthlyEarnings,
      annualEarnings: results.annualEarnings,
      monthlyPageviews: results.monthlyPageviews,
      adImpressions: results.adImpressions,
      ctr: results.ctr,
      cpc: results.cpc,
      rpm: results.rpm,
      clicks: results.clicks,
      category: CATEGORY_RATES[category]?.name || category,
      region: REGION_MULTIPLIERS[region]?.name || region,
      visitors,
      pagesPerVisit,
      adsPerPage,
      data: results.data
    });
  }, [results, onCalculate, category, region, visitors, pagesPerVisit, adsPerPage]);

  const handleReset = () => {
    setCategory('tecnologia');
    setRegion('la');
    setVisitors(100000);
    setPagesPerVisit(2.2);
    setAutoEstimate(true);
    setManualCtr(1.8);
    setManualCpc(0.85);
    setAdsPerPage(3);
    setShowAdvanced(false);
  };

  // Safe SVG Chart Coordinates for Projections
  const chartPoints = useMemo(() => {
    const data = results.data;
    const width = 500;
    const height = 160;
    const maxVal = Math.max(...data.map(d => d.earnings)) || 1;

    const points = data.map((p, idx) => {
      const x = (idx / (data.length - 1)) * width;
      const y = height - (p.earnings / maxVal) * height * 0.85 - 15; // padding
      return `${x},${y}`;
    });

    return {
      path: points.join(' '),
      points,
      width,
      height
    };
  }, [results.data]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Parameters Panel */}
      <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <h3 className="text-base font-semibold text-slate-800">Parâmetros do AdSense</h3>
          <button 
            onClick={handleReset}
            className="text-xs font-semibold text-gray-500 hover:text-slate-800 flex items-center gap-1 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Resetar</span>
          </button>
        </div>

        {/* Input: Category */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-600">Categoria/Nicho do Site</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none transition-all cursor-pointer font-medium text-slate-700"
          >
            {Object.entries(CATEGORY_RATES).map(([key, item]) => (
              <option key={key} value={key}>{item.name}</option>
            ))}
          </select>
          <p className="text-[10px] text-gray-400">O nicho tem grande impacto nas ofertas dos anunciantes (CPC).</p>
        </div>

        {/* Input: Region */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-600">Região dos Visitantes (Tráfego)</label>
          <select 
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none transition-all cursor-pointer font-medium text-slate-700"
          >
            {Object.entries(REGION_MULTIPLIERS).map(([key, item]) => (
              <option key={key} value={key}>{item.name}</option>
            ))}
          </select>
          <p className="text-[10px] text-gray-400">Países de primeiro mundo possuem lances de CPC consideravelmente superiores.</p>
        </div>

        {/* Input: Monthly Visitors */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold text-gray-600">Visitantes Únicos Mensais</label>
            <input 
              type="number"
              value={visitors || ''}
              min={1000}
              max={10000000}
              onChange={(e) => setVisitors(Math.max(1, parseInt(e.target.value) || 0))}
              className="w-24 px-2 py-1 text-right text-xs bg-gray-50 border border-gray-200 rounded-md font-mono focus:outline-none focus:border-slate-800"
            />
          </div>
          <input 
            type="range"
            min="1000"
            max="2000000"
            step="1000"
            value={visitors}
            onChange={(e) => setVisitors(parseInt(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer h-1.5 bg-gray-100 rounded-lg appearance-none"
          />
          <div className="flex justify-between text-[9px] text-gray-400 font-mono">
            <span>1K</span>
            <span>500K</span>
            <span>1M</span>
            <span>2M+</span>
          </div>
        </div>

        {/* Input: Pages visited per visit */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold text-gray-600">Média de Páginas Visitadas (Páginas/Sessão)</label>
            <input 
              type="number"
              step="0.1"
              value={pagesPerVisit || ''}
              min={1}
              max={10}
              onChange={(e) => setPagesPerVisit(Math.max(1, parseFloat(e.target.value) || 1))}
              className="w-20 px-2 py-1 text-right text-xs bg-gray-50 border border-gray-200 rounded-md font-mono focus:outline-none focus:border-slate-800"
            />
          </div>
          <input 
            type="range"
            min="1.0"
            max="8.0"
            step="0.1"
            value={pagesPerVisit}
            onChange={(e) => setPagesPerVisit(parseFloat(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer h-1.5 bg-gray-100 rounded-lg appearance-none"
          />
          <div className="flex justify-between text-[9px] text-gray-400 font-mono">
            <span>1.0</span>
            <span>3.0</span>
            <span>5.0</span>
            <span>8.0+</span>
          </div>
        </div>

        {/* Advanced Settings Toggle */}
        <div className="border-t border-gray-100 pt-3">
          <button 
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer select-none"
          >
            <Settings className={`w-3.5 h-3.5 transition-transform ${showAdvanced ? 'rotate-90' : ''}`} />
            <span>{showAdvanced ? 'Ocultar Configurações Avançadas' : 'Mostrar Configurações Avançadas'}</span>
          </button>
        </div>

        {showAdvanced && (
          <div className="flex flex-col gap-4 p-4 rounded-xl bg-slate-50/50 border border-slate-200/50 transition-all">
            {/* Auto-estimate Toggle */}
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-700">Auto-estimar CTR & CPC</label>
              <input 
                type="checkbox"
                checked={autoEstimate}
                onChange={(e) => setAutoEstimate(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 cursor-pointer"
              />
            </div>

            {/* Manual CTR Slider */}
            <div className={`flex flex-col gap-2 ${autoEstimate ? 'opacity-50 pointer-events-none' : ''}`}>
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                  CTR Estimado (%)
                  <HelpCircle className="w-3 h-3 text-slate-400" title="Percentual de visualizações que resultam em cliques nos anúncios." />
                </label>
                <span className="text-xs font-mono font-bold text-slate-800">{manualCtr}%</span>
              </div>
              <input 
                type="range"
                min="0.1"
                max="8.0"
                step="0.05"
                value={manualCtr}
                disabled={autoEstimate}
                onChange={(e) => setManualCtr(parseFloat(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer h-1 bg-gray-200 rounded"
              />
            </div>

            {/* Manual CPC Input */}
            <div className={`flex flex-col gap-2 ${autoEstimate ? 'opacity-50 pointer-events-none' : ''}`}>
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-gray-600 flex items-center gap-1">
                  CPC Médio (R$)
                  <HelpCircle className="w-3 h-3 text-slate-400" title="Valor médio pago por clique em anúncio (Custo Por Clique)." />
                </label>
                <span className="text-xs font-mono font-bold text-slate-800">R$ {manualCpc}</span>
              </div>
              <input 
                type="range"
                min="0.10"
                max="10.00"
                step="0.05"
                value={manualCpc}
                disabled={autoEstimate}
                onChange={(e) => setManualCpc(parseFloat(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer h-1 bg-gray-200 rounded"
              />
            </div>

            {/* Ads per page selection */}
            <div className="flex flex-col gap-1.5 border-t border-slate-200/50 pt-2.5">
              <label className="text-xs font-semibold text-gray-600">Densidade de Anúncios por Página</label>
              <select 
                value={adsPerPage}
                onChange={(e) => setAdsPerPage(parseInt(e.target.value))}
                className="w-full px-2.5 py-1.5 text-xs bg-white border border-gray-200 rounded-md font-medium text-slate-700 focus:outline-none"
              >
                <option value="1">1 Anúncio (Leve)</option>
                <option value="2">2 Anúncios (Conservador)</option>
                <option value="3">3 Anúncios (Recomendado/Médio)</option>
                <option value="4">4 Anúncios (Otimizado/Forte)</option>
                <option value="5">5 Anúncios (Agressivo/Massa)</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Results Panel */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        {/* Estimated Earnings Card */}
        <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white rounded-2xl p-6 shadow-md border border-emerald-950 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none translate-x-8 translate-y-8">
            <Coins className="w-64 h-64" />
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-full">Projeção Estimada 2026</span>
            <DollarSign className="w-5 h-5 text-emerald-400" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div>
              <span className="text-xs text-slate-400 font-medium">Ganhos Mensais Estimados</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1 select-all font-mono tracking-tight">
                R$ {results.monthlyEarnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </h2>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-medium">Faturamento Anual Projetado</span>
              <h3 className="text-xl font-bold text-emerald-400 mt-1 select-all font-mono">
                R$ {results.annualEarnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </h3>
            </div>
          </div>
        </div>

        {/* Long-tail Metrics Details Grid */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-slate-800 border-b border-slate-100 pb-2">Métricas de Rentabilidade (SEO Cauda Longa)</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-3 bg-slate-50 rounded-xl flex flex-col gap-1 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
                RPM Médio
                <HelpCircle className="w-2.5 h-2.5 text-slate-400" title="Lucro gerado a cada 1.000 visualizações de páginas." />
              </span>
              <span className="text-base font-extrabold text-slate-800 font-mono">
                R$ {results.rpm.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>
            
            <div className="p-3 bg-slate-50 rounded-xl flex flex-col gap-1 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Visualizações/Mês</span>
              <span className="text-base font-extrabold text-slate-800 font-mono">
                {results.monthlyPageviews.toLocaleString('pt-BR')}
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl flex flex-col gap-1 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
                CTR Estimado
                <HelpCircle className="w-2.5 h-2.5 text-slate-400" title="Click-through rate (Taxa de cliques nos blocos de anúncios)." />
              </span>
              <span className="text-base font-extrabold text-slate-800 font-mono">
                {results.ctr.toFixed(2)}%
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl flex flex-col gap-1 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1">
                CPC Médio
                <HelpCircle className="w-2.5 h-2.5 text-slate-400" title="Custo Médio por Clique recebido." />
              </span>
              <span className="text-base font-extrabold text-slate-800 font-mono">
                R$ {results.cpc.toFixed(2)}
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl flex flex-col gap-1 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Cliques Mensais</span>
              <span className="text-base font-extrabold text-slate-800 font-mono">
                {results.clicks.toLocaleString('pt-BR')}
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl flex flex-col gap-1 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Impressões Anúncios</span>
              <span className="text-base font-extrabold text-slate-800 font-mono">
                {results.adImpressions.toLocaleString('pt-BR')}
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic SVG Projections Graph */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2">
            <h4 className="text-sm font-semibold text-slate-800">Projeção por Volume de Tráfego</h4>
            <span className="text-[10px] text-gray-500 font-medium font-sans">Lucros Estimados x Volume de Visitantes</span>
          </div>

          <div className="relative pt-2">
            <svg 
              viewBox={`0 0 ${chartPoints.width} ${chartPoints.height}`}
              className="w-full h-auto overflow-visible"
            >
              {/* Grid lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((r, idx) => {
                const y = chartPoints.height - r * (chartPoints.height - 30) - 15;
                return (
                  <line 
                    key={idx}
                    x1="0"
                    y1={y}
                    x2={chartPoints.width}
                    y2={y}
                    stroke="#f1f5f9"
                    strokeWidth="1.5"
                    strokeDasharray="4"
                  />
                );
              })}

              {/* Area path */}
              <path 
                d={`M 0,${chartPoints.height - 15} L ${chartPoints.points.map(p => p).join(' L ')} L ${chartPoints.width},${chartPoints.height - 15} Z`}
                fill="url(#gradient-earnings)"
                opacity="0.15"
              />

              {/* Stroke path */}
              <path 
                d={`M ${chartPoints.points.join(' L ')}`}
                fill="none"
                stroke="#10b981"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points */}
              {results.data.map((item, idx) => {
                const [xStr, yStr] = chartPoints.points[idx].split(',');
                const x = parseFloat(xStr);
                const y = parseFloat(yStr);
                const isTarget = item.trafficLevel === 100;
                
                return (
                  <g key={idx}>
                    <circle 
                      cx={x}
                      cy={y}
                      r={isTarget ? 6.5 : 4.5}
                      fill={isTarget ? '#10b981' : '#fff'}
                      stroke={isTarget ? '#047857' : '#10b981'}
                      strokeWidth={isTarget ? 3 : 2}
                      className="transition-all duration-300"
                    />
                    <text 
                      x={x}
                      y={y - 10}
                      fontSize="9"
                      fontWeight="bold"
                      fontFamily="monospace"
                      textAnchor="middle"
                      fill="#334155"
                    >
                      R$ {item.earnings}
                    </text>
                    <text 
                      x={x}
                      y={chartPoints.height - 2}
                      fontSize="8.5"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                      textAnchor="middle"
                      fill="#64748b"
                    >
                      {item.trafficLevel}% ({item.visitors >= 1000000 ? `${(item.visitors / 1000000).toFixed(1)}M` : `${Math.round(item.visitors / 1000)}k`})
                    </text>
                  </g>
                );
              })}

              {/* Gradients */}
              <defs>
                <linearGradient id="gradient-earnings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* SEO Explanatory Content Section (E-E-A-T) */}
      <div className="lg:col-span-12 mt-6 bg-slate-50 border border-slate-200/60 p-6 md:p-8 rounded-2xl flex flex-col gap-6 font-sans text-slate-700 leading-relaxed">
        <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3">
          <BookOpen className="w-5.5 h-5.5 text-blue-600" />
          <h2 className="text-lg md:text-xl font-extrabold text-slate-900 m-0">Guia Geral: Como Funciona a Monetização com Google AdSense em 2026?</h2>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-bold text-slate-800 mb-2.5 uppercase tracking-wide">1. O que é o Google AdSense?</h3>
            <p className="text-xs text-slate-600 mb-3">
              O **Google AdSense** é a maior e mais consolidada rede de publicidade de display do mundo. Ele funciona conectando donos de sites (publishers/editores) a anunciantes que gerenciam campanhas de publicidade pelo Google Ads. 
            </p>
            <p className="text-xs text-slate-600">
              Ao instalar o script do AdSense em seu site, o Google realiza leilões automáticos e em tempo real (Real-Time Bidding) para exibir anúncios contextuais de alta relevância para os seus leitores.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800 mb-2.5 uppercase tracking-wide">2. Como Funciona a Remuneração?</h3>
            <p className="text-xs text-slate-600 mb-3">
              A remuneração do AdSense é feita sob a divisão de receita de **68%** para o editor do site e **32%** para o Google. As duas principais formas de contabilizar os ganhos são:
            </p>
            <ul className="list-disc pl-4 text-xs text-slate-600 flex flex-col gap-1.5">
              <li><strong>CPC (Custo Por Clique):</strong> Você ganha um valor fixo cada vez que um visitante clica ativamente em um banner.</li>
              <li><strong>CPM (Custo Por Mil Visualizações):</strong> Você ganha uma taxa baseada no número de impressões que os anúncios acumulam (mesmo sem cliques). O AdSense 2026 foca bastante em impressões qualificadas.</li>
            </ul>
          </div>
        </section>

        <hr className="border-slate-200" />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              Métricas Cruciais
            </h3>
            <div className="text-xs text-slate-600 flex flex-col gap-2">
              <p><strong>RPM de Páginas:</strong> Representa quanto seu site fatura a cada 1.000 visualizações. Calculado por: `(Ganhos / Pageviews) * 1000`. É a métrica mais estável para planejamento de tráfego.</p>
              <p><strong>CTR (Click-Through Rate):</strong> Proporção de impressões de anúncios que viram cliques. Uma média saudável varia entre 1.5% e 3.0%.</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              Regras e Políticas
            </h3>
            <div className="text-xs text-slate-600 flex flex-col gap-2">
              <p><strong>Cliques Inválidos:</strong> Nunca clique em seus próprios anúncios e evite incentivar cliques artificiais. O Google monitora o IP dos dispositivos e bane contas sumariamente.</p>
              <p><strong>Conteúdo Original:</strong> Sites com conteúdo duplicado, plágio, downloads piratas ou nichos adultos/violentos têm a monetização rejeitada.</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5 flex-wrap">
              <Coins className="w-4 h-4 text-blue-600" />
              Dicas para Lucrar Mais
            </h3>
            <div className="text-xs text-slate-600 flex flex-col gap-2">
              <p><strong>SEO de Cauda Longa:</strong> Escreva artigos focados em palavras-chave específicas e com alta intenção de compra. Nichos de finanças e tecnologia atraem anunciantes com orçamentos massivos.</p>
              <p><strong>Páginas por Sessão:</strong> Crie links internos inteligentes em seu blog para que o usuário navegue por múltiplos artigos, multiplicando as visualizações de banners de forma orgânica.</p>
            </div>
          </div>
        </section>

        <div className="bg-blue-50 border border-blue-200/50 rounded-xl p-4 flex gap-3 text-xs text-blue-800">
          <Info className="w-5 h-5 shrink-0 text-blue-600 mt-0.5" />
          <div>
            <strong className="block mb-1 font-bold">Nota de Transparência Matemática:</strong>
            Os valores simulados por esta ferramenta são projeções teóricas baseadas nas médias históricas de RPM do Google AdSense para 2026. Os lucros reais dependem da concorrência dos leilões em tempo real, sazonalidade de mercado (como Black Friday e Natal), velocidade de carregamento da página e nível de engajamento do tráfego.
          </div>
        </div>
      </div>
    </div>
  );
};
