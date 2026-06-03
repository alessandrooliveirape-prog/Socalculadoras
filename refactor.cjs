const fs = require('fs');
const path = require('path');

const appTsxPath = path.join(process.cwd(), 'src', 'App.tsx');
let content = fs.readFileSync(appTsxPath, 'utf8').replace(/\r\n/g, '\n');

const statePayloadType = `
export interface CalcStatePayload {
  activeCalculator: any;
  activeCalcDef: any;
  compoundInterestResults: any;
  cltVsPjResults: any;
  profitMarginResults: any;
  healthResults: any;
  timeSheetResults: any;
  rule3Results: any;
  rescisaoCLTResults: any;
  decimoTerceiroResults: any;
  feriasCLTResults: any;
  horasExtrasResults: any;
  aposentadoriaINSSResults: any;
  dynamicCalcInputs: any;
  dynamicCalcOutputs: any;
}
`;

const getPayloadFn = `
  const getStatePayload = (): CalcStatePayload => ({
    activeCalculator,
    activeCalcDef: CALCULATORS_CATALOG.find(c => c.id === activeCalculator),
    compoundInterestResults,
    cltVsPjResults,
    profitMarginResults,
    healthResults,
    timeSheetResults,
    rule3Results,
    rescisaoCLTResults,
    decimoTerceiroResults,
    feriasCLTResults,
    horasExtrasResults,
    aposentadoriaINSSResults,
    dynamicCalcInputs,
    dynamicCalcOutputs
  });
`;

const histStart = content.indexOf('  // Save current operation to historical log\n  const handleSaveToHistory = () => {');
const histEnd = content.indexOf("    triggerToast('✅ Operação gravada com sucesso no histórico local da sessão!');\n  };", histStart) + 84;
const historyBody = content.substring(histStart, histEnd);

const newHistoryBody = `  // Save current operation to historical log
  const handleSaveToHistory = () => {
    const payload = getStatePayload();
    if (!payload.activeCalcDef) return;
    
    const res = buildHistorySummary(payload);
    if (!res.summaryText) {
      triggerToast('Nenhum resultado de cálculo ativo pronto ou alterado para salvar.');
      return;
    }

    const logEntry: HistoryEntry = {
      id: Date.now().toString(),
      calculatorId: activeCalculator,
      calculatorName: payload.activeCalcDef.name,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      inputs: res.inputsObj,
      outputs: res.outputsObj,
      summary: res.summaryText
    };

    const newHistory = [logEntry, ...history].slice(0, 10);
    setHistory(newHistory);
    localStorage.setItem('calc_history', JSON.stringify(newHistory));
    
    setAdImpressions(prev => prev + 1);
    setAdRefreshTrigger(prev => prev + 1);
    triggerToast('✅ Operação gravada com sucesso no histórico local da sessão!');
  };`;

const csvStart = content.indexOf('  // Export Results back as a clean structured Spreadsheet (Excel CSV file format)\n  const exportToCSV = () => {');
const csvEnd = content.indexOf("    triggerToast('📥 Planilha Excel / CSV baixada com sucesso!');\n  };", csvStart) + 72;
const csvBody = content.substring(csvStart, csvEnd);

const newCsvBody = `  // Export Results back as a clean structured Spreadsheet (Excel CSV file format)
  const exportToCSV = () => {
    handleExportCSV(getStatePayload());
    setAdImpressions(prev => prev + 1);
    setAdRefreshTrigger(prev => prev + 1);
    triggerToast('📥 Planilha Excel / CSV baixada com sucesso!');
  };`;

const pdfStart = content.indexOf('  // Export Results back as a clean, styled, and ready-to-print official PDF report using standard PDF canvas library\n  const exportToPDF = () => {');
const pdfEnd = content.indexOf("    triggerToast('📥 Relatório PDF Gerado e Exportado com Sucesso!');\n  };", pdfStart) + 74;
const pdfBody = content.substring(pdfStart, pdfEnd);

const newPdfBody = `  // Export Results back as a clean, styled, and ready-to-print official PDF report using standard PDF canvas library
  const exportToPDF = () => {
    handleExportPDF(getStatePayload());
    setAdImpressions(prev => prev + 1);
    setAdRefreshTrigger(prev => prev + 1);
    triggerToast('📥 Relatório PDF Gerado e Exportado com Sucesso!');
  };`;

