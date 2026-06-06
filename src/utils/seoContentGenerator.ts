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
  'educacao-enem': 'educacao'
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
  educacao: 'educacao-enem'
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
  educacao: 'Educação & ENEM'
};

// Bespoke database for popular calculators (EEAT Content and intent FAQs)
const CORE_SEO_DATABASE: Record<string, Partial<CalculatorSeoContent>> = {
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
    practicalExample: 'Considere que você inicia uma aplicação com um capital inicial de R$ 5.000,00 e realiza aportes mensais adicionais de R$ 300,00. Estimando uma taxa de juros conservadora de 10% ao ano (cerca de 0,8% ao mês) por um prazo total de 120 meses (10 anos), o total investido do próprio bolso será de R$ 41.000,00. O montante acumulado final será de cerca de R$ 68.000,00, o que significa que mais de R$ 27.000,00 foram gerados puramente pelo efeito dos juros acumulados sobre juros.',
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
    practicalExample: 'Um profissional com salário base de R$ 3.000,00 por mês, desligado sem justa causa após trabalhar exatamente 8 meses na empresa, com aviso prévio indenizado e sem férias vencidas, receberia: Saldo de dias trabalhados do último mês, aviso prévio indenizado de R$ 3.000,00 (mais dias proporcionais por lei de tempo de serviço), 8/12 avos de 13º salário proporcional (R$ 2.000,00), 8/12 avos de férias proporcionais acrescidas do terço constitucional (R$ 2.666,66) e a multa de 40% do saldo acumulado do FGTS.',
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
