interface Env {
  SLACK_WEBHOOK_URL: string;
}

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp?: string;
}

function jsonResponse(data: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function parseBody(request: Request): Promise<ContactPayload | null> {
  try {
    return (await request.json()) as ContactPayload;
  } catch {
    return null;
  }
}

function validatePayload(body: ContactPayload): string | null {
  if (!body.name || !body.email || !body.message) {
    return 'Missing required fields: name, email, message';
  }
  return null;
}

function buildSlackMessage(body: ContactPayload) {
  const { name, email, subject, message, timestamp } = body;
  return {
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: 'New Contact Form Submission', emoji: true },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Name:*\n${sanitize(name)}` },
          { type: 'mrkdwn', text: `*Email:*\n<mailto:${sanitize(email)}|${sanitize(email)}>` },
          { type: 'mrkdwn', text: `*Subject:*\n${sanitize(subject || 'N/A')}` },
          {
            type: 'mrkdwn',
            text: `*Time:*\n${new Date(timestamp || Date.now()).toLocaleString('en-PH', { timeZone: 'Asia/Manila' })}`,
          },
        ],
      },
      { type: 'divider' },
      {
        type: 'section',
        text: { type: 'mrkdwn', text: `*Message:*\n${sanitize(message)}` },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `From alchie.cc — ${sanitize(name)} (${sanitize(email)})`,
          },
        ],
      },
    ],
  };
}

async function sendToSlack(webhookUrl: string, payload: unknown): Promise<boolean> {
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    console.error('Slack webhook error:', response.status, await response.text());
    return false;
  }
  return true;
}

async function handlePost(request: Request, env: Env): Promise<Response> {
  const body = await parseBody(request);
  if (!body) return jsonResponse({ error: 'Invalid JSON' }, 400);

  const validationError = validatePayload(body);
  if (validationError) return jsonResponse({ error: validationError }, 400);

  const sent = await sendToSlack(env.SLACK_WEBHOOK_URL, buildSlackMessage(body));
  if (!sent) return jsonResponse({ error: 'Failed to send to Slack' }, 500);

  return jsonResponse({ success: true });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405);
    }
    return handlePost(request, env);
  },
};

function sanitize(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '\n');
}
