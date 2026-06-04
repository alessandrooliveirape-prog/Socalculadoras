import sys
import re

FILE_PATH = r"d:\Socalculadoras\src\data\calculatorsCatalog.ts"

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the type literal
type_literal_search = r"(type: '[^;]+'\| 'edu_leitura');"
type_literal_replace = r"\1 | 'trab_fgts' | 'trab_noturno' | 'trab_insalubridade' | 'trab_periculosidade' | 'trab_seguro' | 'trab_vt' | 'trab_falta';"
content = re.sub(type_literal_search, type_literal_replace, content)

# 2. Insert the calculator definitions inside RAW_DYNAMIC_METADATA.
# We will insert it at the very beginning of the array, just after `[ // ==================== FINANCAS`
new_calculators_def = """  // ==================== TRABALHISTAS NOVAS ====================
  {
    id: 'calculo-fgts-acumulado',
    name: 'Calculadora de FGTS',
    description: 'Calcule o total aproximado acumulado de Fundo de Garantia do Tempo de Serviço.',
    category: 'profissoes',
    icon: 'Briefcase',
    tags: ['fgts', 'trabalho', 'fundo de garantia', 'clt', 'poupança'],
    type: 'trab_fgts',
    inputs: [
      { id: 'salario', label: 'Salário Bruto Base', def: 2500, type: 'number', pref: 'R$' },
      { id: 'meses', label: 'Meses Trabalhados', def: 12, type: 'number', suff: 'meses' },
      { id: 'taxa', label: 'Tipo de Contribuição', def: 8, type: 'select', op: [{v: 8, l: 'Padrão (8%)'}, {v: 2, l: 'Menor Aprendiz (2%)'}, {v: 11.2, l: 'Doméstico (8% + 3.2%)'}] }
    ],
    outputs: [
      { id: 'total_acumulado', label: 'Total Acumulado Estimado', pref: 'R$', isPrimary: true },
      { id: 'deposito_mensal', label: 'Depósito Mensal', pref: 'R$' }
    ],
    faq: [
      { q: 'O valor exato pode variar?', a: 'Sim, o cálculo desconsidera a remuneração de Juros e Atualização Monetária (TR) que a Caixa Econômica Federal aplica mensalmente no saldo.' }
    ]
  },
  {
    id: 'adicional-noturno',
    name: 'Adicional Noturno',
    description: 'Calcule o adicional para trabalhos realizados em período noturno (urbano: 22h às 5h).',
    category: 'profissoes',
    icon: 'Moon',
    tags: ['noturno', 'hora', 'adicional', 'clt', 'salário'],
    type: 'trab_noturno',
    inputs: [
      { id: 'salario', label: 'Salário Base Mensal', def: 2500, type: 'number', pref: 'R$' },
      { id: 'horas_mes', label: 'Jornada Mensal', def: 220, type: 'number', suff: 'hs' },
      { id: 'horas_noturnas', label: 'Total de Horas Relógio Noturnas', def: 40, type: 'number', suff: 'hs' }
    ],
    outputs: [
      { id: 'adicional', label: 'Valor do Adicional Noturno', pref: 'R$', isPrimary: true },
      { id: 'hora_normal', label: 'Valor da Hora Normal', pref: 'R$' },
      { id: 'hora_noturna', label: 'Valor da Hora Noturna (+20%)', pref: 'R$' }
    ],
    faq: [
      { q: 'A hora noturna tem duração diferente?', a: 'Sim, na área urbana a hora noturna tem 52 minutos e 30 segundos, ou seja, 1 hora relógio equivale a 1,1428 horas noturnas de trabalho.' }
    ]
  },
  {
    id: 'adicional-insalubridade',
    name: 'Adicional de Insalubridade',
    description: 'Estime o valor da insalubridade de acordo com o grau de exposição do trabalhador.',
    category: 'profissoes',
    icon: 'AlertTriangle',
    tags: ['insalubridade', 'risco', 'saúde', 'clt', 'salário'],
    type: 'trab_insalubridade',
    inputs: [
      { id: 'salario_minimo', label: 'Salário Mínimo de Referência', def: 1621, type: 'number', pref: 'R$' },
      { id: 'grau', label: 'Grau de Insalubridade', def: 20, type: 'select', op: [{v: 10, l: 'Mínimo (10%)'}, {v: 20, l: 'Médio (20%)'}, {v: 40, l: 'Máximo (40%)'}] }
    ],
    outputs: [
      { id: 'adicional', label: 'Valor do Adicional Mensal', pref: 'R$', isPrimary: true }
    ],
    faq: [
      { q: 'Qual a base de cálculo da insalubridade?', a: 'Diferente da periculosidade, a insalubridade é calculada sobre o salário mínimo vigente, salvo convenção coletiva que estipule o salário base.' }
    ]
  },
  {
    id: 'adicional-periculosidade',
    name: 'Adicional de Periculosidade',
    description: 'Cálculo de 30% de periculosidade para funções perigosas com risco à vida.',
    category: 'profissoes',
    icon: 'Shield',
    tags: ['periculosidade', 'risco', 'clt', 'salário'],
    type: 'trab_periculosidade',
    inputs: [
      { id: 'salario', label: 'Salário Base do Trabalhador', def: 2500, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'adicional', label: 'Valor do Adicional (30%)', pref: 'R$', isPrimary: true },
      { id: 'total', label: 'Salário + Periculosidade', pref: 'R$' }
    ],
    faq: [
      { q: 'Pode acumular Insalubridade e Periculosidade?', a: 'Não, o art. 193 § 2º da CLT proíbe a acumulação, devendo o trabalhador optar pelo adicional que for mais favorável.' }
    ]
  },
  {
    id: 'estimativa-seguro-desemprego',
    name: 'Seguro-Desemprego',
    description: 'Estime o valor das parcelas do benefício governamental de Seguro-Desemprego.',
    category: 'profissoes',
    icon: 'Briefcase',
    tags: ['seguro-desemprego', 'demissão', 'benefício', 'governo', 'clt'],
    type: 'trab_seguro',
    inputs: [
      { id: 'salario1', label: 'Último Salário', def: 2500, type: 'number', pref: 'R$' },
      { id: 'salario2', label: 'Penúltimo Salário', def: 2500, type: 'number', pref: 'R$' },
      { id: 'salario3', label: 'Antepenúltimo Salário', def: 2500, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'valor_parcela', label: 'Valor Estimado da Parcela', pref: 'R$', isPrimary: true },
      { id: 'media', label: 'Média Salarial Apurada', pref: 'R$' }
    ],
    faq: [
      { q: 'Qual a regra de cálculo?', a: 'O valor da parcela não pode ser inferior ao salário mínimo vigente. O cálculo é baseado em faixas definidas periodicamente pelo governo sobre a média dos últimos 3 salários.' }
    ]
  },
  {
    id: 'desconto-vale-transporte',
    name: 'Desconto de Vale-Transporte',
    description: 'Descubra quanto a empresa pode descontar pelo fornecimento do Vale-Transporte.',
    category: 'profissoes',
    icon: 'Bus',
    tags: ['vt', 'vale transporte', 'ônibus', 'desconto', 'clt'],
    type: 'trab_vt',
    inputs: [
      { id: 'salario', label: 'Salário Base', def: 2500, type: 'number', pref: 'R$' },
      { id: 'custo_vt', label: 'Custo Real do Transporte (Mês)', def: 250, type: 'number', pref: 'R$' }
    ],
    outputs: [
      { id: 'desconto', label: 'Desconto Permitido em Folha', pref: 'R$', isPrimary: true },
      { id: 'parte_empresa', label: 'Parte Paga pela Empresa', pref: 'R$' }
    ],
    faq: [
      { q: 'Qual o limite de desconto do VT?', a: 'O desconto máximo é de 6% do salário base. Se o custo real das passagens for inferior a 6%, desconta-se o custo real.' }
    ]
  },
  {
    id: 'falta-injustificada',
    name: 'Desconto de Falta Injustificada',
    description: 'Calcule o valor do desconto no salário por dias faltados sem justificativa legal.',
    category: 'profissoes',
    icon: 'Calendar',
    tags: ['falta', 'desconto', 'dsr', 'salário', 'clt'],
    type: 'trab_falta',
    inputs: [
      { id: 'salario', label: 'Salário Bruto', def: 2500, type: 'number', pref: 'R$' },
      { id: 'faltas', label: 'Dias Faltados', def: 1, type: 'number', suff: 'dias' },
      { id: 'desconta_dsr', label: 'Descontar DSR?', def: 1, type: 'select', op: [{v: 1, l: 'Sim'}, {v: 0, l: 'Não'}] }
    ],
    outputs: [
      { id: 'desconto_total', label: 'Desconto Total Estimado', pref: 'R$', isPrimary: true },
      { id: 'desconto_dia', label: 'Desconto do Dia Faltado', pref: 'R$' },
      { id: 'desconto_dsr', label: 'Desconto do DSR', pref: 'R$' }
    ],
    faq: [
      { q: 'A falta desconta o DSR?', a: 'Se o funcionário não cumprir integralmente a jornada da semana, ele perde a remuneração do Descanso Semanal Remunerado (DSR) daquela semana correspondente.' }
    ]
  },\n"""

