import * as fs from 'fs';
import * as path from 'path';

const catalogPath = path.resolve('d:/Socalculadoras/src/data/calculatorsCatalog.ts');
let content = fs.readFileSync(catalogPath, 'utf-8');

// 1. Remove DYNAMIC_SPARSE_RECORDS definition and its usage
// Let's locate `const DYNAMIC_SPARSE_RECORDS: ...` and remove it entirely.
// Also remove `DYNAMIC_SPARSE_RECORDS.forEach(item => { ... });` loop in `buildDynamicCalculators`.

// Let's define the 57 new dynamic calculator definitions
const newMetadataDefinitions = [
  // ==================== MATEMATICA (8 items) ====================
  {
    id: 'porcentagem-simples',
    name: 'Porcentagem Rápida',
    description: 'Realize de forma direta cálculos de acréscimos ou descontos relativos de parcelas numéricas básicas.',
    category: 'matematica',
    icon: 'Calculator',
    tags: ['matemática', 'porcentagem', 'desconto', 'acréscimo'],
    type: 'mat_porcentagem',
    inputs: [
      { id: 'valor', label: 'Valor Base', def: 100, type: 'number', pref: 'R$' },
      { id: 'percentual', label: 'Percentual', def: 15, type: 'number', suff: '%' },
      { id: 'operacao', label: 'Tipo de Operação', def: 'calcular', type: 'select', op: [{v: 'calcular', l: 'Calcular Porcentagem (Apenas %)'}, {v: 'adicionar', l: 'Somar Porcentagem (+)'}, {v: 'descontar', l: 'Subtrair Porcentagem (-)'}] }
    ],
    outputs: [
      { id: 'resultado', label: 'Resultado Final', pref: 'R$', isPrimary: true },
      { id: 'diferenca', label: 'Valor Diferença/Mudar', pref: 'R$' }
    ],
    faq: [
      { q: 'Como funciona esta calculadora?', a: 'Ela realiza três tipos de cálculos. Você pode extrair o valor da porcentagem de um número, ou aplicar acréscimo (+) ou desconto (-) direto sobre um valor informado.' }
    ]
  },
  {
    id: 'media-ponderada',
    name: 'Média Ponderada Escolar',
    description: 'Calcule notas parciais estruturadas no peso diferenciado distribuído de cada trabalho ou prova avaliatória.',
    category: 'matematica',
    icon: 'Calculator',
    tags: ['escola', 'média', 'pesos', 'nota', 'vestibular'],
    type: 'mat_media_ponderada',
    inputs: [
      { id: 'n1', label: 'Nota da Prova 1', def: 7, type: 'number' },
      { id: 'p1', label: 'Peso da Prova 1', def: 2, type: 'number' },
      { id: 'n2', label: 'Nota da Prova 2', def: 8, type: 'number' },
      { id: 'p2', label: 'Peso da Prova 2', def: 3, type: 'number' },
      { id: 'n3', label: 'Nota do Trabalho', def: 6, type: 'number' },
      { id: 'p3', label: 'Peso do Trabalho', def: 5, type: 'number' }
    ],
    outputs: [
      { id: 'media', label: 'Média Ponderada Final', isPrimary: true }
    ],
    faq: [
      { q: 'O que é Média Ponderada?', a: 'É a média onde cada nota tem um peso específico. A nota é multiplicada pelo seu peso, os resultados são somados e depois divididos pela soma dos pesos.' }
    ]
  },
  {
    id: 'pitagoras-triangulo',
    name: 'Teorema de Pitágoras',
    description: 'Encontre o comprimento exato da hipotenusa ou de catetos em triângulos retângulos.',
    category: 'matematica',
    icon: 'Calculator',
    tags: ['triângulo', 'geometria', 'pitágoras', 'equação'],
    type: 'mat_pitagoras',
    inputs: [
      { id: 'lado_a', label: 'Cateto A', def: 3, type: 'number' },
      { id: 'lado_b', label: 'Cateto B', def: 4, type: 'number' },
      { id: 'lado_c', label: 'Hipotenusa C', def: 5, type: 'number' },
      { id: 'calcular', label: 'O que calcular?', def: 'hipotenusa', type: 'select', op: [{v: 'hipotenusa', l: 'Calcular Hipotenusa C'}, {v: 'cateto_a', l: 'Calcular Cateto A'}, {v: 'cateto_b', l: 'Calcular Cateto B'}] }
    ],
    outputs: [
      { id: 'resultado', label: 'Lado Calculado', isPrimary: true }
    ],
    faq: [
      { q: 'Qual a fórmula do Teorema de Pitágoras?', a: 'A fórmula clássica é a² + b² = c², onde c é a hipotenusa e a e b são os catetos. A soma dos quadrados dos catetos é igual ao quadrado da hipotenusa.' }
    ]
  },
  {
    id: 'area-circulo-retangulo',
    name: 'Área & Perímetro de Formas',
    description: 'Obtenha a superfície espacial e o contorno de figuras planas geométricas usuais.',
    category: 'matematica',
    icon: 'Calculator',
    tags: ['área', 'perímetro', 'círculo', 'espaço', 'terreno'],
    type: 'mat_area_formas',
    inputs: [
      { id: 'forma', label: 'Tipo de Figura Geométrica', def: 'retangulo', type: 'select', op: [{v: 'retangulo', l: 'Retângulo / Quadrado'}, {v: 'circulo', l: 'Círculo'}, {v: 'triangulo', l: 'Triângulo Retângulo'}] },
      { id: 'base_raio', label: 'Largura ou Raio (para Círculo)', def: 10, type: 'number' },
      { id: 'altura', label: 'Altura (ignorar para Círculo)', def: 5, type: 'number' }
    ],
    outputs: [
      { id: 'area', label: 'Área Total', isPrimary: true },
      { id: 'perimetro', label: 'Perímetro / Contorno' }
    ],
    faq: [
      { q: 'Como calcular área e perímetro?', a: 'Para Retângulos: Área = base * altura, Perímetro = 2 * (base + altura). Para Círculos: Área = pi * raio², Perímetro = 2 * pi * raio.' }
    ]
  },
  {
    id: 'potencia-raiz',
    name: 'Potências e Raiz Quadrada',
    description: 'Resolva radiciações e potenciações simples exponenciais aritméticas com precisão decimal.',
    category: 'matematica',
    icon: 'Calculator',
    tags: ['matemática', 'raiz', 'quadrado', 'exponencial'],
    type: 'mat_potencia_raiz',
    inputs: [
      { id: 'base', label: 'Número Base', def: 9, type: 'number' },
      { id: 'expoente', label: 'Expoente (para Potência)', def: 2, type: 'number' }
    ],
    outputs: [
      { id: 'potencia', label: 'Resultado da Potenciação', isPrimary: true },
      { id: 'raiz_quadrada', label: 'Raiz Quadrada do Número Base' }
    ],
    faq: [
      { q: 'O que é a raiz quadrada?', a: 'A raiz quadrada de um número x é o número que, multiplicado por si mesmo, resulta em x. A potenciação é a multiplicação de um número por si mesmo várias vezes.' }
    ]
  },
  {
    id: 'fatorial-num',
    name: 'Cálculo de Fatorial',
    description: 'Calcule o produto multiplicativo do fatorial de qualquer inteiro positivo sequencial.',
    category: 'matematica',
    icon: 'Calculator',
    tags: ['fatorial', 'fórmula', 'números', 'análise'],
    type: 'mat_fatorial',
    inputs: [
      { id: 'numero', label: 'Número Inteiro N', def: 5, type: 'number', min: 0, max: 170 }
    ],
    outputs: [
      { id: 'resultado', label: 'Fatorial (N!)', isPrimary: true }
    ],
    faq: [
      { q: 'Como funciona o cálculo do fatorial?', a: 'Representado por N!, é a multiplicação de todos os números inteiros de 1 até N. Exemplo: 5! = 5 * 4 * 3 * 2 * 1 = 120.' }
    ]
  },
  {
    id: 'regra-de-sociedade',
    name: 'Regra de Sociedade Comercial',
    description: 'Divida lucros corporativos proporcionalmente de acordo com a quota de aporte financeiro dos sócios.',
    category: 'matematica',
    icon: 'Calculator',
    tags: ['sociedade', 'divisão', 'empresa', 'sócios'],
    type: 'mat_sociedade',
    inputs: [
      { id: 'investimento_total', label: 'Capital Social / Investimento Total', def: 100000, type: 'number', pref: 'R$' },
      { id: 'lucro_total', label: 'Lucro Líquido a Distribuir', def: 25000, type: 'number', pref: 'R$' },
      { id: 'investimento_socio', label: 'Capital Investido pelo Sócio', def: 30000, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'lucro_socio', label: 'Lucro Devido ao Sócio', pref: 'R$', isPrimary: true },
      { id: 'participacao_socio', label: 'Participação do Sócio', suff: '%' }
    ],
    faq: [
      { q: 'Como funciona a Regra de Sociedade?', a: 'Ela divide os lucros de forma diretamente proporcional ao valor investido por cada sócio. Se um sócio investiu 30% do capital, ele receberá 30% do lucro total distribuído.' }
    ]
  },
  {
    id: 'equacao-segundo-grau',
    name: 'Equação do 2º Grau (Bhaskara)',
    description: 'Simulador de raízes da equação clássica de segundo grau identificando discriminante Delta.',
    category: 'matematica',
    icon: 'Calculator',
    tags: ['bhaskara', 'raízes', 'equação', 'escola', 'álgebra'],
    type: 'mat_bhaskara',
    inputs: [
      { id: 'a', label: 'Coeficiente A', def: 1, type: 'number' },
      { id: 'b', label: 'Coeficiente B', def: -5, type: 'number' },
      { id: 'c', label: 'Coeficiente C', def: 6, type: 'number' }
    ],
    outputs: [
      { id: 'x1', label: 'Raiz X1', isPrimary: true },
      { id: 'x2', label: 'Raiz X2' },
      { id: 'delta', label: 'Discriminante Delta' },
      { id: 'tipo', label: 'Tipo de Raízes' }
    ],
    faq: [
      { q: 'Como é calculada a Fórmula de Bhaskara?', a: 'Primeiro calcula-se o Delta = B² - 4AC. Se Delta for maior ou igual a zero, as raízes são (-B ± sqrt(Delta)) / 2A.' }
    ]
  },

  // ==================== IMOBILIARIO (10 items) ====================
  {
    id: 'financiamento-price-sac',
    name: 'Financiamento Price vs SAC',
    description: 'Compare as tabelas amortizatórias de parcelas de moradias cruzando taxas de avaliação.',
    category: 'imobiliario',
    icon: 'Home',
    tags: ['imóveis', 'financiamento', 'sac', 'price', 'banco'],
    type: 'imob_price_sac',
    inputs: [
      { id: 'valor_financiado', label: 'Valor Financiado', def: 200000, type: 'number', pref: 'R$' },
      { id: 'taxa_anual', label: 'Taxa de Juros Anual', def: 10, type: 'number', suff: '%' },
      { id: 'meses', label: 'Prazo do Financiamento', def: 120, type: 'number', suff: 'meses' }
    ],
    outputs: [
      { id: 'total_price', label: 'Total Pago (Tabela Price)', pref: 'R$', isPrimary: true },
      { id: 'total_sac', label: 'Total Pago (Tabela SAC)', pref: 'R$' },
      { id: 'juros_price', label: 'Juros Totais (Price)', pref: 'R$' },
      { id: 'juros_sac', label: 'Juros Totais (SAC)', pref: 'R$' },
      { id: 'primeira_parcela_sac', label: 'Primeira Parcela (SAC)', pref: 'R$' },
      { id: 'ultima_parcela_sac', label: 'Última Parcela (SAC)', pref: 'R$' },
      { id: 'parcela_price', label: 'Parcela Fixa (Price)', pref: 'R$' }
    ],
    faq: [
      { q: 'Qual a diferença entre SAC e Price?', a: 'Na tabela SAC, a amortização é constante e as parcelas caem ao longo do tempo. Na tabela Price, as parcelas são fixas do início ao fim, mas paga-se um total de juros um pouco maior.' }
    ]
  },
  {
    id: 'reajuste-aluguel',
    name: 'Reajuste Anual de Contrato',
    description: 'Estime o novo boleto de moradia atualizado com base nos índices inflacionários comerciais (IGP-M, IPCA).',
    category: 'imobiliario',
    icon: 'Home',
    tags: ['aluguel', 'contrato', 'reajuste', 'igp-m'],
    type: 'imob_reajuste',
    inputs: [
      { id: 'aluguel_atual', label: 'Valor do Aluguel Atual', def: 1500, type: 'number', pref: 'R$' },
      { id: 'taxa_reajuste', label: 'Índice de Reajuste Acumulado', def: 4.5, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'novo_aluguel', label: 'Novo Valor do Aluguel', pref: 'R$', isPrimary: true },
      { id: 'valor_aumento', label: 'Valor do Aumento Mensal', pref: 'R$' }
    ],
    faq: [
      { q: 'Quais índices são mais comuns?', a: 'O IGP-M (da FGV) é o mais tradicional para contratos imobiliários, embora o IPCA (inflação oficial do IBGE) tenha sido cada vez mais adotado nos últimos anos.' }
    ]
  },
  {
    id: 'custos-itbi',
    name: 'Custos de ITBI e Registro',
    description: 'Prepare o provimento de despesas de impostos de transferência de escritura e registro de imóveis.',
    category: 'imobiliario',
    icon: 'Home',
    tags: ['itbi', 'cartório', 'impostos', 'imóvel', 'documentação'],
    type: 'imob_itbi',
    inputs: [
      { id: 'valor_imovel', label: 'Valor do Imóvel', def: 300000, type: 'number', pref: 'R$' },
      { id: 'aliquota_itbi', label: 'Alíquota ITBI do Município', def: 2.0, type: 'number', suff: '%' },
      { id: 'cartorio_taxa', label: 'Emolumentos de Registro / Escritura', def: 1.5, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'total_documentacao', label: 'Custo Total de Documentação', pref: 'R$', isPrimary: true },
      { id: 'itbi_pago', label: 'Valor de ITBI Devido', pref: 'R$' },
      { id: 'cartorio_pago', label: 'Valor de Registro e Custas', pref: 'R$' }
    ],
    faq: [
      { q: 'O que é o ITBI?', a: 'É o Imposto de Transmissão de Bens Imóveis, cobrado pela prefeitura do município onde fica o imóvel. Deve ser pago para oficializar a compra e venda.' }
    ]
  },
  {
    id: 'cap-rate',
    name: 'Retorno de Ativos (Cap Rate)',
    description: 'Calcule a rentabilidade anual passiva sobre aluguel de imóveis em relação ao valor de compra.',
    category: 'imobiliario',
    icon: 'Home',
    tags: ['cap rate', 'investidor', 'aluguel', 'retorno'],
    type: 'imob_cap_rate',
    inputs: [
      { id: 'valor_imovel', label: 'Valor de Compra / Avaliação', def: 400000, type: 'number', pref: 'R$' },
      { id: 'aluguel_mensal', label: 'Valor do Aluguel Mensal Bruto', def: 2000, type: 'number', pref: 'R$' },
      { id: 'despesas_mensais', label: 'Custos Mensais (Ex: Taxa Imobiliária/IPTU)', def: 300, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'cap_rate', label: 'Cap Rate Anual Obtido', suff: '%', isPrimary: true },
      { id: 'rendimento_anual', label: 'Receita Líquida Anual', pref: 'R$' }
    ],
    faq: [
      { q: 'O que é o Cap Rate?', a: 'Significa Capitalization Rate. É uma métrica essencial para investidores imobiliários que indica o retorno percentual anual gerado por um imóvel com base no seu valor e receita líquida de aluguel.' }
    ]
  },
  {
    id: 'amortizacao-extra',
    name: 'Simulador de Amortização Extra',
    description: 'Veja as reduções de tempo de juros ao injetar depósitos adicionais nas prestações pendentes.',
    category: 'imobiliario',
    icon: 'Home',
    tags: ['amortizar', 'banco', 'financiamento', 'reparação'],
    type: 'imob_amortizacao',
    inputs: [
      { id: 'saldo_devedor', label: 'Saldo Devedor Atual', def: 150000, type: 'number', pref: 'R$' },
      { id: 'taxa_juros', label: 'Taxa de Juros Anual do Contrato', def: 9.5, type: 'number', suff: '%' },
      { id: 'meses_restantes', label: 'Prazo Restante', def: 180, type: 'number', suff: 'meses' },
      { id: 'valor_amortizar', label: 'Valor do Aporte Extra', def: 10000, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'economia_juros', label: 'Juros Totais Economizados', pref: 'R$', isPrimary: true },
      { id: 'novas_parcelas', label: 'Novo Prazo Restante Estimado', suff: ' meses' }
    ],
    faq: [
      { q: 'Como a amortização reduz os juros?', a: 'A amortização extra reduz o seu saldo devedor principal diretamente. Como os juros mensais são calculados sobre o saldo devedor, o prazo total ou o valor das parcelas cai drasticamente.' }
    ]
  },
  {
    id: 'alugar-vs-comprar',
    name: 'Alugar ou Comprar Imóvel',
    description: 'Determine se a locação do imóvel comparado a um financiamento resulta em economia financeira.',
    category: 'imobiliario',
    icon: 'Home',
    tags: ['investimento', 'imóvel', 'aluguel', 'patrimônio'],
    type: 'imob_alugar_comprar',
    inputs: [
      { id: 'valor_imovel', label: 'Valor de Compra do Imóvel', def: 300000, type: 'number', pref: 'R$' },
      { id: 'aluguel', label: 'Aluguel Mensal Equivalente', def: 1200, type: 'number', pref: 'R$' },
      { id: 'entrada', label: 'Valor da Entrada / Sinal', def: 60000, type: 'number', pref: 'R$' },
      { id: 'taxa_financiamento', label: 'Taxa Anual do Financiamento', def: 10, type: 'number', suff: '%' },
      { id: 'rendimento_inv', label: 'Rendimento de Investimentos (a.a.)', def: 8, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'vantagem', label: 'Decisão Financeira Recomendada', isPrimary: true },
      { id: 'patrimonio_comprar', label: 'Patrimônio Final (Comprar)', pref: 'R$' },
      { id: 'patrimonio_alugar', label: 'Patrimônio Final (Alugar e Investir)', pref: 'R$' }
    ],
    faq: [
      { q: 'O que avalia esta simulação?', a: 'Ela compara o acúmulo de patrimônio a 10 anos. Quem compra acumula o valor do próprio imóvel. Quem aluga investe o dinheiro da entrada e a economia mensal e acumula ativos financeiros.' }
    ]
  },
  {
    id: 'custo-efetivo-total',
    name: 'Custo Efetivo Total (CET)',
    description: 'Identifique a taxa anual integral e juros implícitos reais praticados no mercado financeiro.',
    category: 'imobiliario',
    icon: 'Home',
    tags: ['cet', 'juros', 'banco', 'empréstimo'],
    type: 'imob_cet',
    inputs: [
      { id: 'valor_emprestimo', label: 'Valor Bruto do Empréstimo', def: 10000, type: 'number', pref: 'R$' },
      { id: 'taxa_juros', label: 'Taxa de Juros Nominal Mensal', def: 2.5, type: 'number', suff: '%' },
      { id: 'seguros_taxas', label: 'Tarifas e Seguros na Contratação', def: 500, type: 'number', pref: 'R$' },
      { id: 'parcelas', label: 'Quantidade de Parcelas', def: 12, type: 'number', suff: 'meses' }
    ],
    outputs: [
      { id: 'cet_mensal', label: 'CET Mensal Efetivo', suff: '%', isPrimary: true },
      { id: 'cet_anual', label: 'CET Anual Efetivo', suff: '%' },
      { id: 'valor_parcela', label: 'Valor da Parcela Mensal', pref: 'R$' }
    ],
    faq: [
      { q: 'O que compõe o CET?', a: 'O Custo Efetivo Total inclui não apenas os juros nominais cobrados, mas também impostos (IOF), tarifas bancárias de cadastro (TAC) e prêmios de seguros obrigatórios contratados.' }
    ]
  },
  {
    id: 'valor-metro-quadrado',
    name: 'Comparador de Valor de m²',
    description: 'Analise avaliações de imóveis concorrentes estimando o custo-benefício de área privativa construída.',
    category: 'imobiliario',
    icon: 'Home',
    tags: ['m²', 'tamanho', 'preço', 'avaliação'],
    type: 'imob_m2',
    inputs: [
      { id: 'preco', label: 'Preço de Venda do Imóvel', def: 350000, type: 'number', pref: 'R$' },
      { id: 'area', label: 'Área Útil Privativa', def: 70, type: 'number', suff: 'm²' }
    ],
    outputs: [
      { id: 'valor_m2', label: 'Preço Médio por m²', pref: 'R$/m²', isPrimary: true }
    ],
    faq: [
      { q: 'Por que avaliar o metro quadrado?', a: 'Permite comparar o valor real de diferentes imóveis de tamanhos variados na mesma região para ver qual oferece melhor custo-benefício físico.' }
    ]
  },
  {
    id: 'rateio-condominio',
    name: 'Rateio de Reforma Predial',
    description: 'Divida custos de conservação comuns de prédios baseados em áreas de fração ideal.',
    category: 'imobiliario',
    icon: 'Home',
    tags: ['condomínio', 'síndico', 'rateio', 'obra'],
    type: 'imob_rateio',
    inputs: [
      { id: 'despesa_total', label: 'Valor Total do Rateio/Obra', def: 5000, type: 'number', pref: 'R$' },
      { id: 'fracao_ideal', label: 'Fração Ideal da sua Unidade', def: 5.0, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'valor_rateio', label: 'Valor a Pagar pela sua Unidade', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'O que é fração ideal?', a: 'É a parte ideal que cada proprietário possui da área total comum do terreno e do condomínio, geralmente atrelada ao tamanho do seu apartamento.' }
    ]
  },
  {
    id: 'iptu-proporcional',
    name: 'Rateio IPTU Proporcional',
    description: 'Divida o carnê do IPTU em parcelas proporcionais de meses de posse do imóvel entre comprador e vendedor.',
    category: 'imobiliario',
    icon: 'Home',
    tags: ['iptu', 'venda', 'impostos', 'transação'],
    type: 'imob_iptu',
    inputs: [
      { id: 'iptu_anual', label: 'Valor Total do IPTU Anual', def: 1200, type: 'number', pref: 'R$' },
      { id: 'meses_uso', label: 'Meses de Ocupação pelo Vendedor', def: 5, type: 'number', suff: 'meses' }
    ],
    outputs: [
      { id: 'valor_proporcional', label: 'Quota-Parte Devida pelo Vendedor', pref: 'R$', isPrimary: true },
      { id: 'valor_comprador', label: 'Quota-Parte Devida pelo Comprador', pref: 'R$' }
    ],
    faq: [
      { q: 'Quem deve pagar o IPTU proporcional?', a: 'Por praxe jurídica, o vendedor arca com as parcelas proporcionais até o mês em que entregou as chaves/posse, e o comprador arca com o restante do ano.' }
    ]
  },

  // ==================== ESTATISTICA (10 items) ====================
  {
    id: 'desvio-padrao',
    name: 'Desvio Padrão e Variância',
    description: 'Analise a dispersão de dados e desvios de uma série de amostras numéricas.',
    category: 'estatistica',
    icon: 'BarChart',
    tags: ['estatística', 'desvio', 'amostra', 'variância', 'pesquisa'],
    type: 'est_desvio_padrao',
    inputs: [
      { id: 'valores', label: 'Valores (separados por vírgula)', def: '10, 15, 12, 18, 20', type: 'text' }
    ],
    outputs: [
      { id: 'desvio_padrao', label: 'Desvio Padrão Amostral', isPrimary: true },
      { id: 'variancia', label: 'Variância Amostral' },
      { id: 'media', label: 'Média Aritmética' }
    ],
    faq: [
      { q: 'O que indica o Desvio Padrão?', a: 'É uma medida que indica o quanto os dados de um conjunto estão dispersos ou afastados em relação à média. Um desvio padrão baixo mostra dados concentrados próximos à média.' }
    ]
  },
  {
    id: 'margem-erro',
    name: 'Margem de Erro de Pesquisas',
    description: 'Calcule a segurança estatística de entrevistas com base no tamanho do público amostral avaliado.',
    category: 'estatistica',
    icon: 'BarChart',
    tags: ['pesquisa', 'erro', 'segurança', 'amostra'],
    type: 'est_margem_erro',
    inputs: [
      { id: 'tamanho_amostra', label: 'Tamanho da Amostra', def: 400, type: 'number', suff: 'pessoas' },
      { id: 'populacao', label: 'População Total (0 para infinita)', def: 100000, type: 'number', suff: 'pop.' },
      { id: 'nivel_confianca', label: 'Nível de Confiança', def: 95, type: 'select', op: [{v: 90, l: '90% (Z=1.645)'}, {v: 95, l: '95% (Z=1.96)'}, {v: 99, l: '99% (Z=2.576)'}] }
    ],
    outputs: [
      { id: 'margem_erro', label: 'Margem de Erro Calculada', suff: '%', isPrimary: true }
    ],
    faq: [
      { q: 'Como o nível de confiança altera a margem?', a: 'Maior confiança exige margem de erro maior para a mesma amostra. A margem de erro usual em pesquisas eleitorais brasileiras é de 2% a 3%.' }
    ]
  },
  {
    id: 'analise-combinatoria',
    name: 'Arranjos e Combinações',
    description: 'Resolva o número de conjuntos e combinações possíveis para agrupamentos estatísticos.',
    category: 'estatistica',
    icon: 'BarChart',
    tags: ['matemática', 'combinação', 'fatorial', 'arranjo'],
    type: 'est_combinatoria',
    inputs: [
      { id: 'n', label: 'Total de Elementos (N)', def: 5, type: 'number' },
      { id: 'p', label: 'Tamanho dos Grupos (P)', def: 3, type: 'number' }
    ],
    outputs: [
      { id: 'combinacoes', label: 'Combinações Possíveis C(n, p)', isPrimary: true },
      { id: 'arranjos', label: 'Arranjos Possíveis A(n, p)' }
    ],
    faq: [
      { q: 'Qual a diferença entre Arranjo e Combinação?', a: 'Nos Arranjos, a ordem dos elementos importa (ex: senhas). Nas Combinações, a ordem não importa (ex: times formados de um grupo de pessoas).' }
    ]
  },
  {
    id: 'probabilidade-evento',
    name: 'Probabilidade de Ocorrências',
    description: 'Identifique as chances nominais de um evento ocorrer isoladamente em espaços amostrais.',
    category: 'estatistica',
    icon: 'BarChart',
    tags: ['probabilidade', 'chances', 'dados', 'estatística'],
    type: 'est_probabilidade',
    inputs: [
      { id: 'favoraveis', label: 'Casos Favoráveis', def: 1, type: 'number' },
      { id: 'possiveis', label: 'Casos Possíveis Totais', def: 6, type: 'number' }
    ],
    outputs: [
      { id: 'probabilidade', label: 'Chances Percentuais de Ocorrência', suff: '%', isPrimary: true },
      { id: 'chances', label: 'Probabilidade Fracionada (1 em X)' }
    ],
    faq: [
      { q: 'Como é calculada a Probabilidade?', a: 'É a divisão simples entre o número de eventos desejados (casos favoráveis) sobre o total de resultados possíveis em um evento probabilístico.' }
    ]
  },
  {
    id: 'churn-rate',
    name: 'Métrica de Churn (SaaS/Loja)',
    description: 'Analise o percentual de evasão de clientes registrados que interromperam contratos de receita recorrente.',
    category: 'estatistica',
    icon: 'BarChart',
    tags: ['churn', 'evasão', 'saas', 'clientes', 'métricas'],
    type: 'est_churn',
    inputs: [
      { id: 'ativos_inicio', label: 'Clientes Ativos no Início do Período', def: 1000, type: 'number', suff: 'clientes' },
      { id: 'cancelados', label: 'Clientes Cancelados no Período', def: 50, type: 'number', suff: 'cancelados' }
    ],
    outputs: [
      { id: 'churn_rate', label: 'Taxa de Churn Efetiva', suff: '%', isPrimary: true }
    ],
    faq: [
      { q: 'O que representa o Churn Rate?', a: 'É a taxa de cancelamento de clientes em serviços ou assinaturas. Manter o churn baixo é vital para a saúde financeira e lucratividade de empresas recorrentes (SaaS).' }
    ]
  },
  {
    id: 'crescimento-mensal',
    name: 'Taxa Crescimento MoM',
    description: 'Mensura o rácio de crescimento em andamento de receitas em relação ao ciclo de meses anteriores.',
    category: 'estatistica',
    icon: 'BarChart',
    tags: ['crescimento', 'mom', 'receita', 'negócios'],
    type: 'est_crescimento',
    inputs: [
      { id: 'valor_anterior', label: 'Valor Período Anterior (Base)', def: 8000, type: 'number', pref: 'R$' },
      { id: 'valor_atual', label: 'Valor Período Atual', def: 12000, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'crescimento', label: 'Taxa de Crescimento Efetiva', suff: '%', isPrimary: true },
      { id: 'diferenca', label: 'Variação Nominal Absoluta', pref: 'R$' }
    ],
    faq: [
      { q: 'O que expressa a sigla MoM?', a: 'Significa Month-over-Month (Mês sobre Mês), que mede o crescimento percentual de métricas operacionais ou financeiras comparando o mês atual ao anterior.' }
    ]
  },
  {
    id: 'conversao-funil',
    name: 'Funil de Conversão e Leads',
    description: 'Acompanhe as passagens de visitas para leads qualificados e vendas finalizadas de seu funil comercial.',
    category: 'estatistica',
    icon: 'BarChart',
    tags: ['funil', 'conversão', 'seo', 'marketing', 'leads'],
    type: 'est_funil',
    inputs: [
      { id: 'visitantes', label: 'Visitantes / Tráfego Bruto', def: 10000, type: 'number', suff: 'visitas' },
      { id: 'leads', label: 'Leads / Contatos Qualificados', def: 500, type: 'number', suff: 'leads' },
      { id: 'vendas', label: 'Vendas Concluídas', def: 50, type: 'number', suff: 'conversões' }
    ],
    outputs: [
      { id: 'conversao_total', label: 'Taxa de Conversão Total', suff: '%', isPrimary: true },
      { id: 'taxa_lead', label: 'Taxa de Visitante para Lead', suff: '%' },
      { id: 'taxa_venda', label: 'Taxa de Lead para Venda', suff: '%' }
    ],
    faq: [
      { q: 'Qual a importância de monitorar o funil?', a: 'Ajuda a identificar gargalos na aquisição ou conversão do e-commerce ou site, mostrando onde os potenciais clientes estão abandonando a jornada de compra.' }
    ]
  },
  {
    id: 'mediana-moda',
    name: 'Média, Mediana & Moda',
    description: 'Avalie as tendências centrais geográficas presentes em dados unificados de amostras.',
    category: 'estatistica',
    icon: 'BarChart',
    tags: ['média', 'mediana', 'moda', 'estatística'],
    type: 'est_mediana_moda',
    inputs: [
      { id: 'valores', label: 'Conjunto de Valores (separados por vírgula)', def: '10, 15, 12, 15, 20', type: 'text' }
    ],
    outputs: [
      { id: 'mediana', label: 'Mediana do Conjunto', isPrimary: true },
      { id: 'media', label: 'Média Aritmética simples' },
      { id: 'moda', label: 'Moda (Valores mais Frequentes)' }
    ],
    faq: [
      { q: 'Qual a diferença entre Média, Mediana e Moda?', a: 'Média é a soma de todos dividida pela quantidade. Mediana é o valor central que divide o grupo ao meio. Moda representa o valor de maior ocorrência no conjunto.' }
    ]
  },
  {
    id: 'intervalo-confianca',
    name: 'Intervalo de Confiança',
    description: 'Defina a amplitude estimada que protege a média real de amostras populacionais.',
    category: 'estatistica',
    icon: 'BarChart',
    tags: ['estatística', 'pesquisa', 'confiança', 'amostra'],
    type: 'est_confianca',
    inputs: [
      { id: 'media_amostral', label: 'Média Amostral Obtida', def: 50, type: 'number' },
      { id: 'desvio_padrao', label: 'Desvio Padrão da Amostra', def: 5, type: 'number' },
      { id: 'tamanho_amostra', label: 'Tamanho da Amostra (N)', def: 100, type: 'number', suff: 'n' },
      { id: 'nivel_confianca', label: 'Nível de Confiança Desejado', def: 95, type: 'select', op: [{v: 90, l: '90% (Z=1.645)'}, {v: 95, l: '95% (Z=1.96)'}, {v: 99, l: '99% (Z=2.576)'}] }
    ],
    outputs: [
      { id: 'margem_erro', label: 'Margem de Erro Estimada', isPrimary: true },
      { id: 'limite_inferior', label: 'Intervalo Limite Inferior' },
      { id: 'limite_superior', label: 'Intervalo Limite Superior' }
    ],
    faq: [
      { q: 'O que define o Intervalo de Confiança?', a: 'É uma estimativa de intervalo que indica a probabilidade da média populacional real se encontrar dentro dos limites calculados a partir da amostra estatística.' }
    ]
  },
  {
    id: 'conversao-cac',
    name: 'CAC vs LTV Eficiência',
    description: 'Compare o custo de aquisição (CAC) com o valor vitalício gerado pelo cliente (LTV) de sua firma.',
    category: 'estatistica',
    icon: 'BarChart',
    tags: ['cac', 'ltv', 'vendas', 'lucratividade'],
    type: 'est_cac_ltv',
    inputs: [
      { id: 'custo_marketing', label: 'Despesa em Vendas & Marketing', def: 5000, type: 'number', pref: 'R$' },
      { id: 'clientes_novos', label: 'Novos Clientes Adquiridos', def: 100, type: 'number', suff: 'clientes' },
      { id: 'ticket_medio', label: 'Receita Média por Usuário (ARPU)', def: 150, type: 'number', pref: 'R$' },
      { id: 'churn_rate', label: 'Churn Rate Mensal do Período', def: 5, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'cac', label: 'Custo de Aquisição de Cliente (CAC)', pref: 'R$', isPrimary: true },
      { id: 'ltv', label: 'Valor de Tempo de Vida (LTV)', pref: 'R$' },
      { id: 'proporcao_ltv_cac', label: 'Relação LTV / CAC (Eficiência)' }
    ],
    faq: [
      { q: 'Qual a proporção LTV/CAC ideal?', a: 'Uma boa relação LTV/CAC é superior a 3. Isso significa que o valor que o cliente gera ao longo do tempo é de no mínimo 3 vezes superior ao custo gasto para adquiri-lo.' }
    ]
  },

  // ==================== JURIDICO (10 items) ====================
  {
    id: 'mora-judicial',
    name: 'Mora e Multas de Contratos',
    description: 'Calcule juros de mora acumuláveis ordinários e multas estipuladas de débitos pendentes financeiros.',
    category: 'juridico',
    icon: 'Scale',
    tags: ['multa', 'juros de mora', 'cartório', 'justiça'],
    type: 'jur_mora',
    inputs: [
      { id: 'valor_original', label: 'Valor Original da Dívida', def: 5000, type: 'number', pref: 'R$' },
      { id: 'dias_atraso', label: 'Dias de Atraso Acumulados', def: 30, type: 'number', suff: 'dias' },
      { id: 'juros_mensal', label: 'Juros de Mora Mensal', def: 1.0, type: 'number', suff: '% a.m.' },
      { id: 'multa_atraso', label: 'Multa de Atraso Contratual', def: 2.0, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'valor_total', label: 'Valor Total com Encargos', pref: 'R$', isPrimary: true },
      { id: 'valor_juros', label: 'Juros de Mora Calculados', pref: 'R$' },
      { id: 'valor_multa', label: 'Multa de Atraso Aplicada', pref: 'R$' }
    ],
    faq: [
      { q: 'Qual o limite legal de juros de mora?', a: 'Segundo o Código Civil brasileiro, em caso de ausência de estipulação contratual, os juros moratórios judiciais padrão correm à base de 1% ao mês.' }
    ]
  },
  {
    id: 'correcao-monetaria',
    name: 'Correção Monetária de Valores',
    description: 'Atualize quantias financeiras históricas corrigidas por taxas e indexadores regulatórios civis.',
    category: 'juridico',
    icon: 'Scale',
    tags: ['correção', 'inflação', 'justiça', 'valores'],
    type: 'jur_correcao',
    inputs: [
      { id: 'valor_original', label: 'Valor Financeiro Original', def: 1000, type: 'number', pref: 'R$' },
      { id: 'taxa_correcao', label: 'Taxa de Correção Acumulada', def: 4.5, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'valor_corrigido', label: 'Valor Corrigido e Atualizado', pref: 'R$', isPrimary: true },
      { id: 'valor_ganho', label: 'Acrescimento da Correção', pref: 'R$' }
    ],
    faq: [
      { q: 'O que é Correção Monetária?', a: 'Consiste na recomposição do valor real do dinheiro corroído pela inflação em contratos ou processos judiciais, sem constituir acréscimo de ganho real.' }
    ]
  },
  {
    id: 'custas-processuais',
    name: 'Custas Judiciais Estimadas',
    description: 'Simule preliminarmente as guias financeiras de taxas judiciais de distribuição do seu processo.',
    category: 'juridico',
    icon: 'Scale',
    tags: ['custas', 'processo', 'tribunal', 'taxas'],
    type: 'jur_custas',
    inputs: [
      { id: 'valor_causa', label: 'Valor da Causa de Referência', def: 20000, type: 'number', pref: 'R$' },
      { id: 'estado', label: 'Tribunal de Justiça do Estado (TJ)', def: 'sp', type: 'select', op: [{v: 'sp', l: 'TJSP (São Paulo)'}, {v: 'rj', l: 'TJRJ (Rio de Janeiro)'}, {v: 'mg', l: 'TJMG (Minas Gerais)'}, {v: 'outro', l: 'Outros Estados'}] }
    ],
    outputs: [
      { id: 'custas_totais', label: 'Taxa Judiciária Total Estimada', pref: 'R$', isPrimary: true },
      { id: 'taxa_distribuicao', label: 'Taxa de Distribuição Processual', pref: 'R$' },
      { id: 'taxa_mandato', label: 'Taxa de Procuração / Mandato', pref: 'R$' }
    ],
    faq: [
      { q: 'Quem responde pelas custas?', a: 'Quem entra com o processo paga as custas iniciais de distribuição, que no entanto são reembolsadas pelo perdedor em caso de procedência (sucumbência).' }
    ]
  },
  {
    id: 'pensao-alimenticia',
    name: 'Pensão Alimentícia Projeções',
    description: 'Identifique proporções sugestivas de amparo pensonal de acordo com a renda do devedor alimentício.',
    category: 'juridico',
    icon: 'Scale',
    tags: ['família', 'pensão', 'direito', 'filho'],
    type: 'jur_pensao',
    inputs: [
      { id: 'salario_liquido', label: 'Rendimento Líquido Alimentante', def: 3000, type: 'number', pref: 'R$' },
      { id: 'filhos', label: 'Quantidade de Filhos Dependentes', def: 1, type: 'number', suff: 'filho(s)' },
      { id: 'tipo', label: 'Vínculo do Devedor', def: 'empregado', type: 'select', op: [{v: 'empregado', l: 'Vínculo Formal (CLT / Rendimentos)'}, {v: 'desempregado', l: 'Desempregado / Autônomo'}] }
    ],
    outputs: [
      { id: 'valor_pensao', label: 'Pensão Alimentícia Estimada', pref: 'R$', isPrimary: true },
      { id: 'porcentagem_salario', label: 'Percentual Equivalente Aplicado', suff: '%' }
    ],
    faq: [
      { q: 'Existe um percentual fixo de pensão por lei?', a: 'Não, o juiz avalia as necessidades do filho e as possibilidades financeiras dos pais. Contudo, a praxe de mercado adota em média 20% a 30% da renda líquida para vínculos formais.' }
    ]
  },
  {
    id: 'ganho-capital',
    name: 'IR s/ Ganho de Capital',
    description: 'Calcule as faixas de imposto devidas sobre o lucro líquido gerado na alienação de bens e imóveis.',
    category: 'juridico',
    icon: 'Scale',
    tags: ['lucro', 'imóvel', 'ganho de capital', 'imposto'],
    type: 'jur_ganho_capital',
    inputs: [
      { id: 'valor_venda', label: 'Preço de Venda Praticado', def: 400000, type: 'number', pref: 'R$' },
      { id: 'valor_compra', label: 'Custo de Aquisição Escriturado', def: 250000, type: 'number', pref: 'R$' },
      { id: 'isencao_unico', label: 'Imóvel Único Residencial até R$ 440 mil', def: 'nao', type: 'select', op: [{v: 'nao', l: 'Não / Não se Enquadra'}, {v: 'sim', l: 'Sim'}] }
    ],
    outputs: [
      { id: 'imposto_devido', label: 'Imposto s/ Ganho de Capital', pref: 'R$', isPrimary: true },
      { id: 'ganho_bruto', label: 'Ganho de Capital Bruto (Lucro)', pref: 'R$' },
      { id: 'aliquota_ir', label: 'Alíquota Aplicável de Imposto', suff: '%' }
    ],
    faq: [
      { q: 'O que é isenção de ganho de capital?', a: 'A alienação de imóvel único residencial por valor igual ou inferior a R$ 440 mil é isenta de imposto de renda, desde que o contribuinte não tenha realizado outra venda de imóvel nos últimos cinco anos.' }
    ]
  },
  {
    id: 'divisao-bens',
    name: 'Divisão de Bens de Divórcio',
    description: 'Esquematize a partilha societária de bens baseada em regimes nupciais estabelecidos no Brasil.',
    category: 'juridico',
    icon: 'Scale',
    tags: ['divórcio', 'partilha', 'regime', 'casamento'],
    type: 'jur_divisao_bens',
    inputs: [
      { id: 'bens_comuns', label: 'Valor Total de Bens Comuns', def: 200000, type: 'number', pref: 'R$' },
      { id: 'regime', label: 'Regime de Casamento do Casal', def: 'parcial', type: 'select', op: [{v: 'parcial', l: 'Comunhão Parcial de Bens'}, {v: 'universal', l: 'Comunhão Universal de Bens'}, {v: 'separacao', l: 'Separação Total de Bens'}] }
    ],
    outputs: [
      { id: 'valor_meacao', label: 'Quota de Direito Cônjuge A', pref: 'R$', isPrimary: true },
      { id: 'valor_conjuge', label: 'Quota de Direito Cônjuge B', pref: 'R$' }
    ],
    faq: [
      { q: 'Como funciona a Comunhão Parcial?', a: 'No regime de Comunhão Parcial de Bens (o padrão no Brasil desde 1977), dividem-se em partes iguais (50% cada) apenas os bens adquiridos onerosamente durante a constância do casamento.' }
    ]
  },
  {
    id: 'inventario-partilha',
    name: 'Inventário e Herança Partilha',
    description: 'Estime taxas de imposto de herança (ITCMD) e custos processuais de partilha pátria.',
    category: 'juridico',
    icon: 'Scale',
    tags: ['herança', 'inventário', 'itcmd', 'sucessão', 'morte'],
    type: 'jur_inventario',
    inputs: [
      { id: 'patrimonio_liquido', label: 'Patrimônio Líquido Total Espólio', def: 500000, type: 'number', pref: 'R$' },
      { id: 'herdeiros', label: 'Número de Herdeiros Concorrentes', def: 3, type: 'number', suff: 'herdeiro(s)' },
      { id: 'itcmd_uf', label: 'UF / Alíquota ITCMD de Origem', def: 'sp', type: 'select', op: [{v: 'sp', l: 'São Paulo (4.0%)'}, {v: 'rj', l: 'Rio de Janeiro (4.5%)'}, {v: 'mg', l: 'Minas Gerais (5.0%)'}, {v: 'outro', l: 'Outros Estados (4.0%)'}] }
    ],
    outputs: [
      { id: 'imposto_itcmd', label: 'ITCMD Total a ser Pago', pref: 'R$', isPrimary: true },
      { id: 'valor_por_herdeiro', label: 'Quota Líquida Estimada p/ Herdeiro', pref: 'R$' },
      { id: 'liquido_partilhar', label: 'Patrimônio Líquido Pós-ITCMD', pref: 'R$' }
    ],
    faq: [
      { q: 'O que é o ITCMD?', a: 'Imposto sobre Transmissão Causa Mortis e Doação, de competência estadual. Incide sobre a transferência de herança ou doações de bens a herdeiros.' }
    ]
  },
  {
    id: 'tabela-simples',
    name: 'Simples Nacional Simulador',
    description: 'Saiba o imposto gerado no Simples Nacional baseados em tabelas de faturamento cumulativo e anexos.',
    category: 'juridico',
    icon: 'Scale',
    tags: ['simples nacional', 'mei', 'cnpj', 'imposto'],
    type: 'jur_simples_nacional',
    inputs: [
      { id: 'receita_12m', label: 'Faturamento Acumulado 12 Meses', def: 180000, type: 'number', pref: 'R$' },
      { id: 'faturamento_mes', label: 'Faturamento de Serviços do Mês', def: 15000, type: 'number', pref: 'R$' },
      { id: 'anexo', label: 'Tabela do Simples (Anexo)', def: 'anexo1', type: 'select', op: [{v: 'anexo1', l: 'Anexo I - Comércio'}, {v: 'anexo2', l: 'Anexo II - Indústria'}, {v: 'anexo3', l: 'Anexo III - Prestação de Serviços'}] }
    ],
    outputs: [
      { id: 'imposto_devido', label: 'Imposto do Simples a Pagar no Mês', pref: 'R$', isPrimary: true },
      { id: 'aliquota_efetiva', label: 'Alíquota Efetiva do Imposto', suff: '%' }
    ],
    faq: [
      { q: 'Como é calculada a alíquota efetiva?', a: 'Ela é calculada a partir da fórmula: ((Faturamento 12m * Alíquota Nominal) - Dedutora) / Faturamento 12m. A taxa real do DAS varia conforme a faixa de faturamento.' }
    ]
  },
  {
    id: 'aliquota-iss',
    name: 'Custos de ISS s/ Serviços',
    description: 'Identifique o repasse de imposto municipal ISS sobre notas fiscais de seu tomador.',
    category: 'juridico',
    icon: 'Scale',
    tags: ['iss', 'imposto', 'serviços', 'município'],
    type: 'jur_iss',
    inputs: [
      { id: 'valor_nota', label: 'Valor Bruto da Nota Fiscal', def: 5000, type: 'number', pref: 'R$' },
      { id: 'aliquota_iss', label: 'Alíquota ISS do Município', def: 3.0, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'valor_iss', label: 'Valor de ISS Deduzido/Devido', pref: 'R$', isPrimary: true },
      { id: 'valor_liquido', label: 'Valor Líquido da Nota Fiscal', pref: 'R$' }
    ],
    faq: [
      { q: 'Qual a faixa de alíquota do ISS?', a: 'A alíquota é municipal e, de acordo com a legislação federal brasileira, deve se situar na faixa mínima de 2% e máxima de 5% sobre a receita bruta do serviço.' }
    ]
  },
  {
    id: 'irrf-investimentos',
    name: 'IR s/ Aplicações Financeiras',
    description: 'Calcule a mordida do leão na venda de renda fixa e fundos com base na data do saque.',
    category: 'juridico',
    icon: 'Scale',
    tags: ['renda fixa', 'tesouro', 'imposto', 'lucros'],
    type: 'jur_irrf_invest',
    inputs: [
      { id: 'rendimento', label: 'Lucro / Rendimento Bruto Obtido', def: 1000, type: 'number', pref: 'R$' },
      { id: 'prazo_dias', label: 'Dias de Permanência dos Fundos', def: 180, type: 'number', suff: 'dias' }
    ],
    outputs: [
      { id: 'imposto_ir', label: 'Imposto de Renda Retido (IRRF)', pref: 'R$', isPrimary: true },
      { id: 'rendimento_liquido', label: 'Rendimento Líquido Acumulado', pref: 'R$' },
      { id: 'aliquota', label: 'Alíquota de Tributação Aplicada', suff: '%' }
    ],
    faq: [
      { q: 'Como funciona a tabela regressiva de Renda Fixa?', a: 'Até 180 dias de aplicação a taxa é de 22.5%; de 181 a 360 dias, 20%; de 361 a 720 dias, 17.5%; e acima de 720 dias cai para a taxa mínima de 15%.' }
    ]
  },

  // ==================== UTILITARIOS (10 items) ====================
  {
    id: 'conversor-moedas',
    name: 'Conversor de Câmbio Moedas',
    description: 'Converta faturamento em divisas internacionais com taxas de câmbios pré-definidos (Dólar, Euro, Real).',
    category: 'utilitarios',
    icon: 'Wrench',
    tags: ['câmbio', 'dólar', 'euro', 'faturamento', 'conversor'],
    type: 'util_cambio',
    inputs: [
      { id: 'valor', label: 'Valor de Origem', def: 100, type: 'number' },
      { id: 'de_moeda', label: 'Converter De', def: 'USD', type: 'select', op: [{v: 'USD', l: 'Dólar Americano (USD)'}, {v: 'EUR', l: 'Euro (EUR)'}, {v: 'GBP', l: 'Libra Esterlina (GBP)'}, {v: 'BRL', l: 'Real Brasileiro (BRL)'}] },
      { id: 'para_moeda', label: 'Converter Para', def: 'BRL', type: 'select', op: [{v: 'BRL', l: 'Real Brasileiro (BRL)'}, {v: 'USD', l: 'Dólar Americano (USD)'}, {v: 'EUR', l: 'Euro (EUR)'}, {v: 'GBP', l: 'Libra Esterlina (GBP)'}] }
    ],
    outputs: [
      { id: 'resultado', label: 'Valor Convertido de Câmbio', isPrimary: true }
    ],
    faq: [
      { q: 'As cotações são atualizadas em tempo real?', a: 'Não, esta calculadora utiliza cotações médias de referência estáveis para fins de simulação financeira. Para transações reais, consulte cotações bancárias atuais.' }
    ]
  },
  {
    id: 'conta-bar',
    name: 'Divisor de Conta do Bar',
    description: 'Divida a conta do bar ou restaurante de forma justa incluindo gorjetas de garçom voluntárias.',
    category: 'utilitarios',
    icon: 'Wrench',
    tags: ['restaurante', 'churrasco', 'amigos', 'conta', 'bar'],
    type: 'util_conta_bar',
    inputs: [
      { id: 'total', label: 'Valor Total do Consumo', def: 150, type: 'number', pref: 'R$' },
      { id: 'pessoas', label: 'Quantidade de Amigos na Mesa', def: 4, type: 'number', suff: 'pessoa(s)' },
      { id: 'taxa_servico', label: 'Taxa de Garçom / Serviço', def: 10, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'valor_por_pessoa', label: 'Quota de Divisão por Pessoa', pref: 'R$', isPrimary: true },
      { id: 'taxa_calculada', label: 'Valor de Serviço Estimado', pref: 'R$' },
      { id: 'subtotal', label: 'Valor Total com Taxas', pref: 'R$' }
    ],
    faq: [
      { q: 'A taxa de serviço é obrigatória?', a: 'No Brasil, o pagamento da taxa de 10% a 15% de serviço do garçom é voluntário por lei, embora seja um costume cultural amplamente respeitado para apoiar os profissionais.' }
    ]
  },
  {
    id: 'energia-eletrica',
    name: 'Consumo Elétrico Comparado',
    description: 'Determine o custo de operação de eletrodomésticos cruzando Watts e tarifa contratual local.',
    category: 'utilitarios',
    icon: 'Wrench',
    tags: ['energia', 'chuveiro', 'kwh', 'eletrodomésticos', 'conta'],
    type: 'util_energia_comp',
    inputs: [
      { id: 'potencia_a', label: 'Potência Aparelho A', def: 2000, type: 'number', suff: 'Watts' },
      { id: 'horas_a', label: 'Tempo de Uso Diário A', def: 8, type: 'number', suff: 'horas' },
      { id: 'potencia_b', label: 'Potência Aparelho B (Ex: Inverter)', def: 1200, type: 'number', suff: 'Watts' },
      { id: 'horas_b', label: 'Tempo de Uso Diário B', def: 8, type: 'number', suff: 'horas' },
      { id: 'tarifa', label: 'Tarifa de Energia local', def: 0.95, type: 'number', pref: 'R$', suff: '/kWh' }
    ],
    outputs: [
      { id: 'economia_mensal', label: 'Economia Mensal Gerada', pref: 'R$', isPrimary: true },
      { id: 'custo_a', label: 'Custo Mensal do Aparelho A', pref: 'R$' },
      { id: 'custo_b', label: 'Custo Mensal do Aparelho B', pref: 'R$' }
    ],
    faq: [
      { q: 'Como o cálculo é realizado?', a: 'Consumo mensal em kWh = (Watts * Horas/dia * 30) / 1000. O custo é o Consumo em kWh multiplicado pela tarifa do seu estado.' }
    ]
  },
  {
    id: 'ar-condicionado',
    name: 'Ar Condicionado ideal (BTUs)',
    description: 'Calcule o dimensionamento térmico e BTUs recomendados para climatização de aposentos.',
    category: 'utilitarios',
    icon: 'Wrench',
    tags: ['ar condicionado', 'btu', 'refrigeração', 'quarto'],
    type: 'util_ar_btu',
    inputs: [
      { id: 'area', label: 'Área do Cômodo a Climatizar', def: 20, type: 'number', suff: 'm²' },
      { id: 'pessoas', label: 'Pessoas Ocupantes Frequentes', def: 2, type: 'number', suff: 'pessoa(s)' },
      { id: 'eletronicos', label: 'Aparelhos Eletrônicos Ligados', def: 2, type: 'number', suff: 'aparelho(s)' }
    ],
    outputs: [
      { id: 'btu_necessario', label: 'Potência de Climatização Desejada', suff: ' BTUs', isPrimary: true }
    ],
    faq: [
      { q: 'Qual a regra básica de BTUs?', a: 'Usa-se 600 BTUs por metro quadrado para ambientes comuns. Se houver incidência de sol forte ou muitas pessoas/aparelhos, usa-se de 800 BTUs.' }
    ]
  },
  {
    id: 'quantidade-tinta',
    name: 'Cálculo de Latas de Tinta',
    description: 'Identifique a quantidade de latas exigidas para pintura de áreas prediais quadrangulares.',
    category: 'utilitarios',
    icon: 'Wrench',
    tags: ['tinta', 'obra', 'reforma', 'pintura', 'parede'],
    type: 'util_tinta_m2',
    inputs: [
      { id: 'largura_parede', label: 'Largura Total das Paredes', def: 4, type: 'number', suff: 'metros' },
      { id: 'altura_parede', label: 'Altura da Parede (Pé Direito)', def: 2.8, type: 'number', suff: 'metros' },
      { id: 'janelas', label: 'Quantidade de Janelas no Ambiente', def: 1, type: 'number', suff: 'un.' },
      { id: 'portas', label: 'Quantidade de Portas no Ambiente', def: 1, type: 'number', suff: 'un.' },
      { id: 'rendimento_litro', label: 'Rendimento de Referência da Tinta', def: 10, type: 'number', suff: 'm²/L' }
    ],
    outputs: [
      { id: 'litros_necessarios', label: 'Volume Total de Tinta (2 demãos)', suff: ' Litros', isPrimary: true },
      { id: 'area_liquida', label: 'Área Efetiva de Pintura', suff: ' m²' }
    ],
    faq: [
      { q: 'Por que deduzir portas e janelas?', a: 'Reduz o volume de compra necessário evitando desperdício de tintas. Uma janela média ocupa 2.0 m² e uma porta padrão ocupa 1.6 m².' }
    ]
  },
  {
    id: 'agua-chuveiro',
    name: 'Consumo do Banho de Chuveiro',
    description: 'Meça as tarifas agregadas de água e energia ao passar minutos embaixo do chuveiro elétrico.',
    category: 'utilitarios',
    icon: 'Wrench',
    tags: ['chuveiro', 'banho', 'banheiro', 'água', 'eletricidade'],
    type: 'util_chuveiro',
    inputs: [
      { id: 'minutos', label: 'Tempo de Banho Diário', def: 15, type: 'number', suff: 'minutos' },
      { id: 'potencia', label: 'Potência Nominal do Chuveiro', def: 5500, type: 'number', suff: 'Watts' },
      { id: 'vazao', label: 'Vazão Média do Chuveiro', def: 10, type: 'number', suff: 'Litros/min' },
      { id: 'tarifa_kwh', label: 'Tarifa de Energia Elétrica', def: 0.95, type: 'number', pref: 'R$/kWh' },
      { id: 'tarifa_agua', label: 'Tarifa de Água por Metro Cúbico', def: 6.50, type: 'number', pref: 'R$/m³' }
    ],
    outputs: [
      { id: 'custo_total', label: 'Custo Total Estimado por Banho', pref: 'R$', isPrimary: true },
      { id: 'custo_energia', label: 'Custo de Energia Elétrica', pref: 'R$' },
      { id: 'custo_agua', label: 'Custo de Abastecimento de Água', pref: 'R$' },
      { id: 'consumo_litros', label: 'Consumo de Água em Litros', suff: ' Litros' }
    ],
    faq: [
      { q: 'Como economizar no banho?', a: 'Diminuir o tempo de banho para 5-8 minutos e reduzir a temperatura do chuveiro (modo verão) são as formas mais rápidas de cortar consumo de luz e água.' }
    ]
  },
  {
    id: 'churrasco-festa',
    name: 'Churrasco Evento Ingredientes',
    description: 'Estime as porções alimentares de carne e bebidas ideais por convidado para evitar desperdício em festas.',
    category: 'utilitarios',
    icon: 'Wrench',
    tags: ['churrasco', 'carne', 'bebida', 'festa', 'cerveja'],
    type: 'util_buffet',
    inputs: [
      { id: 'adultos', label: 'Quantidade de Convidados Adultos', def: 20, type: 'number', suff: 'pessoas' },
      { id: 'criancas', label: 'Quantidade de Convidados Crianças', def: 10, type: 'number', suff: 'crianças' },
      { id: 'duracao', label: 'Duração do Evento / Festa', def: 4, type: 'number', suff: 'horas' }
    ],
    outputs: [
      { id: 'salgados_total', label: 'Total de Salgadinhos (Buffet)', suff: ' centos/un', isPrimary: true },
      { id: 'doces_total', label: 'Total de Docinhos Necessários', suff: ' unidades' },
      { id: 'refrigerante_litros', label: 'Refrigerante / Bebidas não alcoólicas', suff: ' Litros' },
      { id: 'bolo_kg', label: 'Peso Recomendado de Bolo', suff: ' kg' }
    ],
    faq: [
      { q: 'Como mensurar quantidade de buffet?', a: 'Geralmente calcula-se 12 salgados pequenos e 4 docinhos por adulto e metade disso por criança para comemorações de 4 horas.' }
    ]
  },
  {
    id: 'alimentos-congelados',
    name: 'Prazo Freezer Descongelamento',
    description: 'Saiba o tempo permitido de armazenamento e retenção de frescor nutritivo no freezer comercial.',
    category: 'utilitarios',
    icon: 'Wrench',
    tags: ['comida', 'freezer', 'congelar', 'cozinha'],
    type: 'util_freezer',
    inputs: [
      { id: 'tipo', label: 'Tipo de Alimento', def: 'carne', type: 'select', op: [{v: 'carne', l: 'Carne Vermelha Fresca'}, {v: 'frango', l: 'Aves Frescas'}, {v: 'peixe', l: 'Peixes e Frutos do Mar'}, {v: 'legume', l: 'Legumes e Verduras Branqueadas'}] },
      { id: 'geladeira', label: 'Equipamento de Congelamento', def: 'freezer', type: 'select', op: [{v: 'freezer', l: 'Freezer Duas Portas (-18ºC)'}, {v: 'congelador', l: 'Congelador Acoplado (-4ºC)'}] }
    ],
    outputs: [
      { id: 'conservacao_meses', label: 'Prazo Recomendado de Conservação', suff: ' meses', isPrimary: true }
    ],
    faq: [
      { q: 'O congelamento mata bactérias?', a: 'Não, o congelamento a -18°C paralisa a atividade bacteriana e enzimática retardando a deterioração dos alimentos, mantendo-os seguros por meses.' }
    ]
  },
  {
    id: 'espacador-azulejo',
    name: 'Quantidade Pisos & Azulejos',
    description: 'Identifique as dimensões e número de revestimentos necessários para pavimentação.',
    category: 'utilitarios',
    icon: 'Wrench',
    tags: ['pisos', 'azulejos', 'construção', 'obra', 'reforma'],
    type: 'util_rejunte',
    inputs: [
      { id: 'area_m2', label: 'Área Total a ser Revestida', def: 25, type: 'number', suff: 'm²' },
      { id: 'piso_largo', label: 'Largura do Piso / Porcelanato', def: 60, type: 'number', suff: 'cm' },
      { id: 'piso_alto', label: 'Comprimento do Piso / Peça', def: 60, type: 'number', suff: 'cm' }
    ],
    outputs: [
      { id: 'espacadores_total', label: 'Total de Espaçadores a Comprar', suff: ' unidades', isPrimary: true }
    ],
    faq: [
      { q: 'Quantos espaçadores usar por peça?', a: 'Usualmente aplicam-se de 4 a 8 espaçadores tipo cruzeta por peça de porcelanato ou revestimento cerâmico para garantir uniformidade nas juntas.' }
    ]
  },
  {
    id: 'lista-supermercado',
    name: 'Protetor Carrinho Supermercado',
    description: 'Consolide suas despesas no caixa com margens de estimativas para compras mensais de despensa.',
    category: 'utilitarios',
    icon: 'Wrench',
    tags: ['mercado', 'lista', 'compras', 'orçamento'],
    type: 'util_supermercado',
    inputs: [
      { id: 'orcamento', label: 'Limite de Orçamento das Compras', def: 500, type: 'number', pref: 'R$' },
      { id: 'total_itens', label: 'Quantidade Estimada de Itens', def: 45, type: 'number', suff: 'itens' }
    ],
    outputs: [
      { id: 'saldo', label: 'Saldo Restante / Excesso', pref: 'R$', isPrimary: true },
      { id: 'percentual_usado', label: 'Percentual do Orçamento Usado', suff: '%' }
    ],
    faq: [
      { q: 'Como evitar estourar o orçamento no supermercado?', a: 'Sempre faça uma lista rígida de compras de despensa e use um aplicativo ou estimador de valor médio para acompanhar o total acumulado do carrinho.' }
    ]
  },

  // ==================== APOSENTADORIA (9 items) ====================
  {
    id: 'previdenca-privada',
    name: 'Previdência Privada Acúmulo',
    description: 'Pondere se aportes mensais de previdência VGBL ou PGBL com imposto regressivo protegem seu futuro.',
    category: 'aposentadoria',
    icon: 'ShieldCheck',
    tags: ['aposentadoria', 'investimento', 'previdência', 'banco'],
    type: 'apo_prev_privada',
    inputs: [
      { id: 'aporte_mensal', label: 'Aporte Mensal Voluntário', def: 500, type: 'number', pref: 'R$' },
      { id: 'anos', label: 'Anos de Aportes Programados', def: 25, type: 'number', suff: 'anos' },
      { id: 'taxa_anual', label: 'Rentabilidade Líquida Estimada', def: 8.5, type: 'number', suff: '% a.a.' }
    ],
    outputs: [
      { id: 'saldo_liquido', label: 'Saldo Líquido Acumulado (Regresso)', pref: 'R$', isPrimary: true },
      { id: 'saldo_bruto', label: 'Saldo Bruto Acumulado', pref: 'R$' },
      { id: 'total_investido', label: 'Total Físico Investido', pref: 'R$' },
      { id: 'imposto_pago', label: 'Imposto de Renda Retido (10%)', pref: 'R$' }
    ],
    faq: [
      { q: 'O que caracteriza a tabela regressiva?', a: 'Na previdência privada, a tabela regressiva reduz o imposto de renda incidente sobre os rendimentos conforme o tempo decorrido, chegando à alíquota mínima de 10% após 10 anos.' }
    ]
  },
  {
    id: 'viver-de-renda',
    name: 'Capital de Viver de Renda',
    description: 'Quantifique o montante financeiro exigido investido para retirar o equivalente ao seu salário mensal de direito.',
    category: 'aposentadoria',
    icon: 'ShieldCheck',
    tags: ['viver de renda', 'aposentadoria', 'independência', 'juros'],
    type: 'apo_viver_renda',
    inputs: [
      { id: 'renda_desejada', label: 'Renda Mensal Líquida Desejada', def: 5000, type: 'number', pref: 'R$' },
      { id: 'taxa_real', label: 'Taxa Real de Retorno Mensal', def: 0.5, type: 'number', suff: '% a.m.' }
    ],
    outputs: [
      { id: 'patrimonio_alvo', label: 'Capital Total Investido Alvo', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'O que é a taxa real?', a: 'É o rendimento do seu investimento deduzida a inflação do período. Desta forma o seu capital conserva o poder de compra intacto ao longo dos anos de retirada.' }
    ]
  },
  {
    id: 'reserva-emergencia',
    name: 'Reserva Emergência Custos',
    description: 'Defina o colchão de liquidez para cobrir de 6 a 12 meses das despesas e contas básicas.',
    category: 'aposentadoria',
    icon: 'ShieldCheck',
    tags: ['reserva', 'emergência', 'dinheiro', 'poupança'],
    type: 'apo_reserva',
    inputs: [
      { id: 'custo_mensal', label: 'Gasto Fixo Mensal Básico', def: 3000, type: 'number', pref: 'R$' },
      { id: 'meses', label: 'Meses de Cobertura Desejada', def: 6, type: 'select', op: [{v: 6, l: 'CLT Segurado (6 meses)'}, {v: 12, l: 'Autônomo/Empresário (12 meses)'}] }
    ],
    outputs: [
      { id: 'reserva_recomendada', label: 'Colchão de Reserva Financeira', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'Onde guardar a reserva de emergência?', a: 'Deve ser aplicada em ativos financeiros seguros e com liquidez imediata (diária), como Tesouro Selic, CDBs 100% DI diários ou poupança.' }
    ]
  },
  {
    id: 'depreciacao-maquinas',
    name: 'Provisão Desgaste Equipamentos',
    description: 'Preveja as substituições periódicas de máquinas corporativas ou laptops de trabalho.',
    category: 'aposentadoria',
    icon: 'ShieldCheck',
    tags: ['máquina', 'computador', 'ativo', 'depreciação'],
    type: 'apo_depreciacao',
    inputs: [
      { id: 'valor_aquisicao', label: 'Valor de Compra da Máquina', def: 5000, type: 'number', pref: 'R$' },
      { id: 'vida_util', label: 'Vida Útil Estimada (Anos)', def: 5, type: 'number', suff: 'anos' },
      { id: 'valor_residual', label: 'Valor de Revenda Estimado', def: 500, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'depreciacao_mensal', label: 'Dedução / Depreciação Mensal', pref: 'R$', isPrimary: true },
      { id: 'depreciacao_anual', label: 'Depreciação Anual Linear', pref: 'R$' }
    ],
    faq: [
      { q: 'O que representa o valor residual?', a: 'É a quantia estimada pela qual o ativo poderá ser comercializado ao término de sua vida útil corporativa, amortizando o valor do desgaste total.' }
    ]
  },
  {
    id: 'inflacao-futura',
    name: 'Corrosor de Poupanças Futura',
    description: 'Veja o declínio do poder de compra de quantias paradas em horizontes de longo prazo.',
    category: 'aposentadoria',
    icon: 'ShieldCheck',
    tags: ['inflação', 'dinheiro', 'perda', 'poupança'],
    type: 'apo_inflacao',
    inputs: [
      { id: 'valor_inicial', label: 'Valor Poupança Atual', def: 10000, type: 'number', pref: 'R$' },
      { id: 'anos', label: 'Anos de Projeção / Horizonte', def: 10, type: 'number', suff: 'anos' },
      { id: 'inflacao_anual', label: 'Inflação Média Anual Estimada', def: 4.5, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'poder_compra_futuro', label: 'Poder de Compra Equivalente', pref: 'R$', isPrimary: true },
      { id: 'perda_real', label: 'Desvalorização Acumulada Real', suff: '%' }
    ],
    faq: [
      { q: 'Por que o dinheiro perde poder?', a: 'A inflação representa a elevação geral de preços. Se o seu dinheiro não estiver rendendo no mínimo a taxa da inflação anual, você poderá comprar muito menos com o mesmo valor.' }
    ]
  },
  {
    id: 'fgts-corrigido',
    name: 'Fundo Garantido Corrigido (FGTS)',
    description: 'Simule o crescimento fictício de contas em regimes ordinários de atualização monetária de 3%.',
    category: 'aposentadoria',
    icon: 'ShieldCheck',
    tags: ['fgts', 'fundo garantido', 'salário', 'emprego'],
    type: 'apo_fgts_corr',
    inputs: [
      { id: 'saldo', label: 'Saldo Inicial do Fundo', def: 10000, type: 'number', pref: 'R$' },
      { id: 'deposito_mensal', label: 'Depósito Mensal Estimado', def: 200, type: 'number', pref: 'R$' },
      { id: 'meses', label: 'Meses de Contribuição', def: 24, type: 'number', suff: 'meses' }
    ],
    outputs: [
      { id: 'total_corrigido', label: 'Saldo FGTS com Correção Legal', pref: 'R$', isPrimary: true },
      { id: 'total_poupado', label: 'Total Poupança sem Rendimento', pref: 'R$' }
    ],
    faq: [
      { q: 'Qual a taxa legal de correção do FGTS?', a: 'Historicamente o FGTS rende TR (Taxa Referencial) mais 3% ao ano de juros remuneratórios. Decisões do STF buscam garantir que o saldo acompanhe no mínimo a inflação (IPCA).' }
    ]
  },
  {
    id: 'custo-aposentadoria',
    name: 'Planejador Estilo de Vida (Retired)',
    description: 'Calcule as contrações naturais de gastos domésticos decorrentes do avanço da melhor idade.',
    category: 'aposentadoria',
    icon: 'ShieldCheck',
    tags: ['aposentadoria', 'gastos', 'despesas', 'melhor idade'],
    type: 'apo_custo_apos',
    inputs: [
      { id: 'gastos_hoje', label: 'Gastos Mensais Atuais do Lar', def: 4000, type: 'number', pref: 'R$' },
      { id: 'reducao_porcentagem', label: 'Redução Estimada de Gastos (%)', def: 20, type: 'number', suff: '%' },
      { id: 'aumento_plano_saude', label: 'Previsão de Gastos Extras (Saúde/Plano)', def: 800, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'gastos_aposentado', label: 'Orçamento Médio na Aposentadoria', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'Quais despesas costumam cair?', a: 'Na melhor idade reduzem-se custos relativos a transporte comercial, vestimentas de trabalho e previdência, mas custos de saúde e bem-estar tendem a crescer.' }
    ]
  },
  {
    id: 'renda-eterna',
    name: 'Taxa Segura de Retirada (SWR)',
    description: 'Descubra a taxa percentual de retirada anual que impede que seus fundos venham a faltar na velhice.',
    category: 'aposentadoria',
    icon: 'ShieldCheck',
    tags: ['swr', 'retirada', 'portfólio', 'patrimônio'],
    type: 'apo_swr',
    inputs: [
      { id: 'patrimonio', label: 'Patrimônio Total Investido', def: 1000000, type: 'number', pref: 'R$' },
      { id: 'taxa_retirada', label: 'Taxa de Retirada Anual (SWR)', def: 4.0, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'retirada_mensal', label: 'Cota de Retirada Mensal Permitida', pref: 'R$', isPrimary: true },
      { id: 'retirada_anual', label: 'Cota de Retirada Anual', pref: 'R$' }
    ],
    faq: [
      { q: 'O que é a regra dos 4%?', a: 'Estudo clássico americano demonstrou que retirar de 4% ao ano do patrimônio acumulado (corrigidos por inflação) confere probabilidade de 95% de que os fundos durem mais de 30 anos.' }
    ]
  },
  {
    id: 'aposentadoria-preco-liberdade',
    name: 'Milestone de Liberdade Financeira',
    description: 'Descubra a idade teórica aproximada para conquistar a independência de salários fixados de terceiros.',
    category: 'aposentadoria',
    icon: 'ShieldCheck',
    tags: ['independência', 'aposentadoria', 'metas', 'salário'],
    type: 'apo_liberdade',
    inputs: [
      { id: 'gastos_mensais', label: 'Gasto Mensal Desejado', def: 4000, type: 'number', pref: 'R$' },
      { id: 'patrimonio_atual', label: 'Patrimônio Acumulado Hoje', def: 50000, type: 'number', pref: 'R$' },
      { id: 'aporte_mensal', label: 'Aporte de Investimento Mensal', def: 1000, type: 'number', pref: 'R$' },
      { id: 'taxa_real', label: 'Rentabilidade Real de Ativos (a.a.)', def: 6.0, type: 'number', suff: '%' }
    ],
    outputs: [
      { id: 'anos_restantes', label: 'Tempo até Liberdade Financeira', suff: ' anos', isPrimary: true },
      { id: 'patrimonio_alvo', label: 'Patrimônio Alvo Necessário (4% SWR)', pref: 'R$' }
    ],
    faq: [
      { q: 'O que define a independência?', a: 'Você conquista a independência financeira quando seus investimentos acumulados geram renda real suficiente para arcar com seus custos de vida sem precisar de um salário formal.' }
    ]
  }
];

