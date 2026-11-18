import { CalculatorDef, DynamicInputDef, DynamicOutputDef } from '../types';
import { CATEGORY_SEO_DATABASE, CategoryHubSeoContent } from '../data/seo/categoryHubsData';
import { FINANCAS_TRABALHISTA_SEO } from '../data/seo/financasTrabalhistaData';
import { IMOBILIARIO_VEICULOS_SAUDE_SEO } from '../data/seo/imobiliarioVeiculosSaudeData';
import { EXATAS_TECH_UTIL_SEO } from '../data/seo/exatasTechUtilData';
import { CalcSeoDetail } from '../data/seo/types';

export type { CategoryHubSeoContent };

export interface CalculatorSeoContent {
  title: string;
  description: string;
  whatIs: string;
  stepByStep: string[];
  howItWorks: string;
  practicalExample: string;
  whenToUse: string;
  importantTips: string;
  methodologyNote: string;
  sources: { name: string; url: string }[];
  lastUpdated: string;
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
  'educacao-enem': 'educacao',
  'quimica-fizica-ciencia': 'quimica_fisica',
  'quimica-fisica-ciencia': 'quimica_fisica',
  'tecnologia-computacao': 'tecnologia',
  'pets-animais': 'pets',
  'datas-planejamento': 'datas',
  'maternidade-bebe': 'maternidade'
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
  educacao: 'educacao-enem',
  quimica_fisica: 'quimica-fisica-ciencia',
  tecnologia: 'tecnologia-computacao',
  pets: 'pets-animais',
  datas: 'datas-planejamento',
  maternidade: 'maternidade-bebe'
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
  educacao: 'Educação & ENEM',
  quimica_fisica: 'Química & Física',
  tecnologia: 'Tecnologia & Computação',
  pets: 'Pets & Animais',
  datas: 'Datas & Planejamento',
  maternidade: 'Maternidade & Bebê'
};

const ALL_CALC_SEO_DETAILS: Record<string, CalcSeoDetail> = {
  ...FINANCAS_TRABALHISTA_SEO,
  ...IMOBILIARIO_VEICULOS_SAUDE_SEO,
  ...EXATAS_TECH_UTIL_SEO
};

