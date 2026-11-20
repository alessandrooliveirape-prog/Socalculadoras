/**
 * Tabelas oficiais de INSS e IRRF vigentes em 2026 no Brasil.
 *
 * - INSS 2026: Portaria MPS/MF nº 13/2026 (salário mínimo R$ 1.621,00, teto R$ 8.475,55, máximo R$ 988,09).
 * - IRRF 2026: Tabela progressiva mensal vigente + desconto simplificado mensal de R$ 607,20
 *   + redução mensal da Lei nº 15.270/2025 (isenção efetiva até R$ 5.000,00 e redução gradual até R$ 7.350,00).
 */

export const INSS_2026_SALARIO_MINIMO = 1621.0;
export const INSS_2026_TETO = 8475.55;
export const INSS_2026_DESCONTO_MAXIMO = 988.09;

export const IRRF_2026_DESCONTO_SIMPLIFICADO = 607.2;
export const IRRF_2026_DEDUCAO_DEPENDENTE = 189.59;
export const IRRF_2026_LIMITE_ISENCAO_TOTAL = 5000.0;
export const IRRF_2026_LIMITE_REDUCAO_GRADUAL = 7350.0;
export const IRRF_2026_REDUTOR_MAXIMO = 312.89;

export interface Irrf2026Input {
  rendaTributavel: number;
  inss?: number;
  dependentes?: number;
  outrosDescontos?: number;
}

export interface Irrf2026Result {
  irrfBase: number;
  redutor: number;
  irrfFinal: number;
  baseCalculo: number;
  aliquota: number;
  usouSimplificado: boolean;
}

/**
 * Calcula a contribuição previdenciária mensal progressiva do INSS (tabela 2026).
 */
export function calculateInss2026(grossSalary: number): number {
  const bruto = Math.max(0, Number.isFinite(grossSalary) ? grossSalary : 0);

  if (bruto <= 1621.0) {
    return bruto * 0.075;
  }
  if (bruto <= 2902.84) {
    return 1621.0 * 0.075 + (bruto - 1621.0) * 0.09;
  }
  if (bruto <= 4354.27) {
    return 1621.0 * 0.075 + (2902.84 - 1621.0) * 0.09 + (bruto - 2902.84) * 0.12;
  }
  if (bruto <= 8475.55) {
    return (
      1621.0 * 0.075 +
      (2902.84 - 1621.0) * 0.09 +
      (4354.27 - 2902.84) * 0.12 +
      (bruto - 4354.27) * 0.14
    );
  }
  return INSS_2026_DESCONTO_MAXIMO;
}

function calcProgressiveIrrf2026(base: number): { tax: number; aliquota: number } {
  if (base > 4664.68) {
    return { tax: Math.max(0, base * 0.275 - 908.73), aliquota: 27.5 };
  }
  if (base > 3751.05) {
    return { tax: Math.max(0, base * 0.225 - 675.49), aliquota: 22.5 };
  }
  if (base > 2826.65) {
    return { tax: Math.max(0, base * 0.15 - 394.16), aliquota: 15 };
  }
  if (base > 2428.8) {
    return { tax: Math.max(0, base * 0.075 - 182.16), aliquota: 7.5 };
  }
  return { tax: 0, aliquota: 0 };
}

/**
 * Calcula o IRRF mensal de 2026 conforme a tabela progressiva, comparando
 * automaticamente deduções legais vs. desconto simplificado mensal (R$ 607,20),
 * e aplicando o redutor mensal da Lei nº 15.270/2025 sobre a renda tributável.
 */
export function calculateIrrf2026({
  rendaTributavel,
  inss = 0,
  dependentes = 0,
  outrosDescontos = 0,
}: Irrf2026Input): Irrf2026Result {
  const renda = Math.max(0, Number.isFinite(rendaTributavel) ? rendaTributavel : 0);
  const inssVal = Math.max(0, Number.isFinite(inss) ? inss : 0);
  const deps = Math.max(0, Math.floor(Number.isFinite(dependentes) ? dependentes : 0));
  const outros = Math.max(0, Number.isFinite(outrosDescontos) ? outrosDescontos : 0);

  const deducoesLegais = inssVal + deps * IRRF_2026_DEDUCAO_DEPENDENTE + outros;
  const baseLegal = Math.max(0, renda - deducoesLegais);
  const baseSimplificada = Math.max(0, renda - IRRF_2026_DESCONTO_SIMPLIFICADO);

  const progLegal = calcProgressiveIrrf2026(baseLegal);
  const progSimplificada = calcProgressiveIrrf2026(baseSimplificada);

  const usouSimplificado = progSimplificada.tax < progLegal.tax;
  const chosen = usouSimplificado ? progSimplificada : progLegal;
  const baseCalculo = usouSimplificado ? baseSimplificada : baseLegal;
  const irrfBase = chosen.tax;

  let redutor = 0;
  if (renda <= IRRF_2026_LIMITE_ISENCAO_TOTAL) {
    // Lei nº 15.270/2025: redução de até R$ 312,89 limitada ao imposto devido (zera o IRRF até R$ 5.000,00)
    redutor = Math.min(irrfBase, IRRF_2026_REDUTOR_MAXIMO);
  } else if (renda <= IRRF_2026_LIMITE_REDUCAO_GRADUAL) {
    // Lei nº 15.270/2025: redução linear gradual entre R$ 5.000,01 e R$ 7.350,00
    redutor = Math.max(0, 978.62 - 0.133145 * renda);
  }

  const rawFinal = Math.max(0, irrfBase - redutor);
  const irrfFinal = rawFinal < 0.005 ? 0 : rawFinal;
  const aliquota = irrfFinal > 0 ? chosen.aliquota : 0;

  return {
    irrfBase,
    redutor,
    irrfFinal,
    baseCalculo,
    aliquota,
    usouSimplificado,
  };
}
