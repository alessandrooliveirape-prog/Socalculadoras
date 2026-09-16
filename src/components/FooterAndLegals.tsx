import React, { useState, useEffect } from 'react';
import { Shield, Eye, HelpCircle, FileText, Mail, Info, X, Check, Code } from 'lucide-react';
import { useLocation } from 'wouter';
import { CATEGORY_KEY_TO_SLUG } from '../utils/seoContentGenerator';

interface FooterAndLegalsProps {
  onCategoryClick: (category: string) => void;
  onCalculatorClick: (id: string) => void;
  categories: Record<string, string>;
}

export const FooterAndLegals: React.FC<FooterAndLegalsProps> = ({ onCategoryClick, onCalculatorClick, categories }) => {
  const [_, setLocation] = useLocation();
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(true); // Default to accepted or local check

  // Check Cookie consent status on mount
  useEffect(() => {
    const consent = localStorage.getItem('cc_adsense_consent');
    if (!consent) {
      setCookiesAccepted(false);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cc_adsense_consent', 'accepted');
    setCookiesAccepted(true);
  };

  return (
    <>
      {/* Footer Element */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-4 flex flex-col gap-4 select-none">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Brasil Calculadoras" className="h-8 w-8 rounded-lg shadow-sm" />
              <h3 className="text-md font-display font-extrabold text-white">Brasil Calculadoras</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Plataforma profissional de ferramentas matemáticas, simulações trabalhistas, diagnósticos de saúde, logística e agronegócio do Brasil. Projetamos utilitários 100% gratuitos, rápidos e práticos para ajudar você a poupar tempo e tomar as melhores decisões no dia a dia.
            </p>
            <button 
              onClick={() => setLocation('/contato')}
              className="flex items-center gap-1.5 mt-2 bg-slate-800 hover:bg-slate-750 p-2.5 rounded-xl border border-slate-700/50 w-fit text-left cursor-pointer transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[10.5px] font-mono text-slate-300">contato@brasilcalculadoras.com.br</span>
            </button>
          </div>

          {/* Quick Categories Col */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Segmentos Clave</h4>
            <div className="flex flex-col gap-2.5">
              {Object.entries(categories).slice(0, 5).map(([key, label]) => {
                const slug = CATEGORY_KEY_TO_SLUG[key] || key;
                return (
                  <a
                    key={key}
                    href={`/${slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setLocation('/' + slug);
                      onCategoryClick(key);
                    }}
                    className="text-left text-xs text-slate-400 hover:text-blue-400 transition-colors cursor-pointer font-medium"
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Institutional & Legal Requirements Col */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Institucional & Legal</h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="/politica-de-privacidade"
                onClick={(e) => {
                  e.preventDefault();
                  setLocation('/politica-de-privacidade');
                }}
                className="text-left text-xs text-slate-400 hover:text-blue-400 transition-all flex items-center gap-1.5 cursor-pointer font-semibold"
              >
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>Política de Privacidade</span>
              </a>
              <a
                href="/termos-de-uso"
                onClick={(e) => {
                  e.preventDefault();
                  setLocation('/termos-de-uso');
                }}
                className="text-left text-xs text-slate-400 hover:text-blue-400 transition-all flex items-center gap-1.5 cursor-pointer font-semibold"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>Termos e Condições</span>
              </a>
              <a
                href="/sobre"
                onClick={(e) => {
                  e.preventDefault();
                  setLocation('/sobre');
                }}
                className="text-left text-xs text-slate-400 hover:text-blue-400 transition-all flex items-center gap-1.5 cursor-pointer font-semibold"
              >
                <Info className="w-3.5 h-3.5 text-blue-400" />
                <span>Sobre a Central</span>
              </a>
              <a
                href="/contato"
                onClick={(e) => {
                  e.preventDefault();
                  setLocation('/contato');
                }}
                className="text-left text-xs text-slate-400 hover:text-blue-400 transition-all flex items-center gap-1.5 cursor-pointer font-semibold"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Contato & Suporte</span>
              </a>
              <a
                href="/desenvolvedores"
                onClick={(e) => {
                  e.preventDefault();
                  setLocation('/desenvolvedores');
                }}
                className="text-left text-xs text-slate-400 hover:text-blue-400 transition-all flex items-center gap-1.5 cursor-pointer font-semibold"
              >
                <Code className="w-3.5 h-3.5 text-blue-400" />
                <span>API & Desenvolvedores</span>
              </a>
            </div>
          </div>

          {/* Editorial Disclaimer Col */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">Isenção</h4>
            <p className="text-[10px] text-slate-400 leading-normal">
              Os resultados emitidos por esta central têm caráter de projeção técnica provisória e educativa. Consulte profissionais regulados (contadores, nutricionistas ou advogados) antes de celebrar decisões definitivas comerciais.
            </p>
          </div>
        </div>

        {/* Outer bottom copyright credits */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center select-none">
          <p className="text-[10.5px] text-slate-500 font-mono">
            &copy; 2026 Brasil Calculadoras. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-[10.5px]">
            <span className="text-slate-500 font-sans text-[11px]">Plataforma Independente de Ferramentas de Utilidade Pública</span>
          </div>
        </div>
      </footer>

      {/* FLOATING COOKIE CONSENT BANNER (Google AdSense GDPR/CCPA Compliance) */}
      {!cookiesAccepted && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 z-100 flex flex-col gap-3 font-sans animate-bounce-short">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800 leading-tight">Consentimento de Cookies e Anúncios</h4>
              <p className="text-[10px] text-gray-500 leading-relaxed mt-1">
                Nós usamos cookies e identificadores de dispositivos para personalizar anúncios do Google AdSense, fornecer recursos de mídias e analisar o fluxo de de tráfego do site em conformidade com a LGPD.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 border-t pt-3">
            <button
              onClick={() => setShowPrivacy(true)}
              className="px-3 py-1.5 text-[10px] font-bold text-gray-500 hover:text-slate-700 cursor-pointer"
            >
              Ver Detalhes
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Check className="w-3 h-3" />
              <span>Aceitar Todos</span>
            </button>
          </div>
        </div>
      )}

      {/* PRIVACY POLICY MODAL */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-slate-900/65 backdrop-blur-xs flex items-center justify-center z-120 p-4 font-sans">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-650 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-800">Política de Privacidade</h3>
              </div>
              <button 
                onClick={() => setShowPrivacy(false)}
                className="p-1 px-1.5 bg-gray-100 hover:bg-gray-200 text-gray-400 rounded-lg cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 text-[11px] text-gray-600 space-y-4 leading-relaxed overflow-y-auto">
              <span className="text-[10px] font-mono text-gray-400 block mb-2">Última atualização: 01 de Junho de 2026</span>
              <p>Esta Política de Privacidade descreve como a <strong>Brasil Calculadoras</strong> coleta, processa e protege os dados dos utilizadores no site.</p>
              
              <h4 className="text-xs font-bold text-slate-800">1. Coleta Automatizada e Cookies</h4>
              <p>O portal coleta de forma automatizada logs técnicos como endereços de IP, tipo de navegador, páginas de referência e tempo de permanência voluntária com o único intuito de aprimoramento da infraestrutura técnica e de segurança da informação.</p>
              
              <h4 className="text-xs font-bold text-slate-800">2. Google AdSense e Cookies de Terceiros</h4>
              <p>Nós utilizamos publicidade programática terceirizada do <strong>Google AdSense</strong>. O Google e parceiros terceirizados utilizam cookies persistentes (como o cookie DoubleClick DART) para veicular anúncios segmentados baseados nas visitas anteriores feitas a este e a outros portais na Internet.</p>
              <p>Os usuários podem desativar a exibição de anúncios personalizados visitando as <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Configurações de Anúncios do Google</a>.</p>
              
              <h4 className="text-xs font-bold text-slate-800">3. Conformidade com a LGPD e GDPR</h4>
              <p>Nós respeitamos integralmente as diretrizes da Lei Geral de Proteção de Dados (LGPD) brasileira. Não vendemos, alugamos ou comercializamos dados cadastrais ou registros de navegação a empresas terceiras sob nenhuma circunstância.</p>

              <h4 className="text-xs font-bold text-slate-800">4. Contato do Encarregado de Dados</h4>
              <p>Para dúvidas legais ou requisições de exclusão de históricos, escreva para o e-mail: <code>lgpd@brasilcalculadoras.com.br</code></p>
            </div>
          </div>
        </div>
      )}

      {/* TERMS OF USE MODAL */}
      {showTerms && (
        <div className="fixed inset-0 bg-slate-900/65 backdrop-blur-xs flex items-center justify-center z-120 p-4 font-sans">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-800">Termos de Uso</h3>
              </div>
              <button 
                onClick={() => setShowTerms(false)}
                className="p-1 px-1.5 bg-gray-100 hover:bg-gray-200 text-gray-400 rounded-lg cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 text-[11px] text-gray-600 space-y-4 leading-relaxed overflow-y-auto">
              <span className="text-[10px] font-mono text-gray-400 block mb-2">Vigência: Junho de 2026</span>
              <p>Ao navegar pelo portal da <strong>Brasil Calculadoras</strong>, você concorda expressamente com os seguintes regulamentos de utilização:</p>
              
              <h4 className="text-xs font-bold text-slate-800">1. Natureza do Serviço Informativo</h4>
              <p>As ferramentas computacionais são disponibilizadas inteiramente gratuitas, sob o regime de 'como estão'. Suas equações numéricas simulam relações financeiras, trabalhistas, nutricionais e matemáticas puras e não constituem garantias jurídicas de acerto formal.</p>
              
              <h4 className="text-xs font-bold text-slate-800">2. Uso Permitido e Proibições</h4>
              <p>É estritamente vedada a utilização de scripts robóticos automatizados, crawlers intrusivos ou ataques de negação de serviço (DDoS) contra nossa infraestrutura Cloud Run. O descumprimento incorrerá em sanções cíveis de invasão de dispositivos.</p>
              
              <h4 className="text-xs font-bold text-slate-800">3. Isenção Total de Danos</h4>
              <p>Os desenvolvedores do portal se isentam de qualquer responsabilidade por eventuais decisões equivocadas, perda de lucros ou demissões decorrentes das estimativas informais sugeridas pelos simuladores.</p>
            </div>
          </div>
        </div>
      )}

      {/* ABOUT US MODAL */}
      {showAbout && (
        <div className="fixed inset-0 bg-slate-900/65 backdrop-blur-xs flex items-center justify-center z-120 p-4 font-sans">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-800">Sobre o Brasil Calculadoras</h3>
              </div>
              <button 
                onClick={() => setShowAbout(false)}
                className="p-1 px-1.5 bg-gray-100 hover:bg-gray-200 text-gray-400 rounded-lg cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 text-[11px] text-gray-600 space-y-4 leading-relaxed overflow-y-auto">
              <h4 className="text-xs font-bold text-slate-850 text-slate-800">Nossa Missão</h4>
              <p>Buscamos desmistificar a matemática financeira e burocracias laborais do cotidiano brasileiro. Muitas vezes ficamos perdidos em equações complexas de rescisões CLT, metas de calorias, juros de de financiamento ou cálculo para o agronegócio e logística. O Brasil Calculadoras consolida dezenas dessas necessidades em uma interface única, leve e veloz.</p>
              
              <h4 className="text-xs font-bold text-slate-800">Gratuidade e Sustentabilidade</h4>
              <p>A sustentabilidade da plataforma é viabilizada por parcerias de publicidade digital e patrocínios programáticos éticos. Esses recursos nos permitem manter toda a infraestrutura técnica online, atualizada e 100% gratuita para toda a população brasileira, sem a necessidade de cadastros, cobranças ou assinaturas pagas.</p>
              
              <h4 className="text-xs font-bold text-slate-800">Design de Excelência</h4>
              <p>Acreditamos que ferramentas profissionais devem ter visual de excelência, sem poluição de margens ou popups cegos. Buscamos balancear contrastes, tipografia impecável da família Inter e animações que deem satisfação ao calcular.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
