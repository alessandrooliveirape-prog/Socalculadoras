import { CalcSeoDetail } from './types';

export const FINANCAS_TRABALHISTA_SEO: Record<string, CalcSeoDetail> = {
  // ================= FINANÇAS (14) =================
  'juros-compostos': {
    title: 'Calculadora de Juros Compostos Online Grátis | Brasil Calculadoras',
    description: 'Simule a evolução de investimentos com juros compostos, capital inicial e aportes mensais recorrentes. Veja gráficos de crescimento patrimonial e rendimento real.',
    domainConcept: 'Os juros compostos representam o mecanismo matemático mais poderoso para construção de patrimônio ao longo do tempo. Ao contrário dos juros simples — nos quais a taxa incide exclusivamente sobre o capital inicialmente aplicado —, nos juros compostos o rendimento apurado em cada período é incorporado ao saldo principal, passando a render novos juros nos ciclos seguintes. Esse fenômeno de "juros sobre juros" produz uma curva de crescimento exponencial: nos primeiros meses o ganho parece modesto, mas após alguns anos os rendimentos mensais passam a superar o próprio valor dos depósitos novos feitos pelo investidor. Esta ferramenta permite combinar um aporte inicial único com contribuições mensais regulares, comparando taxas anuais ou mensais para projetar metas de reserva de longo prazo, compra planejada ou independência financeira.',
    formulaText: 'O cálculo combina duas parcelas capitalizadas à taxa mensal equivalente i_m = (1 + i_a)^(1/12) - 1 (quando informada taxa anual) ao longo de n meses: Montante Final M = P × (1 + i_m)^n + PMT × [((1 + i_m)^n - 1) / i_m], em que P é o capital inicial e PMT representa o aporte mensal recorrente.',
    workedExample: 'Imagine um investidor que começa com R$ 5.000,00 de capital inicial e aplica R$ 500,00 todos os meses a uma taxa de 10% ao ano (equivalente a ~0,7974% ao mês) durante 10 anos (120 meses). Ao final do período, terá desembolsado R$ 65.000,00 do próprio bolso (R$ 5.000 + 120 × R$ 500), porém o montante bruto acumulado atingirá aproximadamente R$ 112.976,00 — sendo quase R$ 47.976,00 gerados exclusivamente pelo efeito exponencial dos juros compostos sobre o saldo acumulado.',
    whenToUse: 'Utilize este simulador antes de investir em Tesouro Direto (Selic, Prefixado ou IPCA+), CDBs, LCIs, LCAs, fundos de renda fixa ou carteiras previdenciárias, bem como para planejar objetivos de médio e longo prazo com aportes mensais constantes.',
    importantTips: 'Sempre converta taxas anuais para equivalentes mensais pela fórmula exponencial em vez de dividir simplesmente por 12, pois a divisão linear superestima o rendimento mensal em juros compostos. Lembre-se também de descontar a inflação esperada e a alíquota regressiva de Imposto de Renda no resgate.',
    sources: [
      { name: 'Banco Central do Brasil - Calculadora do Cidadão', url: 'https://www.bcb.gov.br/acessoinformacao/calculadoradocidadao' },
      { name: 'Tesouro Direto - Simulador Oficial', url: 'https://www.tesourodireto.com.br/simulador/' }
    ],
    extraFaqs: [
      { q: 'Qual é a diferença prática entre juros compostos mensais e anuais?', a: 'Uma taxa nominal de 1% ao mês capitalizada por 12 meses equivale a (1,01)^12 - 1 = 12,68% ao ano, e não a 12%. Quanto menor o intervalo de capitalização da mesma taxa nominal, maior o montante final.' },
      { q: 'Como estimar o ganho real descontando a inflação?', a: 'Subtraia a inflação pela equação de Fisher: Taxa Real = [(1 + Taxa Líquida) / (1 + IPCA)] - 1. Esse valor ajustado reflete o aumento efetivo do seu poder de compra.' },
      { q: 'Por que o prazo pesa mais que o valor inicial nos juros compostos?', a: 'Como o tempo n aparece no expoente da fórmula (1 + i)^n, dobrar o horizonte de investimento multiplica exponencialmente os rendimentos acumulados nos últimos anos da aplicação.' }
    ]
  },
  'clt-pj': {
    title: 'Comparador CLT vs PJ 2026: Salário Líquido e Impostos | Brasil Calculadoras',
    description: 'Compare remuneração líquida na CLT contra faturamento como PJ (Simples Nacional ou MEI). Inclui INSS, IRRF, FGTS, 13º salário, férias + 1/3 e custos contábeis.',
    domainConcept: 'Avaliar uma proposta de trabalho como Pessoa Jurídica (PJ) frente a uma contratação tradicional pela Consolidação das Leis do Trabalho (CLT) exige ir muito além da comparação entre salários brutos. Enquanto o vínculo CLT oferece proteção social e benefícios embutidos — como depósito mensal de 8% no FGTS, décimo terceiro salário, férias remuneradas acrescidas do terço constitucional, vale-alimentação/refeição e seguro-desemprego —, o contrato PJ remunera um faturamento bruto maior sobre o qual incidem tributos empresariais (DAS MEI ou alíquotas do Simples Nacional nos Anexos III ou V), mensalidade de contabilidade, pró-labore e ausência de verbas rescisórias automáticas. Este comparador coloca ambas as modalidades na mesma base mensal e anual líquida para uma decisão profissional segura.',
    formulaText: 'No lado CLT, deduz-se INSS progressivo e IRRF do salário bruto e soma-se o valor anualizado de benefícios (13º, 1/3 de férias, 8% FGTS e auxílios divididos por 12). No lado PJ, deduz-se do faturamento mensal o imposto do Simples Nacional (ou guia fixa do MEI), INSS sobre pró-labore e custo contábil mensal, comparando a sobra financeira líquida efetiva.',
    workedExample: 'Suponha uma vaga CLT com salário bruto de R$ 6.000,00 mais R$ 800,00 de benefícios mensais (VR/saúde) contra uma proposta PJ de R$ 9.500,00 mensais no Simples Nacional Anexo III (alíquota inicial de 6%). Na CLT, após INSS (~R$ 652) e IRRF (~R$ 530), o líquido mensal em conta é cerca de R$ 4.818,00; somando 1/12 de 13º, 1/3 de férias, FGTS (R$ 480) e benefícios (R$ 800), a equivalência total gira em torno de R$ 6.840,00/mês. No PJ de R$ 9.500,00, descontando R$ 570,00 de DAS (6%), R$ 180,00 de contabilidade e INSS sobre pró-labore (~R$ 167), o ganho líquido alcança aproximadamente R$ 8.583,00 mensais, superando a CLT mesmo reservando férias próprias.',
    whenToUse: 'Use sempre que receber uma proposta para migrar de regime CLT para prestação de serviços PJ (especialmente nas áreas de tecnologia, engenharia, design, saúde e consultoria) ou ao negociar o valor da sua nota fiscal mensal.',
    importantTips: 'Verifique se o seu CNAE está sujeito ao Fator R do Simples Nacional: atividades do Anexo V (alíquota inicial de 15,5%) podem cair para o Anexo III (6%) quando a folha de salários + pró-labore atinge pelo menos 28% do faturamento bruto. Lembre-se de reservar mensalmente um colchão de emergência de 15% a 20% para férias e eventuais períodos sem contrato.',
    sources: [
      { name: 'Receita Federal - Simples Nacional', url: 'https://www8.receita.fazenda.gov.br/SimplesNacional/' },
      { name: 'Consolidação das Leis do Trabalho - CLT', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' }
    ],
    extraFaqs: [
      { q: 'Qual percentual mínimo a mais devo pedir no PJ em relação à CLT?', a: 'Em geral, recomenda-se que o faturamento PJ seja entre 35% e 50% superior ao salário bruto CLT para compensar perda de FGTS, 13º, férias remuneradas, multa de 40%, plano de saúde corporativo e custos contábeis.' },
      { q: 'Quem trabalha como PJ tem direito a férias ou 13º salário?', a: 'Não por imposição legal. Qualquer período de descanso remunerado ou bônus em contratos PJ precisa ser acordado previamente em cláusula contratual ou provisionado pelo próprio prestador em sua reserva financeira.' },
      { q: 'Quando o MEI pode ser utilizado na prestação de serviços?', a: 'Apenas se o faturamento anual ficar dentro do limite de R$ 81.000,00 e a atividade exercida constar na lista oficial de ocupações permitidas ao Microempreendedor Individual (profissões regulamentadas como engenharia, medicina e advocacia, além de diversos cargos de TI, não se enquadram no MEI).' }
    ]
  },
  'margem-lucro': {
    title: 'Calculadora de Margem de Lucro e Markup Online | Brasil Calculadoras',
    description: 'Calcule margem de lucro bruta, margem líquida e índice markup multiplicador para precificar mercadorias e serviços sem vender com prejuízo.',
    domainConcept: 'Precificar produtos corretamente é o fator decisivo entre um negócio lucrativo e uma empresa que fatura alto mas fecha as portas por falta de caixa. Muitos comerciantes confundem Markup com Margem de Lucro — um erro crítico que reduz drasticamente a rentabilidade esperada. Enquanto o Markup é um fator aplicado sobre o custo unitário do produto para formar o preço de venda (de baixo para cima), a Margem de Lucro indica qual fatia do preço final efetivamente pago pelo cliente sobra como resultado após descontar custos de mercadoria, impostos sobre nota, taxas de cartão/marketplace e despesas operacionais.',
    formulaText: 'A Margem Líquida percentual é dada por [(Preço de Venda - Custo Total - Despesas/Impostos) / Preço de Venda] × 100. Já o Markup Multiplicador é calculado como 100 / [100 - (%Impostos + %Comissões + %Despesas + %Margem Alvo)], garantindo que ao multiplicar o custo pelo markup o preço final cubra todas as deduções percentuais sobre a venda.',
    workedExample: 'Considere um produto comprado por R$ 80,00 com 10% de despesas variáveis (imposto + taxa de maquininha/marketplace) e meta de 20% de margem líquida livre sobre o preço de venda. A soma das deduções sobre a venda é de 30%. Aplicando o Markup Divisor: 100 / (100 - 30) = 1,4286. Multiplicando R$ 80,00 × 1,4286, chega-se ao preço ideal de venda de R$ 114,29. Conferindo: 10% de R$ 114,29 (R$ 11,43) vão para taxas/impostos, R$ 80,00 pagam o custo e sobram exatamente R$ 22,86 de lucro líquido (20% sobre R$ 114,29).',
    whenToUse: 'Indispensável para lojistas de varejo, vendedores em marketplaces (Mercado Livre, Shopee, Amazon), e-commerces, restaurantes e prestadores de serviço ao cadastrar novos produtos, criar promoções de desconto ou negociar com fornecedores.',
    importantTips: 'Nunca dê um desconto de 20% sobre um produto cuja margem líquida é de 20% achando que empatou os custos: como os impostos e taxas de gateway incidem sobre o preço com desconto e o custo de compra permanece fixo, você pode operar com margem negativa.',
    sources: [
      { name: 'Sebrae - Como Formar o Preço de Venda', url: 'https://sebrae.com.br/' }
    ],
    extraFaqs: [
      { q: 'Posso ter margem de lucro de 100% em um produto?', a: 'Matematicamente, a margem de lucro sobre a venda só atingiria 100% se o produto tivesse custo zero e zero impostos. Quando alguém dobra o preço (compra por R$ 50 e vende por R$ 100), o markup é de 100% sobre o custo, mas a margem bruta é de 50% sobre a venda.' },
      { q: 'Qual a diferença entre margem bruta e margem líquida?', a: 'A margem bruta desconta apenas o custo direto da mercadoria ou serviço (CMV/CPV), enquanto a margem líquida deduz também impostos sobre faturamento, taxas financeiras, comissões e despesas fixas proporcionais.' },
      { q: 'Como incluir taxas de marketplace no markup?', a: 'Some a comissão percentual do marketplace e a alíquota do Simples Nacional na parcela percentual de despesas variáveis da fórmula do markup antes de calcular o fator multiplicador.' }
    ]
  },
  'juros-abusivos-financiamento': {
    domainConcept: 'A revisão de contratos bancários de financiamento de veículos, empréstimos pessoais e crédito direto ao consumidor começa pela verificação técnica da taxa de juros efetivamente cobrada em comparação à Taxa Média de Mercado divulgada mensalmente pelo Banco Central do Brasil (BACEN). Conforme entendimento consolidado pelo Superior Tribunal de Justiça (STJ), a cobrança de juros remuneratórios não sofre limitação automática de 12% ao ano quando praticada por instituições financeiras autorizadas, porém torna-se passível de revisão judicial quando se mostra flagrantemente excessiva e desproporcional frente à média praticada pelos demais bancos para operações equivalentes na mesma data de contratação.',
    formulaText: 'O simulador utiliza o sistema francês de amortização (Tabela Price) para recompor a prestação justa pela taxa média do BACEN: PMT_justa = Financiado × [i_m × (1 + i_m)^n] / [(1 + i_m)^n - 1], confrontando-a com a parcela efetivamente paga e mensurando o desvio percentual entre a taxa contratada e a taxa referencial de mercado.',
    whenToUse: 'Utilize antes de ingressar com ação revisional de contrato bancário, ao negociar quitação antecipada com a instituição financeira ou para auditar se tarifas embutidas elevaram a parcela real acima do contrato nominal.',
    importantTips: 'A taxa média exata varia conforme a modalidade (financiamento de automóveis PF, crédito pessoal não consignado, consignado INSS) e a data da assinatura do contrato. Consulte a série histórica correspondente no Sistema Gerenciador de Séries Temporais (SGS) do Banco Central.',
    sources: [
      { name: 'Banco Central do Brasil - Taxas de Juros de Operações de Crédito', url: 'https://www.bcb.gov.br/estatisticas/txjuros' },
      { name: 'Superior Tribunal de Justiça (STJ) - Jurisprudência Bancária', url: 'https://www.stj.jus.br/' }
    ],
    extraFaqs: [
      { q: 'A partir de quantos por cento acima da média do BACEN os juros são considerados abusivos?', a: 'Não há índice único na lei, mas diversos tribunais estaduais adotam como parâmetro de alerta taxas que ultrapassam entre 1,5 vez (50% acima) e o dobro da taxa média divulgada pelo Banco Central para a mesma operação e período.' },
      { q: 'Como descobrir a taxa real embutida se o contrato não mostrar?', a: 'Basta comparar o valor efetivamente liberado/financiado com o valor da prestação multiplicado pelo número de meses; taxas administrativas e seguros prestamistas embutidos no financiamento elevam o Custo Efetivo Total além da taxa nominal.' },
      { q: 'Posso quitar parcelas antecipadamente enquanto discuto o contrato?', a: 'Sim, e jamais interrompa o pagamento das parcelas sem decisão judicial expressa autorizando o depósito em juízo, evitando negativação do CPF e busca e apreensão do bem alienado.' }
    ]
  },
  'ferias-pj-equivalente': {
    domainConcept: 'Uma das armadilhas mais comuns de quem migra da carteira assinada para o trabalho como Pessoa Jurídica é dividir o salário CLT mensal por 168 ou 176 horas e aceitar o primeiro valor encontrado. Essa conta direta ignora que o empregado CLT recebe 13 salários anuais mais 1/3 de férias trabalhando apenas 11 meses efetivos no ano, além de acumular 8% mensais de FGTS e benefícios isentos de tributação pessoal (como vale-refeição e assistência médica). Esta calculadora converte todo o pacote anual CLT em um faturamento mensal e valor-hora PJ mínimo equivalente já acrescido de impostos médios do Simples Nacional e contabilidade.',
    formulaText: 'O Custo/Benefício Anual CLT equivale a (Salário × 13,33) + (Salário × 0,08 × 12) + (Benefícios × 12) + margem de segurança de 5% sobre o salário. Somando a provisão anual de contabilidade (R$ 1.800/ano) e dividindo pelo fator líquido pós-Simples Nacional Anexo III (0,94), obtém-se o faturamento PJ anual dividido por 12 meses e pelas horas mensais contratadas.',
    whenToUse: 'Ideal para profissionais autônomos e desenvolvedores negociando contratos de prestação de serviço contínuo (PJ mensal) que desejam tirar 30 dias de descanso anuais sem redução de renda líquida.',
    importantTips: 'Se o seu contrato PJ estiver enquadrado no Anexo V (15,5% de imposto inicial) por não atingir o Fator R de 28% com pró-labore, adicione cerca de 10% a mais sobre o valor-hora calculado para preservar o mesmo poder aquisitivo.',
    sources: [
      { name: 'Portal do Empreendedor / Simples Nacional', url: 'https://www.gov.br/empresas-e-negocios/pt-br' }
    ],
    extraFaqs: [
      { q: 'Por que somar uma provisão contábil fixa no cálculo do valor-hora PJ?', a: 'Toda empresa enquadrada no Simples Nacional (ME ou EPP) é obrigada por lei a manter escrituração contábil assinada por contador habilitado, além de pagar certificado digital anual e taxas municipais.' },
      { q: 'O cálculo já contempla férias remuneradas de 30 dias para o PJ?', a: 'Sim, a conversão considera o pacote integral de 13,33 remunerações anuais da CLT diluído nos recebimentos regulares para que você possa poupar o equivalente a 1 mês de descanso.' },
      { q: 'Qual é o divisor padrão de horas mensais para contratos PJ de 40h semanais?', a: 'Em média, contratos de 8 horas diárias de segunda a sexta totalizam cerca de 168 horas faturáveis por mês (21 dias úteis médios × 8 horas).' }
    ]
  },
  'rendimento-poupanca': {
    domainConcept: 'A caderneta de poupança continua sendo a aplicação financeira mais conhecida pelos brasileiros devido à isenção total de Imposto de Renda para pessoa física, ausência de taxa de administração e liquidez imediata a cada aniversário mensal. Contudo, sua rentabilidade obedece a uma regra legal definida pela Lei nº 12.703/2012, diretamente atrelada à meta da Taxa Selic definida pelo Copom. Entender essa regra permite comparar imediatamente se deixar dinheiro na poupança compensa frente a alternativas conservadoras como Tesouro Selic ou CDBs de liquidez diária pagando 100% do CDI.',
    formulaText: 'Quando a Taxa Selic meta supera 8,5% ao ano, a poupança rende exatamente 0,5% ao mês mais a Taxa Referencial (TR), capitalizados mensalmente: Total = Principal × (1 + 0,005)^meses. Quando a Selic é igual ou inferior a 8,5% a.a., o rendimento passa a ser 70% da Selic ao ano convertida ao mês mais a TR.',
    whenToUse: 'Use para projetar quanto um saldo parado na caderneta de poupança renderá em 6, 12 ou 36 meses e comparar o resultado com a inflação ou com simuladores de juros compostos em CDB/Tesouro Selic.',
    importantTips: 'Na poupança, os juros só são creditados na data de "aniversário" do depósito (uma vez a cada mês). Se você sacar o dinheiro um dia antes da data de aniversário, perde integralmente o rendimento daquele mês corrido.',
    sources: [
      { name: 'Banco Central do Brasil - Regras de Remuneração da Poupança', url: 'https://www.bcb.gov.br/estatisticas/remuneracaopoupanca' }
    ],
    extraFaqs: [
      { q: 'Por que a poupança rende menos que o Tesouro Selic quando os juros estão altos?', a: 'Com Selic acima de 8,5% ao ano, a poupança fica travada em 0,5% ao mês (~6,17% ao ano + TR), enquanto o Tesouro Selic acompanha a taxa básica integral (ex: 10,75% a 14%+ a.a.), entregando retorno líquido bem superior mesmo após o desconto de IR.' },
      { q: 'A poupança paga Imposto de Renda ou IOF?', a: 'Não. Os rendimentos da caderneta de poupança são totalmente isentos de Imposto de Renda e de IOF para pessoas físicas.' },
      { q: 'Como funciona a garantia do FGC na poupança?', a: 'O Fundo Garantidor de Créditos protege depósitos em poupança, CDBs e LCIs/LCAs até o limite de R$ 250.000,00 por CPF e por instituição financeira.' }
    ]
  },
  'conversor-inflacao-ipca': {
    domainConcept: 'O Índice Nacional de Preços ao Consumidor Amplo (IPCA), calculado mensalmente pelo IBGE, é o termômetro oficial da inflação no Brasil. Sempre que a inflação acumulada sobe e o seu dinheiro permanece parado em conta corrente ou em aplicações que rendem abaixo desse percentual, ocorre corrosão silenciosa do poder de compra: os mesmos R$ 1.000,00 passam a comprar uma cesta menor de bens e serviços. Esta calculadora traduz qualquer taxa inflacionária acumulada em perda monetária equivalente e poder de compra real remanescente.',
    formulaText: 'O poder de compra ajustado de uma quantia financeira frente à inflação acumulada é calculado dividindo o valor nominal pelo fator inflacionário: Poder Restante = Valor Original / (1 + Taxa de Inflação / 100), enquanto a desvalorização corresponde à diferença entre o valor original e o poder restante.',
    whenToUse: 'Utilize para avaliar o impacto da inflação anual ou acumulada sobre reservas paradas, reajustes salariais abaixo do IPCA ou metas de retorno mínimo de investimentos.',
    importantTips: 'Para manter o mesmo poder aquisitivo de R$ 10.000,00 após uma inflação acumulada de 10%, você precisa de R$ 11.000,00 — porém o poder de compra real de R$ 10.000,00 que não foram corrigidos cai para R$ 9.090,91 (10.000 / 1,10), e não R$ 9.000,00.',
    sources: [
      { name: 'IBGE - Índice Nacional de Preços ao Consumidor Amplo (IPCA)', url: 'https://www.ibge.gov.br/indicadores' }
    ],
    extraFaqs: [
      { q: 'Por que perder 5% com inflação é diferente de subtrair 5% direto?', a: 'Porque a inflação aumenta o denominador (preço dos bens). Se um produto de R$ 100 sobe 100% para R$ 200, seus R$ 100 originais agora compram 50% do produto (poder de compra caiu pela metade, e não 100%).' },
      { q: 'Qual a diferença entre IPCA e IGP-M?', a: 'O IPCA mede a variação de preços ao consumidor final nas principais regiões metropolitanas, enquanto o IGP-M (FGV) tem 60% de peso no atacado (IPA) e sofre forte influência do dólar e commodities.' },
      { q: 'Como proteger o patrimônio contra a perda inflacionária?', a: 'Alocando reservas acima da reserva de emergência em ativos indexados ao IPCA (como Tesouro IPCA+) ou títulos pós-fixados de renda fixa que superem a inflação líquida de impostos.' }
    ]
  },
  'custo-capital-giro': {
    domainConcept: 'O capital de giro representa o oxigênio financeiro de curto prazo de qualquer empresa: é o montante de recursos líquidos necessários para pagar fornecedores, salários, aluguel, energia e tributos durante o intervalo entre a realização da venda e a entrada efetiva do dinheiro no caixa (especialmente quando o negócio vende parcelado no cartão, boleto a prazo ou mantém estoques elevados). Empresas lucrativas no papel frequentemente enfrentam insolvência e precisam recorrer a empréstimos caros de cheque especial ou antecipação de recebíveis justamente por não dimensionarem seu capital de giro mínimo.',
    formulaText: 'O dimensionamento referencial calcula o custo fixo/operacional diário dividindo o gasto mensal por 30 dias e multiplicando pelo ciclo financeiro em dias: Capital de Giro Recomendado = (Custos Fixos Mensais / 30) × Prazo Médio de Recebimento em dias.',
    whenToUse: 'Essencial ao abrir um novo negócio, expandir prazos de parcelamento para clientes, aumentar estoque sazonal ou solicitar linhas de crédito de capital de giro junto a bancos e cooperativas.',
    importantTips: 'Reduzir o prazo médio de recebimento (incentivando pagamentos via Pix com pequeno desconto) ou negociar prazos maiores com fornecedores diminui diretamente a necessidade de capital de giro imobilizado no caixa.',
    sources: [
      { name: 'Sebrae - Gestão Financeira e Capital de Giro', url: 'https://sebrae.com.br/' }
    ],
    extraFaqs: [
      { q: 'Qual a diferença entre Capital de Giro Próprio e Capital de Giro de Terceiros?', a: 'O capital próprio vem do lucro retido ou aporte dos sócios, sem custo de juros bancários. O de terceiros decorre de empréstimos ou antecipação de recebíveis, reduzindo a margem líquida devido aos encargos financeiros.' },
      { q: 'O que acontece quando o prazo médio de pagamento a fornecedores é menor que o de recebimento?', a: 'Gera um descasamento financeiro positivo (Ciclo Financeiro longo): a empresa precisa desembolsar caixa antes de receber dos clientes, exigindo reserva proporcionalmente maior de capital de giro.' },
      { q: 'Quantos dias de operação o capital de giro deve cobrir?', a: 'No mínimo todo o ciclo financeiro líquido entre compra, estocagem e recebimento das vendas; empresas prudentes mantêm adicional equivalente a 1 a 2 meses de despesas fixas.' }
    ]
  },
  'roi-investimento-comum': {
    domainConcept: 'O Retorno sobre Investimento (ROI — Return on Investment) é o indicador universal que mede a eficiência financeira de qualquer alocação de recursos, comparando o ganho líquido obtido em relação ao capital originalmente desembolsado. Seja avaliando campanhas de tráfego pago, compra de máquinas industriais, treinamentos corporativos, lançamento de produtos ou operações comerciais pontuais, o ROI traduz lucros absolutos em um percentual padronizado que permite ranquear diferentes projetos entre si independentemente do tamanho de cada orçamento.',
    formulaText: 'O cálculo apura primeiro o lucro bruto líquido de aquisição (Superávit = Retorno Bruto Obtido - Custo Financeiro de Aquisição) e em seguida divide pelo custo total investido: ROI (%) = [(Retorno - Custo) / Custo] × 100.',
    whenToUse: 'Use para avaliar o retorno de ações de marketing, compra de equipamentos que reduzem custos operacionais, investimentos imobiliários de reforma para revenda ou projetos empresariais de curto e médio prazo.',
    importantTips: 'O ROI clássico não considera o fator tempo (prazo do retorno). Um ROI de 30% obtido em 3 meses é muito superior a um ROI de 30% que levou 3 anos para se materializar — sempre analise o percentual acompanhado do prazo de retorno (Payback).',
    sources: [
      { name: 'Endeavor Brasil - Indicadores Financeiros ROI e Payback', url: 'https://endeavor.org.br/' }
    ],
    extraFaqs: [
      { q: 'Um ROI de 100% significa que dobrei o dinheiro investido?', a: 'Sim. Se você investiu R$ 20.000 e obteve um retorno bruto de R$ 40.000, o lucro líquido foi de R$ 20.000, gerando um ROI de (20.000 / 20.000) × 100 = 100%.' },
      { q: 'O ROI pode ser negativo?', a: 'Sim. Quando o retorno obtido é inferior ao custo total investido, o superávit é negativo (prejuízo) e o ROI percentual aparece abaixo de zero.' },
      { q: 'Qual a diferença entre ROI e ROAS em marketing digital?', a: 'O ROAS (Return on Ad Spend) divide a receita bruta gerada diretamente pelo gasto em anúncios, enquanto o ROI desconta também custos dos produtos, impostos e despesas operacionais da venda.' }
    ]
  },
  'faturamento-lucro-presumido': {
    domainConcept: 'No Brasil, empresas cujo faturamento anual ultrapassa o teto do Simples Nacional (R$ 4,8 milhões) ou que exercem atividades com carga tributária mais favorável fora do regime simplificado costumam optar pelo Lucro Presumido. Nesse regime tributário, a Receita Federal não exige apuração contábil exata do lucro real para calcular o IRPJ: ela presume um percentual fixo de lucratividade sobre a receita bruta trimestral — tradicionalmente 8% para comércio/indústria e 32% para prestação de serviços em geral — e aplica a alíquota de 15% do Imposto de Renda Pessoa Jurídica sobre essa base presumida.',
    formulaText: 'A Base de Cálculo Presumida é dada por Receita Bruta Trimestral × (Alíquota de Presunção / 100). Em seguida, o IRPJ básico trimestral corresponde a 15% dessa base presumida: Imposto = Base Presumida × 0,15.',
    whenToUse: 'Utilize para estimar rapidamente a parcela básica de IRPJ trimestral em empresas prestadoras de serviços, consultorias, clínicas médicas ou indústrias optantes pelo Lucro Presumido.',
    importantTips: 'Lembre-se que no Lucro Presumido, caso o lucro presumido trimestral ultrapasse R$ 60.000,00 (equivalente a R$ 20.000,00 por mês), incide o adicional de 10% de IRPJ exclusivamente sobre o valor excedente, além de CSLL, PIS, COFINS e ISS/ICMS.',
    sources: [
      { name: 'Receita Federal do Brasil - Tributação pelo Lucro Presumido', url: 'https://www.gov.br/receitafederal/pt-br' }
    ],
    extraFaqs: [
      { q: 'Quais são as alíquotas padrão de presunção do IRPJ no Lucro Presumido?', a: 'De forma geral: 8% para comércio, indústria e transporte de cargas; 16% para transporte de passageiros e pequenas prestadoras específicas; e 32% para prestação de serviços profissionais e locação de bens.' },
      { q: 'Quando o Lucro Presumido pode ser mais barato que o Simples Nacional?', a: 'Empresas de serviços com margem de lucro real muito elevada (acima de 32%) e pouca folha salarial (enquadradas no Anexo V do Simples Nacional a partir de 15,5%) frequentemente pagam menos impostos no Lucro Presumido.' },
      { q: 'A apuração do IRPJ no Lucro Presumido é mensal ou trimestral?', a: 'A apuração do IRPJ e da CSLL ocorre trimestralmente (encerramento em 31 de março, 30 de junho, 30 de setembro e 31 de dezembro), enquanto PIS, COFINS e ISS são apurados mensalmente.' }
    ]
  },
  'ponto-de-equilibrio-venda': {
    domainConcept: 'O Ponto de Equilíbrio Contábil (Break-Even Point) responde à pergunta mais fundamental de qualquer empreendedor: quantas unidades preciso vender ou quanto devo faturar por mês apenas para pagar todas as contas fixas e variáveis sem ter prejuízo? Abaixo desse volume mínimo de vendas, o negócio opera no vermelho consumindo caixa; exatamente no ponto de equilíbrio, o lucro líquido é zero; e cada unidade vendida acima dessa marca passa a gerar lucro real equivalente à sua margem de contribuição unitária.',
    formulaText: 'Calcula-se primeiro a Margem de Contribuição Unitária = Preço Unitário de Venda - Despesa Variável Unitária. Em seguida, divide-se o total de Custos Fixos Mensais por essa margem: Unidades Mínimas = Custos Fixos / (Preço de Venda - Custo Variável), arredondadas para cima, e Faturamento Mínimo = Unidades × Preço de Venda.',
    whenToUse: 'Use ao elaborar planos de negócios, validar a viabilidade de abrir uma loja ou fábrica, avaliar o impacto de aumentar o aluguel/folha fixa ou simular metas mínimas mensais da equipe comercial.',
    importantTips: 'Quanto maior a margem de contribuição unitária (diferença entre preço de venda e custo variável direto por unidade), menos unidades você precisa vender para empatar seus custos fixos mensais.',
    sources: [
      { name: 'Sebrae - Ponto de Equilíbrio Financeiro', url: 'https://sebrae.com.br/' }
    ],
    extraFaqs: [
      { q: 'O que entra nos Custos Fixos e o que entra nos Custos Variáveis?', a: 'Custos fixos ocorrem independentemente de quantas vendas você faça no mês (aluguel, internet, salários administrativos, contador). Custos variáveis dependem diretamente de cada unidade vendida (matéria-prima, mercadoria, embalagem, comissão e imposto por nota).' },
      { q: 'O que acontece se o Custo Variável for maior que o Preço de Venda?', a: 'A margem de contribuição será negativa — ou seja, quanto mais unidades a empresa vender, maior será o prejuízo, tornando impossível atingir o ponto de equilíbrio sem reajustar o preço ou cortar custos diretos.' },
      { q: 'Qual a diferença entre ponto de equilíbrio contábil e financeiro?', a: 'O contábil inclui todas as despesas operacionais (inclusive depreciação de ativos); o financeiro exclui despesas que não geram saída de caixa no mês, focando apenas nos desembolsos efetivos.' }
    ]
  },
  'simulador-emprestimo-pessoal': {
    domainConcept: 'Contratar um empréstimo pessoal ou crédito parcelado exige analisar muito além da parcela que "cabe no bolso": é fundamental conhecer o total acumulado que será pago ao banco ao final do contrato e o percentual de juros sobre o valor originalmente tomado. Empréstimos pessoais tradicionais e financiamentos parcelados no varejo brasileiro utilizam quase invariavelmente o sistema de amortização francês (Tabela Price), no qual todas as prestações mensais possuem valor idêntico do primeiro ao último mês, embutindo maior proporção de juros nas parcelas iniciais.',
    formulaText: 'Pela Tabela Price, o valor fixo mensal da prestação é obtido por: PMT = PV × [i × (1 + i)^n] / [(1 + i)^n - 1], em que PV é o capital emprestado, i é a taxa de juros mensal (em decimal) e n o número de parcelas. O custo percentual total resulta de [(PMT × n - PV) / PV] × 100.',
    whenToUse: 'Utilize antes de aceitar ofertas de empréstimo pessoal no aplicativo do banco, comparar prazos curtos (12x) contra longos (36x ou 48x) ou calcular o impacto da portabilidade de crédito para uma taxa menor.',
    importantTips: 'Taxas mensais que parecem pequenas podem dobrar a dívida em prazos longos: um empréstimo a 3,5% ao mês em 36 vezes resulta em um custo total de juros próximo a 80% do valor emprestado. Sempre cheque também o IOF e seguros na CET oficial do contrato.',
    sources: [
      { name: 'Banco Central do Brasil - Taxas de Crédito Pessoal', url: 'https://www.bcb.gov.br/estatisticas/txjuros' }
    ],
    extraFaqs: [
      { q: 'O empréstimo pessoal inclui IOF no valor da parcela?', a: 'Sim. Nas operações reais, bancos cobram Imposto sobre Operações Financeiras (IOF fixo + alíquota diária até 365 dias), geralmente financiado junto com o principal, elevando o Custo Efetivo Total.' },
      { q: 'Posso quitar um empréstimo pessoal antes do prazo com abatimento de juros?', a: 'Sim. Pelo Código de Defesa do Consumidor, o tomador tem direito à liquidação antecipada total ou parcial com redução proporcional dos juros futuros embutidos nas parcelas.' },
      { q: 'Por que empréstimos consignados têm juros muito menores que o crédito pessoal?', a: 'Porque o desconto automático em folha salarial ou benefício do INSS reduz drasticamente o risco de inadimplência do banco, permitindo taxas muito abaixo do crédito pessoal sem garantia.' }
    ]
  },
  'calculadora-das-mei': {
    domainConcept: 'O Microempreendedor Individual (MEI) conta com um modelo tributário simplificado e unificado em uma única guia mensal chamada DAS-MEI (Documento de Arrecadação do Simples Nacional). O valor da guia mensal não varia de acordo com quanto o MEI fatura no mês: ele é fixado em 5% do salário mínimo nacional vigente para a Previdência Social (INSS), acrescido de um valor simbólico fixo conforme o ramo de atividade — R$ 1,00 de ICMS para comércio/indústria, R$ 5,00 de ISS para serviços, ou R$ 6,00 para quem exerce ambos. Atualizar esse valor anualmente garante que o CNPJ permaneça regular e com direitos previdenciários ativos.',
    formulaText: 'Em 2026 (referência base R$ 1.518,00 utilizada na guia), a contribuição previdenciária do MEI equivale a INSS = Salário Mínimo × 5% (R$ 75,90), somada a ICMS = R$ 1,00 (comércio/indústria) e/ou ISS = R$ 5,00 (serviços), respeitando o limite anual de faturamento de R$ 81.000,00.',
    whenToUse: 'Use para planejar o fluxo de caixa anual do MEI, confirmar o valor correto da guia DAS por atividade (Comércio, Serviços ou Comércio+Serviços) e monitorar o limite proporcional ou anual de faturamento.',
    importantTips: 'Mesmo nos meses em que o MEI não emitir notas fiscais ou não tiver faturamento, o pagamento mensal do DAS continua obrigatório. Lembre-se também de entregar a Declaração Anual do Simples Nacional (DASN-SIMEI) até 31 de maio.',
    sources: [
      { name: 'Portal do Empreendedor - Gov.br MEI', url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor' },
      { name: 'Receita Federal - PGMEI', url: 'https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/' }
    ],
    extraFaqs: [
      { q: 'O pagamento do DAS MEI garante aposentadoria pelo INSS?', a: 'Sim. A contribuição de 5% dá direito à aposentadoria por idade (com carência mínima de 180 meses), auxílio-doença, salário-maternidade, pensão por morte e auxílio-reclusão. Para aposentadoria por tempo de contribuição, é preciso complementar a guia em mais 15%.' },
      { q: 'O que acontece se o MEI faturar acima de R$ 81.000,00 no ano?', a: 'Se o excesso for de até 20% (até R$ 97.200), paga-se guia complementar sobre o excedente e migra-se para Microempresa (ME) no ano seguinte. Acima de 20%, o desenquadramento retroage ao início do ano-calendário.' },
      { q: 'Quem abre o MEI no meio do ano tem limite de R$ 81 mil inteiro?', a: 'Não. No primeiro ano de abertura, o teto é proporcional aos meses ativos: R$ 6.750,00 multiplicados pelo número de meses até dezembro.' }
    ]
  },
  'calculadora-gorjeta': {
    domainConcept: 'Dividir a conta de um restaurante, pizzaria ou rodízio entre colegas e familiares costuma gerar confusão quando entra na conta a taxa de serviço opcional (geralmente 10%, 12% ou 13%). Uma calculadora dedicada evita arredondamentos injustos e calcula de imediato tanto o acréscimo percentual exato da gorjeta quanto o valor exato a ser pago por cada pessoa via Pix ou cartão.',
    formulaText: 'Calcula-se a Gorjeta Total = Subtotal × (Gorjeta % / 100), obtendo a Conta Total = Subtotal + Gorjeta Total. O rateio individual resulta da divisão simples: Valor por Pessoa = Conta Total / Número de Pessoas.',
    whenToUse: 'Perfeita para almoços corporativos, confraternizações em restaurantes, viagens em grupo ou entregas coletivas em que o pedido é fechado em uma única comanda.',
    importantTips: 'No Brasil, conforme a Lei da Gorjeta (Lei nº 13.419/2017), a taxa de serviço de 10% (ou percentual cobrado pelo estabelecimento) é estritamente opcional para o consumidor, embora seja prática comum recompensar um bom atendimento.',
    sources: [
      { name: 'Lei da Gorjeta - Lei nº 13.419/2017', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13419.htm' }
    ],
    extraFaqs: [
      { q: 'O restaurante pode obrigar o pagamento dos 10% de gorjeta?', a: 'Não. Pelo Código de Defesa do Consumidor e pela Lei nº 13.419/2017, a gorjeta tem natureza facultativa, cabendo ao cliente decidir se deseja pagá-la integralmente, parcialmente ou recusá-la.' },
      { q: 'Como calcular o valor quando o couvert artístico é cobrado à parte?', a: 'Some os valores fixos de couvert artístico de todos os participantes ao subtotal antes de aplicar a divisão, observando que a taxa de serviço não deve incidir sobre itens não atendidos pela brigada, salvo aviso expresso.' },
      { q: 'Por que restaurantes passaram a cobrar 12% ou 13% em vez de 10%?', a: 'Muitos estabelecimentos elevam o percentual sugerido para cobrir encargos trabalhistas e retenções previstas nas convenções sindicais de repasse da taxa de serviço aos garçons.' }
    ]
  },

  // ================= TRABALHISTA & PROFISSÕES (29) =================
  'registro-horas': {
    title: 'Calculadora de Horas Trabalhadas (Timesheet & Freelancer) | Brasil Calculadoras',
    description: 'Controle turnos de trabalho, subtraia intervalos de almoço automaticamente e calcule seu faturamento por hora técnica ou freelancer em formato HH:MM.',
    domainConcept: 'Controlar com exatidão a carga horária diária é essencial tanto para empregados que acompanham o banco de horas e espelho de ponto quanto para freelancers, consultores e prestadores de serviços que cobram por hora trabalhada. Somar horários no formato relógio (base 60) e subtrair intervalos gera erros frequentes quando feito manualmente — especialmente ao converter minutos em frações decimais para multiplicar pelo valor da hora técnica. Esta calculadora de Timesheet registra entradas, saídas e pausas e transforma automaticamente a jornada em horas decimais e valor financeiro.',
    formulaText: 'Cada turno calcula a diferença em minutos totais (Saída - Entrada - Intervalo), somando os turnos do período e convertendo para horas decimais por Horas = Minutos Totais / 60. O faturamento bruto resulta da multiplicação: Faturamento = Horas Decimais × Valor da Hora.',
    workedExample: 'Se um profissional trabalha das 08:30 às 17:45 com 1 hora e 15 minutos (75 min) de intervalo para almoço, o tempo bruto é de 9h15 (555 minutos); descontados 75 minutos de pausa, restam exatamente 480 minutos (8,00 horas líquidas). Somando mais um turno extra de 2h30 (2,50 horas) no sábado com taxa de R$ 85,00/hora, o total faturado será de 10,50 × R$ 85,00 = R$ 892,50.',
    whenToUse: 'Use diariamente ao fechar planilhas de timesheet de projetos, conferir espelhos de ponto mensais da empresa ou emitir faturas e invoices mensais para clientes nacionais e internacionais.',
    importantTips: 'Lembre-se de que 15 minutos correspondem a 0,25 hora decimal (e não 0,15), e 45 minutos correspondem a 0,75 hora decimal. Registrar intervalos exatos evita cobranças contestadas por clientes.',
    sources: [
      { name: 'Consolidação das Leis do Trabalho - Jornada e Intervalos (Art. 71)', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' }
    ],
    extraFaqs: [
      { q: 'O intervalo de almoço entra como hora trabalhada remunerada?', a: 'Não. Pela regra geral da CLT (Art. 71), o intervalo intrajornada para repouso e alimentação não é computado na duração da jornada diária de trabalho.' },
      { q: 'Como converter o total de minutos em horas decimais para nota fiscal?', a: 'Divida o total de minutos excedentes por 60. Por exemplo, 40 minutos divididos por 60 resultam em 0,6667 hora decimal.' },
      { q: 'Posso exportar o resumo das horas para enviar ao cliente?', a: 'Sim, após calcular você pode copiar o relatório consolidado ou gerar arquivo CSV/PDF diretamente na barra superior da ferramenta.' }
    ]
  },
  'calculadora-de-rescisao-clt': {
    title: 'Calculadora de Rescisão CLT 2026 Completa | Brasil Calculadoras',
    description: 'Calcule o acerto rescisório líquido e bruto CLT 2026: saldo de salário, aviso prévio proporcional (Lei 12.506), 13º, férias + 1/3, INSS, IRRF e multa de 40% do FGTS.',
    domainConcept: 'A rescisão do contrato de trabalho na CLT envolve um conjunto rigoroso de cálculos que dependem diretamente do motivo do desligamento: dispensa sem justa causa, pedido de demissão, demissão por justa causa, término de contrato de experiência ou acordo mútuo criado pela Reforma Trabalhista (Art. 484-A). Cada modalidade altera quais verbas são devidas, se o aviso prévio é pago ou descontado, se há multa rescisória sobre o saldo do FGTS e sobre quais parcelas incidem INSS e Imposto de Renda Retido na Fonte (férias indenizadas, por exemplo, são isentas de ambos os tributos). Nosso simulador consolida todas essas variáveis pelas tabelas previdenciárias e fiscais de 2026.',
    formulaText: 'O cálculo apura: (1) Saldo de Salário = (Salário / 30) × Dias Trabalhados no Mês; (2) Aviso Prévio Proporcional = 30 dias + 3 dias por ano completo trabalhado até o teto de 90 dias (Lei 12.506/2011); (3) 13º Proporcional = (Salário / 12) × Meses com ≥15 dias no ano; (4) Férias Vencidas e Proporcionais + 1/3 constitucional; (5) Deduções separadas de INSS e IRRF sobre verbas salariais e 13º; e (6) Multa FGTS de 40% (dispensa sem justa causa) ou 20% (acordo consensual).',
    workedExample: 'Para um empregado com salário de R$ 3.500,00 dispensado sem justa causa no dia 15 do mês após 2 anos completos na empresa (aviso prévio indenizado de 36 dias, sem férias vencidas e com 6/12 avos de férias proporcionais e 6/12 avos de 13º): receberá R$ 1.750,00 de saldo de salário (15 dias), R$ 4.200,00 de aviso prévio indenizado (36 dias), R$ 1.750,00 de 13º proporcional (+1/12 avo da projeção do aviso prévio), R$ 2.333,33 de férias proporcionais com 1/3, além de R$ 2.688,00 de multa de 40% sobre o FGTS acumulado (~R$ 6.720,00), após descontos legais de INSS/IRRF apenas sobre as parcelas tributáveis.',
    whenToUse: 'Fundamental para conferir o Termo de Rescisão do Contrato de Trabalho (TRCT) entregue pelo RH antes da quitação, simular quanto se recebe ou perde ao pedir demissão e avaliar propostas de rescisão por acordo comum.',
    importantTips: 'A empresa dispõe de até 10 dias corridos após o término do contrato para pagar integralmente as verbas rescisórias (Art. 477, §6º da CLT), independentemente do tipo de aviso prévio; atrasos geram multa equivalente a um salário nominal do empregado.',
    sources: [
      { name: 'Consolidação das Leis do Trabalho - Art. 477 e 484-A', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' },
      { name: 'Lei do Aviso Prévio Proporcional - Lei nº 12.506/2011', url: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12506.htm' }
    ],
    extraFaqs: [
      { q: 'O aviso prévio indenizado projeta mais 1/12 de férias e 13º salário?', a: 'Sim. Pela legislação trabalhista e Súmula do TST, o período do aviso prévio — mesmo quando indenizado — integra o tempo de serviço para todos os efeitos, podendo acrescentar 1 avo adicional de férias e de 13º se atingir 15 dias no mês projetado.' },
      { q: 'Quais verbas da rescisão sofrem desconto de INSS e IRRF?', a: 'Saldo de salário e 13º salário proporcional sofrem descontos separados de INSS e IRRF. Férias indenizadas na rescisão, seu terço constitucional, aviso prévio indenizado e a multa de 40% do FGTS são isentos.' },
      { q: 'O que acontece no pedido de demissão se eu não cumprir o aviso prévio?', a: 'Se o empregado pede demissão e solicita dispensa imediata sem trabalhar os 30 dias, o empregador pode descontar o valor correspondente a um salário mensal das verbas rescisórias.' }
    ]
  },
  'calculadora-de-decimo-terceiro': {
    title: 'Calculadora de 13º Salário 2026: 1ª e 2ª Parcelas | Brasil Calculadoras',
    description: 'Calcule o valor bruto e líquido da 1ª parcela (sem descontos) e da 2ª parcela do décimo terceiro salário com tabelas progressivas de INSS e IRRF 2026.',
    domainConcept: 'Instituído pela Lei nº 4.090/1962, o décimo terceiro salário (gratificação natalina) assegura ao trabalhador CLT uma remuneração extra proporcional a cada mês trabalhado no ano civil — contando como mês integral qualquer fração igual ou superior a 15 dias de atividade. Por lei, o pagamento costuma ser dividido em duas parcelas: o adiantamento (1ª parcela) é pago entre 1º de fevereiro e 30 de novembro equivalente à metade do valor bruto proporcional sem nenhum desconto fiscal; já a 2ª parcela, paga até 20 de dezembro, quita a diferença descontando integralmente INSS e Imposto de Renda calculados sobre o valor bruto total do 13º (tributação exclusiva na fonte).',
    formulaText: 'Apura-se o Bruto Proporcional = (Salário Bruto / 12) × Meses Trabalhados. A 1ª Parcela líquida equivale a Bruto × 0,50. A 2ª Parcela líquida resulta de: Bruto Total - INSS(sobre o bruto do 13º) - IRRF(sobre Bruto - INSS - Dependentes) - 1ª Parcela já paga.',
    workedExample: 'Um profissional contratado o ano inteiro (12/12 avos) com salário bruto de R$ 4.000,00 e sem dependentes receberá na 1ª parcela (até 30/11) exatamente R$ 2.000,00 líquidos. Na 2ª parcela (até 20/12), sobre os R$ 4.000,00 brutos apura-se o INSS progressivo (~R$ 378,84) e o IRRF sobre a base de R$ 3.621,16 (~R$ 161,73). Subtraindo os R$ 2.000,00 adiantados e os R$ 540,57 de tributos, a 2ª parcela depositada será de aproximadamente R$ 1.459,43.',
    whenToUse: 'Ideal para planejar compras de final de ano, quitação de dívidas, pagamento de IPTU/IPVA de janeiro ou para auditar os dois contracheques do décimo terceiro salário no final do ano.',
    importantTips: 'Horas extras habituais, adicional noturno, periculosidade, insalubridade e comissões integram a base de cálculo do 13º salário pela média anual. Além disso, mais de 15 faltas injustificadas dentro de um mesmo mês fazem perder o respectivo avo (1/12).',
    sources: [
      { name: 'Lei da Gratificação Natalina - Lei nº 4.090/1962', url: 'https://www.planalto.gov.br/ccivil_03/leis/l4090.htm' },
      { name: 'Tribunal Superior do Trabalho - Guia do 13º Salário', url: 'https://www.tst.jus.br/' }
    ],
    extraFaqs: [
      { q: 'Por que a 2ª parcela do 13º é sempre menor que a 1ª parcela?', a: 'Porque a lei proíbe descontar INSS e IRRF na primeira parcela (que vem cheia em 50% do bruto), concentrando todos os descontos tributários dos 100% do décimo terceiro exclusivamente na segunda parcela.' },
      { q: 'O empregador é obrigado a pagar em duas parcelas ou pode pagar tudo junto?', a: 'Pode antecipar a parcela única até 30 de novembro, porém não pode deixar para pagar 100% do valor apenas em dezembro, pois o adiantamento mínimo de 50% vence obrigatoriamente até 30 de novembro.' },
      { q: 'Afastamento por licença-maternidade reduz o 13º salário?', a: 'Não. Durante a licença-maternidade o direito ao décimo terceiro permanece integral, enquanto em auxílio-doença comum superior a 15 dias a empresa paga os meses trabalhados e o INSS paga o abono proporcional aos meses de benefício.' }
    ]
  },
  'calculadora-de-ferias-clt': {
    title: 'Calculadora de Férias CLT 2026 (Com Venda de Dias e 1/3) | Brasil Calculadoras',
    description: 'Calcule suas férias CLT líquidas e brutas em 2026: dias gozados, adicional de 1/3 constitucional, venda de até 10 dias (abono pecuniário isento) e descontos INSS/IRRF.',
    domainConcept: 'Após completar cada ciclo de 12 meses de trabalho (período aquisitivo), o trabalhador CLT adquire o direito a 30 dias de férias remuneradas com acréscimo constitucional de um terço (1/3) sobre a remuneração. Desde a Reforma Trabalhista, o descanso pode ser fracionado em até três períodos com concordância do empregado, e o trabalhador tem a faculdade legal de converter até 1/3 das férias (máximo de 10 dias) em dinheiro — o chamado abono pecuniário. Uma vantagem fiscal relevante é que os dias vendidos como abono pecuniário e seu respectivo terço são considerados indenizatórios e ficam livres de INSS e IRRF.',
    formulaText: 'Férias Brutas = (Salário / 30) × Dias Gozados + (Valor dos Dias Gozados / 3). Sobre esse subtotal incidem INSS e IRRF progressivos. Caso haja venda de dias (Abono Pecuniário), soma-se (Salário / 30) × Dias Vendidos × 1,3333 diretamente ao valor líquido final, sem descontos tributários.',
    workedExample: 'Considere um salário de R$ 3.600,00 com venda de 10 dias e descanso de 20 dias: os 20 dias gozados somam R$ 2.400,00 + R$ 800,00 (1/3) = R$ 3.200,00 tributáveis (após INSS de ~R$ 278 e IRRF de ~R$ 74, restam R$ 2.848,00). Os 10 dias vendidos geram R$ 1.200,00 de abono + R$ 400,00 de terço = R$ 1.600,00 totalmente livres de impostos. O pagamento líquido total depositado antes das férias será de aproximadamente R$ 4.448,00.',
    whenToUse: 'Utilize antes de solicitar férias ao RH para decidir se vale a pena vender 10 dias (abono pecuniário), solicitar adiantamento da 1ª parcela do 13º nas férias e conferir o recibo de pagamento.',
    importantTips: 'O pagamento das férias deve ser creditado na conta do trabalhador até 2 dias antes do início do descanso (Art. 145 da CLT), e o início das férias não pode ocorrer nos 2 dias que antecedem feriado ou repouso semanal remunerado.',
    sources: [
      { name: 'CLT - Capítulo IV (Das Férias Anuais - Arts. 129 a 145)', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' }
    ],
    extraFaqs: [
      { q: 'A empresa pode recusar o meu pedido de vender 10 dias de férias?', a: 'Não, desde que o empregado formalize o requerimento por escrito até 15 dias antes do término do período aquisitivo (Art. 143 da CLT). Nesse prazo, a conversão de até 1/3 em abono pecuniário é um direito potestativo do trabalhador.' },
      { q: 'Por que o salário do mês seguinte ao retorno das férias vem menor?', a: 'Porque durante o mês de férias você recebeu antecipadamente a remuneração daqueles dias mais o terço constitucional; ao retornar, o salário seguinte pagará apenas os dias trabalhados após o término do descanso.' },
      { q: 'Posso dividir as férias em 3 períodos?', a: 'Sim, desde que haja concordância do empregado: um dos períodos deve ter no mínimo 14 dias corridos e os demais não podem ser inferiores a 5 dias corridos cada.' }
    ]
  },
  'calculadora-de-horas-extras': {
    title: 'Calculadora de Horas Extras 50% e 100% + Reflexo DSR | Brasil Calculadoras',
    description: 'Calcule o valor exato de horas extras na CLT com adicionais de 50% (dias úteis) e 100% (domingos e feriados), incluindo o cálculo automático do reflexo no DSR.',
    domainConcept: 'Sempre que o trabalhador sujeito a controle de jornada excede seu limite contratual diário ou semanal e essas horas não são compensadas em banco de horas válido, a empresa deve remunerar o tempo excedente com acréscimo legal mínimo de 50% em dias normais e 100% em domingos e feriados trabalhados sem folga compensatória. Além do valor direto da hora extra multiplicado pela quantidade de horas no mês, a Súmula 172 do Tribunal Superior do Trabalho determina que horas extras habituais reflitam obrigatoriamente sobre o Descanso Semanal Remunerado (DSR), elevando ainda mais o total devido em folha.',
    formulaText: 'Valor da Hora Normal = Salário Bruto / Jornada Mensal (padrão 220h para 44h/semana). Hora Extra = Hora Normal × (1 + Adicional%). Reflexo no DSR = (Total Bruto das Horas Extras / Dias Úteis do Mês incluindo sábados) × Domingos e Feriados do Mês.',
    workedExample: 'Com salário de R$ 2.640,00 em jornada de 220 horas mensais, a hora normal vale R$ 12,00. Realizando 15 horas extras a 50% (R$ 18,00/h = R$ 270,00) e 4 horas extras em feriado a 100% (R$ 24,00/h = R$ 96,00), o subtotal de extras soma R$ 366,00. Em um mês com 25 dias úteis e 5 domingos/feriados, o DSR reflexo será (R$ 366,00 / 25) × 5 = R$ 73,20, totalizando R$ 439,20 brutos adicionais no holerite.',
    whenToUse: 'Use no fechamento mensal do cartão de ponto para validar se as horas extras a 50%, 100% e o DSR sobre horas extras foram lançados corretamente no seu holerite.',
    importantTips: 'Convenções coletivas de diversas categorias estipulam adicionais superiores a 50% (como 60%, 75% ou 100% desde a primeira hora extra aos sábados). Além disso, horas extras habituais também entram na média de férias, 13º salário e FGTS.',
    sources: [
      { name: 'CLT - Art. 59 (Duração do Trabalho e Horas Suplementares)', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' },
      { name: 'TST - Súmula nº 172 (Repouso Remunerado e Horas Extras)', url: 'https://www.tst.jus.br/' }
    ],
    extraFaqs: [
      { q: 'Por que o cálculo usa 220 horas mensais se a semana tem 44 horas?', a: 'Pela matemática trabalhista da CLT, divide-se 44 horas semanais por 6 dias úteis (7,333h/dia) e multiplica-se por 30 dias do mês comercial, totalizando exatas 220 horas mensais (ou 200h para jornadas de 40h semanais e 180h para 36h).' },
      { q: 'O sábado entra como dia útil na divisão do DSR?', a: 'Sim. Para fins trabalhistas de cálculo de DSR sobre horas extras e comissões, o sábado conta no denominador como dia útil, enquanto domingos e feriados vão no numerador.' },
      { q: 'Hora extra noturna acumula os dois adicionais?', a: 'Sim. Quando a hora extra ocorre entre 22h e 5h, aplica-se primeiro o adicional noturno de 20% com redução ficta de 52m30s e, sobre essa hora já acrescida, aplica-se o percentual da hora extra (mínimo 50%).' }
    ]
  },
  'calculo-fgts-acumulado': {
    title: 'Calculadora de FGTS Acumulado 2026 (Depósitos e Saldo) | Brasil Calculadoras',
    description: 'Calcule quanto foi depositado mensalmente e o saldo nominal acumulado do seu FGTS pela regra CLT (8%), Jovem Aprendiz (2%) ou Empregado Doméstico (11,2%).',
    domainConcept: 'Criado pela Lei nº 8.036/1990, o Fundo de Garantia do Tempo de Serviço (FGTS) funciona como uma reserva vinculada em conta na Caixa Econômica Federal em nome do trabalhador, custeada integralmente pelo empregador sem nenhum desconto no salário do funcionário. Mensalmente até o dia 20, a empresa deve depositar o percentual correspondente sobre toda a remuneração bruta — incluindo horas extras, comissões, adicional noturno e 13º salário. Em contratos CLT comuns a alíquota é de 8%, caindo para 2% para Jovem Aprendiz e chegando a 11,2% para empregados domésticos (8% + 3,2% de antecipação indenizatória).',
    formulaText: 'O algoritmo aplica a alíquota da modalidade sobre a remuneração bruta mensal: Depósito Mensal = Salário Bruto × (Alíquota / 100) e multiplica pelos meses de contrato: Saldo Nominal Acumulado = Depósito Mensal × Meses Trabalhados.',
    whenToUse: 'Use para auditar o extrato analítico no aplicativo FGTS da Caixa, verificar se a empresa vem depositando corretamente todos os meses ou projetar o montante para compra da casa própria e base da multa de 40%.',
    importantTips: 'Lembre-se que o 13º salário também gera depósito de 8% de FGTS no fim do ano (o equivalente a 13 depósitos anuais para quem trabalha o ano todo). Além disso, o saldo real na Caixa recebe juros de 3% ao ano + TR + distribuição anual de lucros do fundo.',
    sources: [
      { name: 'Caixa Econômica Federal - Portal Oficial FGTS', url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts/' },
      { name: 'Lei do FGTS - Lei nº 8.036/1990', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8036.htm' }
    ],
    extraFaqs: [
      { q: 'A empresa pode descontar os 8% do FGTS do meu salário no holerite?', a: 'Nunca. O recolhimento do FGTS é obrigação exclusiva do empregador, somando-se por fora à remuneração sem reduzir o salário líquido.' },
      { q: 'Se eu aderir ao Saque-Aniversário, perco a multa de 40% na demissão?', a: 'Não perde a multa de 40%, que continua sendo paga integralmente na demissão sem justa causa. Você apenas fica impedido de sacar o saldo principal acumulado naquela ocasião (salvo hipóteses legais).' },
      { q: 'O que fazer se descobrir meses sem depósito no extrato do FGTS?', a: 'Verifique primeiro com o setor de RH da empresa; persistindo a inadimplência, o trabalhador pode denunciar ao Ministério do Trabalho ou ingressar com reclamação trabalhista exigindo os recolhimentos em atraso.' }
    ]
  },
  'adicional-noturno': {
    domainConcept: 'O trabalho executado no período noturno impõe maior desgaste biológico ao organismo por inverter o ciclo circadiano de vigília e sono. Por essa razão, o Artigo 73 da Consolidação das Leis do Trabalho garante duas vantagens cumulativas ao trabalhador urbano que atua entre 22h00 de um dia e 05h00 do dia seguinte: um adicional remuneratório mínimo de 20% sobre a hora diurna e a chamada "hora noturna reduzida", pela qual cada período de 52 minutos e 30 segundos trabalhados à noite já equivale a 1 hora completa remunerada.',
    formulaText: 'Valor da Hora Normal = Salário / Jornada Mensal; Hora Noturna (+20%) = Hora Normal × 1,20. Aplicando o fator de redução horária (60 / 52,5 = 1,142857), o Adicional Noturno Total resulta de: Hora Normal × 0,20 × (Horas Relógio × 60 / 52,5).',
    whenToUse: 'Essencial para profissionais de saúde, vigilância, hotelaria, logística, bares, restaurantes e indústria em turnos noturnos conferirem corretamente seus adicionais mensais.',
    importantTips: 'Pela Súmula 60 do TST, quando o empregado cumpre integralmente a jornada no período noturno e estende o expediente após as 05h00 da manhã (prorrogação), o adicional noturno continua sendo devido sobre as horas prorrogadas diurnas.',
    sources: [
      { name: 'CLT - Art. 73 (Do Trabalho Noturno)', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' }
    ],
    extraFaqs: [
      { q: 'O horário noturno rural é igual ao horário noturno urbano?', a: 'Não. Na agricultura o período noturno vai das 21h às 5h e na pecuária das 20h às 4h, ambos com adicional de 25% sobre a hora normal, mas sem a redução ficta de 52m30s.' },
      { q: 'Como funcionam 7 horas no relógio virando 8 horas pagas à noite?', a: 'Entre 22h e 5h existem 7 horas de relógio (420 minutos). Dividindo 420 minutos por 52,5 minutos por hora ficta noturna, obtêm-se exatamente 8 horas noturnas.' },
      { q: 'O adicional noturno habitual reflete em férias e 13º?', a: 'Sim. Quando pago com habitualidade, integra o salário para cálculo de férias + 1/3, décimo terceiro, aviso prévio, DSR e FGTS.' }
    ]
  },
  'adicional-insalubridade': {
    domainConcept: 'Trabalhadores expostos de forma habitual ou intermitente a agentes nocivos à saúde acima dos limites de tolerância definidos nas Normas Regulamentadoras (NR-15 do Ministério do Trabalho) — como ruído contínuo excessivo, calor extremo, frio em câmaras frigoríficas, poeiras minerais, produtos químicos ou agentes biológicos hospitalares — têm direito ao adicional de insalubridade. Conforme o Artigo 192 da CLT, o benefício divide-se em três graus conforme a gravidade do agente: grau mínimo (10%), grau médio (20%) e grau máximo (40%), incidindo por regra geral sobre o salário mínimo vigente.',
    formulaText: 'O cálculo aplica a alíquota do grau definido em perícia técnica (10%, 20% ou 40%) sobre o salário mínimo nacional de referência: Adicional Mensal = Salário Mínimo × (Grau % / 100).',
    whenToUse: 'Use para simular o acréscimo salarial de funções hospitalares, laboratoriais, metalúrgicas, limpeza urbana ou câmaras frias, além de verificar projeções de encargos em contratações.',
    importantTips: 'Confira a convenção coletiva do seu sindicato: algumas categorias profissionais conquistam o cálculo da insalubridade sobre o piso salarial da profissão ou salário base, em vez do salário mínimo nacional.',
    sources: [
      { name: 'Norma Regulamentadora NR-15 - Atividades e Operações Insalubres', url: 'https://www.gov.br/trabalho-e-emprego/pt-br' }
    ],
    extraFaqs: [
      { q: 'O fornecimento de EPI pode eliminar o direito ao adicional de insalubridade?', a: 'Sim. Se o Equipamento de Proteção Individual (EPI) certificado neutralizar integralmente o agente nocivo e houver fiscalização efetiva de seu uso pela empresa, o adicional deixa de ser devido.' },
      { q: 'Posso receber insalubridade e periculosidade ao mesmo tempo?', a: 'Conforme jurisprudência consolidada do TST e o Art. 193 §2º da CLT, não é permitido acumular os dois adicionais pelo mesmo contrato; o trabalhador deve optar pelo que for financeiramente mais vantajoso.' },
      { q: 'A insalubridade entra no cálculo de aposentadoria especial?', a: 'A percepção do adicional em folha não garante por si só a aposentadoria especial no INSS, sendo exigida a comprovação de exposição efetiva permanente mediante formulário PPP (Perfil Profissiográfico Previdenciário).' }
    ]
  },
  'adicional-periculosidade': {
    domainConcept: 'Diferentemente da insalubridade (que trata de doenças graduais à saúde), o adicional de periculosidade remunera atividades que colocam o trabalhador em risco acentuado e imediato de vida. A CLT (Art. 193) e a Norma Regulamentadora NR-16 enquadram nessa condição o contato permanente com inflamáveis, explosivos, energia elétrica de alta tensão, radiações ionizantes, segurança pessoal ou patrimonial contra roubos e atividades profissionais em motocicleta (motoboys e entregadores com vínculo CLT). O adicional corresponde a exatos 30% sobre o salário base contratual, sem acréscimos de prêmios ou participações.',
    formulaText: 'Adicional de Periculosidade = Salário Base × 0,30; Remuneração Bruta Total = Salário Base + Adicional (ou Salário Base × 1,30).',
    whenToUse: 'Utilize para conferir o adicional de eletricistas, frentistas, vigilantes armados, operadores de caldeira/explosivos e motociclistas empregados em regime CLT.',
    importantTips: 'Ao contrário da insalubridade (que incide sobre o salário mínimo), a periculosidade de 30% incide diretamente sobre o salário base do empregado — por isso, para salários acima do mínimo, costuma ser mais vantajosa até que o grau máximo da insalubridade.',
    sources: [
      { name: 'CLT - Art. 193 e NR-16 (Atividades Perigosas)', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' }
    ],
    extraFaqs: [
      { q: 'Motoboy registrado em carteira tem direito aos 30% de periculosidade?', a: 'Sim. A Lei nº 12.997/2014 incluiu o §4º no Art. 193 da CLT garantindo o adicional de periculosidade às atividades de trabalhador em motocicleta.' },
      { q: 'Quem entra na área de risco apenas poucos minutos por dia tem direito?', a: 'Se o ingresso na área de risco for eventual ou por tempo extremamente reduzido (Súmula 364 do TST), não há direito ao adicional; porém, se houver contato intermitente habitual na rotina, o adicional de 30% é devido integralmente.' },
      { q: 'A periculosidade integra a base de cálculo das horas extras?', a: 'Sim. Conforme Súmula 132 do TST, o adicional de periculosidade pago em caráter permanente integra o cálculo das horas extras, adicional noturno, férias, 13º e FGTS.' }
    ]
  },
  'estimativa-seguro-desemprego': {
    domainConcept: 'O Seguro-Desemprego é um benefício temporário da seguridade social pago ao trabalhador dispensado sem justa causa (incluindo rescisão indireta) que cumpriu o tempo mínimo de vínculo exigido por solicitação. O valor de cada parcela não corresponde integralmente ao último salário: ele é apurado sobre a média aritmética dos três últimos salários anteriores à dispensa e enquadrado em três faixas de cálculo atualizadas anualmente pelo CODEFAT conforme o salário mínimo vigente e a variação do INPC, respeitando piso nunca inferior ao salário mínimo nacional e teto máximo governamental.',
    formulaText: 'Calcula-se Média = (Salário 1 + Salário 2 + Salário 3) / 3. Aplicam-se as faixas oficiais de 2026: até R$ 2.222,17 multiplica-se por 0,80 (80%); entre R$ 2.222,18 e R$ 3.703,99 soma-se R$ 1.777,74 a 50% do que exceder R$ 2.222,17; acima de R$ 3.703,99 fixa-se no teto de R$ 2.518,65, garantindo piso de R$ 1.621,00.',
    whenToUse: 'Use ao planejar o orçamento familiar após uma demissão sem justa causa ou para comparar o valor estimado com a simulação completa de número de parcelas.',
    importantTips: 'O trabalhador tem prazo entre o 7º e o 120º dia após a dispensa para requerer o Seguro-Desemprego pelo aplicativo Carteira de Trabalho Digital ou Portal Gov.br. Ter CNPJ MEI com faturamento ativo no período pode bloquear o recebimento.',
    sources: [
      { name: 'Portal Gov.br - Solicitar Seguro-Desemprego', url: 'https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego' }
    ],
    extraFaqs: [
      { q: 'Se eu pedir demissão ou fizer acordo de rescisão (Art. 484-A), recebo Seguro-Desemprego?', a: 'Não. Tanto o pedido de demissão quanto a demissão por acordo mútuo entre patrão e empregado excluem o direito às parcelas do Seguro-Desemprego.' },
      { q: 'Posso receber Seguro-Desemprego se tiver um CNPJ MEI aberto?', a: 'A simples existência de CNPJ MEI sem renda pode gerar bloqueio automático inicial, exigindo recurso administrativo comprovando ausência de faturamento suficiente para subsistência, conforme entendimento da Lei nº 13.846/2019.' },
      { q: 'O Seguro-Desemprego sofre desconto de INSS ou Imposto de Renda?', a: 'Não. As parcelas têm natureza assistencial previdenciária e são depositadas sem retenção de INSS ou IRRF.' }
    ]
  },
  'desconto-vale-transporte': {
    domainConcept: 'Instituído pela Lei nº 7.418/1985, o Vale-Transporte assegura ao trabalhador CLT o custeio do deslocamento residência-trabalho e vice-versa por meio do sistema de transporte coletivo público urbano ou intermunicipal. Para dividir o custo desse benefício social, a lei autoriza que o empregador desconte no holerite do empregado até o limite máximo de 6% sobre seu salário básico (excluídos quaisquer adicionais ou vantagens), cabendo à empresa arcar integralmente com tudo o que ultrapassar esse teto percentual.',
    formulaText: 'Apura-se Teto Legal = Salário Base × 0,06. O desconto efetivo aplicado em folha corresponde ao menor valor entre esse limite de 6% e o gasto real mensal com passagens: Desconto = min(Salário × 6%, Custo Real VT). O subsídio pago pela empresa equivale a Custo Real VT - Desconto.',
    whenToUse: 'Utilize para verificar se o departamento pessoal está descontando corretamente o vale-transporte quando suas passagens mensais custam menos (ou muito mais) que 6% do salário.',
    importantTips: 'Se o valor total das suas passagens no mês for inferior a 6% do seu salário base, a empresa está proibida de descontar os 6% cheios: ela só pode descontar exatamente o custo efetivo das passagens fornecidas.',
    sources: [
      { name: 'Lei do Vale-Transporte - Lei nº 7.418/1985', url: 'https://www.planalto.gov.br/ccivil_03/leis/l7418.htm' }
    ],
    extraFaqs: [
      { q: 'O desconto de 6% do vale-transporte incide sobre horas extras e comissões?', a: 'Não. O Decreto nº 10.854/2021 e a Lei nº 7.418/1985 estabelecem expressamente que o percentual de 6% incide apenas sobre o salário básico ou vencimento fixo do empregado.' },
      { q: 'Quando o funcionário falta ou tira férias, o desconto de VT diminui?', a: 'Sim. Como o vale-transporte só é devido para os dias efetivamente trabalhados presencialmente, meses com férias, atestados ou feriados reduzem o custo real de passagens e, consequentemente, o desconto.' },
      { q: 'O vale-transporte pode ser pago em dinheiro na folha?', a: 'Em regra, a legislação veda a substituição do vale-transporte por dinheiro (salvo autorização em acordo ou convenção coletiva em caso de falta de bilhetagem eletrônica), para evitar que passe a integrar o salário.' }
    ]
  },
  'falta-injustificada': {
    title: 'Calculadora de Faltas Injustificadas 2026: Tabela, DSR e Férias (CLT) | Brasil Calculadoras',
    description: 'Calcule grátis o desconto de faltas injustificadas no salário (divisor 30), perda do DSR (Lei 605/49) e consulte a tabela oficial do Art. 130 da CLT de redução de férias.',
    domainConcept: 'Uma única falta injustificada no trabalho gera um efeito financeiro maior do que a perda isolada de um dia de salário. Pela Lei Federal nº 605/1949 (Art. 6º), para fazer jus à remuneração do Descanso Semanal Remunerado (domingo e eventual feriado daquela semana), o empregado deve cumprir integralmente sua jornada semanal sem atrasos excessivos ou ausências sem motivo legal. Além do desconto duplo na folha mensal (o dia faltado + o DSR da semana), o acúmulo de faltas injustificadas ao longo de 12 meses reduz escalonadamente os 30 dias de férias segundo a tabela do Artigo 130 da CLT.',
    formulaText: 'Salário-Dia = Salário Bruto / 30 (Art. 64 CLT). Desconto em Folha = (Salário-Dia × Faltas no Mês) + (Salário-Dia × Semanas com Falta pelo DSR). A tabela de férias do Art. 130 da CLT reduz o descanso de 30 dias para 24 (6 a 14 faltas), 18 (15 a 23 faltas), 12 (24 a 32 faltas) ou 0 dias (acima de 32 faltas).',
    whenToUse: 'Use para conferir descontos por faltas e DSR no contracheque mensal ou consultar rapidamente na tabela do Art. 130 da CLT quantos dias de férias você mantém conforme o número de faltas acumuladas no período aquisitivo.',
    importantTips: 'Se o mês possuir um feriado na mesma semana da falta injustificada, alguns departamentos de RH aplicam a perda do descanso semanal correspondente à semana da falta. Apresente sempre atestados médicos dentro do prazo interno da empresa.',
    referenceTable: {
      heading: 'Tabela para Calcular Faltas Injustificadas e Redução de Férias (Art. 130 da CLT)',
      caption: 'Proporção oficial de dias de férias conforme o número de faltas injustificadas acumuladas no período aquisitivo de 12 meses.',
      headers: [
        'Faltas Injustificadas no Ano',
        'Dias de Férias de Direito',
        'Dias de Férias Perdidos',
        'Base Legal (CLT)'
      ],
      rows: [
        ['0 a 5 faltas', '30 dias corridos', '0 dias', 'Art. 130, inciso I'],
        ['6 a 14 faltas', '24 dias corridos', '6 dias', 'Art. 130, inciso II'],
        ['15 a 23 faltas', '18 dias corridos', '12 dias', 'Art. 130, inciso III'],
        ['24 a 32 faltas', '12 dias corridos', '18 dias', 'Art. 130, inciso IV'],
        ['Acima de 32 faltas (> 32)', '0 dias (perda do direito)', '30 dias', 'Art. 130, caput']
      ],
      note: 'A tabela aplica-se somente a faltas injustificadas no mesmo período aquisitivo. Faltas abonadas por atestado médico ou previstas no Art. 473 da CLT não reduzem as férias.'
    },
    sources: [
      { name: 'CLT - Art. 64, Art. 130 e Art. 473 (Faltas Justificadas)', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' },
      { name: 'Lei do Repouso Semanal Remunerado - Lei nº 605/1949', url: 'https://www.planalto.gov.br/ccivil_03/leis/l0605.htm' }
    ],
    extraFaqs: [
      { q: 'Quais faltas não podem ser descontadas segundo o Artigo 473 da CLT?', a: 'Casamento (3 dias consecutivos), falecimento de cônjuge/pais/filhos/irmãos (2 dias), nascimento de filho/licença-paternidade (5 dias), doação voluntária de sangue (1 dia a cada 12 meses), alistamento eleitoral (até 2 dias), vestibular e acompanhamento médico de filho/esposa gestante nos limites legais.' },
      { q: 'Se eu faltar dois dias na mesma semana, perco dois DSRs?', a: 'Não. A perda do DSR é uma por semana em que houve falta injustificada: faltando 2 dias na mesma semana, descontam-se os 2 dias de falta + 1 dia de DSR daquela semana.' },
      { q: 'A empresa pode descontar as faltas diretamente dos dias de férias?', a: 'A empresa não pode "compensar" dias de falta um a um, mas aplica a tabela escalonada do Art. 130 da CLT (0–5, 6–14, 15–23, 24–32 e mais de 32 faltas) se ultrapassar 5 faltas injustificadas no período aquisitivo.' }
    ]
  },
  'honorarios-advogado': {
    domainConcept: 'Na atuação jurídica privada, os honorários advocatícios dividem-se principalmente entre honorários contratuais iniciais (pró-labore fixo para ingresso e condução da ação) e honorários ad exitum ou de êxito (percentual cobrado apenas caso o cliente vença a demanda e obtenha proveito econômico real). Em ações trabalhistas, previdenciárias e indenizações cíveis, o percentual de êxito costuma girar entre 20% e 30% do benefício econômico apurado, observando os tetos éticos estabelecidos pelo Código de Ética da OAB e pelas tabelas seccionais estaduais.',
    formulaText: 'O simulador multiplica o benefício econômico ou valor estimado do litígio pela taxa percentual de êxito ajustada em contrato: Honorários Sugeridos = Valor do Litígio × (Taxa de Êxito / 100).',
    whenToUse: 'Útil tanto para advogados formularem propostas transparentes em reuniões de fechamento de contrato quanto para clientes estimarem quanto restará líquido após pagar a comissão de êxito do escritório.',
    importantTips: 'Conforme o Estatuto da Advocacia (Lei nº 8.906/1994), honorários contratuais pagos pelo cliente não se confundem com honorários de sucumbência (pagos pela parte vencida diretamente ao advogado vencedor), salvo disposição contratual expressa em contrário.',
    sources: [
      { name: 'Ordem dos Advogados do Brasil (OAB) - Estatuto e Código de Ética', url: 'https://www.oab.org.br/' }
    ],
    extraFaqs: [
      { q: 'Qual o limite ético máximo que um advogado pode cobrar no êxito?', a: 'De acordo com o Código de Ética e Disciplina da OAB e decisões de seus tribunais de ética, a soma dos honorários contratuais e de sucumbência não deve superar o ganho líquido obtido pelo próprio cliente (em regra limitando-se o contrato quota litis entre 20% e 30%, chegando excepcionalmente a mais em causas muito complexas sem adiantamento).' },
      { q: 'O que são honorários de sucumbência?', a: 'São os honorários fixados pelo juiz na sentença (entre 10% e 20% na esfera cível ou 5% a 15% na trabalhista) que a parte que perdeu o processo é condenada a pagar diretamente ao advogado da parte vencedora.' },
      { q: 'Custas processuais e periciais estão incluídas nos honorários?', a: 'Não. Salvo concessão de gratuidade de justiça pela comprovação de hipossuficiência, taxas judiciárias, diligências e perícias são despesas do processo custeadas pela parte interessada.' }
    ]
  },
  'plantao-medico': {
    domainConcept: 'Médicos, enfermeiros plantonistas, fisioterapeutas e profissionais de saúde frequentemente atuam sob escalas de 6h, 12h ou 24h em prontos-socorros, UTIs e clínicas conveniadas, emitindo notas fiscais como Pessoa Jurídica ou recebendo como autônomos (RPA). Calcular previamente a remuneração bruta do turno e o valor líquido real após retenções tributárias na fonte ou provisionamento de impostos empresariais (como 15% médios entre Simples Nacional/Lucro Presumido e taxas contábeis) evita distorções ao comparar escalas entre hospitais.',
    formulaText: 'Remuneração Bruta do Turno = Tarifa por Hora × Carga Horária do Plantão. O valor líquido estimado aplica uma provisão tributária padrão de 15%: Líquido = Bruto × (1 - 0,15).',
    whenToUse: 'Use para avaliar se um plantão extra de fim de semana compensa após impostos, calcular ganhos mensais em múltiplas escalas de 12h e planejar retiradas de pró-labore.',
    importantTips: 'Médicos que faturam como PJ e mantêm despesas com folha/pró-labore iguais ou superiores a 28% do faturamento bruto podem aproveitar o Fator R do Simples Nacional para cair de 15,5% (Anexo V) para 6% (Anexo III).',
    sources: [
      { name: 'Conselho Federal de Medicina (CFM)', url: 'https://portal.cfm.org.br/' }
    ],
    extraFaqs: [
      { q: 'Como o Fator R afeta o imposto líquido de médicos plantonistas PJ?', a: 'Atingindo 28% de folha salarial (inclusive pró-labore próprio do médico sócio) sobre a receita dos últimos 12 meses, a clínica reduz o imposto sobre notas de 15,5% para a faixa inicial de 6%.' },
      { q: 'Qual a diferença entre receber por RPA ou emitir Nota Fiscal PJ em plantões?', a: 'No Recibo de Pagamento Autônomo (RPA), há retenção de até 27,5% de IRPF + 11% a 20% de INSS + ISS municipal, tornando a PJ muito mais econômica para volumes recorrentes de plantões.' },
      { q: 'Adicional noturno vale para médico que presta serviço via PJ?', a: 'Contratos exclusivamente civis entre hospitais e empresas médicas PJ seguem os valores negociados no contrato de prestação de serviços; porém, vínculos com subordinação e habitualidade pessoal podem caracterizar relação trabalhista.' }
    ]
  },
  'comissao-corretor': {
    domainConcept: 'Na intermediação de compra e venda de imóveis no Brasil, a corretagem é remunerada por um percentual contratual sobre o valor efetivo da transação imobiliária, seguindo as tabelas referenciais dos Conselhos Regionais de Corretores de Imóveis (CRECI) — tradicionalmente entre 6% para imóveis urbanos residenciais/comerciais e até 8% ou 10% em áreas rurais ou imóveis de difícil comercialização. Calcular rapidamente a comissão exata traz transparência para proprietários vendedores na negociação do preço líquido e ajuda corretores autônomos e imobiliárias a projetar repasses entre captador e vendedor.',
    formulaText: 'Comissão Final = Valor da Comercialização do Imóvel × (Alíquota de Comissão / 100).',
    whenToUse: 'Utilize antes de assinar contratos de exclusividade ou autorização de venda com imobiliárias, ao fechar propostas com desconto para medir o impacto na comissão e ao ratear parcerias 50/50 entre corretores.',
    importantTips: 'No mercado brasileiro, salvo acordo escrito em contrário, o pagamento da comissão de corretagem é de responsabilidade de quem contratou o serviço (em regra o vendedor), sendo devida assim que o resultado útil (contrato de compra e venda válido) for alcançado.',
    sources: [
      { name: 'COFECI - Conselho Federal de Corretores de Imóveis', url: 'https://www.cofeci.gov.br/' }
    ],
    extraFaqs: [
      { q: 'Qual é o percentual padrão de comissão imobiliária no Brasil?', a: 'Para imóveis urbanos prontos (casas e apartamentos), as tabelas dos CRECIs estaduais praticam em média 6% sobre o valor de venda, podendo haver variação para lançamentos na planta (4% a 6%) e imóveis rurais (6% a 10%).' },
      { q: 'Se a venda for parcelada ou financiada pelo banco, o corretor recebe parcelado?', a: 'Não necessariamente. Em financiamentos habitacionais, a comissão costuma ser quitada integralmente no momento da assinatura do contrato ou do sinal/escritura definitiva.' },
      { q: 'Qual a diferença entre comissão em parcerias de captação e venda?', a: 'Quando um corretor capta o imóvel e outro fecha a venda, a prática de mercado costuma dividir a comissão total em partes iguais ou em proporções acordadas (como 30%/70% ou 50%/50%) após a parcela da imobiliária.' }
    ]
  },
  'diaria-freelancer': {
    domainConcept: 'Designers, desenvolvedores de software, redatores, editores de vídeo e consultores que atuam por projeto ou diária frequentemente subestimam o número real de dias faturáveis em um mês. Como o mês comercial possui cerca de 20 a 22 dias úteis e parte do tempo é consumida com prospecção de clientes, reuniões comerciais, emissão de notas e suporte administrativo, dividir a meta mensal de faturamento pelo total exato de dias produtivos garante que a diária mínima cubra o sustento profissional sem exigir jornadas exaustivas.',
    formulaText: 'Valor Base da Diária = Faturamento de Meta Mensal / Dias Produtivos Úteis no Mês.',
    whenToUse: 'Use ao precificar sprints semanais de desenvolvimento, fechar contratos por diária dedicada (day rate) ou revisar sua tabela de preços para o próximo ano.',
    importantTips: 'Na hora de definir sua meta mensal de faturamento bruto, inclua também reserva para 13º, férias anuais (dividindo 12 meses de despesas por 11 meses trabalhados), licenças de software, depreciação de computador e impostos do MEI/Simples.',
    sources: [
      { name: 'Sebrae - Precificação de Serviços Autônomos', url: 'https://sebrae.com.br/' }
    ],
    extraFaqs: [
      { q: 'Quantos dias produtivos reais devo colocar por mês na conta?', a: 'Embora existam 21 ou 22 dias úteis no calendário, profissionais autônomos costumam faturar entre 15 e 18 dias efetivos por mês, reservando o restante para gestão comercial e imprevistos.' },
      { q: 'Como transformar a diária calculada em valor por hora?', a: 'Basta dividir o valor da diária sugerida por 8 horas (ou pela sua jornada diária produtiva de 6 a 8 horas).' },
      { q: 'Devo cobrar o mesmo valor de diária para projetos urgentes de fim de semana?', a: 'Não. Trabalhos com entrega em prazo de urgência ou realizados fora do horário comercial devem receber adicional de 30% a 50% sobre a diária base.' }
    ]
  },
  'frete-autonomo': {
    domainConcept: 'Para motoristas autônomos de vans, utilitários (Fiorino, VUC, HR) e caminhões leves que realizam entregas ponto a ponto, calcular o frete combinando distância percorrida com uma taxa calibrada por quilômetro rodado agiliza cotações por WhatsApp sem perder dinheiro na viagem. O valor por km adotado na negociação precisa ser suficiente para pagar combustível, manutenção preventiva, desgaste de pneus, seguro e remuneração do tempo do condutor.',
    formulaText: 'Valor do Frete = Distância Percorrida (km) × Taxa Cobrada por Km Rodado.',
    whenToUse: 'Perfeito para cotações rápidas de fretes urbanos, mudanças locais, entregas regionais de cargas fracionadas e validação imediata de ofertas em aplicativos de frete.',
    importantTips: 'Sempre verifique se haverá retorno vazio (frete sem carga de volta). Se você precisar percorrer o trajeto de retorno sem outra encomenda, calcule a distância considerando ida e volta ou dobre a taxa por km produtivo.',
    sources: [
      { name: 'ANTT - Transporte Rodoviário de Cargas', url: 'https://www.gov.br/antt/pt-br' }
    ],
    extraFaqs: [
      { q: 'Como definir a minha taxa justa por quilômetro rodado?', a: 'Some seu gasto médio com diesel/etanol por km, adicione cerca de 30% a 50% para depreciação, pneus e óleo, e inclua a margem de ganho do motorista; para caminhões maiores, compare também o piso mínimo da ANTT.' },
      { q: 'Pedágios e taxas de ajudante já entram nesse valor?', a: 'Em cotações por quilômetro simples, costuma-se somar separadamente os pedágios da rota e eventuais diárias de chapa/ajudante para carga e descarga.' },
      { q: 'Vale a pena cobrar frete mínimo para distâncias muito curtas?', a: 'Sim. Em entregas dentro da cidade abaixo de 20 km, o tempo de espera em trânsito e carga/descarga supera o custo do combustível, exigindo uma tarifa mínima de saída.' }
    ]
  },
  'markup-artesanato': {
    domainConcept: 'Artesãos, costureiras, marceneiros e produtores de itens feitos à mão cometem com frequência o erro de cobrar apenas "2x ou 3x o valor do material", esquecendo que o maior ativo da peça artesanal é o tempo dedicado em horas de produção. Esta calculadora soma o custo direto da matéria-prima ao valor financeiro das horas trabalhadas e aplica um fator multiplicador de 1,5x (50% sobre o custo total de produção) para cobrir energia, desgaste de ferramentas, taxas de vendas/maquininha, embalagens e lucro líquido sustentável.',
    formulaText: 'Custo de Produção = Custo de Matéria-Prima + (Horas de Produção × Valor da Hora de Mão de Obra). Preço de Venda Ideal = Custo de Produção × 1,50.',
    whenToUse: 'Indispensável para precificar crochê, amigurumi, velas aromáticas, sabonetes artesanais, papelaria personalizada, marcenaria fina e encomendas sob medida.',
    importantTips: 'Meça com cronômetro quanto tempo você realmente gasta do corte ao acabamento e fotografia da peça nas primeiras encomendas, para que sua hora de trabalho não seja subestimada no orçamento.',
    sources: [
      { name: 'Sebrae - Como Precificar Produtos Artesanais', url: 'https://sebrae.com.br/' }
    ],
    extraFaqs: [
      { q: 'Por que multiplicar a soma de material + mão de obra por 1,5?', a: 'Esse fator garante uma margem adicional para pagar despesas invisíveis (luz do ateliê, colas, fitas, taxas de plataformas como Elo7/Shopee e cartão de crédito) e gerar capital para reinvestir em novos insumos.' },
      { q: 'Como definir quanto vale minha hora de trabalho artesanal?', a: 'Defina a remuneração mensal desejada (ex: R$ 3.000) e divida pelas horas mensais que você pretende produzir (ex: 160h = R$ 18,75/h).' },
      { q: 'Devo cobrar o mesmo preço no atacado (revenda) e no varejo?', a: 'No atacado para lojistas, você pode reduzir ou zerar a margem extra de marketing/varejo mantendo intacto o pagamento do material e da sua hora produtiva.' }
    ]
  },
  'salario-professor': {
    title: 'Calculadora de Salário de Professor 2026: Piso do Magistério, 20h/40h, Hora-Atividade, INSS e IRRF | Brasil Calculadoras',
    description: 'Calcule o salário bruto e líquido de professor em 2026 para jornadas de 20h ou 40h com fator de 4,5 semanas (Art. 320 CLT), hora-atividade, DSR (1/6), Piso do Magistério, INSS e IRRF.',
    domainConcept: 'A remuneração de professores no Brasil varia conforme o vínculo (rede privada pela CLT ou rede pública sob o Piso Salarial Profissional Nacional do Magistério — Lei nº 11.738/2008). Na rede particular, o cálculo padrão do Art. 320 da CLT multiplica as horas-aula semanais (como jornadas de 20h ou 40h) pelo valor da hora-aula e pelo fator de 4,5 semanas mensais, somando o adicional de hora-atividade previsto em convenção coletiva e 1/6 de Descanso Semanal Remunerado (DSR). Sobre o bruto apurado, incidem as tabelas progressivas de INSS e IRRF vigentes em 2026.',
    formulaText: 'Salário Base = Horas-Aula Semanais × Valor da Hora-Aula × 4,5 semanas (Art. 320 CLT). Hora-Atividade = Salário Base × (% Hora-Atividade / 100). DSR = (Salário Base + Hora-Atividade) / 6 (quando aplicável). Sobre o Salário Bruto Total incidem o INSS progressivo 2026 (faixas de 7,5% a 14% até o teto de R$ 8.475,55, desconto máximo de R$ 988,09) e o IRRF 2026 conforme a Lei nº 15.270/2025 (desconto simplificado mensal de R$ 607,20 ou deduções legais com R$ 189,59 por dependente, isenção total para rendas tributáveis até R$ 5.000,00 e redução gradual entre R$ 5.000,01 e R$ 7.350,00).',
    whenToUse: 'Use para simular o salário bruto e líquido ao assumir turmas de 20h ou 40h semanais em escolas, cursinhos, faculdades ou ao comparar ofertas da rede privada com o Piso do Magistério na rede pública.',
    importantTips: 'Verifique a Convenção Coletiva de Trabalho (CCT) do Sinpro do seu estado para confirmar o percentual exato de hora-atividade (comumente de 5% na rede privada) e eventuais adicionais por regência, pós-graduação ou quinquênio. Na rede pública, confira também o plano de carreira municipal/estadual e a proporcionalidade do Piso do Magistério para jornadas de 20h ou 40h semanais (com 1/3 da jornada reservado a atividades extraclasse pela Lei nº 11.738/2008).',
    extraSections: [
      {
        heading: 'Jornada de 20h vs 40h, Piso do Magistério e Descontos de INSS e IRRF 2026',
        paragraphs: [
          'Ao simular jornadas de 20 horas ou 40 horas semanais, lembre-se de que o Piso Nacional do Magistério Público da Educação Básica (Lei nº 11.738/2008, atualizado anualmente por portaria do MEC) tem como referência a carga horária de 40 horas semanais, sendo proporcional para jornadas de 20 horas (50% do valor integral) e prevendo o limite máximo de 2/3 da carga horária para interação com educandos e mínimo de 1/3 para planejamento e hora-atividade.',
          'Para calcular o valor líquido real que cai na conta em 2026, a calculadora aplica integralmente a tabela progressiva do INSS 2026 (Portaria MPS/MF nº 13/2026: 7,5% até R$ 1.621,00; 9% até R$ 2.902,84; 12% até R$ 4.354,27; e 14% até o teto de R$ 8.475,55, com contribuição máxima de R$ 988,09) e o IRRF 2026 atualizado pela Lei nº 15.270/2025, escolhendo automaticamente entre as deduções legais (INSS + R$ 189,59 por dependente) e o desconto simplificado mensal de R$ 607,20, com isenção total até R$ 5.000,00 e redução gradual até R$ 7.350,00.'
        ],
        bullets: [
          'Rede privada (CLT): Salário Base (horas/semana × hora-aula × 4,5) + Hora-Atividade + DSR de 1/6.',
          'Rede pública (Estatutário/Piso): remuneração proporcional à carga horária (20h/40h) acrescida de progressões de titulação e regime previdenciário próprio (RPPS) ou INSS (RGPS).',
          'Conferência do holerite: compare o INSS progressivo e o IRRF calculados aqui com o seu demonstrativo mensal.'
        ]
      }
    ],
    sources: [
      { name: 'CLT - Art. 320 (Remuneração dos Professores)', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' },
      { name: 'Lei do Piso Nacional do Magistério (Lei nº 11.738/2008)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11738.htm' },
      { name: 'Receita Federal - Tabela Progressiva Mensal do IRRF (Lei nº 15.270/2025)', url: 'https://www.gov.br/receitafederal/pt-br' }
    ],
    extraFaqs: [
      { q: 'Por que o cálculo salarial do professor multiplica por 4,5 semanas e não por 4?', a: 'Porque a maioria dos meses tem 30 ou 31 dias (entre 4,28 e 4,43 semanas), e o Artigo 320 da CLT fixou historicamente o divisor de 4,5 semanas por mês para uniformizar o salário mensal do docente.' },
      { q: 'Como funciona o cálculo para jornada de 20h e 40h semanais?', a: 'Basta informar 20 ou 40 no campo de carga horária semanal junto com o valor da hora-aula (ou dividir o vencimento de referência por 90 ou 180 horas mensais). A calculadora apura automaticamente o bruto, o INSS 2026 e o IRRF 2026.' },
      { q: 'O que é a hora-atividade no contracheque do professor?', a: 'É a parcela destinada a remunerar o tempo extraclasse de planejamento pedagógico, preparação de aulas e correção de provas. Na rede privada varia conforme a CCT (comumente 5%), enquanto na rede pública a Lei nº 11.738/2008 garante 1/3 da jornada para atividades fora de sala.' },
      { q: 'Qual tabela de INSS e IRRF é usada no cálculo do salário líquido do professor?', a: 'A calculadora usa a tabela progressiva do INSS 2026 (salário mínimo R$ 1.621,00 e teto de R$ 8.475,55 com desconto máximo de R$ 988,09) e o IRRF 2026 pela Lei nº 15.270/2025, com desconto simplificado de R$ 607,20, isenção mensal até R$ 5.000,00 e redução gradual até R$ 7.350,00.' }
    ]
  },
  'comissao-vendedor': {
    domainConcept: 'No comércio varejista, atacadista e em equipes comerciais B2B, parte expressiva ou integral da remuneração do vendedor é composta por comissões percentuais sobre o faturamento líquido ou bruto realizado no mês. Calcular com exatidão o valor da comissão bruta permite ao vendedor acompanhar o atingimento de suas metas financeiras semanais e comparar diferentes faixas de comissionamento em vagas comerciais (vendedor comissionado puro versus salário fixo + comissão).',
    formulaText: 'Comissão Bruta = Faturamento Total Vendido × (Porcentagem de Comissão / 100).',
    whenToUse: 'Ideal para vendedores de loja, representantes comerciais (RCA), SDRs/closers e consultores de vendas conferirem rapidamente seus fechamentos mensais.',
    importantTips: 'Na CLT, o vendedor comissionado tem direito ao reflexo obrigatório das comissões sobre o Descanso Semanal Remunerado (DSR = Comissões / Dias Úteis × Domingos e Feriados), bem como integração dessas médias em férias, 13º salário e aviso prévio.',
    sources: [
      { name: 'Lei do Comissionista / Repouso Remunerado (Súmula 27 do TST)', url: 'https://www.tst.jus.br/' }
    ],
    extraFaqs: [
      { q: 'A comissão entra no cálculo do meu 13º salário e férias?', a: 'Sim. Para empregados CLT, calcula-se a média das comissões recebidas (atualizadas pelo sindicato ou últimos 12 meses) para compor o pagamento das férias, 13º e rescisão.' },
      { q: 'O vendedor que não bate a cota mínima pode receber menos que o salário mínimo?', a: 'Não. Mesmo no regime de comissionista puro, a Constituição e a CLT garantem que nenhum trabalhador em jornada integral receba menos que o salário mínimo nacional ou o piso normativo da categoria.' },
      { q: 'A empresa pode estornar comissão se o cliente cancelar ou der calote?', a: 'Se a venda for desfeita ou o cliente tornar-se insolvente sem culpa da empresa, o Art. 7º da Lei nº 3.207/1957 autoriza o estorno da comissão, salvo previsão mais benéfica.' }
    ]
  },
  'traducao-texto': {
    domainConcept: 'No mercado editorial, acadêmico e corporativo de tradução (inglês, espanhol, francês, alemão ou revisão técnica), a unidade de precificação mais justa e padronizada internacionalmente é o preço por palavra de origem (em vez de páginas físicas, cuja densidade varia muito conforme fonte e margens). Esta calculadora multiplica o volume total de palavras do documento pela tarifa unitária acordada e exibe o valor de orçamento completo, trazendo também uma estimativa líquida referencial após descontos/taxas de plataforma.',
    formulaText: 'Orçamento Bruto = Quantidade Total de Palavras × Valor por Palavra. Para comparação, exibe também estimativa líquida após margem padrão de 15% de taxa/imposto.',
    whenToUse: 'Use ao enviar cotações rápidas para tradução de artigos científicos, manuais técnicos, legendas, e-books, sites ou documentos corporativos.',
    importantTips: 'Para traduções técnicas altamente especializadas (jurídica, médica ou engenharia) ou prazos de entrega inferiores a 24 horas, aplique adicional de urgência ou especialidade de 25% a 50% sobre sua tarifa por palavra padrão.',
    sources: [
      { name: 'SINTRA - Sindicato Nacional dos Tradutores (Tabela Referencial)', url: 'https://www.sintra.org.br/' }
    ],
    extraFaqs: [
      { q: 'O cálculo deve contar as palavras do texto original (fonte) ou do texto traduzido (alvo)?', a: 'A prática de mercado padrão no Brasil e no exterior adota a contagem de palavras do texto original antes de iniciar a tradução, evitando incertezas no orçamento fechado.' },
      { q: 'Como converter páginas ou laudas em palavras?', a: 'Uma lauda padrão editorial brasileira equivale em média a 1.000 caracteres com espaços ou cerca de 200 a 250 palavras; já uma página A4 simples costuma ter de 300 a 450 palavras.' },
      { q: 'Tradução juramentada segue essa mesma regra?', a: 'Não. Traduções juramentadas (públicas) seguem tabelas oficiais de emolumentos fixadas pelas Juntas Comerciais de cada estado por lauda traduzida de 1.000 caracteres sem espaços.' }
    ]
  },
  'fotografo-evento': {
    domainConcept: 'Orçar ensaios fotográficos, casamentos, formaturas ou cobertura de eventos corporativos exige considerar não apenas o tempo com a câmera na mão, mas também o deslocamento logístico, transporte de equipamentos pesados, horas de seleção e tratamento de imagem em pós-produção, desgaste do obturador e eventuais assistentes. Esta ferramenta combina sua taxa base de cobertura ao custo operacional de transporte/logística para gerar rapidamente um orçamento final transparente.',
    formulaText: 'Preço Final Recomendado = Taxa Base de Cobertura/Ensaio × Custos Logísticos ou Soma Direta conforme parâmetro multiplicador configurado para pacotes de cobertura e deslocamento.',
    whenToUse: 'Ideal para fotógrafos freelancers e estúdios montarem propostas rápidas de ensaios externos, eventos sociais e locações fora da cidade base.',
    importantTips: 'Sempre especifique por escrito na proposta quantas fotos tratadas em alta resolução estão incluídas, qual o prazo de entrega da galeria digital e se horas extras além do pacote combinado possuem tarifa horária adicional.',
    sources: [
      { name: 'ABRAFOTO - Associação Brasileira dos Fotógrafos', url: 'https://www.abrafoto.org.br/' }
    ],
    extraFaqs: [
      { q: 'Por que cobrar deslocamento separado da taxa do ensaio?', a: 'Ensaios em locações distantes, sítios ou praias consomem combustível, pedágio e tempo improdutivo de trânsito no mesmo dia, o que diminuiria seu ganho líquido caso fosse absorvido na taxa fixa.' },
      { q: 'Como incluir edição e backup em nuvem no preço base?', a: 'Calcule para cada 1 hora fotografada no evento mais 2 a 3 horas de seleção, tratamento de cores no Lightroom/Photoshop e upload seguro na hora de fixar sua taxa base.' },
      { q: 'Devo cobrar sinal de reserva de data?', a: 'Sim. A prática profissional padrão prevê pagamento de 30% a 50% no ato da assinatura para bloquear a agenda na data solicitada.' }
    ]
  },
  'calculadora-de-salario-liquido': {
    title: 'Calculadora de Salário Líquido 2026 (INSS, IRRF e VT) | Brasil Calculadoras',
    description: 'Calcule seu salário líquido mensal em 2026 com descontos oficiais progressivos de INSS, Imposto de Renda (IRRF) por dependentes, vale-transporte e outros abatimentos.',
    domainConcept: 'Saber exatamente quanto vai cair na conta bancária ao final do mês exige aplicar corretamente a ordem legal de deduções do holerite brasileiro. Primeiro calcula-se o INSS progressivo fatiado sobre o salário bruto; em seguida, abate-se esse INSS e o valor fixo por dependentes legais da base de cálculo do Imposto de Renda Retido na Fonte (IRRF); por fim, subtraem-se outros descontos como o vale-transporte (limitado a 6% do salário bruto ou o valor efetivo das passagens), coparticipações de plano de saúde ou empréstimo consignado.',
    formulaText: 'Salário Líquido = Salário Bruto - INSS 2026 (faixas progressivas de 7,5% a 14% até o teto de R$ 8.475,55) - IRRF 2026 (Lei nº 15.270/2025: compara deduções legais com R$ 189,59 por dependente vs. desconto simplificado de R$ 607,20 e aplica isenção total até R$ 5.000,00 e redução gradual até R$ 7.350,00) - Desconto VT (Salário × %VT) - Outros Descontos.',
    whenToUse: 'Use ao receber uma nova proposta de emprego com salário bruto anunciado, para planejar o orçamento mensal real da casa ou conferir os descontos do seu holerite mensal.',
    importantTips: 'Em 2026 (Lei nº 15.270/2025), quem ganha até R$ 5.000,00 brutos mensais fica isento do IRRF, e rendas entre R$ 5.000,01 e R$ 7.350,00 recebem redução gradual. Além disso, o desconto simplificado mensal (R$ 607,20) é aplicado automaticamente sempre que for mais vantajoso que INSS + dependentes.',
    sources: [
      { name: 'Receita Federal - Tabela Progressiva Mensal IRRF', url: 'https://www.gov.br/receitafederal/pt-br' },
      { name: 'INSS - Tabela de Contribuição Mensal', url: 'https://www.gov.br/inss/pt-br' }
    ],
    extraFaqs: [
      { q: 'O vale-alimentação ou vale-refeição pode ser descontado em até 20%?', a: 'Sim. Pelo Programa de Alimentação do Trabalhador (PAT), a empresa pode descontar até 20% do valor do benefício concedido — na prática, muitas companhias descontam valor simbólico (ex: R$ 1,00).' },
      { q: 'Pensão alimentícia descontada em folha reduz o IRRF?', a: 'Sim. Pensão alimentícia decorrente de decisão judicial ou escritura pública é integralmente dedutível da base de cálculo do Imposto de Renda antes da aplicação da alíquota.' },
      { q: 'A contribuição sindical ainda é descontada obrigatoriamente?', a: 'Não. Desde a Reforma Trabalhista, o desconto sindical depende de autorização prévia e expressa do trabalhador, respeitadas decisões recentes sobre contribuição assistencial com direito de oposição.' }
    ]
  },
  'calculadora-de-seguro-desemprego': {
    title: 'Calculadora de Seguro-Desemprego 2026: Valor e Quantidade de Parcelas | Brasil Calculadoras',
    description: 'Descubra exatamente quantas parcelas (3, 4 ou 5) e o valor de cada depósito do Seguro-Desemprego de acordo com o número de solicitações e meses trabalhados.',
    domainConcept: 'O cálculo completo do Seguro-Desemprego envolve dois fatores distintos: o valor unitário de cada parcela (determinado pela média salarial dos últimos três meses antes da demissão) e a quantidade total de parcelas a que o trabalhador tem direito (que varia entre 3, 4 ou 5 parcelas conforme quantas vezes o benefício já foi solicitado anteriormente e quantos meses foram trabalhados nos últimos 36 meses). Na primeira solicitação, exigem-se ao menos 12 meses trabalhados; na segunda, 9 meses; e a partir da terceira solicitação, bastam 6 meses de registro.',
    formulaText: 'Com menos de 6 meses trabalhados não há direito (0 parcelas). Na 1ª solicitação: 12–23 meses = 4 parcelas; ≥24 meses = 5 parcelas. Na 2ª solicitação: 9–11 meses = 3 parcelas; 12–23 meses = 4; ≥24 = 5. Da 3ª em diante: 6–11 = 3; 12–23 = 4; ≥24 = 5. O valor segue as faixas oficiais de 80% / 50% com piso nacional e teto máximo.',
    whenToUse: 'Use logo após receber a carta de demissão sem justa causa para saber por quantos meses você contará com a rede de proteção salarial enquanto se recoloca no mercado.',
    importantTips: 'Os meses trabalhados exigidos na 1ª e 2ª solicitação não precisam ter ocorrido todos em um único emprego contínuo, podendo ser somados nos últimos 18 meses (1ª vez) ou 12 meses (2ª vez) imediatamente anteriores à dispensa.',
    sources: [
      { name: 'Lei do Seguro-Desemprego - Lei nº 7.998/1990', url: 'https://www.planalto.gov.br/ccivil_03/leis/l7998.htm' },
      { name: 'Ministério do Trabalho e Emprego - Regras de Carência', url: 'https://www.gov.br/trabalho-e-emprego/pt-br' }
    ],
    extraFaqs: [
      { q: 'Se eu arrumar novo emprego com carteira assinada antes de acabar as parcelas, o que acontece?', a: 'O benefício é suspenso automaticamente a partir da nova admissão. Caso você seja dispensado novamente em pouco tempo sem cumprir nova carência, pode retomar parcelas remanescentes dependendo do caso.' },
      { q: 'Empregado doméstico tem as mesmas regras de parcelas?', a: 'Não. O trabalhador doméstico dispensado sem justa causa tem direito a no máximo 3 parcelas fixas equivalentes a 1 salário mínimo cada, desde que tenha trabalhado ao menos 15 meses nos últimos 24 meses.' },
      { q: 'Em quanto tempo cai a primeira parcela após dar entrada?', a: 'Após o requerimento aprovado na Carteira de Trabalho Digital, a primeira parcela costuma ser liberada exatamente 30 dias após a solicitação ou pagamento final, e as seguintes a cada 30 dias.' }
    ]
  },
  'simulador-inss-salario': {
    title: 'Simulador de Desconto INSS 2026 (Tabela Progressiva CLT) | Brasil Calculadoras',
    description: 'Calcule o desconto exato do INSS sobre o salário bruto em 2026 com cálculo fatiado por faixa salarial (7,5% a 14%), alíquota efetiva real e teto previdenciário.',
    domainConcept: 'Desde março de 2020 (Emenda Constitucional nº 103/2019), o desconto do INSS de empregados CLT, trabalhadores avulsos e empregados domésticos deixou de aplicar uma única alíquota fixa sobre todo o salário e passou a funcionar de forma progressiva — exatamente como o Imposto de Renda. Isso significa que quem ganha R$ 3.500,00 não paga 12% sobre tudo: paga 7,5% na primeira faixa (até o salário mínimo), 9% na segunda faixa e 12% somente sobre a parcela que entra na terceira faixa. Esse mecanismo garante que a alíquota efetiva real seja sempre menor que a alíquota nominal da última faixa atingida.',
    formulaText: 'Tabela Progressiva 2026 implementada: até R$ 1.518,00 (7,5%); de R$ 1.518,01 a R$ 2.793,88 (9% sobre a diferença); de R$ 2.793,89 a R$ 4.190,83 (12% sobre a diferença); de R$ 4.190,84 até o teto de R$ 8.157,41 (14% sobre a diferença). Acima do teto, a contribuição trava no desconto máximo.',
    whenToUse: 'Use mensalmente ao conferir seu contracheque, simular o aumento real líquido de uma promoção salarial ou calcular a contribuição previdenciária devida sobre o 13º salário.',
    importantTips: 'Se você possui dois empregos formais com carteira assinada simultâneos e a soma dos dois salários ultrapassar o teto do INSS (R$ 8.157,41), apresente o comprovante de vínculo ao segundo empregador para não sofrer desconto acima do limite máximo.',
    sources: [
      { name: 'INSS / Ministério da Previdência - Portaria de Alíquotas', url: 'https://www.gov.br/previdencia/pt-br' }
    ],
    extraFaqs: [
      { q: 'Por que a alíquota efetiva do INSS é menor que os 14% da última faixa?', a: 'Porque apenas a fatia do salário que supera R$ 4.190,83 sofre a alíquota de 14%. As primeiras fatias do salário continuam pagando 7,5%, 9% e 12%, puxando a média real (alíquota efetiva) para baixo.' },
      { q: 'Quem recebe acima de R$ 8.157,41 paga quanto de INSS?', a: 'Independentemente de o salário ser R$ 10.000 ou R$ 30.000, o desconto previdenciário estanca no teto máximo do regime geral (aproximadamente R$ 951,63 pela tabela de referência).' },
      { q: 'O pró-labore do sócio de empresa usa essa mesma tabela progressiva?', a: 'Não. Para contribuintes individuais e sócios que retiram pró-labore, aplica-se a alíquota fixa de 11% (limitada ao teto do INSS) na retenção pela empresa.' }
    ]
  },
  'simulador-irrf-salario': {
    title: 'Simulador de Imposto de Renda Retido na Fonte (IRRF) 2026 | Brasil Calculadoras',
    description: 'Calcule o IRRF mensal em 2026 pela Lei nº 15.270/2025: isenção até R$ 5.000, redução gradual até R$ 7.350, desconto simplificado de R$ 607,20, INSS e dependentes (R$ 189,59).',
    domainConcept: 'O Imposto de Renda Retido na Fonte (IRRF) incide mensalmente sobre salários, pró-labores e aposentadorias. A partir de janeiro de 2026, com a entrada em vigor da Lei nº 15.270/2025, além de comparar automaticamente as deduções legais (INSS, R$ 189,59 por dependente e pensão alimentícia) com o desconto simplificado mensal de R$ 607,20, aplica-se a redução mensal que zera o IRRF para rendas tributáveis até R$ 5.000,00 e reduz gradualmente o imposto entre R$ 5.000,01 e R$ 7.350,00.',
    formulaText: 'Calcula-se primeiro o INSS progressivo 2026 e apura-se o menor IRRF base entre deduções legais (Bruto - INSS - Dependentes × R$ 189,59 - Outros) e desconto simplificado (Bruto - R$ 607,20) na tabela progressiva (isento até R$ 2.428,80; 7,5% - R$ 182,16; 15% - R$ 394,16; 22,5% - R$ 675,49; 27,5% - R$ 908,73). Em seguida, aplica-se a Lei nº 15.270/2025: isenção total até R$ 5.000,00 (redutor de até R$ 312,89), redução linear (978,62 - 0,133145 × renda) entre R$ 5.000,01 e R$ 7.350,00, e tabela cheia acima de R$ 7.350,00.',
    whenToUse: 'Utilize para verificar quanto de Imposto de Renda está sendo retido no seu holerite em 2026, testar o impacto da isenção até R$ 5.000 ou da redução gradual até R$ 7.350 e simular dependentes.',
    importantTips: 'Mesmo acima de R$ 7.350,00, alcançar a faixa de 27,5% não significa pagar 27,5% sobre todo o salário: a parcela a deduzir oficial (R$ 908,73 na última faixa) garante que a alíquota efetiva permaneça bem abaixo da nominal.',
    sources: [
      { name: 'Receita Federal do Brasil - Cálculo Mensal do IRRF', url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas' }
    ],
    extraFaqs: [
      { q: 'Quem pode ser cadastrado como dependente para reduzir o IRRF mensal?', a: 'Filhos ou enteados até 21 anos (ou até 24 anos se cursando ensino superior/técnico), cônjuge ou companheiro há mais de 5 anos (ou com filho em comum) e pais/avós cujos rendimentos fiquem dentro do limite legal de isenção.' },
      { q: 'O que é a parcela a deduzir na tabela do Imposto de Renda?', a: 'É um atalho matemático criado pela Receita Federal para evitar que você tenha de calcular faixa por faixa manualmente: multiplica-se a base toda pela alíquota máxima alcançada e subtrai-se o valor fixo da parcela a deduzir.' },
      { q: 'O vale-transporte e o vale-refeição entram na base do IRRF?', a: 'Não. Benefícios concedidos regularmente no programa de alimentação (PAT) ou vale-transporte para deslocamento têm natureza indenizatória e são isentos de Imposto de Renda.' }
    ]
  },
  'adicional-noturno-clt': {
    title: 'Calculadora de Adicional Noturno CLT (Hora Reduzida 52m30s) | Brasil Calculadoras',
    description: 'Calcule o adicional noturno urbano exato de 20% pela CLT considerando a redução obrigatória da hora noturna para 52 minutos e 30 segundos.',
    domainConcept: 'Na rotina de trabalhadores de hospitais, portarias, indústrias, restaurantes e logística que atuam entre 22h e 5h, um erro comum nas folhas de ponto é pagar apenas 20% sobre as horas marcadas no relógio. A CLT (Art. 73, §1º) impõe que a hora noturna urbana dura apenas 52 minutos e 30 segundos, gerando um fator multiplicador de 1,142857 sobre cada hora de relógio trabalhada à noite. Esta versão dedicada calcula separadamente o valor da hora normal, o valor da hora noturna acrescida de 20% e o adicional líquido devido no mês.',
    formulaText: 'Hora Normal = Salário Base / Jornada Mensal. Hora Noturna = Hora Normal × 1,20. Horas Noturnas Fictícias = Horas Relógio × (60 / 52,5). Adicional Noturno Total = Hora Normal × 0,20 × Horas Fictícias.',
    whenToUse: 'Utilize quando precisar validar rapidamente apenas as horas noturnas marcadas entre 22h e 5h no cartão de ponto mensal de trabalhadores urbanos.',
    importantTips: 'Não confunda a hora de 52m30s com horas extras: se você trabalha 7 horas de relógio dentro da sua escala normal (22h às 5h), essas 7 horas contam como 8 horas normais para bater sua carga contratual e ainda geram o adicional noturno de 20%.',
    sources: [
      { name: 'CLT Art. 73 - Trabalho Noturno Urbano', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' }
    ],
    extraFaqs: [
      { q: 'Quantas horas noturnas equivalem a uma escala das 22h às 5h?', a: 'São 7 horas corridas de relógio, que após a conversão pela redução de 52 minutos e 30 segundos (7 × 60 / 52,5) equivalem a exatamente 8 horas noturnas computadas em folha.' },
      { q: 'Se o turno começar às 19h e terminar às 3h, quais horas ganham adicional?', a: 'Apenas as horas trabalhadas a partir das 22h00 até o encerramento às 03h00 (5 horas de relógio) recebem o adicional de 20% e a redução da hora noturna.' },
      { q: 'Trabalhador noturno que passa para o turno diurno mantém o adicional?', a: 'Não. Conforme a Súmula 265 do TST, a transferência para o período diurno implica na perda do direito ao adicional noturno, por cessar a condição mais penosa.' }
    ]
  },
  'calculadora-vale-transporte': {
    title: 'Calculadora de Vale-Transporte CLT (Regra dos 6%) | Brasil Calculadoras',
    description: 'Calcule exatamente quanto pode ser descontado do seu salário pelo Vale-Transporte (máximo de 6%) e quanto a empresa deve subsidiar do próprio caixa.',
    domainConcept: 'Embora popularmente associado a "desconto obrigatório de 6%", o Vale-Transporte possui uma regra de proteção importante para o trabalhador: os 6% são um teto máximo de desconto, e jamais uma taxa fixa cobrada mesmo quando o gasto com passagens é menor. Se um empregado ganha R$ 4.000,00 (teto de 6% = R$ 240,00) mas gasta apenas R$ 190,00 de ônibus no mês, a empresa só pode descontar R$ 190,00. Inversamente, se o trabalhador ganha R$ 2.000,00 (6% = R$ 120,00) e gasta R$ 350,00 com passagens, a empresa arca com os R$ 230,00 restantes.',
    formulaText: 'Desconto no Salário = min(Salário Bruto × 0,06, Custo Mensal Real com Transporte). Complemento da Empresa = max(0, Custo Mensal Real - Desconto).',
    whenToUse: 'Use ao ingressar em um novo emprego ou após reajustes de tarifa de ônibus/metrô para avaliar se compensa optar pelo vale-transporte da empresa ou pagar as passagens do próprio bolso.',
    importantTips: 'Vale sempre fazer a conta: se 6% do seu salário bruto for maior do que o total que você gasta por mês com passagem, é financeiramente mais inteligente não utilizar o VT pela empresa (ou exigir que descontem apenas o valor real).',
    sources: [
      { name: 'Decreto nº 10.854/2021 e Lei nº 7.418/1985 (Vale-Transporte)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l7418.htm' }
    ],
    extraFaqs: [
      { q: 'Quem mora perto do trabalho e vai a pé tem direito a receber vale-transporte em dinheiro?', a: 'Não. O vale-transporte destina-se exclusivamente ao custeio de transporte coletivo público no trajeto casa-trabalho; não havendo necessidade de utilização de transporte público, não há obrigatoriedade de pagamento.' },
      { q: 'A empresa pode descontar 6% do meu salário no mês em que estive de férias?', a: 'Não. Durante férias integrais ou afastamentos em que não houve deslocamento ao trabalho, não pode haver fornecimento nem desconto de vale-transporte.' },
      { q: 'O vale-transporte cobre combustível para quem vai de carro próprio?', a: 'A lei prevê o vale-transporte apenas para transporte coletivo. Caso a empresa conceda vale-combustível por política interna ou acordo sindical, aplicam-se as regras específicas da negociação.' }
    ]
  },
  'calculadora-salario-hora': {
    title: 'Calculadora de Salário por Hora, Dia e Minuto | Brasil Calculadoras',
    description: 'Converta seu salário mensal CLT em valor exato por hora, dia e minuto conforme a jornada semanal contratada (44h, 40h, 36h ou 30h).',
    domainConcept: 'Conhecer o valor exato da sua hora de trabalho é o ponto de partida para conferir adicionais de horas extras, descontos de atrasos em minutos no relógio de ponto ou avaliar propostas de freelances e empregos por hora. Na legislação brasileira, a carga mensal padrão (divisor) não é obtida multiplicando as horas semanais por 4, mas sim por 5 semanas comerciais conforme a equivalência da CLT: 220 horas para jornadas de 44h semanais, 200 horas para jornadas de 40h semanais, 180 horas para 36h e 150 horas para 30h semanais.',
    formulaText: 'Total de Horas Mensais = Jornada Semanal × 5 (ou 220h para 44h). Valor da Hora = Salário Mensal / Horas Mensais. Valor por Minuto = Valor da Hora / 60.',
    whenToUse: 'Ideal antes de calcular horas extras, descontos por atrasos fracionados em minutos ou comparar salários mensais de jornadas diferentes (por exemplo, um cargo de 30h contra um cargo de 44h semanais).',
    importantTips: 'Um salário de R$ 3.000,00 em jornada de 30 horas semanais (R$ 20,00/hora) remunera a hora trabalhada 46,6% melhor do que o mesmo salário de R$ 3.000,00 em jornada de 44 horas semanais (R$ 13,64/hora).',
    sources: [
      { name: 'CLT - Art. 58 e Art. 64 (Divisor Salarial)', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' }
    ],
    extraFaqs: [
      { q: 'Por que 44 horas semanais resultam no divisor 220 e não 176?', a: 'Porque no salário mensalista da CLT já estão remunerados os domingos e feriados (Descanso Semanal Remunerado). Assim, divide-se 44h por 6 dias úteis (7,333h/dia) e multiplica-se por 30 dias = 220 horas.' },
      { q: 'Qual o limite de tolerância de atraso que a empresa não pode descontar?', a: 'Pelo Artigo 58, §1º da CLT, não serão descontadas nem computadas como jornada extraordinária as variações de horário no registro de ponto não excedentes de 5 minutos em cada marcação, observado o limite máximo de 10 minutos diários.' },
      { q: 'Como descobrir meu ganho líquido por hora trabalhada?', a: 'Primeiro calcule seu salário líquido mensal descontando INSS e IRRF e, em seguida, insira o valor líquido no campo de salário mensal desta calculadora.' }
    ]
  },

  // ================= APOSENTADORIA & FUTURO (10) =================
  'simulador-de-aposentadoria-inss': {
    title: 'Simulador de Aposentadoria INSS 2026 (Idade e Pontos) | Brasil Calculadoras',
    description: 'Verifique sua elegibilidade para aposentadoria no INSS em 2026 pelas regras pós-Reforma da Previdência (EC 103/2019): idade mínima, pontos e tempo de contribuição.',
    domainConcept: 'Desde a aprovação da Emenda Constitucional nº 103/2019 (Reforma da Previdência), aposentar-se pelo Regime Geral de Previdência Social (INSS) deixou de depender apenas do tempo de contribuição puro, passando a combinar critérios progressivos de idade mínima e pontuação. Na regra permanente atual, exige-se 65 anos de idade e 20 anos de contribuição para homens (ou 15 anos se filiado antes da reforma) e 62 anos de idade com 15 anos de contribuição para mulheres. Além disso, segurados que já contribuíam antes de novembro de 2019 podem se enquadrar nas regras de transição por Pontos (idade + tempo de contribuição), Idade Mínima Progressiva ou Pedágios de 50% e 100%.',
    formulaText: 'O algoritmo avalia sua idade atual, sexo e anos de contribuição acumulados frente aos requisitos da regra permanente urbana (65H/62M com carência mínima) e às metas de transição por pontuação progressiva até 105 pontos (homens) e 100 pontos (mulheres).',
    workedExample: 'Considere uma trabalhadora mulher com 59 anos de idade e 33 anos de contribuição acumulados no CNIS: a soma atual é de 59 + 33 = 92 pontos. Como a meta anual da regra de transição por pontos avança 1 ponto por ano até atingir 100 pontos, o simulador aponta exatamente quantos meses faltam para atingir a pontuação exigida ou a idade mínima da regra progressiva.',
    whenToUse: 'Utilize anualmente junto com a conferência do seu CNIS no aplicativo Meu INSS para planejar o melhor momento de protocolar o pedido de aposentadoria sem sofrer redutores desnecessários.',
    importantTips: 'Verifique no portal Meu INSS se todos os seus vínculos antigos (inclusive serviço militar obrigatório, trabalho rural ou tempo especial insalubre) constam corretamente no extrato CNIS antes de dar entrada no benefício.',
    sources: [
      { name: 'Emenda Constitucional nº 103/2019 (Reforma da Previdência)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm' },
      { name: 'Meu INSS - Extrato CNIS e Simulador Oficial', url: 'https://meu.inss.gov.br/' }
    ],
    extraFaqs: [
      { q: 'Qual é o valor mínimo de contribuição para contar um mês de carência no INSS?', a: 'Desde a Reforma da Previdência, somente competências em que o recolhimento atingiu ao menos o salário mínimo vigente são contadas para tempo de contribuição e carência.' },
      { q: 'Quem contribui pelo MEI (5%) pode se aposentar por tempo de contribuição?', a: 'Não diretamente com os 5%. A guia padrão do MEI dá direito à aposentadoria por idade. Para contar tempo em regras de transição ou valor acima do mínimo, é preciso complementar a contribuição em mais 15%.' },
      { q: 'Professores da educação básica têm redução na idade mínima e pontos?', a: 'Sim. Professores que comprovem exclusivamente tempo de efetivo exercício nas funções de magistério na educação infantil, ensino fundamental e médio têm redução de 5 anos na idade mínima e na pontuação exigida.' }
    ]
  },
  'previdenca-privada': {
    domainConcept: 'Diante do teto previdenciário do INSS e das exigências crescentes de idade mínima, planos de previdência complementar aberta — PGBL (Plano Gerador de Benefício Livre) e VGBL (Vida Gerador de Benefício Livre) — funcionam como pilares estratégicos para manter o padrão de vida na aposentadoria. Além dos juros compostos de longo prazo, a previdência privada oferece um diferencial tributário exclusivo: na tabela regressiva definitiva, aportes mantidos por mais de 10 anos sofrem alíquota mínima de apenas 10% de Imposto de Renda no resgate (inferior aos 15% mínimos de CDBs e Tesouro Direto) e não sofrem incidência semestral de "come-cotas".',
    formulaText: 'Calcula-se o valor futuro de uma série uniforme de aportes mensais: Saldo Bruto = PMT × [((1 + i_m)^n - 1) / i_m], onde i_m = (Taxa Anual / 100) / 12 e n = Anos × 12. Sobre o lucro apurado aplica-se a alíquota mínima regressiva de 10%: Imposto = max(0, Bruto - Investido) × 0,10.',
    whenToUse: 'Use para simular o patrimônio acumulado em horizontes de 15 a 35 anos, avaliar o benefício do diferimento tributário e planejar a transição do regime de trabalho para renda complementar.',
    importantTips: 'Escolha o PGBL apenas se você entrega a Declaração Completa de Imposto de Renda e contribui para o INSS (podendo deduzir até 12% da renda bruta tributável anual); caso faça a Declaração Simplificada ou seja isento, opte pelo VGBL, onde o IR incide apenas sobre o rendimento.',
    sources: [
      { name: 'SUSEP - Previdência Complementar Aberta', url: 'https://www.gov.br/susep/pt-br' }
    ],
    extraFaqs: [
      { q: 'Qual é a diferença tributária no resgate entre PGBL e VGBL?', a: 'No PGBL, como você abateu as contribuições no IR anual, no momento do resgate o imposto incide sobre o valor total (principal + rendimentos). No VGBL, o imposto incide exclusivamente sobre os rendimentos.' },
      { q: 'A previdência privada entra em inventário no falecimento do titular?', a: 'Na maioria dos estados e conforme entendimento consolidado pelo STF sobre o VGBL/PGBL (salvo discussões pontuais de planejamento sucessório), os recursos são repassados diretamente aos beneficiários indicados em contrato sem passar pela morosidade do inventário.' },
      { q: 'Cuidado com taxas de carregamento e administração: como elas afetam o saldo?', a: 'Planos modernos de corretoras não cobram taxa de carregamento (entrada/saída) e praticam taxas de administração abaixo de 0,5% a 1% ao ano em renda fixa; taxas acima de 2% ao ano corroem severamente os juros compostos.' }
    ]
  },
  'viver-de-renda': {
    domainConcept: 'Alcançar a liberdade financeira significa possuir um capital investido capaz de gerar mensalmente, apenas com seus rendimentos reais acima da inflação, a quantia necessária para pagar todas as despesas do seu estilo de vida sem precisar vender trabalho ou consumir o patrimônio principal. Esta calculadora realiza a conta reversa da independência financeira: partindo da renda líquida mensal que você deseja receber todos os meses (em poder de compra de hoje) e da taxa real mensal de retorno líquido esperada da sua carteira, determina exatamente quanto capital total precisa estar investido.',
    formulaText: 'A perpetuidade financeira pura exige dividir o fluxo mensal desejado pela taxa real mensal de juros: Patrimônio Alvo = Renda Mensal Desejada / (Taxa Real Mensal / 100).',
    whenToUse: 'Ideal para estabelecer um "número mágico" de meta patrimonial de longo prazo e saber exatamente quanto falta acumular para conquistar independência financeira.',
    importantTips: 'Nunca use a taxa nominal da Selic (ex: 1% ao mês) nessa conta sem descontar inflação e impostos. Uma taxa real realista e conservadora para uma carteira diversificada no Brasil gira entre 0,35% e 0,55% ao mês (equivalente a ~4,3% a 6,8% ao ano acima do IPCA).',
    sources: [
      { name: 'Tesouro Nacional - Títulos Indexados ao IPCA e Renda+', url: 'https://www.tesourodireto.com.br/' }
    ],
    extraFaqs: [
      { q: 'Por que uma taxa real de 0,5% ao mês exige 200 vezes a renda desejada?', a: 'Porque 1 / 0,005 = 200. Logo, para retirar R$ 5.000,00 todos os meses corrigidos pela inflação a 0,5% real ao mês sem dilapidar o principal, são necessários R$ 1.000.000,00 investidos.' },
      { q: 'Fundos Imobiliários (FIIs) ajudam a viver de renda?', a: 'Sim. Dividendos de FIIs para pessoa física costumam ser isentos de IR e geram fluxo mensal, mas exigem atenção à diversificação e reinvestimento parcial para acompanhar a inflação.' },
      { q: 'Posso usar títulos como o Tesouro RendA+ para essa finalidade?', a: 'Sim. O Tesouro RendA+ converte automaticamente seu patrimônio acumulado em 240 parcelas mensais (20 anos) corrigidas pela inflação + juros reais a partir da data de aposentadoria escolhida.' }
    ]
  },
  'reserva-emergencia': {
    domainConcept: 'Antes de investir em ativos de renda variável, ações, imóveis ou previdência de longo prazo, toda estratégia financeira saudável começa pela formação da Reserva de Emergência (colchão de liquidez). Ela serve para proteger a família contra imprevistos graves — como perda repentina de emprego, queda temporária de faturamento no negócio próprio, emergências médicas não cobertas pelo plano ou reparos urgentes na residência e automóvel — impedindo que você tenha de se endividar no cartão de crédito ou resgatar investimentos de longo prazo com prejuízo.',
    formulaText: 'Reserva Recomendada = Custo Fixo Mensal Básico × Meses de Cobertura Desejados (usualmente 6 meses para CLT ou servidores e 9 a 12 meses para autônomos e empresários).',
    whenToUse: 'Use no início do planejamento financeiro familiar, ao mudar de emprego, ao decidir trabalhar por conta própria ou após o nascimento de filhos quando o custo fixo da casa aumenta.',
    importantTips: 'Na conta do "gasto fixo mensal", inclua exclusivamente despesas essenciais para manter a casa funcionando em crise (moradia, alimentação, saúde, contas básicas e educação) — não inclua lazer supérfluo ou viagens.',
    sources: [
      { name: 'CVM - Guia de Planejamento Financeiro Pessoal', url: 'https://www.gov.br/cvm/pt-br' }
    ],
    extraFaqs: [
      { q: 'Onde devo deixar aplicada a minha reserva de emergência?', a: 'Exclusivamente em ativos de liquidez imediata (D+0 ou D+1) e risco soberano ou bancário conservador: Tesouro Selic, CDBs de liquidez diária pagando 100% do CDI de bancos sólidos ou fundos DI taxa zero.' },
      { q: 'Posso colocar minha reserva de emergência em ações ou criptomoedas?', a: 'Nunca. Ativos de alta volatilidade podem estar em forte queda justamente no mês em que você sofrer uma emergência e precisar sacar o dinheiro imediatamente.' },
      { q: 'Por que autônomos e PJs precisam de uma reserva maior que empregados CLT?', a: 'Porque não contam com aviso prévio, multa de 40% do FGTS nem Seguro-Desemprego caso seus principais clientes cancelem contratos simultaneamente.' }
    ]
  },
  'depreciacao-maquinas': {
    domainConcept: 'Equipamentos de trabalho — desde laptops, servidores, câmeras fotográficas e impressoras 3D até máquinas industriais, empilhadeiras e veículos utilitários — perdem valor econômico a cada ano devido ao desgaste físico e à obsolescência tecnológica. Ignorar a depreciação faz empresas e profissionais autônomos acreditarem que têm lucro maior do que o real, até o dia em que a máquina quebra definitivamente e não há caixa reservado para comprar uma substituta. A depreciação linear calcula a provisão contábil mensal exata que deve ser deduzida do preço de custo para financiar a reposição do equipamento no fim de sua vida útil.',
    formulaText: 'Depreciação Anual Linear = (Valor de Aquisição - Valor Residual Estimado) / Vida Útil em Anos. Depreciação Mensal = Depreciação Anual / 12.',
    whenToUse: 'Fundamental para freelancers, escritórios, clínicas e indústrias incluírem o desgaste de equipamentos na precificação de serviços e no cálculo do lucro real empresarial.',
    importantTips: 'Para fins contábeis no Brasil (Receita Federal), máquinas e equipamentos em geral têm vida útil fiscal padronizada em 10 anos (10% ao ano), veículos em 5 anos (20% ao ano) e equipamentos de informática/TI em 5 anos (20% ao ano).',
    sources: [
      { name: 'Receita Federal - Anexo III da IN RFB nº 1.700/2017 (Taxas de Depreciação)', url: 'https://www.gov.br/receitafederal/pt-br' }
    ],
    extraFaqs: [
      { q: 'O que é o Valor Residual na fórmula da depreciação?', a: 'É o valor estimado de mercado pelo qual você espera conseguir vender a máquina ou computador usado ao encerrar o período planejado de vida útil.' },
      { q: 'A depreciação reduz o imposto em empresas do Lucro Real?', a: 'Sim. Em empresas tributadas pelo Lucro Real, a despesa contábil de depreciação dentro dos limites fiscais reduz o lucro tributável para efeito de IRPJ e CSLL, funcionando como benefício fiscal sem saída imediata de caixa.' },
      { q: 'Como usar a depreciação mensal para formar meu preço de venda?', a: 'Divida a depreciação mensal apurada pelas horas produtivas do equipamento no mês e some esse custo/hora ao valor cobrado pelos projetos executados nele.' }
    ]
  },
  'inflacao-futura': {
    domainConcept: 'Deixar dinheiro parado em espécie, em conta corrente não remunerada ou em investimentos com rendimento abaixo da inflação cria uma falsa sensação de segurança: o saldo numérico na tela continua igual, mas sua capacidade real de comprar alimentos, serviços e moradia encolhe exponencialmente ano após ano. Esta ferramenta projeta o efeito composto de décadas de inflação sobre qualquer valor financeiro atual, revelando o poder de compra equivalente no futuro e o percentual de perda patrimonial acumulada.',
    formulaText: 'Poder de Compra Futuro = Valor Inicial / (1 + Inflação Anual / 100)^Anos. Perda Real Acumulada (%) = [(Valor Inicial - Poder Futuro) / Valor Inicial] × 100.',
    whenToUse: 'Use para conscientizar-se sobre o custo invisível de deixar economias paradas, dimensionar reajustes necessários em metas de poupança de 10 a 30 anos ou avaliar contratos com valores fixos sem cláusula de correção.',
    importantTips: 'Mesmo uma inflação considerada moderada de 4,5% ao ano reduz o poder de compra real do seu dinheiro em mais de 35% em apenas 10 anos — e em quase 60% ao longo de 20 anos!',
    sources: [
      { name: 'Banco Central do Brasil - Histórico de Metas para a Inflação', url: 'https://www.bcb.gov.br/controleinflacao/historicometas' }
    ],
    extraFaqs: [
      { q: 'Com inflação de 5% ao ano em 10 anos a perda é de 50%?', a: 'Na verdade, como a inflação incide de forma composta, os preços sobem (1,05)^10 = 1,6289 (+62,89%), e o poder de compra do dinheiro parado cai para 1 / 1,6289 = 61,39% (perda real de 38,61%).' },
      { q: 'Qual foi a média histórica recente do IPCA no Brasil?', a: 'Na última década, o IPCA oficial oscilou em torno de 4% a 6% na maioria dos anos, com picos pontuais acima de 10% em ciclos de choque de oferta.' },
      { q: 'Como evitar que minhas metas de aposentadoria fiquem defasadas pela inflação?', a: 'Sempre realize simulações de longo prazo usando a taxa de juros real (acima do IPCA) e reajuste anualmente o valor dos seus aportes mensais pelo próprio IPCA.' }
    ]
  },
  'fgts-corrigido': {
    domainConcept: 'O saldo acumulado nas contas vinculadas do FGTS sofre correção monetária mensal pela Taxa Referencial (TR) somada a juros fixos de 3% ao ano por determinação legal — além da distribuição anual de parte do resultado financeiro do fundo aprovada pelo Conselho Curador do FGTS e da decisão do STF que garantiu no mínimo a reposição pelo IPCA na remuneração global (considerando os lucros distribuídos). Esta calculadora projeta a evolução de longo prazo somando um saldo existente, novos depósitos mensais contínuos e a capitalização composta da taxa legal base de 3% ao ano.',
    formulaText: 'Converte-se a taxa base para mensal (i = 0,03 / 12) e capitaliza-se tanto o saldo inicial quanto a série de depósitos mensais: Total Corrigido = Saldo × (1 + i)^meses + Depósito × [((1 + i)^meses - 1) / i], comparando com o total nominal sem juros.',
    whenToUse: 'Use para projetar quanto terá disponível na conta do FGTS daqui a 2, 5 ou 10 anos para amortizar financiamento habitacional da Caixa, dar entrada em imóvel ou estimar base de reserva vinculada.',
    importantTips: 'Sempre que utilizar o FGTS para amortizar financiamento imobiliário cujos juros superam 5% a 10% ao ano, você troca um rendimento baixo (~3% + TR + lucros) pela eliminação de juros muito mais caros no saldo devedor da casa própria.',
    sources: [
      { name: 'Caixa Econômica Federal - Rendimento e Distribuição de Resultados FGTS', url: 'https://www.caixa.gov.br/beneficios-trabalhador/fgts/' }
    ],
    extraFaqs: [
      { q: 'O FGTS agora rende sempre igual à inflação (IPCA)?', a: 'Em 2024, o STF decidiu que a remuneração do FGTS (TR + 3% a.a. + distribuição de lucros) não pode ficar abaixo do IPCA; se a soma tradicional ficar abaixo da inflação do ano, o Conselho Curador deve complementar a diferença.' },
      { q: 'De quanto em quanto tempo posso usar o FGTS para amortizar financiamento imobiliário?', a: 'Para amortização extraordinária ou liquidação de saldo devedor de financiamento no SFH, é exigido intervalo mínimo de 2 anos entre cada utilização do FGTS pelo mesmo comprador.' },
      { q: 'Os rendimentos e lucros distribuídos no FGTS pagam Imposto de Renda?', a: 'Não. Todos os rendimentos e créditos de lucros distribuídos nas contas do FGTS são isentos de Imposto de Renda para o trabalhador.' }
    ]
  },
  'custo-aposentadoria': {
    domainConcept: 'Um erro frequente no planejamento previdenciário é projetar que as despesas na aposentadoria serão exatamente iguais às de hoje ou cairão drasticamente pela metade. Na prática, enquanto gastos com transporte diário ao trabalho, refeições fora de casa, roupas corporativas e financiamento imobiliário (já quitado) tendem a recuar, despesas com planos de saúde por faixa etária (especialmente acima dos 59 anos), medicamentos contínuos e lazer costumam crescer expressivamente. Esta ferramenta simula o novo orçamento real equilibrando reduções operacionais e acréscimos previstos com saúde.',
    formulaText: 'Orçamento Médio na Aposentadoria = Gastos Atuais × (1 - Redução Estimada% / 100) + Previsão de Gastos Extras com Plano de Saúde e Cuidados.',
    whenToUse: 'Use antes de definir sua meta mensal de renda complementar na previdência privada ou verificar se o benefício projetado pelo INSS cobrirá seus gastos futuros reais.',
    importantTips: 'Pelos reajustes etários da ANS (Agência Nacional de Saúde Suplementar), a última faixa etária de planos individuais/empresariais (59 anos ou mais) pode custar até 6 vezes o valor da primeira faixa (0–18 anos). Provisione esse salto com antecedência!',
    sources: [
      { name: 'ANS - Agência Nacional de Saúde Suplementar (Faixas Etárias)', url: 'https://www.gov.br/ans/pt-br' }
    ],
    extraFaqs: [
      { q: 'Quais despesas costumam desaparecer após a aposentadoria?', a: 'Deslocamento diário para o trabalho, mensalidades de cursos profissionais, prestações de imóveis já quitados e custos com criação de filhos independentes costumam reduzir o custo fixo básico.' },
      { q: 'Qual é o maior vilão do orçamento após os 60 anos no Brasil?', a: 'Sem dúvida são os reajustes anuais acumulados dos planos de saúde privados e a elevação dos custos com medicamentos, fisioterapia e prevenção médica.' },
      { q: 'Aposentados por doenças graves têm isenção de Imposto de Renda?', a: 'Sim. A Lei nº 7.713/1988 concede isenção de IRRF sobre proventos de aposentadoria e pensão para portadores de moléstias graves especificadas em lei, mediante laudo médico oficial.' }
    ]
  },
  'renda-eterna': {
    domainConcept: 'Conhecida internacionalmente como Safe Withdrawal Rate (SWR) — popularizada pelo famoso Trinity Study de finanças —, a Taxa Segura de Retirada responde à maior dúvida de quem já acumulou patrimônio: qual percentual posso sacar todo ano para gastar na aposentadoria sem correr o risco de ver o dinheiro acabar antes do fim da vida? Aplicando uma taxa de retirada conservadora (tradicionalmente 4% ao ano ajustada pela inflação, ou 3% a 3,5% para horizontes acima de 40 anos), o rendimento real da carteira compensa os saques ao longo de décadas.',
    formulaText: 'Cota de Retirada Anual = Patrimônio Total Investido × (Taxa de Retirada SWR / 100). Cota de Retirada Mensal = Retirada Anual / 12.',
    whenToUse: 'Fundamental para quem atingiu um patrimônio relevante (ou recebeu herança, venda de empresa ou imóvel) e quer definir um orçamento mensal seguro para viver de rendimentos.',
    importantTips: 'Em momentos de crise aguda nas bolsas ou juros muito baixos, reduzir temporariamente os saques de 4% para 3,5% evita o "risco de sequência de retornos" (vender ativos em baixa logo nos primeiros anos da aposentadoria).',
    sources: [
      { name: 'B3 Educação Financeira - Independência e Renda Passiva', url: 'https://edu.b3.com.br/' }
    ],
    extraFaqs: [
      { q: 'A regra dos 4% funciona no Brasil da mesma forma que nos Estados Unidos?', a: 'Historicamente, os juros reais brasileiros (títulos IPCA+ pagando 5% a 6% acima da inflação) oferecem até margem confortável para a regra de 4%, desde que o investidor considere Imposto de Renda e evite concentração excessiva em um único ativo.' },
      { q: 'O patrimônio fica intacto para sempre retirando 4% ao ano?', a: 'Na maioria dos cenários históricos de 30 anos, o patrimônio não apenas dura como termina maior que o inicial; contudo, em sequências econômicas muito adversas, o objetivo da taxa segura é garantir que o saldo não zere antes de 30 anos.' },
      { q: 'Posso aumentar meus saques anualmente pela inflação?', a: 'Sim! A essência do SWR é definir o valor no ano 1 (ex: 4% de R$ 1 milhão = R$ 40.000/ano) e reajustar esse valor anualmente pelo IPCA.' }
    ]
  },
  'aposentadoria-preco-liberdade': {
    domainConcept: 'Mais do que saber quanto patrimônio é necessário para viver de renda, o movimento FIRE (Financial Independence, Retire Early) popularizou a projeção matemática do prazo exato em anos que falta até conquistar a independência financeira. Diferentemente do que muitos pensam, a velocidade para atingir esse marco depende muito mais da sua taxa de poupança mensal (diferença entre o que ganha e o que gasta) do que apenas do tamanho absoluto do seu salário, pois reduzir gastos mensais diminui simultaneamente o patrimônio-alvo necessário e acelera os aportes.',
    formulaText: 'O Patrimônio Alvo adota a Regra dos 4% (Gasto Anual / 0,04 = 25 × Gastos Anuais). O tempo em meses até o alvo resolve a equação logarítmica da série capitalizada: n = ln[(Alvo + Aporte/r) / (Patrimônio Atual + Aporte/r)] / ln(1 + r), convertido para anos.',
    whenToUse: 'Use para simular o efeito de aumentar em R$ 300 ou R$ 500 o seu aporte mensal ou de melhorar a rentabilidade líquida real sobre quantos anos você economiza rumo à aposentadoria.',
    importantTips: 'Insira sempre a rentabilidade real acima da inflação (ex: 5% a 6% a.a.) para que o cálculo já reflita o patrimônio com poder de compra equivalente ao de hoje na data da conquista.',
    sources: [
      { name: 'CVM - Educação Financeira e Investimentos de Longo Prazo', url: 'https://www.gov.br/investidor' }
    ],
    extraFaqs: [
      { q: 'Por que o patrimônio alvo na independência financeira equivale a 25 vezes o gasto anual?', a: 'Porque 1 / 0,04 = 25. Se você gasta R$ 4.000/mês (R$ 48.000/ano), precisa de 25 × R$ 48.000 = R$ 1.200.000,00 para sacar 4% anuais com segurança.' },
      { q: 'Qual variável acelera mais o prazo: ganhar mais dinheiro ou investir melhor?', a: 'Nos primeiros 10 anos de acumulação, a taxa de poupança (tamanho do aporte mensal frente ao gasto) tem impacto muito maior no prazo do que pequenos ganhos extras de rentabilidade.' },
      { q: 'O patrimônio que já tenho hoje reduz muito o tempo restante?', a: 'Sim. Como o patrimônio atual já entra rendendo juros compostos desde o mês zero, cada R$ 50 mil ou R$ 100 mil já acumulados cortam anos inteiros da caminhada.' }
    ]
  },

  // ================= JURÍDICO & IMPOSTOS (11) =================
  'imposto-criptomoedas-gcap': {
    title: 'Calculadora de Imposto sobre Criptomoedas (GCAP) 2026 | Brasil Calculadoras',
    description: 'Calcule o ganho de capital e Imposto de Renda sobre vendas e permutas de Bitcoin, Ethereum e criptoativos, verificando a isenção mensal de R$ 35.000.',
    domainConcept: 'Investidores residentes no Brasil que negociam Bitcoin, Ethereum, stablecoins (USDT/USDC) e altcoins devem observar rigorosamente as regras da Receita Federal para apuração mensal de Ganho de Capital (GCAP) — além da obrigatoriedade de informar operações na Instrução Normativa RFB nº 1.888/2019 quando realizadas fora de corretoras nacionais acima de R$ 30 mil. Para vendas em corretoras nacionais (exchanges com CNPJ no Brasil), permanece vigente a regra de isenção sobre o lucro quando o total alienado no mês-calendário fica igual ou inferior a R$ 35.000,00; ultrapassado esse teto em apenas um centavo, todo o lucro líquido obtido no mês torna-se tributável a partir de 15%.',
    formulaText: 'Lucro Líquido = Valor Total de Vendas no Mês - Custo Médio de Aquisição - Taxas de Corretagem/Rede (Gas). Se Vendas Totais ≤ R$ 35.000,00: Isento (IR = R$ 0). Se Vendas acima de R$ 35.000,00 e Lucro positivo: Imposto Devido = Lucro Líquido × 15% (para ganhos até R$ 5 milhões).',
    whenToUse: 'Use no último dia de cada mês antes de realizar novas vendas de criptoativos ou para gerar a estimativa de DARF (código 4600) com vencimento no último dia útil do mês seguinte.',
    importantTips: 'A Receita Federal equipara a permuta direta entre duas criptomoedas (como trocar Bitcoin por Solana ou USDT) a uma venda seguida de compra: o volume dessa troca entra na soma do limite mensal de R$ 35.000,00!',
    sources: [
      { name: 'Receita Federal - Perguntas e Respostas IRPF (Criptoativos)', url: 'https://www.gov.br/receitafederal/pt-br' },
      { name: 'Instrução Normativa RFB nº 1.888/2019', url: 'http://normas.receita.fazenda.gov.br/' }
    ],
    extraFaqs: [
      { q: 'Se eu vender R$ 36.000 no mês, pago imposto apenas sobre os R$ 1.000 excedentes?', a: 'Não! O teto de R$ 35.000 é limite de isenção total, e não faixa dedutível: vendendo R$ 36.000, todo o lucro apurado naquelas vendas do mês sofre incidência mínima de 15% de Imposto de Renda.' },
      { q: 'Operações em exchanges estrangeiras (sem sede no Brasil) têm a mesma isenção de R$ 35 mil?', a: 'Atenção à Lei nº 14.754/2023 (tributação de offshores e aplicações no exterior): lucros apurados em custódia ou corretoras no exterior passaram a ser tributados na declaração anual à alíquota fixa de 15% sem a isenção mensal de R$ 35 mil aplicável às vendas domésticas.' },
      { q: 'Posso compensar prejuízo de um mês com lucro de outro mês em cripto?', a: 'No GCAP doméstico tradicional (código 4600), diferentemente de ações em bolsa, o prejuízo em uma operação no mês não é transportado para compensar lucros de meses seguintes.' }
    ]
  },
  'mora-judicial': {
    domainConcept: 'Quando uma obrigação financeira, aluguel, boleto comercial ou contrato particular vence sem pagamento, passam a incidir dois encargos jurídicos distintos: a multa moratória (penalidade fixa contratual pelo inadimplemento, limitada por lei a 2% nas relações de consumo pelo Art. 52 §1º do CDC e a 10% ou conforme pacto civil em contratos empresariais) e os juros de mora proporcionais aos dias de atraso (comumente 1% ao mês pro rata die). Calcular corretamente ambos os encargos separados evita cobranças abusivas ou anatocismo ilegal.',
    formulaText: 'Multa de Atraso = Valor Original × (Multa% / 100). Juros de Mora Pro Rata Die = Valor Original × [(Juros Mensais% / 100) / 30] × Dias de Atraso. Valor Total = Principal + Multa + Juros.',
    whenToUse: 'Use para atualizar rapidamente faturas, mensalidades, aluguéis vencidos ou débitos contratuais simples em negociações extrajudiciais entre credor e devedor.',
    importantTips: 'Em contratos regidos pelo Código de Defesa do Consumidor (como condomínios, escolas, cartões e telefonia), a multa de atraso jamais pode ultrapassar 2% sobre o valor da prestação.',
    sources: [
      { name: 'Código Civil Brasileiro - Arts. 394 a 407 (Da Mora e Perdas e Danos)', url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm' },
      { name: 'Código de Defesa do Consumidor - Art. 52 §1º', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm' }
    ],
    extraFaqs: [
      { q: 'Posso cobrar juros de mora sobre o valor já acrescido da multa?', a: 'Em encargos simples pro rata die tradicionais, tanto a multa quanto os juros incidem isoladamente sobre o principal corrigido, evitando capitalização indevida de multa sobre juros.' },
      { q: 'E se o vencimento cair em sábado, domingo ou feriado?', a: 'Pelo Código Civil, prorroga-se o vencimento para o primeiro dia útil subsequente sem incidência de multa ou juros se pago nessa data; contudo, atrasando além desse dia útil, contam-se os dias desde o vencimento original.' },
      { q: 'Qual é a taxa legal de juros de mora quando o contrato é omisso?', a: 'Após a Lei nº 14.905/2024, quando não convencionados juros no contrato civil, aplica-se a taxa legal correspondente à Selic deduzido o IPCA acumulado no período.' }
    ]
  },
  'correcao-monetaria': {
    domainConcept: 'Ao longo de meses ou anos de tramitação de um processo, contrato de prestação de serviços ou devolução de valores pagos indevidamente, a inflação reduz o valor real da moeda. A correção monetária não constitui acréscimo de ganho nem penalidade ao devedor: ela apenas recomponha o poder aquisitivo original da quantia devida utilizando um indexador oficial acumulado no período (como IPCA, INPC, IGP-M ou Tabela Prática do Tribunal de Justiça). Esta ferramenta aplica o percentual acumulado do índice escolhido sobre o valor histórico original.',
    formulaText: 'Acréscimo da Correção = Valor Financeiro Original × (Taxa de Correção Acumulada% / 100). Valor Atualizado = Valor Original + Acréscimo.',
    whenToUse: 'Use após consultar o fator acumulado entre duas datas (IPCA/INPC/IGP-M) para atualizar valores de aluguéis antigos, indenizações simples, notas promissórias ou devoluções contratuais.',
    importantTips: 'Em condenações judiciais cíveis ou trabalhistas com datas muito antigas que incluem também juros de mora além da inflação, lembre-se de aplicar primeiro a atualização monetária e depois os juros legais ou a taxa Selic unificada conforme determinado na sentença.',
    sources: [
      { name: 'Banco Central - Calculadora de Correção de Valores', url: 'https://www.bcb.gov.br/acessoinformacao/calculadoradocidadao' }
    ],
    extraFaqs: [
      { q: 'Qual índice de correção monetária é mais usado pelos Tribunais de Justiça?', a: 'Para ações cíveis contra particulares, tradicionalmente usam-se INPC ou IPCA-E conforme a tabela prática de cada TJ (observando-se a Lei nº 14.905/2024 sobre IPCA como índice legal padrão na ausência de convenção).' },
      { q: 'Qual a diferença entre índice mensal simples e acumulado composto?', a: 'Para períodos superiores a 1 mês, os percentuais mensais da inflação não devem ser somados aritmeticamente, mas sim multiplicados na forma de juros compostos: (1 + i1) × (1 + i2) - 1.' },
      { q: 'Correção monetária paga Imposto de Renda?', a: 'Em regra, a mera reposição inflacionária de dano patrimonial ou repetição de indébito não representa acréscimo de renda tributável, diferenciando-se dos juros moratórios/remuneratórios conforme o caso.' }
    ]
  },
  'custas-processuais': {
    domainConcept: 'Ingressar com uma ação judicial na Justiça Comum Estadual (fora dos Juizados Especiais Cíveis em primeira instância, que são isentos) exige o recolhimento antecipado da Taxa Judiciária de distribuição e das guias de mandato/procuração ou citação postal — salvo nos casos em que o juiz concede os benefícios da Justiça Gratuita. Cada Tribunal de Justiça estadual publica anualmente sua própria tabela com percentuais sobre o Valor da Causa (frequentemente entre 1% e 2%) e pisos mínimos vinculados à unidade fiscal estadual (como UFESP em São Paulo).',
    formulaText: 'Para estimativa preliminar de entrada: TJSP (~1% do valor da causa com mínimo de R$ 162,10 + R$ 25,00 mandato); TJRJ (~2% com mínimo de R$ 200,00 + R$ 30,00); TJMG (~1,5% com mínimo de R$ 150,00 + R$ 20,00); Demais TJs (~1,5% + R$ 22,00).',
    whenToUse: 'Use na elaboração de orçamentos iniciais para clientes antes de protocolar ações cíveis de cobrança, revisão contratual, despejo ou indenização acima de 40 salários mínimos.',
    importantTips: 'Ações cíveis de menor complexidade com valor da causa até 40 salários mínimos podem ser ajuizadas nos Juizados Especiais Cíveis (JEC) sem pagamento de custas iniciais em 1º grau; o recolhimento só passa a ser exigido em caso de recurso.',
    sources: [
      { name: 'Tribunal de Justiça de São Paulo - Tabela de Custas (Lei 11.608/2003)', url: 'https://www.tjsp.jus.br/' }
    ],
    extraFaqs: [
      { q: 'Quem ganha o processo recebe de volta as custas que pagou no início?', a: 'Sim. Ao final do processo, a parte derrotada é condenada a reembolsar todas as custas processuais e despesas antecipadas pelo vencedor, além de pagar honorários sucumbenciais.' },
      { q: 'Como conseguir isenção das custas processuais?', a: 'Requerendo ao juiz o benefício da Assistência Judiciária Gratuita (Art. 98 do CPC), demonstrando por comprovantes de renda, extratos ou declaração de IR que o pagamento prejudicaria o sustento próprio ou familiar.' },
      { q: 'As guias variam conforme cada estado da federação?', a: 'Sim. O Brasil possui 27 Tribunais de Justiça estaduais com regimentos de custas independentes; sempre confirme a guia exata (DARE, GRERJ, etc.) no portal do respectivo tribunal antes do protocolo.' }
    ]
  },
  'pensao-alimenticia': {
    domainConcept: 'Ao contrário de um mito popular bastante difundido, o Código Civil Brasileiro não fixa uma porcentagem única obrigatória de 30% do salário para pensão alimentícia. Na prática forense das Varas de Família, os juízes definem a obrigação alimentar aplicando o chamado "trinômio alimentar" (necessidade de quem recebe, possibilidade financeira de quem paga e proporcionalidade entre ambos os genitores). Como referência inicial orientativa, decisões costumam arbitrar percentuais entre 15% e 30% dos rendimentos líquidos quando o alimentante possui emprego formal com 1 filho (ou proporções maiores para 2 ou 3 filhos), e base percentual sobre o salário mínimo quando desempregado ou autônomo.',
    formulaText: 'Referência orientativa aplicada: se Empregado Formal = 20% (1 filho), 30% (2 filhos) ou 40% (3+ filhos) sobre o rendimento líquido. Se Autônomo/Informal = 30%, 50% ou 70% sobre o Salário Mínimo vigente (R$ 1.621,00).',
    whenToUse: 'Use para simular referências iniciais em mediações amigáveis, planejamento familiar ou preparação de documentos antes de consultar um advogado ou a Defensoria Pública.',
    importantTips: 'Para empregados CLT com desconto direto em folha, a base "líquida" refere-se normalmente ao salário bruto deduzidos apenas os descontos obrigatórios legais (INSS e IRRF), e não empréstimos consignados pessoais — incidindo inclusive sobre 13º salário, férias e horas extras.',
    sources: [
      { name: 'Código Civil - Arts. 1.694 a 1.710 (Dos Alimentos)', url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm' },
      { name: 'Lei de Alimentos - Lei nº 5.478/1968', url: 'https://www.planalto.gov.br/ccivil_03/leis/l5478.htm' }
    ],
    extraFaqs: [
      { q: 'A guarda compartilhada acaba com a obrigação de pagar pensão alimentícia?', a: 'Não! Guarda compartilhada refere-se à divisão das decisões sobre a vida do filho e convivência equilibrada. Havendo diferença de renda entre os pais ou maior permanência com um deles, a pensão continua sendo fixada.' },
      { q: 'A pensão alimentícia incide sobre o 13º salário e terço de férias?', a: 'Conforme jurisprudência pacificada do STJ, quando fixada em percentual sobre os rendimentos do alimentante empregado, a pensão incide automaticamente sobre 13º salário e terço constitucional de férias, salvo exclusão expressa na sentença.' },
      { q: 'Ao fazer 18 anos, o pagamento da pensão acaba automaticamente?', a: 'Não! O cancelamento exige autorização judicial via Ação de Exoneração de Alimentos, e a obrigação costuma ser estendida até os 24 anos caso o filho esteja cursando ensino superior ou técnico.' }
    ]
  },
  'ganho-capital': {
    domainConcept: 'Ao vender um imóvel, terreno, veículo de alto valor ou participação societária por preço superior ao valor de aquisição declarado na sua declaração de Imposto de Renda, a diferença positiva constitui Ganho de Capital e deve ser declarada no programa GCAP da Receita Federal até o último dia útil do mês seguinte à venda. Para ganhos líquidos de até R$ 5 milhões, a alíquota padrão é de 15%. Contudo, a legislação prevê duas importantes hipóteses de isenção total para imóveis: a venda do único imóvel do titular por até R$ 440.000,00 (sem ter vendido outro nos últimos 5 anos) ou a aplicação integral do valor obtido na compra de outro imóvel residencial no Brasil em até 180 dias.',
    formulaText: 'Ganho Bruto = max(0, Preço de Venda - Custo de Aquisição Escriturado). Caso enquadrado como Único Imóvel Residencial até R$ 440.000,00: Isento (0%). Caso contrário: Imposto Devido = Ganho Bruto × 15% (faixa inicial até R$ 5 milhões).',
    whenToUse: 'Use antes de assinar escrituras de compra e venda de imóveis ou cotas empresariais para incluir o custo tributário do GCAP na sua negociação de preço.',
    importantTips: 'Despesas comprovadas de corretagem pagas pelo vendedor e benfeitorias/reformas documentadas com notas fiscais e averbadas na matrícula podem ser somadas ao custo de aquisição para reduzir legitimamente o lucro tributável (e imóveis comprados antes de 1988 contam com fatores de redução anuais).',
    sources: [
      { name: 'Receita Federal - Programa de Apuração de Ganhos de Capital (GCAP)', url: 'https://www.gov.br/receitafederal/pt-br' }
    ],
    extraFaqs: [
      { q: 'Quais são as alíquotas progressivas se o ganho de capital passar de R$ 5 milhões?', a: 'Pela Lei nº 13.259/2016: 15% até R$ 5 milhões; 17,5% sobre o excedente entre R$ 5M e R$ 10M; 20% entre R$ 10M e R$ 30M; e 22,5% acima de R$ 30 milhões.' },
      { q: 'Se eu usar o dinheiro da venda para comprar outro imóvel em 180 dias, pago imposto?', a: 'Não, desde que ambos sejam imóveis residenciais localizados no Brasil e você não tenha utilizado esse benefício fiscal nos últimos 5 anos (Art. 39 da Lei nº 11.196/2005).' },
      { q: 'Imóveis comprados antes de 1969 pagam imposto sobre ganho de capital?', a: 'Não. Imóveis adquiridos até 1969 gozam de redução de 100% no ganho de capital apurado pela Lei nº 7.713/1988, ficando totalmente isentos.' }
    ]
  },
  'divisao-bens': {
    domainConcept: 'Ao encerrar um casamento ou união estável, a partilha do patrimônio depende diretamente do regime de bens adotado pelo casal no registro civil ou em pacto antenupcial. No Brasil, o regime legal padrão (na ausência de pacto) é a Comunhão Parcial de Bens, na qual apenas os bens adquiridos onerosamente durante a união dividem-se em 50% (meação) para cada cônjuge; na Comunhão Universal, todos os bens (anteriores e posteriores) integram a massa divisível em 50% cada; já na Separação Total de Bens, cada cônjuge mantém exclusivamente o patrimônio registrado em seu próprio nome.',
    formulaText: 'Para Comunhão Parcial ou Comunhão Universal, cada cônjuge recebe Meação = Bens Comuns / 2 (50%). Para Separação Total de Bens, não há comunicação automática de bens individuais (0% de meação obrigatória sobre patrimônio exclusivo).',
    whenToUse: 'Útil em planejamentos pré-matrimoniais (escolha de regime em cartório), mediações familiares ou simulações preliminares de partilha consensual em divórcios.',
    importantTips: 'Mesmo na Comunhão Parcial de Bens, bens recebidos individualmente por herança ou doação pura, bem como imóveis comprados exclusivamente com o produto da venda de um bem particular anterior (sub-rogação), não entram na divisão se devidamente comprovados.',
    sources: [
      { name: 'Código Civil Brasileiro - Arts. 1.639 a 1.688 (Do Regime de Bens)', url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm' }
    ],
    extraFaqs: [
      { q: 'Na união estável sem contrato escrito, qual regime de bens é aplicado?', a: 'Pelo Art. 1.725 do Código Civil, aplica-se automaticamente o regime da Comunhão Parcial de Bens a tudo o que foi adquirido onerosamente na constância da convivência.' },
      { q: 'Dívidas contraídas durante o casamento também são divididas no divórcio?', a: 'Sim, desde que contraídas em proveito da família ou da manutenção do lar; dívidas contraídas exclusivamente para benefício pessoal ilícito ou sem relação familiar não comunicam ao outro cônjuge.' },
      { q: 'Quando o divórcio pode ser feito rapidamente direto no cartório?', a: 'Sempre que for consensual (com acordo sobre a divisão dos bens) e não houver filhos menores ou incapazes — ou, havendo menores, desde que questões de guarda e alimentos já tenham sido resolvidas judicialmente (Resolução CNJ).' }
    ]
  },
  'inventario-partilha': {
    domainConcept: 'Após o falecimento de uma pessoa que deixa bens imóveis, saldos bancários ou veículos, a transferência formal do patrimônio para os herdeiros exige a abertura de inventário — judicial ou extrajudicial em Tabelionato de Notas. Um dos maiores custos desse procedimento (junto aos honorários advocatícios e emolumentos de cartório) é o ITCMD (Imposto sobre Transmissão Causa Mortis e Doação), um tributo estadual cuja alíquota varia de estado para estado no Brasil (por exemplo, 4% em SP, 5% em MG e faixas progressivas médias em torno de 4,5% a 8% conforme a UF). Simular previamente o imposto e a quota por herdeiro evita bloqueios por falta de liquidez.',
    formulaText: 'ITCMD Estimado = Patrimônio Líquido do Espólio × (Alíquota Estadual / 100). Patrimônio Líquido a Partilhar = Espólio - ITCMD. Quota por Herdeiro = Líquido a Partilhar / Número de Herdeiros Concorrentes.',
    whenToUse: 'Use no planejamento sucessório familiar, ao avaliar a necessidade de seguros de vida ou previdência para dar liquidez aos herdeiros e ao estimar custos de inventário em cartório.',
    importantTips: 'Abertura do inventário fora do prazo legal de 60 dias a partir do óbito (Art. 611 do CPC) acarreta multas pesadas sobre o ITCMD que variam de 10% a 20% dependendo da legislação tributária estadual.',
    sources: [
      { name: 'Código de Processo Civil - Arts. 610 a 673 (Inventário e Partilha)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm' }
    ],
    extraFaqs: [
      { q: 'O cônjuge sobrevivente sempre divide a herança em partes iguais com os filhos?', a: 'Depende do regime de bens! Na Comunhão Parcial, o cônjuge já fica com 50% (meação) dos bens comuns e concorre como herdeiro apenas sobre os bens particulares do falecido; na Comunhão Universal, fica com sua meação de 50% e não herda sobre o restante.' },
      { q: 'Quais são os requisitos para fazer o inventário mais rápido em cartório?', a: 'Exige consenso absoluto entre todos os herdeiros sobre a partilha, assistência obrigatória de advogado e ausência de testamento conflitante (embora testamentos autorizados judicialmente já possam ser lavrados em cartório).' },
      { q: 'Se o patrimônio tiver dívidas deixadas pelo falecido, os herdeiros pagam do próprio bolso?', a: 'Não. Pela regra da intra vires hereditatis (Art. 1.792 do Código Civil), as dívidas do falecido são pagas exclusivamente até o limite da força da herança deixada.' }
    ]
  },
  'tabela-simples': {
    domainConcept: 'Empresas brasileiras optantes pelo Simples Nacional (Microempresas até R$ 360 mil/ano e Empresas de Pequeno Porte até R$ 4,8 milhões/ano) não pagam a alíquota nominal estampada nas tabelas da Lei Complementar nº 123/2006. Desde 2018, vigora o cálculo progressivo por faixa baseado no Faturamento Bruto Acumulado dos últimos 12 meses (RBT12) combinado a uma parcela a deduzir, gerando uma alíquota efetiva suavizada que evita saltos bruscos de imposto quando a empresa muda de faixa de receita. Essa calculadora cobre os Anexos I (Comércio), II (Indústria) e III (Serviços em geral).',
    formulaText: 'Alíquota Efetiva = [(RBT12 × Alíquota Nominal da Faixa) - Parcela a Deduzir] / RBT12. Imposto Mensal do DAS = Faturamento do Mês × Alíquota Efetiva.',
    whenToUse: 'Use mensalmente para projetar o valor do DAS de comércio, indústrias ou prestadoras de serviços do Simples Nacional, simular a entrada de um novo grande cliente ou comparar enquadramentos.',
    importantTips: 'Na primeira faixa de todos os anexos (RBT12 até R$ 180.000,00), a parcela a deduzir é zero e a alíquota efetiva coincide com a nominal (4% no Anexo I, 4,5% no Anexo II e 6% no Anexo III). Acima disso, a parcela a deduzir reduz expressivamente a taxa real.',
    sources: [
      { name: 'Lei Complementar nº 123/2006 (Estatuto da Microempresa e Simples Nacional)', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm' }
    ],
    extraFaqs: [
      { q: 'O que acontece se minha empresa acabou de ser aberta e não tem 12 meses de histórico?', a: 'Para empresas recém-abertas, a Receita Federal projeta o RBT12 proporcionalizando o faturamento do primeiro mês × 12 (no 1º mês) ou média dos meses anteriores × 12 até completar o ciclo anual.' },
      { q: 'O imposto do Simples Nacional já inclui INSS patronal (CPP)?', a: 'Nos Anexos I, II, III e V, a Contribuição Patronal Previdenciária já está embutida na guia unificada DAS. Apenas no Anexo IV (construção civil, vigilância, limpeza e advocacia) a CPP de 20% sobre a folha é recolhida à parte.' },
      { q: 'O que é o Fator R que reduz impostos de serviços de 15,5% para 6%?', a: 'Quando a empresa de serviços intelectuais (como engenharia, TI, medicina ou arquitetura) gasta pelo menos 28% de sua receita com salários e pró-labore nos últimos 12 meses, é tributada pelo Anexo III (desde 6%) em vez do Anexo V (desde 15,5%).' }
    ]
  },
  'aliquota-iss': {
    domainConcept: 'O Imposto Sobre Serviços de Qualquer Natureza (ISS ou ISSQN) é um tributo de competência municipal e do Distrito Federal cobrado sobre a prestação de serviços listados na Lei Complementar nº 116/2003. Por determinação constitucional e legal, sua alíquota varia entre o piso mínimo de 2% e o teto máximo de 5%, conforme a legislação de cada prefeitura e o código de atividade (CNAE/código de serviço) da nota fiscal emitida. Saber exatamente quanto será retido na fonte pelo tomador evita erros na conciliação bancária de contas a receber.',
    formulaText: 'Valor do ISS = Valor Bruto da Nota Fiscal × (Alíquota ISS do Município% / 100). Valor Líquido após ISS = Valor Bruto - Valor do ISS.',
    whenToUse: 'Use ao emitir Notas Fiscais de Serviço Eletrônicas (NFS-e) com retenção de ISS na fonte pelo tomador ou ao formar o preço líquido de propostas comerciais municipais.',
    importantTips: 'Empresas optantes pelo Simples Nacional já pagam o ISS embutido na guia única DAS; por isso, caso o tomador faça retenção de ISS na nota fiscal, informe corretamente o percentual no PGDAS-D para não pagar o mesmo imposto em duplicidade.',
    sources: [
      { name: 'Lei Complementar nº 116/2003 (Normas Gerais do ISSQN)', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp116.htm' }
    ],
    extraFaqs: [
      { q: 'Qual é a alíquota mínima e máxima permitida para o ISS no Brasil?', a: 'A Lei Complementar nº 116/2003 (alterada pela LC nº 157/2016) estabelece que nenhum município pode cobrar alíquota inferior a 2% nem superior a 5%.' },
      { q: 'O MEI precisa pagar ou ter retenção de ISS por fora na nota fiscal?', a: 'Não. O Microempreendedor Individual prestador de serviços já recolhe R$ 5,00 fixos de ISS dentro do DAS mensal, sendo dispensado de retenção na fonte na maioria dos serviços.' },
      { q: 'Em qual município o ISS deve ser pago: no do prestador ou no do cliente?', a: 'A regra geral determina que o ISS é devido no município onde está estabelecido o prestador, salvo exceções expressas no Art. 3º da LC 116/2003 (como construção civil, limpeza, vigilância e eventos, em que incide no local da execução).' }
    ]
  },
  'irrf-investimentos': {
    domainConcept: 'Aplicações tradicionais de renda fixa tributáveis no Brasil — como Tesouro Direto (Selic, Prefixado e IPCA+), CDBs, RDBs, LCIs/LCAs não isentas (não aplicável às isentas), debêntures comuns e fundos de renda fixa de longo prazo — obedecem à Tabela Regressiva do Imposto de Renda Retido na Fonte. Quanto mais tempo o dinheiro permanece investido sem resgates, menor é a fatia cobrada pela Receita Federal exclusivamente sobre o rendimento (lucro) no momento do resgate ou vencimento do título.',
    formulaText: 'Aplica-se a alíquota regressiva conforme os dias corridos da aplicação: até 180 dias (22,5%); 181 a 360 dias (20,0%); 361 a 720 dias (17,5%); e acima de 720 dias (15,0%). Imposto IR = Rendimento Bruto × (Alíquota / 100); Rendimento Líquido = Rendimento Bruto - Imposto.',
    whenToUse: 'Use para comparar um CDB tributado (ex: 105% do CDI) contra uma LCI/LCA isenta de IR (ex: 90% do CDI) no mesmo prazo de vencimento e verificar qual entrega mais rendimento líquido no bolso.',
    importantTips: 'Resgates realizados antes de completar 30 dias corridos da aplicação sofrem, além do Imposto de Renda de 22,5%, incidência de IOF regressivo sobre o lucro (começando em 96% no 1º dia e chegando a zero no 30º dia).',
    sources: [
      { name: 'Lei nº 11.033/2004 - Alíquotas Regressivas em Renda Fixa', url: 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/lei/l11033.htm' }
    ],
    extraFaqs: [
      { q: 'O Imposto de Renda de renda fixa incide sobre o valor total sacado ou apenas sobre o lucro?', a: 'Incide exclusivamente sobre o rendimento (lucro) obtido acima do valor originalmente aplicado, sendo retido diretamente na fonte pelo banco ou corretora antes do crédito em conta.' },
      { q: 'Quais investimentos de renda fixa são isentos de Imposto de Renda para Pessoa Física?', a: 'Caderneta de Poupança, LCI (Letra de Crédito Imobiliário), LCA (Letra de Crédito do Agronegócio), CRI, CRA e Debêntures Incentivadas de infraestrutura.' },
      { q: 'Se eu aplicar hoje e resgatar em exatos 180 dias, pago 22,5% ou 20%?', a: 'Até exatos 180 dias corridos ainda se aplica 22,5%. A redução para 20% começa a partir do 181º dia (contagem de dias corridos a partir da data da aplicação).' }
    ]
  }
};
