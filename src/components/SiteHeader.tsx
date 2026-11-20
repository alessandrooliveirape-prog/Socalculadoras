import React from 'react';
import { BookOpen, Menu, Search, Share2, X } from 'lucide-react';
import { CalculatorDef, CalculatorId } from '../types';
import { CATEGORY_MAP_RAW } from '../utils/seoContentGenerator';

interface SiteHeaderProps {
  menuOpen: boolean;
  onToggleMenu: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  filteredCalculators: CalculatorDef[];
  onSelectCalculator: (id: CalculatorId) => void;
  onNavigate: (path: string) => void;
  onShare: () => void;
  activePath: string;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  menuOpen,
  onToggleMenu,
  searchQuery,
  onSearchChange,
  filteredCalculators,
  onSelectCalculator,
  onNavigate,
  onShare,
  activePath
}) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-40 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-18 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleMenu}
            aria-label={menuOpen ? 'Fechar menu de categorias' : 'Abrir menu de categorias'}
            aria-expanded={menuOpen}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-lg cursor-pointer transition-all"
          >
            {menuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center gap-2.5 cursor-pointer select-none group text-left no-underline"
          >
            <img
              src="/logo.svg"
              alt=""
              aria-hidden="true"
              width="36"
              height="36"
              className="h-9 w-9 rounded-xl shadow-md shadow-blue-100/40 group-hover:scale-105 transition-transform duration-200"
            />
            <div>
              <span className="block text-md font-display font-bold text-slate-800 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                Brasil Calculadoras
              </span>
              <span className="text-[10px] font-semibold text-slate-600 font-mono tracking-wider">
                FERRAMENTAS DE EXCELÊNCIA
              </span>
            </div>
          </a>
        </div>

        {/* Quick Search Input bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <span className="absolute left-3.5 top-3 text-slate-500">
            <Search className="w-4.5 h-4.5" aria-hidden="true" />
          </span>
          <input
            type="text"
            aria-label="Pesquisar calculadoras"
            enterKeyHint="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Digite para pesquisar: juros, CLT, IMC, texto, matemática..."
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-100 hover:bg-slate-200/50 focus:bg-white border-none focus:ring-2 focus:ring-blue-500 rounded-full outline-none transition-all font-sans font-medium text-slate-800"
          />
          {searchQuery && (
            <button
              type="button"
              aria-label="Limpar busca"
              onClick={() => onSearchChange('')}
              className="absolute right-3.5 top-3 text-gray-400 hover:text-slate-650 cursor-pointer"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
        </div>

        <nav aria-label="Navegação principal" className="flex items-center gap-2 sm:gap-3">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className={`hidden xl:inline-flex items-center px-2.5 py-2 text-xs font-bold rounded-lg transition-colors ${
              activePath === '/' ? 'text-blue-700 bg-blue-50/70' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Início
          </a>
          <a
            href="/guias"
            onClick={(e) => handleNavClick(e, '/guias')}
            className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-bold transition-colors whitespace-nowrap ${
              activePath === '/guias' || activePath.startsWith('/guias/')
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200/80'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Guias &amp; Artigos</span>
          </a>
          <a
            href="/sobre"
            onClick={(e) => handleNavClick(e, '/sobre')}
            className={`hidden lg:inline-flex items-center px-2.5 py-2 text-xs font-bold rounded-lg transition-colors ${
              activePath === '/sobre' ? 'text-blue-700 bg-blue-50/70' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Sobre
          </a>
          <a
            href="/contato"
            onClick={(e) => handleNavClick(e, '/contato')}
            className={`hidden lg:inline-flex items-center px-2.5 py-2 text-xs font-bold rounded-lg transition-colors ${
              activePath === '/contato' ? 'text-blue-700 bg-blue-50/70' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Contato
          </a>
          <button
            type="button"
            onClick={onShare}
            aria-label="Compartilhar link da central"
            className="p-2 text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-xl transition-all cursor-pointer active:scale-95"
            title="Compartilhar Link"
          >
            <Share2 className="w-4.5 h-4.5" aria-hidden="true" />
          </button>
        </nav>
      </div>

      {/* Search Results Dropdown Overlay */}
      {searchQuery.trim() !== '' && (
        <div className="absolute top-18 left-0 right-0 bg-white border-b border-slate-200 shadow-xl z-50 py-3">
          <div className="max-w-3xl mx-auto px-4 max-h-[300px] overflow-y-auto flex flex-col gap-1">
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest px-2.5 mb-1.5 block">
              Resultados Rápidos da Busca
            </span>
            {filteredCalculators.length === 0 ? (
              <p className="text-center py-6 text-xs text-slate-600 select-none">
                Nenhuma ferramenta coincide com &ldquo;{searchQuery}&rdquo;. Tente outros termos.
              </p>
            ) : (
              filteredCalculators.map((c) => (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => onSelectCalculator(c.id)}
                  className="w-full text-left flex justify-between items-center p-2.5 hover:bg-slate-50 cursor-pointer rounded-lg transition-colors"
                >
                  <div>
                    <span className="block text-xs font-semibold text-slate-900">{c.name}</span>
                    <p className="text-[11px] text-slate-600 truncate max-w-sm sm:max-w-xl">{c.description}</p>
                  </div>
                  <span className="text-[9px] bg-slate-100 font-mono font-bold text-slate-700 px-2 py-0.5 rounded uppercase">
                    {CATEGORY_MAP_RAW[c.category] || c.category}
                  </span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </header>
  );
};
