import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Terminal, 
  Copy, 
  Check, 
  ExternalLink, 
  Database, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Layers, 
  FileJson, 
  Share2, 
  Sparkles,
  BookOpen,
  ArrowRight,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EndpointDef {
  id: string;
  name: string;
  category: string;
  method: 'GET';
  path: string;
  description: string;
  fullUrl: string;
  sampleResponse: any;
}

const ENDPOINTS: EndpointDef[] = [
  {
    id: 'inss',
    name: 'Tabela Progressiva INSS',
    category: 'Trabalhista & Previdência',
    method: 'GET',
    path: '/api/v1/tabelas/inss.json',
    description: 'Faixas progressivas de contribuição, alíquotas de 7,5% a 14%, parcelas máximas por faixa e teto previdenciário.',
    fullUrl: 'https://www.brasilcalculadoras.com.br/api/v1/tabelas/inss.json',
    sampleResponse: {
      "meta": {
        "fonte": "Brasil Calculadoras",
        "url": "https://www.brasilcalculadoras.com.br",
        "titulo": "Tabela Progressiva de Contribuição do INSS",
        "vigencia": "2026",
        "licenca": "Uso público com atribuição obrigatória"
      },
      "dados": {
        "salario_minimo": 1518.00,
        "teto_inss": 8157.41,
        "teto_desconto_maximo": 952.12,
        "faixas": [
          { "faixa": 1, "limite_inferior": 0.00, "limite_superior": 1518.00, "aliquota_percentual": 7.5, "desconto_maximo_faixa": 113.85 },
          { "faixa": 2, "limite_inferior": 1518.01, "limite_superior": 2793.88, "aliquota_percentual": 9.0, "desconto_maximo_faixa": 114.83 },
          { "faixa": 3, "limite_inferior": 2793.89, "limite_superior": 4190.83, "aliquota_percentual": 12.0, "desconto_maximo_faixa": 167.63 },
          { "faixa": 4, "limite_inferior": 4190.84, "limite_superior": 8157.41, "aliquota_percentual": 14.0, "desconto_maximo_faixa": 555.32 }
        ]
      }
    }
  },
  {
    id: 'irrf',
    name: 'Tabela Progressiva IRRF',
    category: 'Fiscal & Imposto de Renda',
    method: 'GET',
    path: '/api/v1/tabelas/irrf.json',
    description: 'Faixas mensais de incidência do Imposto de Renda Retido na Fonte, alíquotas (7,5% a 27,5%) e parcelas oficiais a deduzir.',
    fullUrl: 'https://www.brasilcalculadoras.com.br/api/v1/tabelas/irrf.json',
    sampleResponse: {
      "meta": {
        "fonte": "Brasil Calculadoras",
        "url": "https://www.brasilcalculadoras.com.br",
        "titulo": "Tabela Progressiva Mensal do IRRF",
        "vigencia": "2026"
      },
      "dados": {
        "faixa_isencao_ate": 2259.20,
        "deducao_por_dependente": 189.59,
        "desconto_simplificado_mensal": 564.80,
        "faixas": [
          { "faixa": 1, "base_calculo_ate": 2259.20, "aliquota_percentual": 0.0, "parcela_a_deduzir": 0.00 },
          { "faixa": 2, "base_calculo_ate": 2826.65, "aliquota_percentual": 7.5, "parcela_a_deduzir": 169.44 },
          { "faixa": 3, "base_calculo_ate": 3751.05, "aliquota_percentual": 15.0, "parcela_a_deduzir": 381.44 },
          { "faixa": 4, "base_calculo_ate": 4664.68, "aliquota_percentual": 22.5, "parcela_a_deduzir": 662.77 },
          { "faixa": 5, "base_calculo_ate": null, "aliquota_percentual": 27.5, "parcela_a_deduzir": 896.00 }
        ]
      }
    }
  },
  {
    id: 'trabalhista',
    name: 'Coeficientes Trabalhistas CLT',
    category: 'Trabalhista & RH',
    method: 'GET',
    path: '/api/v1/tabelas/trabalhista.json',
    description: 'Salário mínimo, coeficientes de FGTS (8% e 2%), multa rescisória (40%), adicional noturno e fórmula de aviso prévio.',
    fullUrl: 'https://www.brasilcalculadoras.com.br/api/v1/tabelas/trabalhista.json',
    sampleResponse: {
      "meta": {
        "fonte": "Brasil Calculadoras",
        "vigencia": "2026"
      },
      "dados": {
        "salario_minimo": 1518.00,
        "aliquota_fgts_mensal_percentual": 8.0,
        "multa_rescisoria_fgts_sem_justa_causa_percentual": 40.0,
        "regras_aviso_previo": {
          "base_dias": 30,
          "dias_adicionais_por_ano_completo": 3,
          "limite_maximo_dias": 90
        }
      }
    }
  },
  {
    id: 'financeiros',
    name: 'Índices Financeiros de Referência',
    category: 'Finanças & Investimentos',
    method: 'GET',
    path: '/api/v1/indices/financeiros.json',
    description: 'Taxa Selic meta, CDI estimado, rendimento da Poupança e estimativa de inflação IPCA para cálculos e projeções.',
    fullUrl: 'https://www.brasilcalculadoras.com.br/api/v1/indices/financeiros.json',
    sampleResponse: {
      "meta": { "fonte": "Brasil Calculadoras", "vigencia": "2026" },
      "dados": {
        "taxa_selic_meta_anual_percentual": 13.25,
        "taxa_cdi_estimada_anual_percentual": 13.15,
        "regra_poupanca": { "rendimento_mensal_percentual": 0.5, "adicional": "TR" }
      }
    }
  },
  {
    id: 'catalogo',
    name: 'Catálogo de Calculadoras',
    category: 'Metadados & SEO',
    method: 'GET',
    path: '/api/v1/calculadoras/catalogo.json',
    description: 'Lista completa de todas as calculadoras disponíveis na plataforma com URLs canônicas, nomes e descrições.',
    fullUrl: 'https://www.brasilcalculadoras.com.br/api/v1/calculadoras/catalogo.json',
    sampleResponse: {
      "meta": { "total_ferramentas": 20 },
      "calculadoras": [
        { "id": "juros-compostos", "nome": "Calculadora de Juros Compostos", "categoria": "financas", "url": "https://www.brasilcalculadoras.com.br/juros-compostos" },
        { "id": "clt-pj", "nome": "Comparador CLT vs PJ", "categoria": "profissoes", "url": "https://www.brasilcalculadoras.com.br/clt-pj" }
      ]
    }
  }
];

