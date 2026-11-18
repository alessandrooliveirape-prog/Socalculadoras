import { CalcSeoDetail } from './types';

export const EXATAS_TECH_UTIL_SEO: Record<string, CalcSeoDetail> = {
  // ================= MATEMÁTICA & ESCOLA (11) =================
  'regra-tres': {
    title: 'Calculadora de Regra de Três Simples (Direta e Inversa) | Brasil Calculadoras',
    description: 'Resolva regra de três simples diretamente ou inversamente proporcional em segundos. Ideal para escola, vestibulares, receitas, consumo e escalas.',
    domainConcept: 'A regra de três simples é um dos métodos mais versáteis da aritmética aplicada, permitindo descobrir um quarto valor desconhecido (incógnita X) a partir de três grandezas conhecidas ligadas por proporcionalidade. No dia a dia, ela resolve desde a adaptação de ingredientes de receitas culinárias e conversão de moedas ou escalas de plantas arquitetônicas até estimativas de consumo de combustível e produtividade fabril. O ponto crucial antes de multiplicar é identificar se as duas grandezas são diretamente proporcionais (crescem no mesmo sentido) ou inversamente proporcionais (quando uma cresce, a outra diminui na mesma razão).',
    formulaText: 'Se A está para B assim como C está para X: na Proporção Direta multiplica-se cruzado obtendo X = (C × B) / A; na Proporção Inversa multiplica-se em linha reta obtendo X = (A × B) / C.',
    workedExample: 'Exemplo Direto: se 3 litros de tinta pintam 36 m², quantos litros são necessários para pintar 84 m²? Como mais área exige mais tinta, X = (84 × 3) / 36 = 7 litros. Exemplo Inverso: se 4 pedreiros erguem um muro em 12 dias, em quantos dias 6 pedreiros farão o mesmo muro? Como mais trabalhadores reduzem o tempo, X = (4 × 12) / 6 = 8 dias.',
    whenToUse: 'Use em problemas escolares e do ENEM, reajuste proporcional de receitas de cozinha, cálculo de dosagens técnicas, conversão de escalas de mapas e alocação de equipes em projetos.',
    importantTips: 'Confira sempre se os pares de mesma grandeza estão exatamente na mesma unidade de medida antes de calcular (por exemplo, converta minutos para horas ou gramas para quilos para não distorcer a proporção).',
    sources: [
      { name: 'Portal da Matemática OBMEP - Razões e Proporções', url: 'https://portaldamatematica.obmep.org.br/' }
    ],
    extraFaqs: [
      { q: 'Como ter certeza se devo marcar proporção direta ou inversa?', a: 'Faça a pergunta lógica: "Se eu dobrar a primeira grandeza, a segunda dobra ou cai pela metade?" Se dobrar junto (ex: kg de arroz e preço), é direta; se cair pela metade (ex: velocidade e tempo de viagem), é inversa.' },
      { q: 'A regra de três funciona para calcular porcentagens?', a: 'Sim! Todo cálculo de porcentagem é uma regra de três direta onde o valor original representa 100% e a parte procurada representa P%.' },
      { q: 'E quando o problema envolve três ou mais grandezas ao mesmo tempo?', a: 'Nesse caso trata-se de uma regra de três composta, na qual comparamos cada grandeza individualmente com a grandeza da incógnita X antes de multiplicar as razões.' }
    ]
  },
  'contador-texto': {
    title: 'Contador de Palavras, Caracteres e Tempo de Leitura Online | Brasil Calculadoras',
    description: 'Analise textos instantaneamente: conte palavras, caracteres (com e sem espaços), parágrafos, estime tempo de leitura e formate maiúsculas/minúsculas.',
    domainConcept: 'Redatores de SEO, jornalistas, estudantes preparando a redação do ENEM ou resumos acadêmicos (ABNT) e profissionais de social media dependem diariamente de métricas exatas de comprimento textual. Limites rigorosos de caracteres em meta descriptions do Google (~155 caracteres), títulos SEO (~60 caracteres), biografias de redes sociais, resumos de TCC ou limites de linhas e palavras em editais públicos tornam indispensável uma ferramenta instantânea que também estime o tempo médio de leitura para blogs e apresentações.',
    formulaText: 'O analisador processa a string contando tokens separados por espaço para Palavras, comprimento bruto vs sem espaços em branco para Caracteres, quebras de linha não vazias para Parágrafos e divide o total de palavras por 200 WPM para estimar minutos de leitura.',
    workedExample: 'Um artigo educativo contendo 900 palavras e cerca de 5.800 caracteres com espaços divididos em 14 parágrafos leva em média 900 / 200 = 4,5 minutos de leitura contínua para um leitor adulto padrão, atendendo perfeitamente aos padrões de profundidade editorial para blogs e guias práticos.',
    whenToUse: 'Use ao revisar redações para concursos/ENEM, otimizar titles e meta descriptions de sites, preparar roteiros cronometrados de palestras e conferir limites de caracteres de formulários.',
    importantTips: 'Em apresentações faladas ou vídeos do YouTube/reels, a velocidade média confortável de leitura em voz alta é menor que a leitura silenciosa — cerca de 130 a 150 palavras por minuto.',
    sources: [
      { name: 'Google Search Central - Boas Práticas de Títulos e Snippets', url: 'https://developers.google.com/search/docs/appearance/snippet' }
    ],
    extraFaqs: [
      { q: 'Qual é o limite recomendado de caracteres para títulos e meta descrições no Google?', a: 'Recomenda-se manter o título SEO entre 50 e 60 caracteres e a meta description entre 140 e 160 caracteres para evitar cortes com reticências nos resultados de busca.' },
      { q: 'Como saber quantas palavras equivalem às 30 linhas da redação do ENEM?', a: 'Uma redação dissertativa de 25 a 30 linhas escritas à mão costuma conter entre 320 e 450 palavras, variando conforme o tamanho da caligrafia do candidato.' },
      { q: 'O texto colado no contador fica salvo em algum banco de dados?', a: 'Não. Toda a análise e contagem de caracteres acontecem localmente na memória do seu navegador, preservando sigilo total de textos confidenciais ou inéditos.' }
    ]
  },
  'porcentagem-simples': {
    title: 'Calculadora de Porcentagem Online Rápida (Desconto e Acréscimo) | Brasil Calculadoras',
    description: 'Calcule facilmente quanto é X% de um valor, some acréscimos percentuais (aumentos/impostos) ou subtraia descontos de compras à vista.',
    domainConcept: 'A porcentagem (do latim per centum, "por cento") expressa qualquer proporção ou taxa em relação a um todo dividido em 100 partes iguais. Embora simples na teoria, operações cotidianas — como aplicar um desconto de 15% na loja, somar um reajuste de 8,5% no contrato ou conferir quanto de comissão representa 12% sobre um faturamento — geram dúvidas rápidas quando não se quer montar frações no papel. Esta calculadora reúne as três operações essenciais em um único painel claro: extrair X% de um valor, somar +X% ao valor base ou descontar -X% do valor base.',
    formulaText: 'Diferença Percentual = Valor Base × (Percentual / 100). Na operação Calcular: Resultado = Diferença; em Adicionar: Resultado = Valor Base + Diferença; em Descontar: Resultado = Valor Base - Diferença.',
    whenToUse: 'Use ao negociar descontos para pagamento no Pix, conferir reajustes salariais ou de mensalidades escolares, calcular comissões e verificar acréscimos de juros simples.',
    importantTips: 'Cuidado com descontos e aumentos sucessivos: se um produto de R$ 100,00 sobe 20% (vai para R$ 120,00) e depois recebe 20% de desconto, ele NÃO volta para R$ 100,00 — vai para R$ 96,00 (porque 20% incide sobre R$ 120,00 = R$ 24,00 de desconto)!',
    sources: [
      { name: 'Portal da Matemática OBMEP - Porcentagem', url: 'https://portaldamatematica.obmep.org.br/' }
    ],
    extraFaqs: [
      { q: 'Como fazer de cabeça um desconto de 15% sobre um produto?', a: 'Ache primeiro 10% deslocando uma vírgula para a esquerda (10% de R$ 200 = R$ 20), pegue a metade disso para achar 5% (R$ 10) e some os dois = R$ 30 de desconto.' },
      { q: 'Qual é a diferença entre aumentar 50% e multiplicar por 1,5?', a: 'Nenhuma! Multiplicar por 1,50 (1 + 0,50) equivale exatamente a somar 50% ao valor original.' },
      { q: 'Se um preço teve desconto de 30% e foi para R$ 70, quanto custava antes?', a: 'Divida o valor com desconto por (1 - 0,30) = 0,70. Logo, R$ 70 / 0,70 = R$ 100,00 originais.' }
    ]
  },
  'media-ponderada': {
    domainConcept: 'Em provas escolares, vestibulares, faculdades e avaliações corporativas de desempenho, nem todas as atividades possuem a mesma importância na nota final: frequentemente o trabalho em grupo vale peso 2, uma prova parcial vale peso 3 e a avaliação semestral vale peso 5. Diferentemente da média aritmética simples (que soma tudo e divide por 3), a média ponderada multiplica cada nota pela relevância do seu respectivo peso antes de dividir pela soma total dos pesos.',
    formulaText: 'Média Ponderada = [(Nota 1 × Peso 1) + (Nota 2 × Peso 2) + (Nota 3 × Peso 3)] / (Peso 1 + Peso 2 + Peso 3).',
    whenToUse: 'Use ao longo do bimestre ou semestre escolar/universitário para simular sua nota final combinando provas e trabalhos de pesos diferentes.',
    importantTips: 'Se você precisa calcular a média de apenas 2 avaliações, basta preencher Peso = 0 na terceira avaliação (ou ajustar os pesos proporcionalmente) para obter o resultado exato.',
    sources: [
      { name: 'INEP / MEC - Cálculo de Médias Ponderadas', url: 'https://www.gov.br/inep/pt-br' }
    ],
    extraFaqs: [
      { q: 'Se todos os pesos forem iguais (ex: peso 1, 1 e 1), a média ponderada vira média simples?', a: 'Exatamente! Quando todos os itens têm o mesmo peso, o resultado da média ponderada é matematicamente idêntico ao da média aritmética simples.' },
      { q: 'Os pesos precisam obrigatoriamente somar 10 ou 100?', a: 'Não. Como a fórmula divide automaticamente pela soma total dos pesos informados, você pode usar pesos como 2, 3 e 5 ou percentuais como 20, 30 e 50 — o resultado será idêntico.' },
      { q: 'Onde a média ponderada aparece no mercado financeiro e empresarial?', a: 'No cálculo do Preço Médio Ponderado de ações compradas em lotes diferentes, na ponderação de indicadores de KPI e em índices de inflação e bolsas de valores.' }
    ]
  },
  'pitagoras-triangulo': {
    domainConcept: 'Um dos pilares mais celebrados da geometria euclidiana, o Teorema de Pitágoras descreve a relação exata entre os três lados de qualquer triângulo retângulo (triângulo que possui um ângulo interno reto de 90°). O lado oposto ao ângulo reto — sempre o maior dos três — é chamado de hipotenusa, enquanto os dois lados adjacentes ao ângulo de 90° são os catetos. Essa relação permite calcular medidas inacessíveis em obras, marcenaria, topografia e problemas acadêmicos medindo apenas dois lados conhecidos.',
    formulaText: 'Pela relação fundamental a² + b² = c², quando se busca a Hipotenusa C: c = √(a² + b²); quando se busca um dos Catetos conhecendo a hipotenusa: a = √(c² - b²) ou b = √(c² - a²).',
    whenToUse: 'Use para conferir o esquadro perfeito de paredes em obras (regra clássica 3-4-5), calcular o comprimento de rampas, escadas e telhados, ou resolver listas escolares de geometria.',
    importantTips: 'Na construção civil, pedreiros verificam facilmente se duas paredes estão perfeitamente em ângulo reto de 90° marcando 3 metros em uma parede, 4 metros na outra e conferindo se a diagonal mede exatos 5 metros (ou 60 cm, 80 cm e 100 cm).',
    sources: [
      { name: 'Portal da Matemática OBMEP - Teorema de Pitágoras', url: 'https://portaldamatematica.obmep.org.br/' }
    ],
    extraFaqs: [
      { q: 'O Teorema de Pitágoras funciona em qualquer tipo de triângulo?', a: 'Não! Ele só é válido em triângulos retângulos (que têm um ângulo interno exato de 90°). Para outros triângulos, utiliza-se a Lei dos Cossenos.' },
      { q: 'A hipotenusa pode ser menor ou igual a um dos catetos?', a: 'Nunca. Como c = √(a² + b²) com medidas positivas, a hipotenusa é obrigatoriamente maior que qualquer um dos catetos isoladamente e menor que a soma dos dois.' },
      { q: 'Como descobrir o tamanho da diagonal de uma TV ou tela usando Pitágoras?', a: 'Como a tela é um retângulo, largura e altura formam os catetos; elevando ambas ao quadrado, somando e extraindo a raiz quadrada (dividida por 2,54 cm/pol), obtém-se as polegadas exatas da diagonal.' }
    ]
  },
  'area-circulo-retangulo': {
    domainConcept: 'Calcular com rapidez a área (superfície interna em m² ou cm²) e o perímetro (comprimento total do contorno externo) de figuras planas fundamentais — retângulos/quadrados, círculos e triângulos — é uma necessidade recorrente tanto na matemática escolar quanto no planejamento de terrenos, piscinas, jardins, mesas redondas e cercamentos. Enquanto o perímetro indica quantos metros lineares de cerca, rodapé ou fita de borda são necessários para contornar a figura, a área determina quanto piso, grama ou tecido cobrirá sua superfície.',
    formulaText: 'Retângulo: Área = Base × Altura; Perímetro = 2 × (Base + Altura). Círculo: Área = π × r²; Circunferência = 2 × π × r. Triângulo Retângulo/Base-Altura: Área = (Base × Altura) / 2.',
    whenToUse: 'Use ao medir cômodos retangulares para piso, calcular a metragem de lonas ou tampões redondos pelo raio ou resolver exercícios de geometria plana.',
    importantTips: 'No círculo, atenção à diferença entre Raio e Diâmetro: se você mediu a largura total de ponta a ponta de uma mesa redonda ou piscina circular (Diâmetro), divida esse valor por 2 antes de inserir no campo de Raio!',
    sources: [
      { name: 'Sociedade Brasileira de Matemática (SBM) - Geometria Plana', url: 'https://www.sbm.org.br/' }
    ],
    extraFaqs: [
      { q: 'Por que a área sai em metros quadrados (m²) enquanto o perímetro sai em metros (m)?', a: 'Porque a área multiplica duas dimensões de comprimento (m × m = m²), medindo superfície bidimensional, enquanto o perímetro soma apenas comprimentos lineares do contorno externo.' },
      { q: 'Qual é o valor de Pi (π) utilizado na calculadora?', a: 'A ferramenta utiliza a constante dupla nativa de alta precisão Math.PI (≈ 3,141592653589793), muito mais exata que o arredondamento escolar de 3,14.' },
      { q: 'Como calcular a área de um terreno em L ou formato irregular?', a: 'Divida o desenho do terreno em dois ou mais retângulos ou triângulos simples, calcule a área de cada parte separadamente e some os resultados.' }
    ]
  },
  'potencia-raiz': {
    domainConcept: 'A potenciação e a radiciação são operações inversas centrais na álgebra, física e matemática financeira: enquanto elevar uma base a um expoente representa multiplicações sucessivas de um número por ele mesmo (incluindo expoentes decimais ou negativos), extrair a raiz quadrada identifica qual número não-negativo multiplicado por si mesmo produz o valor base original. Essa dupla de cálculo agiliza conferências escolares, estimativas de lado de terrenos quadrados a partir da área e modelagens exponenciais.',
    formulaText: 'Potenciação = Base ^ Expoente (ex: 9² = 9 × 9 = 81). Radiciação = √Base (raiz quadrada principal de números não-negativos).',
    whenToUse: 'Ideal para conferir exercícios de exponenciação com expoentes inteiros ou fracionários, descobrir o lado de um quadrado sabendo sua área em m² (√Área) e estudar álgebra básica.',
    importantTips: 'Todo número diferente de zero elevado ao expoente 0 resulta exatamente em 1; e expoentes negativos correspondem ao inverso fracionário da potência positiva (ex: 2⁻² = 1 / 2² = 0,25).',
    sources: [
      { name: 'IMPA / OBMEP - Potenciação e Radiciação', url: 'https://impa.br/' }
    ],
    extraFaqs: [
      { q: 'Por que não existe raiz quadrada real de um número negativo?', a: 'Porque tanto um número positivo quanto um número negativo elevados ao quadrado resultam sempre em um valor positivo (ex: (-3)² = +9); raízes de negativos pertencem ao conjunto dos números complexos (imaginários).' },
      { q: 'Como descobrir o lado de um terreno quadrado de 225 m²?', a: 'Basta inserir 225 como Número Base: a raiz quadrada extraída imediatamente é 15 metros de frente por 15 metros de fundo.' },
      { q: 'Posso usar expoentes decimais como 0,5 ou 1,5?', a: 'Sim! Elevar um número ao expoente 0,5 equivale matematicamente a extrair sua raiz quadrada.' }
    ]
  },
  'fatorial-num': {
    domainConcept: 'Representado pelo ponto de exclamação (N!), o fatorial de um número inteiro não-negativo corresponde ao produto de todos os números inteiros positivos menores ou iguais a N. Embora pareça uma operação simples, o crescimento do fatorial é ultrarrápido (superexponencial): enquanto 5! vale apenas 120, 10! já ultrapassa 3,6 milhões e 20! passa de 2,4 quintilhões. Ele é a base fundamental de todos os cálculos de permutações, arranjos, combinações probabilísticas e séries matemáticas de Taylor.',
    formulaText: 'N! = N × (N - 1) × (N - 2) × ... × 2 × 1, sendo definido por convenção matemática 0! = 1. (Suporta inteiros seguros até N = 170 dentro do limite IEEE 754).',
    whenToUse: 'Use para resolver problemas de quantas formas distintas N pessoas podem formar uma fila, anagramas sem repetição de palavras, distribuição de assentos, códigos de senha sem repetição de caracteres e coeficientes binomiais em probabilidade estatística.',
    importantTips: 'Na análise combinatória, ao dividir fatoriais grandes em frações (como 100! / 98!), simplifique algebricamente o denominador antes de calcular na calculadora: 100 × 99 × 98! / 98! reduz instantaneamente para 100 × 99 = 9.900! Outra dica fundamental é diferenciar permutações simples de permutações com elementos repetidos (como na palavra BANANA, onde é necessário dividir pelo fatorial das letras repetidas para não contar anagramas idênticos mais de uma vez).',
    sources: [
      { name: 'Portal da Matemática OBMEP - Princípio Multiplicativo e Fatorial', url: 'https://portaldamatematica.obmep.org.br/' }
    ],
    extraFaqs: [
      { q: 'Por que o fatorial de zero (0!) é igual a 1 e não a zero?', a: 'Por convenção algébrica consistente com a fórmula de combinações C(n, n) = n! / (n! × 0!) = 1 e porque existe exatamente 1 maneira de organizar zero objetos (o conjunto vazio).' },
      { q: 'Quantos anagramas diferentes podem ser formados com uma palavra de 6 letras distintas?', a: 'Existem 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720 combinações possíveis de ordenação.' },
      { q: 'Por que a calculadora limita o cálculo em até 170!?', a: 'Porque a partir de 171!, o resultado ultrapassa 1,79 × 10^308, que é o maior número representável no padrão numérico de 64 bits (IEEE 754) usado pelos navegadores modernos.' }
    ]
  },
  'regra-de-sociedade': {
    domainConcept: 'Quando dois ou mais sócios investem quantias diferentes na abertura de uma empresa, compra conjunta de um terreno ou execução de um projeto comercial — sem que todos tenham exatamente 50% das cotas —, o lucro líquido distribuído ao final do exercício deve ser rateado de forma proporcional ao capital integralizado por cada participante (conforme previsão do contrato social). A Regra de Sociedade automatiza essa divisão societária eliminando conflitos entre investidores.',
    formulaText: 'Participação do Sócio (%) = (Capital Investido pelo Sócio / Capital Social Total) × 100. Lucro Devido ao Sócio = Lucro Líquido a Distribuir × (Participação% / 100).',
    whenToUse: 'Use no fechamento contábil para distribuir dividendos/lucros entre sócios cotistas, dividir ganhos em pool de investimentos ou calcular participação proporcional em compra coletiva.',
    importantTips: 'Lembre-se de separar no contrato social o Pró-Labore (remuneração mensal paga apenas aos sócios que efetivamente trabalham na administração do negócio) da Distribuição de Lucros (paga conforme o percentual de cotas de capital de cada sócio).',
    sources: [
      { name: 'Código Civil Brasileiro - Art. 1.007 (Participação nos Lucros e Perdas)', url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm' }
    ],
    extraFaqs: [
      { q: 'A distribuição de lucros no contrato social pode ser diferente da proporção das cotas?', a: 'Na sociedade limitada (LTDA), o Código Civil e a jurisprudência permitem distribuição desproporcional de lucros desde que prevista expressamente no contrato social ou ata assinada por todos os sócios, devidamente registrada para fins contábeis.' },
      { q: 'Sócios que investiram em épocas diferentes entram direto na mesma regra?', a: 'Quando os aportes ocorrem por tempos distintos, aplica-se a regra de sociedade composta ponderando simultaneamente o capital investido multiplicado pelo tempo de permanência de cada sócio.' },
      { q: 'A distribuição de lucros contábeis regularmente apurados sofre desconto de INSS?', a: 'Lucros distribuídos em conformidade com a escrituração contábil dentro das regras fiscais não sofrem incidência de INSS nem de IRPF na fonte pela legislação atual vigente.' }
    ]
  },
  'equacao-segundo-grau': {
    domainConcept: 'Presente em praticamente todas as provas de Ensino Médio, vestibulares e disciplinas iniciais de engenharia, física (lançamento oblíquo e aceleração) e economia (maximização de lucro), a equação polinomial do 2º grau na forma ax² + bx + c = 0 (com a ≠ 0) tem sua solução completa dada pela tradicional Fórmula de Bhaskara. A ferramenta calcula primeiro o discriminante Delta (Δ) para classificar imediatamente se há duas raízes reais distintas, uma raiz real dupla ou nenhuma raiz real, exibindo os valores exatos de X1 e X2.',
    formulaText: 'Calcula-se o Discriminante Δ = b² - 4ac. Se Δ for positivo (maior que zero): X1 = (-b + √Δ) / (2a) e X2 = (-b - √Δ) / (2a) (duas raízes reais). Se Δ = 0: X1 = X2 = -b / (2a). Se Δ for negativo (menor que zero): não existem raízes reais.',
    workedExample: 'Cenário 1: resolvendo x² - 5x + 6 = 0 (Coeficiente A = 1, B = -5, C = 6), o discriminante resulta em Δ = (-5)² - 4(1)(6) = 25 - 24 = 1. Aplicando Bhaskara: X1 = (5 + 1) / 2 = 3 e X2 = (5 - 1) / 2 = 2 (duas raízes reais distintas). Cenário 2: dobrando os coeficientes ou resolvendo 2x² - 8x + 6 = 0 (A = 2, B = -8, C = 6), obtém-se Δ = 64 - 48 = 16 (√Δ = 4), resultando em X1 = (8 + 4) / 4 = 3 e X2 = (8 - 4) / 4 = 1.',
    whenToUse: 'Use para conferir resultados de exercícios algébricos, estudar o comportamento da parábola quadrática (concavidade para cima quando a é positivo ou para baixo quando a é negativo) e encontrar pontos de equilíbrio em curvas de custo.',
    importantTips: 'Se o coeficiente A for zero, a equação deixa de ser de 2º grau e passa a ser uma equação linear simples de 1º grau (bx + c = 0, cuja solução é x = -c / b). Atenção também aos sinais negativos de b e c ao preencher os coeficientes!',
    sources: [
      { name: 'Portal da Matemática OBMEP - Equações do 2º Grau', url: 'https://portaldamatematica.obmep.org.br/' }
    ],
    extraFaqs: [
      { q: 'O que o valor de Delta (Δ) revela visualmente no gráfico da parábola?', a: 'Quando Δ é maior que zero, a parábola corta o eixo horizontal X em dois pontos distintos; quando Δ = 0, o vértice apenas tangencia o eixo X em um único ponto; quando Δ é menor que zero, a parábola fica inteiramente acima ou abaixo do eixo X sem tocá-lo.' },
      { q: 'Como conferir rapidamente se minhas raízes X1 e X2 estão certas sem refazer Bhaskara?', a: 'Pelas Relações de Girard (Soma e Produto): X1 + X2 deve ser sempre igual a (-b / a), e X1 × X2 deve ser igual a (c / a).' },
      { q: 'É possível ter raiz negativa ou decimal na fórmula de Bhaskara?', a: 'Sim! As raízes reais podem ser positivas, negativas, nulas, decimais ou irracionais (quando Δ não possui raiz quadrada inteira exata).' }
    ]
  },
  'proporcao-aurea-design': {
    title: 'Calculadora de Proporção Áurea (φ = 1,618) para Design e Arquitetura | Brasil Calculadoras',
    description: 'Calcule dimensões proporcionais exatas pela Razão Áurea (Número de Ouro φ = 1,618) para interfaces UI/UX, tipografia, arquitetura e fotografia.',
    domainConcept: 'Conhecida desde a Antiguidade Clássica como Número de Ouro ou Divina Proporção, a Proporção Áurea (representada pela letra grega φ ≈ 1,618034) ocorre quando um segmento total (A + B) dividido pela parte maior (A) mantém exatamente a mesma razão que a parte maior (A) dividida pela parte menor (B). Amplamente empregada por arquitetos, artistas renascentistas, designers de UI/UX e tipógrafos modernos, a razão φ orienta escalas modulares de fontes (ex: corpo de texto 16px para subtítulos 26px e títulos 42px), divisão equilibrada entre coluna principal e barra lateral de sites e composição fotográfica.',
    formulaText: 'Constante φ = (1 + √5) / 2 ≈ 1,6180339887. Para encontrar a dimensão maior a partir da menor: A = Medida × φ. Para encontrar a dimensão menor a partir da maior: B = Medida / φ. Verificação: A / B ≈ 1,618034.',
    whenToUse: 'Ideal para web designers definindo proporções de layout (sidebar vs conteúdo), diagramadores calculando escalas tipográficas, fotógrafos e arquitetos desenhando fachadas e móveis.',
    importantTips: 'Em design de interfaces responsivas (UI), aplicar a razão áurea aproximada de 61,8% para a área principal de leitura e 38,2% para a coluna lateral cria um equilíbrio visual natural sem exigir cálculos manuais complexos.',
    sources: [
      { name: 'IMPA - Razão Áurea e Sequência de Fibonacci', url: 'https://impa.br/' }
    ],
    extraFaqs: [
      { q: 'Qual a ligação entre a Proporção Áurea e a Sequência de Fibonacci?', a: 'Na sequência de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...), quanto maiores os números, mais a razão entre um termo e o seu antecessor converge exatamente para φ = 1,618034.' },
      { q: 'Como aplicar a escala áurea no tamanho das fontes de um site?', a: 'Multiplique o tamanho base do parágrafo (ex: 16 px) por 1,618 para achar o H2 (~26 px) e novamente por 1,618 para achar o H1 principal (~42 px).' },
      { q: 'A Proporção Áurea também aparece em dimensões de logotipos e cartões?', a: 'Sim! Retângulos áureos mantêm razão largura/altura de 1,618:1, muito próximos de cartões de visita, telas widescreen 16:10 e grades clássicas de identidade visual.' }
    ]
  },

  // ================= ESTATÍSTICA & MÉTRICAS (10) =================
  'desvio-padrao': {
    domainConcept: 'Conhecer apenas a média de notas de uma turma, de tempos de entrega de um e-commerce ou de retornos mensais de um investimento esconde uma informação vital: o quanto os resultados variam entre si no dia a dia. Duas empresas podem entregar uma média exata de 5 dias, mas uma entrega sempre entre 4 e 6 dias (baixa dispersão) enquanto a outra varia entre 1 e 15 dias (alta instabilidade). O Desvio Padrão e a Variância quantificam exatamente esse grau de dispersão em torno da média aritmética.',
    formulaText: 'Calcula-se primeiro a Média x̄ = Σx_i / n. Em seguida, a Variância Amostral s² = Σ(x_i - x̄)² / (n - 1) utilizando correção de Bessel, e o Desvio Padrão Amostral s = √s² na mesma unidade original dos dados.',
    whenToUse: 'Use em análises laboratoriais, trabalhos acadêmicos, controle estatístico de processos (CEP), medição de volatilidade financeira de ativos e monitoramento de consistência de prazos operacionais.',
    importantTips: 'Insira os valores da sua série separados por vírgula utilizando ponto para decimais (ex: 12.5, 14.2, 15.0). Quanto menor o desvio padrão em relação à média, mais previsível e homogêneo é o conjunto de dados analisado.',
    sources: [
      { name: 'IBGE / ABE - Estatística Descritiva e Medidas de Dispersão', url: 'https://redeabe.org.br/' }
    ],
    extraFaqs: [
      { q: 'Por que a variância é expressa na unidade ao quadrado e o desvio padrão volta à unidade normal?', a: 'Para impedir que desvios positivos e negativos se anulem na soma, eleva-se cada diferença ao quadrado na variância; ao extrair a raiz quadrada no desvio padrão, voltamos à unidade original (reais, dias, metros ou pontos).' },
      { q: 'Quando o desvio padrão resulta em zero?', a: 'Exclusivamente quando todos os números informados na amostra são exatamente iguais entre si, significando variabilidade nula.' },
      { q: 'Qual a regra empírica de interpretação em uma distribuição normal (curva em sino)?', a: 'Em distribuições aproximadamente normais, cerca de 68% dos dados estão dentro de ±1 desvio padrão da média e cerca de 95% ficam dentro de ±2 desvios padrão.' }
    ]
  },
  'margem-erro': {
    domainConcept: 'Toda pesquisa eleitoral, estudo de mercado ou enquete de satisfação (NPS) realizada por amostragem traz uma observação obrigatória como "margem de erro de ±3 pontos percentuais com nível de confiança de 95%". Esse intervalo define a precisão estatística da estimativa: sem calcular a margem de erro antes de ir a campo, uma empresa pode entrevistar pessoas demais (gastando verba desnecessária) ou entrevistar poucas pessoas e tomar decisões estratégicas baseadas em ruído aleatório.',
    formulaText: 'Para proporção conservadora p = 0,50: Erro Padrão SE = √[p(1 - p) / n]. Quando a população N maior que zero é informada, aplica-se o Fator de Correção Finita fpc = √[(N - n) / (N - 1)]. Margem de Erro (%) = Z × SE × fpc × 100 (Z = 1,645 p/ 90%; 1,96 p/ 95%; 2,576 p/ 99%).',
    whenToUse: 'Use antes de disparar pesquisas de satisfação com clientes, questionários de TCC/mestrado ou pesquisas de opinião pública para dimensionar o tamanho ideal da amostra.',
    importantTips: 'Observe um comportamento importante da estatística: aumentar o tamanho da amostra de 400 para 1.600 entrevistados (4 vezes mais custo!) reduz a margem de erro pela metade (de ~4,9% para ~2,45%), pois o erro cai com a raiz quadrada de N.',
    sources: [
      { name: 'Conselho Federal de Estatística (CONFE)', url: 'https://confe.org.br/' }
    ],
    extraFaqs: [
      { q: 'Por que pesquisas nacionais com 2.000 entrevistados funcionam tão bem para 150 milhões de eleitores?', a: 'Porque a partir de grandes populações (acima de 100 mil pessoas), o tamanho total da população quase não altera a margem de erro — o que manda na precisão é a aleatoriedade da seleção e o tamanho absoluto da amostra.' },
      { q: 'O que acontece quando aumento o Nível de Confiança de 95% para 99% mantendo a mesma amostra?', a: 'Para ter 99% de certeza estatística de conter o valor real sem entrevistar mais gente, o intervalo precisa ficar mais largo — logo a margem de erro em pontos percentuais aumenta.' },
      { q: 'Quando devo deixar o campo População Total igual a zero?', a: 'Deixe como 0 (população infinita) sempre que a população-alvo for muito grande ou desconhecida, ou quando a amostra representar menos de 5% do universo total.' }
    ]
  },
  'analise-combinatoria': {
    domainConcept: 'Na teoria das probabilidades e no planejamento lógico de cenários, a Análise Combinatória permite contar exatamente de quantas maneiras distintas podemos escolher ou ordenar elementos de um conjunto sem precisar listar caso a caso manualmente. A distinção central está entre Arranjos (em que a ordem dos elementos escolhidos importa, como formar um pódio de 1º, 2º e 3º lugares ou criar senhas sem repetição) e Combinações (em que a ordem não importa, como formar uma comissão de 3 pessoas ou escolher dezenas de um volante).',
    formulaText: 'Dados N elementos totais e grupos de tamanho P (N ≥ P): Arranjos Simples A(n, p) = n! / (n - p)!; Combinações Simples C(n, p) = n! / [p! × (n - p)!].',
    whenToUse: 'Use em estudos de estatística e matemática do Ensino Médio, cálculos de probabilidade em jogos/sorteios, criação de códigos de identificação e design de experimentos combinados.',
    importantTips: 'Antes de escolher qual resultado ler na tela, faça o teste da troca: "Se eu inverter o primeiro elemento com o segundo, gera um resultado novo diferente ou continua sendo o mesmo grupo?" Se gerar algo diferente, use Arranjo; se for o mesmo grupo, use Combinação.',
    sources: [
      { name: 'Portal da Matemática OBMEP - Análise Combinatória', url: 'https://portaldamatematica.obmep.org.br/' }
    ],
    extraFaqs: [
      { q: 'Por que o número de Arranjos é sempre maior ou igual ao de Combinações?', a: 'Porque cada grupo único selecionado em uma Combinação pode ser reordenado internamente de p! maneiras diferentes para formar Arranjos distintos — logo A(n, p) = p! × C(n, p).' },
      { q: 'O que acontece se eu informar P maior que N?', a: 'Em agrupamentos simples sem repetição de elementos, é impossível escolher mais elementos do que existem no conjunto total, retornando zero.' },
      { q: 'Qual é o número de combinações possíveis ao escolher 6 números entre 60?', a: 'Aplicando C(60, 6) = 60! / (6! × 54!) obtêm-se exatas 50.063.860 combinações possíveis.' }
    ]
  },
  'probabilidade-evento': {
    domainConcept: 'A probabilidade clássica de Laplace mede numericamente a chance de um evento específico acontecer em um espaço amostral onde todos os resultados individuais são igualmente prováveis (como lançamentos de dados honestos, moedas, sorteios aleatórios ou inspeção de lotes de fabricação). Expressar essa razão tanto em formato percentual quanto na forma fracionada popular ("1 em X tentativas") facilita enormemente a interpretação intuitiva de riscos e chances reais.',
    formulaText: 'Probabilidade (%) = (Número de Casos Favoráveis / Casos Possíveis Totais) × 100. Razão de Chance = "1 em " + (Casos Possíveis / Casos Favoráveis).',
    whenToUse: 'Útil em problemas escolares de probabilidade básica, jogos de tabuleiro/RPG, análises de risco de defeitos em lotes fabris e compreensão intuitiva de odds e estatísticas.',
    importantTips: 'Lembre-se sempre de que a probabilidade de um evento ocorrer somada à probabilidade de ele NÃO ocorrer é sempre igual a 100% (eventos complementares).',
    sources: [
      { name: 'Khan Academy Brasil - Introdução à Probabilidade', url: 'https://pt.khanacademy.org/' }
    ],
    extraFaqs: [
      { q: 'Se a probabilidade de um evento é de 1 em 6 (16,67%), ele obrigatoriamente ocorre em 6 tentativas?', a: 'Não! Cada lançamento independente mantém a mesma chance individual (o dado não tem memória). A probabilidade de obter pelo menos um sucesso em 6 tentativas independentes é 1 - (5/6)^6 ≈ 66,5%.' },
      { q: 'Uma probabilidade pode dar mais que 100% ou negativa?', a: 'Nunca. Toda probabilidade matemática válida situa-se estritamente entre 0% (evento impossível) e 100% (evento certo).' },
      { q: 'Como combinar a probabilidade de dois eventos independentes acontecerem juntos?', a: 'Multiplique as probabilidades individuais em forma decimal (por exemplo, tirar dois "6" seguidos em dados: 1/6 × 1/6 = 1/36 ≈ 2,78%).' }
    ]
  },
  'churn-rate': {
    domainConcept: 'Em empresas de receita recorrente — como plataformas SaaS, clubes de assinatura, academias, escolas de idiomas, provedores de internet e planos mensais —, conquistar novos clientes não gera crescimento sustentável se a base atual estiver vazando pela porta dos fundos. O Churn Rate (Taxa de Cancelamento ou Rotatividade) mede exatamente qual percentual da base ativa de clientes cancelou o contrato dentro de um mês ou trimestre, sendo o indicador mais crítico para prever retenção e calcular o Lifetime Value (LTV).',
    formulaText: 'Churn Rate (%) = (Clientes Cancelados no Período / Clientes Ativos no Início do Período) × 100.',
    whenToUse: 'Use mensalmente em reuniões de Customer Success, fechamentos gerenciais de empresas SaaS e projeções financeiras de assinaturas para monitorar o "balde furado".',
    importantTips: 'Acompanhe sempre tanto o Logo Churn (percentual de clientes perdidos) quanto o Revenue Churn (percentual de MRR/faturamento perdido): se clientes pequenos cancelam mas contas grandes fazem upgrade (Expansion MRR), o Churn de receita pode até ficar negativo!',
    sources: [
      { name: 'Endeavor Brasil - Métricas Essenciais de SaaS e Recorrência', url: 'https://endeavor.org.br/' }
    ],
    extraFaqs: [
      { q: 'Um Churn mensal de 5% parece baixo, mas quanto isso representa em um ano?', a: 'Com Churn mensal composto de 5% sem reposição, após 12 meses resta apenas (0,95)^12 = 54% da base inicial — ou seja, quase metade dos clientes foi perdida ao longo de um único ano!' },
      { q: 'Novos clientes que entraram e cancelaram no mesmo mês devem entrar na conta?', a: 'Pela metodologia padrão mais limpa, usa-se na base apenas quem já estava ativo no início do período ou controla-se separadamente a coorte de cancelamento precoce (first-month churn).' },
      { q: 'Qual é uma taxa de Churn mensal saudável para empresas SaaS?', a: 'Para softwares B2B enterprise costuma ficar abaixo de 0,5% a 1% ao mês; para SMBs (pequenas empresas) entre 2% e 3,5%; e para B2C/assinaturas populares entre 4% e 7% ao mês.' }
    ]
  },
  'crescimento-mensal': {
    domainConcept: 'A taxa de crescimento MoM (Month-over-Month) ou período contra período compara o resultado financeiro ou operacional atual (faturamento, usuários ativos, tráfego orgânico, produção) com o desempenho imediatamente anterior. Mais informativa que olhar apenas a diferença absoluta em reais, a variação percentual padronizada permite identificar imediatamente acelerações ou desacelerações da curva de crescimento do negócio.',
    formulaText: 'Variação Nominal Absoluta = Valor Atual - Valor Período Anterior. Taxa de Crescimento (%) = [(Valor Atual - Valor Anterior) / Valor Anterior] × 100.',
    whenToUse: 'Use ao montar relatórios mensais de vendas, evolução de visitas no Google Analytics/Search Console, variação de carteira de investimentos ou metas trimestrais.',
    importantTips: 'Tenha cautela ao interpretar crescimentos MoM muito altos sobre bases iniciais minúsculas (subir de R$ 100 para R$ 500 equivale a +400%, mas não mantém a mesma taxa proporcional quando o negócio atinge milhões) e observe sazonalidades como Black Friday e Natal comparando também com o mesmo mês do ano anterior (YoY).',
    sources: [
      { name: 'Sebrae - Indicadores de Desempenho e Crescimento', url: 'https://sebrae.com.br/' }
    ],
    extraFaqs: [
      { q: 'Se minhas vendas caíram 20% em um mês, subir 20% no mês seguinte recupera o patamar original?', a: 'Não! Se caíram de R$ 10.000 para R$ 8.000 (-20%), subir 20% sobre R$ 8.000 leva a apenas R$ 9.600 — para recuperar exatamente o valor inicial após queda de 20%, é necessário crescer 25%.' },
      { q: 'Qual a diferença entre variação MoM e YoY?', a: 'MoM (Month-over-Month) compara um mês com o mês imediatamente anterior; YoY (Year-over-Year) compara o mês atual com o mesmo mês do ano passado para eliminar efeitos sazonais.' },
      { q: 'O que fazer se o valor anterior for negativo ou zero?', a: 'A variação percentual clássica perde significado matemático com base zero ou negativa; nesses casos, reporte diretamente a variação nominal absoluta.' }
    ]
  },
  'conversao-funil': {
    domainConcept: 'Em estratégias de vendas digitais, e-commerce e inbound marketing B2B, olhar apenas quantas visitas chegam ao site ou quantas vendas fecharam no mês não revela onde está o gargalo comercial. Ao medir passo a passo as passagens do funil — de Visitantes para Leads (contatos qualificados) e de Leads para Vendas Concluídas —, gestores descobrem com exatidão se precisam melhorar a página de captura/oferta (taxa visitante para lead) ou aprimorar o atendimento da equipe comercial e checkout (taxa lead para venda).',
    formulaText: 'Taxa de Visitante para Lead = (Leads / Visitantes) × 100. Taxa de Lead para Venda = (Vendas / Leads) × 100. Taxa de Conversão Global = (Vendas / Visitantes) × 100.',
    whenToUse: 'Essencial para gestores de tráfego pago, donos de lojas virtuais, lançadores digitais e times de vendas outbound/inbound diagnosticarem gargalos no funil comercial.',
    importantTips: 'Dobrar a taxa de conversão de qualquer etapa do funil (por exemplo, melhorando o formulário de captura ou o script de vendas) dobra o faturamento final exatamente como dobrar o investimento em anúncios — porém sem gastar um centavo a mais em mídia!',
    sources: [
      { name: 'Google Analytics - Análise de Funil e Taxas de Conversão', url: 'https://support.google.com/analytics/' }
    ],
    extraFaqs: [
      { q: 'Qual é uma taxa de conversão média comum em lojas virtuais no Brasil?', a: 'No e-commerce brasileiro geral, a taxa média de visitantes para pedidos concluídos gira em torno de 1% a 2,5%, variando conforme ticket médio, nicho e origem do tráfego.' },
      { q: 'Por que um aumento súbito de tráfego pode derrubar a taxa de conversão sem prejudicar as vendas?', a: 'Quando campanhas amplas atraem público menos qualificado ou topo de funil, o denominador (visitantes) sobe muito mais rápido que o numerador (vendas), diluindo o percentual mesmo com aumento do número absoluto de pedidos.' },
      { q: 'Qual é a taxa saudável de conversão de leads qualificados para vendas em B2B?', a: 'Dependendo do processo de qualificação prévia (SDR), times comerciais B2B costumam converter entre 10% e 25% das oportunidades qualificadas (SQLs) em contratos fechados.' }
    ]
  },
  'mediana-moda': {
    domainConcept: 'Ao resumir salários de uma empresa, preços de imóveis de um bairro ou idades de clientes, a média aritmética simples pode enganar completamente caso haja poucos valores extremos muito altos ou muito baixos (outliers). Por exemplo, se nove funcionários ganham R$ 2.500 e um diretor ganha R$ 50.000, a média sobe para R$ 7.250 mesmo que 90% da empresa ganhe menos de um terço disso! Analisar em conjunto Média, Mediana (o valor central exato após ordenar os dados) e Moda (o valor que mais se repete) revela a realidade completa da distribuição.',
    formulaText: 'Ordena-se a série em ordem crescente: a Mediana é o termo central (se N ímpar) ou a média dos dois termos centrais (se N par); a Média é Σx / N; a Moda identifica os valores de maior frequência absoluta (quando ocorrem mais de 1 vez).',
    whenToUse: 'Use em pesquisas socioeconômicas, análises de notas escolares, estudos de preços imobiliários e relatórios de RH onde salários extremos podem distorcer a média.',
    importantTips: 'Se todos os valores aparecerem apenas uma vez no conjunto de dados, o conjunto é classificado estatisticamente como "Amodal" (não possui moda).',
    sources: [
      { name: 'Khan Academy Brasil - Medidas de Tendência Central', url: 'https://pt.khanacademy.org/' }
    ],
    extraFaqs: [
      { q: 'Um conjunto de números pode ter mais de uma moda?', a: 'Sim! Quando dois valores empatam na maior frequência de repetições, a distribuição é chamada bimodal; com três ou mais, multimodal.' },
      { q: 'Por que órgãos como o IBGE usam frequentemente a mediana de rendimentos?', a: 'Porque em países com desigualdade de renda, poucos rendimentos milionários puxam a média nacional para cima, enquanto a mediana mostra exatamente quanto ganha o cidadão situado bem no meio da população.' },
      { q: 'O que indica quando a Média é muito maior que a Mediana?', a: 'Indica uma distribuição assimétrica positiva (cauda longa à direita), sinalizando a presença de valores extremos altos puxando a média para cima.' }
    ]
  },
  'intervalo-confianca': {
    domainConcept: 'Na estatística inferencial, quase nunca medimos todos os indivíduos de uma população inteira — medimos uma amostra de tamanho N obtendo uma média amostral e um desvio padrão amostral. O Intervalo de Confiança constrói uma faixa numérica realista (com Limite Inferior e Limite Superior) dentro da qual podemos afirmar, com determinado grau de certeza estatística (90%, 95% ou 99%), que se encontra a verdadeira média desconhecida de toda a população.',
    formulaText: 'Margem de Erro = Z × (Desvio Padrão / √N), adotando Z = 1,645 (90%), 1,96 (95%) ou 2,576 (99%). Limite Inferior = Média Amostral - Margem; Limite Superior = Média Amostral + Margem.',
    whenToUse: 'Use ao analisar resultados de pesquisas quantitativas acadêmicas, testes de qualidade industrial, tempo médio de atendimento ou experimentos A/B de métricas contínuas.',
    importantTips: 'Na comparação entre duas variantes (ex: Página A vs Página B), se os intervalos de confiança de 95% das duas médias não se sobrepõem, há forte evidência estatística de diferença real entre os grupos.',
    sources: [
      { name: 'Associação Brasileira de Estatística (ABE)', url: 'https://redeabe.org.br/' }
    ],
    extraFaqs: [
      { q: 'Como posso estreitar (deixar mais preciso) o meu intervalo de confiança?', a: 'Aumentando o tamanho N da amostra coletada (o erro diminui proporcionalmente a √N) ou reduzindo a variabilidade na medição.' },
      { q: 'O intervalo de confiança funciona para pequenas amostras com N menor que 30?', a: 'Para amostras menores que 30 observações em populações normais com variância desconhecida, recomenda-se rigorosamente utilizar os valores críticos da distribuição t-Student em vez da curva normal Z.' },
      { q: 'O nível de 95% de confiança significa que 95% dos dados individuais estão dentro dessa faixa?', a: 'Não! Essa é uma confusão comum: o intervalo de confiança cerca a média real da população (parâmetro), e não a dispersão dos indivíduos isolados.' }
    ]
  },
  'conversao-cac': {
    domainConcept: 'Nenhuma empresa digital, loja recorrente ou assinatura cresce de forma saudável sem dominar a relação entre CAC (Custo de Aquisição de Cliente) e LTV (Lifetime Value — valor total que o cliente gera antes de cancelar). Gastar R$ 300 em anúncios e vendedores para conquistar um cliente que paga R$ 150 por mês e cancela após 2 meses significa queimar dinheiro a cada venda. Esta calculadora calcula o CAC unitário, projeta o LTV pela taxa de churn e exibe a razão de eficiência LTV/CAC.',
    formulaText: 'CAC = Despesa em Vendas & Marketing / Novos Clientes Adquiridos. LTV = Ticket Médio Mensal (ARPU) / (Churn Rate% / 100). Relação de Eficiência = LTV / CAC.',
    whenToUse: 'Vital para fundadores de startups, diretores comerciais e gestores de tráfego avaliarem se podem acelerar o orçamento de aquisição paga sem quebrar o caixa.',
    importantTips: 'Ao calcular seu LTV real, lembre-se de multiplicar também pela Margem Bruta do produto ou serviço caso haja custos relevantes de entrega (CMV, suporte ou servidor) — avaliando não apenas receita bruta, mas margem de contribuição gerada pelo cliente.',
    sources: [
      { name: 'Endeavor / SaaS Metrics - Guia CAC e LTV', url: 'https://endeavor.org.br/' }
    ],
    extraFaqs: [
      { q: 'Qual é o valor ideal da razão LTV / CAC para um negócio escalável?', a: 'O benchmark consolidado aponta que LTV/CAC abaixo de 1:1 gera prejuízo; entre 1:1 e 2:1 indica operação apertada; a partir de 3:1 revela modelo saudável; e acima de 5:1 sugere até oportunidade de investir mais agressivamente em crescimento.' },
      { q: 'Por que dividir o ticket médio pelo Churn Rate gera o LTV?', a: 'Matematicamente, 1 / Churn Rate representa o tempo médio esperado de vida (em meses) de um cliente na base (ex: Churn de 5% ao mês equivale a vida média de 1 / 0,05 = 20 meses).' },
      { q: 'O que é o Payback de CAC?', a: 'É o número de meses necessários para que o cliente novo pague de volta o valor gasto para adquiri-lo (CAC / Ticket Médio mensal), idealmente abaixo de 6 a 12 meses.' }
    ]
  },

  // ================= TECNOLOGIA & COMPUTAÇÃO (7) =================
  'calculadora-ganhos-adsense': {
    title: 'Calculadora de Ganhos Google AdSense 2026 (RPM, CPC e Nichos) | Brasil Calculadoras',
    description: 'Simule estimativas mensais e anuais de receita com Google AdSense em 2026 conforme nicho do site, país de origem dos visitantes e volume de tráfego.',
    domainConcept: 'Monetizar blogs, portais de notícias, ferramentas utilitárias e sites de conteúdo pelo Google AdSense depende diretamente de três alavancas econômicas do leilão programático: o volume de visualizações de página (pageviews mensais), o nicho editorial do site (nichos financeiros, jurídicos e de tecnologia B2B atraem anunciantes com lances de CPC muito maiores que entretenimento geral) e a geografia do tráfego (visitas dos EUA, Canadá e Europa possuem poder aquisitivo e leilões em dólar bem superiores ao tráfego local). Esta calculadora simula receita mensal, faturamento anual projetado, RPM de página, CTR e CPC médio.',
    formulaText: 'Calcula-se o total de impressões de anúncios a partir de Visitantes × Páginas/Sessão × Blocos por Página, aplicando o CTR e o CPC médios calibrados para o nicho e região escolhidos para apurar Ganhos Mensais, Ganhos Anuais (×12) e RPM = (Ganhos / Pageviews) × 1.000.',
    workedExample: 'Um portal brasileiro de Educação e Ferramentas recebendo 150.000 pageviews mensais com boa visibilidade (viewability), CTR efetivo de ~1,5% sobre impressões e CPC médio de R$ 0,55 em nicho qualificado pode gerar cerca de 2.250 a 3.500 cliques equivalentes em leilão híbrido CPC/CPM, resultando em receita mensal estimada entre R$ 1.800,00 e R$ 3.200,00 (RPM aproximado de R$ 12,00 a R$ 21,00 dependendo da sazonalidade comercial).',
    whenToUse: 'Use para projetar o potencial de receita de novos projetos digitais, avaliar o retorno financeiro de investir em produção editorial SEO ou comparar diferentes nichos de monetização.',
    importantTips: 'Desde a transição definitiva do Google AdSense para leilões baseados majoritariamente em CPM visível (Active View), melhorar o tempo de permanência na página, a velocidade de carregamento (Core Web Vitals) e o posicionamento visível dos blocos eleva substancialmente o RPM real sem precisar poluir o layout.',
    sources: [
      { name: 'Central de Ajuda do Google AdSense - Métricas RPM, CPC e CPM', url: 'https://support.google.com/adsense/' }
    ],
    extraFaqs: [
      { q: 'Qual a diferença entre RPM de página e CPC no painel do AdSense?', a: 'CPC (Custo por Clique) é o valor médio pago quando há um clique, enquanto RPM (Receita por Mil Impressões) mostra quanto você efetivamente ganha a cada 1.000 visualizações de página considerando cliques e impressões CPM juntos.' },
      { q: 'Por que novembro e dezembro costumam pagar um RPM muito mais alto?', a: 'Por conta de Black Friday, Natal e fechamento de verbas anuais de marketing das grandes empresas, aumentando a competição no leilão de anúncios.' },
      { q: 'Quais requisitos de conteúdo são essenciais para ter um site aprovado no AdSense?', a: 'Conteúdo original, útil e aprofundado (evitando páginas rasas ou duplicadas), navegação clara, páginas obrigatórias de Privacidade/Termos/Sobre/Contato, domínio próprio e conformidade rigorosa com as políticas de editor.' }
    ]
  },
  'tempo-download': {
    domainConcept: 'Quando precisamos baixar imagens ISO de sistemas operacionais, backups em nuvem, jogos de dezenas de gigabytes ou arquivos de vídeo para edição, estimar o tempo exato de transferência evita interrupções no trabalho. Um equívoco clássico acontece porque provedores de internet vendem velocidade em Megabits por segundo (Mbps — letra "b" minúscula), enquanto arquivos no computador são medidos em Megabytes (MB) ou Gigabytes (GB — letra "B" maiúscula), sendo cada Byte composto por 8 bits.',
    formulaText: 'Converte-se o arquivo para bits (1 MB = 1.024 × 1.024 × 8 bits; 1 GB = 1.024³ × 8 bits) e a velocidade de conexão para bits por segundo (1 Mbps = 1.000.000 bps; 1 Kbps = 1.000 bps). Tempo (segundos) = Tamanho em bits / Velocidade em bps, formatado em horas, minutos e segundos.',
    whenToUse: 'Use antes de agendar downloads pesados em servidores, transferências de projetos audiovisuais para clientes ou uploads/backups em redes corporativas.',
    importantTips: 'Na prática real de internet, adicione cerca de 10% a 15% ao tempo teórico calculado devido a cabeçalhos de protocolo TCP/IP, latência do servidor remoto, distância geográfica e uso simultâneo do Wi-Fi por outros dispositivos.',
    sources: [
      { name: 'IETF / IEEE - Unidades de Transmissão de Rede vs Armazenamento', url: 'https://www.ieee.org/' }
    ],
    extraFaqs: [
      { q: 'Se minha internet é de 500 Mega (Mbps), qual a velocidade máxima de download em MB/s no navegador?', a: 'Divida 500 por 8 = 62,5 MB/s teóricos máximos (descontando overhead de rede e limitações de disco/Wi-Fi, costuma estabilizar entre 50 e 58 MB/s).' },
      { q: 'Por que o Wi-Fi entrega menos velocidade de download que o cabo de rede?', a: 'O Wi-Fi sofre interferências eletromagnéticas, atenuação por paredes e compartilhamento de canal; conexões via cabo Ethernet Cat5e/Cat6 garantem largura de banda próxima do máximo contratado.' },
      { q: 'A velocidade de upload costuma ser igual à de download?', a: 'Apenas em planos simétricos de fibra óptica; em muitos planos residenciais, a taxa de upload é de 20% a 50% da taxa de download contratada.' }
    ]
  },
  'aspect-ratio': {
    domainConcept: 'Redimensionar fotografias, banners publicitários, thumbnails ou players de vídeo sem manter a mesma razão geométrica entre largura e altura resulta em imagens esticadas, achatadas ou com barras pretas indesejadas nas laterais. A calculadora de Aspect Ratio encontra automaticamente a proporção simplificada irredutível (como 16:9 widescreen, 4:3 clássico, 1:1 quadrado ou 9:16 vertical para Reels/Shorts) a partir de qualquer resolução original e calcula a nova altura exata para a largura desejada.',
    formulaText: 'Determina-se o Máximo Divisor Comum g = MDC(Largura Original, Altura Original) pelo Algoritmo de Euclides: Proporção = (Largura/g) : (Altura/g). Nova Altura = round((Nova Largura × Altura Original) / Largura Original).',
    whenToUse: 'Use no design de layouts web responsivos (evitando CLS nos Core Web Vitals), configuração de resoluções de streaming/OBS, corte de artes para redes sociais e edição de vídeo.',
    importantTips: 'Nos padrões de performance web (Core Web Vitals), declarar explicitamente `width` e `height` proporcionais nos elementos HTML de imagem (`img`) e usar a propriedade CSS `aspect-ratio` elimina saltos visuais de carregamento (Cumulative Layout Shift).',
    sources: [
      { name: 'MDN Web Docs - CSS aspect-ratio e Imagens Responsivas', url: 'https://developer.mozilla.org/' }
    ],
    extraFaqs: [
      { q: 'Quais são as resoluções mais usadas no padrão 16:9?', a: '1280×720 (HD), 1920×1080 (Full HD), 2560×1440 (2K QHD) e 3840×2160 (4K UHD) — todas respeitam exatamente a fração 16:9.' },
      { q: 'Qual proporção usar para vídeos verticais no Instagram Reels, TikTok e YouTube Shorts?', a: 'A proporção vertical padrão é exatamente o inverso do widescreen: 9:16 (geralmente 1080×1920 pixels).' },
      { q: 'Para feeds do Instagram e anúncios verticais qual razão aproveita mais tela?', a: 'A proporção 4:5 (1080×1350 pixels) ocupa mais espaço vertical no feed móvel mantendo compatibilidade sem cortes.' }
    ]
  },
  'conversor-bases': {
    domainConcept: 'Enquanto seres humanos trabalham cotidianamente no sistema numérico decimal (base 10, usando dígitos de 0 a 9), microprocessadores, memórias digitais e protocolos de rede operam internamente em lógica binária (base 2, apenas 0 e 1). Para simplificar a leitura de longas sequências binárias em programação, engenharia da computação, permissões Linux e códigos de cores CSS, desenvolvedores utilizam as bases Octal (base 8) e Hexadecimal (base 16, que usa 0–9 e A–F). Este conversor traduz qualquer inteiro decimal instantaneamente para a base escolhida.',
    formulaText: 'Aplica divisões sucessivas da parte inteira pela base de destino (2 para Binário, 8 para Octal ou 16 para Hexadecimal), ordenando os restos do último quociente até o primeiro resto.',
    whenToUse: 'Prático para estudantes de Ciência da Computação, Engenharia Eletrônica, técnicos configurando máscaras de sub-rede IP, endereços MAC, permissões Unix (chmod) e cores hexadecimais.',
    importantTips: 'Lembre-se da equivalência direta entre bases de potência de 2: cada dígito Hexadecimal equivale exatamente a 4 bits binários (ex: F = 1111, A = 1010), e cada dígito Octal equivale a 3 bits binários.',
    sources: [
      { name: 'IEEE - Padrões de Representação Numérica Computacional', url: 'https://www.ieee.org/' }
    ],
    extraFaqs: [
      { q: 'Por que cores na web como #FFFFFF ou #0F172A usam sistema hexadecimal?', a: 'Porque cada canal de cor RGB varia de 0 a 255 (8 bits = 1 byte), que em hexadecimal é representado exatamente por apenas dois dígitos (00 até FF), formando códigos compactos de 6 caracteres.' },
      { q: 'Onde a base Octal ainda é muito utilizada na prática?', a: 'Especialmente em permissões de arquivos no Linux/Unix (como `chmod 755`, onde 7 em octal = 111 em binário para leitura/escrita/execução) e sistemas legados.' },
      { q: 'Como saber rapidamente em binário se um número decimal é par ou ímpar?', a: 'Todo número par termina obrigatoriamente em 0 no sistema binário, enquanto todo número ímpar termina em 1.' }
    ]
  },
  'calculadora-de-cpm': {
    title: 'Calculadora de CPM (Custo por Mil Impressões) Online | Brasil Calculadoras',
    description: 'Calcule o CPM e o custo por exibição única de campanhas em Meta Ads, Google Display, YouTube, TikTok Ads e portais programáticos.',
    domainConcept: 'O CPM (Custo por Mil Impressões) é a métrica padrão da indústria publicitária para medir quanto custa exibir um anúncio exatamente 1.000 vezes na tela dos usuários — independentemente de cliques. É o indicador principal em campanhas de reconhecimento de marca (branding), alcance no Meta Ads, YouTube Ads e mídia programática direta em portais, permitindo comparar o preço de diferentes audiências e períodos sazonais em uma mesma régua padronizada.',
    formulaText: 'CPM (R$) = (Custo Total da Campanha / Número Total de Impressões) × 1.000. Custo por Exibição Única = Custo Total / Impressões.',
    whenToUse: 'Use para auditar campanhas de alcance/branding, negociar compra direta de mídia em sites por mil impressões ou projetar quantas exibições seu orçamento mensal conseguirá comprar.',
    importantTips: 'Um CPM baixo em excesso (muito abaixo da média do nicho) pode indicar posicionamentos de baixa qualidade ou público pouco qualificado; compare sempre o CPM junto ao CTR e ao Custo por Resultado final (CPA/CPL).',
    sources: [
      { name: 'IAB Brasil - Métricas Padrão de Publicidade Digital', url: 'https://iabbrasil.com.br/' }
    ],
    extraFaqs: [
      { q: 'Qual é a diferença entre CPM de compra (anunciante) e RPM de editor (AdSense)?', a: 'O CPM mede quanto o anunciante paga por 1.000 impressões de um bloco de anúncio; já o RPM (Revenue per Mille) mede quanto o dono do site recebe a cada 1.000 visualizações de página.' },
      { q: 'Impressões contam pessoas únicas ou total de exibições?', a: 'Impressões contam o total de vezes que o anúncio foi exibido (a mesma pessoa vendo o anúncio 3 vezes gera 3 impressões; o número de pessoas únicas é chamado de Alcance).' },
      { q: 'Por que o CPM sobe tanto em nichos B2B e financeiros?', a: 'Porque o valor potencial de cada cliente conquistado é alto, atraindo mais anunciantes competindo no mesmo leilão pelas mesmas audiências.' }
    ]
  },
  'calculadora-de-ctr': {
    title: 'Calculadora de CTR (Taxa de Cliques / Click-Through Rate) | Brasil Calculadoras',
    description: 'Calcule o CTR percentual de anúncios patrocinados, resultados orgânicos no Google (SEO), banners e e-mail marketing e avalie seu desempenho.',
    domainConcept: 'A Taxa de Cliques, conhecida mundialmente como CTR (Click-Through Rate), mede exatamente a proporção de usuários que clicaram em um link, anúncio, thumbnail do YouTube ou resultado de pesquisa após visualizá-lo. Um CTR elevado sinaliza forte alinhamento entre a promessa do título/criativo e o interesse da audiência — melhorando o Índice de Qualidade no Google Ads (o que reduz o custo por clique!) e impulsionando o desempenho orgânico no Google Search Console.',
    formulaText: 'CTR (%) = (Cliques Recebidos / Impressões Totais) × 100. Classificação referencial exibida: Baixo (abaixo de 1%), Razoável (1%–2%), Bom/Médio (2%–5%) e Excelente (acima ou igual a 5%).',
    whenToUse: 'Use ao testar títulos de artigos no Search Console, comparar dois criativos de anúncios em teste A/B ou analisar taxas de cliques em newsletters de e-mail marketing.',
    importantTips: 'Nunca analise o CTR isoladamente: um anúncio "sensacionalista" pode gerar CTR alto de cliques curiosos que não compram nada na página de destino; avalie sempre CTR + Taxa de Conversão da landing page.',
    sources: [
      { name: 'Google Ads Ajuda - Taxa de Cliques (CTR) e Índice de Qualidade', url: 'https://support.google.com/google-ads/' }
    ],
    extraFaqs: [
      { q: 'Qual é um bom CTR médio na Rede de Pesquisa do Google vs Rede de Display?', a: 'Na Rede de Pesquisa (onde o usuário já buscou ativamente pelo termo), CTRs acima de 4% a 8% são comuns; já em banners de Display ou feed social, CTRs entre 0,8% e 2,0% costumam ser bons resultados.' },
      { q: 'Como aumentar rapidamente o CTR orgânico de páginas no Google?', a: 'Otimize o título SEO (tag title) com benefício claro, ano atualizado e número específico, além de escrever uma meta description persuasiva alinhada à intenção de busca.' },
      { q: 'O CTR pode passar de 100%?', a: 'Em casos normais não, exceto se ferramentas contabilizarem múltiplos cliques repetidos do mesmo usuário dentro de uma única impressão registrada.' }
    ]
  },
  'calculadora-de-cpc': {
    title: 'Calculadora de CPC (Custo por Clique Médio) | Brasil Calculadoras',
    description: 'Apure o Custo por Clique (CPC) real de suas campanhas no Google Ads, Meta Ads ou anúncios patrocinados e descubra quantos cliques cada R$ 1,00 compra.',
    domainConcept: 'No tráfego pago de performance (Google Ads, Meta Ads, LinkedIn Ads), o CPC (Custo por Clique) traduz o investimento total gasto em uma campanha pelo número exato de visitas efetivamente levadas até o site, loja virtual ou WhatsApp. Conhecer o CPC real permite calcular imediatamente quantos cliques cabem em determinado orçamento diário e cruzar esse dado com a taxa de conversão do funil para estimar o custo máximo tolerável por venda.',
    formulaText: 'CPC Médio (R$) = Custo Total da Campanha / Total de Cliques Gerados. Cliques por R$ 1,00 = 1 / CPC Médio (= Total de Cliques / Custo Total).',
    whenToUse: 'Use após rodar campanhas de tráfego pago para comparar conjuntos de anúncios, projetar orçamento de mídia necessário para atingir metas mensais de leads e monitorar inflação de leilão.',
    importantTips: 'No leilão do Google Ads, melhorar a relevância do anúncio para a palavra-chave e a velocidade/qualidade da página de destino eleva seu Índice de Qualidade — permitindo pagar um CPC menor do que concorrentes que dão lances maiores!',
    sources: [
      { name: 'Google Ads Ajuda - Entendendo o CPC Real', url: 'https://support.google.com/google-ads/' }
    ],
    extraFaqs: [
      { q: 'Qual é a relação matemática entre CPM, CTR e CPC?', a: 'Matematicamente, CPC = CPM / (10 × CTR%). Portanto, ao dobrar o seu CTR mantendo o mesmo CPM de exibição, o seu Custo por Clique cai automaticamente pela metade!' },
      { q: 'Qual é a diferença entre CPC Máximo e CPC Médio?', a: 'CPC Máximo é o teto de lance que você autoriza a plataforma pagar por um clique; CPC Médio é o valor efetivamente cobrado na média real das interações (quase sempre menor que o teto).' },
      { q: 'Um CPC mais barato sempre traz mais lucro?', a: 'Não necessariamente: palavras-chave de fundo de funil (ex: "comprar seguro auto") têm CPC muito mais caro do que palavras informativas, mas convertem em vendas a uma taxa infinitamente superior.' }
    ]
  },

  // ================= UTILITÁRIOS & CASA (10) =================
  'conversor-moedas': {
    domainConcept: 'Converter rapidamente valores entre Real (BRL), Dólar Americano (USD), Euro (EUR) e Libra Esterlina (GBP) facilita estimar preços de compras internacionais, passagens aéreas, assinaturas de software em dólar e orçamentos de viagem ao exterior. Por adotar o Real como moeda-pivô interna, a ferramenta converte qualquer par selecionado entre as quatro divisas principais instantaneamente.',
    formulaText: 'Converte-se primeiro a moeda de origem para a base referencial em Reais (BRL = 1,0; USD = 5,25; EUR = 5,70; GBP = 6,60) e em seguida divide-se pela taxa da moeda de destino: Resultado = (Valor × Taxa Origem) / Taxa Destino.',
    whenToUse: 'Use para simular rapidamente orçamentos preliminares de compras online no exterior, freelances pagos em dólar ou planejamento inicial de viagens internacionais.',
    importantTips: 'Ao fechar compras reais com cartão de crédito internacional ou casas de câmbio no Brasil, some ao câmbio comercial de referência o spread bancário (entre 1% e 5%) e a alíquota vigente de IOF conforme o meio de pagamento.',
    sources: [
      { name: 'Banco Central do Brasil - Conversor e Taxas de Câmbio PTAX', url: 'https://www.bcb.gov.br/conversao' }
    ],
    extraFaqs: [
      { q: 'Qual a diferença entre Dólar Comercial (PTAX) e Dólar Turismo?', a: 'O Dólar Comercial (PTAX) é a taxa de referência interbancária para importações, exportações e mercado financeiro; o Dólar Turismo inclui custos operacionais de transporte de papel-moeda e margem das corretoras de câmbio.' },
      { q: 'Comprar com conta global em dólar sai mais barato que cartão de crédito tradicional?', a: 'Geralmente sim, pois contas globais costumam operar com IOF reduzido na remessa de câmbio e spread menor (~1% a 2%) frente ao spread mais elevado (4%+) de cartões convencionais.' },
      { q: 'Por que a cotação varia tanto durante o mesmo dia?', a: 'No regime de câmbio flutuante brasileiro, o valor das moedas oscila minuto a minuto conforme fluxo de entrada/saída de capitais, taxa de juros dos EUA (Fed) vs Selic e balança comercial.' }
    ]
  },
  'conta-bar': {
    domainConcept: 'Ao final de um happy hour, aniversário no bar ou jantar entre amigos em mesa compartilhada, calcular rapidamente o total já somando a taxa opcional de serviço (10% do garçom) e dividir exatamente pelo número de participantes evita erros de cabeça ou constrangimentos na hora de passar o Pix. A ferramenta discrimina separadamente o valor da taxa de serviço calculada, o subtotal completo e a cota individual exata.',
    formulaText: 'Valor da Taxa = Total do Consumo × (Taxa de Serviço% / 100). Subtotal com Taxas = Total + Taxa. Cota por Pessoa = Subtotal / Pessoas na Mesa.',
    whenToUse: 'Prático para conferir na hora a conta impressa do estabelecimento e compartilhar exatamente o valor por participante no grupo de mensagens da mesa.',
    importantTips: 'Confira sempre na comanda impressa se o estabelecimento já não incluiu automaticamente os 10% no total final — evitando pagar gorjeta dupla por engano ao aplicar outros 10% por cima!',
    sources: [
      { name: 'Procon / CDC - Transparência na Nota de Consumo e Taxa de Serviço', url: 'https://www.gov.br/mj/pt-br/assuntos/seus-direitos/consumidor' }
    ],
    extraFaqs: [
      { q: 'O estabelecimento pode cobrar multa alta se alguém perder a comanda individual?', a: 'Não! A jurisprudência e o Procon consideram abusiva e ilegal a cobrança de multa punitiva arbitrária por perda de comanda; o bar deve manter controle interno do consumo efetivamente realizado.' },
      { q: 'A taxa de 10% do garçom é obrigatória por lei?', a: 'Não. O pagamento dos 10% é facultativo para o consumidor, que pode optar por não pagar ou pagar percentual diferente conforme a satisfação com o atendimento.' },
      { q: 'E se uma pessoa da mesa não consumiu bebida alcoólica?', a: 'Quando houver grande diferença de consumo, recomenda-se somar os pratos compartilhados divididos por todos e lançar bebidas caras individualmente antes de aplicar os 10% proporcionais.' }
    ]
  },
  'energia-eletrica': {
    domainConcept: 'Trocar um aparelho de ar-condicionado antigo, geladeira convencional ou motor de piscina por um modelo moderno com tecnologia Inverter ou selo Procel A costuma envolver um investimento inicial maior — mas quanto isso realmente economiza em reais por mês na conta de luz? Esta calculadora compara diretamente dois equipamentos lado a lado (Aparelho A vs Aparelho B) pela potência em Watts, horas diárias ligadas e tarifa local em R$/kWh, mostrando o custo mensal individual e a economia líquida gerada.',
    formulaText: 'Custo Mensal = [(Potência em Watts × Horas Diárias × 30 dias) / 1.000] × Tarifa (R$/kWh). Economia Mensal = |Custo A - Custo B|.',
    whenToUse: 'Use antes de comprar eletrodomésticos novos Inverter ou lâmpadas LED para calcular em quantos meses a economia na conta de luz paga a diferença de preço da loja.',
    importantTips: 'Equipamentos com selo INMETRO / Procel A em aparelhos de refrigeração e climatização chegam a consumir entre 30% e 50% menos energia elétrica para entregar a mesma capacidade térmica.',
    sources: [
      { name: 'PROCEL / Eletrobras - Eficiência Energética Residencial', url: 'https://www.gov.br/mme/pt-br' }
    ],
    extraFaqs: [
      { q: 'Aparelhos em modo standby (luzinha vermelha acesa) gastam muita energia?', a: 'Individualmente consomem pouco (1W a 5W), porém somando TV, micro-ondas, decodificador de TV, console e carregadores ligados 24h por dia podem representar 5% a 10% da fatura em residências de baixo consumo.' },
      { q: 'Por que equipamentos Inverter consomem menos que modelos convencionais?', a: 'Porque o compressor Inverter ajusta sua velocidade continuamente sem picos repetidos de desligar e religar na potência máxima, reduzindo drasticamente o consumo médio de Watts por hora.' },
      { q: 'Onde checo a potência correta em Watts de um aparelho?', a: 'Na etiqueta técnica traseira do equipamento ou na Etiqueta Nacional de Conservação de Energia (ENCE) colada na frente do produto nas lojas.' }
    ]
  },
  'ar-condicionado': {
    domainConcept: 'Comprar um ar-condicionado com menos BTUs do que o ambiente exige faz o compressor trabalhar ininterruptamente no máximo sem nunca atingir a temperatura confortável — disparando o gasto de energia elétrica e reduzindo a vida útil do aparelho. Por outro lado, superdimensionar demais gera liga-desliga constante em modelos convencionais e custo de compra desnecessário. Nossa calculadora aplica a regra técnica residencial por área do cômodo, número de ocupantes frequentes e quantidade de equipamentos emissores de calor.',
    formulaText: 'BTUs Necessários = (Área em m² × 600) + [max(0, Pessoas - 1) × 600] + (Aparelhos Eletrônicos × 600).',
    whenToUse: 'Use antes de comprar ou instalar splits, aparelhos de janela ou portáteis em quartos, salas de estar e escritórios comerciais.',
    importantTips: 'Se o cômodo receber incidência direta forte de sol da tarde ou estiver localizado logo abaixo de telhado sem laje/isolamento térmico, considere acrescentar mais 150 a 200 BTUs por m² (totalizando ~800 BTUs/m²) e arredonde sempre para o modelo comercial imediatamente acima (9.000, 12.000, 18.000 ou 24.000 BTUs).',
    sources: [
      { name: 'ABNT NBR 16401 - Instalações de Ar-Condicionado', url: 'https://www.abnt.org.br/' }
    ],
    extraFaqs: [
      { q: 'Se o cálculo resultar em 10.200 BTUs, devo comprar o aparelho de 9.000 ou 12.000 BTUs?', a: 'Sempre escolha o patamar comercial superior (12.000 BTUs), especialmente se for um modelo Inverter — ele trabalhará com folga e em rotação baixa muito mais econômica.' },
      { q: 'Por que computadores, TVs e pessoas aumentam os BTUs necessários?', a: 'Porque cada pessoa parada irradia cerca de 100W a 120W de calor corporal (e computadores/TVs dissipam calor elétrico contínuo), exigindo maior carga térmica do aparelho para neutralizar esse aquecimento interno.' },
      { q: 'Qual é a temperatura ideal recomendada para equilibrar conforto e economia na conta de luz?', a: 'A ANVISA e concessionárias de energia recomendam manter o termostato entre 23 °C e 25 °C; cada grau reduzido abaixo de 23 °C eleva o consumo elétrico em cerca de 6% a 8%.' }
    ]
  },
  'quantidade-tinta': {
    domainConcept: 'Calcular o volume exato de tinta antes de pintar um quarto, sala ou fachada comercial evita tanto o prejuízo de sobras caras guardadas na garagem quanto o risco de faltar tinta na última parede e não encontrar o mesmo lote de mistura na loja. Esta calculadora computa a área bruta das quatro paredes do cômodo retangular pela largura e pé-direito, subtrai automaticamente as áreas médias de janelas (2,0 m²) e portas (1,6 m²) e calcula os litros necessários para cobertura padrão em 2 demãos.',
    formulaText: 'Área Bruta = Largura × 4 × Altura. Subtrações = (Janelas × 2,0 m²) + (Portas × 1,6 m²). Área Líquida = max(0,1; Área Bruta - Subtrações). Litros Necessários (2 demãos) = (Área Líquida × 2) / Rendimento por Litro.',
    whenToUse: 'Use no orçamento rápido de pintura residencial de cômodos inteiros com 4 paredes para escolher entre galões de 3,6 litros e latas de 18 litros.',
    importantTips: 'Cores muito escuras aplicadas sobre paredes claras — ou o inverso, tinta branca cobrindo parede vermelha/escura — frequentemente exigem 3 demãos ou uso prévio de fundo preparador/selador, elevando em até 30% a 50% o volume de tinta.',
    sources: [
      { name: 'ABRAFATI - Associação Brasileira dos Fabricantes de Tintas', url: 'https://abrafati.com.br/' }
    ],
    extraFaqs: [
      { q: 'Como calcular quando quero pintar apenas uma parede de destaque em vez das quatro?', a: 'Divida a largura da parede única por 4 antes de inserir ou utilize nossa calculadora de Tinta Predial inserindo diretamente a área exata da parede desejada.' },
      { q: 'Preciso diluir a tinta com água conforme indicado na lata?', a: 'Sim! Seguir exatamente o percentual de diluição em água potável recomendado no rótulo do fabricante (geralmente 10% a 20%) evita marcas de rolo e garante o rendimento anunciado em m²/L.' },
      { q: 'Quanto rende geralmente um galão de 3,6 litros em duas demãos?', a: 'Considerando rendimento médio de 10 m²/L por demão, um galão de 3,6 L pinta cerca de 18 m² acabados em duas demãos completas.' }
    ]
  },
  'agua-chuveiro': {
    domainConcept: 'Em residências brasileiras com chuveiro elétrico tradicional (frequentemente entre 5.500W e 7.500W), esse único aparelho pode responder por 25% a 35% de toda a fatura mensal de energia elétrica — além do consumo paralelo de água tratada e esgoto. Ao cruzar o tempo de banho em minutos, a potência elétrica, a vazão do chuveiro em litros/minuto e as tarifas locais de energia e água/esgoto, o usuário enxerga o custo real em reais de cada banho individual.',
    formulaText: 'Consumo de Água (L) = Minutos × Vazão (L/min). Custo Água = (Litros / 1.000) × Tarifa Água/m³. Consumo Elétrico (kWh) = [Potência (W) × (Minutos / 60)] / 1.000. Custo Energia = kWh × Tarifa kWh. Custo Total = Custo Energia + Custo Água.',
    whenToUse: 'Ótimo recurso educativo familiar para conscientizar moradores sobre quanto custa no fim do mês reduzir um banho diário de 15 minutos para 8 minutos.',
    importantTips: 'Nas estações mais quentes ou em regiões de clima tropical, mudar a chave do chuveiro da posição "Inverno/Quente" (potência máxima) para "Verão/Morno" reduz imediatamente o consumo elétrico em cerca de 30% a 40%.',
    sources: [
      { name: 'ANEEL / Sabesp - Uso Racional de Energia e Água', url: 'https://www.gov.br/aneel/pt-br' }
    ],
    extraFaqs: [
      { q: 'Quanto uma família de 4 pessoas economiza por mês reduzindo o banho de 15 para 8 minutos?', a: 'Em um chuveiro de 5.500W a tarifa de R$ 0,95/kWh, cortar 7 minutos diários por pessoa poupa cerca de 77 kWh e mais de 8.400 litros de água por mês, gerando economia superior a R$ 120 a R$ 150 mensais!' },
      { q: 'Chuveiro com aquecimento solar ou a gás gasta eletricidade?', a: 'Não no aquecimento direto da água (exceto eventual pressurizador elétrico ou acendimento), mantendo o consumo elétrico muito baixo, porém continua exigindo atenção à vazão de água.' },
      { q: 'Como medir a vazão real do meu chuveiro em litros por minuto?', a: 'Cronometre quantos segundos o chuveiro aberto leva para encher um balde graduado de 10 litros (se encher em 60 segundos exatos, a vazão é de 10 L/min; em 30 segundos, é de 20 L/min).' }
    ]
  },
  'churrasco-festa': {
    domainConcept: 'Ao organizar um aniversário, batizado ou festa de confraternização familiar que mistura buffet tradicional de salgadinhos, docinhos, bolo de corte e bebidas não alcoólicas (ou churrasco completo), errar as quantidades gera falta em mesas cheias ou desperdício enorme na geladeira. Esta ferramenta utiliza os índices profissionais de buffets brasileiros por perfil etário (adultos vs crianças) para gerar a lista completa de salgados, docinhos, litros de refrigerante/água e peso ideal do bolo.',
    formulaText: 'Salgados Totais = (Adultos × 12) + (Crianças × 6). Doces Totais = (Adultos × 4) + (Crianças × 3). Bebidas (L) = (Adultos × 1,0) + (Crianças × 0,5). Bolo (kg) = [(Adultos + Crianças) × 100 g] / 1.000.',
    whenToUse: 'Use ao fechar encomendas com boleiras, salgadeiras, buffets infantis ou ao fazer compras para recepções em salões de festas.',
    importantTips: 'Se o evento durar mais de 5 horas ou tiver entrada com refeição quente completa (como jantar ou estrogonofe antes do bolo), reduza o número de salgadinhos para cerca de 6 a 8 unidades por adulto.',
    sources: [
      { name: 'SEBRAE / ABRASEL - Dimensionamento de Eventos e Buffet', url: 'https://abrasel.com.br/' }
    ],
    extraFaqs: [
      { q: 'Quantos gramas de bolo calcular por convidado?', a: 'A referência padrão de confeitaria calcula 100 gramas de bolo por pessoa (adulto ou criança), o que corresponde a 1 kg para cada 10 convidados.' },
      { q: 'Devo encomendar quantos sabores variados de salgadinhos?', a: 'Para não faltar dos favoritos da maioria, concentre 70% do pedido nos clássicos (coxinha, bolinha de queijo, quibe e esfirra) e 30% em opções especiais.' },
      { q: 'Como calcular refrigerante e água em dias muito quentes?', a: 'Mantenha a base de 1 litro por adulto e adicione cerca de 25% extras de água mineral gelada e sucos caso o evento seja diurno em área aberta.' }
    ]
  },
  'alimentos-congelados': {
    domainConcept: 'Congelar sobras e compras em quantidade é uma estratégia excelente contra o desperdício doméstico e o aumento dos preços no mercado, mas congelar não torna os alimentos eternos: oxidação de gorduras, perda de textura por cristais de gelo e oscilações térmicas limitam o tempo seguro e nutritivo de guarda. Como um freezer dedicado (-18 °C constantes) conserva muito mais tempo do que o compartimento congelador simples de uma geladeira doméstica (~ -4 °C a -12 °C), esta ferramenta exibe o prazo seguro recomendado por tipo de alimento e equipamento.',
    formulaText: 'No Freezer (-18 °C): Carne bovina/suína = 12 meses; Frango/Aves = 9 meses; Peixes = 6 meses; Pratos prontos/outros = 8 meses. No Congelador de Geladeira: Carne = 3 meses; Frango = 2 meses; Peixes = 1 mês; Outros = 2 meses.',
    whenToUse: 'Use sempre que for porcionar carnes do mês ou marmitas fit semanais para etiquetar potes e saquinhos com a data exata de validade no congelador.',
    importantTips: 'Etiquete sempre cada embalagem com fita crepe e caneta marcando o nome do alimento e a data limite de consumo, e jamais recongele um alimento cru que já foi totalmente descongelado sem antes cozinhá-lo completamente.',
    sources: [
      { name: 'ANVISA / USDA - Segurança Alimentar e Conservação Sob Congelamento', url: 'https://www.gov.br/anvisa/pt-br' }
    ],
    extraFaqs: [
      { q: 'Qual é a forma mais segura de descongelar carnes congeladas?', a: 'Sempre dentro da parte inferior da geladeira (leva de 12 a 24 horas para peças grandes) ou diretamente no cozimento/micro-ondas em função descongelar; descongelar em temperatura ambiente sobre a pia favorece multiplicação rápida de bactérias na superfície.' },
      { q: 'Alimentos congelados há mais de 1 ano estragam ou apenas perdem sabor?', a: 'Mantidos continuamente a -18 °C, geralmente continuam seguros do ponto de vista microbiológico, mas sofrem desidratação superficial ("queima de freezer"), oxidação e perda acentuada de textura, suculência e vitaminas.' },
      { q: 'Posso colocar comida quente recém-cozida direto dentro do freezer?', a: 'Não é recomendável colocar panelas muito quentes direto no freezer, pois o calor eleva a temperatura interna dos alimentos vizinhos e força o compressor; aguarde perder o vapor intenso em banho de gelo ou na bancada por até 1 hora antes de resfriar e congelar.' }
    ]
  },
  'espacador-azulejo': {
    domainConcept: 'Durante o assentamento de pisos cerâmicos, porcelanatos ou revestimentos de parede, o uso de espaçadores plásticos (cruzetas ou sistemas niveladores com cunha e clipe) garante juntas uniformes que absorvem a dilatação térmica da casa e evitam o estufamento futuro das peças. Calcular previamente quantos espaçadores comprar de acordo com a metragem do ambiente e as dimensões do piso impede paradas no meio da obra.',
    formulaText: 'Área Unitária da Peça (m²) = (Largura cm × Comprimento cm) / 10.000. Quantidade de Peças = ceil(Área Total / Área Unitária). Total de Espaçadores = Quantidade de Peças × 4.',
    whenToUse: 'Use junto com o orçamento do revestimento para comprar pacotes de espaçadores ou clipes niveladores (usualmente vendidos em pacotes de 50, 100 ou 500 unidades) na medida certa.',
    importantTips: 'Confira sempre na caixa do porcelanato ou cerâmica a junta mínima recomendada pelo fabricante (ex: porcelanato retificado costuma exigir junta fina de 1,5 mm a 2 mm, enquanto cerâmicas tradicionais bold exigem 3 mm a 5 mm).',
    sources: [
      { name: 'ABNT NBR 13753 - Revestimento de Piso Interno com Placas Cerâmicas', url: 'https://www.abnt.org.br/' }
    ],
    extraFaqs: [
      { q: 'Por que a fórmula multiplica cada peça por 4 espaçadores?', a: 'Na paginação com sistema de clipe nivelador de borda, utilizam-se em média até 4 pontos de travamento por placa (especialmente em porcelanatos médios/grandes), servindo como teto seguro já contemplando recortes.' },
      { q: 'As cunhas do sistema nivelador também precisam ser compradas na mesma quantidade dos clipes?', a: 'Não! Enquanto os clipes/espaçadores ficam presos na argamassa e são quebrados após a secagem (descartáveis), as cunhas são reutilizáveis e basta comprar quantidade suficiente para 1 a 2 dias de trabalho do azulejista.' },
      { q: 'Posso assentar porcelanato com junta zero (peças encostadas sem espaçador)?', a: 'Jamais! Mesmo porcelanatos retificados precisam de junta mínima (tipicamente 1 mm a 2 mm) para absorver movimentações estruturais e dilatação térmica sem lascar as bordas.' }
    ]
  },
  'lista-supermercado': {
    domainConcept: 'Ir ao supermercado sem controle de limite financeiro frequentemente resulta em surpresas desagradáveis no caixa ao somar itens de impulso no carrinho. Esta ferramenta simples ajuda famílias a monitorarem antecipadamente a relação entre o orçamento definido para a compra do mês ou da semana e a quantidade média de produtos planejados na lista, indicando o percentual já comprometido e o saldo disponível.',
    formulaText: 'Custo Médio Referencial = Total de Itens × R$ 10,00. Percentual do Orçamento Usado (%) = [(Custo / Orçamento) × 105]. Saldo Restante = Orçamento - Custo.',
    whenToUse: 'Use antes de sair de casa com a lista de compras para ajustar a quantidade de itens supérfluos dentro do orçamento familiar mensal destinado à alimentação.',
    importantTips: 'Comparamos o preço por unidade de medida (preço por quilo ou por litro exibido nas etiquetas da gôndola): muitas vezes uma embalagem menor em promoção custa mais caro por quilo do que a embalagem família tradicional!',
    sources: [
      { name: 'DIEESE - Pesquisa Nacional da Cesta Básica de Alimentos', url: 'https://www.dieese.org.br/' }
    ],
    extraFaqs: [
      { q: 'Como planejar melhor o orçamento mensal de supermercado da casa?', a: 'Separe compras grandes não-perecíveis (arroz, feijão, higiene e limpeza) uma vez por mês em atacarejos e reserve verba semanal específica para hortifrúti, carnes e padaria.' },
      { q: 'Qual é o percentual máximo da renda familiar recomendado para alimentação em casa?', a: 'Planejadores financeiros costumam enquadrar alimentação essencial e itens básicos domésticos entre 15% e 25% da renda líquida familiar conforme o tamanho da família.' },
      { q: 'Ir ao mercado com fome ou sem lista realmente aumenta a conta?', a: 'Estudos de comportamento do consumidor comprovam que comprar sem lista escrita prévia eleva em até 20% a 30% o gasto por compras por impulso.' }
    ]
  },

  // ================= AGRONEGÓCIO & CAMPO (6) =================
  'agro-produtividade-graos': {
    domainConcept: 'Na agricultura comercial de soja, milho, feijão e trigo no Brasil, a medição padrão de colheita combina a unidade tradicional da saca de 60 kg com a produtividade média por hectare (sc/ha) e o volume total em toneladas (t) para negociação de fretes e armazenamento em silos. Esta ferramenta converte imediatamente o total colhido e a área plantada em produtividade por hectare, massa total em toneladas e faturamento bruto da safra antes dos custos operacionais.',
    formulaText: 'Produtividade Média (sc/ha) = Sacas Colhidas (60 kg) / Área Cultivada (ha). Rendimento Total (t) = (Sacas × 60) / 1.000. Receita Bruta = Sacas × Preço da Saca.',
    whenToUse: 'Use após o fechamento de talhões na colheitadeira, para comparar desempenho entre cultivares ou safras anteriores e planejar a logística de caminhões basculantes.',
    importantTips: 'Lembre-se que cargas entregues nos armazéns com umidade acima de 14% ou impurezas sofrem descontos técnicos na balança (quebra de umidade) antes da emissão da nota de peso líquido em sacas.',
    sources: [
      { name: 'CONAB - Companhia Nacional de Abastecimento (Safras de Grãos)', url: 'https://www.conab.gov.br/' },
      { name: 'Embrapa Soja / Milho', url: 'https://www.embrapa.br/' }
    ],
    extraFaqs: [
      { q: 'Quantos sacos de 60 kg existem em 1 tonelada métrica de grãos?', a: 'Uma tonelada (1.000 kg) equivale exatamente a 16,6667 sacas de 60 kg.' },
      { q: 'Qual é uma boa média de produtividade para soja e milho no Brasil?', a: 'Dependendo do clima e tecnologia aplicada, a soja brasileira registra médias nacionais próximas a 55–65 sc/ha (atingindo 75+ sc/ha em talhões de alto teto), enquanto milho segunda safra (safrinha) oscila frequentemente entre 90 e 130 sc/ha.' },
      { q: 'Como converter sacas por alqueire paulista para sacas por hectare?', a: 'Como 1 alqueire paulista tem 2,42 hectares, basta dividir a produtividade por alqueire por 2,42 para obter sacas por hectare.' }
    ]
  },
  'agro-lote-gado-corte': {
    domainConcept: 'Na negociação de bovinos de corte terminados para abate (em pasto, semiconfinamento ou confinamento), o produtor não vende o boi pelo peso vivo da balança da fazenda: o pagamento do frigorífico baseia-se na arroba de carcaça limpa (15 kg por arroba), apurada multiplicando o peso vivo final pelo rendimento percentual de carcaça (tipicamente 50% a 56% conforme raça, acabamento de gordura e tempo de jejum). Estimar o peso em arrobas e o faturamento do lote antes do embarque protege a margem do pecuarista.',
    formulaText: 'Arrobas por Boi (@) = [Peso Vivo (kg) × (Rendimento de Carcaça% / 100)] / 15. Arrobas Totais do Lote = Arrobas por Boi × Quantidade de Bois. Faturamento Total = Arrobas Totais × Preço da Arroba.',
    whenToUse: 'Use para avaliar o ponto ideal de venda de bois gordos (acima de 18–20 arrobas), calcular viabilidade de compra de boi magro para engorda e negociar contratos a termo.',
    importantTips: 'Cuidado ao comparar o peso vivo pesado na fazenda com o peso na balança do frigorífico: a viagem e o jejum reduzem o peso vivo (quebra de transporte), mas concentram o rendimento de carcaça sobre o peso final descontado no gancho.',
    sources: [
      { name: 'Embrapa Gado de Corte', url: 'https://www.embrapa.br/gado-de-corte' },
      { name: 'CEPEA/ESALQ - Indicador do Boi Gordo', url: 'https://www.cepea.esalq.usp.br/' }
    ],
    extraFaqs: [
      { q: 'Por que 1 arroba bovina equivale a 15 kg de carcaça e não a 30 kg de peso vivo?', a: 'Considera-se tradicionalmente 50% de rendimento médio: um boi de 30 kg vivos produz 15 kg de carcaça limpa após retirada de couro, cabeça, patas e vísceras; raças nelore bem acabadas e cruzamentos industriais atingem 53% a 56% de rendimento.' },
      { q: 'Qual o rendimento de carcaça típico de fêmeas (vacas e novilhas)?', a: 'Em média fêmeas apresentam rendimento de carcaça um pouco menor que machos inteiros ou castrados bem terminados, situando-se frequentemente entre 48% e 52%.' },
      { q: 'Como o desconto de Funrural afeta a receita bruta do lote?', a: 'Na venda para frigoríficos por produtor pessoa física, incide retenção previdenciária/SENAR (Funrural) diretamente na nota fiscal — verifique o percentual vigente na opção de recolhimento (faturamento vs folha) escolhida pela fazenda.' }
    ]
  },
  'agro-conversor-medidas-terra': {
    domainConcept: 'Apesar de o hectare (ha = 10.000 m²) ser a unidade agrária oficial reconhecida pelo INCRA e pelos Cartórios de Registro de Imóveis em todo o território brasileiro, negócios rurais regionais ainda usam amplamente o alqueire — medida histórica que muda drasticamente de tamanho de um estado para outro! Um alqueire no interior de São Paulo ou Paraná tem metade do tamanho de um alqueire em Minas Gerais ou Goiás e um quarto do alqueire baiano. Converter instantaneamente evita erros milionários em arrendamentos, compra de fazendas e compra de defensivos.',
    formulaText: 'Fatores oficiais implementados em metros quadrados: 1 Hectare (ha) = 10.000 m²; 1 Alqueire Paulista = 24.200 m² (2,42 ha); 1 Alqueire Mineiro/Goiano = 48.400 m² (4,84 ha); 1 Alqueire Baiano = 96.800 m² (9,68 ha).',
    whenToUse: 'Indispensável ao negociar arrendamentos de pasto ou lavoura entre estados diferentes, ler matrículas rurais antigas ou converter áreas em m² para dosagem de insumos por hectare.',
    importantTips: 'Sempre confirme na escritura ou junto ao proprietário local qual definição regional de alqueire está sendo usada antes de assinar contratos nas divisas de estados como SP/MG, BA/TO ou PR/MS.',
    sources: [
      { name: 'INCRA - Sistema Nacional de Cadastro Rural e Unidades Agrárias', url: 'https://www.gov.br/incra/pt-br' }
    ],
    extraFaqs: [
      { q: 'Qual é o tamanho de um hectare comparado a um campo de futebol?', a: 'Um hectare mede exatamente 10.000 m² (um quadrado de 100 metros por 100 metros), equivalendo aproximadamente à área de um campo de futebol oficial padrão.' },
      { q: 'Onde se usa o alqueire paulista vs o alqueire mineiro?', a: 'O alqueire paulista (2,42 ha) predomina em São Paulo, Paraná, Mato Grosso do Sul e parte do Sul; o alqueire mineiro (4,84 ha) é usado em Minas Gerais, Goiás, Tocantins e Rio de Janeiro.' },
      { q: 'Quantas "tarefas" tem um hectare no Nordeste?', a: 'Na Bahia e em Sergipe utiliza-se também a "tarefa", que mede geralmente 4.356 m² na Bahia (~2,295 tarefas por ha) ou 3.025 m² em outros estados.' }
    ]
  },
  'agro-calagem-solo': {
    domainConcept: 'Solos tropicais brasileiros (como grande parte do Cerrado) são naturalmente ácidos e pobres em cálcio e magnésio, o que libera alumínio tóxico às raízes e trava a absorção de adubos caros como fósforo e potássio. A calagem — aplicação de calcário agrícola calcítico ou dolomítico antes do plantio — corrige o pH e eleva a saturação por bases (V%) do solo até o nível ideal para cada cultura (ex: 60%–70% para soja/milho/feijão). Calcular a dosagem exata evita subdosagem ineficaz ou supercalagem prejudicial a micronutrientes.',
    formulaText: 'Aplica-se o método oficial da Saturação por Bases (IAC/Embrapa): Necessidade de Calcário NC (t/ha) = [CTC × (V2% - V1%)] / PRNT, para camada de 0–20 cm com incorporação. Volume Total (t) = NC × Área (ha).',
    whenToUse: 'Use com o laudo da análise química de solo em mãos (valores de T = CTC e V1% atual) para comprar exatamente a quantidade certa de toneladas de calcário para a fazenda.',
    importantTips: 'Aplique o calcário com antecedência mínima de 60 a 90 dias antes da semeadura sempre que possível, pois o calcário precisa de umidade e tempo no solo para reagir quimicamente e neutralizar a acidez antes de receber o adubo de plantio.',
    sources: [
      { name: 'Embrapa - Método da Saturação por Bases para Calagem', url: 'https://www.embrapa.br/' }
    ],
    extraFaqs: [
      { q: 'O que acontece se o V1% atual do solo já for maior que o V2% desejado?', a: 'A necessidade de calagem resulta em zero (não se deve aplicar calcário), evitando alcalinização excessiva que indisponibiliza zinco, manganês, ferro e cobre para as plantas.' },
      { q: 'Como escolher entre calcário calcítico e calcário dolomítico?', a: 'Quando a análise de solo mostra deficiência simultânea de Magnésio (Mg), prefira o calcário dolomítico (rico em cálcio e magnésio); quando o magnésio já estiver alto, use o calcítico.' },
      { q: 'A dosagem muda em sistema de Plantio Direto sem incorporação com grade?', a: 'Sim! Em Plantio Direto consolidado (aplicação superficial na camada 0–10 cm), recomenda-se geralmente metade da dose padrão ou parcelamento conforme orientação do agrônomo para não concentrar calcário em excesso na superfície.' }
    ]
  },
  'agro-racao-animal': {
    domainConcept: 'Em confinamentos de gado de corte, rebanhos leiteiros ou granjas, a alimentação representa entre 60% e 75% do custo total de produção — e a falta abrupta de ração no silo quebra o ganho de peso diário e provoca estresse metabólico nos animais. Dimensionar o consumo diário total do lote (em kg/dia), o desembolso financeiro diário e exatamente quantos dias de autonomia o estoque atual do silo suporta garante compras programadas de insumos sem rupturas logísticas.',
    formulaText: 'Consumo Diário do Lote (kg/dia) = Cabeças × Consumo por Animal (kg/dia). Despesa Diária = Consumo do Lote × Preço por kg. Autonomia do Silo (dias) = Capacidade/Estoque no Silo (kg) / Consumo Diário do Lote.',
    whenToUse: 'Use no manejo diário de confinamento e semiconfinamento para agendar novos pedidos de milho, farelo de soja ou ração peletizada considerando o prazo de entrega do fornecedor.',
    importantTips: 'Programe o pedido de reposição sempre que a autonomia restante do silo atingir o prazo de entrega do fornecedor somado a uma margem de segurança de 3 a 5 dias contra chuvas ou greves nas estradas.',
    sources: [
      { name: 'Embrapa Pecuária - Nutrição e Manejo de Rebanho', url: 'https://www.embrapa.br/' }
    ],
    extraFaqs: [
      { q: 'Quanto concentrado/ração em percentual do peso vivo um boi em engorda costuma comer?', a: 'Em semiconfinamento ou suplementação a pasto, o consumo de ração concentrada varia tipicamente de 0,5% a 1,2% do peso vivo ao dia; em confinamento de alta energia pode atingir 2,0% a 2,4% do peso vivo em matéria seca total.' },
      { q: 'Como converter a autonomia de ração de quilos para toneladas ou sacos?', a: 'Divida a capacidade em kg por 1.000 para obter toneladas, ou por 25/40 para contar em sacos comerciais.' },
      { q: 'O desperdício no cocho entra nessa conta?', a: 'Em instalações abertas sujeitas a vento ou umidade, recomenda-se acrescentar de 3% a 5% de margem sobre o consumo teórico para estimar o estoque real necessário.' }
    ]
  },
  'agro-semeadura-densidade': {
    domainConcept: 'O estande inicial perfeito de plantas — nem falho a ponto de abrir espaço para plantas daninhas, nem adensado a ponto de causar estiolamento, tombamento e competição por água — começa na regulagem precisa da plantadeira. Como cada saco de semente possui um Peso de Mil Sementes (PMS) diferente e um índice de germinação/pureza próprio informado no boletim do lote, regular a máquina sem recalcular as sementes por metro linear compromete todo o potencial produtivo da lavoura.',
    formulaText: 'Sementes Brutas por Hectare = População Alvo / (Germinação% / 100). Metros Lineares por Hectare = 10.000 / Espaçamento (m). Sementes por Metro = Sementes por Ha / Metros por Ha. Consumo (kg/ha) = (Sementes por Ha × PMS em g) / 1.000.000; Sacos (40kg) = (kg/ha × Área) / 40.',
    whenToUse: 'Essencial antes de entrar com a semeadora no talhão para regular discos alveolados, dosadores pneumáticos e comprar a quantidade exata de sacos ou big bags de sementes.',
    importantTips: 'Após fazer a regulagem teórica pelas fórmulas, sempre rode a plantadeira em 50 metros na área preparada (sem enterrar o sulco ou escavando após a passagem) para conferir na prática se o número real de sementes caídas por metro bate com o calculado.',
    sources: [
      { name: 'Embrapa - Regulagem de Semeadoras e Estande de Plantas', url: 'https://www.embrapa.br/' }
    ],
    extraFaqs: [
      { q: 'Por que dividimos a população desejada de plantas pelo percentual de germinação?', a: 'Se você deseja 250.000 plantas vivas por hectare, mas apenas 90% das sementes germinam no campo, é obrigatório distribuir 250.000 / 0,90 ≈ 277.778 sementes para atingir o estande planejado.' },
      { q: 'O que é o PMS (Peso de Mil Sementes) e onde encontrá-lo?', a: 'É o peso em gramas de exatas 1.000 sementes daquele lote específico (geralmente entre 130 g e 210 g na soja), impresso na etiqueta oficial da sacaria ou big bag.' },
      { q: 'Como estimar o número de big bags ou sacas de 20 kg em vez de 40 kg?', a: 'Multiplique o consumo em kg/ha pela área total em hectares para obter o peso total em quilos e divida pelo peso unitário da embalagem comercial utilizada (20 kg, 40 kg ou 800 kg).' }
    ]
  },

  // ================= LOGÍSTICA & FRETES (5) =================
  'log-calculo-frete': {
    domainConcept: 'Transportadoras, embarcadores e motoristas rodoviários frequentemente fecham fretes olhando apenas para o preço do diesel gasto no trecho — esquecendo que pedágios, taxas de chapa/ajudante e a margem real de lucro precisam garantir a sobrevivência financeira da operação. Além disso, o cálculo da margem de lucro desejada sobre o faturamento exige divisor inverso (Markup Divisor), pois aplicar +35% direto sobre o custo gera margem real inferior a 26% sobre o valor recebido na nota.',
    formulaText: 'Custo de Diesel = (Distância Ida e Volta / Consumo km/L) × Preço do Diesel. Custo Direto Total = Diesel + Pedágios + Despesas Extras. Frete Sugerido = Custo Direto / [1 - (Margem Desejada% / 100)].',
    whenToUse: 'Use antes de aceitar cotações de carga fechada ou fracionada para confirmar se o frete proposto cobre combustível, pedágios e deixa a margem de contribuição planejada.',
    importantTips: 'Insira sempre a distância completa considerando o retorno caso não haja garantia firme de carga de volta (retorno vazio), além de lembrar que pneus, manutenção e seguro precisam ser cobertos pela margem ou somados como despesa operacional por km.',
    sources: [
      { name: 'ANTT - Piso Mínimo de Frete Rodoviário (Lei nº 13.703/2018)', url: 'https://www.gov.br/antt/pt-br' }
    ],
    extraFaqs: [
      { q: 'Por que dividir por (1 - 0,35) em vez de multiplicar o custo por 1,35?', a: 'Se o custo direto é R$ 1.000 e você multiplica por 1,35 (R$ 1.350), seu lucro de R$ 350 sobre R$ 1.350 equivale a 25,9% de margem sobre a receita. Dividindo por (1 - 0,35) = 0,65, o frete é R$ 1.538,46 — e R$ 538,46 representam exatos 35% do faturamento!' },
      { q: 'Como o consumo em km/L muda entre caminhão vazio e carregado?', a: 'Um conjunto pesado carregado com 25–30 toneladas em trechos de serra consome de 20% a 35% mais óleo diesel do que vazio em rodovia plana.' },
      { q: 'Esse cálculo considera tributos do frete (ICMS, PIS/COFINS)?', a: 'Para operações formais com emissão de CT-e, inclua o percentual médio de impostos na margem desejada ou no campo de despesas extras da viagem.' }
    ]
  },
  'log-custo-km-rodado': {
    domainConcept: 'Conhecer exatamente quanto custa cada quilômetro rodado de um caminhão pesado — separando custos variáveis (que só acontecem quando a roda gira, como óleo diesel, Arla 32, pneus e manutenção preventiva) de custos fixos mensais (que vencem mesmo com o caminhão parado no pátio, como seguro, IPVA, rastreador, salário fixo e encargos) — é o fundamento da gestão profissional de frotas. Quanto maior a rodagem mensal produtiva do veículo, menor é o custo fixo diluído por quilômetro.',
    formulaText: 'Custo Variável/km = (Diesel Referencial R$ 5,85 / Consumo km/L) + Desgaste Pneu & Manutenção/km. Custo Fixo/km = Custos Fixos Mensais / Rodagem Mensal (km). Custo Total/km = Variável/km + Fixo/km.',
    whenToUse: 'Use para auditar a eficiência mensal da frota, comparar caminhões novos vs antigos e estabelecer o preço mínimo de break-even por km abaixo do qual não compensa rodar.',
    importantTips: 'Não ignore o custo por km de pneus em caminhões pesados: um jogo completo de pneus de caminhão/carreta custa dezenas de milhares de reais e, mesmo com recapagens, representa uma parcela expressiva do custo variável por km.',
    sources: [
      { name: 'CNT - Confederação Nacional do Transporte (Planilha de Custos)', url: 'https://www.cnt.org.br/' }
    ],
    extraFaqs: [
      { q: 'Por que rodar menos quilômetros por mês encarece o custo por quilômetro?', a: 'Porque os custos fixos mensais (seguro, IPVA, rastreador, salário/encargos) continuam os mesmos e passam a ser divididos por menos quilômetros rodados, elevando o custo fixo por km.' },
      { q: 'A depreciação do caminhão entra como custo fixo mensal?', a: 'Sim! Em controles gerenciais completos, recomenda-se incluir nos custos fixos mensais uma provisão mensal para renovação da frota ao fim de 5 a 8 anos de uso.' },
      { q: 'Qual é o impacto de dirigir acima de 80–85 km/h no custo variável de um caminhão?', a: 'Estudos técnicos da CNT e fabricantes mostram que acelerar de 80 km/h para 95 km/h aumenta o arrasto aerodinâmico e pode elevar o consumo de diesel em até 12% a 18%.' }
    ]
  },
  'log-cubagem-carga': {
    domainConcept: 'Ao despachar colchões, espumas, embalagens plásticas vazias, eletrodomésticos ou móveis leves por transportadora, o peso na balança pode ser baixo (ex: 50 kg), mas o volume ocupa metade do baú do caminhão impedindo outras cargas. Para remunerar o espaço ocupado dentro do veículo, o setor de transportes aplica o cálculo de Peso Cubado multiplicando o volume em metros cúbicos (m³) pelo fator de cubagem rodoviário padrão de 300 kg/m³, cobrando sempre pelo maior valor entre peso real e peso cubado (Peso Taxável).',
    formulaText: 'Volume Total (m³) = [(Comprimento cm × Largura cm × Altura cm) / 1.000.000] × Quantidade. Peso Cubado (kg) = Volume Total × 300. Peso Taxável = max(Peso Cubado, Peso Real Total).',
    whenToUse: 'Indispensável para e-commerces, indústrias de bens leves e remetentes conferirem cotações de frete rodoviário e otimizarem o tamanho das caixas de envio.',
    importantTips: 'Se o seu produto paga frete pelo peso cubado (peso real menor que o cubado), reduzir espaços vazios e enchimentos dentro da caixa de papelão gera economia imediata de frete sem mudar o peso do produto!',
    sources: [
      { name: 'ABNT / NTC&Logística - Padrão de Cubagem Rodoviária', url: 'https://www.portalntc.org.br/' }
    ],
    extraFaqs: [
      { q: 'O fator de cubagem é sempre 300 kg/m³ para todos os modais de transporte?', a: 'No transporte rodoviário fracionado brasileiro o padrão é 300 kg/m³ (e em algumas rotas específicas 250 kg/m³); já no transporte aéreo nacional e internacional, o fator IATA padrão é de aproximadamente 166,7 kg/m³.' },
      { q: 'Como converter medidas da caixa de milímetros ou metros para centímetros?', a: 'Se mediu em metros, multiplique por 100 (ex: 1,20 m = 120 cm); se mediu em milímetros, divida por 10 antes de inserir nos campos.' },
      { q: 'O que acontece quando o Peso Real é maior que o Peso Cubado?', a: 'Como ocorre com peças metálicas, sacos de cimento ou bebidas, a transportadora cobra simplesmente pelo Peso Real da balança (o maior entre os dois).' }
    ]
  },
  'log-lei-estadia': {
    domainConcept: 'Um dos maiores gargalos enfrentados por caminhoneiros e transportadoras no Brasil é ficar horas ou dias inteiros parado na fila do pátio aguardando carregamento ou descarga em portos, armazéns e centros de distribuição. Para coibir essa perda produtiva, a Lei nº 11.442/2007 (Art. 11, §5º, atualizada pela Lei nº 13.103/2015) determinou o prazo máximo de 5 horas para carga e descarga após a chegada ao destino — gerando a partir da 6ª hora direito legal à indenização por estadia calculada por tonelada de capacidade do veículo por hora parada.',
    formulaText: 'Horas Excedentes = max(0, Horas Totais no Pátio - 5). Indenização Legal = Horas Excedentes × Capacidade do Veículo (ton) × Tarifa por ton/hora. Valor Total = Indenização Legal + Estadia Fixa/Pernoite.',
    whenToUse: 'Use para calcular o valor legal de estadia a ser faturado contra embarcadores ou destinatários quando o tempo total no terminal ultrapassar 5 horas.',
    importantTips: 'Para exigir o pagamento da estadia com segurança jurídica, exija sempre do cliente ou portaria o comprovante formal com registro exato do horário de chegada (entrada no pátio/gate) e do horário de liberação após conclusão da carga/descarga.',
    sources: [
      { name: 'Lei nº 11.442/2007 (Art. 11 §5º) e Lei nº 13.103/2015', url: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/lei/l11442.htm' }
    ],
    extraFaqs: [
      { q: 'O prazo de 5 horas de tolerância conta em dias de chuva ou fora do horário comercial?', a: 'A lei prevê o prazo corrido de 5 horas contadas da chegada do veículo ao endereço de destino agendado, salvo condições contratuais específicas de agendamento respeitadas pelo motorista.' },
      { q: 'Qual é a referência do valor da hora/tonelada atualizada pela ANTT?', a: 'A tarifa legal da Lei nº 11.442 sofre atualização anual oficial pela variação do INPC divulgada pelo IBGE (partindo de R$ 1,38 em 2015 e superando R$ 2,21–2,38+/ton/hora nos anos recentes).' },
      { q: 'Motorista empregado também ganha essa estadia inteira ou ela vai para o dono do caminhão?', a: 'A indenização da Lei nº 11.442 destina-se ao transportador (TAC autônomo ou ETC empresa dona do equipamento); ao motorista empregado CLT é devido o pagamento das horas de espera/jornada na folha conforme o contrato de trabalho.' }
    ]
  },
  'log-jornada-motorista': {
    domainConcept: 'A Lei dos Caminhoneiros (Lei nº 13.103/2015, em conjunto com o Código de Trânsito Brasileiro e a CLT) regulamenta os limites diários de direção contínua, pausas obrigatórias de descanso, horas de espera e jornada total de motoristas profissionais de carga e passageiros. Dirigir mais de 5 horas e meia ininterruptas sem pausa de 30 minutos eleva drasticamente o risco de fadiga ao volante e gera autuação de trânsito gravíssima/grave — além de passivos trabalhistas quando a jornada excede 8 horas diárias.',
    formulaText: 'Verifica se o Tempo de Condução Ininterrupta ≥ 5,5 horas (exigindo pausa obrigatória mínima de 30 minutos). Soma Tempo de Direção + Tempo de Carga/Descarga para apurar Horas Extras acima de 8h diárias e classificar Risco de Fadiga (Baixo 10 / Moderado 50 / Alto 100 acima de 12h).',
    whenToUse: 'Use no planejamento de rotas diárias e conferência de relatórios de tacógrafo ou diário de bordo de motoristas profissionais rodoviários.',
    importantTips: 'Lembre-se do julgamento do STF na ADI 5322, que alterou regras importantes sobre o fracionamento do descanso interjornada de 11 horas e o cômputo integral do tempo de espera em operações CLT — consulte sempre o departamento jurídico/RH da transportadora para escalas formais.',
    sources: [
      { name: 'Lei dos Motoristas - Lei nº 13.103/2015', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13103.htm' }
    ],
    extraFaqs: [
      { q: 'De quanto em quanto tempo o motorista de carga precisa parar para descansar?', a: 'O CTB (Art. 67-C) determina que é vedado dirigir veículo de transporte rodoviário de carga por mais de 5 horas e meia ininterruptas, sendo obrigatório descanso de 30 minutos (que pode ser fracionado desde que respeitado o limite contínuo).' },
      { q: 'Qual é o intervalo obrigatório mínimo entre duas jornadas diárias de trabalho?', a: 'O motorista profissional tem direito a repouso mínimo de 11 horas dentro do período de 24 horas.' },
      { q: 'O tempo parado na fila aguardando descarga entra na jornada ou como hora de espera?', a: 'Conforme entendimento recente do STF na ADI 5322, o tempo à disposição aguardando carga/descarga passa a integrar a jornada normal/extraordinária para motoristas empregados.' }
    ]
  },

  // ================= CONSTRUÇÃO & REFORMAS (3) =================
  'const-tijolos': {
    domainConcept: 'Ao levantar um muro, dividir cômodos ou construir paredes de alvenaria, estimar a quantidade correta de tijolos cerâmicos ou blocos de concreto por metro quadrado evita interromper o trabalho do pedreiro por falta de peças — e também previne que sobrem centenas de blocos empilhados no quintal. Como as peças variam bastante conforme o modelo e assentamento (ex: tijolo baiano 6 furos deitado ~39/m², bloco 8 furos em pé ~25/m² ou bloco estrutural ~12,5/m²), a calculadora permite ajustar a densidade por m² e aplicar margem técnica de quebra.',
    formulaText: 'Total de Tijolos = ceil(Área da Parede × Tijolos por m² × (1 + Margem de Perda% / 100)). Volume Estimado de Areia (m³) = Total de Tijolos × 0,0015.',
    whenToUse: 'Use no levantamento quantitativo de obras novas, muros residenciais ou reformas de ampliação antes de cotar em depósitos e olarias.',
    importantTips: 'Não esqueça de medir largura × altura de portas e janelas grandes e subtrair essa área da área total da parede antes de preencher o campo de área líquida.',
    sources: [
      { name: 'TCPO / SINAPI - Índices de Consumo na Construção Civil', url: 'https://www.caixa.gov.br/poder-publico/modernizacao-gestao/sinapi/' }
    ],
    extraFaqs: [
      { q: 'Quantos tijolos 8 furos (9x19x19 cm) vão em média por metro quadrado?', a: 'Assentados em pé ("cutelo", espessura mais fina), consomem cerca de 25 unidades por m²; assentados deitados ("tijolo e meio"), cerca de 45 a 50 unidades/m².' },
      { q: 'Por que somar 10% de margem de quebra ao comprar tijolos?', a: 'Porque durante o descarregamento do caminhão e os cortes necessários nos encontros com pilares, vigas e conduítes elétricos ocorrem quebras inevitáveis.' },
      { q: 'Qual é a medida padrão aproximada de areia para assentar 1.000 tijolos?', a: 'Na argamassa de assentamento comum para alvenaria de vedação de 1.000 tijolos cerâmicos médios, consomem-se em torno de 1,0 a 1,5 m³ de areia média lavada.' }
    ]
  },
  'const-tinta': {
    domainConcept: 'Pintar ou repintar paredes internas, fachadas e tetos exige dimensionar o volume total de tinta considerando o número real de demãos necessárias para cobertura uniforme (geralmente 2 demãos na repintura e até 3 em cores fortes ou reboco novo) e o rendimento declarado no rótulo da lata. Esta calculadora transforma instantaneamente a metragem total da pintura em litros líquidos necessários e no equivalente em latas grandes padrão de 18 litros.',
    formulaText: 'Litros de Tinta = (Área Total × Quantidade de Demãos) / Rendimento da Tinta (m²/L). Latas Grandes (18L) = Litros / 18.',
    whenToUse: 'Use ao comparar orçamentos de pintura entre tintas econômicas (menor rendimento) e tintas acrílicas premium (maior rendimento por litro), escolhendo entre latas de 18L e galões de 3,6L.',
    importantTips: 'Uma tinta premium que custa 30% mais caro na lata frequentemente rende o dobro de metros quadrados por demão com melhor cobertura, resultando em menor custo total acabado por m² pintado!',
    sources: [
      { name: 'ABNT NBR 11702 - Tintas para Construção Civil', url: 'https://www.abnt.org.br/' }
    ],
    extraFaqs: [
      { q: 'Qual é a diferença de volume entre lata grande, galão e quarto de tinta?', a: 'No padrão brasileiro, a lata grande tem 18 litros, o galão tem 3,6 litros e o quarto (lata pequena) tem 0,9 litro (900 ml).' },
      { q: 'Parede no reboco cru ou massa corrida nova consome mais tinta na primeira demão?', a: 'Sim! Superfícies porosas absorvem muito mais tinta na primeira passagem; aplicar uma demão prévia de Selador Acrílico reduz drasticamente o consumo de tinta de acabamento.' },
      { q: 'O rendimento informado na lata (ex: 10 m²/L) já conta duas demãos ou é por demão?', a: 'Muitos fabricantes estampam o "rendimento acabado" na frente da lata, enquanto na ficha técnica detalham o rendimento por demão — leia as letras miúdas para não errar o campo de entrada!' }
    ]
  },
  'const-piso': {
    domainConcept: 'Comprar pisos cerâmicos ou porcelanatos medindo apenas a área retangular do chão (largura × comprimento) é erro certo na obra: você ainda precisa somar a área consumida pelos rodapés em todo o perímetro das paredes e incluir a margem técnica de recortes (10% em paginação reta e 15% em paginação diagonal ou peças grandes). Além disso, esta calculadora estima automaticamente os quilos de argamassa colante ACIII recomendados para o assentamento.',
    formulaText: 'Área Total = Área do Chão + [(Altura Rodapé cm / 100) × Perímetro (m)]. Quantidade de Piso = Área Total × (1 + Margem% / 100). Argamassa Recomendada (kg) = Quantidade de Piso × 4,5 kg/m².',
    whenToUse: 'Use antes de fechar o pedido na loja de materiais para garantir que todas as caixas venham do mesmo lote e tonalidade (inclusive rodapés e margem para futuras manutenções).',
    importantTips: 'Pisos cerâmicos são vendidos em caixas fechadas (ex: 1,44 m² ou 2,16 m² por caixa). Divida a metragem final calculada pelo rendimento da caixa escolhida e arredonde sempre para o número inteiro de caixas acima.',
    sources: [
      { name: 'ANFACER - Associação Nacional dos Fabricantes de Cerâmica', url: 'https://www.anfacer.org.br/' }
    ],
    extraFaqs: [
      { q: 'Qual a diferença entre argamassa ACI, ACII e ACIII?', a: 'ACI serve para áreas internas secas/úmidas com cerâmica comum; ACII suporta áreas externas, sol e chuva; ACIII possui máxima aderência, obrigatória para porcelanatos de grandes formatos, piscinas e piso sobre piso.' },
      { q: 'Quando o rodapé já vem pronto ou é cortado do próprio piso?', a: 'Quando o rodapé é cortado do próprio piso comprado (ex: tiras de 10 cm), ele consome exatamente a metragem adicional calculada pela nossa ferramenta; se comprar rodapé pré-fabricado por metro linear, informe altura 0 no campo.' },
      { q: 'Por que paginação na diagonal (45°) exige margem maior de 15%?', a: 'Porque praticamente todas as peças encostadas nas quatro paredes exigem cortes triangulares em ângulo, gerando sobras não reaproveitáveis nos cantos.' }
    ]
  },

  // ================= GASTRONOMIA & EVENTOS (3) =================
  'evento-churrasco': {
    domainConcept: 'Preparar um churrasco perfeito para família ou amigos exige acertar na mão das compras: carne de menos deixa convidados na espera, enquanto carne em excesso sobra e pesa no rateio final. Nossa Calculadora de Churrasco pondera o consumo diferenciado de adultos e crianças (fator 0,5) e escala proporcionalmente de acordo com a duração da festa em horas — separando carne sem osso, cerveja e refrigerante/água.',
    formulaText: 'Pessoas Equivalentes = Adultos + (Crianças × 0,5). Carne (kg) = Pessoas Eq × 0,4 × (Duração / 4). Cerveja (L) = Adultos × 1,5 × (Duração / 4). Refrigerante/Água (L) = Pessoas Eq × 1,0 × (Duração / 4).',
    whenToUse: 'Use antes de ir ao açougue e supermercado ou ao fechar listas de compras para churrascos de fim de semana, aniversários e confraternizações.',
    importantTips: 'Se optar por cortes com osso (como costela bovina, bisteca ou coxinha da asa), some cerca de 20% a 25% sobre o peso calculado de carne sem osso para compensar o peso dos ossos.',
    sources: [
      { name: 'Embrapa Pecuária / SENAC Gastronomia - Cortes e Rendimento', url: 'https://www.senac.br/' }
    ],
    extraFaqs: [
      { q: 'Como dividir os quilos de carne entre bovina, linguiça e frango?', a: 'Uma proporção equilibrada muito apreciada no churrasco brasileiro é 60% de carne bovina (picanha, contrafilé, fraldinha ou alcatra), 25% de linguiça toscana/cuiabana e 15% de cortes de frango ou suíno.' },
      { q: 'Quantas pessoas em média comem bem com 1 kg de carne assada?', a: 'Em um churrasco tradicional de 4 horas com pão de alho, farofa e vinagrete, 1 kg de carne crua sem osso atende confortavelmente cerca de 2 a 3 adultos.' },
      { q: 'Quanto de carvão preciso comprar para assar a carne calculada?', a: 'Considere em média cerca de 1 kg a 1,5 kg de carvão vegetal de boa qualidade para cada 1 kg de carne a ser assada.' }
    ]
  },
  'evento-receita': {
    domainConcept: 'Empreendedoras e empreendedores da gastronomia — confeiteiras, marmiteiras, padarias artesanais e fabricantes de salgados — frequentemente quebram a cabeça para cobrar um preço justo por seus pratos sem ficar no prejuízo. Ao somar o custo fracionado real de cada ingrediente utilizado na receita (farinha, ovos, leite condensado, chocolate, embalagem), dividir pelo rendimento em porções e aplicar a margem desejada, obtém-se a ficha técnica básica com custo unitário e preço sugerido.',
    formulaText: 'Custo Unitário = Custo dos Ingredientes / Rendimento (Unidades ou Porções). Preço Sugerido de Venda = Custo Unitário × (1 + Margem% / 100).',
    whenToUse: 'Indispensável para precificar bolos de pote, brigadeiros gourmet, marmitas congeladas, pizzas artesanais e pratos de cardápios de restaurantes ou delivery (iFood).',
    importantTips: 'Ao usar aplicativos de delivery que cobram comissões de 12% a 27%, ou ao incluir gás, energia elétrica e tempo de preparo, utilize margens de acréscimo (markup) entre 150% e 250% sobre o custo direto dos insumos para garantir lucro líquido real.',
    sources: [
      { name: 'Sebrae / Abrasel - Ficha Técnica de Alimentos e Precificação', url: 'https://sebrae.com.br/' }
    ],
    extraFaqs: [
      { q: 'Como calcular o custo exato de 200 g de farinha comprada em pacote de 1 kg?', a: 'Divida o preço pago pelo pacote de 1.000 g por 1.000 e multiplique por 200 (ou multiplique diretamente por 0,20). Faça o mesmo para cada ingrediente fracionado da receita!' },
      { q: 'As embalagens descartáveis devem entrar no custo da receita?', a: 'Sim! Potes, tampas, fitas, etiquetas e sacolas somam frequentemente de R$ 1,00 a R$ 3,50 por unidade vendida — esquecê-los destrói o lucro.' },
      { q: 'Devo acrescentar um percentual para custos invisíveis como sal, óleo e gás?', a: 'Sim: muitos chefs acrescentam automaticamente 10% a 15% sobre a soma dos ingredientes principais para cobrir temperos básicos, gás de cozinha, água e energia elétrica do forno.' }
    ]
  },
  'evento-bebida': {
    domainConcept: 'Dimensionar o bar de festas de casamento, formaturas, bailes de debutante ou confraternizações corporativas exige cruzar o total de convidados adultos, a duração completa do evento e a intensidade do perfil de consumo do público (leve, moderado ou intenso). Esta calculadora estima simultaneamente a quantidade de latas de cerveja (350 ml), garrafas de destilados de 1 litro e quilos de gelo necessários para manter as bebidas trincando do início ao fim.',
    formulaText: 'Cerveja (latas 350 ml) = ceil(Convidados × Duração h × Perfil Consumo). Destilados (garrafas 1L) = ceil(Convidados × 0,1 × Duração / 4). Gelo (kg) = ceil(Convidados × 0,5).',
    whenToUse: 'Use ao fechar pedidos em distribuidoras de bebidas (frequentemente com sistema de consignação de caixas fechadas) para casamentos, festas universitárias e eventos sociais.',
    importantTips: 'Negocie sempre com a distribuidora de bebidas o fornecimento em consignação: assim você pode levar um pouco mais de gelo seco/bebida sem risco de faltar, devolvendo no dia seguinte os fardos fechados que não foram abertos.',
    sources: [
      { name: 'ABRASEL - Manual de Operação de Bares e Eventos', url: 'https://abrasel.com.br/' }
    ],
    extraFaqs: [
      { q: 'Se a festa tiver coquetéis de drinks com gin/vodka, o consumo de cerveja diminui?', a: 'Sim! Em festas com bar de drinks completos (caipirinhas, gin tônica e whisky), o consumo de cerveja costuma cair cerca de 25% a 35% — ajuste o Perfil de Consumo para mais leve.' },
      { q: 'Como escolher entre garrafa/lata ou barril de chope?', a: 'Para eventos acima de 40 adultos com perfil bebedor, chopeiras reduzem o volume de lixo e mantêm temperatura estável; 1 litro de chope equivale a quase 3 latas de 350 ml.' },
      { q: 'O gelo calculado serve tanto para gelar as bebidas quanto para os copos de drinks?', a: 'Os 0,5 kg por pessoa cobrem bem a refrigeração básica em caixas térmicas; para eventos com drinks gelados e clima acima de 30 °C, dobre para 1 kg por convidado separando gelo filtrado para consumo.' }
    ]
  },

  // ================= ENERGIA & SUSTENTABILIDADE (3) =================
  'energia-consumo': {
    domainConcept: 'Muitas famílias levam sustos na conta de luz no verão ou no inverno sem identificar exatamente qual eletrodoméstico puxou o consumo em quilowatts-hora (kWh). Como as etiquetas dos fabricantes informam a potência em Watts (W), esta calculadora converte automaticamente a potência, as horas médias diárias e os dias de uso no mês para kWh mensais consumidos e o impacto exato em reais na fatura elétrica.',
    formulaText: 'Consumo (kWh/mês) = (Potência em Watts × Horas/Dia × Dias/Mês) / 1.000. Custo Mensal (R$) = Consumo em kWh × Tarifa Local (R$/kWh).',
    whenToUse: 'Use para descobrir quanto custam por mês na sua conta equipamentos como chuveiro elétrico, airfryer, forno elétrico, ar-condicionado, PC gamer, secadora de roupas ou bomba de piscina.',
    importantTips: 'Em aparelhos controlados por termostato (geladeira, freezer, ar-condicionado Inverter, ferro de passar), a resistência ou compressor não ficam na potência máxima durante 100% do tempo — considere o ciclo ativo real (~40% a 60% do tempo ligado).',
    sources: [
      { name: 'ANEEL - Cálculo de Consumo de Aparelhos Elétricos', url: 'https://www.gov.br/aneel/pt-br' }
    ],
    extraFaqs: [
      { q: 'Como transformar Watts em kWh rapidamente de cabeça?', a: 'Divida os Watts por 1.000 para achar quilowatts (kW) e multiplique pelas horas de funcionamento: um aquecedor de 1.500 W (1,5 kW) ligado por 2 horas consome exatos 3,0 kWh.' },
      { q: 'Por que a tarifa efetiva na minha conta costuma ser maior que a tarifa anunciada?', a: 'Porque distribuidoras informam primeiro a tarifa líquida sem tributos; na fatura total incidem ainda ICMS estadual, PIS/COFINS e eventuais acréscimos de bandeira amarela ou vermelha.' },
      { q: 'Airfryer e micro-ondas gastam mais que fogão a gás?', a: 'Apesar de terem potência alta (1.200W a 1.800W), ficam ligados por poucos minutos por dia (ex: 20 min), gerando impacto mensal bem menor que equipamentos ligados por horas como chuveiro e ar-condicionado.' }
    ]
  },
  'energia-solar': {
    domainConcept: 'Antes de contratar um projeto de energia solar fotovoltaica (geração distribuída no telhado), compreender quantos painéis solares serão necessários para suprir a média mensal de consumo em kWh da sua casa ou empresa ajuda a avaliar propostas comerciais com critério técnico. Cruzando o consumo médio em kWh/mês com a irradiação solar local em Horas de Sol Pleno (HSP) e aplicando a taxa padrão de eficiência do sistema (80%), a ferramenta determina a potência instalada ideal em kWp e o número de placas fotovoltaicas.',
    formulaText: 'Geração Diária Alvo (kWh/dia) = Consumo Mensal / 30. Potência do Sistema (kWp) = Geração Diária / (Irradiação HSP × 0,80). Quantidade de Painéis = ceil((kWp × 1.000) / Potência do Painel em W).',
    whenToUse: 'Use como dimensionamento preliminar antes de solicitar orçamentos de integradores solares e verificar se há espaço físico suficiente no seu telhado (~2,5 m² por módulo de 550W).',
    importantTips: 'Mesmo gerando 100% da sua energia, considere na análise financeira o pagamento da taxa mínima de disponibilidade da concessionária (30 kWh monofásico, 50 kWh bifásico ou 100 kWh trifásico) e a transição gradual do Fio B conforme a Lei nº 14.300/2022.',
    sources: [
      { name: 'ABSOLAR - Associação Brasileira de Energia Solar Fotovoltaica', url: 'https://www.absolar.org.br/' },
      { name: 'CRESESB / CEPEL - Atlas Brasileiro de Energia Solar (HSP)', url: 'https://cresesb.cepel.br/' }
    ],
    extraFaqs: [
      { q: 'Qual é a irradiação solar média (HSP) nas diferentes regiões do Brasil?', a: 'O Brasil possui excelente recurso solar: no Nordeste e partes do Centro-Oeste fica entre 5,2 e 6,0 HSP/dia; no Sudeste entre 4,6 e 5,2 HSP/dia; e no Sul entre 4,0 e 4,6 HSP/dia.' },
      { q: 'Quanto espaço no telhado ocupam 10 placas solares modernas de 550W?', a: 'Cada módulo de 550W mede aproximadamente 2,28 m × 1,13 m (~2,58 m²); logo 10 placas exigem cerca de 26 m² de telhado livre de sombras voltado preferencialmente para o Norte.' },
      { q: 'O sistema continua gerando energia se acabar a luz da rua?', a: 'Sistemas conectados à rede padrão (On-Grid) desligam automaticamente por norma de segurança anti-ilhamento quando cai a rede da rua; para operar sem rede elétrica exigem inversor híbrido com banco de baterias.' }
    ]
  },
  'energia-carbono': {
    domainConcept: 'Cada litro de combustível fóssil queimado no motor de combustão libera gases de efeito estufa — principalmente dióxido de carbono (CO₂) — diretamente na atmosfera. Medir a pegada de carbono anual do seu carro a gasolina a partir da quilometragem mensal e da autonomia média transforma dados abstratos ambientais em um indicador tangível: quantos quilos de CO₂ você emite por ano e quantas árvores seriam necessárias para compensar essa emissão ao longo do crescimento.',
    formulaText: 'Litros Queimados por Ano = (Km Mensais / Consumo km/L) × 12. Emissão Anual de CO₂ (kg) = Litros Anuais × Fator de Emissão (padrão Gasolina ≈ 2,28 kg CO₂/L). Árvores para Compensação = ceil(Emissão Anual / 15 kg CO₂/árvore/ano).',
    whenToUse: 'Use em projetos de educação ambiental, inventários pessoais ou corporativos de emissões (ESG), ou ao comparar o impacto ecológico de migrar para etanol, veículo híbrido ou carro elétrico.',
    importantTips: 'No Brasil, a gasolina vendida nos postos contém mistura obrigatória de etanol anidro (27% a 30%), o que reduz levemente o fator líquido da fração fóssil pura frente à gasolina pura internacional (~2,31 kg/L).',
    sources: [
      { name: 'GHG Protocol Brasil / MCTI - Fatores de Emissão', url: 'https://www.gov.br/mcti/pt-br' }
    ],
    extraFaqs: [
      { q: 'Por que a conta usa cerca de 15 kg de CO₂ absorvidos por árvore ao ano?', a: 'Essa referência conservadora reflete a taxa média anual líquida de sequestro de carbono durante a fase de crescimento ativo de árvores nativas em projetos de reflorestamento ao longo dos primeiros 15–20 anos.' },
      { q: 'Como muda a emissão se eu rodar com diesel em vez de gasolina?', a: 'O óleo diesel emite cerca de 2,60 a 2,68 kg de CO₂ por litro queimado (maior densidade energética por litro), embora caminhões e utilitários transportem cargas maiores.' },
      { q: 'Manter o carro revisado e calibrado reduz a pegada de carbono?', a: 'Sim! Menor consumo de combustível por quilômetro reduz proporcionalmente na mesma taxa as emissões totais anuais de gases de efeito estufa.' }
    ]
  },

  // ================= EDUCAÇÃO & ENEM (4) =================
  'edu-sisu': {
    domainConcept: 'No Sistema de Seleção Unificada (SISU), utilizar a média aritmética simples das notas do ENEM pode gerar falsas expectativas: a maioria das universidades federais e estaduais atribui pesos específicos (1, 2, 3, 4 ou 5) às áreas mais relacionadas ao curso pretendido. Esta ferramenta rápida permite comparar instantaneamente sua pontuação com foco nas três provas de maior impacto estratégico em cursos de exatas, biológicas e humanas (Redação, Matemática e Ciências da Natureza) multiplicadas pelos pesos do edital.',
    formulaText: 'Média Ponderada SISU = [(Nota Redação × Peso Redação) + (Nota Matemática × Peso Matemática) + (Nota Natureza × Peso Natureza)] / (Peso Redação + Peso Matemática + Peso Natureza).',
    whenToUse: 'Use para simulações rápidas de cálculo durante a preparação para o ENEM e testes velozes de impacto de aumento de nota em Matemática e Redação.',
    importantTips: 'Para simular simultaneamente todas as 5 áreas completas do ENEM (incluindo Ciências Humanas e Linguagens) com média simples e ponderada lado a lado, utilize também o Simulador de Nota ENEM para SiSU completo.',
    sources: [
      { name: 'MEC - Portal Único de Acesso (SISU)', url: 'https://acessounico.mec.gov.br/sisu' }
    ],
    extraFaqs: [
      { q: 'Por que investir tempo em Redação e Matemática costuma subir mais rápido a média no ENEM?', a: 'Porque a Redação permite alcançar notas entre 900 e 1.000 pontos com método estruturado e Matemática é a única prova objetiva que pela Teoria de Resposta ao Item (TRI) ultrapassa facilmente 850–950 pontos.' },
      { q: 'Os pesos mudam entre ampla concorrência e cotas (L1 a L14)?', a: 'Não! Os pesos das provas definidos pela universidade para determinado curso são idênticos para todas as modalidades de concorrência; o que muda entre ampla e cotas é a nota de corte final.' },
      { q: 'Onde consulto os pesos exatos de cada universidade?', a: 'No Termo de Adesão oficial publicado por cada universidade federal/estadual no portal do SISU semanas antes da abertura das inscrições.' }
    ]
  },
  'edu-ponderada': {
    domainConcept: 'Ao final de todo semestre na faculdade ou bimestre no ensino médio, surge a pergunta clássica entre os estudantes: "Quanto eu preciso tirar exatamente na última prova (AV2 ou Final) para fechar com a média 7,0 sem ficar em recuperação?". Em vez de chutar notas por tentativa e erro, esta calculadora isola algebricamente a nota exata necessária na próxima avaliação de acordo com os pesos de cada etapa.',
    formulaText: 'Isolando N2 na média ponderada [(N1 × P1 + N2 × P2) / (P1 + P2)] = Média Alvo: Nota Necessária = [Média Alvo × (P1 + P2) - (N1 × P1)] / P2.',
    whenToUse: 'Use logo após receber a nota da primeira prova do semestre (AV1) para planejar o esforço de estudo necessário na reta final das provas.',
    importantTips: 'Se o resultado exigir uma nota acima de 10,00 (nota máxima da prova), significa que matematicamente não é mais possível atingir a média direta apenas com a AV2 — indicando necessidade de se preparar antecipadamente para a prova substitutiva ou exame final.',
    sources: [
      { name: 'MEC - Sistema de Avaliação Acadêmica', url: 'https://www.gov.br/mec/pt-br' }
    ],
    extraFaqs: [
      { q: 'E se a faculdade tiver média simples (pesos iguais) entre P1 e P2?', a: 'Basta preencher Peso 1 = 1 e Peso 2 = 1 (ou qualquer par de pesos iguais, como 5 e 5) para descobrir na hora quanto precisa na segunda prova.' },
      { q: 'O resultado pode dar um número negativo (ex: -1,5)?', a: 'Sim! Isso é uma excelente notícia: significa que sua nota anterior foi tão alta que você já garantiu a média necessária mesmo antes de fazer a segunda prova (respeitada a frequência mínima de 75% e eventual nota mínima exigida em regimento).' },
      { q: 'Qual é a frequência mínima obrigatória exigida pelo MEC para não reprovar por falta?', a: 'Pela Lei de Diretrizes e Bases da Educação (LDB), o aluno precisa cumprir no mínimo 75% de frequência às aulas para aprovação.' }
    ]
  },
  'edu-leitura': {
    domainConcept: 'Organizar um cronograma realista de estudos para concursos, OAB, vestibulares ou entrega de revisão bibliográfica de TCC fracassa quando o estudante planeja ler 120 páginas em uma tarde sem calcular o tempo real exigido pelo cérebro humano. Multiplicando o número de páginas ou questões pela densidade média de palavras e dividindo pela sua velocidade pessoal de leitura em palavras por minuto (WPM), você programa blocos de estudo alcançáveis sem frustração.',
    formulaText: 'Tempo Estimado (minutos) = (Quantidade de Páginas × Palavras por Página) / Velocidade de Leitura (WPM). Tempo em Horas = Minutos / 60.',
    whenToUse: 'Use ao montar planilhas de ciclos de estudo semanais, definir quantos dias antes da prova começar a ler o livro literário obrigatório ou estimar o tempo de leitura de editais.',
    importantTips: 'Para leituras leves de romances ou crônicas, 200 a 250 WPM é confortável; já para apostilas jurídicas, textos de física/química ou artigos acadêmicos em que você faz marcações e resumos, ajuste para 100 a 140 WPM.',
    sources: [
      { name: 'CAPES / MEC - Metodologia de Leitura e Estudos Acadêmicos', url: 'https://www.gov.br/capes/pt-br' }
    ],
    extraFaqs: [
      { q: 'Quantas palavras existem em média em uma página de livro ou PDF A4?', a: 'Livros de bolso costumam ter 250 a 300 palavras por página; arquivos PDF acadêmicos A4 com margens estreitas e letra tamanho 11–12 podem chegar a 450–550 palavras por página.' },
      { q: 'Ler mais rápido prejudica a compreensão do conteúdo?', a: 'Leitura dinâmica superficial reduz a retenção em textos técnicos complexos; o ideal nos estudos é manter ritmo focado com pausas Pomodoro (ex: 50 min de leitura + 10 min de revisão ativa).' },
      { q: 'Posso usar a ferramenta para calcular duração de textos em apresentações faladas?', a: 'Sim! Para discursos falados em ritmo pausado e claro, informe a velocidade de fala em torno de 130 WPM e coloque quantidade de páginas = 1 com o total de palavras no segundo campo.' }
    ]
  },
  'simulador-nota-enem': {
    title: 'Simulador de Nota ENEM 2026 para o SISU (5 Áreas com Pesos) | Brasil Calculadoras',
    description: 'Calcule sua média ponderada completa do ENEM (Natureza, Humanas, Linguagens, Matemática e Redação) com os pesos do SISU e compare com sua média simples.',
    domainConcept: 'Ao abrir a consulta ao Boletim Individual do ENEM no INEP, o candidato recebe cinco pontuações distintas (Ciências da Natureza, Ciências Humanas, Linguagens e Códigos, Matemática e Redação), mas o sistema não exibe automaticamente uma nota única porque cada curso e universidade do SISU aplica pesos próprios. Nosso simulador completo processa todas as cinco áreas com pesos personalizáveis de 1 a 5, exibe a média ponderada exata para a nota de corte, compara com a média simples sem pesos e destaca automaticamente qual foi sua área mais forte.',
    formulaText: 'Média Ponderada = [(CN × pCN) + (CH × pCH) + (LC × pLC) + (MT × pMT) + (Red × pRed)] / (pCN + pCH + pLC + pMT + pRed). Média Simples = (CN + CH + LC + MT + Red) / 5.',
    whenToUse: 'Use no simulado preparatório ou na semana oficial de inscrições do SISU, ProUni e FIES para testar dezenas de combinações de faculdades onde os pesos favorecem suas maiores notas.',
    importantTips: 'No ProUni e no FIES utiliza-se a média aritmética simples das 5 notas (deixe todos os pesos iguais a 1); já no SISU verifique sempre além dos pesos se a universidade exige nota mínima eliminatória em alguma prova específica.',
    sources: [
      { name: 'INEP - Portal ENEM e TRI (Teoria de Resposta ao Item)', url: 'https://www.gov.br/inep/pt-br' },
      { name: 'MEC - Portal SISU e ProUni', url: 'https://acessounico.mec.gov.br/' }
    ],
    extraFaqs: [
      { q: 'Por que duas pessoas com o mesmo número de acertos no ENEM tiram notas diferentes?', a: 'Por causa da TRI (Teoria de Resposta ao Item): o algoritmo avalia a coerência pedagógica dos acertos — quem acerta as questões fáceis e médias e erra apenas as difíceis recebe nota maior do que quem acerta difíceis ao acaso errando as fáceis.' },
      { q: 'A nota da Redação do ENEM entra também no cálculo do ProUni e FIES?', a: 'Sim, nos dois programas exige-se média simples das cinco notas igual ou superior a 450 pontos e nota maior que zero na Redação.' },
      { q: 'Se minha média ponderada ficar acima da média simples, é bom sinal?', a: 'Sim! Isso significa que o curso escolhido valoriza com pesos maiores justamente as áreas em que você teve seu melhor desempenho.' }
    ]
  },

  // ================= QUÍMICA & FÍSICA (3) =================
  'velocidade-media': {
    title: 'Calculadora de Velocidade Média, Distância e Tempo (Física) | Brasil Calculadoras',
    description: 'Calcule automaticamente a velocidade média (km/h), a distância percorrida (km) ou o tempo de trajeto (horas) pela fórmula do Movimento Uniforme.',
    domainConcept: 'O conceito de Velocidade Média escalar inaugura o estudo da Cinemática na Física clássica e possui aplicação imediata no planejamento de transportes, corrida de rua, aviação e engenharia de tráfego. Ela mede a razão entre o deslocamento total percorrido por um corpo e o intervalo de tempo total gasto nesse percurso. Como essa calculadora é tridirecional, você pode escolher calcular a velocidade média, isolar a distância percorrida ou descobrir exatamente o tempo gasto a partir das outras duas grandezas.',
    formulaText: 'Da equação fundamental V_m = Δs / Δt derivam-se os três modos da ferramenta: Velocidade = Distância / Tempo; Distância = Velocidade × Tempo; Tempo = Distância / Velocidade.',
    whenToUse: 'Use para resolver exercícios escolares de Movimento Uniforme (MU), calcular o ritmo médio em provas de ciclismo ou corrida, ou estimar deslocamentos logísticos.',
    importantTips: 'A velocidade média global inclui eventuais paradas no meio do caminho! Se um ônibus viaja a 100 km/h durante 1 hora, para 1 hora no restaurante e viaja mais 1 hora a 100 km/h, percorreu 200 km em 3 horas totais — logo sua velocidade média real foi de 66,67 km/h.',
    sources: [
      { name: 'Sociedade Brasileira de Física (SBF)', url: 'https://www.sbfisica.org.br/' }
    ],
    extraFaqs: [
      { q: 'Como converter a velocidade calculada de km/h para metros por segundo (m/s)?', a: 'Divida o valor em km/h por 3,6. Inversamente, para converter de m/s para km/h (unidade do Sistema Internacional para rodoviária), multiplique por 3,6.' },
      { q: 'Qual é a diferença entre velocidade média e velocidade instantânea?', a: 'A velocidade média mede a razão total ao longo de todo o percurso; a velocidade instantânea é aquela marcada pelo velocímetro do carro em um único segundo exato.' },
      { q: 'E se o tempo estiver em minutos em vez de horas inteiras?', a: 'Divida os minutos por 60 antes de inserir no campo Tempo em horas (por exemplo, 45 minutos = 0,75 horas).' }
    ]
  },
  'conversor-temperatura': {
    title: 'Conversor de Temperatura Online (Celsius, Fahrenheit e Kelvin) | Brasil Calculadoras',
    description: 'Converta qualquer temperatura instantaneamente entre graus Celsius (°C), graus Fahrenheit (°F) e escala absoluta Kelvin (K).',
    domainConcept: 'Enquanto o Brasil e quase todo o mundo utilizam a escala Celsius (°C, baseada nos pontos de congelamento 0 °C e ebulição 100 °C da água ao nível do mar), receitas americanas de forno, termostatos importados e previsões meteorológicas dos EUA adotam Fahrenheit (°F) — e toda a física, química e termodinâmica científica exigem temperaturas absolutas em Kelvin (K). Esta calculadora bidirecional realiza a conversão exata entre qualquer par dessas três escalas termométricas.',
    formulaText: 'Utilizando Celsius como pivô exato: °C = (°F - 32) / 1,8 = K - 273,15; °F = (°C × 1,8) + 32; K = °C + 273,15.',
    whenToUse: 'Use ao adaptar receitas estrangeiras de forno (ex: 350 °F ≈ 177 °C), conferir febre em termômetros americanos (98,6 °F = 37 °C) ou resolver leis dos gases em química e física.',
    importantTips: 'Na Lei Geral dos Gases Ideais (PV = nRT) e na termodinâmica, nunca substitua temperaturas em Celsius ou Fahrenheit diretamente: converta obrigatoriamente para Kelvin antes de multiplicar ou dividir!',
    sources: [
      { name: 'INMETRO / BIPM - Definição da Escala Kelvin e Celsius', url: 'https://www.bipm.org/' }
    ],
    extraFaqs: [
      { q: 'Por que não se diz "graus Kelvin", mas apenas "Kelvin"?', a: 'Por convenção do Sistema Internacional de Unidades (SI), Kelvin é uma unidade absoluta (como metro ou segundo) e escreve-se simplesmente 300 K sem o símbolo de grau (°).' },
      { q: 'Existe alguma temperatura em que o valor numérico em Celsius e Fahrenheit é exatamente igual?', a: 'Sim! A exatos -40 graus, tanto a escala Celsius quanto a escala Fahrenheit marcam exatamente -40 (-40 °C = -40 °F).' },
      { q: 'Qual é o zero absoluto na escala Celsius?', a: 'O zero absoluto (0 K), menor temperatura teórica possível onde cessa a agitação térmica molecular, corresponde exatamente a -273,15 °C.' }
    ]
  },
  'calculadora-densidade': {
    title: 'Calculadora de Densidade Absoluta, Massa e Volume | Brasil Calculadoras',
    description: 'Calcule a densidade absoluta (g/cm³), a massa (g) ou o volume (cm³/ml) de líquidos e sólidos usando a relação fundamental da física e química.',
    domainConcept: 'A densidade absoluta (ou massa específica, no caso de substâncias puras homogêneas) é uma propriedade física intensiva fundamental que revela quanta matéria está concentrada dentro de determinado espaço tridimensional. É graças à densidade que sabemos por que um bloco pequeno de chumbo (11,3 g/cm³) pesa muito mais que um bloco grande de isopor, por que o óleo de cozinha flutua sobre a água e como verificar a pureza de metais preciosos ou a graduação alcoólica de combustíveis.',
    formulaText: 'Pela relação d = m / V, nos três modos do seletor calcula-se: Densidade (g/cm³) = Massa (g) / Volume (cm³); Massa (g) = Densidade × Volume; Volume (cm³) = Massa / Densidade.',
    whenToUse: 'Use em aulas e relatórios de laboratório de química e física, dimensionamento de peso de peças na engenharia mecânica e conversão entre litros/ml e quilogramas de ingredientes ou líquidos industriais.',
    importantTips: 'Lembre-se que 1 cm³ equivale exatamente a 1 mililitro (1 ml), e que 1 g/cm³ equivale exatamente a 1.000 kg/m³ no Sistema Internacional.',
    sources: [
      { name: 'IUPAC / Só Química - Propriedades Específicas da Matéria', url: 'https://iupac.org/' }
    ],
    extraFaqs: [
      { q: 'Um litro de óleo de soja ou gasolina pesa 1 quilograma como a água?', a: 'Não! A água pura tem densidade ~1,0 g/cm³ (1 L ≈ 1 kg); já o óleo vegetal (~0,92 g/cm³) pesa ~920 g por litro e a gasolina (~0,74 g/cm³) pesa cerca de 740 g por litro — por isso flutuam na água.' },
      { q: 'A temperatura altera a densidade de um material?', a: 'Sim. Na maioria das substâncias, aquecer dilata o volume mantendo a mesma massa, o que diminui levemente a densidade (exceção notável: a água atinge densidade máxima a 4 °C antes de congelar e expandir no gelo).' },
      { q: 'Como descobrir a massa de uma barra de ferro ou alumínio conhecendo suas dimensões?', a: 'Calcule o volume em cm³ (comprimento × largura × altura), escolha "Massa" na calculadora e multiplique pela densidade do material (Ferro ≈ 7,87 g/cm³; Alumínio ≈ 2,70 g/cm³).' }
    ]
  }
};
