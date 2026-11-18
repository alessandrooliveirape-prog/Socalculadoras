export interface GuideArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  highlightBox?: {
    title: string;
    text: string;
  };
}

export interface GuideArticle {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  categoryKey: string;
  categoryLabel: string;
  categorySlug: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  relatedCalculators: {
    id: string;
    name: string;
    description: string;
  }[];
  sections: GuideArticleSection[];
  faq: {
    q: string;
    a: string;
  }[];
}

export const GUIDES_ARTICLES: GuideArticle[] = [
  {
    slug: 'guia-completo-rescisao-clt-2026',
    title: 'Guia Completo de Rescisão CLT em 2026: Verbas, Aviso Prévio, FGTS e Prazos',
    metaDescription: 'Entenda passo a passo todas as verbas da rescisão trabalhista CLT em 2026: saldo de salário, aviso prévio proporcional, férias, 13º, multa de 40% do FGTS e seguro-desemprego.',
    excerpt: 'Aprenda a conferir linha por linha o Termo de Rescisão do Contrato de Trabalho (TRCT), descubra como a modalidade de desligamento muda seus direitos e simule os valores exatos.',
    categoryKey: 'profissoes',
    categoryLabel: 'Trabalhista & Profissões',
    categorySlug: 'trabalhista-profissoes',
    author: 'Equipe Editorial Brasil Calculadoras',
    authorRole: 'Curadoria Trabalhista & Cálculos CLT',
    publishedAt: '2026-02-10',
    updatedAt: '2026-11-18',
    readingTime: '9 min de leitura',
    relatedCalculators: [
      {
        id: 'calculadora-de-rescisao-clt',
        name: 'Cálculo de Rescisão CLT',
        description: 'Simule todas as verbas rescisórias líquidas com descontos progressivos de INSS e IRRF.'
      },
      {
        id: 'calculo-fgts-acumulado',
        name: 'Calculadora de FGTS',
        description: 'Estime o saldo acumulado na conta vinculada e o valor exato da multa rescisória.'
      },
      {
        id: 'calculadora-de-ferias-clt',
        name: 'Férias Proporcionais & Vendidas',
        description: 'Confira férias vencidas, proporcionais com 1/3 constitucional e reflexos.'
      },
      {
        id: 'calculadora-de-decimo-terceiro',
        name: 'Cálculo de 13º Salário',
        description: 'Apure os avos proporcionais do 13º salário até a projeção do aviso prévio.'
      },
      {
        id: 'estimativa-seguro-desemprego',
        name: 'Seguro-Desemprego',
        description: 'Descubra quantas parcelas e qual valor mensal você pode receber após a dispensa.'
      }
    ],
    sections: [
      {
        heading: 'Por que conferir cada verba da rescisão trabalhista antes de assinar',
        paragraphs: [
          'O encerramento de um contrato de trabalho sob o regime da Consolidação das Leis do Trabalho (CLT) envolve dezenas de rubricas legais que dependem diretamente do motivo da saída, do tempo de empresa e da composição salarial dos últimos meses. Não é raro encontrar divergências no Termo de Rescisão do Contrato de Trabalho (TRCT), especialmente quanto à projeção do aviso prévio proporcional sobre férias e décimo terceiro salário, contagem da fração igual ou superior a quinze dias no mês de desligamento e reflexos de médias de horas extras, adicionais noturnos ou comissões habituais.',
          'Compreender a arquitetura matemática da rescisão permite que o trabalhador confira seu acerto com autonomia e segurança, além de ajudar gestores de recursos humanos e empreendedores a provisionarem corretamente o caixa necessário antes de comunicar um desligamento. Em qualquer cenário, a Reforma Trabalhista de 2017 (Lei nº 13.467) consolidou o prazo único de pagamento de dez dias corridos contados a partir do término do contrato para todas as modalidades, independentemente de o aviso prévio ter sido trabalhado ou indenizado.'
        ],
        bullets: [
          'Saldo de salário: remuneração proporcional aos dias efetivamente trabalhados no mês da demissão, calculada dividindo o salário mensal por 30 e multiplicando pelos dias.',
          'Aviso prévio proporcional (Lei nº 12.506/2011): começa em 30 dias e ganha 3 dias adicionais por ano completo trabalhado na mesma empresa, até o teto de 90 dias.',
          '13º salário proporcional: corresponde a 1/12 por mês com pelo menos 15 dias de trabalho ou de projeção do aviso prévio no ano corrente.',
          'Férias vencidas e proporcionais acrescidas do terço constitucional: sempre pagas com adicional obrigatório de 1/3 (33,33%), inclusive nos pedidos de demissão.',
          'Multa de 40% sobre o saldo do FGTS (ou 20% no acordo consensual do Art. 484-A): calculada sobre a soma de todos os depósitos realizados pelo empregador durante o contrato, e não apenas sobre o saldo atual caso tenha havido saque-aniversário.'
        ]
      },
      {
        heading: 'Como o motivo da demissão transforma o valor final do acerto',
        paragraphs: [
          'Existem quatro cenários principais de encerramento contratual na legislação brasileira, e cada um deles ativa ou bloqueia direitos financeiros específicos. Na dispensa sem justa causa por iniciativa da empresa, o trabalhador preserva a integralidade das verbas: recebe aviso prévio (trabalhado ou indenizado com projeção completa), saldo de salário, férias vencidas e proporcionais mais um terço, décimo terceiro proporcional, saque integral do FGTS depositado, multa rescisória de 40% e guias para habilitação ao seguro-desemprego se preencher os critérios de carência.',
          'No pedido de demissão por iniciativa do empregado, permanecem devidos o saldo de salário, o décimo terceiro proporcional e todas as férias vencidas e proporcionais com acréscimo de um terço constitucional (conforme Súmula 261 do TST). Entretanto, não há multa de 40%, não ocorre liberação imediata do FGTS nem acesso ao seguro-desemprego, e o empregado deve cumprir 30 dias de aviso prévio trabalhado — caso contrário, a empresa pode descontar o valor equivalente a um salário base mensal das verbas rescisórias.',
          'Já a demissão por comum acordo (artigo 484-A da CLT) cria uma via intermediária em que ambas as partes concordam com o encerramento: o aviso prévio indenizado cai pela metade (15 dias base mais metade do acréscimo proporcional), a multa do FGTS passa para 20%, o trabalhador movimenta até 80% do saldo da conta vinculada e não recebe seguro-desemprego. Por fim, na demissão por justa causa decorrente de falta grave comprovada nos termos do artigo 482 da CLT, o desligado recebe apenas o saldo de salário dos dias trabalhados e eventuais férias vencidas com um terço, perdendo aviso prévio, férias proporcionais, décimo terceiro proporcional, multa e saque do FGTS.'
        ],
        highlightBox: {
          title: 'Atenção à regra dos 15 dias na contagem dos avos',
          text: 'Se a data final projetada do seu contrato cair a partir do dia 15 do mês, esse mês inteiro passa a contar como mais 1/12 de décimo terceiro e mais 1/12 de férias proporcionais! Além disso, o aviso prévio indenizado conta como tempo de serviço para essa projeção.'
        }
      },
      {
        heading: 'Exemplo numérico passo a passo de uma rescisão sem justa causa',
        paragraphs: [
          'Considere um profissional contratado há exatamente 3 anos e 4 meses completos, com salário bruto mensal de R$ 4.000,00, demitido sem justa causa em 18 de outubro com aviso prévio indenizado, sem férias vencidas acumuladas e com 4 meses decorridos do período aquisitivo atual. Primeiro apura-se o saldo de salário de outubro: R$ 4.000,00 divididos por 30 dias e multiplicados por 18 dias resulta em R$ 2.400,00.',
          'Em seguida, aplica-se a Lei nº 12.506/2011: pelos 3 anos completos de vínculo, os 30 dias base recebem mais 9 dias adicionais, totalizando 39 dias de aviso prévio indenizado, equivalentes a (R$ 4.000,00 / 30) × 39 = R$ 5.200,00. Projetando esses 39 dias a partir de 19 de outubro, a data final projetada do contrato avança para o fim de novembro. Portanto, além de contar até outubro (10/12), o trabalhador ganha mais um mês na contagem do 13º proporcional (11/12 = R$ 3.666,67) e passa de 4/12 para 6/12 de férias proporcionais, que somadas ao terço constitucional totalizam R$ 2.000,00 + R$ 666,67 = R$ 2.666,67.',
          'Por fim, soma-se o FGTS depositado ao longo de 40 meses de contrato (estimado em 8% mensais = R$ 12.800,00 sem considerar atualização monetária acumulada) acrescido do FGTS incidente sobre o mês da rescisão e sobre o aviso prévio, aplicando-se sobre o montante total para fins rescisórios a multa de 40% paga diretamente na conta vinculada via GRRF / FGTS Digital. Sobre o saldo de salário e sobre a parcela mensal do 13º incidem os descontos progressivos da tabela de INSS e eventual IRRF.'
        ]
      },
      {
        heading: 'Saque-Aniversário, descontos fiscais e conferência do FGTS Digital',
        paragraphs: [
          'Um ponto que gera muitas dúvidas em 2026 é o impacto da opção prévia pelo Saque-Aniversário do FGTS. O trabalhador que aderiu a essa modalidade e é demitido sem justa causa continua recebendo integralmente a multa indenizatória de 40% depositada pela empresa sobre o saldo para fins rescisórios, porém o saldo remanescente na conta vinculada permanece retido para saques anuais futuros no mês de aniversário (salvo situações específicas ou regras excepcionais editadas pelo governo). Em compensação, quando retorna à modalidade Saque-Rescisão, a mudança só produz efeitos após o período de carência legal de 25 meses.',
          'Quanto à tributação no TRCT, lembre-se de que férias indenizadas pagas na rescisão — bem como o respectivo terço constitucional e o aviso prévio indenizado — são isentas de contribuição previdenciária e de Imposto de Renda Retido na Fonte conforme jurisprudência pacificada e instrução normativa da Receita Federal. Já o saldo de salário, horas extras e comissões sofrem retenção regular na tabela progressiva de INSS e IRRF separadamente da tributação exclusiva do 13º salário.'
        ]
      }
    ],
    faq: [
      {
        q: 'Qual é o prazo legal para a empresa depositar o dinheiro da rescisão CLT?',
        a: 'A empresa tem até 10 dias corridos contados do término efetivo do contrato de trabalho para quitar as verbas rescisórias e entregar os documentos do FGTS e seguro-desemprego, sob pena de multa equivalente a um salário do empregado (Art. 477, § 8º da CLT).'
      },
      {
        q: 'Quem pede demissão perde as férias proporcionais ou o 13º salário?',
        a: 'Não! Mesmo no pedido de demissão com menos de um ano de empresa, o trabalhador tem direito garantido tanto ao 13º salário proporcional aos meses trabalhados no ano quanto às férias proporcionais acrescidas do terço constitucional.'
      },
      {
        q: 'A multa de 40% do FGTS incide sobre o saldo atual ou sobre tudo que foi depositado?',
        a: 'Incide sobre o montante atualizado de todos os depósitos realizados pelo empregador durante aquele vínculo de emprego (saldo para fins rescisórios), mesmo que o trabalhador tenha feito saques parciais para compra de imóvel ou saque-aniversário.'
      },
      {
        q: 'O aviso prévio proporcional de até 90 dias também se aplica quando o trabalhador pede demissão?',
        a: 'Não. Conforme entendimento consolidado pelo TST, o acréscimo de 3 dias por ano trabalhado da Lei nº 12.506/2011 beneficia exclusivamente o empregado dispensado sem justa causa; no pedido de demissão, o aviso prévio continua limitado a 30 dias.'
      },
      {
        q: 'Quanto tempo preciso trabalhar para ter direito ao seguro-desemprego na primeira solicitação?',
        a: 'Na primeira solicitação, exige-se pelo menos 12 meses com carteira assinada nos últimos 18 meses imediatamente anteriores à demissão sem justa causa. Na segunda solicitação, caem para 9 meses nos últimos 12 meses; e a partir da terceira, exigem-se apenas 6 meses.'
      }
    ]
  },
  {
    slug: 'clt-ou-pj-como-calcular-equivalencia-salarial',
    title: 'CLT ou PJ em 2026: Como Calcular a Equivalência Real, Impostos e Benefícios',
    metaDescription: 'Aprenda a comparar propostas de emprego CLT e contratos PJ (MEI ou Simples Nacional Anexo III/V) considerando 13º salário, férias, FGTS, benefícios e custos contábeis.',
    excerpt: 'Descubra por que aceitar uma proposta PJ apenas multiplicando o salário CLT por 1,2 pode gerar prejuízo líquido e veja o método matemático completo para negociar seu faturamento mensal.',
    categoryKey: 'financas',
    categoryLabel: 'Finanças & Negócios',
    categorySlug: 'financas-negocios',
    author: 'Equipe Editorial Brasil Calculadoras',
    authorRole: 'Análise Financeira & Tributária',
    publishedAt: '2026-02-24',
    updatedAt: '2026-11-18',
    readingTime: '10 min de leitura',
    relatedCalculators: [
      {
        id: 'clt-pj',
        name: 'Comparador CLT vs PJ',
        description: 'Compare o poder de compra líquido anual entre remuneração CLT e faturamento PJ.'
      },
      {
        id: 'ferias-pj-equivalente',
        name: 'Férias PJ vs CLT Equivalente',
        description: 'Descubra quanto um profissional PJ precisa faturar a mais por mês para tirar 30 dias pagos.'
      },
      {
        id: 'tabela-simples',
        name: 'Simples Nacional Simulador',
        description: 'Calcule a alíquota efetiva do Simples Nacional e o impacto do Fator R nos Anexos III e V.'
      },
      {
        id: 'calculadora-das-mei',
        name: 'Calculadora DAS MEI 2026',
        description: 'Verifique o valor exato da guia mensal do MEI e se sua atividade permite enquadramento.'
      },
      {
        id: 'calculadora-de-salario-liquido',
        name: 'Calculadora de Salário Líquido',
        description: 'Apure o salário líquido exato na carteira após descontos oficiais de INSS e IRRF.'
      }
    ],
    sections: [
      {
        heading: 'A ilusão do valor bruto na comparação entre CLT e Pessoa Jurídica',
        paragraphs: [
          'Ao receber uma proposta de trabalho como Pessoa Jurídica (PJ) com faturamento mensal de R$ 8.000,00 para substituir um cargo CLT de R$ 6.000,00 brutos, muitos profissionais fecham contrato imediatamente imaginando ganhar 33% a mais. Contudo, a conta simplificada ignora que a remuneração CLT não se resume aos doze salários mensais no holerite: ela traz embutida uma série de verbas diferidas, proteções previdenciárias e benefícios corporativos pagos integralmente pela empresa sem aparecerem no depósito líquido mensal.',
          'Enquanto o profissional CLT recebe 13º salário integral, férias anuais remuneradas acrescidas de 1/3 constitucional, depósitos mensais de 8% de FGTS (com perspectiva de multa de 40% em caso de dispensa sem justa causa), vale-refeição, vale-alimentação, plano de saúde subsidiado e direito ao seguro-desemprego, o prestador de serviços PJ assume integralmente sua própria previdência, custeia contabilidade mensal, paga impostos sobre a nota fiscal e precisa formar sua própria reserva para dias sem faturamento em férias ou adoecimento.'
        ],
        bullets: [
          'Pacote oculto da CLT no ano: soma 13 salários (com o 13º) + 0,33 salário do terço de férias + 8% × 13 de FGTS ≈ 14,37 salários equivalentes antes mesmo de contar vale-refeição e plano de saúde.',
          'Custos fixos mensais do PJ: guia de impostos (DAS MEI ou Simples Nacional), pró-labore com INSS de 11% ou mais, honorários de contador (R$ 150 a R$ 450/mês) e certificado digital anual.',
          'Segurança e ausências remuneradas: licenças médicas curtas e férias anuais de 30 dias só continuam gerando renda ao PJ se houver cláusula contratual específica de descanso remunerado ou reserva prévia de ~11,1% ao mês.'
        ]
      },
      {
        heading: 'Enquadramento tributário do PJ: MEI vs Simples Nacional com Fator R',
        paragraphs: [
          'O custo tributário do profissional PJ muda radicalmente conforme a natureza da atividade exercida e o faturamento anual previsto. O Microempreendedor Individual (MEI) possui teto de faturamento anual de R$ 81.000,00 (média de R$ 6.750,00 por mês) e paga uma guia fixa reduzida (DAS MEI). Contudo, diversas profissões intelectuais regulamentadas — como desenvolvedores de software, engenheiros, médicos, advogados, arquitetos, consultores de gestão e contadores — são legalmente impedidas de atuar como MEI, devendo abrir uma Microempresa (ME) no Simples Nacional.',
          'Dentro do Simples Nacional, serviços de tecnologia, engenharia, design e consultoria normalmente iniciam no Anexo V com alíquota nominal de 15,5% na primeira faixa de faturamento (até R$ 180 mil em 12 meses). Porém, utilizando corretamente o mecanismo legal do Fator R (mantendo folha de salários e pró-labore dos últimos 12 meses igual ou superior a 28% do faturamento bruto), a mesma empresa pode tributar pelo Anexo III, onde a alíquota inicial cai drasticamente para 6% — gerando economia tributária expressiva mesmo após considerar o INSS e eventual IRRF sobre o pró-labore.'
        ],
        highlightBox: {
          title: 'Regra prática do ponto de equilíbrio (Break-Even CLT vs PJ)',
          text: 'Para preservar exatamente o mesmo poder aquisitivo anual líquido e padrão de benefícios de uma vaga CLT com plano de saúde e vale-refeição, uma proposta PJ no Simples Nacional normalmente precisa oferecer faturamento bruto de 1,40 a 1,65 vez o salário bruto CLT (ou até mais em faixas salariais intermediárias com benefícios robustos).'
        }
      },
      {
        heading: 'Simulação numérica comparativa: CLT R$ 7.000 vs PJ R$ 10.500',
        paragraphs: [
          'Tomemos um exemplo realista em 2026 para comparar um salário CLT bruto de R$ 7.000,00 acompanhado de R$ 900,00 de vale-refeição/alimentação e R$ 600,00 de plano de saúde empresarial custeado integralmente pela empresa, frente a uma proposta PJ de R$ 10.500,00 mensais emitidos via nota fiscal de serviço (Microempresa no Simples Nacional Anexo III pelo Fator R).',
          'No cenário CLT, após os descontos oficiais de INSS e IRRF, o líquido mensal depositado gira em torno de R$ 5.450,00. Somando ao longo de 12 meses o líquido do 13º salário (~R$ 5.450), o adicional líquido do terço de férias (~R$ 1.850), o FGTS anual depositado de R$ 7.280,00 (13 × 8% × R$ 7.000) e R$ 18.000,00 anuais em benefícios isentos (VR + saúde), a riqueza líquida total acumulada no ano pelo colaborador CLT aproxima-se de R$ 98.000,00 — além do direito eventual à multa de 40% e seguro-desemprego.',
          'No cenário PJ de R$ 10.500,00 mensais (R$ 126.000,00 por ano), com imposto do Simples Nacional Anexo III em 6% (R$ 630/mês), pró-labore de R$ 2.940,00 (28%) gerando cerca de R$ 323,40 de INSS + IRRF residual, honorários contábeis de R$ 220/mês e aquisição particular do mesmo plano de saúde (R$ 600/mês) mais alimentação (R$ 900/mês), restam cerca de R$ 7.820,00 livres por mês. Multiplicando por 11 meses faturados (se tirar 1 mês de férias sem receita), a disponibilidade anual atinge ~R$ 86.000,00 sem FGTS — mostrando matematicamente que R$ 10.500 PJ só empata ou supera R$ 7.000 CLT se houver descanso remunerado negociado em contrato ou faturamento próximo de R$ 11.500–R$ 12.000.'
        ]
      },
      {
        heading: 'Cuidados contratuais e riscos jurídicos na prestação PJ',
        paragraphs: [
          'Além do cálculo financeiro puro, quem migra para o modelo PJ deve revisar atentamente cláusulas de exclusividade, multas de rescisão contratual unilateral, responsabilidade civil por atrasos e política de reajuste anual pelo IPCA ou IGP-M. Em contratos genuínos entre empresas (B2B), é saudável negociar aviso prévio recíproco de 30 dias para encerramento sem justa causa e previsão expressa de 20 a 30 dias anuais de pausa operacional sem desconto na mensalidade fixa.',
          'Do ponto de vista da gestão patrimonial, o profissional PJ bem-sucedido trata a diferença imediata de fluxo de caixa como capital de provisão: separa mensalmente em aplicação líquida (como Tesouro Selic ou CDB de liquidez diária) um percentual fixo para construir seu próprio "FGTS particular", reserva de emergência de seis meses de despesas fixas e aposentadoria complementar, evitando transformar recursos de longo prazo em padrão de consumo imediato.'
        ]
      }
    ],
    faq: [
      {
        q: 'Qual é o multiplicador mínimo recomendado para trocar CLT por PJ?',
        a: 'Em regra geral, negocie pelo menos 1,4x a 1,6x o salário bruto CLT quando há benefícios relevantes (VR/VA e plano de saúde). Abaixo de 1,35x, quase sempre o profissional perde remuneração total anual acumulada ao incluir 13º, férias, FGTS e custos de contador.'
      },
      {
        q: 'Como funciona o Fator R para pagar apenas 6% no Simples Nacional em vez de 15,5%?',
        a: 'Se o total gasto com folha salarial e pró-labore dos sócios nos últimos 12 meses representar 28% ou mais da receita bruta acumulada do mesmo período, atividades de TI, engenharia e consultoria podem ser tributadas pelo Anexo III (alíquota inicial de 6%) em vez do Anexo V (15,5%).'
      },
      {
        q: 'Profissional PJ tem direito a 13º salário, férias pagas ou seguro-desemprego?',
        a: 'Não por força de lei trabalhista. Como a relação é comercial entre duas empresas, férias ou bônus anuais só existem se negociados expressamente no contrato de prestação de serviços B2B; igualmente, não há depósitos de FGTS nem habilitação ao seguro-desemprego.'
      },
      {
        q: 'Posso usar MEI para trabalhar como programador, analista ou consultor?',
        a: 'Não. Atividades intelectuais de desenvolvimento de software, consultoria, engenharia, jornalismo, marketing estratégico e profissões regulamentadas não constam no rol permitido do MEI, exigindo abertura de Microempresa (ME) no Simples Nacional.'
      },
      {
        q: 'A distribuição de lucros do PJ paga Imposto de Renda Pessoa Física?',
        a: 'Quando a empresa mantém escrituração contábil regular feita por contador demonstrando o lucro contábil efetivamente apurado após despesas e impostos, o valor transferido como distribuição de lucros é isento de IRPF e INSS pela legislação vigente em 2026.'
      }
    ]
  },
  {
    slug: 'juros-compostos-inflacao-ipca-renda-fixa',
    title: 'Juros Compostos, Inflação (IPCA) e Poder de Compra: O Guia da Matemática Financeira',
    metaDescription: 'Domine a fórmula dos juros compostos com aportes mensais, entenda a diferença entre rentabilidade nominal e juro real descontando o IPCA e simule metas de liberdade financeira.',
    excerpt: 'Entenda por que ganhar 10% ao ano com inflação de 5% não dobra seu patrimônio em poder de compra, veja como calcular a taxa real de Fisher e compare Renda Fixa com Poupança.',
    categoryKey: 'financas',
    categoryLabel: 'Finanças & Negócios',
    categorySlug: 'financas-negocios',
    author: 'Equipe Editorial Brasil Calculadoras',
    authorRole: 'Educação Financeira & Matemática Aplicada',
    publishedAt: '2026-03-05',
    updatedAt: '2026-11-18',
    readingTime: '9 min de leitura',
    relatedCalculators: [
      {
        id: 'juros-compostos',
        name: 'Juros Compostos',
        description: 'Projete seu montante futuro mês a mês com capital inicial, aportes e taxa composta.'
      },
      {
        id: 'conversor-inflacao-ipca',
        name: 'Calculadora IPCA Acumulado',
        description: 'Calcule a corrosão do poder de compra ou atualize valores históricos pela inflação.'
      },
      {
        id: 'rendimento-poupanca',
        name: 'Rendimento de Poupança',
        description: 'Compare o ganho líquido da caderneta de poupança frente a títulos atrelados ao CDI.'
      },
      {
        id: 'irrf-investimentos',
        name: 'IR s/ Aplicações Financeiras',
        description: 'Simule a mordida exata do Imposto de Renda regressivo de 22,5% a 15% sobre o lucro.'
      },
      {
        id: 'viver-de-renda',
        name: 'Capital de Viver de Renda',
        description: 'Descubra de quanto patrimônio investido você precisa para gerar uma renda passiva mensal.'
      }
    ],
    sections: [
      {
        heading: 'A mecânica exponencial dos juros compostos sobre o tempo',
        paragraphs: [
          'Diferentemente dos juros simples — em que a taxa de retorno incide sempre exclusivamente sobre o capital inicial depositado —, nos juros compostos o rendimento gerado ao término de cada mês incorpora-se ao saldo principal e passa a render juros no período seguinte. Essa capitalização sobre capitalização cria uma curva exponencial discreta que começa quase imperceptível nos primeiros dois anos, mas ganha inclinação acelerada a partir do quinto, décimo e vigésimo ano.',
          'A equação clássica sem aportes é expressa por M = C × (1 + i)^t, onde C representa o capital inicial, i a taxa unitária por período (por exemplo, 0,0085 para 0,85% ao mês) e t o número total de períodos. Quando o investidor adiciona aportes regulares mensais P, entra em cena a soma da progressão geométrica das parcelas capitalizadas: M = C × (1 + i)^t + P × [((1 + i)^t - 1) / i]. Nos simuladores modernos do Brasil Calculadoras, cada mês é iterado exatamente passo a passo para revelar separadamente quanto saiu do bolso do poupador (total investido) e quanto foi fabricado pelos juros acumulados.'
        ],
        bullets: [
          'O papel dominante do tempo: dobrar o prazo de aplicação de 10 para 20 anos com os mesmos aportes mensais frequentemente triplica ou quadruplica o montante final, pois os juros passam a superar amplamente novos depósitos.',
          'Conversão correta entre taxa anual e mensal: 12% ao ano não equivale exatamente a 1% ao mês! Pela equivalência composta, (1,12)^(1/12) - 1 resulta em aproximadamente 0,9489% ao mês.',
          'Consistência nos aportes: manter aportes mensais disciplinados em renda fixa de baixo custo supera esperar grandes somas esporádicas enquanto o dinheiro permanece parado em conta corrente.'
        ]
      },
      {
        heading: 'Rentabilidade nominal vs rentabilidade real: a Equação de Fisher e o IPCA',
        paragraphs: [
          'Um dos erros mais comuns ao planejar aposentadoria ou comprar imóveis no longo prazo é confundir rentabilidade nominal (o número exibido no aplicativo do banco) com ganho real de poder de compra. Se um CDB paga 11% ao ano antes dos impostos e você saca após pagar 15% de Imposto de Renda, a taxa nominal líquida cai para 9,35% ao ano. Caso o IPCA acumulado no mesmo ano seja de 4,5%, muita gente subtrai 9,35% - 4,50% = 4,85% — contudo, a matemática financeira correta exige a divisão pela Equação de Fisher.',
          'Pela fórmula exata de Fisher, a Taxa Real é obtida por: (1 + r_real) = (1 + i_liquido) / (1 + inflamacao). Aplicando o exemplo anterior: (1,0935 / 1,0450) - 1 = 0,0464, ou seja, 4,64% ao ano de aumento real acima da inflação. Quando o investidor aplica na Caderneta de Poupança (regra de 0,5% ao mês + TR quando a Selic supera 8,5% a.a., resultando próximo de 6,17% a.a. + TR) em períodos de inflação a 5% ou 6%, o retorno real aproxima-se perigosamente de zero, mantendo o dinheiro seguro apenas nominalmente.'
        ],
        highlightBox: {
          title: 'Use sempre a taxa real ao projetar metas acima de 5 anos',
          text: 'Se você precisa de R$ 5.000,00 mensais no padrão de vida de hoje para se aposentar daqui a 20 anos, projete seus juros compostos usando a taxa líquida real esperada acima da inflação (ex: 5% ou 6% a.a. em vez de 12% a.a.). Assim, o patrimônio final mostrado pelo simulador já estará expresso em poder de compra atual!'
        }
      },
      {
        heading: 'Comparação prática: R$ 1.000/mês durante 15 anos em três cenários',
        paragraphs: [
          'Imagine três investidores disciplinados que começam do zero e aplicam rigorosamente R$ 1.000,00 todos os meses durante 15 anos (180 meses), desembolsando um total acumulado de R$ 180.000,00 do próprio trabalho. O Investidor A mantém os recursos na Poupança rendendo cerca de 0,55% ao mês líquido (equivalente a ~6,8% a.a.); ao final dos 15 anos, alcançará aproximadamente R$ 306.600,00 nominais, sendo R$ 126.600,00 de juros.',
          'O Investidor B escolhe títulos conservadores do Tesouro Selic ou CDB 100% do CDI de banco sólido, obtendo média líquida após IR de 0,80% ao mês (~10,03% a.a.). Aos 180 meses, seu saldo atinge cerca de R$ 400.400,00 — quase R$ 94.000,00 a mais do que o Investidor A sem correr risco adicional significativo de mercado. Já o Investidor C obtém retorno líquido médio de 0,95% ao mês em carteira balanceada de longo prazo (~12,0% a.a.) e acumula R$ 472.700,00 — demonstrando como diferenças aparentemente pequenas na taxa mensal produzem abismos financeiros ao longo do tempo.',
          'Na ponta inversa, a mesma força exponencial trabalha contra quem contrai dívidas no cartão de crédito rotativo ou cheque especial: juros de 12% ao mês transformam uma fatura não paga de R$ 2.000,00 em mais de R$ 7.790,00 em apenas um ano, justificando por que quitar dívidas caras é matematicamente o melhor "investimento" possível antes de começar a poupar.'
        ]
      },
      {
        heading: 'Tributação regressiva da Renda Fixa e isenções importantes',
        paragraphs: [
          'Ao simular investimentos tributáveis como CDBs, RDBs, Tesouro Direto e Fundos DI, nunca se esqueça da tabela regressiva de Imposto de Renda Retido na Fonte: aplicações resgatadas até 180 dias pagam 22,5% sobre o lucro; de 181 a 360 dias caem para 20%; de 361 a 720 dias reduzem-se para 17,5%; e acima de 720 dias (aproximadamente dois anos) estabilizam na menor faixa de 15%. Já LCIs, LCAs, CRIs, CRAs e debêntures incentivadas de pessoa física permanecem isentas de IR dentro das regras de prazo de carência mínimo.',
          'Outro cuidado vital nos prazos inferiores a 30 dias é o IOF (Imposto sobre Operações Financeiras) regressivo: no primeiro dia de aplicação o tributo consome 96% do rendimento, caindo diariamente até zerar completamente no 30º dia corrido. Por essa razão, reservas destinadas a giro semanal raramente se beneficiam de ativos com carência curta ou incidência diária de IOF se comparadas a contas remuneradas específicas.'
        ]
      }
    ],
    faq: [
      {
        q: 'Qual é a diferença prática entre 100% do CDI e a Poupança em 2026?',
        a: 'Quando a taxa Selic está acima de 8,5% ao ano, a Poupança rende 0,5% ao mês mais TR (aproximadamente 6,17% ao ano + TR), ao passo que um CDB a 100% do CDI rende próximo da Selic menos 15% a 22,5% de IR sobre o lucro — entregando retorno líquido expressivamente superior à Poupança em qualquer prazo superior a 30 dias.'
      },
      {
        q: 'Posso multiplicar a taxa mensal por 12 para achar a taxa anual composta?',
        a: 'Não. A soma simples subestima o efeito dos juros sobre juros. A fórmula exata é [(1 + taxa_mensal)^12 - 1]. Por exemplo, 1% ao mês equivale a (1,01)^12 - 1 = 12,68% ao ano, e não 12%.'
      },
      {
        q: 'Quanto tempo leva para dobrar um dinheiro aplicado segundo a Regra dos 72?',
        a: 'A Regra dos 72 é uma aproximação mental rápida: divida 72 pela taxa anual composta esperada. Com retorno líquido de 9% ao ano, seu dinheiro dobra em cerca de 72 / 9 = 8 anos; a 12% ao ano, dobra em aproximadamente 6 anos.'
      },
      {
        q: 'O Imposto de Renda da Renda Fixa incide sobre o valor total sacado ou só sobre o rendimento?',
        a: 'Incide exclusivamente sobre o lucro obtido no resgate (Valor Bruto Final menos Valor Principal Aplicado), nunca sobre o dinheiro que você originalmente depositou.'
      },
      {
        q: 'Como incluir a inflação ao simular quanto guardar para aposentadoria?',
        a: 'Calcule primeiro o juro real esperado pela fórmula [(1 + taxa_líquida_anual) / (1 + inflação_anual)] - 1 e preencha essa taxa real na Calculadora de Juros Compostos; dessa forma o resultado final refletirá poder de compra equivalente aos preços de hoje.'
      }
    ]
  },
  {
    slug: 'direitos-trabalhistas-ferias-decimo-terceiro-horas-extras-inss-irrf',
    title: 'Férias, 13º Salário, Horas Extras, INSS e IRRF 2026: Como Conferir Seu Holerite',
    metaDescription: 'Guia prático de conferência de folha de pagamento CLT em 2026: entenda o cálculo progressivo do INSS por faixas, tabela de IRRF, terço de férias, abono pecuniário e horas extras com DSR.',
    excerpt: 'Aprenda a auditar cada linha do seu contracheque mensal, descubra por que o INSS nunca é multiplicado pela alíquota cheia sobre todo o salário e calcule horas extras e férias sem erro.',
    categoryKey: 'profissoes',
    categoryLabel: 'Trabalhista & Profissões',
    categorySlug: 'trabalhista-profissoes',
    author: 'Equipe Editorial Brasil Calculadoras',
    authorRole: 'Curadoria Trabalhista & Folha de Pagamento',
    publishedAt: '2026-03-20',
    updatedAt: '2026-11-18',
    readingTime: '10 min de leitura',
    relatedCalculators: [
      {
        id: 'calculadora-de-ferias-clt',
        name: 'Férias Proporcionais & Vendidas',
        description: 'Simule férias integrais ou fracionadas com venda de 10 dias (abono pecuniário) e terço.'
      },
      {
        id: 'calculadora-de-decimo-terceiro',
        name: 'Cálculo de 13º Salário',
        description: 'Compare exatamente o valor líquido da 1ª e da 2ª parcela do décimo terceiro.'
      },
      {
        id: 'calculadora-de-horas-extras',
        name: 'Horas Extras com Adicional',
        description: 'Calcule horas extras de 50% e 100% pelo divisor correto mais o reflexo no DSR.'
      },
      {
        id: 'simulador-inss-salario',
        name: 'Simulador de Desconto INSS 2026',
        description: 'Veja faixa a faixa o cálculo progressivo do INSS com alíquota efetiva real.'
      },
      {
        id: 'simulador-irrf-salario',
        name: 'Simulador de Imposto de Renda (IRRF) 2026',
        description: 'Descubra qual método reduz mais seu IRRF: deduções legais ou desconto simplificado.'
      }
    ],
    sections: [
      {
        heading: 'Desmistificando o cálculo progressivo do INSS e a dedução do IRRF',
        paragraphs: [
          'Uma das dúvidas mais recorrentes ao abrir o contracheque mensal surge quando o trabalhador vê "INSS 12%" ou "IRRF 15%" impresso no demonstrativo e tenta multiplicar essa alíquota diretamente pelo salário bruto — obtendo um desconto muito maior do que o efetivamente retido. Desde a Reforma da Previdência, tanto o INSS quanto o Imposto de Renda Retido na Fonte funcionam por fatiamento progressivo de alíquotas: cada parcela da remuneração paga uma taxa específica dentro de sua respectiva faixa, até atingir o teto previdenciário.',
          'Na apuração do IRRF, a Receita Federal aplica a base de cálculo após abater o INSS oficial retido mais R$ 189,59 por dependente legal declarado e eventual pensão alimentícia homologada — ou, automaticamente, o desconto simplificado mensal alternativo quando esse critério se revelar financeiramente mais vantajoso ao contribuinte assalariado. Esse detalhe garante que quem ganha próximo da faixa inicial ou não possui muitos dependentes pague o menor imposto permitido pela regra vigente.'
        ],
        bullets: [
          'INSS em camadas: um trabalhador com salário de R$ 3.500,00 não paga 12% sobre tudo; ele paga 7,5% sobre a primeira faixa, 9% sobre a segunda e 12% apenas sobre a parcela excedente, resultando em alíquota efetiva bem inferior a 12%.',
          'Base do IRRF: incide sobre o rendimento tributável já diminuído da contribuição previdenciária (ou sob o desconto simplificado, o que for mais benéfico).',
          'Dependentes no IRRF: cada dependente legal registrado junto ao RH reduz a base mensal de cálculo antes da aplicação das alíquotas progressivas.'
        ]
      },
      {
        heading: 'Férias CLT: terço constitucional, abono pecuniário e adiantamento do 13º',
        paragraphs: [
          'Após cada período aquisitivo de 12 meses de vigência contratual, o empregado adquire o direito a 30 dias de descanso remunerado com acréscimo de pelo menos um terço sobre o salário normal (Art. 7º, XVII da Constituição Federal). Caso tenha interesse pessoal, o trabalhador pode converter até um terço do período de férias (máximo de 10 dias) em abono pecuniário — a chamada "venda de férias" — desde que solicite formalmente à empresa até 15 dias antes do término do período aquisitivo.',
          'Financeiramente, o abono pecuniário possui vantagem tributária importante: conforme súmula e jurisprudência fiscal consolidada, os valores pagos a título de venda dos 10 dias (incluindo o terço proporcional sobre esses dias) são isentos de desconto de INSS e de Imposto de Renda na Fonte, aumentando expressivamente o valor líquido depositado dois dias antes do início do descanso. Contudo, lembre-se de que receber férias em um mês significa ficar com salário proporcional reduzido ou zerado no contracheque do mês subsequente ao retorno.'
        ],
        highlightBox: {
          title: 'Por que o salário cai no mês seguinte às férias?',
          text: 'O pagamento das férias antecipado antes de você sair de descanso já remunera os dias que você ficará em casa naquele período! Logo, no início do mês seguinte, você receberá apenas pelos dias em que efetivamente já voltou a trabalhar na empresa.'
        }
      },
      {
        heading: 'Por que a segunda parcela do 13º salário é menor que a primeira',
        paragraphs: [
          'A Gratificação Natalina (13º salário) prevista pela Lei nº 4.090/1962 é dividida obrigatoriamente em duas etapas no calendário empresarial: a primeira parcela (ou adiantamento) deve ser creditada até 30 de novembro e corresponde exatamente à metade (50%) do valor bruto proporcional aos avos acumulados, sem absolutamente nenhum desconto de INSS ou IRRF.',
          'Já a segunda parcela, depositada até o dia 20 de dezembro, quita a metade restante, porém sofre a incidência integral do INSS e do IRRF calculados sobre os 100% do décimo terceiro bruto (tributação exclusiva na fonte, separada do salário regular de dezembro). Por exemplo, sobre um salário de R$ 5.000,00 com 12/12 avos, a primeira parcela entrega R$ 2.500,00 exatos no bolso; na segunda parcela, aplicam-se ~R$ 500+ de INSS e o IRRF correspondente sobre os R$ 5.000,00 totais, fazendo com que o depósito de dezembro fique próximo de R$ 1.650,00 a R$ 1.850,00 dependendo dos dependentes.'
        ]
      },
      {
        heading: 'Cálculo exato de horas extras e reflexo obrigatório no DSR',
        paragraphs: [
          'Para calcular o valor da hora extra de um mensalista contratado para jornada padrão de 44 horas semanais, divide-se o salário contratual mensal pelo divisor oficial de 220 horas (para jornadas de 40h semanais aplica-se o divisor 200; para 36h semanais, divisor 180). Sobre o valor da hora normal encontrado aplicam-se os adicionais constitucionais ou de convenção coletiva: no mínimo 50% em dias úteis (fator 1,5) e 100% em domingos e feriados não compensados (fator 2,0).',
          'Muitos trabalhadores conferem apenas a quantidade de horas extras vezes o valor unitário e esquecem o DSR (Descanso Semanal Remunerado) sobre horas extras previsto na Lei nº 605/1949 e na Súmula 172 do TST. A regra do reflexo é direta: soma-se o valor financeiro total produzido em horas extras no mês, divide-se pelo número de dias úteis do mês de referência (incluindo os sábados) e multiplica-se pela quantidade de domingos e feriados do calendário daquele mês. Em meses com cinco domingos e feriados, esse reflexo adicional pode elevar em mais de 20% o ganho extra bruto no holerite — além de integrar também as médias anuais de férias e 13º salário.'
        ]
      }
    ],
    faq: [
      {
        q: 'Qual é o prazo máximo para a empresa pagar as férias e o 13º salário?',
        a: 'O pagamento das férias com 1/3 deve ocorrer até 2 dias antes do início efetivo do período de descanso (Art. 145 da CLT). Já o 13º salário deve ter a 1ª parcela quitada até 30 de novembro e a 2ª parcela até 20 de dezembro.'
      },
      {
        q: 'Faltas injustificadas reduzem os dias de férias e os avos do 13º?',
        a: 'Sim. Acima de 5 faltas injustificadas no período aquisitivo, os dias de férias começam a cair conforme a tabela do Art. 130 da CLT (24, 18 ou 12 dias, ou perda acima de 32 faltas). No 13º salário, um mês em que o empregado trabalhou menos de 15 dias não é computado como 1/12.'
      },
      {
        q: 'Posso dividir minhas férias em três períodos diferentes?',
        a: 'Sim, desde que haja concordância do empregado: um dos períodos não pode ser inferior a 14 dias corridos e os outros dois não podem ser inferiores a 5 dias corridos cada um (Art. 134, § 1º da CLT).'
      },
      {
        q: 'Quem trabalha à noite recebe adicional noturno sobre as horas extras também?',
        a: 'Sim. Horas extras prestadas entre 22h e 5h (no trabalho urbano) acumulam a hora noturna reduzida de 52m30s, o adicional noturno de no mínimo 20% e o adicional de hora extra (mínimo de 50%) em cascata multiplicativa.'
      },
      {
        q: 'Pensão alimentícia descontada em folha reduz o valor do IRRF?',
        a: 'Sim! Valores pagos a título de pensão alimentícia decorrentes de decisão judicial, acordo homologado ou escritura pública são integralmente deduzidos da base de cálculo mensal do Imposto de Renda Retido na Fonte.'
      }
    ]
  },
  {
    slug: 'financiamento-imobiliario-sac-vs-price-e-veiculos-cdc',
    title: 'Financiamento Imobiliário (SAC vs Price) e Veículos CDC: Como Pagar Menos Juros',
    metaDescription: 'Compare Tabela SAC e Tabela Price no financiamento de imóveis, descubra o poder das amortizações extras para cortar anos de dívida e simule financiamentos de veículos CDC.',
    excerpt: 'Veja matematicamente quando escolher SAC ou Tabela Price, calcule quanto cada amortização extraordinária economiza em juros futuros e entenda a composição do Custo Efetivo Total (CET).',
    categoryKey: 'imobiliario',
    categoryLabel: 'Imobiliário & Aluguel',
    categorySlug: 'imobiliario-aluguel',
    author: 'Equipe Editorial Brasil Calculadoras',
    authorRole: 'Mercado Imobiliário & Crédito Bancário',
    publishedAt: '2026-04-02',
    updatedAt: '2026-11-18',
    readingTime: '10 min de leitura',
    relatedCalculators: [
      {
        id: 'financiamento-price-sac',
        name: 'Financiamento Price vs SAC',
        description: 'Compare lado a lado a evolução das parcelas, amortização e juros totais entre SAC e Price.'
      },
      {
        id: 'amortizacao-extra',
        name: 'Simulador de Amortização Extra',
        description: 'Descubra quantos meses você elimina do financiamento ao abater parte do saldo devedor.'
      },
      {
        id: 'alugar-vs-comprar',
        name: 'Alugar ou Comprar Imóvel',
        description: 'Compare o custo de oportunidade do dinheiro investido versus a prestação do imóvel.'
      },
      {
        id: 'financiamento-veiculo',
        name: 'Simulador de Financiamento de Veículos e CDC 2026: Carros e Motos',
        description: 'Calcule parcelas fixas de carros e motos pela Tabela Price com diferentes valores de entrada.'
      },
      {
        id: 'custo-efetivo-total',
        name: 'Custo Efetivo Total (CET)',
        description: 'Avalie a taxa real do contrato somando juros nominais, tarifas bancárias, seguros MIP/DFI e IOF.'
      }
    ],
    sections: [
      {
        heading: 'Tabela SAC versus Tabela Price: entendendo a estrutura de cada prestação',
        paragraphs: [
          'Toda parcela paga em um financiamento bancário de longo prazo contém, essencialmente, duas frações principais (além de seguros habitacionais obrigatórios MIP/DFI e eventual taxa administrativa): a cota de amortização, que reduz efetivamente o saldo da dívida junto ao banco, e os juros remuneratórios cobrados sobre o saldo devedor ainda em aberto no mês corrente. O que diferencia os dois grandes sistemas brasileiros — SAC e Tabela Price — é exatamente a forma como essa amortização ocorre mês a mês.',
          'No Sistema de Amortização Constante (SAC), divide-se o valor financiado pelo número total de meses para obter uma amortização fixa mensal. Assim, como a dívida cai sempre pelo mesmo valor desde o primeiro mês, os juros calculados sobre o saldo remanescente também caem continuamente — tornando a primeira parcela mais pesada e todas as seguintes progressivamente mais leves até o final do contrato. Já na Tabela Price (Sistema Francês), a prestação total permanece nivelada do primeiro ao último mês: nos anos iniciais, porém, quase toda a parcela paga juros e muito pouco abate a dívida principal, fazendo o saldo cair lentamente e aumentando o total acumulado de juros pagos se o contrato seguir até o fim sem amortizações extras.'
        ],
        bullets: [
          'Quando escolher SAC: se sua renda familiar atual comporta a primeira parcela sem comprometer mais de 30% do orçamento líquido mensal, o SAC economiza dezenas ou centenas de milhares de reais em juros totais.',
          'Quando considerar Tabela Price: útil quando a parcela inicial do SAC ultrapassa o limite de aprovação bancária para a renda do comprador, ou em imóveis cuja venda/quitação antecipada está planejada em poucos anos.',
          'Seguros e CET: compare sempre o Custo Efetivo Total (CET) anual entre os bancos, pois tarifas de avaliação e seguros habitacionais alteram o custo real mesmo quando os juros nominais parecem idênticos.'
        ]
      },
      {
        heading: 'Simulação numérica comparativa de R$ 320.000 em 360 meses a 10% a.a.',
        paragraphs: [
          'Suponha a compra de um imóvel de R$ 400.000,00 com R$ 80.000,00 de entrada (20%) e R$ 320.000,00 financiados em 360 meses (30 anos) a uma taxa de juros efetiva aproximada de 0,80% ao mês (~10,03% ao ano), desconsiderando temporariamente indexadores como a TR para isolar a matemática pura do contrato.',
          'Pelo sistema SAC, a amortização mensal fixa é de R$ 320.000,00 / 360 = R$ 888,89 todos os meses. No mês 1, os juros equivalem a 0,80% de R$ 320.000,00 = R$ 2.560,00, gerando uma prestação inicial de R$ 3.448,89. Já na parcela 360, os juros caem para apenas R$ 7,11 e a prestação fecha em R$ 896,00, acumulando R$ 462.080,00 de juros totais ao longo de 30 anos (total pago sobre o principal: R$ 782.080,00).',
          'Nas mesmas exatas condições pela Tabela Price, a prestação fixa cai para R$ 2.712,67 desde o primeiro mês — R$ 736,22 mais acessível no início. Contudo, no mês 1 esses mesmos R$ 2.560,00 vão para juros e apenas R$ 152,67 amortizam a dívida! Após 360 parcelas constantes de R$ 2.712,67, o comprador desembolsará R$ 976.561,00, pagando R$ 656.561,00 apenas de juros — mais de R$ 194.400,00 de diferença financeira frente ao SAC.'
        ],
        highlightBox: {
          title: 'Por que amortizar no prazo derruba os juros drasticamente?',
          text: 'Quando você usa o FGTS ou o 13º salário para fazer uma amortização extraordinária reduzindo o PRAZO no início do financiamento, cada R$ 1.000 abatidos do saldo devedor hoje elimina diversas parcelas inteiras futuras do fim do contrato, evitando até R$ 2.000 a R$ 3.000 de juros compostos e seguros que seriam cobrados ao longo das décadas.'
        }
      },
      {
        heading: 'Alugar vs comprar e financiamentos de veículos no CDC',
        paragraphs: [
          'Antes de imobilizar todo o patrimônio na entrada de um imóvel, vale rodar a conta de Alugar vs Comprar aplicando o conceito de custo de oportunidade. Como regra prática do mercado brasileiro, o aluguel anual bruto residencial costuma equivaler a cerca de 0,4% a 0,55% do valor de mercado do imóvel ao mês (R$ 2.000/mês para um apartamento de R$ 400.000). Enquanto a taxa de juros dos financiamentos supera em muito o percentual do aluguel líquido sobre o imóvel, manter o dinheiro da entrada aplicado em renda fixa conservadora e pagar aluguel pode gerar maior liquidez e acúmulo patrimonial — salvo quando o comprador pretende morar por longos prazos com parcelas congeladas ou acessa taxas subsidiadas do Minha Casa Minha Vida.',
          'Nos financiamentos de carros e motos via CDC (Crédito Direto ao Consumidor), que operam quase sempre pela Tabela Price em prazos de 24 a 60 meses, a combinação entre IOF, cadastro e juros mensais de 1,4% a 2,4% ao mês exige ainda mais atenção: diferente de imóveis (que tendem a acompanhar a inflação no longo prazo), automóveis sofrem depreciação física anual média entre 8% e 15%. Dar entradas de 30% a 50% e encurtar o prazo para 24 ou 36 meses reduz drasticamente o risco de terminar o ano com uma dívida maior do que o próprio valor do carro na Tabela FIPE.'
        ]
      },
      {
        heading: 'Direito à liquidação antecipada com abatimento proporcional dos juros',
        paragraphs: [
          'Um direito garantido pelo artigo 52, parágrafo 2º do Código de Defesa do Consumidor (CDC) e pouco explorado por tomadores de crédito pessoal ou financiamento de veículos é o abatimento proporcional integral dos juros em qualquer quitação ou antecipação de parcelas. Ao adiantar as últimas prestações de um carnê CDC — começando preferencialmente das parcelas finais para as atuais — o consumidor paga apenas o valor presente descontado pela taxa do contrato, eliminando integralmente todos os juros futuros daquele período sem que o banco possa cobrar multa punitiva.'
        ]
      }
    ],
    faq: [
      {
        q: 'Na amortização extra do financiamento habitacional é melhor reduzir o prazo ou o valor da parcela?',
        a: 'Matematicamente, reduzir o prazo gera muito mais economia total de juros e seguros (MIP) ao encerrar a dívida anos antes. Reduzir o valor da parcela só é preferível quando a prioridade imediata da família é aliviar o orçamento mensal.'
      },
      {
        q: 'Posso usar o FGTS para amortizar financiamento tanto no SAC quanto na Tabela Price?',
        a: 'Sim, desde que o imóvel e o financiamento tenham sido enquadrados no Sistema Financeiro de Habitação (SFH), o comprador não possua outro imóvel residencial na mesma cidade/região metropolitana e respeite o intervalo mínimo de 2 anos entre usos do FGTS para amortização extraordinária.'
      },
      {
        q: 'Por que o saldo devedor do financiamento às vezes sobe mesmo pagando a parcela em dia?',
        a: 'Contratos atrelados à TR, IPCA ou poupança corrigem mensalmente o saldo devedor antes do abatimento da amortização. Nos primeiros anos da Tabela Price, quando a parcela de amortização é muito baixa, uma alta repentina do IPCA ou TR pode superar a cota amortizada naquele mês.'
      },
      {
        q: 'Dar entrada maior no financiamento de carro reduz a taxa de juros do banco?',
        a: 'Sim! Entradas a partir de 30% a 40% diminuem o risco de perda do banco em caso de inadimplência e frequentemente destravam taxas de juros menores nas mesas de crédito de financeiras e bancos digitais.'
      },
      {
        q: 'O que entra no cálculo do Custo Efetivo Total (CET)?',
        a: 'O CET inclui a taxa de juros nominal anual do contrato somada a IOF, tarifas de avaliação do imóvel/bem, tarifa de abertura de crédito ou cadastro e seguros obrigatórios embutidos nas parcelas.'
      }
    ]
  },
  {
    slug: 'metabolismo-basal-imc-macros-hidratacao-guia-saude',
    title: 'Metabolismo Basal (TMB), IMC, Macronutrientes e Hidratação: Guia Baseado em Evidências',
    metaDescription: 'Aprenda a calcular seu gasto calórico diário (TMB + fator de atividade), distribuir proteínas, carboidratos e gorduras com precisão e entender os limites reais do IMC.',
    excerpt: 'Descubra como estimar suas necessidades energéticas reais pela equação de Mifflin-St Jeor, monte a divisão correta de macronutrientes e entenda por que o IMC sozinho não avalia massa muscular.',
    categoryKey: 'saude',
    categoryLabel: 'Saúde & Dietas',
    categorySlug: 'saude-dietas',
    author: 'Equipe Editorial Brasil Calculadoras',
    authorRole: 'Saúde Quantitativa & Fisiologia do Exercício',
    publishedAt: '2026-04-18',
    updatedAt: '2026-11-18',
    readingTime: '9 min de leitura',
    relatedCalculators: [
      {
        id: 'calculo-calorias-metabolismo',
        name: 'Metabolismo Basal Ativo (TMB)',
        description: 'Estime seu gasto calórico em repouso e o gasto energético diário total (TDEE).'
      },
      {
        id: 'imc',
        name: 'Metabolismo e IMC Tracker',
        description: 'Calcule seu Índice de Massa Corporal e compare sua faixa de classificação OMS.'
      },
      {
        id: 'distribuição-macronutrientes',
        name: 'Divisão de Macros (Dietas)',
        description: 'Converta sua meta calórica diária em gramas exatas de proteínas, carboidratos e gorduras.'
      },
      {
        id: 'agua-humana',
        name: 'Ingestão de Água Diária',
        description: 'Calcule o volume diário recomendado de água proporcional ao seu peso corporal e treino.'
      },
      {
        id: 'frequencia-cardiaca-alvo',
        name: 'Frequência Cardíaca de Esporte',
        description: 'Identifique suas zonas de frequência cardíaca para queima de gordura e condicionamento.'
      }
    ],
    sections: [
      {
        heading: 'Taxa Metabólica Basal (TMB) e Gasto Energético Diário Total (TDEE)',
        paragraphs: [
          'Antes de iniciar qualquer estratégia nutricional — seja emagrecimento sustentável, ganho de massa magra ou manutenção atlética — é indispensável conhecer o orçamento energético do organismo. A Taxa Metabólica Basal (TMB) representa a quantidade mínima de quilocalorias consumida diariamente pelo corpo humano apenas para manter funções vitais em repouso absoluto: batimentos cardíacos, respiração, síntese proteica, funcionamento cerebral e manutenção da temperatura corporal.',
          'Entre as equações preditivas estudadas na nutrição clínica, a fórmula de Mifflin-St Jeor demonstrou excelente acurácia para adultos contemporâneos: TMB (homens) = (10 × peso em kg) + (6,25 × altura em cm) - (5 × idade) + 5; e TMB (mulheres) = (10 × peso em kg) + (6,25 × altura em cm) - (5 × idade) - 161. Contudo, ninguém passa o dia imóvel em jejum: para encontrar o Gasto Energético Diário Total (TDEE), multiplica-se a TMB por um fator de atividade que varia de 1,20 (sedentário de escritório) a 1,55 (treinos moderados de 3 a 5 vezes por semana) até 1,725 ou 1,90 em atletas com rotinas intensas.'
        ],
        bullets: [
          'Déficit calórico seguro para perda de gordura: manter ingestão de 300 a 500 kcal abaixo do TDEE (aproximadamente 15% a 20% de redução) preserva massa muscular e reduz fadiga metabólica.',
          'Perigo de dietas extremas abaixo da TMB: comer sistematicamente menos do que o metabolismo basal provoca letargia, queda de desempenho no treino, compulsão alimentar e redução da taxa metabólica adaptativa.',
          'Superávit controlado para hipertrofia: adicionar cerca de 250 a 400 kcal acima do TDEE associado ao treino de força promove ganho muscular progressivo minimizando acúmulo de gordura visceral.'
        ]
      },
      {
        heading: 'O que o IMC revela e onde ele precisa de avaliação complementar',
        paragraphs: [
          'Criado pelo estatístico belga Adolphe Quetelet no século XIX e adotado pela Organização Mundial da Saúde (OMS) em estudos populacionais, o Índice de Massa Corporal (IMC = Peso / Altura²) é uma triagem rápida e não invasiva para correlacionar peso e estatura. Em adultos, valores abaixo de 18,5 kg/m² apontam baixo peso; entre 18,5 e 24,9 indicam faixa eutrófica (peso adequado); entre 25,0 e 29,9 classificam sobrepeso; e a partir de 30,0 sinalizam diferentes graus de obesidade.',
          'Apesar da utilidade estatística em larga escala, o IMC não distingue massa muscular densa de tecido adiposo corporal nem identifica onde a gordura está distribuída. Um atleta de fisiculturismo com 10% de gordura corporal e grande hipertrofia pode facilmente registrar IMC de 28 kg/m², enquanto uma pessoa sedentária com baixa musculatura e elevada gordura visceral abdominal (o chamado "falso magro") pode marcar IMC de 22 kg/m² e ainda apresentar risco cardiometabólico elevado. Por esse motivo, recomendamos sempre acompanhar o IMC em conjunto com circunferência abdominal, relação cintura-estatura e percentual estimado de gordura.'
        ],
        highlightBox: {
          title: 'Conversão energética dos macronutrientes em gramas',
          text: 'Cada grama de proteína ou de carboidrato fornece exatamente 4 kcal, ao passo que cada grama de lipídio (gordura) concentra 9 kcal. Em uma meta diária de 2.000 kcal, 150 g de proteína consomem 600 kcal (30%), 70 g de gordura equivalem a 630 kcal (31,5%) e o restante fica alocado em carboidratos.'
        }
      },
      {
        heading: 'Exemplo prático completo: calculando metas diárias de um adulto ativo',
        paragraphs: [
          'Imagine um homem de 32 anos, 1,78 m de altura e 82 kg de peso corporal, que trabalha em escritório e pratica musculação quatro vezes na semana. Primeiro, calcula-se seu IMC: 82 / (1,78 × 1,78) = 82 / 3,1684 = 25,88 kg/m². Na sequência, aplica-se a equação de Mifflin-St Jeor para sua TMB: (10 × 82) + (6,25 × 178) - (5 × 32) + 5 = 820 + 1.112,5 - 160 + 5 = 1.777,5 kcal diárias apenas em repouso.',
          'Multiplicando sua TMB de 1.778 kcal pelo fator de atividade moderada de 1,55 (treinos 4x na semana), obtém-se um gasto diário total (TDEE) próximo de 2.755 kcal para manter os mesmos 82 kg estáveis. Caso o objetivo seja reduzir gordura corporal mantendo massa magra ao longo das próximas semanas, aplica-se um déficit moderado de 455 kcal, estabelecendo a dieta em 2.300 kcal diárias.',
          'Na distribuição dos macronutrientes para 2.300 kcal com prioridade de preservação muscular, reserva-se 2,0 g de proteína por quilo corporal (164 g = 656 kcal), cerca de 0,85 g/kg de gorduras boas (70 g = 630 kcal) para suporte hormonal e os 1.014 kcal restantes convertidos em aproximadamente 253 g de carboidratos para sustentar energia nos treinos — acompanhados por uma meta hídrica básica de 35 mL × 82 kg = 2.870 mL (quase 2,9 litros de água ao dia, acrescidos de 500 mL extras nos dias de treino intenso).'
        ]
      },
      {
        heading: 'Zonas de frequência cardíaca, hidratação e qualidade do sono',
        paragraphs: [
          'Além do planejamento alimentar, duas alavancas costumam multiplicar resultados de saúde metabólica: o controle da intensidade aeróbica e a arquitetura do sono. Utilizando a estimativa clássica de frequência cardíaca máxima (FCM ≈ 220 - idade), um adulto de 32 anos possui FCM em torno de 188 batimentos por minuto. Treinar na Zona 2 (entre 60% e 70% da FCM, ou 113 a 132 bpm nesse exemplo) melhora a densidade mitocondrial, utiliza gorduras como substrato predominante e reduz o estresse articular.',
          'Igualmente determinante é o sono noturno em ciclos fisiológicos completos de aproximadamente 90 minutos: dormir 5 ciclos (7 horas e meia de sono efetivo, somando cerca de 15 minutos para adormecer) regula hormônios ligados à saciedade e ao controle glicêmico, evitando elevações de cortisol que atrapalham o emagrecimento e o foco cognitivo no dia seguinte.'
        ]
      }
    ],
    faq: [
      {
        q: 'Qual é a regra prática recomendada de ingestão diária de água?',
        a: 'A recomendação clínica usual situa-se entre 35 mL e 40 mL por quilograma de peso corporal ao dia (por exemplo, cerca de 2,45 a 2,8 litros para um adulto de 70 kg), aumentando proporcionalmente conforme sudorese em treinos ou climas muito quentes.'
      },
      {
        q: 'O IMC de idosos usa os mesmos pontos de corte de adultos jovens?',
        a: 'Não exatamente. Na prática geriátrica brasileira (como referência OPAS/Ministério da Saúde), considera-se faixa eutrófica para maiores de 60 anos valores entre 22 e 27 kg/m², pois uma pequena reserva muscular e energética adicional protege o idoso contra fragilidade.'
      },
      {
        q: 'Comer menos que minha Taxa Metabólica Basal acelera o emagrecimento?',
        a: 'No curtíssimo prazo reduz o peso na balança às custas de perda de massa magra e desidratação; porém no médio prazo provoca queda no gasto energético não-exercício (NEAT), cansaço extremo e elevada probabilidade de reganho de peso.'
      },
      {
        q: 'Quanta proteína por quilo corporal é indicada para quem treina musculação?',
        a: 'Diretrizes internacionais de nutrição esportiva recomendam entre 1,6 g e 2,2 g de proteínas totais por quilograma de peso corporal ao dia para otimizar síntese muscular e preservação de massa magra durante déficit calórico.'
      },
      {
        q: 'As fórmulas do site substituem o plano alimentar de um nutricionista?',
        a: 'Não. As calculadoras entregam estimativas matemáticas padronizadas para fins educativos; o diagnóstico individual, exames bioquímicos e prescrição clínica devem ser sempre conduzidos por médico ou nutricionista habilitado.'
      }
    ]
  },
  {
    slug: 'precificacao-margem-de-lucro-markup-ponto-de-equilibrio',
    title: 'Precificação Estratégica: Margem de Lucro, Markup, Ponto de Equilíbrio e CAC/LTV',
    metaDescription: 'Aprenda de vez a diferença matemática entre margem de lucro e markup, calcule o ponto de equilíbrio (break-even) da sua empresa e avalie a saúde financeira com ROI e LTV/CAC.',
    excerpt: 'Não confunda markup com margem de lucro na hora de formar preços! Veja as equações exatas para não perder dinheiro em promoções, descubra quanto precisa faturar para empatar e meça seu ROI.',
    categoryKey: 'financas',
    categoryLabel: 'Finanças & Negócios',
    categorySlug: 'financas-negocios',
    author: 'Equipe Editorial Brasil Calculadoras',
    authorRole: 'Gestão Empresarial & Engenharia de Custos',
    publishedAt: '2026-05-08',
    updatedAt: '2026-11-18',
    readingTime: '9 min de leitura',
    relatedCalculators: [
      {
        id: 'margem-lucro',
        name: 'Margem de Lucro & Markup',
        description: 'Calcule preço ideal de venda, margem sobre o faturamento e markup sobre o custo unitário.'
      },
      {
        id: 'ponto-de-equilibrio-venda',
        name: 'Ponto de Equilíbrio (Break even)',
        description: 'Descubra exatamente quantas vendas ou reais mensais pagam todas as despesas fixas.'
      },
      {
        id: 'roi-investimento-comum',
        name: 'Retorno de Investimento (ROI)',
        description: 'Avalie o percentual de retorno líquido e o payback sobre qualquer projeto ou campanha.'
      },
      {
        id: 'custo-capital-giro',
        name: 'Giro de Caixa Corporativo',
        description: 'Dimensione o capital de giro necessário para suportar prazos entre recebimento e pagamento.'
      },
      {
        id: 'conversao-cac',
        name: 'CAC vs LTV Eficiência',
        description: 'Compare quanto custa adquirir um cliente versus a receita total gerada antes do cancelamento.'
      }
    ],
    sections: [
      {
        heading: 'O erro fatal de confundir Markup com Margem de Lucro na precificação',
        paragraphs: [
          'Um dos equívocos financeiros que mais levam pequenos comércios, e-commerces e prestadores de serviços ao aperto de caixa acontece quando o gestor deseja ganhar 30% de lucro sobre as vendas e, ingenuamente, soma 30% sobre o preço de custo do fornecedor. Quando você compra uma mercadoria por R$ 100,00 e a vende por R$ 130,00, você aplicou um Markup de 30% sobre o custo — mas a sua Margem Bruta sobre o preço de venda NÃO é de 30%, e sim de R$ 30,00 / R$ 130,00 = 23,08%!',
          'O problema agrava-se drasticamente quando a empresa concede descontos ou paga comissões sobre o preço final da nota fiscal: se esse mesmo comerciante que vende a R$ 130,00 oferecer um cupom promocional de 20% de desconto (vendendo por R$ 104,00) e pagar 6% de imposto do Simples Nacional mais 3% de taxa de cartão (R$ 9,36 sobre R$ 104,00), restarão apenas R$ 94,64 líquidos para pagar um produto que custou R$ 100,00! Entender a diferença estrutural entre as duas fórmulas protege imediatamente a saúde de qualquer operação comercial.'
        ],
        bullets: [
          'Margem de Lucro (%) = [(Preço de Venda - Custos Totais) / Preço de Venda] × 100. Nunca pode atingir ou ultrapassar 100%, pois o lucro é uma fração do preço cobrado do cliente.',
          'Markup Multiplicador = 1 / [1 - (%Impostos + %Comissões + %TaxasCartão + %MargemDesejada) / 100]. Ao multiplicar o Custo Direto por esse fator, todos os percentuais de saída fecham exatamente sobre o preço final.',
          'Percentual sobre Custo (Markup%) = [(Preço de Venda - Custo) / Custo] × 100. Pode facilmente passar de 100%, 200% ou 300%, especialmente em gastronomia e confecção.'
        ]
      },
      {
        heading: 'Calculando o Preço Certo e o Ponto de Equilíbrio (Break-Even Point)',
        paragraphs: [
          'Suponha uma loja virtual cujo custo de aquisição de determinado produto (CMV + embalagem) seja de R$ 100,00. Para que a venda seja saudável, a loja arca com 6% de imposto sobre faturamento, 4% de taxa média do gateway de pagamento/antecipação e 10% de taxa do marketplace (totalizando 20% em despesas variáveis incidentes sobre o preço de venda), e deseja obter exatamente 25% de Margem de Contribuição após pagar impostos e comissões.',
          'Somando os percentuais variáveis e a margem desejada sobre o preço final temos 20% + 25% = 45%. Aplicando a fórmula do Markup Divisor: 100% - 45% = 55% (ou 0,55). Portanto, o Preço de Venda Ideal deve ser R$ 100,00 / 0,55 = R$ 181,82! Conferindo a matemática reversa: de R$ 181,82 subtraem-se 20% de impostos e marketplace (R$ 36,36), subtraem-se os R$ 100,00 da mercadoria e sobram exatos R$ 45,46 no caixa — que equivalem precisamente a 25% do preço cobrado (R$ 45,46 / R$ 181,82 = 25%).',
          'Com a margem de contribuição unitária em mãos, descobre-se o Ponto de Equilíbrio (Break-Even) dividindo os Custos Fixos Mensais da empresa (aluguel, folha salarial administrativa, softwares, contabilidade e energia) pela taxa ou valor de Margem de Contribuição. Se os custos fixos somam R$ 18.000,00 por mês e cada produto deixa R$ 45,46 após custo direto e impostos variáveis (margem de contribuição bruta sem contar outros descontos), ou dividindo pelo índice de margem de contribuição total de 45% (caso considere apenas custo direto e taxas variáveis de 55% no custo variável total): R$ 18.000 / 0,25 (ou pela contribuição unitária) indica quantas unidades precisam ser vendidas todo mês antes de gerar o primeiro real de lucro líquido.'
        ],
        highlightBox: {
          title: 'Por que capital de giro e prazo de recebimento andam juntos com lucro?',
          text: 'Uma empresa pode fechar o mês com lucro contábil excelente na planilha e, ainda assim, quebrar por falta de caixa se pagar fornecedores em 15 dias e vender parcelado ao consumidor em 6 vezes sem antecipação. Sempre dimensione a necessidade líquida de capital de giro considerando o ciclo financeiro.'
        }
      },
      {
        heading: 'Métricas de escala: ROI, CAC e relação LTV / CAC em negócios digitais',
        paragraphs: [
          'Em operações que investem ativamente em tráfego pago (Google Ads, Meta Ads), vendedores externos ou projetos de expansão, medir o Retorno sobre Investimento (ROI = [(Ganho Obtido - Investimento) / Investimento] × 100) evita manter campanhas apenas pelo volume bruto de vendas. Contudo, em empresas de serviço recorrente, SaaS ou e-commerces com alta recompra, olhar apenas a primeira compra muitas vezes subestima a rentabilidade real do marketing.',
          'É nesse ponto que entra a dupla CAC (Custo de Aquisição de Cliente) e LTV (Lifetime Value). Dividindo o investimento comercial e de marketing pelo número de novos clientes conquistados encontra-se o CAC. Dividindo a receita média mensal (ou margem bruta por cliente) pela taxa mensal de cancelamento (Churn Rate), encontra-se quanto dinheiro cada cliente gera ao longo de sua permanência média. Como referência clássica de sustentabilidade, negócios saudáveis buscam relação LTV / CAC igual ou superior a 3:1 com retorno do custo de aquisição (payback) em menos de 12 meses.'
        ]
      },
      {
        heading: 'Cuidados ao conceder descontos e promoções sazonais',
        paragraphs: [
          'Antes de participar de campanhas agressivas de liquidação ou Black Friday, faça a verificação matemática do volume adicional necessário apenas para empatar o lucro anterior. Se sua margem de contribuição atual é de 30% e você concede um desconto de 10% no preço de venda (mantendo os custos fixos e o custo da mercadoria inalterados), sua margem cai para 22,2% — o que exige vender cerca de 35% a 50% mais unidades no mês apenas para ganhar o mesmo lucro absoluto em reais!',
          'Estratégias como kits combinados (aumentando o ticket médio por frete), brindes de baixo custo direto e alto valor percebido, ou descontos progressivos condicionados a pagamento via Pix à vista preservam muito melhor a margem financeira do que cortes lineares de tabela.'
        ]
      }
    ],
    faq: [
      {
        q: 'Qual é a diferença resumida entre Markup e Margem de Lucro?',
        a: 'O Markup é um índice aplicado de baixo para cima sobre o custo do produto para formar o preço de venda (pode passar de 100%). A Margem de Lucro mede de cima para baixo qual percentual do preço final efetivamente sobra como lucro (sempre menor que 100%).'
      },
      {
        q: 'Por que um desconto de 20% não é compensado por um aumento posterior de 20%?',
        a: 'Por mudança de base matemática: se um item de R$ 100 cai 20%, passa a custar R$ 80. Aumentar 20% sobre R$ 80 leva apenas a R$ 96; para voltar exatamente aos R$ 100 iniciais após queda de 20%, é preciso reajustar em 25%.'
      },
      {
        q: 'O salário do dono (pró-labore) entra nos custos fixos do Ponto de Equilíbrio?',
        a: 'Sim! O pró-labore de quem trabalha na operação diária da empresa é uma despesa fixa operacional e deve compor o cálculo de break-even; já a distribuição de lucros só deve ocorrer acima do ponto de equilíbrio.'
      },
      {
        q: 'Como calcular rapidamente o Ponto de Equilíbrio em reais de faturamento?',
        a: 'Divida os Custos Fixos Mensais Totais pelo Índice de Margem de Contribuição (em formato decimal). Por exemplo, R$ 20.000 de custo fixo com 40% (0,40) de margem de contribuição exige R$ 50.000 mensais de vendas para empatar.'
      },
      {
        q: 'Uma razão LTV/CAC de 1,5:1 é saudável para escalar anúncios?',
        a: 'Em geral não. Abaixo de 2:1 (especialmente considerando margem bruta e impostos), o custo operacional, suporte e cancelamentos consomem quase todo o retorno; a faixa considerada robusta para acelerar aquisição paga situa-se a partir de 3:1.'
      }
    ]
  },
  {
    slug: 'matematica-aplicada-porcentagem-regra-de-tres-estatistica',
    title: 'Matemática e Estatística Aplicadas: Porcentagem, Regra de Três, Bhaskara e Margem de Erro',
    metaDescription: 'Revise as fórmulas essenciais de matemática e estatística para provas e trabalho: variações percentuais, regra de três direta e inversa, equação do 2º grau, desvio padrão e margem de erro.',
    excerpt: 'Entenda na prática quando usar regra de três inversa em vez de direta, evite armadilhas em aumentos e descontos sucessivos e interprete média, mediana, desvio padrão e margem de erro corretamente.',
    categoryKey: 'matematica',
    categoryLabel: 'Matemática & Escola',
    categorySlug: 'matematica-escola',
    author: 'Equipe Editorial Brasil Calculadoras',
    authorRole: 'Pesquisa em Matemática & Estatística',
    publishedAt: '2026-05-25',
    updatedAt: '2026-11-18',
    readingTime: '9 min de leitura',
    relatedCalculators: [
      {
        id: 'porcentagem-simples',
        name: 'Porcentagem Rápida',
        description: 'Resolva variações, descontos, acréscimos e proporções percentuais em frações de segundo.'
      },
      {
        id: 'regra-tres',
        name: 'Regra de Três Rápida',
        description: 'Calcule proporções diretamente ou inversamente proporcionais com explicação imediata.'
      },
      {
        id: 'equacao-segundo-grau',
        name: 'Equação do 2º Grau (Bhaskara)',
        description: 'Encontre o discriminante Delta e as raízes reais X1 e X2 de qualquer equação quadrática.'
      },
      {
        id: 'desvio-padrao',
        name: 'Desvio Padrão e Variância',
        description: 'Analise séries numéricas obtendo média, variância e desvio padrão amostral ou populacional.'
      },
      {
        id: 'margem-erro',
        name: 'Margem de Erro de Pesquisas',
        description: 'Dimensione amostras e verifique o intervalo real de precisão de enquetes e pesquisas.'
      }
    ],
    sections: [
      {
        heading: 'Fatores multiplicativos em porcentagem e armadilhas de variações sucessivas',
        paragraphs: [
          'Embora presente em todas as compras, reajustes salariais, boletos bancários e questões do ENEM, a porcentagem ainda provoca erros frequentes quando duas ou mais taxas incidem em sequência. Calcular "20% de 150" manualmente somando ou subtraindo pode até funcionar em situações pontuais, mas dominar o conceito de fator multiplicativo acelera contas financeiras complexas em uma única multiplicação: todo aumento de X% equivale a multiplicar o valor original por (1 + X/100), e todo desconto de X% equivale a multiplicar por (1 - X/100).',
          'Usando fatores multiplicativos, fica evidente por que descontos ou aumentos sucessivos nunca devem ser somados aritmeticamente. Imagine um produto que sofre dois aumentos seguidos de 10% em meses consecutivos: em vez de subir 20%, o preço multiplica-se por 1,10 × 1,10 = 1,21, gerando um aumento composto acumulado de 21%! Da mesma forma, uma promoção anunciando "20% de desconto + 10% no Pix" reduz o preço por 0,80 × 0,90 = 0,72 — totalizando 28% de desconto real, e não 30%.'
        ],
        bullets: [
          'Cálculo reverso do valor original antes do aumento: se após 15% de reajuste o aluguel foi para R$ 2.300,00, divida por 1,15 (e nunca subtraia 15% de 2.300!) para reencontrar os R$ 2.000,00 originais.',
          'Variação percentual entre dois momentos: [(Valor Novo - Valor Antigo) / Valor Antigo] × 100 revela crescimento ou queda exatamente comparável entre períodos.',
          'Fórmula da Regra de Sociedade e rateios proporcionais: divide primeiro cada parte pelo todo antes de aplicar o percentual individual.'
        ]
      },
      {
        heading: 'Regra de três simples direta versus inversa: como nunca trocar os termos',
        paragraphs: [
          'A regra de três simples resolve proporções entre duas grandezas quando três valores são conhecidos e busca-se o quarto. Na proporcionalidade direta — como consumo de combustível por quilômetro rodado, quantidade de ingredientes de uma receita por número de convidados ou salário proporcional aos dias trabalhados — se uma grandeza dobra, a outra também dobra na mesma razão (multiplicação cruzada tradicional A × X = B × C).',
          'O grande perigo em provas de concursos, física e cronogramas de engenharia ocorre nas grandezas inversamente proporcionais, nas quais aumentar uma variável reduz proporcionalmente a outra! Exemplos clássicos incluem velocidade média versus tempo de viagem (dobrar a velocidade reduz o tempo pela metade), número de operários realizando uma obra versus prazo de entrega, e vazão de torneiras versus horas para encher um reservatório. Nesse caso, inverter a multiplicação cruzada para multiplicar reto na linha (A × B = C × X) evita resultados absurdos em que contratar mais trabalhadores faria a obra demorar mais dias!'
        ],
        highlightBox: {
          title: 'Roteiro mental para resolver qualquer Regra de Três',
          text: 'Pergunte sempre antes de multiplicar: "Se eu DOBRAR a primeira grandeza, o resultado procurado na segunda deve DOBRAR (Direta -> multiplica em X) ou CAIR PELA METADE (Inversa -> multiplica em linha reta)?" Essa verificação de dez segundos elimina 90% dos erros.'
        }
      },
      {
        heading: 'Equação do 2º grau (Bhaskara) e análise estatística básica na prática',
        paragraphs: [
          'Na álgebra e na modelagem de custos ou trajetórias parabólicas, a equação quadrática ax² + bx + c = 0 (com coeficiente a diferente de zero) tem seu comportamento ditado pelo discriminante Δ = b² - 4ac. Quando Delta resulta positivo, a parábola corta o eixo horizontal em duas raízes reais X1 e X2; quando Delta vale zero, o vértice toca o eixo em uma raiz dupla exata; e quando Delta é negativo, não há interseção com o eixo real, significando ausência de raízes reais no conjunto R. Uma checagem instantânea pelas Relações de Girard garante que a soma das raízes deve igualar (-b/a) e o produto deve equivaler a (c/a).',
          'Passando para a estatística descritiva e inferencial aplicada a relatórios corporativos e pesquisas de satisfação, dois conjuntos com a mesma média podem esconder realidades opostas. Considere duas lojas com faturamento médio diário de R$ 5.000,00: a Loja A oscila regularmente entre R$ 4.800 e R$ 5.200 (Desvio Padrão baixo próximo de R$ 150, indicando previsibilidade), enquanto a Loja B alterna dias de R$ 1.000 com picos de R$ 9.000 (Desvio Padrão altíssimo, revelando risco e volatilidade).'
        ]
      },
      {
        heading: 'Como interpretar Margem de Erro e Mediana sem distorções',
        paragraphs: [
          'Quando lemos resultados de enquetes ou pesquisas de mercado com "margem de erro de 3 pontos percentuais para mais ou para menos, com 95% de confiança", isso significa que, se a mesma metodologia aleatória fosse repetida 100 vezes na população, em 95 delas a proporção real estaria dentro da faixa medida ±3%. Note que a precisão depende principalmente do tamanho absoluto da amostra (raiz quadrada de n): por isso, cerca de 1.068 entrevistados já entregam margem de erro próxima de ±3% mesmo em países com dezenas de milhões de habitantes — e reduzir essa margem pela metade (±1,5%) exige quadruplicar o custo de campo para mais de 4.260 entrevistas.',
          'Por fim, sempre que analisar salários, preços de imóveis ou tempos de atendimento ao cliente com possibilidade de números extremos atípicos (outliers), exija observar a Mediana (o valor situado exatamente no meio da lista ordenada) ao lado da Média aritmética: ela impede que um único salário executivo ou venda extraordinária distorça a percepção da realidade típica.'
        ]
      }
    ],
    faq: [
      {
        q: 'Qual é a diferença entre desvio padrão populacional (N) e amostral (N - 1)?',
        a: 'Usa-se o denominador N quando você possui todos os elementos existentes do universo analisado (por exemplo, todas as notas finais de uma única turma). Usa-se (N - 1), chamado correção de Bessel, quando os números são apenas uma amostra usada para estimar a dispersão de uma população maior.'
      },
      {
        q: 'Por que 15% de aumento seguido de 15% de desconto não volta ao preço original?',
        a: 'Porque o segundo desconto incide sobre um número maior! De R$ 100 para R$ 115 (+15%) e depois -15% sobre R$ 115 subtrai R$ 17,25, fechando em R$ 97,75 (perda líquida de 2,25%).'
      },
      {
        q: 'Se eu tiver apenas os dois primeiros termos de uma equação quadrática (ax² + bx = 0), ainda uso Bhaskara?',
        a: 'Pode usar Bhaskara normalmente preenchendo C = 0, ou fatorar diretamente colocando x em evidência: x(ax + b) = 0, encontrando imediatamente uma raiz igual a 0 e a outra igual a -b/a.'
      },
      {
        q: 'Como funciona o Fator de Correção Finita na Margem de Erro de pesquisas internas?',
        a: 'Se você vai pesquisar funcionários de uma empresa com 500 pessoas e entrevista 200 delas (40% do universo total!), a margem de erro fica consideravelmente menor do que em uma população gigante porque grande parte do grupo já foi consultada.'
      },
      {
        q: 'Quando usar média ponderada em vez de média aritmética simples?',
        a: 'Sempre que cada nota ou indicador possuir importância distinta (como as áreas do conhecimento no SISU/ENEM ou o peso maior da prova final frente aos trabalhos bimestrais na faculdade).'
      }
    ]
  },
  {
    slug: 'guia-completo-programa-move-brasil-2026-financiamento-veiculos',
    title: 'Guia Completo do Programa Move Brasil 2026 e Financiamento de Veículos CDC',
    metaDescription: 'Entenda como funciona o financiamento pelo Programa Move Brasil 2026 (BB, Caixa e BNDES) vs CDC tradicional, calcule custo por quilômetro rodado e provisione o IPVA anual.',
    excerpt: 'Compare taxas subsidiadas do Move Brasil para motoristas profissionais contra o CDC tradicional pela Tabela Price, calcule o impacto da entrada, custo real por km rodado e IPVA estadual.',
    categoryKey: 'veiculos',
    categoryLabel: 'Veículos & Combustível',
    categorySlug: 'veiculos-combustivel',
    author: 'Equipe Editorial Brasil Calculadoras',
    authorRole: 'Mobilidade, Crédito Bancário & Custos Veiculares',
    publishedAt: '2026-12-02',
    updatedAt: '2026-12-02',
    readingTime: '10 min de leitura',
    relatedCalculators: [
      {
        id: 'move-brasil',
        name: 'Simulador Move Brasil 2026: Carros, Motos e Caminhões (BB, Caixa e BNDES)',
        description: 'Simule parcelas com juros reduzidos do Move Brasil e compare a economia total frente ao mercado.'
      },
      {
        id: 'financiamento-veiculo',
        name: 'Simulador de Financiamento de Veículos e CDC 2026: Carros e Motos',
        description: 'Calcule prestações fixas pela Tabela Price no CDC com diferentes percentuais de entrada.'
      },
      {
        id: 'custo-km-rodado',
        name: 'Reembolso por Km Rodado',
        description: 'Apure o custo ou reembolso justo por quilômetro incluindo combustível, desgaste e depreciação.'
      },
      {
        id: 'ipva-estimado',
        name: 'IPVA Estimado de Veículo',
        description: 'Projete o imposto estadual anual conforme o valor venal FIPE e a alíquota do seu estado.'
      }
    ],
    sections: [
      {
        heading: 'O que é o Programa Move Brasil 2026 e como funcionam as linhas subsidiadas',
        paragraphs: [
          'A aquisição financiada de automóveis, motocicletas e utilitários de carga no Brasil sempre enfrentou um obstáculo estrutural pesado: enquanto o comprador precisa do veículo para trabalhar — como motoristas de aplicativos de mobilidade, taxistas, motofretistas e transportadores autônomos —, as taxas bancárias convencionais do Crédito Direto ao Consumidor (CDC) frequentemente alcançam entre 1,55% e 2,35% ao mês em períodos de Selic restritiva. Em financiamentos de 48 a 60 meses, esses juros elevam o custo final do bem em até 60% ou 75% acima do preço à vista na concessionária.',
          'Nesse contexto, o Programa Move Brasil reúne linhas de crédito com taxas reduzidas e condições diferenciadas lastreadas em recursos públicos e operadas por grandes instituições como Banco do Brasil, Caixa Econômica Federal e BNDES. Voltado prioritariamente à renovação da frota de profissionais com atividade remunerada no transporte e veículos mais eficientes (flex modernos, híbridos, elétricos ou modelos com menor emissão), o programa trabalha com taxas referenciais próximas de 0,85% a 0,99% ao mês — incluindo condições ainda mais favoráveis para mulheres motoristas — e prazos estendidos que reduzem drasticamente o comprometimento mensal do fluxo de caixa.'
        ],
        bullets: [
          'Documentação básica exigida: CNH válida com observação EAR (Exerce Atividade Remunerada) e comprovação cadastral ativa nas plataformas de transporte ou registro profissional regular.',
          'Diferença entre bancos operadores: pequenas variações entre as linhas de Banco do Brasil, Caixa e BNDES produzem diferenças acumuladas relevantes em prazos de 48 a 84 meses.',
          'Comparativo com CDC tradicional: enquanto o CDC comum opera em torno de 1,67% a.m. na média de mercado, linhas incentivadas abaixo de 1,00% ao mês podem cortar pela metade o total pago apenas em juros.',
          'Alienação fiduciária e gravame: o veículo permanece alienado ao banco financiador até a quitação integral do saldo devedor ou liquidação antecipada.'
        ]
      },
      {
        heading: 'Matemática da Tabela Price: por que a entrada e a taxa de juros mandam no custo total',
        paragraphs: [
          'Tanto o financiamento subsidiado pelo Move Brasil quanto o CDC tradicional de concessionárias operam pela Tabela Price (Sistema Francês de Amortização), no qual todas as parcelas nominais mantêm exatamente o mesmo valor do início ao término do contrato. A fórmula matemática que define a prestação fixa é PMT = Saldo Financiado × [i × (1 + i)^n] / [(1 + i)^n - 1], em que i representa a taxa mensal efetiva em formato decimal e n corresponde ao número total de meses contratados.',
          'Embora muita gente olhe apenas se a prestação mensal "cabe no bolso", essa abordagem ignora dois efeitos financeiros silenciosos. Primeiro, nos primeiros meses do contrato pela Tabela Price, a maior fatia da parcela paga juros ao banco e uma parcela menor amortiza o principal da dívida. Segundo, carros e motos sofrem depreciação contínua de mercado entre 8% e 15% ao ano: contratar 60 parcelas com entrada zero aumenta o risco de ficar por mais de dois anos com um saldo devedor maior que o valor de revenda do próprio carro na Tabela FIPE.'
        ],
        highlightBox: {
          title: 'Regra de ouro ao negociar na concessionária',
          text: 'Nunca feche financiamento negociando apenas o valor da parcela mensal com o vendedor! Peça sempre o Custo Efetivo Total (CET) anual por escrito, compare com a simulação do Move Brasil no aplicativo do seu banco e priorize entradas mínimas de 20% a 30% somadas a prazos até 48 meses.'
        }
      },
      {
        heading: 'Simulação numérica comparada: Move Brasil a 0,89% a.m. vs CDC a 1,69% a.m.',
        paragraphs: [
          'Considere um motorista profissional que precisa financiar um sedã compacto avaliado em R$ 85.000,00 dando uma entrada à vista de R$ 25.000,00 — resultando em um saldo líquido a financiar de R$ 60.000,00 pelo prazo de 48 meses. Vamos comparar exatamente os mesmos R$ 60.000,00 em duas linhas distintas: o CDC convencional de mercado a 1,69% ao mês contra uma linha incentivada nos moldes do Move Brasil a 0,89% ao mês.',
          'No CDC convencional a 1,69% ao mês por 48 vezes, a aplicação direta da Tabela Price gera uma prestação mensal fixa de R$ 1.835,45. Multiplicando por 48 meses, o comprador pagará R$ 88.101,60 apenas pelas parcelas financiadas (somando R$ 28.101,60 somente de juros compostos bancários, sem contar eventuais tarifas de cadastro e IOF adicional). Somados aos R$ 25.000,00 da entrada, o automóvel terá custado R$ 113.101,60 ao fim dos quatro anos.',
          'Já na simulação com taxa reduzida de 0,89% ao mês pelos mesmos 48 meses, a parcela cai imediatamente para R$ 1.543,09 — liberando R$ 292,36 de fôlego financeiro todos os meses no caixa do trabalhador! Ao término dos 48 meses, o somatório das prestações fecha em R$ 74.068,32, gerando R$ 14.068,32 de juros — uma economia direta de R$ 14.033,28 apenas pela diferença na taxa contratada, que equivale a quase dez prestações inteiras poupadas ao longo do contrato.'
        ]
      },
      {
        heading: 'Orçamento completo de posse: IPVA anual, custo por km rodado e amortização antecipada',
        paragraphs: [
          'Antes de assinar o contrato de financiamento do carro ou moto de trabalho, lembre-se de que a parcela bancária representa apenas parte da despesa fixa mensal de rodar. Todo janeiro incide o IPVA estadual calculado sobre a Tabela FIPE (tipicamente entre 2% e 4% do valor venal do veículo para carros de passeio conforme o estado de emplacamento, podendo haver isenções ou descontos regionais para veículos elétricos e táxis), além da taxa anual de licenciamento do DETRAN, seguro contra terceiros ou compreensivo e fundo mensal para manutenção preventiva (pneus, óleo, pastilhas de freio e correias).',
          'Para profissionais e autônomos que rodam comercialmente ou recebem ressarcimento da empresa, apurar corretamente o Custo Real por Quilômetro Rodado impede trabalhar no prejuízo: se o veículo consome 11 km/L com gasolina a R$ 6,05 (R$ 0,55 por km apenas em combustível), somar depreciação, revisões, seguro e IPVA proporcionais facilmente eleva o custo real de rodagem para R$ 1,05 a R$ 1,40 por quilômetro. Sempre que acumular sobra de caixa, lembre-se ainda de exercer o direito previsto no artigo 52, parágrafo 2º do CDC de antecipar as últimas parcelas do financiamento com abatimento proporcional integral dos juros futuros.'
        ]
      }
    ],
    faq: [
      {
        q: 'Quem pode solicitar financiamento pelas condições do Programa Move Brasil 2026?',
        a: 'O foco principal abrange profissionais do transporte cadastrados e regulares — incluindo motoristas de aplicativo, taxistas, motoboys e caminhoneiros autônomos — com CNH contemplando a observação Exerce Atividade Remunerada (EAR), além de regras específicas para renovação de frota conforme cada banco operador.'
      },
      {
        q: 'Mulheres motoristas realmente pagam taxas menores no Move Brasil?',
        a: 'Sim. As diretrizes divulgadas do programa preveem faixas de juros ainda mais competitivas para mulheres motoristas profissionais dentro das linhas operadas por bancos públicos como Banco do Brasil, Caixa e repasses BNDES.'
      },
      {
        q: 'Qual é a vantagem financeira de dar 30% de entrada no CDC de veículos?',
        a: 'Entradas a partir de 30% diminuem consideravelmente o risco de inadimplência na análise de crédito bancária, destravam taxas de juros menores na mesa de crédito, encurtam a dívida e reduzem drasticamente os juros acumulados ao longo de 36 ou 48 meses.'
      },
      {
        q: 'No reembolso por km rodado, devo cobrar apenas o gasto com combustível?',
        a: 'Não! Cobrar apenas gasolina ou etanol significa transferir gratuitamente a desvalorização da Tabela FIPE, troca de pneus, revisões mecânicas, IPVA e seguro para o contratante. Em frotas e contratos comerciais, a tarifa por quilômetro costuma corresponder a cerca de duas vezes o custo direto do combustível.'
      },
      {
        q: 'Como reduzir o valor do IPVA estimado no planejamento financeiro anual?',
        a: 'Verifique na SEFAZ do seu estado se há desconto para pagamento em cota única em janeiro (muitas vezes entre 3% e 10%), créditos de programas de nota fiscal estadual, alíquota reduzida para etanol/GNV ou isenção por tempo de fabricação do veículo.'
      }
    ]
  },
  {
    slug: 'como-calcular-materiais-de-construcao-e-acabamento-sem-desperdicio',
    title: 'Como Calcular Materiais de Construção, Pisos, Tintas e Climatização sem Desperdício',
    metaDescription: 'Aprenda a dimensionar corretamente tijolos por m², caixas de porcelanato e argamassa, latas de tinta com desconto de vãos e BTUs do ar-condicionado para economizar na reforma.',
    excerpt: 'Evite sobras paradas no quintal e compras de emergência fora de lote na sua obra: veja passo a passo as fórmulas técnicas de alvenaria, pisos, pintura e carga térmica residencial.',
    categoryKey: 'construcao',
    categoryLabel: 'Construção & Reformas',
    categorySlug: 'construcao-reformas',
    author: 'Equipe Editorial Brasil Calculadoras',
    authorRole: 'Engenharia Civil, Orçamentação & Utilidades',
    publishedAt: '2026-12-09',
    updatedAt: '2026-12-09',
    readingTime: '10 min de leitura',
    relatedCalculators: [
      {
        id: 'const-tijolos',
        name: 'Calculadora de Tijolos por m²',
        description: 'Calcule tijolos ou blocos necessários por área de parede descontando vãos e considerando perdas.'
      },
      {
        id: 'const-piso',
        name: 'Calculadora de Pisos e Porcelanato',
        description: 'Estime metros quadrados com margem de corte, caixas exatas, rodapés e sacos de argamassa.'
      },
      {
        id: 'const-tinta',
        name: 'Calculadora de Tinta Predial',
        description: 'Converta área líquida e número de demãos na combinação ideal de latas de 18L e galões de 3,6L.'
      },
      {
        id: 'ar-condicionado',
        name: 'Ar Condicionado ideal (BTUs)',
        description: 'Dimensione a capacidade térmica em BTUs ideal para o cômodo conforme área, sol e ocupantes.'
      }
    ],
    sections: [
      {
        heading: 'Por que erros de quantitativo encarecem reformas e geram atrasos de entrega',
        paragraphs: [
          'Quem já construiu ou reformou um imóvel conhece o prejuízo silencioso causado por orçamentos feitos "no olho": ou faltam quatro caixas de porcelanato no penúltimo dia de assentamento — obrigando a esperar semanas por um novo lote que muitas vezes chega com tonalidade ligeiramente diferente da original — ou sobram centenas de tijolos, sacos de argamassa vencendo no quintal e latas inteiras de tinta acrílica fechadas sem devolução possível na loja.',
          'Em obras residenciais e comerciais bem planejadas, levantar cada material por meio de quantitativos geométricos padronizados reduz em 10% a 20% o desperdício direto no depósito, melhora o poder de negociação para fechar compras à vista em lote único de fabricação e permite auditar o orçamento de pedreiros e empreiteiros com critério técnico. Da alvenaria estrutural ou de vedação ao acabamento final com climatização dimensionada, cada etapa possui fatores práticos simples e altamente confiáveis.'
        ],
        bullets: [
          'Alvenaria sem excessos: meça sempre largura × altura de cada parede e subtraia exatamente as áreas de portas e janelas antes de multiplicar pelo rendimento por m² do bloco escolhido.',
          'Pisos e porcelanatos em lote único: caixas cerâmicas variam de calibre e tonalidade entre lotes industriais; calcule de uma só vez a área total + rodapés + margem técnica de quebra (10% reto ou 15% diagonal).',
          'Pintura inteligente por embalagem: calcular em litros líquidos evita comprar duas latas de 18 litros quando 1 lata de 18L somada a 1 galão de 3,6L entrega o rendimento exato com metade da sobra.',
          'Climatização alinhada ao ambiente: comprar ar-condicionado subdimensionado força o compressor a trabalhar sem desligar (explodindo a conta de luz); superdimensionar sem necessidade encarece o aparelho e prejudica o controle de umidade.'
        ]
      },
      {
        heading: 'Fórmulas práticas de alvenaria, revestimentos cerâmicos, pintura e BTUs',
        paragraphs: [
          'Na alvenaria convencional de vedação, um tijolo cerâmico padrão de 6 furos (9×14×19 cm assentado "em pé" na espessura de 9 cm, considerando junta de argamassa de 1,5 cm) consome cerca de 25 a 27 peças por metro quadrado de parede, ao passo que o assentamento "deitado" (parede dobrada ou bloco menor de 6 furos) exige cerca de 38 a 40 peças por m². Sobre a área líquida já descontando vãos, adiciona-se tradicionalmente 5% a 10% de reserva técnica para recortes em vergas, caixas elétricas e quebras no descarregamento.',
          'Para pisos e porcelanatos, soma-se a área do piso (Largura × Comprimento) à faixa linear desenvolvida de rodapés (perímetro útil × altura do rodapé em metros) e aplica-se 10% de sobra para paginação reta ou 15% para paginação diagonal/espinha de peixe, dividindo então pelo rendimento em m² impresso na embalagem da caixa (arredondado para cima). Na argamassa colante (ACII interna ou ACIII externa/porcelanato de grandes formatos), estima-se consumo médio de 4 a 6 kg/m² quando aplicada com desempenadeira dentada simples ou dupla colagem. Na pintura, calcula-se (Área Líquida × Demãos) / Rendimento por Litro do fabricante, enquanto nos ambientes climatizados adota-se 600 BTUs por m² (ambiente sombreado) ou 800 BTUs/m² (sol intenso da tarde), acrescidos de 600 BTUs por pessoa adicional e por equipamento eletrônico emissor de calor.'
        ],
        highlightBox: {
          title: 'Não esqueça da dupla colagem em porcelanatos grandes',
          text: 'Peças de porcelanato acima de 60×60 cm exigem obrigatoriamente dupla colagem (passar argamassa ACIII dentada tanto no contrapiso quanto no verso da placa), elevando o consumo de argamassa de ~4,5 kg/m² para cerca de 6,5 a 8 kg/m² por metro quadrado assentado!'
        }
      },
      {
        heading: 'Exemplo numérico completo: reformando uma sala integrada de 24 m²',
        paragraphs: [
          'Imagine a reforma de uma sala retangular medindo 6,00 metros de comprimento por 4,00 metros de largura (área de piso de 24,00 m²), com pé-direito de 2,80 metros, possuindo uma porta de acesso de 0,90×2,10 m (1,89 m²) e uma janela ampla voltada ao poente de 2,00×1,40 m (2,80 m²). Vamos dimensionar sucessivamente uma parede divisória nova de 4×2,80 m, o porcelanato completo, a pintura das paredes e o ar-condicionado Split Inverter.',
          'Primeiro, para levantar a parede nova de 11,20 m² usando tijolo cerâmico tradicional com consumo aproximado de 39 peças/m² (parede reforçada) e margem de 8% de quebra: 11,20 × 39 = 437 peças base, chegando a cerca de 472 tijolos com a perda. Segundo, para revestir os 24,00 m² de piso somados a aproximadamente 19 metros lineares de rodapé de 10 cm (1,90 m²) em paginação reta com 10% de folga: (24,00 + 1,90) × 1,10 = 28,49 m² totais; dividindo por caixas de porcelanato que cobrem 1,44 m² cada, são necessárias exatas 20 caixas fechadas (28,80 m²) do mesmo lote, mais cerca de 6 a 8 sacos de 20 kg de argamassa ACIII em dupla colagem.',
          'Terceiro, as quatro paredes somam perímetro de 20 metros × 2,80 m de altura = 56,00 m² brutos; descontando 4,69 m² da porta e janela restam 51,31 m² líquidos. Aplicando 3 demãos de tinta acrílica premium com rendimento prático de 10 m²/L por demão, demandam-se (51,31 × 3) / 10 = 15,39 litros — perfeitamente atendidos com apenas 1 lata padrão de 18 litros, sem desperdício de galão extra! Quarto, como a sala de 24 m² recebe sol forte à tarde (fator 800 BTUs/m²), costuma reunir até 3 pessoas (2 adicionais = +1.200 BTUs) e abriga TV e notebook (+1.200 BTUs): (24 × 800) + 1.200 + 1.200 = 21.600 BTUs, indicando comercialmente um equipamento Inverter de 24.000 BTUs para garantir conforto térmico silencioso no verão.'
        ]
      },
      {
        heading: 'Boas práticas de armazenamento, recebimento e conferência no canteiro de obras',
        paragraphs: [
          'Mesmo após acertar milimetricamente as quantidades nas calculadoras, erros logísticos na entrega podem comprometer o orçamento. Ao receber porcelanatos e revestimentos cerâmicos na obra, confira imediatamente na etiqueta lateral de todas as caixas se o código de tonalidade ("Ton") e calibre ("Cal") são idênticos — abrir uma única caixa de lote distinto no meio do salão gera diferença visível de nuance após o rejuntamento. Sacos de cimento e argamassa devem ser empilhados sobre estrados de madeira secos, afastados pelo menos 15 cm das paredes úmidas e protegidos com lona plástica.',
          'No caso da pintura, respeite o tempo de cura do reboco novo (mínimo de 28 dias corridos conforme recomendação dos fabricantes antes de selar e pintar) e aplique selador acrílico ou fundo preparador adequado para alcançar o rendimento teórico informado na lata: paredes novas sem selador absorvem até o dobro de tinta na primeira demão, derrubando drasticamente a estimativa inicial.'
        ]
      }
    ],
    faq: [
      {
        q: 'Qual porcentagem de perda devo sempre somar ao comprar pisos e porcelanatos?',
        a: 'Adote no mínimo 10% de sobra técnica para assentamento reto tradicional em ambientes quadrados ou retangulares, e eleve para 15% a 20% quando o assentamento for diagonal, espinha de peixe ou em cômodos com muitos recortes e quinas.'
      },
      {
        q: 'Quantos tijolos baianos entram por metro quadrado de parede?',
        a: 'Depende da posição de assentamento e do tamanho do bloco: tijolo de 6 ou 8 furos padrão 9×14×19 cm ou 9×19×19 cm assentado em pé ("cutelo") usa cerca de 25 a 26 unidades/m², enquanto assentado deitado sobe para ~38 a 40 unidades/m².'
      },
      {
        q: 'Preciso mesmo comprar a tinta para teto junto com a conta das paredes?',
        a: 'O teto costuma utilizar tinta acrílica fosca branca específica (ou tinta gesso), calculada multiplicando apenas a largura pelo comprimento do ambiente vezes o número de demãos, mantendo-a separada da cor das paredes.'
      },
      {
        q: 'O cálculo de BTUs do ar-condicionado muda para apartamento de cobertura ou telhado sem laje?',
        a: 'Sim! Ambientes diretamente sob telhados de fibrocimento sem manta térmica ou último andar com forte insolação na laje exigem o fator de 800 BTUs/m² ou até 900 BTUs/m² com acréscimo de segurança na escolha da capacidade Inverter.'
      },
      {
        q: 'Como calcular a quantidade de rejunte além das caixas de porcelanato?',
        a: 'O consumo de rejunte varia conforme a dimensão da placa cerâmica e a largura da junta em milímetros: placas maiores (80×80 cm com junta de 2 mm) gastam cerca de 0,25 kg/m², enquanto pisos pequenos (30×30 cm com junta de 4 mm) consomem cerca de 0,6 a 0,8 kg/m².'
      }
    ]
  },
  {
    slug: 'como-funciona-nota-enem-media-ponderada-pesos-sisu-e-faculdade',
    title: 'Como Funciona a Nota do ENEM, Média Ponderada com Pesos do SiSU e Média Universitária',
    metaDescription: 'Entenda a diferença entre média aritmética e média ponderada no SiSU/ENEM, descubra como calcular a nota necessária na prova final da faculdade e estime seu ritmo de leitura.',
    excerpt: 'Descubra por que dois candidatos com os mesmos pontos no ENEM têm classificações opostas no SiSU conforme os pesos do curso e aprenda a planejar notas semestrais e cronogramas de leitura.',
    categoryKey: 'educacao',
    categoryLabel: 'Educação & ENEM',
    categorySlug: 'educacao-enem',
    author: 'Equipe Editorial Brasil Calculadoras',
    authorRole: 'Educação, Estatística Escolar & Produtividade',
    publishedAt: '2026-12-16',
    updatedAt: '2026-12-16',
    readingTime: '10 min de leitura',
    relatedCalculators: [
      {
        id: 'simulador-nota-enem',
        name: 'Simulador de Nota ENEM para SiSU',
        description: 'Insira suas 5 notas do ENEM e teste os pesos oficiais de qualquer curso e universidade do SiSU.'
      },
      {
        id: 'edu-sisu',
        name: 'Simulador de Nota SISU com Pesos',
        description: 'Compare imediatamente sua média ponderada frente à média simples e identifique onde sua nota rende mais.'
      },
      {
        id: 'edu-ponderada',
        name: 'Média Semestral Universitária',
        description: 'Descubra quanto falta tirar na prova final ou substitutiva para ser aprovado sem reprovar.'
      },
      {
        id: 'edu-leitura',
        name: 'Tempo de Leitura de Textos',
        description: 'Estime em minutos ou horas o tempo líquido para ler apostilas, obras literárias e editais.'
      }
    ],
    sections: [
      {
        heading: 'Média simples versus média ponderada: a estratégia invisível do SiSU',
        paragraphs: [
          'Todos os anos, milhões de estudantes consultam suas cinco pontuações individuais do Exame Nacional do Ensino Médio — Linguagens (LC), Ciências Humanas (CH), Ciências da Natureza (CN), Matemática (MT) e Redação (RED) — e cometem um erro estratégico logo na primeira etapa do Sistema de Seleção Unificada (SiSU): somar as cinco notas e dividir por cinco para comparar com as notas de corte divulgadas pelas universidades federais e estaduais.',
          'Embora algumas instituições adotem pesos iguais (1,0 para todas as provas), grande parte das universidades brasileiras atribui pesos distintos por curso através do Termo de Adesão do SiSU. Assim, um curso de Medicina costuma atribuir peso 3 ou 4 para Ciências da Natureza e Redação (e peso 1 para Matemática), enquanto cursos de Engenharia e Ciência da Computação aplicam peso 3 ou 4 em Matemática e Natureza com peso menor em Humanas e Linguagens. Saber exatamente como a média ponderada transforma seu resultado permite escolher com inteligência cursos onde seus pontos fortes valem mais.'
        ],
        bullets: [
          'Fórmula da Média Aritmética Simples: soma das 5 notas dividida por 5, usada apenas quando todos os pesos do edital são iguais a 1.',
          'Fórmula da Média Ponderada no SiSU: Σ(Nota_i × Peso_i) / Σ(Pesos) = [(LC×P1) + (CH×P2) + (CN×P3) + (MT×P4) + (RED×P5)] / (P1 + P2 + P3 + P4 + P5).',
          'Nota mínima de corte por área: além da média final ponderada, diversas universidades exigem pontuação mínima específica (por exemplo, não zerar a Redação ou atingir 450 pontos mínimos em Natureza).',
          'Estratégia de duas opções no SiSU: testar combinações de pesos em diferentes universidades estaduais e federais pode gerar ganhos de +25 a +60 pontos equivalentes na nota final sem refazer a prova!'
        ]
      },
      {
        heading: 'Por que a TRI impede prever a nota apenas pelo número de acertos',
        paragraphs: [
          'Antes de lançar suas notas nos simuladores, vale compreender por que dois candidatos que acertam exatamente 30 questões em Matemática no ENEM podem receber pontuações finais muito diferentes — por exemplo, 710 pontos contra 795 pontos. Diferentemente de vestibulares tradicionais baseados na soma direta de acertos, o ENEM utiliza a Teoria de Resposta ao Item (TRI), um modelo estatístico psicométrico que avalia três parâmetros de cada questão: poder de discriminação, nível de dificuldade e probabilidade de acerto ao acaso ("chute").',
          'Se um candidato acerta as questões difíceis de matemática avançada, mas erra várias questões consideradas fáceis pelo algoritmo da TRI, o modelo interpreta estatisticamente que houve inconsistência pedagógica (provável chute em itens difíceis) e reduz a proficiência estimada. Em contrapartida, manter coerência — garantindo primeiramente acertos sólidos em questões fáceis e médias antes de avançar às mais difíceis — maximiza a nota oficial na TRI. Somente a Redação utiliza correção humana direta por duas bancas independentes em cinco competências de 0 a 200 pontos (totalizando 0 a 1.000).'
        ],
        highlightBox: {
          title: 'Por que a Redação tem impacto desproporcional na média final?',
          text: 'Enquanto Linguagens e Humanas raramente ultrapassam 750–800 pontos mesmo com altíssimo índice de acertos pela escala da TRI, a Redação permite alcançar entre 920 e 980 pontos reais! Em um curso com peso 3 para Redação, saltar de 720 para 940 pontos eleva sua média ponderada final em até +50 pontos diretos.'
        }
      },
      {
        heading: 'Simulação numérica comparada: mesmas 5 notas do ENEM em dois cursos distintos',
        paragraphs: [
          'Considere um estudante que obteve no ENEM as seguintes notas oficiais: Linguagens = 620 pontos, Humanas = 640 pontos, Ciências da Natureza = 650 pontos, Matemática = 810 pontos e Redação = 900 pontos. Pela média aritmética simples (soma dividida por 5): (620 + 640 + 650 + 810 + 900) / 5 = 3.620 / 5 = 724,00 pontos.',
          'Observe agora como esse mesmo boletim se comporta em dois cursos diferentes da mesma universidade: no Curso A (Engenharia Civil com pesos LC=1, CH=1, CN=3, MT=4, RED=2 — soma dos pesos igual a 11), calculam-se os produtos ponderados: (620×1) + (640×1) + (650×3) + (810×4) + (900×2) = 620 + 640 + 1.950 + 3.240 + 1.800 = 8.250 pontos. Dividindo por 11, sua nota oficial de classificação salta para 750,00 pontos — um bônus de +26 pontos acima da média simples!',
          'Já no Curso B (Direito com pesos LC=3, CH=3, CN=1, MT=1, RED=3 — soma igual a 11), sua força em Matemática perde peso enquanto Linguagens e Humanas pesam 3 vezes mais: (620×3) + (640×3) + (650×1) + (810×1) + (900×3) = 1.860 + 1.920 + 650 + 810 + 2.700 = 7.940 / 11 = 721,82 pontos. Testar os pesos no Simulador de Nota SiSU antes do encerramento das inscrições revela exatamente onde a pontuação tem maior competitividade.'
        ]
      },
      {
        heading: 'Planejamento semestral na faculdade e ritmo de leitura em palavras por minuto',
        paragraphs: [
          'Depois de conquistar a vaga na universidade (ou ainda durante o Ensino Médio e cursos técnicos), a mesma lógica de pesos reaparece no cálculo da Média Semestral Universitária. Em grande parte das faculdades brasileiras, a P1/AV1 vale 40% (peso 4) e a P2/AV2 vale 60% (peso 6), exigindo média mínima 7,0 para aprovação direta ou 5,0 para exame final. Se um universitário tirou 5,5 na P1 (peso 4 = 22 pontos acumulados), basta resolver a equação (22 + 6×P2) / 10 = 7,0 para descobrir que precisa exatamente de P2 = 48 / 6 = 8,00 pontos para passar direto sem prova final!',
          'Para organizar cronogramas realistas de preparação tanto para o ENEM e concursos quanto para as provas finais da graduação, o controle do Tempo de Leitura de Textos baseado na taxa média em Palavras por Minuto (WPM — tipicamente 200 a 250 WPM em leitura atenta de material técnico ou 150 WPM para estudo aprofundado com fichamento) evita subestimar capítulos extensos: um PDF acadêmico de 12.000 palavras exige cerca de 60 minutos contínuos de estudo focado, permitindo distribuir metas diárias possíveis durante o semestre.'
        ]
      }
    ],
    faq: [
      {
        q: 'Qual nota no ENEM garante vaga pelo SiSU em universidades públicas?',
        a: 'Não existe nota única nacional: cursos com alta demanda como Medicina costumam exigir médias acima de 780 a 820+ pontos na ampla concorrência, enquanto Engenharias, Direito e Administração variam amplamente entre 650 e 760+ dependendo da universidade, cidade e modalidade de cota.'
      },
      {
        q: 'Bônus regional ainda existe na nota ponderada do SiSU?',
        a: 'Diversas decisões judiciais recentes restringiram ou suspenderam políticas de bônus regionais em universidades federais; consulte sempre o Termo de Adesão oficial publicado no semestre vigente pela instituição pretendida.'
      },
      {
        q: 'Posso simular notas do ENEM de edições anteriores na calculadora do SiSU?',
        a: 'O SiSU tradicionalmente aceita apenas a edição mais recente do ENEM realizada pelo candidato; porém PROUNI e editais próprios de ingresso podem aceitar notas de anos recentes — verifique o edital de cada programa.'
      },
      {
        q: 'Se os pesos do meu curso somarem 10, 11 ou 15, o denominador da fórmula muda?',
        a: 'Sim! Na média ponderada você divide sempre pela soma exata de todos os pesos atribuídos às 5 áreas de conhecimento naquele curso e instituição específicos.'
      },
      {
        q: 'Qual velocidade de leitura em WPM devo usar para apostilas de estudo técnico?',
        a: 'Embora a leitura rápida de notícias alcance 250–300 palavras por minuto, para estudo ativo de textos densos com compreensão e grifos utilize entre 150 e 200 WPM no planejador de leitura.'
      }
    ]
  },
  {
    slug: 'guia-transportador-autonomo-calculo-frete-cubagem-estadia-jornada',
    title: 'Guia do Transportador Autônomo: Cálculo de Frete, Cubagem, Lei da Estadia e Jornada',
    metaDescription: 'Domine a formação profissional de frete por km rodado e margem líquida, cálculo de cubagem rodoviária (300 kg/m³), indenização da Lei da Estadia e regras da Lei do Motorista.',
    excerpt: 'Aprenda a nunca aceitar frete no prejuízo: calcule o custo real por quilômetro do caminhão, descubra quando o peso cubado supera o peso na balança e conheça seus direitos na espera e jornada.',
    categoryKey: 'logistica',
    categoryLabel: 'Logística & Fretes',
    categorySlug: 'logistica-fretes',
    author: 'Equipe Editorial Brasil Calculadoras',
    authorRole: 'Logística Rodoviária & Economia de Transportes',
    publishedAt: '2026-12-23',
    updatedAt: '2026-12-23',
    readingTime: '11 min de leitura',
    relatedCalculators: [
      {
        id: 'log-calculo-frete',
        name: 'Cálculo de Frete e Margem de Lucro',
        description: 'Forme o preço ideal do frete somando diesel, pedágios, manutenção por km, comissões e margem.'
      },
      {
        id: 'log-cubagem-carga',
        name: 'Cálculo de Cubagem e Peso Taxável',
        description: 'Calcule o volume em m³ e o peso cubado (fator 300 kg/m³) para evitar perdas em cargas leves.'
      },
      {
        id: 'log-lei-estadia',
        name: 'Diária de Espera e Descarga (Lei 11.442)',
        description: 'Apure o valor legal devido por horas paradas além das 5 horas de franquia na carga/descarga.'
      },
      {
        id: 'log-jornada-motorista',
        name: 'Jornada e Descansos (Lei do Motorista)',
        description: 'Controle blocos de condução, intervalos de repouso e interjornada previstos na Lei 13.103.'
      }
    ],
    sections: [
      {
        heading: 'Por que fechar frete apenas olhando o valor total da carta frete quebra o autônomo',
        paragraphs: [
          'Um dos cenários mais comuns nas rodovias brasileiras ocorre quando um Transportador Autônomo de Cargas (TAC) ou pequena transportadora recebe proposta para rodar 1.200 quilômetros recebendo R$ 6.800,00 brutos e aceita de imediato achando o valor atraente — descobrindo apenas dias depois, ao somar diesel S10, ARLA 32, pedágio de volta ou por eixo suspenso, chapa/descarga, taxa de agenciamento e troca próxima de pneus, que sobraram menos de R$ 600,00 livres pelo esforço de uma semana inteira e pelo desgaste mecânico de um caminhão de meio milhão de reais.',
          'Profissionalizar a precificação rodoviária exige distinguir claramente os Custos Diretos de Viagem (combustível na ida e eventual retorno vazio, pedágios, manutenção variável por km rodado com pneus e lubrificantes) das Despesas Fixas Mensais diluídas (IPVA, seguro do cavalo e carreta, rastreador, parcelas/depreciação e pró-labore do motorista) somadas à Margem de Lucro desejada por meio de markup divisor correto sobre o preço final do frete.'
        ],
        bullets: [
          'Piso Mínimo de Frete (ANTT): antes de negociar comercialmente qualquer carga lotação, verifique sempre a tabela oficial de pisos mínimos por quilômetro rodado conforme número de eixos e tipo de carga.',
          'Custos ocultos de retorno: quando não há carga de retorno garantida na região de destino, parte significativa do deslocamento vazio até o próximo embarque deve compor o preço do frete de ida.',
          'Fórmula do Preço de Frete com Markup: Preço Ideal = Custo Total da Viagem / (1 - Margem Líquida Desejada%), evitando o erro clássico de somar percentual direto sobre o custo e obter margem real menor.',
          'Conferência de pedágio e eixos: eixos suspensos sem carga contam isenção conforme regulamentação específica de cada praça, mas caminhões carregados pagam integralmente por todos os eixos em contato com o solo.'
        ]
      },
      {
        heading: 'Peso Cubado vs Peso Real: não transporte ar de graça no baú',
        paragraphs: [
          'Se um caminhão baú ou sider possui capacidade útil de 14 toneladas, mas é contratado para transportar 1.000 caixas gigantes de papelão contendo colchões de espuma, peças plásticas sopradas ou embalagens leves pesando juntas apenas 3,5 toneladas — e ocupando 100% dos 60 metros cúbicos disponíveis da carroceria —, cobrar o frete exclusivamente pelo peso real da balança significa transportar ar ocupando todo o espaço produtivo do veículo pelo preço de um quarto de carga.',
          'Para corrigir essa distorção econômica, o transporte rodoviário brasileiro aplica amplamente o Fator de Cubagem padrão de 300 kg por metro cúbico (enquanto o modal aéreo fracionado usa 166,7 kg/m³). A regra matemática determina: calcula-se o Volume Total em m³ = Comprimento (m) × Largura (m) × Altura (m) × Quantidade de Volumes, e multiplica-se por 300. Compara-se então o Peso Cubado obtido com o Peso Bruto de Balança: o faturamento comercial utiliza sempre o MAIOR valor entre os dois — denominado Peso Taxável ou Peso Cubado de Faturamento.'
        ],
        highlightBox: {
          title: 'Fórmula da Indenização por Estadia (Lei nº 11.442/2007)',
          text: 'Ultrapassado o prazo máximo legal de 5 horas corridas contadas da chegada do veículo ao endereço de origem ou destino para carga e descarga, passa a ser devida ao transportador indenização por hora parada proporcional à capacidade de carga do caminhão (Toneladas × Horas Excedentes × Tarifa legal atualizada pelo INPC)!'
        }
      },
      {
        heading: 'Exemplo prático completo: viagem de 900 km + carga cubada + 9 horas de fila na descarga',
        paragraphs: [
          'Acompanhe um exemplo realista de operação em carreta fechada de 6 eixos com capacidade de carga líquida de 27 toneladas contratada para um trecho de 900 quilômetros entre São Paulo e Belo Horizonte (considerando cálculo completo da perna e cobertura de custos). Suponha rendimento médio de 2,4 km/L com diesel a R$ 6,00/L: serão consumidos 375 litros (R$ 2.250,00 de combustível). Acrescente R$ 580,00 em pedágios, R$ 1,10/km para fundo técnico de pneus/óleo/manutenção + custos fixos proporcionais (R$ 990,00) e R$ 180,00 em alimentação/extras, totalizando R$ 4.000,00 de custo operacional direto no trajeto.',
          'Se o transportador deseja preservar 20% de margem líquida livre sobre o valor faturado (ou 25% considerando comissão/impostos operacionais de 5% em cima do frete), não deve apenas multiplicar R$ 4.000 por 1,20 (= R$ 4.800, o que entregaria só 16,6% de margem). Aplicando o divisor correto: R$ 4.000,00 / (1 - 0,20) = R$ 5.000,00! Agora imagine que essa carga fracionada consiste em 40 paletes medindo 1,20 m × 1,00 m × 1,50 m (1,80 m³ por palete = 72 m³ totais), pesando apenas 12.000 kg em balança: aplicando o fator rodoviário de 300 kg/m³, o Peso Cubado resulta em 72 × 300 = 21.600 kg (21,6 toneladas) — logo a cobrança justa por peso taxável sobe de 12 para 21,6 toneladas!',
          'Por fim, chegando ao centro de distribuição no destino, o veículo aguarda exatamente 9 horas corridas desde a apresentação documental no portão até a liberação da doca após a descarga. Como a Lei nº 11.442/2007 concede franquia inicial de 5 horas para todo o processo (carga ou descarga conforme registro de chegada), geraram-se 4 horas excedentes indenizáveis multiplicadas pelas 27 toneladas de capacidade do caminhão — totalizando 108 toneladas-hora de estadia a serem faturadas adicionalmente sobre o conhecimento de transporte (CT-e).'
        ]
      },
      {
        heading: 'Jornada de direção, intervalos de descanso e segurança pela Lei do Motorista',
        paragraphs: [
          'Além de precificar o frete com exatidão, cumprir rigorosamente os períodos de descanso previstos na Lei nº 13.103/2015 (Lei do Motorista), com as atualizações do STF na ADI 5322, protege tanto a vida nas rodovias quanto o transportador contra multas graves de fiscalização da Polícia Rodoviária Federal e autuações trabalhistas ou previdenciárias. A regra operacional estabelece limite de condução contínua sem paradas de no máximo 5 horas e 30 minutos para transporte de cargas, exigindo intervalo mínimo de 30 minutos de descanso a cada período de direção contínua (podendo ser fracionado dentro da janela legal conforme o caso, mantendo o descanso mínimo obrigatório) e 1 hora de intervalo para refeição.',
          'Entre duas jornadas diárias de trabalho, é obrigatório observar o repouso mínimo ininterrupto de 11 horas (com as vedações consolidadas pelo STF quanto ao fracionamento dessa interjornada e ao tempo de espera tratado fora da jornada normal quando aplicável). Manter registros digitais claros de chegada no pátio, tacógrafo aferido e simulador de jornada auxilia transportadores autônomos e gestores de frota a planejarem escalas viáveis e seguras antes de aceitar prazos apertados de entrega.'
        ]
      }
    ],
    faq: [
      {
        q: 'Qual é o fator padrão de cubagem no transporte rodoviário brasileiro?',
        a: 'O fator padrão consolidado para cargas rodoviárias fracionadas no Brasil é de 300 kg por metro cúbico (300 kg/m³). Já no transporte aéreo doméstico utiliza-se geralmente 166,7 kg/m³ e no marítimo internacional 1.000 kg/m³.'
      },
      {
        q: 'Como comprovar o horário de chegada para cobrar a estadia da Lei 11.442/2007?',
        a: 'Exija sempre o registro formal (com carimbo, protocolo eletrônico de portaria, ticket com data e hora ou confirmação por rastreamento/WhatsApp corporativo) no momento exato da chegada no cliente e na saída após a descarga.'
      },
      {
        q: 'O valor por tonelada-hora da Lei da Estadia sofre reajuste anual?',
        a: 'Sim. O artigo 11, parágrafo 5º da Lei nº 11.442/2007 determinou o valor base legal reajustado anualmente pelo INPC apurado pelo IBGE.'
      },
      {
        q: 'Por quanto tempo seguido um caminhoneiro pode dirigir sem parar?',
        a: 'Pela Lei nº 13.103/2015, é vedado ao motorista de carga dirigir por mais de 5 horas e meia ininterruptas, devendo descansar pelo menos 30 minutos a cada 6 horas na condução de veículo de transporte de carga.'
      },
      {
        q: 'Devo incluir desgaste de pneus e troca de óleo no custo do quilômetro rodado?',
        a: 'Sem dúvida! Embora não saiam do caixa no posto de combustível a cada viagem, pneus, filtros, óleo, pastilhas, lonas e depreciação representam parcelas enormes do custo real por km e quebram quem os ignora ao fechar frete.'
      }
    ]
  }
];

export function getRelatedGuidesForCalculator(calcId: string, categoryKey: string): GuideArticle[] {
  const exactMatches = GUIDES_ARTICLES.filter(article =>
    article.relatedCalculators.some(rc => rc.id === calcId)
  );
  const categoryMatches = GUIDES_ARTICLES.filter(
    article =>
      article.categoryKey === categoryKey &&
      !exactMatches.some(existing => existing.slug === article.slug)
  );
  const remainingMatches = GUIDES_ARTICLES.filter(
    article =>
      !exactMatches.some(existing => existing.slug === article.slug) &&
      !categoryMatches.some(existing => existing.slug === article.slug)
  );

  return [...exactMatches, ...categoryMatches, ...remainingMatches].slice(0, 3);
}