// 2. Perform replacements in `content`
// First let's update types
const newTypesLiteral = " | 'trab_fgts' | 'trab_noturno' | 'trab_insalubridade' | 'trab_periculosidade' | 'trab_seguro' | 'trab_vt' | 'trab_falta' | 'mat_porcentagem' | 'mat_media_ponderada' | 'mat_pitagoras' | 'mat_area_formas' | 'mat_potencia_raiz' | 'mat_fatorial' | 'mat_sociedade' | 'mat_bhaskara' | 'imob_price_sac' | 'imob_reajuste' | 'imob_itbi' | 'imob_cap_rate' | 'imob_amortizacao' | 'imob_alugar_comprar' | 'imob_cet' | 'imob_m2' | 'imob_rateio' | 'imob_iptu' | 'est_desvio_padrao' | 'est_margem_erro' | 'est_combinatoria' | 'est_probabilidade' | 'est_churn' | 'est_crescimento' | 'est_funil' | 'est_mediana_moda' | 'est_confianca' | 'est_cac_ltv' | 'jur_mora' | 'jur_correcao' | 'jur_custas' | 'jur_pensao' | 'jur_ganho_capital' | 'jur_divisao_bens' | 'jur_inventario' | 'jur_simples_nacional' | 'jur_iss' | 'jur_irrf_invest' | 'util_cambio' | 'util_conta_bar' | 'util_energia_comp' | 'util_ar_btu' | 'util_tinta_m2' | 'util_chuveiro' | 'util_buffet' | 'util_freezer' | 'util_rejunte' | 'util_supermercado' | 'apo_prev_privada' | 'apo_viver_renda' | 'apo_reserva' | 'apo_depreciacao' | 'apo_inflacao' | 'apo_fgts_corr' | 'apo_custo_apos' | 'apo_swr' | 'apo_liberdade';";

