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
          {...(adSlot ? { 'data-ad-slot': adSlot } : {})}
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

