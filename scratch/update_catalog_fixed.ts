import * as fs from 'fs';
import * as path from 'path';

const catalogPath = path.resolve('d:/Socalculadoras/src/data/calculatorsCatalog.ts');
let content = fs.readFileSync(catalogPath, 'utf-8');

// 1. Remove DYNAMIC_SPARSE_RECORDS completely and replace with empty array
const sparseRecordsStart = content.indexOf('const DYNAMIC_SPARSE_RECORDS');
const buildDynamicCalcsStart = content.indexOf('const buildDynamicCalculators');

if (sparseRecordsStart !== -1 && buildDynamicCalcsStart !== -1) {
  const segmentToRemove = content.slice(sparseRecordsStart, buildDynamicCalcsStart);
  content = content.replace(segmentToRemove, 'const DYNAMIC_SPARSE_RECORDS: any[] = [];\n\n');
  console.log('Removed DYNAMIC_SPARSE_RECORDS declaration.');
} else {
  console.error('Error: Could not locate DYNAMIC_SPARSE_RECORDS or const buildDynamicCalculators');
}

// 2. Remove the sparse generation loop from buildDynamicCalculators
const loopStartMarker = '// 2. Synthesize the rest 60';
const loopStartIdx = content.indexOf(loopStartMarker);
const returnMarker = 'return dynamicCalcs;';
const returnIdx = content.indexOf(returnMarker, loopStartIdx !== -1 ? loopStartIdx : 0);

if (loopStartIdx !== -1 && returnIdx !== -1) {
  const loopSegment = content.slice(loopStartIdx, returnIdx);
  content = content.replace(loopSegment, '// Sparse loop removed\n  ');
  console.log('Removed sparse generation loop from buildDynamicCalculators.');
} else {
  console.error('Error: Could not locate sparse loop or return statement.');
}

// 3. Update the type literal
const typeUnionRegex = /type:\s*'[^;]+';/;
const newTypesLiteral = `type: 'percentage' | 'ratio' | 'sum' | 'multiply' | 'subtract' | 'compound' | 'simple_tax' | 'agro_grains' | 'agro_cattle' | 'agro_land' | 'agro_soil' | 'agro_feed' | 'agro_seeds' | 'log_freight' | 'log_cost_per_km' | 'log_cubage' | 'log_waiting_time' | 'log_driver_hours' | 'const_tijolos' | 'const_tinta' | 'const_piso' | 'evento_churrasco' | 'evento_receita' | 'evento_bebida' | 'energia_consumo' | 'energia_solar' | 'energia_carbono' | 'edu_sisu' | 'edu_ponderada' | 'edu_leitura' | 'trab_fgts' | 'trab_noturno' | 'trab_insalubridade' | 'trab_periculosidade' | 'trab_seguro' | 'trab_vt' | 'trab_falta' | 'vei_flex' | 'vei_consumption' | 'vei_ipva' | 'vei_depreciation' | 'vei_km_reimbursement' | 'vei_finance' | 'vei_insurance' | 'vei_travel_time' | 'vei_toll_split' | 'vei_maintenance' | 'mat_porcentagem' | 'mat_media_ponderada' | 'mat_pitagoras' | 'mat_area_formas' | 'mat_potencia_raiz' | 'mat_fatorial' | 'mat_sociedade' | 'mat_bhaskara' | 'imob_price_sac' | 'imob_reajuste' | 'imob_itbi' | 'imob_cap_rate' | 'imob_amortizacao' | 'imob_alugar_comprar' | 'imob_cet' | 'imob_m2' | 'imob_rateio' | 'imob_iptu' | 'est_desvio_padrao' | 'est_margem_erro' | 'est_combinatoria' | 'est_probabilidade' | 'est_churn' | 'est_crescimento' | 'est_funil' | 'est_mediana_moda' | 'est_confianca' | 'est_cac_ltv' | 'jur_mora' | 'jur_correcao' | 'jur_custas' | 'jur_pensao' | 'jur_ganho_capital' | 'jur_divisao_bens' | 'jur_inventario' | 'jur_simples_nacional' | 'jur_iss' | 'jur_irrf_invest' | 'util_cambio' | 'util_conta_bar' | 'util_energia_comp' | 'util_ar_btu' | 'util_tinta_m2' | 'util_chuveiro' | 'util_buffet' | 'util_freezer' | 'util_rejunte' | 'util_supermercado' | 'apo_prev_privada' | 'apo_viver_renda' | 'apo_reserva' | 'apo_depreciacao' | 'apo_inflacao' | 'apo_fgts_corr' | 'apo_custo_apos' | 'apo_swr' | 'apo_liberdade';`;