const typeUnionRegex = /type: '[^;]+';/;
content = content.replace(typeUnionRegex, `type:${newTypesLiteral}`);

// 3. Remove `DYNAMIC_SPARSE_RECORDS` list
const sparseRecordsStartIndex = content.indexOf('const DYNAMIC_SPARSE_RECORDS');
if (sparseRecordsStartIndex !== -1) {
  const sparseRecordsEndIndex = content.indexOf('];', sparseRecordsStartIndex);
  if (sparseRecordsEndIndex !== -1) {
    const recordsStr = content.slice(sparseRecordsStartIndex, sparseRecordsEndIndex + 2);
    content = content.replace(recordsStr, 'const DYNAMIC_SPARSE_RECORDS: any[] = [];');
  }
}

// 4. Remove sparse generation loop from `buildDynamicCalculators`
const sparseLoopStr = `  // 2. Synthesize the rest 60 calculators automatically from sparse metadata to prevent token limits
  DYNAMIC_SPARSE_RECORDS.forEach(item => {`;
const loopStartIndex = content.indexOf(sparseLoopStr);
if (loopStartIndex !== -1) {
  // We want to delete until the end of this function where the loop finishes.
  // The loop ends right before `return dynamicCalcs;`
  const returnIndex = content.indexOf('return dynamicCalcs;', loopStartIndex);
  if (returnIndex !== -1) {
    const blockToRemove = content.slice(loopStartIndex, returnIndex);
    content = content.replace(blockToRemove, '// Sparse loop removed\n  ');
  }
}

// 5. Insert new metadata elements inside `RAW_DYNAMIC_METADATA`
// We'll search for the end of the `RAW_DYNAMIC_METADATA` array or insert it at the beginning.
// Let's insert the new metadata elements at the beginning of the array.
// Locate `const RAW_DYNAMIC_METADATA: {` and then `] = [`
const rawDynamicIndex = content.indexOf('const RAW_DYNAMIC_METADATA');
if (rawDynamicIndex !== -1) {
  const arrayStartIndex = content.indexOf('] = [', rawDynamicIndex);
  if (arrayStartIndex !== -1) {
    const insertPosition = arrayStartIndex + 5;
    const newItemsStr = newMetadataDefinitions.map(item => JSON.stringify(item, null, 2)).join(',\n') + ',\n';
    content = content.slice(0, insertPosition) + newItemsStr + content.slice(insertPosition);
  }
}

// 6. Write the refactored content back to catalog.ts for validation
fs.writeFileSync(catalogPath, content, 'utf-8');
console.log('Successfully wrote catalog file updates metadata.');
