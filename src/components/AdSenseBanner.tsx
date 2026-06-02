import React, { useState, useEffect } from 'react';
import { ExternalLink, Info, Award, BarChart3, Coins, Eye, MousePointerClick, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CalculatorCategory, AdCampaign } from '../types';

// Let's define some highly realistic, high-value contextual mock ads
const AD_CAMPAIGNS: AdCampaign[] = [
  // Finanças
  {
    id: 'ad-finance-1',
    title: 'XP Prime: Invista com Assessoria Premium',
    description: 'Transforme o resultado do seu patrimônio com assessores dedicados. Abra sua conta grátis.',
    cta: 'Começar Agora',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'financas',
    sponsor: 'XP Investimentos'
  },
  {
    id: 'ad-finance-2',
    title: 'Contabilidade Simplificada para PJ',
    description: 'Abra sua empresa com mensalidades de R$ 89/mês. Tudo integrado e sem burocracia.',
    cta: 'Falar com Consultor',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'financas',
    sponsor: 'Contabilizei'
  },
  // Saúde
  {
    id: 'ad-health-1',
    title: 'Whey Protein Isolado 100% Puro',
    description: 'Máxima absorção para ganho de massa muscular magra. Frete grátis para todo o Brasil neste mês.',
    cta: 'Garantir Desconto',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'saude',
    sponsor: 'Growth Supplements'
  },
  {
    id: 'ad-health-2',
    title: 'Plano de Saúde Empresarial a partir de R$ 79',
    description: 'Coparticipação inteligente e cobertura nacional integral. Cote agora para seus funcionários.',
    cta: 'Fazer Cotação',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'saude',
    sponsor: 'Amil Saúde'
  },
  // Produtividade
  {
    id: 'ad-prod-1',
    title: 'Monday.com: Organize seus Projetos Rápidos',
    description: 'Economize tempo gerenciando tarefas da equipe em um dashboard visual incrível.',
    cta: 'Teste Grátis',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'produtividade',
    sponsor: 'Monday PM'
  },
  {
    id: 'ad-prod-2',
    title: 'Curso de Excel Avançado & Power BI',
    description: 'Seja o profissional mais requisitado do time com análises visuais e relatórios dinâmicos.',
    cta: 'Ver Cronograma',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    category: 'produtividade',
    sponsor: 'Vasco Cursos'
  }
];

