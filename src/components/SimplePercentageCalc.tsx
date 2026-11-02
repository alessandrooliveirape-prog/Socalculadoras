import React, { useState, useEffect } from 'react';
import { Percent, Plus, Minus, Info } from 'lucide-react';

interface SimplePercentageCalcProps {
  onCalculate: (results: any) => void;
}

export const SimplePercentageCalc: React.FC<SimplePercentageCalcProps> = ({ onCalculate }) => {
  const [valor, setValor] = useState<number>(100);
  const [percentual, setPercentual] = useState<number>(15);
  const [operacao, setOperacao] = useState<'calcular' | 'adicionar' | 'descontar'>('calcular');

  // Calculation logic
  const diff = valor * (percentual / 100);
  let resultado = 0;
  if (operacao === 'calcular') {
    resultado = diff;
  } else if (operacao === 'adicionar') {
    resultado = valor + diff;
  } else if (operacao === 'descontar') {
    resultado = valor - diff;
  }

  // Trigger calculation callback for PDF/CSV exports
  useEffect(() => {
    onCalculate({
      valor,
      percentual,
      operacao,
      resultado,
      diferenca: diff
    });
  }, [valor, percentual, operacao, resultado, diff, onCalculate]);

  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col gap-6">
      {/* Visual Header */}
      <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
        <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100 shrink-0">
          <Percent className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-800 font-display">Calculadora de Porcentagem Simples</h3>
          <p className="text-[10px] text-slate-400 font-normal leading-tight mt-0.5">
            Calcule frações de valores, acréscimos e descontos percentuais instantaneamente.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Form area */}
        <div className="flex flex-col gap-5">
          {/* Valor Base */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Valor Base</label>
            <div className="relative">
              <span className="absolute left-3.5 top-2.5 text-xs text-slate-400 font-bold font-mono">R$</span>
              <input
                type="number"
                value={valor === 0 ? '' : valor}
                onChange={(e) => setValor(Number(e.target.value))}
                className="w-full pl-9 pr-4 py-2.5 text-xs border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl outline-none transition-all font-mono font-semibold"
                placeholder="0,00"
              />
            </div>
          </div>

          {/* Percentual */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Percentual</label>
            <div className="relative">
              <input
                type="number"
                value={percentual === 0 ? '' : percentual}
                onChange={(e) => setPercentual(Number(e.target.value))}
                className="w-full pl-4 pr-9 py-2.5 text-xs border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl outline-none transition-all font-mono font-semibold"
                placeholder="0"
              />
              <span className="absolute right-3.5 top-2.5 text-xs text-slate-400 font-bold font-mono">%</span>
            </div>
          </div>

          {/* Tipo de Operação */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Tipo de Operação</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setOperacao('calcular')}
                className={`py-2 px-3 border rounded-xl font-bold text-[10px] flex flex-col items-center gap-1 cursor-pointer transition-all ${
                  operacao === 'calcular'
                    ? 'bg-blue-50 border-blue-300 text-blue-700 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-650 hover:bg-slate-50'
                }`}
              >
                <Percent className="w-3.5 h-3.5" />
                <span>Calcular %</span>
              </button>
              <button
                type="button"
                onClick={() => setOperacao('adicionar')}
                className={`py-2 px-3 border rounded-xl font-bold text-[10px] flex flex-col items-center gap-1 cursor-pointer transition-all ${
                  operacao === 'adicionar'
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-650 hover:bg-slate-50'
                }`}
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Somar (+)</span>
              </button>
              <button
                type="button"
                onClick={() => setOperacao('descontar')}
                className={`py-2 px-3 border rounded-xl font-bold text-[10px] flex flex-col items-center gap-1 cursor-pointer transition-all ${
                  operacao === 'descontar'
                    ? 'bg-rose-50 border-rose-300 text-rose-700 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-650 hover:bg-slate-50'
                }`}
              >
                <Minus className="w-3.5 h-3.5" />
                <span>Descontar (-)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results area */}
        <div className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-5 md:p-6 flex flex-col gap-4">
          <span className="text-[10px] font-extrabold text-slate-400 font-mono tracking-wider uppercase block">
            Resultado da Projeção
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-extrabold font-mono text-slate-900 leading-none">
              R$ {resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className="text-[11px] text-slate-500 font-semibold mt-1">
              {operacao === 'calcular' ? (
                <>Correspondente a {percentual}% de R$ {valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</>
              ) : operacao === 'adicionar' ? (
                <>R$ {valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} mais acréscimo de {percentual}% (+ R$ {diff.toLocaleString('pt-BR', { minimumFractionDigits: 2 })})</>
              ) : (
                <>R$ {valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} menos desconto de {percentual}% (- R$ {diff.toLocaleString('pt-BR', { minimumFractionDigits: 2 })})</>
              )}
            </span>
          </div>

          {/* Visual Progress/Proportion representation */}
          <div className="flex flex-col gap-1.5 mt-2 border-t border-slate-200/60 pt-4">
            <div className="flex justify-between text-[9px] font-bold text-slate-450 text-slate-400 uppercase">
              <span>Proporção Visual</span>
              <span>{Math.min(100, Math.max(0, percentual))}%</span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden relative">
              <div 
                className={`h-full transition-all duration-300 rounded-full ${
                  operacao === 'descontar' ? 'bg-rose-500' : operacao === 'adicionar' ? 'bg-emerald-500' : 'bg-blue-500'
                }`}
                style={{ width: `${Math.min(100, Math.max(0, percentual))}%` }}
              />
            </div>
            {operacao !== 'calcular' && (
              <div className="flex justify-between text-[9.5px] font-semibold text-slate-500 mt-1">
                <span>Base original: R$ {valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                <span>Diferença: R$ {diff.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
            )}
          </div>

          <div className="flex gap-2.5 bg-blue-50/40 border border-blue-100 rounded-xl p-3 mt-2 text-[10.5px] text-slate-600 leading-normal">
            <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <div className="font-normal">
              <strong>Fórmula Usada:</strong><br />
              {operacao === 'calcular' ? (
                <code className="bg-slate-200/50 px-1 py-0.5 rounded font-mono font-bold text-slate-800">Resultado = Valor Base * (Percentual / 100)</code>
              ) : operacao === 'adicionar' ? (
                <code className="bg-slate-200/50 px-1 py-0.5 rounded font-mono font-bold text-slate-800">Resultado = Valor Base * (1 + Percentual / 100)</code>
              ) : (
                <code className="bg-slate-200/50 px-1 py-0.5 rounded font-mono font-bold text-slate-800">Resultado = Valor Base * (1 - Percentual / 100)</code>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
