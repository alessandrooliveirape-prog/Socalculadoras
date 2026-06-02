import React, { useState, useMemo } from 'react';
import { Percent, ShoppingBag, Tags, AlertCircle, RotateCcw, TrendingUp } from 'lucide-react';

interface ProfitMarginCalcProps {
  onCalculate: (results: {
    grossProfit: number;
    netProfit: number;
    grossMargin: number;
    netMargin: number;
    markup: number;
    comment: string;
  }) => void;
}

export const ProfitMarginCalc: React.FC<ProfitMarginCalcProps> = ({ onCalculate }) => {
  const [costPrice, setCostPrice] = useState<number>(120);
  const [sellingPrice, setSellingPrice] = useState<number>(250);
  const [otherCostsRate, setOtherCostsRate] = useState<number>(15); // taxes, shipping, commissions %

  const results = useMemo(() => {
    const cost = Number(costPrice) || 0;
    const sell = Number(sellingPrice) || 0;
    const taxes = Number(otherCostsRate) || 0;

    const taxAmount = sell * (taxes / 100);
    const grossProfit = Math.max(0, sell - cost);
    const netProfit = sell - cost - taxAmount;

    const grossMargin = sell > 0 ? (grossProfit / sell) * 100 : 0;
    const netMargin = sell > 0 ? (netProfit / sell) * 100 : 0;
    const markup = cost > 0 ? (sell - cost) / cost : 0;

    let comment = '';
    let status: 'good' | 'warning' | 'danger' = 'good';

    if (sell <= 0) {
      comment = 'Insira um preço de venda superior a zero para iniciar.';
      status = 'warning';
    } else if (netProfit < 0) {
      comment = 'Atenção extrema: Operação operando com PREJUÍZO líquido devido a encargos e custos.';
      status = 'danger';
    } else if (netMargin < 15) {
      comment = 'Aviso: Margem líquida muito apertada (< 15%). Qualquer oscilação de impostos ou custos afetará o negócio.';
      status = 'warning';
    } else if (netMargin >= 30) {
      comment = 'Excelente desempenho: Margem líquida saudável típica de produtos de altíssimo valor e escalabilidade.';
      status = 'good';
    } else {
      comment = 'Desempenho Estável: Margem dentro da média praticada no comércio e serviços online de varejo.';
      status = 'good';
    }

    return {
      grossProfit,
      netProfit,
      grossMargin,
      netMargin,
      markup: markup * 100, // as percentage
      comment,
      status
    };
  }, [costPrice, sellingPrice, otherCostsRate]);

  // Push results to parent handles
  React.useEffect(() => {
    onCalculate({
      grossProfit: results.grossProfit,
      netProfit: results.netProfit,
      grossMargin: results.grossMargin,
      netMargin: results.netMargin,
      markup: results.markup,
      comment: results.comment
    });
  }, [results, onCalculate]);

  const handleReset = () => {
    setCostPrice(120);
    setSellingPrice(250);
    setOtherCostsRate(15);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Parameters Panel */}
      <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <h3 className="text-base font-semibold text-slate-800">Parâmetros de Custo</h3>
          <button 
            onClick={handleReset}
            className="text-xs font-semibold text-gray-500 hover:text-slate-800 flex items-center gap-1 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Resetar</span>
          </button>
        </div>

        {/* Cost price of item */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-600">Preço de Custo (Produto/Serviço)</label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-xs font-semibold text-gray-400">R$</span>
            <input 
              type="number"
              value={costPrice || ''}
              onChange={(e) => setCostPrice(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono"
            />
          </div>
          <p className="text-[10px] text-gray-400">Quanto você gasta para fabricar ou adquirir a mercadoria.</p>
        </div>

        {/* Selling Price */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-600">Preço de Venda Final</label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-xs font-semibold text-gray-400">R$</span>
            <input 
              type="number"
              value={sellingPrice || ''}
              onChange={(e) => setSellingPrice(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono"
            />
          </div>
          <p className="text-[10px] text-gray-400 font-sans">Preço ofertado ao cliente na vitrine ou anúncio.</p>
        </div>

        {/* Indirect Costs (taxes, gateway, shipping, marketing acquisition) */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-600">Despesas e Impostos Variáveis (% sobre Venda)</label>
          <div className="relative">
            <span className="absolute right-3 top-2.5 text-xs font-semibold text-gray-400">%</span>
            <input 
              type="number"
              value={otherCostsRate || ''}
              onChange={(e) => setOtherCostsRate(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full pl-3 pr-8 py-2 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono"
            />
          </div>
          <p className="text-[10px] text-gray-400 leading-relaxed">Taxas de cartões/gateway, impostos DAS, embalagens e comissões.</p>
        </div>
      </div>

      {/* Results panel */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        {/* Dynamic margin diagnostic comment banner */}
        <div className={`p-4 rounded-xl border flex items-start gap-2.5 text-xs ${
          results.status === 'danger'
            ? 'bg-rose-50 border-rose-200/65 text-rose-800'
            : results.status === 'warning'
            ? 'bg-amber-50 border-amber-200/65 text-amber-800'
            : 'bg-emerald-50 border-emerald-200/65 text-emerald-800'
        }`}>
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Análise do Produto:</span>
            <p className="mt-0.5 leading-relaxed">{results.comment}</p>
          </div>
        </div>

        {/* Metrics cards breakdown */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Lucro Bruto (Sobra)</span>
            <span className="text-xl font-bold text-slate-850 font-mono mt-2">
              R$ {results.grossProfit.toFixed(2)}
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Lucro Líquido Real</span>
            <span className={`text-xl font-bold font-mono mt-2 ${results.netProfit < 0 ? 'text-red-500' : 'text-slate-850'}`}>
              R$ {results.netProfit.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Visual Percentages comparison ring or bars */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-5">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Métricas de Margem e Markup</h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {/* Radial progress for Net Margin */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-24 w-24 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="#f1f5f9" strokeWidth="6" fill="transparent" />
                  <circle 
                    cx="48" 
                    cy="48" 
                    r="40" 
                    stroke={results.netMargin < 15 ? '#ef4444' : '#2563eb'} 
                    strokeWidth="6" 
                    fill="transparent" 
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - Math.max(0, Math.min(100, results.netMargin)) / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                </svg>
                <span className="absolute font-mono text-sm font-bold text-slate-800">
                  {results.netMargin.toFixed(1)}%
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-700 mt-2">Margem Líquida</span>
              <span className="text-[10px] text-gray-400">Fatia real de lucro livre</span>
            </div>

            {/* Radial progress for Gross Margin */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-24 w-24 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="#f1f5f9" strokeWidth="6" fill="transparent" />
                  <circle 
                    cx="48" 
                    cy="48" 
                    r="40" 
                    stroke="#3b82f6" 
                    strokeWidth="6" 
                    fill="transparent" 
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - Math.max(0, Math.min(100, results.grossMargin)) / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                </svg>
                <span className="absolute font-mono text-sm font-bold text-slate-800">
                  {results.grossMargin.toFixed(1)}%
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-700 mt-2">Margem Bruta</span>
              <span className="text-[10px] text-gray-400">Preço menos o custo base</span>
            </div>

            {/* Markup card */}
            <div className="bg-slate-50 hover:bg-slate-100/50 transition-colors border border-dashed border-gray-200 rounded-xl p-4 flex flex-col justify-center items-center text-center">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Markup Multiplicador</span>
              <span className="text-xl font-bold font-mono text-slate-805 mt-2">
                {(results.markup / 100 + 1).toFixed(2)}x
              </span>
              <span className="text-[10px] text-gray-400 mt-1 leading-relaxed">Multiplicação recomendável sobre custos mínimos.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