export const DesenvolvedoresView: React.FC<{ onNavigateHome: () => void }> = ({ onNavigateHome }) => {
  const [activeTab, setActiveTab] = useState<'api' | 'widget' | 'termos'>('api');
  const [selectedEndpoint, setSelectedEndpoint] = useState<EndpointDef>(ENDPOINTS[0]);
  const [codeLang, setCodeLang] = useState<'js' | 'python' | 'curl'>('js');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Widget preview state
  const [widgetCalc, setWidgetCalc] = useState<string>('juros-compostos');

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Re-trigger widget rendering in preview container when widgetCalc changes
  useEffect(() => {
    if (activeTab === 'widget') {
      const container = document.getElementById('widget-preview-box');
      if (container) {
        container.innerHTML = `<div id="brasil-calc-widget" data-calculator="${widgetCalc}"></div>`;
        if ((window as any).initBrasilCalcWidgets) {
          (window as any).initBrasilCalcWidgets();
        } else {
          const script = document.createElement('script');
          script.src = '/widget.js';
          script.async = true;
          document.body.appendChild(script);
        }
      }
    }
  }, [activeTab, widgetCalc]);

  const getCodeSnippet = (endpoint: EndpointDef, lang: 'js' | 'python' | 'curl') => {
    if (lang === 'js') {
      return `// Consumo em JavaScript / TypeScript (Node.js ou Browser)
const response = await fetch('${endpoint.fullUrl}');
const json = await response.json();

console.log("Fonte:", json.meta.fonte);
console.log("Dados:", json.dados);`;
    }

    if (lang === 'python') {
      return `# Consumo em Python com requests
import requests

url = "${endpoint.fullUrl}"
response = requests.get(url)
data = response.json()

print(f"Fonte: {data['meta']['fonte']}")
print("Dados recebidos:", data['dados'])`;
    }

    return `# Chamada cURL via terminal
curl -X GET "${endpoint.fullUrl}" \\
  -H "Accept: application/json"`;
  };

  const widgetEmbedCode = `<!-- Cole onde deseja exibir a calculadora -->
<div id="brasil-calc-widget" data-calculator="${widgetCalc}"></div>
<script src="https://www.brasilcalculadoras.com.br/widget.js" async></script>`;

  return (
    <div className="flex flex-col gap-8 font-sans animate-fadeIn max-w-6xl mx-auto w-full">
      
      {/* Breadcrumbs Navigation */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold bg-white/70 border border-slate-200/50 p-2.5 px-4 rounded-xl shadow-xs w-fit select-none">
        <span className="cursor-pointer hover:text-blue-600 transition-colors" onClick={onNavigateHome}>Início</span>
        <span className="text-slate-300">/</span>
        <span className="text-slate-700">Desenvolvedores & API Pública</span>
      </nav>

      {/* Hero Banner Section */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 text-white rounded-3xl p-8 md:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> API Pública v1.0
            </span>
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3 h-3" /> Edge CDN &lt; 20ms
            </span>
            <span className="bg-purple-500/20 text-purple-400 border border-purple-500/30 font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-3 h-3" /> CORS Habilitado
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-4 leading-tight">
            APIs Públicas de Dados & Widgets para Desenvolvedores
          </h1>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-6 font-normal">
            Acesse dados consolidados das tabelas oficiais de INSS, IRRF, parâmetros CLT e indicadores financeiros em formato JSON de alta performance. Incorpore simuladores interativos no seu blog ou portal com nossos widgets gratuitos.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('api')}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'api' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Explorar Endpoints JSON</span>
            </button>

            <button
              onClick={() => setActiveTab('widget')}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'widget' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Gerador de Widgets</span>
            </button>

            <button
              onClick={() => setActiveTab('termos')}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'termos' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Termos & Licença</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Tab Views */}
      {activeTab === 'api' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Endpoints Sidebar List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 block mb-3">
                Coleção de Endpoints Públicos
              </span>
              <div className="flex flex-col gap-2">
                {ENDPOINTS.map(ep => {
                  const isSelected = selectedEndpoint.id === ep.id;
                  return (
                    <button
                      key={ep.id}
                      onClick={() => setSelectedEndpoint(ep)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col gap-1 ${
                        isSelected 
                          ? 'bg-blue-50/50 border-blue-300 text-blue-900 shadow-xs' 
                          : 'bg-white border-slate-150 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                          {ep.method}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {ep.category}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 mt-1">{ep.name}</h4>
                      <span className="text-[10px] font-mono text-slate-500 truncate">{ep.path}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SLA / Performance Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <Zap className="w-4 h-4" />
                <span>Arquitetura Static Edge</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Nossos dados são distribuídos através da infraestrutura global de Edge da Vercel. Não há chamadas diretas a bancos de dados, garantindo latência abaixo de 20ms e 99.99% de disponibilidade.
              </p>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-3">
                <span>CORS: <b className="text-emerald-400">* (Liberado)</b></span>
                <span>Rate Limit: <b className="text-blue-400">Ilimitado</b></span>
              </div>
            </div>
          </div>

          {/* Endpoint Documentation & Playground */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-5">
              
              {/* Endpoint Header */}
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono font-extrabold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                    {selectedEndpoint.method}
                  </span>
                  <code className="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {selectedEndpoint.path}
                  </code>
                </div>
                <h2 className="text-lg font-display font-bold text-slate-900 mt-2">
                  {selectedEndpoint.name}
                </h2>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {selectedEndpoint.description}
                </p>
              </div>

              {/* URL Direct Link & Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                <code className="text-[11px] font-mono text-slate-700 truncate select-all">
                  {selectedEndpoint.fullUrl}
                </code>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => copyToClipboard(selectedEndpoint.fullUrl, 'url')}
                    className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-lg border border-slate-200 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedKey === 'url' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'url' ? 'Copiado!' : 'Copiar URL'}</span>
                  </button>
                  <a
                    href={selectedEndpoint.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-all flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Abrir JSON</span>
                  </a>
                </div>
              </div>

              {/* Code Examples Tabs */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Exemplo de Código</span>
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                    <button
                      onClick={() => setCodeLang('js')}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer ${
                        codeLang === 'js' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      JavaScript
                    </button>
                    <button
                      onClick={() => setCodeLang('python')}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer ${
                        codeLang === 'python' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Python
                    </button>
                    <button
                      onClick={() => setCodeLang('curl')}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer ${
                        codeLang === 'curl' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      cURL
                    </button>
                  </div>
                </div>

                <div className="relative bg-slate-900 rounded-xl p-4 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800">
                  <button
                    onClick={() => copyToClipboard(getCodeSnippet(selectedEndpoint, codeLang), 'code')}
                    className="absolute top-3 right-3 p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-all border border-slate-700 cursor-pointer"
                    title="Copiar código"
                  >
                    {copiedKey === 'code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <pre className="pr-10">{getCodeSnippet(selectedEndpoint, codeLang)}</pre>
                </div>
              </div>

              {/* Sample JSON Response Preview */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Resposta JSON (Amostra)</span>
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(selectedEndpoint.sampleResponse, null, 2), 'sample')}
                    className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                  >
                    {copiedKey === 'sample' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'sample' ? 'Copiado!' : 'Copiar Resposta'}</span>
                  </button>
                </div>
                <div className="bg-slate-950 rounded-xl p-4 text-emerald-400 font-mono text-xs overflow-x-auto border border-slate-850 max-h-80">
                  <pre>{JSON.stringify(selectedEndpoint.sampleResponse, null, 2)}</pre>
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* Widget Generator Tab */}
      {activeTab === 'widget' && (
        <div className="flex flex-col gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-6">
            
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md">
                Fábrica de Backlinks & Ferramentas Embebíveis
              </span>
              <h2 className="text-xl font-display font-bold text-slate-900 mt-2">
                Incorpore nossas Calculadoras no seu Blog ou Site
              </h2>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Disponibilize simuladores financeiros, rescisórios ou matemáticos diretamente dentro dos seus artigos com apenas 2 linhas de código HTML. O widget é leve (&lt; 4 KB), responsivo e opera 100% no navegador do usuário.
              </p>
            </div>

            {/* Select Calculator Control */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: 'juros-compostos', name: 'Juros Compostos', desc: 'Simulador de investimentos' },
                { id: 'rescisao-clt', name: 'Rescisão Trabalhista', desc: 'Cálculo rescisório CLT' },
                { id: 'decimo-terceiro', name: '13º Salário', desc: 'Previsão das parcelas' },
                { id: 'regra-tres', name: 'Regra de Três', desc: 'Proporção matemática rápida' }
              ].map(w => (
                <button
                  key={w.id}
                  onClick={() => setWidgetCalc(w.id)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    widgetCalc === w.id 
                      ? 'bg-blue-50/60 border-blue-400 text-blue-900 shadow-sm ring-2 ring-blue-500/20' 
                      : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <h4 className="text-xs font-bold">{w.name}</h4>
                  <span className="text-[10px] text-slate-500 mt-1">{w.desc}</span>
                </button>
              ))}
            </div>

            {/* Live Preview and Embed Code Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-2">
              
              {/* Embed Code Snippet */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Code className="w-4 h-4 text-blue-600" />
                  Código de Incorporação (Copie e Cole)
                </span>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Insira o código abaixo no HTML do seu site ou no bloco "HTML Personalizado" do WordPress, Webflow, Blogger ou qualquer outro CMS:
                </p>

                <div className="relative bg-slate-900 rounded-xl p-4 text-slate-200 font-mono text-xs border border-slate-800">
                  <button
                    onClick={() => copyToClipboard(widgetEmbedCode, 'embed')}
                    className="absolute top-3 right-3 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    {copiedKey === 'embed' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'embed' ? 'Código Copiado!' : 'Copiar Código'}</span>
                  </button>
                  <pre className="pt-8 overflow-x-auto">{widgetEmbedCode}</pre>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-[11px] text-amber-900 flex flex-col gap-1.5">
                  <strong className="font-bold flex items-center gap-1">
                    📌 Regra de Atribuição (Termos de Uso):
                  </strong>
                  <span>
                    O widget é 100% gratuito. Para continuar utilizando sem custos, é estritamente obrigatório manter o link discreto de crédito <i>"Calculado via Brasil Calculadoras"</i> exibido no rodapé do widget.
                  </span>
                </div>
              </div>

              {/* Live Preview Container */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-600" />
                  Preview em Tempo Real (Demonstração)
                </span>
                <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 flex items-center justify-center min-h-[380px]">
                  <div id="widget-preview-box" className="w-full flex justify-center">
                    {/* Rendered dynamically via widget.js */}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Terms and License Tab */}
      {activeTab === 'termos' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col gap-6 max-w-4xl mx-auto">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-display font-bold text-slate-900">
              Termos de Uso da API & Licença de Dados
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Última revisão: Março de 2026
            </p>
          </div>

          <div className="flex flex-col gap-4 text-xs text-slate-700 leading-relaxed font-normal">
            <h3 className="text-sm font-bold text-slate-900 mt-2">1. Uso Livre com Atribuição</h3>
            <p>
              Os endpoints disponibilizados em <code>/api/v1/*</code> são recursos públicos e abertos para desenvolvedores de software, pesquisadores, canais automatizados e empresas. O uso é gratuito tanto para projetos não-comerciais quanto para soluções comerciais, desde que seja mantida a atribuição de autoria com link dofollow apontando para <b>https://www.brasilcalculadoras.com.br</b>.
            </p>

            <h3 className="text-sm font-bold text-slate-900 mt-2">2. Limites de Uso e Arquitetura Edge</h3>
            <p>
              Por operarem em uma infraestrutura global distribuída em Edge Cache (Vercel / Cloudflare), os endpoints não possuem limitação estrita de chamadas (rate limit aberto para requisições legítimas). No entanto, nos reservamos o direito de mitigar acessos abusivos que configurem ataques de negação de serviço (DoS).
            </p>

            <h3 className="text-sm font-bold text-slate-900 mt-2">3. Isenção de Responsabilidade</h3>
            <p>
              Os dados e tabelas são extraídos de fontes públicas oficiais brasileiras (Diário Oficial da União, Receita Federal do Brasil, Ministério do Trabalho e Banco Central do Brasil). Embora empenhemos esforços máximos para manter todas as regras 100% atualizadas, o Brasil Calculadoras não se responsabiliza por eventuais inconsistências ou decisões judiciais/financeiras tomadas unicamente com base nas projeções.
            </p>
          </div>

          {/* B2B Contact Box */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-white">Precisa de Endpoints Customizados ou Grandes Volumes?</h4>
              <p className="text-xs text-slate-400 mt-1">
                Criamos soluções sob medida para ERPs, sistemas de folha de pagamento e fintechs.
              </p>
            </div>
            <a
              href="mailto:contato@brasilcalculadoras.com.br?subject=API%20Empresarial%20Brasil%20Calculadoras"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-lg shadow-blue-500/30"
            >
              <Mail className="w-4 h-4" />
              <span>Falar com a Equipe</span>
            </a>
          </div>
        </div>
      )}

    </div>
  );
};
