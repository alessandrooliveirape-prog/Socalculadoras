import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  UserCheck,
  ArrowRight,
  Calculator,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  ArrowLeft,
  ShieldCheck
} from 'lucide-react';
import { GUIDES_ARTICLES, GuideArticle } from '../data/guidesArticles';

interface GuidesViewProps {
  activeSlug?: string | null;
  onNavigate: (path: string) => void;
  onSelectCalculator: (id: string) => void;
}

const formatBrazilianDate = (isoDate: string): string => {
  const parts = isoDate.split('-');
  if (parts.length !== 3) return isoDate;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

export const GuidesView: React.FC<GuidesViewProps> = ({
  activeSlug,
  onNavigate,
  onSelectCalculator
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const activeArticle: GuideArticle | undefined = useMemo(() => {
    if (!activeSlug) return undefined;
    return GUIDES_ARTICLES.find((a) => a.slug === activeSlug);
  }, [activeSlug]);

  const categories = useMemo(() => {
    const map = new Map<string, string>();
    for (const article of GUIDES_ARTICLES) {
      if (!map.has(article.categoryKey)) {
        map.set(article.categoryKey, article.categoryLabel);
      }
    }
    return Array.from(map.entries()).map(([key, label]) => ({ key, label }));
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'ALL') return GUIDES_ARTICLES;
    return GUIDES_ARTICLES.filter((a) => a.categoryKey === selectedCategory);
  }, [selectedCategory]);

  if (activeArticle) {
    const otherArticles = GUIDES_ARTICLES.filter((a) => a.slug !== activeArticle.slug).slice(0, 3);

    return (
      <div className="max-w-4xl mx-auto pb-14">
        <nav
          aria-label="Navegação estrutural"
          className="flex flex-wrap items-center gap-1.5 text-[11px] font-sans text-slate-500 font-semibold mb-5 bg-white/80 border border-slate-200/70 p-2.5 px-4 rounded-xl shadow-xs w-fit"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="hover:text-blue-600 transition-colors"
          >
            Início
          </a>
          <span className="text-slate-300">/</span>
          <a
            href="/guias"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/guias');
            }}
            className="hover:text-blue-600 transition-colors"
          >
            Guias &amp; Artigos
          </a>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800 truncate max-w-[240px] sm:max-w-md">{activeArticle.title}</span>
        </nav>

        <article className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden">
          <header className="p-6 sm:p-10 bg-linear-to-br from-slate-50 via-white to-blue-50/40 border-b border-slate-200/80">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <a
                href={`/${activeArticle.categorySlug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/' + activeArticle.categorySlug);
                }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-[11px] font-bold uppercase tracking-wider hover:bg-blue-200/70 transition-colors"
              >
                {activeArticle.categoryLabel}
              </a>
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                {activeArticle.readingTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {activeArticle.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              {activeArticle.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-slate-200/80 text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <UserCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{activeArticle.author}</p>
                  <p className="text-[11px] text-slate-500">{activeArticle.authorRole}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Publicado em {formatBrazilianDate(activeArticle.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/70">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Atualizado em {formatBrazilianDate(activeArticle.updatedAt)}
                </span>
              </div>
            </div>
          </header>

          <div className="p-6 sm:p-10 space-y-8">
            <section className="p-5 sm:p-6 rounded-2xl bg-blue-50/60 border border-blue-200/70">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-blue-600" />
                Calculadoras Conectadas a Este Guia
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeArticle.relatedCalculators.map((rc) => (
                  <a
                    key={rc.id}
                    href={`/${rc.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectCalculator(rc.id);
                    }}
                    className="group p-3.5 rounded-xl bg-white border border-blue-100 hover:border-blue-400 hover:shadow-xs transition-all flex items-start justify-between gap-2"
                  >
                    <div>
                      <p className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {rc.name}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                        {rc.description}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 mt-0.5" />
                  </a>
                ))}
              </div>
            </section>

            {activeArticle.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-[15px] text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-2.5 pl-1 pt-1">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-[15px] text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.highlightBox && (
                  <div className="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800">
                    <h3 className="text-sm font-bold text-blue-300 mb-1.5">
                      {section.highlightBox.title}
                    </h3>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {section.highlightBox.text}
                    </p>
                  </div>
                )}
              </section>
            ))}

            <section className="pt-6 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                Perguntas Frequentes Sobre Este Tema
              </h2>
              <div className="space-y-3">
                {activeArticle.faq.map((item, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                      {item.q}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>

        <section className="mt-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Continue Aprendendo</h2>
              <p className="text-xs text-slate-500">Outros guias completos curados pela nossa equipe editorial</p>
            </div>
            <a
              href="/guias"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/guias');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Ver Todos os Guias
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherArticles.map((other) => (
              <a
                key={other.slug}
                href={`/guias/${other.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/guias/${other.slug}`);
                }}
                className="group p-4 rounded-2xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md mb-2">
                    {other.categoryLabel}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 leading-snug mb-2">
                    {other.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 mt-2">
                  Ler guia completo
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pb-14 space-y-8">
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-[11px] font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Curadoria Editorial Contínua
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-[11px] font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Revisão Metodológica 2026
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Guias Práticos, Metodologia &amp; Artigos Educativos
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mb-6">
          Os guias aprofundados do <strong>Brasil Calculadoras</strong> explicam em linguagem acessível as leis vigentes,
          fórmulas financeiras, equações biométricas e fundamentos matemáticos por trás das nossas 175 calculadoras. Cada
          artigo é elaborado e revisado continuamente com exemplos numéricos reais para apoiar decisões conscientes em
          finanças pessoais, carreira, saúde e estudos.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('ALL')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === 'ALL'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Todos os Guias ({GUIDES_ARTICLES.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map((article) => (
          <article
            key={article.slug}
            className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <a
                  href={`/${article.categorySlug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/' + article.categorySlug);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider hover:bg-blue-100 transition-colors"
                >
                  {article.categoryLabel}
                </a>
                <span className="text-[11px] text-slate-500 font-medium inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {article.readingTime}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug mb-3">
                <a
                  href={`/guias/${article.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/guias/${article.slug}`);
                  }}
                  className="hover:text-blue-700 transition-colors"
                >
                  {article.title}
                </a>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {article.excerpt}
              </p>

              <div className="mb-5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Ferramentas vinculadas
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {article.relatedCalculators.slice(0, 3).map((rc) => (
                    <a
                      key={rc.id}
                      href={`/${rc.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectCalculator(rc.id);
                      }}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      {rc.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] text-slate-500">
                <p className="font-semibold text-slate-700">{article.author}</p>
                <p>Atualizado em {formatBrazilianDate(article.updatedAt)}</p>
              </div>
              <a
                href={`/guias/${article.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/guias/${article.slug}`);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors"
              >
                Ler Guia
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
