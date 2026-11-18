export interface CalcSeoDetail {
  title?: string;
  description?: string;
  domainConcept: string;
  formulaText: string;
  workedExample?: string;
  whenToUse: string;
  importantTips: string;
  sources?: { name: string; url: string }[];
  extraFaqs: { q: string; a: string }[];
}
