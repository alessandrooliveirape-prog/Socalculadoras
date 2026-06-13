import React, { useEffect } from 'react';
import { Award, BarChart3, Coins, Eye, MousePointerClick, TrendingUp } from 'lucide-react';
import { CalculatorCategory } from '../types';

interface AdSenseBannerProps {
  category: CalculatorCategory;
  layout?: 'horizontal' | 'vertical' | 'square';
  onAdClicked?: () => void;
  refreshTrigger?: number;
  adSlot?: string; // Optional Google AdSense Slot ID
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  category,
  layout = 'horizontal',
  onAdClicked,
  refreshTrigger = 0,
  adSlot
}) => {

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      // Ignore adsbygoogle push errors (common with ad blockers)
      console.warn('AdSense load blocked or failed:', e);
    }
  }, [category, refreshTrigger, adSlot]);

  // Styling rules for containers
  const containerStyle = layout === 'horizontal'
    ? 'w-full min-h-[90px] md:min-h-[100px] flex flex-col justify-center items-center border border-dashed border-slate-200 rounded-xl bg-slate-50/40 p-2 relative overflow-hidden select-none'
    : layout === 'vertical'
    ? 'w-full md:w-[240px] lg:w-[280px] h-[600px] flex flex-col justify-center items-center border border-dashed border-slate-200 rounded-xl bg-slate-50/40 p-4 sticky top-6 overflow-hidden select-none'
    : 'w-full aspect-square flex flex-col justify-center items-center border border-dashed border-slate-200 rounded-xl bg-slate-50/40 p-4 relative overflow-hidden select-none';

  return (
    <div 
      className={containerStyle}
      onClick={() => {
        if (onAdClicked) onAdClicked();
      }}
    >
      {/* Small Ad Badge Indicator */}
      <div className="absolute top-1.5 left-2 flex items-center gap-1 z-10">
        <span className="bg-slate-200 text-slate-500 text-[8px] font-bold px-1 py-0.5 rounded-xs tracking-wider uppercase">Publicidade</span>
      </div>

      {/* Google AdSense ins tag */}
      <div className="w-full h-full flex items-center justify-center min-h-[50px]">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '100%' }}
          data-ad-client="ca-pub-8160658026927094"
          data-ad-slot={adSlot || "default-slot"}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>

      {/* Fallback label if Google AdSense is not loaded / blocked */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 bg-slate-50/10">
        <span className="text-[10px] font-medium text-slate-400 font-sans tracking-wide">
          {layout === 'horizontal' ? 'Espaço de Publicidade' : 'Espaço Publicitário'}
        </span>
      </div>
    </div>
  );
};

// AdSense Simulation Summary Dashboard Widget for Publishers
interface AdSensePublisherDashboardProps {
  stats: {
    impressions: number;
    clicks: number;
    ctr: number;
    rpm: number;
    earnings: number;
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
