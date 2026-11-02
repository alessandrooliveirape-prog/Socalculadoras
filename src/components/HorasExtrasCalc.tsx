import React, { useState, useEffect } from 'react';
import { Clock, Download, DollarSign, HelpCircle, ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HorasExtrasCalcProps {
  onCalculate: (results: any) => void;
}

export const HorasExtrasCalc: React.FC<HorasExtrasCalcProps> = ({ onCalculate }) => {
  const [salary, setSalary] = useState<number>(3500);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [workload, setWorkload] = useState<number>(220); // 220, 200, 180, 150, etc.
  const [hours50, setHours50] = useState<number>(10);
  const [hours100, setHours100] = useState<number>(5);

  const [results, setResults] = useState({
    regularHourValue: 0,
    extraHour50Value: 0,
    extraHour100Value: 0,
    total50Value: 0,
    total100Value: 0,
    totalExtraAmount: 0,
    salaryWithExtras: 0,
  });

  const calculateHours = () => {
    // 1. Hora comum
    const regularHourValue = parseFloat((salary / workload).toFixed(4));

    // 2. Horas com adicionais
    const extraHour50Value = parseFloat((regularHourValue * 1.5).toFixed(4));
    const extraHour100Value = parseFloat((regularHourValue * 2.0).toFixed(4));

    // 3. Totais por classificação
    const total50Value = parseFloat((extraHour50Value * hours50).toFixed(2));
    const total100Value = parseFloat((extraHour100Value * hours100).toFixed(2));

    // 4. Soma de horas extras e salário final
    const totalExtraAmount = parseFloat((total50Value + total100Value).toFixed(2));
    const salaryWithExtras = parseFloat((salary + totalExtraAmount).toFixed(2));

    const calcResults = {
      regularHourValue: parseFloat(regularHourValue.toFixed(2)),
      extraHour50Value: parseFloat(extraHour50Value.toFixed(2)),
      extraHour100Value: parseFloat(extraHour100Value.toFixed(2)),
      total50Value,
      total100Value,
      totalExtraAmount,
      salaryWithExtras,
    };

    setResults(calcResults);

    onCalculate({
      ...calcResults,
      totalExtasAmount: totalExtraAmount
    });
  };

  useEffect(() => {
    calculateHours();
  }, [salary, workload, hours50, hours100]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Parameters Panel */}
      <div className="lg:col-span-12 xl:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>Dados de Horas Extras</span>
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
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Carga Horária Mensal (Dropdown)</label>
            <select
              value={workload}
              onChange={(e) => setWorkload(Number(e.target.value))}
              className="w-full bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg py-3 px-4 font-semibold text-slate-800 outline-none transition-all cursor-pointer"
            >
              <option value={220}>220 horas semanais padrão (44h/semana)</option>
              <option value={200}>200 horas semanais (40h/semana)</option>
              <option value={180}>180 horas semanais (36h/semana)</option>
              <option value={150}>150 horas semanais (30h/semana)</option>
              <option value={110}>110 horas (Meio Período)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Qtd de Horas Extras (50%)</label>
              <input
                type="number"
                min="0"
                value={hours50}
                onChange={(e) => setHours50(Math.max(0, Number(e.target.value)))}
                className="w-full bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 font-semibold text-slate-800 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Qtd de Horas Extras (100%)</label>
              <input
                type="number"
                min="0"
                value={hours100}
                onChange={(e) => setHours100(Math.max(0, Number(e.target.value)))}
                className="w-full bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 font-semibold text-slate-800 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Workspace Panel */}
      <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-6">
        <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Clock className="w-32 h-32 text-blue-500" />
          </div>
          <div className="relative z-10">
            <span className="text-slate-450 text-slate-400 text-xs font-bold uppercase tracking-widest">
              Total de Adicional de Horas Extras Bruto
            </span>
            <div className="text-4xl font-bold mt-1 text-blue-400">
              R$ {results.totalExtraAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="flex gap-6 mt-6 border-t border-slate-800 pt-5 text-sm">
              <div>
                <div className="text-slate-400 text-[10px] uppercase font-bold">Salário Bruto Inicial</div>
                <div className="text-base font-semibold">
                  R$ {salary.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>
              <div className="border-l border-slate-800 pl-6">
                <div className="text-slate-400 text-[10px] uppercase font-bold">Salário Final Acumulado com Extras</div>
                <div className="text-base font-semibold text-blue-300">
                  R$ {results.salaryWithExtras.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown detail list */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b pb-2">Valores Unitários & Unidades</h4>
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Valor Unitário da Hora Trabalhada Comum (Regular)</span>
              <span className="font-semibold text-slate-800">R$ {results.regularHourValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
            
            <div className="border-t border-dashed border-slate-100 my-2 pt-2 flex flex-col gap-2.5">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Valor Unitário da Hora com Adicional de 50%</span>
                <span className="font-semibold text-slate-800">R$ {results.extraHour50Value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-505 text-slate-600 block pl-3">Subtotal de Horas Extras 50% ({hours50} horas)</span>
                <span className="font-semibold text-slate-700">R$ {results.total50Value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            <div className="border-t border-dashed border-slate-100 my-2 pt-2 flex flex-col gap-2.5">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Valor Unitário da Hora com Adicional de 100%</span>
                <span className="font-semibold text-slate-800">R$ {results.extraHour100Value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-505 text-slate-600 block pl-3">Subtotal de Horas Extras 100% ({hours100} horas)</span>
                <span className="font-semibold text-slate-700">R$ {results.total100Value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ panel description */}
        <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-5 flex flex-col gap-4">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <HelpCircle className="w-4 h-4 text-slate-500" />
            <span>Perguntas Frequentes (FAQ) - Horas Extras</span>
          </h4>
          <div className="flex flex-col gap-2.5 text-xs">
            {[
              {
                q: "Qual a diferença do Adicional de 50% e 100%?",
                a: "O adicional de 50% é o valor mínimo estabelecido pela constituição para horas extras prestadas de segunda-feira a sábado. O adicional de 100% (dobro do pagamento regular) é obrigatório por lei para horas extras realizadas em domingos ou feriados civis."
              },
              {
                q: "O que é a Carga Horária Mensal e qual o divisor correto do salário?",
                a: "A carga horária mensal é o número total de horas de trabalho mensais acordadas em contrato. Para a tradicional jornada de 44 horas semanais, o divisor legal ideal para base de cálculo de valor de hora trabalhada é 220. Para jornadas de 40 horas semanais, utiliza-se o divisor 200, e proporcionalmente para outras jornadas."
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
