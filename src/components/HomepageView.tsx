import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  CheckCircle, 
  HelpCircle, 
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Zap,
  Lock,
  Globe2,
  DollarSign,
  HeartPulse,
  Clock,
  Sliders,
  Briefcase,
  FileText
} from 'lucide-react';
import { CALCULATORS_CATALOG, CATEGORY_MAP } from '../data/calculatorsCatalog';
import { CATEGORY_KEY_TO_SLUG, CATEGORY_MAP_RAW } from '../utils/seoContentGenerator';

function normalizeSearchText(text: string): string {
  return (text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function matchesSearchTokens(target: string, queryTokens: string[]): boolean {
  if (queryTokens.length === 0) return true;
  const normalizedTarget = normalizeSearchText(target);
  return queryTokens.every(tok => normalizedTarget.includes(tok));
}

interface HomepageViewProps {
  onSelectCalculator: (id: string) => void;
  onSelectCategory: (key: string) => void;
  categoryCounts: Record<string, number>;
}

export const HomepageView: React.FC<HomepageViewProps> = ({ 
  onSelectCalculator, 
  onSelectCategory,
  categoryCounts 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});
  const [recentTools] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('brasilcalculadoras_recent_tools_v1');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const toggleFaq = (idx: number) => {
    setFaqOpen(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Popular calculators list
  const POPULAR_TOOLS = [
    { id: 'juros-compostos', icon: DollarSign, color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
    { id: 'clt-pj', icon: ShieldCheck, color: 'bg-blue-50 text-blue-600 border-blue-100' },
    { id: 'calculadora-de-rescisao-clt', icon: FileText, color: 'bg-rose-50 text-rose-600 border-rose-100' },
    { id: 'calculadora-de-decimo-terceiro', icon: Briefcase, color: 'bg-violet-50 text-violet-600 border-violet-100' },
    { id: 'imc', icon: HeartPulse, color: 'bg-teal-50 text-teal-600 border-teal-100' },
    { id: 'regra-tres', icon: Sliders, color: 'bg-amber-50 text-amber-600 border-amber-100' }
  ];

  const popularCalculators = CALCULATORS_CATALOG.filter(c => 
    POPULAR_TOOLS.some(p => p.id === c.id)
  );

  // Search filter com suporte a tokenização e insensibilidade a acentos (NFD)
  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : (() => {
        const tokens = normalizeSearchText(searchQuery).split(/\s+/).filter(Boolean);
        return CALCULATORS_CATALOG.filter(c => {
          const haystack = `${c.name} ${c.description} ${(c.tags || []).join(' ')}`;
          return matchesSearchTokens(haystack, tokens);
        }).slice(0, 10);
      })();

  const categoryDescriptions: Record<string, string> = {
    financas: 'Planejamento de juros compostos, markup de vendas, poupança, amortização e ROI de investimentos.',
    saude: 'Acompanhamento do IMC, metabolismo basal BMR, gasto calórico diário e ingestão ideal de água.',
    profissoes: 'Cálculo completo de rescisão CLT, décimo terceiro, provisão de férias, horas extras e FGTS.',
    matematica: 'Regra de três simples, porcentagens rápidas, equações de 2º grau e médias escolares.',
    imobiliario: 'Simuladores Price vs SAC, reajuste de aluguel, cap rate e estimativas fiscais de ITBI.',
    veiculos: 'Comparação de álcool vs gasolina, depreciação FIPE, consumo de viagem e IPVA.',
    pets: 'Meta de ração diária, hidratação e idade em anos humanos para cães e gatos.',
    datas: 'Diferença entre datas, contagem de dias úteis, conversão de horas e planejamento temporal.',
    maternidade: 'Data provável do parto, custo mensal com bebê, idade gestacional e planejamento familiar.'
  };

  const intentGroups = [
    {
      title: 'Para o Trabalhador & Profissional',
      desc: 'Simule salários líquidos, verbas rescisórias CLT e planeje suas férias de forma segura.',
      tools: [
        { id: 'calculadora-de-rescisao-clt', name: 'Cálculo de Rescisão' },
        { id: 'calculadora-de-decimo-terceiro', name: 'Décimo Terceiro' },
        { id: 'calculadora-de-ferias-clt', name: 'Férias Proporcionais' },
        { id: 'calculadora-de-horas-extras', name: 'Horas Extras' }
      ]
    },
    {
      title: 'Para o Investidor & Negócios',
      desc: 'Projete rendimentos capitalizados, compare regimes de trabalho e precifique produtos.',
      tools: [
        { id: 'juros-compostos', name: 'Juros Compostos' },
        { id: 'clt-pj', name: 'Comparador CLT vs PJ' },
        { id: 'margem-lucro', name: 'Margem & Markup' },
        { id: 'simulador-de-aposentadoria-inss', name: 'Aposentadoria INSS' }
      ]
    },
    {
      title: 'Para o Estudante e Uso Diário',
      desc: 'Resolva proporcionalidades, verifique médias e obtenha respostas matemáticas rápidas.',
      tools: [
        { id: 'regra-tres', name: 'Regra de Três Rápida' },
        { id: 'porcentagem-simples', name: 'Porcentagem Simples' },
        { id: 'imc', name: 'Metabolismo e IMC' },
        { id: 'financiamento-veiculo', name: 'Financiamento Auto' }
      ]
    }
  ];

  const homepageFaqs = [
    {
      q: 'O Brasil Calculadoras é 100% gratuito?',
      a: 'Sim, absolutamente gratuito. Nosso propósito é democratizar o acesso a ferramentas matemáticas, financeiras e trabalhistas sem cobrar assinaturas, taxas ou exigir cadastros. A plataforma é mantida de forma sustentável através de parcerias e patrocínios digitais transparentes.'
    },
    {
      q: 'Como são atualizadas as fórmulas trabalhistas e fiscais?',
      a: 'Todas as nossas ferramentas utilizam lógicas atualizadas de acordo com as fontes oficiais, como a Receita Federal, o Ministério do Trabalho e Emprego (CLT) e a Caixa Econômica Federal (FGTS). Revisamos as faixas de contribuição previdenciária e tributária anualmente ou sempre que ocorrem mudanças legais.'
    },
    {
      q: 'Os meus dados e simulações são salvos ou compartilhados?',
      a: 'Sua privacidade é nossa prioridade absoluta. Todas as contas e cálculos são processados localmente no seu dispositivo. Não salvamos nenhuma das informações que você digita em nossos formulários em servidores, e o seu histórico de simulações é mantido estritamente no armazenamento local (localStorage) do seu próprio navegador.'
    }
  ];

  return (
    <div className="flex flex-col gap-12 w-full animate-fadeIn font-sans pb-8">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white px-6 py-16 md:py-20 md:px-12 shadow-xl border border-slate-800">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 relative z-10">
          <span className="bg-blue-500/10 border border-blue-500/25 text-blue-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full select-none">
            Ecossistema de Simuladores
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-black tracking-tight leading-tight max-w-2xl bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Calculadoras online gratuitas para finanças, trabalho, saúde, estudos, veículos e muito mais.
          </h1>
          <p className="text-xs md:text-sm max-w-lg leading-relaxed text-slate-300 font-normal">
            Facilite sua rotina com cálculos exatos e relatórios profissionais. Ferramentas sem burocracias, sem cadastro e 100% atualizadas com a legislação nacional.
          </p>

          {/* Central Hero Search Bar */}
          <div className="w-full max-w-lg mt-4 relative">
            <span className="absolute left-4 top-3.5 text-slate-300">
              <Search className="w-5 h-5" aria-hidden="true" />
            </span>
            <input 
              type="text"
              aria-label="Pesquisar calculadoras online"
              enterKeyHint="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquise calculadoras: juros, rescisão, CLT, IMC, regra de 3..."
              className="w-full pl-12 pr-4 py-3.5 text-xs bg-slate-800/80 hover:bg-slate-800 focus:bg-white text-slate-200 focus:text-slate-900 border border-slate-700/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-full outline-none transition-all font-medium placeholder-slate-400 focus:placeholder-slate-500"
            />
            
            {/* Search Results dropdown overlay */}
            {searchQuery.trim() !== '' && (
              <div className="absolute left-0 right-0 mt-2 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 z-50 py-3 overflow-hidden text-left">
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest px-4 mb-2 block select-none">
                  Resultados Correspondentes
                </span>
                <div className="max-h-[280px] overflow-y-auto flex flex-col px-2">
                  {searchResults.length === 0 ? (
                    <p className="text-center py-6 text-xs text-slate-600 font-medium select-none">
                      Nenhuma ferramenta localizada para "{searchQuery}".
                    </p>
                  ) : (
                    searchResults.map(c => (
                      <button
                        type="button"
                        key={c.id}
                        onClick={() => onSelectCalculator(c.id)}
                        className="w-full text-left flex justify-between items-center p-2.5 hover:bg-blue-50/50 cursor-pointer rounded-xl transition-all"
                      >
                        <div className="truncate pr-4">
                          <span className="block text-xs font-bold text-slate-900">{c.name}</span>
                          <p className="text-[10px] text-slate-600 truncate mt-0.5 font-normal">{c.description}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Calculadoras Acessadas Recentemente */}
            {recentTools.length > 0 && searchQuery.trim() === '' && (
              <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 select-none">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                  <Clock className="w-3 h-3 text-blue-400" />
                  <span>Recentes:</span>
                </span>
                {recentTools.slice(0, 5).map(id => {
                  const item = CALCULATORS_CATALOG.find(c => c.id === id);
                  if (!item) return null;
                  return (
                    <button
                      key={id}
                      onClick={() => onSelectCalculator(id)}
                      className="px-2.5 py-1 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 rounded-full text-[10.5px] text-slate-200 hover:text-white transition-all cursor-pointer font-medium"
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Seção Mais Usadas */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
          <span className="h-5 w-1 bg-blue-600 rounded-full" />
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-display">
            Calculadoras mais acessadas
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {popularCalculators.map(c => {
            const toolMeta = POPULAR_TOOLS.find(p => p.id === c.id);
            const Icon = toolMeta?.icon || DollarSign;
            return (
              <div
                key={c.id}
                onClick={() => onSelectCalculator(c.id)}
                className="group bg-white border border-slate-200 hover:border-blue-200 hover:shadow-md p-5 rounded-2xl cursor-pointer transition-all flex items-start gap-4 hover:bg-slate-50/30"
              >
                <div className={`p-3 rounded-xl border shrink-0 transition-transform group-hover:scale-105 ${toolMeta?.color || 'bg-slate-50 text-slate-600'}`}>
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                    {c.name}
                  </h3>
                  <p className="text-[10px] text-slate-600 mt-1 line-clamp-2 leading-relaxed font-normal">
                    {c.description}
                  </p>
                  <span className="text-[9px] font-mono font-bold text-blue-700 uppercase tracking-wide inline-flex items-center gap-0.5 mt-3 select-none">
                    Calcular agora <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Seção Categorias em Destaque */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
          <span className="h-5 w-1 bg-blue-600 rounded-full" />
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-display">
            Categorias em destaque
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(CATEGORY_MAP).slice(0, 6).map(([key, label]) => {
            const slug = CATEGORY_KEY_TO_SLUG[key];
            const rawLabel = CATEGORY_MAP_RAW[key] || label;
            const count = categoryCounts[key] || 0;
            const desc = categoryDescriptions[key] || 'Ferramentas de alta precisão baseadas em normas nacionais.';
            const emoji = key === 'financas' ? '💰' : key === 'saude' ? '🍎' : key === 'profissoes' ? '👔' : key === 'matematica' ? '📐' : key === 'imobiliario' ? '🏠' : key === 'veiculos' ? '🚗' : key === 'pets' ? '🐾' : '🚗';

            return (
              <div
                key={key}
                onClick={() => onSelectCategory(key)}
                className="group bg-white border border-slate-200 hover:border-blue-200 hover:shadow-md p-5 rounded-2xl cursor-pointer transition-all flex flex-col justify-between min-h-[160px] hover:bg-slate-50/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl" aria-hidden="true">{emoji}</span>
                    <span className="bg-slate-100 text-slate-600 font-mono text-[9px] font-bold px-2 py-0.5 rounded-md group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {count} {count === 1 ? 'ferramenta' : 'ferramentas'}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {rawLabel}
                  </h3>
                  <p className="text-[10px] text-slate-600 mt-2 line-clamp-3 leading-relaxed font-normal">
                    {desc}
                  </p>
                </div>
                <span className="text-[9px] font-mono font-bold text-blue-700 uppercase tracking-wide inline-flex items-center gap-0.5 mt-4 select-none">
                  Acessar Hub <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Seção Calculadoras por Objetivo (Intenção de Busca) */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
          <span className="h-5 w-1 bg-blue-600 rounded-full" />
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-display">
            Calculadoras por Objetivo
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {intentGroups.map((group, gIdx) => (
            <div 
              key={gIdx} 
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-bold text-slate-800 font-display border-b border-slate-100 pb-2.5">
                  {group.title}
                </h3>
                <p className="text-[10px] text-slate-600 mt-2 leading-relaxed font-normal">
                  {group.desc}
                </p>
                <div className="flex flex-col gap-2 mt-4">
                  {group.tools.map(tool => (
                    <button
                      key={tool.id}
                      onClick={() => onSelectCalculator(tool.id)}
                      className="text-left text-xs font-medium text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between cursor-pointer py-1 px-1.5 hover:bg-slate-50 rounded-lg group"
                    >
                      <span className="truncate">{tool.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0" aria-hidden="true" />
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => {
                  const targetCat = gIdx === 0 ? 'profissoes' : gIdx === 1 ? 'financas' : 'matematica';
                  onSelectCategory(targetCat);
                }}
                className="w-full text-center py-2 bg-slate-50 hover:bg-slate-100 text-[10px] text-slate-700 font-bold rounded-xl mt-6 border border-slate-200 transition-colors cursor-pointer select-none"
              >
                Ver todos os simuladores
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Bloco Institucional de Confiança */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 deferred-section">
        <div className="max-w-2xl mx-auto text-center mb-8 flex flex-col gap-2">
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-widest font-mono">
            Sua Central de Planos e Simulações
          </h2>
          <h3 className="text-lg font-bold text-slate-800 tracking-tight font-display">
            Por que o Brasil Calculadoras é a escolha número um?
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="p-3 bg-blue-50 text-blue-700 rounded-xl border border-blue-100">
              <ShieldCheck className="w-5 h-5" aria-hidden="true" />
            </div>
            <h4 className="text-xs font-bold text-slate-800">100% Gratuito</h4>
            <p className="text-[10px] text-slate-600 font-normal leading-normal">
              Acesso total e imediato a todas as ferramentas sem assinaturas ou cobranças.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-100">
              <Zap className="w-5 h-5" aria-hidden="true" />
            </div>
            <h4 className="text-xs font-bold text-slate-800">Instantâneo</h4>
            <p className="text-[10px] text-slate-600 font-normal leading-normal">
              Sem downloads, cadastros ou instalações. Calcule tudo online no navegador.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="p-3 bg-rose-50 text-rose-700 rounded-xl border border-rose-100">
              <Lock className="w-5 h-5" aria-hidden="true" />
            </div>
            <h4 className="text-xs font-bold text-slate-800">Sem Cadastro</h4>
            <p className="text-[10px] text-slate-600 font-normal leading-normal">
              Privacidade em primeiro lugar. Não coletamos dados pessoais como e-mail ou telefone.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="p-3 bg-violet-50 text-violet-700 rounded-xl border border-violet-100">
              <Globe2 className="w-5 h-5" aria-hidden="true" />
            </div>
            <h4 className="text-xs font-bold text-slate-800">Feito para o Brasil</h4>
            <p className="text-[10px] text-slate-600 font-normal leading-normal">
              Fórmulas adaptadas com rigor à CLT, tributos federais e índices econômicos nacionais.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ curta institucional */}
      <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-xs deferred-section">
        <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
          <HelpCircle className="w-5 h-5 text-blue-600" aria-hidden="true" />
          <h2 className="text-sm font-bold text-slate-800 font-display">Perguntas frequentes (FAQ)</h2>
        </div>
        <div className="flex flex-col gap-3">
          {homepageFaqs.map((faq, idx) => {
            const isOpen = !!faqOpen[idx];
            return (
              <div
                key={idx}
                className="border border-slate-100/60 rounded-xl bg-slate-50/40 hover:bg-slate-50 px-4 py-3.5 transition-all"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center text-left font-bold text-slate-800 cursor-pointer focus:outline-none"
                >
                  <span className="text-xs font-semibold text-slate-700">{faq.q}</span>
                  <span
                    className={`text-blue-600 shrink-0 ml-2 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-2 overflow-hidden">
                    <p className="text-[11px] text-slate-600 font-sans font-normal leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
