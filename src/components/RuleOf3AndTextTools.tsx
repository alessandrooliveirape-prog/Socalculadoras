import React, { useState, useMemo } from 'react';
import { Percent, Hash, AlignLeft, Sparkles, RefreshCw, Layers, Sliders, Type } from 'lucide-react';

interface RuleOf3AndTextToolsProps {
  onCalculate: (results: {
    ruleOf3Result: string;
    textLength: number;
    textWords: number;
  }) => void;
}

export const RuleOf3AndTextTools: React.FC<RuleOf3AndTextToolsProps> = ({ onCalculate }) => {
  const [activeTab, setActiveTab] = useState<'regra3' | 'texto'>('regra3');

  // Rule of 3 states
  const [valA, setValA] = useState<string>('100');
  const [valB, setValB] = useState<string>('50');
  const [valC, setValC] = useState<string>('200');

  // Rule of 3 proportion style: "Direct" vs "Inverse"
  const [directionType, setDirectionType] = useState<'direct' | 'inverse'>('direct');

  // Text tools states
  const [text, setText] = useState<string>(
    'Bem-vindo à ferramenta de análise de texto! Digite ou cole seu conteúdo aqui para contar caracteres, palavras, estimar tempo de leitura de forma instantânea e realizar limpezas rápidas de formatação de caixas.'
  );

  // Compute Rule of 3
  const ruleOf3Result = useMemo(() => {
    const a = parseFloat(valA);
    const b = parseFloat(valB);
    const c = parseFloat(valC);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
      return 'Digite valores válidos (A não pode ser zero)';
    }

    let x = 0;
    if (directionType === 'direct') {
      // Direct proportion: X = (B * C) / A
      x = (b * c) / a;
    } else {
      // Inverse proportion: X = (A * B) / C
      if (c === 0) return 'Divisão por zero inválida';
      x = (a * b) / c;
    }

    return x.toLocaleString('pt-BR', { maximumFractionDigits: 4 });
  }, [valA, valB, valC, directionType]);

  // Compute Text Analysis
  const txtStats = useMemo(() => {
    const characters = text.length;
    const cleanText = text.trim();
    const words = cleanText === '' ? 0 : cleanText.split(/\s+/).length;
    const paragraphs = cleanText === '' ? 0 : text.split('\n').filter(p => p.trim() !== '').length;
    const readingTimeMinutes = Math.ceil(words / 200); // 200 words per minute avg

    return {
      characters,
      words,
      paragraphs,
      readingTimeMinutes
    };
  }, [text]);

  // Sync back to App
  React.useEffect(() => {
    onCalculate({
      ruleOf3Result,
      textLength: txtStats.characters,
      textWords: txtStats.words
    });
  }, [ruleOf3Result, txtStats, onCalculate]);

  // Text alteration functions
  const handleUppercase = () => setText(text.toUpperCase());
  const handleLowercase = () => setText(text.toLowerCase());
  const handleCapitalize = () => {
    setText(
      text
        .toLowerCase()
        .replace(/(^\s*|[.!?]\s+)([a-zà-ÿ])/g, (m, p1, p2) => p1 + p2.toUpperCase())
    );
  };
  const handleRemoveExcessSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Sub tabs selectors */}
      <div className="flex bg-slate-100 rounded-xl p-1 max-w-sm border border-slate-200/40">
        <button
          onClick={() => setActiveTab('regra3')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'regra3' 
              ? 'bg-blue-600 text-white shadow-xs' 
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Percent className="w-3.5 h-3.5" />
          <span>Regra de Três</span>
        </button>

        <button
          onClick={() => setActiveTab('texto')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'texto' 
              ? 'bg-blue-600 text-white shadow-xs' 
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          <span>Editor & Contador</span>
        </button>
      </div>

      {activeTab === 'regra3' ? (
        // Tab Rule of Three
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Side Inputs parameters */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-gray-105 pb-3">
              <h3 className="text-sm font-semibold text-slate-850">Proporções Propostas</h3>
              <select
                value={directionType}
                onChange={(e) => setDirectionType(e.target.value as 'direct' | 'inverse')}
                className="text-xs bg-gray-50 hover:bg-gray-100 border border-gray-250 text-slate-700 py-1 px-2.5 rounded-lg font-semibold cursor-pointer"
              >
                <option value="direct">Diretamente Proporcional</option>
                <option value="inverse">Inversamente Proporcional</option>
              </select>
            </div>

            <div className="flex flex-col gap-4 font-mono">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 flex flex-col gap-1">
                  <span className="text-[10px] font-sans font-bold text-gray-500 uppercase">Valor A</span>
                  <input
                    type="number"
                    value={valA}
                    onChange={(e) => setValA(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 focus:border-slate-800 rounded-lg outline-none"
                  />
                </div>
                <span className="text-gray-400 font-sans mt-5">está para</span>
                <div className="flex-1 flex flex-col gap-1">
                  <span className="text-[10px] font-sans font-bold text-gray-500 uppercase">Valor B</span>
                  <input
                    type="number"
                    value={valB}
                    onChange={(e) => setValB(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 focus:border-slate-800 rounded-lg outline-none"
                  />
                </div>
              </div>

              <div className="text-center font-sans text-xs text-gray-405 italic my-1">
                assim como:
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 flex flex-col gap-1">
                  <span className="text-[10px] font-sans font-bold text-gray-500 uppercase">Valor C</span>
                  <input
                    type="number"
                    value={valC}
                    onChange={(e) => setValC(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 focus:border-slate-800 rounded-lg outline-none"
                  />
                </div>
                <span className="text-gray-400 font-sans mt-5">está para</span>
                <div className="flex-grow flex flex-col gap-1">
                  <span className="text-[10px] font-sans font-bold text-slate-850 uppercase">Incógnita (X)</span>
                  <div className="w-full bg-slate-900 text-amber-400 rounded-lg px-3 py-2 text-sm font-bold border border-slate-950 text-center select-none">
                    X
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-gray-400 font-sans leading-relaxed pt-1 border-t border-gray-100">
              💡 {directionType === 'direct' 
                ? 'Regra Direta: À medida que uma variável cresce, a outra aumenta na mesma proporção. Fórmula: (B * C) / A.'
                : 'Regra Inversa: À medida que uma variável cresce, a outra diminui proporcionalmente. Fórmula: (A * B) / C.'}
            </p>
          </div>

          {/* Results Side */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center gap-4">
            <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Cálculo Da Incógnita
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-gray-400">O valor do elemento desconhecido X é</span>
              <div className="text-4xl font-black text-slate-900 font-mono tracking-tight my-2">
                {ruleOf3Result}
              </div>
            </div>

            <div className="w-full max-w-sm border-t border-dashed border-gray-150 pt-4 mt-2">
              <span className="text-[11px] font-semibold text-slate-700">Equação matemática montada:</span>
              <div className="bg-gray-50 py-2 px-4 rounded-lg border border-gray-100 font-mono text-xs text-slate-600 mt-2 flex justify-center items-center gap-1">
                <span>{directionType === 'direct' ? `${valA} ÷ ${valB} = ${valC} ÷ X` : `${valA} × ${valB} = ${valC} × X`}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Tab Text & Counter analysis
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Conteúdo Textual</span>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Cole seu texto de blog post, redação acadêmica ou e-mail aqui..."
              rows={8}
              className="w-full p-4 border border-gray-200 rounded-2xl bg-white hover:bg-gray-50/20 focus:bg-white outline-none focus:border-slate-800 text-sm leading-relaxed transition-all resize-none shadow-sm"
            />

            {/* Editing actions utilities bank */}
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={handleUppercase}
                className="px-3.5 py-1.5 text-xs font-semibold border border-gray-250 hover:bg-gray-50 rounded-lg cursor-pointer transition-all active:scale-95 text-slate-700"
              >
                MAIÚSCULO
              </button>
              <button
                onClick={handleLowercase}
                className="px-3.5 py-1.5 text-xs font-semibold border border-gray-250 hover:bg-gray-50 rounded-lg cursor-pointer transition-all active:scale-95 text-slate-700"
              >
                minúsculo
              </button>
              <button
                onClick={handleCapitalize}
                className="px-3.5 py-1.5 text-xs font-semibold border border-gray-250 hover:bg-gray-50 rounded-lg cursor-pointer transition-all active:scale-95 text-slate-700 font-medium"
              >
                Capitalizar Frases
              </button>
              <button
                onClick={handleRemoveExcessSpaces}
                className="px-3.5 py-1.5 text-xs font-semibold border border-gray-250 hover:bg-gray-50 rounded-lg cursor-pointer transition-all active:scale-95 text-slate-700"
              >
                Remover Espaços Duplos
              </button>
              <button
                onClick={() => setText('')}
                className="px-3.5 py-1.5 text-xs font-semibold bg-gray-50 hover:bg-rose-50 text-rose-600 border border-gray-200 rounded-lg cursor-pointer transition-all active:scale-95"
              >
                Limpar Campo
              </button>
            </div>
          </div>

          {/* Results column stats */}
          <div className="lg:col-span-5 bg-white border border-slate-200 shadow-sm rounded-2xl p-5 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-gray-100 pb-2">
              Métricas e Estatísticas
            </h4>

            {/* Metrics column metrics */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="bg-gray-55/65 hover:bg-gray-100/50 transition-colors rounded-xl p-3 border border-gray-200/50">
                <span className="text-[10px] text-gray-500 font-bold uppercase">Caracteres</span>
                <p className="text-lg font-black font-mono text-slate-880 mt-1">{txtStats.characters}</p>
                <span className="text-[9px] text-gray-400">Com espaços</span>
              </div>

              <div className="bg-gray-55/65 hover:bg-gray-100/50 transition-colors rounded-xl p-3 border border-gray-200/50">
                <span className="text-[10px] text-gray-500 font-bold uppercase">Palavras</span>
                <p className="text-lg font-black font-mono text-slate-880 mt-1">{txtStats.words}</p>
                <span className="text-[9px] text-gray-400">Total detectado</span>
              </div>

              <div className="bg-gray-55/65 hover:bg-gray-100/50 transition-colors rounded-xl p-3 border border-gray-200/50">
                <span className="text-[10px] text-gray-500 font-bold uppercase">Parágrafos</span>
                <p className="text-lg font-black font-mono text-slate-880 mt-1">{txtStats.paragraphs}</p>
                <span className="text-[9px] text-gray-400">Quebras de linha</span>
              </div>

              <div className="bg-gray-55/65 hover:bg-gray-100/50 transition-colors rounded-xl p-3 border border-gray-200/50">
                <span className="text-[10px] text-gray-500 font-bold uppercase">Tempo Leitura</span>
                <p className="text-lg font-black font-mono text-slate-880 mt-1">~{txtStats.readingTimeMinutes} min</p>
                <span className="text-[9px] text-gray-400">Média de 200 ppm</span>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 mt-1 text-[10px] text-gray-550 leading-relaxed">
              💡 <span className="font-semibold text-gray-700">Dica de SEO:</span> Mantenha parágrafos de até 3 ou 4 linhas e use listas de marcadores (bullets) para melhorar a escabilidade em telas de smartphones.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
