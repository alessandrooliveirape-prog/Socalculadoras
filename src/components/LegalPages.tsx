import React from 'react';
import { Shield, FileText, Info, Mail, CheckCircle, Lock, Server, Users, Award } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'about' | 'contact';
  onNavigateHome: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigateHome }) => {
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
        </span>
      </nav>

      {type === 'privacy' && (
        <article className="prose prose-slate max-w-none flex flex-col gap-6 text-slate-700">
          <header className="border-b border-slate-150 pb-6">
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <Shield className="w-8 h-8" />
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 m-0">Política de Privacidade</h1>
            </div>
            <p className="text-xs text-slate-400 m-0">Última atualização e revisão geral: 27 de Junho de 2026</p>
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

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">3. Processamento de Dados das Calculadoras</h2>
            <p>
              Todas as simulações e cálculos efetuados em nossas ferramentas (como salários, rescisões trabalhistas, IMC e juros compostos) são processados <strong>localmente e de forma 100% confidencial no seu próprio navegador</strong>. O Brasil Calculadoras não armazena, transmite ou compartilha os números financeiros ou dados pessoais digitados nos formulários com servidores externos.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">4. Links para Sites de Terceiros</h2>
            <p>
              Nosso site contém links de referência para portais oficiais e fontes governamentais (como Caixa Econômica Federal, Receita Federal e Banco Central). Não nos responsabilizamos pelas políticas de privacidade ou conteúdos praticados por esses sites externos. Recomendamos a leitura das políticas individuais de cada portal visitado.
            </p>

            <h2 className="text-lg font-bold text-slate-900 mt-4 mb-2">5. Direitos do Usuário (LGPD)</h2>
            <p>
              Você tem o direito de solicitar a confirmação da existência de tratamento de dados, acesso aos dados, correção de dados incompletos e revogação do consentimento de cookies a qualquer momento através do nosso canal de atendimento pelo e-mail: <a href="mailto:contato@brasilcalculadoras.com.br" className="text-blue-600 font-bold underline">contato@brasilcalculadoras.com.br</a>.
            </p>
          </section>
        </article>
      )}

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
          </section>
        </article>
      )}

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
              <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wider m-0">Identificação da Mantenedora:</h3>
              <p className="text-xs text-blue-800 m-0">
                Brasil Calculadoras Tecnologia & Mídia Digital Ltd.<br />
                CNPJ: 41.524.305/0001-90<br />
                E-mail corporativo: contato@brasilcalculadoras.com.br
              </p>
            </div>
          </section>
        </article>
      )}

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
                <p className="text-xs text-slate-400 m-0">Atendimento de Segunda a Sexta, das 09h às 18h.</p>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Obrigado pela mensagem! Responderemos em breve.'); }} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider m-0">Enviar Mensagem Rápida</h3>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Seu Nome</label>
                <input type="text" required placeholder="Digite seu nome" className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Seu E-mail</label>
                <input type="email" required placeholder="seuemail@exemplo.com" className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Mensagem</label>
                <textarea required rows={4} placeholder="Como podemos ajudar?" className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 rounded-xl transition-colors cursor-pointer shadow-sm">
                Enviar Mensagem
              </button>
            </form>
          </section>
        </article>
      )}
    </div>
  );
};
