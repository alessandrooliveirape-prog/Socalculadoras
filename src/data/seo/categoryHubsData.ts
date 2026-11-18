export interface CategoryHubSeoContent {
  title: string;
  description: string;
  introduction: string;
  importance: string;
  methodology: string;
  practicalApplications: string[];
  faq: { q: string; a: string }[];
}

export const CATEGORY_SEO_DATABASE: Record<string, CategoryHubSeoContent> = {
  financas: {
    title: 'Calculadoras Financeiras e de Negócios 2026 | Brasil Calculadoras',
    description: 'Otimize suas decisões financeiras pessoais e corporativas. Simule juros compostos, comparativo CLT vs PJ, margem de lucro, markup, DAS MEI, empréstimos Price e retorno (ROI).',
    introduction: 'A gestão financeira de excelência é o alicerce tanto da saúde econômica familiar quanto da sustentabilidade operacional de empresas no Brasil. Tomar decisões sobre investimentos, formação de preços, regimes tributários ou contratação de crédito exige mais do que intuição: requer modelagem quantitativa transparente e atualizada. Nossa central de Calculadoras Financeiras e de Negócios traduz equações de matemática financeira — como capitalização exponencial, sistema de amortização francês (Tabela Price), ponto de equilíbrio contábil e equivalência salarial CLT versus Pessoa Jurídica — em relatórios imediatos e didáticos. Cada ferramenta considera a realidade econômica brasileira, incluindo parâmetros de taxa Selic, inflação medida pelo IPCA, regras do Simples Nacional e limites vigentes do MEI em 2026.',
    importance: 'Fazer projeções financeiras de forma empírica ou em planilhas improvisadas eleva o risco de erros de precificação, contratação de juros abusivos e ilusão monetária diante da inflação. Quando um empreendedor confunde margem de lucro com markup, pode vender abaixo do ponto de equilíbrio e corroer o capital de giro sem perceber. Da mesma forma, um investidor que avalia apenas a taxa nominal sem descontar Imposto de Renda e IPCA superestima seu ganho real. O uso de simuladores calibrados garante previsibilidade de caixa, protege o patrimônio contra perdas inflacionárias e permite comparar cenários lado a lado antes de assinar qualquer contrato bancário, trabalhista ou societário. Em empresas de pequeno e médio porte, revisar mensalmente a estrutura de custos fixos e variáveis em conjunto com impostos do regime tributário adotado evita armadilhas de liquidez e proporciona clareza para negociar prazos com fornecedores, remuneração variável de sócios e linhas de crédito mais baratas junto às instituições financeiras.',
    methodology: 'Nossos algoritmos financeiros aplicam convenções padrão adotadas pelo Banco Central do Brasil, CVM e literatura contábil nacional. Operações de crédito e parcelamento utilizam capitalização composta com cálculo exato do Custo Efetivo Total implícito, enquanto simuladores de negócios separam custos fixos estruturais, custos variáveis unitários e carga tributária sobre o faturamento bruto. Todos os cálculos rodam localmente no navegador do usuário, preservando sigilo absoluto sobre dados salariais, receitas e orçamentos.',
    practicalApplications: [
      'Projetar o acúmulo patrimonial de longo prazo em renda fixa, Tesouro Direto e aportes recorrentes mensais descontando a inflação.',
      'Comparar propostas de emprego CLT versus contrato PJ (Simples Nacional Anexo III/V ou MEI) contabilizando 13º, férias, FGTS e impostos.',
      'Formar preços de venda no varejo e e-commerce calculando markup multiplicador, margem líquida e ponto de equilíbrio em unidades.',
      'Auditar financiamentos e empréstimos pessoais para identificar eventuais cobranças acima da taxa média de mercado divulgada pelo BACEN.',
      'Dimensionar capital de giro mínimo para cobrir descasamentos entre prazo médio de recebimento e vencimento de fornecedores.'
    ],
    faq: [
      {
        q: 'Qual a diferença prática entre margem de lucro e markup?',
        a: 'A margem de lucro mede qual percentual do preço final de venda sobra como ganho após pagar custos e despesas, variando sempre abaixo de 100%. Já o markup é um índice multiplicador aplicado sobre o custo de aquisição ou produção para formar o preço de venda, podendo superar 100%.'
      },
      {
        q: 'As calculadoras financeiras consideram a legislação tributária brasileira?',
        a: 'Sim. Nossos simuladores incorporam parâmetros nacionais vigentes em 2026, como tabela regressiva de Imposto de Renda para aplicações financeiras, alíquotas do Simples Nacional, teto e contribuição DAS MEI com base no salário mínimo vigente e faixas do Lucro Presumido.'
      },
      {
        q: 'Como avaliar se um rendimento supera a inflação?',
        a: 'Para apurar a taxa de juros real, aplica-se a equação de Fisher: (1 + taxa nominal) / (1 + inflação) - 1. Se um investimento rende 11% líquidos no ano e o IPCA foi de 4,5%, o ganho real de poder de compra é de aproximadamente 6,22%, e não 6,5%.'
      },
      {
        q: 'Por que o comparador CLT vs PJ inclui férias e 13º no cálculo?',
        a: 'No regime CLT, o profissional recebe 13º salário, adicional de 1/3 de férias e depósito mensal de 8% de FGTS além do salário nominal. Sem contabilizar essas provisões anuais e os custos de contabilidade e impostos da pessoa jurídica, a comparação ficaria distorcida.'
      },
      {
        q: 'Meus dados financeiros são enviados para algum servidor ao simular?',
        a: 'Não. Todo o processamento matemático acontece exclusivamente na memória do seu navegador (Client-Side), sem armazenamento em banco de dados externo.'
      }
    ]
  },
  profissoes: {
    title: 'Calculadoras Trabalhistas, CLT e Profissões 2026 | Brasil Calculadoras',
    description: 'Simulação completa de direitos trabalhistas e honorários profissionais. Calcule rescisão CLT, 13º salário, férias, horas extras, FGTS, INSS 2026, IRRF, seguro-desemprego e faltas.',
    introduction: 'A legislação trabalhista brasileira, estruturada pela Consolidação das Leis do Trabalho (CLT), pela Constituição Federal e por leis previdenciárias e tributárias complementares, possui regras específicas de proporcionalidade, incidências cruzadas e tabelas progressivas que mudam anualmente. Tanto trabalhadores que desejam conferir seu holerite e Termo de Rescisão (TRCT) quanto profissionais de Recursos Humanos, contadores e freelancers encontram nesta seção ferramentas auditadas para 2026. Além dos direitos laborais tradicionais — como rescisão sem justa causa, décimo terceiro, férias vendidas (abono pecuniário), adicional noturno com hora fictícia reduzida, periculosidade, insalubridade e reflexo de faltas no DSR — a categoria reúne calculadoras de precificação para autônomos e profissões liberais.',
    importance: 'Pequenos equívocos na aplicação da tabela progressiva do INSS, na dedução por dependentes do IRRF ou no cálculo do Descanso Semanal Remunerado (DSR) sobre horas extras geram passivos trabalhistas para empresas e prejuízos financeiros diretos para o empregado. Da mesma forma, um profissional autônomo — seja advogado, médico plantonista, professor, tradutor, fotógrafo ou desenvolvedor freelancer — precisa precificar sua hora técnica e diária considerando encargos e tempo produtivo útil. Conferir valores previamente proporciona segurança em negociações, acordos e planejamento mensal.',
    methodology: 'As rotinas trabalhistas implementam as faixas progressivas vigentes de INSS (alíquotas de 7,5%, 9%, 12% e 14% aplicadas por fatiamento salarial até o teto previdenciário), deduções oficiais do IRRF com parcela a deduzir, comparação automática com o desconto simplificado mensal e abatimento por dependente. Também aplicamos a regra do divisor 30 para mensalistas (Art. 64 da CLT), o divisor 220 para jornada padrão de 44 horas semanais, contagem de avos de férias e 13º salário por fração igual ou superior a 15 dias trabalhados no mês, projeção do aviso prévio proporcional (Lei 12.506/2011) e redução da hora noturna urbana para 52 minutos e 30 segundos (Art. 73 da CLT), mantendo total rastreabilidade entre proventos, encargos e líquidos.',
    practicalApplications: [
      'Conferir valores líquidos e brutos de rescisão contratual em dispensa sem justa causa, pedido de demissão ou acordo consensual do Art. 484-A da CLT.',
      'Simular a 1ª e a 2ª parcelas do 13º salário e calcular férias com ou sem venda de 10 dias (abono pecuniário isento de INSS e IRRF).',
      'Apurar o valor exato da hora extra a 50% e 100%, adicional noturno urbano, periculosidade (30%) e insalubridade (10%, 20% ou 40%).',
      'Calcular descontos oficiais de INSS, IRRF, vale-transporte (limite legal de 6%) e impacto de faltas injustificadas nas férias conforme o Art. 130 da CLT.',
      'Estimar parcelas do Seguro-Desemprego e definir honorários, diárias freelancer e valor de hora-aula com previsibilidade de receita.'
    ],
    faq: [
      {
        q: 'Como funciona o desconto progressivo do INSS na folha de pagamento?',
        a: 'Desde a Reforma da Previdência, a alíquota não é mais aplicada de forma cheia sobre todo o salário. Cada faixa salarial sofre apenas a porcentagem correspondente àquela fatia (7,5%, 9%, 12% ou 14% até o teto), reduzindo a alíquota efetiva real.'
      },
      {
        q: 'Quem pede demissão tem direito à multa de 40% do FGTS e Seguro-Desemprego?',
        a: 'Não. No pedido de demissão por iniciativa do empregado, permanecem devidos o saldo de salário, 13º proporcional e férias vencidas/proporcionais com 1/3, mas não há multa de 40%, saque imediato do FGTS nem acesso ao Seguro-Desemprego.'
      },
      {
        q: 'Como a hora noturna reduzida aumenta o adicional noturno?',
        a: 'Para o trabalho urbano entre 22h e 5h, cada hora legal equivale a 52 minutos e 30 segundos. Assim, 7 horas corridas no relógio são pagas como 8 horas noturnas (fator 60 / 52,5 = 1,1428), somadas ao acréscimo mínimo de 20% sobre a hora normal.'
      },
      {
        q: 'O abono pecuniário (venda de 10 dias de férias) sofre desconto de Imposto de Renda?',
        a: 'Não. Tanto o valor dos 10 dias convertidos em dinheiro quanto o terço constitucional incidente sobre esse abono possuem natureza indenizatória pela CLT e são isentos de desconto de INSS e IRRF.'
      },
      {
        q: 'As calculadoras substituem a homologação contábil do RH ou sindicato?',
        a: 'As ferramentas servem para conferência educativa e simulação preliminar. Convenções coletivas de trabalho (CCT) podem estabelecer adicionais superiores ao mínimo da CLT, devendo ser verificadas junto ao sindicato ou contador.'
      }
    ]
  },
  saude: {
    title: 'Calculadoras de Saúde, Metabolismo, Dietas e Bem-Estar | Brasil Calculadoras',
    description: 'Acompanhe indicadores biométricos e nutricionais com base científica. Calcule IMC, Taxa Metabólica Basal (TMB), hidratação diária, gasto calórico, macros, sono e gestação.',
    introduction: 'Cuidar da saúde física e metabólica de maneira sustentável exige referências quantitativas claras em vez de dietas restritivas arbitrárias. Nossa central de Calculadoras de Saúde & Dietas reúne instrumentos baseados em equações consolidadas pela Organização Mundial da Saúde (OMS), fisiologia do exercício e literatura nutricional para ajudar você a compreender seu gasto energético diário, faixa de peso recomendada, necessidade hídrica e distribuição equilibrada de macronutrientes. Além de parâmetros voltados ao condicionamento físico — como frequência cardíaca alvo de treino e gasto calórico por modalidade — incluímos ferramentas de ciclo circadiano de sono, acompanhamento preliminar de pressão arterial e idade gestacional.',
    importance: 'Estabelecer metas calóricas sem conhecer a própria Taxa Metabólica Basal (TMB) leva frequentemente a déficits severos que provocam perda de massa muscular, fadiga e efeito rebote, ou a superávits exagerados com acúmulo indesejado de gordura. Da mesma forma, hidratar-se apenas quando surge a sede já indica um quadro inicial de desidratação que compromete concentração e desempenho esportivo. Mensurar esses indicadores cria um ponto de partida objetivo e auditável para conversar com médicos, nutricionistas clínicos e profissionais de educação física, ajustando periodicamente a estratégia nutricional conforme a evolução da composição corporal, nível de estresse, qualidade do sono e intensidade dos treinos. Em vez de seguir dietas genéricas ou treinos em intensidades aleatórias, o acompanhamento regular dessas métricas favorece a adesão sustentável a hábitos saudáveis, preserva a massa magra durante processos de emagrecimento e promove equilíbrio metabólico e cardiovascular duradouro ao longo de todas as fases da vida.',
    methodology: 'As estimativas biométricas utilizam modelos matemáticos e fisiológicos amplamente validados na literatura clínica: índice de Quetelet (massa dividida pelo quadrado da estatura em metros) para classificação do IMC segundo faixas da OMS, equações preditivas de Mifflin-St Jeor e Harris-Benedict para Taxa Metabólica Basal ajustadas pelo fator de atividade física (TDEE), distribuição percentual e gramatura calórica de macronutrientes (4 kcal/g para proteínas e carboidratos e 9 kcal/g para lipídios), equivalentes metabólicos de tarefa (MET) para gasto energético em exercícios físicos, fórmula de frequência cardíaca máxima por faixa etária com zonas aeróbica e anaeróbica, hidratação ponderada por massa corporal em mililitros por quilograma, relação cintura-quadril para risco cardiometabólico e regra cronobiológica de ciclos completos de sono de 90 minutos acrescidos de latência média para adormecer.',
    practicalApplications: [
      'Avaliar o Índice de Massa Corporal (IMC) junto à relação cintura-altura e percentual estimado de gordura corporal.',
      'Calcular a Taxa Metabólica Basal (TMB) e o gasto calórico diário total para estruturar metas de emagrecimento ou hipertrofia.',
      'Converter a meta calórica diária em gramas de carboidratos, proteínas e gorduras saudáveis na divisão de macronutrientes.',
      'Definir a meta diária de ingestão de água em litros e copos considerando peso corporal, intensidade de treino e clima.',
      'Planejar horários de sono em múltiplos de ciclos completos de 90 minutos e acompanhar semanas de gestação.'
    ],
    faq: [
      {
        q: 'O IMC sozinho é suficiente para avaliar se estou saudável?',
        a: 'Não isoladamente. O IMC é um excelente indicador populacional, mas não diferencia massa muscular de tecido adiposo. Atletas com alta massa magra podem apresentar IMC elevado com baixo percentual de gordura, razão pela qual vale combinar medidas de circunferência.'
      },
      {
        q: 'Qual a diferença entre Taxa Metabólica Basal (TMB) e Gasto Energético Total?',
        a: 'A TMB representa a energia gasta pelo corpo em repouso absoluto durante 24 horas para manter órgãos vitais funcionando. Ao multiplicar a TMB pelo fator de atividade física diária, obtém-se o Gasto Energético Total (TDEE).'
      },
      {
        q: 'Como calcular o gasto calórico de um exercício usando o índice MET?',
        a: 'O Equivalente Metabólico (MET) mede a intensidade da atividade comparada ao repouso. A fórmula padrão calcula: Calorias = (MET × 3,5 × Peso em kg / 200) × Duração em minutos.'
      },
      {
        q: 'Beber 2 litros de água por dia serve para todo mundo?',
        a: 'Dois litros é uma média genérica. A recomendação técnica individualizada gira em torno de 35 ml por quilo de peso corporal ao dia, podendo aumentar em dias muito quentes ou durante treinos com sudorese intensa.'
      },
      {
        q: 'Os resultados das calculadoras de saúde têm valor de diagnóstico clínico?',
        a: 'Não. Todas as ferramentas possuem finalidade exclusivamente educativa e orientativa, não substituindo avaliação médica, exames laboratoriais ou prescrição dietética individualizada por nutricionista.'
      }
    ]
  },
  matematica: {
    title: 'Calculadoras Matemáticas, Geometria e Álgebra Online | Brasil Calculadoras',
    description: 'Resolva problemas escolares, vestibulares e profissionais com rapidez. Regra de três, porcentagem, Bhaskara, Pitágoras, fatorial, média ponderada, áreas e razão áurea.',
    introduction: 'A matemática aplicada sustenta desde operações cotidianas — como calcular descontos no varejo, dividir lucros entre sócios e ajustar receitas proporcionais — até resoluções acadêmicas exigidas no Ensino Médio, ENEM, concursos públicos e cursos de engenharia e design. Nossa seção de Matemática & Escola reúne calculadoras didáticas que executam instantaneamente operações de aritmética proporcional, geometria plana, álgebra de segundo grau, potenciação, radiciação e análise combinatória básica. Também incluímos utilitários de análise textual (contagem de palavras, caracteres e tempo de leitura) e cálculo de Proporção Áurea para projetos visuais.',
    importance: 'Na resolução de listas de exercícios, conferência de gabaritos ou dimensionamento rápido em projetos técnicos, erros de sinal em discriminantes, inversão indevida de grandezas na regra de três ou arredondamentos precoces comprometem toda a cadeia de resultados. Dispor de ferramentas que exibem resultados exatos com múltiplas casas decimais acelera a conferência pedagógica, reforça o entendimento estrutural das fórmulas clássicas e evita equívocos custosos em decisões comerciais, orçamentos industriais e dimensionamentos de engenharia. Ao apresentar não apenas o número final isolado, mas também passos intermediários como o discriminante Delta na equação quadrática, o fator multiplicativo de porcentagem, a diferença entre grandezas diretas e inversas ou a proporção societária integralizada, os simuladores funcionam como um laboratório didático aberto para estudantes de ensino fundamental, médio e superior, professores e profissionais técnicos. Além disso, permitem testar variações rápidas em planilhas, revisar questões do ENEM e validar cálculos de medidas geométricas em projetos cotidianos.',
    methodology: 'As calculadoras matemáticas aplicam algoritmos determinísticos em ponto flutuante de dupla precisão (padrão IEEE 754), tratando explicitamente casos de contorno matemáticos, como coeficientes nulos ou degenerados na equação de segundo grau (discriminante Delta negativo com aviso de raízes complexas, nulo para raiz dupla ou positivo para duas raízes reais distintas), divisão segura por zero com mensagens educativas e diferenciação rigorosa entre grandezas diretamente e inversamente proporcionais na regra de três simples e composta. Nos módulos geométricos e algébricos, empregamos constante Pi com precisão dupla para áreas, perímetros, volumes e circunferências, teorema de Pitágoras com validação de catetos e hipotenusa, decomposição e fatoração para MMC e MDC pelo algoritmo euclidiano, potências, raízes de índice arbitrário, logaritmos em bases decimais, naturais e customizadas e cálculo de fatoriais iterativos sem risco de estouro de pilha.',
    practicalApplications: [
      'Resolver regras de três diretas e inversas para escalas, consumo, produtividade de máquinas e conversão de grandezas.',
      'Calcular acréscimos, descontos e variações percentuais rápidas no comércio e orçamento doméstico.',
      'Verificar raízes reais e discriminante Delta pela fórmula de Bhaskara, além de catetos e hipotenusa pelo Teorema de Pitágoras.',
      'Apurar médias ponderadas escolares e dividir lucros societários proporcionalmente ao capital integralizado por cada sócio.',
      'Dimensionar layouts harmônicos, tipografia e peças gráficas com base na razão áurea (φ ≈ 1,618) e analisar textos para SEO/redações.'
    ],
    faq: [
      {
        q: 'Como saber se uma regra de três é direta ou inversa?',
        a: 'Ela é direta quando o aumento de uma grandeza provoca o aumento proporcional da outra (mais horas trabalhadas, maior produção). É inversa quando aumentar uma grandeza reduz a outra na mesma razão (mais velocidade média, menor tempo de viagem).'
      },
      {
        q: 'O que acontece na fórmula de Bhaskara quando o Delta é negativo?',
        a: 'Quando o discriminante (Δ = b² - 4ac) é menor que zero, a equação do segundo grau não possui raízes dentro do conjunto dos números reais, indicando que a parábola não intercepta o eixo horizontal x.'
      },
      {
        q: 'Qual a diferença entre porcentagem de aumento e variação percentual?',
        a: 'Um aumento de 20% multiplica o valor inicial por 1,20. Já a variação percentual compara dois valores conhecidos pela fórmula [(Final - Inicial) / Inicial] × 100.'
      },
      {
        q: 'Para que serve a Proporção Áurea (φ = 1,618) na prática?',
        a: 'Em design gráfico, arquitetura e UI/UX, dividir dimensões pela razão áurea cria escalas tipográficas, margens, grades e logotipos com equilíbrio visual naturalmente agradável ao olho humano.'
      },
      {
        q: 'Como calcular média ponderada quando cada prova tem um peso diferente?',
        a: 'Multiplica-se cada nota pelo seu respectivo peso, somam-se todos esses produtos e divide-se o resultado pela soma total dos pesos atribuídos.'
      }
    ]
  },
  imobiliario: {
    title: 'Calculadoras Imobiliárias: SAC vs Price, Aluguel, ITBI e Cap Rate | Brasil Calculadoras',
    description: 'Simuladores completos para compra, venda, locação e investimento em imóveis. Compare financiamento SAC vs Price, amortização extra, alugar vs comprar, CET, ITBI, IPTU e Cap Rate.',
    introduction: 'A aquisição de um imóvel residencial, a escolha entre financiar ou permanecer no aluguel e a análise de retorno de propriedades para locação representam decisões financeiras de altíssimo impacto patrimonial que frequentemente abrangem horizontes de 10 a 35 anos. Nossa central Imobiliária & Aluguel reúne 10 simuladores especializados para apoiar compradores, inquilinos, proprietários, corretores e investidores brasileiros. É possível comparar lado a lado a evolução das parcelas nos sistemas SAC e Tabela Price, estimar quanto tempo e juros são economizados com amortizações extraordinárias, provisionar despesas cartoriais e de ITBI na escritura, calcular o rendimento líquido anual (Cap Rate) e realizar rateios proporcionais de IPTU e reformas condominiais.',
    importance: 'No crédito imobiliário, diferenças aparentemente modestas na taxa de juros anual ou na escolha do sistema de amortização podem significar dezenas ou centenas de milhares de reais em juros pagos ao longo do contrato habitacional de 20 ou 30 anos. Da mesma forma, investidores que avaliam apenas o aluguel bruto sem abater vacância média, taxa de administração imobiliária, condomínio extraordinário e tributos calculam mal a rentabilidade líquida do imóvel frente à renda fixa. Simular cada variável antes da assinatura no cartório protege seu capital, revela oportunidades de amortização com FGTS e aumenta drasticamente seu poder de negociação junto ao banco e ao vendedor.',
    methodology: 'As equações imobiliárias modelam mês a mês fluxos de Sistema de Amortização Constante (SAC, em que a cota de amortização do principal permanece fixa enquanto os juros decrescem sobre o saldo devedor remanescente) e de Sistema Francês de Amortização (Tabela Price, com parcelas nominais constantes e composição invertida entre juros e principal ao longo do contrato). Incluem ainda recálculo de redução de prazo ou de prestação em amortizações extraordinárias via FGTS ou recursos próprios, comparação do custo de oportunidade líquido entre alugar e financiar imóvel considerando rendimento da entrada e valorização patrimonial estimada, incidência de alíquotas municipais usuais de ITBI sobre o valor venal ou de transação e rateio proporcional de despesas condominiais e IPTU por dias corridos entre comprador e vendedor.',
    practicalApplications: [
      'Comparar o total de juros e o valor da primeira e última parcela entre os sistemas SAC e Tabela Price antes de contratar financiamento.',
      'Simular quanto meses de contrato são eliminados ao utilizar saldo do FGTS ou 13º salário para amortização extraordinária.',
      'Decidir financeiramente entre comprar um imóvel financiado ou morar de aluguel investindo a diferença e o valor da entrada.',
      'Calcular o Cap Rate líquido real de imóveis comerciais e residenciais para comparar com títulos públicos e Fundos Imobiliários.',
      'Provisionar ITBI e emolumentos de cartório na compra, reajustar contratos por IPCA/IGP-M e dividir IPTU proporcional na venda.'
    ],
    faq: [
      {
        q: 'Por que o sistema SAC costuma pagar menos juros totais que a Tabela Price?',
        a: 'No SAC, a amortização da dívida é constante desde o primeiro mês, reduzindo o saldo devedor mais rapidamente e gerando menos juros ao longo do tempo. Na Tabela Price, as parcelas iniciais pagam principalmente juros e amortizam pouco principal.'
      },
      {
        q: 'Amortizar parcelas extras pelo prazo ou pelo valor da prestação vale mais a pena?',
        a: 'Na maioria dos casos, escolher a redução do prazo do financiamento gera economia muito maior de juros totais, pois elimina meses inteiros de incidência de juros e seguros habitacionais (MIP e DFI).'
      },
      {
        q: 'Quanto reservar para ITBI, escritura e registro de imóvel?',
        a: 'Em média, recomenda-se provisionar entre 3,5% e 5% do valor do imóvel para cobrir o ITBI municipal (geralmente de 2% a 3%), escritura pública (quando aplicável) e custas do cartório de registro de imóveis.'
      },
      {
        q: 'O que é considerado um bom Cap Rate líquido no Brasil?',
        a: 'Para imóveis residenciais tradicionais, um Cap Rate líquido anual entre 5% e 7% acima das despesas costuma ser o padrão de mercado, enquanto imóveis comerciais ou bem localizados podem atingir patamares superiores, sem contar a valorização do imóvel.'
      },
      {
        q: 'Como funciona a divisão do IPTU quando o imóvel é vendido no meio do ano?',
        a: 'Por praxe contratual, o vendedor arca com os meses de posse até a entrega das chaves ou lavratura da escritura, e o comprador assume os meses restantes do exercício fiscal.'
      }
    ]
  },
  veiculos: {
    title: 'Calculadoras de Veículos: Financiamento CDC, Move Brasil, Combustível e IPVA | Brasil Calculadoras',
    description: 'Simuladores automotivos completos para motoristas, compradores e gestores de frota. Compare álcool vs gasolina, financiamento CDC e Move Brasil, IPVA, depreciação FIPE e custo por km.',
    introduction: 'Ter um automóvel, motocicleta ou utilitário envolve muito mais despesas do que apenas a parcela de compra ou o valor abastecido na bomba. Tributação estadual de IPVA, desvalorização anual na Tabela FIPE, revisões preventivas, seguro automotivo, pedágios e eficiência energética entre etanol, gasolina e veículos elétricos determinam o verdadeiro Custo Total de Propriedade (TCO). Nesta categoria de Veículos & Combustível, reunimos 14 calculadoras práticas para ajudar motoristas particulares, profissionais de aplicativo (Uber, 99, entregas) e caminhoneiros a simular financiamentos CDC e linhas subsidiadas como o Move Brasil, planejar viagens e economizar em cada quilômetro rodado.',
    importance: 'Subestimar custos ocultos como depreciação de 8% a 15% ao ano, juros compostos de financiamentos longos ou a diferença energética entre etanol e gasolina pode comprometer severamente o orçamento doméstico ou tornar inviável a rentabilidade de motoristas autônomos. Calcular com exatidão o custo total por quilômetro rodado e comparar taxas bancárias efetivas antes de fechar negócio na concessionária evita endividamento excessivo e orienta escolhas patrimoniais mais inteligentes entre manter o carro atual, migrar para seminovos mais econômicos ou adotar veículos híbridos e elétricos. Para profissionais que utilizam o automóvel ou a motocicleta como instrumento direto de trabalho, como motoristas de aplicativo, taxistas e representantes externos, planilhar combustível, IPVA estadual, seguro e revisões programadas garante que a tarifa por viagem pague todos os custos operacionais e deixe margem líquida real no fim do mês.',
    methodology: 'Nossos simuladores aplicam a regra clássica de paridade energética de 70% entre etanol hidratado e gasolina comum, permitindo também calibragem personalizada conforme o rendimento real obtido pelo motorista em ciclo urbano ou rodoviário. Calculam o custo financeiro e energético por quilômetro rodado tanto para motores a combustão (km/L) quanto para veículos híbridos e 100% elétricos (kWh/km e tarifa residencial ou de eletroposto), implementam a Tabela Price com IOF e CET aproximado para financiamentos CDC, aplicam faixas de descontos e condições usuais do programa Move Brasil para renovação de frota e PCD, projetam curvas anuais de depreciação por categoria veicular e determinam o imposto anual (IPVA) aplicando alíquotas estaduais diferenciadas por tipo de combustível sobre o valor venal referenciado na tabela FIPE.',
    practicalApplications: [
      'Decidir na bomba do posto se compensa abastecer com etanol ou gasolina com base na razão de preço de 70%.',
      'Comparar o gasto mensal e anual de energia elétrica de um carro elétrico contra um veículo a combustão equivalente.',
      'Simular prestações, juros totais e economia potencial em financiamentos CDC tradicionais e na linha Move Brasil.',
      'Estimar o valor do IPVA anual (à vista ou parcelado), prêmio médio de seguro por perfil de condutor e depreciação futura na Tabela FIPE.',
      'Planejar custos totais de viagens rodoviárias dividindo combustível e pedágios entre passageiros e calculando reembolso empresarial por km.'
    ],
    faq: [
      {
        q: 'A regra dos 70% entre álcool e gasolina vale para todos os carros flex?',
        a: 'Os 70% representam uma média consolidada de poder calorífico. Motores flex mais modernos podem alcançar rendimento de 72% a 74% com etanol; por isso, medir a autonomia real do seu veículo na cidade e na estrada refina ainda mais a decisão.'
      },
      {
        q: 'Como funciona o cálculo de economia de um carro elétrico?',
        a: 'Multiplica-se a capacidade útil da bateria em kWh pelo valor da tarifa elétrica (R$/kWh) e divide-se pela autonomia total em quilômetros para achar o custo por km rodado, comparando-o diretamente ao custo por km da gasolina.'
      },
      {
        q: 'O que é a alienação fiduciária no financiamento CDC de veículos?',
        a: 'É a garantia bancária na qual o carro ou moto fica registrado em nome do comprador, porém vinculado à financeira até a quitação integral de todas as parcelas do contrato.'
      },
      {
        q: 'Posso antecipar parcelas de financiamento de carro com desconto?',
        a: 'Sim. O Código de Defesa do Consumidor assegura a redução proporcional dos juros ao quitar prestações antecipadamente, geralmente de trás para frente no carnê.'
      },
      {
        q: 'O que compõe o cálculo de reembolso por quilômetro rodado corporativo?',
        a: 'Além do combustível gasto no trajeto, uma taxa justa por km rodado considera proporcionalmente desgaste de pneus, trocas de óleo, revisões preventivas, seguro e depreciação do veículo.'
      }
    ]
  },
  estatistica: {
    title: 'Calculadoras de Estatística, Probabilidade e Métricas SaaS | Brasil Calculadoras',
    description: 'Ferramentas estatísticas e analíticas para pesquisadores, estudantes e gestores de crescimento. Calcule desvio padrão, margem de erro, intervalo de confiança, CAC vs LTV, churn e funil.',
    introduction: 'A estatística descritiva e inferencial transforma conjuntos brutos de números em conhecimento confiável para pesquisas científicas, controle de qualidade, estudos acadêmicos e métricas de crescimento em negócios digitais. Nossa central de Estatística & Métricas integra em um só ambiente cálculos clássicos de dispersão e posição — como desvio padrão amostral, variância, média, mediana, moda, análise combinatória e probabilidade — com indicadores essenciais de gestão orientada a dados (Data-Driven), como taxa de Churn, crescimento mês a mês (MoM), eficiência de funil de vendas, tamanho amostral e relação LTV/CAC.',
    importance: 'Tomar decisões olhando apenas médias aritméticas simples ou amostras pequenas sem margem de erro calculada pode induzir a conclusões completamente equivocadas devido a valores extremos (outliers) ou ruído aleatório. Da mesma forma, startups e lojas recorrentes que acompanham o CAC (Custo de Aquisição de Clientes) isolado do LTV (Lifetime Value) e da evasão mensal (Churn) frequentemente escalam prejuízos operacionais. A análise estatística rigorosa dá lastro científico, auditabilidade e previsibilidade às decisões corporativas, acadêmicas e mercadológicas. Quando equipes de produto, pesquisa de mercado e gestão comercial dominam medidas de dispersão, intervalos de confiança e eficiência de aquisição versus retenção, conseguem separar variações sazonais normais de tendências estruturais verdadeiras, dimensionar amostras de pesquisa sem desperdício de orçamento e otimizar testes A/B com significância estatística sólida em campanhas digitais, estudos acadêmicos, pesquisas eleitorais e processos industriais de controle de qualidade, garantindo relatórios gerenciais muito mais confiáveis para a diretoria.',
    methodology: 'As rotinas estatísticas distinguem explicitamente estimadores populacionais (denominador N) e estimadores amostrais não-viesados com correção de Bessel (denominador n menos 1) no cômputo de variância, desvio padrão e coeficiente de variação, além de ordenar séries numéricas para cálculo exato de mediana, moda e amplitude. Para dimensionamento de pesquisas, aplicam escores Z padronizados da distribuição normal (1,645 para 90%, 1,96 para 95% e 2,576 para 99% de nível de confiança) combinados com fator de correção para população finita e proporção esperada conservadora de 50%. Os módulos de probabilidade implementam arranjos, permutações e combinações sem repetição via fatoriais reduzidos, enquanto os indicadores de negócio apuram taxa de retenção, churn mensal, LTV pela razão ARPU sobre taxa de cancelamento e relação LTV/CAC para sustentabilidade comercial.',
    practicalApplications: [
      'Analisar a variabilidade e consistência de séries numéricas por meio da média, mediana, moda, variância e desvio padrão amostral.',
      'Calcular a margem de erro e o intervalo de confiança de pesquisas eleitorais, de mercado ou de satisfação (NPS).',
      'Resolver problemas de arranjos, combinações e probabilidades simples para concursos, estatística universitária e análise de risco.',
      'Monitorar a saúde de negócios recorrentes (SaaS e assinaturas) medindo Churn Rate mensal, crescimento MoM e funil de conversão.',
      'Avaliar a sustentabilidade comercial comparando o Custo de Aquisição de Cliente (CAC) frente ao Valor Vitalício (LTV).'
    ],
    faq: [
      {
        q: 'Por que o desvio padrão amostral divide a soma dos quadrados por (n - 1) em vez de n?',
        a: 'A divisão por (n - 1), conhecida como correção de Bessel, corrige a subestimação da variabilidade populacional quando trabalhamos apenas com uma amostra extraída de uma população maior.'
      },
      {
        q: 'Quando devo usar a mediana em vez da média?',
        a: 'Sempre que o conjunto de dados contiver valores muito discrepantes (outliers), como salários ou preços de imóveis. A mediana representa o valor central ordenado e não é distorcida pelos extremos.'
      },
      {
        q: 'Qual a diferença entre arranjo e combinação na análise combinatória?',
        a: 'No arranjo, a ordem dos elementos escolhidos altera o resultado (ex: pódio de corrida ou senhas). Na combinação, a ordem não importa (ex: formação de comissões ou jogos numéricos).'
      },
      {
        q: 'Qual é uma relação saudável entre LTV e CAC em negócios digitais?',
        a: 'O benchmark de mercado considera saudável uma razão LTV/CAC igual ou superior a 3:1, indicando que o cliente gera ao menos três vezes mais receita ao longo do relacionamento do que custou para ser adquirido.'
      },
      {
        q: 'O que significa dizer que uma pesquisa tem nível de confiança de 95%?',
        a: 'Significa que, se o mesmo método amostral fosse repetido 100 vezes de forma independente na mesma população, em cerca de 95 delas o parâmetro real estaria contido dentro do intervalo calculado.'
      }
    ]
  },
  juridico: {
    title: 'Calculadoras Jurídicas, Tributárias e Fiscais | Brasil Calculadoras',
    description: 'Simuladores jurídicos e fiscais para cálculos preliminares. Apure imposto de criptomoedas (GCAP), juros de mora, correção monetária, Simples Nacional, ISS, ganho de capital e inventário.',
    introduction: 'O ordenamento jurídico e o sistema tributário brasileiro envolvem múltiplas camadas de atualização monetária, encargos moratórios, custas judiciais estaduais, partilhas patrimoniais e faixas de incidência fiscal sobre bens, serviços e ativos digitais. Nossa seção Jurídico & Impostos oferece ferramentas estruturadas para auxiliar cidadãos, advogados, contadores e investidores em simulações preliminares de cálculos cíveis, familiares, sucessórios e tributários. Entre os destaques estão o simulador de ganho de capital sobre criptomoedas (regra de isenção de R$ 35 mil mensais no GCAP), tabela regressiva de IR em renda fixa, alíquota efetiva do Simples Nacional e partilha de bens e inventário (ITCMD).',
    importance: 'O desconhecimento de prazos, limites legais de isenção tributária ou fórmulas progressivas de impostos frequentemente gera autuações fiscais, multas moratórias pesadas ou expectativas irreais em negociações de contratos, divórcios e inventários. Ter uma estimativa clara de quanto incide de ganho de capital em operações financeiras e criptoativos, qual a alíquota efetiva real dentro dos Anexos do Simples Nacional, como funciona o cálculo de meação e inventário ou quanto custa uma dívida em atraso com correção monetária e juros pro rata die permite agir preventivamente junto a contadores e advogados especializados. Simular cenários antes de alienar bens, emitir notas fiscais ou assinar acordos judiciais e extrajudiciais reduz passivos tributários imprevistos e amplia o poder de negociação das partes envolvidas.',
    methodology: 'As calculadoras utilizam parâmetros previstos diretamente na legislação tributária e civil brasileira vigente: aplicação das faixas progressivas dos Anexos do Simples Nacional sobre a Receita Bruta acumulada dos últimos 12 meses (RBT12) com dedução da parcela legal (Lei Complementar nº 123/2006), cálculo de fator R para enquadramento entre Anexo III e Anexo V, tabela regressiva oficial de Imposto de Renda Retido na Fonte para renda fixa e fundos (22,5% até 180 dias, 20% até 360 dias, 17,5% até 720 dias e 15% acima de 720 dias), verificação da faixa mensal de isenção de R$ 35.000,00 no ganho de capital em criptoativos e simulações orientativas baseadas no trinômio necessidade-possibilidade-proporcionalidade alimentar e no regime de comunhão parcial de bens para partilha patrimonial.',
    practicalApplications: [
      'Verificar se vendas mensais de criptomoedas superam o teto de isenção de R$ 35 mil e estimar o imposto devido via GCAP.',
      'Calcular a alíquota efetiva exata do Simples Nacional (Anexos I, II e III) com base no RBT12 acumulado e faturamento do mês.',
      'Apurar juros de mora pro rata die, multa contratual e atualização monetária de créditos e valores atrasados.',
      'Simular imposto sobre ganho de capital imobiliário (incluindo regra de imóvel único até R$ 440 mil), ISS sobre notas fiscais e IRRF de investimentos.',
      'Estimar custas iniciais de distribuição processual, ITCMD em inventários, meação em divórcios e projeções referenciais de pensão alimentícia.'
    ],
    faq: [
      {
        q: 'Como funciona o cálculo da alíquota efetiva no Simples Nacional?',
        a: 'Não se aplica a alíquota nominal da faixa diretamente. Multiplica-se a Receita Bruta dos últimos 12 meses (RBT12) pela alíquota nominal da faixa, subtrai-se a parcela a deduzir correspondente e divide-se novamente pelo RBT12.'
      },
      {
        q: 'A isenção de R$ 35 mil em criptomoedas vale por moeda ou pelo total do mês?',
        a: 'Vale para a soma de todas as alienações de criptoativos realizadas no mês-calendário, somando vendas em reais e permutas diretas entre diferentes criptomoedas.'
      },
      {
        q: 'Os cálculos de pensão alimentícia e custas judiciais têm valor oficial?',
        a: 'Não. No Direito de Família, a pensão é fixada pelo juiz analisando o binômio necessidade do alimentando e possibilidade do alimentante. Já as custas judiciais variam conforme regimentos anuais de cada Tribunal de Justiça estadual.'
      },
      {
        q: 'Qual a diferença entre correção monetária e juros de mora?',
        a: 'A correção monetária apenas repõe o poder de compra perdido pela inflação ao longo do tempo, enquanto os juros de mora remuneram o credor e penalizam o atraso no cumprimento da obrigação.'
      },
      {
        q: 'Como funciona a tabela regressiva do IR em renda fixa?',
        a: 'Quanto maior o prazo da aplicação, menor o imposto sobre o rendimento: 22,5% até 180 dias; 20% de 181 a 360 dias; 17,5% de 361 a 720 dias; e 15% acima de 720 dias.'
      }
    ]
  },
  utilitarios: {
    title: 'Calculadoras de Utilidades & Casa para o Dia a Dia | Brasil Calculadoras',
    description: 'Resolva cálculos cotidianos da casa e rotina em segundos. Dimensione BTUs de ar-condicionado, consumo de chuveiro e energia, tintas, pisos, divisão de conta e câmbio.',
    introduction: 'Pequenos problemas matemáticos do cotidiano doméstico — desde escolher a potência correta em BTUs de um aparelho de ar-condicionado até estimar quanto custa um banho de 15 minutos no chuveiro elétrico ou quantas latas de tinta e espaçadores de porcelanato comprar para reformar um cômodo — costumam gerar dúvidas práticas que impactam diretamente o bolso. A categoria Utilidades & Casa reúne 10 calculadoras rápidas desenhadas para transformar tarefas rotineiras em decisões precisas, evitando compras em excesso, desperdício de energia e surpresas no orçamento familiar.',
    importance: 'Um ar-condicionado subdimensionado para a área do quarto trabalha no limite do compressor sem resfriar o ambiente e eleva drasticamente a conta de luz; por outro lado, comprar tinta ou revestimento cerâmico sem descontar portas e janelas gera sobras caras. Da mesma forma, compreender o impacto mensal exato em reais da substituição de eletrodomésticos antigos por modelos Inverter, medir o gasto invisível de água em banhos prolongados ou comparar preços por unidade de peso no supermercado fortalece diretamente o orçamento doméstico ao longo do ano. Pequenos ajustes baseados em cálculo preciso — como escolher a capacidade térmica exata do climatizador para o ambiente, comprar tintas, pisos e materiais na quantidade planejada, controlar o gasto de água por minuto de banho ou respeitar tempos seguros de congelamento doméstico — somam economias recorrentes relevantes ao longo de doze meses sem abrir mão do conforto familiar. São ferramentas rápidas pensadas para decisões reais no momento da compra na loja ou no planejamento semanal da casa.',
    methodology: 'As ferramentas combinam fatores padronizados de engenharia residencial, física aplicada e normas técnicas brasileiras: dimensionamento térmico em BTUs partindo da carga base de 600 BTUs por metro quadrado para ambientes sombreados ou 800 BTUs sob incidência solar direta, com soma de carga adicional por ocupante adicional e equipamentos eletrônicos emissores de calor. Apuram consumo elétrico residencial em quilowatts-hora pela relação (Potência em Watts vezes horas diárias vezes dias de uso) dividida por 1.000, estimam cobertura de tintas considerando número de demãos e desconto de portas e janelas, calculam volume útil em litros de recipientes e caixas d água, convertem medidas culinárias por densidade padrão de ingredientes e aplicam diretrizes de conservação alimentar em refrigeração e congelamento doméstico conforme boas práticas sanitárias.',
    practicalApplications: [
      'Dimensionar a capacidade térmica em BTUs ideal de aparelhos de ar-condicionado considerando metragem, pessoas e eletrônicos.',
      'Comparar o custo mensal na fatura de energia entre dois eletrodomésticos e medir o gasto conjunto de água e luz por banho de chuveiro.',
      'Calcular área líquida de paredes para pintura (descontando portas e janelas) e quantidade de espaçadores para assentamento de pisos.',
      'Dividir contas de bar e restaurante com taxa de serviço opcional, planejar itens de festas/churrasco e acompanhar orçamento de supermercado.',
      'Realizar conversões rápidas entre moedas internacionais (BRL, USD, EUR, GBP) e verificar prazos seguros de conservação no freezer.'
    ],
    faq: [
      {
        q: 'Quantos BTUs por metro quadrado devo considerar para o ar-condicionado?',
        a: 'A regra prática padrão utiliza 600 BTUs por m² para ambientes com baixa incidência solar direta, somando 600 BTUs para cada pessoa adicional além da primeira e para cada equipamento eletrônico emissor de calor no cômodo.'
      },
      {
        q: 'Como calcular o gasto mensal em reais de um aparelho elétrico?',
        a: 'Multiplique a potência em Watts pelas horas de uso por dia e pelos dias do mês, divida por 1.000 para achar o consumo em kWh e multiplique pela tarifa em R$/kWh cobrada na sua conta de energia.'
      },
      {
        q: 'O conversor de moedas substitui a cotação bancária do momento da compra?',
        a: 'O conversor utiliza taxas referenciais para simulações rápidas de planejamento. Em operações reais de câmbio ou cartão internacional, bancos aplicam spread cambial e IOF vigente.'
      },
      {
        q: 'Por que a calculadora de pintura pede número de portas e janelas?',
        a: 'Descontar as áreas médias de portas e janelas evita superestimar o volume de tinta necessário, resultando em compras mais econômicas para duas demãos.'
      },
      {
        q: 'Alimentos duram mais em freezer dedicado do que no congelador da geladeira?',
        a: 'Sim. Freezers dedicados atingem temperaturas mais baixas e estáveis (geralmente -18 °C ou inferiores), preservando carnes e pescados por períodos muito maiores que congeladores simples de geladeiras convencionais.'
      }
    ]
  },
  aposentadoria: {
    title: 'Simuladores de Aposentadoria, INSS e Liberdade Financeira | Brasil Calculadoras',
    description: 'Planeje sua aposentadoria pública e independência financeira. Simule INSS, previdência privada PGBL/VGBL, viver de renda, reserva de emergência, SWR 4% e corrosão inflacionária.',
    introduction: 'Construir tranquilidade financeira para a terceira idade ou antecipar a independência financeira exige uma visão integrada entre previdência pública (INSS) e acumulação privada de patrimônio. Após a Reforma da Previdência (Emenda Constitucional nº 103/2019), o trabalhador brasileiro precisa equilibrar regras de transição por idade mínima e pontuação com estratégias individuais de poupança de longo prazo. Nossa categoria Aposentadoria & Futuro oferece 10 simuladores dedicados tanto ao planejamento do benefício previdenciário e correção de FGTS quanto à estruturação de previdência complementar, reserva de emergência, estudo da Taxa Segura de Retirada (SWR / Regra dos 4%) e projeção de perda do poder de compra pela inflação.',
    importance: 'Depender exclusivamente do teto ou do valor médio pago pelo Regime Geral de Previdência Social pode significar uma queda expressiva no padrão de vida no momento em que despesas com saúde e planos médicos tendem a crescer. Simultaneamente, deixar reservas paradas sem rendimento acima da inflação corrói silenciosamente décadas de esforço. Quantificar o patrimônio-alvo necessário para viver de renda passiva e o aporte mensal indispensável — já ajustado pela inflação projetada e pela alíquota correta de tributação na saída — torna o projeto de longo prazo tangível, disciplinado e mensurável ano a ano. Ao combinar simulações do tempo restante até as regras de transição do INSS, reservas de emergência líquidas e planos privados PGBL ou VGBL, cada trabalhador consegue identificar lacunas de poupança com décadas de antecedência, aproveitando o efeito exponencial dos juros compostos a favor da tranquilidade financeira familiar.',
    methodology: 'As calculadoras aplicam os requisitos constitucionais pós-Reforma da Previdência (Emenda Constitucional nº 103/2019), contemplando idade mínima progressiva, regras de transição por pontos e tempo de contribuição no Regime Geral de Previdência Social. Nos módulos privados e patrimoniais, comparam a tabela regressiva (que cai de 35% até o piso de 10% após 10 anos) com a tabela progressiva e a vantagem fiscal do PGBL limitada a 12% da renda bruta anual tributável, projetam saldos do FGTS com depósito mensal de 8% e rentabilidade base de 3% ao ano mais Taxa Referencial, resolvem equações logarítmicas de tempo até a independência financeira e aplicam a Taxa Segura de Retirada (regra dos 4% do Trinity Study ajustada para a realidade inflacionária e juros reais brasileiros).',
    practicalApplications: [
      'Projetar o montante líquido acumulado em previdência privada considerando aportes recorrentes, juros compostos e imposto regressivo de 10%.',
      'Calcular o capital total necessário para gerar uma renda passiva mensal vitalícia (Viver de Renda) com base na taxa real de retorno.',
      'Aplicar a Regra dos 4% (SWR) para estimar retiradas anuais e mensais sustentáveis sem esgotar o patrimônio na aposentadoria.',
      'Dimensionar a reserva de emergência ideal para 6 a 12 meses de despesas fixas e estimar a corrosão do dinheiro parado pela inflação.',
      'Calcular a idade ou prazo estimado até alcançar o marco de Liberdade Financeira combinando patrimônio atual, aportes e taxa real.'
    ],
    faq: [
      {
        q: 'Qual é a lógica da Regra dos 4% (Safe Withdrawal Rate) na aposentadoria?',
        a: 'Baseada em estudos históricos de carteiras diversificadas, a regra sugere que retirar 4% do patrimônio acumulado no primeiro ano de aposentadoria — reajustando o valor pela inflação nos anos seguintes — sustenta o padrão de vida por pelo menos 30 anos com baixo risco de exaustão.'
      },
      {
        q: 'Qual a vantagem tributária de longo prazo na previdência privada regressiva?',
        a: 'Na tabela regressiva definitiva, aplicações mantidas por mais de 10 anos passam a sofrer apenas 10% de Imposto de Renda no resgate, alíquota inferior aos 15% mínimos dos títulos tradicionais de renda fixa.'
      },
      {
        q: 'Como a inflação afeta o valor calculado para viver de renda?',
        a: 'Para não sofrer ilusão monetária, os cálculos de viver de renda e liberdade financeira devem usar sempre a taxa real de juros — isto é, o rendimento já descontada a inflação anual esperada.'
      },
      {
        q: 'Quanto devo manter na minha reserva de emergência antes de investir para aposentadoria?',
        a: 'Especialistas recomendam acumular entre 6 meses (para empregados CLT estáveis) e 12 meses (para autônomos, PJs e empresários) do custo de vida mensal básico em ativos de liquidez diária e baixíssimo risco.'
      },
      {
        q: 'O orçamento na aposentadoria realmente diminui?',
        a: 'Gastos com transporte diário e vestuário de trabalho costumam cair, porém mensalidades de planos de saúde por faixa etária e medicamentos frequentemente sobem. Nosso planejador equilibra exatamente esses dois efeitos.'
      }
    ]
  },
  agronegocio: {
    title: 'Calculadoras de Agronegócio, Pecuária e Agricultura de Precisão | Brasil Calculadoras',
    description: 'Ferramentas rurais para produtores, agrônomos e pecuaristas. Calcule produtividade de grãos, arrobas de gado de corte, conversão de alqueires, calagem de solo, ração e semeadura.',
    introduction: 'O agronegócio brasileiro combina tradição produtiva com gestão técnica rigorosa de custos por hectare, eficiência alimentar do rebanho e correção precisa de solo. Pequenas variações na densidade de plantio, na saturação por bases desejada na calagem ou na conversão entre alqueires regionais e hectares alteram significativamente o orçamento da safra. Nossa categoria Agronegócio & Campo reúne 6 simuladores projetados especialmente para a realidade rural brasileira, atendendo agricultores de soja e milho, pecuaristas de gado de corte, técnicos agrícolas e engenheiros agrônomos.',
    importance: 'Aplicar calcário em dose insuficiente limita o desenvolvimento radicular e trava a absorção de NPK pelas culturas; aplicar em excesso desperdiça frete, insumo e hora-máquina. Na pecuária de corte, estimar o rendimento de carcaça em arrobas e monitorar a autonomia do silo de ração previnem quebras de estoque no confinamento e melhoram o poder de barganha na negociação com frigoríficos. Da mesma forma, padronizar medidas regionais como alqueire paulista, alqueire mineiro ou goiano e alqueire baiano frente ao hectare métrico oficial evita litígios e prejuízos relevantes em contratos de arrendamento rural, partilhas familiares e compra e venda de propriedades produtivas. Integrar o planejamento de corretivos de solo, regulagem de plantadeiras pelo Peso de Mil Sementes, controle de suplementação no cocho e acompanhamento do rendimento frigorífico profissionaliza a gestão da porteira para dentro e amplia a rentabilidade por hectare safra após safra.',
    methodology: 'As equações rurais implementam métodos agronômicos consagrados pela Embrapa e pela literatura zootécnica e de extensão rural brasileira: método oficial da saturação por bases para cálculo da necessidade de calagem agrícola pela fórmula NC = CTC × (V2% - V1%) / PRNT, densidade de semeadura em quilogramas por hectare ajustada pela população alvo de plantas, Poder Germinativo e Peso de Mil Sementes (PMS), conversão comercial de produtividade em sacas padrão de 60 quilogramas descontando impurezas e umidade, apuração do rendimento líquido de carcaça bovina em arrobas de 15 quilogramas sobre o peso vivo na fazenda e fatores exatos de conversão entre hectares, metros quadrados, alqueire paulista (24.200 m²), alqueire mineiro/goiano (48.400 m²) e alqueire baiano.',
    practicalApplications: [
      'Converter rapidamente hectares em alqueire paulista (2,42 ha), alqueire mineiro/goiano (4,84 ha), alqueire baiano (9,68 ha) e m².',
      'Calcular a necessidade de calcário por hectare (t/ha) e volume total da fazenda a partir da análise de solo (CTC, V1%, V2% e PRNT).',
      'Regulagem teórica de plantadeiras calculando sementes por metro linear, quilos por hectare e número de sacos de 40 kg necessários.',
      'Medir a produtividade da lavoura de grãos em sacas de 60 kg por hectare, toneladas totais colhidas e receita bruta da safra.',
      'Projetar rendimento de arrobas por animal e faturamento total de lote de gado de corte, além da autonomia diária de silos de ração.'
    ],
    faq: [
      {
        q: 'Qual a diferença entre alqueire paulista, mineiro e baiano?',
        a: 'O alqueire paulista mede 24.200 m² (2,42 hectares); o alqueire mineiro, também usado em Goiás e parte do Centro-Oeste, tem 48.400 m² (4,84 hectares); e o alqueire baiano corresponde a 96.800 m² (9,68 hectares).'
      },
      {
        q: 'O que significa o PRNT na calculadora de calagem de solo?',
        a: 'PRNT é o Poder Relativo de Neutralização Total do calcário, informado na nota fiscal ou laudo do fornecedor. Quanto menor o PRNT, maior a quantidade de toneladas de calcário necessária para atingir a mesma correção de acidez.'
      },
      {
        q: 'Como o rendimento de carcaça afeta o cálculo da arroba do boi gordo?',
        a: 'O frigorífico paga pelo peso da carcaça limpa (em média 50% a 55% do peso vivo do animal), dividido por 15 kg por arroba. Um boi de 540 kg vivos com 54% de rendimento produz 291,6 kg de carcaça, equivalentes a 19,44 arrobas.'
      },
      {
        q: 'Por que o Peso de Mil Sementes (PMS) varia de lote para lote?',
        a: 'O tamanho e o vigor das sementes mudam conforme cultivar, peneira e safra. Usar o PMS exato da embalagem evita que a plantadeira distribua excesso ou falta de plantas por hectare.'
      },
      {
        q: 'Estas ferramentas substituem o laudo do engenheiro agrônomo?',
        a: 'Não. Elas atuam como apoio matemático ágil de campo e planejamento pré-safra. A recomendação agronômica final deve sempre partir de análise laboratorial de solo e acompanhamento técnico habilitado.'
      }
    ]
  },
  logistica: {
    title: 'Calculadoras de Logística, Frete, Cubagem e Lei do Motorista | Brasil Calculadoras',
    description: 'Simuladores para transportadoras, embarcadores e caminhoneiros autônomos. Calcule frete e margem, custo por km pesado, peso cubado, estadia (Lei 11.442) e jornada.',
    introduction: 'O transporte rodoviário de cargas movimenta a maior parte da economia brasileira, operando com margens operacionais sensíveis ao preço do óleo diesel, desgaste de pneus, tarifas de pedágio e tempos de espera nos pátios de carga e descarga. Nossa central de Logística & Fretes disponibiliza 5 ferramentas técnicas desenhadas para transportadoras, operadores logísticos, embarcadores de e-commerce e motoristas autônomos. É possível precificar viagens considerando margem de lucro líquida real, desmembrar custos fixos e variáveis por quilômetro rodado, apurar o peso cubado taxável de cargas volumosas e calcular indenizações por estadia excedente conforme a legislação nacional.',
    importance: 'Aceitar fretes sem conhecer o custo fixo diluído por quilômetro (seguro, IPVA, salário/pró-labore, depreciação do caminhão) ou esquecer de calcular a cubagem de cargas leves que ocupam todo o volume do baú resulta frequentemente em operação deficitária. Além disso, o desconhecimento do direito à indenização por horas paradas acima de cinco horas em operações de carga e descarga (previsto na Lei nº 11.442/2007) e o descontrole dos intervalos obrigatórios de repouso previstos na Lei do Motorista geram perdas financeiras diretas, multas administrativas e riscos graves de fadiga nas rodovias brasileiras. Compor corretamente a tabela de frete mínimo considerando retorno vazio, pedágios por eixo e fator de cubagem assegura sustentabilidade financeira tanto para transportadoras quanto para caminhoneiros autônomos em todo o território nacional.',
    methodology: 'Os algoritmos logísticos implementam os parâmetros regulatórios e comerciais do transporte de cargas brasileiro: multiplicação cúbica (Comprimento × Largura × Altura em metros) pelo fator rodoviário padrão de 300 kg/m³ — ou fator aéreo de 166,7 kg/m³ — para determinação do peso cubado comparativo ao peso bruto em balança na definição do peso taxável. Aplicam formação do frete mínimo e preço de venda por markup divisor sobre custos diretos de diesel, pedágio, manutenção por quilômetro e comissões [Custo Direto / (1 - Margem Desejada)], cálculo indenizatório de estadia conforme Lei nº 11.442/2007 após as 5 horas iniciais de franquia para carga ou descarga multiplicadas pela capacidade de carga do veículo, e controle de tempo de direção contínua e intervalos obrigatórios previstos na Lei do Motorista (Lei nº 13.103/2015).',
    practicalApplications: [
      'Calcular o valor sugerido de frete ida e volta incluindo diesel, pedágios, ajudantes e margem líquida desejada.',
      'Desmembrar o custo por quilômetro rodado de caminhões entre parcela variável (diesel e manutenção/pneus) e parcela fixa mensal.',
      'Apurar o volume total em m³ e o peso cubado (fator 300 kg/m³) para evitar prejuízos ao transportar mercadorias leves e volumosas.',
      'Calcular a indenização devida ao transportador quando a espera no terminal ultrapassa as 5 horas regulamentares da Lei nº 11.442.',
      'Monitorar horas extras e pausas obrigatórias de descanso conforme as diretrizes da Lei do Motorista.'
    ],
    faq: [
      {
        q: 'Por que as transportadoras usam o fator 300 kg/m³ na cubagem rodoviária?',
        a: 'O fator 300 kg/m³ reflete a relação média entre capacidade de peso e volume útil dos baús rodoviários. Se uma caixa leve ocupa 1 m³ mas pesa apenas 80 kg, cobra-se pelos 300 kg equivalentes do espaço ocupado.'
      },
      {
        q: 'A partir de quantas horas paradas no cliente cabe cobrança de estadia?',
        a: 'Pela Lei nº 11.442/2007 (alterada pela Lei nº 13.103/2015), o prazo máximo gratuito para carga e descarga é de 5 horas contadas da chegada ao destino. A partir da sexta hora, incide indenização proporcional por tonelada de capacidade do veículo.'
      },
      {
        q: 'Qual a diferença entre margem de lucro sobre o frete e acréscimo sobre o custo?',
        a: 'Ter 35% de margem sobre o preço final do frete significa dividir o custo direto por (1 - 0,35) = 0,65, garantindo que 35% do valor recebido na fatura permaneçam livres após os custos diretos da viagem.'
      },
      {
        q: 'Como diluir custos fixos mensais no cálculo do km rodado?',
        a: 'Soma-se seguro, rastreador, IPVA e remuneração mensal fixa e divide-se pela média de quilômetros rodados no mês. Quanto mais o caminhão roda produtivamente, menor é o custo fixo por quilômetro.'
      },
      {
        q: 'O piso mínimo de frete da ANTT deve ser verificado separadamente?',
        a: 'Sim. Para cargas lotação contratadas no país, recomenda-se sempre confrontar o frete calculado com a tabela vigente do Piso Mínimo de Frete da ANTT conforme número de eixos e tipo de carga.'
      }
    ]
  },
  construcao: {
    title: 'Calculadoras de Construção, Obras e Reformas | Brasil Calculadoras',
    description: 'Quantifique materiais de obra com precisão e evite desperdícios. Calcule quantidade de tijolos por m², latas de tinta predial e metragem de pisos e porcelanato com rodapé e argamassa.',
    introduction: 'Planejar o quantitativo correto de materiais em construções e reformas residenciais é o caminho mais seguro para manter a obra dentro do orçamento e do cronograma. Tanto compras subestimadas — que paralisam pedreiros à espera de nova entrega e geram diferença de lote em revestimentos — quanto compras exageradas geram prejuízo financeiro direto. Nossa seção Construção & Reformas disponibiliza calculadoras objetivas para dimensionar alvenaria de tijolos ou blocos por metro quadrado (com estimativa de areia), volume de tinta por demãos e metragem de pisos e porcelanatos incluindo rodapés, argamassa colante e margem técnica de recortes.',
    importance: 'Na prática da construção civil, as perdas por quebra no transporte, cortes em cantos e rodapés e variação de espessura na argamassa frequentemente passam despercebidas em orçamentos feitos de cabeça. Além disso, cada modelo de tijolo cerâmico ou bloco estrutural possui rendimento diferente por metro quadrado de parede, e cada piso demanda sobra específica conforme o tipo de paginação (reta ou diagonal). Calcular com critério técnico antes de ir ao depósito reduz entulho e material sobrando parado no quintal, evita atrasos no cronograma dos pedreiros por falta de peças no meio do assentamento e garante a compra de revestimentos, porcelanatos e tintas em um único lote e tonalidade de fabricação. Além da economia direta no orçamento da reforma residencial ou comercial, o levantamento quantitativo prévio possibilita comparar orçamentos de diferentes fornecedores em bases padronizadas e controlar perdas operacionais no canteiro de obras.',
    methodology: 'As fórmulas construtivas consideram parâmetros padronizados da engenharia civil e dos cadernos técnicos de orçamentação (como o SINAPI): densidade de assentamento por metro quadrado conforme dimensões do bloco ou tijolo cerâmico escolhido (incluindo junta de argamassa), consumo proporcional de cimento, cal e areia com margem técnica de perda para quebras no canteiro de obras. Para acabamentos, multiplicam a área útil descontando vãos de esquadrias pelo número de demãos especificado e dividem pelo rendimento do fabricante em m²/L para recomendar latas de 18 litros e galões de 3,6 litros com menor sobra, enquanto o módulo de revestimentos soma a área de piso à área desenvolvida de rodapés, aplica margem de corte de 10% a 15% para caixas de porcelanato e calcula o consumo em quilos de argamassa colante ACII ou ACIII.',
    practicalApplications: [
      'Estimar o total de tijolos ou blocos cerâmicos por m² de parede já incluindo margem de quebra e volume estimado de areia.',
      'Calcular exatamente quantos litros e latas de 18L de tinta são necessários para pintar paredes externas ou internas em múltiplas demãos.',
      'Dimensionar a metragem total de piso ou porcelanato somando o perímetro do rodapé (em cm de altura) e 10% a 15% de margem para recortes.',
      'Provisionar pacotes de argamassa colante (aproximadamente 4,5 kg por m²) antes de iniciar o assentamento do revestimento.'
    ],
    faq: [
      {
        q: 'Por que é obrigatório adicionar 10% a 15% de margem na compra de pisos e porcelanatos?',
        a: 'Recortes em rodapés, cantos, ralos e eventuais quebras durante o manuseio consomem peças inteiras. Além disso, guardar algumas peças extras do mesmo lote e tonalidade evita problemas futuros em reparos pontuais.'
      },
      {
        q: 'Quantos metros quadrados rende uma lata de tinta de 18 litros?',
        a: 'Uma lata padrão de 18 litros costuma render entre 150 m² e 250 m² por demão, variando conforme a marca (econômica, standard ou premium) e a absorção da superfície (reboco novo, massa corrida ou repintura).'
      },
      {
        q: 'Como a altura do rodapé entra no cálculo do piso?',
        a: 'Multiplica-se o perímetro das paredes (em metros) pela altura do rodapé convertida em metros (ex: 10 cm = 0,10 m). Essa área extra é somada à área do piso antes de aplicar a margem de perda.'
      },
      {
        q: 'O consumo de argamassa muda para peças grandes de porcelanato?',
        a: 'Sim. Peças maiores que 60×60 cm exigem dupla colagem (argamassa no contrapiso e no verso da peça) e desempenadeira dentada maior, o que pode elevar o consumo médio de 4,5 kg/m² para 6 a 8 kg/m².'
      },
      {
        q: 'Devo descontar portas e janelas antes de calcular tijolos e tintas?',
        a: 'Sim. Medir a área bruta e subtrair vãos grandes de portas e janelas garante orçamentos fiéis e evita comprar material para espaços que permanecerão abertos.'
      }
    ]
  },
  eventos: {
    title: 'Calculadoras de Gastronomia, Eventos, Churrasco e Receitas | Brasil Calculadoras',
    description: 'Planeje festas, churrascos e precificação gastronômica sem desperdícios. Calcule carne e bebidas por convidado, ficha técnica de custo de receitas e estoque de bar.',
    introduction: 'Organizar confraternizações, aniversários, casamentos ou estruturar a precificação profissional de doces, salgados e pratos comerciais exige equilíbrio entre fartura, qualidade e controle de custos. Comprar ingredientes no improviso leva tanto ao constrangimento da falta de bebidas no meio do evento quanto a sobras custosas no dia seguinte. Nossa central de Gastronomia & Eventos reúne calculadoras práticas de churrasco por perfil de convidados e duração, dimensionamento completo de bar (latas de cerveja, destilados e gelo) e ficha técnica profissional de custos e preço de venda de receitas.',
    importance: 'Para quem produz bolos, marmitas, doces gourmet ou salgados sob encomenda, errar a ficha técnica é a principal causa de trabalhar muito sem ver lucro no final do mês. Somar apenas os ingredientes sem diluir proporcionalmente por rendimento unitário e sem aplicar margem adequada para cobrir gás, energia, embalagens e mão de obra inviabiliza o negócio. No planejamento de eventos sociais, aniversários e confraternizações corporativas, ajustar as quantidades de carnes, guarnições e bebidas por perfil etário de convidados, crianças e duração total do evento evita tanto o constrangimento de faltar insumos no meio da recepção quanto o desperdício de compras exageradas. Paralelamente, restaurantes, hamburguerias e empreendedores da confeitaria que mantêm fichas técnicas atualizadas conseguem reagir com agilidade a altas sazonais nos insumos alimentícios e proteger sua margem líquida nos aplicativos de entrega e no atendimento presencial.',
    methodology: 'Os estimadores de eventos utilizam médias estatísticas de consumo de buffet e churrascaria amplamente validadas pelo setor gastronômico brasileiro: diferenciam perfis de convidados ponderando adultos homens, adultos mulheres e crianças (com fator médio de consumo equivalente a 0,5 adulto), ajustam automaticamente gramaturas de proteínas bovina, suína e de aves e volume de acompanhamentos, cervejas, refrigerantes e água proporcionalmente à duração da festa a partir da base padrão de 4 horas. No módulo de gastronomia comercial, a ficha técnica de custo fraciona insumos comprados em embalagens industriais por unidade ou grama efetivamente utilizada, incorpora custo indireto ou fator de correção de cocção, divide o custo total pelo rendimento real de porções e aplica o markup ou margem desejada para sugerir o preço mínimo de venda e ponto de equilíbrio no iFood ou salão.',
    practicalApplications: [
      'Dimensionar quilos de carne sem osso, litros de cerveja e refrigerante/água para churrascos conforme adultos, crianças e horas de evento.',
      'Montar a ficha técnica de receitas de confeitaria e cozinha apurando o custo exato por unidade e o preço sugerido de venda.',
      'Planejar o estoque de bar de festas e casamentos calculando latas de cerveja, garrafas de destilados e quilos de gelo por perfil de consumo.',
      'Controlar orçamentos de confraternizações corporativas evitando compras superdimensionadas de bebidas.'
    ],
    faq: [
      {
        q: 'Quantos gramas de carne calcular por pessoa em um churrasco de 4 horas?',
        a: 'A referência clássica é de cerca de 400 g de carne sem osso por adulto e 200 g por criança em eventos de 4 horas, aumentando proporcionalmente se a festa durar 6 ou 8 horas.'
      },
      {
        q: 'Qual a diferença entre custo unitário na ficha técnica e preço de venda?',
        a: 'O custo unitário soma apenas os ingredientes usados divididos pelo rendimento da receita. Ao definir o preço de venda com margem de 100% a 200%, você cobre também embalagem, energia, gás, deslocamento e lucro líquido.'
      },
      {
        q: 'Como estimar gelo suficiente para bebidas em festas?',
        a: 'Uma referência prática eficiente é calcular ao menos 0,5 kg de gelo por convidado para resfriar bebidas em caixas térmicas, aumentando para 1 kg por pessoa em eventos ao ar livre durante o verão.'
      },
      {
        q: 'Crianças contam da mesma forma que adultos na lista de compras?',
        a: 'Não. Para alimentos e bebidas não alcoólicas, costuma-se considerar cada criança como equivalente a metade do consumo de um adulto, enquanto bebidas alcoólicas são calculadas exclusivamente sobre o público adulto.'
      },
      {
        q: 'Os acompanhamentos reduzem a quantidade necessária de carne no churrasco?',
        a: 'Sim. Caso o cardápio conte com entradas abundantes, arroz, farofa, vinagrete, maionese e pão de alho, o consumo médio de carne por adulto pode cair de 450 g para cerca de 350 g.'
      }
    ]
  },
  energia: {
    title: 'Calculadoras de Energia Elétrica, Solar Fotovoltaica e Sustentabilidade | Brasil Calculadoras',
    description: 'Calcule gastos de aparelhos na conta de luz, dimensione sistemas de placas de energia solar fotovoltaica (kWp) e meça a pegada de carbono anual veicular.',
    introduction: 'Compreender como a energia elétrica é consumida dentro de casa ou da empresa e avaliar o retorno técnico de fontes renováveis são passos essenciais tanto para reduzir faturas mensais quanto para diminuir o impacto ambiental. A seção Energia & Sustentabilidade reúne 3 ferramentas fundamentais: o calculador de custo mensal por aparelho elétrico (em kWh e reais), o dimensionador preliminar de sistemas solares fotovoltaicos por irradiação local e potência de módulos, e o calculador de emissões de CO₂ veiculares com estimativa de árvores necessárias para compensação anual.',
    importance: 'Aparelhos térmicos de alta potência — como chuveiros elétricos, ferros de passar, aquecedores, secadoras e aparelhos de ar-condicionado antigos — respondem pela maior fatia da conta de energia mesmo quando utilizados por poucas horas ao dia. Identificar em reais quanto cada equipamento custa no final do mês permite adotar hábitos mais eficientes. Da mesma forma, antes de contratar projetos de energia solar fotovoltaica residencial ou comercial, conhecer previamente a potência estimada do sistema em quilowatt-pico (kWp), o desempenho ajustado à irradiação local e a quantidade aproximada de módulos evita aceitar propostas subdimensionadas ou pagar caro por excedentes desnecessários dentro das regras atuais da geração distribuída. Medir também as emissões de carbono associadas a deslocamentos ajuda empresas e motoristas a buscar rotas mais eficientes e metas realistas de eficiência energética.',
    methodology: 'As equações energéticas seguem metodologias padronizadas do setor elétrico nacional (ANEEL) e da energia solar fotovoltaica: calculam o consumo mensal em quilowatts-hora pela equação kWh = (Potência nominal em Watts × Horas de utilização diária × Dias por mês) / 1.000 aplicada à tarifa média da concessionária acrescida de bandeira tarifária estimada. Para sistemas fotovoltaicos on-grid, dividem o consumo médio diário líquido pela Hora de Sol Pleno (HSP) da região geográfica corrigida pelo Performance Ratio (fator global de eficiência de 80% contemplando perdas térmicas dos módulos, sombreamento parcial, resistência de cabeamento e rendimento do inversor), sugerindo a potência pico em kWp e quantidade estimada de painéis. Na pegada de carbono, adotam fator médio de emissão de 2,28 kg de CO₂ equivalente por litro de gasolina queimada versus taxa anual média de sequestro florestal por árvore.',
    practicalApplications: [
      'Transformar a potência em Watts da etiqueta de qualquer eletrodoméstico no valor exato em reais cobrado mensalmente na conta de luz.',
      'Estimar quantos painéis solares (ex: módulos de 550W) e qual potência total em kWp são necessários para suprir a média de consumo em kWh.',
      'Calcular quantos quilos de dióxido de carbono (CO₂) o veículo emite por ano conforme a quilometragem mensal e o consumo médio.',
      'Planejar metas de compensação ambiental estimando a quantidade de árvores necessárias para neutralizar as emissões anuais de deslocamentos.'
    ],
    faq: [
      {
        q: 'Por que o dimensionamento de energia solar aplica um fator de 0,80 na fórmula?',
        a: 'O fator de rendimento (Performance Ratio) de aproximadamente 80% contabiliza perdas naturais do sistema fotovoltaico por aquecimento das placas, sombreamento leve, sujeira, resistência dos cabos e eficiência de conversão do inversor.'
      },
      {
        q: 'O que é a Hora de Sol Pleno (HSP) na calculadora solar?',
        a: 'HSP representa o número equivalente de horas diárias em que a irradiação solar atinge a intensidade padrão de 1.000 W/m² no telhado. No Brasil, varia tipicamente de 4,2 a 6,0 horas/dia conforme o estado.'
      },
      {
        q: 'Instalar energia solar zera 100% do valor pago na conta de luz?',
        a: 'Não totalmente. Mesmo gerando toda a energia consumida, imóveis conectados à rede distribuidora continuam pagando o custo de disponibilidade (taxa mínima conforme padrão monofásico, bifásico ou trifásico), iluminação pública e eventual cobrança de Fio B da Lei 14.300.'
      },
      {
        q: 'Como encontrar a tarifa exata de kWh da minha cidade?',
        a: 'Consulte o detalhamento de faturamento na sua conta de luz mensal, somando o valor unitário de TE + TUSD (e tributos ICMS/PIS/COFINS embutidos na tarifa efetiva total dividida pelos kWh faturados).'
      },
      {
        q: 'Carros movidos a etanol têm pegada de carbono menor que a gasolina?',
        a: 'Sim. Embora haja emissão no escapamento, a cana-de-açúcar absorve CO₂ durante o crescimento agrícola, reduzindo drasticamente o balanço líquido de carbono no ciclo completo em comparação ao combustível fóssil.'
      }
    ]
  },
  educacao: {
    title: 'Calculadoras de Educação, ENEM, SISU e Desempenho Acadêmico | Brasil Calculadoras',
    description: 'Ferramentas gratuitas para vestibulandos e universitários. Simule nota ponderada do ENEM para o SISU, calcule nota necessária na prova final e estime tempo de leitura de estudos.',
    introduction: 'Planejar a estratégia de estudos ao longo do semestre letivo e simular combinações de pesos nas universidades públicas pelo SISU (Sistema de Seleção Unificada) fazem enorme diferença na conquista de uma vaga no ensino superior e na aprovação sem exames finais. Nossa seção Educação & ENEM reúne 4 simuladores dedicados à rotina de estudantes brasileiros: simulador completo do ENEM com as 5 áreas e pesos customizados, simulador rápido de pesos do SISU, calculadora de média semestral universitária (descobrindo exatamente quanto falta tirar na última prova) e estimador de tempo de leitura para apostilas, livros e TCCs.',
    importance: 'No SISU, duas instituições podem atribuir pesos completamente distintos para a mesma graduação: enquanto uma universidade valoriza Matemática com peso 4 e Redação com peso 3 em Engenharia, outra pode adotar pesos igualitários. Simular antecipadamente onde seus pontos rendem mais direciona a escolha das duas opções de curso com inteligência. Durante a graduação ou ensino médio, saber de antemão qual nota mínima será exigida na prova substitutiva, avaliação final ou exame semestral permite distribuir com inteligência as horas de estudo entre as disciplinas mais críticas sem comprometer aprovações e bolsas acadêmicas. Adicionalmente, estimar o tempo líquido realista de leitura de livros obrigatórios, editais extensos de concursos públicos e apostilas técnicas em ritmo diário viabiliza cronogramas de preparação sustentáveis, compatibilizando jornada de trabalho, revisão espaçada e resolução comentada de simulados nas semanas que antecedem as datas oficiais de prova nos vestibulares e exames universitários.',
    methodology: 'As calculadoras educacionais implementam médias ponderadas exatas pela fórmula Σ(Nota_i × Peso_i) / Σ(Peso_i) com validação automática para evitar pesos nulos, entregando paralelamente a comparação direta em relação à média aritmética simples e destacando qual área do conhecimento mais contribuiu para o escore final do candidato no ENEM ou vestibulares que aplicam pesos por curso via SiSU. Para planejamento semestral, resolvem algebricamente a nota mínima exigida na prova substitutiva, avaliação final ou exame considerando pesos distintos entre bimestres ou módulos para alcançar a média de corte institucional. Nos módulos de produtividade acadêmica, calculam a taxa de leitura e velocidade em palavras por minuto (WPM) com estimativa realista de tempo líquido para leitura integral de artigos, PDFs e editais.',
    practicalApplications: [
      'Simular a nota ponderada do ENEM inserindo as 5 notas (Natureza, Humanas, Linguagens, Matemática e Redação) e os pesos específicos de cada faculdade no SISU.',
      'Descobrir exatamente qual nota mínima você precisa tirar na próxima prova (AV2) para fechar o semestre acima da média de aprovação.',
      'Planejar cronogramas de leitura de apostilas, artigos científicos e editais estimando minutos e horas totais conforme sua velocidade de leitura.',
      'Comparar a média simples versus média ponderada para identificar em quais cursos seu perfil de notas gera vantagem competitiva.'
    ],
    faq: [
      {
        q: 'Por que a média ponderada do SISU muda tanto de uma universidade para outra?',
        a: 'Cada universidade participante define no Termo de Adesão do MEC pesos próprios para as cinco áreas do ENEM de acordo com a afinidade do curso, fazendo a nota final subir ou cair conforme seu desempenho nas disciplinas de maior peso.'
      },
      {
        q: 'Qual é a velocidade média de leitura usada para planejar estudos?',
        a: 'Um leitor adulto médio lê cerca de 200 palavras por minuto (WPM) em textos gerais. Para leituras técnicas densas, como leis ou artigos científicos com anotações, recomenda-se ajustar a velocidade para 120 a 150 WPM.'
      },
      {
        q: 'Posso usar a calculadora de média semestral para provas com 3 ou mais notas?',
        a: 'Para descobrir quanto precisa na última prova tendo várias avaliações anteriores, basta inserir a média ponderada acumulada até o momento com a soma dos pesos já cumpridos no campo da AV1.'
      },
      {
        q: 'Tirar zero na Redação do ENEM permite participar do SISU?',
        a: 'Não. Conforme os editais do MEC, candidatos que obtiveram nota zero na prova de Redação são eliminados da concorrência do SISU e ProUni, independentemente da média das provas objetivas.'
      },
      {
        q: 'O simulador contempla bônus regionais de universidades específicas?',
        a: 'A calculadora calcula a média ponderada matemática pura das notas e pesos informados. Eventuais acréscimos percentuais de inclusão regional previstos em editais locais devem ser adicionados posteriormente sobre a média final.'
      }
    ]
  },
  quimica_fisica: {
    title: 'Calculadoras de Química e Física: Velocidade, Temperatura e Densidade | Brasil Calculadoras',
    description: 'Resolva exercícios e conversões científicas com exatidão. Calcule velocidade média, distância, tempo, converta escalas Celsius/Fahrenheit/Kelvin e apure densidade volumétrica.',
    introduction: 'A compreensão das ciências exatas e naturais passa pelo domínio de grandezas físicas fundamentais — como espaço, tempo, velocidade escalar, energia térmica e densidade específica da matéria. Nossa seção Química & Física disponibiliza calculadoras interativas versáteis que permitem resolver problemas bidirecionais de cinemática uniforme (calculando velocidade, distância ou tempo conforme o parâmetro desconhecido), converter instantaneamente escalas termométricas (Celsius, Fahrenheit e Kelvin) e determinar densidade absoluta, massa ou volume de substâncias em experimentos acadêmicos e rotinas técnicas.',
    importance: 'Em provas escolares, olimpíadas de ciências, vestibulares e procedimentos laboratoriais, o erro mais frequente não está no conceito físico em si, mas na troca de sinais durante conversões térmicas (especialmente ao cruzar escalas negativas com Kelvin) ou na inversão algébrica entre numerador e denominador ao isolar variáveis como tempo ou volume. Ter simuladores interativos claros que permitem escolher exatamente qual variável física isolar reduz falhas recorrentes de álgebra básica, apoia a verificação de relatórios experimentais escolares e universitários e fortalece a intuição sobre grandezas proporcionais, escalas absolutas e densidade da matéria. Ao observar lado a lado as conversões simultâneas no Sistema Internacional e interpretações práticas de laboratório — como flutuabilidade relativa à água, conversão direta de km/h para m/s e relação exata entre escalas Celsius, Fahrenheit e Kelvin —, estudantes e técnicos consolidam fundamentos essenciais de cinemática, termologia e físico-química antes das avaliações oficiais, vestibulares tradicionais e práticas experimentais.',
    methodology: 'As equações implementam rigorosamente as relações clássicas do Sistema Internacional de Unidades (SI), da mecânica cinemática, da termodinâmica e da físico-química laboratorial: na cinemática escalar do Movimento Retilíneo Uniforme (MRU), resolvem automaticamente qualquer uma das três variáveis fundamentais a partir das outras duas fornecidas (v = Δs / Δt, Δs = v × Δt e Δt = Δs / v), convertendo simultaneamente unidades entre quilômetros por hora e metros por segundo através do fator exato 3,6. Na termometria, executam transformações lineares exatas entre as escalas Celsius, Fahrenheit e Kelvin absoluta (°F = 1,8 × °C + 32 e K = °C + 273,15), utilizando a escala Celsius em ponto flutuante como pivô numérico para evitar acúmulo de erros de arredondamento. No cálculo de densidade absoluta ou massa específica (ρ = m / V), garantem compatibilidade dimensional direta entre gramas por centímetro cúbico (g/cm³), quilogramas por metro cúbico (kg/m³) e flutuação comparativa em relação à densidade de referência da água.',
    practicalApplications: [
      'Isolar automaticamente velocidade média (km/h), distância percorrida (km) ou tempo de deslocamento (h) em problemas de cinemática.',
      'Converter temperaturas de equipamentos importados, receitas ou experimentos científicos entre Celsius (°C), Fahrenheit (°F) e Kelvin (K).',
      'Determinar a densidade de materiais sólidos ou líquidos e prever se um corpo afunda ou flutua na água (referência ≈ 1,0 g/cm³).',
      'Conferir rapidamente gabaritos de listas de física e química geral no Ensino Médio e cursos técnicos.'
    ],
    faq: [
      {
        q: 'Qual é a diferença entre escala Celsius e Kelvin na física e química?',
        a: 'Ambas possuem o mesmo tamanho de grau (variar 1 °C equivale a variar 1 K), mas a escala Kelvin começa no zero absoluto (-273,15 °C), não admitindo valores negativos na termodinâmica.'
      },
      {
        q: 'Por que a água tem densidade próxima de 1 g/cm³?',
        a: 'Por definição histórica do sistema métrico, 1 centímetro cúbico (1 mL) de água pura a cerca de 4 °C possui massa muito próxima a 1 grama. Materiais menos densos que 1 g/cm³ flutuam na água.'
      },
      {
        q: 'Como converter km/h para m/s na velocidade média?',
        a: 'Basta dividir o valor da velocidade em km/h por 3,6. Por exemplo, 72 km/h equivalem exatamente a 20 metros por segundo (m/s).'
      },
      {
        q: 'Posso calcular a massa de um líquido conhecendo apenas o volume e a densidade?',
        a: 'Sim. Na calculadora de densidade, selecione "Massa" no campo de seleção do que calcular, informe a densidade da substância e o volume ocupado em cm³ ou mL.'
      },
      {
        q: 'As fórmulas assumem movimento uniforme sem aceleração?',
        a: 'Sim. A calculadora de velocidade média apura a razão global entre deslocamento total e intervalo de tempo gasto, válida tanto para velocidade constante quanto para média global de um percurso com paradas.'
      }
    ]
  },
  tecnologia: {
    title: 'Calculadoras de Tecnologia, TI, Mídia Digital e AdSense | Brasil Calculadoras',
    description: 'Utilitários para desenvolvedores, designers, editores e gestores de tráfego. Estime ganhos AdSense 2026, tempo de download, aspect ratio, bases numéricas, CPM, CTR e CPC.',
    introduction: 'Profissionais de tecnologia da informação, desenvolvedores web, designers de interface, criadores de conteúdo e gestores de mídia paga lidam diariamente com conversões binárias, proporções geométricas de tela, larguras de banda e métricas de desempenho digital. A categoria Tecnologia & Computação reúne 7 ferramentas essenciais: simulador avançado de monetização com Google AdSense 2026, estimador de tempo de download (convertendo corretamente Mbps da operadora em MB/s de arquivo), calculadora de Aspect Ratio para vídeos e imagens responsivas, conversor de bases numéricas (binário, hexadecimal e octal) e o trio clássico de performance publicitária — CPM, CTR e CPC.',
    importance: 'Confundir megabits por segundo (Mbps) com megabytes por segundo (MB/s) gera frustrações ao estimar janelas de backup e transferência de servidores — diferença de um fator de 8 vezes. No design digital e na edição de vídeo, redimensionar imagens fora da proporção original provoca distorções visuais ou cortes indesejados no CLS (Cumulative Layout Shift). Já em mídia programática, campanhas pagas e estratégias de SEO editorial, acompanhar com exatidão indicadores como CTR, CPC, CPM e RPM permite diagnosticar rapidamente gargalos de segmentação, otimizar títulos orgânicos de busca e concentrar orçamento nos canais de aquisição ou nas categorias de conteúdo com maior rentabilidade por mil impressões. Somando agilidade na conversão de bases numéricas computacionais, criadores de software, web designers e profissionais de marketing digital tomam decisões orientadas a dados em segundos.',
    methodology: 'Os algoritmos técnicos diferenciam corretamente grandezas de armazenamento digital e taxa de transferência de rede: convertem tamanhos de arquivos em KB, MB, GB e TB utilizando potências binárias de 1024 bytes e calculam tempo estimado de download ou upload dividindo megabits por segundo (Mbps) por 8 para obter a vazão real em megabytes por segundo (MB/s), acrescida de margem prática de sobrecarga de protocolo. Para design e vídeo, reduzem resoluções de tela ao Aspect Ratio irredutível mediante o Máximo Divisor Comum pelo Algoritmo de Euclides, realizam conversões exatas entre bases numéricas (binário, octal, decimal e hexadecimal), avaliam entropia e complexidade combinatória de senhas por conjunto de caracteres e calculam métricas de mídia paga e publicidade programática (CPM, CPC, CTR, CPA e ROAS) seguindo definições consolidadas do IAB e do ecossistema Google Ads/AdSense.',
    practicalApplications: [
      'Projetar receitas mensais e anuais de portais e blogs na Calculadora de Ganhos AdSense por nicho, geografia de tráfego e pageviews.',
      'Estimar em segundos e minutos o tempo real de download de ISOs, backups e vídeos considerando a velocidade contratada em Mbps.',
      'Descobrir a razão exata (ex: 16:9, 4:3, 9:16) e calcular a nova altura proporcional ao redimensionar imagens e containers responsivos.',
      'Converter inteiros decimais para representação Binária, Hexadecimal e Octal em depuração de software e sistemas embarcados.',
      'Auditar campanhas de tráfego pago calculando CPM (custo por mil), CTR (taxa de cliques) e CPC (custo por clique).'
    ],
    faq: [
      {
        q: 'Por que uma internet de 100 Mbps baixa arquivos a no máximo 12,5 MB/s?',
        a: 'Porque a velocidade dos planos de internet é anunciada em Megabits por segundo (Mb), enquanto arquivos no sistema operacional são medidos em Megabytes (MB). Como 1 Byte equivale a 8 bits, divide-se 100 por 8 = 12,5 MB/s teóricos.'
      },
      {
        q: 'Como a calculadora descobre a proporção simplificada (Aspect Ratio) de uma tela?',
        a: 'Ela calcula o Máximo Divisor Comum (MDC) entre largura e altura em pixels e divide ambas as dimensões por esse valor — transformando 1920×1080 exatamente na fração clássica 16:9.'
      },
      {
        q: 'Qual a relação matemática entre CPM, CTR e CPC em anúncios?',
        a: 'O CPM mede o custo para cada 1.000 impressões; o CTR mede o percentual de pessoas que clicam; consequentemente, quanto maior o CTR mantendo o mesmo CPM, menor tende a ser o seu Custo por Clique (CPC).'
      },
      {
        q: 'Quando usar hexadecimal em vez de binário no desenvolvimento?',
        a: 'Um único dígito hexadecimal representa exatamente 4 bits binários (nibble). Por isso, códigos hexadecimais como #2563EB ou endereços de memória são muito mais compactos e legíveis para humanos.'
      },
      {
        q: 'Qual CTR pode ser considerado bom em anúncios display ou banners?',
        a: 'Em redes de display abertas, taxas entre 0,5% e 1,5% já são comuns, enquanto em resultados de busca intencionais ou banners altamente contextualizados, um CTR acima de 2% a 5% indica excelente aderência.'
      }
    ]
  },
  pets: {
    title: 'Calculadoras de Pets & Animais: Ração, Água e Idade Humana | Brasil Calculadoras',
    description: 'Cuide melhor de cães e gatos com estimativas veterinárias. Calcule a porção diária ideal de ração, ingestão de água recomendada e idade equivalente em anos humanos.',
    introduction: 'Cuidar bem de cães e gatos vai muito além do carinho diário: exige atenção precisa à nutrição, hidratação e fase biológica de vida de cada animal. A antiga regra popular de multiplicar a idade do cachorro por 7 é biologicamente imprecisa porque filhotes atingem a maturidade muito rápido nos dois primeiros anos e raças gigantes envelhecem mais depressa que cães de porte pequeno. Nossa categoria Pets & Animais oferece 4 calculadoras baseadas em consensos veterinários de metabolismo energético e fisiologia animal para orientar tutores na dosagem correta de ração seca, meta hídrica diária e compreensão da idade humana equivalente.',
    importance: 'Tanto a obesidade canina quanto a baixa ingestão de água em felinos estão entre as principais causas evitáveis de doenças articulares, diabetes, sobrecarga cardíaca e problemas renais graves em animais domésticos. Medir rigorosamente a porção diária de ração em gramas pela Necessidade Energética de Repouso (RER) ajustada ao porte físico, castração e fase de crescimento — em vez de encher o comedouro apenas no olho — previne sobrepeso precoce, prolonga a expectativa saudável e melhora o bem-estar geral do seu companheiro. Somado ao controle de ingestão mínima de água fresca e ao entendimento correto da equivalência etária entre animais e humanos, tutores identificam com rapidez o momento certo de ajustar exames veterinários preventivos e trocar a dieta para fórmulas seniores.',
    methodology: 'Os simuladores veterinários e de cuidado animal baseiam-se em equações alométricas recomendadas por diretrizes nutricionais internacionais (FEDIAF e WSAVA): calculam inicialmente o Requerimento Energético de Repouso pela fórmula RER = 70 × (Peso corporal em kg)^0,75 e multiplicam pelo fator fisiológico correspondente à espécie, fase de crescimento (filhote desmamado ou em crescimento), condição reprodutiva (castrado ou inteiro), nível de atividade física e necessidade de ganho ou perda de peso. Convertem o resultado em gramas diárias de ração seca considerando a energia metabolizável declarada pelo fabricante. Apuram ainda a meta de ingestão hídrica diária em mililitros por quilograma com acréscimo de até 30% para dias de calor intenso ou dieta exclusivamente seca, além de estimarem a idade equivalente humana considerando porte pequeno, médio, grande ou gigante em cães e fases de maturação acelerada em felinos domésticos.',
    practicalApplications: [
      'Estimar em gramas por dia e quilocalorias a quantidade adequada de ração seca para cães filhotes, adultos, castrados ou atletas.',
      'Calcular a meta diária de água em mililitros para cães (60 ml/kg) e gatos (50 ml/kg) considerando dias amenos ou quentes.',
      'Descobrir a idade equivalente em anos humanos do seu cachorro diferenciando porte pequeno, médio, grande e gigante.',
      'Acompanhar a faixa biológica do seu gato (filhote, adulto jovem, maduro ou sênior) para adequar check-ups veterinários preventivos.'
    ],
    faq: [
      {
        q: 'Por que cães de porte gigante envelhecem mais rápido que cães pequenos?',
        a: 'O metabolismo de crescimento acelerado e o esforço cardiovascular proporcionalmente maior em raças gigantes fazem com que um cão de mais de 45 kg alcance a fase sênior por volta dos 6 a 7 anos, enquanto poodles ou pinschers podem viver 15 a 18 anos.'
      },
      {
        q: 'Por que a fórmula da ração eleva o peso do cão à potência 0,75?',
        a: 'A potência 0,75 calcula o Peso Metabólico do animal, refletindo o fato biológico de que cães grandes gastam proporcionalmente menos calorias por quilo de massa corporal do que cães muito pequenos.'
      },
      {
        q: 'Como fazer meu gato beber a quantidade recomendada de água?',
        a: 'Gatos têm instinto voltado para água fresca e em movimento. Usar fontes elétricas circulantes, posicionar potes longe da caixa de areia e da ração e incluir alimento úmido (sachês) ajuda muito a bater a meta hídrica.'
      },
      {
        q: 'A quantidade em gramas calculada serve para qualquer marca de ração?',
        a: 'Nossa calculadora usa uma densidade energética média de 3,5 kcal/g (típica de rações secas Premium/Super Premium). Se a embalagem da sua ração informar energia metabolizável muito diferente, vale dividir o total de kcal calculado por esse índice.'
      },
      {
        q: 'A calculadora substitui a orientação do médico veterinário?',
        a: 'Não. Cães e gatos com insuficiência renal, diabetes, alergias ou gestantes exigem prescrição nutricional específica elaborada por um médico veterinário.'
      }
    ]
  },
  datas: {
    title: 'Calculadoras de Datas, Dias Úteis e Conversão de Horas | Brasil Calculadoras',
    description: 'Controle prazos e jornadas com precisão de calendário. Calcule diferença entre datas, contagem de dias úteis com feriados nacionais e converta horas HH:MM em decimais.',
    introduction: 'Contar com exatidão o intervalo entre duas datas do calendário, filtrar apenas dias úteis descontando finais de semana e feriados nacionais brasileiros e converter registros de ponto de horas/minutos (HH:MM) para horas decimais são rotinas indispensáveis em departamentos de Recursos Humanos, escritórios jurídicos, gestão de projetos e contratos comerciais. A seção Datas & Planejamento concentra 3 utilitários ágeis construídos especificamente sobre o calendário oficial brasileiro e as normas de fechamento de folha de ponto.',
    importance: 'Muitos erros em sistemas de folha de pagamento e cronogramas contratuais acontecem por um equívoco clássico: confundir 8h30min com 8,30 horas decimais (quando na verdade equivale a 8,50 horas!). Esse erro de base sexagesimal versus decimal distorce pagamentos de horas extras, comissões e faturamento freelancer. Da mesma forma, projetar prazos de entrega, compensações bancárias ou vencimentos contratuais considerando dias corridos quando a cláusula prevê exclusivamente dias úteis resulta em atrasos evitáveis, descumprimentos operacionais e penalidades contratuais. Ao integrar todos os feriados nacionais oficiais em vigência no país, contagem exata de intervalos por calendário gregoriano respeitando anos bissextos e conversão automática bidirecional entre relógio sexagesimal e formato decimal contábil, profissionais autônomos, advogados controlando prazos processuais, departamentos de recursos humanos e gerentes de projeto ganham agilidade, segurança jurídica e eliminação de ruídos em cada fechamento mensal de ponto, proposta comercial e cronograma contratual.',
    methodology: 'As ferramentas cronológicas utilizam aritmética exata de datas em tempo universal coordenado (UTC) sobre o calendário gregoriano, eliminando distorções causadas por fusos horários locais ou transições históricas de horário de verão e respeitando automaticamente anos bissextos divisíveis por 4 (com exceções seculares). Para contagem de prazos comerciais e trabalhistas, filtram sábados, domingos e todos os feriados nacionais fixos previstos na legislação brasileira vigente — incluindo Confraternização Universal, Tiradentes, Dia do Trabalho, Independência, Nossa Senhora Aparecida, Finados, Proclamação da República, Natal e o feriado nacional da Consciência Negra em 20 de novembro (Lei nº 14.759/2023) — além de computarem idade cronológica completa em anos, meses e dias e converterem horas sexagesimais (HH:MM) em formato decimal de folha de ponto dividindo minutos por 60 com até quatro casas de precisão.',
    practicalApplications: [
      'Apurar rapidamente o intervalo total em dias, semanas, meses, anos e horas entre duas datas quaisquer (como tempo de empresa ou idade de contrato).',
      'Contar quantos dias úteis reais existem em um mês ou intervalo descontando sábados, domingos e feriados nacionais.',
      'Converter horas trabalhadas no formato de relógio (ex: 8h 45min) para formato decimal (8,75h) exigido em planilhas de Excel e sistemas de RH.',
      'Conferir o total exato em minutos e segundos de jornadas, reuniões ou gravações.'
    ],
    faq: [
      {
        q: 'Por que 8 horas e 30 minutos viram 8,5 horas no formato decimal?',
        a: 'Porque 1 hora possui 60 minutos, e não 100. Logo, 30 minutos equivalem à metade de uma hora (30 / 60 = 0,5). Somando às 8 horas inteiras, obtém-se 8,50 horas decimais para multiplicar corretamente pelo valor da hora de trabalho.'
      },
      {
        q: 'Quais feriados nacionais entram na contagem de dias úteis?',
        a: 'O algoritmo filtra os feriados nacionais fixos oficiais: Confraternização Universal (01/01), Tiradentes (21/04), Dia do Trabalho (01/05), Independência (07/09), Nossa Senhora Aparecida (12/10), Finados (02/11), Proclamação da República (15/11), Consciência Negra (20/11) e Natal (25/12).'
      },
      {
        q: 'Como calcular o intervalo de anos e meses levando em conta meses de 30 e 31 dias?',
        a: 'Nossa calculadora computa primeiro a diferença exata de dias no calendário considerando fevereiro (28 ou 29 dias em anos bissextos) e utiliza a média astronômica de 30,44 dias por mês e 365,25 dias por ano.'
      },
      {
        q: 'Feriados municipais ou estaduais são descontados automaticamente?',
        a: 'Por variarem em mais de 5.500 municípios brasileiros, feriados locais (como aniversários de cidade ou padroeiros estaduais) devem ser subtraídos manualmente do total de dias úteis retornado.'
      },
      {
        q: 'Posso usar o conversor de horas decimais para calcular horas extras na folha?',
        a: 'Sim. Primeiro converta o total de horas e minutos extras do espelho de ponto para formato decimal e, em seguida, utilize nossa Calculadora de Horas Extras para aplicar os adicionais de 50% ou 100%.'
      }
    ]
  },
  maternidade: {
    title: 'Calculadoras de Maternidade, Gestação (DPP) e Custo do Bebê | Brasil Calculadoras',
    description: 'Planeje a gravidez e a chegada do bebê com tranquilidade. Calcule a Data Provável do Parto (DPP), semanas e trimestre de gestação e o orçamento mensal estimado com o recém-nascido.',
    introduction: 'A descoberta da gravidez e os preparativos para a chegada de um filho combinam grande alegria com a necessidade de organização médica e financeira antecipada. A categoria Maternidade & Bebê reúne ferramentas desenvolvidas para acompanhar duas frentes essenciais da jornada materna e paterna: a evolução gestacional até a Data Provável do Parto (DPP) — seguindo a contagem obstétrica padrão de 40 semanas (280 dias) a partir da Data da Última Menstruação (DUM) — e o planejamento detalhado do custo mensal nos primeiros meses de vida do recém-nascido.',
    importance: 'Entender exatamente em qual semana e trimestre gestacional a mãe se encontra ajuda a acompanhar exames morfológicos, vacinas do pré-natal e o desenvolvimento fetal. Paralelamente, dimensionar de antemão quanto o orçamento doméstico mensal será impactado pela compra contínua de fraldas descartáveis por faixa etária, eventuais fórmulas infantis, itens de higiene delicada, medicamentos pediátricos e reorganização da rotina familiar previne apertos financeiros imediatos no puerpério e possibilita estruturar com tranquilidade a reserva de emergência antes mesmo do nascimento. A clareza combinada entre cronograma clínico semanal de pré-natal e planejamento financeiro realista para os primeiros doze a vinte e quatro meses torna a chegada do bebê mais tranquila, informada e financeiramente sustentável para toda a família. Assim, pais de primeira viagem e familiares conseguem priorizar itens realmente indispensáveis no enxoval e adaptar o orçamento mensal antes da alta da maternidade.',
    methodology: 'O simulador gestacional implementa o referencial obstétrico padrão da Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO) e da Organização Mundial da Saúde (OMS), baseado na Regra de Naegele modificada sobre a Data da Última Menstruação (DUM) para projetar a gestação humana a termo de 280 dias corridos (40 semanas completas), identificando a semana e o dia atual de evolução embrionária ou fetal, o trimestre gestacional vigente (1º trimestre até a 13ª semana, 2º trimestre da 14ª à 26ª e 3º trimestre da 27ª semana até o parto) e a faixa provável de parto entre 37 e 42 semanas. Em complemento prático para a família, o planejador financeiro do bebê estima consumo mensal e acumulado de fraldas descartáveis por faixa de peso, além de consolidar despesas recorrentes de pediatria, enxoval, alimentação complementar, higiene e creche em um orçamento anual claro.',
    practicalApplications: [
      'Acompanhar a idade gestacional exata em semanas e dias completos e o percentual de progresso até completar 40 semanas.',
      'Identificar o trimestre atual da gravidez e quantos dias e semanas faltam até a Data Provável do Parto (DPP).',
      'Estimar o orçamento mensal e anual com um bebê simulando cenários com aleitamento materno exclusivo ou uso de fórmula infantil.',
      'Calcular separadamente quanto do orçamento doméstico irá para fraldas, pediatria, pomadas e enxoval recorrente.'
    ],
    faq: [
      {
        q: 'Por que a gestação é contada a partir da última menstruação se a concepção ocorre depois?',
        a: 'Por convenção médica internacional (Regra de Naegele), como a data exata da ovulação e fecundação raramente é conhecida com precisão, o primeiro dia da última menstruação (DUM) serve como marco zero padronizado das 40 semanas.'
      },
      {
        q: 'Quantos dias antes ou depois da DPP o parto costuma acontecer?',
        a: 'Apenas uma minoria dos bebês nasce exatamente no dia da DPP. Considera-se gestação a termo saudável o nascimento ocorrido entre 37 semanas completas e 41 semanas e 6 dias.'
      },
      {
        q: 'Quantas fraldas um recém-nascido usa por mês em média?',
        a: 'Nos primeiros meses de vida, o bebê costuma demandar entre 7 e 10 trocas diárias, totalizando cerca de 210 a 300 fraldas por mês. Conforme cresce, essa frequência reduz gradualmente para 5 ou 6 trocas ao dia.'
      },
      {
        q: 'O custo com fórmula infantil altera muito o orçamento mensal com o bebê?',
        a: 'Sim. Dependendo da marca e da fase do bebê, o consumo pode chegar a 4 ou 6 latas por mês, representando um acréscimo significativo no orçamento em comparação ao aleitamento materno exclusivo.'
      },
      {
        q: 'A calculadora gestacional substitui a idade gestacional da ultrassonografia?',
        a: 'Não. A ultrassonografia do primeiro trimestre (entre 7 e 12 semanas) é o exame mais preciso para confirmar ou corrigir a data provável do parto junto ao seu obstetra.'
      }
    ]
  }
};