const CORE_STEP_BY_STEP: Record<string, string[]> = {
  'juros-compostos': [
    'Informe no campo "Capital Inicial" o valor que você já possui disponível hoje para iniciar a aplicação (ou deixe zero caso comece apenas com depósitos mensais).',
    'Defina em "Aporte Mensal (Opcional)" a quantia recorrente que pretende investir todos os meses até o final do prazo.',
    'Preencha a "Taxa de Juros (%)" e selecione no seletor se a taxa informada é anual (ex: 10% ao ano) ou mensal (ex: 0,85% ao mês).',
    'Ajuste o "Período de Tempo" escolhendo entre meses ou anos de permanência e acompanhe instantaneamente a tabela e o gráfico de evolução entre capital investido e juros acumulados.',
    'Utilize os botões superiores de exportação para gerar relatório em PDF ou planilha CSV e comparar diferentes cenários de rentabilidade.'
  ],
  'clt-pj': [
    'Na coluna CLT, digite o "Salário Bruto CLT" ofertado na vaga antes de qualquer desconto de INSS ou Imposto de Renda.',
    'Preencha os benefícios adicionais livres de imposto: "Vale Alimentação / Refeição", "Plano de Saúde (Subsídio)" e "Outros Benefícios" mensais pagos pela empresa.',
    'Na coluna PJ, insira o "Faturamento Mensal PJ (Bruto)" proposto para emissão de nota fiscal e ajuste a "Alíquota de Imposto (%)" conforme seu enquadramento (ex: 6% no Anexo III do Simples Nacional ou guia fixa MEI).',
    'Informe os "Custos de Contabilidade" mensais obrigatórios da pessoa jurídica (em geral entre R$ 150 e R$ 350) e custos próprios de benefícios.',
    'Analise o veredito comparativo entre os valores líquidos mensais e anuais equivalentes — lembrando de observar provisões de férias e 13º já embutidas na equivalência.'
  ],
  'margem-lucro': [
    'Digite no campo "Preço de Custo (Produto/Serviço)" o custo direto unitário pago ao fornecedor ou o custo de produção da mercadoria.',
    'Informe o "Preço de Venda Final" praticado ou pretendido para a comercialização ao consumidor.',
    'Preencha em "Despesas e Impostos Variáveis (% sobre Venda)" a soma de todas as taxas percentuais incidentes sobre a nota fiscal, comissão de vendedores, taxa de cartão e comissão de marketplace.',
    'Observe nos cartões de resultado a Margem Bruta, o Lucro Líquido unitário em reais, a Margem Líquida percentual efetiva e o índice Markup multiplicador aplicado sobre o custo.',
    'Teste cenários reduzindo ou ajustando o preço de venda para descobrir qual é o preço mínimo de segurança antes de aplicar descontos promocionais.'
  ],
  'imc': [
    'Selecione o "Sexo Biológico" para calibrar corretamente a constante fisiológica da equação de Mifflin-St Jeor no cálculo do metabolismo.',
    'Preencha seu "Peso Atual (kg)", sua "Altura (cm)" exata e sua "Idade (Anos)" nos respectivos campos numéricos.',
    'Escolha seu "Nível de Atividade Diária" real (de sedentário a atleta muito ativo) para ajustar o fator multiplicador sobre a taxa basal.',
    'Selecione sua "Meta Pessoal de Fitness" (emagrecer com déficit moderado, manter o peso atual ou ganhar massa muscular em superávit).',
    'Leia o diagnóstico completo com seu IMC classificado pelas faixas da OMS, Taxa Metabólica Basal (TMB), meta calórica diária recomendada e estimativa diária de água.'
  ],
  'registro-horas': [
    'Defina no topo o "Valor Cobrado da Hora (Valor do Serviço)" em reais caso deseje apurar automaticamente o faturamento líquido das horas acumuladas.',
    'Selecione a "Data do Trabalho" e informe os horários exatos de "Hora Entrada" e "Hora Saída" no formato 24h (HH:MM).',
    'Preencha em "Tempo de Intervalo / Pausa (Minutos)" os minutos de almoço ou pausa não remunerada para que sejam descontados do turno.',
    'Adicione uma breve "Descrição das Atividades" e clique para lançar o turno na tabela acumulativa do timesheet (você pode somar quantos dias ou turnos quiser).',
    'Acompanhe o total exato em horas no formato HH:MM, horas decimais e valor financeiro total, podendo exportar o relatório em PDF ou CSV para enviar ao cliente.'
  ],
  'regra-tres': [
    'Escolha no topo o modo de operação: "Proporção Direta" (quando ambas as grandezas sobem juntas) ou "Proporção Inversa" (quando o aumento de uma reduz a outra).',
    'Na primeira linha de equivalência, preencha o valor conhecido inicial A e sua grandeza correspondente B.',
    'Na segunda linha, informe o novo valor conhecido C alinhado na mesma unidade e espécie da grandeza A.',
    'Leia imediatamente a incógnita X calculada com precisão decimal e verifique a montagem algébrica passo a passo exibida no resultado.',
    'Caso utilize o analisador textual na mesma suíte, alterne a aba ou navegue para confirmar contagens de caracteres e palavras.'
  ],
  'contador-texto': [
    'Cole ou digite diretamente o texto que deseja analisar dentro da caixa principal do editor de análise textual.',
    'Utilize os botões rápidos de formatação caso precise converter todo o texto para MAIÚSCULAS, minúsculas ou Formato Título (Capitalizado) com um clique.',
    'Verifique nos indicadores instantâneos a quantidade exata de Palavras, Caracteres Totais (com espaços), Caracteres sem Espaços e Parágrafos.',
    'Consulte o Tempo Estimado de Leitura (baseado em velocidade padrão de 200 palavras por minuto) para validar o ritmo de artigos, redações ou roteiros.',
    'Copie o texto já formatado ou salve a contagem da sessão no histórico local sem enviar seus textos para nenhum servidor.'
  ],
  'calculadora-de-rescisao-clt': [
    'Informe o "Salário Bruto Mensal" contratual do trabalhador sem descontos de INSS ou IRRF.',
    'Selecione o "Motivo da Rescisão" correspondente ao desligamento: Demissão sem justa causa, Pedido de demissão, Demissão com justa causa ou Acordo comum (Art. 484-A CLT).',
    'Preencha os "Dias Trabalhados no Mês" do desligamento para apurar o saldo de salário exato e os "Meses Trabalhados" totais ou proporcionais para 13º e férias.',
    'Defina a condição do "Aviso Prévio" (Trabalhado, Indenizado ou Não cumprido) e informe eventual saldo existente de férias vencidas e FGTS acumulado.',
    'Examine o demonstrativo discriminado verba por verba — separando proventos, descontos de INSS/IRRF apenas sobre parcelas tributáveis, multa de 40% (ou 20% no acordo) e valor líquido final a receber.'
  ],
  'calculadora-de-decimo-terceiro': [
    'Digite o "Salário Bruto de Referência" mensal (incluindo médias habituais de horas extras, adicionais ou comissões caso existam).',
    'Selecione quantos "Meses Trabalhados no Ano" completos ou com fração igual ou superior a 15 dias você acumulou no ano-calendário (de 1 a 12).',
    'Escolha em "Parcela a Calcular" se deseja simular a 1ª parcela (sem descontos), a 2ª parcela (com retenção integral de INSS/IRRF) ou a visão completa das duas parcelas.',
    'Informe o número de dependentes legais declarados para aplicar o abatimento oficial por dependente na base do Imposto de Renda da segunda parcela.',
    'Compare os valores brutos, deduções progressivas aplicadas e o valor líquido final depositado até 30 de novembro (1ª) e 20 de dezembro (2ª).'
  ],
  'calculadora-de-ferias-clt': [
    'Preencha o "Salário Bruto Mensal" atualizado do contrato de trabalho na CLT.',
    'Informe os "Meses Adquiridos (Período Aquisitivo)" ou a quantidade de dias de descanso planejados (padrão de 30 dias completos, ou fracionados entre 5 e 30 dias).',
    'Marque a opção de abono pecuniário caso deseje simular a venda de até 10 dias das férias (1/3 do período) e informe dependentes para o cálculo de IRRF.',
    'Verifique o detalhamento do salário de férias, do terço constitucional (+33,33%), do abono pecuniário isento de impostos e dos descontos progressivos de INSS e IRRF.',
    'Exporte o demonstrativo completo em PDF ou copie para o WhatsApp para conferir o recibo de pagamento até 2 dias antes do início das férias.'
  ],
  'calculadora-de-horas-extras': [
    'Informe seu "Salário Bruto Mensal" contratual registrado na carteira de trabalho ou holerite.',
    'Selecione no campo "Carga Horária Mensal (Dropdown)" o divisor contratual aplicável à sua jornada (220h para 44h semanais, 200h para 40h, 180h para 36h ou 150h para 30h).',
    'Digite em "Qtd de Horas Extras (50%)" o total de horas excedentes feitas em dias úteis de segunda a sábado e em "Qtd de Horas Extras (100%)" as horas feitas em domingos e feriados.',
    'Confira automaticamente o valor unitário da sua hora normal, da hora extra a 50% e a 100%, o adicional bruto das horas extras e o reflexo obrigatório no Descanso Semanal Remunerado (DSR).',
    'Salve no histórico ou gere o resumo em PDF para validar o lançamento no fechamento mensal da folha de pagamento.'
  ],
  'simulador-de-aposentadoria-inss': [
    'Selecione o "Gênero Biológico" (Feminino ou Masculino), pois as regras constitucionais de idade mínima, tempo mínimo de contribuição e pontuação diferem entre mulheres e homens.',
    'Informe sua "Idade Atual (Anos)" exata na data da simulação previdenciária.',
    'Preencha os "Anos de Contribuição Ativos" já recolhidos e constantes no extrato CNIS do INSS (incluindo vínculos CLT, carnês individuais e tempo averbado).',
    'Leia o diagnóstico automático de elegibilidade pelas regras vigentes pós-EC 103/2019: regra geral por idade mínima urbana e regra de transição por pontos (idade + contribuição).',
    'Acompanhe quantos anos restam estimados em cada critério e acesse o Meu INSS para confirmar os salários de contribuição e eventuais pendências no extrato.'
  ],
  'calculadora-ganhos-adsense': [
    'Selecione a "Categoria/Nicho do Site" para calibrar o valor médio de leilão pago pelos anunciantes (CPC e RPM típicos daquele setor editorial).',
    'Escolha a "Região dos Visitantes (Tráfego)" predominante (Brasil/América Latina, EUA/Canadá ou Europa) de acordo com seu Google Analytics.',
    'Informe seus "Visitantes Únicos Mensais" e a "Média de Páginas Visitadas (Páginas/Sessão)" para apurar o volume mensal de pageviews.',
    'Mantenha ativo "Auto-estimar CTR & CPC" ou personalize manualmente "CTR Estimado (%)", "CPC Médio (R$)" e "Densidade de Anúncios por Página".',
    'Analise as projeções de receita mensal, faturamento anual estimado e RPM de página para orientar suas metas de crescimento de tráfego orgânico.'
  ]
};