if (histStart === -1 || csvStart === -1 || pdfStart === -1) {
    console.error('Could not find blocks. Aborting.', {histStart, csvStart, pdfStart});
    process.exit(1);
}

content = content.replace(historyBody, getPayloadFn + '\n' + newHistoryBody);
content = content.replace(csvBody, newCsvBody);
content = content.replace(pdfBody, newPdfBody);

const importsToAdd = `import { buildHistorySummary } from './utils/historyManager';\nimport { handleExportCSV } from './utils/exportCSV';\nimport { handleExportPDF } from './utils/exportPDF';\n`;
content = content.replace("import { CALCULATORS_CATALOG, CATEGORY_MAP } from './data/calculatorsCatalog';", "import { CALCULATORS_CATALOG, CATEGORY_MAP } from './data/calculatorsCatalog';\n" + importsToAdd);

content = content + '\n' + statePayloadType;

fs.writeFileSync(appTsxPath, content);

fs.mkdirSync(path.join(process.cwd(), 'src', 'utils'), { recursive: true });

let historyManagerCode = `import { CalcStatePayload } from '../App';\n\nexport const buildHistorySummary = (payload: CalcStatePayload) => {\n  let summaryText = '';\n  let inputsObj: any = {};\n  let outputsObj: any = {};\n  \n  const { activeCalculator, activeCalcDef, compoundInterestResults, cltVsPjResults, profitMarginResults, healthResults, timeSheetResults, rule3Results, rescisaoCLTResults, decimoTerceiroResults, feriasCLTResults, horasExtrasResults, aposentadoriaINSSResults, dynamicCalcInputs, dynamicCalcOutputs } = payload;\n`;
historyManagerCode += historyBody.substring(historyBody.indexOf("    if (activeCalculator === 'juros-compostos' && compoundInterestResults) {"), historyBody.indexOf("    if (!summaryText) {"));
historyManagerCode += `  return { summaryText, inputsObj, outputsObj };\n};\n`;
fs.writeFileSync(path.join(process.cwd(), 'src', 'utils', 'historyManager.ts'), historyManagerCode);

let csvCode = `import { CalcStatePayload } from '../App';\n\nexport const handleExportCSV = (payload: CalcStatePayload) => {\n  const { activeCalculator, activeCalcDef, compoundInterestResults, cltVsPjResults, profitMarginResults, healthResults, timeSheetResults, rescisaoCLTResults, decimoTerceiroResults, feriasCLTResults, horasExtrasResults, aposentadoriaINSSResults, dynamicCalcInputs, dynamicCalcOutputs } = payload;\n`;
csvCode += csvBody.substring(csvBody.indexOf("    let csvContent = '\\uFEFF';"), csvBody.indexOf("    // Trigger visual refresh of AdSense unit since they completed an operation!"));
csvCode += `\n  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });\n  const link = document.createElement('a');\n  if (link.download !== undefined) {\n    const url = URL.createObjectURL(blob);\n    link.setAttribute('href', url);\n    link.setAttribute('download', filename);\n    link.style.visibility = 'hidden';\n    document.body.appendChild(link);\n    link.click();\n    document.body.removeChild(link);\n  }\n};\n`;
fs.writeFileSync(path.join(process.cwd(), 'src', 'utils', 'exportCSV.ts'), csvCode);

let pdfCode = `import { jsPDF } from 'jspdf';\nimport { CalcStatePayload } from '../App';\n\nexport const handleExportPDF = (payload: CalcStatePayload) => {\n  const { activeCalculator, activeCalcDef, compoundInterestResults, cltVsPjResults, profitMarginResults, healthResults, timeSheetResults, rescisaoCLTResults, decimoTerceiroResults, feriasCLTResults, horasExtrasResults, aposentadoriaINSSResults, dynamicCalcInputs, dynamicCalcOutputs } = payload;\n`;
pdfCode += pdfBody.substring(pdfBody.indexOf("    const doc = new jsPDF({"), pdfBody.indexOf("    // Increment simulated AdSense impressions with pdf load"));
pdfCode += `\n};\n`;
fs.writeFileSync(path.join(process.cwd(), 'src', 'utils', 'exportPDF.ts'), pdfCode);

console.log('Refactoring complete.');
