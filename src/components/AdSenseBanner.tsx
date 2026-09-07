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
    ? 'w-full flex justify-center items-center overflow-hidden my-2'
    : layout === 'vertical'
    ? 'w-full md:w-[240px] lg:w-[280px] flex justify-center items-center sticky top-6 overflow-hidden my-2'
    : 'w-full aspect-square flex justify-center items-center overflow-hidden my-2';

  return (
    <div 
      className={containerStyle}
      onClick={() => {
        if (onAdClicked) onAdClicked();
      }}
    >
      {/* Google AdSense ins tag */}
      <div className="w-full h-full flex items-center justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client="ca-pub-8160658026927094"
          {...(adSlot ? { 'data-ad-slot': adSlot } : {})}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
};

