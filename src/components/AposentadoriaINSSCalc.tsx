import React, { useState, useEffect } from 'react';
import { ShieldCheck, Download, DollarSign, HelpCircle, ArrowRight, UserCheck, Activity, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AposentadoriaINSSCalcProps {
  onCalculate: (results: any) => void;
}

export const AposentadoriaINSSCalc: React.FC<AposentadoriaINSSCalcProps> = ({ onCalculate }) => {
  const [gender, setGender] = useState<'M' | 'F'>('M');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [age, setAge] = useState<number>(55);
  const [contributionYears, setContributionYears] = useState<number>(25);

  const [results, setResults] = useState({
    minAgeTarget: 65,
    minContributionTarget: 15,
    pointsTarget: 103,
    currentPoints: 0,
    yearsToMinAge: 0,
    yearsToContribution: 0,
    remainingPoints: 0,
    canRetireByAge: false,
    canRetireByPoints: false,
    canRetireAtAll: false,
  });

  const calculateRetirementSim = () => {
    // 2026/2025 Targets para Regras Gerais Básicas pós Reforma
    const minAgeTarget = gender === 'M' ? 65 : 62;
    const minContributionTarget = 15; // Mínimo de carência para aposentadoria por idade

    // Para regra de pontos: mínimo 30 anos (mulher) e 35 anos (homem) de contribuição
    const minContributionForPoints = gender === 'M' ? 35 : 30;
    const pointsTarget = gender === 'M' ? 103 : 93; // Alvo de pontos para 2026

    // Cálculos de Status Atual
    const currentPoints = age + contributionYears;
    const yearsToMinAge = Math.max(0, minAgeTarget - age);
    
    // Contribuição restante para atingir o tempo mínimo de pontos
    const yearsToContribution = Math.max(0, minContributionForPoints - contributionYears);
    const remainingPoints = Math.max(0, pointsTarget - currentPoints);

    // Validação da elegibilidade das regras
    // Regra 1: Por idade (Idade Mínima + Contribuição Mínima de 15 anos)
    const canRetireByAge = age >= minAgeTarget && contributionYears >= minContributionTarget;

    // Regra 2: Por pontos (Idade + Tempo de contribuição, exigindo tempo mínimo de contribuição de 30/35 anos)
    const canRetireByPoints = contributionYears >= minContributionForPoints && currentPoints >= pointsTarget;

    const canRetireAtAll = canRetireByAge || canRetireByPoints;

    const calcResults = {
      minAgeTarget,
      minContributionTarget,
      pointsTarget,
      currentPoints,
      yearsToMinAge,
      yearsToContribution,
      remainingPoints,
      canRetireByAge,
      canRetireByPoints,
      canRetireAtAll,
    };

    setResults(calcResults);

    onCalculate({
      ...calcResults,
      canRetire: canRetireAtAll,
      yearsRemaining: Math.min(yearsToMinAge, yearsToContribution)
    });
  };

  useEffect(() => {
    calculateRetirementSim();
  }, [gender, age, contributionYears]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Parameters Panel */}
      <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <h3 className="text-base font-semibold text-slate-800 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <span>Simulador Previdenciário</span>
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Gênero Biológico</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setGender('M')}
                className={`py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  gender === 'M'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-gray-50 border-gray-200 text-slate-600 hover:bg-gray-100'
                }`}
              >
                Masculino
              </button>
              <button
                onClick={() => setGender('F')}
                className={`py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  gender === 'F'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-gray-50 border-gray-200 text-slate-600 hover:bg-gray-100'
                }`}
              >
                Feminino
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Idade Atual (Anos)</label>
            <input
              type="number"
              min="16"
              max="100"
              value={age}
              onChange={(e) => setAge(Math.min(100, Math.max(16, Number(e.target.value))))}
              className="w-full bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 font-semibold text-slate-800 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">Anos de Contribuição Ativos</label>
            <input
              type="number"
              min="0"
              max="65"
              value={contributionYears}
              onChange={(e) => setContributionYears(Math.min(65, Math.max(0, Number(e.target.value))))}
              className="w-full bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-500 rounded-lg py-3 px-4 font-semibold text-slate-800 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Results Workspace */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className={`rounded-2xl p-6 text-white shadow-xl relative overflow-hidden transition-all duration-300 ${results.canRetireAtAll ? 'bg-emerald-950 border border-emerald-580 bg-emerald-900' : 'bg-slate-900'}`}>
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ShieldCheck className="w-32 h-32 text-blue-500" />
          </div>
          <div className="relative z-10">
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest block">
              STATUS GERAL DA APOSENTADORIA
            </span>
            <div className="text-3xl font-bold mt-2 flex items-center gap-2">
              {results.canRetireAtAll ? (
                <span className="text-emerald-400 font-extrabold text-3xl">Elegível para Aposentadoria! 🎉</span>
              ) : (
                <span className="text-amber-400 font-bold text-3xl">Ainda Contribuindo... ⏳</span>
              )}
            </div>

            <div className="flex gap-4 mt-6 border-t border-slate-800 pt-5 text-xs text-slate-350">
              <div className="flex-1 bg-white/[0.04] p-3 rounded-xl">
                <span className="text-[10px] text-slate-400 block uppercase font-bold mb-1">Regra de Idade</span>
                <span className="text-sm font-semibold block">
                  {results.canRetireByAge ? '✔️ Atingiu' : `Faltam ${results.yearsToMinAge} anos de idade`}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Alvo: {results.minAgeTarget} anos idv</span>
              </div>
              <div className="flex-1 bg-white/[0.04] p-3 rounded-xl">
                <span className="text-[10px] text-slate-400 block uppercase font-bold mb-1">Regra de Pontos</span>
                <span className="text-sm font-semibold block">
                  {results.canRetireByPoints ? '✔️ Atingiu' : `Faltam ${results.remainingPoints} pts / ${results.yearsToContribution} contrib.`}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Alvo: {results.pointsTarget} pontos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown comparison metrics */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b pb-2">Diagnóstico dos Requisitos pós Reforma</h4>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500 font-medium">Idade Atual do Trabalhador</span>
              <span className="font-bold text-slate-800 font-mono">{age} anos</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500 font-medium">Anos de Contribuição Registrados</span>
              <span className="font-bold text-slate-800 font-mono">{contributionYears} anos</span>
            </div>
            <div className="flex justify-between text-sm border-t pt-2 bg-slate-50 p-2 rounded-lg">
              <span className="text-slate-600 font-bold">Pontuação Acumulada atual (Idade + Tempo)</span>
              <span className="font-extrabold text-blue-600 font-mono">{results.currentPoints} pontos</span>
            </div>
          </div>
        </div>

        {/* Detailed FAQ Block */}
        <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-5 flex flex-col gap-4">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <HelpCircle className="w-4 h-4 text-slate-500" />
            <span>Perguntas Frequentes (FAQ) - Aposentadoria INSS</span>
          </h4>
          <div className="flex flex-col gap-2.5 text-xs">
            {[
              {
                q: "Como funciona a Regra de Pontos?",
                a: "A regra de pontos soma a idade com o tempo de contribuição. Em 2026, os homens precisam atingir no mínimo 103 pontos (com 35 anos de contribuição mínima) e as mulheres 93 pontos (com 30 anos de contribuição mínima) para receber a aposentadoria integral nessa modalidade de transição."
              },
              {
                q: "Qual a idade mínima para a aposentadoria por idade em 2026?",
                a: "Após a reforma da previdência concluída em 2019, a idade de transição estabilizou em 62 anos para as mulheres e de 65 anos para os homens, exigindo-se sempre um mínimo absoluto de 15 anos de contribuição previdenciária válida de ambos os lados."
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
