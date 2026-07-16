import { CalcStatePayload } from '../App';

export const buildHistorySummary = (payload: CalcStatePayload) => {
  let summaryText = '';
  let inputsObj: any = {};
  let outputsObj: any = {};
  
  const { activeCalculator, activeCalcDef, compoundInterestResults, cltVsPjResults, profitMarginResults, healthResults, timeSheetResults, rule3Results, rescisaoCLTResults, decimoTerceiroResults, feriasCLTResults, horasExtrasResults, aposentadoriaINSSResults, dynamicCalcInputs, dynamicCalcOutputs, porcentagemSimplesResults, financiamentoVeiculoResults, adsenseEarningsResults } = payload;
    if (activeCalculator === 'juros-compostos' && compoundInterestResults) {
      summaryText = `Valor Final: R$ ${compoundInterestResults.finalAmount.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}. Lucro acumulado em juros de R$ ${compoundInterestResults.totalInterest.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}.`;
      inputsObj = { finalAmount: compoundInterestResults.finalAmount };
    } else if (activeCalculator === 'calculadora-ganhos-adsense' && adsenseEarningsResults) {
      summaryText = `Ganhos mensais estimados: R$ ${adsenseEarningsResults.monthlyEarnings.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}. Tráfego: ${adsenseEarningsResults.visitors.toLocaleString('pt-BR')} visitantes/mês.`;
      inputsObj = { category: adsenseEarningsResults.category, region: adsenseEarningsResults.region, visitors: adsenseEarningsResults.visitors, pagesPerVisit: adsenseEarningsResults.pagesPerVisit };
      outputsObj = { monthlyEarnings: adsenseEarningsResults.monthlyEarnings, annualEarnings: adsenseEarningsResults.annualEarnings, rpm: adsenseEarningsResults.rpm };
    } else if (activeCalculator === 'clt-pj' && cltVsPjResults) {
      summaryText = `Melhor opção: ${cltVsPjResults.isPjBetter ? 'PJ' : 'CLT'}. Diferença mensal de R$ ${cltVsPjResults.difference.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}.`;
    } else if (activeCalculator === 'margem-lucro' && profitMarginResults) {
      summaryText = `Lucro Líquido: R$ ${profitMarginResults.netProfit.toFixed(2)} com margem líquida de ${profitMarginResults.netMargin.toFixed(1)}%.`;
    } else if (activeCalculator === 'imc' && healthResults) {
      summaryText = `IMC: ${healthResults.bmi.toFixed(1)} (${healthResults.bmiClass}). Gasto calórico sugerido: ${Math.round(healthResults.targetCalories)} kcal.`;
    } else if (activeCalculator === 'registro-horas' && timeSheetResults) {
      summaryText = `Faturamento de R$ ${timeSheetResults.totalAmount.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} para um acúmulo de ${timeSheetResults.totalHours.toFixed(2)}h de trabalho.`;
    } else if (activeCalculator === 'regra-tres' && rule3Results) {
      summaryText = `Resultado X: ${rule3Results.ruleOf3Result}.`;
    } else if (activeCalculator === 'contador-texto' && rule3Results) {
      summaryText = `Conteúdo com ${rule3Results.textLength} caracteres e ${rule3Results.textWords} palavras.`;
    } else if (activeCalculator === 'calculadora-de-rescisao-clt' && rescisaoCLTResults) {
      summaryText = `Rescisão estimada em R$ ${rescisaoCLTResults.netAmount.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} (${rescisaoCLTResults.reasonLabel}).`;
    } else if (activeCalculator === 'calculadora-de-decimo-terceiro' && decimoTerceiroResults) {
      summaryText = `13º salário líquido de R$ ${decimoTerceiroResults.netValue.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} (${decimoTerceiroResults.parcelLabel}).`;
    } else if (activeCalculator === 'calculadora-de-ferias-clt' && feriasCLTResults) {
      summaryText = `Férias líquidas de R$ ${feriasCLTResults.netVacationAmount.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} para ${feriasCLTResults.vacationDays} dias úteis.`;
    } else if (activeCalculator === 'calculadora-de-horas-extras' && horasExtrasResults) {
      summaryText = `Adicional bruto de horas extras de R$ ${horasExtrasResults.totalExtraAmount.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}.`;
    } else if (activeCalculator === 'simulador-de-aposentadoria-inss' && aposentadoriaINSSResults) {
      summaryText = aposentadoriaINSSResults.canRetireAtAll 
        ? 'Trabalhador elegível para se aposentar sob as regras de transição!'
        : `Faltam ${aposentadoriaINSSResults.yearsToMinAge} anos de idade para atingir o requisito mínimo previdenciário.`;
    } else if (activeCalculator === 'porcentagem-simples' && porcentagemSimplesResults) {
      summaryText = `Resultado: R$ ${porcentagemSimplesResults.resultado.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} (${porcentagemSimplesResults.operacao === 'calcular' ? 'Calcular' : porcentagemSimplesResults.operacao === 'adicionar' ? 'Somar' : 'Descontar'} ${porcentagemSimplesResults.percentual}% de R$ ${porcentagemSimplesResults.valor.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}).`;
      inputsObj = { valor: porcentagemSimplesResults.valor, percentual: porcentagemSimplesResults.percentual, operacao: porcentagemSimplesResults.operacao };
      outputsObj = { resultado: porcentagemSimplesResults.resultado };
    } else if (activeCalculator === 'financiamento-veiculo' && financiamentoVeiculoResults) {
      summaryText = `Prestação: R$ ${financiamentoVeiculoResults.valor_parcela.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}/mês em ${financiamentoVeiculoResults.parcelas}x. Total juros: R$ ${financiamentoVeiculoResults.juros_totais.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}.`;
      inputsObj = { valor_veiculo: financiamentoVeiculoResults.valor_veiculo, entrada: financiamentoVeiculoResults.entrada, taxa_mensal: financiamentoVeiculoResults.taxa_mensal, parcelas: financiamentoVeiculoResults.parcelas };
      outputsObj = { valor_parcela: financiamentoVeiculoResults.valor_parcela, total_pago: financiamentoVeiculoResults.total_pago, juros_totais: financiamentoVeiculoResults.juros_totais };
    } else if (activeCalcDef?.isDynamic && dynamicCalcOutputs) {
      const primaryOut = activeCalcDef.outputs?.find(out => out.isPrimary) || activeCalcDef.outputs?.[0];
      const val = dynamicCalcOutputs[primaryOut?.id || ''];
      const displayVal = typeof val === 'number' 
        ? `${primaryOut?.prefix || ''}${val.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}${primaryOut?.suffix || ''}`
        : val || '0,00';
      summaryText = `Cálculo de ${activeCalcDef.name}: ${primaryOut?.label || 'Resultado'} em ${displayVal}.`;
      inputsObj = dynamicCalcInputs;
      outputsObj = dynamicCalcOutputs;
    }

  return { summaryText, inputsObj, outputsObj };
};
