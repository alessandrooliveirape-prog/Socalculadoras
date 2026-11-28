import React, { useMemo } from 'react';
import { useLocation } from 'wouter';
import { ExternalLink, ShoppingBag, Sparkles, Tag, Megaphone } from 'lucide-react';
import {
  getRotatedRecommendation,
  trackAffiliateClick
} from '../config/monetizationCatalog';
import { CALCULATORS_CATALOG } from '../data/calculatorsCatalog';
import { CATEGORY_SLUG_MAP } from '../utils/seoContentGenerator';

interface AffiliateRecommendationCardProps {
  category?: string;
  variant?: 'horizontal' | 'sidebar' | 'compact';
  placement?: string;
  className?: string;
}

export const AffiliateRecommendationCard: React.FC<AffiliateRecommendationCardProps> = ({
  category: propCategory,
  variant = 'horizontal',
  placement = 'contextual',
  className = ''
}) => {
  const [location, setLocation] = useLocation();

  const resolvedCategory = useMemo(() => {
    if (propCategory) return propCategory;

    const cleanPath = location.replace(/^\/+|\/+$/g, '');
    if (!cleanPath) return 'financas';

    const matchedCalc = CALCULATORS_CATALOG.find((c) => c.id === cleanPath);
    if (matchedCalc) return matchedCalc.category;

    const matchedCategoryKey = Object.keys(CATEGORY_SLUG_MAP).find(
      (key) => CATEGORY_SLUG_MAP[key] === cleanPath
    );
    if (matchedCategoryKey) return matchedCategoryKey;

    return 'financas';
  }, [propCategory, location]);

  const {
    category: normalizedCategory,
    product,
    amazonUrl,
    shopeeUrl,
    mercadoLivreUrl,
    serviceOffer
  } = useMemo(() => getRotatedRecommendation(resolvedCategory), [resolvedCategory]);

  if (variant === 'sidebar') {
    return (
      <aside
        aria-label="Recomendação contextual de produto"
        data-testid="affiliate-recommendation-sidebar"
        className={`w-full bg-gradient-to-b from-amber-50/60 via-white to-slate-50 border border-amber-200/80 rounded-2xl p-4 shadow-xs font-sans flex flex-col gap-3 ${className}`}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
            <Tag className="w-3 h-3 text-amber-700" aria-hidden="true" />
            <span>Sugestão Útil</span>
          </span>
          {product.badge && (
            <span className="text-[9.5px] font-mono font-bold text-amber-800 truncate">
              {product.badge}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-xs font-bold text-slate-900 leading-snug font-display">
            {product.title}
          </h3>
          <p className="text-[11px] text-slate-600 leading-relaxed mt-1.5">
            {product.benefit}
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-1">
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            onClick={() =>
              trackAffiliateClick({
                network: 'amazon',
                category: normalizedCategory,
                productId: product.id,
                placement
              })
            }
            className="w-full inline-flex items-center justify-between gap-2 px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-[11px] rounded-xl transition-colors shadow-2xs"
          >
            <span>Ver na Amazon</span>
            <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
          </a>

          <a
            href={shopeeUrl}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            onClick={() =>
              trackAffiliateClick({
                network: 'shopee',
                category: normalizedCategory,
                productId: product.id,
                placement
              })
            }
            className="w-full inline-flex items-center justify-between gap-2 px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-[11px] rounded-xl transition-colors shadow-2xs"
          >
            <span>Ofertas na Shopee</span>
            <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
          </a>

          {mercadoLivreUrl && (
            <a
              href={mercadoLivreUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              onClick={() =>
                trackAffiliateClick({
                  network: 'mercadolivre',
                  category: normalizedCategory,
                  productId: product.id,
                  placement
                })
              }
              className="w-full inline-flex items-center justify-between gap-2 px-3 py-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-[11px] rounded-xl transition-colors shadow-2xs"
            >
              <span>Buscar no Mercado Livre</span>
              <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="border-t border-slate-200/80 pt-2.5 flex flex-col gap-1.5">
          <p className="text-[9.5px] text-slate-500 leading-snug">
            Links de afiliado (Amazon, Shopee e Mercado Livre). Sem custo extra para você.
          </p>
          <a
            href="/anunciantes"
            onClick={(e) => {
              e.preventDefault();
              trackAffiliateClick({
                network: 'sponsor',
                category: normalizedCategory,
                productId: 'midia-kit-sidebar',
                placement
              });
              setLocation('/anunciantes');
            }}
            className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-700 hover:underline"
          >
            <Megaphone className="w-3 h-3" aria-hidden="true" />
            <span>Espaço disponível para parceiros →</span>
          </a>
        </div>
      </aside>
    );
  }

  if (variant === 'compact') {
    return (
      <div
        data-testid="affiliate-recommendation-compact"
        className={`bg-white border border-slate-200 hover:border-amber-300 rounded-2xl p-5 shadow-xs transition-all flex flex-col justify-between gap-4 font-sans ${className}`}
      >
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200/80">
              <Sparkles className="w-3 h-3 text-amber-600" aria-hidden="true" />
              <span>{product.badge || 'Recomendação Útil'}</span>
            </span>
          </div>
          <h3 className="text-sm font-bold text-slate-900 font-display leading-snug">
            {product.title}
          </h3>
          <p className="text-[11.5px] text-slate-600 leading-relaxed mt-1.5 line-clamp-3">
            {product.benefit}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-1.5">
            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              onClick={() =>
                trackAffiliateClick({
                  network: 'amazon',
                  category: normalizedCategory,
                  productId: product.id,
                  placement
                })
              }
              className="flex-1 min-w-[92px] inline-flex items-center justify-center gap-1 px-2.5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-[11px] rounded-xl transition-colors"
            >
              <span>Amazon</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <a
              href={shopeeUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              onClick={() =>
                trackAffiliateClick({
                  network: 'shopee',
                  category: normalizedCategory,
                  productId: product.id,
                  placement
                })
              }
              className="flex-1 min-w-[92px] inline-flex items-center justify-center gap-1 px-2.5 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-[11px] rounded-xl transition-colors"
            >
              <span>Shopee</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            {mercadoLivreUrl && (
              <a
                href={mercadoLivreUrl}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                onClick={() =>
                  trackAffiliateClick({
                    network: 'mercadolivre',
                    category: normalizedCategory,
                    productId: product.id,
                    placement
                  })
                }
                className="flex-1 min-w-[110px] inline-flex items-center justify-center gap-1 px-2.5 py-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-[11px] rounded-xl transition-colors"
              >
                <span>Mercado Livre</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            )}
          </div>
          <p className="text-[9.5px] text-slate-500 leading-tight">
            Links patrocinados de afiliados (Amazon, Shopee e Mercado Livre).
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30 border border-amber-200/80 rounded-2xl p-5 sm:p-6 shadow-xs hover:border-amber-300/90 transition-all duration-300 font-sans ${className}`}
      data-testid="affiliate-recommendation-card"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100/90 text-amber-900 border border-amber-200/80">
          <ShoppingBag className="w-3.5 h-3.5 text-amber-700" aria-hidden="true" />
          <span>Recomendação Prática para Esta Área</span>
        </div>

        {product.badge && (
          <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-50 border border-amber-200/70 px-2.5 py-0.5 rounded-md inline-flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-600" aria-hidden="true" />
            <span>{product.badge}</span>
          </span>
        )}
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display tracking-tight leading-snug">
            {product.title}
          </h3>
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mt-1">
            {product.benefit}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto shrink-0">
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            onClick={() =>
              trackAffiliateClick({
                network: 'amazon',
                category: normalizedCategory,
                productId: product.id,
                placement
              })
            }
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs transition-all whitespace-nowrap"
            title={`Ver ofertas de ${product.title} na Amazon`}
          >
            <span>Amazon</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          <a
            href={shopeeUrl}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            onClick={() =>
              trackAffiliateClick({
                network: 'shopee',
                category: normalizedCategory,
                productId: product.id,
                placement
              })
            }
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-orange-600 hover:bg-orange-700 active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs transition-all whitespace-nowrap"
            title={`Ver ofertas relacionadas na Shopee`}
          >
            <span>Shopee</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          {mercadoLivreUrl && (
            <a
              href={mercadoLivreUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              onClick={() =>
                trackAffiliateClick({
                  network: 'mercadolivre',
                  category: normalizedCategory,
                  productId: product.id,
                  placement
                })
              }
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-slate-900 font-bold text-xs rounded-xl shadow-xs transition-all whitespace-nowrap"
              title={`Buscar ofertas relacionadas no Mercado Livre`}
            >
              <span>Mercado Livre</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <div className="border-t border-amber-200/60 pt-3 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10.5px] text-slate-500">
        <p className="leading-snug font-normal m-0">
          Como participantes dos programas de afiliados da Amazon, Shopee e Mercado Livre, podemos ser remunerados por compras qualificadas — sem custo adicional para você.
        </p>
        <a
          href={serviceOffer.href}
          onClick={(e) => {
            e.preventDefault();
            trackAffiliateClick({
              network: 'sponsor',
              category: normalizedCategory,
              productId: 'midia-kit-card',
              placement
            });
            setLocation(serviceOffer.href);
          }}
          className="font-semibold text-blue-700 hover:underline inline-flex items-center gap-1 shrink-0"
        >
          <Megaphone className="w-3 h-3" aria-hidden="true" />
          <span>{serviceOffer.ctaLabel} →</span>
        </a>
      </div>
    </div>
  );
};
