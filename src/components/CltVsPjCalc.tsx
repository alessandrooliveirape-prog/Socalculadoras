import React, { useState, useMemo } from 'react';
import { ShieldCheck, Wallet, Landmark, HelpCircle, RotateCcw, ArrowRight } from 'lucide-react';

interface CltVsPjCalcProps {
  onCalculate: (results: {
    cltNet: number;
    pjNet: number;
    difference: number;
    isPjBetter: boolean;
    comparisonString: string;
  }) => void;
}

export const CltVsPjCalc: React.FC<CltVsPjCalcProps> = ({ onCalculate }) => {
  // CLT Inputs
  const [cltGross, setCltGross] = useState<number>(8000);
  const [cltVoucher, setCltVoucher] = useState<number>(700); // VR/VA
  const [cltHealth, setCltHealth] = useState<number>(300); // Plano de saúde pago pela empresa
  const [cltOthers, setCltOthers] = useState<number>(200); // Outros benefícios

  // PJ Inputs
  const [pjInvoicing, setPjInvoicing] = useState<number>(12000);
  const [pjTaxRate, setPjTaxRate] = useState<number>(6.0); // Simples Nacional Simulado
  const [pjAccounting, setPjAccounting] = useState<number>(150); // Contador mensal

  const calculations = useMemo(() => {
    // 1. CLT Calculation
    const gross = Number(cltGross) || 0;
    const voucher = Number(cltVoucher) || 0;
    const health = Number(cltHealth) || 0;
    const others = Number(cltOthers) || 0;

    // INSS 2026 Table Approximation
    let inss = 0;
    if (gross <= 1518.0) {
      inss = gross * 0.075;
    } else if (gross <= 2793.88) {
      inss = 1518 * 0.075 + (gross - 1518) * 0.09;
    } else if (gross <= 4190.83) {
      inss = 1518 * 0.075 + (2793.88 - 1518) * 0.09 + (gross - 2793.88) * 0.12;
    } else if (gross <= 8157.41) {
      inss = 1518 * 0.075 + (2793.88 - 1518) * 0.09 + (4190.83 - 2793.88) * 0.12 + (gross - 4190.83) * 0.14;
    } else {
      inss = 952.12; // Teto INSS 2026/2025 max cap
    }

    // IRRF Table Approximation
    const baseIrrf = Math.max(0, gross - inss);
    let irrf = 0;
    if (baseIrrf <= 2259.2) {
      irrf = 0;
    } else if (baseIrrf <= 2826.65) {
      irrf = baseIrrf * 0.075 - 169.44;
    } else if (baseIrrf <= 3751.05) {
      irrf = baseIrrf * 0.15 - 381.44;
    } else if (baseIrrf <= 4664.68) {
      irrf = baseIrrf * 0.225 - 662.77;
    } else {
      irrf = baseIrrf * 0.275 - 896.0;
    }
    irrf = Math.max(0, irrf);

    const cltNetDirect = gross - inss - irrf;

    // Proportional Benefits representing total real monthly value:
    // 13º (gross/12), Férias + 1/3 (gross * 1.33 / 12), FGTS (gross * 0.08)
    const FGTS = gross * 0.08;
    const thirteenth = cltNetDirect / 12;
    const vacationThirteeth = (cltNetDirect * 1.33) / 12;

    const cltTotalRealValue = cltNetDirect + FGTS + thirteenth + vacationThirteeth + voucher + health + others;

    // 2. PJ Calculation
    const invoicing = Number(pjInvoicing) || 0;
    const taxRate = Number(pjTaxRate) || 0;
    const accounting = Number(pjAccounting) || 0;

    const taxCosts = invoicing * (taxRate / 100);
    const pjNetValue = invoicing - taxCosts - accounting;

    const isPjBetter = pjNetValue > cltTotalRealValue;
    const difference = Math.abs(pjNetValue - cltTotalRealValue);

    let comparisonString = '';
    if (difference > 0) {
      const percentage = (difference / Math.min(pjNetValue, cltTotalRealValue)) * 100;
      comparisonString = `A contratação ${isPjBetter ? 'PJ' : 'CLT'} rende cerca de R$ ${difference.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} a mais por mês (${percentage.toFixed(1)}% extra).`;
    } else {
      comparisonString = 'Ambas as contratações oferecem rentabilidade líquida mensal equivalente.';
    }

    return {
      cltGross: gross,
      inss,
      irrf,
      cltNetDirect,
      fgts: FGTS,
      thirteenth,
      vacationThirteeth,
      cltTotalRealValue,
      pjTax: taxCosts,
      pjNetValue,
      isPjBetter,
      difference,
      comparisonString
    };
  }, [cltGross, cltVoucher, cltHealth, cltOthers, pjInvoicing, pjTaxRate, pjAccounting]);

  // Sync results with Parent
  React.useEffect(() => {
    onCalculate({
      cltNet: calculations.cltTotalRealValue,
      pjNet: calculations.pjNetValue,
      difference: calculations.difference,
      isPjBetter: calculations.isPjBetter,
      comparisonString: calculations.comparisonString
    });
  }, [calculations, onCalculate]);

  const handleReset = () => {
    setCltGross(8000);
    setCltVoucher(700);
    setCltHealth(300);
    setCltOthers(200);
    setPjInvoicing(12000);
    setPjTaxRate(6.0);
    setPjAccounting(150);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Parameters Panel */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        {/* CLT Area */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-gray-105 pb-2.5">
            <ShieldCheck className="w-4.5 h-4.5 text-blue-600" />
            <h3 className="text-sm font-semibold text-slate-800">Parâmetros CLT</h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-600">Salário Bruto CLT</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-xs font-semibold text-gray-400">R$</span>
              <input 
                type="number"
                value={cltGross || ''}
                onChange={(e) => setCltGross(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full pl-9 pr-4 py-1.5 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-600">Vale Alimentação / Refeição</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-xs font-semibold text-gray-400">R$</span>
              <input 
                type="number"
                value={cltVoucher || ''}
                onChange={(e) => setCltVoucher(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full pl-9 pr-4 py-1.5 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-600">Plano de Saúde (Subsídio)</label>
              <input 
                type="number"
                value={cltHealth || ''}
                onChange={(e) => setCltHealth(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-3 py-1.5 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-600">Outros Benefícios</label>
              <input 
                type="number"
                value={cltOthers || ''}
                onChange={(e) => setCltOthers(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-3 py-1.5 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono"
              />
            </div>
          </div>
        </div>

        {/* PJ Area */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-2 border-b border-gray-105 pb-2.5">
            <Landmark className="w-4.5 h-4.5 text-amber-500" />
            <h3 className="text-sm font-semibold text-slate-800">Parâmetros PJ</h3>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-600">Faturamento Mensal PJ (Bruto)</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-xs font-semibold text-gray-400">R$</span>
              <input 
                type="number"
                value={pjInvoicing || ''}
                onChange={(e) => setPjInvoicing(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full pl-9 pr-4 py-1.5 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-600">Alíquota de Imposto (%)</label>
              <div className="relative">
                <span className="absolute right-3 top-2 text-xs font-semibold text-gray-400">%</span>
                <input 
                  type="number"
                  step="0.1"
                  value={pjTaxRate || ''}
                  onChange={(e) => setPjTaxRate(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-full pl-3 pr-8 py-1.5 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-600">Custos de Contabilidade</label>
              <input 
                type="number"
                value={pjAccounting || ''}
                onChange={(e) => setPjAccounting(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-3 py-1.5 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono"
              />
            </div>
          </div>
        </div>

        <button 
          onClick={handleReset}
          className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Resetar Comparação</span>
        </button>
      </div>

      {/* Comparison Results Area */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        {/* Dynamic Winner banner */}
        <div className={`rounded-2xl p-5 border flex flex-col gap-2 ${
          calculations.isPjBetter 
            ? 'bg-amber-50/50 border-amber-200/60' 
            : 'bg-blue-50/50 border-blue-200/60'
        }`}>
          <div className="flex items-center gap-2">
            <div className={`h-6 w-6 rounded-full flex items-center justify-center font-bold text-xs ${
              calculations.isPjBetter ? 'bg-amber-500 text-white' : 'bg-blue-600 text-white'
            }`}>
              $
            </div>
            <h4 className="text-sm font-semibold text-slate-800">
              Contratação Recomendada Financeiramente: <span className="font-bold">{calculations.isPjBetter ? 'PJ' : 'CLT'}</span>
            </h4>
          </div>
          <p className="text-xs text-slate-650 leading-relaxed font-sans mt-1">
            {calculations.comparisonString}
          </p>
        </div>

        {/* Comparison Details Side-by-Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* CLT Output Breakdown */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-3">
              <span className="text-xs font-bold text-slate-600">Líquido CLT + Benefícios</span>
              <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">R$ Bruto: {cltGross}</span>
            </div>

            <div className="flex flex-col gap-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Salário CLT Direto Líquido</span>
                <span className="font-mono text-slate-700">R$ {calculations.cltNetDirect.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Desconto INSS</span>
                <span className="font-mono text-pink-600">-R$ {calculations.inss.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Desconto IRRF</span>
                <span className="font-mono text-pink-600">-R$ {calculations.irrf.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-dashed border-gray-100 pt-1.5">
                <span className="text-slate-600 font-medium">FGTS Mensal proporcional</span>
                <span className="font-mono text-slate-700">+R$ {calculations.fgts.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 font-medium">13º salário proporcional</span>
                <span className="font-mono text-slate-700">+R$ {calculations.thirteenth.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 font-medium">Férias proporcionais + 1/3</span>
                <span className="font-mono text-slate-700">+R$ {calculations.vacationThirteeth.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600 font-medium">Benefícios (VAs, VR, saúde)</span>
                <span className="font-mono text-slate-700">+R$ {(cltVoucher + cltHealth + cltOthers).toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-3 mt-4 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">Salário Real Mensal (Soma)</span>
              <span className="text-base font-bold text-slate-900 font-mono">
                R$ {calculations.cltTotalRealValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          {/* PJ Output Breakdown */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-3">
              <span className="text-xs font-bold text-slate-600">Líquido de Notas PJ</span>
              <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">R$ Nota: {pjInvoicing}</span>
            </div>

            <div className="flex flex-col gap-2.5 text-xs h-full justify-start">
              <div className="flex justify-between">
                <span className="text-gray-500">Faturamento Bruto</span>
                <span className="font-mono text-slate-700">R$ {pjInvoicing.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Imposto Simples ({pjTaxRate}%)</span>
                <span className="font-mono text-pink-600">-R$ {calculations.pjTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Honorários Contábeis</span>
                <span className="font-mono text-pink-600">-R$ {pjAccounting.toFixed(2)}</span>
              </div>
              <div className="text-gray-400 text-[10px] leading-relaxed mt-4 bg-gray-50 rounded p-2 border border-gray-100">
                ⚠️ <span className="font-semibold text-gray-600">Nota Legal:</span> A contratação em modelo PJ não oferece garantias automáticas como aviso prévio correspondente e seguro desemprego. Estes riscos de vacância devem ser considerados adicionando uma taxa pessoal de reserva na sua precificação de hora.
              </div>
            </div>

            <div className="border-t border-gray-100 pt-3 mt-4 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">Líquido Real PJ</span>
              <span className="text-base font-bold text-slate-900 font-mono">
                R$ {calculations.pjNetValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>

        {/* Visual Graph comparison bars */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-3">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Comparação Gráfica Líquida</span>
          <div className="flex flex-col gap-4 mt-1">
            {/* CLT Bar */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>CLT Real Equivalente</span>
                <span className="font-mono">R$ {calculations.cltTotalRealValue.toFixed(2)}</span>
              </div>
              <div className="w-full bg-gray-100 h-6.5 rounded-lg overflow-hidden">
                <div 
                  className="bg-blue-600 h-full rounded-lg transition-all duration-500"
                  style={{ width: `${Math.min(100, (calculations.cltTotalRealValue / Math.max(calculations.cltTotalRealValue, calculations.pjNetValue)) * 100)}%` }}
                ></div>
              </div>
            </div>

            {/* PJ Bar */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>PJ Real Líquido</span>
                <span className="font-mono animate-pulse">R$ {calculations.pjNetValue.toFixed(2)}</span>
              </div>
              <div className="w-full bg-gray-100 h-6.5 rounded-lg overflow-hidden">
                <div 
                  className="bg-amber-500 h-full rounded-lg transition-all duration-500 animate-pulse"
                  style={{ width: `${Math.min(100, (calculations.pjNetValue / Math.max(calculations.cltTotalRealValue, calculations.pjNetValue)) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
