/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Endpoint Serverless para recebimento e despacho do formulário "Fale Conosco" (Brasil Calculadoras)
 * Integra notificações instantâneas no Telegram Bot e envio por e-mail via Resend.
 */

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Utilize POST.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { nome, email, motivo, mensagem } = body || {};

    if (!nome || typeof nome !== 'string' || nome.trim().length < 2) {
      return res.status(400).json({ error: 'Por favor, informe seu nome completo.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'Por favor, informe um endereço de e-mail válido.' });
    }

    if (!mensagem || typeof mensagem !== 'string' || mensagem.trim().length < 5) {
      return res.status(400).json({ error: 'A mensagem deve conter no mínimo 5 caracteres.' });
    }

    if (mensagem.length > 5000) {
      return res.status(400).json({ error: 'A mensagem excede o limite máximo permitido de 5000 caracteres.' });
    }

    const cleanNome = nome.trim().slice(0, 100);
    const cleanEmail = email.trim().slice(0, 120);
    const cleanMotivo = (typeof motivo === 'string' ? motivo.trim() : 'Dúvida Geral').slice(0, 50);
    const cleanMensagem = mensagem.trim();
    const dataHora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;
    const resendApiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL || 'alessandrooliveirape@gmail.com';

    let telegramSent = false;
    let emailSent = false;

    // 1. Notificação no Telegram Bot
    if (telegramToken && telegramChatId) {
      try {
        const tgText = `📬 *NOVO CONTATO RECEBIDO NO BRASIL CALCULADORAS!*
━━━━━━━━━━━━━━━━━━━━━
👤 *Nome:* ${cleanNome}
📧 *E-mail:* \`${cleanEmail}\`
📌 *Motivo:* ${cleanMotivo}
💬 *Mensagem:*
${cleanMensagem}
━━━━━━━━━━━━━━━━━━━━━
🌐 *Origem:* www.brasilcalculadoras.com.br/contato
🕒 *Data:* ${dataHora}`;

        const tgRes = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: tgText,
            parse_mode: 'Markdown'
          })
        });

        if (tgRes.ok) {
          telegramSent = true;
        } else {
          console.warn('Falha no despacho do Telegram:', await tgRes.text());
        }
      } catch (tgErr) {
        console.error('Erro na conexão com Telegram:', tgErr);
      }
    }

    // 2. Notificação via Resend (E-mail)
    if (resendApiKey) {
      try {
        const emailHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
            <div style="border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 16px;">
              <h2 style="color: #2563eb; margin: 0; font-size: 20px;">📬 Novo Contato - Brasil Calculadoras</h2>
              <p style="color: #64748b; font-size: 12px; margin: 4px 0 0 0;">Mensagem enviada através do formulário institucional</p>
            </div>
            <p style="font-size: 14px; margin: 8px 0;"><strong>Remetente:</strong> ${cleanNome}</p>
            <p style="font-size: 14px; margin: 8px 0;"><strong>E-mail:</strong> <a href="mailto:${cleanEmail}" style="color: #2563eb;">${cleanEmail}</a></p>
            <p style="font-size: 14px; margin: 8px 0;"><strong>Motivo / Assunto:</strong> ${cleanMotivo}</p>
            <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #2563eb; margin: 16px 0; border-radius: 6px;">
              <strong style="color: #1e293b; font-size: 13px;">Conteúdo da Mensagem:</strong>
              <p style="white-space: pre-wrap; margin: 8px 0 0 0; color: #334155; font-size: 14px; line-height: 1.5;">${cleanMensagem}</p>
            </div>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 11px; color: #94a3b8; margin: 0;">Data de envio: ${dataHora} | Brasil Calculadoras (brasilcalculadoras.com.br)</p>
          </div>
        `;

        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Brasil Calculadoras <onboarding@resend.dev>',
            to: adminEmail,
            reply_to: cleanEmail,
            subject: `[Brasil Calculadoras] Contato: ${cleanMotivo} - ${cleanNome}`,
            html: emailHtml
          })
        });

        if (resendRes.ok) {
          emailSent = true;
        } else {
          console.warn('Falha no despacho do Resend:', await resendRes.text());
        }
      } catch (resendErr) {
        console.error('Erro na conexão com Resend:', resendErr);
      }
    }

    return res.status(200).json({
      success: true,
      delivered: {
        telegram: telegramSent,
        email: emailSent
      },
      message: 'Sua mensagem foi enviada e registrada com sucesso!'
    });
  } catch (error: any) {
    console.error('Erro interno no handler api/contato:', error);
    return res.status(500).json({ error: 'Erro ao processar sua mensagem. Tente novamente mais tarde.' });
  }
}

