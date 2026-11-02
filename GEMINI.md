# Diretrizes e Padrões de Engenharia - Brasil Calculadoras

Este documento define os padrões arquiteturais, diretivas de monetização e fluxos operacionais consolidados para o portal **Brasil Calculadoras** (`https://www.brasilcalculadoras.com.br`).

---

## 🎯 1. Pureza Google AdSense & Monetização

- **ads.txt Exclusivo:** O arquivo `public/ads.txt` deve conter estritamente o identificador do Google AdSense (`google.com, pub-8160658026927094, DIRECT, f08c47fec0942fa0`).
- **Zero Scripts de Terceiros / Popups:** É terminantemente proibido reintroduzir scripts intrusivos de monetização como Monetag (`vignette.min.js`, `n6wxm.com`), pop-unders ou redirecionamentos automáticos.
- **Isenção Total de Programas de Afiliados:** O portal é 100% focado no modelo Google AdSense e tráfego orgânico de alta relevância, com remoção total de cards, tags ou links de afiliados (ex: Amazon Associates tag `chacerto-20`).
- **Páginas Institucionais Obrigatórias:** As 7 páginas institucionais canônicas (`/sobre`, `/contato`, `/politica-de-privacidade`, `/termos-de-uso`, `/cookies`, `/transparencia-adsense`, `/anunciantes`) devem ser sempre pré-renderizadas via SSG em HTML puro com status 200 OK.

---

## 📬 2. Formulário de Contato & Notificações em Tempo Real

- **Backend Serverless:** O formulário de contato consome o endpoint `POST /api/contato`.
- **Canais de Despacho Ativos:**
  - **Telegram Bot:** Envia alerta instantâneo com os dados do remetente para o chat privado do administrador (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`).
  - **Resend (E-mail):** Dispara e-mail com design estruturado para `ADMIN_EMAIL` com `reply_to` configurado para o e-mail do remetente.
- **Resiliência e Fallback:** Se houver falha de rede ou falta de credenciais, o formulário orienta claramente o usuário a contatar diretamente `contato@brasilcalculadoras.com.br`.

---

## 🔍 3. UX, Navegabilidade & Busca Inteligente

- **Busca Sem Acento & Tokenizada:** Todas as buscas (Home e `App.tsx`) aplicam normalização Unicode NFD (`.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()`), permitindo que termos digitados sem acento encontrem calculadoras com nomes e palavras-chave acentuadas.
- **Quick-Switch Bar:** Abaixo de cada calculadora ativa é exibida a barra de troca rápida (`#tool-quick-switch-bar`) para permitir navegação imediata entre ferramentas da mesma categoria.
- **Histórico Local de Calculadoras:** Persistência em `localStorage` (`brasilcalculadoras_recent_tools_v1`) das últimas ferramentas utilizadas para rápido retorno na página inicial.
- **Filtros por Categoria:** Pílulas de filtragem contextual (*Trabalhistas*, *Finanças*, *Saúde*, *Tempo*, *Matemática*, etc.).

---

## 🛠️ 4. SEO Técnico, SSG & Auditoria de Links

- **Zero Broken Links:** Antes de qualquer deploy de produção, validar que todos os `href` internos correspondem a rotas canônicas existentes no catálogo de calculadoras.
- **Build & Prerender:** Todo build de produção executa `generateSitemap.ts`, seguido de `vite build` e `prerender.ts`, gerando HTML estático com schemas JSON-LD e títulos canônicos.
- **Orquestrador Multiagente (7 Subagentes):** O script `scripts/master_orchestrator.ts` é executado diariamente via GitHub Actions para auditoria e autocura contínua de SEO, AdSense, Infraestrutura, Anti-Thin Content, SEO Programático, API Pública e Tração Long-Tail.

