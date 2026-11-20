import { CalcSeoDetail } from './types';

export const IMOBILIARIO_VEICULOS_SAUDE_SEO: Record<string, CalcSeoDetail> = {
  // ================= IMOBILIÁRIO (10) =================
  'financiamento-price-sac': {
    title: 'Simulador Financiamento Imobiliário: SAC vs Tabela Price | Brasil Calculadoras',
    description: 'Compare prestação inicial, parcela final, amortização e juros totais entre os sistemas SAC e Tabela Price no financiamento imobiliário.',
    domainConcept: 'Ao contratar um financiamento habitacional de 10 a 35 anos em bancos brasileiros como Caixa Econômica Federal, Banco do Brasil, Itaú ou Santander, o comprador precisa escolher entre dois modelos de amortização: o SAC (Sistema de Amortização Constante) ou a Tabela Price (Sistema Francês). No SAC, a amortização mensal do saldo devedor é fixa do começo ao fim, fazendo com que a parcela comece mais elevada e diminua todo mês à medida que os juros caem. Na Tabela Price, todas as prestações têm o mesmo valor nominal, facilitando o encaixe no orçamento inicial, mas exigindo maior pagamento total de juros porque a dívida principal cai devagar nos primeiros anos.',
    formulaText: 'No SAC: Amortização = PV / n; 1ª Parcela = Amortização + (PV × i); Última Parcela = Amortização × (1 + i); Juros Totais = [(PV × i + Amortização × i) × n] / 2. Na Price: Parcela Fixa PMT = PV × [i × (1 + i)^n] / [(1 + i)^n - 1], em que i é a taxa mensal (anual / 1200) e n o prazo em meses.',
    whenToUse: 'Use antes de aprovar sua carta de crédito imobiliário para decidir entre parcelas decrescentes (menor custo final no SAC) ou parcela fixa inicial menor (maior poder de aprovação de renda na Price).',
    importantTips: 'Se optar pela Tabela Price para conseguir aprovação bancária com parcela inicial menor e passar a amortizar valores extras com o FGTS ou 13º nos primeiros anos, você neutraliza quase toda a desvantagem de juros da Price!',
    sources: [
      { name: 'Caixa Econômica Federal - Habitação (SAC e Price)', url: 'https://www.caixa.gov.br/voce/habitacao/' },
      { name: 'ABECIP - Crédito Imobiliário', url: 'https://www.abecip.org.br/' }
    ],
    extraFaqs: [
      { q: 'Por que a parcela inicial do SAC é mais alta que a da Tabela Price?', a: 'Porque no SAC você já começa amortizando uma fração constante e significativa do saldo devedor desde o mês 1, somada aos juros sobre todo o saldo inicial.' },
      { q: 'Qual sistema é mais vantajoso se eu pretender quitar ou vender o imóvel em poucos anos?', a: 'No SAC o saldo devedor cai de maneira linear e mais rápida logo nos primeiros anos; na Price, após 5 anos de pagamento, uma fração bem maior do saldo principal ainda estará em aberto.' },
      { q: 'Os seguros obrigatórios MIP e DFI mudam entre SAC e Price?', a: 'O seguro de Morte e Invalidez Permanente (MIP) incide sobre o saldo devedor remanescente; como no SAC o saldo cai mais depressa, o custo acumulado de seguro também tende a ser menor.' }
    ]
  },
  'reajuste-aluguel': {
    domainConcept: 'Pela Lei do Inquilinato (Lei nº 8.245/1991), contratos de locação residencial e comercial podem ser reajustados anualmente na data-base de aniversário utilizando um índice oficial de preços previamente pactuado — tradicionalmente o IGP-M (FGV) ou o IPCA (IBGE). Calcular o novo valor exato e a diferença mensal em reais garante transparência entre locador, inquilino e administradora imobiliária antes da emissão do próximo boleto.',
    formulaText: 'Aumento Mensal = Aluguel Atual × (Índice Acumulado% / 100). Novo Aluguel = Aluguel Atual + Aumento Mensal.',
    whenToUse: 'Use no mês de aniversário do contrato de locação (a cada 12 meses) para conferir o boleto atualizado ou simular propostas de negociação amigável quando o índice contratual sobe muito.',
    importantTips: 'Quando o IGP-M acumular alta muito acima da inflação ao consumidor (IPCA), é plenamente legal e comum que inquilino e proprietário negociem por aditivo contratual a substituição do índice pelo IPCA para preservar a adimplência.',
    sources: [
      { name: 'Lei do Inquilinato - Lei nº 8.245/1991', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8245.htm' }
    ],
    extraFaqs: [
      { q: 'O proprietário pode reajustar o aluguel antes de completar 12 meses de contrato?', a: 'Não. A legislação federal proíbe expressamente cláusulas de reajuste monetário em periodicidade inferior a 1 ano (12 meses consecutivos).' },
      { q: 'Se o índice acumulado de 12 meses (como o IGP-M) ficar negativo, o aluguel pode cair?', a: 'Sim, salvo se houver cláusula contratual expressa prevendo que índices negativos não reduzem o valor nominal (cláusula de piso zero), sendo sempre recomendável verificar a redação do contrato.' },
      { q: 'Posso usar o mesmo cálculo para reajuste de condomínio?', a: 'Não! A taxa ordinária de condomínio não sofre reajuste automático por índice de inflação: ela decorre do rateio real das despesas aprovadas em assembleia.' }
    ]
  },
  'custos-itbi': {
    domainConcept: 'Ao comprar um imóvel à vista ou financiado, muitos compradores preparam apenas o dinheiro da entrada e são surpreendidos pelas despesas obrigatórias de transferência de propriedade. Antes de receber a matrícula registrada em seu nome, o comprador precisa pagar o ITBI (Imposto sobre Transmissão de Bens Imóveis, cobrado pela prefeitura entre 2% e 4%), os emolumentos de escritura pública (em compras à vista) e as taxas do Cartório de Registro de Imóveis. Dimensionar esses custos impede contratempos na assinatura da escritura.',
    formulaText: 'Valor do ITBI = Valor do Imóvel × (Alíquota ITBI% / 100). Valor de Cartório/Registro = Valor do Imóvel × (Taxa Cartório% / 100). Custo Total de Documentação = ITBI + Cartório.',
    whenToUse: 'Indispensável durante o planejamento da entrada na compra de casa, apartamento ou terreno para reservar entre 3,5% e 5% extras destinados exclusivamente à documentação.',
    importantTips: 'Compradores que adquirem o primeiro imóvel residencial financiado pelo Sistema Financeiro da Habitação (SFH) têm direito garantido por lei federal (Lei nº 6.015/1973, Art. 290) a 50% de desconto nos emolumentos do Cartório de Registro de Imóveis — solicite esse direito no ato do registro!',
    sources: [
      { name: 'Lei dos Registros Públicos - Lei nº 6.015/1973 (Art. 290)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l6015compilada.htm' }
    ],
    extraFaqs: [
      { q: 'O ITBI é calculado sobre o valor de compra ou sobre o valor venal da prefeitura?', a: 'Conforme entendimento do STF e STJ (Tema 1113), a base de cálculo do ITBI deve corresponder ao valor efetivo da transação declarada pelo comprador em condições normais de mercado, presumindo-se boa-fé.' },
      { q: 'Financiamento bancário precisa pagar escritura pública em Tabelionato de Notas?', a: 'Não. O próprio contrato de financiamento emitido pelo banco no âmbito do SFH/SFI possui força de escritura pública (Lei nº 4.380/64), economizando esse custo cartorial.' },
      { q: 'Quem paga o ITBI e o registro: comprador ou vendedor?', a: 'Por praxe comercial e previsão padrão dos códigos tributários municipais no Brasil, o comprador assume o pagamento do ITBI e das despesas de registro.' }
    ]
  },
  'cap-rate': {
    domainConcept: 'No mercado imobiliário de renda, o Cap Rate (Capitalization Rate ou Taxa de Capitalização) mede o retorno percentual anual gerado por um imóvel alugado em relação ao seu valor total de aquisição ou avaliação de mercado. Ao contrário de análises simplistas que dividem apenas o aluguel bruto pelo preço do imóvel, o Cap Rate real deduz despesas mensais recorrentes que recaem sobre o proprietário (como taxa de administração da imobiliária, fundo de manutenção/vacância ou IPTU quando não repassado), permitindo comparar o imóvel com Fundos Imobiliários (FIIs) e títulos do Tesouro Direto.',
    formulaText: 'Receita Líquida Anual = (Aluguel Mensal Bruto - Despesas Mensais) × 12. Cap Rate (%) = (Receita Líquida Anual / Valor do Imóvel) × 100.',
    whenToUse: 'Use ao avaliar imóveis para compra visando locação tradicional, salas comerciais, galpões logísticos ou imóveis de temporada para saber se o rendimento anual compensa frente à renda fixa.',
    importantTips: 'Se o seu imóvel tem Cap Rate líquido de 5,5% ao ano, lembre-se de que o aluguel tende a ser corrigido anualmente pela inflação e o próprio imóvel pode se valorizar no longo prazo — formando o retorno total (Cap Rate + Valorização).',
    sources: [
      { name: 'Índice FipeZAP - Rentabilidade de Aluguel Residencial e Comercial', url: 'https://www.fipe.org.br/' }
    ],
    extraFaqs: [
      { q: 'Qual é a média de Cap Rate para imóveis residenciais no Brasil?', a: 'Segundo dados históricos do índice FipeZAP, o retorno bruto médio de aluguel residencial nas capitais brasileiras gira entre 5% e 6,5% ao ano; após despesas e vacância, o Cap Rate líquido típico fica entre 4,2% e 5,5%.' },
      { q: 'O Imposto de Renda sobre o aluguel recebido deve entrar no cálculo?', a: 'Para pessoa física com aluguéis acima da faixa de isenção, incide IR via Carnê-Leão progressivo (até 27,5%); informar essa parcela média no campo de despesas revela o Cap Rate líquido pós-IR.' },
      { q: 'Imóveis comerciais costumam ter Cap Rate maior que residenciais?', a: 'Sim. Lojas, salas e galpões logísticos costumam entregar Cap Rates entre 7% e 10% ao ano por apresentarem maior sensibilidade ao ciclo econômico e contratos de vacância mais longos.' }
    ]
  },
  'amortizacao-extra': {
    domainConcept: 'A amortização extraordinária é uma das estratégias financeiras mais eficientes para reduzir o custo total de financiamentos imobiliários longos. Como os juros de cada prestação incidem sempre sobre o saldo devedor remanescente, ao injetar um aporte extra (proveniente de FGTS, 13º salário, bônus ou venda de outro bem) diretamente no principal da dívida, você elimina anos inteiros de parcelas futuras e economiza dezenas de milhares de reais em juros compostos futuros e seguros habitacionais.',
    formulaText: 'Calcula-se a prestação atual (PMT) pela Tabela Price sobre o saldo devedor e taxa do contrato. Subtrai-se o aporte extraordinário (Novo Saldo = Saldo - Aporte) e resolve-se o novo prazo logarítmico mantendo a mesma prestação: Novo Prazo = ln[PMT / (PMT - Novo Saldo × i)] / ln(1 + i). A economia corresponde à diferença entre o total original e o novo fluxo + aporte.',
    whenToUse: 'Use sempre que tiver saldo disponível no FGTS ou uma sobra de caixa para simular quantos meses ou anos serão eliminados do seu financiamento mantendo a prestação mensal atual.',
    importantTips: 'Ao solicitar amortização extraordinária no aplicativo do banco (como App Habitação Caixa), escolha sempre a opção "Reduzir o Prazo" em vez de "Reduzir o Valor da Prestação" se o orçamento permitir continuar pagando a parcela atual — a economia de juros é drasticamente maior.',
    sources: [
      { name: 'Caixa Econômica Federal - Amortização com FGTS e Recursos Próprios', url: 'https://www.caixa.gov.br/' }
    ],
    extraFaqs: [
      { q: 'Amortizar R$ 10.000 hoje abate mais de R$ 10.000 em parcelas futuras?', a: 'Sim! Em um financiamento longo com juros de 9% a 10% ao ano, R$ 10.000 amortizados nos primeiros anos costumam eliminar de R$ 20.000 a R$ 35.000 em parcelas futuras somadas.' },
      { q: 'Quando vale mais a pena investir o dinheiro em renda fixa em vez de amortizar?', a: 'Quando a rentabilidade líquida (já descontado o IR) de uma aplicação segura como o Tesouro Selic supera o Custo Efetivo Total (CET) anual do seu financiamento (comum em contratos antigos subsidiados do Minha Casa Minha Vida a 5%–7% a.a.).' },
      { q: 'O banco pode cobrar multa ou tarifa para eu fazer amortização antecipada?', a: 'Não. A legislação brasileira garante o direito de amortizar ou quitar financiamentos antecipadamente sem cobrança de multa rescisória contratual.' }
    ]
  },
  'alugar-vs-comprar': {
    domainConcept: 'Decidir entre comprar um imóvel financiado ou morar de aluguel aplicando o dinheiro da entrada e a diferença mensal de parcelas no mercado financeiro é uma das decisões econômicas mais debatidas no Brasil. A resposta não é emocional nem fixa: ela depende do cruzamento entre o valor do aluguel como percentual do preço do imóvel (geralmente 0,4% a 0,6% ao mês), a taxa de juros cobrada pelo banco no financiamento, a valorização esperada do imóvel e o rendimento líquido que o investidor consegue obter em suas aplicações.',
    formulaText: 'Em um horizonte referencial de 10 anos (120 meses): no cenário Comprar, projeta-se o valor futuro do imóvel com valorização anual composta de 4% a.a. diante da prestação calculada sobre (Imóvel - Entrada). No cenário Alugar, capitaliza-se a Entrada + eventuais diferenças mensais (Prestação - Aluguel) à taxa anual de investimentos informada.',
    whenToUse: 'Use ao ponderar se o valor do aluguel que você paga hoje está muito barato comparado ao preço de venda do mesmo imóvel e às taxas atuais de crédito imobiliário.',
    importantTips: 'Como regra prática rápida: se o aluguel mensal custa menos de 0,45% do preço de compra do imóvel (ex: aluguel de R$ 1.800 em imóvel de R$ 400 mil) e os juros de financiamento superam 10% a.a., alugar e investir a diferença com disciplina financeira tende a gerar patrimônio maior no médio prazo.',
    sources: [
      { name: 'Banco Central - Taxas de Financiamento Habitacional', url: 'https://www.bcb.gov.br/' }
    ],
    extraFaqs: [
      { q: 'Qual é o maior risco do cenário "Alugar e Investir"?', a: 'O risco comportamental: se o inquilino gastar a economia mensal gerada pela diferença entre o aluguel e a prestação em consumo cotidiano em vez de investi-la todo mês, o patrimônio não será construído.' },
      { q: 'A valorização do imóvel acima da inflação pode virar o jogo a favor da compra?', a: 'Sim. Em bairros com forte expansão de infraestrutura ou compra com grande desconto abaixo do valor de mercado, a valorização patrimonial supera o custo do financiamento.' },
      { q: 'O uso do FGTS na compra muda essa conta?', a: 'Sim! Como o FGTS fica rendendo pouco na conta vinculada e não pode ser sacado livremente para investir em CDB/Tesouro, utilizá-lo na compra reduz fortemente o custo de oportunidade do comprador.' }
    ]
  },
  'custo-efetivo-total': {
    domainConcept: 'Bancos e financeiras costumam anunciar uma "taxa de juros nominal" atraente no marketing, mas ao incluir tarifa de abertura de cadastro, seguros prestamistas, taxas administrativas e IOF no contrato, o custo real pago pelo tomador sobe consideravelmente. O Custo Efetivo Total (CET), cuja divulgação é obrigatória pelas resoluções do Banco Central do Brasil, consolida em uma única taxa percentual mensal e anual todos os juros e encargos que reduzem o valor líquido efetivamente entregue ao cliente.',
    formulaText: 'Calcula-se a parcela mensal sobre o valor bruto contratado pela Tabela Price (PMT). Considerando o valor líquido efetivamente recebido em mãos (Líquido = Bruto - Tarifas e Seguros na Contratação), estima-se a taxa efetiva ajustada CET Mensal e converte-se para base anual composta: CET Anual = [(1 + CET_m)^12 - 1] × 100.',
    whenToUse: 'Use antes de assinar qualquer contrato de empréstimo, financiamento imobiliário ou crédito consignado para comparar propostas de dois bancos em pé de igualdade real.',
    importantTips: 'Sempre peça ao gerente a Planilha de Evolução com o CET expresso em percentual ao ano antes de fechar negócio — um banco com juros nominais de 1,5% a.m. e tarifas altas pode ter CET mais caro que outro banco cobrando 1,7% a.m. sem taxas adicionais.',
    sources: [
      { name: 'Banco Central - Resolução CMN nº 4.881/2020 (Obrigatoriedade do CET)', url: 'https://www.bcb.gov.br/' }
    ],
    extraFaqs: [
      { q: 'O seguro prestamista embutido no empréstimo é obrigatório?', a: 'Não! A exigência compulsória de contratação de seguro ou título de capitalização como condição para liberar crédito configura venda casada proibida pelo Código de Defesa do Consumidor (salvo seguros habitacionais MIP/DFI específicos do SFH).' },
      { q: 'Por que o CET anual é maior que 12 vezes o CET mensal?', a: 'Porque os encargos são capitalizados mensalmente em regime de juros compostos: um CET de 2,5% ao mês equivale a (1,025)^12 - 1 = 34,49% ao ano, e não 30%.' },
      { q: 'O IOF entra no cálculo do CET?', a: 'Sim. Pelas normas do Banco Central, o CET deve englobar juros, tributos (IOF), tarifas, seguros e quaisquer outras despesas cobradas do tomador na operação.' }
    ]
  },
  'valor-metro-quadrado': {
    domainConcept: 'Comparar imóveis apenas pelo preço total de anúncio leva a distorções graves quando apartamentos possuem tamanhos de área útil diferentes (por exemplo, um imóvel de R$ 420 mil com 60 m² versus outro de R$ 480 mil com 82 m²). O valor por metro quadrado (R$/m²) é o padrão universal do mercado imobiliário para avaliar se uma unidade está cara, justa ou descontada em relação à média do mesmo bairro ou condomínio.',
    formulaText: 'Preço Médio por m² = Preço Total de Venda do Imóvel / Área Útil Privativa (m²).',
    whenToUse: 'Use ao visitar imóveis para compra ou locação, ao comparar lançamentos na planta com imóveis usados na mesma região e ao negociar descontos baseados em pesquisas do índice FipeZAP.',
    importantTips: 'Verifique na matrícula ou no IPTU se a metragem anunciada refere-se exclusivamente à área privativa real (área interna + varanda de uso exclusivo) e não à área total (que soma garagens e corredores comuns do prédio), pois isso muda completamente o R$/m².',
    sources: [
      { name: 'Índice FipeZAP - Preço Médio do m² por Cidade e Bairro', url: 'https://www.fipe.org.br/' }
    ],
    extraFaqs: [
      { q: 'Qual a diferença entre área útil (privativa) e área total do apartamento?', a: 'Área privativa é o espaço exclusivo do proprietário delimitado pelas paredes internas (incluindo sacada). Área total soma também a fração proporcional das áreas comuns do condomínio (hall, salão de festas, escadas).' },
      { q: 'A vaga de garagem entra na conta do metro quadrado?', a: 'Em unidades com vaga autônoma ou vinculada, o mercado costuma comparar o valor da área privativa do apartamento separadamente ou ponderar uma vaga coberta entre R$ 30 mil e R$ 70 mil dependendo da cidade.' },
      { q: 'Imóveis no mesmo bairro podem ter R$/m² muito distintos?', a: 'Sim. Andar alto, posição solar (sol da manhã), vista livre, qualidade do lazer do prédio e reforma recente geram variações legítimas de 15% a 30% no valor do metro quadrado.' }
    ]
  },
  'rateio-condominio': {
    domainConcept: 'Quando um edifício aprova em assembleia uma chamada de capital extraordinária para pintura de fachada, troca de elevadores, impermeabilização de laje ou reforma da portaria, a divisão da despesa entre os condôminos não é necessariamente igualitária por apartamento. Conforme o Artigo 1.336, inciso I do Código Civil Brasileiro, salvo disposição diferente na Convenção do Condomínio, cada unidade contribui na exata proporção de sua Fração Ideal no terreno — fazendo com que coberturas e apartamentos maiores paguem um percentual maior do rateio.',
    formulaText: 'Valor a Pagar pela Unidade = Valor Total do Rateio / Obra × (Fração Ideal da Unidade% / 100).',
    whenToUse: 'Útil para síndicos, conselhos fiscais e proprietários conferirem a cota individual de rateios de obras e fundos de reserva antes ou depois da aprovação em assembleia.',
    importantTips: 'Lembre-se que em imóveis alugados, a Lei do Inquilinato determina que despesas extraordinárias de conservação estrutural e reformas do edifício (como pintura de fachada e troca de equipamentos) são de responsabilidade do proprietário (locador), e não do inquilino.',
    sources: [
      { name: 'Código Civil - Art. 1.336 e Art. 1.341 (Condomínio Edilício)', url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm' }
    ],
    extraFaqs: [
      { q: 'Onde encontro a fração ideal exata do meu apartamento?', a: 'A fração ideal consta expressamente na matrícula do imóvel (Cartório de Registro de Imóveis), no quadro de áreas da Convenção de Condomínio e frequentemente no próprio boleto condominial.' },
      { q: 'Despesas ordinárias como água e portaria também seguem a fração ideal?', a: 'Depende do que diz a Convenção do Condomínio: na maioria segue-se a fração ideal, mas diversos condomínios preveem divisão igualitária por unidade para despesas operacionais de consumo comum.' },
      { q: 'Inquilino que paga cota extra no boleto junto com o condomínio pode pedir reembolso?', a: 'Sim. Caso o boleto inclua fundo de obras ou chamada extra de reforma estrutural, o inquilino pode descontar ou solicitar reembolso ao proprietário mediante envio do boleto discriminado.' }
    ]
  },
  'iptu-proporcional': {
    domainConcept: 'Na compra e venda de um imóvel ao longo do ano fiscal — por exemplo, assinatura da escritura ou entrega das chaves em maio ou agosto —, o carnê anual do IPTU já foi lançado em janeiro para todo o exercício. Para evitar que o vendedor arque com meses em que não usufruirá do imóvel (ou que o comprador herde meses anteriores à posse), os contratos estipulam o rateio pro rata temporis do imposto anual proporcionalmente aos meses de ocupação de cada parte.',
    formulaText: 'Quota-Parte do Vendedor = (Valor Total do IPTU Anual / 12) × Meses de Ocupação até a Entrega das Chaves. Quota-Parte do Comprador = IPTU Anual - Quota do Vendedor.',
    whenToUse: 'Use no fechamento de escrituras de compra e venda imobiliária ou na rescisão antecipada de contratos de locação quando o inquilino assume o pagamento proporcional do IPTU.',
    importantTips: 'Se o vendedor tiver quitado a cota única anual do IPTU em janeiro com desconto (ex: 5% a 10% à vista), o rateio proporcional deve ser feito sobre o valor efetivamente pago com desconto, apresentando a guia quitada na assinatura.',
    sources: [
      { name: 'Código Tributário Nacional - Art. 32 a 34 (IPTU)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l5172compilado.htm' }
    ],
    extraFaqs: [
      { q: 'A prefeitura cobra o IPTU do antigo dono ou do novo comprador se houver atraso?', a: 'O IPTU é obrigação propter rem (acompanha o imóvel). Se ficar em aberto, o débito recai sobre o imóvel e pode levar à execução fiscal, embora o contrato preveja direito de regresso contra quem deu causa ao atraso.' },
      { q: 'Como contar os meses se a entrega das chaves ocorrer no meio do mês?', a: 'A convenção contratual mais justa divide o IPTU anual por 365 dias multiplicando pelos dias exatos de posse ou considera fração superior a 15 dias como mês completo para o respectivo ocupante.' },
      { q: 'Em contratos de aluguel, o inquilino é obrigado a pagar IPTU?', a: 'Sim, desde que essa obrigação esteja expressamente prevista no contrato de locação, conforme permite o Artigo 22, inciso VIII da Lei do Inquilinato.' }
    ]
  },

  // ================= VEÍCULOS & COMBUSTÍVEL (14) =================
  'carro-eletrico-vs-combustivel': {
    title: 'Calculadora Carro Elétrico vs Combustão (Economia Real) | Brasil Calculadoras',
    description: 'Compare o gasto mensal e anual de energia elétrica de um carro elétrico (BYD, GWM, Volvo) contra gasolina/etanol baseado em kWh, autonomia e km rodados.',
    domainConcept: 'A popularização de carros 100% elétricos (BEV) no Brasil — especialmente modelos urbanos e SUVs compactos com baterias entre 38 kWh e 65 kWh — trouxe uma dúvida prática aos compradores e motoristas de aplicativo: quanto realmente se economiza por mês trocando a bomba de gasolina ou etanol pela recarga elétrica residencial (wallbox)? Ao comparar o custo energético por quilômetro rodado (capacidade da bateria × tarifa em R$/kWh divididos pela autonomia real), o motorista visualiza em reais a economia mensal e anual gerada pela eletrificação.',
    formulaText: 'Custo por km Elétrico = (Capacidade Bateria kWh × Preço kWh) / Autonomia (km). Custo por km Combustão = Preço Combustível (R$/L) / Consumo (km/L). Multiplicando ambos pela Distância Mensal e subtraindo, obtém-se a Economia Mensal e Anual (×12).',
    whenToUse: 'Use antes de comprar um carro elétrico ou híbrido plug-in, ou ao calcular o payback (em quanto tempo a economia de combustível paga eventual diferença de preço frente ao modelo a combustão).',
    importantTips: 'Considere incluir cerca de 10% a 12% sobre a tarifa da conta de luz para compensar perdas térmicas normais no carregador wallbox/portátil e verifique as faixas de bandeira tarifária da sua distribuidora local.',
    sources: [
      { name: 'INMETRO - Programa Brasileiro de Etiquetagem Veicular (PBEV)', url: 'https://www.gov.br/inmetro/pt-br' }
    ],
    extraFaqs: [
      { q: 'Recarregar em eletropostos rápidos públicos (DC) sai mais caro que em casa?', a: 'Sim. Enquanto a tarifa residencial média gira em torno de R$ 0,75 a R$ 1,05/kWh, eletropostos comerciais de carga rápida costumam cobrar entre R$ 1,80 e R$ 2,60/kWh — ainda mais barato que gasolina na maioria dos casos, mas com menor vantagem.' },
      { q: 'Além do combustível, o carro elétrico também economiza em manutenção?', a: 'Sim. Veículos 100% elétricos não possuem troca de óleo de motor, correia dentada, velas, filtros de combustível ou câmbio complexo, e reduzem o desgaste de pastilhas de freio graças à frenagem regenerativa.' },
      { q: 'Como descobrir o kWh real da minha conta de energia?', a: 'Divida o valor total a pagar da fatura de energia elétrica (já incluindo ICMS, PIS/COFINS e bandeiras) pela quantidade total de kWh consumidos no mês.' }
    ]
  },
  'alcool-gasolina': {
    domainConcept: 'Ao parar no posto de combustível com um veículo Flex, o motorista brasileiro precisa decidir em segundos se abastece com etanol hidratado ou gasolina comum. Como o etanol possui menor densidade energética por litro do que a gasolina (gerando em média cerca de 70% da quilometragem por litro em motores flex tradicionais), pagar menos na bomba só representa economia real quando o preço do etanol é igual ou inferior a 70% do preço da gasolina.',
    formulaText: 'Proporção (%) = (Preço do Etanol / Preço da Gasolina) × 100. Se Proporção ≤ 70,0%: abasteça com Álcool (Etanol); se Proporção acima de 70,0%: abasteça com Gasolina.',
    whenToUse: 'Use diretamente no posto antes de autorizar o frentista a encher o tanque ou ao planejar rotas rodoviárias onde os preços regionais dos dois combustíveis variam bastante.',
    importantTips: 'Veículos Flex lançados mais recentemente (especialmente motores turbo de injeção direta ou projetos otimizados) podem atingir até 72% ou 73% de rendimento com etanol; teste o consumo real do seu carro dividindo km rodados por litros abastecidos em dois tanques completos.',
    sources: [
      { name: 'ANP - Levantamento Semanal de Preços de Combustíveis', url: 'https://www.gov.br/anp/pt-br' }
    ],
    extraFaqs: [
      { q: 'De onde surgiu exatamente a regra dos 70% entre etanol e gasolina?', a: 'Ela decorre da relação entre o poder calorífico inferior dos dois combustíveis e a mistura obrigatória atual de etanol anidro dentro da gasolina brasileira, resultando em autonomia média do etanol ~30% menor.' },
      { q: 'Abastecer sempre com etanol ou alternar com gasolina prejudica o motor flex?', a: 'Não. Motores flex são projetados com sensores na injeção eletrônica que reconhecem automaticamente qualquer mistura no tanque, bastando abastecer em postos de confiança para evitar combustível adulterado.' },
      { q: 'Em viagens longas na estrada, a gasolina compensa mesmo com relação abaixo de 70%?', a: 'Se o etanol estiver a 65% da gasolina, financeiramente ele continua mais barato por km; porém a gasolina entrega maior autonomia por tanque cheio, reduzindo paradas para reabastecimento.' }
    ]
  },
  'consumo-combustivel': {
    domainConcept: 'Estimar previamente quanto combustível será consumido em uma viagem de negócios, passeio de fim de semana ou deslocamento mensal ao trabalho evita surpresas no orçamento e permite comparar o gasto de ir de carro contra passagens de ônibus ou avião. Cruzando a distância total do trajeto (ida e volta) com a autonomia média do veículo em estrada ou cidade e o preço atual do litro na bomba, obtém-se de imediato o volume em litros e o custo financeiro estimado.',
    formulaText: 'Litros Necessários = Distância da Viagem (km) / Consumo Médio (km/L). Custo Total = Litros Necessários × Preço do Litro (R$/L).',
    whenToUse: 'Use antes de pegar a estrada em feriados, ao calcular custos de visitas técnicas comerciais ou para dividir despesas de gasolina em caronas solidárias.',
    importantTips: 'Lembre-se que carro carregado com bagagem, 4 ou 5 passageiros, pneus descalibrados e uso contínuo do ar-condicionado em subidas ou velocidades acima de 110 km/h podem reduzir o rendimento em 10% a 18% frente à média de catálogo.',
    sources: [
      { name: 'SENATRAN / INMETRO - Consumo Rodoviário e Urbano de Veículos', url: 'https://www.gov.br/inmetro/pt-br' }
    ],
    extraFaqs: [
      { q: 'Como medir a média real de km/L do meu carro sem depender apenas do computador de bordo?', a: 'Encha o tanque até o desarme automático da bomba, zere o hodômetro parcial (Trip A), rode normalmente e ao reabastecer divida os quilômetros percorridos pelos litros que couberam no segundo abastecimento.' },
      { q: 'Devo multiplicar a distância por 2 ao simular ida e volta?', a: 'Sim! Informe a quilometragem total somando ida, retorno e eventuais deslocamentos internos no destino.' },
      { q: 'Andar com vidro aberto na rodovia economiza mais que usar ar-condicionado?', a: 'Acima de 80 km/h em estradas, o arrasto aerodinâmico gerado pelas janelas abertas chega a gastar mais combustível do que manter o ar-condicionado ligado com os vidros fechados.' }
    ]
  },
  'ipva-estimado': {
    domainConcept: 'Todo início de ano, proprietários de automóveis, motos, caminhonetes e utilitários precisam reservar recursos para o Imposto sobre a Propriedade de Veículos Automotores (IPVA), tributo estadual calculado multiplicando o valor venal de referência do veículo na Tabela FIPE pela alíquota fixada pela Secretaria da Fazenda de cada estado. As alíquotas para carros de passeio costumam variar entre 2% (ex: SC, ES, TO), 3% (ex: PR, BA, PE) e 4% (ex: SP, RJ, MG), enquanto motos e utilitários podem ter alíquotas diferenciadas.',
    formulaText: 'IPVA Estimado a Pagar = Valor de Tabela FIPE do Veículo × (Alíquota Estadual% / 100).',
    whenToUse: 'Use ao planejar o orçamento anual de janeiro ou antes de comprar um carro seminovo ou zero km para verificar quanto custará manter os impostos anuais do modelo escolhido.',
    importantTips: 'Muitos estados oferecem descontos entre 3% e 10% (ou até mais somando programas de nota fiscal estadual) para quitação em cota única em janeiro, além de isenção automática para veículos fabricados há mais de 10, 15 ou 20 anos conforme a legislação estadual.',
    sources: [
      { name: 'Tabela FIPE Oficial - Fundação Instituto de Pesquisas Econômicas', url: 'https://veiculos.fipe.org.br/' }
    ],
    extraFaqs: [
      { q: 'Por que o IPVA pode ficar igual ou até subir mesmo o carro ficando um ano mais velho?', a: 'Porque o imposto acompanha a cotação de mercado da Tabela FIPE apurada no final do ano anterior; se houver valorização de usados ou redução de oferta, o valor venal sobe e eleva o imposto.' },
      { q: 'Carros elétricos e híbridos têm desconto ou isenção de IPVA?', a: 'Diversos estados e o Distrito Federal oferecem isenção total, redução de alíquota ou devolução de cota estadual para veículos 100% elétricos e híbridos; consulte a Secretaria da Fazenda (SEFAZ) do estado de emplacamento.' },
      { q: 'Além do IPVA, quais taxas obrigatórias incidem todo ano?', a: 'O proprietário deve pagar também a taxa anual de Licenciamento (CRLV-e) do DETRAN estadual para poder circular regularmente.' }
    ]
  },
  'depreciacao-fipe': {
    domainConcept: 'A depreciação é o maior custo silencioso da posse de um veículo e quase sempre supera os gastos com manutenção preventiva ou seguro. A partir do momento em que um carro zero km sai da concessionária — e a cada ano adicional de uso —, seu valor de revenda na Tabela FIPE recua em curva exponencial que varia segundo a liquidez e categoria do modelo: carros populares e compactos nacionais de alta demanda tendem a depreciar cerca de 8% ao ano, SUVs médios cerca de 11% ao ano e veículos importados ou de luxo até 15% ao ano devido ao custo mais alto de peças pós-garantia.',
    formulaText: 'Valor Estimado Futuro = Valor Atual × (1 - Taxa Anual de Depreciação)^Anos, adotando 8% a.a. (Popular), 11% a.a. (SUV) ou 15% a.a. (Importado/Luxo). Perda Acumulada = Valor Atual - Valor Futuro.',
    whenToUse: 'Use ao decidir por quantos anos ficar com o veículo antes da troca, comparar o custo real de um carro de luxo usado contra um popular seminovo ou calcular o custo patrimonial anual em frotas.',
    importantTips: 'A maior queda percentual acontece nos primeiros 12 a 24 meses de um carro zero km. Comprar seminovos bem conservados com 2 a 3 anos de uso transfere o primeiro choque de desvalorização para o comprador original.',
    sources: [
      { name: 'Tabela FIPE - Histórico de Preços Médios', url: 'https://veiculos.fipe.org.br/' }
    ],
    extraFaqs: [
      { q: 'Quais fatores fazem um carro desvalorizar menos que a média do mercado?', a: 'Boa reputação mecânica da marca, disponibilidade ampla de peças, baixo consumo de combustível, cores neutras (branco, prata, cinza, preto) e histórico de revisões em dia.' },
      { q: 'Por que carros importados e de luxo depreciam percentualmente mais rápido?', a: 'Após o fim da garantia de fábrica, manutenções corretivas caras e seguros mais elevados reduzem o público comprador interessado no mercado de usados, pressionando o preço para baixo.' },
      { q: 'Como a quilometragem muito alta afeta o valor FIPE?', a: 'A Tabela FIPE considera desgaste e rodagem médios (12 a 15 mil km/ano); veículos muito acima disso (como ex-táxis ou ex-aplicativos) costumam sofrer deságio comercial na revenda.' }
    ]
  },
  'custo-km-rodado': {
    domainConcept: 'Empresas frequentemente reembolsam colaboradores que utilizam veículo próprio para visitas externas comerciais, vistorias técnicas ou entregas regionais mediante uma tarifa fixa por quilômetro rodado. Da mesma forma, motoristas autônomos e representantes comerciais precisam calcular quanto recebem por km para garantir que o reembolso não pague apenas a gasolina consumida, mas cubra também depreciação do veículo, troca de pneus, óleo, pastilhas, seguro e IPVA proporcionais.',
    formulaText: 'Reembolso Total = Quilômetros Rodados × Valor de Reembolso Acordado por Km.',
    whenToUse: 'Ideal para elaborar relatórios de prestação de contas de viagens corporativas, auditar políticas internas de reembolso de equipes externas ou conferir faturas mensais de deslocamento.',
    importantTips: 'Para verificar se o reembolso por km oferecido pela empresa é justo, divida o preço da gasolina pelo consumo do seu carro (ex: R$ 5,80 / 10 = R$ 0,58 apenas de combustível) e garanta que a tarifa cubra ao menos 1,8x a 2,2x o custo isolado do combustível para absorver desgaste e depreciação.',
    sources: [
      { name: 'Receita Federal - Reembolso de Despesas de Viagem com Veículo Próprio', url: 'https://www.gov.br/receitafederal/pt-br' }
    ],
    extraFaqs: [
      { q: 'O reembolso por quilômetro rodado paga INSS ou Imposto de Renda no holerite?', a: 'Quando pago estritamente mediante comprovação de quilometragem percorrida a serviço da empresa e em valor compatível com os custos reais (sem caráter de salário disfarçado), possui natureza indenizatória.' },
      { q: 'Qual é o valor médio pago pelas empresas por km rodado no Brasil?', a: 'Políticas corporativas costumam praticar entre R$ 0,90 e R$ 1,50 por quilômetro rodado para carros de passeio 1.0 a 1.6, dependendo do preço regional do combustível.' },
      { q: 'Pedágios e estacionamentos entram na tarifa de km rodado?', a: 'Normalmente são reembolsados à parte mediante apresentação dos recibos ou extrato de tag eletrônica (Sem Parar / Veloe / ConectCar).' }
    ]
  },
  'financiamento-veiculo': {
    title: 'Simulador de Financiamento de Veículos e CDC 2026 (Carros e Motos) | Brasil Calculadoras',
    description: 'Calcule as prestações fixas pela Tabela Price no financiamento CDC de carros e motos em 2026. Veja juros totais pagos, impacto da entrada e valor total financiado.',
    domainConcept: 'A modalidade mais utilizada para aquisição parcelada de automóveis e motocicletas no Brasil é o CDC (Crédito Direto ao Consumidor), em que o banco ou financeira paga o lojista à vista e o comprador quita o saldo financiado em prestações mensais fixas (Tabela Price) com alienação fiduciária do veículo. Como o prazo costuma variar de 24 a 60 meses com taxas mensais compostas, uma pequena diferença na taxa de juros (ex: 1,49% vs 2,39% a.m.) ou no valor da entrada altera em milhares de reais o custo total do automóvel.',
    formulaText: 'Saldo Financiado = max(0, Valor do Veículo - Valor de Entrada). Pela Tabela Price (i = Taxa Mensal / 100): Prestação = Saldo × [i × (1 + i)^n] / [(1 + i)^n - 1]. Total Pago = (Prestação × n) + Entrada.',
    whenToUse: 'Use dentro da concessionária ou antes de negociar em lojas de seminovos para testar diferentes percentuais de entrada (20%, 30%, 50%) e comparar prazos de 36x contra 48x ou 60x.',
    importantTips: 'Antes de fechar financiamento com a financeira parceira da loja, simule também no aplicativo do seu banco tradicional onde já possui relacionamento: taxas de CDC para correntistas com bom histórico frequentemente ficam 0,3% a 0,6% ao mês abaixo do balcão da loja.',
    sources: [
      { name: 'Banco Central - Taxas de Financiamento de Veículos Pessoa Física', url: 'https://www.bcb.gov.br/estatisticas/txjuros' },
      { name: 'Código de Defesa do Consumidor - Art. 52 §2º (Antecipação de Parcelas)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm' }
    ],
    extraFaqs: [
      { q: 'Financiar com entrada de 30% ou 40% melhora apenas a parcela ou também a taxa de juros?', a: 'Melhora ambos! Entradas acima de 30% reduzem significativamente o risco de crédito para o banco, liberando automaticamente faixas de taxas de juros menores e dispensando exigências mais rígidas de renda.' },
      { q: 'Posso transferir um carro financiado antes de terminar de pagar as parcelas?', a: 'O gravame de alienação fiduciária impede a transferência livre no DETRAN até que o comprador faça a quitação integral do saldo devedor ou obtenha aprovação bancária formal para transferência de dívida.' },
      { q: 'O que acontece se eu atrasar parcelas do CDC?', a: 'Por conta da alienação fiduciária, o atraso permite ao banco ajuizar ação de busca e apreensão do veículo com liminar rápida após constituição em mora (notificação extrajudicial).' }
    ]
  },
  'move-brasil': {
    title: 'Simulador e Calculadora Move Brasil 2026: Moto, Carro, Caixa e Banco do Brasil | Brasil Calculadoras',
    description: 'Simulador e calculadora Move Brasil 2026 grátis e online para moto, carro e caminhão via Caixa Econômica Federal e Banco do Brasil. Compare parcela, entrada, prazo e CET.',
    domainConcept: 'O Programa Move Brasil reúne linhas especiais de crédito voltadas à renovação de frota para trabalhadores do transporte — motoristas de aplicativo (Uber/99), taxistas, entregadores motociclistas e caminhoneiros autônomos — com operação por bancos públicos como Banco do Brasil e Caixa Econômica Federal, além de linhas com lastro do BNDES. Esta calculadora permite simular gratuitamente e online a prestação estimada pela Tabela Price para moto, carro ou caminhão leve, comparando diferentes valores de entrada e prazos em relação a um financiamento tradicional.',
    formulaText: 'A simulação aplica a fórmula da Tabela Price sobre o saldo financiado (Valor do Veículo menos Entrada) utilizando taxas referenciais educativas para comparar a prestação estimada frente a uma taxa média de mercado tradicional. As condições efetivas de juros e CET variam conforme a análise de crédito e o regulamento vigente em cada banco operador.',
    whenToUse: 'Use antes de ir à concessionária ou à agência da Caixa ou do Banco do Brasil para testar cenários de financiamento de moto, carro de aplicativo ou utilitário leve, avaliando o peso da parcela no seu faturamento mensal.',
    importantTips: 'Os percentuais usados na calculadora servem como referência educativa para planejamento. Antes de assinar o contrato, solicite a simulação oficial com o Custo Efetivo Total (CET) no aplicativo ou agência da Caixa Econômica Federal ou do Banco do Brasil e confirme a CNH com observação EAR (Exerce Atividade Remunerada).',
    extraSections: [
      {
        heading: 'Move Brasil para Moto: como funciona a simulação para motociclistas e entregadores',
        paragraphs: [
          'Quem busca uma simulação do Move Brasil para moto — especialmente entregadores e motofretistas cadastrados em plataformas de delivery — deve ajustar primeiro a categoria "Moto de Entregador" no simulador e informar o valor real da motocicleta (incluindo emplacamento e documentação, caso entrem no orçamento). Como o ticket médio de motos costuma ser menor do que o de automóveis, pequenos aumentos na entrada reduzem rapidamente o valor financiado e o total de juros pagos.',
          'Ao simular o financiamento de moto, teste prazos entre 24, 36 e 48 meses para verificar quanto a parcela mensal compromete da sua receita líquida depois de combustível e manutenção. Verifique também junto ao banco se o modelo escolhido (combustão flex ou moto elétrica) atende às regras de enquadramento da linha no momento da contratação.'
        ],
        bullets: [
          'Habilitação e cadastro: confirme CNH categoria A válida com observação EAR e comprovante de atividade remunerada ativa.',
          'Entrada estratégica: simular entradas de 15%, 20% ou 30% ajuda a visualizar a queda no saldo devedor e nos juros acumulados.',
          'Custos paralelos da moto: além da prestação, considere seguro ou proteção veicular, IPVA, pneus e revisões mensais no orçamento.'
        ]
      },
      {
        heading: 'O que conferir ao simular na Caixa Econômica Federal e no Banco do Brasil',
        paragraphs: [
          'Tanto na Caixa Econômica Federal quanto no Banco do Brasil, a taxa de juros divulgada na vitrine representa apenas parte do custo do financiamento. A comparação justa entre propostas bancárias depende sempre do CET (Custo Efetivo Total), que consolida juros, IOF, tarifa de cadastro/avaliação de garantia e eventuais seguros vinculados.',
          'Por isso, após fazer sua simulação preliminar aqui no Brasil Calculadoras, leve os mesmos parâmetros (valor do bem, valor de entrada e número de parcelas) para comparar lado a lado a proposta oficial da Caixa e a do Banco do Brasil, observando se há diferença de exigência de relacionamento bancário, entrada mínima ou prazo máximo para o seu perfil.'
        ],
        bullets: [
          'Taxas e CET: compare sempre o CET anual e mensal oficial informado na ficha-proposta do banco, nunca apenas a taxa nominal.',
          'Entrada mínima e limite financiado: verifique qual percentual máximo do valor do veículo (LTV) o banco financia para carros e motos.',
          'Prazo e amortização antecipada: confirme o prazo máximo disponível e a regra de desconto proporcional de juros ao antecipar parcelas (Art. 52, §2º do CDC).',
          'Seguros e tarifas opcionais: cheque se seguro prestamista ou pacotes adicionais são opcionais e qual o impacto deles na prestação final.'
        ]
      }
    ],
    sources: [
      { name: 'Banco Central - Taxas de Financiamento de Veículos', url: 'https://www.bcb.gov.br/estatisticas/txjuros' },
      { name: 'BNDES - Linhas de Financiamento ao Transporte', url: 'https://www.bndes.gov.br/' },
      { name: 'Código de Defesa do Consumidor (Lei nº 8.078/1990)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm' }
    ],
    extraFaqs: [
      { q: 'Como fazer a simulação do Move Brasil para moto?', a: 'Selecione a opção "Moto de Entregador" no campo Categoria do Veículo, informe o preço da motocicleta, o valor de entrada disponível, o banco de referência (Banco do Brasil, Caixa ou BNDES) e o prazo em meses para visualizar a parcela estimada e o comparativo com o financiamento tradicional.' },
      { q: 'O que devo comparar entre a Caixa Econômica Federal e o Banco do Brasil no Move Brasil?', a: 'Compare sempre o CET (Custo Efetivo Total), o valor mínimo de entrada exigido, o prazo máximo liberado para o seu perfil de crédito, eventuais tarifas administrativas e se o banco exige conta ativa ou comprovação específica de renda/atividade.' },
      { q: 'A CNH precisa ter a observação EAR para acessar linhas de financiamento profissional?', a: 'Sim. Motoristas de aplicativo, taxistas, motofretistas e caminhoneiros geralmente precisam apresentar CNH válida com a observação "Exerce Atividade Remunerada" (EAR), além de comprovação cadastral ativa conforme as regras do banco operador.' },
      { q: 'As taxas exibidas no simulador são garantidas pelo banco?', a: 'Não. O simulador utiliza taxas referenciais para fins educativos e de comparação preliminar. A taxa definitiva, o CET e a aprovação dependem da análise de crédito e das condições vigentes no momento da contratação na Caixa, Banco do Brasil ou instituição credenciada.' }
    ]
  },
  'seguro-perfil': {
    domainConcept: 'O prêmio anual de um seguro automotivo não depende apenas do valor do veículo na Tabela FIPE: as seguradoras calculam matrizes atuariais de risco considerando idade e estado civil do condutor principal, CEP de pernoite e existência de garagem fechada no trabalho e residência. Condutores jovens (18 a 25 anos) e veículos que dormem na rua apresentam maior probabilidade estatística de sinistros de colisão e furto, elevando o custo anual da apólice em relação a motoristas adultos experientes com garagem fechada.',
    formulaText: 'O algoritmo aplica sobre o Valor FIPE do Veículo um fator base de 4,0%, somando +3,0 pontos percentuais para perfil Jovem (18–25 anos) e +1,0 ponto percentual caso não possua garagem fechada: Prêmio Anual = Valor × Taxa; Franquia Estimada = Prêmio × 1,5.',
    whenToUse: 'Use antes de comprar seu primeiro carro ou trocar de modelo para dimensionar o orçamento anual de proteção contra roubo, furto e colisão.',
    importantTips: 'Para veículos com valor acima de R$ 80 mil ou modelos muito visados para furto em capitais, cotações com bônus de classe anterior (renovação sem sinistro) reduzem de 10% a 35% o prêmio final junto às seguradoras.',
    sources: [
      { name: 'SUSEP - Guia do Seguro de Automóvel', url: 'https://www.gov.br/susep/pt-br' }
    ],
    extraFaqs: [
      { q: 'O que é a franquia do seguro e quando ela é cobrada?', a: 'Franquia é a participação financeira obrigatória do segurado apenas em casos de perda parcial (conserto de colisões); em casos de roubo, furto sem recuperação, perda total ou danos exclusivamente a terceiros (RCF-V), não há pagamento de franquia.' },
      { q: 'Colocar o carro no seguro em nome dos pais para pagar menos vale a pena?', a: 'Atenção! Se o filho jovem for o condutor habitual e não constar na apólice como condutor principal ou secundário, a seguradora pode negar a indenização em caso de sinistro por agravamento de risco e omissão de informação.' },
      { q: 'Qual a diferença entre franquia reduzida e franquia normal?', a: 'A franquia reduzida diminui pela metade o valor pago na oficina em caso de batida, mediante um pequeno acréscimo no valor anual da apólice.' }
    ]
  },
  'tempo-viagem': {
    domainConcept: 'Planejar o horário de saída e chegada em viagens rodoviárias de lazer ou logística requer mais do que dividir a quilometragem no GPS pela velocidade máxima da via. Pedágios, trechos de serra, caminhões em pista simples e paradas rápidas para abastecimento ou café alteram significativamente a velocidade média efetiva do percurso. Somar o tempo líquido de condução ao tempo previsto em paradas produz uma janela realista de chegada.',
    formulaText: 'Tempo Estimado Total (horas decimais) = (Distância em km / Velocidade Média Esperada em km/h) + (Minutos em Paradas / 60).',
    whenToUse: 'Use ao programar viagens em família, agendar check-in de hotéis ou estimar horários de chegada para reuniões fora da cidade.',
    importantTips: 'Em rodovias brasileiras de pista dupla com limite de 110 km/h, a velocidade média efetiva real considerando tráfego e pedágios costuma ficar entre 75 km/h e 88 km/h; em estradas de pista simples com curvas, raramente supera 60 km/h a 65 km/h.',
    sources: [
      { name: 'PRF - Recomendações de Segurança Viária e Descanso', url: 'https://www.gov.br/prf/pt-br' }
    ],
    extraFaqs: [
      { q: 'Como converter o resultado decimal (ex: 3,33 horas) em horas e minutos?', a: 'A parte inteira corresponde às horas (3h) e a parte decimal multiplicada por 60 corresponde aos minutos (0,33 × 60 ≈ 20 minutos, totalizando 3h20min).' },
      { q: 'De quantas em quantas horas devo fazer paradas em viagens longas?', a: 'Especialistas em segurança viária recomendam fazer uma pausa de 15 minutos a cada 2 ou 3 horas contínuas ao volante para hidratação, alongamento e manutenção da atenção.' },
      { q: 'Chuvas fortes ou neblina reduzem em quanto a velocidade média?', a: 'Sob chuva intensa ou serra com neblina, a velocidade segura recomendada cai de 25% a 40%, aumentando proporcionalmente o tempo total da viagem.' }
    ]
  },
  'rateio-pedagio': {
    domainConcept: 'Viajar de carro compartilhado entre amigos, colegas de trabalho ou familiares costuma ser muito mais barato e confortável do que comprar passagens individuais — desde que todos os custos diretos da viagem sejam divididos de forma transparente e justa. Somar o total gasto com combustível na ida e volta ao somatório das tarifas de pedágios da rodovia e dividir pelo número exato de ocupantes resolve rapidamente o acerto no retorno.',
    formulaText: 'Custo Total da Viagem = Custo de Combustível + Custo Total de Pedágios. Custo Individual por Pessoa = Custo Total / Número de Passageiros.',
    whenToUse: 'Prático para caronas compartilhadas entre cidades, viagens em grupo para praias ou eventos e prestação de contas em deslocamentos compartilhados de equipe.',
    importantTips: 'Em grupos de amigos, é prática cordial ou incluir o motorista no rateio (divisão igual por todos os ocupantes) ou isentar o dono do carro do combustível em reconhecimento ao desgaste mecânico e pneus do veículo particular.',
    sources: [
      { name: 'ABCR - Associação Brasileira de Concessionárias de Rodovias', url: 'https://abcr.org.br/' }
    ],
    extraFaqs: [
      { q: 'Como consultar o valor exato dos pedágios antes de viajar?', a: 'Aplicativos de rotas como Google Maps, Waze e o site oficial da concessionária ou da ANTT exibem o valor atualizado de cada praça de pedágio (e pórticos Free Flow) ao longo do trajeto.' },
      { q: 'O sistema Free Flow cobra pedágio sem cancela física?', a: 'Sim. Em rodovias com pedágio eletrônico sem cancela (Free Flow), veículos sem tag eletrônica têm prazo legal de até 15 dias para quitar a tarifa no site/app da concessionária e evitar multa por evasão.' },
      { q: 'Vale a pena considerar também estacionamento na divisão?', a: 'Sim: some estacionamentos diários pagos no destino ao campo de pedágios para obter a divisão completa dos custos diretos do carro.' }
    ]
  },
  'manutencao-carro': {
    domainConcept: 'Adiar a manutenção preventiva do automóvel na tentativa de economizar no curto prazo é uma das decisões mais caras para o proprietário: deixar de trocar óleo lubrificante ou filtros no prazo acelera o desgaste de anéis e bronzinas, e negligenciar a correia dentada perto dos 50–60 mil km pode causar rompimento e dano grave ao cabeçote do motor. Esta ferramenta classifica o nível de revisão necessária conforme a quilometragem e o tempo desde a última oficina, estimando a provisão financeira e os itens recomendados.',
    formulaText: 'Avalia-se a quilometragem e meses desde a última revisão em três faixas preventivas: Revisão Básica (R$ 350 — óleo e filtros); Revisão Média a partir de 30.000 km ou 18 meses (R$ 650 — inclui velas e alinhamento); Revisão Completa a partir de 60.000 km ou 36 meses (R$ 1.200 — inclui correia dentada, pastilhas e fluidos).',
    whenToUse: 'Use para criar uma reserva mensal de manutenção no orçamento doméstico ou para checar os itens básicos de inspeção antes de viajar ou comprar um seminovo.',
    importantTips: 'Mesmo quem roda pouco (abaixo de 5.000 km por ano) deve trocar o óleo do motor e o filtro de óleo a cada 6 a 12 meses conforme o manual do fabricante, pois a umidade e oxidação degradam os aditivos do lubrificante mesmo com o carro parado.',
    sources: [
      { name: 'Manual de Manutenção Automotiva / CESVI Brasil', url: 'https://www.cesvibrasil.com.br/' }
    ],
    extraFaqs: [
      { q: 'O que acontece se eu perder o prazo de revisão durante a garantia de fábrica?', a: 'As montadoras exigem cumprimento rigoroso dos intervalos de quilometragem e tempo (geralmente 10.000 km ou 12 meses, com tolerância pequena de +/- 1.000 km ou 30 dias) para não cancelar a garantia contratual do trem de força.' },
      { q: 'Quanto devo guardar por mês para nunca ser pego de surpresa na oficina?', a: 'Dividir o orçamento anual de revisões + provisão de pneus (em média R$ 150 a R$ 250 por mês para carros populares e médios) em uma caixinha de liquidez diária elimina sufocos financeiros.' },
      { q: 'Troca de fluido de freio entra por quilometragem ou por tempo?', a: 'Principalmente por tempo: o fluido de freio DOT3/DOT4 é higroscópico (absorve umidade do ar) e deve ser substituído em média a cada 24 meses ou 40.000 km para não perder eficiência de frenagem.' }
    ]
  },
  'consumo-de-combustivel-kml': {
    title: 'Calculadora de Combustível por Km/L (Custo e Litros da Viagem) | Brasil Calculadoras',
    description: 'Calcule os litros de gasolina, etanol ou diesel necessários, o custo total da viagem e quanto seu veículo gasta por cada quilômetro rodado.',
    domainConcept: 'Diferentemente da estimativa básica de tanque, esta calculadora de combustível oferece uma métrica crucial para motoristas profissionais (Uber, 99, entregas, fretes) e viajantes econômicos: além de calcular o volume total de combustível necessário e o gasto total do percurso, ela entrega exatamente o Custo em Reais por Quilômetro Rodado (R$/km) em combustível, permitindo avaliar imediatamente se uma corrida ou frete oferece rentabilidade real acima do gasto na bomba.',
    formulaText: 'Litros Gastos = Distância (km) / Autonomia (km/L). Custo da Viagem = Litros Gastos × Preço por Litro. Custo por Km Rodado = Custo da Viagem / Distância (= Preço por Litro / Autonomia).',
    whenToUse: 'Essencial para motoristas de aplicativo calcularem seu custo mínimo de combustível por km antes de aceitar corridas, além de otimizar roteiros rodoviários.',
    importantTips: 'Se o seu carro faz 10 km/L na gasolina a R$ 6,00/L (R$ 0,60/km) e faz 7,2 km/L no etanol a R$ 3,90/L (R$ 0,54/km), essa comparação direta de R$/km elimina qualquer dúvida sobre qual combustível deixa mais dinheiro no seu bolso.',
    sources: [
      { name: 'Programa Brasileiro de Etiquetagem Veicular - INMETRO', url: 'https://www.gov.br/inmetro/pt-br' }
    ],
    extraFaqs: [
      { q: 'Como descobrir o custo total por km incluindo manutenção além do combustível?', a: 'Após obter o custo por km em combustível, adicione de 40% a 60% sobre esse valor para contemplar desgaste de pneus, trocas de óleo, seguro e depreciação do carro.' },
      { q: 'A calibragem dos pneus realmente muda a autonomia em km/L?', a: 'Sim! Pneus murchos aumentam a resistência ao rolamento e podem elevar o consumo de combustível em até 5% a 10%, além de desgastar prematuramente as bordas da borracha.' },
      { q: 'Qual é a velocidade em estrada onde o carro costuma ser mais econômico?', a: 'Para a grande maioria dos carros de passeio modernos, a faixa de máxima eficiência aerodinâmica e mecânica fica entre 80 km/h e 100 km/h em marcha mais alta.' }
    ]
  },
  'calculadora-de-ipva': {
    title: 'Calculadora de IPVA Anual 2026 (À Vista e Parcelado) | Brasil Calculadoras',
    description: 'Calcule o IPVA anual pela Tabela FIPE e alíquota do seu estado, visualizando tanto o valor total quanto a simulação de parcelamento padrão em 3x.',
    domainConcept: 'Para milhões de proprietários brasileiros, janeiro marca o vencimento do IPVA e a dúvida recorrente entre pagar à vista ou parcelar no orçamento familiar. Nossa Calculadora de IPVA Anual cruza o valor venal atualizado do seu veículo na Tabela FIPE com a alíquota vigente no seu estado (como 4% em SP/MG/RJ, 3,5% no PR ou 2% a 3% em outros estados) e exibe simultaneamente o valor total do imposto e a divisão em 3 parcelas mensais sem juros oferecida pela maioria das Secretarias da Fazenda.',
    formulaText: 'Valor Total do IPVA = Valor FIPE × (Alíquota Estadual% / 100). Parcela Estimada (3x) = Valor Total do IPVA / 3.',
    whenToUse: 'Use no planejamento financeiro de fim de ano para decidir se vale a pena usar parte do 13º salário para quitar o IPVA à vista com desconto ou parcelar em 3 ou 5 vezes.',
    importantTips: 'Compare sempre o desconto da cota única oferecido pelo seu estado: um desconto de 3% a 5% para pagamento antecipado de 2 meses equivale a um rendimento líquido superior a 1,5% a 2,5% ao mês livre de Imposto de Renda — mais vantajoso que deixar o dinheiro na poupança ou CDB!',
    sources: [
      { name: 'Portal Gov.br / Secretarias Estaduais de Fazenda', url: 'https://www.gov.br/' }
    ],
    extraFaqs: [
      { q: 'Alguns estados parcelam o IPVA em mais de 3 vezes?', a: 'Sim! Em São Paulo, Minas Gerais e outros estados, o parcelamento estadual chega frequentemente a 3x ou 5x dependendo da faixa de valor e calendário da SEFAZ local.' },
      { q: 'O que acontece se eu atrasar o pagamento do IPVA?', a: 'Incidem multa moratória diária/percentual e juros pela taxa Selic, além de impedir o licenciamento anual do veículo — o que pode gerar multa gravíssima de trânsito e apreensão do veículo em blitz.' },
      { q: 'PCD (Pessoas com Deficiência) têm direito à isenção de IPVA?', a: 'Sim, conforme critérios e tetos de valor venal estabelecidos na legislação estadual de cada unidade da federação mediante laudo e requerimento na SEFAZ.' }
    ]
  },

  // ================= SAÚDE & DIETAS (13) =================
  'imc': {
    title: 'Calculadora de IMC e Taxa Metabólica Basal (TMB) Online | Brasil Calculadoras',
    description: 'Calcule seu Índice de Massa Corporal (IMC), classificação oficial da OMS, Taxa Metabólica Basal (TMB) e necessidade calórica diária por atividade física.',
    domainConcept: 'Avaliar a composição corporal e o equilíbrio energético começa por duas medidas complementares consagradas na medicina preventiva: o Índice de Massa Corporal (IMC), adotado globalmente pela Organização Mundial da Saúde (OMS) para classificar faixas de baixo peso, eutrofia (peso adequado), sobrepeso e graus de obesidade; e a Taxa Metabólica Basal (TMB), que calcula quantas quilocalorias o organismo consome diariamente apenas para manter funções vitais em repouso. Reunir ambos os indicadores permite traçar planos seguros de emagrecimento, manutenção ou ganho de massa muscular.',
    formulaText: 'IMC = Peso (kg) / [Altura (m)]². TMB (Mifflin-St Jeor): Homens = (10 × Peso) + (6,25 × Altura cm) - (5 × Idade) + 5; Mulheres = (10 × Peso) + (6,25 × Altura cm) - (5 × Idade) - 161. A meta energética total multiplica a TMB pelo fator de atividade (1,2 a 1,9).',
    workedExample: 'Para um adulto de 32 anos, sexo masculino, com 78 kg e 1,78 m de altura: o IMC calculado é 78 / (1,78 × 1,78) = 24,62 kg/m² (faixa de Peso Normal entre 18,5 e 24,9). Sua Taxa Metabólica Basal pela equação de Mifflin-St Jeor resulta em (10 × 78) + (6,25 × 178) - (5 × 32) + 5 = 1.737,5 kcal/dia em repouso. Praticando exercícios moderados 3 a 5 vezes por semana (fator 1,55), o gasto energético diário total é de aproximadamente 2.693 kcal.',
    whenToUse: 'Use ao iniciar acompanhamento nutricional, planejar treinos de hipertrofia ou perda de gordura ou monitorar mudanças graduais de peso ao longo das semanas.',
    importantTips: 'Um déficit calórico moderado de 300 a 500 kcal abaixo do gasto diário total promove perda gradual de gordura preservando massa muscular, enquanto déficits extremos abaixo da própria TMB tendem a causar fadiga e desaceleração metabólica.',
    sources: [
      { name: 'Organização Mundial da Saúde (OMS) - Classificação de IMC', url: 'https://www.who.int/' },
      { name: 'Ministério da Saúde - Guia Alimentar para a População Brasileira', url: 'https://www.gov.br/saude/pt-br' }
    ],
    extraFaqs: [
      { q: 'Quais são as faixas oficiais de IMC segundo a OMS para adultos?', a: 'Abaixo de 18,5 (Abaixo do peso); 18,5 a 24,9 (Peso normal); 25,0 a 29,9 (Sobrepeso); 30,0 a 34,9 (Obesidade Grau I); 35,0 a 39,9 (Obesidade Grau II); e 40,0 ou mais (Obesidade Grau III).' },
      { q: 'Os pontos de corte do IMC são iguais para idosos acima de 60 anos?', a: 'Não. Na prática clínica geriátrica, o Ministério da Saúde adota faixas adaptadas para idosos: baixo peso abaixo de 22,0, eutrofia entre 22,0 e 27,0 e sobrepeso acima de 27,0.' },
      { q: 'Por que atletas de musculação podem ter IMC de sobrepeso sem excesso de gordura?', a: 'Porque o tecido muscular é mais denso que o tecido adiposo e o IMC considera apenas o peso total dividido pela altura ao quadrado.' }
    ]
  },
  'agua-humana': {
    title: 'Calculadora de Ingestão Diária de Água (Peso, Treino e Clima) | Brasil Calculadoras',
    description: 'Calcule quantos litros e copos de água você deve beber por dia considerando seu peso corporal, nível de atividade física e clima da sua região.',
    domainConcept: 'A água compõe cerca de 60% da massa corporal humana e participa diretamente da regulação térmica, transporte de nutrientes, função renal, lubrificação articular e desempenho cognitivo. Ainda assim, a recomendação genérica de "2 litros por dia para todo mundo" ignora diferenças evidentes: uma pessoa de 95 kg que treina corrida sob sol quente perde muito mais eletrólitos e fluidos do que alguém de 55 kg em ambiente climatizado. Esta calculadora ajusta a cota base por quilo de peso somando acréscimos específicos para exercícios e clima.',
    formulaText: 'Base Hídrica = Peso (kg) × 35 ml. Soma-se +500 ml para atividade física moderada ou +1.000 ml para treino intenso; ajusta-se -200 ml em clima frio ou +500 ml em clima quente/verão (com piso mínimo de 1.000 ml). Converte-se para litros e copos de 250 ml.',
    whenToUse: 'Use para criar metas realistas de hidratação no trabalho e na academia, prevenir dores de cabeça por desidratação leve e melhorar a recuperação muscular.',
    importantTips: 'Um sinal prático e confiável de hidratação adequada ao longo do dia é a coloração da urina: amarelo muito claro indica boa hidratação, enquanto amarelo escuro ou odor forte sinalizam necessidade imediata de reposição hídrica.',
    sources: [
      { name: 'Sociedade Brasileira de Medicina do Exercício e do Esporte (SBMEE)', url: 'https://www.medicinadoesporte.org.br/' }
    ],
    extraFaqs: [
      { q: 'Café, chás e água presente nas frutas entram nessa meta diária?', a: 'Sim, alimentos ricos em água e infusões contribuem parcialmente (cerca de 20% da ingestão hídrica total), mas água pura deve ser sempre a fonte predominante.' },
      { q: 'Beber muita água de uma só vez antes de dormir faz bem?', a: 'Não é o ideal. O melhor para os rins e para a qualidade do sono é distribuir a ingestão em pequenos goles regulares ao longo de todo o dia e reduzir o volume na última hora antes de deitar.' },
      { q: 'Quem pratica exercício intenso precisa repor apenas água ou também sais minerais?', a: 'Em treinos contínuos acima de 60–90 minutos sob calor intenso, a reposição de eletrólitos (sódio e potássio) evita cãibras e desequilíbrios eletrolíticos.' }
    ]
  },
  'exercicio-calorias': {
    domainConcept: 'Estimar quantas quilocalorias (kcal) são gastas durante uma sessão de caminhada, corrida, ciclismo, natação ou musculação ajuda a alinhar a intensidade dos treinos ao plano alimentar. Na fisiologia do exercício, esse gasto não é calculado por estimativas fixas iguais para todo mundo: ele varia proporcionalmente ao peso corporal do praticante, ao tempo ativo da sessão e ao Equivalente Metabólico da Tarefa (MET), uma unidade internacional que expressa quantas vezes aquela atividade consome mais oxigênio do que o repouso sentado.',
    formulaText: 'Utiliza-se a equação metabólica padrão com base nos METs oficiais (Corrida = 9,8; Ciclismo = 7,5; Natação = 6,0; Caminhada = 3,8; Musculação = 3,5): Calorias Queimadas = (MET × 3,5 × Peso em kg × Minutos) / 200.',
    whenToUse: 'Use para comparar o gasto energético entre diferentes modalidades esportivas na sua duração semanal de treinos e evitar superestimar calorias queimadas ao comer após a academia.',
    importantTips: 'Embora a musculação apresente MET médio imediato menor do que a corrida contínua durante a sessão, o ganho de massa muscular eleva o gasto energético basal 24 horas por dia e gera consumo pós-exercício (EPOC) importante.',
    sources: [
      { name: 'Compendium of Physical Activities - METs Científicos', url: 'https://pacompendium.com/' }
    ],
    extraFaqs: [
      { q: 'Por que duas pessoas fazendo a mesma caminhada de 45 minutos queimam calorias diferentes?', a: 'Porque carregar uma massa corporal maior (ex: 90 kg vs 60 kg) exige mais trabalho mecânico e oxigênio, elevando proporcionalmente o gasto calórico em quilocalorias.' },
      { q: 'Posso comer exatamente as calorias que o relógio fitness ou calculadora mostrou que queimei?', a: 'Se o objetivo for emagrecimento, não! Como a maioria dos cálculos inclui o próprio gasto basal do período, recomenda-se manter o déficit diário planejado na dieta em vez de "compensar" todo treino com comida.' },
      { q: 'O que significa exatamente 1 MET?', a: '1 MET equivale ao gasto energético em repouso absoluto sentado, aproximadamente 3,5 ml de oxigênio por quilo de peso corporal por minuto (~1 kcal por kg por hora).' }
    ]
  },
  'consumo-agua-ideal': {
    domainConcept: 'Para quem busca um cálculo direto, rápido e sem múltiplas seleções para definir sua cota básica diária de hidratação pela regra nutricional padrão de 35 mililitros por quilo de peso corporal, esta calculadora converte instantaneamente seu peso em litros diários e no número exato de copos americanos/padrão de 250 ml ou garrafinhas de 500 ml necessários do despertar ao dormir.',
    formulaText: 'Volume Diário (Litros) = (Peso Corporal em kg × 35) / 1.000. Copos Equivalentes (250 ml) = Arredondamento para cima de (Peso × 35 / 250).',
    whenToUse: 'Use como referência rápida no dia a dia para programar quantas garrafas de 500 ml você precisa esvaziar entre a manhã, a tarde e a noite.',
    importantTips: 'Uma estratégia simples que funciona muito bem é beber um copo de 250–300 ml logo ao acordar (após horas de jejum hídrico durante o sono) e manter uma garrafa visível sobre a mesa de trabalho.',
    sources: [
      { name: 'Ministério da Saúde - Recomendações de Hidratação', url: 'https://www.gov.br/saude/pt-br' }
    ],
    extraFaqs: [
      { q: 'Gestantes e lactantes precisam aumentar essa conta de 35 ml/kg?', a: 'Sim! Mulheres em fase de amamentação demandam volume hídrico adicional significativo (frequentemente +700 ml a +1.000 ml extras por dia) para sustentar a produção de leite materno.' },
      { q: 'Água com gás hidrata igual à água sem gás?', a: 'Sim, água gaseificada sem adição de açúcares ou sódio excessivo possui a mesma capacidade de hidratação celular que a água natural.' },
      { q: 'Pessoas com insuficiência renal ou cardíaca devem seguir a regra de 35 ml/kg?', a: 'Não automaticamente. Pacientes com restrição hídrica médica por condições renais ou insuficiência cardíaca devem seguir exclusivamente a cota prescrita pelo seu médico.' }
    ]
  },
  'percentual-gordura-corp': {
    domainConcept: 'Embora a balança comum informe apenas o peso total sem distinguir gordura de massa muscular, a relação antropométrica entre circunferência da cintura (onde se concentra a gordura visceral abdominal mais associada a risco metabólico), pescoço e estatura fornece uma estimativa prática de percentual de gordura corporal (Body Fat — BF%). Acompanhar essa medida junto à fita métrica revela progressos que muitas vezes ficam mascarados na balança quando o praticante ganha músculos ao mesmo tempo em que perde gordura.',
    formulaText: 'O estimador antropométrico correlaciona as medidas em centímetros de cintura, pescoço e altura inseridas para estimar a taxa percentual nominal de gordura corporal (BF%).',
    whenToUse: 'Use quinzenalmente ou mensalmente com uma fita métrica flexível em casa (medindo sempre em jejum pela manhã) para acompanhar evolução de recomposição corporal.',
    importantTips: 'Meça a circunferência abdominal sempre no mesmo ponto anatômico (na altura do umbigo ou na linha média entre a última costela e a crista ilíaca), mantendo o abdômen relaxado sem prender a respiração.',
    sources: [
      { name: 'Sociedade Brasileira de Endocrinologia e Metabologia (SBEM)', url: 'https://www.endocrino.org.br/' }
    ],
    extraFaqs: [
      { q: 'Quais são as faixas saudáveis usuais de percentual de gordura corporal?', a: 'Em geral, para homens adultos varia de ~12% a 20% (atletas entre 8% e 14%); para mulheres adultas varia de ~20% a 28% (atletas entre 15% e 22%), considerando a gordura essencial biológica.' },
      { q: 'Por que reduzir a circunferência da cintura melhora a saúde mesmo sem grande queda de peso?', a: 'Porque a redução na cintura sinaliza diminuição da gordura visceral intra-abdominal, fortemente ligada à resistência insulínica, hipertensão e esteatose hepática.' },
      { q: 'Qual exame clínico é mais preciso para medir percentual de gordura?', a: 'A densitometria por DEXA (padrão-ouro clínico) e a avaliação antropométrica completa por adipômetro de dobras cutâneas realizada por nutricionista ou profissional de educação física.' }
    ]
  },
  'frequencia-cardiaca-alvo': {
    domainConcept: 'Treinar caminhada, corrida, bicicleta ou spinning sem monitorar os batimentos cardíacos pode fazer o praticante trabalhar abaixo do estímulo necessário para condicionamento cardiovascular ou, no extremo oposto, entrar em exaustão anaeróbica precoce. Conhecer a Frequência Cardíaca Máxima teórica (FCM) estimada pela idade e a zona aeróbica ideal em torno de 70% permite calibrar a intensidade dos treinos usando qualquer smartwatch ou monitor cardíaco de pulso.',
    formulaText: 'Aplica-se a equação clássica de Fox-Haskell para estimar a Frequência Cardíaca Máxima: FCM = 220 - Idade (anos), determinando a Zona Segura Aeróbica (70%) = round(FCM × 0,70) batimentos por minuto (bpm).',
    whenToUse: 'Use antes de iniciar treinos aeróbicos de base (Zona 2 / 65% a 75% da FCM) para melhorar resistência cardiorrespiratória e oxidação lipídica com segurança.',
    importantTips: 'Se você utiliza medicamentos betabloqueadores para pressão arterial ou arritmia, a frequência cardíaca fica artificialmente mais baixa — nesses casos, utilize a Escala de Percepção Subjetiva de Esforço (teste da fala) orientada pelo cardiologista.',
    sources: [
      { name: 'Sociedade Brasileira de Cardiologia - Exercício Físico e Saúde Cardiovascular', url: 'https://www.portal.cardiol.br/' }
    ],
    extraFaqs: [
      { q: 'O que acontece nas diferentes zonas de frequência cardíaca?', a: 'De 50% a 60% é recuperação leve; de 60% a 75% (Zona Aeróbica) melhora resistência e capacidade oxidativa com conforto respiratório; de 80% a 90% entra no limiar anaeróbico de alta performance.' },
      { q: 'A fórmula 220 - idade serve para atletas idosos ou muito treinados?', a: 'É uma ótima estimativa populacional, mas variações individuais de até ±10 bpm existem; para precisão de competição, utiliza-se o teste ergoespirométrico em clínica cardiológica.' },
      { q: 'Como testar rapidamente a zona aeróbica sem relógio cardíaco?', a: 'Pelo "teste da conversa": na zona aeróbica moderada (65%–75%), você consegue falar frases curtas enquanto se exercita, mas não consegue cantar.' }
    ]
  },
  'calculo-calorias-metabolismo': {
    domainConcept: 'Enquanto calculadoras genéricas aplicam uma única taxa média de calorias para homens e mulheres, o gasto energético basal diário depende diretamente de três variáveis antropométricas combinadas: peso corporal (kg), altura (cm) e idade cronológica (anos). Esta ferramenta aplica a clássica equação de Harris-Benedict revisada e mostra simultaneamente a energia gasta apenas para manter o organismo vivo em repouso absoluto e a projeção já ajustada para um dia com atividades leves ou moderadas.',
    formulaText: 'Calcula-se a Taxa Metabólica Basal pela fórmula de Harris-Benedict: TMB = 88,36 + (13,397 × Peso kg) + (4,799 × Altura cm) - (5,677 × Idade), estimando-se também o gasto diário com treino leve pelo fator multiplicador de 1,375.',
    whenToUse: 'Útil para comparar diferentes equações preditivas de gasto calórico (Harris-Benedict versus Mifflin-St Jeor) e construir seu diário alimentar com clareza.',
    importantTips: 'A cada 5 a 10 kg eliminados durante um processo de emagrecimento, recalcule sua TMB! Um corpo mais leve demanda menos energia diária para se mover e respirar, exigindo reajustes periódicos na dieta.',
    sources: [
      { name: 'Conselho Federal de Nutricionistas (CFN)', url: 'https://www.cfn.org.br/' }
    ],
    extraFaqs: [
      { q: 'Por que o metabolismo basal tende a diminuir com o passar dos anos?', a: 'Principalmente pela redução gradual natural da massa muscular esquelética (sarcopenia) quando não há prática regular de treino de força e ingestão proteica adequada.' },
      { q: 'Ganhar massa muscular realmente acelera a queima calórica em repouso?', a: 'Sim! Cada quilo de tecido muscular ativo consome mais energia basal para manutenção celular do que um quilo de tecido adiposo.' },
      { q: 'Devo comer menos calorias do que a minha Taxa Metabólica Basal para emagrecer mais rápido?', a: 'Não é recomendável ficar abaixo da TMB por períodos prolongados sem supervisão médica, pois isso prejudica hormônios tireoidianos, disposição diária e preservação muscular.' }
    ]
  },
  'calculadora-sono-ideal': {
    domainConcept: 'Acordar cansado mesmo após dormir 7 ou 8 horas quase sempre ocorre porque o despertador tocou no meio de um estágio de sono profundo (N3) ou sono REM, causando a chamada inércia do sono. Durante a noite, o cérebro humano percorre ciclos completos que duram aproximadamente 90 minutos cada (passando pelo sono leve, sono profundo restaurador e fase REM de consolidação de memória). Planejar a hora de deitar em múltiplos exatos de 5 ou 6 ciclos completos permite despertar naturalmente na transição leve entre ciclos.',
    formulaText: 'Subtraindo do horário previsto para acordar 6 ciclos completos (9 horas = 540 min) ou 5 ciclos completos (7,5 horas = 450 min), encontra-se os melhores horários de adormecer considerando a janela circadiana.',
    whenToUse: 'Use sempre que precisar acordar muito cedo no dia seguinte para viagens, provas ou turnos de trabalho e quiser evitar a sensação de grogue matinal.',
    importantTips: 'Considere deitar cerca de 15 minutos antes do horário calculado (latência natural do sono) e evite luz azul intensa de smartphones nos 40 minutos anteriores para facilitar a liberação de melatonina.',
    sources: [
      { name: 'Associação Brasileira do Sono (ABS) - Higiene e Ciclos do Sono', url: 'https://absono.com.br/' }
    ],
    extraFaqs: [
      { q: 'Quantos ciclos de sono de 90 minutos são recomendados para um adulto?', a: 'A maioria dos adultos alcança recuperação plena entre 5 ciclos (7 horas e 30 minutos) e 6 ciclos completos (9 horas) por noite.' },
      { q: 'Dormir pouco durante a semana e compensar tudo no sábado funciona?', a: 'Não integralmente. A regularidade de horário para acordar e dormir estabiliza o relógio biológico e previne o chamado "jet lag social".' },
      { q: 'Sonecas curtas à tarde atrapalham o ciclo noturno?', a: 'Sonecas breves de 15 a 25 minutos (power nap) antes das 15h restauram o alerta sem entrar em sono profundo nem prejudicar o sono noturno.' }
    ]
  },
  'calorias-atividades-fisicas': {
    domainConcept: 'Comparar diretamente quantas calorias são consumidas em uma hora de corrida contra uma hora de pedalada (ciclismo) ajuda praticantes que alternam modalidades aeróbicas ao longo da semana a manter o mesmo gasto calórico semanal ou escolher o exercício mais adequado às suas articulações e metas. Por envolver sustentação integral do peso corporal contra a gravidade e maior recrutamento muscular contínuo, a corrida tende a gerar maior gasto por minuto do que o ciclismo na mesma duração.',
    formulaText: 'Estima-se Gasto em Corrida Rápida = (Peso em kg × 10 × Duração em min) / 60 e Gasto em Pedalada Moderada/Forte = (Peso em kg × 7,5 × Duração em min) / 60.',
    whenToUse: 'Prático para comparar rapidamente corrida versus bicicleta ergométrica ou de rua dentro do mesmo intervalo de tempo disponível na rotina diária.',
    importantTips: 'Se você possui sobrepeso acentuado ou histórico de desconforto nos joelhos, iniciar pelo ciclismo ou natação protege as articulações permitindo sessões mais longas e constantes com menor risco de lesão.',
    sources: [
      { name: 'ACSM - American College of Sports Medicine', url: 'https://www.acsm.org/' }
    ],
    extraFaqs: [
      { q: 'Correr por 30 minutos gasta aproximadamente o mesmo que pedalar quanto tempo?', a: 'Em ritmo moderado a intenso, 30 minutos de corrida equivalem em gasto energético bruto a cerca de 40 a 45 minutos de pedalada contínua.' },
      { q: 'A inclinação na esteira ou subida no ciclismo altera essa conta?', a: 'Sim! Subidas e maior resistência elevam consideravelmente o MET da atividade, aumentando o gasto calórico em 20% a 40%.' },
      { q: 'Treinar em jejum queima mais gordura total no final do mês?', a: 'Estudos clínicos mostram que o fator determinante para perda de gordura corporal é o balanço calórico total ao longo das semanas, e não o fato de treinar em jejum ou alimentado.' }
    ]
  },
  'peso-ideal-corp-raciol': {
    domainConcept: 'Embora a expressão "peso ideal" deva ser sempre interpretada considerando biotipo ósseo e massa muscular individual, estabelecer uma faixa saudável de referência baseada nos limites de eutrofia do Índice de Massa Corporal recomendados pela Organização Mundial da Saúde (IMC entre 18,5 e 24,9 kg/m²) oferece metas realistas e seguras. Assim, em vez de buscar um único número rígido na balança, a pessoa visualiza um intervalo saudável mínimo e máximo compatível com sua estatura.',
    formulaText: 'Converte-se a altura para metros (h = altura_cm / 100). Limite Inferior Saudável = 18,5 × h²; Limite Máximo Confortável = 24,9 × h².',
    whenToUse: 'Use ao definir metas de longo prazo no emagrecimento ou ganho de peso saudável para evitar objetivos irreais e não fisiológicos.',
    importantTips: 'Almeje sempre o centro da faixa calculada ou combine a referência com avaliação da relação cintura/altura (mantendo a circunferência da cintura menor que metade da sua altura em centímetros).',
    sources: [
      { name: 'Organização Mundial da Saúde (OMS) - Padrões Antropométricos', url: 'https://www.who.int/' }
    ],
    extraFaqs: [
      { q: 'Por que a calculadora exibe um intervalo mínimo e máximo em vez de um peso único?', a: 'Porque duas pessoas com a mesma altura de 1,70 m podem ter ossatura estreita ou larga e quantidades diferentes de massa muscular — ambas completamente saudáveis dentro da faixa de 53 kg a 72 kg.' },
      { q: 'Crianças e adolescentes podem usar essa mesma faixa de cálculo?', a: 'Não! Para crianças e adolescentes (até 19 anos), o peso saudável depende das curvas de percentil por idade e sexo da OMS / Caderneta de Saúde.' },
      { q: 'É saudável tentar ficar abaixo do limite inferior de IMC 18,5?', a: 'Não. Permanecer abaixo de 18,5 aumenta riscos de imunidade baixa, deficiências nutricionais, perda óssea e alterações hormonais.' }
    ]
  },
  'distribuição-macronutrientes': {
    domainConcept: 'Controlar apenas o total de calorias diárias (kcal) sem observar a divisão entre Carboidratos, Proteínas e Gorduras pode comprometer tanto a saciedade quanto a composição corporal: uma dieta de 2.000 kcal pobre em proteínas e rica apenas em açúcares leva à perda de massa magra e picos de fome. Esta calculadora converte qualquer meta calórica diária em gramas exatos de cada macronutriente usando a distribuição equilibrada padrão 40% / 30% / 30%, considerando a densidade energética fisiológica de 4 kcal/g para carboidratos e proteínas e 9 kcal/g para gorduras.',
    formulaText: 'Carboidratos (g) = (Meta Calórica × 0,40) / 4. Proteínas (g) = (Meta Calórica × 0,30) / 4. Gorduras Saudáveis (g) = (Meta Calórica × 0,30) / 9.',
    whenToUse: 'Use após calcular sua meta diária de calorias (para manutenção, déficit ou superávit) para montar listas de compras e acompanhar aplicativos contadores de macros.',
    importantTips: 'Certifique-se de que a quantidade de proteínas em gramas calculada corresponda ao menos a 1,4g a 2,0g por quilo do seu peso corporal caso você pratique musculação regularmente.',
    sources: [
      { name: 'Ministério da Saúde - Macronutrientes e Alimentação Saudável', url: 'https://www.gov.br/saude/pt-br' }
    ],
    extraFaqs: [
      { q: 'Por que os gramas de gordura dividem por 9 enquanto carboidratos e proteínas dividem por 4?', a: 'Porque cada grama de lipídio (gordura) fornece 9 quilocalorias ao organismo, mais que o dobro da energia contida em 1 grama de proteína ou carboidrato (4 kcal/g).' },
      { q: 'Carboidratos devem ser cortados à noite?', a: 'Não há necessidade fisiológica de zerar carboidratos à noite: o balanço calórico e proteico ao longo das 24 horas importa muito mais do que o horário isolado das refeições.' },
      { q: 'Quais são boas fontes de gorduras saudáveis para bater os 30%?', a: 'Azeite de oliva extravirgem, abacate, castanhas, nozes, sementes de chia/linhaça e peixes ricos em ômega-3 como sardinha e salmão.' }
    ]
  },
  'pressao-arterial-check': {
    domainConcept: 'A hipertensão arterial sistêmica é chamada de "inimiga silenciosa" porque raramente produz sintomas até provocar danos cardiovasculares graves. Ao medir a pressão arterial em farmácia ou aparelho doméstico validado, o usuário recebe dois números em milímetros de mercúrio (mmHg): a pressão sistólica (máxima, quando o coração contrai) e a pressão diastólica (mínima, quando o coração relaxa). Este classificador preliminar compara sua aferição com as diretrizes clínicas brasileiras para indicar normalidade, pré-hipertensão ou estágios de alerta.',
    formulaText: 'Classificação baseada nas diretrizes da Sociedade Brasileira de Cardiologia: Normal (abaixo de 120 e abaixo de 80 mmHg); Pré-hipertensão / Elevada (120–139 ou 80–89); Hipertensão Estágio 1 (140–159 ou 90–99); Hipertensão Estágio 2/Grave (≥ 160 ou ≥ 100); Hipotensão (abaixo de 90 ou abaixo de 60 mmHg).',
    whenToUse: 'Use para interpretar rapidamente leituras domésticas de aparelhos digitais de braço e saber quando é o momento de agendar consulta médica preventiva.',
    importantTips: 'Antes de aferir a pressão, permaneça sentado e em repouso por pelo menos 5 minutos, com as costas apoiadas, pés no chão, bexiga vazia e sem ter tomado café ou fumado nos últimos 30 minutos; prefira aparelhos de braço (manguito) aos de pulso.',
    sources: [
      { name: 'Sociedade Brasileira de Cardiologia - Diretrizes Brasileiras de Hipertensão Arterial', url: 'https://www.portal.cardiol.br/' }
    ],
    extraFaqs: [
      { q: 'Uma única medição alta de 140x90 mmHg significa que sou hipertenso?', a: 'Não necessariamente. Estresse agudo, dor, café ou corrida recente elevam a pressão temporariamente; o diagnóstico médico exige múltiplas medições em dias diferentes ou exame MAPA de 24 horas.' },
      { q: 'E se apenas a pressão sistólica (alta) ou apenas a diastólica (baixa) estiver elevada?', a: 'A classificação clínica considera sempre o valor mais alterado entre os dois números: se a sistólica for 145 e a diastólica 80, já se enquadra na faixa de alerta da sistólica.' },
      { q: 'Quando uma pressão alta exige pronto-atendimento médico imediato?', a: 'Leituras muito elevadas (≥ 180x120 mmHg), especialmente se acompanhadas de dor no peito, falta de ar, dor de cabeça súbita intensa ou alteração visual/motora, exigem urgência médica imediata.' }
    ]
  },
  'calculadora-idade-gestacional': {
    title: 'Calculadora de Idade Gestacional em Semanas e Dias | Brasil Calculadoras',
    description: 'Calcule com exatidão sua idade gestacional em semanas e dias corridos a partir da DUM, descubra o trimestre atual e quantos dias faltam até o parto.',
    domainConcept: 'Na obstetrícia moderna, o acompanhamento da gestação não é feito apenas por "meses corridos", mas sim em semanas e dias completos — pois exames críticos como o ultrassom morfológico de 1º trimestre (entre 11 e 14 semanas), a curva glicêmica e a vacinação materna têm janelas semanais específicas. Esta calculadora converte os dias decorridos desde a Data da Última Menstruação (DUM), com opção de ajuste pela duração média do ciclo menstrual, em semanas + dias exatos, dias restantes até a 40ª semana e trimestre gestacional.',
    formulaText: 'Considera-se a duração a termo padrão de 280 dias (40 semanas), ajustada pela variação do ciclo menstrual em relação a 28 dias: Semanas = floor(Dias / 7), Dias Extras = Dias % 7; 1º Trimestre (semanas 1–13), 2º Trimestre (14–26), 3º Trimestre (≥27).',
    whenToUse: 'Use semanalmente durante o pré-natal para saber em qual semana gestacional e trimestre você está, acompanhar aplicativos de desenvolvimento fetal e organizar exames agendados.',
    importantTips: 'Se o seu ciclo menstrual regular for diferente de 28 dias (por exemplo, ciclos de 32 dias nos quais a ovulação acontece 4 dias mais tarde), informe a duração média do ciclo no segundo campo para aumentar a precisão da estimativa.',
    sources: [
      { name: 'FEBRASGO - Manual de Pré-Natal', url: 'https://www.febrasgo.org.br/' },
      { name: 'Ministério da Saúde - Caderneta da Gestante', url: 'https://www.gov.br/saude/pt-br' }
    ],
    extraFaqs: [
      { q: 'A idade gestacional pela DUM pode diferir da idade vista no primeiro ultrassom?', a: 'Sim! Quando a diferença for superior a 5 a 7 dias no ultrassom precoce do 1º trimestre (medindo o Comprimento Cabeça-Nádega), o obstetra passa a adotar a data corrigida pela ultrassonografia como referência oficial.' },
      { q: 'Com quantas semanas o bebê já é considerado "pronto" (a termo)?', a: 'Entre 37 semanas completas e 41 semanas e 6 dias; especificamente entre 39 semanas e 40 semanas e 6 dias classifica-se como termo completo ideal.' },
      { q: 'Como converter semanas de gestação para meses aproximados?', a: 'De forma prática: 12 semanas equivalem a ~3 meses (fim do 1º trimestre); 24 semanas a ~5 meses e meio; 27 semanas iniciam o 7º mês; e 40 semanas fecham os 9 meses lunares/obstétricos completos.' }
    ]
  },

  // ================= PETS & ANIMAIS (4) =================
  'idade-caes': {
    title: 'Calculadora de Idade Humana de Cachorro (Por Porte) | Brasil Calculadoras',
    description: 'Descubra a idade humana equivalente do seu cão considerando o porte (Pequeno, Médio, Grande ou Gigante) pela curva biológica moderna.',
    domainConcept: 'A crença popular de multiplicar a idade do cachorro por 7 anos humanos foi superada pela medicina veterinária há décadas. Cães atingem a adolescência e a maturidade sexual muito depressa logo nos primeiros 24 meses de vida — independentemente da raça —, alcançando cerca de 15 anos humanos no primeiro ano e 24 anos humanos no segundo ano. A partir do terceiro ano, o ritmo de envelhecimento se diferencia drasticamente conforme o porte físico: cães pequenos envelhecem cerca de 4 anos humanos por ano cronológico, enquanto raças gigantes chegam a envelhecer 7 anos por ano.',
    formulaText: 'Até 1 ano: Idade × 15. Com 2 anos: 24 anos humanos. Acima de 2 anos: 24 + (Idade - 2) × Fator de Porte (Pequeno até 10kg = 4; Médio 11–25kg = 5; Grande 26–45kg = 6; Gigante acima de 45kg = 7).',
    whenToUse: 'Use para compreender em qual fase da vida seu cão realmente está (filhote, jovem adulto, maduro ou sênior) e adaptar frequência de check-ups veterinários e troca para ração sênior.',
    importantTips: 'Cães de porte grande e gigante costumam entrar na fase geriátrica (sênior) já entre 6 e 7 anos de idade real, exigindo exames anuais preventivos cardíacos e articulares mais cedo do que cães de pequeno porte.',
    sources: [
      { name: 'AVMA / CFMV - Cuidados Geriátricos em Cães e Gatos', url: 'https://www.cfmv.gov.br/' }
    ],
    extraFaqs: [
      { q: 'Com quantos anos meu cachorro já é considerado idoso (sênior)?', a: 'Cães pequenos costumam tornar-se seniores aos 9–10 anos; cães médios aos 8 anos; cães grandes aos 7 anos; e cães gigantes por volta dos 5–6 anos.' },
      { q: 'Por que raças pequenas vivem muito mais do que raças gigantes?', a: 'Estudos genéticos e metabólicos mostram que o crescimento celular acelerado e níveis elevados de IGF-1 necessários para formar um cão gigante em poucos meses associam-se a envelhecimento celular mais precoce.' },
      { q: 'Um cachorro vira-lata (SRD) de 15 kg entra em qual porte?', a: 'Cães entre 11 kg e 25 kg enquadram-se perfeitamente na categoria de Porte Médio (fator 5 após os 2 anos).' }
    ]
  },
  'idade-gatos': {
    title: 'Calculadora de Idade Humana de Gato | Brasil Calculadoras',
    description: 'Converta a idade real do seu gato em idade equivalente humana e entenda cada estágio de desenvolvimento felino.',
    domainConcept: 'Assim como ocorre com os cães, gatos apresentam um salto rápido de desenvolvimento nos primeiros dois anos de vida: um gatinho de apenas 1 ano de idade já equivale biologicamente a um adolescente de cerca de 15 anos humanos, e aos 2 anos já alcança a maturidade jovem de 24 anos humanos. Depois dessa fase inicial, diferentemente dos cães, os gatos têm menor variação de porte físico entre raças domésticas e passam a envelhecer de forma uniforme a uma taxa aproximada de 4 anos humanos para cada ano de vida felina.',
    formulaText: '1º ano = 15 anos humanos; 2º ano = 24 anos humanos; a partir do 3º ano: Idade Humana = 24 + (Idade do Gato - 2) × 4.',
    whenToUse: 'Use para saber se seu gato já entrou na fase madura (7+ anos, ~44 anos humanos) ou sênior (11+ anos, ~60 anos humanos), ajustando alimentação e exames renais preventivos.',
    importantTips: 'Gatos mantidos exclusivamente dentro de casa (telados e sem acesso à rua) têm expectativa de vida muito superior — alcançando com frequência 15 a 20 anos — em comparação a gatos com acesso livre à rua.',
    sources: [
      { name: 'CFMV - Medicina Felina Preventiva', url: 'https://www.cfmv.gov.br/' }
    ],
    extraFaqs: [
      { q: 'Com quantos anos um gato de apartamento costuma precisar de ração sênior?', a: 'A maioria dos veterinários recomenda transição para dieta madura/sênior a partir dos 7 a 8 anos de idade (equivalente a 44–48 anos humanos), com foco em proteção renal e articular.' },
      { q: 'Um gato de 15 anos equivale a quantos anos humanos?', a: 'Aplicando a curva felina: 24 + (15 - 2) × 4 = 76 anos humanos — já um idoso que merece rampas baixas, caixa de areia de borda baixa e check-ups semestrais.' },
      { q: 'Gatos escondem dor com mais facilidade que cães?', a: 'Sim. Por instinto evolutivo felino, gatos disfarçam sinais de dor articular ou doença renal até fases avançadas, tornando os exames anuais após os 7 anos indispensáveis.' }
    ]
  },
  'racao-caes': {
    domainConcept: 'Servir ração "no olho" enchendo o comedouro sempre que esvazia é a causa número um de sobrepeso e obesidade canina no Brasil — condição que encurta a vida do animal e sobrecarrega ligamentos e coração. Na nutrição veterinária, a porção diária ideal não é calculada como percentual linear do peso (porque um cão de 40 kg não gasta 10 vezes mais calorias que um de 4 kg), mas sim através do Peso Metabólico elevado à potência 0,75 multiplicado por um fator específico de energia conforme idade, castração e atividade.',
    formulaText: 'Calcula-se primeiro a Necessidade Energética de Repouso: RER = 70 × (Peso kg)^0,75. Multiplica-se pelo fator de atividade/estágio (Filhote = 2,5; Adulto baixo = 1,2; Moderado = 1,6; Ativo = 2,0; Sênior/Castrado = 1,0) para achar kcal/dia e divide-se pela densidade média de 3,5 kcal/g.',
    whenToUse: 'Use ao trocar de marca de ração, após a castração do seu cachorro (quando a necessidade calórica cai cerca de 20% a 30%) ou ao iniciar rotina de passeios mais longos.',
    importantTips: 'Sempre que oferecer petiscos, ossinhos mastigáveis ou frutas ao longo do dia, desconte essas calorias extras da porção diária de ração para manter o peso saudável estável.',
    sources: [
      { name: 'WSAVA - Diretrizes Globais de Nutrição Veterinária', url: 'https://wsava.org/' }
    ],
    extraFaqs: [
      { q: 'Por que cães castrados ganham peso tão rápido mantendo a mesma quantidade de ração?', a: 'A queda hormonal pós-castração reduz a taxa metabólica basal e aumenta o apetite; manter a mesma porção de antes gera superávit calórico diário e ganho rápido de gordura.' },
      { q: 'Devo dividir a porção total em quantas refeições por dia?', a: 'Para cães adultos, recomenda-se dividir em 2 refeições diárias (manhã e noite) para evitar longos períodos de estômago vazio ou risco de torção gástrica em cães grandes; filhotes devem comer 3 a 4 vezes ao dia.' },
      { q: 'Se a embalagem da minha ração tiver tabela diferente, qual devo seguir?', a: 'Use este cálculo calórico científico combinado com o valor exato de Energia Metabolizável (kcal/kg) impresso no verso do pacote da sua ração específica.' }
    ]
  },
  'agua-pets': {
    domainConcept: 'Manter cães e gatos adequadamente hidratados previne infecções urinárias, formação de cálculos na bexiga e progressão de doença renal crônica — especialmente em felinos, que evoluíram de ancestrais desérticos e possuem baixo impulso natural de sede. Conhecer a cota diária recomendada em mililitros por quilo de peso, ajustada ao clima quente, permite ao tutor monitorar visualmente quanto o animal realmente bebe ao encher os potes de água pela manhã.',
    formulaText: 'Base diária: 60 ml/kg/dia para Cães e 50 ml/kg/dia para Gatos. Em climas quentes ou verão, aplica-se um acréscimo de +30% sobre o volume base.',
    whenToUse: 'Use para monitorar o consumo hídrico diário em ondas de calor, após cirurgias ou caso perceba o pet urinando em menor quantidade ou com urina muito concentrada.',
    importantTips: 'Em gatos, oferecer diariamente uma porção de alimento úmido (sachê ou patê, que possuem ~80% de água na composição) já supre grande parte da meta diária hídrica sem esforço.',
    sources: [
      { name: 'CRMV / WSAVA - Hidratação em Pequenos Animais', url: 'https://www.cfmv.gov.br/' }
    ],
    extraFaqs: [
      { q: 'Se o cachorro beber água muito acima do normal todos os dias, devo me preocupar?', a: 'Sim! Sede excessiva persistente (polidipsia) acompanhada de aumento no volume urinário pode indicar diabetes, doença renal, síndrome de Cushing ou infecção uterina em fêmeas não castradas — procure um veterinário.' },
      { q: 'Posso colocar gelo na água do cachorro ou gato no verão?', a: 'Sim, pedras de gelo na vasilha ajudam a manter a água fresca e estimulam muitos cães a beberem com mais frequência nos dias muito quentes.' },
      { q: 'De quanto em quanto tempo devo lavar os potes de água dos pets?', a: 'Pelo menos uma vez ao dia com água e sabão neutro, pois a saliva animal forma um biofilme escorregadio que prolifera bactérias e altera o gosto da água (especialmente em potes de plástico).' }
    ]
  },

  // ================= DATAS & PLANEJAMENTO (3) =================
  'diferenca-entre-datas': {
    title: 'Calculadora de Diferença Entre Datas (Dias, Semanas, Meses e Anos) | Brasil Calculadoras',
    description: 'Calcule quantos dias exatos, semanas, meses, anos e horas existem entre duas datas do calendário considerando anos bissextos.',
    domainConcept: 'Contar exatamente quantos dias separam duas datas históricas, vencimentos contratuais, aniversários, períodos de experiência trabalhista (45 ou 90 dias) ou tempo total de serviço exige precisão quanto aos meses de 28, 29, 30 e 31 dias. Fazer essa conta de cabeça ou multiplicando todos os meses por 30 gera desvios inevitáveis ao longo de vários meses ou anos. Nossa calculadora computa o intervalo exato de calendário entre a data inicial e a data final e traduz esse período simultaneamente em dias totais, semanas, meses médios, anos + meses e horas.',
    formulaText: 'Calcula-se a diferença absoluta em milissegundos entre os objetos Date(ano, mês-1, dia) dividida por 86.400.000 ms/dia para obter Dias Totais; Semanas = Dias / 7; Meses = Dias / 30,44; Horas = Dias × 24.',
    whenToUse: 'Use para verificar contagem de contratos de experiência (45 + 45 dias), prazos de garantia, idade exata em dias de um bebê, tempo até férias ou duração total de projetos.',
    importantTips: 'Em contratos trabalhistas e cíveis de dias corridos, observe sempre se o dia inicial é incluído ou excluído da contagem (no Direito Civil exclui-se o dia do começo e inclui-se o do vencimento; em contrato de experiência da CLT conta-se inclusive o dia da admissão).',
    sources: [
      { name: 'Código Civil Brasileiro - Art. 132 (Contagem de Prazos)', url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm' }
    ],
    extraFaqs: [
      { q: 'A calculadora considera anos bissextos com 29 de fevereiro?', a: 'Sim! Ao usar o calendário gregoriano real entre as duas datas, todos os anos bissextos (como 2024, 2028) são computados automaticamente com 366 dias.' },
      { q: 'Posso inserir a data final anterior à data inicial?', a: 'Sim. A calculadora usa o valor absoluto da diferença entre as duas datas, informando exatamente o intervalo em dias entre elas independentemente da ordem.' },
      { q: 'Qual é a diferença entre dias corridos e dias úteis?', a: 'Dias corridos contam todos os dias do calendário sem interrupção (incluindo sábados, domingos e feriados); para excluir finais de semana e feriados nacionais, utilize nossa Calculadora de Dias Úteis.' }
    ]
  },
  'dias-uteis-entre-datas': {
    title: 'Calculadora de Dias Úteis Entre Datas (Com Feriados Nacionais 2026) | Brasil Calculadoras',
    description: 'Conte exatamente quantos dias úteis existem entre duas datas no Brasil, descontando automaticamente sábados, domingos e feriados nacionais fixos.',
    domainConcept: 'Cronogramas de entrega comercial, prazos de compensação bancária, pagamentos de salários (até o 5º dia útil do mês) e agendamentos de projetos corporativos não operam em dias corridos, mas sim em dias úteis. Percorrer mês a mês no calendário descontando manualmente finais de semana e feriados nacionais favorece esquecimentos — especialmente em meses com vários feriados como abril, maio e novembro. Nossa ferramenta analisa dia por dia do intervalo selecionado e separa automaticamente dias úteis, finais de semana e feriados nacionais oficiais.',
    formulaText: 'Itera cada dia do intervalo [Data Inicial .. Data Final]: se sábado (6) ou domingo (0), incrementa Fins de Semana; se coincidir com feriado nacional fixo (01/01, 21/04, 01/05, 07/09, 12/10, 02/11, 15/11, 20/11, 25/12), incrementa Feriados; caso contrário, incrementa Dias Úteis.',
    whenToUse: 'Use para descobrir exatamente qual será o 5º dia útil do mês, planejar entregas de sprints ou validar prazos de entrega em dias úteis de fornecedores e transportadoras.',
    importantTips: 'Lembre-se que a Lei nº 14.759/2023 tornou o Dia da Consciência Negra (20 de novembro) feriado nacional em todo o Brasil (já incluído em nosso cálculo), enquanto feriados móveis (Carnaval, Sexta-Feira Santa e Corpus Christi) e estaduais/municipais devem ser abatidos conforme o calendário local.',
    sources: [
      { name: 'Lei nº 662/1949 e Lei nº 14.759/2023 (Feriados Nacionais)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l0662.htm' }
    ],
    extraFaqs: [
      { q: 'Para pagamento de salário até o 5º dia útil, o sábado conta como dia útil?', a: 'Sim! Pela Instrução Normativa nº 2/2021 do Ministério do Trabalho (e Súmula tradicional), exclusivamente para fins de pagamento de salários CLT o sábado é considerado dia útil (exceto se cair em feriado). Para prazos bancários e processuais, sábado não é dia útil.' },
      { q: 'Carnaval é considerado feriado nacional oficial por lei?', a: 'Não em todo o país: na maioria dos estados e municípios a terça-feira de Carnaval é ponto facultativo bancário/público, sendo feriado estadual por lei específica em locais como o Rio de Janeiro.' },
      { q: 'O dia inicial e o dia final entram na contagem inclusiva?', a: 'Sim, o contador varre inclusive da data inicial até a data final informadas para apurar todos os dias úteis contidos dentro do período completo.' }
    ]
  },
  'conversor-horas-decimais': {
    title: 'Conversor de Horas (HH:MM) para Decimal (Folha de Ponto e RH) | Brasil Calculadoras',
    description: 'Converta horas e minutos (formato relógio HH:MM) em horas decimais para multiplicar facilmente por valor/hora em Excel, RH e notas fiscais.',
    domainConcept: 'Multiplicar horas trabalhadas registradas no formato relógio (como 08h30 ou 42h45) diretamente em planilhas financeiras ou calculadoras comuns leva a um dos erros aritméticos mais frequentes em fechamentos de ponto: digitar 8,30 no lugar de 8,50! Como o sistema horário utiliza base 60 (sexagesimal) e a moeda utiliza base 100 (decimal), todo minuto precisa ser convertido em fração de 60 antes de multiplicar pelo valor da hora técnica ou adicional de hora extra.',
    formulaText: 'Formato Decimal = Horas Inteiras + (Minutos / 60). Exibe também Total em Minutos = (Horas × 60) + Minutos e Total em Segundos = Total em Minutos × 60.',
    whenToUse: 'Indispensável para profissionais de RH, contadores, freelancers e empregados converterem o saldo final do espelho de ponto antes de calcular horas extras ou emitir faturas.',
    importantTips: 'Guarde três referências mentais úteis: 15 minutos = 0,25 h; 30 minutos = 0,50 h; e 45 minutos = 0,75 h. Qualquer outro valor (ex: 20 minutos = 0,3333 h) sai com 4 casas decimais exatas nesta ferramenta.',
    sources: [
      { name: 'BIPM - Sistema Internacional de Unidades (Tempo)', url: 'https://www.bipm.org/' }
    ],
    extraFaqs: [
      { q: 'Se eu trabalhei 10 horas e 40 minutos extras, devo multiplicar meu valor-hora por 10,40 ou 10,6667?', a: 'Por 10,6667! Multiplicar por 10,40 faria você perder o pagamento correspondente a 16 minutos trabalhados (pois 0,40 × 60 = 24 minutos, e não 40).' },
      { q: 'Por que a calculadora exibe 4 casas decimais na saída?', a: 'Porque divisões por 60 frequentemente geram dízimas periódicas (ex: 10 min = 0,1667 h); manter 4 casas decimais preserva precisão absoluta ao multiplicar por grandes valores de hora.' },
      { q: 'Posso usar para converter minutos totais acumulados no mês (ex: 0 horas e 185 minutos)?', a: 'Sim! Deixe Horas em 0 e digite 185 em Minutos para obter imediatamente 3,0833 horas decimais.' }
    ]
  },

  // ================= MATERNIDADE & BEBÊ (2) =================
  'data-provavel-parto': {
    title: 'Calculadora da Data Provável do Parto (DPP) e Trimestre | Brasil Calculadoras',
    description: 'Descubra sua idade gestacional exata, o trimestre atual, quantos dias e semanas faltam para o nascimento e o progresso completo até as 40 semanas.',
    domainConcept: 'Acompanhar o calendário gestacional a partir dos dias transcorridos desde a Data da Última Menstruação (DUM) traz clareza para a gestante e a família programarem consultas do pré-natal, exames de imagem, cursos de preparação para o parto e licença-maternidade. Adotando o referencial clínico padrão de 280 dias completos (40 semanas obstétricas), a calculadora determina imediatamente semanas + dias de gestação, quantos dias e semanas restam até o marco de 40 semanas, em qual trimestre você se encontra e o percentual já percorrido da gravidez.',
    formulaText: 'Semanas = floor(Dias desde DUM / 7); Dias Extras = Dias % 7; Dias para Parto = max(0, 280 - Dias desde DUM); Progresso (%) = min(100, (Dias / 280) × 100); Trimestre: 1º (1–13 sem.), 2º (14–26 sem.), 3º (≥27 sem.).',
    whenToUse: 'Use durante toda a gravidez para saber com exatidão sua semana atual antes de consultas obstétricas, exames morfológicos ou planejamento da licença-maternidade.',
    importantTips: 'A licença-maternidade de 120 dias (ou 180 dias em empresas do Programa Empresa Cidadã) pode ser iniciada por recomendação médica a partir de 28 dias antes da Data Provável do Parto (36ª semana) ou na data do nascimento.',
    sources: [
      { name: 'FEBRASGO - Federação Brasileira das Associações de Ginecologia e Obstetrícia', url: 'https://www.febrasgo.org.br/' },
      { name: 'Ministério da Saúde - Atenção ao Pré-Natal', url: 'https://www.gov.br/saude/pt-br' }
    ],
    extraFaqs: [
      { q: 'Em qual semana começa o 2º trimestre e o 3º trimestre da gravidez?', a: 'Pela divisão obstétrica clássica: o 1º trimestre vai até a 13ª semana completa; o 2º trimestre abrange da 14ª à 26ª semana; e o 3º trimestre inicia na 27ª semana até o nascimento.' },
      { q: 'Com quantas semanas costuma ser agendado o ultrassom morfológico do 2º trimestre?', a: 'Geralmente entre a 20ª e a 24ª semana de gestação, janela ideal para avaliar detalhadamente a anatomia fetal e medidas de crescimento.' },
      { q: 'Se completar 40 semanas e o bebê ainda não tiver nascido, é perigoso?', a: 'Entre 40 e 41 semanas ainda é considerado dentro do termo (termo tardio até 41s6d), momento em que o obstetra intensifica a monitorização do líquido amniótico e vitalidade fetal para definir o parto seguro.' }
    ]
  },
  'custo-mensal-bebe': {
    title: 'Calculadora de Custo Mensal com Bebê Recém-Nascido | Brasil Calculadoras',
    description: 'Planeje o orçamento familiar estimando gastos mensais e anuais com fraldas, fórmula infantil (opcional), pediatra, pomadas e roupas do recém-nascido.',
    domainConcept: 'A chegada de um recém-nascido transforma não apenas a rotina da casa, mas também a estrutura de custos mensais da família. Muitos pais concentram o orçamento exclusivamente na decoração do quarto e no carrinho antes do parto, subestimando as despesas recorrentes contínuas dos primeiros 12 meses — especialmente fraldas descartáveis (cerca de 240 unidades por mês), consultas pediátricas mensais de puericultura, pomadas preventivas de assadura, lenços, vacinas particulares opcionais e, quando necessário ou prescrito pelo pediatra, latas de fórmula infantil.',
    formulaText: 'Gasto com Fraldas = Fraldas/Dia × Preço Unitário × 30 dias. Gasto Alimentação = Latas/Mês × Preço da Lata (quando selecionada fórmula). Gasto Saúde = Consultas/Mês × Preço Consulta. Custo Mensal = Fraldas + Alimentação + Saúde + Outros Gastos; Projeção Anual = Custo Mensal × 12.',
    whenToUse: 'Use ainda durante a gestação para ajustar a reserva de emergência familiar, avaliar a inclusão de dependente no plano de saúde e dimensionar o orçamento do primeiro ano do bebê.',
    importantTips: 'Aproveitar o aleitamento materno exclusivo nos primeiros 6 meses — além de ser padrão-ouro nutricional recomendado pela OMS e Sociedade Brasileira de Pediatria — reduz significativamente o custo mensal recorrente da família.',
    sources: [
      { name: 'Sociedade Brasileira de Pediatria (SBP) - Cuidados com o Recém-Nascido', url: 'https://www.sbp.com.br/' }
    ],
    extraFaqs: [
      { q: 'Como economizar com fraldas descartáveis sem perder qualidade?', a: 'Compre pacotes tamanho econômico/hiper em promoções por unidade calculando o preço por tira (evite comprar grande estoque de tamanho RN, pois o bebê cresce rápido nas primeiras semanas).' },
      { q: 'O plano de saúde do recém-nascido é gratuito nos primeiros dias?', a: 'Pela Lei nº 9.656/1998 (ANS), se o plano da mãe tiver cobertura obstétrica, o bebê tem direito a atendimento nos primeiros 30 dias após o parto e inscrição garantida sem carência se realizada dentro desse prazo de 30 dias.' },
      { q: 'As vacinas recomendadas pela SBP estão disponíveis gratuitamente no SUS?', a: 'A grande maioria das vacinas essenciais consta no Calendário Nacional do SUS (PNI); clínicas privadas oferecem versões combinadas acelulares ou vacinas complementares como Meningocócica B e ACWY conforme orientação pediátrica.' }
    ]
  }
};
