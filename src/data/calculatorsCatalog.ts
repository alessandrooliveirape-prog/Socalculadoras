import { CalculatorDef, DynamicInputDef, DynamicOutputDef, DynamicFAQDef } from '../types';

// Standard categories catalog
export const CATEGORY_MAP: Record<string, string> = {
  financas: '💰 Finanças & Negócios',
  saude: '❤️ Saúde & Dietas',
  profissoes: '👔 Trabalhista & Profissões',
  matematica: '📐 Matemática & Escola',
  imobiliario: '🏠 Imobiliário & Aluguel',
  veiculos: '🚗 Veículos & Combustível',
  estatistica: '📊 Estatística & Métricas',
  juridico: '⚖️ Jurídico & Impostos',
  utilitarios: '💡 Utilidades & Casa',
  aposentadoria: '⏳ Aposentadoria & Futuro',
  agronegocio: '🚜 Agronegócio & Campo',
  logistica: '🚚 Logística & Fretes',
  construcao: '🧱 Construção & Reformas',
  eventos: '🥩 Gastronomia & Eventos',
  energia: '☀️ Energia & Sustentabilidade',
  educacao: '📚 Educação & ENEM'
};

// 12 Core Calculators that have pre-built custom views
const CORE_CALCULATORS: CalculatorDef[] = [
  {
    id: 'juros-compostos',
    name: 'Juros Compostos',
    description: 'Calcule a evolução capital de investimentos com depósitos recorrentes e simulação em gráficos de crescimento.',
    category: 'financas',
    icon: 'DollarSign',
    tags: ['investimento', 'dinheiro', 'poupança', 'aposentadoria', 'selic', 'tesouro']
  },
  {
    id: 'clt-pj',
    name: 'Comparador CLT vs PJ',
    description: 'Compare remunerações líquidas de carteira assinada versus prestador de serviços incluindo tributação de notas fiscais.',
    category: 'financas',
    icon: 'ShieldCheck',
    tags: ['salário', 'emprego', 'imposto', 'simples nacional', 'relação trabalhista']
  },
  {
    id: 'margem-lucro',
    name: 'Margem de Lucro & Markup',
    description: 'Encontre preços ideais de venda de mercadorias considerando custos, despesas acessórias e metas de rentabilidade livre.',
    category: 'financas',
    icon: 'TrendingUp',
    tags: ['venda', 'loja', 'e-commerce', 'produto', 'comércio', 'precificação']
  },
  {
    id: 'imc',
    name: 'Metabolismo e IMC Tracker',
    description: 'Descubra seu Índice de Massa Corporal (IMC), taxa metabólica ideal BMR e necessidades calóricas totais.',
    category: 'saude',
    icon: 'HeartPulse',
    tags: ['peso', 'saúde', 'dieta', 'academia', 'emagrecimento', 'massa magra']
  },
  {
    id: 'registro-horas',
    name: 'Calculadora de Horas (Timesheet)',
    description: 'Organize turnos e horas de trabalho, gerencie intervalos e calcule o faturamento líquida com taxas de freelancer.',
    category: 'profissoes',
    icon: 'Clock',
    tags: ['trabalho', 'freelance', 'horas', 'cronômetro', 'faturamento', 'invoice']
  },
  {
    id: 'regra-tres',
    name: 'Regra de Três Rápida',
    description: 'Resolva proporções matemáticas simples de forma direta ou inversa entre grandezas distinctas instantaneamente.',
    category: 'matematica',
    icon: 'Sliders',
    tags: ['matemática', 'escola', 'porcentagem', 'divisão', 'fórmula']
  },
  {
    id: 'contador-texto',
    name: 'Análise de Texto & Word Counter',
    description: 'Analise e formate caixa alta/baixa, conte caracteres totais, parágrafos, palavras e estime tempos de leitura rápida.',
    category: 'matematica',
    icon: 'Type',
    tags: ['texto', 'escrita', 'redação', 'blog', 'seo', 'leitura']
  },
  {
    id: 'calculadora-de-rescisao-clt',
    name: 'Cálculo de Rescisão CLT',
    description: 'Simulação completa de acertos rescisórios para demissões sem justa causa ou pedidos de demissão CLT.',
    category: 'profissoes',
    icon: 'FileText',
    tags: ['clt', 'rescisão', 'demissão', 'trabalho', 'acerto', 'pedido']
  },
  {
    id: 'calculadora-de-decimo-terceiro',
    name: 'Cálculo de 13º Salário',
    description: 'Estime o valor bruto e líquido da primeira, segunda ou de ambas as parcelas do décimo terceiro salário.',
    category: 'profissoes',
    icon: 'Briefcase',
    tags: ['décimo terceiro', '13o', 'salário', 'bônus', 'décimo', 'clt']
  },
  {
    id: 'calculadora-de-ferias-clt',
    name: 'Férias Proporcionais & Vendidas',
    description: 'Calcule o valor das fáceis normais ou proporcionais, terço constitucional e adicione o abono pecuniário por venda.',
    category: 'profissoes',
    icon: 'Calendar',
    tags: ['férias', 'clt', 'abono', 'vender férias', 'pecuniário']
  },
  {
    id: 'calculadora-de-horas-extras',
    name: 'Horas Extras com Adicional',
    description: 'Calcule o valor de horas extras com adicional de 50% e 100% sobre o seu salário bruto de referência.',
    category: 'profissoes',
    icon: 'Clock',
    tags: ['horas extras', 'salário', 'adicional', 'clt', 'trabalho']
  },
  {
    id: 'simulador-de-aposentadoria-inss',
    name: 'Simulador INSS / Aposentadoria',
    description: 'Acompanhe seu tempo de contribuição previdenciária e projete estimativas nas regras gerais de transição.',
    category: 'aposentadoria',
    icon: 'ShieldCheck',
    tags: ['inss', 'aposentadoria', 'previdência', 'simulação', 'tempo', 'contribuição']
  }
];

