import { CalcStatePayload } from '../App';

export const handleExportCSV = (payload: CalcStatePayload) => {
  const { activeCalculator, activeCalcDef, compoundInterestResults, cltVsPjResults, profitMarginResults, healthResults, timeSheetResults, rescisaoCLTResults, decimoTerceiroResults, feriasCLTResults, horasExtrasResults, aposentadoriaINSSResults, dynamicCalcInputs, dynamicCalcOutputs } = payload;
    let csvContent = '\uFEFF'; // UTF-8 BOM indicator for perfect Excel formatting in Portuguese
    let filename = 'relatorio-central.csv';

    const title = activeCalcDef ? activeCalcDef.name : 'Simulacao';
    
    csvContent += `Só Calculadoras & Ferramentas;Relatorio Emitido em;${new Date().toLocaleDateString('pt-BR')}\n`;
    csvContent += `Ferramenta Selecionada;${title};Status da Sessao;Ativo\n\n`;

    if (activeCalculator === 'juros-compostos' && compoundInterestResults) {
      filename = 'juros-compostos-calculadora.csv';
      csvContent += `RESULTADO DA SIMULAÇÃO FINANCEIRA DE JUROS COMPOSTOS\n`;
      csvContent += `Montante Final Estimado;R$ ${compoundInterestResults.finalAmount.toFixed(2)}\n`;
      csvContent += `Total Investido em Capital;R$ ${compoundInterestResults.totalInvested.toFixed(2)}\n`;
      csvContent += `Total Rendido em Juros;R$ ${compoundInterestResults.totalInterest.toFixed(2)}\n\n`;
      
      // Schedule Table
      csvContent += `Periodo;Total Investido;Juros do Mes;Juros Acumulados;Saldo Final\n`;
      compoundInterestResults.data.forEach((row: any) => {
        csvContent += `${row.month === 0 ? 'Inicio' : 'Mes ' + row.month};${row.totalInvested};${row.interestEarned};${row.totalInterest};${row.balance}\n`;
      });
    } 
    else if (activeCalculator === 'clt-pj' && cltVsPjResults) {
      filename = 'comparativo-clt-pj.csv';
      csvContent += `RESULTADO COMPARATIVO DE CONTRATO DO TRABALHO\n`;
      csvContent += `Opcao Financeiramente Recomendada;${cltVsPjResults.isPjBetter ? 'Pessoa Juridica (PJ)' : 'Trabalhador CLT'}\n`;
      csvContent += `Diferenca Liquida Mensal;R$ ${cltVsPjResults.difference.toFixed(2)}\n`;
      csvContent += `Valor de Projecao CLT Real Integrado;R$ ${cltVsPjResults.cltNet?.toFixed(2) || 'Consultar'}\n`;
      csvContent += `Valor de Projecao PJ Real Liquido;R$ ${cltVsPjResults.pjNet?.toFixed(2) || 'Consultar'}\n\n`;
      csvContent += `Resumo informativo adicional;"${cltVsPjResults.comparisonString}"\n`;
    } 
    else if (activeCalculator === 'margem-lucro' && profitMarginResults) {
      filename = 'markup-lucratividade-margens.csv';
      csvContent += `RESULTADO TRIBUTÁRIO DE PRECIFIÇÃO & MARKUP\n`;
      csvContent += `Margem Liquida do Canal;${profitMarginResults.netMargin.toFixed(2)}%\n`;
      csvContent += `Margem Bruta Praticada;${profitMarginResults.grossMargin.toFixed(2)}%\n`;
      csvContent += `Markup de Multiplicacao Aplicado;${(profitMarginResults.markup / 100 + 1).toFixed(2)}x\n`;
      csvContent += `Lucro Liquido Unitario Livre;R$ ${profitMarginResults.netProfit.toFixed(2)}\n`;
      csvContent += `Lucro de Custos Brutos;R$ ${profitMarginResults.grossProfit.toFixed(2)}\n\n`;
      csvContent += `Classificacao Comercial;"${profitMarginResults.comment}"\n`;
    } 
    else if (activeCalculator === 'imc' && healthResults) {
      filename = 'saude-metabolismo-imc.csv';
      csvContent += `RESULTADO DE DIAGNÓSTICO FÍSICO E NUTRIÇÃO\n`;
      csvContent += `Indice de Massa Corporal (IMC);${healthResults.bmi.toFixed(2)}\n`;
      csvContent += `Classificacao de Risco;${healthResults.bmiClass}\n`;
      csvContent += `Meta de Macronutrientes Nutricionais;${healthResults.targetCalories.toFixed(0)} kcal\n`;
      csvContent += `Consumo de Agua Diaria Recomendado;${(healthResults.waterNeeds / 1000).toFixed(2)} litros\n`;
    } 
    else if (activeCalculator === 'registro-horas' && timeSheetResults) {
      filename = 'folha-de-horas-trabalhadas.csv';
      csvContent += `FOLHA DE HORAS PRESTADAS E FATURAMENTO FREELANCE\n`;
      csvContent += `Prestador;Usuario Central;Valor Cobrado por Hora;R$ ${timeSheetResults.hourlyRate}/h\n`;
      csvContent += `Acumulo de Horas Liquidas de Producao;${timeSheetResults.totalHours.toFixed(2)}h\n`;
      csvContent += `Total Geral Faturado Reclamo;R$ ${timeSheetResults.totalAmount.toFixed(2)}\n\n`;
      
      // Records list
      csvContent += `Id;Data;Hora Inicio;Hora Fim;Intervalo Pause (min);Descriçao\n`;
      timeSheetResults.records.forEach((row: any) => {
        csvContent += `${row.id};${row.date};${row.start};${row.end};${row.pause};"${row.description}"\n`;
      });
    } 
    else if (activeCalculator === 'calculadora-de-rescisao-clt' && rescisaoCLTResults) {
      filename = 'rescisao-clt-detalhado.csv';
      csvContent += `CÁLCULO RESCISÓRIO CLT DETALHADO\n`;
      csvContent += `Motivo da Rescisao;${rescisaoCLTResults.reasonLabel}\n`;
      csvContent += `Meses Trabalhados;${rescisaoCLTResults.monthsOfWork}\n`;
      csvContent += `Valor Liquido a Receber em Conta;R$ ${rescisaoCLTResults.netAmount.toFixed(2)}\n`;
      csvContent += `Saldo de Salario;R$ ${rescisaoCLTResults.salaryBalance.toFixed(2)}\n`;
      csvContent += `Aviso Previo Indenizado;R$ ${rescisaoCLTResults.noticeAmount.toFixed(2)}\n`;
      csvContent += `13o Proporcional;R$ ${rescisaoCLTResults.proportionateThirteenth.toFixed(2)}\n`;
      csvContent += `Ferias Proporcionais;R$ ${rescisaoCLTResults.proportionateVacation.toFixed(2)}\n`;
      csvContent += `Terco de Ferias Proporcionais;R$ ${rescisaoCLTResults.proportionateVacationOneThird.toFixed(2)}\n`;
      csvContent += `Total de Proventos;R$ ${rescisaoCLTResults.totalEarnings.toFixed(2)}\n`;
      csvContent += `Total de Descontos;R$ ${rescisaoCLTResults.totalDeductions.toFixed(2)}\n`;
    }
    else if (activeCalculator === 'calculadora-de-decimo-terceiro' && decimoTerceiroResults) {
      filename = '13o-salario-simulacao.csv';
      csvContent += `SIMULAÇÃO DE 13º SALÁRIO\n`;
      csvContent += `Parcela de Referencia;${decimoTerceiroResults.parcelLabel}\n`;
      csvContent += `Valor Liquido Calculado;R$ ${decimoTerceiroResults.netValue.toFixed(2)}\n`;
      csvContent += `Valor Bruto Total;R$ ${decimoTerceiroResults.grossThirteenth.toFixed(2)}\n`;
      csvContent += `Desconto INSS;R$ ${decimoTerceiroResults.inssDeduction.toFixed(2)}\n`;
      csvContent += `Desconto IRRF;R$ ${decimoTerceiroResults.irrfDeduction.toFixed(2)}\n`;
    }
    else if (activeCalculator === 'calculadora-de-ferias-clt' && feriasCLTResults) {
      filename = 'ferias-clt-prevista.csv';
      csvContent += `CÁLCULO DE FÉRIAS CLT\n`;
      csvContent += `Dias a Gozar;${feriasCLTResults.daysToEnjoy}\n`;
      csvContent += `Dias Vendidos;${feriasCLTResults.daysToSell}\n`;
      csvContent += `Valor das Ferias;R$ ${feriasCLTResults.vacationValue.toFixed(2)}\n`;
      csvContent += `Terco Constitucional de Gozo;R$ ${feriasCLTResults.vacationOneThird.toFixed(2)}\n`;
      if (feriasCLTResults.daysToSell > 0) {
        csvContent += `Valor do Abono Pecuniario;R$ ${feriasCLTResults.abonoValue.toFixed(2)}\n`;
        csvContent += `Terco do Abono Pecuniario;R$ ${feriasCLTResults.abonoOneThird.toFixed(2)}\n`;
      }
      csvContent += `Desconto INSS;R$ ${feriasCLTResults.inssDeduction.toFixed(2)}\n`;
      csvContent += `Desconto IRRF;R$ ${feriasCLTResults.irrfDeduction.toFixed(2)}\n`;
      csvContent += `Valor Liquido a Receber;R$ ${feriasCLTResults.netVacationAmount.toFixed(2)}\n`;
    }
    else if (activeCalculator === 'calculadora-de-horas-extras' && horasExtrasResults) {
      filename = 'horas-extras-calculadas.csv';
      csvContent += `CÁLCULO DE HORAS EXTRAS TRABALHADAS\n`;
      csvContent += `Valor da Hora Comum;R$ ${horasExtrasResults.regularHourValue.toFixed(2)}\n`;
      csvContent += `Valor da Hora Extra 50%;R$ ${horasExtrasResults.extraHour50Value.toFixed(2)}\n`;
      csvContent += `Valor da Hora Extra 100%;R$ ${horasExtrasResults.extraHour100Value.toFixed(2)}\n`;
      csvContent += `Subtotal Extras 50%;R$ ${horasExtrasResults.total50Value.toFixed(2)}\n`;
      csvContent += `Subtotal Extras 100%;R$ ${horasExtrasResults.total100Value.toFixed(2)}\n`;
      csvContent += `Total de Adicional de Horas Extras;R$ ${horasExtrasResults.totalExtraAmount.toFixed(2)}\n`;
    }
    else if (activeCalculator === 'simulador-de-aposentadoria-inss' && aposentadoriaINSSResults) {
      filename = 'simulador-aposentadoria.csv';
      csvContent += `SIMULADOR DE APOSENTADORIA INSS\n`;
      csvContent += `Soma dos Pontos Atuais;${aposentadoriaINSSResults.currentPoints}\n`;
      csvContent += `Elegivel para Aposentadoria;${aposentadoriaINSSResults.canRetireAtAll ? 'SIM' : 'NAO'}\n`;
      csvContent += `Elegivel por Idade;${aposentadoriaINSSResults.canRetireByAge ? 'SIM' : 'NAO'}\n`;
      csvContent += `Elegivel por Pontos;${aposentadoriaINSSResults.canRetireByPoints ? 'SIM' : 'NAO'}\n`;
      csvContent += `Anos Restantes para Idade Minima;${aposentadoriaINSSResults.yearsToMinAge}\n`;
      csvContent += `Anos de Contribuicao Restantes para Pontos;${aposentadoriaINSSResults.yearsToContribution}\n`;
    }
    else if (activeCalcDef?.isDynamic) {
      filename = `${activeCalculator}-resultado.csv`;
      csvContent += `${activeCalcDef.name.toUpperCase()} - RESULTADO COMERCIAL\n\n`;
      csvContent += `PARAMETROS UTILIZADOS:\n`;
      activeCalcDef.inputs?.forEach(inp => {
        const val = dynamicCalcInputs[inp.id] !== undefined ? dynamicCalcInputs[inp.id] : inp.defaultValue;
        csvContent += `${inp.label};${val}${inp.suffix ? ' ' + inp.suffix : ''}\n`;
      });
      csvContent += `\nDEMONSTRATIVO DE RESULTADOS:\n`;
      activeCalcDef.outputs?.forEach(out => {
        const val = dynamicCalcOutputs[out.id];
        const displayVal = typeof val === 'number' ? `R$ ${val.toFixed(2)}` : val || '0,00';
        csvContent += `${out.label};${displayVal}\n`;
      });
    }
    else {
      // Default fallback rule/text
      filename = 'calculadora-resultado-simples.csv';
      csvContent += `OPERACAO EFETUADA COM SUCESSO\n`;
      csvContent += `Analise de proporcoes ou equivalencia de texto faturados no painel de controle central.\n`;
    }

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

};
