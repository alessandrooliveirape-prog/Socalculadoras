import React, { useState, useMemo } from 'react';
import { DollarSign, Percent, Calendar, TrendingUp, RotateCcw, FileText, Table } from 'lucide-react';

interface CompoundInterestCalcProps {
  onCalculate: (results: {
    finalAmount: number;
    totalInvested: number;
    totalInterest: number;
    data: Array<{
      month: number;
      totalInvested: number;
      interestEarned: number;
      totalInterest: number;
      balance: number;
    }>;
  }) => void;
}

export const CompoundInterestCalc: React.FC<CompoundInterestCalcProps> = ({ onCalculate }) => {
  const [initialCapital, setInitialCapital] = useState<number>(10000);
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(500);
  const [interestRate, setInterestRate] = useState<number>(10.5);
  const [rateType, setRateType] = useState<'annual' | 'monthly'>('annual');
  const [period, setPeriod] = useState<number>(5);
  const [periodType, setPeriodType] = useState<'years' | 'months'>('years');

  const results = useMemo(() => {
    const rawRate = Number(interestRate) || 0;
    const rawPeriod = Number(period) || 0;
    const rawInitial = Number(initialCapital) || 0;
    const rawMonthly = Number(monthlyDeposit) || 0;

    let monthlyRate = rateType === 'monthly' ? rawRate / 100 : Math.pow(1 + rawRate / 100, 1 / 12) - 1;
    let totalMonths = periodType === 'months' ? rawPeriod : rawPeriod * 12;

    if (totalMonths <= 0) {
      return {
        finalAmount: rawInitial,
        totalInvested: rawInitial,
        totalInterest: 0,
        schedule: []
      };
    }

    const schedule = [];
    let currentBalance = rawInitial;
    let totalInvested = rawInitial;
    let accumulatedInterest = 0;

    // Include month 0
    schedule.push({
      month: 0,
      totalInvested: Math.round(totalInvested * 100) / 100,
      interestEarned: 0,
      totalInterest: 0,
      balance: Math.round(currentBalance * 100) / 100
    });

    for (let m = 1; m <= totalMonths; m++) {
      const interestEarned = currentBalance * monthlyRate;
      accumulatedInterest += interestEarned;
      totalInvested += rawMonthly;
      currentBalance = currentBalance + interestEarned + rawMonthly;

      schedule.push({
        month: m,
        totalInvested: Math.round(totalInvested * 100) / 100,
        interestEarned: Math.round(interestEarned * 100) / 100,
        totalInterest: Math.round(accumulatedInterest * 100) / 100,
        balance: Math.round(currentBalance * 100) / 100
      });
    }

    const finalAmount = currentBalance;
    const totalInterest = accumulatedInterest;

    return {
      finalAmount,
      totalInvested,
      totalInterest,
      schedule
    };
  }, [initialCapital, monthlyDeposit, interestRate, rateType, period, periodType]);

  // Callback to share with parent whenever calculation triggers
  React.useEffect(() => {
    onCalculate({
      finalAmount: results.finalAmount,
      totalInvested: results.totalInvested,
      totalInterest: results.totalInterest,
      data: results.schedule
    });
  }, [results, onCalculate]);

  const handleReset = () => {
    setInitialCapital(10000);
    setMonthlyDeposit(500);
    setInterestRate(10.5);
    setRateType('annual');
    setPeriod(5);
    setPeriodType('years');
  };

  // Safe SVG Chart Coordinates
  const chartPoints = useMemo(() => {
    const data = results.schedule;
    if (data.length === 0) return { pathInvested: '', pathBalance: '' };
    
    // Select up to 12 points to draw for simplicity and speed
    const step = Math.max(1, Math.floor(data.length / 10));
    const points = [];
    for (let i = 0; i < data.length; i += step) {
      points.push(data[i]);
    }
    if (points[points.length - 1]?.month !== data[data.length - 1]?.month) {
      points.push(data[data.length - 1]);
    }

    const width = 500;
    const height = 180;
    const maxVal = Math.max(...data.map(d => d.balance)) || 1;

    const pointsInvested = points.map((p, idx) => {
      const x = (idx / (points.length - 1)) * width;
      const y = height - (p.totalInvested / maxVal) * height;
      return `${x},${y}`;
    });

    const pointsBalance = points.map((p, idx) => {
      const x = (idx / (points.length - 1)) * width;
      const y = height - (p.balance / maxVal) * height;
      return `${x},${y}`;
    });

    return {
      pathInvested: pointsInvested.join(' '),
      pathBalance: pointsBalance.join(' '),
      pointsCount: points.length
    };
  }, [results.schedule]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Parameters Panel */}
      <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <h3 className="text-base font-semibold text-slate-800">Parâmetros de Simulação</h3>
          <button 
            onClick={handleReset}
            className="text-xs font-semibold text-gray-500 hover:text-slate-800 flex items-center gap-1 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Resetar</span>
          </button>
        </div>

        {/* Input: Initial Capital */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-600">Capital Inicial</label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-xs font-semibold text-gray-400">R$</span>
            <input 
              type="number"
              value={initialCapital || ''}
              onChange={(e) => setInitialCapital(Math.max(0, parseFloat(e.target.value) || 0))}
              placeholder="0,00"
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none transition-all font-mono"
            />
          </div>
          <p className="text-[10px] text-gray-400">O montante financeiro inicial que você tem para investir.</p>
        </div>

        {/* Input: Monthly Deposit */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-600">Aporte Mensal (Opcional)</label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-xs font-semibold text-gray-400">R$</span>
            <input 
              type="number"
              value={monthlyDeposit || ''}
              onChange={(e) => setMonthlyDeposit(Math.max(0, parseFloat(e.target.value) || 0))}
              placeholder="0,00"
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none transition-all font-mono"
            />
          </div>
          <p className="text-[10px] text-gray-400">Valor adicional que depositará todos os meses.</p>
        </div>

        {/* Input: Interest Rate */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-600">Taxa de Juros (%)</label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <span className="absolute right-3 top-2.5 text-xs font-semibold text-gray-400">%</span>
              <input 
                type="number"
                step="0.01"
                value={interestRate || ''}
                onChange={(e) => setInterestRate(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full pl-3 pr-8 py-2 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none transition-all font-mono"
              />
            </div>
            <select 
              value={rateType}
              onChange={(e) => setRateType(e.target.value as 'annual' | 'monthly')}
              className="px-3 py-2 text-xs bg-gray-50 hover:bg-gray-100/70 border border-gray-200 font-semibold rounded-lg text-slate-700 outline-none cursor-pointer"
            >
              <option value="annual">Anual</option>
              <option value="monthly">Mensal</option>
            </select>
          </div>
        </div>

        {/* Input: Period */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-600">Período de Tempo</label>
          <div className="flex gap-2">
            <input 
              type="number"
              value={period || ''}
              onChange={(e) => setPeriod(Math.max(1, parseInt(e.target.value) || 0))}
              className="flex-1 px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none transition-all font-mono"
            />
            <select 
              value={periodType}
              onChange={(e) => setPeriodType(e.target.value as 'years' | 'months')}
              className="px-3 py-2 text-xs bg-gray-50 hover:bg-gray-100/70 border border-gray-200 font-semibold rounded-lg text-slate-700 outline-none cursor-pointer"
            >
              <option value="years">Anos</option>
              <option value="months">Meses</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results View Panel */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col justify-between">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Valor Final Estimado</span>
            <span className="text-lg font-bold text-blue-600 font-mono mt-1">
              R$ {results.finalAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col justify-between">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Total Investido</span>
            <span className="text-lg font-bold text-slate-800 font-mono mt-1">
              R$ {results.totalInvested.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col justify-between animate-pulse">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-blue-500" />
              <span>Total em Juros</span>
            </span>
            <span className="text-lg font-bold text-blue-500 font-mono mt-1">
              R$ {results.totalInterest.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        {/* Visual Line Graph Representation */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Crescimento do Patrimônio</h4>
            <div className="flex gap-4 text-[10px] font-semibold text-gray-500">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 bg-slate-300 rounded-full"></span>
                <span>Total Investido</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                <span>Total Acumulado</span>
              </div>
            </div>
          </div>

          <div className="relative h-[200px] w-full flex items-end">
            {chartPoints.pathBalance ? (
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                {/* Background Grid Lines */}
                <line x1="0" y1="0" x2="100%" y2="0" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="50" x2="100%" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="100" x2="100%" y2="100" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="150" x2="100%" y2="150" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />

                {/* Path 1: Invested */}
                <polyline
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="3"
                  points={chartPoints.pathInvested}
                />
                
                {/* Path 2: Balance */}
                <polyline
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="4.5"
                  points={chartPoints.pathBalance}
                />
              </svg>
            ) : (
              <div className="w-full text-center py-10 text-xs text-gray-400 font-mono">
                Gráfico indisponível para o período de 0 meses.
              </div>
            )}
          </div>
          <span className="text-[10px] text-gray-400 text-center font-mono">Evolução representada ao longo de {results.schedule.length - 1} {periodType === 'years' ? 'anos' : 'meses'}</span>
        </div>

        {/* Mini Table schedule */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
            <h4 className="text-xs font-bold text-slate-850 uppercase tracking-wide flex items-center gap-1.5">
              <Table className="w-4 h-4 text-slate-500" />
              <span>Cronograma de Evolução (Finais de Ano)</span>
            </h4>
            <span className="text-[10px] text-gray-400 font-mono">Tabela completa exportável para Excel</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-gray-200 text-slate-400 font-bold">
                  <th className="py-2">Período</th>
                  <th className="py-2 text-right">Total Investido</th>
                  <th className="py-2 text-right">Juros Acumulados</th>
                  <th className="py-2 text-right">Saldo Final</th>
                </tr>
              </thead>
              <tbody className="font-mono text-slate-700 divide-y divide-gray-100">
                {results.schedule
                  .filter((item, index) => {
                    // Show month 0, and then either every 12 months (each year) or the final one
                    if (item.month === 0) return true;
                    if (periodType === 'months') {
                      return index % 3 === 0 || index === results.schedule.length - 1;
                    } else {
                      return index % 12 === 0 || index === results.schedule.length - 1;
                    }
                  })
                  .slice(0, 10) // show up to 10 rows for clean screen
                  .map((row) => (
                    <tr key={row.month} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-1.5 font-sans font-medium text-slate-800">
                        {row.month === 0 ? 'Início' : periodType === 'years' ? `Ano ${Math.ceil(row.month / 12)}` : `Mês ${row.month}`}
                      </td>
                      <td className="py-1.5 text-right">R$ {row.totalInvested.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                      <td className="py-1.5 text-blue-600 font-medium text-right">R$ {row.totalInterest.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                      <td className="py-1.5 font-semibold text-slate-900 text-right">R$ {row.balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