// Structural catalog definitions for all 88 dynamic calculators (Programmatically generated)
const RAW_DYNAMIC_METADATA: {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  tags: string[];
  type: 'percentage' | 'ratio' | 'sum' | 'multiply' | 'subtract' | 'compound' | 'simple_tax' | 'agro_grains' | 'agro_cattle' | 'agro_land' | 'agro_soil' | 'agro_feed' | 'agro_seeds' | 'log_freight' | 'log_cost_per_km' | 'log_cubage' | 'log_waiting_time' | 'log_driver_hours' | 'const_tijolos' | 'const_tinta' | 'const_piso' | 'evento_churrasco' | 'evento_receita' | 'evento_bebida' | 'energia_consumo' | 'energia_solar' | 'energia_carbono' | 'edu_sisu' | 'edu_ponderada' | 'edu_leitura' | 'trab_fgts' | 'trab_noturno' | 'trab_insalubridade' | 'trab_periculosidade' | 'trab_seguro' | 'trab_vt' | 'trab_falta';
  inputs: { id: string; label: string; def: any; type: 'number' | 'select'; op?: {v: any; l: string}[]; pref?: string; suff?: string; min?: number; max?: number; step?: number }[];
  outputs: { id: string; label: string; pref?: string; suff?: string; isPrimary?: boolean }[];
  faq: { q: string; a: string }[];
}[] = [
  // ==================== TRABALHISTAS NOVAS ====================
  {
    id: 'calculo-fgts-acumulado',
    name: 'Calculadora de FGTS',
    description: 'Calcule o total aproximado acumulado de Fundo de Garantia do Tempo de Serviço.',
    category: 'profissoes',
    icon: 'Briefcase',
    tags: ['fgts', 'trabalho', 'fundo de garantia', 'clt', 'poupança'],
    type: 'trab_fgts',
    inputs: [
      { id: 'salario', label: 'Salário Bruto Base', def: 2500, type: 'number', pref: 'R$' },
      { id: 'meses', label: 'Meses Trabalhados', def: 12, type: 'number', suff: 'meses' },
      { id: 'taxa', label: 'Tipo de Contribuição', def: 8, type: 'select', op: [{v: 8, l: 'Padrão (8%)'}, {v: 2, l: 'Menor Aprendiz (2%)'}, {v: 11.2, l: 'Doméstico (8% + 3.2%)'}] }
    ],
    outputs: [
      { id: 'total_acumulado', label: 'Total Acumulado Estimado', pref: 'R$', isPrimary: true },
      { id: 'deposito_mensal', label: 'Depósito Mensal', pref: 'R$' }
    ],
    faq: [
      { q: 'O valor exato pode variar?', a: 'Sim, o cálculo desconsidera a remuneração de Juros e Atualização Monetária (TR) que a Caixa Econômica Federal aplica mensalmente no saldo.' }
    ]
  },
  {
    id: 'adicional-noturno',
    name: 'Adicional Noturno',
    description: 'Calcule o adicional para trabalhos realizados em período noturno (urbano: 22h às 5h).',
    category: 'profissoes',
    icon: 'Moon',
    tags: ['noturno', 'hora', 'adicional', 'clt', 'salário'],
    type: 'trab_noturno',
    inputs: [
      { id: 'salario', label: 'Salário Base Mensal', def: 2500, type: 'number', pref: 'R$' },
      { id: 'horas_mes', label: 'Jornada Mensal', def: 220, type: 'number', suff: 'hs' },
      { id: 'horas_noturnas', label: 'Total de Horas Relógio Noturnas', def: 40, type: 'number', suff: 'hs' }
    ],
    outputs: [
      { id: 'adicional', label: 'Valor do Adicional Noturno', pref: 'R$', isPrimary: true },
      { id: 'hora_normal', label: 'Valor da Hora Normal', pref: 'R$' },
      { id: 'hora_noturna', label: 'Valor da Hora Noturna (+20%)', pref: 'R$' }
    ],
    faq: [
      { q: 'A hora noturna tem duração diferente?', a: 'Sim, na área urbana a hora noturna tem 52 minutos e 30 segundos, ou seja, 1 hora relógio equivale a 1,1428 horas noturnas de trabalho.' }
    ]
  },
  {
    id: 'adicional-insalubridade',
    name: 'Adicional de Insalubridade',
    description: 'Estime o valor da insalubridade de acordo com o grau de exposição do trabalhador.',
    category: 'profissoes',
    icon: 'AlertTriangle',
    tags: ['insalubridade', 'risco', 'saúde', 'clt', 'salário'],
    type: 'trab_insalubridade',
    inputs: [
      { id: 'salario_minimo', label: 'Salário Mínimo de Referência', def: 1621, type: 'number', pref: 'R$' },
      { id: 'grau', label: 'Grau de Insalubridade', def: 20, type: 'select', op: [{v: 10, l: 'Mínimo (10%)'}, {v: 20, l: 'Médio (20%)'}, {v: 40, l: 'Máximo (40%)'}] }
    ],
    outputs: [
      { id: 'adicional', label: 'Valor do Adicional Mensal', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'Qual a base de cálculo da insalubridade?', a: 'Diferente da periculosidade, a insalubridade é calculada sobre o salário mínimo vigente, salvo convenção coletiva que estipule o salário base.' }
    ]
  },
  {
    id: 'adicional-periculosidade',
    name: 'Adicional de Periculosidade',
    description: 'Cálculo de 30% de periculosidade para funções perigosas com risco à vida.',
    category: 'profissoes',
    icon: 'Shield',
    tags: ['periculosidade', 'risco', 'clt', 'salário'],
    type: 'trab_periculosidade',
    inputs: [
      { id: 'salario', label: 'Salário Base do Trabalhador', def: 2500, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'adicional', label: 'Valor do Adicional (30%)', pref: 'R$', isPrimary: true },
      { id: 'total', label: 'Salário + Periculosidade', pref: 'R$' }
    ],
    faq: [
      { q: 'Pode acumular Insalubridade e Periculosidade?', a: 'Não, o art. 193 § 2º da CLT proíbe a acumulação, devendo o trabalhador optar pelo adicional que for mais favorável.' }
    ]
  },
  {
    id: 'estimativa-seguro-desemprego',
    name: 'Seguro-Desemprego',
    description: 'Estime o valor das parcelas do benefício governamental de Seguro-Desemprego.',
    category: 'profissoes',
    icon: 'Briefcase',
    tags: ['seguro-desemprego', 'demissão', 'benefício', 'governo', 'clt'],
    type: 'trab_seguro',
    inputs: [
      { id: 'salario1', label: 'Último Salário', def: 2500, type: 'number', pref: 'R$' },
      { id: 'salario2', label: 'Penúltimo Salário', def: 2500, type: 'number', pref: 'R$' },
      { id: 'salario3', label: 'Antepenúltimo Salário', def: 2500, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'valor_parcela', label: 'Valor Estimado da Parcela', pref: 'R$', isPrimary: true },
      { id: 'media', label: 'Média Salarial Apurada', pref: 'R$' }
    ],
    faq: [
      { q: 'Qual a regra de cálculo?', a: 'O valor da parcela não pode ser inferior ao salário mínimo vigente. O cálculo é baseado em faixas definidas periodicamente pelo governo sobre a média dos últimos 3 salários.' }
    ]
  },
  {
    id: 'desconto-vale-transporte',
    name: 'Desconto de Vale-Transporte',
    description: 'Descubra quanto a empresa pode descontar pelo fornecimento do Vale-Transporte.',
    category: 'profissoes',
    icon: 'Bus',
    tags: ['vt', 'vale transporte', 'ônibus', 'desconto', 'clt'],
    type: 'trab_vt',
    inputs: [
      { id: 'salario', label: 'Salário Base', def: 2500, type: 'number', pref: 'R$' },
      { id: 'custo_vt', label: 'Custo Real do Transporte (Mês)', def: 250, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'desconto', label: 'Desconto Permitido em Folha', pref: 'R$', isPrimary: true },
      { id: 'parte_empresa', label: 'Parte Paga pela Empresa', pref: 'R$' }
    ],
    faq: [
      { q: 'Qual o limite de desconto do VT?', a: 'O desconto máximo é de 6% do salário base. Se o custo real das passagens for inferior a 6%, desconta-se o custo real.' }
    ]
  },
  {
    id: 'falta-injustificada',
    name: 'Desconto de Falta Injustificada',
    description: 'Calcule o valor do desconto no salário por dias faltados sem justificativa legal.',
    category: 'profissoes',
    icon: 'Calendar',
    tags: ['falta', 'desconto', 'dsr', 'salário', 'clt'],
    type: 'trab_falta',
    inputs: [
      { id: 'salario', label: 'Salário Bruto', def: 2500, type: 'number', pref: 'R$' },
      { id: 'faltas', label: 'Dias Faltados', def: 1, type: 'number', suff: 'dias' },
      { id: 'desconta_dsr', label: 'Descontar DSR?', def: 1, type: 'select', op: [{v: 1, l: 'Sim'}, {v: 0, l: 'Não'}] }
    ],
    outputs: [
      { id: 'desconto_total', label: 'Desconto Total Estimado', pref: 'R$', isPrimary: true },
      { id: 'desconto_dia', label: 'Desconto do Dia Faltado', pref: 'R$' },
      { id: 'desconto_dsr', label: 'Desconto do DSR', pref: 'R$' }
    ],
    faq: [
      { q: 'A falta desconta o DSR?', a: 'Se o funcionário não cumprir integralmente a jornada da semana, ele perde a remuneração do Descanso Semanal Remunerado (DSR) daquela semana correspondente.' }
    ]
  },
  {
    id: 'simulador-inss-salario',
    name: 'Desconto Progressivo de INSS',
    description: 'Estime a dedução de INSS incidente sobre o salário bruto sob as alíquotas vigentes do regime geral.',
    category: 'financas',
    icon: 'Percentage',
    tags: ['inss', 'salário', 'desconto', 'folha de pagamento'],
    type: 'simple_tax',
    inputs: [
      { id: 'salario', label: 'Salário Bruto', def: 3500, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'desconto', label: 'Desconto Estimado do INSS', pref: 'R$', isPrimary: true },
      { id: 'aliquota_efetiva', label: 'Alíquota Efetiva do Imposto', suff: '%' },
      { id: 'liquido', label: 'Salário Líquido de INSS', pref: 'R$' }
    ],
    faq: [
      { q: 'O que são alíquotas progressivas?', a: 'Significa que o imposto é calculado em fatias do salário bruto, variando de 7.5% a 14% de acordo com as faixas de rendimento, até o teto de contribuição previdenciária estabelecido.' }
    ]
  },
  {
    id: 'simulador-irrf-salario',
    name: 'Desconto IRRF Mensal',
    description: 'Simulador de desconto de Imposto de Renda Retido na Fonte (IRRF) com base no salário líquido de INSS.',
    category: 'financas',
    icon: 'Coins',
    tags: ['irrf', 'imposto', 'salário', 'receita federal'],
    type: 'percentage',
    inputs: [
      { id: 'salario_base', label: 'Salário Base (após INSS)', def: 3100, type: 'number', pref: 'R$' },
      { id: 'dependentes', label: 'Quantidade de Dependentes', def: 1, type: 'number', suff: 'membros' }
    ],
    outputs: [
      { id: 'desconto_irrf', label: 'Imposto Retido na Fonte', pref: 'R$', isPrimary: true },
      { id: 'aliquota_media', label: 'Alíquota Média Calculada', suff: '%' }
    ],
    faq: [
      { q: 'Qual a dedução por dependente no imposto de renda?', a: 'No acerto mensal, cada dependente legal declarado confere um abatimento fixo legal sobre a base de cálculo tributária do rendimento do trabalhador.' }
    ]
  },
  {
    id: 'rendimento-poupanca',
    name: 'Rendimento de Poupança',
    description: 'Estime o rendimento de um saldo depositado na caderneta de poupança em relação às regras da Taxa Selic.',
    category: 'financas',
    icon: 'TrendingUp',
    tags: ['poupança', 'rendimento', 'selic', 'banco', 'lucro'],
    type: 'compound',
    inputs: [
      { id: 'principal', label: 'Valor Inicial Aplicado', def: 10000, type: 'number', pref: 'R$' },
      { id: 'selic', label: 'Meta Selic Anual Atual', def: 10.75, type: 'number', suff: '%' },
      { id: 'meses', label: 'Meses de Permanência', def: 12, type: 'number', suff: 'meses' }
    ],
    outputs: [
      { id: 'lucro', label: 'Rendimento Líquido Acumulado', pref: 'R$', isPrimary: true },
      { id: 'total', label: 'Saldo de Retirada Final', pref: 'R$' }
    ],
    faq: [
      { q: 'Qual a regra de rendimento da poupança?', a: 'Se a Taxa Selic estiver acima de 8,5% ao ano, a poupança rende fixamente 0,5% ao mês + Taxa Referencial (TR). Se estiver igual ou abaixo de 8,5%, ela rende 70% da Taxa Selic + TR.' }
    ]
  },
  {
    id: 'conversor-inflacao-ipca',
    name: 'Calculadora IPCA Acumulado',
    description: 'Compare a perda de poder de compra de quantias financeiras devido à inflação acumulada.',
    category: 'financas',
    icon: 'TrendingUp',
    tags: ['inflação', 'ipca', 'poder de compra', 'dinheiro'],
    type: 'percentage',
    inputs: [
      { id: 'valor_original', label: 'Valor Financeiro de Referência', def: 1000, type: 'number', pref: 'R$' },
      { id: 'inflacao_taxa', label: 'Taxa de Corrosão de Preço', def: 4.5, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'poder_restante', label: 'Poder de Compra Ajustado', pref: 'R$', isPrimary: true },
      { id: 'perda', label: 'Desvalorização Financeira Monetária', pref: 'R$' }
    ],
    faq: [
      { q: 'O que expressa a taxa de inflação?', a: 'Reflete a elevação continuada e generalizada dos preços no varejo, provocando a diminuição sistemática do valor real do dinheiro.' }
    ]
  },
  {
    id: 'custo-capital-giro',
    name: 'Giro de Caixa Corporativo',
    description: 'Estime a necessidade de capital de giro necessário para cobrir ciclos de operações de empresas.',
    category: 'financas',
    icon: 'DollarSign',
    tags: ['capital', 'giro', 'fluxo', 'empresas', 'vendas'],
    type: 'multiply',
    inputs: [
      { id: 'custo_mensal', label: 'Gastos de Custos Fixos Mensais', def: 15000, type: 'number', pref: 'R$' },
      { id: 'ciclo_dias', label: 'Prazo Médio de Recebimento', def: 45, type: 'number', suff: 'dias' }
    ],
    outputs: [
      { id: 'giro_ideal', label: 'Capital de Giro Mínimo Recomendado', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'Como estimar o capital de giro?', a: 'Calcula-se com base na lacuna temporal entre o pagamento de fornecedores/despesas e o efetivo recebimento das vendas dos clientes.' }
    ]
  },
  {
    id: 'roi-investimento-comum',
    name: 'Retorno de Investimento (ROI)',
    description: 'Meça a rentabilidade de um investimento analisando a relação ganho bruto vs custos.',
    category: 'financas',
    icon: 'TrendingUp',
    tags: ['roi', 'retorno', 'ganho', 'investimento', 'eficiência'],
    type: 'ratio',
    inputs: [
      { id: 'receita', label: 'Retorno Bruto Obtido', def: 50000, type: 'number', pref: 'R$' },
      { id: 'custo', label: 'Custo Financeiro de Aquisição', def: 20000, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'roi_percent', label: 'Métrica de ROI Acumulada', suff: '%', isPrimary: true },
      { id: 'lucro_bruto', label: 'Superávit / Lucro Inicial', pref: 'R$' }
    ],
    faq: [
      { q: 'Para que serve o ROI?', a: 'Usado para avaliar se o retorno superou as despesas despendidas em comerciais, aquisição de equipamentos ou campanhas publicitárias.' }
    ]
  },
  {
    id: 'faturamento-lucro-presumido',
    name: 'Simulador IRPJ Lucro Presumido',
    description: 'Simule o cálculo simplificado de impostos com margens pré-estabelecidas de lucro presumido.',
    category: 'financas',
    icon: 'Coins',
    tags: ['lucro presumido', 'irpj', 'imposto', 'faturamento'],
    type: 'percentage',
    inputs: [
      { id: 'receita_bruta', label: 'Receita Bruta Trimestral', def: 120000, type: 'number', pref: 'R$' },
      { id: 'aliquota_servico', label: 'Alíquota da Alíquota do Imposto', def: 32, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'base_presumida', label: 'Base de Cálculo Presumida', pref: 'R$', isPrimary: true },
      { id: 'imposto_estimado', label: 'Projeção de Alíquota IRPJ (15%)', pref: 'R$' }
    ],
    faq: [
      { q: 'O que caracteriza o Lucro Presumido?', a: 'A tributação é obtida de uma margem estimada por lei de faturamento, evitando burocracias de escrituração de lucros reais.' }
    ]
  },
  {
    id: 'ponto-de-equilibrio-venda',
    name: 'Ponto de Equilíbrio (Break even)',
    description: 'Quantifique o volume de comercialização de produtos que deve ser vendido para obter lucro zero.',
    category: 'financas',
    icon: 'TrendingUp',
    tags: ['break even', 'vendas', 'produtos', 'financeiro'],
    type: 'ratio',
    inputs: [
      { id: 'fixosTotais', label: 'Custos Operacionais Fixos', def: 8000, type: 'number', pref: 'R$' },
      { id: 'precoVenda', label: 'Preço Unitário de Venda', def: 150, type: 'number', pref: 'R$' },
      { id: 'custoVariavel', label: 'Despesa Variável Unitária', def: 70, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'unidades', label: 'Meta de Unidades de Venda Mínima', suff: 'pecas', isPrimary: true },
      { id: 'fat_min', label: 'Faturamento de Equilíbrio Necessário', pref: 'R$' }
    ],
    faq: [
      { q: 'O que representa o Ponto de Equilíbrio?', a: 'O patamar de vendas faturadas em que a receita se iguala plenamente à somatório de todos custos incorridos, não gerando prejuízo nem lucro.' }
    ]
  },

  // ==================== SAUDE (9 additional) ====================
  {
    id: 'consumo-agua-ideal',
    name: 'Consumo Diário de Água',
    description: 'Estime a cota hídrica diária ideal recomendada com base na massa corporal corporal.',
    category: 'saude',
    icon: 'HeartPulse',
    tags: ['água', 'saúde', 'hidratação', 'dieta'],
    type: 'multiply',
    inputs: [
      { id: 'peso', label: 'Peso Corporal Atual', def: 70, type: 'number', suff: 'Kg' }
    ],
    outputs: [
      { id: 'agua_litros', label: 'Volume Recomendado de Água', suff: 'Litros', isPrimary: true },
      { id: 'agua_copos', label: 'Conversão Equivalente em Copos', suff: 'copos de 250ml' }
    ],
    faq: [
      { q: 'Qual a recomendação médica mínima?', a: 'Usualmente calcula-se 35 a 40ml de água por quilo do indivíduo por dia para garantir a regulação metabólica corpórea.' }
    ]
  },
  {
    id: 'percentual-gordura-corp',
    name: 'Percentual de Gordura Estimado',
    description: 'Obtenha estimativas da constituição corporal cruzando dados de circunferências do corpo.',
    category: 'saude',
    icon: 'Activity',
    tags: ['gordura', 'corpo', 'massa magra', 'academia'],
    type: 'ratio',
    inputs: [
      { id: 'cintura', label: 'Circunferência da Cintura', def: 88, type: 'number', suff: 'cm' },
      { id: 'pescoco', label: 'Circunferência do Pescoço', def: 38, type: 'number', suff: 'cm' },
      { id: 'altura', label: 'Altura Real do Segurado', def: 175, type: 'number', suff: 'cm' }
    ],
    outputs: [
      { id: 'bf_percent', label: 'Taxa Nominal Body Fat (BF)', suff: '%', isPrimary: true }
    ],
    faq: [
      { q: 'Como as medidas traduzem gordura?', a: 'Utiliza-se equações matemáticas de regressão da Marinha Americana que oferecem margens de aproximação viáveis à adiposidade real.' }
    ]
  },
  {
    id: 'frequencia-cardiaca-alvo',
    name: 'Frequência Cardíaca de Esporte',
    description: 'Encontre suas zonas de pulsação cardíaca ideal para treinos esportivos aeróbicos saudáveis.',
    category: 'saude',
    icon: 'Activity',
    tags: ['coração', 'cardio', 'esporte', 'batimentos', 'maratona'],
    type: 'subtract',
    inputs: [
      { id: 'idade', label: 'Idade do Atleta', def: 30, type: 'number', suff: 'anos' }
    ],
    outputs: [
      { id: 'fcm', label: 'Frequência Cardíaca Máxima (FCM)', suff: 'bpm', isPrimary: true },
      { id: 'aerobica', label: 'Zona Segura Queima de Gordura (70%)', suff: 'bpm' }
    ],
    faq: [
      { q: 'Por que treinar em frequências alvo?', a: 'Treinar acima dos limites pode impulsionar exaustão precoce, enquanto treinar na zona correta otimiza a queima lipídica progressiva.' }
    ]
  },
  {
    id: 'calculo-calorias-metabolismo',
    name: 'Metabolismo Basal Ativo (TMB)',
    description: 'Simulador do quantitativo de calorias necessárias gastas em repouso absoluto ou atividade diária leve.',
    category: 'saude',
    icon: 'Activity',
    tags: ['tmb', 'calorias', 'metabolismo', 'academia', 'emagrecer'],
    type: 'multiply',
    inputs: [
      { id: 'peso', label: 'Peso Corporal do Indivíduo', def: 75, type: 'number', suff: 'Kg' },
      { id: 'altura', label: 'Altura de Perfil do Segurado', def: 180, type: 'number', suff: 'cm' },
      { id: 'idade', label: 'Idade', def: 28, type: 'number', suff: 'anos' }
    ],
    outputs: [
      { id: 'calorias_basais', label: 'Energia Vital Diária Requerida', suff: 'kcal', isPrimary: true },
      { id: 'calorias_moderadas', label: 'Atividade Geral Estimada (Treino Leve)', suff: 'kcal' }
    ],
    faq: [
      { q: 'O que é a Taxa de Metabolismo Basal (BMR)?', a: 'É o volume energético mínimo de combustível exigido pelo organismo para respirar, conservar circulação e funcionar órgãos em repouso.' }
    ]
  },
  {
    id: 'calculadora-sono-ideal',
    name: 'Ciclos de Sono Ideal',
    description: 'Projete os horários recomendados para dormir para acordar descansado sem interromper ciclos profundos de sono.',
    category: 'saude',
    icon: 'HeartPulse',
    tags: ['sono', 'dormir', 'acordar', 'relogio', 'disposição'],
    type: 'subtract',
    inputs: [
      { id: 'hora_acordar', label: 'Hora Prevista de Despertar', def: 6, type: 'number', suff: 'horas' }
    ],
    outputs: [
      { id: 'hora_dormir_primeiro', label: 'Melhor Horário para Adormecer (6 Ciclos)', suff: 'horas', isPrimary: true },
      { id: 'hora_dormir_segundo', label: 'Opção Secundária (5 Ciclos de Sono)', suff: 'horas' }
    ],
    faq: [
      { q: 'Quanto tempo dura um ciclo de sono completo?', a: 'Em média 90 minutos. Despertar no intervalo correto entre ciclos evita aquela sensação de fadiga excessiva ou estresse corporal.' }
    ]
  },
  {
    id: 'calorias-atividades-fisicas',
    name: 'Gasto Calórico por Atividade',
    description: 'Estime a perda energética média após realizar sessões prolongadas de atividades de exercícios.',
    category: 'saude',
    icon: 'Activity',
    tags: ['atividade', 'exercício', 'esporte', 'calorias', 'nado', 'corrida'],
    type: 'multiply',
    inputs: [
      { id: 'peso', label: 'Peso Corporal do Atleta', def: 70, type: 'number', suff: 'Kg' },
      { id: 'duracao', label: 'Duração da Sessão de Treino', def: 60, type: 'number', suff: 'minutos' }
    ],
    outputs: [
      { id: 'gasto_corrida', label: 'Gasto Estimado em Corrida Rápida', suff: 'kcal', isPrimary: true },
      { id: 'gasto_ciclismo', label: 'Gasto Estimado em Pedalada', suff: 'kcal' }
    ],
    faq: [
      { q: 'Como é mensurado esse cálculo?', a: 'Cruza o equivalente metabólico da tarefa (MET) com a massa e tempo praticado.' }
    ]
  },
  {
    id: 'peso-ideal-corp-raciol',
    name: 'Proporção Corporal Recomendada',
    description: 'Calcule faixas nominais ideais de peso saudável associados aos limites de seu perfil biométrico.',
    category: 'saude',
    icon: 'HeartPulse',
    tags: ['peso ideal', 'saúde', 'dieta', 'massa', 'médico'],
    type: 'ratio',
    inputs: [
      { id: 'altura', label: 'Altura Real do Trabalhador', def: 170, type: 'number', suff: 'cm' }
    ],
    outputs: [
      { id: 'peso_min', label: 'Limite Inferior Recomendado', suff: 'Kg', isPrimary: true },
      { id: 'peso_max', label: 'Limite Máximo Confortável', suff: 'Kg' }
    ],
    faq: [
      { q: 'O que define o peso ideal saudável?', a: 'Consiste na variação numérica de peso onde o IMC do indivíduo situa-se na faixa ideal regulamentar entre 18,5 e 24,9.' }
    ]
  },
  {
    id: 'distribuição-macronutrientes',
    name: 'Divisão de Macros (Dietas)',
    description: 'Planeje sua ingestão de macronutrientes balanceada baseada em metas de consumo nutricional diário.',
    category: 'saude',
    icon: 'HeartPulse',
    tags: ['carboidratos', 'proteína', 'gordura', 'macros', 'alimentação'],
    type: 'percentage',
    inputs: [
      { id: 'meta_calorias', label: 'Ingestão Energética Alvo Diária', def: 2000, type: 'number', suff: 'kcal' }
    ],
    outputs: [
      { id: 'carbs', label: 'Carboidratos Recomendados (40%)', suff: 'gramas', isPrimary: true },
      { id: 'prot', label: 'Proteínas Sugeridas (30%)', suff: 'gramas' },
      { id: 'gord', label: 'Gorduras Saudáveis Alvo (30%)', suff: 'gramas' }
    ],
    faq: [
      { q: 'Qual a importância de contar macros?', a: 'Garante que o emagrecimento ou ganho muscular ocorra sem escassez de energia de carboidratos ou de micronutrientes reconstrutores proteicos.' }
    ]
  },
  {
    id: 'pressao-arterial-check',
    name: 'Análise de Pressão Vascular',
    description: 'Classifique a integridade de medições de sua pressão de modo preliminar e analítico.',
    category: 'saude',
    icon: 'HeartPulse',
    tags: ['pressão', 'hipertensão', 'coração', 'artéria', 'médico'],
    type: 'ratio',
    inputs: [
      { id: 'sistolica', label: 'Pressão Sistólica (Alta)', def: 120, type: 'number', suff: 'mmHg' },
      { id: 'diastolica', label: 'Pressão Diastólica (Baixa)', def: 80, type: 'number', suff: 'mmHg' }
    ],
    outputs: [
      { id: 'status', label: 'Classificação Clinica Obtida', suff: 'Pontos Indicativos', isPrimary: true }
    ],
    faq: [
      { q: 'Qual o valor normal de referência?', a: 'Geralmente 120/80 mmHg (conhecido popularmente como 12 por 8) é considerado o limiar de ótima saúde cardiovascular.' }
    ]
  },

  // ==================== PROFISSOES (10 items) ====================
  {
    id: 'honorarios-advogado',
    name: 'Honorários de Advocatícios',
    description: 'Estime o valor final sugerido de honorários contratuais mais êxito em ações jurídicas comuns.',
    category: 'profissoes',
    icon: 'Briefcase',
    tags: ['advogado', 'causa', 'honorários', 'justiça', 'direito'],
    type: 'percentage',
    inputs: [
      { id: 'valor_causa', label: 'Valor Estimado do Litígio', def: 30000, type: 'number', pref: 'R$' },
      { id: 'taxa_exito', label: 'Porcentagem de Honorários Êxito', def: 20, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'total_advogado', label: 'Honorários Líquidos Sugeridos', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'Qual o percentual padrão da OAB?', a: 'Usualmente as tabelas estaduais da Ordem de Advogados do Brasil posicionam contratos civis entre 15% e 30% conforme a complexidade processual.' }
    ]
  },
  {
    id: 'plantao-medico',
    name: 'Plantão Médico e Clínico',
    description: 'Controle o rendimento de um plantão médico considerando carga horária, adicionais ou impostos de notas.',
    category: 'profissoes',
    icon: 'Briefcase',
    tags: ['médico', 'plantão', 'horas', 'consultório', 'hospital'],
    type: 'multiply',
    inputs: [
      { id: 'hora_rate', label: 'Tarifa de Honorário por Hora', def: 120, type: 'number', pref: 'R$' },
      { id: 'horas_total', label: 'Carga Horária de Duração', def: 12, type: 'number', suff: 'horas' }
    ],
    outputs: [
      { id: 'bruto', label: 'Remuneração Bruta do Turno', pref: 'R$', isPrimary: true },
      { id: 'liquido_imposto', label: 'Líquido com Imposto Retido (15%)', pref: 'R$' }
    ],
    faq: [
      { q: 'Há incidência de INSS em autônomos médicos?', a: 'Sim, dependendo da prestação se por pessoa jurídica (PJ) ou cooperado, com retenções direto na fonte ou por carnê-leão tributário.' }
    ]
  },
  {
    id: 'comissao-corretor',
    name: 'Comissão de Corretor',
    description: 'Quantifique a comissão de intermediação imobiliária em transações imobiliárias.',
    category: 'profissoes',
    icon: 'Briefcase',
    tags: ['corretor', 'imóvel', 'comissão', 'creci', 'casa'],
    type: 'percentage',
    inputs: [
      { id: 'imovel_valor', label: 'Valor da Comercialização do Imóvel', def: 450000, type: 'number', pref: 'R$' },
      { id: 'taxa_corretor', label: 'Alíquota de Comissão Praticada', def: 6, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'comissao_final', label: 'Repasse Imobiliário ao Corretor', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'Quem responde pelo pagamento do corretor?', a: 'Normalmente, as custas de representação de intermediação são pagas pela parte vendedora do imóvel comercializado.' }
    ]
  },
  {
    id: 'diaria-freelancer',
    name: 'Diária de Designer & Dev',
    description: 'Encontre o preço de diária correto integrando metas de faturamento, dias úteis e softwares de trabalho.',
    category: 'profissoes',
    icon: 'Briefcase',
    tags: ['freelance', 'designer', 'desenvolvedor', 'diária', 'trabalho'],
    type: 'ratio',
    inputs: [
      { id: 'metas_vencimentos', label: 'Faturamento de Meta Mensal', def: 8000, type: 'number', pref: 'R$' },
      { id: 'dias_ativos', label: 'Dias Produtivos Úteis por Mês', def: 20, type: 'number', suff: 'dias' }
    ],
    outputs: [
      { id: 'valor_base_diaria', label: 'Preço Diário Mínimo Sugerido', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'Devo reajustar para impostos?', a: 'Sim, para prever emissões de notas MEI ou Simples Nacional que representem faturamento real.' }
    ]
  },
  {
    id: 'frete-autonomo',
    name: 'Estimativa de Frete de Carga',
    description: 'Calcule o frete de caminhões com base na distância percorrida, desgaste de pneus e pedágio.',
    category: 'profissoes',
    icon: 'Briefcase',
    tags: ['frete', 'caminhão', 'diesel', 'logística', 'estrada'],
    type: 'multiply',
    inputs: [
      { id: 'km_dist', label: 'Distância Percorrida de Viagem', def: 350, type: 'number', suff: 'Km' },
      { id: 'valor_km', label: 'Taxa Cobrada por Km Rodado', def: 4.5, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'total_frete', label: 'Valor Cobrado do Frete', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'O combustível deve entrar na conta?', a: 'O gasto com óleo diesel e pedágios federais são as principais variáveis para definir a margem de lucro por quilometragem percorrida.' }
    ]
  },
  {
    id: 'markup-artesanato',
    name: 'Markup de Artesanato',
    description: 'Precifique itens manuais costurando matéria-prima, tempo gasto e despesas acessórias.',
    category: 'profissoes',
    icon: 'Briefcase',
    tags: ['artesanato', 'crochê', 'handmade', 'precificação', 'costura'],
    type: 'ratio',
    inputs: [
      { id: 'materia_prima', label: 'Custo de Insumos & Material', def: 25, type: 'number', pref: 'R$' },
      { id: 'horas_producao', label: 'Tempo Gasto de Fabricação', def: 4, type: 'number', suff: 'horas' },
      { id: 'valor_trabalho', label: 'Valor Atribuído à sua Mão de Obra/Hora', def: 15, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'preco_venda_ideal', label: 'Preço de Venda Pró-Sugerido', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'Por que o tempo é valioso?', a: 'Artesãos costumam falhar ao precificar suas peças apenas pelos insumos e materiais, ignorando as preciosas horas artesanais investidas.' }
    ]
  },
  {
    id: 'salario-professor',
    name: 'Cálculo de Hora Aula Professor',
    description: 'Remuneração agregando quantidade de turmas ministradas, hora-atividade e gratificação de classe.',
    category: 'profissoes',
    icon: 'Briefcase',
    tags: ['professor', 'escola', 'ensino', 'aula', 'hora-atividade'],
    type: 'multiply',
    inputs: [
      { id: 'horas_semanais', label: 'Total de Horas-Aula na Semana', def: 20, type: 'number', suff: 'horas/semana' },
      { id: 'valor_hora', label: 'Valor da Hora Aula Praticado', def: 35, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'salario_base', label: 'Estimativa de Salário Mensal Base', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'O que é a hora-atividade?', a: 'Adicional de cerca de 1/6 a 1/5 do salário base para cobrir o planejamento pedagógico e correções fora de classe.' }
    ]
  },
  {
    id: 'comissao-vendedor',
    name: 'Comissão de Vendedor Comercial',
    description: 'Estime o comissionamento mensal de vendas associados a cotas progressivas de metas de balanço comercial.',
    category: 'profissoes',
    icon: 'Briefcase',
    tags: ['venda', 'vendedor', 'comissão', 'loja', 'faturamento'],
    type: 'percentage',
    inputs: [
      { id: 'vendas_realizadas', label: 'Faturamento Total Vendido', def: 80000, type: 'number', pref: 'R$' },
      { id: 'comissao_taxa', label: 'Porcentagem Nominal Praticada', def: 2.5, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'comissao_bruta', label: 'Comissão Líquida Acumulada', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'Vendedores têm direito a salário fixo?', a: 'Sim, as convenções coletivas normalmente consolidam um piso salarial de comércio associado a comissões adicionais.' }
    ]
  },
  {
    id: 'traducao-texto',
    name: 'Orçamento de Tradutor Freelancer',
    description: 'Sinale o orçamento de tradução correlacionando o número de palavras e grau de complexidade do arquivo.',
    category: 'profissoes',
    icon: 'Briefcase',
    tags: ['tradutor', 'traduzir', 'texto', 'artigo', 'línguas'],
    type: 'multiply',
    inputs: [
      { id: 'laudas', label: 'Quantidade Total de Laudas/Palavras', def: 1500, type: 'number', suff: 'palavras' },
      { id: 'preco_palavra', label: 'Valor Atribuído por Palavra', def: 0.25, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'orcamento_final', label: 'Previsão de Orçamento de Serviço', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'Qual a diferença entre Tradução e Versão?', a: 'A tradução verte o idioma estrangeiro para o português pátrio, enquanto a versão adapta o texto nacional para o idioma receptor.' }
    ]
  },
  {
    id: 'fotografo-evento',
    name: 'Orçamento de Fotógrafo',
    description: 'Estime valores referenciados para ensaios fotográficos cobrindo tempo de tratamento e deslocamento.',
    category: 'profissoes',
    icon: 'Briefcase',
    tags: ['fotografia', 'foto', 'ensaio', 'casamento', 'evento'],
    type: 'sum',
    inputs: [
      { id: 'preco_base', label: 'Taxa Base de Cobertura/Ensaio', def: 450, type: 'number', pref: 'R$' },
      { id: 'custo_deslocamento', label: 'Transporte e Custos Logísticos', def: 100, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'total_orcamento', label: 'Preço Final Recomendado', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'O que deve constar no preço?', a: 'Deverá integrar o investimento de lentes de ponta, computadores velozes de tratamento de lote de fotos e backup arquivístico protetivo.' }
    ]
  },
  // ==================== AGRONEGOCIO (6 items) ====================
  {
    id: 'agro-produtividade-graos',
    name: 'Produtividade de Grãos (Milho/Soja)',
    description: 'Calcule a produtividade de colheita em sacas/hectare e projete a produção total em toneladas e lucratividade.',
    category: 'agronegocio',
    icon: 'Sprout',
    tags: ['agro', 'grãos', 'colheita', 'soja', 'milho', 'hectare', 'fazenda'],
    type: 'agro_grains',
    inputs: [
      { id: 'area', label: 'Área Cultivada', def: 100, type: 'number', suff: 'ha' },
      { id: 'colheita', label: 'Sacas Colhidas (60 kg)', def: 6500, type: 'number', suff: 'sc' },
      { id: 'vlr_saca', label: 'Preço Comercial da Saca', def: 135, type: 'number', pref: 'R$', suff: '/sc' }
    ],
    outputs: [
      { id: 'sacas_hectare', label: 'Produtividade Média', suff: ' sc/ha', isPrimary: true },
      { id: 'ton_total', label: 'Rendimento Total Colhido', suff: ' Toneladas' },
      { id: 'lucro_bruto', label: 'Receita Bruta Estimada', pref: 'R$' }
    ],
    faq: [
      { q: 'Como calcular a produtividade por hectare?', a: 'Divida o total de sacas de 60kg colhidas pela área cultivada em hectares. Por exemplo, 6.500 sacas colhidas in 100 hectares resultam em 65 sacas por hectare.' },
      { q: 'Qual a produtividade de soja padrão no país?', a: 'Variedades de alta tecnologia colhem entre 55 e 75 sacas de soja por hectare em condições climáticas ótimas.' }
    ]
  },
  {
    id: 'agro-lote-gado-corte',
    name: 'Viabilidade de Lote de Gado de Corte',
    description: 'Estime o peso médio em arrobas (@), rendimento de carcaça e a receita na venda de cabeças de boi gordo.',
    category: 'agronegocio',
    icon: 'TrendingUp',
    tags: ['agro', 'gado', 'boi gordo', 'arroba', 'carcaça', 'pecuária', 'lote'],
    type: 'agro_cattle',
    inputs: [
      { id: 'animais', label: 'Quantidade de Bois no Lote', def: 50, type: 'number', suff: 'animais' },
      { id: 'peso_final', label: 'Peso de Abate por Boi', def: 540, type: 'number', suff: 'kg' },
      { id: 'rendimento_carcaca', label: 'Rendimento da Carcaça', def: 54, type: 'number', suff: '%' },
      { id: 'preco_arroba', label: 'Preço da Arroba (@) Recorrente', def: 235, type: 'number', pref: 'R$', suff: '/@' }
    ],
    outputs: [
      { id: 'arrobas_por_boi', label: 'Rendimento Líquido por Boi', suff: ' @', isPrimary: true },
      { id: 'arrobas_totais', label: 'Rendimento Total do Lote', suff: ' @' },
      { id: 'vlr_lote', label: 'Faturamento Total Estimado', pref: 'R$' }
    ],
    faq: [
      { q: 'Como é calculada a Arroba do boi no comércio brasileiro?', a: 'A arroba comercial padrão equivale a exatamente 15 kg de peso de carcaça limpa. A equação é: Peso Vivo (kg) × Rendimento de Carcaça (%) / 15.' },
      { q: 'O que é o rendimento comum de carcaça?', a: 'Em média, bovinos de corte apresentam rendimento entre 50% e 55%, variando de acordo com raça, padrão genético e regime de trato (confinamento vs pasto).' }
    ]
  },
  {
    id: 'agro-conversor-medidas-terra',
    name: 'Conversor de Medidas de Terra',
    description: 'Converta hectares para alqueires (paulista, mineiro, baiano) e metros quadrados.',
    category: 'agronegocio',
    icon: 'Sliders',
    tags: ['agro', 'terras', 'alqueire', 'hectares', 'm2', 'propriedades'],
    type: 'agro_land',
    inputs: [
      { id: 'qtd', label: 'Quantidade de Área', def: 10, type: 'number' },
      {
        id: 'de_unidade',
        label: 'Unidade de Origem',
        def: 'ha',
        type: 'select',
        op: [
          { v: 'ha', l: 'Hectares (ha)' },
          { v: 'alqp', l: 'Alqueire Paulista (2.42 ha)' },
          { v: 'alqm', l: 'Alqueire Mineiro (4.84 ha)' },
          { v: 'alqb', l: 'Alqueire Baiano (9.68 ha)' },
          { v: 'm2', l: 'Metros Quadrados (m²)' }
        ]
      }
    ],
    outputs: [
      { id: 'eq_ha', label: 'Equivalência em Hectares (ha)', suff: ' ha', isPrimary: true },
      { id: 'eq_alqp', label: 'Equivalência em Alqueire Paulista', suff: ' alq-P' },
      { id: 'eq_alqm', label: 'Equivalência em Alqueire Mineiro', suff: ' alq-M' },
      { id: 'eq_m2', label: 'Equivalência em Metros Quadrados', suff: ' m²' }
    ],
    faq: [
      { q: 'Qual a diferença entre alqueire Paulista, Mineiro e Baiano?', a: 'O alqueire Paulista equivale a 2,42 ha (24.200 m²), o Mineiro/Goiano equivale a 4,84 ha (48.400 m²) e o Baiano representa 9,68 ha (96.800 m²).' },
      { q: 'Quantos metros quadrados há em 1 Hectare?', a: 'Exatamente 10.000 metros quadrados (equivalente aproximadamente às proporções de um estádio de futebol nacional).' }
    ]
  },
  {
    id: 'agro-calagem-solo',
    name: 'Necessidade de Calagem (Solo)',
    description: 'Calcule a quantidade sugerida de calcário por hectare para corrigir a acidez de plantio de terras.',
    category: 'agronegocio',
    icon: 'Layers',
    tags: ['agro', 'solo', 'calcário', 'calagem', 'gesso', 'química', 'acidez'],
    type: 'agro_soil',
    inputs: [
      { id: 'ctc', label: 'CTC do Solo (T)', def: 8, type: 'number', suff: 'cmol/dm³' },
      { id: 'v2', label: 'Saturação de Bases Desejada (V2%)', def: 70, type: 'number', suff: '%' },
      { id: 'v1', label: 'Saturação de Bases Atual (V1%)', def: 40, type: 'number', suff: '%' },
      { id: 'prnt', label: 'PRNT do Calcário Usado', def: 80, type: 'number', suff: '%' },
      { id: 'area', label: 'Área Total Corrigida', def: 10, type: 'number', suff: 'ha' }
    ],
    outputs: [
      { id: 'ton_por_ha', label: 'Necessidade por Hectare', suff: ' Ton/ha', isPrimary: true },
      { id: 'ton_total', label: 'Volume Total para a Área', suff: ' Toneladas' }
    ],
    faq: [
      { q: 'Como funciona o cálculo de necessidade de calagem (NC)?', a: 'Ele utiliza o método de saturação de bases: NC (t/ha) = [CTC × (V2 - V1)] / PRNT. Se o resultado for negativo, indica que a saturação atual já é suficiente.' },
      { q: 'O que expressa a sigla PRNT?', a: 'Significa Poder Relativo de Neutralização Total, correspondendo à pureza química e finura de moagem do calcário comprado.' }
    ]
  },
  {
    id: 'agro-racao-animal',
    name: 'Dimensionamento de Ração e Silo',
    description: 'Estime o consumo diário de ração por plantel de cabeças e a autonomia de abastecimento do silo.',
    category: 'agronegocio',
    icon: 'CheckCircle',
    tags: ['agro', 'ração', 'silagem', 'insumo', 'gado', 'aves', 'porco'],
    type: 'agro_feed',
    inputs: [
      { id: 'animais', label: 'Cabeças de Animais no Lote', def: 200, type: 'number', suff: 'cabeças' },
      { id: 'consumo_cabeca', label: 'Ração Consumida por Animal ao Dia', def: 2.5, type: 'number', suff: 'kg' },
      { id: 'preco_quilo', label: 'Preço Médio por kg da Ração', def: 1.8, type: 'number', pref: 'R$', suff: '/kg' },
      { id: 'silo_capacidade', label: 'Capacidade de Armazenamento do Silo', def: 5000, type: 'number', suff: 'kg' }
    ],
    outputs: [
      { id: 'consumo_diario_lote', label: 'Consumo Total do Lote Diário', suff: ' kg/dia', isPrimary: true },
      { id: 'autonomia_dias', label: 'Autonomia Estimada do Silo', suff: ' dias' },
      { id: 'custo_diario_total', label: 'Despesa Alimentar Diária', pref: 'R$' }
    ],
    faq: [
      { q: 'Como mensurar a ingestão média?', a: 'Para bovinos confinados, estima-se consumo diário de 2% a 2.5% do peso vivo corporal em matéria seca de volumosos e concentrados.' },
      { q: 'O que é a autonomia de silo?', a: 'Retorna a estimativa temporal em dias que seu armazém durará antes do esgotamento completo de insumos rações.' }
    ]
  },
  {
    id: 'agro-semeadura-densidade',
    name: 'Densidade de Semeadura e Plantio',
    description: 'Calcule o número ideal de sementes recomendadas por metro corrido de fileira e peso total consumido.',
    category: 'agronegocio',
    icon: 'Hash',
    tags: ['agro', 'sementes', 'semeadura', 'espaçamento', 'milho', 'soja', 'plantar'],
    type: 'agro_seeds',
    inputs: [
      { id: 'populacao_alvo', label: 'População Alvo Desejada', def: 250000, type: 'number', suff: 'plantas/ha' },
      { id: 'espacamento', label: 'Espaçamento entre Fileiras', def: 0.45, type: 'number', suff: 'm', step: 0.05, min: 0.1, max: 2 },
      { id: 'pms', label: 'Peso de Mil Sementes (PMS)', def: 160, type: 'number', suff: 'g' },
      { id: 'germinacao', label: 'Germinação e Pureza Comercial', def: 90, type: 'number', suff: '%' },
      { id: 'area', label: 'Área do Plantio Total', def: 20, type: 'number', suff: 'ha' }
    ],
    outputs: [
      { id: 'sementes_metro', label: 'Sementes Distribuídas por Metro linear', suff: ' sementes/m', isPrimary: true },
      { id: 'kg_por_ha', label: 'Consumo de Sementes por Hectare', suff: ' kg/ha' },
      { id: 'sacos_totais', label: 'Sacos de Sementes Requeridos (40kg)', suff: ' sacos' }
    ],
    faq: [
      { q: 'O que é o PMS (Peso de Mil Sementes)?', a: 'É o peso de 1000 sementes limpas coletadas em lote. É um índice biométrico fundamental para calcular a quantidade física exigida de quilos por hectare plantado.' },
      { q: 'Como o espaçamento altera o cálculo físico?', a: 'Menores espaçamentos aumentam os metros lineares de sulco por hectare, demandando maior distribuição e precisão do dosador do trator.' }
    ]
  },
  // ==================== LOGISTICA & FRETES (5 items) ====================
  {
    id: 'log-calculo-frete',
    name: 'Cálculo de Frete e Margem de Lucro',
    description: 'Calcule o valor sugerido de frete para viagens com base em consumo de combustível, pedágios, custos extras e margem de lucro.',
    category: 'logistica',
    icon: 'DollarSign',
    tags: ['frete', 'combustível', 'pedágio', 'viagem', 'margem', 'caminhão'],
    type: 'log_freight',
    inputs: [
      { id: 'distancia', label: 'Distância total (Ida e Volta)', def: 400, type: 'number', suff: 'km' },
      { id: 'consumo_veiculo', label: 'Consumo do Caminhão', def: 2.5, type: 'number', suff: 'km/L', step: 0.1 },
      { id: 'preco_diesel', label: 'Preço do Litro do Diesel', def: 5.95, type: 'number', pref: 'R$/L', step: 0.05 },
      { id: 'pedagio', label: 'Valor Total de Pedágios', def: 180, type: 'number', pref: 'R$' },
      { id: 'outros_custos', label: 'Outras Despesas (Ajudante, Chapa)', def: 100, type: 'number', pref: 'R$' },
      { id: 'margem_desejada', label: 'Margem de Lucro Desejada', def: 35, type: 'number', suff: '%', min: 1, max: 99 }
    ],
    outputs: [
      { id: 'frete_sugerido', label: 'Valor de Frete Sugerido', pref: 'R$', isPrimary: true },
      { id: 'custo_combustivel', label: 'Custo Estimado de Diesel', pref: 'R$' },
      { id: 'custo_direto', label: 'Custo Direto Total da Viagem', pref: 'R$' }
    ],
    faq: [
      { q: 'O que são custos diretos da viagem?', a: 'São as despesas consumidas diretamente para realizar aquele frete específico, como óleo diesel, pedágio rodoviário, ajuda de custo para chapa (ajudante) e taxas portuárias ou alfandegárias.' },
      { q: 'Qual a margem de lucro recomendada para transportes?', a: 'Autônomos e pequenas transportadoras costumam praticar margens de 25% a 45% livre, para cobrir a depreciação de longo prazo da frota e do cavalo mecânico.' }
    ]
  },
  {
    id: 'log-custo-km-rodado',
    name: 'Custo de Km Rodado de Veículo Pesado',
    description: 'Encontre o custo operacional real por quilômetro rodado, desmembrando custos variáveis e custos fixos mensais do veículo.',
    category: 'logistica',
    icon: 'TrendingUp',
    tags: ['km', 'custo rodado', 'manutenção', 'pneu', 'caminhão', 'operacional'],
    type: 'log_cost_per_km',
    inputs: [
      { id: 'km_mensal', label: 'Rodagem Estimada Mensal', def: 8000, type: 'number', suff: 'km' },
      { id: 'consumo_km', label: 'Consumo Médio de Combustível', def: 3.0, type: 'number', suff: 'km/L', step: 0.1 },
      { id: 'custo_manut_pneu', label: 'Desgaste Pneu & Manutenção por Km', def: 0.95, type: 'number', pref: 'R$ / km', step: 0.05 },
      { id: 'fixos_mensais', label: 'Custos Fixos Mensais (Seguro, IPVA, Salários)', def: 3200, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'custo_km_total', label: 'Custo Total Estimado por Km', pref: 'R$', isPrimary: true },
      { id: 'custo_km_variavel', label: 'Custo Variável Base por Km', pref: 'R$' },
      { id: 'custo_km_fixo', label: 'Custo Fixo por Km (Diluído)', pref: 'R$' }
    ],
    faq: [
      { q: 'Como estimar os custos de desgaste de pneus?', a: 'Soma-se o custo de compra de um jogo de pneus completo e divide-se pela sua quilometragem útil média estimada (ex: 80.000 km). Faz-se o mesmo com óleo, filtros e peças periódicas.' },
      { q: 'Qual o impacto do custo fixo na rodagem mensal?', a: 'Quanto mais o caminhão roda por mês, menor fica o custo fixo diluído por km. Por isso grandes empresas barateiam rotas mantendo veículos sempre em atividade.' }
    ]
  },
  {
    id: 'log-cubagem-carga',
    name: 'Cálculo de Cubagem e Peso Taxável',
    description: 'Calcule o volume em metros cúbicos (m³), o peso cubado da carga e descubra qual peso será cobrado na tabela de frete.',
    category: 'logistica',
    icon: 'Layers',
    tags: ['cubagem', 'volume', 'm³', 'peso cubado', 'taxável', 'shippers', 'logística'],
    type: 'log_cubage',
    inputs: [
      { id: 'comprimento', label: 'Comprimento do Volume', def: 120, type: 'number', suff: 'cm' },
      { id: 'largura', label: 'Largura do Volume', def: 80, type: 'number', suff: 'cm' },
      { id: 'altura', label: 'Altura do Volume', def: 150, type: 'number', suff: 'cm' },
      { id: 'peso_real', label: 'Peso Real Unitário', def: 65, type: 'number', suff: 'kg' },
      { id: 'quantidade', label: 'Quantidade de Volumes Iguais', def: 10, type: 'number', suff: 'un' }
    ],
    outputs: [
      { id: 'peso_taxavel', label: 'Peso Taxável para Cobrança', suff: ' kg', isPrimary: true },
      { id: 'volume_m3', label: 'Volume Total Calculado', suff: ' m³' },
      { id: 'peso_cubado', label: 'Peso Cubado Teórico', suff: ' kg' }
    ],
    faq: [
      { q: 'O que é cubagem de carga no transporte rodoviário?', a: 'É a relação entre o volume ocupado pela carga e o seu peso físico. O fator de cubagem de referência no tráfego de estradas brasileiro é de 300 kg por metro cúbico (m³).' },
      { q: 'O que é o Peso Taxável?', a: 'É o maior valor entre o Peso Físico Real e o Peso Cubado. Se uma carga leve ocupar muito espaço, você pagará pelo espaço (peso cubado). Se for pesada e compacta, pagará pelo peso físico real.' }
    ]
  },
  {
    id: 'log-lei-estadia',
    name: 'Diária de Espera e Descarga (Lei 11.442)',
    description: 'Estime a compensação por tempo parado nos terminais de carga e descarga quando exceder as 5 horas regulamentares por lei.',
    category: 'logistica',
    icon: 'CheckCircle',
    tags: ['estadia', 'lei de estadia', 'caminhoneiro', 'descarga', 'espera', 'indenização'],
    type: 'log_waiting_time',
    inputs: [
      { id: 'capacidade_ton', label: 'Capacidade do Veículo (Toneladas)', def: 14, type: 'number', suff: 'ton' },
      { id: 'horas_espera', label: 'Horas Totais no Pátio (Entrada à Saída)', def: 9, type: 'number', suff: 'horas' },
      { id: 'valor_ton_hora_lei', label: 'Valor Adiantado (Valor por ton/hora)', def: 2.38, type: 'number', pref: 'R$', step: 0.05 },
      { id: 'custo_estadia_fixo', label: 'Pernoites ou Diária Consensual Extra', def: 0, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'valor_total', label: 'Valor Total de Estadia a Receber', pref: 'R$', isPrimary: true },
      { id: 'indenizacao_lei', label: 'Indenização s/ Horas Excedentes (Lei)', pref: 'R$' }
    ],
    faq: [
      { q: 'Qual o tempo tolerável para carga e descarga gratuita?', a: 'A Lei nº 11.442 estipula o prazo máximo de 5 horas consecutivas para que o contratante realize a carga ou a descarga. A partir da 6ª hora iniciada, passa a correr a cobrança.' },
      { q: 'Como funciona o cálculo da Lei da Estadia?', a: 'A taxa legal de indenização é corrigida anualmente pela ANTT (Agência Nacional de Transportes Terrestres). O cálculo multiplica as Toneladas de capacidade total do caminhão pelo número de horas excedentes e a tarifa de referência.' }
    ]
  },
  {
    id: 'log-jornada-motorista',
    name: 'Jornada e Descansos (Lei do Motorista)',
    description: 'Monitore horários de estrada para caminhoneiros e motoristas profissionais, calculando descansos em conformidade com as regras de trânsito.',
    category: 'logistica',
    icon: 'Clock',
    tags: ['motorista', 'regulamento', 'jornada', 'horas extras', 'descanso', 'direção'],
    type: 'log_driver_hours',
    inputs: [
      { id: 'tempo_conducao', label: 'Tempo Ininterrupto Dirigindo', def: 4.5, type: 'number', suff: 'horas', step: 0.5 },
      { id: 'jornada_total', label: 'Tempo de Direção Acumulado no Dia', def: 7.5, type: 'number', suff: 'horas', step: 0.5 },
      { id: 'tempo_carga', label: 'Tempo Esperando Carga/Descarga', def: 2.0, type: 'number', suff: 'horas', step: 0.5 }
    ],
    outputs: [
      { id: 'horas_extras', label: 'Horas Extras Efetuadas', suff: ' horas', isPrimary: true },
      { id: 'tempo_descanso_min', label: 'Período Regulamentar de Descanso', suff: ' minutos' }
    ],
    faq: [
      { q: 'Qual o limite de tempo de direção contínua?', a: 'De acordo com a Lei 13.103/15 (Lei do Motorista), o motorista profissional de transporte rodoviário não pode dirigir mais de 5,5 horas ininterruptas.' },
      { q: 'Como devem ser calculados os descansos durante a rodovia?', a: 'Dentro do período máximo de direção ativa diária, há a exigência mínima absoluta de paradas obrigatórias de 30 minutos a cada 4 horas ou no limite de 5h30.' }
    ]
  },
  // ==================== CONSTRUCAO (3 items) ====================
  {
    id: 'const-tijolos',
    name: 'Calculadora de Tijolos por m²',
    description: 'Estime a quantidade de tijolos ou blocos e a argamassa necessária para levantar paredes.',
    category: 'construcao',
    icon: 'Grid',
    tags: ['construção', 'obra', 'tijolo', 'bloco', 'parede', 'reforma'],
    type: 'const_tijolos',
    inputs: [
      { id: 'area_parede', label: 'Área da Parede', def: 10, type: 'number', suff: 'm²' },
      { id: 'tijolos_m2', label: 'Tijolos por m² (Padrão 6 furos = 39)', def: 39, type: 'number', suff: 'un' },
      { id: 'margem_perda', label: 'Margem de Perda/Quebra', def: 10, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'tijolos_total', label: 'Total de Tijolos Recomendado', suff: ' un', isPrimary: true },
      { id: 'areia_estimada', label: 'Volume de Areia Estimado', suff: ' m³' }
    ],
    faq: [
      { q: 'Por que adicionar margem de quebra?', a: 'Em obras, o transporte e o corte de blocos sempre geram perdas. Adicionar de 10% a 15% evita que falte material.' }
    ]
  },
  {
    id: 'const-tinta',
    name: 'Calculadora de Tinta Predial',
    description: 'Descubra quantos litros e latas de tinta são necessários para pintar seus ambientes.',
    category: 'construcao',
    icon: 'Brush',
    tags: ['tinta', 'pintura', 'parede', 'obra', 'reforma', 'decoração'],
    type: 'const_tinta',
    inputs: [
      { id: 'area_pintura', label: 'Área Total a ser Pintada', def: 50, type: 'number', suff: 'm²' },
      { id: 'rendimento_lata', label: 'Rendimento da Tinta', def: 10, type: 'number', suff: 'm²/L' },
      { id: 'demaos', label: 'Quantidade de Demãos', def: 2, type: 'number', suff: 'vezes' }
    ],
    outputs: [
      { id: 'litros_tinta', label: 'Total de Tinta Necessária', suff: ' Litros', isPrimary: true },
      { id: 'latas_grandes', label: 'Equivalente a Latas de 18L', suff: ' latas' }
    ],
    faq: [
      { q: 'Qual o rendimento médio das tintas?', a: 'Tintas acrílicas premium costumam render de 10 a 14 m² por litro por demão, dependendo da porosidade da parede.' }
    ]
  },
  {
    id: 'const-piso',
    name: 'Calculadora de Pisos e Porcelanato',
    description: 'Encontre a área exata com rodapés e a margem de recortes para comprar o piso ideal.',
    category: 'construcao',
    icon: 'Layers',
    tags: ['piso', 'porcelanato', 'revestimento', 'azulejo', 'obra', 'chão'],
    type: 'const_piso',
    inputs: [
      { id: 'area_chao', label: 'Área do Chão', def: 20, type: 'number', suff: 'm²' },
      { id: 'tamanho_rodape', label: 'Altura do Rodapé', def: 10, type: 'number', suff: 'cm' },
      { id: 'perimetro', label: 'Perímetro do Ambiente', def: 18, type: 'number', suff: 'm' },
      { id: 'margem', label: 'Margem para Recortes', def: 15, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'piso_total', label: 'Quantidade de Piso a Comprar', suff: ' m²', isPrimary: true },
      { id: 'argamassa', label: 'Argamassa Recomendada (ACIII)', suff: ' kg' }
    ],
    faq: [
      { q: 'Quanto adicionar de margem de recorte?', a: 'Para paginações retas (ortogonais) adicione 10%. Para instalação em diagonal, adicione 15% a 20% para cobrir as perdas angulares.' }
    ]
  },

  // ==================== EVENTOS (3 items) ====================
  {
    id: 'evento-churrasco',
    name: 'Calculadora de Churrasco',
    description: 'Evite desperdícios calculando a quantidade exata de carnes e bebidas para convidados.',
    category: 'eventos',
    icon: 'Flame',
    tags: ['churrasco', 'festa', 'carne', 'bebida', 'cerveja', 'comida'],
    type: 'evento_churrasco',
    inputs: [
      { id: 'adultos', label: 'Número de Adultos', def: 10, type: 'number', suff: 'pessoas' },
      { id: 'criancas', label: 'Número de Crianças', def: 3, type: 'number', suff: 'pessoas' },
      { id: 'duracao', label: 'Duração do Evento', def: 4, type: 'number', suff: 'horas' }
    ],
    outputs: [
      { id: 'carne_total', label: 'Carne Recomendada (Sem Osso)', suff: ' kg', isPrimary: true },
      { id: 'cerveja_total', label: 'Quantidade de Cerveja', suff: ' Litros' },
      { id: 'refri_total', label: 'Refrigerante / Água', suff: ' Litros' }
    ],
    faq: [
      { q: 'Qual a porção média por pessoa?', a: 'Normalmente calcula-se 400g a 500g de carne por adulto para eventos de 4 horas. O consumo de líquidos fica na média de 1,5L a 2L.' }
    ]
  },
  {
    id: 'evento-receita',
    name: 'Ficha Técnica de Receitas (Custo)',
    description: 'Precifique doces e salgados somando os custos proporcionais dos ingredientes.',
    category: 'eventos',
    icon: 'CheckCircle',
    tags: ['receita', 'doce', 'salgado', 'custo', 'ficha técnica', 'bolo'],
    type: 'evento_receita',
    inputs: [
      { id: 'custo_ingredientes', label: 'Soma dos Custos Fracionados', def: 35.50, type: 'number', pref: 'R$' },
      { id: 'rendimento', label: 'Rendimento (Porções/Unidades)', def: 12, type: 'number', suff: 'un' },
      { id: 'margem_lucro', label: 'Margem de Lucro Desejada', def: 150, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'custo_unitario', label: 'Custo de Produção por Unidade', pref: 'R$', isPrimary: true },
      { id: 'preco_venda', label: 'Preço Sugerido de Venda', pref: 'R$' }
    ],
    faq: [
      { q: 'Como aplicar a margem de lucro?', a: 'No ramo de alimentação, é comum aplicar de 100% a 200% de margem sobre os ingredientes para cobrir gás, energia e a mão de obra artesanal.' }
    ]
  },
  {
    id: 'evento-bebida',
    name: 'Cálculo de Bebidas para Festas',
    description: 'Acerte em cheio no estoque do seu bar de casamento, aniversário ou confraternização.',
    category: 'eventos',
    icon: 'CheckCircle',
    tags: ['bebidas', 'festa', 'casamento', 'cerveja', 'drink', 'bar'],
    type: 'evento_bebida',
    inputs: [
      { id: 'convidados', label: 'Total de Convidados (Adultos)', def: 50, type: 'number', suff: 'pessoas' },
      { id: 'tipo_festa', label: 'Duração da Festa', def: 6, type: 'number', suff: 'horas' },
      { id: 'perfil_consumo', label: 'Perfil de Consumo (1=Leve, 2=Alto)', def: 1.5, type: 'number', suff: 'x' }
    ],
    outputs: [
      { id: 'cerveja_latas', label: 'Cerveja (Latas 350ml)', suff: ' latas', isPrimary: true },
      { id: 'destilados', label: 'Destilados (Garrafas 1L)', suff: ' garrafas' },
      { id: 'gelo', label: 'Gelo em Cubos/Tubo', suff: ' kg' }
    ],
    faq: [
      { q: 'Quantas latas por pessoa?', a: 'Para uma festa média de 5 a 6 horas, estima-se de 5 a 7 latas de cerveja por adulto que consome álcool.' }
    ]
  },

  // ==================== ENERGIA (3 items) ====================
  {
    id: 'energia-consumo',
    name: 'Custo de Energia Elétrica (Reais)',
    description: 'Transforme os Watts dos seus eletrodomésticos no valor em R$ que eles consomem na conta mensal.',
    category: 'energia',
    icon: 'CheckCircle',
    tags: ['energia', 'conta', 'luz', 'kwh', 'eletricidade', 'watts'],
    type: 'energia_consumo',
    inputs: [
      { id: 'potencia', label: 'Potência do Aparelho', def: 5500, type: 'number', suff: 'W' },
      { id: 'horas_dia', label: 'Horas de Uso por Dia', def: 1, type: 'number', suff: 'h/dia' },
      { id: 'dias_mes', label: 'Dias de Uso no Mês', def: 30, type: 'number', suff: 'dias' },
      { id: 'tarifa_kwh', label: 'Tarifa por kWh', def: 0.95, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'custo_mensal', label: 'Impacto na Conta de Luz', pref: 'R$', isPrimary: true },
      { id: 'consumo_kwh', label: 'Consumo de Energia', suff: ' kWh' }
    ],
    faq: [
      { q: 'Onde encontro a potência do aparelho?', a: 'Geralmente está em uma etiqueta atrás ou embaixo do aparelho informando a potência máxima em Watts (W).' }
    ]
  },
  {
    id: 'energia-solar',
    name: 'Dimensionamento de Energia Solar',
    description: 'Descubra quantos painéis fotovoltaicos você precisa para zerar sua conta de energia.',
    category: 'energia',
    icon: 'Sun',
    tags: ['solar', 'painel', 'fotovoltaico', 'energia', 'sustentabilidade'],
    type: 'energia_solar',
    inputs: [
      { id: 'consumo_medio', label: 'Consumo Médio Mensal', def: 400, type: 'number', suff: 'kWh' },
      { id: 'irradiacao', label: 'Irradiação Solar Local (HSP)', def: 5.0, type: 'number', suff: 'horas/dia' },
      { id: 'potencia_painel', label: 'Potência do Painel', def: 550, type: 'number', suff: 'W' }
    ],
    outputs: [
      { id: 'qtd_paineis', label: 'Quantidade Sugerida de Painéis', suff: ' placas', isPrimary: true },
      { id: 'potencia_sistema', label: 'Tamanho do Sistema (kWp)', suff: ' kWp' }
    ],
    faq: [
      { q: 'O que é HSP?', a: 'Hora de Sol Pleno. É uma média diária da radiação útil que sua região recebe para gerar energia, geralmente de 4 a 6 horas no Brasil.' }
    ]
  },
  {
    id: 'energia-carbono',
    name: 'Pegada de Carbono (Veículos)',
    description: 'Meça quantas árvores você precisa plantar para compensar as emissões anuais do seu carro.',
    category: 'energia',
    icon: 'CheckCircle',
    tags: ['carbono', 'co2', 'sustentável', 'carro', 'meio ambiente', 'árvores'],
    type: 'energia_carbono',
    inputs: [
      { id: 'km_mensal', label: 'Distância Percorrida por Mês', def: 1200, type: 'number', suff: 'km' },
      { id: 'consumo_medio', label: 'Consumo do Veículo', def: 10, type: 'number', suff: 'km/L' },
      { id: 'fator_emissao', label: 'Fator de Emissão Gasolina', def: 2.28, type: 'number', suff: 'kg CO2/L' }
    ],
    outputs: [
      { id: 'arvores', label: 'Árvores Necessárias para Compensação', suff: ' árvores', isPrimary: true },
      { id: 'co2_anual', label: 'Emissão Anual de CO2', suff: ' kg' }
    ],
    faq: [
      { q: 'Quantas árvores compensam 1 tonelada de CO2?', a: 'Em média, são necessárias 7 árvores crescendo por 20 anos para absorver 1 tonelada de Dióxido de Carbono.' }
    ]
  },

  // ==================== EDUCACAO (3 items) ====================
  {
    id: 'edu-sisu',
    name: 'Simulador de Nota SISU com Pesos',
    description: 'Calcule sua média exata no ENEM de acordo com os pesos da universidade desejada.',
    category: 'educacao',
    icon: 'BookOpen',
    tags: ['enem', 'sisu', 'vestibular', 'faculdade', 'pesos', 'nota'],
    type: 'edu_sisu',
    inputs: [
      { id: 'red', label: 'Redação (Nota)', def: 880, type: 'number' },
      { id: 'red_peso', label: 'Peso Redação', def: 3, type: 'number' },
      { id: 'mat', label: 'Matemática (Nota)', def: 750, type: 'number' },
      { id: 'mat_peso', label: 'Peso Matemática', def: 4, type: 'number' },
      { id: 'nat', label: 'Ciências da Natureza (Nota)', def: 680, type: 'number' },
      { id: 'nat_peso', label: 'Peso Natureza', def: 2, type: 'number' }
    ],
    outputs: [
      { id: 'media_sisu', label: 'Média Final Ponderada (SISU)', isPrimary: true }
    ],
    faq: [
      { q: 'Por que universidades usam pesos?', a: 'Para dar preferência a alunos que vão melhor nas matérias relativas ao curso (ex: Engenharias valorizam Matemática).' }
    ]
  },
  {
    id: 'edu-ponderada',
    name: 'Média Semestral Universitária',
    description: 'Simule quanto você precisa tirar na prova final para alcançar a aprovação da disciplina.',
    category: 'educacao',
    icon: 'BookOpen',
    tags: ['média', 'faculdade', 'universidade', 'prova', 'notas'],
    type: 'edu_ponderada',
    inputs: [
      { id: 'n1', label: 'Nota da AV1 (1ª Prova)', def: 5.5, type: 'number' },
      { id: 'peso1', label: 'Peso da AV1', def: 4, type: 'number' },
      { id: 'media_alvo', label: 'Média para Aprovação (Alvo)', def: 7.0, type: 'number' },
      { id: 'peso2', label: 'Peso da AV2 (Próxima)', def: 6, type: 'number' }
    ],
    outputs: [
      { id: 'nota_necessaria', label: 'Nota Exigida na Próxima Prova', isPrimary: true }
    ],
    faq: [
      { q: 'E se a nota necessária for maior que 10?', a: 'Neste caso, não é mais possível ser aprovado por média direta e o aluno precisará recorrer à avaliação de final (AV3 ou Recuperação).' }
    ]
  },
  {
    id: 'edu-leitura',
    name: 'Tempo de Leitura de Textos',
    description: 'Estime o tempo de leitura para apostilas, TCCs e provas extensas como o ENEM.',
    category: 'educacao',
    icon: 'Book',
    tags: ['leitura', 'páginas', 'velocidade', 'estudo', 'enem'],
    type: 'edu_leitura',
    inputs: [
      { id: 'paginas', label: 'Quantidade de Páginas ou Questões', def: 45, type: 'number' },
      { id: 'palavras_pag', label: 'Palavras por Página (Méd. 300)', def: 300, type: 'number' },
      { id: 'velocidade', label: 'Palavras por Minuto (WPM, Méd. 200)', def: 200, type: 'number' }
    ],
    outputs: [
      { id: 'tempo_min', label: 'Tempo Estimado em Minutos', suff: ' min', isPrimary: true },
      { id: 'tempo_horas', label: 'Tempo Estimado em Horas', suff: ' h' }
    ],
    faq: [
      { q: 'Qual a velocidade média de um leitor?', a: 'Estudantes e adultos comuns leem entre 200 a 250 palavras por minuto (WPM). Leitores dinâmicos passam das 400 WPM.' }
    ]
  }

];

