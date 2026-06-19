import React, { useState, useEffect } from 'react';
import { Car, Coins, Info, Calendar } from 'lucide-react';

interface CarFinanceCalcProps {
  onCalculate: (results: any) => void;
}

export const CarFinanceCalc: React.FC<CarFinanceCalcProps> = ({ onCalculate }) => {
  const [valorVeiculo, setValorVeiculo] = useState<number>(50000);
  const [entrada, setEntrada] = useState<number>(15000);
  const [taxaMensal, setTaxaMensal] = useState<number>(1.8);
  const [parcelas, setParcelas] = useState<number>(48);

  // Math logic
  const financed = Math.max(0, valorVeiculo - entrada);
  const i = taxaMensal / 100;
  const n = parcelas || 1;
  
  let valorParcela = 0;
  if (i > 0) {
    valorParcela = financed * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  } else {
    valorParcela = financed / n;
  }
  
  const totalPago = (valorParcela * n) + entrada;
  const jurosTotais = Math.max(0, (valorParcela * n) - financed);

  // Generate basic amortization schedule
  const schedule = React.useMemo(() => {
    const list = [];
    let balance = financed;
    for (let m = 1; m <= Math.min(60, n); m++) {
      const interestPayment = balance * i;
      const principalPayment = valorParcela - interestPayment;
      balance = Math.max(0, balance - principalPayment);
      list.push({
        mes: m,
        parcela: valorParcela,
        amortizado: principalPayment,
        juros: interestPayment,
        saldo: balance
      });
    }
    return list;
  }, [financed, i, valorParcela, n]);

  // Trigger calculation callback for PDF/CSV exports
  useEffect(() => {
    onCalculate({
      valor_veiculo: valorVeiculo,
      entrada,
      taxa_mensal: taxaMensal,
      parcelas,
      valor_parcela: valorParcela,
      total_pago: totalPago,
      juros_totais: jurosTotais
    });
  }, [valorVeiculo, entrada, taxaMensal, parcelas, valorParcela, totalPago, jurosTotais, onCalculate]);

  const interestRatio = totalPago > 0 ? (jurosTotais / (totalPago - entrada)) * 100 : 0;

  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col gap-6 animate-fadeIn">
      {/* Visual Header */}
      <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
        <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100 shrink-0">
          <Car className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-800 font-display">Simulador de Financiamento de Veículos</h3>
          <p className="text-[10px] text-slate-400 font-normal leading-tight mt-0.5">
            Calcule parcelas mensais, juros totais e confira a tabela de amortização CDC.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Form Inputs */}
        <div className="flex flex-col gap-5">
          {/* Valor do Veículo */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Valor do Veículo</label>
            <div className="relative">
              <span className="absolute left-3.5 top-2.5 text-xs text-slate-400 font-bold font-mono">R$</span>
              <input
                type="number"
                value={valorVeiculo === 0 ? '' : valorVeiculo}
                onChange={(e) => setValorVeiculo(Number(e.target.value))}
                className="w-full pl-9 pr-4 py-2.5 text-xs border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl outline-none transition-all font-mono font-semibold"
                placeholder="0,00"
              />
            </div>
          </div>

          {/* Valor de Entrada */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Valor de Entrada</label>
            <div className="relative">
              <span className="absolute left-3.5 top-2.5 text-xs text-slate-400 font-bold font-mono">R$</span>
              <input
                type="number"
                value={entrada === 0 ? '' : entrada}
                onChange={(e) => setEntrada(Number(e.target.value))}
                className="w-full pl-9 pr-4 py-2.5 text-xs border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl outline-none transition-all font-mono font-semibold"
                placeholder="0,00"
              />
            </div>
          </div>

          {/* Taxa de Juros Mensal */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Taxa de Juros Mensal</label>
            <div className="relative">
              <input
                type="number"
                value={taxaMensal === 0 ? '' : taxaMensal}
                onChange={(e) => setTaxaMensal(Number(e.target.value))}
                className="w-full pl-4 pr-9 py-2.5 text-xs border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl outline-none transition-all font-mono font-semibold"
                placeholder="0"
                step="0.01"
              />
              <span className="absolute right-3.5 top-2.5 text-xs text-slate-400 font-bold font-mono">% a.m.</span>
            </div>
          </div>

          {/* Quantidade de Parcelas */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Quantidade de Parcelas</label>
            <div className="relative">
              <input
                type="number"
                value={parcelas === 0 ? '' : parcelas}
                onChange={(e) => setParcelas(Number(e.target.value))}
                className="w-full pl-4 pr-9 py-2.5 text-xs border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl outline-none transition-all font-mono font-semibold"
                placeholder="1"
              />
              <span className="absolute right-3.5 top-2.5 text-xs text-slate-400 font-bold font-mono">meses</span>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-5 md:p-6 flex flex-col gap-5">
          <span className="text-[10px] font-extrabold text-slate-400 font-mono tracking-wider uppercase block">
            Resultado da Simulação
          </span>

          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase">Prestação Mensal (CDC)</span>
            <span className="text-3xl font-extrabold font-mono text-slate-900 leading-none">
              R$ {valorParcela.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className="text-[10px] text-slate-400 font-normal mt-1 leading-tight">
              Projeção calculada para {parcelas} parcelas fixas mensais.
            </span>
          </div>

          {/* Stats breakdown */}
          <div className="grid grid-cols-2 gap-4 border-t border-slate-200/60 pt-4">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-slate-400 uppercase">Valor Financiado</span>
              <span className="text-sm font-bold font-mono text-slate-800">
                R$ {financed.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-slate-400 uppercase">Juros Totais Pagos</span>
              <span className="text-sm font-bold font-mono text-slate-850 text-slate-800">
                R$ {jurosTotais.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex flex-col col-span-2 border-t border-slate-100 pt-2.5">
              <span className="text-[9px] font-bold text-slate-400 uppercase">Valor Total Pago (Financiado + Entrada)</span>
              <span className="text-md font-extrabold font-mono text-blue-600">
                R$ {totalPago.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          {/* Visual comparison bar */}
          <div className="flex flex-col gap-1 border-t border-slate-200/60 pt-4">
            <div className="flex justify-between text-[9px] font-bold text-slate-450 text-slate-400 uppercase">
              <span>Distribuição do Custo</span>
              <span>Juros: {interestRatio.toFixed(1)}%</span>
            </div>
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex">
              <div 
                className="bg-blue-500 h-full" 
                style={{ width: `${100 - interestRatio}%` }}
                title="Capital amortizado"
              />
              <div 
                className="bg-rose-500 h-full" 
                style={{ width: `${interestRatio}%` }}
                title="Juros acumulados"
              />
            </div>
            <div className="flex justify-between text-[9px] font-semibold text-slate-500 mt-1">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-blue-500" /> Capital ({ (100 - interestRatio).toFixed(1) }%)
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-rose-500" /> Juros ({ interestRatio.toFixed(1) }%)
              </span>
            </div>
          </div>

          {/* Disclaimer warning */}
          <div className="flex gap-2.5 bg-amber-50/50 border border-amber-100/50 rounded-xl p-3 mt-2 text-[10px] text-slate-650 leading-normal">
            <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="font-normal">
              <strong>Aviso Trabalhista/Financeiro:</strong> Esta simulação considera regras padrões de juros compostos de tabela Price (CDC). Encargos de IOF, tarifas cadastrais de avaliação (TAC) ou seguros de proteção financeira não estão inclusos e podem elevar o CET (Custo Efetivo Total) real no banco.
            </p>
          </div>
        </div>
      </div>

      {/* Amortization Table */}
      {schedule.length > 0 && (
        <div className="border-t border-slate-200 pt-6 flex flex-col gap-4">
          <h4 className="text-xs font-bold text-slate-800 font-display flex items-center gap-1.5 uppercase tracking-wide">
            <Calendar className="w-4 h-4 text-blue-500" />
            Cronograma de Amortização das Parcelas (Primeiros 12 Meses)
          </h4>
          <div className="overflow-x-auto border border-slate-150 rounded-xl">
            <table className="w-full text-[10.5px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <th className="py-2.5 px-4">Mês</th>
                  <th className="py-2.5 px-4 text-right">Parcela</th>
                  <th className="py-2.5 px-4 text-right">Amortização</th>
                  <th className="py-2.5 px-4 text-right">Juros (a.m.)</th>
                  <th className="py-2.5 px-4 text-right">Saldo Devedor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {schedule.slice(0, 12).map((row) => (
                  <tr key={row.mes} className="hover:bg-slate-50/50">
                    <td className="py-2 px-4 font-bold text-slate-600">Nº {row.mes}</td>
                    <td className="py-2 px-4 text-right text-slate-800">R$ {row.parcela.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className="py-2 px-4 text-right text-emerald-600">R$ {row.amortizado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className="py-2 px-4 text-right text-rose-600">R$ {row.juros.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className="py-2 px-4 text-right text-slate-500">R$ {row.saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {n > 12 && (
            <p className="text-[10px] text-slate-400 text-center font-normal">
              Mostrando os 12 primeiros meses. O cronograma completo possui {n} parcelas de amortização.
            </p>
          )}
        </div>
      )}
    </div>
  );
};
