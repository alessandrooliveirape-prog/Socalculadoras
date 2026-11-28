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
  const [fieldErrors, setFieldErrors] = useState<{ nome?: string; email?: string; mensagem?: string }>({});

  const validateField = (field: 'nome' | 'email' | 'mensagem', val: string) => {
    const trimmed = val.trim();
    if (field === 'nome') {
      return trimmed.length < 2 ? 'Informe seu nome completo.' : '';
    }
    if (field === 'email') {
      return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ? 'Informe um e-mail válido para retorno.' : '';
    }
    return trimmed.length < 5 ? 'Escreva sua mensagem com pelo menos 5 caracteres.' : '';
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNome = nome.trim();
    const cleanEmail = email.trim();
    const cleanMensagem = mensagem.trim();

    const nomeErr = validateField('nome', nome);
    const emailErr = validateField('email', email);
    const msgErr = validateField('mensagem', mensagem);

    if (nomeErr || emailErr || msgErr) {
      setFieldErrors({
        ...(nomeErr ? { nome: nomeErr } : {}),
        ...(emailErr ? { email: emailErr } : {}),
        ...(msgErr ? { mensagem: msgErr } : {}),
      });
      setStatus('erro');
      return;
    }
    setFieldErrors({});

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
            <p className="text-xs text-slate-400 m-0">Última atualização e revisão geral: 2026 | Conformidade Integral com LGPD (Lei nº 13.709/2018) e GDPR</p>
          </header>

          <section className="flex flex-col gap-4 text-sm leading-relaxed">
            <p>
              A sua privacidade e a segurança dos seus dados são prioridades absolutas para o portal <strong>Brasil Calculadoras</strong> (acessível em <a href="https://www.brasilcalculadoras.com.br" className="text-blue-600 underline font-semibold">https://www.brasilcalculadoras.com.br</a>). Esta Política de Privacidade descreve de maneira transparente e detalhada como eventuais informações técnicas de navegação são tratadas, quais cookies publicitários e analíticos podem operar em nossas páginas e como garantimos a confidencialidade dos valores simulados em nossas ferramentas.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2 flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-600" /> 1. Processamento Client-Side nas Calculadoras (Sigilo de Dados Inseridos)
            </h2>
            <p>
              Todas as simulações realizadas em nossas 175 calculadoras — incluindo salários brutos, cálculos de rescisão trabalhista CLT, rendimentos de investimentos financeiros, simulações de financiamento habitacional ou veicular, peso, altura e indicadores clínicos de saúde — são processadas <strong>integralmente de forma local no navegador do usuário (Client-Side)</strong>. O Brasil Calculadoras não transmite, não armazena em servidores remotos, não indexa e não compartilha os valores numéricos digitados nos campos de simulação com terceiros. Caso você utilize recursos opcionais de histórico recente na página inicial, essas referências ficam restritas exclusivamente ao armazenamento local (<code>localStorage</code>) do seu próprio dispositivo e podem ser apagadas a qualquer instante.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2 flex items-center gap-2">
              <Server className="w-5 h-5 text-blue-600" /> 2. Registros Técnicos de Acesso (Logs) e Telemetria Anônima
            </h2>
            <p>
              Assim como a generalidade dos portais web modernos hospedados em nuvem, nossos servidores e provedores de CDN registram logs técnicos estritamente voltados à segurança cibernética, prevenção de ataques automatizados e medição agregada de desempenho. Esses registros técnicos contemplam endereço IP anonimizado ou temporário, tipo de navegador, sistema operacional, carimbo de data e hora, página de origem e tempo de carregamento. Adicionalmente, utilizamos o Google Analytics 4 (GA4) para compreender de forma agregada e estatística quais ferramentas e guias educativos despertam maior interesse, ajudando nossa equipe a priorizar atualizações editoriais.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">3. Programas de Afiliados, Parceiros Comerciais e Cookies</h2>
            <p>
              Para sustentar a gratuidade integral de todas as 175 calculadoras e guias sem cobrança de assinatura ou cadastro, o Brasil Calculadoras participa de programas oficiais de afiliados (<strong>Amazon Associados</strong>, <strong>Shopee Afiliados</strong> e <strong>Mercado Livre Afiliados</strong>) e de parcerias comerciais diretas claramente identificadas. Quando você clica em um botão de recomendação e realiza uma compra qualificada no site parceiro, podemos receber uma comissão sem qualquer acréscimo no valor pago por você.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-2 flex flex-col gap-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0">Cláusula de Transparência sobre Cookies de Parceiros &amp; Telemetria:</h3>
              <ul className="list-disc pl-5 text-xs text-slate-600 flex flex-col gap-2 m-0">
                <li><strong>Atribuição de Afiliados:</strong> Ao acessar links externos marcados com <code>rel="nofollow sponsored"</code>, as plataformas parceiras (Amazon, Shopee ou Mercado Livre) utilizam cookies próprios em seus respectivos domínios para atribuir a indicação comercial.</li>
                <li><strong>Sigilo Absoluto das Simulações:</strong> Os números digitados nas calculadoras nunca são enviados a parceiros comerciais, lojas afiliadas ou redes de anúncios.</li>
                <li><strong>Controle de Preferências:</strong> Você pode gerenciar ou bloquear cookies de terceiros diretamente no navegador ou ajustar eventuais preferências nas <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">Configurações de Anúncios do Google</a> e em <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">aboutads.info/choices</a>.</li>
              </ul>
            </div>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">4. Dados Enviados Voluntariamente no Formulário de Contato</h2>
            <p>
              Quando o usuário opta livremente por preencher o formulário da página <a href="/contato" className="text-blue-600 underline font-semibold">Fale Conosco</a> para reportar sugestões, dúvidas de fórmula ou solicitações institucionais, nome, endereço de e-mail e conteúdo da mensagem são processados exclusivamente para responder ao atendimento solicitado. Não comercializamos, alugamos nem cedemos listas de e-mails para terceiros ou disparo de marketing não solicitado.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">5. Direitos do Titular pela LGPD e Canal de Atendimento</h2>
            <p>
              Em total alinhamento ao artigo 18 da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), asseguramos ao titular o direito de confirmar a existência de tratamento, solicitar acesso ou correção de eventuais dados enviados em atendimento, requerer exclusão de mensagens de suporte e revogar consentimento de cookies a qualquer momento pelo navegador ou por meio do e-mail institucional de privacidade e DPO: <a href="mailto:contato@brasilcalculadoras.com.br" className="text-blue-600 font-bold underline">contato@brasilcalculadoras.com.br</a>.
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
            <p className="text-xs text-slate-400 m-0">Versão revisada e vigente em 2026 | Regras de Acesso, Responsabilidade e Propriedade</p>
          </header>

          <section className="flex flex-col gap-4 text-sm leading-relaxed">
            <p>
              Bem-vindo ao <strong>Brasil Calculadoras</strong>. Ao acessar, navegar ou utilizar qualquer calculadora interativa, guia educativo, artigo técnico ou documentação pública disponível no domínio <code>brasilcalculadoras.com.br</code>, você declara ciência e concordância integral com estes Termos e Condições de Uso. Caso discorde de qualquer cláusula, recomenda-se interromper imediatamente a utilização da plataforma.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">1. Caráter Exclusivamente Informativo e Educacional (Não Substitui Conferência Oficial)</h2>
            <p>
              Todas as calculadoras, tabelas referenciais, exemplos matemáticos e artigos explicativos publicados neste portal possuem finalidade estritamente <strong>informativa, educativa e de apoio preliminar ao planejamento financeiro, trabalhista, tributário, acadêmico e de bem-estar</strong>. Embora nossa equipe editorial revise periodicamente faixas progressivas de INSS, IRRF, Simples Nacional, normas da CLT e equações científicas segundo fontes públicas oficiais, os simuladores não emitem certidões, laudos contábeis, prescrições médicas nem pareceres jurídicos vinculantes.
            </p>
            <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl p-4 my-2 text-xs font-medium leading-relaxed">
              <strong>Aviso Legal Importante:</strong> Os resultados simulados dependem integralmente das premissas digitadas pelo usuário e não contemplam especificidades de convenções coletivas sindicais regionais, decisões judiciais individuais, alterações legislativas supervenientes publicadas entre ciclos de atualização ou quadros clínicos particulares. Antes de assinar termos de rescisão trabalhista, contratos de financiamento, declarações fiscais ou iniciar dietas restritivas, efetue conferência oficial junto a contador registrado no CRC, advogado habilitado, instituição bancária ou médico/nutricionista.
            </div>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">2. Ausência de Garantia e Limitação de Responsabilidade</h2>
            <p>
              Empregamos boas práticas de engenharia de software e testes contínuos de precisão numérica para evitar falhas de arredondamento ou inconsistências de lógica. Todavia, o serviço é disponibilizado no estado em que se encontra ("as is"), sem garantia de disponibilidade ininterrupta diante de manutenções programadas ou eventuais instabilidades de rede. O Brasil Calculadoras e seus mantenedores não se responsabilizam por prejuízos diretos ou indiretos decorrentes de decisões patrimoniais, comerciais, tributárias ou pessoais baseadas isoladamente em projeções estimadas neste site.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">3. Propriedade Intelectual e Uso Permitido da API Pública</h2>
            <p>
              Todo o conteúdo editorial original — incluindo textos dos guias educativos, estrutura das páginas, design de interface, código-fonte das calculadoras e logotipos — é protegido pela legislação brasileira de direitos autorais e propriedade intelectual. É autorizado o compartilhamento livre de links para nossas páginas e a impressão ou exportação pessoal dos resultados simulados para conferência própria. É vedada a cópia automatizada em massa (scraping abusivo), a clonagem integral da base editorial para sites espelho ou o uso comercial indevido da marca sem consentimento prévio por escrito. Endpoints listados em <a href="/desenvolvedores" className="text-blue-600 underline font-semibold">/desenvolvedores</a> seguem os termos específicos de uso responsável documentados naquela seção.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">4. Sustentação por Afiliados, Patrocínios e Atualizações dos Termos</h2>
            <p>
              A plataforma mantém-se gratuita ao público sem barreiras de cadastro graças a recomendações contextuais em programas de afiliados (Amazon, Shopee e Mercado Livre), parcerias diretas com anunciantes e links informativos transparentes. Reservamo-nos o direito de atualizar estes Termos de Uso e ampliar ou refatorar ferramentas a qualquer momento para acompanhar mudanças tributárias, melhorias de usabilidade ou exigências regulatórias aplicáveis no Brasil.
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
            <p className="text-xs text-slate-400 m-0">Nossa missão editorial, metodologia de revisão matemática e padrão de transparência editorial</p>
          </header>

          <section className="flex flex-col gap-5 text-sm leading-relaxed">
            <p className="text-base text-slate-800 font-medium">
              O <strong>Brasil Calculadoras</strong> nasceu com o compromisso de tornar o cálculo técnico acessível, verificável e compreensível para trabalhadores, estudantes, famílias e empreendedores brasileiros. Reunimos 175 simuladores especializados em 21 áreas práticas e guias educativos aprofundados — 100% gratuitos, sem exigência de login e executados diretamente no seu navegador.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0">Foco na Experiência</h3>
                <p className="text-xs text-slate-600 m-0">Interfaces responsivas de carregamento instantâneo, leitura confortável no celular e buscas inteligentes sem dependência de acentuação.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-2">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0">Metodologia Auditável</h3>
                <p className="text-xs text-slate-600 m-0">Cada ferramenta explicita a fórmula matemática utilizada, exemplos práticos comentados e faixas oficiais de referência de 2026.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-2">
                <Award className="w-6 h-6 text-blue-600" />
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0">Fontes Oficiais e Revisão Técnica</h3>
                <p className="text-xs text-slate-600 m-0">Guias originais sem texto genérico, com citação direta a normas da Receita Federal, CLT, Banco Central, IBGE, OMS e INMETRO.</p>
              </div>
            </div>

            <h2 className="text-lg font-bold text-slate-900 mt-2 mb-1">Como Revisamos Nossos Cálculos e Conteúdos</h2>
            <p>
              Diferente de diretórios automatizados que publicam formulários isolados sem explicação, adotamos uma metodologia editorial em três camadas. Primeiro, os modelos matemáticos são construídos com foco na legislação e nos padrões brasileiros — contemplando fatiamento progressivo de INSS e IRRF, aviso prévio proporcional, sistemas SAC e Tabela Price, alíquotas estaduais e métricas empresariais como Markup vs Margem e Fator R do Simples Nacional.
            </p>
            <p>
              Segundo, cada calculadora e hub de categoria conta com guia técnico próprio estruturado em seções didáticas, passo a passo de preenchimento, simulação numérica comentada e perguntas frequentes reais. Terceiro, mantemos na seção <a href="/guias" className="text-blue-600 underline font-semibold">Guias &amp; Artigos</a> publicações longas periodicamente atualizadas para conectar ferramentas individuais a uma visão completa de educação financeira e cidadania trabalhista.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-2 mb-1">Independência Editorial e Canal de Melhoria Contínua</h2>
            <p>
              O portal opera de forma independente, financiado de forma transparente por parcerias comerciais diretas e programas de afiliados sinalizados (Amazon Associados, Shopee Afiliados e Mercado Livre Afiliados), mantendo todas as calculadoras livres de paywalls ou vendas casadas. Sugestões de novas ferramentas, apontamentos sobre mudanças legais recentes ou dúvidas conceituais enviadas pelos visitantes em <a href="/contato" className="text-blue-600 underline font-semibold">Contato</a> alimentam diretamente nosso ciclo contínuo de manutenção estrutural.
            </p>

            <div className="bg-blue-50 border border-blue-150 rounded-2xl p-5 mt-2 flex flex-col gap-2">
              <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wider m-0">Identidade &amp; Contato Editorial:</h3>
              <p className="text-xs text-blue-800 m-0">
                Portal: Brasil Calculadoras (<code>https://www.brasilcalculadoras.com.br</code>)<br />
                E-mail Institucional e DPO: <strong>contato@brasilcalculadoras.com.br</strong>
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
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 m-0">Fale Conosco &amp; Suporte Editorial</h1>
            </div>
            <p className="text-xs text-slate-400 m-0">Canal aberto para sugestões de ferramentas, revisões de fórmulas, suporte técnico e privacidade</p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed">
            <div className="flex flex-col gap-4">
              <p>
                A evolução contínua do <strong>Brasil Calculadoras</strong> depende diretamente do diálogo com nossos leitores, profissionais de contabilidade, estudantes, professores e usuários cotidianos. Utilize este canal sempre que quiser sugerir uma nova calculadora, solicitar atualização normativa de alguma tabela, reportar eventual comportamento inesperado em algum navegador ou esclarecer dúvidas sobre nossa política de privacidade (LGPD).
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-slate-800 font-bold text-xs">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>E-mail Direto de Atendimento:</span>
                </div>
                <a href="mailto:contato@brasilcalculadoras.com.br" className="text-blue-600 font-mono font-bold text-sm underline select-all">
                  contato@brasilcalculadoras.com.br
                </a>
                <p className="text-xs text-slate-500 m-0">Horário padrão de triagem e resposta: Segunda a Sexta, das 09h às 18h (Horário de Brasília), com prazo médio de retorno de até 48 horas úteis.</p>
              </div>

              <div className="bg-blue-50/60 border border-blue-200/60 rounded-2xl p-5 flex flex-col gap-2 text-xs text-blue-900">
                <h4 className="font-bold text-blue-950 m-0 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-blue-600" /> Roteamento Imediato &amp; Privacidade
                </h4>
                <p className="m-0 leading-relaxed text-blue-800">
                  Ao enviar sua mensagem pelo formulário ao lado, o protocolo é entregue instantaneamente à nossa equipe editorial e de engenharia via servidor seguro. Não compartilhamos seu endereço de e-mail nem os dados informados com terceiros.
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
                <p className="text-[11px] text-slate-500 m-0">Campos marcados com <span aria-hidden="true">*</span> são obrigatórios.</p>
                
                <div>
                  <label htmlFor="contato-nome" className="block text-xs font-semibold text-slate-700 mb-1">Seu Nome Completo <span aria-hidden="true">*</span></label>
                  <input
                    id="contato-nome"
                    type="text"
                    required
                    autoComplete="name"
                    enterKeyHint="next"
                    disabled={loading}
                    value={nome}
                    aria-invalid={Boolean(fieldErrors.nome)}
                    aria-describedby={fieldErrors.nome ? 'contato-nome-err' : undefined}
                    onChange={(e) => {
                      const v = e.target.value;
                      setNome(v);
                      if (fieldErrors.nome) setFieldErrors((prev) => ({ ...prev, nome: validateField('nome', v) || undefined }));
                    }}
                    onInvalid={(e) => {
                      const err = validateField('nome', e.currentTarget.value);
                      if (err) setFieldErrors((prev) => ({ ...prev, nome: err }));
                    }}
                    onBlur={(e) => {
                      const err = validateField('nome', e.target.value);
                      setFieldErrors((prev) => ({ ...prev, nome: err || undefined }));
                    }}
                    placeholder="Digite seu nome"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 disabled:opacity-60"
                  />
                  {fieldErrors.nome && <span id="contato-nome-err" className="field-error-msg">{fieldErrors.nome}</span>}
                </div>

                <div>
                  <label htmlFor="contato-email" className="block text-xs font-semibold text-slate-700 mb-1">Seu E-mail para Retorno <span aria-hidden="true">*</span></label>
                  <input
                    id="contato-email"
                    type="email"
                    required
                    autoComplete="email"
                    spellCheck={false}
                    enterKeyHint="next"
                    disabled={loading}
                    value={email}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? 'contato-email-err' : undefined}
                    onChange={(e) => {
                      const v = e.target.value;
                      setEmail(v);
                      if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: validateField('email', v) || undefined }));
                    }}
                    onInvalid={(e) => {
                      const err = validateField('email', e.currentTarget.value);
                      if (err) setFieldErrors((prev) => ({ ...prev, email: err }));
                    }}
                    onBlur={(e) => {
                      const err = validateField('email', e.target.value);
                      setFieldErrors((prev) => ({ ...prev, email: err || undefined }));
                    }}
                    placeholder="seuemail@exemplo.com"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 disabled:opacity-60"
                  />
                  {fieldErrors.email && <span id="contato-email-err" className="field-error-msg">{fieldErrors.email}</span>}
                </div>

                <div>
                  <label htmlFor="contato-motivo" className="block text-xs font-semibold text-slate-700 mb-1">Motivo do Contato <span aria-hidden="true">*</span></label>
                  <select
                    id="contato-motivo"
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
                  <label htmlFor="contato-mensagem" className="block text-xs font-semibold text-slate-700 mb-1">Mensagem Detalhada <span aria-hidden="true">*</span></label>
                  <textarea
                    id="contato-mensagem"
                    required
                    rows={4}
                    disabled={loading}
                    value={mensagem}
                    aria-invalid={Boolean(fieldErrors.mensagem)}
                    aria-describedby={fieldErrors.mensagem ? 'contato-mensagem-err' : undefined}
                    onChange={(e) => {
                      const v = e.target.value;
                      setMensagem(v);
                      if (fieldErrors.mensagem) setFieldErrors((prev) => ({ ...prev, mensagem: validateField('mensagem', v) || undefined }));
                    }}
                    onInvalid={(e) => {
                      const err = validateField('mensagem', e.currentTarget.value);
                      if (err) setFieldErrors((prev) => ({ ...prev, mensagem: err }));
                    }}
                    onBlur={(e) => {
                      const err = validateField('mensagem', e.target.value);
                      setFieldErrors((prev) => ({ ...prev, mensagem: err || undefined }));
                    }}
                    placeholder="Como podemos ajudar você hoje?"
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500 disabled:opacity-60"
                  />
                  {fieldErrors.mensagem && <span id="contato-mensagem-err" className="field-error-msg">{fieldErrors.mensagem}</span>}
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
            <p className="text-xs text-slate-400 m-0">Transparência completa sobre cookies técnicos, medições analíticas (GA4) e links de afiliados parceiros</p>
          </header>

          <section className="flex flex-col gap-4 text-sm leading-relaxed">
            <p>
              O portal <strong>Brasil Calculadoras</strong> utiliza cookies estritamente necessários e identificadores locais do navegador para preservar preferências operacionais, além de cookies estatísticos e rastreamento de atribuição em links externos de afiliados parceiros, sempre em conformidade com a Lei Geral de Proteção de Dados (LGPD). Nenhum cookie comercial é utilizado para capturar os valores numéricos que você digita dentro de nossas calculadoras interativas.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-2 mb-1">Categorias de Cookies e Armazenamento Local</h2>
            <ul className="list-disc pl-5 space-y-2.5">
              <li><strong>Cookies Essenciais e LocalStorage Funcional:</strong> Guardam no próprio dispositivo suas escolhas de consentimento de privacidade (<code>cc_adsense_consent</code>), o histórico rápido das últimas calculadoras acessadas (<code>brasilcalculadoras_recent_tools_v1</code>) e preferências visuais de navegação, garantindo fluidez sem exigir criação de conta.</li>
              <li><strong>Cookies Analíticos Agregados (Google Analytics 4):</strong> Mensuram métricas agregadas de audiência, páginas mais consultadas, cliques em recomendações e desempenho técnico de carregamento para orientar melhorias contínuas nas calculadoras e nos guias editoriais.</li>
              <li><strong>Cookies de Atribuição de Afiliados (Amazon, Shopee e Mercado Livre):</strong> Quando você clica voluntariamente em um link de recomendação de produto para visitar uma loja parceira, o varejista de destino utiliza cookies próprios em seu domínio para contabilizar eventual comissão de indicação sem alterar o preço final ao consumidor.</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 mt-2 mb-1">Como Gerenciar, Revogar ou Bloquear Cookies</h2>
            <p>
              O visitante mantém controle total sobre o armazenamento de cookies no próprio navegador. É possível limpar dados do site ou bloquear cookies de terceiros nas configurações de privacidade do Google Chrome, Mozilla Firefox, Apple Safari ou Microsoft Edge. Para ajustar especificamente a personalização da rede Google, acesse a página oficial de <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">Configurações de Anúncios do Google</a> ou consulte orientações complementares em nossa <a href="/politica-de-privacidade" className="text-blue-600 underline font-semibold">Política de Privacidade</a>.
            </p>
          </section>
        </article>
      )}

      {/* 6. TRANSPARÊNCIA, AFILIADOS & MODELO EDITORIAL */}
      {type === 'transparency' && (
        <article className="prose prose-slate max-w-none flex flex-col gap-6 text-slate-700">
          <header className="border-b border-slate-150 pb-6">
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <Award className="w-8 h-8" />
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 m-0">Transparência, Afiliados &amp; Modelo Editorial</h1>
            </div>
            <p className="text-xs text-slate-400 m-0">Compromisso público com recomendações úteis, ausência de scripts invasivos e sustentação gratuita</p>
          </header>

          <section className="flex flex-col gap-4 text-sm leading-relaxed">
            <p>
              No <strong>Brasil Calculadoras</strong>, todas as 175 calculadoras especializadas, os 21 hubs de categoria e os guias aprofundados da seção editorial estão disponíveis de forma irrestrita e sem assinatura paga (zero paywall). Nossa infraestrutura de servidores em nuvem, auditoria periódica das tabelas de INSS, IRRF e CLT e criação contínua de artigos educativos são financiadas de forma transparente por <strong>recomendações contextuais de afiliados</strong> e <strong>patrocínios diretos</strong> em espaço sinalizado.
            </p>
            <p>
              Participamos dos programas oficiais da <strong>Amazon Associados</strong>, <strong>Shopee Afiliados</strong> e <strong>Mercado Livre Afiliados</strong>. Selecionamos livros técnicos, equipamentos e utilidades realmente relacionados a cada calculadora, utilizando estritamente a marcação <code>rel="nofollow sponsored"</code> e informando de modo claro ao leitor quando há link comissionado.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-2 flex flex-col gap-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0">Diretrizes de Qualidade Comercial e UX:</h3>
              <ul className="list-disc pl-5 text-xs text-slate-600 space-y-2 m-0">
                <li><strong>Zero Pop-ups ou Redirecionamentos Intrusivos:</strong> Banimos completamente pop-unders, anúncios que bloqueiam botões das calculadoras ou scripts de terceiros incompatíveis com o bem-estar do visitante.</li>
                <li><strong>Separação Editorial Clara:</strong> Conteúdos educativos, fórmulas e resultados simulados permanecem estritamente independentes dos blocos de recomendações afiliadas e espaços de parceiros.</li>
                <li><strong>Sem Custo Extra ao Usuário:</strong> O preço exibido nas lojas parceiras permanece idêntico ao acesso direto; a comissão é paga exclusivamente pela plataforma varejista.</li>
              </ul>
            </div>
          </section>
        </article>
      )}

      {/* 7. MÍDIA KIT & PATROCÍNIO DIRETO */}
      {type === 'advertisers' && (
        <article className="prose prose-slate max-w-none flex flex-col gap-6 text-slate-700">
          <header className="border-b border-slate-150 pb-6">
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <Megaphone className="w-8 h-8" />
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 m-0">Mídia Kit &amp; Patrocínio Direto</h1>
            </div>
            <p className="text-xs text-slate-400 m-0">Alcance audiências brasileiras com alta intenção prática em finanças pessoais, carreira CLT/PJ, imóveis, veículos e saúde</p>
          </header>

          <section className="flex flex-col gap-5 text-sm leading-relaxed">
            <p>
              O <strong>Brasil Calculadoras</strong> atende diariamente leitores brasileiros em momentos concretos de decisão financeira, profissional e familiar: trabalhadores conferindo verbas de rescisão CLT e décimo terceiro, investidores comparando juros compostos e IPCA, compradores simulando financiamentos imobiliários e de veículos, estudantes revisando médias do ENEM e empreendedores calculando precificação e Simples Nacional.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-1">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0 mb-2">1. Patrocínio de Categoria</h3>
                <p className="text-xs text-slate-600 m-0 leading-relaxed">
                  Exclusividade de marca nos hubs e em todas as calculadoras de uma vertical inteira (ex: Finanças, Trabalhista CLT/PJ, Imobiliário ou Veículos).
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0 mb-2">2. Destaque Contextual Pós-Cálculo</h3>
                <p className="text-xs text-slate-600 m-0 leading-relaxed">
                  Card nativo logo abaixo do resultado simulado, conectando sua corretora, contabilidade PJ, banco digital ou seguro no exato momento da decisão.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0 mb-2">3. Guia Editorial Patrocinado</h3>
                <p className="text-xs text-slate-600 m-0 leading-relaxed">
                  Artigo técnico completo na seção <code>/guias</code> com sinalização transparente de parceria e links contextuais para suas soluções.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0 mb-2">4. Widgets &amp; Licenciamento B2B</h3>
                <p className="text-xs text-slate-600 m-0 leading-relaxed">
                  Integração de calculadoras e endpoints JSON 2026 documentados em <a href="/desenvolvedores" className="text-blue-600 underline font-semibold">/desenvolvedores</a> para portais e fintechs.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wider m-0">Propostas Comerciais &amp; Parcerias Diretas</h3>
                <p className="text-xs text-blue-800 m-0">
                  E-mail direto: <strong>contato@brasilcalculadoras.com.br</strong>
                </p>
              </div>
              <a
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors no-underline shrink-0"
              >
                <Mail className="w-4 h-4" />
                <span>Solicitar Mídia Kit</span>
              </a>
            </div>
          </section>
        </article>
      )}
    </div>
  );
};
