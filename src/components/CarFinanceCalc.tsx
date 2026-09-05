import React, { useState, useEffect } from 'react';
import { Car, Coins, Info, Calendar, Sparkles, ShieldCheck } from 'lucide-react';

interface CarFinanceCalcProps {
  onCalculate: (results: any) => void;
}

export const CarFinanceCalc: React.FC<CarFinanceCalcProps> = ({ onCalculate }) => {
  const [valorVeiculo, setValorVeiculo] = useState<number>(65000);
  const [entrada, setEntrada] = useState<number>(15000);
  const [taxaMensal, setTaxaMensal] = useState<number>(1.79);
  const [parcelas, setParcelas] = useState<number>(48);

  // Math logic
  const financed = Math.max(0, valorVeiculo - entrada);
  const i = (taxaMensal || 0) / 100;
  const n = parcelas || 1;
  
  let valorParcela = 0;
  if (i > 0 && financed > 0) {
    valorParcela = financed * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  } else if (financed > 0 && n > 0) {
    valorParcela = financed / n;
  }
  
  const totalPago = (valorParcela * n) + entrada;
  const jurosTotais = Math.max(0, (valorParcela * n) - financed);

  // Estimativa de desconto ao amortizar a última parcela hoje (valor presente)
  const valorPresenteUltimaParcela = valorParcela > 0 && i > 0 ? valorParcela / Math.pow(1 + i, n) : valorParcela;
  const economiaAoAmortizarUltima = Math.max(0, valorParcela - valorPresenteUltimaParcela);

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

  const interestRatio = totalPago > entrada ? (jurosTotais / (totalPago - entrada)) * 100 : 0;

  const aplicarPreset = (veiculo: number, ent: number, meses: number, taxa: number) => {
    setValorVeiculo(veiculo);
    setEntrada(ent);
    setParcelas(meses);
    setTaxaMensal(taxa);
  };

  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col gap-6 animate-fadeIn">
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100 shrink-0">
            <Car className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-800 font-display">Simulador de Financiamento de Veículos e CDC 2026</h3>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-extrabold bg-blue-100 text-blue-700 rounded-full">CDC Oficial</span>
            </div>
            <p className="text-[10px] text-slate-400 font-normal leading-tight mt-0.5">
              Simule prestações fixas no Crédito Direto ao Consumidor (CDC), juros totais e o desconto de juros na amortização antecipada.
            </p>
          </div>
        </div>
      </div>

      {/* Presets Rápidos */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-500" /> Presets Rápidos para Carros e Motos:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => aplicarPreset(65000, 15000, 48, 1.79)}
            className="p-2.5 rounded-xl border text-left transition hover:border-blue-300 hover:bg-blue-50/40 bg-slate-50 border-slate-200 text-slate-700 cursor-pointer"
          >
            <span className="block text-[11px] font-bold text-slate-800">🚗 Carro Popular Novo/Semi</span>
            <span className="block text-[10px] text-slate-500">R$ 65k (Entrada 15k • 48x • 1,79% a.m.)</span>
          </button>
          <button
            type="button"
            onClick={() => aplicarPreset(18000, 4000, 36, 1.95)}
            className="p-2.5 rounded-xl border text-left transition hover:border-blue-300 hover:bg-blue-50/40 bg-slate-50 border-slate-200 text-slate-700 cursor-pointer"
          >
            <span className="block text-[11px] font-bold text-slate-800">🏍️ Moto / Delivery 160cc</span>
            <span className="block text-[10px] text-slate-500">R$ 18k (Entrada 4k • 36x • 1,95% a.m.)</span>
          </button>
          <button
            type="button"
            onClick={() => aplicarPreset(130000, 35000, 60, 1.65)}
            className="p-2.5 rounded-xl border text-left transition hover:border-blue-300 hover:bg-blue-50/40 bg-slate-50 border-slate-200 text-slate-700 cursor-pointer"
          >
            <span className="block text-[11px] font-bold text-slate-800">🚙 SUV / Caminhonete</span>
            <span className="block text-[10px] text-slate-500">R$ 130k (Entrada 35k • 60x • 1,65% a.m.)</span>
          </button>
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
            Resultado da Simulação CDC
          </span>

          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-slate-500 uppercase">Prestação Mensal (CDC Tabela Price)</span>
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
              <span className="text-sm font-bold font-mono text-rose-600">
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
            <div className="flex justify-between text-[9px] font-bold text-slate-400 uppercase">
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

          {/* Box de Amortização Antecipada CDC */}
          <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl flex flex-col gap-1.5 text-xs text-emerald-900">
            <div className="flex items-center gap-1.5 font-bold text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Direito à Amortização Antecipada (Art. 52, § 2º CDC)</span>
            </div>
            <p className="text-[11px] text-emerald-700 leading-snug">
              Ao quitar parcelas de <strong>trás para frente</strong>, o banco é obrigado por lei a abater 100% dos juros futuros daquela parcela.
            </p>
            {valorParcela > 0 && (
              <div className="mt-1 pt-1.5 border-t border-emerald-200/70 flex justify-between items-center text-[10.5px]">
                <span>Se quitar a última parcela (nº {parcelas}) hoje:</span>
                <strong className="font-mono text-emerald-800 font-bold">Paga ~R$ {valorPresenteUltimaParcela.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (Economia: R$ {economiaAoAmortizarUltima.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})</strong>
              </div>
            )}
          </div>

          {/* Disclaimer warning */}
          <div className="flex gap-2.5 bg-amber-50/50 border border-amber-100/50 rounded-xl p-3 mt-1 text-[10px] text-slate-650 leading-normal">
            <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="font-normal">
              <strong>Nota Técnica:</strong> Esta simulação adota a Tabela Price convencional do Crédito Direto ao Consumidor (CDC). Despesas com IOF, taxa de cadastro bancário (TAC) e seguro prestamista são adicionadas pelas instituições financeiras no Custo Efetivo Total (CET).
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
