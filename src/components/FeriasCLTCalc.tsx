import React, { useState, useEffect } from 'react';
import { Calendar, Download, DollarSign, HelpCircle, ArrowRight, ShieldCheck, HelpCircle as HelpIcon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FeriasCLTCalcProps {
  onCalculate: (results: any) => void;
}

export const FeriasCLTCalc: React.FC<FeriasCLTCalcProps> = ({ onCalculate }) => {
  const [salary, setSalary] = useState<number>(3500);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [monthsAcquired, setMonthsAcquired] = useState<number>(12);
  const [sellOneThird, setSellOneThird] = useState<boolean>(true); // Venda de férias (Abono pecuniário)

  const [results, setResults] = useState({
    totalDaysOfRight: 30,
    daysToEnjoy: 20,
    daysToSell: 10,
    vacationValue: 0,
    vacationOneThird: 0,
    abonoValue: 0,
    abonoOneThird: 0,
    grossVacationAmount: 0,
    inssDeduction: 0,
    irrfDeduction: 0,
    totalDeductions: 0,
    netVacationAmount: 0,
  });

  const calculateVacation = () => {
    const dailyRate = salary / 30;

    // Calcular dias totais equivalentes aos meses adquiridos
    const totalDaysOfRight = Math.min(30, Math.round((30 / 12) * monthsAcquired));

    let daysToSell = 0;
    let daysToEnjoy = totalDaysOfRight;

    if (sellOneThird) {
      daysToSell = Math.round(totalDaysOfRight / 3); // tipicamente 10 dias de venda
      daysToEnjoy = totalDaysOfRight - daysToSell; // tipicamente 20 dias de descanso
    }

    // 1. Proventos tributáveis de férias
    const vacationValue = parseFloat((dailyRate * daysToEnjoy).toFixed(2));
    const vacationOneThird = parseFloat((vacationValue / 3).toFixed(2));

    // 2. Abono pecuniário (isento de INSS e IRRF)
    const abonoValue = parseFloat((dailyRate * daysToSell).toFixed(2));
    const abonoOneThird = parseFloat((abonoValue / 3).toFixed(2));

    const grossVacationAmount = parseFloat((vacationValue + vacationOneThird + abonoValue + abonoOneThird).toFixed(2));

    // 3. Tributação: somente sobre as férias gozadas e seu terço constitucional
    const baseTaxable = vacationValue + vacationOneThird;

    let inss = 0;
    if (baseTaxable <= 1412) {
      inss = baseTaxable * 0.075;
    } else if (baseTaxable <= 2666.68) {
      inss = (1412 * 0.075) + ((baseTaxable - 1412) * 0.09);
    } else if (baseTaxable <= 4000.03) {
      inss = (1412 * 0.075) + ((2666.68 - 1412) * 0.09) + ((baseTaxable - 2666.68) * 0.12);
    } else {
      const maxInss = Math.min(baseTaxable, 7786.02);
      inss = (1412 * 0.075) + ((2666.68 - 1412) * 0.09) + ((4000.03 - 2666.68) * 0.12) + ((maxInss - 4000.03) * 0.14);
    }
    inss = parseFloat(inss.toFixed(2));

    let irrf = 0;
    const baseIrrf = baseTaxable - inss;
    if (baseIrrf <= 2259.20) {
      irrf = 0;
    } else if (baseIrrf <= 2828.65) {
      irrf = (baseIrrf * 0.075) - 169.44;
    } else if (baseIrrf <= 3751.05) {
      irrf = (baseIrrf * 0.15) - 381.44;
    } else if (baseIrrf <= 4664.68) {
      irrf = (baseIrrf * 0.225) - 662.77;
    } else {
      irrf = (baseIrrf * 0.275) - 896.00;
    }
    irrf = Math.max(0, parseFloat(irrf.toFixed(2)));

    const totalDeductions = parseFloat((inss + irrf).toFixed(2));
    const netVacationAmount = parseFloat((grossVacationAmount - totalDeductions).toFixed(2));

    const calcResults = {
      totalDaysOfRight,
      daysToEnjoy,
      daysToSell,
      vacationValue,
      vacationOneThird,
      abonoValue,
      abonoOneThird,
      grossVacationAmount,
      inssDeduction: inss,
      irrfDeduction: irrf,
      totalDeductions,
      netVacationAmount,
    };

    setResults(calcResults);

    onCalculate({
      ...calcResults,
      vacationDays: daysToEnjoy,
      totalAmount: netVacationAmount
    });
  };

  useEffect(() => {
    calculateVacation();
  }, [salary, monthsAcquired, sellOneThird]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Parameters Panel */}
      <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>Dados de Férias CLT</span>
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-550 text-slate-500 uppercase mb-2">Salário Bruto Mensal</label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-medium">R$</span>
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 rounded-lg py-3 pl-10 pr-4 font-semibold text-slate-800 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Meses Adquiridos (Período Aquisitivo)</label>
            <input
              type="number"
              min="1"
              max="12"
              value={monthsAcquired}
              onChange={(e) => setMonthsAcquired(Math.min(12, Math.max(1, Number(e.target.value))))}
              className="w-full bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 font-semibold text-slate-800 outline-none transition-all"
            />
            <span className="text-[10px] text-slate-400 mt-1 block font-mono">Dão direito a {Math.min(30, Math.round((30 / 12) * monthsAcquired))} dias de férias</span>
          </div>

          <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4 border border-slate-100">
            <div>
              <span className="text-xs font-semibold text-slate-700 block">Vender 1/3 das Férias</span>
              <span className="text-[10px] text-slate-400">Abono Pecuniário de 10 dias vendidos</span>
            </div>
            <button
              onClick={() => setSellOneThird(!sellOneThird)}
              className={`w-14 h-7 rounded-full transition-all relative ${
                sellOneThird ? 'bg-blue-600' : 'bg-slate-300'
              }`}
            >
              <span
                className={`absolute w-5.5 h-5.5 bg-white rounded-full top-0.5 transition-all ${
                  sellOneThird ? 'right-1' : 'left-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Results panel */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Calendar className="w-32 h-32 text-blue-500" />
          </div>
          <div className="relative z-10">
            <span className="text-slate-450 text-slate-400 text-xs font-bold uppercase tracking-widest">
              Líquido Estimado a Receber ({results.daysToEnjoy} dias descansados + {results.daysToSell} dias vendidos)
            </span>
            <div className="text-4xl font-bold mt-1 text-blue-400">
              R$ {results.netVacationAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="flex gap-6 mt-6 border-t border-slate-800 pt-5 text-sm">
              <div>
                <div className="text-slate-400 text-[10px] uppercase font-bold">Total Bruto de Férias</div>
                <div className="text-base font-semibold">
                  R$ {results.grossVacationAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>
              <div className="border-l border-slate-800 pl-6">
                <div className="text-slate-400 text-[10px] uppercase font-bold">Total de Descontos</div>
                <div className="text-base font-semibold text-rose-400">
                  R$ {results.totalDeductions.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown details */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b pb-2">Demonstrativo Detalhado</h4>
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Férias Gozadas ({results.daysToEnjoy} dias)</span>
              <span className="font-semibold text-slate-800">R$ {results.vacationValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">1/3 Constitucional sobre Férias Gozadas</span>
              <span className="font-semibold text-slate-800">R$ {results.vacationOneThird.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>

            {results.daysToSell > 0 && (
              <>
                <div className="flex justify-between text-sm border-t border-dashed border-slate-100 pt-2.5">
                  <span className="text-slate-500 font-medium">Abono Pecuniário (venda de {results.daysToSell} dias - Isento de imposto)</span>
                  <span className="font-semibold text-slate-800">R$ {results.abonoValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">1/3 Constitucional sobre Abono Pecuniário</span>
                  <span className="font-semibold text-slate-800">R$ {results.abonoOneThird.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
              </>
            )}

            <div className="flex justify-between text-sm border-t pt-2.5">
              <span className="text-slate-500">Desconto Previdenciário (INSS)</span>
              <span className="font-semibold text-rose-500">- R$ {results.inssDeduction.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Desconto Imposto de Renda (IRRF)</span>
              <span className="font-semibold text-rose-500">- R$ {results.irrfDeduction.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>

        {/* FAQ Block */}
        <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-5 flex flex-col gap-4">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <HelpCircle className="w-4 h-4 text-slate-500" />
            <span>Perguntas Frequentes (FAQ) - Férias CLT</span>
          </h4>
          <div className="flex flex-col gap-2.5 text-xs">
            {[
              {
                q: "O que é Abono Pecuniário?",
                a: "Abono Pecuniário é o termo legal para o ato popularmente conhecido como \"vender as férias\". O trabalhador vende até 10 dias (1/3) de suas férias regulamentares de 30 dias para o empregador em troca de dinheiro, passando a gozar de 20 dias."
              },
              {
                q: "Incidem impostos sobre o Abono Pecuniário?",
                a: "Não. O valor recebido pelo abono pecuniário venda de férias e o seu respectivo terço (1/3) constitucional de abono são totalmente isentos de incidências trabalhistas, como contribuição previdenciária (INSS) e Imposto de Renda (IRRF)."
              }
            ].map((item, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} className="border-b border-slate-100/80 last:border-0 pb-2 bg-white/55 px-3 py-2.5 rounded-lg hover:bg-white/95 transition-all">
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center text-left font-bold text-slate-800 cursor-pointer focus:outline-none"
                  >
                    <span>{item.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-slate-500 shrink-0 ml-2"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-600 leading-relaxed font-normal">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
