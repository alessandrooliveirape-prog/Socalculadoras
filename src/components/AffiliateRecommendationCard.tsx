import React, { useMemo } from 'react';
import { useLocation } from 'wouter';
import { ExternalLink, ShoppingBag, Sparkles } from 'lucide-react';
import { getRotatedProduct } from '../config/affiliateProducts';
import { CALCULATORS_CATALOG } from '../data/calculatorsCatalog';
import { CATEGORY_SLUG_MAP } from '../utils/seoContentGenerator';

interface AffiliateRecommendationCardProps {
  category?: string;
  className?: string;
}

export const AffiliateRecommendationCard: React.FC<AffiliateRecommendationCardProps> = ({ 
  category: propCategory,
  className = ''
}) => {
  const [location] = useLocation();

  // Inferência automática da categoria caso não seja passada diretamente como prop
  const resolvedCategory = useMemo(() => {
    if (propCategory) return propCategory;

    // Normaliza rota atual removendo barras
    const cleanPath = location.replace(/^\/+|\/+$/g, '');
    if (!cleanPath) return 'financas';

    // 1. Tenta encontrar por ID de calculadora
    const matchedCalc = CALCULATORS_CATALOG.find(c => c.id === cleanPath);
    if (matchedCalc) return matchedCalc.category;

    // 2. Tenta encontrar por slug de categoria do hub
    const matchedCategoryKey = Object.keys(CATEGORY_SLUG_MAP).find(
      key => CATEGORY_SLUG_MAP[key] === cleanPath
    );
    if (matchedCategoryKey) return matchedCategoryKey;

    return 'financas';
  }, [propCategory, location]);

  // Obter produto da rotação determinística de 3 dias
  const { product, affiliateUrl } = useMemo(() => {
    return getRotatedProduct(resolvedCategory);
  }, [resolvedCategory]);

  return (
    <div 
      className={`bg-gradient-to-br from-amber-50/40 via-white to-amber-50/20 border border-amber-200/80 rounded-2xl p-5 sm:p-6 shadow-xs hover:border-amber-300/90 transition-all duration-300 font-sans ${className}`}
      data-testid="affiliate-recommendation-card"
    >
      {/* Top Header com Badge e Categoria */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100/80 text-amber-900 border border-amber-200/80 shadow-2xs">
          <span>💡</span>
          <span>Recomendação Útil</span>
        </div>

        {product.badge && (
          <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-md flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>{product.badge}</span>
          </span>
        )}
      </div>

      {/* Título do Produto & Benefício Prático */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <ShoppingBag className="w-4 h-4 text-amber-600 shrink-0" />
            <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display tracking-tight leading-snug">
              {product.title}
            </h4>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mt-1">
            {product.benefit}
          </p>
        </div>

        {/* Botão de Ação Destacado (CTA) */}
        <div className="w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 active:scale-95 text-white font-bold text-xs sm:text-[13px] rounded-xl shadow-xs hover:shadow-md transition-all text-center group cursor-pointer select-none"
            title={`Ver ofertas de ${product.title} na Amazon`}
          >
            <span>Ver Ofertas na Amazon</span>
            <span className="transition-transform group-hover:translate-x-1 font-bold">➔</span>
          </a>
        </div>
      </div>

      {/* Nota de Transparência no Rodapé em Conformidade Mandatória com as Diretrizes da Amazon */}
      <div className="border-t border-amber-100/70 pt-2.5 mt-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10.5px] text-slate-400">
        <p className="leading-tight font-normal">
          Como participante do Programa de Associados da Amazon, somos remunerados por compras qualificadas.
        </p>
        <span className="font-mono text-[9.5px] text-slate-400 self-end sm:self-auto flex items-center gap-1">
          <span>Amazon Associados</span>
          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
        </span>
      </div>
    </div>
  );
};