# Insert right after `const RAW_DYNAMIC_METADATA: { ... }[] = [`
insert_marker = r"\] = \["
content = content.replace("] = [", "] = [\n" + new_calculators_def, 1)

# 3. Add the logic to the `calculateFn` in `calculatorsCatalog.ts`.
# Find the end of the large if-else block.
calculate_logic = """
      else if (raw.type === 'trab_fgts') {
        const salario = parseFloat(valInputs['salario'] || 0);
        const meses = parseFloat(valInputs['meses'] || 0);
        const taxa = parseFloat(valInputs['taxa'] || 8) / 100;
        const dep_mensal = salario * taxa;
        results['deposito_mensal'] = parseFloat(dep_mensal.toFixed(2));
        results['total_acumulado'] = parseFloat((dep_mensal * meses).toFixed(2));
      }
      else if (raw.type === 'trab_noturno') {
        const salario = parseFloat(valInputs['salario'] || 0);
        const hrs_mes = parseFloat(valInputs['horas_mes'] || 220);
        const hrs_noturnas_relogio = parseFloat(valInputs['horas_noturnas'] || 0);
        // 1 hora de relogio = 60/52.5 horas noturnas = 1.142857
        const hrs_noturnas_ficticias = hrs_noturnas_relogio * (60 / 52.5);
        const valor_hora = salario / (hrs_mes || 1);
        const adicional = valor_hora * 0.20 * hrs_noturnas_ficticias;
        results['hora_normal'] = parseFloat(valor_hora.toFixed(2));
        results['hora_noturna'] = parseFloat((valor_hora * 1.20).toFixed(2));
        results['adicional'] = parseFloat(adicional.toFixed(2));
      }
      else if (raw.type === 'trab_insalubridade') {
        const salario_minimo = parseFloat(valInputs['salario_minimo'] || 1621);
        const grau = parseFloat(valInputs['grau'] || 0) / 100;
        results['adicional'] = parseFloat((salario_minimo * grau).toFixed(2));
      }
      else if (raw.type === 'trab_periculosidade') {
        const salario = parseFloat(valInputs['salario'] || 0);
        const adicional = salario * 0.30;
        results['adicional'] = parseFloat(adicional.toFixed(2));
        results['total'] = parseFloat((salario + adicional).toFixed(2));
      }
      else if (raw.type === 'trab_seguro') {
        const s1 = parseFloat(valInputs['salario1'] || 0);
        const s2 = parseFloat(valInputs['salario2'] || 0);
        const s3 = parseFloat(valInputs['salario3'] || 0);
        const media = (s1 + s2 + s3) / 3;
        
        // Regras aproximadas base 2024
        let parcela = 0;
        if (media <= 2041.39) {
            parcela = media * 0.8;
        } else if (media <= 3402.65) {
            parcela = (media - 2041.39) * 0.5 + 1633.10;
        } else {
            parcela = 2313.74;
        }
        
        // Parcela não pode ser menor que o salário mínimo vigente (1621 para contexto)
        if (parcela < 1621) parcela = 1621;
        
        results['media'] = parseFloat(media.toFixed(2));
        results['valor_parcela'] = parseFloat(parcela.toFixed(2));
      }
      else if (raw.type === 'trab_vt') {
        const salario = parseFloat(valInputs['salario'] || 0);
        const custo = parseFloat(valInputs['custo_vt'] || 0);
        const limite_6 = salario * 0.06;
        const desconto = Math.min(limite_6, custo);
        const parte_empresa = Math.max(0, custo - desconto);
        results['desconto'] = parseFloat(desconto.toFixed(2));
        results['parte_empresa'] = parseFloat(parte_empresa.toFixed(2));
      }
      else if (raw.type === 'trab_falta') {
        const salario = parseFloat(valInputs['salario'] || 0);
        const faltas = parseFloat(valInputs['faltas'] || 0);
        const usa_dsr = parseFloat(valInputs['desconta_dsr'] || 0);
        
        const valor_dia = salario / 30;
        const desc_dias = valor_dia * faltas;
        const desc_dsr = usa_dsr === 1 ? valor_dia * faltas : 0; // Aproximação: 1 DSR por semana de falta
        
        results['desconto_dia'] = parseFloat(desc_dias.toFixed(2));
        results['desconto_dsr'] = parseFloat(desc_dsr.toFixed(2));
        results['desconto_total'] = parseFloat((desc_dias + desc_dsr).toFixed(2));
      }
"""

logic_insertion_marker = "return results;"
content = content.replace("return results;", calculate_logic + "\n      return results;")

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Calculators inserted successfully.")
