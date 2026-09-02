import { CalculatorDef } from '../types';

export interface CalculatorSeoContent {
  title: string;
  description: string;
  whatIs: string;
  howItWorks: string;
  practicalExample: string;
  whenToUse: string;
  importantTips: string;
  sources: { name: string; url: string }[];
  lastUpdated: string;
  faq: { q: string; a: string }[];
}

export interface CategoryHubSeoContent {
  title: string;
  description: string;
  introduction: string;
  importance: string;
  faq: { q: string; a: string }[];
}

export const CATEGORY_SLUG_MAP: Record<string, string> = {
  'financas-negocios': 'financas',
  'saude-dietas': 'saude',
  'trabalhista-profissoes': 'profissoes',
  'matematica-escola': 'matematica',
  'imobiliario-aluguel': 'imobiliario',
  'veiculos-combustivel': 'veiculos',
  'estatistica-metricas': 'estatistica',
  'juridico-impostos': 'juridico',
  'utilidades-casa': 'utilitarios',
  'aposentadoria-futuro': 'aposentadoria',
  'agronegocio-campo': 'agronegocio',
  'logistica-fretes': 'logistica',
  'construcao-reformas': 'construcao',
  'gastronomia-eventos': 'eventos',
  'energia-sustentabilidade': 'energia',
  'educacao-enem': 'educacao',
  'quimica-fizica-ciencia': 'quimica_fisica', // Wait, quimica-fizica or quimica-fisica? The original had quimica-fisica-ciencia
  'quimica-fisica-ciencia': 'quimica_fisica',
  'tecnologia-computacao': 'tecnologia',
  'pets-animais': 'pets',
  'datas-planejamento': 'datas',
  'maternidade-bebe': 'maternidade'
};

export const CATEGORY_KEY_TO_SLUG: Record<string, string> = {
  financas: 'financas-negocios',
  saude: 'saude-dietas',
  profissoes: 'trabalhista-profissoes',
  matematica: 'matematica-escola',
  imobiliario: 'imobiliario-aluguel',
  veiculos: 'veiculos-combustivel',
  estatistica: 'estatistica-metricas',
  juridico: 'juridico-impostos',
  utilitarios: 'utilidades-casa',
  aposentadoria: 'aposentadoria-futuro',
  agronegocio: 'agronegocio-campo',
  logistica: 'logistica-fretes',
  construcao: 'construcao-reformas',
  eventos: 'gastronomia-eventos',
  energia: 'energia-sustentabilidade',
  educacao: 'educacao-enem',
  quimica_fisica: 'quimica-fisica-ciencia',
  tecnologia: 'tecnologia-computacao',
  pets: 'pets-animais',
  datas: 'datas-planejamento',
  maternidade: 'maternidade-bebe'
};

export const CATEGORY_MAP_RAW: Record<string, string> = {
  financas: 'Finanças & Negócios',
  saude: 'Saúde & Dietas',
  profissoes: 'Trabalhista & Profissões',
  matematica: 'Matemática & Escola',
  imobiliario: 'Imobiliário & Aluguel',
  veiculos: 'Veículos & Combustível',
  estatistica: 'Estatística & Métricas',
  juridico: 'Jurídico & Impostos',
  utilitarios: 'Utilidades & Casa',
  aposentadoria: 'Aposentadoria & Futuro',
  agronegocio: 'Agronegócio & Campo',
  logistica: 'Logística & Fretes',
  construcao: 'Construção & Reformas',
  eventos: 'Gastronomia & Eventos',
  energia: 'Energia & Sustentabilidade',
  educacao: 'Educação & ENEM',
  quimica_fisica: 'Química & Física',
  tecnologia: 'Tecnologia & Computação',
  pets: 'Pets & Animais',
  datas: 'Datas & Planejamento',
  maternidade: 'Maternidade & Bebê'
};

