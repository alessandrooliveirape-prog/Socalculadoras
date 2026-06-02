import React, { useState, useEffect, useMemo } from 'react';
import { RotateCcw, AlertCircle, HelpCircle, CheckCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CalculatorDef } from '../types';

interface GenericDynamicCalcProps {
  calculator: CalculatorDef;
  onCalculate: (inputs: Record<string, any>, outputs: Record<string, any>) => void;
}

export const GenericDynamicCalc: React.FC<GenericDynamicCalcProps> = ({ calculator, onCalculate }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  // Initialize inputs state from template defaults
  const [inputs, setInputs] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    calculator.inputs?.forEach(inp => {
      initial[inp.id] = inp.defaultValue;
    });
    return initial;
  });

  // Reset inputs when selected calculator changes
  useEffect(() => {
    const initial: Record<string, any> = {};
    calculator.inputs?.forEach(inp => {
      initial[inp.id] = inp.defaultValue;
    });
    setInputs(initial);
    setExpandedFaq(null);
  }, [calculator]);

  // Handle single input update
  const handleInputChange = (id: string, value: any) => {
    setInputs(prev => {
      const next = { ...prev, [id]: value };
      return next;
    });
  };

  // Run dynamic calculation using the calculator's compiled formula
  const calculatedOutputs = useMemo(() => {
    if (!calculator.calculate) return {};
    try {
      return calculator.calculate(inputs);
    } catch (e) {
      console.error('Calculation failed in dynamic formulas engine:', e);
      return {};
    }
  }, [inputs, calculator]);

  // Synchronize outputs back to parent App for PDF/CSV conversions
  useEffect(() => {
    onCalculate(inputs, calculatedOutputs);
  }, [inputs, calculatedOutputs, onCalculate]);

  // Recount inputs reset
  const handleReset = () => {
    const initial: Record<string, any> = {};
    calculator.inputs?.forEach(inp => {
      initial[inp.id] = inp.defaultValue;
    });
    setInputs(initial);
  };

  // Find primary output to style it with a glamorous dark card
  const primaryOutput = calculator.outputs?.find(out => out.isPrimary) || calculator.outputs?.[0];
  const secondaryOutputs = calculator.outputs?.filter(out => out.id !== primaryOutput?.id) || [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="dynamic-host-terminal">
      {/* Parameters Panel */}
      <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-bold text-slate-800">Parâmetros de Ajuste</h3>
            <span className="text-[10px] bg-blue-105 bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded uppercase font-mono tracking-wide">Dinamizado</span>
          </div>
          <button 
            onClick={handleReset}
            className="text-xs font-semibold text-gray-500 hover:text-slate-800 flex items-center gap-1 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Resetar</span>
          </button>
        </div>

        {/* Dynamic Inputs List */}
        <div className="flex flex-col gap-4">
          {calculator.inputs?.map(inp => {
            const val = inputs[inp.id] !== undefined ? inputs[inp.id] : inp.defaultValue;
            return (
              <div key={inp.id} className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-600 flex items-center gap-1">
                  <span>{inp.label}</span>
                </label>
                
                {inp.type === 'select' ? (
                  <select
                    value={val}
                    onChange={(e) => handleInputChange(inp.id, e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-250 focus:border-blue-500 rounded-lg outline-none cursor-pointer transition-colors font-medium text-slate-800"
                  >
                    {inp.options?.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                ) : (
                  <div className="relative">
                    {inp.prefix && (
                      <span className="absolute left-3 top-2.5 text-xs font-semibold text-slate-450 text-gray-400">
                        {inp.prefix}
                      </span>
                    )}
                    <input 
                      type="number"
                      value={val === undefined ? '' : val}
                      onChange={(e) => handleInputChange(inp.id, parseFloat(e.target.value) || 0)}
                      className={`w-full py-2 text-xs bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-250 focus:border-blue-500 rounded-lg outline-none font-mono transition-all font-semibold ${
                        inp.prefix ? 'pl-9' : 'pl-3'
                      } ${inp.suffix ? 'pr-12' : 'pr-3'}`}
                    />
                    {inp.suffix && (
                      <span className="absolute right-3 top-2.5 text-xs font-semibold text-slate-450 text-gray-400">
                        {inp.suffix}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Safety Disclaimer for legal index match */}
        <div className="p-3.5 bg-amber-50/60 border border-amber-200/50 rounded-xl flex gap-3 text-[10.5px] text-amber-900/80 leading-relaxed font-sans">
          <AlertCircle className="w-4.5 h-4.5 text-amber-500 shrink-0" />
          <p>
            Cálculos matemáticos referenciais baseados em equações fiscais e médias nacionais oficiais vigentes. Recomendado consultar especialistas da profissão antes de contratações.
          </p>
        </div>
      </div>

      {/* Results View Panel */}
      <div className="lg:col-span-7 flex flex-col gap-5">
        
        {/* Glamorous Primary Metric Banner Card */}
        {primaryOutput && (
          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md flex flex-col gap-3 relative overflow-hidden select-none">
            {/* Background design elements to match our core custom utilities design theme */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />

            <div className="flex items-center gap-1.5 z-10">
              <span className="text-[10px] font-sans font-extrabold tracking-wider text-blue-400 uppercase">
                {primaryOutput.label}
              </span>
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            </div>

            <div className="flex items-baseline gap-1 z-10">
              {primaryOutput.prefix && (
                <span className="text-xl font-bold font-sans text-slate-400">
                  {primaryOutput.prefix}
                </span>
              )}
              <h2 className="text-3xl font-display font-black tracking-tight text-emerald-400 font-mono">
                {typeof calculatedOutputs[primaryOutput.id] === 'number'
                  ? calculatedOutputs[primaryOutput.id].toLocaleString('pt-BR', { minimumFractionDigits: 2 })
                  : calculatedOutputs[primaryOutput.id] || '0,00'}
              </h2>
              {primaryOutput.suffix && (
                <span className="text-sm font-bold font-sans text-slate-400 ml-1">
                  {primaryOutput.suffix}
                </span>
              )}
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed max-w-md mt-1 z-10 font-sans">
              Este resultado representa o valor operacional calculado com base nos parâmetros inseridos ao lado, otimizado para estimar seus custos ou ganhos instantaneamente.
            </p>
          </div>
        )}

        {/* Breakdown of Secondary Metrics */}
        {secondaryOutputs.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 className="text-xs font-bold text-slate-800 border-b border-gray-100 pb-2 mb-3.5">
              Demonstrativo de Variáveis Secundárias
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {secondaryOutputs.map(out => (
                <div key={out.id} className="bg-slate-50/60 p-3.5 rounded-xl border border-slate-100 flex flex-col gap-1 hover:border-slate-200 transition-all">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    {out.label}
                  </span>
                  
                  <div className="flex items-baseline gap-0.5 mt-1">
                    {out.prefix && <span className="text-[11px] font-bold text-slate-500 font-mono">{out.prefix}</span>}
                    <span className="text-md font-bold text-slate-800 font-mono">
                      {typeof calculatedOutputs[out.id] === 'number'
                        ? calculatedOutputs[out.id].toLocaleString('pt-BR', { minimumFractionDigits: 2 })
                        : calculatedOutputs[out.id] || '0,00'}
                    </span>
                    {out.suffix && <span className="text-[10px] font-bold text-slate-500 font-mono ml-0.5">{out.suffix}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Contextual FAQ Area for SEO Optimization and AdSense Guidelines */}
        {calculator.faq && calculator.faq.length > 0 && (
          <div className="bg-blue-50/20 border border-blue-100/50 rounded-2xl p-6 flex flex-col gap-4 select-none font-sans">
            <div className="flex items-center gap-2 border-b border-blue-50 pb-2">
              <HelpCircle className="w-4.5 h-4.5 text-blue-600" />
              <h4 className="text-xs font-bold text-slate-800">Guia de Uso & Informações Ad AdSense</h4>
            </div>

            <div className="flex flex-col gap-2.5">
              {calculator.faq.map((q, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div key={idx} className="border-b border-blue-100/35 last:border-0 pb-2 bg-white/50 px-3 py-2.5 rounded-lg hover:bg-white/95 transition-all">
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center text-left font-bold text-slate-800 cursor-pointer focus:outline-none"
                    >
                      <span className="text-[11px] text-slate-705 text-slate-700">{q.question}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-blue-500 shrink-0 ml-2"
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
                          <p className="text-[10.5px] text-gray-500 leading-relaxed font-normal">
                            {q.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
