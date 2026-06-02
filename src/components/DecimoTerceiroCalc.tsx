import React, { useState, useEffect } from 'react';
import { Briefcase, Download, DollarSign, HelpCircle, ArrowRight, ShieldCheck, Clipboard, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DecimoTerceiroCalcProps {
  onCalculate: (results: any) => void;
}

export const DecimoTerceiroCalc: React.FC<DecimoTerceiroCalcProps> = ({ onCalculate }) => {
  const [salary, setSalary] = useState<number>(3500);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [months, setMonths] = useState<number>(12);
  const [parcel, setParcel] = useState<'primeira' | 'segunda' | 'ambas'>('ambas');

  const [results, setResults] = useState({
    grossThirteenth: 0,
    currentParcelGross: 0,
    inssDeduction: 0,
    irrfDeduction: 0,
    totalDeductions: 0,
    netThirteenth: 0,
    firstParcelValue: 0,
    secondParcelValue: 0,
  });

  const calculateThirteenth = () => {
    // 1. Valor bruto total correspondente aos meses trabalhados
    const grossThirteenth = parseFloat(((salary / 12) * months).toFixed(2));

    // 2. Primeiro Passo: Primeira Parcela (50% bruto sem descontos)
    const firstParcelValue = parseFloat((grossThirteenth * 0.5).toFixed(2));

    // 3. Segundo Passo: Descontos Tributários (aplicados sobre o valor total do 13o)
    let inss = 0;
    const baseInss = grossThirteenth;

    if (baseInss <= 1412) {
      inss = baseInss * 0.075;
    } else if (baseInss <= 2666.68) {
      inss = (1412 * 0.075) + ((baseInss - 1412) * 0.09);
    } else if (baseInss <= 4000.03) {
      inss = (1412 * 0.075) + ((2666.68 - 1412) * 0.09) + ((baseInss - 2666.68) * 0.12);
    } else {
      const maxInss = Math.min(baseInss, 7786.02); // Teto do INSS aproximado
      inss = (1412 * 0.075) + ((2666.68 - 1412) * 0.09) + ((4000.03 - 2666.68) * 0.12) + ((maxInss - 4000.03) * 0.14);
    }
    inss = parseFloat(inss.toFixed(2));

    let irrf = 0;
    const baseIrrf = grossThirteenth - inss;
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

    // Segunda parcela é: 50% do bruto subtraído dos descontos totais de INSS e IRRF
    const secondParcelValue = parseFloat((firstParcelValue - (inss + irrf)).toFixed(2));

    // Determinar outputs com base na parcela selecionada
    let currentParcelGross = 0;
    let inssDeduction = 0;
    let irrfDeduction = 0;
    let netThirteenth = 0;

    if (parcel === 'primeira') {
      currentParcelGross = firstParcelValue;
      inssDeduction = 0;
      irrfDeduction = 0;
      netThirteenth = firstParcelValue;
    } else if (parcel === 'segunda') {
      currentParcelGross = firstParcelValue;
      inssDeduction = inss;
      irrfDeduction = irrf;
      netThirteenth = secondParcelValue;
    } else {
      // Ambas as parcelas acumuladas
      currentParcelGross = grossThirteenth;
      inssDeduction = inss;
      irrfDeduction = irrf;
      netThirteenth = parseFloat((grossThirteenth - (inss + irrf)).toFixed(2));
    }

    const totalDeductions = parseFloat((inssDeduction + irrfDeduction).toFixed(2));

    const calcResults = {
      grossThirteenth,
      currentParcelGross,
      inssDeduction,
      irrfDeduction,
      totalDeductions,
      netThirteenth,
      firstParcelValue,
      secondParcelValue,
    };

    setResults(calcResults);

    onCalculate({
      ...calcResults,
      parcelLabel: parcel === 'primeira' ? '1ª Parcela' : parcel === 'segunda' ? '2ª Parcela' : 'Primeira e Segunda Parcelas',
      netValue: netThirteenth
    });
  };

  useEffect(() => {
    calculateThirteenth();
  }, [salary, months, parcel]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Parameters Panel */}
      <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <span>Simulação de 13º Salário</span>
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Salário Bruto de Referência</label>
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
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Meses Trabalhados no Ano</label>
            <input
              type="number"
              min="1"
              max="12"
              value={months}
              onChange={(e) => setMonths(Math.min(12, Math.max(1, Number(e.target.value))))}
              className="w-full bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 font-semibold text-slate-800 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Parcela a Calcular</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setParcel('primeira')}
                className={`py-2 text-[11px] font-semibold rounded-lg border transition-all cursor-pointer ${
                  parcel === 'primeira'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-gray-50 border-gray-200 text-slate-600 hover:bg-gray-100'
                }`}
              >
                1ª Parcela
              </button>
              <button
                onClick={() => setParcel('segunda')}
                className={`py-2 text-[11px] font-semibold rounded-lg border transition-all cursor-pointer ${
                  parcel === 'segunda'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-gray-50 border-gray-200 text-slate-600 hover:bg-gray-100'
                }`}
              >
                2ª Parcela
              </button>
              <button
                onClick={() => setParcel('ambas')}
                className={`py-2 text-[11px] font-semibold rounded-lg border transition-all cursor-pointer ${
                  parcel === 'ambas'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-gray-50 border-gray-200 text-slate-600 hover:bg-gray-100'
                }`}
              >
                Ambas (Soma)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Panel */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Briefcase className="w-32 h-32 text-blue-500" />
          </div>
          <div className="relative z-10">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
              Líquido Estimado - {parcel === 'primeira' ? '1ª Parcela' : parcel === 'segunda' ? '2ª Parcela' : 'Total Líquido'}
            </span>
            <div className="text-4xl font-bold mt-1 text-blue-400">
              R$ {results.netThirteenth.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="flex gap-6 mt-6 border-t border-slate-800 pt-5 text-sm">
              <div>
                <div className="text-slate-400 text-[10px] uppercase font-bold">1ª Parcela (Sem Descontos)</div>
                <div className="text-base font-semibold">
                  R$ {results.firstParcelValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>
              <div className="border-l border-slate-800 pl-6">
                <div className="text-slate-400 text-[10px] uppercase font-bold">2ª Parcela (Líquida com Desconto)</div>
                <div className="text-base font-semibold">
                  R$ {results.secondParcelValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b pb-2">Demonstrativo de Valores</h4>
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Valor Bruto do Período ({months}/12 meses)</span>
              <span className="font-semibold text-slate-800">R$ {results.grossThirteenth.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>

            {parcel !== 'primeira' && (
              <>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Desconto Previdenciário (INSS)</span>
                  <span className="font-semibold text-rose-500">- R$ {results.inssDeduction.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Imposto de Renda Retido (IRRF)</span>
                  <span className="font-semibold text-rose-500">- R$ {results.irrfDeduction.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-sm border-t pt-2 font-semibold">
                  <span className="text-slate-800">Total Deduções Tributárias</span>
                  <span className="text-rose-500">R$ {results.totalDeductions.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* FAQ block */}
        <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-5 flex flex-col gap-4">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <HelpCircle className="w-4 h-4 text-slate-500" />
            <span>Perguntas Frequentes (FAQ) - Décimo Terceiro</span>
          </h4>
          <div className="flex flex-col gap-2.5 text-xs">
            {[
              {
                q: "Como são divididas as parcelas do 13º Salário?",
                a: "A primeira parcela deve ser paga entre 1º de fevereiro e 30 de novembro de cada ano, correspondendo a 50% do salário sem descontos fiscais. A segunda parcela deve ser quitada até 20 de dezembro e sobre ela incidem as contribuições de INSS e IRRF."
              },
              {
                q: "Quem tem direito a receber o Décimo Terceiro?",
                a: "Todo trabalhador sob o regime da CLT que tenha trabalhado pelo menos 15 dias dentro no ano civil e que não tenha sido demitido por justa causa."
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
