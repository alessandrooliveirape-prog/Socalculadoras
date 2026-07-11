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
  educacao: '📚 Educação & ENEM',
  quimica_fisica: '🧪 Química & Física',
  tecnologia: '💻 Tecnologia & Computação',
  pets: '🐾 Pets & Animais'
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
  type: 'percentage' | 'ratio' | 'sum' | 'multiply' | 'subtract' | 'compound' | 'simple_tax' | 'agro_grains' | 'agro_cattle' | 'agro_land' | 'agro_soil' | 'agro_feed' | 'agro_seeds' | 'log_freight' | 'log_cost_per_km' | 'log_cubage' | 'log_waiting_time' | 'log_driver_hours' | 'const_tijolos' | 'const_tinta' | 'const_piso' | 'evento_churrasco' | 'evento_receita' | 'evento_bebida' | 'energia_consumo' | 'energia_solar' | 'energia_carbono' | 'edu_sisu' | 'edu_ponderada' | 'edu_leitura' | 'trab_fgts' | 'trab_noturno' | 'trab_insalubridade' | 'trab_periculosidade' | 'trab_seguro' | 'trab_vt' | 'trab_falta' | 'vei_flex' | 'vei_consumption' | 'vei_ipva' | 'vei_depreciation' | 'vei_km_reimbursement' | 'vei_finance' | 'vei_move_brasil' | 'vei_insurance' | 'vei_travel_time' | 'vei_toll_split' | 'vei_maintenance' | 'mat_porcentagem' | 'mat_media_ponderada' | 'mat_pitagoras' | 'mat_area_formas' | 'mat_potencia_raiz' | 'mat_fatorial' | 'mat_sociedade' | 'mat_bhaskara' | 'imob_price_sac' | 'imob_reajuste' | 'imob_itbi' | 'imob_cap_rate' | 'imob_amortizacao' | 'imob_alugar_comprar' | 'imob_cet' | 'imob_m2' | 'imob_rateio' | 'imob_iptu' | 'est_desvio_padrao' | 'est_margem_erro' | 'est_combinatoria' | 'est_probabilidade' | 'est_churn' | 'est_crescimento' | 'est_funil' | 'est_mediana_moda' | 'est_confianca' | 'est_cac_ltv' | 'jur_mora' | 'jur_correcao' | 'jur_custas' | 'jur_pensao' | 'jur_ganho_capital' | 'jur_divisao_bens' | 'jur_inventario' | 'jur_simples_nacional' | 'jur_iss' | 'jur_irrf_invest' | 'util_cambio' | 'util_conta_bar' | 'util_energia_comp' | 'util_ar_btu' | 'util_tinta_m2' | 'util_chuveiro' | 'util_buffet' | 'util_freezer' | 'util_rejunte' | 'util_supermercado' | 'apo_prev_privada' | 'apo_viver_renda' | 'apo_reserva' | 'apo_depreciacao' | 'apo_inflacao' | 'apo_fgts_corr' | 'apo_custo_apos' | 'apo_swr' | 'apo_liberdade' | 'sci_speed' | 'sci_temp' | 'sci_density' | 'tech_download' | 'tech_aspect' | 'tech_base' | 'pets_idade_cao' | 'pets_idade_gato' | 'pets_racao_cao' | 'pets_agua' | 'saude_agua_humana' | 'saude_exercicio_calorias' | 'financas_ferias_pj' | 'veiculos_carro_eletrico' | 'financas_juros_abusivos' | 'juridico_cripto_imposto';
  inputs: { id: string; label: string; def: any; type: 'number' | 'select' | 'text'; op?: {v: any; l: string}[]; pref?: string; suff?: string; min?: number; max?: number; step?: number }[];
  outputs: { id: string; label: string; pref?: string; suff?: string; isPrimary?: boolean }[];
  faq: { q: string; a: string }[];
}[] = [
  {
    "id": "carro-eletrico-vs-combustivel",
    "name": "Carro Elétrico vs Combustão",
    "description": "Compare o custo de rodagem e a economia gerada ao substituir um veículo tradicional por um carro elétrico.",
    "category": "veiculos",
    "icon": "Zap",
    "tags": ["elétrico", "combustão", "carro elétrico", "byd", "gasolina", "economia", "recarga"],
    "type": "veiculos_carro_eletrico",
    "inputs": [
      {
        "id": "capacidade_bateria",
        "label": "Capacidade da Bateria (kWh)",
        "def": 40,
        "type": "number",
        "min": 10,
        "max": 120
      },
      {
        "id": "preco_kwh",
        "label": "Preço da Energia (R$/kWh)",
        "def": 0.85,
        "type": "number",
        "min": 0.1,
        "max": 3.0,
        "step": 0.05
      },
      {
        "id": "autonomia_eletrico",
        "label": "Autonomia Total Estimada (km)",
        "def": 300,
        "type": "number",
        "min": 50,
        "max": 1000
      },
      {
        "id": "consumo_combustivel",
        "label": "Consumo Média Combustão (km/L)",
        "def": 10,
        "type": "number",
        "min": 2,
        "max": 40,
        "step": 0.5
      },
      {
        "id": "preco_combustivel",
        "label": "Preço do Combustível (R$/L)",
        "def": 5.80,
        "type": "number",
        "min": 2.0,
        "max": 10.0,
        "step": 0.05
      },
      {
        "id": "distancia_mensal",
        "label": "Distância Rodada por Mês (km)",
        "def": 1500,
        "type": "number",
        "min": 100,
        "max": 20000
      }
    ],
    "outputs": [
      {
        "id": "economia_mensal",
        "label": "Economia Estimada por Mês",
        "pref": "R$ ",
        "isPrimary": true
      },
      {
        "id": "economia_anual",
        "label": "Economia Estimada por Ano",
        "pref": "R$ "
      },
      {
        "id": "custo_recarga_mensal",
        "label": "Gasto Mensal com Energia",
        "pref": "R$ "
      },
      {
        "id": "custo_combustivel_mensal",
        "label": "Gasto Mensal com Combustível",
        "pref": "R$ "
      }
    ],
    "faq": [
      {
        "q": "O cálculo considera as perdas de recarga?",
        "a": "Geralmente, há uma perda média de 10% a 15% na transferência de energia da tomada para a bateria (perdas por calor no carregador). Para manter a estimativa prática, a fórmula calcula o consumo direto, mas recomenda-se provisionar uma margem extra de 10% no gasto real."
      },
      {
        "q": "Como encontrar a tarifa de energia correta?",
        "a": "A tarifa de energia (kWh) varia conforme a sua cidade e a concessionária (ex: Enel, Light, Copel), constando em detalhes na sua conta de luz mensal, incluindo taxas e impostos integrados."
      }
    ]
  },
  {
    "id": "juros-abusivos-financiamento",
    "name": "Cálculo de Juros Abusivos",
    "description": "Avalie se as taxas cobradas no seu financiamento estão em patamar abusivo comparadas à taxa média de juros do Banco Central.",
    "category": "financas",
    "icon": "AlertTriangle",
    "tags": ["juros abusivos", "financiamento", "empréstimo", "banco central", "abusivo", "parcela"],
    "type": "financas_juros_abusivos",
    "inputs": [
      {
        "id": "valor_financiado",
        "label": "Valor Efetivamente Financiado (R$)",
        "def": 40000,
        "type": "number"
      },
      {
        "id": "taxa_juros_contratada",
        "label": "Taxa de Juros Contratada (% ao mês)",
        "def": 2.80,
        "type": "number",
        "step": 0.05
      },
      {
        "id": "parcelas_totais",
        "label": "Quantidade de Parcelas (Meses)",
        "def": 48,
        "type": "number",
        "min": 6,
        "max": 360
      },
      {
        "id": "valor_parcela_paga",
        "label": "Valor da Parcela Paga (R$)",
        "def": 1550,
        "type": "number"
      },
      {
        "id": "taxa_media_bacen",
        "label": "Taxa Média do Mercado (BACEN) (% ao mês)",
        "def": 1.80,
        "type": "number",
        "step": 0.05
      }
    ],
    "outputs": [
      {
        "id": "status_abusivo",
        "label": "Avaliação de Abusividade",
        "isPrimary": true
      },
      {
        "id": "diferenca_mensal",
        "label": "Cobrança Excedente por Parcela",
        "pref": "R$ "
      },
      {
        "id": "diferenca_total",
        "label": "Cobrança Excedente no Total",
        "pref": "R$ "
      },
      {
        "id": "valor_parcela_justa",
        "label": "Parcela Sugerida (Sem Excesso)",
        "pref": "R$ "
      },
      {
        "id": "total_pago_real",
        "label": "Custo Efetivo Total do Contrato",
        "pref": "R$ "
      },
      {
        "id": "total_pago_justo",
        "label": "Custo Total Ajustado pela Média",
        "pref": "R$ "
      }
    ],
    "faq": [
      {
        "q": "O que caracteriza juros abusivos segundo a Justiça?",
        "a": "O Superior Tribunal de Justiça (STJ) entende que uma taxa é considerada abusiva quando ultrapassa substancialmente a taxa média de juros praticada pelo mercado para a mesma modalidade de operação na data do contrato, sem justificativa plausível de risco de crédito pelo banco."
      },
      {
        "q": "Posso parar de pagar a parcela ao entrar com ação?",
        "a": "Nunca pare de pagar as parcelas sem uma autorização judicial (liminar). O não pagamento causará a negativação do seu nome nos órgãos de proteção ao crédito e risco de busca e apreensão do bem financiado."
      }
    ]
  },
  {
    "id": "imposto-criptomoedas-gcap",
    "name": "Imposto sobre Criptomoedas (GCAP)",
    "description": "Calcule o ganho de capital e o imposto de renda devido em alienações mensais de criptoativos, verificando a faixa de isenção.",
    "category": "juridico",
    "icon": "Coins",
    "tags": ["criptomoedas", "cripto", "bitcoin", "imposto de renda", "gcap", "isenção", "ganho de capital"],
    "type": "juridico_cripto_imposto",
    "inputs": [
      {
        "id": "valor_vendas_mes",
        "label": "Total de Vendas de Cripto no Mês (R$)",
        "def": 40000,
        "type": "number"
      },
      {
        "id": "custo_aquisicao",
        "label": "Custo de Aquisição Médio (R$)",
        "def": 25000,
        "type": "number"
      },
      {
        "id": "outros_custos",
        "label": "Taxas Adicionais (Gás, Corretagem) (R$)",
        "def": 200,
        "type": "number"
      }
    ],
    "outputs": [
      {
        "id": "imposto_devido",
        "label": "Imposto de Renda Devido",
        "pref": "R$ ",
        "isPrimary": true
      },
      {
        "id": "isento_status",
        "label": "Enquadramento Legal (Isenção)"
      },
      {
        "id": "lucro_liquido",
        "label": "Lucro Líquido Apurado",
        "pref": "R$ "
      },
      {
        "id": "aliquota_ir",
        "label": "Alíquota Aplicável",
        "suff": "%"
      }
    ],
    "faq": [
      {
        "q": "Qual é a faixa de isenção mensal para criptoativos?",
        "a": "Pessoas físicas que realizem alienações (vendas, permutas) de criptoativos cujo valor total no mês seja igual ou inferior a R$ 35.000,00 estão isentas de imposto de renda sobre o ganho de capital auferido."
      },
      {
        "q": "O que acontece em caso de permuta entre duas criptos?",
        "a": "A Receita Federal equipara a permuta de duas criptomoedas (ex: trocar Bitcoin por Ethereum) a uma venda seguida de compra, devendo ser computado o ganho de capital caso as operações totais excedam o limite mensal de R$ 35 mil."
      }
    ]
  },
  {
    "id": "idade-caes",
    "name": "Idade Humana de Cão",
    "description": "Estime a idade equivalente do seu cão em anos humanos com base no seu porte físico.",
    "category": "pets",
    "icon": "Dog",
    "tags": ["cão", "cachorro", "idade", "idade humana", "porte", "pet"],
    "type": "pets_idade_cao",
    "inputs": [
      {
        "id": "porte",
        "label": "Porte do Cão",
        "def": "medio",
        "type": "select",
        "op": [
          { "v": "pequeno", "l": "Pequeno (Até 10kg)" },
          { "v": "medio", "l": "Médio (11kg a 25kg)" },
          { "v": "grande", "l": "Grande (26kg a 45kg)" },
          { "v": "gigante", "l": "Gigante (Mais de 45kg)" }
        ]
      },
      {
        "id": "idade_anos",
        "label": "Idade Real do Cão (Anos)",
        "def": 3,
        "type": "number",
        "min": 0,
        "max": 25
      }
    ],
    "outputs": [
      {
        "id": "idade_humana",
        "label": "Idade Equivalente Humana",
        "suff": " anos",
        "isPrimary": true
      }
    ],
    "faq": [
      {
        "q": "A regra de 1 ano de cão equivale a 7 anos humanos é real?",
        "a": "Não. Essa é uma estimativa muito simplificada. Cães envelhecem muito rápido nos dois primeiros anos de vida (atingindo a maturidade de um jovem de 15 a 24 anos) e depois o envelhecimento desacelera, dependendo diretamente do porte físico."
      },
      {
        "q": "Por que o porte do cão ajuda no cálculo?",
        "a": "Cães de porte grande e gigante têm uma expectativa de vida menor e envelhecem biologicamente mais rápido na fase adulta do que cães de pequeno porte."
      }
    ]
  },
  {
    "id": "idade-gatos",
    "name": "Idade Humana de Gato",
    "description": "Estime a idade equivalente do seu gato em anos humanos.",
    "category": "pets",
    "icon": "Cat",
    "tags": ["gato", "idade", "idade humana", "pet"],
    "type": "pets_idade_gato",
    "inputs": [
      {
        "id": "idade_anos",
        "label": "Idade Real do Gato (Anos)",
        "def": 3,
        "type": "number",
        "min": 0,
        "max": 30
      }
    ],
    "outputs": [
      {
        "id": "idade_humana",
        "label": "Idade Equivalente Humana",
        "suff": " anos",
        "isPrimary": true
      }
    ],
    "faq": [
      {
        "q": "Como é feito o cálculo da idade do gato?",
        "a": "O primeiro ano do gato equivale a cerca de 15 anos humanos. O segundo ano equivale a cerca de 9 anos humanos adicionais (totalizando 24 anos). A partir daí, cada ano do gato equivale a 4 anos humanos."
      },
      {
        "q": "Qual a expectativa de vida média de um gato?",
        "a": "Gatos que vivem sob cuidados domésticos internos costumam viver de 12 a 15 anos, mas muitos chegam facilmente aos 20 anos ou mais devido a cuidados veterinários adequados."
      }
    ]
  },
  {
    "id": "racao-caes",
    "name": "Porção Diária de Ração",
    "description": "Calcule a porção diária ideal de ração seca recomendada para o seu cão com base no peso e nível de atividade.",
    "category": "pets",
    "icon": "Utensils",
    "tags": ["ração", "ração cachorro", "alimentação cão", "quantidade de ração", "pet"],
    "type": "pets_racao_cao",
    "inputs": [
      {
        "id": "peso",
        "label": "Peso do Cão (kg)",
        "def": 10,
        "type": "number",
        "min": 0.5,
        "max": 90
      },
      {
        "id": "nivel_atividade",
        "label": "Nível de Atividade Física",
        "def": "moderado",
        "type": "select",
        "op": [
          { "v": "baixo", "l": "Baixo (Sedentário / Apenas Passeios Curtos)" },
          { "v": "moderado", "l": "Moderado (Passeios Diários de 30-60 min)" },
          { "v": "ativo", "l": "Ativo (Cão de Trabalho ou Esporte / Passeios Longos)" }
        ]
      },
      {
        "id": "estagio_vida",
        "label": "Estágio de Vida / Condição",
        "def": "adulto",
        "type": "select",
        "op": [
          { "v": "filhote", "l": "Filhote (Em Crescimento)" },
          { "v": "adulto", "l": "Adulto Inteiro" },
          { "v": "senior_castrado", "l": "Sênior ou Castrado" }
        ]
      }
    ],
    "outputs": [
      {
        "id": "quantidade_diaria",
        "label": "Porção Recomendada por Dia",
        "suff": " gramas/dia",
        "isPrimary": true
      },
      {
        "id": "calorias_diarias",
        "label": "Necessidade Calórica Estimada",
        "suff": " kcal/dia"
      }
    ],
    "faq": [
      {
        "q": "Como funciona o cálculo calórico para cães?",
        "a": "Primeiro calcula-se a Necessidade Energética Basal (RER) através da fórmula: 70 * (Peso em kg^0.75). Esse valor é multiplicado por um fator que depende da idade, castração e nível de atividade física do animal."
      },
      {
        "q": "Quantas vezes ao dia devo dividir a porção?",
        "a": "Para cães adultos, recomenda-se dividir a quantidade total em 2 porções diárias (manhã e noite). Filhotes precisam comer de 3 a 4 vezes ao dia."
      }
    ]
  },
  {
    "id": "agua-pets",
    "name": "Água Recomendada para Pets",
    "description": "Estime a quantidade diária recomendada de água para o seu cão ou gato manter-se hidratado.",
    "category": "pets",
    "icon": "Droplet",
    "tags": ["água pet", "hidratação cão", "água gato", "água cachorro", "pet"],
    "type": "pets_agua",
    "inputs": [
      {
        "id": "especie",
        "label": "Espécie do Pet",
        "def": "cao",
        "type": "select",
        "op": [
          { "v": "cao", "l": "Cão (Cachorro)" },
          { "v": "gato", "l": "Gato" }
        ]
      },
      {
        "id": "peso",
        "label": "Peso do Pet (kg)",
        "def": 8,
        "type": "number",
        "min": 0.5,
        "max": 90
      },
      {
        "id": "clima",
        "label": "Clima da Região",
        "def": "ameno",
        "type": "select",
        "op": [
          { "v": "ameno", "l": "Ameno / Frio" },
          { "v": "quente", "l": "Quente / Verão" }
        ]
      }
    ],
    "outputs": [
      {
        "id": "agua_diaria",
        "label": "Ingestão Recomendada",
        "suff": " ml/dia",
        "isPrimary": true
      }
    ],
    "faq": [
      {
        "q": "Como estimular gatos a beber mais água?",
        "a": "Gatos preferem água corrente. O uso de fontes elétricas de água, espalhar múltiplos potes pela casa e oferecer alimento úmido (sachês) são excelentes estratégias."
      },
      {
        "q": "Quais são os sinais de desidratação no pet?",
        "a": "Falta de elasticidade na pele (quando puxada ela não volta rápido), gengivas secas ou pegajosas, letargia e olhos fundos são sinais de alerta para desidratação."
      }
    ]
  },
  {
    "id": "agua-humana",
    "name": "Ingestão de Água Diária",
    "description": "Calcule sua meta diária de hidratação ideal (em litros e copos) com base no seu peso, nível de atividade e clima.",
    "category": "saude",
    "icon": "Droplet",
    "tags": ["água", "água por dia", "hidratação humana", "copos de água", "peso", "saúde"],
    "type": "saude_agua_humana",
    "inputs": [
      {
        "id": "peso",
        "label": "Seu Peso (kg)",
        "def": 70,
        "type": "number",
        "min": 20,
        "max": 250
      },
      {
        "id": "atividade",
        "label": "Atividade Física Diária",
        "def": "sedentario",
        "type": "select",
        "op": [
          { "v": "sedentario", "l": "Sedentário (Sem exercício)" },
          { "v": "moderado", "l": "Moderado (Até 60 min de exercício)" },
          { "v": "intenso", "l": "Intenso (Mais de 60 min de exercício pesado)" }
        ]
      },
      {
        "id": "clima",
        "label": "Clima Predominante",
        "def": "ameno",
        "type": "select",
        "op": [
          { "v": "frio", "l": "Frio" },
          { "v": "ameno", "l": "Ameno" },
          { "v": "quente", "l": "Quente" }
        ]
      }
    ],
    "outputs": [
      {
        "id": "agua_diaria",
        "label": "Consumo de Água Recomendado",
        "suff": " Litros/dia",
        "isPrimary": true
      },
      {
        "id": "copos_agua",
        "label": "Equivalente em Copos (250ml)",
        "suff": " copos/dia"
      }
    ],
    "faq": [
      {
        "q": "Qual a base matemática para o cálculo de água?",
        "a": "A base recomendada por especialistas é de 35ml de água para cada quilograma de peso corporal. Esse valor é ajustado para cima com a prática de exercícios (perda pelo suor) e temperaturas elevadas."
      },
      {
        "q": "Beber água demais faz mal?",
        "a": "Sim, em casos extremos. A hiper-hidratação pode causar hiponatremia (baixa concentração de sódio no sangue), mas para a maioria das pessoas o risco comum é a desidratação."
      }
    ]
  },
  {
    "id": "exercicio-calorias",
    "name": "Calorias por Exercício",
    "description": "Estime o gasto calórico (kcal) gerado por diferentes modalidades de atividades físicas com base no seu peso e tempo.",
    "category": "saude",
    "icon": "Zap",
    "tags": ["calorias", "calorias exercício", "queimar calorias", "peso", "aeróbico", "academia"],
    "type": "saude_exercicio_calorias",
    "inputs": [
      {
        "id": "peso",
        "label": "Seu Peso (kg)",
        "def": 70,
        "type": "number",
        "min": 30,
        "max": 200
      },
      {
        "id": "atividade",
        "label": "Modalidade de Exercício",
        "def": "caminhada",
        "type": "select",
        "op": [
          { "v": "corrida", "l": "Corrida (Corrida moderada a ~9 km/h)" },
          { "v": "ciclismo", "l": "Ciclismo (Intensidade moderada)" },
          { "v": "natacao", "l": "Natação (Estilo livre moderado)" },
          { "v": "musculacao", "l": "Musculação (Treinamento com pesos)" },
          { "v": "caminhada", "l": "Caminhada (Ritmo moderado a ~5 km/h)" }
        ]
      },
      {
        "id": "tempo",
        "label": "Duração do Exercício (Minutos)",
        "def": 45,
        "type": "number",
        "min": 1,
        "max": 300
      }
    ],
    "outputs": [
      {
        "id": "calorias_queimadas",
        "label": "Total de Calorias Queimadas",
        "suff": " kcal",
        "isPrimary": true
      }
    ],
    "faq": [
      {
        "q": "O que é o MET?",
        "a": "MET significa Equivalente Metabólico de Tarefa. É uma unidade que expressa a intensidade de uma atividade em relação ao repouso. Uma atividade com MET de 10 gasta 10 vezes mais energia do que ficar sentado em repouso."
      },
      {
        "q": "O gasto calórico calculado é 100% preciso?",
        "a": "Não. É uma estimativa científica confiável. O gasto real depende de fatores como composição corporal (massa gorda vs magra), idade, eficiência mecânica no exercício e temperatura ambiente."
      }
    ]
  },
  {
    "id": "ferias-pj-equivalente",
    "name": "Férias PJ vs CLT Equivalente",
    "description": "Calcule o valor faturamento mensal e hora PJ necessários para cobrir os benefícios anuais CLT com direito a um período de descanso faturado.",
    "category": "financas",
    "icon": "Briefcase",
    "tags": ["pj clt", "férias pj", "hora pj", "valor hora", "comparativo", "benefícios"],
    "type": "financas_ferias_pj",
    "inputs": [
      {
        "id": "salario_clt",
        "label": "Salário Bruto Mensal CLT",
        "def": 5000,
        "type": "number",
        "pref": "R$"
      },
      {
        "id": "beneficios",
        "label": "Benefícios Mensais CLT (VR, VA, Saúde, etc.)",
        "def": 800,
        "type": "number",
        "pref": "R$"
      },
      {
        "id": "horas_mes",
        "label": "Horas Contratadas Mensais",
        "def": 168,
        "type": "number",
        "min": 40,
        "max": 240
      }
    ],
    "outputs": [
      {
        "id": "valor_hora_pj_minimo",
        "label": "Valor Hora PJ Mínimo Equivalente",
        "pref": "R$/hora",
        "isPrimary": true
      },
      {
        "id": "faturamento_pj_equivalente",
        "label": "Faturamento Mensal PJ Equivalente",
        "pref": "R$/mês"
      },
      {
        "id": "custo_anual_clt",
        "label": "Custo Anual Total CLT Equivalente",
        "pref": "R$"
      }
    ],
    "faq": [
      {
        "q": "Por que o cálculo considera 11 meses de trabalho para o PJ?",
        "a": "Diferente da CLT, profissionais PJ geralmente não têm férias remuneradas em lei. Para poder descansar 30 dias no ano mantendo a renda equivalente, o PJ precisa acumular o valor necessário durante os outros 11 meses faturados."
      },
      {
        "q": "Quais encargos PJ estão previstos neste cálculo?",
        "a": "O cálculo inclui a dedução média do Simples Nacional no Anexo III (6% de imposto sobre a nota fiscal) e uma provisão para contabilidade (R$ 150 mensais), além de uma taxa de segurança extra de 5% sobre as verbas CLT."
      }
    ]
  },
  {
    "id": "porcentagem-simples",
  "name": "Porcentagem Rápida",
  "description": "Realize de forma direta cálculos de acréscimos ou descontos relativos de parcelas numéricas básicas.",
  "category": "matematica",
  "icon": "Calculator",
  "tags": [
    "matemática",
    "porcentagem",
    "desconto",
    "acréscimo"
  ],
  "type": "mat_porcentagem",
  "inputs": [
    {
      "id": "valor",
      "label": "Valor Base",
      "def": 100,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "percentual",
      "label": "Percentual",
      "def": 15,
      "type": "number",
      "suff": "%"
    },
    {
      "id": "operacao",
      "label": "Tipo de Operação",
      "def": "calcular",
      "type": "select",
      "op": [
        {
          "v": "calcular",
          "l": "Calcular Porcentagem (Apenas %)"
        },
        {
          "v": "adicionar",
          "l": "Somar Porcentagem (+)"
        },
        {
          "v": "descontar",
          "l": "Subtrair Porcentagem (-)"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "resultado",
      "label": "Resultado Final",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "diferenca",
      "label": "Valor Diferença/Mudar",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "Como funciona esta calculadora?",
      "a": "Ela realiza três tipos de cálculos. Você pode extrair o valor da porcentagem de um número, ou aplicar acréscimo (+) ou desconto (-) direto sobre um valor informado."
    }
  ]
},
{
  "id": "media-ponderada",
  "name": "Média Ponderada Escolar",
  "description": "Calcule notas parciais estruturadas no peso diferenciado distribuído de cada trabalho ou prova avaliatória.",
  "category": "matematica",
  "icon": "Calculator",
  "tags": [
    "escola",
    "média",
    "pesos",
    "nota",
    "vestibular"
  ],
  "type": "mat_media_ponderada",
  "inputs": [
    {
      "id": "n1",
      "label": "Nota da Prova 1",
      "def": 7,
      "type": "number"
    },
    {
      "id": "p1",
      "label": "Peso da Prova 1",
      "def": 2,
      "type": "number"
    },
    {
      "id": "n2",
      "label": "Nota da Prova 2",
      "def": 8,
      "type": "number"
    },
    {
      "id": "p2",
      "label": "Peso da Prova 2",
      "def": 3,
      "type": "number"
    },
    {
      "id": "n3",
      "label": "Nota do Trabalho",
      "def": 6,
      "type": "number"
    },
    {
      "id": "p3",
      "label": "Peso do Trabalho",
      "def": 5,
      "type": "number"
    }
  ],
  "outputs": [
    {
      "id": "media",
      "label": "Média Ponderada Final",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "O que é Média Ponderada?",
      "a": "É a média onde cada nota tem um peso específico. A nota é multiplicada pelo seu peso, os resultados são somados e depois divididos pela soma dos pesos."
    }
  ]
},
{
  "id": "pitagoras-triangulo",
  "name": "Teorema de Pitágoras",
  "description": "Encontre o comprimento exato da hipotenusa ou de catetos em triângulos retângulos.",
  "category": "matematica",
  "icon": "Calculator",
  "tags": [
    "triângulo",
    "geometria",
    "pitágoras",
    "equação"
  ],
  "type": "mat_pitagoras",
  "inputs": [
    {
      "id": "lado_a",
      "label": "Cateto A",
      "def": 3,
      "type": "number"
    },
    {
      "id": "lado_b",
      "label": "Cateto B",
      "def": 4,
      "type": "number"
    },
    {
      "id": "lado_c",
      "label": "Hipotenusa C",
      "def": 5,
      "type": "number"
    },
    {
      "id": "calcular",
      "label": "O que calcular?",
      "def": "hipotenusa",
      "type": "select",
      "op": [
        {
          "v": "hipotenusa",
          "l": "Calcular Hipotenusa C"
        },
        {
          "v": "cateto_a",
          "l": "Calcular Cateto A"
        },
        {
          "v": "cateto_b",
          "l": "Calcular Cateto B"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "resultado",
      "label": "Lado Calculado",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "Qual a fórmula do Teorema de Pitágoras?",
      "a": "A fórmula clássica é a² + b² = c², onde c é a hipotenusa e a e b são os catetos. A soma dos quadrados dos catetos é igual ao quadrado da hipotenusa."
    }
  ]
},
{
  "id": "area-circulo-retangulo",
  "name": "Área & Perímetro de Formas",
  "description": "Obtenha a superfície espacial e o contorno de figuras planas geométricas usuais.",
  "category": "matematica",
  "icon": "Calculator",
  "tags": [
    "área",
    "perímetro",
    "círculo",
    "espaço",
    "terreno"
  ],
  "type": "mat_area_formas",
  "inputs": [
    {
      "id": "forma",
      "label": "Tipo de Figura Geométrica",
      "def": "retangulo",
      "type": "select",
      "op": [
        {
          "v": "retangulo",
          "l": "Retângulo / Quadrado"
        },
        {
          "v": "circulo",
          "l": "Círculo"
        },
        {
          "v": "triangulo",
          "l": "Triângulo Retângulo"
        }
      ]
    },
    {
      "id": "base_raio",
      "label": "Largura ou Raio (para Círculo)",
      "def": 10,
      "type": "number"
    },
    {
      "id": "altura",
      "label": "Altura (ignorar para Círculo)",
      "def": 5,
      "type": "number"
    }
  ],
  "outputs": [
    {
      "id": "area",
      "label": "Área Total",
      "isPrimary": true
    },
    {
      "id": "perimetro",
      "label": "Perímetro / Contorno"
    }
  ],
  "faq": [
    {
      "q": "Como calcular área e perímetro?",
      "a": "Para Retângulos: Área = base * altura, Perímetro = 2 * (base + altura). Para Círculos: Área = pi * raio², Perímetro = 2 * pi * raio."
    }
  ]
},
{
  "id": "potencia-raiz",
  "name": "Potências e Raiz Quadrada",
  "description": "Resolva radiciações e potenciações simples exponenciais aritméticas com precisão decimal.",
  "category": "matematica",
  "icon": "Calculator",
  "tags": [
    "matemática",
    "raiz",
    "quadrado",
    "exponencial"
  ],
  "type": "mat_potencia_raiz",
  "inputs": [
    {
      "id": "base",
      "label": "Número Base",
      "def": 9,
      "type": "number"
    },
    {
      "id": "expoente",
      "label": "Expoente (para Potência)",
      "def": 2,
      "type": "number"
    }
  ],
  "outputs": [
    {
      "id": "potencia",
      "label": "Resultado da Potenciação",
      "isPrimary": true
    },
    {
      "id": "raiz_quadrada",
      "label": "Raiz Quadrada do Número Base"
    }
  ],
  "faq": [
    {
      "q": "O que é a raiz quadrada?",
      "a": "A raiz quadrada de um número x é o número que, multiplicado por si mesmo, resulta em x. A potenciação é a multiplicação de um número por si mesmo várias vezes."
    }
  ]
},
{
  "id": "fatorial-num",
  "name": "Cálculo de Fatorial",
  "description": "Calcule o produto multiplicativo do fatorial de qualquer inteiro positivo sequencial.",
  "category": "matematica",
  "icon": "Calculator",
  "tags": [
    "fatorial",
    "fórmula",
    "números",
    "análise"
  ],
  "type": "mat_fatorial",
  "inputs": [
    {
      "id": "numero",
      "label": "Número Inteiro N",
      "def": 5,
      "type": "number",
      "min": 0,
      "max": 170
    }
  ],
  "outputs": [
    {
      "id": "resultado",
      "label": "Fatorial (N!)",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "Como funciona o cálculo do fatorial?",
      "a": "Representado por N!, é a multiplicação de todos os números inteiros de 1 até N. Exemplo: 5! = 5 * 4 * 3 * 2 * 1 = 120."
    }
  ]
},
{
  "id": "regra-de-sociedade",
  "name": "Regra de Sociedade Comercial",
  "description": "Divida lucros corporativos proporcionalmente de acordo com a quota de aporte financeiro dos sócios.",
  "category": "matematica",
  "icon": "Calculator",
  "tags": [
    "sociedade",
    "divisão",
    "empresa",
    "sócios"
  ],
  "type": "mat_sociedade",
  "inputs": [
    {
      "id": "investimento_total",
      "label": "Capital Social / Investimento Total",
      "def": 100000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "lucro_total",
      "label": "Lucro Líquido a Distribuir",
      "def": 25000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "investimento_socio",
      "label": "Capital Investido pelo Sócio",
      "def": 30000,
      "type": "number",
      "pref": "R$"
    }
  ],
  "outputs": [
    {
      "id": "lucro_socio",
      "label": "Lucro Devido ao Sócio",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "participacao_socio",
      "label": "Participação do Sócio",
      "suff": "%"
    }
  ],
  "faq": [
    {
      "q": "Como funciona a Regra de Sociedade?",
      "a": "Ela divide os lucros de forma diretamente proporcional ao valor investido por cada sócio. Se um sócio investiu 30% do capital, ele receberá 30% do lucro total distribuído."
    }
  ]
},
{
  "id": "equacao-segundo-grau",
  "name": "Equação do 2º Grau (Bhaskara)",
  "description": "Simulador de raízes da equação clássica de segundo grau identificando discriminante Delta.",
  "category": "matematica",
  "icon": "Calculator",
  "tags": [
    "bhaskara",
    "raízes",
    "equação",
    "escola",
    "álgebra"
  ],
  "type": "mat_bhaskara",
  "inputs": [
    {
      "id": "a",
      "label": "Coeficiente A",
      "def": 1,
      "type": "number"
    },
    {
      "id": "b",
      "label": "Coeficiente B",
      "def": -5,
      "type": "number"
    },
    {
      "id": "c",
      "label": "Coeficiente C",
      "def": 6,
      "type": "number"
    }
  ],
  "outputs": [
    {
      "id": "x1",
      "label": "Raiz X1",
      "isPrimary": true
    },
    {
      "id": "x2",
      "label": "Raiz X2"
    },
    {
      "id": "delta",
      "label": "Discriminante Delta"
    },
    {
      "id": "tipo",
      "label": "Tipo de Raízes"
    }
  ],
  "faq": [
    {
      "q": "Como é calculada a Fórmula de Bhaskara?",
      "a": "Primeiro calcula-se o Delta = B² - 4AC. Se Delta for maior ou igual a zero, as raízes são (-B ± sqrt(Delta)) / 2A."
    }
  ]
},
{
  "id": "financiamento-price-sac",
  "name": "Financiamento Price vs SAC",
  "description": "Compare as tabelas amortizatórias de parcelas de moradias cruzando taxas de avaliação.",
  "category": "imobiliario",
  "icon": "Home",
  "tags": [
    "imóveis",
    "financiamento",
    "sac",
    "price",
    "banco"
  ],
  "type": "imob_price_sac",
  "inputs": [
    {
      "id": "valor_financiado",
      "label": "Valor Financiado",
      "def": 200000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "taxa_anual",
      "label": "Taxa de Juros Anual",
      "def": 10,
      "type": "number",
      "suff": "%"
    },
    {
      "id": "meses",
      "label": "Prazo do Financiamento",
      "def": 120,
      "type": "number",
      "suff": "meses"
    }
  ],
  "outputs": [
    {
      "id": "total_price",
      "label": "Total Pago (Tabela Price)",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "total_sac",
      "label": "Total Pago (Tabela SAC)",
      "pref": "R$"
    },
    {
      "id": "juros_price",
      "label": "Juros Totais (Price)",
      "pref": "R$"
    },
    {
      "id": "juros_sac",
      "label": "Juros Totais (SAC)",
      "pref": "R$"
    },
    {
      "id": "primeira_parcela_sac",
      "label": "Primeira Parcela (SAC)",
      "pref": "R$"
    },
    {
      "id": "ultima_parcela_sac",
      "label": "Última Parcela (SAC)",
      "pref": "R$"
    },
    {
      "id": "parcela_price",
      "label": "Parcela Fixa (Price)",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "Qual a diferença entre SAC e Price?",
      "a": "Na tabela SAC, a amortização é constante e as parcelas caem ao longo do tempo. Na tabela Price, as parcelas são fixas do início ao fim, mas paga-se um total de juros um pouco maior."
    }
  ]
},
{
  "id": "reajuste-aluguel",
  "name": "Reajuste Anual de Contrato",
  "description": "Estime o novo boleto de moradia updated com base nos índices inflacionários comerciais (IGP-M, IPCA).",
  "category": "imobiliario",
  "icon": "Home",
  "tags": [
    "aluguel",
    "contrato",
    "reajuste",
    "igp-m"
  ],
  "type": "imob_reajuste",
  "inputs": [
    {
      "id": "aluguel_atual",
      "label": "Valor do Aluguel Atual",
      "def": 1500,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "taxa_reajuste",
      "label": "Índice de Reajuste Acumulado",
      "def": 4.5,
      "type": "number",
      "suff": "%"
    }
  ],
  "outputs": [
    {
      "id": "novo_aluguel",
      "label": "Novo Valor do Aluguel",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "valor_aumento",
      "label": "Valor do Aumento Mensal",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "Quais índices são mais comuns?",
      "a": "O IGP-M (da FGV) é o mais tradicional para contratos imobiliários, embora o IPCA (inflação oficial do IBGE) tenha sido cada vez mais adotado nos últimos anos."
    }
  ]
},
{
  "id": "custos-itbi",
  "name": "Custos de ITBI e Registro",
  "description": "Prepare o provimento de despesas de impostos de transferência de escritura e registro de imóveis.",
  "category": "imobiliario",
  "icon": "Home",
  "tags": [
    "itbi",
    "cartório",
    "impostos",
    "imóvel",
    "documentação"
  ],
  "type": "imob_itbi",
  "inputs": [
    {
      "id": "valor_imovel",
      "label": "Valor do Imóvel",
      "def": 300000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "aliquota_itbi",
      "label": "Alíquota ITBI do Município",
      "def": 2,
      "type": "number",
      "suff": "%"
    },
    {
      "id": "cartorio_taxa",
      "label": "Emolumentos de Registro / Escritura",
      "def": 1.5,
      "type": "number",
      "suff": "%"
    }
  ],
  "outputs": [
    {
      "id": "total_documentacao",
      "label": "Custo Total de Documentação",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "itbi_pago",
      "label": "Valor de ITBI Devido",
      "pref": "R$"
    },
    {
      "id": "cartorio_pago",
      "label": "Valor de Registro e Custas",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "O que é o ITBI?",
      "a": "É o Imposto de Transmissão de Bens Imóveis, cobrado pela prefeitura do município onde fica o imóvel. Deve ser pago para oficializar a compra e venda."
    }
  ]
},
{
  "id": "cap-rate",
  "name": "Retorno de Ativos (Cap Rate)",
  "description": "Calcule a rentabilidade anual passiva sobre aluguel de imóveis em relação ao valor de compra.",
  "category": "imobiliario",
  "icon": "Home",
  "tags": [
    "cap rate",
    "investidor",
    "aluguel",
    "retorno"
  ],
  "type": "imob_cap_rate",
  "inputs": [
    {
      "id": "valor_imovel",
      "label": "Valor de Compra / Avaliação",
      "def": 400000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "aluguel_mensal",
      "label": "Valor do Aluguel Mensal Bruto",
      "def": 2000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "despesas_mensais",
      "label": "Custos Mensais (Ex: Taxa Imobiliária/IPTU)",
      "def": 300,
      "type": "number",
      "pref": "R$"
    }
  ],
  "outputs": [
    {
      "id": "cap_rate",
      "label": "Cap Rate Anual Obtido",
      "suff": "%",
      "isPrimary": true
    },
    {
      "id": "rendimento_anual",
      "label": "Receita Líquida Anual",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "O que é o Cap Rate?",
      "a": "Significa Capitalization Rate. É uma métrica essencial para investidores imobiliários que indica o retorno percentual anual gerado por um imóvel com base no seu valor e receita líquida de aluguel."
    }
  ]
},
{
  "id": "amortizacao-extra",
  "name": "Simulador de Amortização Extra",
  "description": "Veja as reduções de tempo de juros ao injetar depósitos adicionais nas prestações pendentes.",
  "category": "imobiliario",
  "icon": "Home",
  "tags": [
    "amortizar",
    "banco",
    "financiamento",
    "reparação"
  ],
  "type": "imob_amortizacao",
  "inputs": [
    {
      "id": "saldo_devedor",
      "label": "Saldo Devedor Atual",
      "def": 150000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "taxa_juros",
      "label": "Taxa de Juros Anual do Contrato",
      "def": 9.5,
      "type": "number",
      "suff": "%"
    },
    {
      "id": "meses_restantes",
      "label": "Prazo Restante",
      "def": 180,
      "type": "number",
      "suff": "meses"
    },
    {
      "id": "valor_amortizar",
      "label": "Valor do Aporte Extra",
      "def": 10000,
      "type": "number",
      "pref": "R$"
    }
  ],
  "outputs": [
    {
      "id": "economia_juros",
      "label": "Juros Totais Economizados",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "novas_parcelas",
      "label": "Novo Prazo Restante Estimado",
      "suff": " meses"
    }
  ],
  "faq": [
    {
      "q": "Como a amortização reduz os juros?",
      "a": "A amortização extra reduz o seu saldo devedor principal diretamente. Como os juros mensais são calculados sobre o saldo devedor, o prazo total ou o valor das parcelas cai drasticamente."
    }
  ]
},
{
  "id": "alugar-vs-comprar",
  "name": "Alugar ou Comprar Imóvel",
  "description": "Determine se a locação do imóvel comparado a um financiamento resulta em economia financeira.",
  "category": "imobiliario",
  "icon": "Home",
  "tags": [
    "investimento",
    "imóvel",
    "aluguel",
    "patrimônio"
  ],
  "type": "imob_alugar_comprar",
  "inputs": [
    {
      "id": "valor_imovel",
      "label": "Valor de Compra do Imóvel",
      "def": 300000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "aluguel",
      "label": "Aluguel Mensal Equivalente",
      "def": 1200,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "entrada",
      "label": "Valor da Entrada / Sinal",
      "def": 60000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "taxa_financiamento",
      "label": "Taxa Anual do Financiamento",
      "def": 10,
      "type": "number",
      "suff": "%"
    },
    {
      "id": "rendimento_inv",
      "label": "Rendimento de Investimentos (a.a.)",
      "def": 8,
      "type": "number",
      "suff": "%"
    }
  ],
  "outputs": [
    {
      "id": "vantagem",
      "label": "Decisão Financeira Recomendada",
      "isPrimary": true
    },
    {
      "id": "patrimonio_comprar",
      "label": "Patrimônio Final (Comprar)",
      "pref": "R$"
    },
    {
      "id": "patrimonio_alugar",
      "label": "Patrimônio Final (Alugar e Investir)",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "O que avalia esta simulação?",
      "a": "Ela compara o acúmulo de patrimônio a 10 anos. Quem compra acumula o valor do próprio imóvel. Quem aluga investe o dinheiro da entrada e a economia mensal e acumula ativos financeiros."
    }
  ]
},
{
  "id": "custo-efetivo-total",
  "name": "Custo Efetivo Total (CET)",
  "description": "Identifique a taxa anual integral e juros implícitos reais praticados no mercado financeiro.",
  "category": "imobiliario",
  "icon": "Home",
  "tags": [
    "cet",
    "juros",
    "banco",
    "empréstimo"
  ],
  "type": "imob_cet",
  "inputs": [
    {
      "id": "valor_emprestimo",
      "label": "Valor Bruto do Empréstimo",
      "def": 10000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "taxa_juros",
      "label": "Taxa de Juros Nominal Mensal",
      "def": 2.5,
      "type": "number",
      "suff": "%"
    },
    {
      "id": "seguros_taxas",
      "label": "Tarifas e Seguros na Contratação",
      "def": 500,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "parcelas",
      "label": "Quantidade de Parcelas",
      "def": 12,
      "type": "number",
      "suff": "meses"
    }
  ],
  "outputs": [
    {
      "id": "cet_mensal",
      "label": "CET Mensal Efetivo",
      "suff": "%",
      "isPrimary": true
    },
    {
      "id": "cet_anual",
      "label": "CET Anual Efetivo",
      "suff": "%"
    },
    {
      "id": "valor_parcela",
      "label": "Valor da Parcela Mensal",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "O que compõe o CET?",
      "a": "O Custo Efetivo Total inclui não apenas os juros nominais cobrados, mas também impostos (IOF), tarifas bancárias de cadastro (TAC) e prêmios de seguros obrigatórios contratados."
    }
  ]
},
{
  "id": "valor-metro-quadrado",
  "name": "Comparador de Valor de m²",
  "description": "Analise avaliações de imóveis concorrentes estimando o custo-benefício de área privativa construída.",
  "category": "imobiliario",
  "icon": "Home",
  "tags": [
    "m²",
    "tamanho",
    "preço",
    "avaliação"
  ],
  "type": "imob_m2",
  "inputs": [
    {
      "id": "preco",
      "label": "Preço de Venda do Imóvel",
      "def": 350000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "area",
      "label": "Área Útil Privativa",
      "def": 70,
      "type": "number",
      "suff": "m²"
    }
  ],
  "outputs": [
    {
      "id": "valor_m2",
      "label": "Preço Médio por m²",
      "pref": "R$/m²",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "Por que avaliar o metro quadrado?",
      "a": "Permite comparar o valor real de diferentes imóveis de tamanhos variados na mesma região para ver qual oferece melhor custo-benefício físico."
    }
  ]
},
{
  "id": "rateio-condominio",
  "name": "Rateio de Reforma Predial",
  "description": "Divida custos de conservação comuns de prédios baseados em áreas de fração ideal.",
  "category": "imobiliario",
  "icon": "Home",
  "tags": [
    "condomínio",
    "síndico",
    "rateio",
    "obra"
  ],
  "type": "imob_rateio",
  "inputs": [
    {
      "id": "despesa_total",
      "label": "Valor Total do Rateio/Obra",
      "def": 5000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "fracao_ideal",
      "label": "Fração Ideal da sua Unidade",
      "def": 5,
      "type": "number",
      "suff": "%"
    }
  ],
  "outputs": [
    {
      "id": "valor_rateio",
      "label": "Valor a Pagar pela sua Unidade",
      "pref": "R$",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "O que é fração ideal?",
      "a": "É a parte ideal que cada proprietário possui da área total comum do terreno e do condomínio, geralmente atrelada ao tamanho do seu apartamento."
    }
  ]
},
{
  "id": "iptu-proporcional",
  "name": "Rateio IPTU Proporcional",
  "description": "Divida o carnê do IPTU em parcelas proporcionais de meses de posse do imóvel entre comprador e vendedor.",
  "category": "imobiliario",
  "icon": "Home",
  "tags": [
    "iptu",
    "venda",
    "impostos",
    "transação"
  ],
  "type": "imob_iptu",
  "inputs": [
    {
      "id": "iptu_anual",
      "label": "Valor Total do IPTU Anual",
      "def": 1200,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "meses_uso",
      "label": "Meses de Ocupação pelo Vendedor",
      "def": 5,
      "type": "number",
      "suff": "meses"
    }
  ],
  "outputs": [
    {
      "id": "valor_proporcional",
      "label": "Quota-Parte Devida pelo Vendedor",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "valor_comprador",
      "label": "Quota-Parte Devida pelo Comprador",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "Quem deve pagar o IPTU proporcional?",
      "a": "Por praxe jurídica, o vendedor arca com as parcelas proporcionais até o mês em que entregou as chaves/posse, e o comprador arca com o restante do ano."
    }
  ]
},
{
  "id": "alcool-gasolina",
  "name": "Álcool ou Gasolina Praticidade",
  "description": "Encontre o combustível mais econômico com base na regra de 70% de rendimento de motores Flex.",
  "category": "veiculos",
  "icon": "Car",
  "tags": [
    "combustível",
    "carro",
    "álcool",
    "posto",
    "gasolina"
  ],
  "type": "vei_flex",
  "inputs": [
    {
      "id": "preco_alcool",
      "label": "Preço do Álcool (Etanol)",
      "def": 3.89,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "preco_gasolina",
      "label": "Preço da Gasolina",
      "def": 5.59,
      "type": "number",
      "pref": "R$"
    }
  ],
  "outputs": [
    {
      "id": "vantagem",
      "label": "Combustível Vantajoso",
      "isPrimary": true
    },
    {
      "id": "proporcao",
      "label": "Proporção de Preço",
      "suff": "%"
    }
  ],
  "faq": [
    {
      "q": "Como funciona a regra dos 70%?",
      "a": "O motor flex consome mais etanol do que gasolina por quilômetro rodado. Geralmente, se o preço do etanol for inferior a 70% do preço da gasolina, vale a pena abastecer com etanol."
    }
  ]
},
{
  "id": "consumo-combustivel",
  "name": "Consumo de Combustível Viagem",
  "description": "Calcule as médias de consumo de combustível do seu automóvel e ordene custos de combustível estimativos para rotas.",
  "category": "veiculos",
  "icon": "Car",
  "tags": [
    "combustível",
    "viagem",
    "consumo",
    "posto"
  ],
  "type": "vei_consumption",
  "inputs": [
    {
      "id": "distancia",
      "label": "Distância da Viagem",
      "def": 150,
      "type": "number",
      "suff": "km"
    },
    {
      "id": "consumo",
      "label": "Consumo Médio (Km/L)",
      "def": 12,
      "type": "number",
      "suff": "Km/L"
    },
    {
      "id": "preco",
      "label": "Preço do Combustível",
      "def": 5.59,
      "type": "number",
      "pref": "R$"
    }
  ],
  "outputs": [
    {
      "id": "custo_total",
      "label": "Custo Total Estimado",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "litros_necessarios",
      "label": "Combustível Necessário",
      "suff": " Litros"
    }
  ],
  "faq": [
    {
      "q": "Como melhorar a média de consumo do carro?",
      "a": "Mantenha os pneus calibrados de acordo com o manual, evite acelerações bruscas, não carregue peso desnecessário e faça revisões periódicas no motor."
    }
  ]
},
{
  "id": "ipva-estimado",
  "name": "IPVA Estimado de Veículo",
  "description": "Estime a despesa do imposto automotor baseado em alíquotas estaduais sobre a tabela Fipe.",
  "category": "veiculos",
  "icon": "Car",
  "tags": [
    "ipva",
    "carro",
    "moto",
    "impostos"
  ],
  "type": "vei_ipva",
  "inputs": [
    {
      "id": "valor_fipe",
      "label": "Valor de Tabela FIPE do Veículo",
      "def": 50000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "aliquota",
      "label": "Alíquota IPVA do Estado",
      "def": 4,
      "type": "select",
      "op": [
        {
          "v": 4,
          "l": "SP / RJ / MG (4.0%)"
        },
        {
          "v": 3,
          "l": "PR / RS / PE (3.0%)"
        },
        {
          "v": 2,
          "l": "SC / BA / CE (2.0%)"
        },
        {
          "v": 1,
          "l": "AC / ES / Roraima (1.0%)"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "ipva_devido",
      "label": "IPVA Estimado a Pagar",
      "pref": "R$",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "Como funciona o pagamento do IPVA?",
      "a": "O IPVA pode ser pago em cota única com desconto (geralmente de 3% a 10%) ou parcelado em até 3 ou 5 vezes dependendo do estado brasileiro."
    }
  ]
},
{
  "id": "depreciacao-fipe",
  "name": "Curva de Depreciação (Fipe)",
  "description": "Simule o declínio de valor de mercado e desvalorização de marcas de carros de ano a ano.",
  "category": "veiculos",
  "icon": "Car",
  "tags": [
    "fipe",
    "depreciação",
    "carro",
    "venda"
  ],
  "type": "vei_depreciation",
  "inputs": [
    {
      "id": "valor_atual",
      "label": "Valor Atual do Veículo",
      "def": 60000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "anos",
      "label": "Tempo de Uso do Veículo",
      "def": 3,
      "type": "number",
      "suff": "anos"
    },
    {
      "id": "categoria",
      "label": "Categoria do Veículo",
      "def": "popular",
      "type": "select",
      "op": [
        {
          "v": "popular",
          "l": "Popular / Hatch"
        },
        {
          "v": "suv",
          "l": "SUV / Sedan Médio"
        },
        {
          "v": "importado",
          "l": "Importado de Luxo"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "valor_final",
      "label": "Valor Estimado Futuro",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "perda_total",
      "label": "Desvalorização Acumulada",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "O que acelera a desvalorização de um carro?",
      "a": "A alta quilometragem anual, falta de revisões carimbadas no manual, acidentes (sinistros) registrados e modificações estéticas não originais."
    }
  ]
},
{
  "id": "custo-km-rodado",
  "name": "Reembolso por Km Rodado",
  "description": "Estime o custo por quilômetro ideal para reembolso empresarial ponderando pneu, combustível e manutenção.",
  "category": "veiculos",
  "icon": "Car",
  "tags": [
    "reembolso",
    "quilometragem",
    "km",
    "trabalho"
  ],
  "type": "vei_km_reimbursement",
  "inputs": [
    {
      "id": "km_rodado",
      "label": "Quilômetros Rodados",
      "def": 500,
      "type": "number",
      "suff": "km"
    },
    {
      "id": "reembolso_km",
      "label": "Valor de Reembolso por Km",
      "def": 0.85,
      "type": "number",
      "pref": "R$"
    }
  ],
  "outputs": [
    {
      "id": "reembolso_total",
      "label": "Valor Total do Reembolso",
      "pref": "R$",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "Como é calculado o valor ideal por km rodado?",
      "a": "Leva em consideração o preço médio do combustível, o desgaste proporcional de pneus (jogo novo / km útil), revisões preventivas periódicas e desvalorização do veículo."
    }
  ]
},
{
  "id": "financiamento-veiculo",
  "name": "Simulador Parcelas Auto",
  "description": "Entenda os encargos tributários e taxa de juros de contratos de CDC de veículos.",
  "category": "veiculos",
  "icon": "Car",
  "tags": [
    "financiamento",
    "carro",
    "cdc",
    "banco"
  ],
  "type": "vei_finance",
  "inputs": [
    {
      "id": "valor_veiculo",
      "label": "Valor do Veículo",
      "def": 50000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "entrada",
      "label": "Valor de Entrada / Sinal",
      "def": 15000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "taxa_mensal",
      "label": "Taxa de Juros Mensal (a.m.)",
      "def": 1.8,
      "type": "number",
      "suff": "%"
    },
    {
      "id": "parcelas",
      "label": "Quantidade de Parcelas",
      "def": 48,
      "type": "number",
      "suff": "meses"
    }
  ],
  "outputs": [
    {
      "id": "valor_parcela",
      "label": "Prestação Mensal (CDC)",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "total_pago",
      "label": "Valor Total Pago (Financiado)",
      "pref": "R$"
    },
    {
      "id": "juros_totais",
      "label": "Juros Totais Pagos",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "O que é o financiamento tipo CDC?",
      "a": "No Crédito Direto ao Consumidor (CDC), o comprador pega um empréstimo direto com o banco para pagar o vendedor e o veículo fica alienado ao banco até a quitação da última parcela."
    }
  ]
},
{
  "id": "move-brasil",
  "name": "Simulador Move Brasil",
  "description": "Simule as parcelas e juros do programa federal de financiamento e renovação de frota para taxistas e motoristas de aplicativo.",
  "category": "veiculos",
  "icon": "Car",
  "tags": [
    "move brasil",
    "financiamento",
    "aplicativo",
    "taxista",
    "bndes",
    "crédito"
  ],
  "type": "vei_move_brasil",
  "inputs": [
    {
      "id": "valor_veiculo",
      "label": "Valor do Veículo (máx. R$ 150.000)",
      "def": 100000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "entrada",
      "label": "Valor de Entrada",
      "def": 20000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "genero",
      "label": "Gênero do Beneficiário",
      "def": "mulher",
      "type": "select",
      "op": [
        {
          "v": "mulher",
          "l": "Mulher (Taxa de 11,5% a.a. / 0,91% a.m.)"
        },
        {
          "v": "homem",
          "l": "Homem (Taxa de 12,5% a.a. / 0,99% a.m.)"
        }
      ]
    },
    {
      "id": "prazo",
      "label": "Prazo do Financiamento",
      "def": 48,
      "type": "number",
      "suff": "meses"
    }
  ],
  "outputs": [
    {
      "id": "valor_parcela",
      "label": "Prestação Mensal (Tabela Price)",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "total_pago",
      "label": "Valor Total Pago (Financiado + Entrada)",
      "pref": "R$"
    },
    {
      "id": "juros_totais",
      "label": "Total de Juros Pagos",
      "pref": "R$"
    },
    {
      "id": "economia_juros",
      "label": "Economia Estimada vs Mercado",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "O que é o programa Move Brasil?",
      "a": "O Move Brasil é um programa do Governo Federal para incentivar a renovação de frotas de taxistas e motoristas de aplicativo através de linhas de financiamento de até R$ 30 bilhões com juros reduzidos."
    },
    {
      "q": "Quem pode solicitar o financiamento do Move Brasil?",
      "a": "Taxistas registrados ativos e motoristas de aplicativo cadastrados há pelo menos 12 meses com no mínimo 100 corridas realizadas no período."
    },
    {
      "q": "Quais são as taxas de juros do programa?",
      "a": "As taxas máximas definidas pelo CMN são de 11,5% ao ano (0,91% ao mês) para mulheres e de 12,5% ao ano (0,99% ao mês) para homens."
    },
    {
      "q": "Quais carros são elegíveis para o Move Brasil?",
      "a": "Veículos novos (0km) com valor de até R$ 150.000, que atendam a critérios de eficiência energética e sustentabilidade (flex, híbridos ou elétricos)."
    }
  ]
},
{
  "id": "seguro-perfil",
  "name": "Avaliação Custos de Seguro",
  "description": "Descubra a média de acréscimo de taxas de cobertura por perfis estatísticos de risco de trânsito.",
  "category": "veiculos",
  "icon": "Car",
  "tags": [
    "seguro",
    "sinistro",
    "perfil",
    "trânsito",
    "carro"
  ],
  "type": "vei_insurance",
  "inputs": [
    {
      "id": "valor_veiculo",
      "label": "Valor de Mercado do Veículo",
      "def": 60000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "idade_perfil",
      "label": "Perfil do Condutor",
      "def": "adulto",
      "type": "select",
      "op": [
        {
          "v": "jovem",
          "l": "Jovem (< 25 anos)"
        },
        {
          "v": "adulto",
          "l": "Adulto (> 25 anos)"
        }
      ]
    },
    {
      "id": "garagem",
      "label": "Possui Garagem Fechada?",
      "def": "sim",
      "type": "select",
      "op": [
        {
          "v": "sim",
          "l": "Sim"
        },
        {
          "v": "nao",
          "l": "Não / Estaciona na Rua"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "seguro_estimado",
      "label": "Prêmio do Seguro Anual",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "franquia_estimada",
      "label": "Valor Estimado da Franquia",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "O que mais altera o valor do seguro?",
      "a": "A idade do motorista principal (jovens pagam mais), a cidade/bairro de residência (devido a índices de furto) e a presença de garagem coberta em casa e no trabalho."
    }
  ]
},
{
  "id": "tempo-viagem",
  "name": "Tempo Estimado de Trajeto",
  "description": "Planeje os tempos de chegada em estradas integrando distâncias e velocidade de fluxo de rodovias.",
  "category": "veiculos",
  "icon": "Car",
  "tags": [
    "viagem",
    "estrada",
    "velocidade",
    "tempo"
  ],
  "type": "vei_travel_time",
  "inputs": [
    {
      "id": "distancia",
      "label": "Distância a Percorrer",
      "def": 240,
      "type": "number",
      "suff": "km"
    },
    {
      "id": "velocidade",
      "label": "Velocidade Média Esperada",
      "def": 80,
      "type": "number",
      "suff": "km/h"
    },
    {
      "id": "paradas",
      "label": "Tempo de Paradas/Pedágios",
      "def": 20,
      "type": "number",
      "suff": "minutos"
    }
  ],
  "outputs": [
    {
      "id": "tempo_total_horas",
      "label": "Tempo Estimado de Viagem",
      "suff": " horas",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "Como manter uma velocidade média segura?",
      "a": "Respeite a sinalização da rodovia. Lembre-se de que a velocidade média cai devido a pedágios, trânsito urbano na saída das cidades e ultrapassagens de caminhões lentos."
    }
  ]
},
{
  "id": "rateio-pedagio",
  "name": "Rateio Paritário de Viagem",
  "description": "Divida pedágios de estradas e custos de bomba de combustível igualmente por viajante.",
  "category": "veiculos",
  "icon": "Car",
  "tags": [
    "rateio",
    "pedágio",
    "amigos",
    "carona"
  ],
  "type": "vei_toll_split",
  "inputs": [
    {
      "id": "custo_combustivel",
      "label": "Custo de Combustível da Viagem",
      "def": 120,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "custo_pedagio",
      "label": "Custo Total de Pedágios",
      "def": 45,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "passageiros",
      "label": "Número de Pessoas no Carro",
      "def": 4,
      "type": "number",
      "suff": "pessoas"
    }
  ],
  "outputs": [
    {
      "id": "custo_por_pessoa",
      "label": "Custo Individual Compartilhado",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "custo_total",
      "label": "Custo Total da Viagem",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "Como dividir pedágios de forma prática?",
      "a": "Soma-se todas as tarifas de pedágio do trajeto de ida e volta e divide-se de forma igualitária entre todos os integrantes da viagem (carona amigável)."
    }
  ]
},
{
  "id": "manutencao-carro",
  "name": "Orçamento de Revisão Anual",
  "description": "Crie uma provisão mensal preventiva para custos mecânicos recorrentes e troca de óleo periódica.",
  "category": "veiculos",
  "icon": "Car",
  "tags": [
    "manutenção",
    "revisão",
    "oficina",
    "óleo"
  ],
  "type": "vei_maintenance",
  "inputs": [
    {
      "id": "quilometragem",
      "label": "Quilometragem do Carro",
      "def": 50000,
      "type": "number",
      "suff": "km"
    },
    {
      "id": "tempo_revisao",
      "label": "Tempo desde a Última Revisão",
      "def": 12,
      "type": "number",
      "suff": "meses"
    }
  ],
  "outputs": [
    {
      "id": "custo_preventiva",
      "label": "Custo de Revisão Preventiva",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "itens_troca",
      "label": "Recomendação de Itens a Trocar"
    }
  ],
  "faq": [
    {
      "q": "Com qual frequência devo fazer a revisão?",
      "a": "A cada 10.000 km rodados ou a cada 12 meses (o que ocorrer primeiro). É a regra de ouro recomendada pelas montadoras para garantir a durabilidade de peças mecânicas."
    }
  ]
},
{
  "id": "desvio-padrao",
  "name": "Desvio Padrão e Variância",
  "description": "Analise a dispersão de dados e desvios de uma série de amostras numéricas.",
  "category": "estatistica",
  "icon": "BarChart",
  "tags": [
    "estatística",
    "desvio",
    "amostra",
    "variância",
    "pesquisa"
  ],
  "type": "est_desvio_padrao",
  "inputs": [
    {
      "id": "valores",
      "label": "Valores (separados por vírgula)",
      "def": "10, 15, 12, 18, 20",
      "type": "text"
    }
  ],
  "outputs": [
    {
      "id": "desvio_padrao",
      "label": "Desvio Padrão Amostral",
      "isPrimary": true
    },
    {
      "id": "variancia",
      "label": "Variância Amostral"
    },
    {
      "id": "media",
      "label": "Média Aritmética"
    }
  ],
  "faq": [
    {
      "q": "O que indica o Desvio Padrão?",
      "a": "É uma medida que indica o quanto os dados de um conjunto estão dispersos ou afastados em relação à média. Um desvio padrão baixo mostra dados concentrados próximos à média."
    }
  ]
},
{
  "id": "margem-erro",
  "name": "Margem de Erro de Pesquisas",
  "description": "Calcule a segurança estatística de entrevistas com base no tamanho do público amostral avaliado.",
  "category": "estatistica",
  "icon": "BarChart",
  "tags": [
    "pesquisa",
    "erro",
    "segurança",
    "amostra"
  ],
  "type": "est_margem_erro",
  "inputs": [
    {
      "id": "tamanho_amostra",
      "label": "Tamanho da Amostra",
      "def": 400,
      "type": "number",
      "suff": "pessoas"
    },
    {
      "id": "populacao",
      "label": "População Total (0 para infinita)",
      "def": 100000,
      "type": "number",
      "suff": "pop."
    },
    {
      "id": "nivel_confianca",
      "label": "Nível de Confiança",
      "def": 95,
      "type": "select",
      "op": [
        {
          "v": 90,
          "l": "90% (Z=1.645)"
        },
        {
          "v": 95,
          "l": "95% (Z=1.96)"
        },
        {
          "v": 99,
          "l": "99% (Z=2.576)"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "margem_erro",
      "label": "Margem de Erro Calculada",
      "suff": "%",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "Como o nível de confiança altera a margem?",
      "a": "Maior confiança exige margem de erro maior para a mesma amostra. A margem de erro usual em pesquisas eleitorais brasileiras é de 2% a 3%."
    }
  ]
},
{
  "id": "analise-combinatoria",
  "name": "Arranjos e Combinações",
  "description": "Resolva o número de conjuntos e combinações possíveis para agrupamentos estatísticos.",
  "category": "estatistica",
  "icon": "BarChart",
  "tags": [
    "matemática",
    "combinação",
    "fatorial",
    "arranjo"
  ],
  "type": "est_combinatoria",
  "inputs": [
    {
      "id": "n",
      "label": "Total de Elementos (N)",
      "def": 5,
      "type": "number"
    },
    {
      "id": "p",
      "label": "Tamanho dos Grupos (P)",
      "def": 3,
      "type": "number"
    }
  ],
  "outputs": [
    {
      "id": "combinacoes",
      "label": "Combinações Possíveis C(n, p)",
      "isPrimary": true
    },
    {
      "id": "arranjos",
      "label": "Arranjos Possíveis A(n, p)"
    }
  ],
  "faq": [
    {
      "q": "Qual a diferença entre Arranjo e Combinação?",
      "a": "Nos Arranjos, a ordem dos elementos importa (ex: senhas). Nas Combinações, a ordem não importa (ex: times formados de um grupo de pessoas)."
    }
  ]
},
{
  "id": "probabilidade-evento",
  "name": "Probabilidade de Ocorrências",
  "description": "Identifique as chances nominais de um evento ocorrer isoladamente em espaços amostrais.",
  "category": "estatistica",
  "icon": "BarChart",
  "tags": [
    "probabilidade",
    "chances",
    "dados",
    "estatística"
  ],
  "type": "est_probabilidade",
  "inputs": [
    {
      "id": "favoraveis",
      "label": "Casos Favoráveis",
      "def": 1,
      "type": "number"
    },
    {
      "id": "possiveis",
      "label": "Casos Possíveis Totais",
      "def": 6,
      "type": "number"
    }
  ],
  "outputs": [
    {
      "id": "probabilidade",
      "label": "Chances Percentuais de Ocorrência",
      "suff": "%",
      "isPrimary": true
    },
    {
      "id": "chances",
      "label": "Probabilidade Fracionada (1 em X)"
    }
  ],
  "faq": [
    {
      "q": "Como é calculada a Probabilidade?",
      "a": "É a divisão simples entre o número de eventos desejados (casos favoráveis) sobre o total de resultados possíveis em um evento probabilístico."
    }
  ]
},
{
  "id": "churn-rate",
  "name": "Métrica de Churn (SaaS/Loja)",
  "description": "Analise o percentual de evasão de clientes registrados que interromperam contratos de receita recorrente.",
  "category": "estatistica",
  "icon": "BarChart",
  "tags": [
    "churn",
    "evasão",
    "saas",
    "clientes",
    "métricas"
  ],
  "type": "est_churn",
  "inputs": [
    {
      "id": "ativos_inicio",
      "label": "Clientes Ativos no Início do Período",
      "def": 1000,
      "type": "number",
      "suff": "clientes"
    },
    {
      "id": "cancelados",
      "label": "Clientes Cancelados no Período",
      "def": 50,
      "type": "number",
      "suff": "cancelados"
    }
  ],
  "outputs": [
    {
      "id": "churn_rate",
      "label": "Taxa de Churn Efetiva",
      "suff": "%",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "O que representa o Churn Rate?",
      "a": "É a taxa de cancelamento de clientes em serviços ou assinaturas. Manter o churn baixo é vital para a saúde financeira e lucratividade de empresas recorrentes (SaaS)."
    }
  ]
},
{
  "id": "crescimento-mensal",
  "name": "Taxa Crescimento MoM",
  "description": "Mensura o rácio de crescimento em andamento de receitas em relação ao ciclo de meses anteriores.",
  "category": "estatistica",
  "icon": "BarChart",
  "tags": [
    "crescimento",
    "mom",
    "receita",
    "negócios"
  ],
  "type": "est_crescimento",
  "inputs": [
    {
      "id": "valor_anterior",
      "label": "Valor Período Anterior (Base)",
      "def": 8000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "valor_atual",
      "label": "Valor Período Atual",
      "def": 12000,
      "type": "number",
      "pref": "R$"
    }
  ],
  "outputs": [
    {
      "id": "crescimento",
      "label": "Taxa de Crescimento Efetiva",
      "suff": "%",
      "isPrimary": true
    },
    {
      "id": "diferenca",
      "label": "Variação Nominal Absoluta",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "O que expressa a sigla MoM?",
      "a": "Significa Month-over-Month (Mês sobre Mês), que mede o crescimento percentual de métricas operacionais ou financeiras comparando o mês atual ao anterior."
    }
  ]
},
{
  "id": "conversao-funil",
  "name": "Funil de Conversão e Leads",
  "description": "Acompanhe as passagens de visitas para leads qualificados e vendas finalizadas de seu funil comercial.",
  "category": "estatistica",
  "icon": "BarChart",
  "tags": [
    "funil",
    "conversão",
    "seo",
    "marketing",
    "leads"
  ],
  "type": "est_funil",
  "inputs": [
    {
      "id": "visitantes",
      "label": "Visitantes / Tráfego Bruto",
      "def": 10000,
      "type": "number",
      "suff": "visitas"
    },
    {
      "id": "leads",
      "label": "Leads / Contatos Qualificados",
      "def": 500,
      "type": "number",
      "suff": "leads"
    },
    {
      "id": "vendas",
      "label": "Vendas Concluídas",
      "def": 50,
      "type": "number",
      "suff": "conversões"
    }
  ],
  "outputs": [
    {
      "id": "conversao_total",
      "label": "Taxa de Conversão Total",
      "suff": "%",
      "isPrimary": true
    },
    {
      "id": "taxa_lead",
      "label": "Taxa de Visitante para Lead",
      "suff": "%"
    },
    {
      "id": "taxa_venda",
      "label": "Taxa de Lead para Venda",
      "suff": "%"
    }
  ],
  "faq": [
    {
      "q": "Qual a importância de monitorar o funil?",
      "a": "Ajuda a identificar gargalos na aquisição ou conversão do e-commerce ou site, mostrando onde os potenciais clientes estão abandonando a jornada de compra."
    }
  ]
},
{
  "id": "mediana-moda",
  "name": "Média, Mediana & Moda",
  "description": "Avalie as tendências centrais geográficas presentes em dados unificados de amostras.",
  "category": "estatistica",
  "icon": "BarChart",
  "tags": [
    "média",
    "mediana",
    "moda",
    "estatística"
  ],
  "type": "est_mediana_moda",
  "inputs": [
    {
      "id": "valores",
      "label": "Conjunto de Valores (separados por vírgula)",
      "def": "10, 15, 12, 15, 20",
      "type": "text"
    }
  ],
  "outputs": [
    {
      "id": "mediana",
      "label": "Mediana do Conjunto",
      "isPrimary": true
    },
    {
      "id": "media",
      "label": "Média Aritmética simples"
    },
    {
      "id": "moda",
      "label": "Moda (Valores mais Frequentes)"
    }
  ],
  "faq": [
    {
      "q": "Qual a diferença entre Média, Mediana e Moda?",
      "a": "Média é a soma de todos dividida pela quantidade. Mediana é o valor central que divide o grupo ao meio. Moda representa o valor de maior ocorrência no conjunto."
    }
  ]
},
{
  "id": "intervalo-confianca",
  "name": "Intervalo de Confiança",
  "description": "Defina a amplitude estimada que protege a média real de amostras populacionais.",
  "category": "estatistica",
  "icon": "BarChart",
  "tags": [
    "estatística",
    "pesquisa",
    "confiança",
    "amostra"
  ],
  "type": "est_confianca",
  "inputs": [
    {
      "id": "media_amostral",
      "label": "Média Amostral Obtida",
      "def": 50,
      "type": "number"
    },
    {
      "id": "desvio_padrao",
      "label": "Desvio Padrão da Amostra",
      "def": 5,
      "type": "number"
    },
    {
      "id": "tamanho_amostra",
      "label": "Tamanho da Amostra (N)",
      "def": 100,
      "type": "number",
      "suff": "n"
    },
    {
      "id": "nivel_confianca",
      "label": "Nível de Confiança Desejado",
      "def": 95,
      "type": "select",
      "op": [
        {
          "v": 90,
          "l": "90% (Z=1.645)"
        },
        {
          "v": 95,
          "l": "95% (Z=1.96)"
        },
        {
          "v": 99,
          "l": "99% (Z=2.576)"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "margem_erro",
      "label": "Margem de Erro Estimada",
      "isPrimary": true
    },
    {
      "id": "limite_inferior",
      "label": "Intervalo Limite Inferior"
    },
    {
      "id": "limite_superior",
      "label": "Intervalo Limite Superior"
    }
  ],
  "faq": [
    {
      "q": "O que define o Intervalo de Confiança?",
      "a": "É uma estimativa de intervalo que indica a probabilidade da média populacional real se encontrar dentro dos limites calculados a partir da amostra estatística."
    }
  ]
},
{
  "id": "conversao-cac",
  "name": "CAC vs LTV Eficiência",
  "description": "Compare o custo de aquisição (CAC) com o valor vitalício gerado pelo cliente (LTV) de sua firma.",
  "category": "estatistica",
  "icon": "BarChart",
  "tags": [
    "cac",
    "ltv",
    "vendas",
    "lucratividade"
  ],
  "type": "est_cac_ltv",
  "inputs": [
    {
      "id": "custo_marketing",
      "label": "Despesa em Vendas & Marketing",
      "def": 5000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "clientes_novos",
      "label": "Novos Clientes Adquiridos",
      "def": 100,
      "type": "number",
      "suff": "clientes"
    },
    {
      "id": "ticket_medio",
      "label": "Receita Média por Usuário (ARPU)",
      "def": 150,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "churn_rate",
      "label": "Churn Rate Mensal do Período",
      "def": 5,
      "type": "number",
      "suff": "%"
    }
  ],
  "outputs": [
    {
      "id": "cac",
      "label": "Custo de Aquisição de Cliente (CAC)",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "ltv",
      "label": "Valor de Tempo de Vida (LTV)",
      "pref": "R$"
    },
    {
      "id": "proporcao_ltv_cac",
      "label": "Relação LTV / CAC (Eficiência)"
    }
  ],
  "faq": [
    {
      "q": "Qual a proporção LTV/CAC ideal?",
      "a": "Uma boa relação LTV/CAC é superior a 3. Isso significa que o valor que o cliente gera ao longo do tempo é de no mínimo 3 vezes superior ao custo gasto para adquiri-lo."
    }
  ]
},
{
  "id": "mora-judicial",
  "name": "Mora e Multas de Contratos",
  "description": "Calcule juros de mora acumuláveis ordinários e multas estipuladas de débitos pendentes financeiros.",
  "category": "juridico",
  "icon": "Scale",
  "tags": [
    "multa",
    "juros de mora",
    "cartório",
    "justiça"
  ],
  "type": "jur_mora",
  "inputs": [
    {
      "id": "valor_original",
      "label": "Valor Original da Dívida",
      "def": 5000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "dias_atraso",
      "label": "Dias de Atraso Acumulados",
      "def": 30,
      "type": "number",
      "suff": "dias"
    },
    {
      "id": "juros_mensal",
      "label": "Juros de Mora Mensal",
      "def": 1,
      "type": "number",
      "suff": "% a.m."
    },
    {
      "id": "multa_atraso",
      "label": "Multa de Atraso Contratual",
      "def": 2,
      "type": "number",
      "suff": "%"
    }
  ],
  "outputs": [
    {
      "id": "valor_total",
      "label": "Valor Total com Encargos",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "valor_juros",
      "label": "Juros de Mora Calculados",
      "pref": "R$"
    },
    {
      "id": "valor_multa",
      "label": "Multa de Atraso Aplicada",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "Qual o limite legal de juros de mora?",
      "a": "Segundo o Código Civil brasileiro, em caso de ausência de estipulação contratual, os juros moratórios judiciais padrão correm à base de 1% ao mês."
    }
  ]
},
{
  "id": "correcao-monetaria",
  "name": "Correção Monetária de Valores",
  "description": "Atualize quantias financeiras históricas corrigidas por taxas e indexadores regulatórios civis.",
  "category": "juridico",
  "icon": "Scale",
  "tags": [
    "correção",
    "inflação",
    "justiça",
    "valores"
  ],
  "type": "jur_correcao",
  "inputs": [
    {
      "id": "valor_original",
      "label": "Valor Financeiro Original",
      "def": 1000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "taxa_correcao",
      "label": "Taxa de Correção Acumulada",
      "def": 4.5,
      "type": "number",
      "suff": "%"
    }
  ],
  "outputs": [
    {
      "id": "valor_corrigido",
      "label": "Valor Corrigido e Atualizado",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "valor_ganho",
      "label": "Acrescimento da Correção",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "O que é Correção Monetária?",
      "a": "Consiste na recomposição do valor real do dinheiro corroído pela inflação em contratos ou processos judiciais, sem constituir acréscimo de ganho real."
    }
  ]
},
{
  "id": "custas-processuais",
  "name": "Custas Judiciais Estimadas",
  "description": "Simule preliminarmente as guias financeiras de taxas judiciais de distribuição do seu processo.",
  "category": "juridico",
  "icon": "Scale",
  "tags": [
    "custas",
    "processo",
    "tribunal",
    "taxas"
  ],
  "type": "jur_custas",
  "inputs": [
    {
      "id": "valor_causa",
      "label": "Valor da Causa de Referência",
      "def": 20000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "estado",
      "label": "Tribunal de Justiça do Estado (TJ)",
      "def": "sp",
      "type": "select",
      "op": [
        {
          "v": "sp",
          "l": "TJSP (São Paulo)"
        },
        {
          "v": "rj",
          "l": "TJRJ (Rio de Janeiro)"
        },
        {
          "v": "mg",
          "l": "TJMG (Minas Gerais)"
        },
        {
          "v": "outro",
          "l": "Outros Estados"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "custas_totais",
      "label": "Taxa Judiciária Total Estimada",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "taxa_distribuicao",
      "label": "Taxa de Distribuição Processual",
      "pref": "R$"
    },
    {
      "id": "taxa_mandato",
      "label": "Taxa de Procuração / Mandato",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "Quem responde pelas custas?",
      "a": "Quem entra com o processo paga as custas iniciais de distribuição, que no entanto são reembolsadas pelo perdedor em caso de procedência (sucumbência)."
    }
  ]
},
{
  "id": "pensao-alimenticia",
  "name": "Pensão Alimentícia Projeções",
  "description": "Identifique proporções sugestivas de amparo pensonal de acordo com a renda do devedor alimentício.",
  "category": "juridico",
  "icon": "Scale",
  "tags": [
    "família",
    "pensão",
    "direito",
    "filho"
  ],
  "type": "jur_pensao",
  "inputs": [
    {
      "id": "salario_liquido",
      "label": "Rendimento Líquido Alimentante",
      "def": 3000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "filhos",
      "label": "Quantidade de Filhos Dependentes",
      "def": 1,
      "type": "number",
      "suff": "filho(s)"
    },
    {
      "id": "tipo",
      "label": "Vínculo do Devedor",
      "def": "empregado",
      "type": "select",
      "op": [
        {
          "v": "empregado",
          "l": "Vínculo Formal (CLT / Rendimentos)"
        },
        {
          "v": "desempregado",
          "l": "Desempregado / Autônomo"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "valor_pensao",
      "label": "Pensão Alimentícia Estimada",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "porcentagem_salario",
      "label": "Percentual Equivalente Aplicado",
      "suff": "%"
    }
  ],
  "faq": [
    {
      "q": "Existe um percentual fixo de pensão por lei?",
      "a": "Não, o juiz avalia as necessidades do filho e as possibilidades financeiras dos pais. Contudo, a praxe de mercado adota em média 20% a 30% da renda líquida para vínculos formais."
    }
  ]
},
{
  "id": "ganho-capital",
  "name": "IR s/ Ganho de Capital",
  "description": "Calcule as faixas de imposto devidas sobre o lucro líquido gerado na alienação de bens e imóveis.",
  "category": "juridico",
  "icon": "Scale",
  "tags": [
    "lucro",
    "imóvel",
    "ganho de capital",
    "imposto"
  ],
  "type": "jur_ganho_capital",
  "inputs": [
    {
      "id": "valor_venda",
      "label": "Preço de Venda Praticado",
      "def": 400000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "valor_compra",
      "label": "Custo de Aquisição Escriturado",
      "def": 250000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "isencao_unico",
      "label": "Imóvel Único Residencial até R$ 440 mil",
      "def": "nao",
      "type": "select",
      "op": [
        {
          "v": "nao",
          "l": "Não / Não se Enquadra"
        },
        {
          "v": "sim",
          "l": "Sim"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "imposto_devido",
      "label": "Imposto s/ Ganho de Capital",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "ganho_bruto",
      "label": "Ganho de Capital Bruto (Lucro)",
      "pref": "R$"
    },
    {
      "id": "aliquota_ir",
      "label": "Alíquota Aplicável de Imposto",
      "suff": "%"
    }
  ],
  "faq": [
    {
      "q": "O que é isenção de ganho de capital?",
      "a": "A alienação de imóvel único residencial por valor igual ou inferior a R$ 440 mil é isenta de imposto de renda, desde que o contribuinte não tenha realizado outra venda de imóvel nos últimos cinco anos."
    }
  ]
},
{
  "id": "divisao-bens",
  "name": "Divisão de Bens de Divórcio",
  "description": "Esquematize a partilha societária de bens baseada em regimes nupciais estabelecidos no Brasil.",
  "category": "juridico",
  "icon": "Scale",
  "tags": [
    "divórcio",
    "partilha",
    "regime",
    "casamento"
  ],
  "type": "jur_divisao_bens",
  "inputs": [
    {
      "id": "bens_comuns",
      "label": "Valor Total de Bens Comuns",
      "def": 200000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "regime",
      "label": "Regime de Casamento do Casal",
      "def": "parcial",
      "type": "select",
      "op": [
        {
          "v": "parcial",
          "l": "Comunhão Parcial de Bens"
        },
        {
          "v": "universal",
          "l": "Comunhão Universal de Bens"
        },
        {
          "v": "separacao",
          "l": "Separação Total de Bens"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "valor_meacao",
      "label": "Quota de Direito Cônjuge A",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "valor_conjuge",
      "label": "Quota de Direito Cônjuge B",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "Como funciona a Comunhão Parcial?",
      "a": "No regime de Comunhão Parcial de Bens (o padrão no Brasil desde 1977), dividem-se em partes iguais (50% cada) apenas os bens adquiridos onerosamente durante a constância do casamento."
    }
  ]
},
{
  "id": "inventario-partilha",
  "name": "Inventário e Herança Partilha",
  "description": "Estime taxas de imposto de herança (ITCMD) e custos processuais de partilha pátria.",
  "category": "juridico",
  "icon": "Scale",
  "tags": [
    "herança",
    "inventário",
    "itcmd",
    "sucessão",
    "morte"
  ],
  "type": "jur_inventario",
  "inputs": [
    {
      "id": "patrimonio_liquido",
      "label": "Patrimônio Líquido Total Espólio",
      "def": 500000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "herdeiros",
      "label": "Número de Herdeiros Concorrentes",
      "def": 3,
      "type": "number",
      "suff": "herdeiro(s)"
    },
    {
      "id": "itcmd_uf",
      "label": "UF / Alíquota ITCMD de Origem",
      "def": "sp",
      "type": "select",
      "op": [
        {
          "v": "sp",
          "l": "São Paulo (4.0%)"
        },
        {
          "v": "rj",
          "l": "Rio de Janeiro (4.5%)"
        },
        {
          "v": "mg",
          "l": "Minas Gerais (5.0%)"
        },
        {
          "v": "outro",
          "l": "Outros Estados (4.0%)"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "imposto_itcmd",
      "label": "ITCMD Total a ser Pago",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "valor_por_herdeiro",
      "label": "Quota Líquida Estimada p/ Herdeiro",
      "pref": "R$"
    },
    {
      "id": "liquido_partilhar",
      "label": "Patrimônio Líquido Pós-ITCMD",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "O que é o ITCMD?",
      "a": "Imposto sobre Transmissão Causa Mortis e Doação, de competência estadual. Incide sobre a transferência de herança ou doações de bens a herdeiros."
    }
  ]
},
{
  "id": "tabela-simples",
  "name": "Simples Nacional Simulador",
  "description": "Saiba o imposto gerado no Simples Nacional baseados em tabelas de faturamento cumulativo e anexos.",
  "category": "juridico",
  "icon": "Scale",
  "tags": [
    "simples nacional",
    "mei",
    "cnpj",
    "imposto"
  ],
  "type": "jur_simples_nacional",
  "inputs": [
    {
      "id": "receita_12m",
      "label": "Faturamento Acumulado 12 Meses",
      "def": 180000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "faturamento_mes",
      "label": "Faturamento de Serviços do Mês",
      "def": 15000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "anexo",
      "label": "Tabela do Simples (Anexo)",
      "def": "anexo1",
      "type": "select",
      "op": [
        {
          "v": "anexo1",
          "l": "Anexo I - Comércio"
        },
        {
          "v": "anexo2",
          "l": "Anexo II - Indústria"
        },
        {
          "v": "anexo3",
          "l": "Anexo III - Prestação de Serviços"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "imposto_devido",
      "label": "Imposto do Simples a Pagar no Mês",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "aliquota_efetiva",
      "label": "Alíquota Efetiva do Imposto",
      "suff": "%"
    }
  ],
  "faq": [
    {
      "q": "Como é calculada a alíquota efetiva?",
      "a": "Ela é calculada a partir da fórmula: ((Faturamento 12m * Alíquota Nominal) - Dedutora) / Faturamento 12m. A taxa real do DAS varia conforme a faixa de faturamento."
    }
  ]
},
{
  "id": "aliquota-iss",
  "name": "Custos de ISS s/ Serviços",
  "description": "Identifique o repasse de imposto municipal ISS sobre notas fiscais de seu tomador.",
  "category": "juridico",
  "icon": "Scale",
  "tags": [
    "iss",
    "imposto",
    "serviços",
    "município"
  ],
  "type": "jur_iss",
  "inputs": [
    {
      "id": "valor_nota",
      "label": "Valor Bruto da Nota Fiscal",
      "def": 5000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "aliquota_iss",
      "label": "Alíquota ISS do Município",
      "def": 3,
      "type": "number",
      "suff": "%"
    }
  ],
  "outputs": [
    {
      "id": "valor_iss",
      "label": "Valor de ISS Deduzido/Devido",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "valor_liquido",
      "label": "Valor Líquido da Nota Fiscal",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "Qual a faixa de alíquota do ISS?",
      "a": "A alíquota é municipal e, de acordo com a legislação federal brasileira, deve se situar na faixa mínima de 2% e máxima de 5% sobre a receita bruta do serviço."
    }
  ]
},
{
  "id": "irrf-investimentos",
  "name": "IR s/ Aplicações Financeiras",
  "description": "Calcule a mordida do leão na venda de renda fixa e fundos com base na data do saque.",
  "category": "juridico",
  "icon": "Scale",
  "tags": [
    "renda fixa",
    "tesouro",
    "imposto",
    "lucros"
  ],
  "type": "jur_irrf_invest",
  "inputs": [
    {
      "id": "rendimento",
      "label": "Lucro / Rendimento Bruto Obtido",
      "def": 1000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "prazo_dias",
      "label": "Dias de Permanência dos Fundos",
      "def": 180,
      "type": "number",
      "suff": "dias"
    }
  ],
  "outputs": [
    {
      "id": "imposto_ir",
      "label": "Imposto de Renda Retido (IRRF)",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "rendimento_liquido",
      "label": "Rendimento Líquido Acumulado",
      "pref": "R$"
    },
    {
      "id": "aliquota",
      "label": "Alíquota de Tributação Aplicada",
      "suff": "%"
    }
  ],
  "faq": [
    {
      "q": "Como funciona a tabela regressiva de Renda Fixa?",
      "a": "Até 180 dias de aplicação a taxa é de 22.5%; de 181 a 360 dias, 20%; de 361 a 720 dias, 17.5%; e acima de 720 dias cai para a taxa mínima de 15%."
    }
  ]
},
{
  "id": "conversor-moedas",
  "name": "Conversor de Câmbio Moedas",
  "description": "Converta faturamento em divisas internacionais com taxas de câmbios pré-definidos (Dólar, Euro, Real).",
  "category": "utilitarios",
  "icon": "Wrench",
  "tags": [
    "câmbio",
    "dólar",
    "euro",
    "faturamento",
    "conversor"
  ],
  "type": "util_cambio",
  "inputs": [
    {
      "id": "valor",
      "label": "Valor de Origem",
      "def": 100,
      "type": "number"
    },
    {
      "id": "de_moeda",
      "label": "Converter De",
      "def": "USD",
      "type": "select",
      "op": [
        {
          "v": "USD",
          "l": "Dólar Americano (USD)"
        },
        {
          "v": "EUR",
          "l": "Euro (EUR)"
        },
        {
          "v": "GBP",
          "l": "Libra Esterlina (GBP)"
        },
        {
          "v": "BRL",
          "l": "Real Brasileiro (BRL)"
        }
      ]
    },
    {
      "id": "para_moeda",
      "label": "Converter Para",
      "def": "BRL",
      "type": "select",
      "op": [
        {
          "v": "BRL",
          "l": "Real Brasileiro (BRL)"
        },
        {
          "v": "USD",
          "l": "Dólar Americano (USD)"
        },
        {
          "v": "EUR",
          "l": "Euro (EUR)"
        },
        {
          "v": "GBP",
          "l": "Libra Esterlina (GBP)"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "resultado",
      "label": "Valor Convertido de Câmbio",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "As cotações são atualizadas em tempo real?",
      "a": "Não, esta calculadora utiliza cotações médias de referência estáveis para fins de simulação financeira. Para transações reais, consulte cotações bancárias atuais."
    }
  ]
},
{
  "id": "conta-bar",
  "name": "Divisor de Conta do Bar",
  "description": "Divida a conta do bar ou restaurante de forma justa incluindo gorjetas de garçom voluntárias.",
  "category": "utilitarios",
  "icon": "Wrench",
  "tags": [
    "restaurante",
    "churrasco",
    "amigos",
    "conta",
    "bar"
  ],
  "type": "util_conta_bar",
  "inputs": [
    {
      "id": "total",
      "label": "Valor Total do Consumo",
      "def": 150,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "pessoas",
      "label": "Quantidade de Amigos na Mesa",
      "def": 4,
      "type": "number",
      "suff": "pessoa(s)"
    },
    {
      "id": "taxa_servico",
      "label": "Taxa de Garçom / Serviço",
      "def": 10,
      "type": "number",
      "suff": "%"
    }
  ],
  "outputs": [
    {
      "id": "valor_por_pessoa",
      "label": "Quota de Divisão por Pessoa",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "taxa_calculada",
      "label": "Valor de Serviço Estimado",
      "pref": "R$"
    },
    {
      "id": "subtotal",
      "label": "Valor Total com Taxas",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "A taxa de serviço é obrigatória?",
      "a": "No Brasil, o pagamento da taxa de 10% a 15% de serviço do garçom é voluntário por lei, embora seja um costume cultural amplamente respeitado para apoiar os profissionais."
    }
  ]
},
{
  "id": "energia-eletrica",
  "name": "Consumo Elétrico Comparado",
  "description": "Determine o custo de operação de eletrodomésticos cruzando Watts e tarifa contratual local.",
  "category": "utilitarios",
  "icon": "Wrench",
  "tags": [
    "energia",
    "chuveiro",
    "kwh",
    "eletrodomésticos",
    "conta"
  ],
  "type": "util_energia_comp",
  "inputs": [
    {
      "id": "potencia_a",
      "label": "Potência Aparelho A",
      "def": 2000,
      "type": "number",
      "suff": "Watts"
    },
    {
      "id": "horas_a",
      "label": "Tempo de Uso Diário A",
      "def": 8,
      "type": "number",
      "suff": "horas"
    },
    {
      "id": "potencia_b",
      "label": "Potência Aparelho B (Ex: Inverter)",
      "def": 1200,
      "type": "number",
      "suff": "Watts"
    },
    {
      "id": "horas_b",
      "label": "Tempo de Uso Diário B",
      "def": 8,
      "type": "number",
      "suff": "horas"
    },
    {
      "id": "tarifa",
      "label": "Tarifa de Energia local",
      "def": 0.95,
      "type": "number",
      "pref": "R$",
      "suff": "/kWh"
    }
  ],
  "outputs": [
    {
      "id": "economia_mensal",
      "label": "Economia Mensal Gerada",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "custo_a",
      "label": "Custo Mensal do Aparelho A",
      "pref": "R$"
    },
    {
      "id": "custo_b",
      "label": "Custo Mensal do Aparelho B",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "Como o cálculo é realizado?",
      "a": "Consumo mensal em kWh = (Watts * Horas/dia * 30) / 1000. O custo é o Consumo em kWh multiplicado pela tarifa do seu estado."
    }
  ]
},
{
  "id": "ar-condicionado",
  "name": "Ar Condicionado ideal (BTUs)",
  "description": "Calcule o dimensionamento térmico e BTUs recomendados para climatização de aposentos.",
  "category": "utilitarios",
  "icon": "Wrench",
  "tags": [
    "ar condicionado",
    "btu",
    "refrigeração",
    "quarto"
  ],
  "type": "util_ar_btu",
  "inputs": [
    {
      "id": "area",
      "label": "Área do Cômodo a Climatizar",
      "def": 20,
      "type": "number",
      "suff": "m²"
    },
    {
      "id": "pessoas",
      "label": "Pessoas Ocupantes Frequentes",
      "def": 2,
      "type": "number",
      "suff": "pessoa(s)"
    },
    {
      "id": "eletronicos",
      "label": "Aparelhos Eletrônicos Ligados",
      "def": 2,
      "type": "number",
      "suff": "aparelho(s)"
    }
  ],
  "outputs": [
    {
      "id": "btu_necessario",
      "label": "Potência de Climatização Desejada",
      "suff": " BTUs",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "Qual a regra básica de BTUs?",
      "a": "Usa-se 600 BTUs por metro quadrado para ambientes comuns. Se houver incidência de sol forte ou muitas pessoas/aparelhos, usa-se de 800 BTUs."
    }
  ]
},
{
  "id": "quantidade-tinta",
  "name": "Cálculo de Latas de Tinta",
  "description": "Identifique a quantidade de latas exigidas para pintura de áreas prediais quadrangulares.",
  "category": "utilitarios",
  "icon": "Wrench",
  "tags": [
    "tinta",
    "obra",
    "reforma",
    "pintura",
    "parede"
  ],
  "type": "util_tinta_m2",
  "inputs": [
    {
      "id": "largura_parede",
      "label": "Largura Total das Paredes",
      "def": 4,
      "type": "number",
      "suff": "metros"
    },
    {
      "id": "altura_parede",
      "label": "Altura da Parede (Pé Direito)",
      "def": 2.8,
      "type": "number",
      "suff": "metros"
    },
    {
      "id": "janelas",
      "label": "Quantidade de Janelas no Ambiente",
      "def": 1,
      "type": "number",
      "suff": "un."
    },
    {
      "id": "portas",
      "label": "Quantidade de Portas no Ambiente",
      "def": 1,
      "type": "number",
      "suff": "un."
    },
    {
      "id": "rendimento_litro",
      "label": "Rendimento de Referência da Tinta",
      "def": 10,
      "type": "number",
      "suff": "m²/L"
    }
  ],
  "outputs": [
    {
      "id": "litros_necessarios",
      "label": "Volume Total de Tinta (2 demãos)",
      "suff": " Litros",
      "isPrimary": true
    },
    {
      "id": "area_liquida",
      "label": "Área Efetiva de Pintura",
      "suff": " m²"
    }
  ],
  "faq": [
    {
      "q": "Por que deduzir portas e janelas?",
      "a": "Reduz o volume de compra necessário evitando desperdício de tintas. Uma janela média ocupa 2.0 m² e uma porta padrão ocupa 1.6 m²."
    }
  ]
},
{
  "id": "agua-chuveiro",
  "name": "Consumo do Banho de Chuveiro",
  "description": "Meça as tarifas agregadas de água e energia ao passar minutos embaixo do chuveiro elétrico.",
  "category": "utilitarios",
  "icon": "Wrench",
  "tags": [
    "chuveiro",
    "banho",
    "banheiro",
    "água",
    "eletricidade"
  ],
  "type": "util_chuveiro",
  "inputs": [
    {
      "id": "minutos",
      "label": "Tempo de Banho Diário",
      "def": 15,
      "type": "number",
      "suff": "minutos"
    },
    {
      "id": "potencia",
      "label": "Potência Nominal do Chuveiro",
      "def": 5500,
      "type": "number",
      "suff": "Watts"
    },
    {
      "id": "vazao",
      "label": "Vazão Média do Chuveiro",
      "def": 10,
      "type": "number",
      "suff": "Litros/min"
    },
    {
      "id": "tarifa_kwh",
      "label": "Tarifa de Energia Elétrica",
      "def": 0.95,
      "type": "number",
      "pref": "R$/kWh"
    },
    {
      "id": "tarifa_agua",
      "label": "Tarifa de Água por Metro Cúbico",
      "def": 6.5,
      "type": "number",
      "pref": "R$/m³"
    }
  ],
  "outputs": [
    {
      "id": "custo_total",
      "label": "Custo Total Estimado por Banho",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "custo_energia",
      "label": "Custo de Energia Elétrica",
      "pref": "R$"
    },
    {
      "id": "custo_agua",
      "label": "Custo de Abastecimento de Água",
      "pref": "R$"
    },
    {
      "id": "consumo_litros",
      "label": "Consumo de Água em Litros",
      "suff": " Litros"
    }
  ],
  "faq": [
    {
      "q": "Como economizar no banho?",
      "a": "Diminuir o tempo de banho para 5-8 minutos e reduzir a temperatura do chuveiro (modo verão) são as formas mais rápidas de cortar consumo de luz e água."
    }
  ]
},
{
  "id": "churrasco-festa",
  "name": "Churrasco Evento Ingredientes",
  "description": "Estime as porções alimentares de carne e bebidas ideais por convidado para evitar desperdício em festas.",
  "category": "utilitarios",
  "icon": "Wrench",
  "tags": [
    "churrasco",
    "carne",
    "bebida",
    "festa",
    "cerveja"
  ],
  "type": "util_buffet",
  "inputs": [
    {
      "id": "adultos",
      "label": "Quantidade de Convidados Adultos",
      "def": 20,
      "type": "number",
      "suff": "pessoas"
    },
    {
      "id": "criancas",
      "label": "Quantidade de Convidados Crianças",
      "def": 10,
      "type": "number",
      "suff": "crianças"
    },
    {
      "id": "duracao",
      "label": "Duração do Evento / Festa",
      "def": 4,
      "type": "number",
      "suff": "horas"
    }
  ],
  "outputs": [
    {
      "id": "salgados_total",
      "label": "Total de Salgadinhos (Buffet)",
      "suff": " centos/un",
      "isPrimary": true
    },
    {
      "id": "doces_total",
      "label": "Total de Docinhos Necessários",
      "suff": " unidades"
    },
    {
      "id": "refrigerante_litros",
      "label": "Refrigerante / Bebidas não alcoólicas",
      "suff": " Litros"
    },
    {
      "id": "bolo_kg",
      "label": "Peso Recomendado de Bolo",
      "suff": " kg"
    }
  ],
  "faq": [
    {
      "q": "Como mensurar quantidade de buffet?",
      "a": "Geralmente calcula-se 12 salgados pequenos e 4 docinhos por adulto e metade disso por criança para comemorações de 4 horas."
    }
  ]
},
{
  "id": "alimentos-congelados",
  "name": "Prazo Freezer Descongelamento",
  "description": "Saiba o tempo permitido de armazenamento e retenção de frescor nutritivo no freezer comercial.",
  "category": "utilitarios",
  "icon": "Wrench",
  "tags": [
    "comida",
    "freezer",
    "congelar",
    "cozinha"
  ],
  "type": "util_freezer",
  "inputs": [
    {
      "id": "tipo",
      "label": "Tipo de Alimento",
      "def": "carne",
      "type": "select",
      "op": [
        {
          "v": "carne",
          "l": "Carne Vermelha Fresca"
        },
        {
          "v": "frango",
          "l": "Aves Frescas"
        },
        {
          "v": "peixe",
          "l": "Peixes e Frutos do Mar"
        },
        {
          "v": "legume",
          "l": "Legumes e Verduras Branqueadas"
        }
      ]
    },
    {
      "id": "geladeira",
      "label": "Equipamento de Congelamento",
      "def": "freezer",
      "type": "select",
      "op": [
        {
          "v": "freezer",
          "l": "Freezer Duas Portas (-18ºC)"
        },
        {
          "v": "congelador",
          "l": "Congelador Acoplado (-4ºC)"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "conservacao_meses",
      "label": "Prazo Recomendado de Conservação",
      "suff": " meses",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "O congelamento mata bactérias?",
      "a": "Não, o congelamento a -18°C paralisa a atividade bacteriana e enzimática retardando a deterioração dos alimentos, mantendo-os seguros por meses."
    }
  ]
},
{
  "id": "espacador-azulejo",
  "name": "Quantidade Pisos & Azulejos",
  "description": "Identifique as dimensões e número de revestimentos necessários para pavimentação.",
  "category": "utilitarios",
  "icon": "Wrench",
  "tags": [
    "pisos",
    "azulejos",
    "construção",
    "obra",
    "reforma"
  ],
  "type": "util_rejunte",
  "inputs": [
    {
      "id": "area_m2",
      "label": "Área Total a ser Revestida",
      "def": 25,
      "type": "number",
      "suff": "m²"
    },
    {
      "id": "piso_largo",
      "label": "Largura do Piso / Porcelanato",
      "def": 60,
      "type": "number",
      "suff": "cm"
    },
    {
      "id": "piso_alto",
      "label": "Comprimento do Piso / Peça",
      "def": 60,
      "type": "number",
      "suff": "cm"
    }
  ],
  "outputs": [
    {
      "id": "espacadores_total",
      "label": "Total de Espaçadores a Comprar",
      "suff": " unidades",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "Quantos espaçadores usar por peça?",
      "a": "Usualmente aplicam-se de 4 a 8 espaçadores tipo cruzeta por peça de porcelanato ou revestimento cerâmico para garantir uniformidade nas juntas."
    }
  ]
},
{
  "id": "lista-supermercado",
  "name": "Protetor Carrinho Supermercado",
  "description": "Consolide suas despesas no caixa com margens de estimativas para compras mensais de despensa.",
  "category": "utilitarios",
  "icon": "Wrench",
  "tags": [
    "mercado",
    "lista",
    "compras",
    "orçamento"
  ],
  "type": "util_supermercado",
  "inputs": [
    {
      "id": "orcamento",
      "label": "Limite de Orçamento das Compras",
      "def": 500,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "total_itens",
      "label": "Quantidade Estimada de Itens",
      "def": 45,
      "type": "number",
      "suff": "itens"
    }
  ],
  "outputs": [
    {
      "id": "saldo",
      "label": "Saldo Restante / Excesso",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "percentual_usado",
      "label": "Percentual do Orçamento Usado",
      "suff": "%"
    }
  ],
  "faq": [
    {
      "q": "Como evitar estourar o orçamento no supermercado?",
      "a": "Sempre faça uma lista rígida de compras de despensa e use um aplicativo ou estimador de valor médio para acompanhar o total acumulado do carrinho."
    }
  ]
},
{
  "id": "previdenca-privada",
  "name": "Previdência Privada Acúmulo",
  "description": "Pondere se aportes mensais de previdência VGBL ou PGBL com imposto regressivo protegem seu futuro.",
  "category": "aposentadoria",
  "icon": "ShieldCheck",
  "tags": [
    "aposentadoria",
    "investimento",
    "previdência",
    "banco"
  ],
  "type": "apo_prev_privada",
  "inputs": [
    {
      "id": "aporte_mensal",
      "label": "Aporte Mensal Voluntário",
      "def": 500,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "anos",
      "label": "Anos de Aportes Programados",
      "def": 25,
      "type": "number",
      "suff": "anos"
    },
    {
      "id": "taxa_anual",
      "label": "Rentabilidade Líquida Estimada",
      "def": 8.5,
      "type": "number",
      "suff": "% a.a."
    }
  ],
  "outputs": [
    {
      "id": "saldo_liquido",
      "label": "Saldo Líquido Acumulado (Regresso)",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "saldo_bruto",
      "label": "Saldo Bruto Acumulado",
      "pref": "R$"
    },
    {
      "id": "total_investido",
      "label": "Total Físico Investido",
      "pref": "R$"
    },
    {
      "id": "imposto_pago",
      "label": "Imposto de Renda Retido (10%)",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "O que caracteriza a tabela regressiva?",
      "a": "Na previdência privada, a tabela regressiva reduz o imposto de renda incidente sobre os rendimentos conforme o tempo decorrido, chegando à alíquota mínima de 10% após 10 anos."
    }
  ]
},
{
  "id": "viver-de-renda",
  "name": "Capital de Viver de Renda",
  "description": "Quantifique o montante financeiro exigido investido para retirar o equivalente ao seu salário mensal de direito.",
  "category": "aposentadoria",
  "icon": "ShieldCheck",
  "tags": [
    "viver de renda",
    "aposentadoria",
    "independência",
    "juros"
  ],
  "type": "apo_viver_renda",
  "inputs": [
    {
      "id": "renda_desejada",
      "label": "Renda Mensal Líquida Desejada",
      "def": 5000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "taxa_real",
      "label": "Taxa Real de Retorno Mensal",
      "def": 0.5,
      "type": "number",
      "suff": "% a.m."
    }
  ],
  "outputs": [
    {
      "id": "patrimonio_alvo",
      "label": "Capital Total Investido Alvo",
      "pref": "R$",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "O que é a taxa real?",
      "a": "É o rendimento do seu investimento deduzida a inflação do período. Desta forma o seu capital conserva o poder de compra intacto ao longo dos anos de retirada."
    }
  ]
},
{
  "id": "reserva-emergencia",
  "name": "Reserva Emergência Custos",
  "description": "Defina o colchão de liquidez para cobrir de 6 a 12 meses das despesas e contas básicas.",
  "category": "aposentadoria",
  "icon": "ShieldCheck",
  "tags": [
    "reserva",
    "emergência",
    "dinheiro",
    "poupança"
  ],
  "type": "apo_reserva",
  "inputs": [
    {
      "id": "custo_mensal",
      "label": "Gasto Fixo Mensal Básico",
      "def": 3000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "meses",
      "label": "Meses de Cobertura Desejada",
      "def": 6,
      "type": "select",
      "op": [
        {
          "v": 6,
          "l": "CLT Segurado (6 meses)"
        },
        {
          "v": 12,
          "l": "Autônomo/Empresário (12 meses)"
        }
      ]
    }
  ],
  "outputs": [
    {
      "id": "reserva_recomendada",
      "label": "Colchão de Reserva Financeira",
      "pref": "R$",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "Onde guardar a reserva de emergência?",
      "a": "Deve ser aplicada em ativos financeiros seguros e com liquidez imediata (diária), como Tesouro Selic, CDBs 100% DI diários ou poupança."
    }
  ]
},
{
  "id": "depreciacao-maquinas",
  "name": "Provisão Desgaste Equipamentos",
  "description": "Preveja as substituições periódicas de máquinas corporativas ou laptops de trabalho.",
  "category": "aposentadoria",
  "icon": "ShieldCheck",
  "tags": [
    "máquina",
    "computador",
    "ativo",
    "depreciação"
  ],
  "type": "apo_depreciacao",
  "inputs": [
    {
      "id": "valor_aquisicao",
      "label": "Valor de Compra da Máquina",
      "def": 5000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "vida_util",
      "label": "Vida Útil Estimada (Anos)",
      "def": 5,
      "type": "number",
      "suff": "anos"
    },
    {
      "id": "valor_residual",
      "label": "Valor de Revenda Estimado",
      "def": 500,
      "type": "number",
      "pref": "R$"
    }
  ],
  "outputs": [
    {
      "id": "depreciacao_mensal",
      "label": "Dedução / Depreciação Mensal",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "depreciacao_anual",
      "label": "Depreciação Anual Linear",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "O que representa o valor residual?",
      "a": "É a quantia estimada pela qual o ativo poderá ser comercializado ao término de sua vida útil corporativa, amortizando o valor do desgaste total."
    }
  ]
},
{
  "id": "inflacao-futura",
  "name": "Corrosor de Poupanças Futura",
  "description": "Veja o declínio do poder de compra de quantias paradas em horizontes de longo prazo.",
  "category": "aposentadoria",
  "icon": "ShieldCheck",
  "tags": [
    "inflação",
    "dinheiro",
    "perda",
    "poupança"
  ],
  "type": "apo_inflacao",
  "inputs": [
    {
      "id": "valor_inicial",
      "label": "Valor Poupança Atual",
      "def": 10000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "anos",
      "label": "Anos de Projeção / Horizonte",
      "def": 10,
      "type": "number",
      "suff": "anos"
    },
    {
      "id": "inflacao_anual",
      "label": "Inflação Média Anual Estimada",
      "def": 4.5,
      "type": "number",
      "suff": "%"
    }
  ],
  "outputs": [
    {
      "id": "poder_compra_futuro",
      "label": "Poder de Compra Equivalente",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "perda_real",
      "label": "Desvalorização Acumulada Real",
      "suff": "%"
    }
  ],
  "faq": [
    {
      "q": "Por que o dinheiro perde poder?",
      "a": "A inflação representa a elevação geral de preços. Se o seu dinheiro não estiver rendendo no mínimo a taxa da inflação anual, você poderá comprar muito menos com o mesmo valor."
    }
  ]
},
{
  "id": "fgts-corrigido",
  "name": "Fundo Garantido Corrigido (FGTS)",
  "description": "Simule o crescimento fictício de contas em regimes ordinários de atualização monetária de 3%.",
  "category": "aposentadoria",
  "icon": "ShieldCheck",
  "tags": [
    "fgts",
    "fundo garantido",
    "salário",
    "emprego"
  ],
  "type": "apo_fgts_corr",
  "inputs": [
    {
      "id": "saldo",
      "label": "Saldo Inicial do Fundo",
      "def": 10000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "deposito_mensal",
      "label": "Depósito Mensal Estimado",
      "def": 200,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "meses",
      "label": "Meses de Contribuição",
      "def": 24,
      "type": "number",
      "suff": "meses"
    }
  ],
  "outputs": [
    {
      "id": "total_corrigido",
      "label": "Saldo FGTS com Correção Legal",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "total_poupado",
      "label": "Total Poupança sem Rendimento",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "Qual a taxa legal de correção do FGTS?",
      "a": "Historicamente o FGTS rende TR (Taxa Referencial) mais 3% ao ano de juros remuneratórios. Decisões do STF buscam garantir que o saldo acompanhe no mínimo a inflação (IPCA)."
    }
  ]
},
{
  "id": "custo-aposentadoria",
  "name": "Planejador Estilo de Vida (Retired)",
  "description": "Calcule as contrações naturais de gastos domésticos decorrentes do avanço da melhor idade.",
  "category": "aposentadoria",
  "icon": "ShieldCheck",
  "tags": [
    "aposentadoria",
    "gastos",
    "despesas",
    "melhor idade"
  ],
  "type": "apo_custo_apos",
  "inputs": [
    {
      "id": "gastos_hoje",
      "label": "Gastos Mensais Atuais do Lar",
      "def": 4000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "reducao_porcentagem",
      "label": "Redução Estimada de Gastos (%)",
      "def": 20,
      "type": "number",
      "suff": "%"
    },
    {
      "id": "aumento_plano_saude",
      "label": "Previsão de Gastos Extras (Saúde/Plano)",
      "def": 800,
      "type": "number",
      "pref": "R$"
    }
  ],
  "outputs": [
    {
      "id": "gastos_aposentado",
      "label": "Orçamento Médio na Aposentadoria",
      "pref": "R$",
      "isPrimary": true
    }
  ],
  "faq": [
    {
      "q": "Quais despesas costumam cair?",
      "a": "Na melhor idade reduzem-se custos relativos a transporte comercial, vestimentas de trabalho e previdência, mas custos de saúde e bem-estar tendem a crescer."
    }
  ]
},
{
  "id": "renda-eterna",
  "name": "Taxa Segura de Retirada (SWR)",
  "description": "Descubra a taxa percentual de retirada anual que impede que seus fundos venham a faltar na velhice.",
  "category": "aposentadoria",
  "icon": "ShieldCheck",
  "tags": [
    "swr",
    "retirada",
    "portfólio",
    "patrimônio"
  ],
  "type": "apo_swr",
  "inputs": [
    {
      "id": "patrimonio",
      "label": "Patrimônio Total Investido",
      "def": 1000000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "taxa_retirada",
      "label": "Taxa de Retirada Anual (SWR)",
      "def": 4,
      "type": "number",
      "suff": "%"
    }
  ],
  "outputs": [
    {
      "id": "retirada_mensal",
      "label": "Cota de Retirada Mensal Permitida",
      "pref": "R$",
      "isPrimary": true
    },
    {
      "id": "retirada_anual",
      "label": "Cota de Retirada Anual",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "O que é a regra dos 4%?",
      "a": "Estudo clássico americano demonstrou que retirar de 4% ao ano do patrimônio acumulado (corrigidos por inflação) confere probabilidade de 95% de que os fundos durem mais de 30 anos."
    }
  ]
},
{
  "id": "aposentadoria-preco-liberdade",
  "name": "Milestone de Liberdade Financeira",
  "description": "Descubra a idade teórica aproximada para conquistar a independência de salários fixados de terceiros.",
  "category": "aposentadoria",
  "icon": "ShieldCheck",
  "tags": [
    "independência",
    "aposentadoria",
    "metas",
    "salário"
  ],
  "type": "apo_liberdade",
  "inputs": [
    {
      "id": "gastos_mensais",
      "label": "Gasto Mensal Desejado",
      "def": 4000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "patrimonio_atual",
      "label": "Patrimônio Acumulado Hoje",
      "def": 50000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "aporte_mensal",
      "label": "Aporte de Investimento Mensal",
      "def": 1000,
      "type": "number",
      "pref": "R$"
    },
    {
      "id": "taxa_real",
      "label": "Rentabilidade Real de Ativos (a.a.)",
      "def": 6,
      "type": "number",
      "suff": "%"
    }
  ],
  "outputs": [
    {
      "id": "anos_restantes",
      "label": "Tempo até Liberdade Financeira",
      "suff": " anos",
      "isPrimary": true
    },
    {
      "id": "patrimonio_alvo",
      "label": "Patrimônio Alvo Necessário (4% SWR)",
      "pref": "R$"
    }
  ],
  "faq": [
    {
      "q": "O que define a independência?",
      "a": "Você conquista a independência financeira quando seus investimentos acumulados geram renda real suficiente para arcar com seus custos de vida sem precisar de um salário formal."
    }
  ]
},

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
  },
  {
    "id": "velocidade-media",
    "name": "Velocidade Média",
    "description": "Calcule Velocidade Média, Distância Percorrida ou Tempo com base no Teorema do Movimento Uniforme.",
    "category": "quimica_fisica",
    "icon": "Gauge",
    "tags": ["velocidade", "física", "movimento", "tempo", "distância"],
    "type": "sci_speed",
    "inputs": [
      {
        "id": "calcular",
        "label": "O que calcular?",
        "def": "velocidade",
        "type": "select",
        "op": [
          {"v": "velocidade", "l": "Velocidade Média (V)"},
          {"v": "distancia", "l": "Distância Percorrida (D)"},
          {"v": "tempo", "l": "Tempo de Deslocamento (T)"}
        ]
      },
      { "id": "distancia", "label": "Distância (km)", "def": 100, "type": "number" },
      { "id": "tempo", "label": "Tempo (horas)", "def": 2, "type": "number" },
      { "id": "velocidade", "label": "Velocidade (km/h)", "def": 50, "type": "number" }
    ],
    "outputs": [
      { "id": "resultado", "label": "Resultado Calculado", "isPrimary": true }
    ],
    "faq": [
      { "q": "Como funciona o cálculo de velocidade média?", "a": "A velocidade média é a divisão da distância pelo tempo (V = D / T). O sistema calcula qualquer uma das três variáveis se você informar as outras duas." }
    ]
  },
  {
    "id": "conversor-temperatura",
    "name": "Conversor de Temperatura",
    "description": "Converta temperaturas instantaneamente entre Celsius, Fahrenheit e Kelvin.",
    "category": "quimica_fisica",
    "icon": "Sliders",
    "tags": ["temperatura", "graus", "celsius", "fahrenheit", "kelvin", "química", "física"],
    "type": "sci_temp",
    "inputs": [
      { "id": "valor", "label": "Temperatura a Converter", "def": 25, "type": "number" },
      {
        "id": "de",
        "label": "Converter De:",
        "def": "C",
        "type": "select",
        "op": [
          {"v": "C", "l": "Celsius (°C)"},
          {"v": "F", "l": "Fahrenheit (°F)"},
          {"v": "K", "l": "Kelvin (K)"}
        ]
      },
      {
        "id": "para",
        "label": "Converter Para:",
        "def": "F",
        "type": "select",
        "op": [
          {"v": "C", "l": "Celsius (°C)"},
          {"v": "F", "l": "Fahrenheit (°F)"},
          {"v": "K", "l": "Kelvin (K)"}
        ]
      }
    ],
    "outputs": [
      { "id": "resultado", "label": "Temperatura Convertida", "isPrimary": true }
    ],
    "faq": [
      { "q": "Como converter Celsius para Fahrenheit?", "a": "Multiplica-se a temperatura em Celsius por 1,8 e soma-se 32. Exemplo: 25°C * 1,8 + 32 = 77°F." }
    ]
  },
  {
    "id": "calculadora-densidade",
    "name": "Calculadora de Densidade",
    "description": "Calcule a Densidade absoluta, a Massa ou o Volume ocupado por uma matéria física.",
    "category": "quimica_fisica",
    "icon": "Activity",
    "tags": ["densidade", "massa", "volume", "química", "física", "matéria"],
    "type": "sci_density",
    "inputs": [
      {
        "id": "calcular",
        "label": "O que calcular?",
        "def": "densidade",
        "type": "select",
        "op": [
          {"v": "densidade", "l": "Densidade (d)"},
          {"v": "massa", "l": "Massa (m)"},
          {"v": "volume", "l": "Volume (V)"}
        ]
      },
      { "id": "massa", "label": "Massa (g)", "def": 200, "type": "number" },
      { "id": "volume", "label": "Volume (cm³)", "def": 100, "type": "number" },
      { "id": "densidade", "label": "Densidade (g/cm³)", "def": 2, "type": "number" }
    ],
    "outputs": [
      { "id": "resultado", "label": "Resultado Calculado", "isPrimary": true }
    ],
    "faq": [
      { "q": "Qual a fórmula da densidade?", "a": "A fórmula clássica é Densidade = Massa / Volume (d = m / V). O sistema isola e calcula a variável desejada automaticamente." }
    ]
  },
  {
    "id": "tempo-download",
    "name": "Tempo de Download de Arquivo",
    "description": "Estime o tempo necessário para baixar um arquivo com base no tamanho dele e velocidade de sua internet.",
    "category": "tecnologia",
    "icon": "Download",
    "tags": ["download", "tempo", "internet", "velocidade", "rede", "arquivo", "megabytes", "gigabytes"],
    "type": "tech_download",
    "inputs": [
      { "id": "tamanho_arquivo", "label": "Tamanho do Arquivo", "def": 1000, "type": "number" },
      {
        "id": "unidade_tamanho",
        "label": "Unidade de Medida do Arquivo",
        "def": "MB",
        "type": "select",
        "op": [
          {"v": "MB", "l": "Megabytes (MB)"},
          {"v": "GB", "l": "Gigabytes (GB)"}
        ]
      },
      { "id": "velocidade_internet", "label": "Velocidade da Sua Internet", "def": 50, "type": "number" },
      {
        "id": "unidade_velocidade",
        "label": "Unidade da Velocidade",
        "def": "Mbps",
        "type": "select",
        "op": [
          {"v": "Mbps", "l": "Megabits por Segundo (Mbps)"},
          {"v": "Kbps", "l": "Kilobits por Segundo (Kbps)"}
        ]
      }
    ],
    "outputs": [
      { "id": "tempo_formatado", "label": "Tempo de Download Estimado", "isPrimary": true },
      { "id": "tempo_segundos", "label": "Tempo Total (segundos)", "suff": " s" }
    ],
    "faq": [
      { "q": "Por que a velocidade contratada não é a velocidade real de download?", "a": "A velocidade de internet é vendida em Megabits por segundo (Mbps), enquanto o tamanho dos arquivos é em Megabytes (MB). 1 Byte equivale a 8 Bits, logo a taxa real de transferência é 8 vezes menor." }
    ]
  },
  {
    "id": "aspect-ratio",
    "name": "Proporção de Tela & Aspect Ratio",
    "description": "Calcule dimensões proporcionais de imagens ou telas digitais e descubra a fração de aspecto ideal.",
    "category": "tecnologia",
    "icon": "Monitor",
    "tags": ["proporção", "tamanho", "aspect ratio", "tela", "imagem", "resolução", "design"],
    "type": "tech_aspect",
    "inputs": [
      { "id": "largura_original", "label": "Largura de Referência (px)", "def": 1920, "type": "number" },
      { "id": "altura_original", "label": "Altura de Referência (px)", "def": 1080, "type": "number" },
      { "id": "nova_largura", "label": "Nova Largura Desejada (px)", "def": 1280, "type": "number" }
    ],
    "outputs": [
      { "id": "proporcao", "label": "Aspect Ratio Equivalente", "isPrimary": true },
      { "id": "nova_altura", "label": "Nova Altura Proporcional", "suff": " px" }
    ],
    "faq": [
      { "q": "O que é aspect ratio?", "a": "É a proporção matemática entre a largura e a altura de uma tela ou imagem. Por exemplo, 1920x1080 é 16:9, que é a proporção widescreen padrão moderna." }
    ]
  },
  {
    "id": "conversor-bases",
    "name": "Conversor de Bases Numéricas",
    "description": "Converta números da base decimal clássica para sistemas binário, hexadecimal e octal.",
    "category": "tecnologia",
    "icon": "Sliders",
    "tags": ["base", "conversor", "binário", "hexadecimal", "octal", "decimal", "computação", "ti"],
    "type": "tech_base",
    "inputs": [
      { "id": "valor", "label": "Número Inteiro (Base Decimal)", "def": 42, "type": "number" },
      {
        "id": "base_destino",
        "label": "Converter Para a Base:",
        "def": "bin",
        "type": "select",
        "op": [
          {"v": "bin", "l": "Binário (Base 2)"},
          {"v": "hex", "l": "Hexadecimal (Base 16)"},
          {"v": "oct", "l": "Octal (Base 8)"}
        ]
      }
    ],
    "outputs": [
      { "id": "resultado", "label": "Resultado Convertido", "isPrimary": true }
    ],
    "faq": [
      { "q": "Como funciona o sistema binário?", "a": "O sistema binário utiliza apenas os dígitos 0 e 1, que representam os estados desligado e ligado em circuitos eletrônicos digitais." }
    ]
  },
  {
    "id": "calculadora-de-salario-liquido",
    "name": "Calculadora de Salário Líquido",
    "description": "Calcule seu salário líquido mensal descontando INSS, IRRF e benefícios legais da sua remuneração bruta.",
    "category": "profissoes",
    "icon": "DollarSign",
    "tags": ["salário líquido", "salário", "clt", "inss", "irrf", "desconto", "renda"],
    "type": "trab_salario_liquido",
    "inputs": [
      {
        "id": "salario_bruto",
        "label": "Salário Bruto (R$)",
        "def": 3500,
        "type": "number",
        "pref": "R$"
      },
      {
        "id": "dependentes",
        "label": "Número de Dependentes",
        "def": 0,
        "type": "number"
      },
      {
        "id": "desconto_vt",
        "label": "Desconto de Vale Transporte (%)",
        "def": 6,
        "type": "number",
        "suff": "%"
      },
      {
        "id": "outros_descontos",
        "label": "Outros Descontos (R$)",
        "def": 0,
        "type": "number",
        "pref": "R$"
      }
    ],
    "outputs": [
      {
        "id": "salario_liquido",
        "label": "Salário Líquido Mensal",
        "pref": "R$ ",
        "isPrimary": true
      },
      {
        "id": "desc_inss",
        "label": "Desconto de INSS",
        "pref": "R$ "
      },
      {
        "id": "desc_irrf",
        "label": "Desconto de IRRF",
        "pref": "R$ "
      },
      {
        "id": "total_descontos",
        "label": "Total de Descontos",
        "pref": "R$ "
      }
    ],
    "faq": [
      {
        "q": "Como é calculado o INSS?",
        "a": "O INSS é calculado de forma progressiva, aplicando-se faixas de alíquotas (7,5%, 9%, 12% e 14%) sobre cada parcela do seu salário bruto até o teto estipulado pela Previdência Social."
      },
      {
        "q": "Vale Transporte desconta do salário?",
        "a": "Sim, pela lei da CLT o empregador pode descontar até 6% do seu salário base (ou o valor total das passagens, o que for menor) referente ao benefício de vale transporte."
      }
    ]
  },
  {
    "id": "calculadora-de-seguro-desemprego",
    "name": "Calculadora Seguro Desemprego",
    "description": "Descubra o valor e a quantidade de parcelas que você tem direito ao dar entrada no Seguro Desemprego.",
    "category": "profissoes",
    "icon": "ShieldCheck",
    "tags": ["seguro desemprego", "desemprego", "demissão", "parcelas", "benefício", "trabalhador"],
    "type": "trab_seguro_desemprego",
    "inputs": [
      {
        "id": "media_salarios",
        "label": "Média dos Últimos 3 Salários (R$)",
        "def": 2500,
        "type": "number",
        "pref": "R$"
      },
      {
        "id": "meses_trabalhados",
        "label": "Meses Trabalhados no Último Emprego",
        "def": 18,
        "type": "number"
      },
      {
        "id": "solicitacoes",
        "label": "Quantas vezes já solicitou o seguro?",
        "def": 1,
        "type": "number"
      }
    ],
    "outputs": [
      {
        "id": "valor_parcela",
        "label": "Valor Estimado da Parcela",
        "pref": "R$ ",
        "isPrimary": true
      },
      {
        "id": "qtd_parcelas",
        "label": "Quantidade de Parcelas",
        "suff": " parcelas"
      },
      {
        "id": "valor_total",
        "label": "Valor Total a Receber",
        "pref": "R$ "
      }
    ],
    "faq": [
      {
        "q": "Como a média salarial influencia a parcela?",
        "a": "O governo usa a média dos seus últimos três salários registrados na carteira antes da demissão para enquadrá-lo em uma das três faixas de pagamento (sempre respeitando o teto máximo e o piso do salário mínimo)."
      },
      {
        "q": "Quantas parcelas eu vou receber?",
        "a": "A quantidade varia de 3 a 5 parcelas dependendo do tempo de vínculo empregatício e de quantas vezes você já solicitou o benefício ao longo da vida profissional."
      }
    ]
  },
  {
    "id": "calculadora-idade-gestacional",
    "name": "Calculadora Idade Gestacional",
    "description": "Calcule com precisão de semanas e dias o seu tempo de gravidez e a data provável do parto.",
    "category": "saude",
    "icon": "Baby",
    "tags": ["gravidez", "idade gestacional", "parto", "gestante", "bebê", "semanas de gravidez"],
    "type": "saude_gestacao",
    "inputs": [
      {
        "id": "dias_desde_dum",
        "label": "Dias desde a Última Menstruação (DUM)",
        "def": 140,
        "type": "number"
      },
      {
        "id": "ciclo",
        "label": "Tamanho Médio do Ciclo (dias)",
        "def": 28,
        "type": "number"
      }
    ],
    "outputs": [
      {
        "id": "idade_semanas",
        "label": "Idade Gestacional",
        "isPrimary": true
      },
      {
        "id": "dias_restantes",
        "label": "Dias Restantes até o Parto",
        "suff": " dias"
      },
      {
        "id": "trimestre",
        "label": "Trimestre Atual"
      }
    ],
    "faq": [
      {
        "q": "O que é DUM?",
        "a": "DUM significa Data da Última Menstruação. É o marco inicial padrão utilizado por obstetras no mundo inteiro para contar as semanas de gestação, mesmo que a concepção ocorra cerca de duas semanas depois."
      },
      {
        "q": "Até quantas semanas dura uma gestação normal?",
        "a": "Uma gravidez normal a termo dura cerca de 280 dias ou 40 semanas a partir da DUM. No entanto, bebês podem nascer com segurança entre 37 e 42 semanas."
      }
    ]
  },
  {
    "id": "consumo-de-combustivel-kml",
    "name": "Calculadora de Combustível",
    "description": "Estime o gasto exato e a quantidade de litros necessários para sua viagem considerando a autonomia do veículo.",
    "category": "veiculos",
    "icon": "Fuel",
    "tags": ["combustível", "gasolina", "etanol", "viagem", "consumo", "carro", "km/l", "gasto"],
    "type": "vei_consumo_combustivel",
    "inputs": [
      {
        "id": "distancia",
        "label": "Distância da Viagem (km)",
        "def": 250,
        "type": "number"
      },
      {
        "id": "consumo",
        "label": "Autonomia / Consumo do Veículo (km/L)",
        "def": 11,
        "type": "number"
      },
      {
        "id": "preco_litro",
        "label": "Preço do Combustível (R$/L)",
        "def": 5.85,
        "type": "number",
        "pref": "R$"
      }
    ],
    "outputs": [
      {
        "id": "custo_viagem",
        "label": "Custo Estimado da Viagem",
        "pref": "R$ ",
        "isPrimary": true
      },
      {
        "id": "litros_gastos",
        "label": "Combustível Necessário",
        "suff": " Litros"
      },
      {
        "id": "custo_por_km",
        "label": "Custo por Quilômetro Rodado",
        "pref": "R$ "
      }
    ],
    "faq": [
      {
        "q": "O ar-condicionado altera o consumo?",
        "a": "Sim, trafegar com ar-condicionado ligado pode reduzir a autonomia do veículo em cerca de 10% a 20%, aumentando o custo final da viagem."
      },
      {
        "q": "O que afeta a autonomia real do carro na estrada?",
        "a": "A autonomia é altamente influenciada por excesso de peso (muita bagagem/passageiros), pneus descalibrados e forma de condução (acelerações bruscas)."
      }
    ]
  },
  {
    "id": "calculadora-de-ipva",
    "name": "Calculadora de IPVA Anual",
    "description": "Saiba o valor do imposto automotivo (IPVA) cruzando a alíquota do seu estado com o valor venal do carro.",
    "category": "veiculos",
    "icon": "Car",
    "tags": ["ipva", "imposto", "carro", "moto", "veículo", "tabela fipe"],
    "type": "vei_ipva_calc",
    "inputs": [
      {
        "id": "valor_fipe",
        "label": "Valor do Veículo na Tabela FIPE (R$)",
        "def": 65000,
        "type": "number",
        "pref": "R$"
      },
      {
        "id": "aliquota",
        "label": "Alíquota do IPVA do seu Estado (%)",
        "def": 4.0,
        "type": "number",
        "suff": "%"
      }
    ],
    "outputs": [
      {
        "id": "valor_ipva",
        "label": "Valor Total do IPVA",
        "pref": "R$ ",
        "isPrimary": true
      },
      {
        "id": "parcela_ipva",
        "label": "Se parcelado (3x sem juros)",
        "pref": "3x de R$ "
      }
    ],
    "faq": [
      {
        "q": "De onde vem a alíquota do IPVA?",
        "a": "As Secretarias da Fazenda de cada estado brasileiro definem a alíquota anualmente. A taxa varia, em média, de 2% a 4% do valor venal para carros de passeio."
      },
      {
        "q": "O valor da Tabela FIPE oscila?",
        "a": "Sim. O governo costuma travar e utilizar o valor venal (FIPE) avaliado no mês de setembro do ano imediatamente anterior à cobrança do imposto para estabelecer a base de cálculo."
      }
    ]
  }
];

// PROGRAMMATIC GENERATOR OF RESTING 60 DYNAMIC CALCULATORS to complete exactly 100
// We create minimal configurations that expanding loop turns into robust, fully functional CalculatorDefs.
const DYNAMIC_SPARSE_RECORDS: any[] = [];

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

      if (raw.type === 'veiculos_carro_eletrico') {
        const bat = parseFloat(valInputs['capacidade_bateria'] || 40);
        const kwh = parseFloat(valInputs['preco_kwh'] || 0.85);
        const aut = parseFloat(valInputs['autonomia_eletrico'] || 300);
        const com = parseFloat(valInputs['consumo_combustivel'] || 10);
        const prc = parseFloat(valInputs['preco_combustivel'] || 5.80);
        const dist = parseFloat(valInputs['distancia_mensal'] || 1500);

        const costPerKmEle = (bat * kwh) / aut;
        const costPerKmCom = prc / com;

        const mensEle = costPerKmEle * dist;
        const mensCom = costPerKmCom * dist;
        const econMens = mensCom - mensEle;
        const econAnu = econMens * 12;

        results['custo_recarga_mensal'] = parseFloat(mensEle.toFixed(2));
        results['custo_combustivel_mensal'] = parseFloat(mensCom.toFixed(2));
        results['economia_mensal'] = parseFloat(Math.max(0, econMens).toFixed(2));
        results['economia_anual'] = parseFloat(Math.max(0, econAnu).toFixed(2));
      }
      else if (raw.type === 'financas_juros_abusivos') {
        const financiado = parseFloat(valInputs['valor_financiado'] || 40000);
        const taxaContratada = parseFloat(valInputs['taxa_juros_contratada'] || 2.8);
        const parcelas = parseFloat(valInputs['parcelas_totais'] || 48);
        const pmtContratada = parseFloat(valInputs['valor_parcela_paga'] || 1550);
        const taxaBacen = parseFloat(valInputs['taxa_media_bacen'] || 1.8);

        // PMT Justa (BACEN)
        const i = taxaBacen / 100;
        let pmtJusta = 0;
        if (i > 0) {
          pmtJusta = financiado * (i * Math.pow(1 + i, parcelas)) / (Math.pow(1 + i, parcelas) - 1);
        } else {
          pmtJusta = financiado / parcelas;
        }

        const totalReal = pmtContratada * parcelas;
        const totalJusto = pmtJusta * parcelas;
        const difMensal = pmtContratada - pmtJusta;
        const difTotal = totalReal - totalJusto;

        let status = 'Juros dentro da média do mercado (Seguro)';
        if (taxaContratada > taxaBacen * 1.5) {
          status = '🚨 Risco Alto de Abusividade (Taxa > 50% da Média)';
        } else if (taxaContratada > taxaBacen * 1.2) {
          status = '⚠️ Risco Moderado de Abusividade (Taxa > 20% da Média)';
        }

        results['total_pago_real'] = parseFloat(totalReal.toFixed(2));
        results['total_pago_justo'] = parseFloat(totalJusto.toFixed(2));
        results['valor_parcela_justa'] = parseFloat(pmtJusta.toFixed(2));
        results['diferenca_mensal'] = parseFloat(Math.max(0, difMensal).toFixed(2));
        results['diferenca_total'] = parseFloat(Math.max(0, difTotal).toFixed(2));
        results['status_abusivo'] = status;
      }
      else if (raw.type === 'juridico_cripto_imposto') {
        const vendas = parseFloat(valInputs['valor_vendas_mes'] || 40000);
        const aquisicao = parseFloat(valInputs['custo_aquisicao'] || 25000);
        const custos = parseFloat(valInputs['outros_custos'] || 200);

        const lucro = vendas - aquisicao - custos;
        const isento = vendas <= 35000;

        let aliquota = 0;
        let imposto = 0;
        let status = 'Isento de IR (Vendas mensais até R$ 35 mil)';

        if (!isento) {
          status = 'Tributável via GCAP (Vendas mensais acima de R$ 35 mil)';
          if (lucro > 0) {
            aliquota = 15; // default GCAP rate for gains up to 5M
            imposto = lucro * 0.15;
          }
        }

        results['lucro_liquido'] = parseFloat(Math.max(0, lucro).toFixed(2));
        results['imposto_devido'] = parseFloat(Math.max(0, imposto).toFixed(2));
        results['aliquota_ir'] = aliquota;
        results['isento_status'] = status;
      }
      else if (raw.type === 'pets_idade_cao') {
        const porte = valInputs['porte'] || 'medio';
        const idadeReal = parseFloat(valInputs['idade_anos'] || 0);
        let humana = 0;
        if (idadeReal <= 1) {
          humana = idadeReal * 15;
        } else if (idadeReal === 2) {
          humana = 24;
        } else {
          let factor = 5;
          if (porte === 'pequeno') factor = 4;
          else if (porte === 'medio') factor = 5;
          else if (porte === 'grande') factor = 6;
          else if (porte === 'gigante') factor = 7;
          humana = 24 + (idadeReal - 2) * factor;
        }
        results['idade_humana'] = Math.round(humana);
      }
      else if (raw.type === 'pets_idade_gato') {
        const idadeReal = parseFloat(valInputs['idade_anos'] || 0);
        let humana = 0;
        if (idadeReal <= 1) {
          humana = idadeReal * 15;
        } else if (idadeReal === 2) {
          humana = 24;
        } else {
          humana = 24 + (idadeReal - 2) * 4;
        }
        results['idade_humana'] = Math.round(humana);
      }
      else if (raw.type === 'pets_racao_cao') {
        const peso = parseFloat(valInputs['peso'] || 0);
        const atividade = valInputs['nivel_atividade'] || 'moderado';
        const estagio = valInputs['estagio_vida'] || 'adulto';
        const rer = 70 * Math.pow(peso, 0.75);
        let k = 1.6;
        if (estagio === 'filhote') {
          k = 2.5;
        } else if (estagio === 'senior_castrado') {
          k = 1.0;
        } else {
          if (atividade === 'baixo') k = 1.2;
          else if (atividade === 'moderado') k = 1.6;
          else if (atividade === 'ativo') k = 2.0;
        }
        const kcal = rer * k;
        results['calorias_diarias'] = Math.round(kcal);
        results['quantidade_diaria'] = Math.round(kcal / 3.5);
      }
      else if (raw.type === 'pets_agua') {
        const especie = valInputs['especie'] || 'cao';
        const peso = parseFloat(valInputs['peso'] || 0);
        const clima = valInputs['clima'] || 'ameno';
        const base = especie === 'cao' ? 60 : 50;
        let agua = peso * base;
        if (clima === 'quente') agua *= 1.3;
        results['agua_diaria'] = Math.round(agua);
      }
      else if (raw.type === 'saude_agua_humana') {
        const peso = parseFloat(valInputs['peso'] || 0);
        const atividade = valInputs['atividade'] || 'sedentario';
        const clima = valInputs['clima'] || 'ameno';
        const base = peso * 35;
        let addAct = 0;
        if (atividade === 'moderado') addAct = 500;
        else if (atividade === 'intenso') addAct = 1000;
        let addCli = 0;
        if (clima === 'frio') addCli = -200;
        else if (clima === 'quente') addCli = 500;
        const totalMl = Math.max(1000, base + addAct + addCli);
        results['agua_diaria'] = parseFloat((totalMl / 1000).toFixed(2));
        results['copos_agua'] = Math.ceil(totalMl / 250);
      }
      else if (raw.type === 'saude_exercicio_calorias') {
        const peso = parseFloat(valInputs['peso'] || 0);
        const tempo = parseFloat(valInputs['tempo'] || 0);
        const atividade = valInputs['atividade'] || 'caminhada';
        let met = 3.8;
        if (atividade === 'corrida') met = 9.8;
        else if (atividade === 'ciclismo') met = 7.5;
        else if (atividade === 'natacao') met = 6.0;
        else if (atividade === 'musculacao') met = 3.5;
        const kcal = (met * 3.5 * peso * tempo) / 200;
        results['calorias_queimadas'] = Math.round(kcal);
      }
      else if (raw.type === 'financas_ferias_pj') {
        const clt = parseFloat(valInputs['salario_clt'] || 0);
        const ben = parseFloat(valInputs['beneficios'] || 0);
        const hrs = parseFloat(valInputs['horas_mes'] || 168);
        const custoCltAnual = (clt * 13.33) + (clt * 0.08 * 12) + (ben * 12) + (clt * 0.05 * 12);
        const grossPjAnual = (custoCltAnual + 1800) / 0.94;
        results['custo_anual_clt'] = parseFloat(custoCltAnual.toFixed(2));
        results['faturamento_pj_equivalente'] = parseFloat((grossPjAnual / 12).toFixed(2));
        results['valor_hora_pj_minimo'] = parseFloat((grossPjAnual / (12 * hrs)).toFixed(2));
      }
      else if (raw.type === 'simple_tax') {
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

      
      else if (raw.type === 'mat_porcentagem') {
        const valor = parseFloat(valInputs['valor'] || 0);
        const percentual = parseFloat(valInputs['percentual'] || 0);
        const operacao = valInputs['operacao'] || 'calcular';
        let res = 0;
        let diff = valor * (percentual / 100);
        if (operacao === 'calcular') {
          res = diff;
        } else if (operacao === 'adicionar') {
          res = valor + diff;
        } else if (operacao === 'descontar') {
          res = valor - diff;
        }
        results['resultado'] = parseFloat(res.toFixed(2));
        results['diferenca'] = parseFloat(diff.toFixed(2));
      }
      else if (raw.type === 'mat_media_ponderada') {
        const n1 = parseFloat(valInputs['n1'] || 0);
        const p1 = parseFloat(valInputs['p1'] || 1);
        const n2 = parseFloat(valInputs['n2'] || 0);
        const p2 = parseFloat(valInputs['p2'] || 1);
        const n3 = parseFloat(valInputs['n3'] || 0);
        const p3 = parseFloat(valInputs['p3'] || 1);
        const totalPesos = p1 + p2 + p3;
        results['media'] = parseFloat(((n1*p1 + n2*p2 + n3*p3) / (totalPesos || 1)).toFixed(2));
      }
      else if (raw.type === 'mat_pitagoras') {
        const a = parseFloat(valInputs['lado_a'] || 0);
        const b = parseFloat(valInputs['lado_b'] || 0);
        const c = parseFloat(valInputs['lado_c'] || 0);
        const calc = valInputs['calcular'] || 'hipotenusa';
        let res = 0;
        if (calc === 'hipotenusa') {
          res = Math.sqrt(a*a + b*b);
        } else if (calc === 'cateto_a') {
          res = Math.sqrt(Math.max(0, c*c - b*b));
        } else if (calc === 'cateto_b') {
          res = Math.sqrt(Math.max(0, c*c - a*a));
        }
        results['resultado'] = parseFloat(res.toFixed(4));
      }
      else if (raw.type === 'mat_area_formas') {
        const forma = valInputs['forma'] || 'retangulo';
        const dim1 = parseFloat(valInputs['base_raio'] || 0);
        const dim2 = parseFloat(valInputs['altura'] || 0);
        let area = 0;
        let perimetro = 0;
        if (forma === 'retangulo') {
          area = dim1 * dim2;
          perimetro = 2 * (dim1 + dim2);
        } else if (forma === 'circulo') {
          area = Math.PI * dim1 * dim1;
          perimetro = 2 * Math.PI * dim1;
        } else if (forma === 'triangulo') {
          area = (dim1 * dim2) / 2;
          perimetro = dim1 + dim2 + Math.sqrt(dim1*dim1 + dim2*dim2);
        }
        results['area'] = parseFloat(area.toFixed(2));
        results['perimetro'] = parseFloat(perimetro.toFixed(2));
      }
      else if (raw.type === 'mat_potencia_raiz') {
        const base = parseFloat(valInputs['base'] || 0);
        const exp = parseFloat(valInputs['expoente'] || 0);
        results['potencia'] = parseFloat(Math.pow(base, exp).toFixed(2));
        results['raiz_quadrada'] = parseFloat(Math.sqrt(Math.max(0, base)).toFixed(4));
      }
      else if (raw.type === 'mat_fatorial') {
        const num = Math.min(170, Math.max(0, Math.floor(parseFloat(valInputs['numero'] || 0))));
        let f = 1;
        for (let i = 2; i <= num; i++) f *= i;
        results['resultado'] = f;
      }
      else if (raw.type === 'mat_sociedade') {
        const total = parseFloat(valInputs['investimento_total'] || 1);
        const lucro = parseFloat(valInputs['lucro_total'] || 0);
        const socio = parseFloat(valInputs['investimento_socio'] || 0);
        const part = (socio / total) * 100;
        results['participacao_socio'] = parseFloat(part.toFixed(2));
        results['lucro_socio'] = parseFloat((lucro * (part / 100)).toFixed(2));
      }
      else if (raw.type === 'mat_bhaskara') {
        const a = parseFloat(valInputs['a'] || 1);
        const b = parseFloat(valInputs['b'] || 0);
        const c = parseFloat(valInputs['c'] || 0);
        if (a === 0) {
          results['tipo'] = 'Coeficiente A não pode ser zero';
          results['delta'] = 0;
          results['x1'] = 'Erro';
          results['x2'] = 'Erro';
        } else {
          const delta = b*b - 4*a*c;
          results['delta'] = parseFloat(delta.toFixed(2));
          if (delta < 0) {
            results['tipo'] = 'Sem raízes reais (Delta < 0)';
            results['x1'] = 'N/A';
            results['x2'] = 'N/A';
          } else if (delta === 0) {
            results['tipo'] = 'Uma raiz real única (Delta = 0)';
            const x = -b / (2*a);
            results['x1'] = parseFloat(x.toFixed(4));
            results['x2'] = parseFloat(x.toFixed(4));
          } else {
            results['tipo'] = 'Duas raízes reais distintas';
            const x1 = (-b + Math.sqrt(delta)) / (2*a);
            const x2 = (-b - Math.sqrt(delta)) / (2*a);
            results['x1'] = parseFloat(x1.toFixed(4));
            results['x2'] = parseFloat(x2.toFixed(4));
          }
        }
      }

      else if (raw.type === 'imob_price_sac') {
        const pv = parseFloat(valInputs['valor_financiado'] || 0);
        const rateY = parseFloat(valInputs['taxa_anual'] || 0);
        const n = parseFloat(valInputs['meses'] || 1);
        const i = (rateY / 100) / 12;

        let pmtPrice = 0;
        if (i > 0) {
          pmtPrice = pv * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
        } else {
          pmtPrice = pv / n;
        }

        const totalP = pmtPrice * n;
        const jurosP = totalP - pv;

        const amortSAC = pv / n;
        const p1SAC = amortSAC + (pv * i);
        const pnSAC = amortSAC + (amortSAC * i);
        const jurosSAC = ((pv * i) + (amortSAC * i)) * n / 2;
        const totalS = pv + jurosSAC;

        results['total_price'] = parseFloat(totalP.toFixed(2));
        results['total_sac'] = parseFloat(totalS.toFixed(2));
        results['juros_price'] = parseFloat(jurosP.toFixed(2));
        results['juros_sac'] = parseFloat(jurosSAC.toFixed(2));
        results['primeira_parcela_sac'] = parseFloat(p1SAC.toFixed(2));
        results['ultima_parcela_sac'] = parseFloat(pnSAC.toFixed(2));
        results['parcela_price'] = parseFloat(pmtPrice.toFixed(2));
      }
      else if (raw.type === 'imob_reajuste') {
        const aluguel = parseFloat(valInputs['aluguel_atual'] || 0);
        const taxa = parseFloat(valInputs['taxa_reajuste'] || 0);
        const aumento = aluguel * (taxa / 100);
        results['novo_aluguel'] = parseFloat((aluguel + aumento).toFixed(2));
        results['valor_aumento'] = parseFloat(aumento.toFixed(2));
      }
      else if (raw.type === 'imob_itbi') {
        const val = parseFloat(valInputs['valor_imovel'] || 0);
        const itbi = parseFloat(valInputs['aliquota_itbi'] || 0);
        const cart = parseFloat(valInputs['cartorio_taxa'] || 0);
        const vitbi = val * (itbi / 100);
        const vcart = val * (cart / 100);
        results['itbi_pago'] = parseFloat(vitbi.toFixed(2));
        results['cartorio_pago'] = parseFloat(vcart.toFixed(2));
        results['total_documentacao'] = parseFloat((vitbi + vcart).toFixed(2));
      }
      else if (raw.type === 'imob_cap_rate') {
        const val = parseFloat(valInputs['valor_imovel'] || 1);
        const aluguel = parseFloat(valInputs['aluguel_mensal'] || 0);
        const desp = parseFloat(valInputs['despesas_mensais'] || 0);
        const receitaAnual = (aluguel - desp) * 12;
        results['rendimento_anual'] = parseFloat(receitaAnual.toFixed(2));
        results['cap_rate'] = parseFloat(((receitaAnual / val) * 100).toFixed(2));
      }
      else if (raw.type === 'imob_amortizacao') {
        const saldo = parseFloat(valInputs['saldo_devedor'] || 0);
        const jurosY = parseFloat(valInputs['taxa_juros'] || 0);
        const prazo = parseFloat(valInputs['meses_restantes'] || 1);
        const aporte = parseFloat(valInputs['valor_amortizar'] || 0);

        const i = (jurosY / 100) / 12;
        let pmt = 0;
        if (i > 0) {
          pmt = saldo * (i * Math.pow(1 + i, prazo)) / (Math.pow(1 + i, prazo) - 1);
        } else {
          pmt = saldo / prazo;
        }

        const totalOriginal = pmt * prazo;
        const novoSaldo = Math.max(0, saldo - aporte);
        
        let novoPrazo = 0;
        if (i > 0 && pmt > novoSaldo * i) {
          novoPrazo = Math.log(pmt / (pmt - (novoSaldo * i))) / Math.log(1 + i);
        } else {
          novoPrazo = pmt > 0 ? novoSaldo / pmt : 0;
        }

        const totalNovo = (pmt * novoPrazo) + aporte;
        results['economia_juros'] = parseFloat(Math.max(0, totalOriginal - totalNovo).toFixed(2));
        results['novas_parcelas'] = Math.round(novoPrazo);
      }
      else if (raw.type === 'imob_alugar_comprar') {
        const preco = parseFloat(valInputs['valor_imovel'] || 0);
        const aluguel = parseFloat(valInputs['aluguel'] || 0);
        const ent = parseFloat(valInputs['entrada'] || 0);
        const txFin = parseFloat(valInputs['taxa_financiamento'] || 0);
        const txInv = parseFloat(valInputs['rendimento_inv'] || 0);

        const meses = 120;
        const iFin = (txFin / 100) / 12;
        const iInv = (txInv / 100) / 12;
        const saldoF = Math.max(0, preco - ent);

        let pmt = 0;
        if (iFin > 0) {
          pmt = saldoF * (iFin * Math.pow(1 + iFin, meses)) / (Math.pow(1 + iFin, meses) - 1);
        } else {
          pmt = saldoF / meses;
        }

        const imovelF = preco * Math.pow(1.04, 10);
        let capAlugar = ent * Math.pow(1 + iInv, meses);
        const diff = pmt - aluguel;
        if (diff > 0 && iInv > 0) {
          capAlugar += diff * (Math.pow(1 + iInv, meses) - 1) / iInv;
        }

        results['patrimonio_comprar'] = parseFloat(imovelF.toFixed(2));
        results['patrimonio_alugar'] = parseFloat(capAlugar.toFixed(2));
        results['vantagem'] = capAlugar > imovelF ? 'Alugar e Investir Diferença' : 'Comprar o Imóvel';
      }
      else if (raw.type === 'imob_cet') {
        const val = parseFloat(valInputs['valor_emprestimo'] || 0);
        const taxaNom = parseFloat(valInputs['taxa_juros'] || 0);
        const taxaE = parseFloat(valInputs['seguros_taxas'] || 0);
        const prazo = parseFloat(valInputs['parcelas'] || 1);

        const liq = val - taxaE;
        const i = taxaNom / 100;
        let pmt = 0;
        if (i > 0) {
          pmt = val * (i * Math.pow(1 + i, prazo)) / (Math.pow(1 + i, prazo) - 1);
        } else {
          pmt = val / prazo;
        }

        let cetM = i * (val / (liq || 1));
        let cetA = (Math.pow(1 + cetM, 12) - 1) * 100;
        results['valor_parcela'] = parseFloat(pmt.toFixed(2));
        results['cet_mensal'] = parseFloat((cetM * 100).toFixed(2));
        results['cet_anual'] = parseFloat(cetA.toFixed(2));
      }
      else if (raw.type === 'imob_m2') {
        const preco = parseFloat(valInputs['preco'] || 0);
        const area = parseFloat(valInputs['area'] || 1);
        results['valor_m2'] = parseFloat((preco / area).toFixed(2));
      }
      else if (raw.type === 'imob_rateio') {
        const total = parseFloat(valInputs['despesa_total'] || 0);
        const frac = parseFloat(valInputs['fracao_ideal'] || 0);
        results['valor_rateio'] = parseFloat((total * (frac / 100)).toFixed(2));
      }
      else if (raw.type === 'imob_iptu') {
        const iptu = parseFloat(valInputs['iptu_anual'] || 0);
        const meses = parseFloat(valInputs['meses_uso'] || 0);
        const vv = (iptu / 12) * meses;
        results['valor_proporcional'] = parseFloat(vv.toFixed(2));
        results['valor_comprador'] = parseFloat((iptu - vv).toFixed(2));
      }

      else if (raw.type === 'vei_flex') {
        const alcool = parseFloat(valInputs['preco_alcool'] || 0);
        const gasolina = parseFloat(valInputs['preco_gasolina'] || 1);
        const proporcao = (alcool / (gasolina || 1)) * 100;
        results['proporcao'] = parseFloat(proporcao.toFixed(1));
        results['vantagem'] = proporcao <= 70 ? 'Abasteça com ÁLCOOL (Etanol)' : 'Abasteça com GASOLINA';
      }
      else if (raw.type === 'vei_consumption') {
        const dist = parseFloat(valInputs['distancia'] || 0);
        const cons = parseFloat(valInputs['consumo'] || 1);
        const preco = parseFloat(valInputs['preco'] || 0);
        const L = dist / (cons || 1);
        results['litros_necessarios'] = parseFloat(L.toFixed(2));
        results['custo_total'] = parseFloat((L * preco).toFixed(2));
      }
      else if (raw.type === 'vei_ipva') {
        const fipe = parseFloat(valInputs['valor_fipe'] || 0);
        const aliq = parseFloat(valInputs['aliquota'] || 4.0);
        results['ipva_devido'] = parseFloat((fipe * (aliq / 100)).toFixed(2));
      }
      else if (raw.type === 'vei_depreciation') {
        const val = parseFloat(valInputs['valor_atual'] || 0);
        const yrs = parseFloat(valInputs['anos'] || 0);
        const cat = valInputs['categoria'] || 'popular';
        let rate = 0.10;
        if (cat === 'popular') rate = 0.08;
        else if (cat === 'suv') rate = 0.11;
        else if (cat === 'importado') rate = 0.15;
        const future = val * Math.pow(1 - rate, yrs);
        results['valor_final'] = parseFloat(future.toFixed(2));
        results['perda_total'] = parseFloat(Math.max(0, val - future).toFixed(2));
      }
      else if (raw.type === 'vei_km_reimbursement') {
        const km = parseFloat(valInputs['km_rodado'] || 0);
        const rate = parseFloat(valInputs['reembolso_km'] || 0);
        results['reembolso_total'] = parseFloat((km * rate).toFixed(2));
      }
      else if (raw.type === 'vei_finance') {
        const pv = parseFloat(valInputs['valor_veiculo'] || 0);
        const ent = parseFloat(valInputs['entrada'] || 0);
        const rateM = parseFloat(valInputs['taxa_mensal'] || 0);
        const n = parseFloat(valInputs['parcelas'] || 1);
        const financed = Math.max(0, pv - ent);
        const i = rateM / 100;
        let pmt = 0;
        if (i > 0) {
          pmt = financed * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
        } else {
          pmt = financed / n;
        }
        const total = pmt * n;
        results['valor_parcela'] = parseFloat(pmt.toFixed(2));
        results['total_pago'] = parseFloat((total + ent).toFixed(2));
        results['juros_totais'] = parseFloat(Math.max(0, total - financed).toFixed(2));
      }
      else if (raw.type === 'vei_move_brasil') {
        const pv = parseFloat(valInputs['valor_veiculo'] || 0);
        const ent = parseFloat(valInputs['entrada'] || 0);
        const gen = valInputs['genero'] || 'mulher';
        const n = parseFloat(valInputs['prazo'] || 48);
        const financed = Math.max(0, pv - ent);
        const rateM = gen === 'mulher' ? 0.91 : 0.99;
        const i = rateM / 100;
        let pmt = 0;
        if (i > 0) {
          pmt = financed * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
        } else {
          pmt = financed / n;
        }
        const rateMkt = 1.67 / 100;
        let pmtMkt = 0;
        if (rateMkt > 0) {
          pmtMkt = financed * (rateMkt * Math.pow(1 + rateMkt, n)) / (Math.pow(1 + rateMkt, n) - 1);
        } else {
          pmtMkt = financed / n;
        }
        const total = pmt * n;
        const totalMkt = pmtMkt * n;
        results['valor_parcela'] = parseFloat(pmt.toFixed(2));
        results['total_pago'] = parseFloat((total + ent).toFixed(2));
        results['juros_totais'] = parseFloat(Math.max(0, total - financed).toFixed(2));
        results['economia_juros'] = parseFloat(Math.max(0, totalMkt - total).toFixed(2));
      }
      else if (raw.type === 'vei_insurance') {
        const val = parseFloat(valInputs['valor_veiculo'] || 0);
        const perf = valInputs['idade_perfil'] || 'adulto';
        const gar = valInputs['garagem'] || 'sim';
        let base = 0.04;
        if (perf === 'jovem') base += 0.03;
        if (gar === 'nao') base += 0.01;
        const premium = val * base;
        results['seguro_estimado'] = parseFloat(premium.toFixed(2));
        results['franquia_estimada'] = parseFloat((premium * 1.5).toFixed(2));
      }
      else if (raw.type === 'vei_travel_time') {
        const dist = parseFloat(valInputs['distancia'] || 0);
        const speed = parseFloat(valInputs['velocidade'] || 1);
        const stops = parseFloat(valInputs['paradas'] || 0);
        const decHrs = dist / (speed || 1) + (stops / 60);
        results['tempo_total_horas'] = parseFloat(decHrs.toFixed(2));
      }
      else if (raw.type === 'vei_toll_split') {
        const fuel = parseFloat(valInputs['custo_combustivel'] || 0);
        const toll = parseFloat(valInputs['custo_pedagio'] || 0);
        const p = parseFloat(valInputs['passageiros'] || 1);
        const total = fuel + toll;
        results['custo_total'] = parseFloat(total.toFixed(2));
        results['custo_por_pessoa'] = parseFloat((total / (p || 1)).toFixed(2));
      }
      else if (raw.type === 'vei_maintenance') {
        const km = parseFloat(valInputs['quilometragem'] || 0);
        const months = parseFloat(valInputs['tempo_revisao'] || 12);
        let base = 350;
        let desc = 'Revisão básica (Troca de óleo + Filtros)';
        if (km >= 60000 || months >= 36) {
          base = 1200;
          desc = 'Revisão completa (Óleo, filtros, correia dentada, pastilhas e alinhamento)';
        } else if (km >= 30000 || months >= 18) {
          base = 650;
          desc = 'Revisão média (Óleo, filtros, velas e alinhamento)';
        }
        results['custo_preventiva'] = base;
        results['itens_troca'] = desc;
      }

      else if (raw.type === 'est_desvio_padrao') {
        const str = valInputs['valores'] || '';
        const arr = str.split(',').map((x) => parseFloat(x.trim())).filter((x) => !isNaN(x));
        const n = arr.length;
        if (n <= 1) {
          results['media'] = n === 1 ? arr[0] : 0;
          results['variancia'] = 0;
          results['desvio_padrao'] = 0;
        } else {
          const sum = arr.reduce((a, b) => a + b, 0);
          const media = sum / n;
          const sumSq = arr.reduce((a, b) => a + Math.pow(b - media, 2), 0);
          const vari = sumSq / (n - 1);
          results['media'] = parseFloat(media.toFixed(2));
          results['variancia'] = parseFloat(vari.toFixed(4));
          results['desvio_padrao'] = parseFloat(Math.sqrt(vari).toFixed(4));
        }
      }
      else if (raw.type === 'est_margem_erro') {
        const n = parseFloat(valInputs['tamanho_amostra'] || 1);
        const pop = parseFloat(valInputs['populacao'] || 0);
        const conf = parseFloat(valInputs['nivel_confianca'] || 95);

        const Z = conf === 90 ? 1.645 : conf === 99 ? 2.576 : 1.96;
        const p = 0.5;
        const se = Math.sqrt((p * (1 - p)) / n);
        const fpc = pop > 0 ? Math.sqrt((pop - n) / (pop - 1)) : 1;
        const err = Z * se * fpc * 100;
        results['margem_erro'] = parseFloat(err.toFixed(2));
      }
      else if (raw.type === 'est_combinatoria') {
        const n = Math.max(0, Math.floor(parseFloat(valInputs['n'] || 0)));
        const p = Math.max(0, Math.floor(parseFloat(valInputs['p'] || 0)));
        const fact = (x) => {
          let r = 1;
          for (let i = 2; i <= x; i++) r *= i;
          return r;
        };
        if (n >= p) {
          results['arranjos'] = fact(n) / fact(n - p);
          results['combinacoes'] = fact(n) / (fact(p) * fact(n - p));
        } else {
          results['arranjos'] = 0;
          results['combinacoes'] = 0;
        }
      }
      else if (raw.type === 'est_probabilidade') {
        const fav = parseFloat(valInputs['favoraveis'] || 0);
        const poss = parseFloat(valInputs['possiveis'] || 1);
        const prob = (fav / poss) * 100;
        results['probabilidade'] = parseFloat(prob.toFixed(2));
        results['chances'] = fav > 0 ? '1 em ' + parseFloat((poss / fav).toFixed(1)) : '0%';
      }
      else if (raw.type === 'est_churn') {
        const act = parseFloat(valInputs['ativos_inicio'] || 1);
        const canc = parseFloat(valInputs['cancelados'] || 0);
        results['churn_rate'] = parseFloat(((canc / act) * 100).toFixed(2));
      }
      else if (raw.type === 'est_crescimento') {
        const prev = parseFloat(valInputs['valor_anterior'] || 1);
        const curr = parseFloat(valInputs['valor_actual'] || valInputs['valor_atual'] || 0);
        const diff = curr - prev;
        results['diferenca'] = parseFloat(diff.toFixed(2));
        results['crescimento'] = parseFloat(((diff / prev) * 100).toFixed(2));
      }
      else if (raw.type === 'est_funil') {
        const vis = parseFloat(valInputs['visitantes'] || 1);
        const lds = parseFloat(valInputs['leads'] || 0);
        const vts = parseFloat(valInputs['vendas'] || 0);
        results['conversao_total'] = parseFloat(((vts / vis) * 100).toFixed(2));
        results['taxa_lead'] = parseFloat(((lds / vis) * 100).toFixed(2));
        results['taxa_venda'] = parseFloat(((vts / (lds || 1)) * 100).toFixed(2));
      }
      else if (raw.type === 'est_mediana_moda') {
        const str = valInputs['valores'] || '';
        const arr = str.split(',').map((x) => parseFloat(x.trim())).filter((x) => !isNaN(x)).sort((a, b) => a - b);
        const n = arr.length;
        if (n === 0) {
          results['media'] = 0;
          results['mediana'] = 0;
          results['moda'] = 'N/A';
        } else {
          const sum = arr.reduce((a, b) => a + b, 0);
          results['media'] = parseFloat((sum / n).toFixed(2));

          if (n % 2 !== 0) {
            results['mediana'] = arr[Math.floor(n / 2)];
          } else {
            results['mediana'] = (arr[n / 2 - 1] + arr[n / 2]) / 2;
          }

          const freqs = {};
          let maxF = 0;
          arr.forEach((x) => {
            freqs[x] = (freqs[x] || 0) + 1;
            if (freqs[x] > maxF) maxF = freqs[x];
          });
          const modes = Object.keys(freqs).filter((k) => freqs[parseFloat(k)] === maxF);
          results['moda'] = maxF > 1 ? modes.join(', ') : 'Nenhum (Amodal)';
        }
      }
      else if (raw.type === 'est_confianca') {
        const avg = parseFloat(valInputs['media_amostral'] || 0);
        const std = parseFloat(valInputs['desvio_padrao'] || 0);
        const n = parseFloat(valInputs['tamanho_amostra'] || 1);
        const conf = parseFloat(valInputs['nivel_confianca'] || 95);

        const Z = conf === 90 ? 1.645 : conf === 99 ? 2.576 : 1.96;
        const err = Z * (std / Math.sqrt(n));
        results['margem_erro'] = parseFloat(err.toFixed(4));
        results['limite_inferior'] = parseFloat((avg - err).toFixed(4));
        results['limite_superior'] = parseFloat((avg + err).toFixed(4));
      }
      else if (raw.type === 'est_cac_ltv') {
        const cost = parseFloat(valInputs['custo_marketing'] || 0);
        const newC = parseFloat(valInputs['clientes_novos'] || 1);
        const arpu = parseFloat(valInputs['ticket_medio'] || 0);
        const churn = parseFloat(valInputs['churn_rate'] || 1);

        const cac = cost / newC;
        const ltv = arpu / (churn / 100);
        results['cac'] = parseFloat(cac.toFixed(2));
        results['ltv'] = parseFloat(ltv.toFixed(2));
        results['proporcao_ltv_cac'] = parseFloat((ltv / (cac || 1)).toFixed(2));
      }

      else if (raw.type === 'jur_mora') {
        const principal = parseFloat(valInputs['valor_original'] || 0);
        const dias = parseFloat(valInputs['dias_atraso'] || 0);
        const rateM = parseFloat(valInputs['juros_mensal'] || 0);
        const rateMult = parseFloat(valInputs['multa_atraso'] || 0);

        const vMulta = principal * (rateMult / 100);
        const dailyJ = (rateM / 30) / 100;
        const vJuros = principal * dailyJ * dias;

        results['valor_multa'] = parseFloat(vMulta.toFixed(2));
        results['valor_juros'] = parseFloat(vJuros.toFixed(2));
        results['valor_total'] = parseFloat((principal + vMulta + vJuros).toFixed(2));
      }
      else if (raw.type === 'jur_correcao') {
        const val = parseFloat(valInputs['valor_original'] || 0);
        const rate = parseFloat(valInputs['taxa_correcao'] || 0);
        const gain = val * (rate / 100);
        results['valor_corrigido'] = parseFloat((val + gain).toFixed(2));
        results['valor_ganho'] = parseFloat(gain.toFixed(2));
      }
      else if (raw.type === 'jur_custas') {
        const val = parseFloat(valInputs['valor_causa'] || 0);
        const state = valInputs['estado'] || 'sp';
        let dist = 0;
        let mand = 0;
        if (state === 'sp') {
          dist = Math.max(162.10, val * 0.01);
          mand = 25.00;
        } else if (state === 'rj') {
          dist = Math.max(200.00, val * 0.02);
          mand = 30.00;
        } else if (state === 'mg') {
          dist = Math.max(150.00, val * 0.015);
          mand = 20.00;
        } else {
          dist = val * 0.015;
          mand = 22.00;
        }
        results['taxa_distribuicao'] = parseFloat(dist.toFixed(2));
        results['taxa_mandato'] = parseFloat(mand.toFixed(2));
        results['custas_totais'] = parseFloat((dist + mand).toFixed(2));
      }
      else if (raw.type === 'jur_pensao') {
        const sal = parseFloat(valInputs['salario_liquido'] || 0);
        const children = parseFloat(valInputs['filhos'] || 1);
        const type = valInputs['tipo'] || 'empregado';

        let pensao = 0;
        let pct = 0;
        if (type === 'empregado') {
          pct = children === 1 ? 20 : children === 2 ? 30 : 40;
          pensao = sal * (pct / 100);
        } else {
          const minWage = 1621.00;
          pct = children === 1 ? 30 : children === 2 ? 50 : 70;
          pensao = minWage * (pct / 100);
          pct = parseFloat(((pensao / (sal || 1)) * 100).toFixed(1));
        }

        results['valor_pensao'] = parseFloat(pensao.toFixed(2));
        results['porcentagem_salario'] = pct;
      }
      else if (raw.type === 'jur_ganho_capital') {
        const sell = parseFloat(valInputs['valor_venda'] || 0);
        const buy = parseFloat(valInputs['valor_compra'] || 0);
        const isenc = valInputs['isencao_unico'] || 'nao';

        const gain = sell - buy;
        let tax = 0;
        let pct = 15;
        if (isenc === 'sim' && sell <= 440000) {
          tax = 0;
          pct = 0;
        } else if (gain > 0) {
          tax = gain * 0.15;
        }

        results['ganho_bruto'] = parseFloat(Math.max(0, gain).toFixed(2));
        results['aliquota_ir'] = pct;
        results['imposto_devido'] = parseFloat(tax.toFixed(2));
      }
      else if (raw.type === 'jur_divisao_bens') {
        const total = parseFloat(valInputs['bens_comuns'] || 0);
        const regime = valInputs['regime'] || 'parcial';
        let share = 0;
        if (regime !== 'separacao') {
          share = total / 2;
        }
        results['valor_meacao'] = parseFloat(share.toFixed(2));
        results['valor_conjuge'] = parseFloat(share.toFixed(2));
      }
      else if (raw.type === 'jur_inventario') {
        const val = parseFloat(valInputs['patrimonio_liquido'] || 0);
        const state = valInputs['itcmd_uf'] || 'sp';
        const heirs = parseFloat(valInputs['herdeiros'] || 1);

        const rate = state === 'rj' ? 4.5 : state === 'mg' ? 5.0 : 4.0;
        const tax = val * (rate / 100);
        const net = val - tax;

        results['imposto_itcmd'] = parseFloat(tax.toFixed(2));
        results['liquido_partilhar'] = parseFloat(net.toFixed(2));
        results['valor_por_herdeiro'] = parseFloat((net / heirs).toFixed(2));
      }
      else if (raw.type === 'jur_simples_nacional') {
        const rev = parseFloat(valInputs['receita_12m'] || 0);
        const mes = parseFloat(valInputs['faturamento_mes'] || 0);
        const anexo = valInputs['anexo'] || 'anexo1';

        let rNom = 0.04;
        let ded = 0;
        if (anexo === 'anexo1') {
          if (rev <= 180000) { rNom = 0.04; ded = 0; }
          else if (rev <= 360000) { rNom = 0.073; ded = 5940; }
          else if (rev <= 720000) { rNom = 0.095; ded = 13860; }
          else { rNom = 0.107; ded = 22500; }
        } else if (anexo === 'anexo2') {
          if (rev <= 180000) { rNom = 0.045; ded = 0; }
          else if (rev <= 360000) { rNom = 0.078; ded = 5940; }
          else { rNom = 0.10; ded = 13860; }
        } else {
          if (rev <= 180000) { rNom = 0.06; ded = 0; }
          else if (rev <= 360000) { rNom = 0.112; ded = 9360; }
          else { rNom = 0.135; ded = 17640; }
        }

        let eff = ((rev * rNom) - ded) / (rev || 1);
        if (eff < 0) eff = 0;
        results['aliquota_efetiva'] = parseFloat((eff * 100).toFixed(2));
        results['imposto_devido'] = parseFloat((mes * eff).toFixed(2));
      }
      else if (raw.type === 'jur_iss') {
        const val = parseFloat(valInputs['valor_nota'] || 0);
        const rate = parseFloat(valInputs['aliquota_iss'] || 0);
        const iss = val * (rate / 100);
        results['valor_iss'] = parseFloat(iss.toFixed(2));
        results['valor_liquido'] = parseFloat((val - iss).toFixed(2));
      }
      else if (raw.type === 'jur_irrf_invest') {
        const gain = parseFloat(valInputs['rendimento'] || 0);
        const days = parseFloat(valInputs['prazo_dias'] || 0);

        let rate = 22.5;
        if (days > 720) rate = 15;
        else if (days > 360) rate = 17.5;
        else if (days > 180) rate = 20;

        const tax = gain * (rate / 100);
        results['aliquota'] = rate;
        results['imposto_ir'] = parseFloat(tax.toFixed(2));
        results['rendimento_liquido'] = parseFloat((gain - tax).toFixed(2));
      }

      else if (raw.type === 'util_cambio') {
        const val = parseFloat(valInputs['valor'] || 0);
        const de = valInputs['de_moeda'] || 'USD';
        const para = valInputs['para_moeda'] || 'BRL';

        const rates = { BRL: 1.0, USD: 5.25, EUR: 5.70, GBP: 6.60 };
        const vBrl = val * (rates[de] || 1);
        results['resultado'] = parseFloat((vBrl / (rates[para] || 1)).toFixed(2));
      }
      else if (raw.type === 'util_conta_bar') {
        const total = parseFloat(valInputs['total'] || 0);
        const friends = parseFloat(valInputs['pessoas'] || 1);
        const pct = parseFloat(valInputs['taxa_servico'] || 0);

        const fee = total * (pct / 100);
        const grand = total + fee;
        results['taxa_calculada'] = parseFloat(fee.toFixed(2));
        results['subtotal'] = parseFloat(grand.toFixed(2));
        results['valor_por_pessoa'] = parseFloat((grand / friends).toFixed(2));
      }
      else if (raw.type === 'util_energia_comp') {
        const potA = parseFloat(valInputs['potencia_a'] || 0);
        const hrA = parseFloat(valInputs['horas_a'] || 0);
        const potB = parseFloat(valInputs['potencia_b'] || 0);
        const hrB = parseFloat(valInputs['horas_b'] || 0);
        const rate = parseFloat(valInputs['tarifa'] || 0);

        const costA = ((potA * hrA * 30) / 1000) * rate;
        const costB = ((potB * hrB * 30) / 1000) * rate;

        results['custo_a'] = parseFloat(costA.toFixed(2));
        results['custo_b'] = parseFloat(costB.toFixed(2));
        results['economia_mensal'] = parseFloat(Math.abs(costA - costB).toFixed(2));
      }
      else if (raw.type === 'util_ar_btu') {
        const area = parseFloat(valInputs['area'] || 0);
        const ppl = parseFloat(valInputs['pessoas'] || 1);
        const dev = parseFloat(valInputs['eletronicos'] || 0);
        const btu = (area * 600) + (Math.max(0, ppl - 1) * 600) + (dev * 600);
        results['btu_necessario'] = btu;
      }
      else if (raw.type === 'util_tinta_m2') {
        const width = parseFloat(valInputs['largura_parede'] || 0);
        const height = parseFloat(valInputs['altura_parede'] || 0);
        const wins = parseFloat(valInputs['janelas'] || 0);
        const doors = parseFloat(valInputs['portas'] || 0);
        const rend = parseFloat(valInputs['rendimento_litro'] || 1);

        const grossArea = width * 4 * height;
        const sub = (wins * 2.0) + (doors * 1.6);
        const netArea = Math.max(0.1, grossArea - sub);

        results['area_liquida'] = parseFloat(netArea.toFixed(2));
        results['litros_necessarios'] = parseFloat(((netArea * 2) / rend).toFixed(1));
      }
      else if (raw.type === 'util_chuveiro') {
        const mins = parseFloat(valInputs['minutos'] || 0);
        const pot = parseFloat(valInputs['potencia'] || 0);
        const flow = parseFloat(valInputs['vazao'] || 0);
        const rEl = parseFloat(valInputs['tarifa_kwh'] || 0);
        const rWt = parseFloat(valInputs['tarifa_agua'] || 0);

        const waterL = mins * flow;
        const cWt = (waterL / 1000) * rWt;
        const kwh = (pot * (mins / 60)) / 1000;
        const cEl = kwh * rEl;

        results['consumo_litros'] = waterL;
        results['custo_energia'] = parseFloat(cEl.toFixed(2));
        results['custo_agua'] = parseFloat(cWt.toFixed(2));
        results['custo_total'] = parseFloat((cEl + cWt).toFixed(2));
      }
      else if (raw.type === 'util_buffet') {
        const adults = parseFloat(valInputs['adultos'] || 0);
        const kids = parseFloat(valInputs['criancas'] || 0);
        const salgados = (adults * 12) + (kids * 6);
        const doces = (adults * 4) + (kids * 3);
        const refri = (adults * 1.0) + (kids * 0.5);
        const bolo = ((adults + kids) * 100) / 1000;

        results['salgados_total'] = salgados;
        results['doces_total'] = doces;
        results['refrigerante_litros'] = parseFloat(refri.toFixed(1));
        results['bolo_kg'] = parseFloat(bolo.toFixed(1));
      }
      else if (raw.type === 'util_freezer') {
        const type = valInputs['tipo'] || 'carne';
        const dev = valInputs['geladeira'] || 'freezer';
        let m = 3;
        if (dev === 'freezer') {
          m = type === 'carne' ? 12 : type === 'frango' ? 9 : type === 'peixe' ? 6 : 8;
        } else {
          m = type === 'carne' ? 3 : type === 'frango' ? 2 : type === 'peixe' ? 1 : 2;
        }
        results['conservacao_meses'] = m;
      }
      else if (raw.type === 'util_rejunte') {
        const area = parseFloat(valInputs['area_m2'] || 0);
        const w = parseFloat(valInputs['piso_largo'] || 1);
        const h = parseFloat(valInputs['piso_alto'] || 1);
        const unitArea = (w * h) / 10000;
        const tiles = Math.ceil(area / (unitArea || 1));
        results['espacadores_total'] = tiles * 4;
      }
      else if (raw.type === 'util_supermercado') {
        const budget = parseFloat(valInputs['orcamento'] || 0);
        const items = parseFloat(valInputs['total_itens'] || 0);
        const cost = items * 10;
        results['percentual_usado'] = parseFloat(((cost / (budget || 1)) * 105).toFixed(1));
        results['saldo'] = parseFloat((budget - cost).toFixed(2));
      }

      else if (raw.type === 'apo_prev_privada') {
        const valM = parseFloat(valInputs['aporte_mensal'] || 0);
        const yrs = parseFloat(valInputs['anos'] || 0);
        const rateY = parseFloat(valInputs['taxa_anual'] || 0);

        const r = (rateY / 100) / 12;
        const n = yrs * 12;
        let gross = 0;
        if (r > 0) {
          gross = valM * (Math.pow(1 + r, n) - 1) / r;
        } else {
          gross = valM * n;
        }

        const invested = valM * n;
        const profit = Math.max(0, gross - invested);
        const tax = profit * 0.10;
        results['saldo_bruto'] = parseFloat(gross.toFixed(2));
        results['total_investido'] = parseFloat(invested.toFixed(2));
        results['imposto_pago'] = parseFloat(tax.toFixed(2));
        results['saldo_liquido'] = parseFloat((gross - tax).toFixed(2));
      }
      else if (raw.type === 'apo_viver_renda') {
        const income = parseFloat(valInputs['renda_desejada'] || 0);
        const rateM = parseFloat(valInputs['taxa_real'] || 0.5) / 100;
        results['patrimonio_alvo'] = parseFloat((income / (rateM || 1)).toFixed(2));
      }
      else if (raw.type === 'apo_reserva') {
        const monthly = parseFloat(valInputs['custo_mensal'] || 0);
        const months = parseFloat(valInputs['meses'] || 6);
        results['reserva_recomendada'] = parseFloat((monthly * months).toFixed(2));
      }
      else if (raw.type === 'apo_depreciacao') {
        const buy = parseFloat(valInputs['valor_aquisicao'] || 0);
        const yrs = parseFloat(valInputs['vida_util'] || 1);
        const resid = parseFloat(valInputs['valor_residual'] || 0);
        const annual = (buy - resid) / yrs;
        results['depreciacao_anual'] = parseFloat(annual.toFixed(2));
        results['depreciacao_mensal'] = parseFloat((annual / 12).toFixed(2));
      }
      else if (raw.type === 'apo_inflacao') {
        const val = parseFloat(valInputs['valor_inicial'] || 0);
        const yrs = parseFloat(valInputs['anos'] || 0);
        const rateY = parseFloat(valInputs['inflacao_anual'] || 0);
        const future = val / Math.pow(1 + (rateY / 100), yrs);
        results['poder_compra_futuro'] = parseFloat(future.toFixed(2));
        results['perda_real'] = parseFloat((((val - future) / (val || 1)) * 100).toFixed(2));
      }
      else if (raw.type === 'apo_fgts_corr') {
        const balance = parseFloat(valInputs['saldo'] || 0);
        const dep = parseFloat(valInputs['deposito_mensal'] || 0);
        const months = parseFloat(valInputs['meses'] || 0);

        const r = 0.03 / 12;
        let curr = balance * Math.pow(1 + r, months);
        if (r > 0 && months > 0) {
          curr += dep * (Math.pow(1 + r, months) - 1) / r;
        } else {
          curr += dep * months;
        }

        results['total_corrigido'] = parseFloat(curr.toFixed(2));
        results['total_poupado'] = parseFloat((balance + (dep * months)).toFixed(2));
      }
      else if (raw.type === 'apo_custo_apos') {
        const rawG = parseFloat(valInputs['gastos_hoje'] || 0);
        const red = parseFloat(valInputs['reducao_porcentagem'] || 0);
        const health = parseFloat(valInputs['aumento_plano_saude'] || 0);
        results['gastos_aposentado'] = parseFloat(((rawG * (1 - red / 100)) + health).toFixed(2));
      }
      else if (raw.type === 'apo_swr') {
        const total = parseFloat(valInputs['patrimonio'] || 0);
        const swr = parseFloat(valInputs['taxa_retirada'] || 4.0);
        const annual = total * (swr / 100);
        results['retirada_anual'] = parseFloat(annual.toFixed(2));
        results['retirada_mensal'] = parseFloat((annual / 12).toFixed(2));
      }
      else if (raw.type === 'apo_liberdade') {
        const spend = parseFloat(valInputs['gastos_mensais'] || 0) * 12;
        const current = parseFloat(valInputs['patrimonio_atual'] || 0);
        const save = parseFloat(valInputs['aporte_mensal'] || 0);
        const rateY = parseFloat(valInputs['taxa_real'] || 0);

        const target = spend / 0.04;
        const r = (rateY / 100) / 12;

        let months = 0;
        if (target <= current) {
          months = 0;
        } else if (r > 0) {
          months = Math.log((target + (save / r)) / (current + (save / r))) / Math.log(1 + r);
        } else {
          months = save > 0 ? (target - current) / save : 0;
        }

        results['patrimonio_alvo'] = parseFloat(target.toFixed(2));
        results['anos_restantes'] = parseFloat(Math.max(0, months / 12).toFixed(1));
      }
      else if (raw.type === 'sci_speed') {
        const type = valInputs['calcular'] || 'velocidade';
        const dist = parseFloat(valInputs['distancia'] || 0);
        const time = parseFloat(valInputs['tempo'] || 0);
        const speed = parseFloat(valInputs['velocidade'] || 0);

        if (type === 'velocidade') {
          results['resultado'] = parseFloat((dist / (time || 1)).toFixed(2));
        } else if (type === 'distancia') {
          results['resultado'] = parseFloat((speed * time).toFixed(2));
        } else if (type === 'tempo') {
          results['resultado'] = parseFloat((dist / (speed || 1)).toFixed(2));
        }
      }
      else if (raw.type === 'sci_temp') {
        const val = parseFloat(valInputs['valor'] || 0);
        const from = valInputs['de'] || 'C';
        const to = valInputs['para'] || 'F';

        let tempC = val;
        if (from === 'F') {
          tempC = (val - 32) / 1.8;
        } else if (from === 'K') {
          tempC = val - 273.15;
        }

        let res = tempC;
        if (to === 'F') {
          res = tempC * 1.8 + 32;
        } else if (to === 'K') {
          res = tempC + 273.15;
        }

        results['resultado'] = parseFloat(res.toFixed(2));
      }
      else if (raw.type === 'sci_density') {
        const type = valInputs['calcular'] || 'densidade';
        const mass = parseFloat(valInputs['massa'] || 0);
        const vol = parseFloat(valInputs['volume'] || 0);
        const dens = parseFloat(valInputs['densidade'] || 0);

        if (type === 'densidade') {
          results['resultado'] = parseFloat((mass / (vol || 1)).toFixed(2));
        } else if (type === 'massa') {
          results['resultado'] = parseFloat((dens * vol).toFixed(2));
        } else if (type === 'volume') {
          results['resultado'] = parseFloat((mass / (dens || 1)).toFixed(2));
        }
      }
      else if (raw.type === 'tech_download') {
        const size = parseFloat(valInputs['tamanho_arquivo'] || 0);
        const sizeUnit = valInputs['unidade_tamanho'] || 'MB';
        const speed = parseFloat(valInputs['velocidade_internet'] || 0);
        const speedUnit = valInputs['unidade_velocidade'] || 'Mbps';

        let sizeBits = size * 8;
        if (sizeUnit === 'GB') {
          sizeBits = size * 1024 * 1024 * 1024 * 8;
        } else {
          sizeBits = size * 1024 * 1024 * 8;
        }

        let speedBps = speed;
        if (speedUnit === 'Mbps') {
          speedBps = speed * 1000 * 1000;
        } else {
          speedBps = speed * 1000;
        }

        const totalSecs = sizeBits / (speedBps || 1);
        results['tempo_segundos'] = Math.round(totalSecs);

        const hrs = Math.floor(totalSecs / 3600);
        const mins = Math.floor((totalSecs % 3600) / 60);
        const secs = Math.round(totalSecs % 60);

        let formatted = '';
        if (hrs > 0) {
          formatted = `${hrs}h ${mins}m ${secs}s`;
        } else if (mins > 0) {
          formatted = `${mins}m ${secs}s`;
        } else {
          formatted = `${secs}s`;
        }
        results['tempo_formatado'] = formatted;
      }
      else if (raw.type === 'tech_aspect') {
        const originalW = parseFloat(valInputs['largura_original'] || 1920);
        const originalH = parseFloat(valInputs['altura_original'] || 1080);
        const newW = parseFloat(valInputs['nova_largura'] || 1280);

        const gcd = (x: number, y: number): number => (!y ? x : gcd(y, x % y));
        const div = gcd(originalW, originalH) || 1;
        
        results['proporcao'] = `${Math.round(originalW / div)}:${Math.round(originalH / div)}`;
        results['nova_altura'] = Math.round((newW * originalH) / (originalW || 1));
      }
      else if (raw.type === 'tech_base') {
        const val = Math.floor(parseFloat(valInputs['valor'] || 0));
        const target = valInputs['base_destino'] || 'bin';

        if (target === 'bin') {
          results['resultado'] = val.toString(2);
        } else if (target === 'hex') {
          results['resultado'] = val.toString(16).toUpperCase();
        } else if (target === 'oct') {
          results['resultado'] = val.toString(8);
        }
      }
      else if (raw.type === 'trab_salario_liquido') {
        const bruto = parseFloat(valInputs['salario_bruto'] || 0);
        const dependentes = parseInt(valInputs['dependentes'] || 0);
        const vtPercent = parseFloat(valInputs['desconto_vt'] || 0);
        const outrosDesc = parseFloat(valInputs['outros_descontos'] || 0);

        let inss = 0;
        if (bruto <= 1412) inss = bruto * 0.075;
        else if (bruto <= 2666.68) inss = (1412 * 0.075) + ((bruto - 1412) * 0.09);
        else if (bruto <= 4000.03) inss = (1412 * 0.075) + (1254.68 * 0.09) + ((bruto - 2666.68) * 0.12);
        else if (bruto <= 7786.02) inss = (1412 * 0.075) + (1254.68 * 0.09) + (1333.35 * 0.12) + ((bruto - 4000.03) * 0.14);
        else inss = 908.85;

        const deducaoDep = dependentes * 189.59;
        const baseIrrf = bruto - inss - deducaoDep;
        let irrf = 0;
        if (baseIrrf > 4664.68) irrf = (baseIrrf * 0.275) - 884.96;
        else if (baseIrrf > 3751.05) irrf = (baseIrrf * 0.225) - 651.73;
        else if (baseIrrf > 2826.65) irrf = (baseIrrf * 0.15) - 370.40;
        else if (baseIrrf > 2112.00) irrf = (baseIrrf * 0.075) - 158.40;
        
        irrf = Math.max(0, irrf);
        const descontoVtReais = (bruto * (vtPercent / 100));
        const totalDescontos = inss + irrf + descontoVtReais + outrosDesc;
        const liquido = bruto - totalDescontos;

        results['salario_liquido'] = parseFloat(liquido.toFixed(2));
        results['desc_inss'] = parseFloat(inss.toFixed(2));
        results['desc_irrf'] = parseFloat(irrf.toFixed(2));
        results['total_descontos'] = parseFloat(totalDescontos.toFixed(2));
      }
      else if (raw.type === 'trab_seguro_desemprego') {
        const media = parseFloat(valInputs['media_salarios'] || 0);
        const meses = parseInt(valInputs['meses_trabalhados'] || 0);
        const solicita = parseInt(valInputs['solicitacoes'] || 1);

        let parcela = 0;
        if (media <= 2041.39) parcela = media * 0.8;
        else if (media <= 3402.65) parcela = (2041.39 * 0.8) + ((media - 2041.39) * 0.5);
        else parcela = 2313.74;

        if (parcela < 1412) parcela = 1412;

        let qtd = 3;
        if (solicita === 1) {
            if (meses >= 12 && meses <= 23) qtd = 4;
            else if (meses >= 24) qtd = 5;
        } else if (solicita === 2) {
            if (meses >= 9 && meses <= 11) qtd = 3;
            else if (meses >= 12 && meses <= 23) qtd = 4;
            else if (meses >= 24) qtd = 5;
        } else {
            if (meses >= 6 && meses <= 11) qtd = 3;
            else if (meses >= 12 && meses <= 23) qtd = 4;
            else if (meses >= 24) qtd = 5;
        }

        if (meses < 6) {
           qtd = 0;
           parcela = 0;
        }

        results['valor_parcela'] = parseFloat(parcela.toFixed(2));
        results['qtd_parcelas'] = qtd;
        results['valor_total'] = parseFloat((parcela * qtd).toFixed(2));
      }
      else if (raw.type === 'saude_gestacao') {
        const diasDum = parseInt(valInputs['dias_desde_dum'] || 0);
        const semanas = Math.floor(diasDum / 7);
        const diasExtras = diasDum % 7;
        const totalDiasParto = 280;
        const faltam = totalDiasParto - diasDum;

        let tri = "1º Trimestre (Semanas 1 a 13)";
        if (semanas >= 14 && semanas <= 26) tri = "2º Trimestre (Semanas 14 a 26)";
        else if (semanas >= 27) tri = "3º Trimestre (Semana 27 ao Parto)";

        results['idade_semanas'] = `${semanas} semanas e ${diasExtras} dias`;
        results['dias_restantes'] = faltam > 0 ? faltam : 0;
        results['trimestre'] = tri;
      }
      else if (raw.type === 'vei_consumo_combustivel') {
        const dist = parseFloat(valInputs['distancia'] || 0);
        const cons = parseFloat(valInputs['consumo'] || 1);
        const preco = parseFloat(valInputs['preco_litro'] || 0);

        const litros = dist / cons;
        const custo = litros * preco;

        results['custo_viagem'] = parseFloat(custo.toFixed(2));
        results['litros_gastos'] = parseFloat(litros.toFixed(2));
        results['custo_por_km'] = parseFloat((custo / (dist || 1)).toFixed(2));
      }
      else if (raw.type === 'vei_ipva_calc') {
        const fipe = parseFloat(valInputs['valor_fipe'] || 0);
        const al = parseFloat(valInputs['aliquota'] || 0);

        const ipva = fipe * (al / 100);

        results['valor_ipva'] = parseFloat(ipva.toFixed(2));
        results['parcela_ipva'] = parseFloat((ipva / 3).toFixed(2));
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

  // Sparse loop removed
  return dynamicCalcs;
};

// Combining Core Calculators with programmatically generated ones for a grand total of exactly 100 calculators!
export const CALCULATORS_CATALOG: CalculatorDef[] = [
  ...CORE_CALCULATORS,
  ...buildDynamicCalculators()
];