interface AdSenseBannerProps {
  category: CalculatorCategory;
  layout?: 'horizontal' | 'vertical' | 'square';
  onAdClicked?: () => void;
  refreshTrigger?: number; // Whenever this increments, trigger refresh simulation
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  category,
  layout = 'horizontal',
  onAdClicked,
  refreshTrigger = 0
}) => {
  const [currentAd, setCurrentAd] = useState<AdCampaign>(AD_CAMPAIGNS[0]);
  const [loading, setLoading] = useState(false);

  // Filter ads for the current active category (or fall back to random if 'todos')
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const activeCategory = category === 'todos' ? 'financas' : category;
      const filtered = AD_CAMPAIGNS.filter(ad => ad.category === activeCategory);
      const randomIndex = Math.floor(Math.random() * filtered.length);
      setCurrentAd(filtered[randomIndex] || AD_CAMPAIGNS[0]);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [category, refreshTrigger]);

  const handleAdClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onAdClicked) {
      onAdClicked();
    }
    // Simulate opening sponsor URL in safe way
    window.open('https://google.com/adsense', '_blank', 'noopener,noreferrer');
  };

  const bannerStyle = layout === 'horizontal' 
    ? 'w-full min-h-[90px] md:min-h-[100px] flex flex-col md:flex-row items-center border border-dashed border-gray-200 rounded-xl bg-gray-50/50 p-3 md:p-4 overflow-hidden relative'
    : layout === 'vertical'
    ? 'w-full md:w-[280px] h-auto flex flex-col border border-dashed border-gray-200 rounded-xl bg-gray-50/50 p-4 sticky top-6 overflow-hidden relative'
    : 'w-full aspect-square flex flex-col border border-dashed border-gray-200 rounded-xl bg-gray-50/50 p-4 overflow-hidden relative';

  if (loading) {
    return (
      <div className={`${bannerStyle} justify-center items-center h-24 bg-gray-50/80 transition-colors duration-200`}>
        <div className="absolute top-1.5 left-2 flex items-center gap-1.5">
          <span className="text-[9px] font-semibold text-gray-400 tracking-wider font-sans">ADS BY GOOGLE</span>
          <Info className="w-2.5 h-2.5 text-gray-300" />
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-5 h-5 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin"></div>
          <span className="text-xs font-mono text-gray-400">Carregando anúncio otimizado...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={bannerStyle}>
      {/* Brand Header */}
      <div className="absolute top-1.5 left-2 flex items-center gap-1.5 z-10">
        <span className="bg-yellow-100 text-yellow-800 text-[8px] font-bold px-1.5 py-0.5 rounded-sm select-none">Ad</span>
        <span className="text-[9px] font-medium text-gray-400 tracking-wide font-sans uppercase">Google AdSense</span>
        <span className="text-[9px] font-mono text-gray-300 h-2 w-2 rounded-full bg-green-400 block animate-pulse"></span>
      </div>

      {layout === 'horizontal' ? (
        <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full h-full pt-4 md:pt-0">
          {/* Ad Image */}
          <div className="hidden sm:block w-24 md:w-28 shrink-0 relative overflow-hidden rounded-md border border-gray-200/60 bg-gray-100">
            <img 
              src={currentAd.imageUrl} 
              alt={currentAd.sponsor}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Ad Text */}
          <div className="flex-1 flex flex-col justify-center min-w-0 pr-2">
            <div className="flex items-center gap-2 mb-0.5">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider truncate">
                {currentAd.sponsor}
              </h4>
            </div>
            <p className="text-sm font-semibold text-slate-800 leading-snug truncate sm:whitespace-normal sm:line-clamp-1">
              {currentAd.title}
            </p>
            <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
              {currentAd.description}
            </p>
          </div>

          {/* Ad Action CTA */}
          <div className="shrink-0 flex items-center justify-end sm:justify-center">
            <button
              onClick={handleAdClick}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-95 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer shadow-sm shadow-slate-100"
            >
              <span>{currentAd.cta}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        // Vertical or Square Layout
        <div className="flex flex-col h-full pt-4 justify-between">
          <div className="flex-1 flex flex-col gap-3">
            {/* Ad Image */}
            <div className="relative overflow-hidden rounded-lg border border-gray-200/60 bg-gray-100 w-full aspect-[16/9]">
              <img 
                src={currentAd.imageUrl} 
                alt={currentAd.sponsor}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Ad Text */}
            <div className="flex flex-col gap-1 pr-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{currentAd.sponsor}</span>
              <p className="text-sm font-bold text-slate-800 leading-snug">{currentAd.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{currentAd.description}</p>
            </div>
          </div>

          {/* Ad Action CTA */}
          <div className="mt-4">
            <button
              onClick={handleAdClick}
              className="w-full py-2.5 px-4 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 active:scale-95 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm shadow-slate-100"
            >
              <span>{currentAd.cta}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// AdSense Simulation Summary Dashboard Widget for Publishers
// This gives highly valuable, engaging interactive data explaining the AdSense model
interface AdSensePublisherDashboardProps {
  stats: {
    impressions: number;
    clicks: number;
    ctr: number; // in percent
    rpm: number; // in BRL
    earnings: number; // in BRL
  };
  onOptimize: () => void;
}

export const AdSensePublisherDashboard: React.FC<AdSensePublisherDashboardProps> = ({ stats, onOptimize }) => {
  return (
    <div className="bg-slate-950 text-white rounded-2xl p-5 border border-slate-800/80 shadow-xl overflow-hidden relative">
      {/* Absolute Glow Background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-800/80 pb-4 mb-4">
        <div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4.5 h-4.5 text-yellow-500 animate-pulse" />
            <h3 className="text-sm font-display font-semibold tracking-wide text-slate-100 uppercase">
              Painel de Monetização AdSense (Simulador)
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Estatísticas de anúncios geradas com base no seu tráfego de uso real nesta sessão.
          </p>
        </div>
        <div>
          <span className="bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-bold px-2 py-1 rounded border border-emerald-500/20 uppercase tracking-widest">
            Conta Ativa
          </span>
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {/* Earnings */}
        <div className="col-span-2 md:col-span-1 border border-slate-800 bg-slate-900/60 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold">Ganhos Estimados</span>
            <Coins className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2">
            <span className="text-xl md:text-2xl font-bold font-mono text-emerald-400">
              R$ {stats.earnings.toFixed(2)}
            </span>
            <p className="text-[10px] text-slate-500 font-mono mt-0.5">+R$ {(stats.clicks * 0.45).toFixed(2)} p/ cliques</p>
          </div>
        </div>

        {/* Impressions */}
        <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold">Visualizações Ad</span>
            <Eye className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="mt-2">
            <span className="text-lg font-bold font-mono text-slate-200">
              {stats.impressions}
            </span>
            <p className="text-[10px] text-slate-500 font-mono mt-0.5">Impressões</p>
          </div>
        </div>

        {/* Clicks */}
        <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold">Cliques</span>
            <MousePointerClick className="w-4 h-4 text-amber-500" />
          </div>
          <div className="mt-2">
            <span className="text-lg font-bold font-mono text-slate-200">
              {stats.clicks}
            </span>
            <p className="text-[10px] text-slate-500 font-mono mt-0.5">Taxa CPC R$ 0,45</p>
          </div>
        </div>

        {/* CTR */}
        <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold">CTR</span>
            <TrendingUp className="w-4 h-4 text-orange-400" />
          </div>
          <div className="mt-2">
            <span className="text-lg font-bold font-mono text-slate-200">
              {stats.ctr.toFixed(2)}%
            </span>
            <p className="text-[10px] text-slate-500 font-mono mt-0.5">Média Mercado: 1.5%</p>
          </div>
        </div>

        {/* RPM */}
        <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-semibold">RPM da Página</span>
            <BarChart3 className="w-4 h-4 text-purple-400" />
          </div>
          <div className="mt-2">
            <span className="text-lg font-bold font-mono text-slate-200">
              R$ {stats.rpm.toFixed(2)}
            </span>
            <p className="text-[10px] text-slate-500 font-mono mt-0.5">Receita p/ mil exibições</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-center sm:justify-between gap-3 bg-slate-900/50 rounded-xl p-3 border border-slate-800/60">
        <div className="text-xs text-slate-400">
          💡 <span className="font-semibold text-slate-200">Estratégia AdSense:</span> Calculadoras de alta recorrência atraem usuários múltiplos vezes ao dia, gerando elevado RPM e cliques consistentes.
        </div>
        <button
          onClick={onOptimize}
          className="shrink-0 w-full sm:w-auto px-4 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md shadow-amber-400/10"
        >
          <span>Otimizar Layout AdSense</span>
        </button>
      </div>
    </div>
  );
};