const CATEGORY_DEFAULT_SOURCES: Record<string, { name: string; url: string }[]> = {
  financas: [
    { name: 'Banco Central do Brasil (BACEN)', url: 'https://www.bcb.gov.br/' },
    { name: 'Comissão de Valores Mobiliários (CVM)', url: 'https://www.gov.br/cvm/pt-br' }
  ],
  profissoes: [
    { name: 'Ministério do Trabalho e Emprego (MTE)', url: 'https://www.gov.br/trabalho-e-emprego/pt-br' },
    { name: 'Consolidação das Leis do Trabalho (CLT)', url: 'https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm' }
  ],
  saude: [
    { name: 'Organização Mundial da Saúde (OMS)', url: 'https://www.who.int/' },
    { name: 'Ministério da Saúde do Brasil', url: 'https://www.gov.br/saude/pt-br' }
  ],
  matematica: [
    { name: 'Portal da Matemática OBMEP', url: 'https://portaldamatematica.obmep.org.br/' },
    { name: 'Sociedade Brasileira de Matemática (SBM)', url: 'https://www.sbm.org.br/' }
  ],
  imobiliario: [
    { name: 'Caixa Econômica Federal - Habitação', url: 'https://www.caixa.gov.br/' },
    { name: 'Índice FipeZAP / FIPE', url: 'https://www.fipe.org.br/' }
  ],
  veiculos: [
    { name: 'Tabela FIPE Oficial', url: 'https://veiculos.fipe.org.br/' },
    { name: 'SENATRAN - Trânsito e Veículos', url: 'https://www.gov.br/transportes/pt-br' }
  ],
  estatistica: [
    { name: 'IBGE - Estatística e Indicadores', url: 'https://www.ibge.gov.br/' },
    { name: 'Associação Brasileira de Estatística (ABE)', url: 'https://redeabe.org.br/' }
  ],
  juridico: [
    { name: 'Portal da Legislação - Planalto', url: 'https://www.planalto.gov.br/' },
    { name: 'Conselho Nacional de Justiça (CNJ)', url: 'https://www.cnj.jus.br/' }
  ],
  utilitarios: [
    { name: 'INMETRO - Pesos e Medidas', url: 'https://www.gov.br/inmetro/pt-br' }
  ],
  aposentadoria: [
    { name: 'Meu INSS - Previdência Social', url: 'https://meu.inss.gov.br/' },
    { name: 'Planalto - Reforma da Previdência (EC 103/2019)', url: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc103.htm' }
  ],
  agronegocio: [
    { name: 'Embrapa - Pesquisa Agropecuária', url: 'https://www.embrapa.br/' },
    { name: 'CONAB - Abastecimento Agrícola', url: 'https://www.conab.gov.br/' }
  ],
  logistica: [
    { name: 'ANTT - Transporte Rodoviário de Cargas', url: 'https://www.gov.br/antt/pt-br' }
  ],
  construcao: [
    { name: 'ABNT - Normas Técnicas Brasileiras', url: 'https://www.abnt.org.br/' },
    { name: 'SINAPI / Caixa - Índices de Construção', url: 'https://www.caixa.gov.br/' }
  ],
  eventos: [
    { name: 'ABRASEL - Gastronomia e Eventos', url: 'https://abrasel.com.br/' }
  ],
  energia: [
    { name: 'ANEEL - Agência Nacional de Energia Elétrica', url: 'https://www.gov.br/aneel/pt-br' },
    { name: 'ABSOLAR - Energia Solar Fotovoltaica', url: 'https://www.absolar.org.br/' }
  ],
  educacao: [
    { name: 'INEP - Exame Nacional do Ensino Médio', url: 'https://www.gov.br/inep/pt-br' },
    { name: 'MEC - Portal SISU', url: 'https://acessounico.mec.gov.br/sisu' }
  ],
  quimica_fisica: [
    { name: 'Sociedade Brasileira de Física (SBF)', url: 'https://www.sbfisica.org.br/' }
  ],
  tecnologia: [
    { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/' }
  ],
  pets: [
    { name: 'Conselho Federal de Medicina Veterinária (CFMV)', url: 'https://www.cfmv.gov.br/' }
  ],
  datas: [
    { name: 'Planalto - Lei de Feriados Nacionais', url: 'https://www.planalto.gov.br/ccivil_03/leis/l0662.htm' }
  ],
  maternidade: [
    { name: 'FEBRASGO - Obstetrícia', url: 'https://www.febrasgo.org.br/' },
    { name: 'Ministério da Saúde', url: 'https://www.gov.br/saude/pt-br' }
  ]
};

function formatOutputValue(val: any, out?: DynamicOutputDef): string {
  if (val === undefined || val === null || val === '') return '0,00';
  const pref = out?.prefix ? (out.prefix.endsWith(' ') ? out.prefix : `${out.prefix} `) : '';
  const suff = out?.suffix ? (out.suffix.startsWith(' ') || out.suffix === '%' ? out.suffix : ` ${out.suffix}`) : '';
  if (typeof val === 'number') {
    const formatted = Number.isInteger(val) && Math.abs(val) >= 1000 && !pref.includes('R$')
      ? val.toLocaleString('pt-BR')
      : val.toLocaleString('pt-BR', { minimumFractionDigits: Number.isInteger(val) && !pref.includes('R$') ? 0 : 2, maximumFractionDigits: 4 });
    return `${pref}${formatted}${suff}`.trim();
  }
  return `${pref}${String(val)}${suff}`.trim();
}

function formatInputValue(inp: DynamicInputDef, val: any): string {
  if (inp.type === 'select' && inp.options) {
    const found = inp.options.find(o => String(o.value) === String(val));
    if (found) return `"${found.label}"`;
  }
  const pref = inp.prefix ? `${inp.prefix} ` : '';
  const suff = inp.suffix ? (inp.suffix.startsWith('%') || inp.suffix.startsWith('/') ? inp.suffix : ` ${inp.suffix}`) : '';
  if (typeof val === 'number') {
    return `${pref}${val.toLocaleString('pt-BR', { maximumFractionDigits: 4 })}${suff}`.trim();
  }
  return `${pref}${String(val)}${suff}`.trim();
}

function buildDynamicStepByStep(calc: CalculatorDef): string[] {
  const inputs = calc.inputs || [];
  const outputs = calc.outputs || [];
  const steps: string[] = [];

  inputs.forEach((inp, idx) => {
    const numStep = idx + 1;
    if (inp.type === 'select' && inp.options && inp.options.length > 0) {
      const opts = inp.options.map(o => `"${o.label}"`).join(', ');
      const defOpt = inp.options.find(o => String(o.value) === String(inp.defaultValue))?.label || String(inp.defaultValue);
      steps.push(
        `Passo ${numStep} — Selecione "${inp.label}": escolha no menu suspenso a opção que representa seu cenário atual entre ${opts} (padrão inicial: "${defOpt}").`
      );
    } else if (inp.type === 'text') {
      steps.push(
        `Passo ${numStep} — Preencha "${inp.label}": digite a série ou dado correspondente seguindo o formato de exemplo "${inp.defaultValue}" para que o algoritmo interprete corretamente todos os termos.`
      );
    } else {
      const rangeHint = inp.min !== undefined && inp.max !== undefined
        ? ` (faixa aceita de ${inp.min} a ${inp.max})`
        : '';
      const valStr = formatInputValue(inp, inp.defaultValue);
      steps.push(
        `Passo ${numStep} — Informe "${inp.label}": digite o valor numérico desejado${rangeHint}; a ferramenta inicia preenchida com a referência ${valStr} para demonstração imediata.`
      );
    }
  });

  const primaryOut = outputs.find(o => o.isPrimary) || outputs[0];
  const secondaryOuts = outputs.filter(o => o.id !== primaryOut?.id);
  const nextStep = inputs.length + 1;

  if (primaryOut) {
    const secText = secondaryOuts.length > 0
      ? ` Abaixo do painel principal, consulte também os indicadores complementares (${secondaryOuts.map(o => `"${o.label}"`).join(', ')}) para ter visão completa da simulação.`
      : '';
    steps.push(
      `Passo ${nextStep} — Leia o resultado principal em "${primaryOut.label}": o cálculo é atualizado em tempo real conforme você altera qualquer campo no navegador, sem necessidade de recarregar a página.${secText}`
    );
  }

  steps.push(
    `Passo ${nextStep + 1} — Registre ou compartilhe os números: caso deseje guardar a simulação de ${calc.name}, utilize os botões de salvar no histórico local, copiar resumo formatado, enviar via WhatsApp ou exportar em PDF/CSV.`
  );

  return steps;
}

function buildAlternativeInputs(calc: CalculatorDef, baseInputs: Record<string, any>): { altInputs: Record<string, any>; changedDesc: string } {
  const altInputs = { ...baseInputs };
  const inputs = calc.inputs || [];
  const numericInp = inputs.find(i =>
    i.type === 'number' &&
    typeof baseInputs[i.id] === 'number' &&
    baseInputs[i.id] > 0 &&
    !i.id.startsWith('dia') &&
    !i.id.startsWith('mes1') &&
    !i.id.startsWith('ano1')
  ) || inputs.find(i => i.type === 'number' && typeof baseInputs[i.id] === 'number');

  if (numericInp) {
    const orig = Number(baseInputs[numericInp.id]) || 0;
    let nextVal = orig === 0 ? 10 : parseFloat((orig * 1.25).toFixed(2));
    if (numericInp.max !== undefined && nextVal > numericInp.max) {
      nextVal = Math.max(numericInp.min || 0, parseFloat((orig * 0.75).toFixed(2)));
    }
    if (Number.isInteger(orig) && numericInp.step === undefined) {
      nextVal = Math.round(nextVal);
      if (nextVal === orig) nextVal = orig + 1;
    }
    altInputs[numericInp.id] = nextVal;
    return {
      altInputs,
      changedDesc: `alterando "${numericInp.label}" de ${formatInputValue(numericInp, orig)} para ${formatInputValue(numericInp, nextVal)}`
    };
  }

  const selectInp = inputs.find(i => i.type === 'select' && i.options && i.options.length > 1);
  if (selectInp && selectInp.options) {
    const other = selectInp.options.find(o => String(o.value) !== String(baseInputs[selectInp.id])) || selectInp.options[0];
    altInputs[selectInp.id] = other.value;
    return {
      altInputs,
      changedDesc: `alterando "${selectInp.label}" para "${other.label}"`
    };
  }

  const textInp = inputs.find(i => i.type === 'text');
  if (textInp) {
    const nextText = `${String(baseInputs[textInp.id])}, 25`;
    altInputs[textInp.id] = nextText;
    return {
      altInputs,
      changedDesc: `adicionando o termo 25 em "${textInp.label}"`
    };
  }

  return { altInputs, changedDesc: 'ajustando os parâmetros principais' };
}

function buildDynamicPracticalExample(calc: CalculatorDef): string {
  const inputs = calc.inputs || [];
  const outputs = calc.outputs || [];
  if (!calc.calculate || inputs.length === 0 || outputs.length === 0) {
    return `Ao preencher os parâmetros de ${calc.name}, o sistema processa as equações da ferramenta localmente e entrega imediatamente os indicadores apurados para comparação de cenários.`;
  }

  const baseInputs: Record<string, any> = {};
  inputs.forEach(inp => {
    baseInputs[inp.id] = inp.defaultValue;
  });

  const baseOut = calc.calculate(baseInputs) || {};
  const primaryOut = outputs.find(o => o.isPrimary) || outputs[0];
  const secondaryOuts = outputs.filter(o => o.id !== primaryOut.id).slice(0, 3);

  const inputSummary = inputs
    .map(inp => `${inp.label}: ${formatInputValue(inp, baseInputs[inp.id])}`)
    .join('; ');

  const primaryStr = formatOutputValue(baseOut[primaryOut.id], primaryOut);
  const secondaryStr = secondaryOuts
    .map(o => `${o.label} = ${formatOutputValue(baseOut[o.id], o)}`)
    .join('; ');

  const { altInputs, changedDesc } = buildAlternativeInputs(calc, baseInputs);
  const altOut = calc.calculate(altInputs) || {};
  const altPrimaryStr = formatOutputValue(altOut[primaryOut.id], primaryOut);

  let sensitivitySentence = `Em uma segunda simulação comparativa (${changedDesc} e mantendo os demais dados constantes), o resultado principal em "${primaryOut.label}" passa para ${altPrimaryStr}`;
  if (typeof baseOut[primaryOut.id] === 'number' && typeof altOut[primaryOut.id] === 'number') {
    const diff = altOut[primaryOut.id] - baseOut[primaryOut.id];
    const diffAbs = Math.abs(diff);
    const diffFormatted = formatOutputValue(parseFloat(diffAbs.toFixed(2)), primaryOut);
    if (diff !== 0) {
      sensitivitySentence += `, evidenciando uma diferença direta de ${diff > 0 ? '+' : '-'}${diffFormatted} entre os dois cenários testados.`;
    } else {
      sensitivitySentence += `, confirmando a estabilidade da regra dentro da faixa analisada.`;
    }
  } else {
    sensitivitySentence += `, demonstrando como a alteração de uma única variável impacta o diagnóstico final.`;
  }

  return `Cenário de Referência: considerando os parâmetros padrão de entrada (${inputSummary}), o motor de cálculo de ${calc.name} apura como resultado principal "${primaryOut.label}" igual a ${primaryStr}${secondaryStr ? `, além dos seguintes indicadores complementares: ${secondaryStr}` : ''}. ${sensitivitySentence}`;
}

export const getCategoryHubContent = (categoryKey: string): CategoryHubSeoContent => {
  const existing = CATEGORY_SEO_DATABASE[categoryKey];
  if (existing) return existing;

  const label = CATEGORY_MAP_RAW[categoryKey] || categoryKey;
  return {
    title: `Calculadoras de ${label} Online | Brasil Calculadoras`,
    description: `Simuladores e calculadoras gratuitas de ${label} com fórmulas abertas, exemplos práticos e processamento local seguro.`,
    introduction: `A seção de ${label} do Brasil Calculadoras concentra simuladores dedicados para transformar equações técnicas e regras práticas dessa área em diagnósticos imediatos e acessíveis.`,
    importance: `Utilizar parâmetros validados em ${label} reduz erros manuais de estimativa e apoia decisões cotidianas e profissionais com maior previsibilidade.`,
    methodology: `Cada calculadora aplica diretamente as fórmulas de referência do segmento em ambiente local no navegador, sem coleta de dados pessoais.`,
    practicalApplications: [
      `Simular cenários comparativos rápidos em ${label} alterando variáveis em tempo real.`,
      `Gerar relatórios consolidados em PDF ou CSV para conferência documental.`,
      `Validar estimativas preliminares antes de contratar serviços ou assumir compromissos.`
    ],
    faq: [
      { q: `As calculadoras de ${label} são gratuitas?`, a: 'Sim, todas as ferramentas funcionam 100% online e gratuitamente sem necessidade de cadastro.' },
      { q: 'Os dados digitados ficam armazenados no servidor?', a: 'Não. Todo cálculo é executado localmente na memória do seu navegador.' }
    ]
  };
};

export const getSeoContentForCalculator = (calc: CalculatorDef): CalculatorSeoContent => {
  const detail = ALL_CALC_SEO_DETAILS[calc.id];
  const catLabel = CATEGORY_MAP_RAW[calc.category] || calc.category;
  const inputs = calc.inputs || [];
  const outputs = calc.outputs || [];

  const inputListText = inputs.length > 0
    ? inputs.map(i => i.label).join(', ')
    : 'parâmetros específicos inseridos no painel interativo';
  const outputListText = outputs.length > 0
    ? outputs.map(o => o.label).join(', ')
    : 'indicadores consolidados e demonstrativos de resultado';

  const whatIs = detail
    ? `${detail.domainConcept} Integrada à área de ${catLabel} do Brasil Calculadoras, a ferramenta "${calc.name}" (${calc.description.replace(/\.$/, '')}) processa entradas estruturadas (${inputListText}) para calcular automaticamente ${outputListText} diretamente no navegador, sem cadastro e com total privacidade.`
    : `${calc.name}: ${calc.description} Ferramenta gratuita da categoria ${catLabel} que processa ${inputListText} para gerar ${outputListText} localmente no navegador.`;

  const stepByStep = CORE_STEP_BY_STEP[calc.id]
    ? CORE_STEP_BY_STEP[calc.id]
    : buildDynamicStepByStep(calc);

  const howItWorks = detail
    ? `${detail.formulaText} Em termos operacionais, o algoritmo lê em tempo real as entradas informadas (${inputListText}), aplica validações numéricas de consistência e calcula simultaneamente todos os indicadores de saída (${outputListText}) com precisão decimal padrão para conferência imediata.`
    : `O algoritmo processa os valores inseridos em ${inputListText} aplicando equações padronizadas para devolver ${outputListText}.`;

  const practicalExample = detail?.workedExample
    ? detail.workedExample
    : buildDynamicPracticalExample(calc);

  const whenToUse = detail?.whenToUse
    || `Utilize a calculadora ${calc.name} sempre que precisar simular cenários reais ou validar números ligados a ${catLabel}.`;

  const importantTips = detail?.importantTips
    || `Confira cuidadosamente as unidades de medida de cada campo antes de exportar os resultados e valide casos específicos com profissional habilitado.`;

  const methodologyNote = `Metodologia e Limite Educativo: a simulação de ${calc.name} utiliza processamento 100% client-side com fórmulas matemáticas e parâmetros vigentes em 2026 para fins educativos e de planejamento preliminar, não substituindo laudos técnicos, contábeis, jurídicos ou médicos oficiais.`;

  const sources = detail?.sources && detail.sources.length > 0
    ? detail.sources
    : (CATEGORY_DEFAULT_SOURCES[calc.category] || []);

  // Merge catalog FAQs + bespoke extraFaqs without duplicates, guaranteeing >= 5 FAQs
  const combinedFaq: { q: string; a: string }[] = [];
  const seenQuestions = new Set<string>();

  const pushFaq = (q?: string, a?: string) => {
    const cleanQ = (q || '').trim();
    const cleanA = (a || '').trim();
    if (!cleanQ || !cleanA) return;
    const key = cleanQ.toLowerCase();
    if (seenQuestions.has(key)) return;
    seenQuestions.add(key);
    combinedFaq.push({ q: cleanQ, a: cleanA });
  };

  (calc.faq || []).forEach(f => pushFaq(f.question || (f as any).q, f.answer || (f as any).a));
  (detail?.extraFaqs || []).forEach(f => pushFaq(f.q, f.a));

  // Ensure at least 5 real tool-specific FAQs if a core tool has fewer than 5
  if (combinedFaq.length < 5) {
    const primaryOutLabel = (outputs.find(o => o.isPrimary) || outputs[0])?.label || 'resultado principal';
    pushFaq(
      `Como posso salvar ou exportar a simulação feita em "${calc.name}"?`,
      `Logo abaixo ou acima do painel de resultados de ${calc.name}, você pode salvar a operação no histórico local do navegador, copiar o texto formatado, enviar pelo WhatsApp ou exportar o demonstrativo completo em PDF e CSV/Excel sem custo.`
    );
    if (combinedFaq.length < 5) {
      pushFaq(
        `Quais variáveis mais influenciam o cálculo de "${primaryOutLabel}" nesta ferramenta?`,
        `O valor final de "${primaryOutLabel}" responde diretamente às variações inseridas nos campos de entrada (${inputListText}). Recomendamos alterar um parâmetro por vez em +10% ou +25% para observar a sensibilidade do resultado antes de decidir.`
      );
    }
  }

  return {
    title: detail?.title || `${calc.name} Online Grátis 2026 | Brasil Calculadoras`,
    description: detail?.description || calc.description,
    whatIs,
    stepByStep,
    howItWorks,
    practicalExample,
    whenToUse,
    importantTips,
    methodologyNote,
    sources,
    lastUpdated: 'Novembro de 2026',
    faq: combinedFaq.slice(0, 6)
  };
};
