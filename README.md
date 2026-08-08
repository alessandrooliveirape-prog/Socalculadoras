# 🧮 Brasil Calculadoras (SoCalculadoras)

> A coleção mais completa, rápida e moderna de calculadoras e ferramentas utilitárias online do Brasil.

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini AI](https://img.shields.io/badge/Google_Gemini-API-8E75B2?logo=googlecloud&logoColor=white)](https://ai.google.dev/)
[![Deploy Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

---

## 📋 Sobre o Projeto

O **Brasil Calculadoras** é uma plataforma web responsiva, ultrarrápida e rica em funcionalidades desenvolvida para fornecer soluções de cálculo para finanças, departamento pessoal (CLT/PJ), saúde, logística e utilidades do dia a dia.

A plataforma combina interface moderna com recursos avançados como **relatórios exportáveis em PDF/CSV**, **histórico local de cálculos**, **pré-renderização estática para SEO (SSG)** e **análise inteligente alimentada pelo Google Gemini AI**.

---

## ✨ Principais Funcionalidades e Calculadoras

### 💼 Trabalhistas & Recursos Humanos
- **Rescisão CLT**: Cálculo detalhado de verbas rescisórias (aviso prévio, 13º proporcional, férias vencidas/proporcionais, multa do FGTS).
- **Férias CLT**: Cálculo de férias com abono pecuniário (venda de 1/3) e adicionais.
- **13º Salário**: Simulação de 1ª e 2ª parcelas com descontos de INSS e IRRF.
- **Horas Extras**: Cálculo de horas extras a 50%, 100% ou taxas customizadas.
- **Comparador CLT vs. PJ**: Análise financeira comparativa considerando benefícios, impostos e custos corporativos.
- **Folha de Ponto / Horas Trabalhadas**: Cálculo exato de jornada de trabalho.
- **Aposentadoria INSS**: Simulação de tempo de contribuição e regras de transição.

### 💰 Financeiras & Negócios
- **Juros Compostos**: Simulador de investimentos com aportes mensais e gráficos de crescimento.
- **Financiamento Veicular**: Simulação de parcelas, juros e amortizações.
- **Margem de Lucro & Markup**: Cálculo de preço de venda, lucro bruto/líquido e margens.
- **Porcentagem Simples**: Descontos, aumentos e variações percentuais.
- **Ganhos com Google AdSense**: Estimativa de receita baseada em tráfego, RPM e CTR.

### 🏋️ Saúde & Fitness
- **IBC & Rastreador Calórico**: Cálculo de IMC, Taxa Metabólica Basal (TMB), Gasto Calórico Diário (GET) e controle de macronutrientes.

### 📐 Exatas & Utilidades Gerais
- **Regra de 3 & Utilitários de Texto**: Resolução de proporções, conversão de formatos e contadores.
- **Calculadoras Dinâmicas**: Motor genérico de cálculo personalizável.

### 🤖 Recursos Avançados & Inteligência
- **Assistente IA (Google Gemini 2.4)**: Análise contextual dos resultados de cálculo com insights e orientações práticas.
- **Exportação de Relatórios**: Geração instantânea de relatórios formatados em **PDF** (`jsPDF`) e planilhas **CSV**.
- **Histórico de Cálculos**: Armazenamento local automático para consulta rápida de simulações anteriores.
- **SEO de Alta Performance**: Pré-renderização estática por página (SSG), geração dinâmica de sitemap XML e metadados estruturados.

---

## 🛠️ Tecnologias Utilizadas

- **Core**: [React 19](https://react.dev/), [TypeScript 5.8](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6.2](https://vitejs.dev/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/), [Motion (Framer Motion)](https://motion.dev/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Roteamento**: [Wouter](https://github.com/molefrog/wouter)
- **Inteligência Artificial**: [@google/genai](https://www.npmjs.com/package/@google/genai) (Google Gemini SDK)
- **Geração de Documentos**: [jsPDF](https://github.com/parallax/jsPDF)
- **SSG & Prerendering**: Scripts TypeScript com `tsx` (`generateSitemap.ts` e `prerender.ts`)

---

## 📂 Estrutura do Projeto

```
.
├── src/
│   ├── components/         # Calculadoras e componentes de UI reutilizáveis
│   │   ├── RescisaoCLTCalc.tsx
│   │   ├── CompoundInterestCalc.tsx
│   │   ├── AdSenseEarningsCalc.tsx
│   │   ├── CltVsPjCalc.tsx
│   │   ├── CalculatorHistory.tsx
│   │   └── ...
│   ├── data/               # Catálogo completo de calculadoras e metadados
│   │   └── calculatorsCatalog.ts
│   ├── utils/              # Utilitários (Exportação PDF/CSV, Histórico, SEO)
│   │   ├── exportPDF.ts
│   │   ├── exportCSV.ts
│   │   ├── historyManager.ts
│   │   └── seoContentGenerator.ts
│   ├── App.tsx             # Componente principal e rotas
│   └── main.tsx            # Ponto de entrada da aplicação
├── generateSitemap.ts      # Script para geração automática de sitemap.xml
├── prerender.ts            # Script de pré-renderização estática (SSG) para SEO
├── vite.config.ts          # Configuração do Vite + Tailwind
├── vercel.json             # Configurações de rotas e build no Vercel
└── package.json            # Dependências e scripts
```

---

## ⚙️ Instalação e Execução Local

### Pré-requisitos

- Node.js (versão 18 ou superior recomendada)
- npm ou yarn

### 1. Clonar o repositório e instalar dependências

```bash
git clone https://github.com/seu-usuario/Socalculadoras.git
cd Socalculadoras
npm install
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` ou `.env.local` na raiz do projeto contendo sua chave da API do Gemini:

```env
GEMINI_API_KEY=sua_chave_aqui
```

### 3. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Acesse a aplicação em `http://localhost:3000`.

---

## 📜 Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes comandos:

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento Vite em `http://localhost:3000` |
| `npm run build` | Gera o sitemap, compila a aplicação com Vite e executa a pré-renderização estática (SSG) |
| `npm run preview` | Executa um servidor local para visualizar o build de produção (`dist`) |
| `npm run lint` | Executa a verificação de tipos com o TypeScript (`tsc --noEmit`) |
| `npm run clean` | Remove o diretório de build `dist` |

---

## 🚀 Prerendering SSG & SEO

O projeto conta com um pipeline de build otimizado para motores de busca (Google, Bing, etc.):
1. **`generateSitemap.ts`**: Cria um arquivo `sitemap.xml` atualizado com todas as rotas de calculadoras.
2. **`vite build`**: Compila a aplicação SPA.
3. **`prerender.ts`**: Gera HTMLs estáticos para cada calculadora, injetando meta tags dinâmicas, Open Graph e conteúdo SEO pré-renderizado.

---

## 🚀 Deploy

O projeto é configurado nativamente para deploy na **Vercel** através do arquivo `vercel.json`.

Ao conectar o repositório na Vercel:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
