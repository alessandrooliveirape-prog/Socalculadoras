import React, { useState, useMemo } from 'react';
import { HeartPulse, User, RefreshCw, Activity, Sparkles, Scale, Info } from 'lucide-react';

interface IbcCaloricoTrackerProps {
  onCalculate: (results: {
    bmi: number;
    bmiClass: string;
    bmr: number;
    tdee: number;
    targetCalories: number;
    waterNeeds: number;
  }) => void;
}

export const IbcCaloricoTracker: React.FC<IbcCaloricoTrackerProps> = ({ onCalculate }) => {
  const [weight, setWeight] = useState<number>(75);
  const [height, setHeight] = useState<number>(175); // in cm
  const [age, setAge] = useState<number>(28);
  const [gender, setGender] = useState<'M' | 'F'>('M');
  const [activity, setActivity] = useState<string>('moderate');
  const [goal, setGoal] = useState<string>('maintain');

  const calcResults = useMemo(() => {
    const rawW = Number(weight) || 0;
    const rawH = Number(height) || 0;
    const rawAge = Number(age) || 0;

    if (rawW <= 0 || rawH <= 0 || rawAge <= 0) {
      return {
        bmi: 0,
        bmiClass: 'Insira dados válidos',
        bmiColor: 'text-gray-400',
        bmiBarOffset: 0,
        bmr: 0,
        tdee: 0,
        targetCalories: 0,
        waterNeeds: 0,
        macros: { protein: 0, fat: 0, carbs: 0 }
      };
    }

    // 1. BMI (IMC) Calculation
    const heightMeters = rawH / 100;
    const bmi = rawW / (heightMeters * heightMeters);
    let bmiClass = '';
    let bmiColor = '';
    let bmiBarOffset = 0; // percentage status coordinate on visual bar

    if (bmi < 18.5) {
      bmiClass = 'Abaixo do Peso';
      bmiColor = 'text-sky-500';
      bmiBarOffset = 15;
    } else if (bmi < 24.9) {
      bmiClass = 'Peso Normal (Ideal)';
      bmiColor = 'text-green-500';
      bmiBarOffset = 40;
    } else if (bmi < 29.9) {
      bmiClass = 'Sobrepeso (Atenção)';
      bmiColor = 'text-amber-500';
      bmiBarOffset = 65;
    } else {
      bmiClass = 'Obesidade (Risco)';
      bmiColor = 'text-rose-500';
      bmiBarOffset = 90;
    }

    // 2. BMR (TMB - Taxa Metabólica Basal) Harris-Benedict Equation
    let bmr = 0;
    if (gender === 'M') {
      bmr = 88.362 + (13.397 * rawW) + (4.799 * rawH) - (5.677 * rawAge);
    } else {
      bmr = 447.593 + (9.247 * rawW) + (3.098 * rawH) - (4.33 * rawAge);
    }

    // 3. TDEE (Gasto Energético Diário Total)
    let multiplier = 1.2;
    if (activity === 'sedentary') multiplier = 1.2;
    else if (activity === 'light') multiplier = 1.375;
    else if (activity === 'moderate') multiplier = 1.55;
    else if (activity === 'active') multiplier = 1.725;
    else if (activity === 'extra') multiplier = 1.9;

    const tdee = bmr * multiplier;

    // 4. Target Calories based on Goal
    let targetCalories = tdee;
    if (goal === 'lose') targetCalories = tdee - 500;
    else if (goal === 'gain') targetCalories = tdee + 400;

    targetCalories = Math.max(1200, targetCalories); // safe min ceiling

    // 5. Water Needs Calculation (35 ml per kg)
    const waterNeeds = rawW * 35; // in ml

    // 6. Macros calculation
    // Pro: 2g/kg (lose/gain) or 1.6g/kg (maintain)
    const pPerKg = goal === 'maintain' ? 1.6 : 2.0;
    const proteinGrams = rawW * pPerKg;
    const proteinCalories = proteinGrams * 4;

    // Fat: 22% of target calories
    const fatCalories = targetCalories * 0.22;
    const fatGrams = fatCalories / 9;

    // Carbs: rest of remaining calories
    const carbsCalories = Math.max(0, targetCalories - proteinCalories - fatCalories);
    const carbsGrams = carbsCalories / 4;

    return {
      bmi,
      bmiClass,
      bmiColor,
      bmiBarOffset,
      bmr,
      tdee,
      targetCalories,
      waterNeeds,
      macros: {
        protein: Math.round(proteinGrams),
        fat: Math.round(fatGrams),
        carbs: Math.round(carbsGrams)
      }
    };
  }, [weight, height, age, gender, activity, goal]);

  // Propagate to parent
  React.useEffect(() => {
    onCalculate({
      bmi: calcResults.bmi,
      bmiClass: calcResults.bmiClass,
      bmr: calcResults.bmr,
      tdee: calcResults.tdee,
      targetCalories: calcResults.targetCalories,
      waterNeeds: calcResults.waterNeeds
    });
  }, [calcResults, onCalculate]);

  const handleReset = () => {
    setWeight(75);
    setHeight(175);
    setAge(28);
    setGender('M');
    setActivity('moderate');
    setGoal('maintain');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Parameters Panel */}
      <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <h3 className="text-base font-semibold text-slate-800 flex items-center gap-1.5">
            <HeartPulse className="w-4.5 h-4.5 text-rose-500 animate-pulse" />
            <span>Dados Corporais</span>
          </h3>
          <button 
            onClick={handleReset}
            className="text-xs font-semibold text-gray-500 hover:text-slate-800 flex items-center gap-1 transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Limpar</span>
          </button>
        </div>

        {/* Input Gender */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-600">Sexo Biológico</label>
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

        {/* Weight & Height Side by Side */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-600">Peso Atual (kg)</label>
            <div className="relative">
              <span className="absolute right-3 top-2.5 text-xs text-gray-400 font-semibold font-mono">kg</span>
              <input 
                type="number"
                value={weight || ''}
                onChange={(e) => setWeight(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full pl-3 pr-9 py-2 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-600">Altura (cm)</label>
            <div className="relative">
              <span className="absolute right-3 top-2.5 text-xs text-gray-400 font-semibold font-mono">cm</span>
              <input 
                type="number"
                value={height || ''}
                onChange={(e) => setHeight(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full pl-3 pr-9 py-2 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono"
              />
            </div>
          </div>
        </div>

        {/* Age */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-600">Idade (Anos)</label>
          <div className="relative">
            <span className="absolute right-3 top-2.5 text-xs text-gray-400 font-semibold font-mono">anos</span>
            <input 
              type="number"
              value={age || ''}
              onChange={(e) => setAge(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full pl-3 pr-12 py-2 text-sm bg-gray-50 hover:bg-gray-100/55 focus:bg-white border border-gray-200 focus:border-slate-800 rounded-lg outline-none font-mono"
            />
          </div>
        </div>

        {/* Activity Level */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-600">Nível de Atividade Diária</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full px-3 py-2 text-xs bg-gray-50 hover:bg-gray-100/55 border border-gray-200 rounded-lg text-slate-700 font-semibold outline-none cursor-pointer"
          >
            <option value="sedentary">Sedentário (Trabalho sentado, sem treino)</option>
            <option value="light">Atividade Leve (Treino leve de 1 a 2x p/ semana)</option>
            <option value="moderate">Atividade Moderada (Exercício ativo 3 a 5x p/ semana)</option>
            <option value="active">Muito Ativo (Treino pesado intenso diário 6 a 7x)</option>
            <option value="extra">Atleta Extremo (Treinos constantes pesados e rotina física)</option>
          </select>
        </div>

        {/* Target Weight Goal */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-gray-600">Meta Pessoal de Fitness</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full px-3 py-2 text-xs bg-gray-50 hover:bg-gray-100/55 border border-gray-200 rounded-lg text-slate-700 font-semibold outline-none cursor-pointer"
          >
            <option value="lose">Emagrecimento (Déficit Calórico Moderado de Gordura)</option>
            <option value="maintain">Manter Peso Saudável (Homeostase / Gasto diário)</option>
            <option value="gain">Ganho de Massa / Hipertrofia (Superávit Calórico de Músculo)</option>
          </select>
        </div>
      </div>

      {/* Results View Panel */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Card 1: IMC */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Seu IMC</span>
            <div>
              <span className="text-lg font-bold text-slate-900 font-mono">
                {calcResults.bmi.toFixed(1)}
              </span>
              <p className={`text-xs font-bold mt-0.5 ${calcResults.bmiColor}`}>{calcResults.bmiClass}</p>
            </div>
          </div>

          {/* Card 2: Caloric Target */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Meta de Calorias</span>
            <div>
              <span className="text-lg font-bold text-slate-900 font-mono">
                {Math.round(calcResults.targetCalories).toLocaleString('pt-BR')} kcal
              </span>
              <p className="text-[10px] text-gray-400 mt-0.5">Sugerido p/ alcançar objetivo</p>
            </div>
          </div>

          {/* Card 3: Water needs */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col justify-between">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Consumo de Água</span>
            <div>
              <span className="text-lg font-bold text-sky-600 font-mono">
                {(calcResults.waterNeeds / 1000).toFixed(2)} L
              </span>
              <p className="text-[10px] text-gray-400 mt-0.5">Requisito diário mínimo ideal</p>
            </div>
          </div>
        </div>

        {/* Visual Gauge of IMC Status */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-3.5">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
            <Scale className="w-4 h-4 text-slate-650" />
            <span>Classificação do IMC Visual</span>
          </span>

          <div className="relative pt-1.5">
            {/* Horizontal spectrum bar */}
            <div className="w-full bg-slate-100 h-3 rounded-full flex overflow-hidden">
              <div className="w-[20%] bg-sky-200"></div> {/* Baixo */}
              <div className="w-[30%] bg-emerald-400"></div> {/* Normal */}
              <div className="w-[25%] bg-amber-400"></div> {/* Sobrepeso */}
              <div className="w-[25%] bg-rose-400"></div> {/* Obesidade */}
            </div>

            {/* Float marker indicating user IMC position */}
            {calcResults.bmi > 0 && (
              <div 
                className="absolute top-0 flex flex-col items-center transition-all duration-300"
                style={{ left: `${calcResults.bmiBarOffset}%`, transform: 'translateX(-50%)' }}
              >
                <div className="w-2.5 h-2.5 bg-slate-900 rounded-full border border-white"></div>
                <span className="text-[9px] font-bold font-mono text-slate-900 bg-white shadow-md border hover:bg-gray-50 border-gray-200 px-1 py-0.5 rounded mt-1 select-none">
                  {calcResults.bmi.toFixed(1)}
                </span>
              </div>
            )}
          </div>

          <div className="flex justify-between text-[9px] font-semibold text-gray-400 font-mono pt-2">
            <span>Abaixo 18.5</span>
            <span>Ideal (18.5 - 24.9)</span>
            <span>Sobrepeso (25 - 29.9)</span>
            <span>Sobre 30</span>
          </div>
        </div>

        {/* Macronutrients distribution dashboard targets */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-4">
          <div className="flex justify-between items-center border-b border-gray-100 pb-2.5">
            <h4 className="text-xs font-bold text-slate-805 uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-500 animate-spin" />
              <span>Metas de Macronutrientes Sugeridas</span>
            </h4>
            <span className="text-[10px] bg-slate-100 border border-slate-200/50 text-slate-600 px-2 py-0.5 rounded font-mono font-bold select-none">Fórmula Otimizada</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Carb */}
            <div className="border border-slate-100 rounded-xl p-3 bg-indigo-50/20 text-indigo-950 flex flex-col gap-1">
              <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-600">Carboidratos</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-bold font-mono">{calcResults.macros.carbs}g</span>
                <span className="text-[10px] text-indigo-500 font-semibold">({Math.round(((calcResults.macros.carbs * 4) / calcResults.targetCalories) * 100)}%)</span>
              </div>
              <p className="text-[10px] text-gray-400">Combustível muscular essencial.</p>
            </div>

            {/* Protein */}
            <div className="border border-slate-100 rounded-xl p-3 bg-emerald-50/20 text-emerald-950 flex flex-col gap-1">
              <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-600">Proteínas</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-bold font-mono">{calcResults.macros.protein}g</span>
                <span className="text-[10px] text-emerald-500 font-semibold">({Math.round(((calcResults.macros.protein * 4) / calcResults.targetCalories) * 100)}%)</span>
              </div>
              <p className="text-[10px] text-gray-400">Construção ativa e saciedade.</p>
            </div>

            {/* Fat */}
            <div className="border border-slate-100 rounded-xl p-3 bg-amber-50/20 text-amber-950 flex flex-col gap-1">
              <span className="text-[9px] font-bold uppercase tracking-wider text-amber-600">Gorduras</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-bold font-mono">{calcResults.macros.fat}g</span>
                <span className="text-[10px] text-amber-600 font-semibold">({Math.round(((calcResults.macros.fat * 9) / calcResults.targetCalories) * 100)}%)</span>
              </div>
              <p className="text-[10px] text-gray-400 font-sans">Produção hormonal saudável.</p>
            </div>
          </div>

          <div className="flex gap-2 items-center bg-gray-50 p-2.5 rounded-lg border border-gray-100 mt-1">
            <Info className="w-3.5 h-3.5 text-gray-500 shrink-0" />
            <p className="text-[10px] text-gray-400 leading-normal">
              Esta distribuição calórica é sugerida para pessoas que praticam musculação ou treinamento físico. Se você tem condições renais pré-existentes, ajuste o total proteico conforme prescrição médica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
