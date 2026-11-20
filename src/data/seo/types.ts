export interface CalcSeoSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface CalcSeoTable {
  heading: string;
  caption?: string;
  headers: string[];
  rows: string[][];
  note?: string;
}

export interface CalcSeoDetail {
  title?: string;
  description?: string;
  domainConcept: string;
  formulaText: string;
  workedExample?: string;
  whenToUse: string;
  importantTips: string;
  extraSections?: CalcSeoSection[];
  referenceTable?: CalcSeoTable;
  sources?: { name: string; url: string }[];
  extraFaqs: { q: string; a: string }[];
}