// Bespoke database for popular calculators (EEAT Content and intent FAQs)
const CORE_SEO_DATABASE: Record<string, Partial<CalculatorSeoContent>> = {
  'calculadora-ganhos-adsense': {
    title: 'Calculadora de Ganhos AdSense 2026 | Simule seus Lucros',
    description: 'Estime seus ganhos mensais e anuais com o Google AdSense 2026. Calcule o faturamento estimado de acordo com a categoria de site, tráfego e região dos visitantes.',
    whatIs: 'A Calculadora de Ganhos do Google AdSense 2026 é um simulador avançado desenvolvido para criadores de conteúdo, webmasters, blogueiros e profissionais de marketing digital. Ela permite estimar a receita gerada por publicidade de display em sites, portais de conteúdo e blogs com base nas taxas de leilão de anunciantes (CPC e RPM) vigentes. Entender a estimativa de faturamento é crucial para direcionar estratégias de aquisição de tráfego orgânico (SEO) e planejar a viabilidade financeira e o ROI de projetos digitais antes de investir tempo e recursos na produção de conteúdo em larga escala.',
    howItWorks: 'A ferramenta simula os ganhos cruzando três variáveis fundamentais: o nicho temático do seu site (que define a intenção de compra e o interesse dos anunciantes), a origem demográfica dos visitantes (que dita o poder de compra e o valor médio pago por clique na região) e o volume de tráfego mensal qualificado. As projeções são baseadas em fórmulas matemáticas que calculam as impressões totais de banners por página, aplicam taxas de clique estimadas (CTR) e o custo médio por clique (CPC) para o nicho escolhido, resultando nos ganhos finais e no RPM médio da página.',
    practicalExample: 'Se o seu blog de Tecnologia e Computação recebe 100.000 visitantes únicos por mês, com uma média de 2,2 páginas visitadas por sessão, isso resulta em 220.000 visualizações de páginas mensais. Considerando que você exibe 3 anúncios por página e possui um CTR médio de 1,8% com um CPC de R$ 0,95 para tráfego latino-americano/brasileiro, seu site gerará cerca de 11.880 cliques nos anúncios. Isso se traduz em um faturamento mensal estimado de R$ 11.286,00 e um RPM médio de R$ 51,30.',
    whenToUse: 'Use esta ferramenta sempre que estiver planejando criar um novo blog, mudar de nicho editorial, projetar o faturamento de portais existentes, ou comparar os ganhos reais do seu painel do AdSense com as estimativas médias do mercado de publicidade programática.',
    importantTips: 'Para maximizar os lucros com AdSense, invista em SEO de cauda longa (atraindo usuários altamente segmentados), otimize a velocidade de carregamento do site e utilize formatos de anúncios nativos e âncoras (auto ads), que historicamente aumentam o CTR geral sem prejudicar gravemente a experiência do usuário.',
    sources: [
      { name: 'Ajuda do Google AdSense - Como Funciona', url: 'https://support.google.com/adsense/answer/6242051' },
      { name: 'Métricas de desempenho do AdSense', url: 'https://support.google.com/adsense/answer/2923297' }
    ],
    faq: [
      { q: 'O AdSense paga por cliques ou por visualizações?', a: 'Historicamente o AdSense pagava majoritariamente por cliques (CPC), mas nas atualizações recentes ele passou a priorizar a remuneração por impressões visualizadas (CPM). Nossa calculadora simula de forma unificada as duas métricas correlacionando-as matematicamente.' },
      { q: 'Por que a região do tráfego altera tanto os ganhos?', a: 'Anunciantes em países como EUA, Canadá e Reino Unido têm orçamentos maiores e maior concorrência, o que eleva consideravelmente o CPC e o RPM. Tráfegos desses países podem render de 3 a 5 vezes mais do que tráfego de países em desenvolvimento.' },
      { q: 'O que é RPM no Google AdSense?', a: 'RPM é o rendimento por mil visualizações de página. É calculado dividindo os ganhos estimados pelo número de visualizações de página e multiplicando por 1.000.' },
      { q: 'É garantido que vou ganhar exatamente o valor calculado?', a: 'Não. Os cálculos são estimativas baseadas em médias de mercado. Fatores como qualidade do conteúdo, layout do site, sazonalidade (como datas comerciais) e comportamento dos usuários influenciam diretamente nos ganhos finais.' }
    ]
  },
  'calculo-fgts-acumulado': {
    title: 'Calculadora de FGTS Online Grátis | Brasil Calculadoras',
    description: 'Calcule o saldo acumulado do seu FGTS, depósitos mensais estimados de acordo com o seu salário e regras de contribuição da CLT.',
    whatIs: 'O Fundo de Garantia do Tempo de Serviço (FGTS) é um direito fundamental de todo trabalhador brasileiro sob o regime CLT. Ele funciona como uma poupança compulsória mantida pela Caixa Econômica Federal, alimentada por depósitos mensais obrigatórios feitos pelo empregador. Esta calculadora de FGTS acumulado permite estimar a evolução desse fundo ao longo dos meses de trabalho, servindo como uma importante ferramenta de planejamento financeiro pessoal, estimativa de reserva de emergência e cálculo de valores disponíveis para a compra da casa própria ou saque em caso de rescisão de contrato.',
    howItWorks: 'A lógica de cálculo do FGTS consiste na aplicação de uma alíquota fixa sobre o salário bruto mensal do trabalhador. Para o regime padrão de trabalho CLT, a alíquota mensal é de 8%. No caso de Jovem Aprendiz, a alíquota é reduzida para 2%. Para trabalhadores domésticos, o recolhimento é de 8% de FGTS mais 3,2% de antecipação da multa rescisória, totalizando 11,2%. A fórmula básica é: Depósito Mensal = Salário Bruto * (Alíquota / 100). O total acumulado é obtido multiplicando o depósito mensal pelo número de meses trabalhados.',
    practicalExample: 'Se um trabalhador contratado sob as regras comuns da CLT recebe um salário bruto base de R$ 3.000,00 por mês, a empresa deverá depositar mensalmente em sua conta vinculada do FGTS o valor correspondente a 8% do salário. O cálculo é feito da seguinte forma: R$ 3.000,00 * 0,08 = R$ 240,00 mensais. Caso este profissional permaneça trabalhando na mesma empresa pelo período completo de 12 meses (1 ano), o valor acumulado em depósitos nominais será de: R$ 240,00 * 12 = R$ 2.880,00.',
    whenToUse: 'Utilize esta ferramenta para verificar se os depósitos feitos pela empresa estão corretos, para planejar a compra de imóveis usando o fundo de garantia ou para estimar o montante acumulado a ser sacado em demissões sem justa causa.',
    importantTips: 'O cálculo fornecido é uma estimativa nominal. Mensalmente, a Caixa Econômica aplica correções monetárias de 3% ao ano mais a variação da Taxa Referencial (TR), além de distribuição de lucros do fundo, o que pode elevar ligeiramente o saldo real do extrato.',
    sources: [
      { name: 'FGTS - Caixa Econômica Federal', url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts/' },
      { name: 'Legislação do FGTS - Lei 8.036/90', url: 'http://www.planalto.gov.br/ccivil_03/leis/l8036.htm' }
    ],
    faq: [
      { q: 'Como consultar o saldo do meu FGTS?', a: 'Você pode consultar o saldo oficial de todas as suas contas de FGTS baixando o aplicativo FGTS no celular ou acessando o site oficial da Caixa Econômica Federal com seu CPF ou NIS.' },
      { q: 'Como funciona a alíquota para Jovem Aprendiz?', a: 'Para contratos especiais de Jovem Aprendiz (Lei 11.180/2005), o valor do recolhimento mensal cai de 8% para apenas 2% sobre a folha bruta.' },
      { q: 'Quem tem direito a receber os depósitos de FGTS?', a: 'Têm direito todos os trabalhadores regidos pela CLT, atletas profissionais, trabalhadores temporários, trabalhadores avulsos e diretores não empregados que sejam equiparados.' },
      { q: 'Como funciona o saque-aniversário?', a: 'É uma modalidade opcional na qual o trabalhador pode retirar uma parte do saldo do FGTS anualmente, no mês de seu aniversário, porém abre mão do saque do saldo total em caso de demissão sem justa causa.' }
    ]
  },
  'juros-compostos': {
    title: 'Calculadora de Juros Compostos Online | Brasil Calculadoras',
    description: 'Calcule a evolução capital de investimentos com depósitos recorrentes e juros compostos acumulados com taxa anual ou mensal.',
    whatIs: 'Os juros compostos são a principal ferramenta de enriquecimento e acúmulo de patrimônio a longo prazo. Diferente dos juros simples, nos juros compostos a taxa de rendimento é aplicada não apenas sobre o capital inicial investido, mas também sobre os juros acumulados nos períodos anteriores. Este efeito, conhecido popularmente como "juros sobre juros" ou "efeito bola de neve", multiplica o capital de forma exponencial. Esta calculadora permite simular investimentos iniciais e aportes mensais recorrentes para criar projeções fiéis para aposentadoria, independência financeira ou metas comerciais.',
    howItWorks: 'A fórmula matemática que rege os juros compostos é: M = P * (1 + i)^t, onde M é o montante final obtido, P é o principal inicial investido, i é a taxa de juros do período e t é o tempo de aplicação. Quando há depósitos mensais recorrentes (aportes), a fórmula engloba uma série de pagamentos futuros (anuidades), acumulando o valor futuro de cada aporte capitalizado individualmente no tempo restante.',
    practicalExample: 'Considere que você inicia uma aplicação com um capital inicial de R$ 5.000,00 e realiza aportes mensais adicionais de R$ 300,00. Estimando uma taxa de juros conservadora de 10% ao ano (cerca de 0,8% ao mês) por um prazo total de 120 meses (10 anos), o total investido do próprio bolso será de R$ 41.000,00. O montante acumulado final será de cerca de R$ 73.000,00, o que significa que mais de R$ 32.000,00 foram gerados puramente pelo efeito dos juros acumulados sobre juros.',
    whenToUse: 'Utilize esta ferramenta para planejar investimentos de longo prazo, como previdência complementar, compra programada de veículos ou imóveis, e simular a evolução de contas de renda fixa (como Tesouro Direto, CDB e LCI/LCA) ou carteira de ações e fundos imobiliários.',
    importantTips: 'Lembre-se sempre de ajustar as taxas e o tempo para o mesmo período de indexação (por exemplo, transformar taxa anual em mensal) para obter cálculos consistentes e reais.',
    sources: [
      { name: 'Banco Central do Brasil - Calculadora do Cidadão', url: 'https://www.bcb.gov.br/acessoinformacao/calculadoradocidadao' },
      { name: 'Tesouro Direto - Simulador', url: 'https://www.tesourodireto.com.br/simulador/' }
    ],
    faq: [
      { q: 'O que é melhor: juros compostos anuais ou mensais?', a: 'Quanto maior a frequência de capitalização dos juros, maior o rendimento acumulado final. Uma taxa mensal de 1% rende mais que 12% ao ano porque os juros se somam ao saldo mês a mês.' },
      { q: 'Como estimar a rentabilidade líquida real?', a: 'Para obter o rendimento real de investimentos, é necessário descontar a alíquota do Imposto de Renda (tabela regressiva) e a taxa de inflação (corrosão do poder de compra do período).' },
      { q: 'Qual o papel dos aportes mensais no longo prazo?', a: 'Aportes recorrentes e regulares reduzem consideravelmente o tempo necessário para atingir metas financeiras complexas, pois geram novos fluxos de juros que aceleram o crescimento exponencial.' },
      { q: 'Como a taxa Selic afeta meus rendimentos compostos?', a: 'A taxa Selic serve como referência de rentabilidade básica da economia (taxa livre de risco). Quando ela está alta, os investimentos em renda fixa rendem mais juros compostos nominais.' }
    ]
  },
  'clt-pj': {
    title: 'Comparador CLT vs PJ Grátis | Brasil Calculadoras',
    description: 'Compare salários líquidos de carteira assinada CLT com contratos de prestador de serviços PJ, incluindo tributos do Simples Nacional.',
    whatIs: 'A decisão de trabalhar sob as regras da Consolidação das Leis do Trabalho (CLT) ou prestar serviços como Pessoa Jurídica (PJ) é um dos maiores dilemas dos profissionais brasileiros. Enquanto o trabalho sob regime CLT confere garantias legais (como 13º salário, férias remuneradas mais terço constitucional, FGTS e seguro-desemprego), a contratação PJ (como prestador de serviços) usualmente oferece uma remuneração bruta maior devido à redução de encargos patronais da empresa contratante. Esta calculadora compara ambas as alternativas detalhadamente, demonstrando a receita líquida final de cada opção após todos os descontos tributários e dedução de benefícios equivalentes.',
    howItWorks: 'A comparação deduz do salário CLT bruto o desconto progressivo de INSS e o IRRF mensal para apurar o salário líquido CLT. Em seguida, adiciona o valor proporcional mensal dos direitos CLT (FGTS ordinário, provisão de férias de 1/12, terço constitucional de 1/36, décimo terceiro de 1/12 e alimentação/transporte). Para o modelo PJ, estima o imposto incidente sobre a nota fiscal (por exemplo, alíquotas do Simples Nacional variando de 6% no Anexo III a 15,5% no Anexo V, ou regime MEI), deduz despesas de contabilidade corporativa obrigatória e taxas municipais, apontando a remuneração PJ líquida final para comparação direta.',
    practicalExample: 'Considere comparar um salário CLT de R$ 5.000,00 (que após os impostos obrigatórios resulta em R$ 4.100,00 líquidos, acrescido de FGTS e provisões que somam valor estimado equivalente de R$ 5.800,00 de custo total/benefício) com uma proposta de contrato PJ de R$ 8.000,00. Sob o Simples Nacional (Anexo III, 6%), o imposto PJ mensal seria de R$ 480,00. Subtraindo taxas adicionais de R$ 150,00, o faturamento líquido PJ final seria de aproximadamente R$ 7.370,00, demonstrando-se financeiramente mais vantajosa a opção PJ por uma diferença líquida significativa.',
    whenToUse: 'Use este simulador ao receber uma nova proposta de trabalho PJ e precisar saber o salário CLT equivalente, ou quando planejar abrir sua empresa para prestar serviços técnicos, de TI, design ou consultoria comercial.',
    importantTips: 'Não compare apenas o valor bruto nominal. Lembre-se que contratos PJ não possuem estabilidade garantida por lei ou aviso prévio legal, devendo o prestador de serviços provisionar essas verbas pessoalmente.',
    sources: [
      { name: 'Tabela do Simples Nacional - Receita Federal', url: 'https://www.gov.br/receitafederal/pt-br' },
      { name: 'Consolidação das Leis do Trabalho (CLT) - Decreto-Lei 5.452/43', url: 'http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' }
    ],
    faq: [
      { q: 'O que é o Fator R no Simples Nacional?', a: 'É uma regra que permite a empresas do Anexo V migrarem para o Anexo III (com imposto menor a partir de 6%) caso sua folha de salários (incluindo pró-labore) seja igual ou superior a 28% do faturamento bruto.' },
      { q: 'Como MEI (Microempreendedor Individual) se encaixa?', a: 'Se o seu faturamento anual estiver dentro do limite de MEI (R$ 81.000,00) e a atividade for permitida, o imposto mensal PJ é fixo e muito baixo (cerca de R$ 75,00), tornando a opção PJ ainda mais rentável.' },
      { q: 'Quais despesas o profissional PJ precisa arcar por conta?', a: 'O profissional PJ deve pagar tarifas contábeis (mensalidades de contador), taxas de licenciamento municipal, anuidade de conselho de classe (se aplicável), além de contratar seus próprios seguros e planos de saúde.' },
      { q: 'Trabalho PJ dá direito à aposentadoria?', a: 'Sim, o profissional PJ pode recolher INSS através de pró-labore ou guia individual (GPS), garantindo tempo de contribuição previdenciária e cobertura contra acidentes de trabalho.' }
    ]
  },
  'calculadora-de-rescisao-clt': {
    title: 'Calculadora de Rescisão CLT Online | Brasil Calculadoras',
    description: 'Calcule as verbas rescisórias em demissões sem justa causa, pedidos de demissão ou acordos comuns sob a legislação trabalhista brasileira.',
    whatIs: 'O término de um vínculo de emprego sob as regras da Consolidação das Leis do Trabalho (CLT) exige o acerto de contas conhecido como rescisão contratual. Este processo compreende o cálculo minucioso das verbas de natureza indenizatória e salarial acumuladas até a data da dispensa ou desligamento. Esta calculadora de rescisão simula de forma analítica e prática o saldo líquido a receber pelo trabalhador, estimando descontos obrigatórios (como INSS e IRRF) e apurando o saldo de dias trabalhados, férias vencidas e proporcionais, décimo terceiro salário proporcional, aviso prévio indenizado ou trabalhado e multas do FGTS.',
    howItWorks: 'A lógica de cálculo varia conforme a modalidade de dispensa (Demissão sem justa causa, Pedido de demissão, Demissão com justa causa ou Acordo consensual). Nas demissões sem justa causa, o trabalhador recebe: Saldo de Salário + Aviso Prévio Indenizado (se aplicável) + 13º Proporcional + Férias Proporcionais e Vencidas + Multa Rescisória de 40% do FGTS depositado. Nos pedidos de demissão, não há direito à multa de 40% nem ao saque do saldo do FGTS, além do aviso prévio poder ser descontado caso não trabalhado.',
    practicalExample: 'Um profissional com salário base de R$ 3.000,00 por mês, desligado sem justa causa após trabalhar exatamente 8 meses na empresa, com aviso prévio indenizado e sem férias vencidas, receberia: Saldo de dias trabalhados do último mês, aviso prévio indenizado de R$ 3.000,00 (mais dias proporcionais por lei de tempo de serviço), 8/12 avos de 13º salário proporcional (R$ 2.000,00), 8/12 avos de férias proporcionais acrescidas do terço constitucional (R$ 2.666,67) e a multa de 40% do saldo acumulado do FGTS.',
    whenToUse: 'Utilize esta ferramenta para verificar se a proposta de Termo de Rescisão do Contrato de Trabalho (TRCT) fornecida pelo departamento de Recursos Humanos da sua empresa está correta e de acordo com a legislação, ou ao planejar pedir demissão para avaliar as verbas abertas.',
    importantTips: 'O aviso prévio proporcional ao tempo de serviço acrescenta 3 dias de salário para cada ano completo trabalhado na mesma empresa, limitado ao teto legal máximo de 90 dias de aviso (Lei 12.506/2011).',
    sources: [
      { name: 'Consolidação das Leis do Trabalho (CLT) - Ministério do Trabalho', url: 'http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' },
      { name: 'Guia do Trabalhador - Rescisão Contratual', url: 'https://www.gov.br/trabalho-e-emprego/pt-br' }
    ],
    faq: [
      { q: 'O que é descontado na rescisão de contrato?', a: 'São descontadas faltas não justificadas do período, INSS e IRRF incidentes sobre o saldo de dias e 13º, adiantamentos salariais e, em casos de pedido de demissão, o aviso prévio não cumprido.' },
      { q: 'Quantos dias a empresa tem para pagar a rescisão?', a: 'Conforme estabelecido pela reforma trabalhista (Lei 13.467/2017), o prazo de quitação das verbas rescisórias é de até 10 dias corridos contados do término do contrato de trabalho.' },
      { q: 'Como funciona a multa de 40% do FGTS?', a: 'Nas demissões sem justa causa, o empregador deve pagar uma multa rescisória de 40% calculada sobre o total de depósitos feitos na conta de FGTS do funcionário ao longo de todo o contrato.' },
      { q: 'O que acontece na rescisão por acordo comum?', a: 'Na rescisão consensual (Art. 484-A da CLT), a multa do FGTS cai para 20%, o aviso prévio indenizado é pago pela metade (50%) e o trabalhador pode movimentar até 80% do saldo do FGTS.' }
    ]
  },
  'calculadora-de-decimo-terceiro': {
    title: 'Calculadora de Décimo Terceiro Salário Online | Brasil Calculadoras',
    description: 'Calcule o valor bruto e líquido do décimo terceiro salário (1ª e 2ª parcelas), estimando os descontos de INSS e Imposto de Renda (IRRF).',
    whatIs: 'O décimo terceiro salário, oficialmente conhecido como gratificação natalina, é um direito constitucional garantido a todos os trabalhadores brasileiros sob o regime CLT. Ele consiste no pagamento de um salário extra ao final de cada ano trabalhado (ou proporcional aos meses de serviço). Esta calculadora permite simular o valor exato a receber na primeira parcela (paga sem descontos de tributos entre fevereiro e novembro) e na segunda parcela (paga até 20 de dezembro com as deduções fiscais de INSS e IRRF).',
    howItWorks: 'O cálculo baseia-se na divisão do salário bruto por 12 e multiplicação pelo número de meses trabalhados no ano (sendo considerado mês completo a fração igual ou superior a 15 dias de serviço). A primeira parcela equivale a exatamente 50% do valor bruto proporcional. A segunda parcela desconta o INSS (tabela progressiva) e o IRRF (tabela progressiva com dedução por dependente) calculados sobre o bruto total, subtraindo o valor já pago na primeira parcela.',
    practicalExample: 'Para um profissional com salário de R$ 3.000,00 e 12 meses de trabalho: a primeira parcela será de R$ 1.500,00 líquidos. Na segunda parcela, calcula-se o desconto de INSS (~R$ 280,00) e IRRF (~R$ 60,00) sobre o bruto de R$ 3.000,00. O total líquido anual devido é R$ 2.660,00. Deduzindo os R$ 1.500,00 já adiantados, a segunda parcela líquida final a receber será de R$ 1.160,00.',
    whenToUse: 'Utilize esta calculadora para planejar o recebimento das gratificações natalinas da empresa, projetar suas finanças de fim de ano ou auditar o holerite de pagamento do 13º salário emitido pelo RH.',
    importantTips: 'Adicionais como horas extras, comissões, periculosidade e adicional noturno entram na média física para compor o salário bruto base do décimo terceiro salário.',
    sources: [
      { name: 'Gratificação Natalina - Lei 4.090/62', url: 'http://www.planalto.gov.br/ccivil_03/leis/l4090.htm' },
      { name: 'Direitos Trabalhistas 13º Salário - TST', url: 'https://www.tst.jus.br/guia-do-trabalhador-13-salario' }
    ],
    faq: [
      { q: 'Até quando a empresa deve pagar a primeira parcela?', a: 'A legislação trabalhista estabelece que o adiantamento da primeira parcela deve ser pago pelo empregador entre 1º de fevereiro e 30 de novembro de cada ano.' },
      { q: 'Até quando deve ser paga a segunda parcela?', a: 'O pagamento da segunda parcela (com todos os descontos tributários incidentes) deve ser feito pela empresa obrigatoriamente até o dia 20 de dezembro.' },
      { q: 'Posso pedir o adiantamento do 13º nas férias?', a: 'Sim, o trabalhador pode solicitar o pagamento da primeira parcela por ocasião de suas férias, desde que faça o requerimento por escrito ao empregador durante o mês de janeiro do respectivo ano.' },
      { q: 'Quem tem direito a receber o décimo terceiro?', a: 'Todos os trabalhadores sob regime CLT, servidores públicos, aposentados e pensionistas do INSS com mais de 15 dias trabalhados na empresa.' }
    ]
  },
  'calculadora-de-ferias-clt': {
    title: 'Calculadora de Férias CLT Online | Brasil Calculadoras',
    description: 'Calcule o valor líquido de férias com abono de um terço constitucional, descontos de INSS/IRRF e venda de férias (abono pecuniário).',
    whatIs: 'O direito a férias anuais remuneradas é assegurado pela Constituição Federal e pela CLT após cada período de 12 meses de trabalho (período aquisitivo). As férias compreendem a remuneração integral acrescida de pelo menos um terço constitucional (1/3). Esta calculadora de férias CLT permite simular os dias de descanso (usualmente 30 dias), calcular a opção de vender uma parte das férias (abono pecuniário de até 10 dias) e deduzir as taxas correspondentes de INSS e Imposto de Renda.',
    howItWorks: 'O cálculo soma o salário bruto proporcional aos dias de férias gozados e adiciona o valor correspondente a 1/3 do total de férias. Caso haja a venda de férias, soma-se o abono pecuniário (10 dias de salário bruto) mais 1/3 deste abono. Deduzem-se progressivamente as alíquotas de INSS e IRRF incidentes sobre a remuneração de férias (o abono pecuniário e seu 1/3 são isentos de imposto de renda e INSS por lei).',
    practicalExample: 'Com um salário de R$ 3.000,00 gozando 30 dias de férias simples: o bruto de férias é R$ 3.000,00 + R$ 1.000,00 (1/3 constitucional), totalizando R$ 4.000,00. Descontam-se INSS (~R$ 410,00) e IRRF (~R$ 170,00). O valor líquido a receber pelo trabalhador antes do início do descanso será de cerca de R$ 3.420,00.',
    whenToUse: 'Use ao planejar o seu período de descanso anual, ao decidir se vale a pena vender 10 dias de férias (abono pecuniário) ou para conferir o holerite de férias emitido pelo empregador.',
    importantTips: 'O pagamento das férias e do terço constitucional deve ser efetuado pelo empregador até 2 dias úteis antes do início do período de gozo das férias.',
    sources: [
      { name: 'Das Férias Anuais - CLT Capítulo IV', url: 'http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' },
      { name: 'Manual de Férias do Trabalhador - TST', url: 'https://www.tst.jus.br/' }
    ],
    faq: [
      { q: 'O que é o abono pecuniário de férias?', a: 'É a conversão de 1/3 do período de férias a que o trabalhador tem direito em valor financeiro, popularmente chamada de "venda de férias" (limite máximo de 10 dias).' },
      { q: 'Férias vendidas pagam imposto de renda?', a: 'Não, o abono pecuniário (dias vendidos) e o seu respectivo terço constitucional têm caráter indenizatório e são totalmente isentos de desconto de INSS e Imposto de Renda.' },
      { q: 'O empregador pode decidir quando o trabalhador tira férias?', a: 'Sim, a data de concessão das férias é de decisão exclusiva do empregador, que deve conciliar a escala de descansos com as necessidades operacionais da empresa.' },
      { q: 'Faltas injustificadas reduzem os dias de férias?', a: 'Sim. Se o trabalhador tiver mais de 5 faltas não justificadas no período aquisitivo, o limite de 30 dias de férias começa a ser reduzido progressivamente pelas regras da CLT.' }
    ]
  },
  'calculadora-de-horas-extras': {
    title: 'Calculadora de Horas Extras Grátis | Brasil Calculadoras',
    description: 'Calcule o valor das horas extras trabalhadas com adicionais de 50%, 100% ou percentuais específicos, incluindo reflexo no DSR.',
    whatIs: 'O trabalho realizado além da jornada ordinária diária estabelecida no contrato de trabalho do profissional deve ser remunerado com acréscimo legal. Conforme a CLT, a hora extra comum deve valer no mínimo 50% mais que a hora normal em dias úteis, e 100% mais em domingos e feriados nacionais. Esta calculadora permite descobrir o valor preciso a ser adicionado à sua folha bruta mensal a partir do salário base e do número de horas excedentes realizadas.',
    howItWorks: 'Primeiro, divide-se o salário bruto contratual pelo limite de horas mensais (normalmente 220 horas para jornadas de 44h semanais) para obter o valor da hora normal de trabalho. Depois, aplica-se o adicional sobre a hora normal (ex: hora normal * 1,5 para 50%). Multiplica-se o resultado pelo número de horas extras trabalhadas. Finalmente, calcula-se o reflexo obrigatório no Descanso Semanal Remunerado (DSR).',
    practicalExample: 'Com salário de R$ 2.200,00 (hora normal = R$ 10,00) e 10 horas extras com 50% de adicional: o valor unitário da hora extra é R$ 15,00. O bruto das horas extras é R$ 150,00. Se no mês houver 25 dias úteis e 5 domingos/feriados, calcula-se o DSR: (R$ 150,00 / 25) * 5 = R$ 30,00 de acréscimo. O total bruto na folha de pagamento será de R$ 180,00.',
    whenToUse: 'Utilize esta ferramenta ao realizar expedientes extras ou plantões corporativos para conferir se o pagamento em folha está sendo feito corretamente pela empresa.',
    importantTips: 'O limite diário de horas extras permitido pela CLT é de até 2 horas por dia, mediante acordo individual ou convenção coletiva de trabalho.',
    sources: [
      { name: 'Jornada de Trabalho e Horas Extras - CLT Art. 59', url: 'http://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' },
      { name: 'Súmula 172 do TST - Horas Extras e DSR', url: 'https://www.tst.jus.br/' }
    ],
    faq: [
      { q: 'Como funciona o cálculo do DSR sobre horas extras?', a: 'O valor total das horas extras do mês é dividido pelos dias úteis (incluindo sábados) e multiplicado pelos domingos e feriados do respectivo mês.' },
      { q: 'Quem tem direito a receber horas extras?', a: 'Todos os empregados regidos pela CLT que possuem controle de ponto, excluindo-se cargos de gerência (confiança), teletrabalho sem controle e prestadores PJ.' },
      { q: 'Qual a diferença entre hora extra a 50% e 100%?', a: 'O adicional de 50% é o mínimo exigido por lei para dias úteis (segunda a sábado). O adicional de 100% aplica-se ao trabalho realizado em domingos e feriados nacionais não compensados.' },
      { q: 'Como o banco de horas afeta a hora extra?', a: 'Se a empresa possuir acordo de Banco de Horas válido, as horas excedentes podem ser compensadas por folgas equivalentes em vez de pagas em dinheiro na folha de pagamento.' }
    ]
  },
  'imc': {
    title: 'Calculadora de IMC e Taxa Metabólica Basal | Brasil Calculadoras',
    description: 'Calcule seu Índice de Massa Corporal (IMC) e taxa metabólica basal para planejar sua dieta e bem-estar corporal.',
    whatIs: 'O Índice de Massa Corporal (IMC) é a métrica padrão internacional adotada pela Organização Mundial da Saúde (OMS) para avaliar o peso corpóreo em relação à altura e diagnosticar graus de subnutrição, peso saudável, sobrepeso ou obesidade. A Taxa Metabólica Basal (TMB), por sua vez, expressa o gasto calórico mínimo que o corpo humano exige para manter suas funções vitais ativas em estado de repouso absoluto. Juntas, estas medidas guiam rotinas de emagrecimento, ganho de massa ou simples reeducação física.',
    howItWorks: 'O IMC é calculado dividindo o peso (kg) pela altura ao quadrado (m²): IMC = Peso / (Altura * Altura). A Taxa Metabólica Basal utiliza as fórmulas de Harris-Benedict ou Mifflin-St Jeor, cruzando idade, sexo biológico, peso e altura, e multiplicando pelo fator de atividade diária para encontrar a Meta de Calorias Diárias (TDEE).',
    practicalExample: 'Para um homem de 30 anos, 1,80m de altura e peso de 80kg: o IMC será 80 / (1,80)² = 24,7 (classificado como Peso Saudável/Normal). Sua Taxa Metabólica Basal estimada será de cerca de 1.800 kcal diárias de repouso. Se ele praticar atividade física moderada, sua necessidade diária de calorias para manutenção de peso será de cerca de 2.450 kcal.',
    whenToUse: 'Use ao iniciar rotinas esportivas, planejar dietas nutricionais com contagem de macronutrientes ou acompanhar flutuações de gordura e peso corpóreo.',
    importantTips: 'O IMC é um indicador populacional e não distingue massa gorda de massa muscular, devendo atletas de musculação focar na avaliação de percentual de gordura física.',
    sources: [
      { name: 'Classificação de IMC - OMS (Organização Mundial da Saúde)', url: 'https://www.who.int/' },
      { name: 'Necessidades Nutricionais - Ministério da Saúde do Brasil', url: 'https://www.gov.br/saude/pt-br' }
    ],
    faq: [
      { q: 'Quais são as faixas de classificação do IMC?', a: 'Abaixo de 18,5 (Abaixo do peso), 18,5 a 24,9 (Normal/Saudável), 25 a 29,9 (Sobrepeso), 30 a 34,9 (Obesidade Grau 1), 35 a 39,9 (Obesidade Grau 2) e acima de 40 (Obesidade Grau 3).' },
      { q: 'O que é Taxa Metabólica Basal (TMB)?', a: 'É a quantidade de energia (calorias) que o corpo gasta apenas para respirar, manter órgãos vitais funcionando e circular sangue, sem qualquer movimento físico.' },
      { q: 'Como a atividade física altera a minha necessidade calórica?', a: 'Multiplica-se a TMB pelo fator de atividade (sedentário = 1.2, moderado = 1.55, intenso = 1.9) para achar o gasto diário total (TDEE).' },
      { q: 'Qual a quantidade de água recomendada por dia?', a: 'A estimativa médica básica é de 35ml de água para cada quilo corporal (Ex: 80kg de peso necessita de aproximadamente 2,8 litros de água ao dia).' }
    ]
  },
  'regra-tres': {
    title: 'Calculadora de Regra de Três Rápida | Brasil Calculadoras',
    description: 'Resolva proporções matemáticas simples e inversas de grandezas diretamente ou inversamente proporcionais em segundos.',
    whatIs: 'A regra de três simples é um método matemático prático utilizado para encontrar um valor desconhecido em uma relação de proporcionalidade entre quatro valores, dos quais três são conhecidos. Ela é amplamente aplicada na física, química, economia, culinária e em tarefas diárias escolares. A proporcionalidade pode ser direta (quando o aumento de uma grandeza gera o aumento da outra) ou inversa (quando o aumento de uma gera a redução da outra).',
    howItWorks: 'Mapeiam-se três valores conhecidos (A, B e C) e a incógnita X. Na proporcionalidade direta, a relação é cruzada: X = (C * B) / A. Na proporcionalidade inversa (onde as grandezas crescem de forma oposta), a relação é linear: X = (A * B) / C.',
    practicalExample: 'Se um carro consome 10 litros de combustível para percorrer 120 km (proporção direta), quantos litros consumirá para percorrer 300 km? Montando a regra de três: 10 L está para 120 km, assim como X L está para 300 km. O cálculo cruzado resulta em: X = (300 * 10) / 120 = 25 litros de combustível.',
    whenToUse: 'Utilize esta ferramenta ao ajustar porções em receitas de cozinha, converter moedas e escalas de desenhos técnicos, simular consumos de combustível em viagens ou resolver listas escolares.',
    importantTips: 'Sempre identifique se a relação entre as duas variáveis é direta ou inversa antes de iniciar a multiplicação dos valores.',
    sources: [
      { name: 'Portal da Matemática - Só Matemática', url: 'https://www.somatematica.com.br/' },
      { name: 'Khan Academy - Razões e Proporções', url: 'https://pt.khanacademy.org/' }
    ],
    faq: [
      { q: 'Qual a diferença entre proporção direta e inversa?', a: 'Na proporção direta, se uma variável dobra, a outra também dobra. Na proporção inversa, se uma variável dobra, a outra cai pela metade (ex: velocidade vs tempo).' },
      { q: 'Como montar uma regra de três simples?', a: 'Alinhe as grandezas de mesma espécie na mesma coluna (ex: quilos embaixo de quilos, reais embaixo de reais), trace as relações e resolva a equação.' },
      { q: 'Posso usar decimais nas contas?', a: 'Sim, a calculadora suporta qualquer valor decimal positivo ou negativo nos inputs para apurar a resposta matemática com precisão.' }
    ]
  },
  'porcentagem-simples': {
    title: 'Calculadora de Porcentagem Rápida e Simples | Brasil Calculadoras',
    description: 'Calcule porcentagem de valores, acréscimos, descontos e variações relativas percentuais com precisão decimal.',
    whatIs: 'A porcentagem representa uma razão cujo denominador é 100, ou seja, uma fração de uma grandeza comparada a cem partes. Ela está presente em descontos de lojas, taxas de juros de cartões, crescimento populacional e na maior parte dos relatórios comerciais. Esta calculadora ajuda a resolver operações cotidianas como extrair a porcentagem de um número bruto, adicionar um acréscimo percentual ou aplicar um desconto promocional sobre um preço original.',
    howItWorks: 'A porcentagem simples multiplica o valor pelo percentual dividido por 100: Resultado = Valor * (Percentual / 100). Para acréscimos, soma-se a diferença ao valor base. Para descontos, subtrai-se a diferença.',
    practicalExample: 'Ao comprar um casaco de R$ 200,00 com desconto promocional de 15%: a diferença descontada é R$ 200,00 * (15/100) = R$ 30,00. O preço líquido final a pagar na loja será de: R$ 200,00 - R$ 30,00 = R$ 170,00.',
    whenToUse: 'Use ao calcular o desconto de produtos em lojas, calcular a taxa de corretagem ou comissão de vendas, estimar juros de contas atrasadas ou apurar lucros relativos corporativos.',
    importantTips: 'Para somar um percentual rapidamente de cabeça, multiplique o valor por 1,XX (onde XX é o percentual). Ex: R$ 100 com 15% de aumento é 100 * 1,15 = R$ 115.',
    sources: [
      { name: 'Porcentagem - Matemática Básica', url: 'https://matematicabasica.net/' }
    ],
    faq: [
      { q: 'O que significa porcentagem?', a: 'Significa "por cento", ou seja, uma divisão de um número por 100. Representa uma proporção em relação a um todo de 100 partes.' },
      { q: 'Como calcular porcentagem na calculadora comum?', a: 'Digite o valor base, aperte a tecla de multiplicação (*), digite a porcentagem desejada e pressione a tecla de porcentagem (%) ou divida por 100.' },
      { q: 'Como funciona o cálculo de variação percentual?', a: 'Mede a diferença entre um valor final e inicial dividida pelo valor inicial e multiplicada por 100, indicando o crescimento ou queda relativa.' }
    ]
  },
  'financiamento-veiculo': {
    title: 'Simulador de Financiamento de Veículo (CDC) | Brasil Calculadoras',
    description: 'Simule parcelas de financiamento de carros ou motos na tabela Price (CDC), taxas de juros e tabela de amortização.',
    whatIs: 'O financiamento de veículos no Brasil é feito majoritariamente pelo Crédito Direto ao Consumidor (CDC), onde o banco empresta o valor necessário para a compra e o automóvel fica alienado como garantia fiduciária até a quitação. Esta calculadora de financiamento de veículo permite simular o valor das prestações mensais fixas de acordo com a taxa de juros do banco, deduzindo a entrada e demonstrando o total de juros acumulado ao final do contrato de parcelamento.',
    howItWorks: 'A simulação deduz o valor de entrada do preço de tabela do carro para achar o saldo devedor financiado. Em seguida, aplica a fórmula Price de parcelamento com juros compostos: Parcela = Financiado * [i * (1+i)^n] / [(1+i)^n - 1], onde i é a taxa de juros mensal e n é a quantidade de parcelas.',
    practicalExample: 'Financiando um automóvel de R$ 50.000,00 com entrada de R$ 15.000,00 (financiamento de R$ 35.000,00) em 48 meses a uma taxa de juros de 1,8% ao mês: a prestação mensal fixa calculada é de R$ 1.103,13. Ao final dos 4 anos de contrato, o valor total pago nas parcelas será de R$ 52.950,24, gerando um total de juros nominais pagos ao banco de R$ 17.950,24.',
    whenToUse: 'Use antes de ir à concessionária comprar um carro ou moto para verificar o impacto dos juros compostos no saldo de parcelamento e avaliar o impacto das parcelas no orçamento mensal.',
    importantTips: 'Prefira sempre dar uma entrada maior. Reduzir o saldo financiado inicial diminui drasticamente a bola de neve de juros acumulados sobre juros ao final de prazos de longo prazo (como 48 ou 60 meses).',
    sources: [
      { name: 'Tabela Fipe - Avaliação de Carros', url: 'https://veiculos.fipe.org.br/' },
      { name: 'Banco Central do Brasil - Juros de Financiamento', url: 'https://www.bcb.gov.br/' }
    ],
    faq: [
      { q: 'O que é o Custo Efetivo Total (CET)?', a: 'É a taxa real anual que engloba não apenas a taxa de juros nominal do financiamento, mas todos os impostos de IOF, tarifas de cadastro bancário (TAC) e seguros obrigatórios.' },
      { q: 'Posso amortizar parcelas de trás para frente?', a: 'Sim, a legislação garante o direito de antecipar o pagamento de parcelas futuras com desconto proporcional de todos os juros compostos embutidos na prestação.' },
      { q: 'O que acontece se eu atrasar a parcela?', a: 'Serão aplicadas taxas adicionais de multa por atraso (geralmente 2%) mais juros de mora diários e, após prazos prolongados, o banco pode iniciar a busca e apreensão do veículo.' }
    ]
  },
  'move-brasil': {
    title: 'Simulador de Financiamento Move Brasil | Brasil Calculadoras',
    description: 'Simule parcelas e juros do Programa Move Brasil para taxistas e motoristas de aplicativo com teto de até R$ 200 mil, prazos de até 84 meses e taxas a partir de 0,91% ao mês.',
    whatIs: 'O Programa Move Brasil é uma iniciativa do Governo Federal destinada a facilitar a renovação de frota de motoristas de aplicativo e taxistas em todo o país. O programa viabiliza uma linha de crédito especial operada por instituições financeiras parceiras com condições diferenciadas. A linha é focada na aquisição de automóveis novos (zero quilômetro) mais eficientes e sustentáveis (modelos flex, híbridos flex, a etanol ou puramente elétricos), com teto de valor de mercado de até R$ 200.000,00 por veículo e prazos de pagamento de até 84 meses (com possibilidade de carência de até 6 meses).',
    howItWorks: 'O simulador do Move Brasil calcula o valor das parcelas mensais utilizando as taxas de juros nominais de referência do programa: até 11,5% ao ano (aproximadamente 0,91% ao mês) para mulheres beneficiárias e até 12,5% ao ano (aproximadamente 0,99% ao mês) para homens. O saldo devedor é obtido deduzindo o valor da entrada informada sobre o valor total do automóvel, distribuindo as parcelas fixas pela Tabela Price tradicional.',
    practicalExample: 'Ao simular a compra de um carro novo de R$ 120.000,00 com uma entrada de R$ 20.000,00 (financiando R$ 100.000,00) em um prazo de 60 meses: se a beneficiária for mulher (taxa de 0,91% a.m.), o valor da parcela mensal estimada é de R$ 2.179,35, com um total pago de R$ 150.761,00 (sendo R$ 30.761,00 de juros). Comparado a um financiamento comum de mercado à taxa média de ~1,67% a.m., onde a parcela seria de R$ 2.658,18 e o total de juros de R$ 59.490,80, a economia gerada pelas taxas do programa federal é de aproximadamente R$ 28.729,80.',
    whenToUse: 'Esta calculadora deve ser utilizada por motoristas de aplicativos (como Uber, 99) e taxistas credenciados que desejam planejar a troca de seus veículos de trabalho sob as regras vigentes do Programa Move Brasil.',
    importantTips: 'Para participar do Move Brasil, motoristas de aplicativo devem comprovar cadastro ativo na plataforma por no mínimo 12 meses e histórico de pelo menos 100 corridas no período. O primeiro passo é realizar o cadastro digital no portal oficial gov.br/movebrasil. Após a validação da elegibilidade (que ocorre em até 5 dias úteis), o profissional deve buscar a instituição financeira parceira ou concessionária credenciada para a análise de crédito.',
    sources: [
      { name: 'Portal Oficial Move Brasil - Gov.br', url: 'https://www.gov.br/movebrasil' },
      { name: 'BNDES - Financiamento e Sustentabilidade', url: 'https://www.bndes.gov.br/' }
    ],
    faq: [
      { q: 'Quem tem direito ao financiamento do Move Brasil?', a: 'Têm direito taxistas ativos registrados e motoristas de transporte por aplicativo com cadastro ativo há pelo menos 12 meses e mínimo de 100 corridas concluídas nesse período.' },
      { q: 'Quais são as taxas de juros para mulheres e homens?', a: 'Para incentivar a inclusão e o empreendedorismo feminino, as taxas máximas são de até 11,5% ao ano (0,91% ao mês) para mulheres e de até 12,5% ao ano (0,99% ao mês) para homens.' },
      { q: 'Como fazer o cadastro e solicitar o financiamento?', a: 'O cadastro de elegibilidade é realizado de forma 100% digital pelo portal gov.br/movebrasil com validação em até 5 dias úteis. Após a validação da categoria, o motorista escolhe o banco parceiro ou concessionária credenciada para a análise de crédito.' },
      { q: 'Qual o valor máximo do carro e prazo de pagamento?', a: 'O programa financia veículos zero quilômetro sustentáveis (flex, híbridos, etanol ou elétricos) com valor de mercado de até R$ 200.000,00, com prazos de financiamento em até 84 meses e carência de até 6 meses.' }
    ]
  },
  'simulador-de-aposentadoria-inss': {
    title: 'Simulador de Aposentadoria INSS e Previdência | Brasil Calculadoras',
    description: 'Simule seu tempo de contribuição previdenciária e projete estimativas de elegibilidade para aposentadoria pelas regras de transição.',
    whatIs: 'A aposentadoria pelo Regime Geral de Previdência Social (RGPS/INSS) sofreu mudanças significativas com a Reforma da Previdência (EC 103/2019). O direito de se aposentar passou a combinar idade mínima, tempo de contribuição previdenciária e regras de transição de pedágio ou pontos. Este simulador ajuda a calcular o tempo acumulado de contribuição e prever cenários informais de elegibilidade para o benefício previdenciário público.',
    howItWorks: 'O simulador cruza o gênero do segurado com a idade atual e o tempo de contribuição já acumulado em anos. Avalia o preenchimento dos limites regulamentares para a regra de transição por pontos (idade + contribuição) ou idade mínima progressiva, indicando a elegibilidade estimada para a concessão do benefício previdenciário.',
    practicalExample: 'Uma mulher com 62 anos de idade e 15 anos de contribuição previdenciária atinge a idade mínima exigida pela regra geral de aposentadoria urbana do INSS. Se o mesmo cálculo for feito para uma trabalhadora com menor tempo de serviço ou idade inferior, o simulador apontará o tempo restante de contribuição em meses para atingir as metas regulamentares.',
    whenToUse: 'Utilize esta ferramenta de planejamento previdenciário para estimar cenários informais de aposentabilidade e planejar contribuições futuras individuais.',
    importantTips: 'O simulador é de caráter educativo e simulação. O tempo real de contribuição oficial, períodos especiais e laudos de insalubridade devem ser validados exclusivamente através do sistema oficial "Meu INSS".',
    sources: [
      { name: 'Reforma da Previdência - Emenda Constitucional 103', url: 'http://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm' },
      { name: 'Meu INSS - Serviços da Previdência Social', url: 'https://meu.inss.gov.br/' }
    ],
    faq: [
      { q: 'Qual a idade mínima para se aposentar no INSS hoje?', a: 'Após as regras de transição completas pós-reforma, a idade mínima geral urbana é de 62 anos para mulheres e 65 anos para homens, com o tempo mínimo de contribuição de 15 anos para mulheres e 20 anos para homens.' },
      { q: 'Como funciona a aposentadoria por pontos?', a: 'A soma da idade do trabalhador com o seu tempo de contribuição deve atingir um valor mínimo progressivo anual estabelecido pelas regras de transição da previdência pública.' },
      { q: 'Período militar ou rural conta como contribuição?', a: 'Sim, o período de serviço militar obrigatório ou o tempo trabalhado como segurado especial rural podem ser averbados no INSS para aumentar o tempo total de contribuição.' }
    ]
  }
};

// Category deep content (EEAT Hub descriptions and FAQs)
const CATEGORY_SEO_DATABASE: Record<string, CategoryHubSeoContent> = {
  financas: {
    title: 'Calculadoras Financeiras e de Negócios | Brasil Calculadoras',
    description: 'Otimize suas decisões financeiras corporativas e pessoais. Simule investimentos, margens de lucro, markup comercial, conversão de inflação e retorno (ROI).',
    introduction: 'A gestão financeira de excelência é a espinha dorsal de qualquer empreendimento de sucesso ou de um planejamento familiar estável. O mercado atual exige agilidade na tomada de decisão de precificação, na escolha de regimes tributários ou nas projeções de rentabilidade capitalizada. Nossas ferramentas computacionais eliminam complexidades matemáticas de juros sobre juros e apurações fiscais, convertendo dados em relatórios práticos imediatos.',
    importance: 'Fazer projeções financeiras à mão ou em planilhas desorganizadas aumenta exponencialmente a margem de erros operacionais. O uso de algoritmos estruturados e atualizados com indexadores de inflação (IPCA, Selic, impostos federais) garante previsões fiéis de fluxo de caixa, ponto de equilíbrio comercial e amortização de passivos.',
    faq: [
      { q: 'As ferramentas financeiras incluem impostos brasileiros?', a: 'Sim, as calculadoras estimam deduções e faixas vigentes de impostos nacionais (como Simples Nacional, IRRF e alíquotas de INSS) para oferecer relatórios mais condizentes com o mercado.' },
      { q: 'Como planejar metas com a caderneta de poupança?', a: 'Use a calculadora de poupança/juros compostos para estimar o tempo necessário para atingir seu objetivo financeiro aplicando aportes mensais fixos.' },
      { q: 'O que é markup comercial e por que é importante?', a: 'É um índice multiplicador aplicado sobre o custo de produção para definir o preço final de venda de produtos, garantindo a cobertura de impostos, custos variáveis e margem de lucro.' },
      { q: 'Como simular a rentabilidade real líquida?', a: 'Utilize o comparador de juros compostos ou investimentos descontando a inflação anual prevista e o imposto de renda incidente sobre o rendimento.' }
    ]
  },
  profissoes: {
    title: 'Calculadoras Trabalhistas, Profissões e CLT | Brasil Calculadoras',
    description: 'Simulação completa de direitos laborais. Calcule FGTS acumulado, adicionais noturnos, de periculosidade e insalubridade, seguros e vale-transporte.',
    introduction: 'A complexa legislação trabalhista brasileira consolidada pela CLT e regulamentações sindicais exige cálculos exatos de provisões e acertos mensais. Tanto empregadores quanto empregados necessitam de clareza sobre descontos legais, custos de contratação e valores justos por horas de trabalho realizadas. Oferecemos ferramentas exaustivas de conformidade jurídica trabalhista.',
    importance: 'Evite disputas legais, acertos errados e perdas financeiras na folha de pagamentos. Nossa central de cálculo trabalhista unifica regras de proporcionalidade de tempo de serviço, alíquotas de tributos, adicionais específicos de risco e direitos de transporte para assegurar auditorias trabalhistas precisas em segundos.',
    faq: [
      { q: 'Qual a diferença entre insalubridade e periculosidade?', a: 'A insalubridade refere-se à exposição a agentes nocivos à saúde (como ruídos, calor ou produtos químicos) e é calculada sobre o salário mínimo. A periculosidade é para riscos iminentes de vida e equivale a 30% do salário base do trabalhador.' },
      { q: 'Como é calculado o adicional noturno urbano?', a: 'O trabalho noturno urbano (22h às 5h) recebe um acréscimo de 20% sobre o valor da hora normal, além de contar com a hora fictícia reduzida de 52 minutos e 30 segundos.' },
      { q: 'A empresa pode descontar o vale-transporte?', a: 'Sim, a empresa pode descontar até 6% do salário base do trabalhador pelo fornecimento do VT. Caso as passagens reais custem menos que os 6%, desconta-se apenas o valor real.' },
      { q: 'Como calcular o desconto de faltas injustificadas?', a: 'A falta desconta o dia correspondente ao salário e também anula a remuneração do Descanso Semanal Remunerado (DSR) da semana em que ocorreu a ausência.' }
    ]
  },
  saude: {
    title: 'Calculadoras de Saúde, Dietas e Bem-Estar | Brasil Calculadoras',
    description: 'Acompanhe métricas vitais e biométricas. Calcule o Índice de Massa Corporal (IMC), taxa metabólica basal BMR, hidratação ideal e macros de dietas.',
    introduction: 'O cuidado com o corpo e a mente começa com a mensuração de dados biológicos básicos. Estimar calorias metabólicas necessárias, acompanhar a composição corpórea ou a hidratação diária serve como base de apoio a rotinas de nutrição saudáveis, treinos físicos de alta performance e dietas de emagrecimento ou ganho muscular.',
    importance: 'A biologia humana utiliza equações validadas por organizações médicas mundiais (como a OMS). Nossas calculadoras biométricas aplicam fórmulas consagradas (como Harris-Benedict para TMB e a fórmula de IMC de Quetelet) para fornecer diretrizes e metas saudáveis adaptadas à sua altura e peso corporal.',
    faq: [
      { q: 'Como calcular meu Índice de Massa Corporal (IMC)?', a: 'O IMC é calculado dividindo o peso (em quilos) pela altura elevada ao quadrado (em metros). A faixa ideal recomendada pela OMS fica entre 18,5 e 24,9.' },
      { q: 'O que é taxa de metabolismo basal (TMB)?', a: 'É o total calórico gasto pelo organismo para manter as funções básicas de vida (respiração, batimentos cardíacos) em estado de repouso absoluto.' },
      { q: 'Quanta água devo beber por dia?', a: 'O cálculo padrão recomendado é de cerca de 35ml de água por cada quilo corporal, variando conforme a intensidade de atividade física do indivíduo.' },
      { q: 'Qual a proporção ideal de macros de uma dieta?', a: 'Usualmente, dietas de reeducação alimentar dividem calorias em 40% de carboidratos, 30% de proteínas e 30% de gorduras saudáveis, ajustáveis conforme a meta física.' }
    ]
  },
  matematica: {
    title: 'Calculadoras Matemáticas, Estatísticas e Acadêmicas | Brasil Calculadoras',
    description: 'Resoluções exatas para estudantes e profissionais. Use regras de três simples e inversas, análises estatísticas e contagem métrica de texto.',
    introduction: 'A matemática está presente no dia a dia acadêmico e em decisões operacionais de empresas de TI, comércio e logística. Encontrar proporções lineares, calcular desvios médios estatísticos ou formatar textos exige exatidão e agilidade de ferramentas dinâmicas de uso prático.',
    importance: 'Substitua o trabalho manual demorado de contas por algoritmos de resposta instantânea. Nossos utilitários ajudam estudantes nas matérias de vestibular/ENEM e fornecem a programadores e redatores ferramentas de precisão computacional.',
    faq: [
      { q: 'Como funciona a regra de três inversa?', a: 'Na proporção inversa, as grandezas mudam de forma oposta (ex: se a velocidade aumenta, o tempo de viagem diminui). O algoritmo multiplica os termos de forma linear em vez de cruzada.' },
      { q: 'Como funciona o contador de caracteres de texto?', a: 'Ele varre a string inserida e apresenta estatísticas sobre caracteres totais (com e sem espaços), número de palavras, parágrafos e estimativa média de tempo de leitura.' },
      { q: 'As ferramentas estatísticas suportam que tipos de dados?', a: 'Elas processam conjuntos de valores de amostras para obter a média aritmética, mediana, variância nominal e desvios padrão indicativos.' }
    ]
  },
  quimica_fisica: {
    title: 'Calculadoras de Química e Física | Brasil Calculadoras',
    description: 'Resolva problemas acadêmicos e científicos de física e química. Calcule velocidade média, converta temperaturas e determine a densidade da matéria.',
    introduction: 'A química e a física formam as bases das ciências naturais e da engenharia. Resolver equações de movimento linear, compreender conversões térmicas de calor ou mensurar a densidade volumétrica de elementos químicos exige fórmulas matemáticas rígidas e precisão de decimais. Nossos simuladores científicos automatizam estas contas para estudantes e profissionais.',
    importance: 'Cálculos científicos feitos manualmente estão sujeitos a erros de unidades de medida e aproximações de dízimas. O uso de equações pré-programadas com suporte a múltiplos inputs e conversões integradas de escalas térmicas e volumétricas garante estudos analíticos confiáveis em segundos.',
    faq: [
      { q: 'Como converter Celsius para Kelvin ou Fahrenheit?', a: 'Para Kelvin, soma-se 273,15 ao valor em Celsius. Para Fahrenheit, multiplica-se por 1,8 e soma-se 32. A calculadora faz estas conversões em tempo real.' },
      { q: 'O que mede a densidade absoluta?', a: 'A densidade expressa a quantidade de massa de uma matéria presente em um determinado volume (d = m / V). É muito útil para identificar substâncias e prever flutuabilidade.' },
      { q: 'Como calcular velocidade média de forma reversa?', a: 'Se você tiver a velocidade média e a distância, pode isolar o tempo (T = D / V). A ferramenta resolve qualquer uma das variáveis a partir das outras duas.' }
    ]
  },
  tecnologia: {
    title: 'Calculadoras de Tecnologia e Computação | Brasil Calculadoras',
    description: 'Ferramentas de computação, TI e design digital. Estime tempo de download de arquivos, proporção de tela aspect ratio e conversão de bases numéricas.',
    introduction: 'A infraestrutura de TI, o desenvolvimento de softwares e o design gráfico moderno exigem decisões rápidas sobre compressão de arquivos, taxas de transmissão de dados e redimensionamento de resoluções de telas. Esta central de tecnologia oferece ferramentas precisas para engenheiros, designers e desenvolvedores digitais.',
    importance: 'Otimizar o tempo de download em servidores ou planejar o aspect ratio perfeito de layouts sem distorções visuais previne retrabalhos técnicos. Nossos utilitários computacionais geram estimativas reais baseadas em lógica binária, taxas de bits e proporções geométricas exatas.',
    faq: [
      { q: 'Por que o tempo de download estimado varia?', a: 'Fatores como oscilações de banda, latência de rede, qualidade do servidor que hospeda o arquivo e overhead de pacotes de dados TCP/IP alteram a taxa real de transferência.' },
      { q: 'Como redimensionar imagens mantendo a proporção (Aspect Ratio)?', a: 'Multiplica-se a nova largura desejada pela altura original e divide-se pela largura original para obter a nova altura proporcional exata sem deformações.' },
      { q: 'Quais bases são usadas na conversão numérica?', a: 'As bases clássicas são Decimal (base 10, uso diário), Binária (base 2, eletrônica digital), Hexadecimal (base 16, endereçamento de memória e cores web) e Octal (base 8, sistemas unix).' }
    ]
  },
  veiculos: {
    title: 'Calculadoras de Veículos, Gastos e Combustível | Brasil Calculadoras',
    description: 'Simuladores automotivos para motoristas e proprietários. Calcule comparação de álcool vs gasolina, depreciação de preço FIPE, gastos de combustível de viagens e estimativa de IPVA.',
    introduction: 'Compreender o custo real de posse e operação de veículos é vital para o orçamento pessoal e a gestão de frotas comerciais. Gastos com combustíveis, desvalorização nominal anual, tributos como IPVA e despesas mecânicas costumam ser subestimados por motoristas. Nossas ferramentas automotivas trazem precisão matemática imediata para ajudar você a decidir qual combustível abastecer, projetar despesas de viagens interestaduais e simular taxas de financiamento de contratos CDC de automóveis.',
    importance: 'Calcular despesas veiculares previne gastos extras e otimiza a escolha de rotas e frotas de transporte. Utilizar estimativas com taxas médias de consumo e a variação da tabela FIPE permite negociar veículos com maior segurança comercial e planejar orçamentos anuais de licenciamento sem surpresas no caixa.',
    faq: [
      { q: 'Como funciona a calculadora de álcool ou gasolina?', a: 'Em termos de eficiência energética, o etanol rende em média 70% da gasolina. O algoritmo divide o preço do álcool pelo da gasolina. Se o resultado for menor que 0,70, abastecer com álcool é economicamente vantajoso.' },
      { q: 'O que é a depreciação da Tabela FIPE?', a: 'É a desvalorização média que os veículos sofrem no mercado nacional ao longo do tempo, usada como referência oficial para contratos de seguros, tributação de IPVA e revenda.' },
      { q: 'Como estimar o consumo de combustível para uma viagem?', a: 'Multiplique a distância total de ida e volta pelo preço do combustível e divida pelo rendimento médio do veículo (km por litro) sob condições urbanas ou de rodovia.' },
      { q: 'Quais custos adicionais de viagens rodoviárias devo prever?', a: 'Além do combustível, lembre-se de somar tarifas de pedágios, custos proporcionais de desgaste de pneus e manutenções mecânicas por km rodado.' }
    ]
  },
  imobiliario: {
    title: 'Calculadoras Imobiliárias, Financiamento e Aluguel | Brasil Calculadoras',
    description: 'Simuladores completos para compra, locação e investimentos em imóveis. Compare financiamento Price vs SAC, reajuste de aluguel (IGP-M/IPCA), taxa ITBI e Cap Rate.',
    introduction: 'A aquisição ou locação de imóveis representa uma das maiores movimentações de capital na vida de um indivíduo ou corporação. Escolher entre sistemas de amortização SAC ou Price, calcular o rendimento líquido de aluguéis (Cap Rate) ou estimar impostos municipais de transferência (ITBI) exige cálculos de longo prazo que impactam diretamente o patrimônio de famílias e investidores. Nossos simuladores imobiliários trazem clareza matemática instantânea para subsidiar suas decisões.',
    importance: 'Realizar simulações imobiliárias completas impede a contratação de juros abusivos e orienta o investidor a maximizar sua taxa de retorno. A amortização planejada e o conhecimento prévio de taxas de cartório e de impostos previnem quebras de contrato de compra e venda e garantem investimentos sustentáveis.',
    faq: [
      { q: 'Qual a diferença básica de amortização entre SAC e Price?', a: 'No sistema SAC (Sistema de Amortização Constante), as prestações iniciais são mais altas e decrescem ao longo do contrato, pois a amortização do saldo devedor é constante. Na Tabela Price, as parcelas são fixas do início ao fim, mas amortizam menos capital nas primeiras parcelas.' },
      { q: 'O que é Cap Rate e como calcular no mercado imobiliário?', a: 'É a taxa de retorno anual de um imóvel alugado. É calculada dividindo o faturamento líquido anual do aluguel pelo valor total de mercado do imóvel.' },
      { q: 'Qual índice é mais usado para reajuste de aluguéis no Brasil?', a: 'Historicamente, o IGP-M (FGV) é o mais utilizado nos contratos de locação. No entanto, muitos acordos modernos adotam o IPCA (IBGE) por refletir melhor a inflação oficial ao consumidor.' },
      { q: 'Como calcular o imposto de ITBI na compra do imóvel?', a: 'O ITBI é um tributo municipal que varia entre 2% e 4% do valor venal de referência do imóvel ou do valor de transação declarada, dependendo da cidade onde o bem está localizado.' }
    ]
  },
  aposentadoria: {
    title: 'Simuladores de Aposentadoria, Previdência e INSS | Brasil Calculadoras',
    description: 'Planeje seu futuro e independência financeira. Calcule o tempo de contribuição para aposentadoria do INSS, previdência privada, acúmulo de patrimônio e renda passiva de viver de renda.',
    introduction: 'Garantir um futuro estável e alcançar a independência financeira exige planejamento precoce e entendimento das regras previdenciárias e financeiras nacionais. As sucessivas reformas previdenciárias brasileiras trouxeram regras de transição por pontos e idade mínima progressiva, tornando o cálculo do tempo necessário para se aposentar pelo INSS um desafio. Ao mesmo tempo, estruturar planos de previdência privada ou carteiras de investimentos para viver de renda passiva exige o cálculo de juros reais descontados da inflação.',
    importance: 'O planejamento de longo prazo previne a dependência financeira no futuro e otimiza as contribuições ao INSS. Simular o patrimônio mínimo necessário para viver de renda permite estabelecer metas anuais claras de aportes regulares e complementares de acordo com o padrão de vida almejado.',
    faq: [
      { q: 'Quais são as principais regras de transição da aposentadoria do INSS?', a: 'Incluem a transição por pontuação (soma de idade e tempo de contribuição), a idade mínima progressiva, o pedágio de 50% para contratos perto da data antiga e o pedágio de 100% para novos regimes.' },
      { q: 'Qual a diferença entre previdência complementar PGBL e VGBL?', a: 'O PGBL permite abater até 12% da renda tributável anual na declaração completa do IR, sendo tributado sobre o total acumulado no resgate. O VGBL não permite deduções, mas o imposto incide exclusivamente sobre o lucro gerado.' },
      { q: 'O que é a regra dos 4% (ou SWR) para viver de renda passiva?', a: 'É uma métrica financeira que sugere que você pode retirar com segurança 4% do valor total da sua carteira de investimentos no primeiro ano de aposentadoria, reajustado pela inflação nos anos seguintes, sem exaurir o patrimônio por 30 anos.' },
      { q: 'Qual o teto máximo de pagamento de benefício do INSS?', a: 'É o valor limite estabelecido anualmente pelo governo federal para as aposentadorias do Regime Geral. Contribuições acima deste limite não elevam o valor do benefício final.' }
    ]
  },
  pets: {
    title: 'Calculadoras de Pets & Animais | Brasil Calculadoras',
    description: 'Ferramentas de nutrição, hidratação e idade biológica de cães e gatos. Calcule a porção diária de ração ideal, a meta de água e a idade do seu pet em anos humanos.',
    introduction: 'Cuidar de um animal de estimação exige atenção a detalhes biológicos e nutricionais fundamentais. Fatores como o peso, o nível de atividade física e a idade influenciam diretamente a quantidade de alimento seca (ração) e a hidratação diária de que seu pet necessita para manter-se saudável e com energia. Nossas calculadoras veterinárias simplificam estas estimativas teóricas.',
    importance: 'Evitar tanto a obesidade quanto a desnutrição nos pets previne o surgimento de problemas articulares, cardíacos e renais. Obter metas estimadas baseadas em equações de necessidade calórica diária e necessidades hídricas ajuda tutores a regular a porção de ração e monitorar se o pet está bebendo a quantidade correta de água.',
    faq: [
      { q: 'Como é calculada a porção de ração para cães?', a: 'O cálculo baseia-se na Necessidade Energética Basal (RER) de acordo com o peso metabólico do animal, multiplicada por um fator específico que varia com a idade, castração e nível de atividade.' },
      { q: 'Quanta água um cão ou gato deve beber?', a: 'Em média, cães precisam de 50 a 60ml de água por kg ao dia, e gatos precisam de 45 a 50ml por kg. Em climas mais quentes, essa necessidade aumenta cerca de 30%.' },
      { q: 'Por que calcular a idade humana do pet?', a: 'Nos ajuda a compreender melhor o estágio de desenvolvimento do animal (infância, juventude, idade adulta ou velhice), adequando os cuidados de saúde e a ração de acordo com a idade biológica real.' }
    ]
  }
};

// Fallback hub data for less visited categories
const getFallbackCategoryHubContent = (key: string): CategoryHubSeoContent => {
  const label = CATEGORY_MAP_RAW[key] || key;
  return {
    title: `Calculadoras de ${label} | Brasil Calculadoras`,
    description: `Ferramentas online gratuitas para ${label}. Calcule parâmetros de forma rápida, eficiente e precisa com nossos simuladores específicos.`,
    introduction: `Facilite suas rotinas diárias e tomadas de decisão utilizando as ferramentas de ${label} desenvolvidas especificamente para otimizar processos de forma prática. Fórmulas complicadas são simplificadas em uma interface moderna e acessível, gerando relatórios úteis instantaneamente.`,
    importance: `O planejamento exato e a medição de variáveis específicas evitam o desperdício de insumos, previnem custos desnecessários e garantem maior segurança jurídica e operacional no setor de ${label}. Nossos utilitários asseguram respostas rápidas baseadas em padrões matemáticos e técnicos.`,
    faq: [
      { q: `Como as ferramentas de ${label} ajudam no planejamento?`, a: `Elas automatizam a inserção de variáveis, permitindo simulações rápidas e a visualização de cenários práticos antes da execução real de projetos.` },
      { q: `Os cálculos são atualizados?`, a: `Sim, todos os simuladores operam sob diretrizes técnicas revisadas periodicamente para refletir padrões de mercado e normas reguladoras.` }
    ]
  };
};

export const getCategoryHubContent = (categoryKey: string): CategoryHubSeoContent => {
  return CATEGORY_SEO_DATABASE[categoryKey] || getFallbackCategoryHubContent(categoryKey);
};

// Category-specific generator rules for dynamic calculators
const generateCategorySeoText = (calc: CalculatorDef): Partial<CalculatorSeoContent> => {
  const category = calc.category;
  const name = calc.name;
  const desc = calc.description;
  const inputLabels = calc.inputs?.map(i => i.label).join(', ') || '';
  const outputLabels = calc.outputs?.map(o => o.label).join(', ') || '';

  let whatIs = '';
  let howItWorks = '';
  let practicalExample = '';
  let whenToUse = '';
  let importantTips = '';
  let sources: { name: string; url: string }[] = [];
  let faq: { q: string; a: string }[] = [];

  switch (category) {
    case 'quimica_fisica':
      whatIs = `A ciência exata nos permite compreender e metrificar o comportamento da matéria e das forças no universo. A ferramenta **${name}** serve como um assistente de cálculo científico e acadêmico para estudantes de ensino médio, vestibulandos, professores ou profissionais técnicos. Com ela, equações complexas de transformações térmicas, cinemática básica e densidade volumétrica são simplificadas. O planejamento de experimentos de laboratório ou a resolução de tarefas de física e química tornam-se muito mais rápidos e menos sujeitos a erros manuais de aproximação ou conversão de escalas.`;
      howItWorks = `A lógica interna da calculadora processa as grandezas inseridas em *${inputLabels}* de acordo com as constantes físicas universais (como a conversão de escala termométrica ou a relação de massa e volume). Ela realiza a equivalência matemática e apresenta os valores exatos de *${outputLabels}* de forma imediata.`;
      practicalExample = `Ao preencher os campos com os valores experimentais da sua amostra (por exemplo, a massa em gramas e o volume em centímetros cúbicos), o sistema calcula instantaneamente o resultado final correspondente (como a densidade absoluta em g/cm³), servindo como contraprova analítica direta para seus estudos de laboratório.`;
      whenToUse = `Use este simulador científico ao resolver exercícios escolares ou de vestibular, preparar relatórios práticos de química e física teórica, ou validar conversões rápidas de escalas de temperatura e deslocamentos lineares.`;
      importantTips = `Certifique-se de inserir os valores utilizando as unidades de medidas especificadas nas caixas do formulário para evitar distorções de escala métrica nos resultados finais.`;
      sources = [
        { name: 'Portal da Física - Só Física', url: 'https://www.sofisica.com.br/' },
        { name: 'Química Geral e Inorgânica - Só Química', url: 'https://www.soquimica.com.br/' }
      ];
      faq = [
        { q: `Como interpretar o resultado do cálculo de ${name}?`, a: `Os resultados representam valores exatos baseados nas leis clássicas da termodinâmica, cinemática e propriedades da matéria, sob condições ideais de medição.` },
        { q: 'Posso usar esta ferramenta para fins profissionais?', a: 'Sim, a precisão matemática atende a necessidades acadêmicas e de estimativas rápidas em rotinas de engenharia ou laboratório, embora não substitua laudos oficiais.' }
      ];
      break;

    case 'tecnologia':
      whatIs = `No dinâmico universo digital e da computação, a agilidade na conversão de dados e no dimensionamento técnico previne erros de infraestrutura de TI e problemas de layout em design e desenvolvimento web. A ferramenta **${name}** foi desenhada para programadores, administradores de sistemas, designers gráficos, profissionais de marketing e estudantes de computação. Ela otimiza processos cotidianos de cálculo de taxas de bits de transmissão de rede, ajuste de aspect ratio de telas responsivas e conversão ágil entre bases numéricas binária e hexadecimal.`;
      howItWorks = `O sistema recebe as grandezas técnicas nos campos de *${inputLabels}* (como largura em pixels ou tamanho em Megabytes) e aplica algoritmos binários e aritméticos de conversão ou proporcionalidade geométrica. O motor de cálculo retorna as saídas precisas estruturadas em *${outputLabels}*.`;
      practicalExample = `Ao planejar o upload de uma imagem ou vídeo para um site, você pode inserir as dimensões originais de referência e a nova largura pretendida. O algoritmo calcula de imediato a nova altura correspondente no aspect ratio exato (ex: 16:9), impedindo que a imagem seja exibida de forma esticada ou achatada na interface.`;
      whenToUse = `Utilize este utilitário tecnológico ao configurar resoluções de telas e designs de interface responsiva, estimar o tempo necessário de download para transferência de grandes backups em rede, ou realizar conversões binárias de programação.`;
      importantTips = `Lembre-se de diferenciar unidades de bits (velocidade) e bytes (armazenamento), já que 1 byte é composto por 8 bits, o que influencia diretamente cálculos de transmissão de dados.`;
      sources = [
        { name: 'W3C - Web Design & HTML Standards', url: 'https://www.w3.org/' },
        { name: 'MDN Web Docs - MDN Mozilla Developer Network', url: 'https://developer.mozilla.org/' }
      ];
      faq = [
        { q: `A ${name} suporta conversões com decimais?`, a: `Os cálculos de aspect ratio e download processam decimais perfeitamente. Já o conversor de bases numéricas opera estritamente com números inteiros positivos conforme as regras de conversão binária e hexadecimal.` },
        { q: 'Como converter bits para bytes rapidamente?', a: 'Basta dividir o valor em bits por 8 para obter o equivalente em bytes. Exemplo: 80 Megabits por segundo (Mbps) equivalem a 10 Megabytes por segundo (MB/s) de taxa de download máxima.' }
      ];
      break;

    case 'agronegocio':
      whatIs = `O agronegócio moderno é impulsionado por tecnologia e análises exatas. A ferramenta **${name}** foi especialmente projetada para produtores rurais, agrônomos e gestores agrícolas que buscam maximizar a eficiência no campo. Através dela, é possível realizar diagnósticos rápidos sobre a plantação, solo e rebanho, reduzindo a incerteza climática e mercadológica. Planejar o manejo de insumos agrícolas e calcular variáveis do agronegócio de forma antecipada evita a escassez de recursos na lavoura ou desperdícios com superdosagem de corretivos e fertilizantes, gerando uma colheita mais uniforme e rentável.`;
      howItWorks = `O cálculo correlaciona dados técnicos de entrada como *${inputLabels}* para gerar previsões de rendimento. O motor de cálculo simula a produtividade por hectare ou massa biológica cruzando os fatores limitantes do solo e de nutrientes. A fórmula matemática interna processa as proporções e estima os valores correspondentes a *${outputLabels}*.`;
      practicalExample = `Ao preencher a calculadora com os parâmetros de produção padrão do agronegócio, você obtém um diagnóstico imediato. Por exemplo, simulando com os insumos habituais recomendados para a cultura da região, o algoritmo calcula o peso final estimado ou a quantidade necessária de matéria seca para o manejo diário ideal, auxiliando na compra programada de suprimentos.`;
      whenToUse = `Utilize esta ferramenta no planejamento pré-safra, na definição das rotinas de fertilização teórica do solo, na estimativa da massa seca do rebanho de gado ou na regulagem linear de plantadeiras e sementes.`;
      importantTips = `Fatores climáticos como índices de chuvas locais e qualidade genética de mudas/sementes exercem papel direto sobre o resultado de campo, devendo o produtor somar estas variáveis biológicas à projeção matemática.`;
      sources = [
        { name: 'Embrapa - Empresa Brasileira de Pesquisa Agropecuária', url: 'https://www.embrapa.br/' },
        { name: 'Ministério da Agricultura e Pecuária - MAPA', url: 'https://www.gov.br/agricultura/pt-br' }
      ];
      faq = [
        { q: `Como interpretar o resultado da ${name}?`, a: `Os valores calculados representam estimativas técnicas recomendadas para condições padrão de solo e manejo, servindo como guia de campo.` },
        { q: 'Devo consultar um engenheiro agrônomo?', a: 'Sim, a ferramenta oferece simulações teóricas preliminares. O acompanhamento de um profissional de agronomia é indispensável para receitar dosagens e defensivos.' }
      ];
      break;

    case 'logistica':
      whatIs = `A otimização de frotas e o cálculo exato de custos de transporte são determinantes para a rentabilidade de transportadoras, embarcadores e motoristas autônomos. A **${name}** oferece uma resposta computacional rápida e simplificada para dimensionar despesas rodoviárias. O planejamento logístico brasileiro exige precisão técnica no frete por quilômetro, cubagem de cargas e tempos de repouso regulamentares da Lei do Motorista. Esta calculadora de logística visa automatizar a estimativa dos fretes de carga, garantindo celeridade e conformidade financeira às partes contratantes do transporte de mercadorias.`;
      howItWorks = `A lógica operacional computa os parâmetros de distância de viagem, desgaste e peso inseridos no painel de *${inputLabels}*. Ela calcula a cubagem volumétrica ou a taxa de estadia rodoviária, devolvendo as respostas de *${outputLabels}*. A fórmula garante que os limites regulamentares e as médias de consumo de óleo diesel por tipo de veículo sejam respeitados.`;
      practicalExample = `Em uma rota interestadual padrão de média distância, ao inserir os valores médios de combustível do trajeto, custo de pneus e pedágios federais vigentes, a calculadora apresenta a taxa de frete ideal por tonelada ou cubagem que cubra todos os custos fixos operacionais e proporcione a margem de lucro operacional desejada.`;
      whenToUse = `Use o simulador de fretes logísticos ao negociar o valor da carga com o contratante, ao planejar a roteirização de viagens de longa distância de frotas de caminhões ou para quantificar o tempo de estadia improdutiva e a cubagem útil do baú do veículo.`;
      importantTips = `Sempre considere margens adicionais de cerca de 10% a 15% para prever custos extraordinários das estradas, como desvios de rota devido a obras, reajustes repentinos de pedágios ou manutenções mecânicas urgentes.`;
      sources = [
        { name: 'ANTT - Agência Nacional de Transportes Terrestres', url: 'https://www.gov.br/antt/pt-br' },
        { name: 'Tabela de Frete ANTT - Legislação Oficial', url: 'https://www.gov.br/antt/pt-br/assuntos/multimodal/piso-minimo-do-frete' }
      ];
      faq = [
        { q: 'O valor gerado inclui custos de pedágio?', a: 'O cálculo simula os componentes principais. É altamente recomendado somar os valores específicos de pedágios da rota definida para obter o preço de frete total exato.' },
        { q: 'Qual a importância de planejar a logística de transporte?', a: 'O frete mal calculado é uma das principais causas de prejuízo em rotas rodoviárias. Mensurar os custos previne rodar abaixo do ponto de equilíbrio.' }
      ];
      break;

    case 'construcao':
      whatIs = `Calcular com precisão o quantitativo de materiais de construção civil evita o desperdício de insumos na obra, reduz custos de compra e previne a interrupção de reformas por falta de tijolos, tintas ou pisos. A calculadora **${name}** serve como um assistente de planejamento técnico para pedreiros, construtores, arquitetos ou proprietários residenciais. Esta ferramenta calcula de forma rápida e prática a quantidade exata de materiais necessários a partir das dimensões da área a ser reformada ou construída, facilitando a elaboração de orçamentos e idas ao depósito de materiais de construção.`;
      howItWorks = `O sistema solicita dados de dimensões e margens de perda informados em *${inputLabels}*. A fórmula calcula a área quadrada total ou o volume cúbico e cruza com o rendimento padrão do material selecionado (como metragem de revestimentos cerâmicos ou rendimento de latas de tinta), exibindo as respostas em *${outputLabels}*.`;
      practicalExample = `Ao planejar revestir um cômodo, o usuário insere a largura e comprimento da parede ou piso. O sistema calcula a área bruta de cobertura, aplica uma margem padrão de 10% para cobrir recortes e quebras nas peças e exibe a quantidade ideal de caixas de piso e pacotes de argamassa a serem comprados para a execução.`;
      whenToUse = `Utilize esta ferramenta no momento de planejar reformas residenciais ou comerciais, elaborar orçamentos iniciais de obras e quantificar alvenaria, tinturas de paredes e coberturas cerâmicas de superfícies.`;
      importantTips = `Adicione sempre uma margem de segurança de 10% a 15% para cobrir quebras acidentais de peças e recortes em cantos e rodapés de formato complexo.`;
      sources = [
        { name: 'CBIC - Câmara Brasileira da Indústria da Construção', url: 'https://cbic.org.br/' },
        { name: 'Associação Brasileira de Normas Técnicas - ABNT', url: 'https://www.abnt.org.br/' }
      ];
      faq = [
        { q: 'Por que o cálculo inclui margem de perda?', a: 'Durante a execução, materiais sofrem cortes em rodapés e cantos, gerando sobras que não podem ser aproveitadas. A margem evita que falte material na finalização.' },
        { q: 'Qual a precisão do estimador de argamassa?', a: 'Ele estima valores de consumo padrão de mercado. Espessuras de contrapiso e tipos de desempenadeiras podem alterar o rendimento na prática da obra.' }
      ];
      break;

    case 'energia':
      whatIs = `A transição energética para fontes renováveis e a eficiência de consumo residencial e comercial são prioridades ecológicas e financeiras. A **${name}** quantifica a economia gerada por painéis solares fotovoltaicos, projeta contas mensais de luz baseadas no uso de eletrodomésticos e calcula reduções na emissão de carbono de ações sustentáveis. Este utilitário de energia simplifica equações complexas de tarifas da concessionária (como bandeiras tarifárias e impostos) para fornecer dados práticos sobre o retorno financeiro de investimentos sustentáveis.`;
      howItWorks = `O cálculo analisa o consumo em quilowatts-hora (kWh) ou os valores de radiação e potência média descritos em *${inputLabels}*. O algoritmo simula a amortização do sistema solar ou o custo de consumo por horas ativo, fornecendo a projeção econômica e ecológica em *${outputLabels}*.`;
      practicalExample = `Simulando um sistema de energia solar residencial de médio porte, ao inserir o valor médio da fatura mensal de energia da família, a calculadora estima o número de painéis solares necessários para suprir a demanda e o prazo estimado de payback (retorno do investimento inicial por economia nas contas de luz).`;
      whenToUse = `Use esta ferramenta ao planejar instalar energia solar na sua residência ou empresa, ao mapear o consumo de aparelhos elétricos para reduzir custos de luz ou para quantificar metas de pegada de carbono sustentável.`;
      importantTips = `Tarifas regionais de concessionárias e variações climáticas sazonais de radiação solar afetam a geração fotovoltaica real, servindo os cálculos como balizas de planejamento técnico.`;
      sources = [
        { name: 'ANEEL - Agência Nacional de Energia Elétrica', url: 'https://www.gov.br/aneel/pt-br' },
        { name: 'ABSOLAR - Associação Brasileira de Energia Solar Fotovoltaica', url: 'https://www.absolar.org.br/' }
      ];
      faq = [
        { q: 'O que é a taxa mínima da concessionária de energia?', a: 'Mesmo gerando 100% da sua energia solar, faturas de redes ligadas ao sistema de distribuição pagam taxas básicas de iluminação pública e disponibilidade.' },
        { q: 'Como economizar na conta de luz?', a: 'Mapeie os aparelhos de maior consumo em kWh e controle a duração de uso diário sugerida pela nossa calculadora de aparelhos elétricos.' }
      ];
      break;

    case 'pets':
      whatIs = `Cuidar da saúde e do bem-estar dos nossos animais de estimação é uma prioridade que exige atenção a parâmetros biológicos e nutricionais exatos. A ferramenta **${name}** serve como um guia de apoio para tutores, cuidadores e profissionais do setor pet. Com ela, é possível estimar a idade humana equivalente de cães e gatos, calcular a porção diária ideal de ração seca e planejar a hidratação recomendada. Centralizar essas estimativas previne problemas decorrentes de sobredose alimentar (como a obesidade canina) e desidratação em felinos.`;
      howItWorks = `O motor de cálculo analisa as variáveis inseridas nos campos de *${inputLabels}* (como peso em kg, estágio de vida e nível de atividade) e aplica equações de necessidade energética basal ou fatores de conversão biológica por porte. As respostas precisas são geradas nos campos de *${outputLabels}*.`;
      practicalExample = `Ao preencher a calculadora de ração com o peso e atividade do seu cachorro, o algoritmo processa a necessidade metabólica real do animal e indica a quantidade exata em gramas diárias que deve ser oferecida, dividida em porções equilibradas.`;
      whenToUse = `Utilize este utilitário de pets sempre que precisar ajustar a dieta do seu cão ou gato, monitorar o consumo hídrico diário em épocas quentes ou estimar o envelhecimento biológico real do seu companheiro de estimação.`;
      importantTips = `As estimativas são calculadas com base em equações nutricionais padrão. Lembre-se de que a qualidade calórica de cada marca de ração varia, sendo indispensável consultar as tabelas do fabricante ou um médico veterinário.`;
      sources = [
        { name: 'Embrapa - Produção de Animais de Estimação', url: 'https://www.embrapa.br/' },
        { name: 'CRMV - Conselho Regional de Medicina Veterinária', url: 'https://www.cfmv.gov.br/' }
      ];
      faq = [
        { q: `Como as calculadoras de pets ajudam no dia a dia?`, a: `Elas fornecem estimativas rápidas baseadas em consensos veterinários de alimentação e metabolismo, auxiliando na manutenção do peso saudável do seu animal.` },
        { q: 'Devo levar meu pet ao veterinário?', a: 'Sim. Os simuladores servem para suporte educativo e planejamento inicial doméstico, não substituindo exames e dietas veterinárias personalizadas.' }
      ];
      break;

    default:
      whatIs = `A calculadora **${name}** foi desenhada para facilitar o seu dia a dia, automatizando fórmulas matemáticas em respostas imediatas para uso profissional ou acadêmico. Muitas vezes nos deparamos com equações extensas e variáveis complexas que demandam tempo para serem resolvidas manualmente. Com este simulador rápido e intuitivo de ${CATEGORY_MAP_RAW[category] || category}, o processo é simplificado em uma interface moderna e responsiva. O planejamento correto por meio de dados precisos reduz consideravelmente a incidência de erros em projetos comerciais, estudos acadêmicos e rotinas financeiras pessoais.`;
      howItWorks = `A lógica de cálculo opera sob parâmetros definidos em *${inputLabels}*. A fórmula matemática correspondente valida os dados digitados e computa as proporções necessárias para extrair o resultado, apresentando-o de forma clara nos campos de *${outputLabels}*.`;
      practicalExample = `Preenchendo a ferramenta com os parâmetros padrão recomendados, o sistema executa o fluxo em frações de segundo. O resultado obtido serve como uma importante baliza analítica para orientar sua tomada de decisão imediata ou estudos teóricos da área.`;
      whenToUse = `Utilize esta ferramenta sempre que precisar de uma simulação matemática rápida de ${CATEGORY_MAP_RAW[category] || category}, seja para validar dados antes de assinar contratos, revisar exercícios escolares ou planejar compras.`;
      importantTips = `Recomenda-se sempre double-check nos dados inseridos, pois erros de digitação de vírgulas ou unidades podem distorcer a projeção final calculada pela ferramenta.`;
      sources = [
        { name: 'Portal Brasil - Serviços do Governo Federal', url: 'https://www.gov.br/' },
        { name: 'Instituto Brasileiro de Geografia e Estatística - IBGE', url: 'https://www.ibge.gov.br/' }
      ];
      faq = [
        { q: `Como a ${name} me ajuda a economizar tempo?`, a: `Ela centraliza as regras e alíquotas oficiais de forma automática, eliminando a necessidade de pesquisar fórmulas ou configurar tabelas manuais.` },
        { q: 'Os cálculos têm validade jurídica?', a: 'Não, os resultados emitidos têm caráter informativo de apoio de planejamento informal e simulações preliminares.' }
      ];
      break;
  }

  // Generate 5-10 intent FAQs dynamically if faq list is small
  const generatedFaq = [...(faq.length > 0 ? faq : calc.faq?.map(f => ({ q: f.question || (f as any).q || '', a: f.answer || (f as any).a || '' })) || [])];
  
  if (generatedFaq.length < 5) {
    generatedFaq.push(
      { q: `Como usar a ${name} de forma correta?`, a: `Preencha os dados do formulário com as informações solicitadas (como valores e prazos), selecione a opção adequada se aplicável e verifique o resultado imediatamente na área de resultados.` },
      { q: `Quais dados de entrada são necessários na ${name}?`, a: `A calculadora solicita dados como: ${inputLabels || 'valores base'}. Certifique-se de preencher as caixas utilizando pontos e vírgulas corretamente.` },
      { q: `Os resultados exibidos na ${name} são confiáveis?`, a: `Sim, o algoritmo utiliza regras matemáticas e fórmulas oficiais da área de ${CATEGORY_MAP_RAW[category] || category}. No entanto, servem como simulações informativas e de projeção técnica.` },
      { q: `Posso salvar os dados obtidos na ${name}?`, a: `Sim! Você pode clicar no botão "Salvar Operação" no topo da central para gravar o cálculo atual no seu histórico local da sessão, exportar em Planilha Excel ou gerar um PDF oficial do relatório.` }
    );
  }

  // Ensure they have between 5 and 10 questions
  const slicedFaq = generatedFaq.slice(0, 8);

  return {
    title: `${name} Online Grátis | Brasil Calculadoras`,
    description: desc,
    whatIs,
    howItWorks,
    practicalExample,
    whenToUse,
    importantTips,
    sources,
    lastUpdated: 'Junho de 2026',
    faq: slicedFaq
  };
};

export const getSeoContentForCalculator = (calc: CalculatorDef): CalculatorSeoContent => {
  const customData = CORE_SEO_DATABASE[calc.id] || {};
  const generatedData = generateCategorySeoText(calc);

  return {
    title: customData.title || generatedData.title || `${calc.name} | Brasil Calculadoras`,
    description: customData.description || generatedData.description || calc.description,
    whatIs: customData.whatIs || generatedData.whatIs || '',
    howItWorks: customData.howItWorks || generatedData.howItWorks || '',
    practicalExample: customData.practicalExample || generatedData.practicalExample || '',
    whenToUse: customData.whenToUse || generatedData.whenToUse || '',
    importantTips: customData.importantTips || generatedData.importantTips || '',
    sources: customData.sources || generatedData.sources || [],
    lastUpdated: customData.lastUpdated || generatedData.lastUpdated || 'Junho de 2026',
    faq: customData.faq || generatedData.faq || []
  };
};
