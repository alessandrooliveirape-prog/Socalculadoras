import React, { useState, useMemo } from 'react';
import { Clock, Plus, Trash2, DollarSign, RotateCcw, Copy, CalendarPlus, Briefcase } from 'lucide-react';

interface HoursRecord {
  id: string;
  date: string;
  start: string;
  end: string;
  pause: number; // in minutes
  description: string;
}

interface TimeSheetHoursCalcProps {
  onCalculate: (results: {
    totalHours: number;
    totalAmount: number;
    records: HoursRecord[];
    hourlyRate: number;
  }) => void;
}

const DEFAULT_RECORDS: HoursRecord[] = [
  { id: '1', date: '2026-06-01', start: '09:00', end: '18:00', pause: 60, description: 'Desenvolvimento Frontend das calculadoras' },
  { id: '2', date: '2026-06-02', start: '09:05', end: '17:45', pause: 45, description: 'Ajustes de AdSense e design responsivo' },
  { id: '3', date: '2026-06-03', start: '08:30', end: '18:30', pause: 60, description: 'Implementação de exportação PDF/Excel' }
];

export const TimeSheetHoursCalc: React.FC<TimeSheetHoursCalcProps> = ({ onCalculate }) => {
  const [hourlyRate, setHourlyRate] = useState<number>(85);
  const [records, setRecords] = useState<HoursRecord[]>(DEFAULT_RECORDS);
  const [copied, setCopied] = useState<boolean>(false);

  // Form states to add new record
  const [newDate, setNewDate] = useState<string>('2026-06-04');
  const [newStart, setNewStart] = useState<string>('09:00');
  const [newEnd, setNewEnd] = useState<string>('18:00');
  const [newPause, setNewPause] = useState<number>(60);
  const [newDesc, setNewDesc] = useState<string>('');

  const computedStats = useMemo(() => {
    let totalMinutes = 0;

    const detailedRecords = records.map(rec => {
      const [startH, startM] = rec.start.split(':').map(Number);
      const [endH, endM] = rec.end.split(':').map(Number);

      const startTotal = (startH || 0) * 60 + (startM || 0);
      let endTotal = (endH || 0) * 60 + (endM || 0);

      // Handle overnight shift
      if (endTotal < startTotal) {
        endTotal += 24 * 60;
      }

      const workedMinutes = Math.max(0, endTotal - startTotal - (rec.pause || 0));
      totalMinutes += workedMinutes;

      const decimalHours = workedMinutes / 60;
      const formattedHours = `${Math.floor(workedMinutes / 60)}h ${workedMinutes % 60}m`;

      return {
        ...rec,
        decimalHours,
        formattedHours,
        dailyTotal: decimalHours * hourlyRate
      };
    });

    const totalHours = totalMinutes / 60;
    const totalAmount = totalHours * hourlyRate;

    return {
      detailedRecords,
      totalHours,
      totalAmount
    };
  }, [records, hourlyRate]);

  // propagate to parent
  React.useEffect(() => {
    onCalculate({
      totalHours: computedStats.totalHours,
      totalAmount: computedStats.totalAmount,
      records,
      hourlyRate
    });
  }, [computedStats, records, hourlyRate, onCalculate]);

  const handleAddRecord = (e: React.FormEvent) => {
    e.preventDefault();
    const id = Date.now().toString();
    const newRecord: HoursRecord = {
      id,
      date: newDate || new Date().toISOString().split('T')[0],
      start: newStart || '09:00',
      end: newEnd || '18:00',
      pause: Number(newPause) || 0,
      description: newDesc || 'Consultoria Técnica'
    };

    setRecords([...records, newRecord]);
    setNewDesc('');
  };

  const handleDeleteRecord = (id: string) => {
    setRecords(records.filter(r => r.id !== id));
  };

  const handleCopySummary = () => {
    const textLines = records.map(r => 
      `${r.date}: ${r.start} às ${r.end} (Pausa ${r.pause}m) - ${r.description}`
    );
    const summary = `Relatório de Prestação de Horas:\n` +
      `--------------------------------------\n` +
      textLines.join('\n') +
      `\n--------------------------------------\n` +
      `Valor da Hora: R$ ${hourlyRate}/h\n` +
      `Total de Horas Trabalhadas: ${computedStats.totalHours.toFixed(2)}h\n` +
      `Total a Receber: R$ ${computedStats.totalAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setHourlyRate(85);
    setRecords(DEFAULT_RECORDS);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Parameters Panel */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        {/* Rate settings */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
            <h3 className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-slate-500" />
              <span>Configuração do Projeto</span>
            </h3>
            <button 
              onClick={handleReset}
              className="text-[10px] text-gray-500 hover:text-slate-900 font-semibold cursor-pointer"
            >
              Resetar Tudo
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-650">Valor Cobrado da Hora (Valor do Serviço)</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-xs font-semibold text-gray-400">R$</span>
              <input 
                type="number"
                value={hourlyRate || ''}
                onChange={(e) => setHourlyRate(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono"
              />
            </div>
          </div>
        </div>

        {/* Hour Input Form */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-slate-800 border-b border-gray-100 pb-2.5">Adicionar Novo Registro</h3>
          <form onSubmit={handleAddRecord} className="flex flex-col gap-4">
            {/* Date Selection */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-650">Data do Trabalho</label>
              <input 
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="w-full px-3 py-1.5 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-sans font-medium"
              />
            </div>

            {/* Time period */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-650">Hora Entrada</label>
                <input 
                  type="time"
                  value={newStart}
                  onChange={(e) => setNewStart(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono font-medium"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-650">Hora Saída</label>
                <input 
                  type="time"
                  value={newEnd}
                  onChange={(e) => setNewEnd(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono font-medium"
                />
              </div>
            </div>

            {/* Pause time */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-650">Tempo de Intervalo / Pausa (Minutos)</label>
              <div className="relative">
                <span className="absolute right-3 top-2 text-xs font-semibold text-gray-400">min</span>
                <input 
                  type="number"
                  value={newPause}
                  onChange={(e) => setNewPause(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full pl-3 pr-11 py-1.5 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono"
                />
              </div>
            </div>

            {/* Work description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-650">Descrição das Atividades</label>
              <input 
                type="text"
                placeholder="Ex. Reunião de planejamento, Refatoração..."
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                className="w-full px-3 py-1.5 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Adicionar Registro</span>
            </button>
          </form>
        </div>
      </div>

      {/* Main timesheet Table results layout area */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        {/* Metric widgets summary */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-500" />
              <span>Total de Horas Líquidas</span>
            </span>
            <span className="text-xl font-bold text-slate-850 font-mono mt-2">
              {computedStats.totalHours.toFixed(2)}h
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-slate-550" />
              <span>Total Faturado</span>
            </span>
            <span className="text-xl font-bold text-emerald-600 font-mono mt-2 animate-pulse">
              R$ {computedStats.totalAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {/* Hours logs table wrapper card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <span>Folha de Horas Prestadas</span>
            </h4>
            
            <button
              onClick={handleCopySummary}
              className={`px-2.5 py-1 text-[10px] font-semibold border rounded-md flex items-center gap-1 cursor-pointer transition-all active:scale-95 ${
                copied 
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                  : 'bg-gray-50 border-gray-250 text-slate-700 hover:bg-gray-100'
              }`}
            >
              <Copy className="w-3 h-3" />
              <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
            </button>
          </div>

          {records.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-2">
              <Clock className="w-8 h-8 text-gray-300" />
              <p className="text-xs text-gray-400 font-mono">Sem lançamentos registrados de momento.</p>
              <p className="text-[10px] text-gray-450">Insira um novo registro no painel lateral esquerdo.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans border-collapse text-xs">
                <thead>
                  <tr className="border-b border-gray-200 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    <th className="py-2.5 font-semibold">Data</th>
                    <th className="py-2.5 font-semibold text-center">Entrada-Saída</th>
                    <th className="py-2.5 font-semibold text-center">Pausa</th>
                    <th className="py-2.5 font-semibold">Dec. Horas</th>
                    <th className="py-2.5">Atividade / Task</th>
                    <th className="py-2.5 text-right">Faturado</th>
                    <th className="py-2.5 w-8"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium">
                  {computedStats.detailedRecords.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50 group transition-colors">
                      <td className="py-2.5 text-slate-800 whitespace-nowrap">{item.date}</td>
                      <td className="py-2.5 text-center font-mono text-slate-600 whitespace-nowrap">{item.start} ~ {item.end}</td>
                      <td className="py-2.5 text-center font-mono text-slate-500">{item.pause}m</td>
                      <td className="py-2.5 font-mono text-slate-700 whitespace-nowrap">{item.decimalHours.toFixed(2)}h</td>
                      <td className="py-2.5 text-gray-500 max-w-[150px] truncate" title={item.description}>{item.description}</td>
                      <td className="py-2.5 text-right font-mono text-slate-900 whitespace-nowrap">R$ {item.dailyTotal.toFixed(2)}</td>
                      <td className="py-2.5 text-right whitespace-nowrap">
                        <button
                          onClick={() => handleDeleteRecord(item.id)}
                          className="p-1 text-gray-400 hover:text-rose-600 group-hover:opacity-100 rounded cursor-pointer transition-all hover:bg-rose-50"
                          title="Remover lançamento"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
