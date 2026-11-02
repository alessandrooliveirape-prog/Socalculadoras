import React, { useState } from 'react';
import { Shield, FileText, Info, Mail, CheckCircle, Lock, Server, Users, Award, AlertCircle, Loader2, Megaphone, Globe } from 'lucide-react';

export interface LegalPageProps {
  type: 'privacy' | 'terms' | 'about' | 'contact' | 'cookies' | 'transparency' | 'advertisers';
  onNavigateHome: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigateHome }) => {
  // Contact Form State
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [motivo, setMotivo] = useState('duvida');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNome = nome.trim();
    const cleanEmail = email.trim();
    const cleanMensagem = mensagem.trim();

    if (!cleanNome || !cleanEmail || !cleanMensagem) {
      setStatus('erro');
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: cleanNome,
          email: cleanEmail,
          motivo,
          mensagem: cleanMensagem
        })
      });

      if (res.ok) {
        setStatus('enviado');
        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        setStatus('falha');
      }
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err);
      setStatus('falha');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm font-sans flex flex-col gap-8 my-4">
      {/* Breadcrumb / Back Navigation */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400">
        <button onClick={onNavigateHome} className="hover:text-blue-600 transition-colors cursor-pointer">
          Início
        </button>
        <span>/</span>
        <span className="text-slate-700 font-bold uppercase tracking-wider">
          {type === 'privacy' && 'Política de Privacidade'}
          {type === 'terms' && 'Termos de Uso'}
          {type === 'about' && 'Sobre a Central'}
          {type === 'contact' && 'Contato & Suporte'}
          {type === 'cookies' && 'Política de Cookies'}
          {type === 'transparency' && 'Transparência AdSense'}
          {type === 'advertisers' && 'Mídia & Anunciantes'}
        </span>
      </nav>

      {/* 1. POLÍTICA DE PRIVACIDADE */}
      {type === 'privacy' && (
        <article className="prose prose-slate max-w-none flex flex-col gap-6 text-slate-700">
          <header className="border-b border-slate-150 pb-6">
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <Shield className="w-8 h-8" />
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 m-0">Política de Privacidade</h1>
            </div>
            <p className="text-xs text-slate-400 m-0">Última atualização e revisão geral: 2026 | Conformidade Integral com LGPD e GDPR</p>
          </header>

          <section className="flex flex-col gap-4 text-sm leading-relaxed">
            <p>
              A sua privacidade é de extrema importância para o <strong>Brasil Calculadoras</strong> (acessível via <a href="https://www.brasilcalculadoras.com.br" className="text-blue-600 underline font-semibold">www.brasilcalculadoras.com.br</a>). Esta Política de Privacidade descreve de forma clara e transparente quais informações pessoais são coletadas, como são utilizadas, armazenadas e protegidas, em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018) e o Regulamento Geral de Proteção de Dados (GDPR).
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2 flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-600" /> 1. Arquivos de Log e Coleta Automática
            </h2>
            <p>
              Como a maioria dos sites e plataformas web profissionais, o Brasil Calculadoras utiliza arquivos de log e ferramentas analíticas padrão. As informações contidas nos arquivos de log incluem: endereços de Protocolo de Internet (IP), tipo de navegador, Provedor de Serviços de Internet (ISP), carimbo de data/hora, páginas de referência/saída e número de cliques. Esses dados não estão vinculados a nenhuma informação que seja pessoalmente identificável e são utilizados exclusivamente para analisar tendências, administrar o site, rastrear o movimento dos usuários e reunir informações demográficas agregadas.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2 flex items-center gap-2">
              <Server className="w-5 h-5 text-blue-600" /> 2. Cookies e Web Beacons (Google AdSense e Parceiros)
            </h2>
            <p>
              O Brasil Calculadoras utiliza cookies para armazenar informações sobre as preferências dos visitantes e otimizar a experiência do usuário.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-2 flex flex-col gap-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0">Declaração Obrigatória Google AdSense:</h3>
              <ul className="list-disc pl-5 text-xs text-slate-600 flex flex-col gap-2 m-0">
                <li>Terceiros, incluindo o <strong>Google</strong>, usam cookies para veicular anúncios com base em visitas anteriores do usuário a este ou a outros sites.</li>
                <li>Com o uso de cookies de publicidade (incluindo o cookie DART), o Google e seus parceiros podem veicular anúncios para os usuários com base nas visitas feitas aos seus sites e/ou a outros sites na Internet.</li>
                <li>Os usuários podem desativar a publicidade personalizada acessando as <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">Configurações de anúncios do Google</a>.</li>
                <li>Alternativamente, você pode desativar o uso de cookies de terceiros para publicidade personalizada acessando o site <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">aboutads.info</a>.</li>
              </ul>
            </div>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">3. Processamento de Dados das Calculadoras (Client-Side First)</h2>
            <p>
              Todas as simulações e cálculos efetuados em nossas ferramentas (como salários, rescisões trabalhistas, IMC e juros compostos) são processados <strong>localmente e de forma 100% confidencial no seu próprio navegador</strong>. O Brasil Calculadoras não armazena, transmite ou compartilha os números financeiros ou dados pessoais digitados nos formulários com servidores externos.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">4. Links para Sites de Terceiros e Fontes Oficiais</h2>
            <p>
              Nosso site contém links de referência para portais oficiais e fontes governamentais (como Caixa Econômica Federal, Receita Federal e Banco Central). Não nos responsabilizamos pelas políticas de privacidade ou conteúdos praticados por esses sites externos. Recomendamos a leitura das políticas individuais de cada portal visitado.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">5. Direitos do Titular de Dados (LGPD)</h2>
            <p>
              Você tem o direito de solicitar a confirmação da existência de tratamento de dados, acesso aos dados, correção de dados incompletos e revogação do consentimento de cookies a qualquer momento através do nosso canal de atendimento pelo e-mail: <a href="mailto:contato@brasilcalculadoras.com.br" className="text-blue-600 font-bold underline">contato@brasilcalculadoras.com.br</a>.
            </p>
          </section>
        </article>
      )}

      {/* 2. TERMOS DE USO */}
      {type === 'terms' && (
        <article className="prose prose-slate max-w-none flex flex-col gap-6 text-slate-700">
          <header className="border-b border-slate-150 pb-6">
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <FileText className="w-8 h-8" />
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 m-0">Termos e Condições de Uso</h1>
            </div>
            <p className="text-xs text-slate-400 m-0">Vigência a partir de: 2026</p>
          </header>

          <section className="flex flex-col gap-4 text-sm leading-relaxed">
            <p>
              Ao acessar e utilizar a plataforma <strong>Brasil Calculadoras</strong>, você concorda expressamente em cumprir e respeitar os seguintes Termos e Condições de Uso. Caso não concorde com qualquer disposição aqui estabelecida, solicitamos que não continue utilizando nossas ferramentas.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">1. Natureza Informativa e Isenção de Responsabilidade</h2>
            <p>
              Todas as calculadoras, simuladores e ferramentas disponibilizadas neste site foram desenvolvidas com elevado padrão técnico para fins exclusivamente <strong>educativos, pedagógicos e de planejamento informativo preliminar</strong>.
            </p>
            <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl p-4 my-2 text-xs font-medium leading-relaxed">
              <strong>Atenção Profissional:</strong> Os resultados emitidos pelas nossas calculadoras não constituem pareceres jurídicos, contábeis, financeiros ou médicos definitivos. Variações em convenções coletivas de trabalho, atualizações repentinas de alíquotas tributárias ou especificidades individuais podem alterar valores reais. Sempre consulte um profissional habilitado (advogado trabalhista, contador credenciado pelo CRC ou médico/nutricionista) antes de tomar decisões contratuais ou financeiras definitivas.
            </div>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">2. Propriedade Intelectual</h2>
            <p>
              Todo o código-fonte, layout visual, marca, banco de dados e conteúdos explicativos presentes no site são de propriedade exclusiva do Brasil Calculadoras. É proibida a reprodução parcial ou total, cópia de scripts ou engenharia reversa das ferramentas sem autorização prévia por escrito.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">3. Disponibilidade e Modificações</h2>
            <p>
              Buscamos manter o serviço ativo 24 horas por dia, 7 dias por semana. No entanto, reservamo-nos o direito de suspender, atualizar, modificar ou descontinuar qualquer funcionalidade ou ferramenta a qualquer momento, sem aviso prévio, para realizar melhorias técnicas ou adequações legislativas.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">4. Publicidade Google AdSense e Modelo de Sustentação Gratuita</h2>
            <p>
              O portal Brasil Calculadoras é mantido 100% gratuito para o público através de publicidade programática qualificada do Google AdSense. Não exigimos cadastro de cartão de crédito nem cobrança de taxas de assinatura para o uso dos simuladores.
            </p>
          </section>
        </article>
      )}

      {/* 3. SOBRE NÓS */}
      {type === 'about' && (
        <article className="prose prose-slate max-w-none flex flex-col gap-6 text-slate-700">
          <header className="border-b border-slate-150 pb-6">
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <Info className="w-8 h-8" />
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 m-0">Sobre o Brasil Calculadoras</h1>
            </div>
            <p className="text-xs text-slate-400 m-0">Conheça nossa missão, compromisso editorial e equipe técnica</p>
          </header>

          <section className="flex flex-col gap-5 text-sm leading-relaxed">
            <p className="text-base text-slate-800 font-medium">
              O <strong>Brasil Calculadoras</strong> nasceu com um propósito claro: democratizar o acesso a ferramentas matemáticas exatas, cálculos trabalhistas complexos e simulações financeiras de alto nível para todos os cidadãos brasileiros, de forma 100% gratuita e sem burocracias.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0">Foco no Usuário</h3>
                <p className="text-xs text-slate-600 m-0">Interfaces limpas, ultra-rápidas e otimizadas para celulares e computadores.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-2">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0">Rigor Técnico</h3>
                <p className="text-xs text-slate-600 m-0">Algoritmos constantemente atualizados com a legislação e tabelas vigentes.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-2">
                <Award className="w-6 h-6 text-blue-600" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0">Transparência E-E-A-T</h3>
                <p className="text-xs text-slate-600 m-0">Fontes oficiais citadas abertamente e revisões periódicas por especialistas.</p>
              </div>
            </div>

            <h2 className="text-lg font-bold text-slate-900 mt-2 mb-1">Compromisso com a Qualidade Editorial</h2>
            <p>
              Diferente de simuladores genéricos que apenas exibem campos vazios, nossa equipe editorial desenvolve guias passo a passo minuciosos para cada calculadora. Explicamos a fundamentação legal (CLT, alíquotas progressivas do INSS/IRRF, tabelas do Simples Nacional), trazemos exemplos práticos do cotidiano e respondemos às principais dúvidas dos trabalhadores e empreendedores.
            </p>

            <div className="bg-blue-50 border border-blue-150 rounded-2xl p-5 mt-2 flex flex-col gap-2">
              <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wider m-0">Contato Editorial:</h3>
              <p className="text-xs text-blue-800 m-0">
                Brasil Calculadoras<br />
                E-mail: contato@brasilcalculadoras.com.br
              </p>
            </div>
          </section>
        </article>
      )}

      {/* 4. CONTATO & FALE CONOSCO */}
      {type === 'contact' && (
        <article className="prose prose-slate max-w-none flex flex-col gap-6 text-slate-700">
          <header className="border-b border-slate-150 pb-6">
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <Mail className="w-8 h-8" />
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 m-0">Fale Conosco & Suporte</h1>
            </div>
            <p className="text-xs text-slate-400 m-0">Estamos à disposição para sugestões, dúvidas técnicas ou parcerias</p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed">
            <div className="flex flex-col gap-4">
              <p>
                Tem alguma dúvida sobre os cálculos, encontrou algum ponto de melhoria ou deseja sugerir uma nova calculadora para a nossa central? Nossa equipe responde a todas as mensagens com agilidade.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-slate-800 font-bold text-xs">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>E-mail Direto:</span>
                </div>
                <a href="mailto:contato@brasilcalculadoras.com.br" className="text-blue-600 font-mono font-bold text-sm underline select-all">
                  contato@brasilcalculadoras.com.br
                </a>
                <p className="text-xs text-slate-400 m-0">Atendimento de Segunda a Sexta, das 09h às 18h (Horário de Brasília).</p>
              </div>

              <div className="bg-blue-50/60 border border-blue-200/60 rounded-2xl p-5 flex flex-col gap-2 text-xs text-blue-900">
                <h4 className="font-bold text-blue-950 m-0 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-blue-600" /> Despacho em Tempo Real
                </h4>
                <p className="m-0 leading-relaxed text-blue-800">
                  Ao enviar o formulário, sua mensagem é encaminhada de forma segura e imediata aos canais da nossa equipe de engenharia e suporte.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {status === 'enviado' && (
                <div className="p-4 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-2xl border border-emerald-200 flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Sua mensagem foi enviada com sucesso!</p>
                    <p className="font-normal mt-0.5">Nossa equipe responderá no e-mail informado dentro de até 48 horas úteis.</p>
                  </div>
                </div>
              )}

              {status === 'erro' && (
                <div className="p-4 bg-rose-50 text-rose-800 text-xs font-semibold rounded-2xl border border-rose-200 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Campos incompletos</p>
                    <p className="font-normal mt-0.5">Por favor, preencha todos os campos obrigatórios (nome, e-mail válido e mensagem) para prosseguir.</p>
                  </div>
                </div>
              )}

              {status === 'falha' && (
                <div className="p-4 bg-amber-50 text-amber-800 text-xs font-semibold rounded-2xl border border-amber-200 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Instabilidade temporária</p>
                    <p className="font-normal mt-0.5">Não foi possível enviar pelo formulário neste instante. Por favor, envie diretamente para: <a href="mailto:contato@brasilcalculadoras.com.br" className="underline font-bold">contato@brasilcalculadoras.com.br</a>.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-4">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0">Enviar Mensagem</h3>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Seu Nome Completo *</label>
                  <input
                    type="text"
                    required
                    disabled={loading}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Seu E-mail para Retorno *</label>
                  <input
                    type="email"
                    required
                    disabled={loading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Motivo do Contato *</label>
                  <select
                    disabled={loading}
                    value={motivo}
                    onChange={(e) => setMotivo(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 disabled:opacity-60"
                  >
                    <option value="duvida">Dúvida sobre cálculo ou fórmula</option>
                    <option value="sugestao">Sugestão de nova calculadora</option>
                    <option value="erro">Relatar erro / inconsistência técnica</option>
                    <option value="privacidade">Solicitação de LGPD / Privacidade</option>
                    <option value="parceria">Parceria comercial / Anúncio</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mensagem Detalhada *</label>
                  <textarea
                    required
                    rows={4}
                    disabled={loading}
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Como podemos ajudar você hoje?"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Enviando mensagem...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </section>
        </article>
      )}

      {/* 5. POLÍTICA DE COOKIES */}
      {type === 'cookies' && (
        <article className="prose prose-slate max-w-none flex flex-col gap-6 text-slate-700">
          <header className="border-b border-slate-150 pb-6">
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <Server className="w-8 h-8" />
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 m-0">Política de Cookies e Gestão de Consentimento</h1>
            </div>
            <p className="text-xs text-slate-400 m-0">Saiba como tratamos cookies técnicos, analíticos e de publicidade</p>
          </header>

          <section className="flex flex-col gap-4 text-sm leading-relaxed">
            <p>
              O portal <strong>Brasil Calculadoras</strong> utiliza cookies estritamente necessários para permitir a navegação ágil e guardar preferências locais do usuário (como cálculos recentes e tema de exibição), além de cookies de terceiros para fins estatísticos e publicidade Google AdSense.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-2 mb-1">Tipos de Cookies Utilizados:</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cookies Essenciais:</strong> Gravados no seu navegador para manter o estado dos cálculos e navegação entre categorias.</li>
              <li><strong>Cookies Analíticos (Google Analytics 4):</strong> Permitem entender quais calculadoras são mais úteis e mensurar a performance do servidor.</li>
              <li><strong>Cookies de Publicidade (Google AdSense):</strong> Permitem ao Google exibir anúncios contextuais relevantes, auxiliando na manutenção da infraestrutura gratuita do site.</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 mt-2 mb-1">Como Gerenciar ou Desativar Cookies</h2>
            <p>
              Você pode desativar o uso de cookies a qualquer momento nas opções de privacidade do seu navegador (Google Chrome, Mozilla Firefox, Safari ou Microsoft Edge) ou através da página oficial de <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">Configurações de Anúncios do Google</a>.
            </p>
          </section>
        </article>
      )}

      {/* 6. TRANSPARÊNCIA ADSENSE */}
      {type === 'transparency' && (
        <article className="prose prose-slate max-w-none flex flex-col gap-6 text-slate-700">
          <header className="border-b border-slate-150 pb-6">
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <Award className="w-8 h-8" />
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 m-0">Transparência Google AdSense</h1>
            </div>
            <p className="text-xs text-slate-400 m-0">Nosso compromisso com a clareza publicitária e políticas do Google</p>
          </header>

          <section className="flex flex-col gap-4 text-sm leading-relaxed">
            <p>
              No <strong>Brasil Calculadoras</strong>, acreditamos na transparência absoluta com nossos leitores e usuários. Todas as nossas dezenas de ferramentas são oferecidas gratuitamente para o público em geral.
            </p>
            <p>
              Para viabilizar financeiramente a contratação de servidores, auditoria constante de fórmulas matemáticas e suporte técnico, veiculamos anúncios fornecidos pela plataforma oficial do <strong>Google AdSense</strong>.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-2 flex flex-col gap-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0">Diretrizes Seguidas Rigorosamente:</h3>
              <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1.5 m-0">
                <li><strong>Identificação Clara:</strong> Todos os blocos de publicidade são claramente delimitados e rotulados como anúncios.</li>
                <li><strong>Zero Scripts Invasivos:</strong> Não utilizamos pop-ups, pop-unders, redirecionamentos forçados ou anúncios que impeçam o uso das calculadoras.</li>
                <li><strong>ads.txt Verificado:</strong> Nosso arquivo <code>ads.txt</code> é mantido estritamente conforme as diretrizes do Google AdSense para proteger anunciantes e leitores contra fraudes.</li>
              </ul>
            </div>
          </section>
        </article>
      )}

      {/* 7. MÍDIA & ANUNCIANTES */}
      {type === 'advertisers' && (
        <article className="prose prose-slate max-w-none flex flex-col gap-6 text-slate-700">
          <header className="border-b border-slate-150 pb-6">
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <Megaphone className="w-8 h-8" />
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 m-0">Mídia & Parcerias Comerciais</h1>
            </div>
            <p className="text-xs text-slate-400 m-0">Conecte sua marca a milhares de usuários qualificados que tomam decisões financeiras diárias</p>
          </header>

          <section className="flex flex-col gap-4 text-sm leading-relaxed">
            <p>
              O <strong>Brasil Calculadoras</strong> recebe diariamente milhares de profissionais, empresários, contadores e cidadãos em busca de respostas práticas para cálculos de rescisão CLT, investimentos em juros compostos, financiamentos e planejamento financeiro.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-2 flex flex-col gap-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0">Formatos Disponíveis:</h3>
              <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1.5 m-0">
                <li>Campanhas programáticas através do inventário do Google AdSense e Google Ad Manager.</li>
                <li>Parcerias institucionais e de utilidade pública em categorias específicas.</li>
                <li>Acesso institucional a endpoints da nossa API Pública de cálculos.</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-150 rounded-2xl p-5 mt-2 flex flex-col gap-2">
              <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wider m-0">Contato com a Área de Parcerias:</h3>
              <p className="text-xs text-blue-800 m-0">
                Para propostas e mídia kit:<br />
                E-mail: <strong>comercial@brasilcalculadoras.com.br</strong> ou através da nossa página de <a href="/contato" className="underline font-bold">Contato</a>.
              </p>
            </div>
          </section>
        </article>
      )}
    </div>
  );
};