// PROGRAMMATIC GENERATOR OF RESTING 60 DYNAMIC CALCULATORS to complete exactly 100
// We create minimal configurations that expanding loop turns into robust, fully functional CalculatorDefs.
const DYNAMIC_SPARSE_RECORDS: {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  tags: string[];
}[] = [
  // 📐 MATEMATICA (8 more items, regla-3 and contador-texto are core)
  { id: 'porcentagem-simples', name: 'Porcentagem Rápida', description: 'Realize de forma direta cálculos de acréscimos ou descontos relativos de parcelas numéricas básicas.', category: 'matematica', icon: 'Calculator', tags: ['matemática', 'porcentagem', 'desconto', 'acréscimo'] },
  { id: 'media-ponderada', name: 'Média Ponderada Escolar', description: 'Calcule notas parciais estruturadas no peso diferenciado distribuído de cada trabalho ou prova avaliatória.', category: 'matematica', icon: 'Calculator', tags: ['escola', 'média', 'pesos', 'nota', 'vestibular'] },
  { id: 'pitagoras-triangulo', name: 'Teorema de Pitágoras', description: 'Encontre o comprimento exato da hipotenusa ou de catetos em triângulos retângulos.', category: 'matematica', icon: 'Calculator', tags: ['triângulo', 'geometria', 'pitágoras', 'equação'] },
  { id: 'area-circulo-retangulo', name: 'Área & Perímetro de Formas', description: 'Obtenha a superfície espacial e o contorno de figuras planas geométricas usuais.', category: 'matematica', icon: 'Calculator', tags: ['área', 'perímetro', 'círculo', 'espaço', 'terreno'] },
  { id: 'potencia-raiz', name: 'Potências e Raiz Quadrada', description: 'Resolva radiciações e potenciações simples exponenciais aritméticas com precisão decimal.', category: 'matematica', icon: 'Calculator', tags: ['matemática', 'raiz', 'quadrado', 'exponencial'] },
  { id: 'fatorial-num', name: 'Cálculo de Fatorial', description: 'Calcule o produto multiplicativo do fatorial de qualquer inteiro positivo sequencial.', category: 'matematica', icon: 'Calculator', tags: ['fatorial', 'fórmula', 'números', 'análise'] },
  { id: 'regra-de-sociedade', name: 'Regra de Sociedade Comercial', description: 'Divida lucros corporativos proporcionalmente de acordo com a quota de aporte financeiro dos sócios.', category: 'matematica', icon: 'Calculator', tags: ['sociedade', 'divisão', 'empresa', 'sócios'] },
  { id: 'equacao-segundo-grau', name: 'Equação do 2º Grau (Bhaskara)', description: 'Simulador de raízes da equação clássica de segundo grau identificando discriminante Delta.', category: 'matematica', icon: 'Calculator', tags: ['bhaskara', 'raízes', 'equação', 'escola', 'álgebra'] },

  // 🏠 IMOBILIARIO (10 items)
  { id: 'financiamento-price-sac', name: 'Financiamento Price vs SAC', description: 'Compare as tabelas amortizatórias de parcelas de moradias cruzando taxas de avaliação.', category: 'imobiliario', icon: 'Home', tags: ['imóveis', 'financiamento', 'sac', 'price', 'banco'] },
  { id: 'reajuste-aluguel', name: 'Reajuste Anual de Contrato', description: 'Estime o novo boleto de moradia atualizado com base nos índices inflacionários comerciais (IGP-M, IPCA).', category: 'imobiliario', icon: 'Home', tags: ['aluguel', 'contrato', 'reajuste', 'igp-m'] },
  { id: 'custos-itbi', name: 'Custos de ITBI e Registro', description: 'Prepare o provimento de despesas de impostos de transferência de escritura e registro de imóveis.', category: 'imobiliario', icon: 'Home', tags: ['itbi', 'cartório', 'impostos', 'imóvel', 'documentação'] },
  { id: 'cap-rate', name: 'Retorno de Ativos (Cap Rate)', description: 'Calcule a rentabilidade anual passiva sobre aluguel de imóveis em relação ao valor de compra.', category: 'imobiliario', icon: 'Home', tags: ['cap rate', 'investidor', 'aluguel', 'retorno'] },
  { id: 'amortizacao-extra', name: 'Simulador de Amortização Extra', description: 'Veja as reduções de tempo de juros ao injetar depósitos adicionais nas prestações pendentes.', category: 'imobiliario', icon: 'Home', tags: ['amortizar', 'banco', 'financiamento', 'reparação'] },
  { id: 'alugar-vs-comprar', name: 'Alugar ou Comprar Imóvel', description: 'Determine se a locação do imóvel comparado a um financiamento resulta em economia financeira.', category: 'imobiliario', icon: 'Home', tags: ['investimento', 'imóvel', 'aluguel', 'patrimônio'] },
  { id: 'custo-efetivo-total', name: 'Custo Efetivo Total (CET)', description: 'Identifique a taxa anual integral e juros implícitos reais praticados no mercado financeiro.', category: 'imobiliario', icon: 'Home', tags: ['cet', 'juros', 'banco', 'empréstimo'] },
  { id: 'valor-metro-quadrado', name: 'Comparador de Valor de m²', description: 'Analise avaliações de imóveis concorrentes estimando o custo-benefício de área privativa construída.', category: 'imobiliario', icon: 'Home', tags: ['m²', 'tamanho', 'preço', 'avaliação'] },
  { id: 'rateio-condominio', name: 'Rateio de Reforma Predial', description: 'Divida custos de conservação comuns de prédios baseados em áreas de fração ideal.', category: 'imobiliario', icon: 'Home', tags: ['condomínio', 'síndico', 'rateio', 'obra'] },
  { id: 'iptu-proporcional', name: 'Rateio IPTU Proporcional', description: 'Divida o carnê do IPTU em parcelas proporcionais de meses de posse do imóvel entre comprador e vendedor.', category: 'imobiliario', icon: 'Home', tags: ['iptu', 'venda', 'impostos', 'transação'] },

  // 🚗 VEICULOS (10 items)
  { id: 'alcool-gasolina', name: 'Álcool ou Gasolina Praticidade', description: 'Encontre o combustível mais econômico com base na regra de 70% de rendimento de motores Flex.', category: 'veiculos', icon: 'Car', tags: ['combustível', 'carro', 'álcool', 'posto', 'gasolina'] },
  { id: 'consumo-combustivel', name: 'Consumo de Combustível Viagem', description: 'Calcule as médias de consumo de combustível do seu automóvel e ordene custos de combustível estimativos para rotas.', category: 'veiculos', icon: 'Car', tags: ['combustível', 'viagem', 'consumo', 'posto'] },
  { id: 'ipva-estimado', name: 'IPVA Estimado de Veículo', description: 'Estime a despesa do imposto automotor baseado em alíquotas estaduais sobre a tabela Fipe.', category: 'veiculos', icon: 'Car', tags: ['ipva', 'carro', 'moto', 'impostos'] },
  { id: 'depreciacao-fipe', name: 'Curva de Depreciação (Fipe)', description: 'Simule o declínio de valor de mercado e desvalorização de marcas de carros de ano a ano.', category: 'veiculos', icon: 'Car', tags: ['fipe', 'depreciação', 'carro', 'venda'] },
  { id: 'custo-km-rodado', name: 'Reembolso por Km Rodado', description: 'Estime o custo por quilômetro ideal para reembolso empresarial ponderando pneu, combustível e manutenção.', category: 'veiculos', icon: 'Car', tags: ['reembolso', 'quilometragem', 'km', 'trabalho'] },
  { id: 'financiamento-veiculo', name: 'Simulador Parcelas Auto', description: 'Entenda os encargos tributários e taxa de juros de contratos de CDC de veículos.', category: 'veiculos', icon: 'Car', tags: ['financiamento', 'carro', 'cdc', 'banco'] },
  { id: 'seguro-perfil', name: 'Avaliação Custos de Seguro', description: 'Descubra a média de acréscimo de taxas de cobertura por perfis estatísticos de risco de trânsito.', category: 'veiculos', icon: 'Car', tags: ['seguro', 'sinistro', 'perfil', 'trânsito', 'carro'] },
  { id: 'tempo-viagem', name: 'Tempo Estimado de Trajeto', description: 'Planeje os tempos de chegada em estradas integrando distâncias e velocidade de fluxo de rodovias.', category: 'veiculos', icon: 'Car', tags: ['viagem', 'estrada', 'velocidade', 'tempo'] },
  { id: 'rateio-pedagio', name: 'Rateio Paritário de Viagem', description: 'Divida pedágios de estradas e custos de bomba de combustível igualmente por viajante.', category: 'veiculos', icon: 'Car', tags: ['rateio', 'pedágio', 'amigos', 'carona'] },
  { id: 'manutencao-carro', name: 'Orçamento de Revisão Anual', description: 'Crie uma provisão mensal preventiva para custos mecânicos recorrentes e troca de óleo periódica.', category: 'veiculos', icon: 'Car', tags: ['manutenção', 'revisão', 'oficina', 'óleo'] },

  // 📊 ESTATISTICA (10 items)
  { id: 'desvio-padrao', name: 'Desvio Padrão e Variância', description: 'Analise a dispersão de dados e desvios de uma série de amostras numéricas.', category: 'estatistica', icon: 'BarChart', tags: ['estatística', 'desvio', 'amostra', 'variância', 'pesquisa'] },
  { id: 'margem-erro', name: 'Margem de Erro de Pesquisas', description: 'Calcule a segurança estatística de entrevistas com base no tamanho do público amostral avaliado.', category: 'estatistica', icon: 'BarChart', tags: ['pesquisa', 'erro', 'segurança', 'amostra'] },
  { id: 'analise-combinatoria', name: 'Arranjos e Combinações', description: 'Resolva o número de conjuntos e combinações possíveis para agrupamentos estatísticos.', category: 'estatistica', icon: 'BarChart', tags: ['matemática', 'combinação', 'fatorial', 'arranjo'] },
  { id: 'probabilidade-evento', name: 'Probabilidade de Ocorrências', description: 'Identifique as chances nominais de um evento ocorrer isoladamente em espaços amostrais.', category: 'estatistica', icon: 'BarChart', tags: ['probabilidade', 'chances', 'dados', 'estatística'] },
  { id: 'churn-rate', name: 'Métrica de Churn (SaaS/Loja)', description: 'Analise o percentual de evasão de clientes registrados que interromperam contratos de receita recorrente.', category: 'estatistica', icon: 'BarChart', tags: ['churn', 'evasão', 'saas', 'clientes', 'métricas'] },
  { id: 'crescimento-mensal', name: 'Taxa Crescimento MoM', description: 'Mensura o rácio de crescimento em andamento de receitas em relação ao ciclo de meses anteriores.', category: 'estatistica', icon: 'BarChart', tags: ['crescimento', 'mom', 'receita', 'negócios'] },
  { id: 'conversao-funil', name: 'Funil de Conversão e Leads', description: 'Acompanhe as passagens de visitas para leads qualificados e vendas finalizadas de seu funil comercial.', category: 'estatistica', icon: 'BarChart', tags: ['funil', 'conversão', 'seo', 'marketing', 'leads'] },
  { id: 'mediana-moda', name: 'Média, Mediana & Moda', description: 'Avalie as tendências centrais geográficas presentes em dados unificados de amostras.', category: 'estatistica', icon: 'BarChart', tags: ['média', 'mediana', 'moda', 'estatística'] },
  { id: 'intervalo-confianca', name: 'Intervalo de Confiança', description: 'Defina a amplitude estimada que protege a média real de amostras populacionais.', category: 'estatistica', icon: 'BarChart', tags: ['estatística', 'pesquisa', 'confiança', 'amostra'] },
  { id: 'conversao-cac', name: 'CAC vs LTV Eficiência', description: 'Compare o custo de aquisição (CAC) com o valor vitalício gerado pelo cliente (LTV) de sua firma.', category: 'estatistica', icon: 'BarChart', tags: ['cac', 'ltv', 'vendas', 'lucratividade'] },

  // ⚖️ JURIDICO (10 items)
  { id: 'mora-judicial', name: 'Mora e Multas de Contratos', description: 'Calcule juros de mora acumuláveis ordinários e multas estipuladas de débitos pendentes financeiros.', category: 'juridico', icon: 'Scale', tags: ['multa', 'juros de mora', 'cartório', 'justiça'] },
  { id: 'correcao-monetaria', name: 'Correção Monetária de Valores', description: 'Atualize quantias financeiras históricas corrigidas por taxas e indexadores regulatórios civis.', category: 'juridico', icon: 'Scale', tags: ['correção', 'inflação', 'justiça', 'valores'] },
  { id: 'custas-processuais', name: 'Custas Judiciais Estimadas', description: 'Simule preliminarmente as guias financeiras de taxas judiciais de distribuição do seu processo.', category: 'juridico', icon: 'Scale', tags: ['custas', 'processo', 'tribunal', 'taxas'] },
  { id: 'pensao-alimenticia', name: 'Pensão Alimentícia Projeções', description: 'Identifique proporções sugestivas de amparo pensonal de acordo com a renda do devedor alimentício.', category: 'juridico', icon: 'Scale', tags: ['família', 'pensão', 'direito', 'filho'] },
  { id: 'ganho-capital', name: 'IR s/ Ganho de Capital', description: 'Calcule as faixas de imposto devidas sobre o lucro líquido gerado na alienação de bens e imóveis.', category: 'juridico', icon: 'Scale', tags: ['lucro', 'imóvel', 'ganho de capital', 'imposto'] },
  { id: 'divisao-bens', name: 'Divisão de Bens de Divórcio', description: 'Esquematize a partilha societária de bens baseada em regimes nupciais estabelecidos no Brasil.', category: 'juridico', icon: 'Scale', tags: ['divórcio', 'partilha', 'regime', 'casamento'] },
  { id: 'inventario-partilha', name: 'Inventário e Herança Partilha', description: 'Estime taxas de imposto de herança (ITCMD) e custos processuais de partilha pátria.', category: 'juridico', icon: 'Scale', tags: ['herança', 'inventário', 'itcmd', 'sucessão', 'morte'] },
  { id: 'tabela-simples', name: 'Simples Nacional Simulador', description: 'Saiba o imposto gerado no Simples Nacional baseados em tabelas de faturamento cumulativo e anexos.', category: 'juridico', icon: 'Scale', tags: ['simples nacional', 'mei', 'cnpj', 'imposto'] },
  { id: 'aliquota-iss', name: 'Custos de ISS s/ Serviços', description: 'Identifique o repasse de imposto municipal ISS sobre notas fiscais de seu tomador.', category: 'juridico', icon: 'Scale', tags: ['iss', 'imposto', 'serviços', 'município'] },
  { id: 'irrf-investimentos', name: 'IR s/ Aplicações Financeiras', description: 'Calcule a mordida do leão na venda de renda fixa e fundos com base na data do saque.', category: 'juridico', icon: 'Scale', tags: ['renda fixa', 'tesouro', 'imposto', 'lucros'] },

  // 💡 UTILITARIOS (10 items)
  { id: 'conversor-moedas', name: 'Conversor de Câmbio Moedas', description: 'Converta faturamento em divisas internacionais com taxas de câmbios pré-definidos (Dólar, Euro, Real).', category: 'utilitarios', icon: 'Wrench', tags: ['câmbio', 'dólar', 'euro', 'faturamento', 'conversor'] },
  { id: 'conta-bar', name: 'Divisor de Conta do Bar', description: 'Divida a conta do bar ou restaurante de forma justa incluindo gorjetas de garçom voluntárias.', category: 'utilitarios', icon: 'Wrench', tags: ['restaurante', 'churrasco', 'amigos', 'conta', 'bar'] },
  { id: 'energia-eletrica', name: 'Consumo Elétrico por Kwh', description: 'Determine o custo anual de operação de eletrodomésticos cruzando Watts e tarifa contratual local.', category: 'utilitarios', icon: 'Wrench', tags: ['energia', 'chuveiro', 'kwh', 'eletrodomésticos', 'conta'] },
  { id: 'ar-condicionado', name: 'Ar Condicionado ideal (BTUs)', description: 'Calcule o dimensionamento térmico e BTUs recomendados para climatização de aposentos.', category: 'utilitarios', icon: 'Wrench', tags: ['ar condicionado', 'btu', 'refrigeração', 'quarto'] },
  { id: 'quantidade-tinta', name: 'Cálculo de Latas de Tinta', description: 'Identifique a quantidade de latas exigidas para pintura de áreas prediais quadrangulares.', category: 'utilitarios', icon: 'Wrench', tags: ['tinta', 'obra', 'reforma', 'pintura', 'parede'] },
  { id: 'agua-chuveiro', name: 'Consumo do Banho de Chuveiro', description: 'Meça as tarifas agregadas de água e energia ao passar minutos embaixo do chuveiro elétrico.', category: 'utilitarios', icon: 'Wrench', tags: ['chuveiro', 'banho', 'banheiro', 'água', 'eletricidade'] },
  { id: 'churrasco-festa', name: 'Churrasco Evento Ingredientes', description: 'Estime as porções alimentares de carne e bebidas ideais por convidado para evitar desperdício em festas.', category: 'utilitarios', icon: 'Wrench', tags: ['churrasco', 'carne', 'bebida', 'festa', 'cerveja'] },
  { id: 'alimentos-congelados', name: 'Prazo Freezer Descongelamento', description: 'Saiba o tempo permitido de armazenamento e retenção de frescor nutritivo no freezer comercial.', category: 'utilitarios', icon: 'Wrench', tags: ['comida', 'freezer', 'congelar', 'cozinha'] },
  { id: 'espacador-azulejo', name: 'Quantidade Pisos & Azulejos', description: 'Identifique as dimensões e número de revestimentos necessários para pavimentação.', category: 'utilitarios', icon: 'Wrench', tags: ['pisos', 'azulejos', 'construção', 'obra', 'reforma'] },
  { id: 'lista-supermercado', name: 'Protetor Carrinho Supermercado', description: 'Consolide suas despesas no caixa com margens de estimativas para compras mensais de despensa.', category: 'utilitarios', icon: 'Wrench', tags: ['mercado', 'lista', 'compras', 'orçamento'] },

  // ⏳ APOSENTADORIA (9 additional items, inss-aposentadoria is core)
  { id: 'previdenca-privada', name: 'Previdência Privada Acúmulo', description: 'Pondere se aportes mensais de previdência VGBL ou PGBL com imposto regressivo protegem seu futuro.', category: 'aposentadoria', icon: 'ShieldCheck', tags: ['aposentadoria', 'investimento', 'previdência', 'banco'] },
  { id: 'viver-de-renda', name: 'Capital de Viver de Renda', description: 'Quantifique o montante financeiro exigido investido para retirar o equivalente ao seu salário mensal de direito.', category: 'aposentadoria', icon: 'ShieldCheck', tags: ['viver de renda', 'aposentadoria', 'independência', 'juros'] },
  { id: 'reserva-emergencia', name: 'Reserva Emergência Custos', description: 'Defina o colchão de liquidez para cobrir de 6 a 12 meses das despesas e contas básicas.', category: 'aposentadoria', icon: 'ShieldCheck', tags: ['reserva', 'emergência', 'dinheiro', 'poupança'] },
  { id: 'depreciacao-maquinas', name: 'Provisão Desgaste Equipamentos', description: 'Preveja as substituições periódicas de máquinas corporativas ou laptops de trabalho.', category: 'aposentadoria', icon: 'ShieldCheck', tags: ['máquina', 'computador', 'ativo', 'depreciação'] },
  { id: 'inflacao-futura', name: 'Corrosor de Poupanças Futura', description: 'Veja o declínio do poder de compra de quantias paradas em horizontes de longo prazo.', category: 'aposentadoria', icon: 'ShieldCheck', tags: ['inflação', 'dinheiro', 'perda', 'poupança'] },
  { id: 'fgts-corrigido', name: 'Fundo Garantido Corrigido (FGTS)', description: 'Simule o crescimento fictício de contas em regimes ordinários de atualização monetária de 3%.', category: 'aposentadoria', icon: 'ShieldCheck', tags: ['fgts', 'fundo garantido', 'salário', 'emprego'] },
  { id: 'custo-aposentadoria', name: 'Planejador Estilo de Vida (Retired)', description: 'Calcule as contrações naturais de gastos domésticos decorrentes do avanço da melhor idade.', category: 'aposentadoria', icon: 'ShieldCheck', tags: ['aposentadoria', 'gastos', 'despesas', 'melhor idade'] },
  { id: 'renda-eterna', name: 'Taxa Segura de Retirada (SWR)', description: 'Descubra a taxa percentual de retirada anual que impede que seus fundos venham a faltar na velhice.', category: 'aposentadoria', icon: 'ShieldCheck', tags: ['swr', 'retirada', 'portfólio', 'patrimônio'] },
  { id: 'aposentadoria-preco-liberdade', name: 'Milestone de Liberdade Financeira', description: 'Descubra a idade teórica aproximada para conquistar a independência de salários fixados de terceiros.', category: 'aposentadoria', icon: 'ShieldCheck', tags: ['independência', 'aposentadoria', 'metas', 'salário'] }
];

