import type { ContactSubmission, Env } from '../types';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendContactEmail(env: Env, contact: ContactSubmission): Promise<void> {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Alchie Tagudin <onboarding@resend.dev>',
      to: [env.CONTACT_EMAIL],
      reply_to: contact.email,
      subject: `Alchie.cc message from ${contact.name}`,
      html: `
        <h2>Alchie.cc Contact Form Message</h2>

        <p>
          <strong>Name:</strong><br />
          ${escapeHtml(contact.name)}
        </p>

        <p>
          <strong>Email:</strong><br />
          ${escapeHtml(contact.email)}
        </p>

        <p>
          <strong>Message:</strong><br />
          ${escapeHtml(contact.message).replace(/\n/g, '<br />')}
        </p>
      `,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`HTTP ${response.status}${detail ? `: ${detail}` : ''}`);
  }
}
