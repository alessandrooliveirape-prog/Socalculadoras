/**
 * Brasil Calculadoras - Widget Oficial Embebível v1.0
 * https://www.brasilcalculadoras.com.br
 * 
 * Uso:
 * <div id="brasil-calc-widget" data-calculator="juros-compostos"></div>
 * <script src="https://www.brasilcalculadoras.com.br/widget.js" async></script>
 */
(function() {
  'use strict';

  function formatBRL(val) {
    return Number(val || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function parseNumber(val) {
    if (typeof val === 'number') return val;
    var cleaned = String(val || '').replace(/[^\d.,-]/g, '').replace(',', '.');
    var num = parseFloat(cleaned);
    return isNaN(num) ? 0 : num;
  }

  var styles = `
    .bcw-container {
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      max-width: 480px;
      width: 100%;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.08);
      padding: 22px;
      color: #0f172a;
      margin: 16px auto;
      text-align: left;
    }
    .bcw-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #f1f5f9;
      padding-bottom: 12px;
      margin-bottom: 16px;
    }
    .bcw-title-box {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .bcw-badge {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      background: #eff6ff;
      color: #2563eb;
      padding: 3px 8px;
      border-radius: 6px;
    }
    .bcw-title {
      font-size: 15px;
      font-weight: 800;
      color: #1e293b;
      margin: 0;
    }
    .bcw-form-group {
      margin-bottom: 12px;
    }
    .bcw-label {
      display: block;
      font-size: 11px;
      font-weight: 600;
      color: #475569;
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
    .bcw-input, .bcw-select {
      width: 100%;
      box-sizing: border-box;
      padding: 9px 12px;
      font-size: 13px;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      color: #1e293b;
      background: #f8fafc;
      outline: none;
      transition: all 0.2s;
    }
    .bcw-input:focus, .bcw-select:focus {
      border-color: #2563eb;
      background: #ffffff;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }
    .bcw-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .bcw-btn {
      width: 100%;
      background: #2563eb;
      color: #ffffff;
      border: none;
      padding: 10px 16px;
      font-size: 13px;
      font-weight: 700;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 6px;
      transition: background 0.2s;
    }
    .bcw-btn:hover {
      background: #1d4ed8;
    }
    .bcw-result-box {
      margin-top: 14px;
      padding: 14px;
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 10px;
      display: none;
    }
    .bcw-result-title {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      color: #166534;
      margin: 0 0 8px;
    }
    .bcw-result-row {
      display: flex;
      justify-content: space-between;
      font-size: 12.5px;
      padding: 4px 0;
      border-bottom: 1px dashed #dcfce7;
      color: #1f2937;
    }
    .bcw-result-row:last-child {
      border-bottom: none;
      font-weight: 700;
      font-size: 14px;
      color: #15803d;
      padding-top: 8px;
    }
    .bcw-footer {
      margin-top: 14px;
      padding-top: 10px;
      border-top: 1px solid #f1f5f9;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 11px;
      color: #64748b;
    }
    .bcw-footer a {
      color: #2563eb;
      text-decoration: none;
      font-weight: 700;
    }
    .bcw-footer a:hover {
      text-decoration: underline;
    }
  `;

  function injectStyles() {
    if (document.getElementById('bcw-styles')) return;
    var styleEl = document.createElement('style');
    styleEl.id = 'bcw-styles';
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);
  }

  // Calculators Implementations
  var calculators = {
    'juros-compostos': {
      title: 'Simulador de Juros Compostos',
      badge: 'Investimentos',
      url: 'https://www.brasilcalculadoras.com.br/juros-compostos',
      renderForm: function(id) {
        return `
          <div class="bcw-grid-2">
            <div class="bcw-form-group">
              <label class="bcw-label">Valor Inicial (R$)</label>
              <input type="number" id="${id}-initial" class="bcw-input" value="1000" step="100" />
            </div>
            <div class="bcw-form-group">
              <label class="bcw-label">Aporte Mensal (R$)</label>
              <input type="number" id="${id}-monthly" class="bcw-input" value="200" step="50" />
            </div>
          </div>
          <div class="bcw-grid-2">
            <div class="bcw-form-group">
              <label class="bcw-label">Taxa Anual (%)</label>
              <input type="number" id="${id}-rate" class="bcw-input" value="12" step="0.5" />
            </div>
            <div class="bcw-form-group">
              <label class="bcw-label">Período (Meses)</label>
              <input type="number" id="${id}-months" class="bcw-input" value="24" step="1" />
            </div>
          </div>
          <button type="button" class="bcw-btn" id="${id}-btn">Calcular Rendimento</button>
          <div class="bcw-result-box" id="${id}-results">
            <div class="bcw-result-title">Resultado da Simulação</div>
            <div class="bcw-result-row"><span>Total Investido:</span><span id="${id}-res-invested">R$ 0,00</span></div>
            <div class="bcw-result-row"><span>Total em Juros:</span><span id="${id}-res-interest">R$ 0,00</span></div>
            <div class="bcw-result-row"><span>Montante Acumulado:</span><span id="${id}-res-total">R$ 0,00</span></div>
          </div>
        `;
      },
      attach: function(id) {
        var btn = document.getElementById(id + '-btn');
        if (!btn) return;
        function calc() {
          var P = parseNumber(document.getElementById(id + '-initial').value);
          var PMT = parseNumber(document.getElementById(id + '-monthly').value);
          var rYear = parseNumber(document.getElementById(id + '-rate').value) / 100;
          var n = parseNumber(document.getElementById(id + '-months').value);
          var i = Math.pow(1 + rYear, 1 / 12) - 1;

          var totalInvested = P + (PMT * n);
          var futurePrincipal = P * Math.pow(1 + i, n);
          var futureAnnuity = i > 0 ? PMT * ((Math.pow(1 + i, n) - 1) / i) : PMT * n;
          var finalAmount = futurePrincipal + futureAnnuity;
          var totalInterest = Math.max(0, finalAmount - totalInvested);

          document.getElementById(id + '-res-invested').textContent = formatBRL(totalInvested);
          document.getElementById(id + '-res-interest').textContent = formatBRL(totalInterest);
          document.getElementById(id + '-res-total').textContent = formatBRL(finalAmount);
          document.getElementById(id + '-results').style.display = 'block';
        }
        btn.addEventListener('click', calc);
        calc();
      }
    },

    'rescisao-clt': {
      title: 'Simulador de Rescisão Trabalhista',
      badge: 'CLT / RH',
      url: 'https://www.brasilcalculadoras.com.br/calculadora-de-rescisao-clt',
      renderForm: function(id) {
        return `
          <div class="bcw-grid-2">
            <div class="bcw-form-group">
              <label class="bcw-label">Salário Bruto (R$)</label>
              <input type="number" id="${id}-salary" class="bcw-input" value="3000" step="100" />
            </div>
            <div class="bcw-form-group">
              <label class="bcw-label">Meses Trabalhados</label>
              <input type="number" id="${id}-months" class="bcw-input" value="18" step="1" />
            </div>
          </div>
          <div class="bcw-form-group">
            <label class="bcw-label">Motivo do Desligamento</label>
            <select id="${id}-reason" class="bcw-select">
              <option value="demissao_sem_justa">Demissão sem justa causa (pela empresa)</option>
              <option value="pedido_demissao">Pedido de demissão (pelo funcionário)</option>
              <option value="acordo_mutuo">Acordo mútuo (Reforma Trabalhista)</option>
            </select>
          </div>
          <button type="button" class="bcw-btn" id="${id}-btn">Calcular Rescisão</button>
          <div class="bcw-result-box" id="${id}-results">
            <div class="bcw-result-title">Valores Rescisórios Estimados</div>
            <div class="bcw-result-row"><span>Saldo de Salário (30d):</span><span id="${id}-res-salary">R$ 0,00</span></div>
            <div class="bcw-result-row"><span>13º Salário Proporcional:</span><span id="${id}-res-13">R$ 0,00</span></div>
            <div class="bcw-result-row"><span>Férias + 1/3 Constitucional:</span><span id="${id}-res-vacation">R$ 0,00</span></div>
            <div class="bcw-result-row"><span>Multa Rescisória FGTS:</span><span id="${id}-res-fine">R$ 0,00</span></div>
            <div class="bcw-result-row"><span>Total Estimado Líquido:</span><span id="${id}-res-total">R$ 0,00</span></div>
          </div>
        `;
      },
      attach: function(id) {
        var btn = document.getElementById(id + '-btn');
        if (!btn) return;
        function calc() {
          var salary = parseNumber(document.getElementById(id + '-salary').value);
          var months = parseNumber(document.getElementById(id + '-months').value);
          var reason = document.getElementById(id + '-reason').value;

          var salaryBalance = salary; // base 30 dias
          var thirteenthProp = (salary / 12) * Math.min(12, Math.max(1, months % 12 || 12));
          var vacationProp = (salary / 12) * Math.min(12, Math.max(1, months % 12 || 12));
          var vacationThird = vacationProp / 3;
          var fgtsAccumulated = salary * 0.08 * months;
          var fgtsFine = 0;

          if (reason === 'demissao_sem_justa') {
            fgtsFine = fgtsAccumulated * 0.40;
          } else if (reason === 'acordo_mutuo') {
            fgtsFine = fgtsAccumulated * 0.20;
          }

          var total = salaryBalance + thirteenthProp + vacationProp + vacationThird + fgtsFine;

          document.getElementById(id + '-res-salary').textContent = formatBRL(salaryBalance);
          document.getElementById(id + '-res-13').textContent = formatBRL(thirteenthProp);
          document.getElementById(id + '-res-vacation').textContent = formatBRL(vacationProp + vacationThird);
          document.getElementById(id + '-res-fine').textContent = formatBRL(fgtsFine);
          document.getElementById(id + '-res-total').textContent = formatBRL(total);
          document.getElementById(id + '-results').style.display = 'block';
        }
        btn.addEventListener('click', calc);
        calc();
      }
    },

    'decimo-terceiro': {
      title: 'Calculadora de 13º Salário',
      badge: 'CLT / Benefício',
      url: 'https://www.brasilcalculadoras.com.br/calculadora-de-decimo-terceiro',
      renderForm: function(id) {
        return `
          <div class="bcw-grid-2">
            <div class="bcw-form-group">
              <label class="bcw-label">Salário Bruto (R$)</label>
              <input type="number" id="${id}-salary" class="bcw-input" value="3500" step="100" />
            </div>
            <div class="bcw-form-group">
              <label class="bcw-label">Meses no Ano (1 a 12)</label>
              <input type="number" id="${id}-months" class="bcw-input" value="12" min="1" max="12" />
            </div>
          </div>
          <button type="button" class="bcw-btn" id="${id}-btn">Calcular Parcelas</button>
          <div class="bcw-result-box" id="${id}-results">
            <div class="bcw-result-title">Previsão das Parcelas do 13º</div>
            <div class="bcw-result-row"><span>1ª Parcela (até 30/Nov - sem desc.):</span><span id="${id}-res-p1">R$ 0,00</span></div>
            <div class="bcw-result-row"><span>2ª Parcela (até 20/Dez - c/ INSS):</span><span id="${id}-res-p2">R$ 0,00</span></div>
            <div class="bcw-result-row"><span>Total Integral do 13º:</span><span id="${id}-res-total">R$ 0,00</span></div>
          </div>
        `;
      },
      attach: function(id) {
        var btn = document.getElementById(id + '-btn');
        if (!btn) return;
        function calc() {
          var salary = parseNumber(document.getElementById(id + '-salary').value);
          var months = Math.min(12, Math.max(1, parseNumber(document.getElementById(id + '-months').value)));

          var grossThirteenth = (salary / 12) * months;
          var firstParcel = grossThirteenth / 2; // 50% sem descontos

          // INSS aproximado sobre o valor integral
          var inss = 0;
          if (grossThirteenth <= 1518) inss = grossThirteenth * 0.075;
          else if (grossThirteenth <= 2793.88) inss = 1518 * 0.075 + (grossThirteenth - 1518) * 0.09;
          else if (grossThirteenth <= 4190.83) inss = 113.85 + 114.83 + (grossThirteenth - 2793.88) * 0.12;
          else inss = 113.85 + 114.83 + 167.63 + Math.min(grossThirteenth - 4190.83, 3966.58) * 0.14;

          var secondParcel = Math.max(0, grossThirteenth - firstParcel - inss);

          document.getElementById(id + '-res-p1').textContent = formatBRL(firstParcel);
          document.getElementById(id + '-res-p2').textContent = formatBRL(secondParcel);
          document.getElementById(id + '-res-total').textContent = formatBRL(firstParcel + secondParcel);
          document.getElementById(id + '-results').style.display = 'block';
        }
        btn.addEventListener('click', calc);
        calc();
      }
    },

    'regra-tres': {
      title: 'Calculadora de Regra de Três',
      badge: 'Matemática',
      url: 'https://www.brasilcalculadoras.com.br/regra-tres',
      renderForm: function(id) {
        return `
          <div style="text-align: center; margin-bottom: 12px; font-size: 12px; color: #475569;">
            Se <b>A</b> está para <b>B</b>, então <b>C</b> está para <b>X</b>:
          </div>
          <div class="bcw-grid-2">
            <div class="bcw-form-group">
              <label class="bcw-label">Valor A</label>
              <input type="number" id="${id}-a" class="bcw-input" value="10" />
            </div>
            <div class="bcw-form-group">
              <label class="bcw-label">Valor B</label>
              <input type="number" id="${id}-b" class="bcw-input" value="100" />
            </div>
          </div>
          <div class="bcw-grid-2">
            <div class="bcw-form-group">
              <label class="bcw-label">Valor C</label>
              <input type="number" id="${id}-c" class="bcw-input" value="25" />
            </div>
            <div class="bcw-form-group">
              <label class="bcw-label">Valor X (Resultado)</label>
              <input type="text" id="${id}-x" class="bcw-input" value="?" readonly style="background:#e2e8f0; font-weight:700; color:#2563eb;" />
            </div>
          </div>
          <button type="button" class="bcw-btn" id="${id}-btn">Calcular Valor de X</button>
          <div class="bcw-result-box" id="${id}-results">
            <div class="bcw-result-title">Proporção Encontrada</div>
            <div class="bcw-result-row"><span>Valor de X:</span><span id="${id}-res-x" style="font-size:18px; color:#2563eb;">0</span></div>
          </div>
        `;
      },
      attach: function(id) {
        var btn = document.getElementById(id + '-btn');
        if (!btn) return;
        function calc() {
          var a = parseNumber(document.getElementById(id + '-a').value);
          var b = parseNumber(document.getElementById(id + '-b').value);
          var c = parseNumber(document.getElementById(id + '-c').value);

          var x = (a !== 0) ? (b * c) / a : 0;
          document.getElementById(id + '-x').value = x.toFixed(2);
          document.getElementById(id + '-res-x').textContent = x.toLocaleString('pt-BR', { maximumFractionDigits: 4 });
          document.getElementById(id + '-results').style.display = 'block';
        }
        btn.addEventListener('click', calc);
        calc();
      }
    }
  };

  function initWidgets() {
    injectStyles();

    var targets = document.querySelectorAll('#brasil-calc-widget, [data-brasil-calculator], .brasil-calc-widget');
    if (!targets || targets.length === 0) return;

    for (var i = 0; i < targets.length; i++) {
      var el = targets[i];
      if (el.getAttribute('data-bcw-rendered')) continue;

      var calcType = el.getAttribute('data-calculator') || 'juros-compostos';
      var calcDef = calculators[calcType] || calculators['juros-compostos'];
      var uniqueId = 'bcw-' + Math.random().toString(36).substr(2, 9);

      var container = document.createElement('div');
      container.className = 'bcw-container';
      container.innerHTML = `
        <div class="bcw-header">
          <div class="bcw-title-box">
            <span class="bcw-badge">${calcDef.badge}</span>
            <h3 class="bcw-title">${calcDef.title}</h3>
          </div>
        </div>
        <div class="bcw-body">
          ${calcDef.renderForm(uniqueId)}
        </div>
        <div class="bcw-footer">
          <span>Ferramenta gratuita</span>
          <span>Calculado via <a href="${calcDef.url}" target="_blank" rel="noopener">Brasil Calculadoras</a></span>
        </div>
      `;

      el.innerHTML = '';
      el.appendChild(container);
      el.setAttribute('data-bcw-rendered', 'true');

      calcDef.attach(uniqueId);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidgets);
  } else {
    initWidgets();
  }

  window.initBrasilCalcWidgets = initWidgets;
})();