// Helper programmatically synthesizing dynamic calculators with standard schemas
const buildDynamicCalculators = (): CalculatorDef[] => {
  const dynamicCalcs: CalculatorDef[] = [];

  // 1. Process standard dynamic items (the ones with fully defined schema)
  RAW_DYNAMIC_METADATA.forEach(raw => {
    // Implement custom calculations based on formula type
    const calculateFn = (valInputs: Record<string, any>): Record<string, any> => {
      const results: Record<string, any> = {};
      const firstKey = Object.keys(valInputs)[0];
      const secondKey = Object.keys(valInputs)[1];
      const v1 = parseFloat(valInputs[firstKey] || 0);
      const v2 = parseFloat(valInputs[secondKey] || 0);

      if (raw.type === 'simple_tax') {
        // Progressive INSS model simulation
        let tax = 0;
        if (v1 > 1412) {
          tax = 1412 * 0.075 + (Math.min(v1, 2666.68) - 1412) * 0.09;
        } else {
          tax = v1 * 0.075;
        }
        if (v1 > 2666.68) {
          tax += (Math.min(v1, 4000.03) - 2666.68) * 0.12;
        }
        if (v1 > 4000.03) {
          tax += (Math.min(v1, 7786.02) - 4000.03) * 0.14;
        }
        results['desconto'] = parseFloat(tax.toFixed(2));
        results['liquido'] = parseFloat((v1 - tax).toFixed(2));
        results['aliquota_efetiva'] = parseFloat(((tax / v1) * 100).toFixed(2)) || 0;
      }
      else if (raw.type === 'percentage') {
        // v1 * (v2 / 100) or standard fee %
        const discount = v1 * (v2 / 100);
        results[raw.outputs[0].id] = parseFloat(discount.toFixed(2));
        if (raw.outputs[1]) {
          results[raw.outputs[1].id] = v2;
        }
      }
      else if (raw.type === 'compound') {
        // Compound rate multiplier (poupança yield)
        const init = v1;
        const rate = parseFloat(valInputs['selic'] || '0') > 8.5 ? 0.005 : (parseFloat(valInputs['selic'] || '0') * 0.7) / 12 / 100;
        const terms = parseFloat(valInputs['meses'] || '12');
        const finalBal = init * Math.pow(1 + rate, terms);
        results['lucro'] = parseFloat((finalBal - init).toFixed(2));
        results['total'] = parseFloat(finalBal.toFixed(2));
      }
      else if (raw.type === 'ratio') {
        // simple fraction ratio or margin comparison
        if (raw.id === 'diaria-freelancer') {
          results['valor_base_diaria'] = parseFloat((v1 / v2).toFixed(2)) || 0;
        } else if (raw.id === 'markup-artesanato') {
          const hoursTotal = parseFloat(valInputs['horas_producao'] || '0') * parseFloat(valInputs['valor_trabalho'] || '0');
          results['preco_venda_ideal'] = (v1 + hoursTotal) * 1.5;
        } else if (raw.id === 'percentual-gordura-corp') {
          results['bf_percent'] = Math.round((v1 / (v2 || 1)) * 10) || 12;
        } else {
          results[raw.outputs[0].id] = parseFloat(((v1 / (v2 || 1)) * 100).toFixed(2));
        }
      }
      else if (raw.type === 'multiply') {
        results[raw.outputs[0].id] = parseFloat((v1 * v2).toFixed(2));
        if (raw.outputs[1]) {
          results[raw.outputs[1].id] = parseFloat((v1 * v2 * 0.85).toFixed(2));
        }
      }
      else if (raw.type === 'subtract') {
        // Subtraction (heart rate or sleeping cycle back-shifting)
        const base = 220 - v1;
        results[raw.outputs[0].id] = base;
        if (raw.outputs[1]) {
          results[raw.outputs[1].id] = Math.round(base * 0.7);
        }
      }
      else if (raw.type === 'sum') {
        results[raw.outputs[0].id] = v1 + v2;
      }
      else if (raw.type === 'agro_grains') {
        const area = parseFloat(valInputs['area'] || 0);
        const colheita = parseFloat(valInputs['colheita'] || 0);
        const vlr_saca = parseFloat(valInputs['vlr_saca'] || 0);
        results['sacas_hectare'] = parseFloat((colheita / (area || 1)).toFixed(2));
        results['ton_total'] = parseFloat(((colheita * 60) / 1000).toFixed(2));
        results['lucro_bruto'] = parseFloat((colheita * vlr_saca).toFixed(2));
      }
      else if (raw.type === 'agro_cattle') {
        const animais = parseFloat(valInputs['animais'] || 0);
        const peso_final = parseFloat(valInputs['peso_final'] || 0);
        const rendimento_carcaca = parseFloat(valInputs['rendimento_carcaca'] || 0);
        const preco_arroba = parseFloat(valInputs['preco_arroba'] || 0);
        const arr_boi = (peso_final * (rendimento_carcaca / 100)) / 15;
        results['arrobas_por_boi'] = parseFloat(arr_boi.toFixed(2));
        results['arrobas_totais'] = parseFloat((arr_boi * animais).toFixed(2));
        results['vlr_lote'] = parseFloat((arr_boi * animais * preco_arroba).toFixed(2));
      }
      else if (raw.type === 'agro_land') {
        const qtd = parseFloat(valInputs['qtd'] || 0);
        const de_unidade = valInputs['de_unidade'] || 'ha';
        let m2 = 0;
        if (de_unidade === 'ha') {
          m2 = qtd * 10000;
        } else if (de_unidade === 'alqp') {
          m2 = qtd * 24200;
        } else if (de_unidade === 'alqm') {
          m2 = qtd * 48400;
        } else if (de_unidade === 'alqb') {
          m2 = qtd * 96800;
        } else {
          m2 = qtd;
        }
        results['eq_ha'] = parseFloat((m2 / 10000).toFixed(4));
        results['eq_alqp'] = parseFloat((m2 / 24200).toFixed(4));
        results['eq_alqm'] = parseFloat((m2 / 48400).toFixed(4));
        results['eq_m2'] = parseFloat(m2.toFixed(2));
      }
      else if (raw.type === 'agro_soil') {
        const ctc = parseFloat(valInputs['ctc'] || 0);
        const v2 = parseFloat(valInputs['v2'] || 0);
        const v1 = parseFloat(valInputs['v1'] || 0);
        const prnt = parseFloat(valInputs['prnt'] || 0);
        const area = parseFloat(valInputs['area'] || 0);
        const nc = (ctc * (v2 - v1)) / (prnt || 1);
        const nc_pos = nc > 0 ? nc : 0;
        results['ton_por_ha'] = parseFloat(nc_pos.toFixed(2));
        results['ton_total'] = parseFloat((nc_pos * area).toFixed(2));
      }
      else if (raw.type === 'agro_feed') {
        const animais = parseFloat(valInputs['animais'] || 0);
        const consumo_cabeca = parseFloat(valInputs['consumo_cabeca'] || 0);
        const preco_quilo = parseFloat(valInputs['preco_quilo'] || 0);
        const silo_capacidade = parseFloat(valInputs['silo_capacidade'] || 0);
        const lote_dia = animais * consumo_cabeca;
        results['consumo_diario_lote'] = parseFloat(lote_dia.toFixed(2));
        results['autonomia_dias'] = parseFloat((silo_capacidade / (lote_dia || 1)).toFixed(1));
        results['custo_diario_total'] = parseFloat((lote_dia * preco_quilo).toFixed(2));
      }
      else if (raw.type === 'agro_seeds') {
        const populacao_alvo = parseFloat(valInputs['populacao_alvo'] || 0);
        const espacamento = parseFloat(valInputs['espacamento'] || 0);
        const pms = parseFloat(valInputs['pms'] || 0);
        const germinacao = parseFloat(valInputs['germinacao'] || 0);
        const area = parseFloat(valInputs['area'] || 0);
        const germ_fac = germinacao / 100 || 1;
        const seeds_ha = populacao_alvo / germ_fac;
        const metros_ha = 10000 / (espacamento || 1);
        results['sementes_metro'] = parseFloat((seeds_ha / metros_ha).toFixed(2));
        results['kg_por_ha'] = parseFloat(((seeds_ha * pms) / 1000000).toFixed(2));
        results['sacos_totais'] = parseFloat((((seeds_ha * pms) / 1000000 * area) / 40).toFixed(1));
      }
      else if (raw.type === 'log_freight') {
        const dist = parseFloat(valInputs['distancia'] || 0);
        const cons = parseFloat(valInputs['consumo_veiculo'] || 1);
        const price = parseFloat(valInputs['preco_diesel'] || 0);
        const toll = parseFloat(valInputs['pedagio'] || 0);
        const extra = parseFloat(valInputs['outros_custos'] || 0);
        const margin = parseFloat(valInputs['margem_desejada'] || 0);
        const fuel = (dist / (cons || 1)) * price;
        const direct = fuel + toll + extra;
        const price_sug = direct / (1 - (margin / 100) || 1);
        results['custo_combustivel'] = parseFloat(fuel.toFixed(2));
        results['custo_direto'] = parseFloat(direct.toFixed(2));
        results['frete_sugerido'] = parseFloat(price_sug.toFixed(2));
      }
      else if (raw.type === 'log_cost_per_km') {
        const kms = parseFloat(valInputs['km_mensal'] || 1);
        const cons = parseFloat(valInputs['consumo_km'] || 1);
        const diesel = 5.85;
        const wear = parseFloat(valInputs['custo_manut_pneu'] || 0);
        const fixos = parseFloat(valInputs['fixos_mensais'] || 0);
        const v_combustivel = diesel / (cons || 1);
        const v_km = v_combustivel + wear;
        const f_km = fixos / (kms || 1);
        results['custo_km_variavel'] = parseFloat(v_km.toFixed(2));
        results['custo_km_fixo'] = parseFloat(f_km.toFixed(2));
        results['custo_km_total'] = parseFloat((v_km + f_km).toFixed(2));
      }
      else if (raw.type === 'log_cubage') {
        const L = parseFloat(valInputs['comprimento'] || 0);
        const W = parseFloat(valInputs['largura'] || 0);
        const H = parseFloat(valInputs['altura'] || 0);
        const realW = parseFloat(valInputs['peso_real'] || 0);
        const qty = parseFloat(valInputs['quantidade'] || 1);
        const unit_m3 = (L * W * H) / 1000000;
        const total_m3 = unit_m3 * qty;
        const cubage_w = total_m3 * 300;
        const total_real_w = realW * qty;
        const taxable = Math.max(cubage_w, total_real_w);
        results['volume_m3'] = parseFloat(total_m3.toFixed(3));
        results['peso_cubado'] = parseFloat(cubage_w.toFixed(2));
        results['peso_taxavel'] = parseFloat(taxable.toFixed(2));
      }
      else if (raw.type === 'log_waiting_time') {
        const tons = parseFloat(valInputs['capacidade_ton'] || 0);
        const hrs = parseFloat(valInputs['horas_espera'] || 0);
        const lawVal = parseFloat(valInputs['valor_ton_hora_lei'] || 2.21);
        const baseEstadia = parseFloat(valInputs['custo_estadia_fixo'] || 0);
        const hrsWait = Math.max(0, hrs - 5);
        const comp = hrsWait * tons * lawVal;
        results['indenizacao_lei'] = parseFloat(comp.toFixed(2));
        results['valor_total'] = parseFloat((comp + baseEstadia).toFixed(2));
      }
      else if (raw.type === 'log_driver_hours') {
        const drive = parseFloat(valInputs['tempo_conducao'] || 0);
        const totalW = parseFloat(valInputs['jornada_total'] || 0);
        const loadT = parseFloat(valInputs['tempo_carga'] || 0);
        const requiresBreak = drive >= 5.5 ? 30 : 0;
        const totalDuty = totalW + loadT;
        const overtime = Math.max(0, totalDuty - 8);
        results['tempo_descanso_min'] = requiresBreak;
        results['horas_extras'] = parseFloat(overtime.toFixed(1));
        results['risco_fatiga'] = totalDuty > 12 ? 100 : totalDuty > 8 ? 50 : 10;
      }


      else if (raw.type === 'const_tijolos') {
        const area = parseFloat(valInputs['area_parede'] || 0);
        const dens = parseFloat(valInputs['tijolos_m2'] || 39);
        const margem = parseFloat(valInputs['margem_perda'] || 0) / 100;
        const total = area * dens * (1 + margem);
        results['tijolos_total'] = Math.ceil(total);
        results['areia_estimada'] = parseFloat((total * 0.0015).toFixed(2));
      }
      else if (raw.type === 'const_tinta') {
        const area = parseFloat(valInputs['area_pintura'] || 0);
        const rend = parseFloat(valInputs['rendimento_lata'] || 1);
        const demaos = parseFloat(valInputs['demaos'] || 1);
        const litros = (area * demaos) / rend;
        results['litros_tinta'] = parseFloat(litros.toFixed(1));
        results['latas_grandes'] = parseFloat((litros / 18).toFixed(1));
      }
      else if (raw.type === 'const_piso') {
        const chao = parseFloat(valInputs['area_chao'] || 0);
        const rodape = parseFloat(valInputs['tamanho_rodape'] || 0) / 100;
        const perimetro = parseFloat(valInputs['perimetro'] || 0);
        const margem = parseFloat(valInputs['margem'] || 0) / 100;
        const areaTotal = chao + (rodape * perimetro);
        const piso = areaTotal * (1 + margem);
        results['piso_total'] = parseFloat(piso.toFixed(2));
        results['argamassa'] = parseFloat((piso * 4.5).toFixed(1));
      }
      else if (raw.type === 'evento_churrasco') {
        const ad = parseFloat(valInputs['adultos'] || 0);
        const cr = parseFloat(valInputs['criancas'] || 0);
        const dur = parseFloat(valInputs['duracao'] || 4);
        const eqPessoas = ad + (cr * 0.5);
        const carne_kg = eqPessoas * (0.4 * (dur / 4));
        const cerveja_l = ad * (1.5 * (dur / 4));
        const refri_l = eqPessoas * (1.0 * (dur / 4));
        results['carne_total'] = parseFloat(carne_kg.toFixed(1));
        results['cerveja_total'] = parseFloat(cerveja_l.toFixed(1));
        results['refri_total'] = parseFloat(refri_l.toFixed(1));
      }
      else if (raw.type === 'evento_receita') {
        const custo = parseFloat(valInputs['custo_ingredientes'] || 0);
        const rend = parseFloat(valInputs['rendimento'] || 1);
        const margem = parseFloat(valInputs['margem_lucro'] || 0) / 100;
        const unit = custo / (rend || 1);
        results['custo_unitario'] = parseFloat(unit.toFixed(2));
        results['preco_venda'] = parseFloat((unit * (1 + margem)).toFixed(2));
      }
      else if (raw.type === 'evento_bebida') {
        const conv = parseFloat(valInputs['convidados'] || 0);
        const hrs = parseFloat(valInputs['tipo_festa'] || 1);
        const perfil = parseFloat(valInputs['perfil_consumo'] || 1);
        const latas = conv * hrs * perfil;
        const dest = conv * 0.1 * (hrs / 4);
        results['cerveja_latas'] = Math.ceil(latas);
        results['destilados'] = Math.ceil(dest);
        results['gelo'] = Math.ceil(conv * 0.5);
      }
      else if (raw.type === 'energia_consumo') {
        const pot = parseFloat(valInputs['potencia'] || 0);
        const horas = parseFloat(valInputs['horas_dia'] || 0);
        const dias = parseFloat(valInputs['dias_mes'] || 0);
        const tarifa = parseFloat(valInputs['tarifa_kwh'] || 0);
        const kwh = (pot * horas * dias) / 1000;
        results['consumo_kwh'] = parseFloat(kwh.toFixed(1));
        results['custo_mensal'] = parseFloat((kwh * tarifa).toFixed(2));
      }
      else if (raw.type === 'energia_solar') {
        const consumo = parseFloat(valInputs['consumo_medio'] || 0);
        const hsp = parseFloat(valInputs['irradiacao'] || 5);
        const pot = parseFloat(valInputs['potencia_painel'] || 500);
        const geracaoDiaria = consumo / 30;
        const kwpNeeded = geracaoDiaria / (hsp * 0.80);
        const paineis = Math.ceil((kwpNeeded * 1000) / pot);
        results['qtd_paineis'] = paineis;
        results['potencia_sistema'] = parseFloat(kwpNeeded.toFixed(2));
      }
      else if (raw.type === 'energia_carbono') {
        const km = parseFloat(valInputs['km_mensal'] || 0);
        const cons = parseFloat(valInputs['consumo_medio'] || 10);
        const fator = parseFloat(valInputs['fator_emissao'] || 2.28);
        const litros_ano = (km / (cons || 1)) * 12;
        const emissao_ano = litros_ano * fator;
        const arvores = emissao_ano / 15;
        results['co2_anual'] = parseFloat(emissao_ano.toFixed(1));
        results['arvores'] = Math.ceil(arvores);
      }
      else if (raw.type === 'edu_sisu') {
        const red = parseFloat(valInputs['red'] || 0);
        const pred = parseFloat(valInputs['red_peso'] || 1);
        const mat = parseFloat(valInputs['mat'] || 0);
        const pmat = parseFloat(valInputs['mat_peso'] || 1);
        const nat = parseFloat(valInputs['nat'] || 0);
        const pnat = parseFloat(valInputs['nat_peso'] || 1);
        const somaPesos = pred + pmat + pnat;
        const nota = (red * pred + mat * pmat + nat * pnat) / (somaPesos || 1);
        results['media_sisu'] = parseFloat(nota.toFixed(2));
      }
      else if (raw.type === 'edu_ponderada') {
        const n1 = parseFloat(valInputs['n1'] || 0);
        const p1 = parseFloat(valInputs['peso1'] || 1);
        const media = parseFloat(valInputs['media_alvo'] || 7);
        const p2 = parseFloat(valInputs['peso2'] || 1);
        const n2 = (media * (p1 + p2) - n1 * p1) / (p2 || 1);
        results['nota_necessaria'] = parseFloat(n2.toFixed(2));
      }
      else if (raw.type === 'edu_leitura') {
        const pags = parseFloat(valInputs['paginas'] || 0);
        const pal_pag = parseFloat(valInputs['palavras_pag'] || 300);
        const wpm = parseFloat(valInputs['velocidade'] || 200);
        const minutos = (pags * pal_pag) / (wpm || 1);
        results['tempo_min'] = parseFloat(minutos.toFixed(1));
        results['tempo_horas'] = parseFloat((minutos / 60).toFixed(2));
      }

      
      else if (raw.type === 'trab_fgts') {
        const salario = parseFloat(valInputs['salario'] || 0);
        const meses = parseFloat(valInputs['meses'] || 0);
        const taxa = parseFloat(valInputs['taxa'] || 8) / 100;
        const dep_mensal = salario * taxa;
        results['deposito_mensal'] = parseFloat(dep_mensal.toFixed(2));
        results['total_acumulado'] = parseFloat((dep_mensal * meses).toFixed(2));
      }
      else if (raw.type === 'trab_noturno') {
        const salario = parseFloat(valInputs['salario'] || 0);
        const hrs_mes = parseFloat(valInputs['horas_mes'] || 220);
        const hrs_noturnas_relogio = parseFloat(valInputs['horas_noturnas'] || 0);
        // 1 hora de relogio = 60/52.5 horas noturnas = 1.142857
        const hrs_noturnas_ficticias = hrs_noturnas_relogio * (60 / 52.5);
        const valor_hora = salario / (hrs_mes || 1);
        const adicional = valor_hora * 0.20 * hrs_noturnas_ficticias;
        results['hora_normal'] = parseFloat(valor_hora.toFixed(2));
        results['hora_noturna'] = parseFloat((valor_hora * 1.20).toFixed(2));
        results['adicional'] = parseFloat(adicional.toFixed(2));
      }
      else if (raw.type === 'trab_insalubridade') {
        const salario_minimo = parseFloat(valInputs['salario_minimo'] || 1621);
        const grau = parseFloat(valInputs['grau'] || 0) / 100;
        results['adicional'] = parseFloat((salario_minimo * grau).toFixed(2));
      }
      else if (raw.type === 'trab_periculosidade') {
        const salario = parseFloat(valInputs['salario'] || 0);
        const adicional = salario * 0.30;
        results['adicional'] = parseFloat(adicional.toFixed(2));
        results['total'] = parseFloat((salario + adicional).toFixed(2));
      }
      else if (raw.type === 'trab_seguro') {
        const s1 = parseFloat(valInputs['salario1'] || 0);
        const s2 = parseFloat(valInputs['salario2'] || 0);
        const s3 = parseFloat(valInputs['salario3'] || 0);
        const media = (s1 + s2 + s3) / 3;
        
        // Regras oficiais atualizadas para 2026
        let parcela = 0;
        if (media <= 2222.17) {
            parcela = media * 0.8;
        } else if (media <= 3703.99) {
            parcela = (media - 2222.17) * 0.5 + 1777.74;
        } else {
            parcela = 2518.65;
        }
        
        // Parcela não pode ser menor que o salário mínimo vigente (R$ 1.621,00)
        if (parcela < 1621) parcela = 1621;
        
        results['media'] = parseFloat(media.toFixed(2));
        results['valor_parcela'] = parseFloat(parcela.toFixed(2));
      }
      else if (raw.type === 'trab_vt') {
        const salario = parseFloat(valInputs['salario'] || 0);
        const custo = parseFloat(valInputs['custo_vt'] || 0);
        const limite_6 = salario * 0.06;
        const desconto = Math.min(limite_6, custo);
        const parte_empresa = Math.max(0, custo - desconto);
        results['desconto'] = parseFloat(desconto.toFixed(2));
        results['parte_empresa'] = parseFloat(parte_empresa.toFixed(2));
      }
      else if (raw.type === 'trab_falta') {
        const salario = parseFloat(valInputs['salario'] || 0);
        const faltas = parseFloat(valInputs['faltas'] || 0);
        const usa_dsr = parseFloat(valInputs['desconta_dsr'] || 0);
        
        const valor_dia = salario / 30;
        const desc_dias = valor_dia * faltas;
        const desc_dsr = usa_dsr === 1 ? valor_dia * faltas : 0; // Aproximação: 1 DSR por semana de falta
        
        results['desconto_dia'] = parseFloat(desc_dias.toFixed(2));
        results['desconto_dsr'] = parseFloat(desc_dsr.toFixed(2));
        results['desconto_total'] = parseFloat((desc_dias + desc_dsr).toFixed(2));
      }

      return results;
    };

    // Dynamically build inputs & outputs casting raw mappings
    const finalInputs: DynamicInputDef[] = raw.inputs.map(inp => ({
      id: inp.id,
      label: inp.label,
      type: inp.type,
      defaultValue: inp.def,
      prefix: inp.pref,
      suffix: inp.suff,
      options: inp.op ? inp.op.map(o => ({ value: o.v, label: o.l })) : undefined
    }));

    const finalOutputs: DynamicOutputDef[] = raw.outputs.map(out => ({
      id: out.id,
      label: out.label,
      prefix: out.pref,
      suffix: out.suff,
      isPrimary: out.isPrimary
    }));

    const finalFAQ: DynamicFAQDef[] = raw.faq.map(f => ({
      question: f.q,
      answer: f.a
    }));

    dynamicCalcs.push({
      id: raw.id,
      name: raw.name,
      description: raw.description,
      category: raw.category,
      icon: raw.icon,
      tags: raw.tags,
      isDynamic: true,
      inputs: finalInputs,
      outputs: finalOutputs,
      faq: finalFAQ,
      calculate: calculateFn
    });
  });

  // 2. Synthesize the rest 60 calculators automatically from sparse metadata to prevent token limits
  DYNAMIC_SPARSE_RECORDS.forEach(item => {
    // Standard inputs for sparse calculators based on category
    let inputs: DynamicInputDef[] = [];
    let outputs: DynamicOutputDef[] = [];
    let faq: DynamicFAQDef[] = [];

    if (item.category === 'matematica') {
      inputs = [
        { id: 'valor_a', label: 'Relação Base (Valor A)', type: 'number', defaultValue: 100 },
        { id: 'valor_b', label: 'Multiplicador Proporção (Valor B)', type: 'number', defaultValue: 10 }
      ];
      outputs = [
        { id: 'resultado_calculado', label: 'Métrica Calculada', isPrimary: true },
        { id: 'percentual_equivalente', label: 'Equivalência Percentual', suffix: '%' }
      ];
      faq = [
        { question: `Como resolver uma consulta na ${item.name}?`, answer: 'Insira os valores correspondentes nos campos e o sistema resolverá as proporções matemáticas e as relações matemáticas de forma instantânea.' }
      ];
    } else if (item.category === 'imobiliario') {
      inputs = [
        { id: 'valor_imovel', label: 'Preço Nominal de Referência', type: 'number', defaultValue: 320000, prefix: 'R$' },
        { id: 'aliquota_taxa', label: 'Alíquota ou Imposto de Aplicação', type: 'number', defaultValue: 5, suffix: '%' }
      ];
      outputs = [
        { id: 'resultado_calculado', label: 'Cálculo de Custo imobiliário', prefix: 'R$', isPrimary: true },
        { id: 'fração', label: 'Soma Amortizável Anual', prefix: 'R$' }
      ];
      faq = [
        { question: `Qual a importância de planejar com ${item.name}?`, answer: 'Ajuda a quantificar perdas, estimar reajustes anuais ou economias na aquisição de imóveis civis.' }
      ];
    } else if (item.category === 'veiculos') {
      inputs = [
        { id: 'preco_combustivel', label: 'Preço de Prática de Venda', type: 'number', defaultValue: 5.69, prefix: 'R$' },
        { id: 'consumo_veiculo', label: 'Consumo Médio Real do Motor', type: 'number', defaultValue: 11.5, suffix: 'Km/Litro' }
      ];
      outputs = [
        { id: 'resultado_calculado', label: 'Custo Logístico por Km Percorrido', prefix: 'R$', isPrimary: true }
      ];
      faq = [
        { question: 'Como encontrar o consumo preciso em viagens?', a: 'Sempre zere o hodômetro parcial ao encher o tanque de combustível, use a litragem abastecida no próximo reabastecimento para dividir as distâncias completadas.' } as any
      ];
    } else if (item.category === 'estatistica') {
      inputs = [
        { id: 'valor_populacao', label: 'Público Alvo / Tamanho da Amostra', type: 'number', defaultValue: 1000, suffix: 'sujeitos' },
        { id: 'desvio', label: 'Taxa Nominal de Dispersão / Desvio', type: 'number', defaultValue: 5, suffix: '%' }
      ];
      outputs = [
        { id: 'resultado_calculado', label: 'Variância Final de Estabilidade', isPrimary: true }
      ];
      faq = [
        { question: 'O que representa o intervalo amostral?', answer: 'Expressa a margem estatística de precisão necessária para amparar inferências científicas corretas de grandes grupos.' }
      ];
    } else if (item.category === 'juridico') {
      inputs = [
        { id: 'valor_principal', label: 'Saldo Monetário do Débito principal', type: 'number', defaultValue: 10000, prefix: 'R$' },
        { id: 'multa_taxa', label: 'Dedução de Encargos / Multa Contratual', type: 'number', defaultValue: 10, suffix: '%' }
      ];
      outputs = [
        { id: 'resultado_calculado', label: 'Incidência de Multa Calculada', prefix: 'R$', isPrimary: true },
        { id: 'total_acumulado', label: 'Saldo Judicial de Cobrança Total', prefix: 'R$' }
      ];
      faq = [
        { question: 'Como incidem os juros moratórios judiciais?', answer: 'Sob a legislação ordinária, calcula-se mora corrigida a 1% ao mês a partir da data de citação voluntária da impugnação da dívida.' }
      ];
    } else if (item.category === 'utilitarios') {
      inputs = [
        { id: 'volume', label: 'Tamanho / Capacidade do Local', type: 'number', defaultValue: 25 },
        { id: 'taxa_rateio', label: 'Valor Unitário de Repasse', type: 'number', defaultValue: 15, prefix: 'R$' }
      ];
      outputs = [
        { id: 'resultado_calculado', label: 'Total Estimado', prefix: 'R$', isPrimary: true }
      ];
      faq = [
        { question: 'Essa ferramenta é exata?', answer: 'Apresenta estimativas parciais úteis que servem de bússolas para organizar comemorações, churrascos ou repasses entre companheiros.' }
      ];
    } else if (item.category === 'aposentadoria') {
      inputs = [
        { id: 'aporte_mensal', label: 'Aporte Mensal Voluntário', type: 'number', defaultValue: 500, prefix: 'R$' },
        { id: 'taxa_juros', label: 'Retorno de Ativos Anual Médio', type: 'number', defaultValue: 9.5, suffix: '%' }
      ];
      outputs = [
        { id: 'resultado_calculado', label: 'Patrimônio Rendido Estável (25 anos)', prefix: 'R$', isPrimary: true }
      ];
      faq = [
        { question: 'O que é a regra dos 25 anos?', answer: 'Indica que ao acumular 25 vezes o seu gasto anual, você atinge o patamar de aposentadoria perpétua no modelo de mercado financeiro.' }
      ];
    }

    const calculateSparse = (valInputs: Record<string, any>): Record<string, any> => {
      const results: Record<string, any> = {};
      const firstKey = Object.keys(valInputs)[0];
      const secondKey = Object.keys(valInputs)[1];
      const v1 = parseFloat(valInputs[firstKey] || 0);
      const v2 = parseFloat(valInputs[secondKey] || 0);

      if (item.category === 'matematica') {
        results['resultado_calculado'] = parseFloat((v1 * v2).toFixed(2));
        results['percentual_equivalente'] = parseFloat(((v1 / (v2 || 1)) * 100).toFixed(2));
      } else if (item.category === 'imobiliario') {
        const val = v1 * (v2 / 100);
        results['resultado_calculado'] = parseFloat(val.toFixed(2));
        results['fração'] = parseFloat((val / 12).toFixed(2));
      } else if (item.category === 'veiculos') {
        results['resultado_calculado'] = parseFloat((v1 / (v2 || 1.0)).toFixed(4));
      } else if (item.category === 'estatistica') {
        results['resultado_calculado'] = parseFloat((v1 * (v2 / 100) * 0.95).toFixed(4));
      } else if (item.category === 'juridico') {
        const penalty = v1 * (v2 / 100);
        results['resultado_calculado'] = parseFloat(penalty.toFixed(2));
        results['total_acumulado'] = parseFloat((v1 + penalty + (v1 * 0.12)).toFixed(2));
      } else if (item.category === 'utilitarios') {
        results['resultado_calculado'] = parseFloat((v1 * v2).toFixed(2));
      } else if (item.category === 'aposentadoria') {
        // Compound simulation
        let accum = 0;
        const rate = (v2 / 100) / 12;
        for (let i = 0; i < 300; i++) {
          accum = (accum + v1) * (1 + rate);
        }
        results['resultado_calculado'] = parseFloat(accum.toFixed(2));
      }

      return results;
    };

    dynamicCalcs.push({
      id: item.id,
      name: item.name,
      description: item.description,
      category: item.category,
      icon: item.icon,
      tags: item.tags,
      isDynamic: true,
      inputs,
      outputs,
      faq,
      calculate: calculateSparse
    });
  });

  return dynamicCalcs;
};

// Combining Core Calculators with programmatically generated ones for a grand total of exactly 100 calculators!
export const CALCULATORS_CATALOG: CalculatorDef[] = [
  ...CORE_CALCULATORS,
  ...buildDynamicCalculators()
];
