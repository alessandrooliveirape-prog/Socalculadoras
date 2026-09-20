# 🧮 Brasil Calculadoras — Suite of Financial & Everyday Web Calculators

[![Status: Independent Project](https://img.shields.io/badge/Status-Independent%20Project-blue.svg)](https://github.com/alessandrooliveirape-prog/Socalculadoras)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

> **Live Application Demo:** [https://socalculadoras.vercel.app](https://socalculadoras.vercel.app)

**Brasil Calculadoras** is a responsive collection of interactive financial, labor, and utility calculators. Engineered for high performance, zero layout shift (CLS 0), and strict compliance with mathematical models and labor formulas.

---

## 🌟 Core Calculator Categories

### 1. 💼 Labor & Payroll Calculators (CLT / Labor Law)
* **Net Salary Calculator:** Computes exact net earnings accounting for progressive INSS and IRPF tax brackets.
* **CLT vs PJ Comparison Engine:** Financial decision matrix for software engineers and contractors comparing tax structures, benefits, vacation, and 13th salary equivalents.
* **Termination & Resignation Simulator:** Accurate calculation of severance pay, prior notice (aviso prévio), FGTS 40% fine, and proportional leave.
* **13th Salary & Vacation Pay:** Single and two-installment projection models with tax deduction schedules.

### 2. 📈 Financial & Investment Modeling
* **Compound Interest & Wealth Growth:** Interactive projection model displaying asset growth trajectories, total contributions, and interest compounding curves.
* **Loan & Mortgage Amortization (Price & SAC Tables):** Side-by-side installment schedules calculating total interest paid and early payoff impacts.
* **Real Return vs Inflation:** Net investment yield calculations adjusted for benchmark inflation rates.

### 3. ⚡ Technical & SEO Architecture
* **Static Prerendering:** Custom build pipeline (`prerender.ts`) generating pre-rendered HTML for all calculator routes to ensure instant First Contentful Paint (FCP) and 100% search engine indexability.
* **Zero External Telemetry Dependencies:** Calculation business logic executes entirely on the client, ensuring rapid responsiveness and complete data privacy.
* **Automated SEO Dynamic Overrides:** Optional lightweight integration with Supabase for programmatic metadata and title optimization.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 18 + TypeScript |
| **Styling & Design System** | Tailwind CSS + Lucide React |
| **Bundler & Build Tool** | Vite 5 |
| **SEO & Prerendering** | Node.js headless static page generator (`prerender.ts`) |
| **Hosting & Edge Delivery** | Vercel Edge Network |

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** 18+ and **npm**

### 1. Clone the Repository
```bash
git clone https://github.com/alessandrooliveirape-prog/Socalculadoras.git
cd Socalculadoras
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` to explore the calculators.

### 4. Build for Production
```bash
npm run build
```
This compiles the application and triggers static prerendering for all route endpoints.

---

## 🔒 Security & Privacy
* **Data Sovereignty:** Financial numbers, income data, and parameters entered by users never leave the local browser session.
* **Environment Protection:** No sensitive production tokens or connection strings are stored in the client codebase.

---

## 👤 Author & Status
* **Author:** [Alessandro Oliveira](https://github.com/alessandrooliveirape-prog)
* **Status:** Independent Project
* **License:** [MIT License](LICENSE)
