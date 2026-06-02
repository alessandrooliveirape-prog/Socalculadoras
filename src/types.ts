export type CalculatorId = string;

export type CalculatorCategory = string;

export interface DynamicInputDef {
  id: string;
  label: string;
  type: 'number' | 'text' | 'select';
  defaultValue: any;
  min?: number;
  max?: number;
  step?: number;
  options?: { value: any; label: string }[];
  prefix?: string;
  suffix?: string;
}

export interface DynamicOutputDef {
  id: string;
  label: string;
  prefix?: string;
  suffix?: string;
  isPrimary?: boolean;
}

export interface DynamicFAQDef {
  question: string;
  answer: string;
}

export interface CalculatorDef {
  id: CalculatorId;
  name: string;
  description: string;
  category: Exclude<CalculatorCategory, 'todos'>;
  icon: string;
  tags: string[];
  // Schema-driven elements for 100+ dynamic calculators
  isDynamic?: boolean;
  inputs?: DynamicInputDef[];
  outputs?: DynamicOutputDef[];
  faq?: DynamicFAQDef[];
  calculate?: (inputs: Record<string, any>) => Record<string, any>;
}

export interface HistoryEntry {
  id: string;
  calculatorId: CalculatorId;
  calculatorName: string;
  timestamp: string;
  inputs: Record<string, any>;
  outputs: Record<string, any>;
  summary: string;
}

// Ads representation
export interface AdCampaign {
  id: string;
  title: string;
  description: string;
  cta: string;
  imageUrl: string;
  category: Exclude<CalculatorCategory, 'todos'>;
  sponsor: string;
}