content = content.replace(typeUnionRegex, newTypesLiteral);
console.log('Updated the type literal definition.');

// 4. Inject 57 new dynamic metadata definitions into RAW_DYNAMIC_METADATA
const metadataDefinitions = [
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
      { id: 'valor_venda', label: 'Preço de Venda Praticado', def: 40000, type: 'number', pref: 'R$' },
      { id: 'valor_compra', label: 'Custo de Aquisição Escriturado', def: 25000, type: 'number', pref: 'R$' },
      { id: 'isencao_unico', label: 'Imóvel Único Residencial até R$ 440 mil', def: 'nao', type: 'select', op: [{v: 'nao', l: 'Não / Não se Enquadra'}, {v: 'sim', l: 'Sim'}] }
    ],
    outputs: [
      { id: 'imposto_devido', label: 'Imposto s/ Ganho de Capital', pref: 'R$', isPrimary: true },
      { id: 'ganho_bruto', label: 'Ganho de Capital Bruto (Lucro)', pref: 'R$' },
      { id: 'aliquota_ir', label: 'Alíquota de Imposto Aplicável', suff: '%' }
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
      { id: 'ppl', label: 'Pessoas Ocupantes Frequentes', def: 2, type: 'number', suff: 'pessoa(s)' },
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

// Locate RAW_DYNAMIC_METADATA start
const rawStartMarker = 'const RAW_DYNAMIC_METADATA';
const rawStartIdx = content.indexOf(rawStartMarker);
const arrayStartIdx = content.indexOf('] = [', rawStartIdx);

if (rawStartIdx !== -1 && arrayStartIdx !== -1) {
  const insertPos = arrayStartIdx + 5;
  const newItemsStr = metadataDefinitions.map(item => JSON.stringify(item, null, 2)).join(',\n') + ',\n';
  content = content.slice(0, insertPos) + newItemsStr + content.slice(insertPos);
  console.log('Injected new metadata records into RAW_DYNAMIC_METADATA.');
} else {
  console.error('Error: Could not locate RAW_DYNAMIC_METADATA array insertion point.');
}

// 5. Inject calculation formulas for all 57 new types inside calculateFn
// Find `else if (raw.type === 'vei_maintenance') { ... }` and the `return results;` after it
const maintenanceMarker = "else if (raw.type === 'vei_maintenance')";
const maintIdx = content.indexOf(maintenanceMarker);
const returnMarker2 = "return results;";
const endMaintIdx = content.indexOf(returnMarker2, maintIdx !== -1 ? maintIdx : 0);

if (maintIdx !== -1 && endMaintIdx !== -1) {
  // We insert right before `return results;`
  const formulasText = `
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
        results['percentual_usado'] = parseFloat(((cost / (budget || 1)) * 100).toFixed(1));
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
`;

  content = content.slice(0, endMaintIdx) + formulasText + content.slice(endMaintIdx);
  console.log('Successfully injected formulas into calculateFn.');
} else {
  console.error('Error: Could not locate vei_maintenance or return results; block.');
}

// 6. Write final updated file content
fs.writeFileSync(catalogPath, content, 'utf-8');
console.log('Overwrote calculatorsCatalog.ts successfully.');
