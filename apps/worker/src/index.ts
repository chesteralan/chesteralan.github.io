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

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let body: ContactPayload;
    try {
      body = (await request.json()) as ContactPayload;
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { name, email, subject, message, timestamp } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, message' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const slackMessage = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: 'New Contact Form Submission',
            emoji: true,
          },
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
          text: {
            type: 'mrkdwn',
            text: `*Message:*\n${sanitize(message)}`,
          },
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

    const response = await fetch(env.SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slackMessage),
    });

    if (!response.ok) {
      console.error('Slack webhook error:', response.status, await response.text());
      return new Response(JSON.stringify({ error: 'Failed to send to Slack' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
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
