/**
 * Utilitário de Ativação Não-Intrusiva do Web Push da Monetag
 * 
 * Regras estritas de UX e Core Web Vitals:
 * 1. Não bloqueante: Execução estritamente assíncrona desacoplada via requestIdleCallback e setTimeout.
 * 2. Sem disparo no carregamento inicial (sem window.onload ou head blocking).
 * 3. Disparo Contextual: ~2 segundos após clicar no botão de "Calcular" ou interagir com a ferramenta (tempo de ver o resultado útil).
 * 4. Fallback: após 20 segundos de permanência ativa na página.
 * 5. Frequência (localStorage): Intervalo mínimo de 15 dias entre solicitações/dispensas.
 * 6. Verificação de suporte completa: 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window.
 */

const STORAGE_KEY = 'monetag_push_last_interaction';
const FIFTEEN_DAYS_MS = 15 * 24 * 60 * 60 * 1000; // 15 dias em milissegundos

let isScheduled = false;
let isExecuting = false;
let inputInteractionTimeout: ReturnType<typeof setTimeout> | null = null;

/**
 * Checa se o navegador suporta as APIs necessárias para Web Push
 */
export function isWebPushSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    'serviceWorker' in navigator &&
    'PushManager' in window &&
    'Notification' in window
  );
}

/**
 * Checa se a solicitação deve ser suprimida devido a:
 * - Falta de suporte
 * - Permissão já negada pelo usuário ('denied')
 * - Controle de frequência de 15 dias no localStorage
 */
export function shouldSuppressPushPrompt(): boolean {
  if (!isWebPushSupported()) return true;

  try {
    // Se o usuário já negou no navegador, respeita a decisão sem incomodar
    if (Notification.permission === 'denied') {
      return true;
    }

    const lastInteraction = localStorage.getItem(STORAGE_KEY);
    if (lastInteraction) {
      const timestamp = parseInt(lastInteraction, 10);
      if (!isNaN(timestamp) && Date.now() - timestamp < FIFTEEN_DAYS_MS) {
        return true;
      }
    }
  } catch {
    // Falha ao acessar localStorage (ex: contexto de sandbox muito restritivo)
    return false;
  }

  return false;
}

/**
 * Registra o timestamp da tentativa ou interação no localStorage
 */
function recordInteractionTimestamp(): void {
  try {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  } catch {
    // Silencioso em caso de restrição no storage
  }
}

/**
 * Executa o registro do Service Worker e solicitação de notificação
 * de forma assíncrona, segura e sem travar a thread principal.
 */
export async function executePushRegistration(): Promise<void> {
  if (isExecuting || shouldSuppressPushPrompt()) return;
  isExecuting = true;

  // Marca timestamp imediatamente para evitar concorrência ou reentrância
  recordInteractionTimestamp();

  const run = async () => {
    try {
      // 1. Registra o Service Worker da Monetag na raiz com escopo global '/'
      await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      // 2. Se a permissão ainda estiver no estado padrão ('default'), solicita ao usuário
      if (Notification.permission === 'default') {
        await Notification.requestPermission();
        recordInteractionTimestamp();
      }
    } catch (err) {
      // Tratamento silencioso: erros de rede, adblockers ou ambientes locais não devem quebrar o site
      console.debug?.('[Push Monetag] Registro silenciado:', err);
    } finally {
      isExecuting = false;
    }
  };

  // Execução desacoplada da thread de renderização / Core Web Vitals
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(
      () => {
        run();
      },
      { timeout: 3000 }
    );
  } else {
    setTimeout(run, 100);
  }
}

/**
 * Agenda o registro contextual com atraso (ex: 2s após cálculo)
 */
export function schedulePushRegistration(delayMs = 2000): void {
  if (isScheduled || shouldSuppressPushPrompt()) return;
  isScheduled = true;

  setTimeout(() => {
    executePushRegistration();
  }, delayMs);
}

/**
 * Disparador para ser acionado manualmente quando uma calculadora conclui um cálculo
 */
export function notifyCalculationTrigger(): void {
  schedulePushRegistration(2000);
}

/**
 * Inicializa a observação contextual de eventos e o timer de fallback de 20s.
 * Retorna uma função de cleanup para ser usada no ciclo de vida do componente React.
 */
export function initMonetagPush(): () => void {
  if (typeof window === 'undefined') return () => {};
  if (!isWebPushSupported() || shouldSuppressPushPrompt()) return () => {};

  // 1. Interação Contextual: Captura cliques em botões de "Calcular" ou similares
  const handleDocumentClick = (event: MouseEvent) => {
    if (isScheduled) return;

    const target = event.target as HTMLElement | null;
    if (!target) return;

    const interactiveElement = target.closest(
      'button, [role="button"], input[type="submit"], input[type="button"], a'
    );
    if (!interactiveElement) return;

    const text = (interactiveElement.textContent || '').trim().toLowerCase();
    const aria = (interactiveElement.getAttribute('aria-label') || '').toLowerCase();
    const idOrClass = `${interactiveElement.id || ''} ${interactiveElement.className || ''}`.toLowerCase();

    const isCalculateBtn =
      text.includes('calcular') ||
      text.includes('calcule') ||
      text.includes('simular') ||
      text.includes('obter resultado') ||
      aria.includes('calcular') ||
      aria.includes('simular') ||
      idOrClass.includes('calc') ||
      interactiveElement.getAttribute('type') === 'submit';

    if (isCalculateBtn) {
      // Disparo Contextual: cerca de 2 segundos após clicar no botão de cálculo
      schedulePushRegistration(2000);
    }
  };

  // 2. Interação Contextual Reativa: Quando o usuário altera valores nas calculadoras,
  // agenda para 2s após a alteração (garantindo que já visualizou o resultado útil)
  const handleUserInputChange = (event: Event) => {
    if (isScheduled) return;
    const target = event.target as HTMLElement | null;
    if (!target) return;

    if (['INPUT', 'SELECT'].includes(target.tagName)) {
      if (inputInteractionTimeout) {
        clearTimeout(inputInteractionTimeout);
      }
      inputInteractionTimeout = setTimeout(() => {
        schedulePushRegistration(2000);
      }, 2000);
    }
  };

  document.addEventListener('click', handleDocumentClick, { passive: true });
  document.addEventListener('change', handleUserInputChange, { passive: true });

  // 3. Fallback de Permanência: após 20 segundos de permanência ativa na página
  const fallbackTimeoutId = setTimeout(() => {
    if (!isScheduled && document.visibilityState === 'visible') {
      schedulePushRegistration(0);
    }
  }, 20000);

  return () => {
    document.removeEventListener('click', handleDocumentClick);
    document.removeEventListener('change', handleUserInputChange);
    if (inputInteractionTimeout) clearTimeout(inputInteractionTimeout);
    clearTimeout(fallbackTimeoutId);
  };
}
