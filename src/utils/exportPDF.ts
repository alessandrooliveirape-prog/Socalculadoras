import { jsPDF } from 'jspdf';
import { CalcStatePayload } from '../App';

export const handleExportPDF = (payload: CalcStatePayload) => {
  const { activeCalculator, activeCalcDef, compoundInterestResults, cltVsPjResults, profitMarginResults, healthResults, timeSheetResults, rescisaoCLTResults, decimoTerceiroResults, feriasCLTResults, horasExtrasResults, aposentadoriaINSSResults, dynamicCalcInputs, dynamicCalcOutputs, adsenseEarningsResults } = payload;
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const title = activeCalcDef ? activeCalcDef.name : 'Simulador';

    // 1. Decorative Header styling
    doc.setFillColor(15, 23, 42); // slate-900 color primary
    doc.rect(0, 0, 210, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(18);
    // Convert text output to match Portuguese standard PDF compatibility
    doc.text('CENTRAL DE CALCULADORAS & PRODUTIVIDADE', 15, 17);
    
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(226, 232, 240);
    doc.text(`Relatório Oficial de Operações e Parâmetros de Uso`, 15, 23);
    doc.text(`Data do Emitente: ${new Date().toLocaleDateString('pt-BR')} ${new Date().toLocaleTimeString('pt-BR')}`, 15, 28);

    // Header Right Label
    doc.setFillColor(245, 158, 11); // amber secondary color accent block
    doc.rect(155, 15, 40, 6, 'F');
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(15, 23, 42);
    doc.text('RELATORIO SEGURO', 158, 19);

    // 2. Active tool details
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42);
    doc.text(`Ferramenta: ${title}`, 15, 52);

    doc.setDrawColor(226, 232, 240);
    doc.line(15, 55, 195, 55);

    // 3. Render content matching specific active state
    let yPos = 65;

    if (activeCalculator === 'juros-compostos' && compoundInterestResults) {
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('RESUMO DO PATRIMÔNIO PROJETADO', 15, yPos);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(`Valor Final Estimado Acumulado:`, 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`R$ ${compoundInterestResults.finalAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text(`Total de Capital Investido Líquido:`, 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`R$ ${compoundInterestResults.totalInvested.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text(`Rendimento Real Acumulado em Juros:`, 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(16, 185, 129); // green
      doc.text(`R$ ${compoundInterestResults.totalInterest.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      doc.setTextColor(15, 23, 42); // back to dark
      yPos += 14;

      // Draw table header
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('EVOLUÇÃO ANUAL SIMULADA', 15, yPos);
      yPos += 8;

      doc.setFillColor(248, 250, 252);
      doc.rect(15, yPos, 180, 7, 'F');
      doc.setFontSize(9);
      doc.text('Período', 18, yPos + 5);
      doc.text('Total Investido', 58, yPos + 5);
      doc.text('Juros Acumulados', 108, yPos + 5);
      doc.text('Saldo Acumulado', 158, yPos + 5);
      yPos += 7;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8.5);
      // Filter year schedules of month data
      const years = compoundInterestResults.data.filter((item: any) => item.month === 0 || item.month % 12 === 0 || item.month === compoundInterestResults.data.length - 1);
      years.slice(0, 15).forEach((row: any) => {
        doc.line(15, yPos, 195, yPos);
        const labelText = row.month === 0 ? 'Início' : `Ano ${Math.ceil(row.month / 12)}`;
        doc.text(labelText, 18, yPos + 4.5);
        doc.text(`R$ ${row.totalInvested.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 58, yPos + 4.5);
        doc.text(`R$ ${row.totalInterest.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 108, yPos + 4.5);
        doc.text(`R$ ${row.balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 158, yPos + 4.5);
        yPos += 6;
      });
    } 
    else if (activeCalculator === 'calculadora-ganhos-adsense' && adsenseEarningsResults) {
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('RESUMO DOS GANHOS ESTIMADOS', 15, yPos);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(`Categoria do Site (Nicho):`, 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${adsenseEarningsResults.category}`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text(`Regiao dos Visitantes:`, 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${adsenseEarningsResults.region}`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text(`Visitantes Unicos Mensais:`, 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${adsenseEarningsResults.visitors.toLocaleString('pt-BR')}`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text(`Paginas Visitadas por Sessao:`, 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${adsenseEarningsResults.pagesPerVisit.toFixed(1)} paginas`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text(`Total de Anuncios por Pagina:`, 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${adsenseEarningsResults.adsPerPage} blocos`, 105, yPos);
      yPos += 8;

      doc.setFillColor(248, 250, 252);
      doc.rect(15, yPos, 180, 22, 'F');
      doc.setFont('Helvetica', 'bold');
      doc.text('RESULTADO DA PROJECAO FINANCEIRA', 18, yPos + 5);
      doc.setFont('Helvetica', 'normal');
      doc.text(`Ganhos Mensais Estimados:`, 18, yPos + 11);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(16, 185, 129); // green
      doc.text(`R$ ${adsenseEarningsResults.monthlyEarnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos + 11);
      doc.setTextColor(15, 23, 42); // back to dark
      doc.setFont('Helvetica', 'normal');
      doc.text(`Faturamento Anual Projetado:`, 18, yPos + 17);
      doc.setFont('Helvetica', 'bold');
      doc.text(`R$ ${adsenseEarningsResults.annualEarnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos + 17);
      yPos += 28;

      // Metrics grid
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('METRICAS DETALHADAS DE RENTABILIDADE', 15, yPos);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(`Visualizacoes Mensais (Pageviews):`, 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${adsenseEarningsResults.monthlyPageviews.toLocaleString('pt-BR')}`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text(`RPM de Pagina Medio Estimado:`, 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`R$ ${adsenseEarningsResults.rpm.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text(`CTR (Click-Through Rate) Estimado:`, 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${adsenseEarningsResults.ctr.toFixed(2)} %`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text(`CPC (Custo por Clique) Medio:`, 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`R$ ${adsenseEarningsResults.cpc.toFixed(2)}`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text(`Cliques Estimados no Mes:`, 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${adsenseEarningsResults.clicks.toLocaleString('pt-BR')}`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text(`Impressoes de Anuncios no Mes:`, 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${adsenseEarningsResults.adImpressions.toLocaleString('pt-BR')}`, 105, yPos);
      yPos += 14;

      // Projections table
      doc.setFont('Helvetica', 'bold');
      doc.text('TABELA DE PROJECAO POR VOLUME DE TRAFEGO', 15, yPos);
      yPos += 8;

      doc.setFillColor(248, 250, 252);
      doc.rect(15, yPos, 180, 7, 'F');
      doc.setFontSize(9);
      doc.text('Cenario de Trafego', 18, yPos + 5);
      doc.text('Visitantes Unicos', 58, yPos + 5);
      doc.text('Visualizacoes de Pagina', 108, yPos + 5);
      doc.text('Ganhos Mensais', 158, yPos + 5);
      yPos += 7;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8.5);
      adsenseEarningsResults.data.forEach((row: any) => {
        doc.line(15, yPos, 195, yPos);
        const scenarioLabel = `${row.trafficLevel}% trafego`;
        doc.text(scenarioLabel, 18, yPos + 4.5);
        doc.text(row.visitors.toLocaleString('pt-BR'), 58, yPos + 4.5);
        doc.text(row.pageviews.toLocaleString('pt-BR'), 108, yPos + 4.5);
        doc.text(`R$ ${row.earnings.toLocaleString('pt-BR')}`, 158, yPos + 4.5);
        yPos += 6;
      });
    }
    else if (activeCalculator === 'clt-pj' && cltVsPjResults) {
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('RECOMENDAÇÃO TRABALHISTA', 15, yPos);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Opção ideal para contratação:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(cltVsPjResults.isPjBetter ? 'Pessoa Jurídica (PJ)' : 'Trabalho CLT', 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Diferença líquida mensal apurada:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`R$ ${cltVsPjResults.difference.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      yPos += 12;

      doc.setFont('Helvetica', 'bold');
      doc.text('DETALHAMENTO DOS CONTRATOS COMPILADOS', 15, yPos);
      yPos += 8;

      doc.setFillColor(248, 250, 252);
      doc.rect(15, yPos, 85, 25, 'F');
      doc.rect(110, yPos, 85, 25, 'F');

      // CLT col
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.text('Cenário CLT Real Equivalente', 18, yPos + 5);
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.text(`Líquido final total: R$ ${cltVsPjResults.cltNet?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 18, yPos + 12);
      doc.text('Inclui 13º, férias + 1/3, e FGTS.', 18, yPos + 18);

      // PJ col
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.text('Cenário PJ Líquido Proposto', 113, yPos + 5);
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.text(`Líquido final total: R$ ${cltVsPjResults.pjNet?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 113, yPos + 12);
      doc.text('Descontando tributação tributos.', 113, yPos + 18);
      yPos += 30;

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(9);
      doc.text('Conclusão Comparativa Técnica:', 15, yPos);
      yPos += 5;
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8.5);
      const splitText = doc.splitTextToSize(cltVsPjResults.comparisonString, 180);
      doc.text(splitText, 15, yPos);
    } 
    else if (activeCalculator === 'margem-lucro' && profitMarginResults) {
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('ANÁLISE COMERCIAL DE PRECIFICAMENTO', 15, yPos);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Margem Líquida Livre do Produto:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${profitMarginResults.netMargin.toFixed(2)}%`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Margem Bruta (Sem encargo indireto):', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${profitMarginResults.grossMargin.toFixed(2)}%`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Markup Multiplicador sugerido:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${(profitMarginResults.markup / 100 + 1).toFixed(2)}x`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Lucro Líquido Real Sobra:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`R$ ${profitMarginResults.netProfit.toFixed(2)}`, 105, yPos);
      yPos += 14;

      doc.setFont('Helvetica', 'bold');
      doc.text('DIAGNÓSTICO E PRESCRIÇÃO COMERCIAL', 15, yPos);
      yPos += 6;
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(9);
      const splitText = doc.splitTextToSize(profitMarginResults.comment, 180);
      doc.text(splitText, 15, yPos);
    } 
    else if (activeCalculator === 'registro-horas' && timeSheetResults) {
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('RELATÓRIO DE PRESTAÇÃO DE HORAS DE CONSULTORIA', 15, yPos);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Total de Horas Trabalhadas:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${timeSheetResults.totalHours.toFixed(2)} horas`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Taxa / Valor cobrado por hora:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`R$ ${timeSheetResults.hourlyRate},00 / h`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Faturamento Total a Receber:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(16, 185, 129); // green faturado
      doc.text(`R$ ${timeSheetResults.totalAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      doc.setTextColor(15, 23, 42); // back to slate
      yPos += 14;

      // Hours logs Table
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('EXTRATO DE HISTÓRICO DE DIAS REGISTRADOS', 15, yPos);
      yPos += 8;

      doc.setFillColor(248, 250, 252);
      doc.rect(15, yPos, 180, 7, 'F');
      doc.setFontSize(9);
      doc.text('Data', 18, yPos + 5);
      doc.text('Expediente', 48, yPos + 5);
      doc.text('Pausa', 88, yPos + 5);
      doc.text('Atividade Realizada', 108, yPos + 5);
      yPos += 7;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8);
      timeSheetResults.records.forEach((row: any) => {
        doc.line(15, yPos, 195, yPos);
        doc.text(row.date, 18, yPos + 4.5);
        doc.text(`${row.start} - ${row.end}`, 48, yPos + 4.5);
        doc.text(`${row.pause}m`, 88, yPos + 4.5);
        
        let desc = row.description;
        if (desc.length > 35) desc = desc.substring(0, 32) + '...';
        doc.text(desc, 108, yPos + 4.5);
        yPos += 6.5;
      });
    } 
    else if (activeCalculator === 'imc' && healthResults) {
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('RELATÓRIO SAÚDE E COMPOSIÇÃO FÍSICA', 15, yPos);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Índice de Massa Corporal (IMC):', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${healthResults.bmi.toFixed(2)} (${healthResults.bmiClass})`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Taxa Metabólica Basal (BMR / TMB):', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${Math.round(healthResults.bmr)} kcal / dia`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Meta Calórica Recomendada Diária:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${Math.round(healthResults.targetCalories)} kcal`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Consumo de Água Sugerido:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${(healthResults.waterNeeds / 1000).toFixed(2)} litros por dia`, 105, yPos);
      yPos += 14;

      doc.setFont('Helvetica', 'bold');
      doc.text('PRESCRIÇÕES DIETÉTICAS GERAIS', 15, yPos);
      yPos += 6;
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(9);
      doc.text('Este documento apresenta estimativas com base em equações físicas clássicas.', 15, yPos);
      doc.text('Busque atendimento de nutricionista ou nutrólogo para o planejamento de rotinas esportivas ou dietas clínicas.', 15, yPos + 4.5);
    } 
    else if (activeCalculator === 'calculadora-de-rescisao-clt' && rescisaoCLTResults) {
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('RESUMO DA RESCISÃO CONTRATUAL CLT', 15, yPos);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Motivo do Desligamento:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(rescisaoCLTResults.reasonLabel, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Meses de Trabalho Efetivos:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${rescisaoCLTResults.monthsOfWork} meses`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Valor Líquido Estimado a Receber:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(16, 185, 129); // green
      doc.text(`R$ ${rescisaoCLTResults.netAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      doc.setTextColor(15, 23, 42); // back to slate
      yPos += 14;

      doc.setFont('Helvetica', 'bold');
      doc.text('DEMONSTRATIVO DE PROVENTOS E DESCONTOS', 15, yPos);
      yPos += 8;

      doc.setFillColor(248, 250, 252);
      doc.rect(15, yPos, 180, 7, 'F');
      doc.setFontSize(9);
      doc.text('Verba / Descrição', 18, yPos + 5);
      doc.text('Tipo', 108, yPos + 5);
      doc.text('Valor Estimado', 158, yPos + 5);
      yPos += 7;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8.5);

      const items = [
        { desc: 'Saldo de Salário', type: 'Provento', value: rescisaoCLTResults.salaryBalance },
        { desc: 'Aviso Prévio Indenizado/Trabalhado', type: 'Provento', value: rescisaoCLTResults.noticeAmount },
        { desc: 'Décimo Terceiro Proporcional', type: 'Provento', value: rescisaoCLTResults.proportionateThirteenth },
        { desc: 'Férias Proporcionais + 1/3', type: 'Provento', value: rescisaoCLTResults.proportionateVacation + rescisaoCLTResults.proportionateVacationOneThird },
        { desc: 'Férias Vencidas + 1/3 (se houver)', type: 'Provento', value: rescisaoCLTResults.overdueVacationTotal },
        { desc: 'Descontos Previdenciários & IRRF', type: 'Desconto', value: rescisaoCLTResults.totalDeductions }
      ];

      items.forEach((row: any) => {
        if (row.value > 0 || row.type === 'Desconto') {
          doc.line(15, yPos, 195, yPos);
          doc.text(row.desc, 18, yPos + 4.5);
          doc.text(row.type, 108, yPos + 4.5);
          doc.text(`R$ ${row.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 158, yPos + 4.5);
          yPos += 6;
        }
      });
    }
    else if (activeCalculator === 'calculadora-de-decimo-terceiro' && decimoTerceiroResults) {
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('DÉCIMO TERCEIRO SALÁRIO - DEMONSTRATIVO', 15, yPos);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Parcela Demonstrada:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(decimoTerceiroResults.parcelLabel === 'Primeira Parcela' ? '1ª Parcela (Sem Descontos)' : '2ª Parcela / Quitação Integral', 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Valor Bruto de Enquadramento:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`R$ ${decimoTerceiroResults.grossThirteenth.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Desconto de INSS:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(239, 68, 68); // red
      doc.text(`R$ ${decimoTerceiroResults.inssDeduction.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      doc.setTextColor(15, 23, 42);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Desconto de Imposto de Renda (IRRF):', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(239, 68, 68); // red
      doc.text(`R$ ${decimoTerceiroResults.irrfDeduction.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      doc.setTextColor(15, 23, 42);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.text('Valor Líquido Creditado:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(16, 185, 129); // green
      doc.text(`R$ ${decimoTerceiroResults.netValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      doc.setTextColor(15, 23, 42);
    }
    else if (activeCalculator === 'calculadora-de-ferias-clt' && feriasCLTResults) {
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('DETALHAMENTO DE FÉRIAS CLT E ABONO PECUNIÁRIO', 15, yPos);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Dias de Descanso (Gozo):', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${feriasCLTResults.daysToEnjoy} dias`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Dias de Abono Vendidos:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${feriasCLTResults.daysToSell} dias`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Valor Bruto de Férias Acumulado:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`R$ ${feriasCLTResults.vacationValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      yPos += 6;

      if (feriasCLTResults.daysToSell > 0) {
        doc.setFont('Helvetica', 'normal');
        doc.text('Indenização Abono Pecuniário:', 15, yPos);
        doc.setFont('Helvetica', 'bold');
        doc.text(`R$ ${feriasCLTResults.abonoValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
        yPos += 6;
      }

      doc.setFont('Helvetica', 'normal');
      doc.text('Deduções Previdenciárias INSS/IRRF:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(239, 68, 68); // red
      doc.text(`R$ ${(feriasCLTResults.inssDeduction + feriasCLTResults.irrfDeduction).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      doc.setTextColor(15, 23, 42);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.text('Valor Líquido Final de Férias a Receber:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(16, 185, 129); // green
      doc.text(`R$ ${feriasCLTResults.netVacationAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      doc.setTextColor(15, 23, 42);
    }
    else if (activeCalculator === 'calculadora-de-horas-extras' && horasExtrasResults) {
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('QUOTA DE ADICIONAL DE HORAS EXTRAS', 15, yPos);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Valor da Hora Comum Calculado:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`R$ ${horasExtrasResults.regularHourValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Valor Unitário Extra 50%:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`R$ ${horasExtrasResults.extraHour50Value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Valor Unitário Extra 100%:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`R$ ${horasExtrasResults.extraHour100Value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Adicional Bruto Total de Extras de Direito:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(16, 185, 129); // green
      doc.text(`R$ ${horasExtrasResults.totalExtraAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
      doc.setTextColor(15, 23, 42);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Próximo Salário Bruto Acumulado com Extras:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`R$ ${horasExtrasResults.salaryWithExtras.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, yPos);
    }
    else if (activeCalculator === 'simulador-de-aposentadoria-inss' && aposentadoriaINSSResults) {
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('DIAGNÓSTICO PREVIDENCIÁRIO GERAL (INSS)', 15, yPos);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Soma da Pontuação Atual (Idade + Tempo):', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${aposentadoriaINSSResults.currentPoints} pontos`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Meta de Pontos de Transição:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${aposentadoriaINSSResults.pointsTarget} pontos (Regra de Pontos)`, 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Idade de Transição Mínima Legal:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(`${aposentadoriaINSSResults.minAgeTarget} anos (Regra de Idade)`, 105, yPos);
      yPos += 14;

      doc.setFont('Helvetica', 'bold');
      doc.text('AVALIAÇÃO DE DIREITO E ELEGIBILIDADE', 15, yPos);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.text('Elegível por Critério de Idade Mínima:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(aposentadoriaINSSResults.canRetireByAge ? 'SIM' : 'NÃO', 105, yPos);
      yPos += 6;

      doc.setFont('Helvetica', 'normal');
      doc.text('Elegível por Critério de Pontos Acumulados:', 15, yPos);
      doc.setFont('Helvetica', 'bold');
      doc.text(aposentadoriaINSSResults.canRetireByPoints ? 'SIM' : 'NÃO', 105, yPos);
      yPos += 8;

      doc.setFont('Helvetica', 'bold');
      doc.setTextColor(aposentadoriaINSSResults.canRetireAtAll ? 16 : 245, aposentadoriaINSSResults.canRetireAtAll ? 185 : 158, aposentadoriaINSSResults.canRetireAtAll ? 129 : 11);
      doc.text(aposentadoriaINSSResults.canRetireAtAll ? 'EM CONDIÇÃO DE RECLAMAR APOSENTADORIA imediata!' : 'SITUAÇÃO DE SEGURO ATIVO: Continue Contribuindo.', 15, yPos);
      doc.setTextColor(15, 23, 42);
    }
    else if (activeCalcDef?.isDynamic) {
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('PARÂMETROS DE ENTRADA CONFIGURADOS', 15, yPos);
      yPos += 8;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      activeCalcDef.inputs?.forEach(inp => {
        const val = dynamicCalcInputs[inp.id] !== undefined ? dynamicCalcInputs[inp.id] : inp.defaultValue;
        doc.text(`${inp.label}:`, 15, yPos);
        doc.setFont('Helvetica', 'bold');
        doc.text(`${val}${inp.suffix ? ' ' + inp.suffix : ''}`, 115, yPos);
        doc.setFont('Helvetica', 'normal');
        yPos += 6;
      });

      yPos += 4;
      doc.setFont('Helvetica', 'bold');
      doc.text('DEMONSTRATIVO DE RESULTADOS', 15, yPos);
      yPos += 8;

      activeCalcDef.outputs?.forEach(out => {
        const val = dynamicCalcOutputs[out.id];
        const displayVal = typeof val === 'number' 
          ? val.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
          : val || '0,00';
        doc.setFont('Helvetica', 'normal');
        doc.text(`${out.label}:`, 15, yPos);
        doc.setFont('Helvetica', 'bold');
        doc.text(`${out.prefix || ''}${displayVal}${out.suffix || ''}`, 115, yPos);
        yPos += 6;
      });

      yPos += 10;
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(9);
      doc.text('RESPONSABILIDADE LEGAL:', 15, yPos);
      yPos += 5;
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8.5);
      const warningsText = doc.splitTextToSize('Todos os valores simulados sao baseados em dados referenciais providos pelo usuario em carater informativo. Nao representam garantias juridicas.', 180);
      doc.text(warningsText, 15, yPos);
    }
    else {
      // General tools export
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('Esta ferramenta não armazena tabelas longas para impressão.', 15, yPos);
      doc.text('Os resultados e operações rápidas de cálculo encontram-se resumidos no painel de controle.', 15, yPos + 5);
    }

    // 4. PDF Footer stamp
    doc.setDrawColor(203, 213, 225);
    doc.line(15, 275, 195, 275);
    doc.setFont('Helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text('Emitido gratuitamente através da plataforma Brasil Calculadoras.', 15, 280);
    doc.text('Site monetizado com Google AdSense para gratuidade eterna do usuário final.', 15, 284);
    doc.text('Página 1 de 1', 180, 280);

    doc.save(`relatorio-${activeCalculator}.pdf`);


};
