import React from 'react';
import { History, Trash2, Clock, ArrowRight } from 'lucide-react';
import { HistoryEntry } from '../types';

interface CalculatorHistoryProps {
  history: HistoryEntry[];
  onClearHistory: () => void;
  onSelectEntry: (entry: HistoryEntry) => void;
}

export const CalculatorHistory: React.FC<CalculatorHistoryProps> = ({
  history,
  onClearHistory,
  onSelectEntry
}) => {
  if (history.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
        <div className="flex flex-col items-center justify-center gap-2">
          <History className="w-8 h-8 text-gray-300" />
          <h4 className="text-sm font-semibold text-slate-700">Histórico de Sessão Vazio</h4>
          <p className="text-xs text-gray-400 max-w-xs font-mono">
            À medida que realizar cálculos nas ferramentas, os resumos aparecerão listados aqui automaticamente.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2">
          <History className="w-4.5 h-4.5 text-slate-650" />
          <h3 className="text-sm font-semibold text-slate-800">Cálculos Recentes</h3>
        </div>
        <button
          onClick={onClearHistory}
          className="text-xs font-semibold text-rose-600 hover:text-rose-800 flex items-center gap-1 cursor-pointer transition-all active:scale-95"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Limpar</span>
        </button>
      </div>

      <div className="flex flex-col gap-3 max-h-[350px] overflow-y-auto pr-1">
        {history.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectEntry(item)}
            className="group p-3 hover:bg-slate-50 border border-gray-100 bg-white/50 rounded-xl flex flex-col gap-1.5 transition-all cursor-pointer hover:border-gray-300"
          >
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                {item.calculatorName}
              </span>
              <span className="text-[9px] font-mono font-medium text-gray-400 flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" />
                <span>{item.timestamp}</span>
              </span>
            </div>

            <p className="text-xs text-slate-700 font-sans tracking-tight font-medium">
              {item.summary}
            </p>

            <div className="text-[10px] text-gray-400 flex items-center gap-1 font-mono justify-end">
              <span>Ver parâmetros</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
