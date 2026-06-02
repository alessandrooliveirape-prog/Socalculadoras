import React, { useState, useEffect } from 'react';
import { FileText, Download, DollarSign, HelpCircle, ArrowRight, ShieldCheck, Trash2, Calendar, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RescisaoCLTCalcProps {
  onCalculate: (results: any) => void;
}

export const RescisaoCLTCalc: React.FC<RescisaoCLTCalcProps> = ({ onCalculate }) => {
  const [salary, setSalary] = useState<number>(3500);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [reason, setReason] = useState<'demissao_sem_justa' | 'pedido_demissao'>('demissao_sem_justa');
  const [daysWorked, setDaysWorked] = useState<number>(15);
  const [monthsWorked, setMonthsWorked] = useState<number>(18);
  const [hasVestedVacation, setHasVestedVacation] = useState<boolean>(false);
  const [noticePeriod, setNoticePeriod] = useState<'indenizado' | 'trabalhado' | 'dispensado'>('indenizado');

  // Calculated values
  const [results, setResults] = useState({
    salaryBalance: 0,
    noticeAmount: 0,
    proportionateThirteenth: 0,
    proportionateVacation: 0,
    proportionateVacationOneThird: 0,
    vestedVacation: 0,
    vestedVacationOneThird: 0,
    fgtsBalance: 0,
    fgtsFine: 0,
    totalEarnings: 0,
    totalDeductions: 0,
    netAmount: 0,
    fgtsTotalToWithdraw: 0,
  });

  const calculateRescision = () => {
    // 1. Saldo de salário
    const salaryDecimal = salary / 30;
    const salaryBalance = parseFloat((salaryDecimal * daysWorked).toFixed(2));

    // 2. Aviso Prévio
    let noticeAmount = 0;
    if (reason === 'demissao_sem_justa') {
      if (noticePeriod === 'indenizado') {
        // Lei 12.506/2011: 30 dias + 3 dias por ano trabalhado (limite de 90 dias total)
        const years = Math.floor(monthsWorked / 12);
        const noticeDays = Math.min(30 + (years * 3), 90);
        noticeAmount = parseFloat((salaryDecimal * noticeDays).toFixed(2));
      } else {
        noticeAmount = 0;
      }
    } else if (reason === 'pedido_demissao') {
      if (noticePeriod === 'indenizado') {
        // No pedido de demissão, "indenizado" significa descontado do funcionário pelo não cumprimento do aviso
        noticeAmount = -parseFloat(salary.toFixed(2));
      } else {
        noticeAmount = 0;
      }
    }

    // 3. 13º Salário proporcional
    const fractionMonthsThirteenth = (monthsWorked % 12) === 0 && monthsWorked > 0 ? 12 : (monthsWorked % 12);
    // Se trabalhou mais de 14 dias no último mês, conta como mês cheio para 13º e férias proporcional.
    const tenthMonths = fractionMonthsThirteenth;
    const proportionateThirteenth = parseFloat(((salary / 12) * tenthMonths).toFixed(2));

    // 4. Férias Proporcionais
    // Férias são baseadas no período aquisitivo de 12 meses. Cada ano de trabalho gera férias. 
    // Os meses restantes (proporcionais) geram férias proporcionais.
    const remainingMonthsVacation = monthsWorked % 12;
    const proportionateVacation = parseFloat(((salary / 12) * remainingMonthsVacation).toFixed(2));
    const proportionateVacationOneThird = parseFloat((proportionateVacation / 3).toFixed(2));

    // 5. Férias Vencidas
    const vestedVacation = hasVestedVacation ? parseFloat(salary.toFixed(2)) : 0;
    const vestedVacationOneThird = hasVestedVacation ? parseFloat((salary / 3).toFixed(2)) : 0;

    // 6. FGTS e Multa de 40% (somente demissão sem justa causa)
    // FGTS acumulado (estimado de 8% do salário por mês de trabalho)
    const fgtsBalance = parseFloat(((salary * 0.08) * monthsWorked).toFixed(2));
    let fgtsFine = 0;
    if (reason === 'demissao_sem_justa') {
      fgtsFine = parseFloat((fgtsBalance * 0.40).toFixed(2));
    }

    // 7. Descontos aproximados sobre saldo de salário e 13º (INSS e IRRF)
    // Para simplificar a simulação no simulador CLT:
    const baseInssEarnings = salaryBalance + (proportionateThirteenth > 0 ? proportionateThirteenth : 0);
    let estimatedInssDeduction = 0;
    if (baseInssEarnings <= 1412) {
      estimatedInssDeduction = baseInssEarnings * 0.075;
    } else if (baseInssEarnings <= 2666.68) {
      estimatedInssDeduction = baseInssEarnings * 0.09;
    } else if (baseInssEarnings <= 4000.03) {
      estimatedInssDeduction = baseInssEarnings * 0.12;
    } else {
      estimatedInssDeduction = baseInssEarnings * 0.14;
    }
    estimatedInssDeduction = parseFloat(estimatedInssDeduction.toFixed(2));

    // Desconto de aviso prévio se for descontado no pedido de demissão
    const noticeDeduction = noticeAmount < 0 ? Math.abs(noticeAmount) : 0;
    const totalDeductions = parseFloat((estimatedInssDeduction + noticeDeduction).toFixed(2));

    // Proventos positivos
    const positiveNotice = noticeAmount > 0 ? noticeAmount : 0;
    const totalEarnings = parseFloat((
      salaryBalance +
      positiveNotice +
      proportionateThirteenth +
      proportionateVacation +
      proportionateVacationOneThird +
      vestedVacation +
      vestedVacationOneThird
    ).toFixed(2));

    const netAmount = parseFloat((totalEarnings - totalDeductions).toFixed(2));
    const fgtsTotalToWithdraw = reason === 'demissao_sem_justa' ? parseFloat((fgtsBalance + fgtsFine).toFixed(2)) : 0;

    const calcResults = {
      salaryBalance,
      noticeAmount: positiveNotice,
      proportionateThirteenth,
      proportionateVacation,
      proportionateVacationOneThird,
      vestedVacation,
      vestedVacationOneThird,
      fgtsBalance,
      fgtsFine,
      totalEarnings,
      totalDeductions,
      netAmount,
      fgtsTotalToWithdraw,
    };

    setResults(calcResults);
    onCalculate({
      ...calcResults,
      monthsOfWork: monthsWorked,
      salary: salary,
      reasonLabel: reason === 'demissao_sem_justa' ? 'Demissão sem Justa Causa' : 'Pedido de Demissão'
    });
  };

  useEffect(() => {
    calculateRescision();
  }, [salary, reason, daysWorked, monthsWorked, hasVestedVacation, noticePeriod]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Parameters Panel */}
      <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <span>Dados da Rescisão CLT</span>
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-450 text-slate-500 uppercase mb-2">Salário Bruto Mensal</label>
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
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Motivo da Rescisão</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setReason('demissao_sem_justa')}
                className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  reason === 'demissao_sem_justa'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-gray-50 border-gray-200 text-slate-600 hover:bg-gray-100'
                }`}
              >
                Demissão sem Justa Causa
              </button>
              <button
                onClick={() => setReason('pedido_demissao')}
                className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  reason === 'pedido_demissao'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-gray-50 border-gray-200 text-slate-600 hover:bg-gray-100'
                }`}
              >
                Pedido de Demissão
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Dias Trabalhados no Mês</label>
              <input
                type="number"
                min="1"
                max="31"
                value={daysWorked}
                onChange={(e) => setDaysWorked(Math.min(31, Math.max(1, Number(e.target.value))))}
                className="w-full bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 font-semibold text-slate-800 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Meses Trabalhados</label>
              <input
                type="number"
                min="1"
                value={monthsWorked}
                onChange={(e) => setMonthsWorked(Math.max(1, Number(e.target.value)))}
                className="w-full bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 font-semibold text-slate-800 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Aviso Prévio</label>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={() => setNoticePeriod('indenizado')}
                className={`py-2 text-[11px] font-semibold rounded-lg border transition-all cursor-pointer ${
                  noticePeriod === 'indenizado'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-gray-50 border-gray-200 text-slate-600 hover:bg-gray-100'
                }`}
              >
                {reason === 'pedido_demissao' ? 'Descontado' : 'Indenizado'}
              </button>
              <button
                onClick={() => setNoticePeriod('trabalhado')}
                className={`py-2 text-[11px] font-semibold rounded-lg border transition-all cursor-pointer ${
                  noticePeriod === 'trabalhado'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-gray-50 border-gray-200 text-slate-600 hover:bg-gray-100'
                }`}
              >
                Trabalhado
              </button>
              <button
                onClick={() => setNoticePeriod('dispensado')}
                className={`py-2 text-[11px] font-semibold rounded-lg border transition-all cursor-pointer ${
                  noticePeriod === 'dispensado'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-gray-50 border-gray-200 text-slate-600 hover:bg-gray-100'
                }`}
              >
                Dispensado
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4 border border-slate-100">
            <div>
              <span className="text-xs font-semibold text-slate-700 block">Férias Vencidas</span>
              <span className="text-[10px] text-slate-450 text-slate-400">Tem um período completo de férias não gozado?</span>
            </div>
            <button
              onClick={() => setHasVestedVacation(!hasVestedVacation)}
              className={`w-14 h-7 rounded-full transition-all relative ${
                hasVestedVacation ? 'bg-blue-600' : 'bg-slate-350 bg-slate-300'
              }`}
            >
              <span
                className={`absolute w-5.5 h-5.5 bg-white rounded-full top-0.5 transition-all ${
                  hasVestedVacation ? 'right-1' : 'left-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Results Workspace */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <FileText className="w-32 h-32 text-blue-500" />
          </div>
          <div className="relative z-10">
            <span className="text-slate-450 text-slate-400 text-xs font-bold uppercase tracking-widest">Líquido a Receber em Conta</span>
            <div className="text-4xl font-bold mt-1 text-blue-400">
              R$ {results.netAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="flex gap-6 mt-6 border-t border-slate-800 pt-5">
              <div>
                <div className="text-slate-400 text-[10px] uppercase font-bold">Total de Proventos</div>
                <div className="text-base font-semibold">
                  R$ {results.totalEarnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>
              <div className="border-l border-slate-800 pl-6">
                <div className="text-slate-400 text-[10px] uppercase font-bold">Total Descontos</div>
                <div className="text-base font-semibold text-rose-400">
                  R$ {results.totalDeductions.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown Panel */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b pb-2">Demonstrativo Detalhado</h4>
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Saldo de Salário ({daysWorked} dias)</span>
              <span className="font-semibold text-slate-800">R$ {results.salaryBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
            
            {results.noticeAmount > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Aviso Prévio Indenizado</span>
                <span className="font-semibold text-slate-800">R$ {results.noticeAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
            )}

            <div className="flex justify-between text-sm">
              <span className="text-slate-500">13º Proporcional ({monthsWorked % 12 || 12} meses)</span>
              <span className="font-semibold text-slate-800">R$ {results.proportionateThirteenth.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Férias Proporcionais</span>
              <span className="font-semibold text-slate-800">R$ {results.proportionateVacation.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Terço Constitucional de Férias Proporcionais</span>
              <span className="font-semibold text-slate-800">R$ {results.proportionateVacationOneThird.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>

            {hasVestedVacation && (
              <>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Férias Vencidas</span>
                  <span className="font-semibold text-slate-800">R$ {results.vestedVacation.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Terço de Férias Vencidas</span>
                  <span className="font-semibold text-slate-800">R$ {results.vestedVacationOneThird.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
              </>
            )}

            {reason === 'demissao_sem_justa' && (
              <div className="mt-2 pt-2 border-t border-dashed border-slate-100 flex flex-col gap-2 bg-blue-50/50 p-3 rounded-lg">
                <div className="flex justify-between text-xs text-blue-800 font-bold">
                  <span>FGTS Acumulado Estimado</span>
                  <span>R$ {results.fgtsBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-xs text-blue-850 text-blue-900 font-bold">
                  <span>Multa de 40% do FGTS</span>
                  <span>R$ {results.fgtsFine.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-sm text-blue-950 font-extrabold border-t border-blue-200/50 pt-2">
                  <span>Total Saque de FGTS</span>
                  <span>R$ {results.fgtsTotalToWithdraw.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Detailed FAQ Section */}
        <div className="bg-slate-50/70 border border-slate-205 border-slate-200 rounded-xl p-5 flex flex-col gap-4">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <HelpCircle className="w-4 h-4 text-slate-500" />
            <span>Perguntas Frequentes (FAQ) - Rescisão CLT</span>
          </h4>
          <div className="flex flex-col gap-2.5 text-xs">
            {[
              {
                q: "Qual a diferença entre Pedido de Demissão e Demissão Sem Justa Causa?",
                a: "Na demissão sem justa causa, o trabalhador tem direito ao saque do FGTS, multa de 40%, seguro-desemprego e aviso prévio indenizado/trabalhado. No pedido de demissão, o trabalhador perde o direito ao saque do FGTS, à multa rescisória e ao seguro-desemprego, além de ter que cumprir o aviso prévio sob pena de tê-lo descontado."
              },
              {
                q: "Como funciona a proporcionalidade do 13º e Férias?",
                a: "Ocorre na proporção de 1/12 para cada mês de trabalho realizado. Períodos iguais ou superiores a 15 dias trabalhados dentro de um mesmo mês dão direito a 1/12 desse avo correspondente."
              },
              {
                q: "O que é a multa de 40% do FGTS?",
                a: "É uma compensação indenizatória devida pelo empregador que demite o funcionário sem justa causa. O cálculo é feito com base em 40% sobre o montante acumulado por depósitos mensais de FGTS realizados ao longo do contrato."
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
