import React from 'react';
import { CalculatorCategory } from '../types';
import { AffiliateRecommendationCard } from './AffiliateRecommendationCard';

interface AdSenseBannerProps {
  category: CalculatorCategory;
  layout?: 'horizontal' | 'vertical' | 'square';
  onAdClicked?: () => void;
  refreshTrigger?: number;
  adSlot?: string;
}

/**
 * Wrapper retrocompatível que substitui os antigos blocos vazios do AdSense
 * por recomendações contextuais multi-rede (Amazon, Shopee, Mercado Livre e Patrocínio).
 */
export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  category,
  layout = 'horizontal'
}) => {
  const variant = layout === 'vertical' ? 'sidebar' : layout === 'square' ? 'compact' : 'horizontal';
  const placement = layout === 'vertical' ? 'sidebar_slot' : 'bottom_slot';

  return (
    <div className="w-full my-2">
      <AffiliateRecommendationCard
        category={category}
        variant={variant}
        placement={placement}
      />
    </div>
  );
};
