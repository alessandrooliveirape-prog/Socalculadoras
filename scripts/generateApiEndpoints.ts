import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CALCULATORS_CATALOG } from '../src/data/calculatorsCatalog';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const publicApiDir = path.join(rootDir, 'public', 'api', 'v1');
const distApiDir = path.join(rootDir, 'dist', 'api', 'v1');

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function generateApiData() {
  const now = new Date().toISOString();
  const currentYear = new Date().getFullYear();

  // 1. Tabela INSS 2026
  const inssData = {
    meta: {
      fonte: "Brasil Calculadoras",
      url: "https://www.brasilcalculadoras.com.br",
      titulo: "Tabela Progressiva de Contribuição do INSS",
      vigencia: `${currentYear}`,
      atualizado_em: now,
      licenca: "Uso público e livre com atribuição de fonte obrigatória"
    },
    dados: {
      salario_minimo: 1518.00,
      teto_inss: 8157.41,
      teto_desconto_maximo: 952.12,
      faixas: [
        {
          faixa: 1,
          limite_inferior: 0.00,
          limite_superior: 1518.00,
          aliquota_percentual: 7.5,
          aliquota_decimal: 0.075,
          desconto_maximo_faixa: 113.85
        },
        {
          faixa: 2,
          limite_inferior: 1518.01,
          limite_superior: 2793.88,
          aliquota_percentual: 9.0,
          aliquota_decimal: 0.090,
          desconto_maximo_faixa: 114.83
        },
        {
          faixa: 3,
          limite_inferior: 2793.89,
          limite_superior: 4190.83,
          aliquota_percentual: 12.0,
          aliquota_decimal: 0.120,
          desconto_maximo_faixa: 167.63
        },
        {
          faixa: 4,
          limite_inferior: 4190.84,
          limite_superior: 8157.41,
          aliquota_percentual: 14.0,
          aliquota_decimal: 0.140,
          desconto_maximo_faixa: 555.32
        }
      ],
      observacoes: "O cálculo incide de forma progressiva sobre cada parcela do salário de contribuição."
    }
  };

  // 2. Tabela IRRF 2026
  const irrfData = {
    meta: {
      fonte: "Brasil Calculadoras",
      url: "https://www.brasilcalculadoras.com.br",
      titulo: "Tabela Progressiva Mensal do Imposto de Renda Retido na Fonte (IRRF)",
      vigencia: `${currentYear}`,
      atualizado_em: now,
      licenca: "Uso público e livre com atribuição de fonte obrigatória"
    },
    dados: {
      faixa_isencao_ate: 2259.20,
      deducao_por_dependente: 189.59,
      desconto_simplificado_mensal: 564.80,
      faixas: [
        {
          faixa: 1,
          base_calculo_de: 0.00,
          base_calculo_ate: 2259.20,
          aliquota_percentual: 0.0,
          aliquota_decimal: 0.0,
          parcela_a_deduzir: 0.00
        },
        {
          faixa: 2,
          base_calculo_de: 2259.21,
          base_calculo_ate: 2826.65,
          aliquota_percentual: 7.5,
          aliquota_decimal: 0.075,
          parcela_a_deduzir: 169.44
        },
        {
          faixa: 3,
          base_calculo_de: 2826.66,
          base_calculo_ate: 3751.05,
          aliquota_percentual: 15.0,
          aliquota_decimal: 0.150,
          parcela_a_deduzir: 381.44
        },
        {
          faixa: 4,
          base_calculo_de: 3751.06,
          base_calculo_ate: 4664.68,
          aliquota_percentual: 22.5,
          aliquota_decimal: 0.225,
          parcela_a_deduzir: 662.77
        },
        {
          faixa: 5,
          base_calculo_de: 4664.69,
          base_calculo_ate: null,
          aliquota_percentual: 27.5,
          aliquota_decimal: 0.275,
          parcela_a_deduzir: 896.00
        }
      ],
      observacoes: "O contribuinte pode optar pelo desconto simplificado caso seja mais benéfico que as deduções legais (INSS, dependentes e pensão alimentícia)."
    }
  };

  // 3. Parâmetros Trabalhistas Consolidados (CLT)
  const trabalhistaData = {
    meta: {
      fonte: "Brasil Calculadoras",
      url: "https://www.brasilcalculadoras.com.br",
      titulo: "Parâmetros e Coeficientes Trabalhistas Oficiais CLT",
      vigencia: `${currentYear}`,
      atualizado_em: now,
      licenca: "Uso público e livre com atribuição de fonte obrigatória"
    },
    dados: {
      salario_minimo: 1518.00,
      valor_hora_salario_minimo_220h: 6.90,
      jornada_padrao_mensal_horas: 220,
      adicional_horas_extras_padrao_percentual: 50.0,
      adicional_horas_extras_domingo_feriado_percentual: 100.0,
      adicional_noturno_urbano_percentual: 20.0,
      aliquota_fgts_mensal_percentual: 8.0,
      aliquota_fgts_jovem_aprendiz_percentual: 2.0,
      multa_rescisoria_fgts_sem_justa_causa_percentual: 40.0,
      multa_rescisoria_fgts_acordo_mutuo_percentual: 20.0,
      terco_constitucional_ferias_fracao: "1/3",
      regras_aviso_previo: {
        base_dias: 30,
        dias_adicionais_por_ano_completo: 3,
        limite_maximo_dias: 90,
        legislacao: "Lei Federal nº 12.506/2011"
      }
    }
  };

  // 4. Indicadores Financeiros de Referência
  const financeirosData = {
    meta: {
      fonte: "Brasil Calculadoras",
      url: "https://www.brasilcalculadoras.com.br",
      titulo: "Indicadores e Índices Econômicos de Referência",
      vigencia: `${currentYear}`,
      atualizado_em: now,
      licenca: "Uso público e livre com atribuição de fonte obrigatória"
    },
    dados: {
      taxa_selic_meta_anual_percentual: 13.25,
      taxa_cdi_estimada_anual_percentual: 13.15,
      regra_poupanca: {
        criterio: "Selic acima de 8,5% a.a.",
        rendimento_mensal_percentual: 0.5,
        adicional: "Taxa Referencial (TR)",
        isencao_ir_pessoa_fisica: true
      },
      inflacao_ipca_acumulado_12m_estimado_percentual: 4.60,
      observacao: "Indicadores econômicos para fins didáticos e projeções matemáticas em simuladores financeiros."
    }
  };

  // 5. Catálogo Completo de Calculadoras
  const catalogoData = {
    meta: {
      fonte: "Brasil Calculadoras",
      url: "https://www.brasilcalculadoras.com.br",
      titulo: "Catálogo de Calculadoras e Simuladores Online",
      total_ferramentas: CALCULATORS_CATALOG.length,
      atualizado_em: now,
      licenca: "Uso público e livre com atribuição de fonte obrigatória"
    },
    calculadoras: CALCULATORS_CATALOG.map(c => ({
      id: c.id,
      nome: c.name,
      descricao: c.description,
      categoria: c.category,
      url: `https://www.brasilcalculadoras.com.br/${c.id}`
    }))
  };

  const filesToWrite = [
    { subpath: 'tabelas/inss.json', content: inssData },
    { subpath: 'tabelas/irrf.json', content: irrfData },
    { subpath: 'tabelas/trabalhista.json', content: trabalhistaData },
    { subpath: 'indices/financeiros.json', content: financeirosData },
    { subpath: 'calculadoras/catalogo.json', content: catalogoData }
  ];

  // Write to both public/api/v1 and dist/api/v1 (if dist exists)
  for (const item of filesToWrite) {
    const pubFile = path.join(publicApiDir, item.subpath);
    ensureDir(path.dirname(pubFile));
    fs.writeFileSync(pubFile, JSON.stringify(item.content, null, 2), 'utf8');

    if (fs.existsSync(rootDir + '/dist')) {
      const distFile = path.join(distApiDir, item.subpath);
      ensureDir(path.dirname(distFile));
      fs.writeFileSync(distFile, JSON.stringify(item.content, null, 2), 'utf8');
    }
  }

  console.log(`✅ [API Publica] ${filesToWrite.length} endpoints estáticos gerados com sucesso em /api/v1/!`);
}

// Execute directly if run via CLI
if (process.argv[1] && process.argv[1].includes('generateApiEndpoints')) {
  generateApiData();
}
