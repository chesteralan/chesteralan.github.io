import { afterEach, describe, expect, it, vi } from 'vitest';
import { validateContactSubmission } from '../src/contact';
import worker from '../src';
import { getConfiguredNotificationProviders } from '../src/providers';
import { discordProvider } from '../src/providers/discord';
import { genericWebhookProvider } from '../src/providers/generic-webhook';
import { googleChatProvider } from '../src/providers/google-chat';
import { microsoftTeamsProvider } from '../src/providers/microsoft-teams';
import { slackProvider } from '../src/providers/slack';
import { telegramProvider } from '../src/providers/telegram';
import { sendContactEmail } from '../src/providers/resend';
import type { ContactSubmission, Env, NotificationProvider } from '../src/types';

const contact: ContactSubmission = {
  name: 'Test Person',
  email: 'test@example.com',
  message: 'Hello from the contact form',
};

const baseEnv: Env = {
  ALLOWED_ORIGIN: 'https://example.com',
  CONTACT_EMAIL: 'owner@example.com',
  RESEND_API_KEY: 'test-resend-key',
};

const providerCases: Array<{
  provider: NotificationProvider;
  env: Partial<Env>;
  url: string;
}> = [
  {
    provider: slackProvider,
    env: { SLACK_WEBHOOK_URL: 'https://hooks.example.com/slack' },
    url: 'https://hooks.example.com/slack',
  },
  {
    provider: discordProvider,
    env: { DISCORD_WEBHOOK_URL: 'https://hooks.example.com/discord' },
    url: 'https://hooks.example.com/discord',
  },
  {
    provider: googleChatProvider,
    env: { GOOGLE_CHAT_WEBHOOK_URL: 'https://hooks.example.com/google-chat' },
    url: 'https://hooks.example.com/google-chat',
  },
  {
    provider: telegramProvider,
    env: {
      TELEGRAM_BOT_TOKEN: 'test-bot-token',
      TELEGRAM_CHAT_ID: '12345',
    },
    url: 'https://api.telegram.org/bottest-bot-token/sendMessage',
  },
  {
    provider: microsoftTeamsProvider,
    env: { MICROSOFT_TEAMS_WEBHOOK_URL: 'https://hooks.example.com/teams' },
    url: 'https://hooks.example.com/teams',
  },
  {
    provider: genericWebhookProvider,
    env: { GENERIC_WEBHOOK_URL: 'https://hooks.example.com/generic' },
    url: 'https://hooks.example.com/generic',
  },
];

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('validateContactSubmission', () => {
  it('trims and returns a valid contact submission', () => {
    expect(
      validateContactSubmission({
        name: '  Test Person ',
        email: ' test@example.com ',
        message: ' Hello ',
      })
    ).toEqual({
      valid: true,
      contact: {
        name: 'Test Person',
        email: 'test@example.com',
        message: 'Hello',
      },
    });
  });

  it('rejects non-object and incomplete payloads', () => {
    expect(validateContactSubmission(null)).toEqual({
      valid: false,
      error: 'Invalid request body',
    });
    expect(validateContactSubmission({ name: 'Test' })).toEqual({
      valid: false,
      error: 'Name, email, and message are required.',
    });
  });
});

describe('notification providers', () => {
  it.each(providerCases)(
    'sends a $provider.name notification to its configured endpoint',
    async ({ provider, env, url }) => {
      const fetchMock = vi.fn<typeof fetch>(async () => new Response(null, { status: 200 }));
      vi.stubGlobal('fetch', fetchMock);

      const providerEnv = { ...baseEnv, ...env };
      expect(provider.isConfigured(providerEnv)).toBe(true);
      await provider.send(providerEnv, contact);

      expect(fetchMock).toHaveBeenCalledOnce();
      expect(String(fetchMock.mock.calls[0][0])).toBe(url);
      const requestBody = JSON.parse(String(fetchMock.mock.calls[0][1]?.body)) as Record<
        string,
        unknown
      >;

      if (provider.name === 'Slack') {
        expect(requestBody.blocks).toMatchObject([
          { type: 'header' },
          {
            type: 'section',
            fields: [{ text: '*Name:*\nTest Person' }, { text: '*Email:*\ntest@example.com' }],
          },
          {
            type: 'section',
            text: { text: '*Message:*\nHello from the contact form' },
          },
        ]);
      } else if (provider.name === 'Discord') {
        expect(requestBody.embeds).toMatchObject([
          {
            title: 'New contact form message',
            fields: [
              { name: 'Name', value: contact.name },
              { name: 'Email', value: contact.email },
            ],
            description: contact.message,
          },
        ]);
      } else if (provider.name === 'Google Chat') {
        expect(requestBody.text).toContain(contact.message);
        expect(requestBody.text).toContain(contact.email);
      } else if (provider.name === 'Telegram') {
        expect(requestBody).toMatchObject({
          chat_id: '12345',
          text: expect.stringContaining(contact.message),
        });
      } else if (provider.name === 'Microsoft Teams') {
        expect(requestBody.attachments).toMatchObject([
          {
            contentType: 'application/vnd.microsoft.card.adaptive',
            content: {
              type: 'AdaptiveCard',
              body: [
                { text: 'New Alchie.cc contact form message' },
                { text: `Name: ${contact.name}\nEmail: ${contact.email}` },
                { text: contact.message },
              ],
            },
          },
        ]);
      } else {
        expect(requestBody).toMatchObject({
          event: 'contact.submitted',
          contact,
        });
        expect(requestBody.createdAt).toEqual(expect.any(String));
      }
    }
  );

  it('sends the email through Resend with escaped contact content', async () => {
    const fetchMock = vi.fn<typeof fetch>(async () => new Response(null, { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);

    await sendContactEmail(baseEnv, {
      ...contact,
      name: '<Test>',
      message: 'Line one\n<script>alert(1)</script>',
    });

    expect(String(fetchMock.mock.calls[0][0])).toBe('https://api.resend.com/emails');
    const emailRequest = JSON.parse(String(fetchMock.mock.calls[0][1]?.body)) as {
      html: string;
      to: string[];
    };
    expect(emailRequest.to).toEqual([baseEnv.CONTACT_EMAIL]);
    expect(emailRequest.html).toContain('&lt;Test&gt;');
    expect(emailRequest.html).toContain('&lt;script&gt;');
    expect(emailRequest.html).toContain('Line one<br />');
  });

  it('reports incomplete Telegram configuration', () => {
    const result = getConfiguredNotificationProviders({
      ...baseEnv,
      TELEGRAM_BOT_TOKEN: 'test-bot-token',
    });

    expect(result.providers).toEqual([]);
    expect(result.configurationErrors).toEqual([
      'Telegram: Telegram requires both TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID',
    ]);
  });

  it('includes only configured providers', () => {
    const result = getConfiguredNotificationProviders({
      ...baseEnv,
      DISCORD_WEBHOOK_URL: 'https://hooks.example.com/discord',
      GENERIC_WEBHOOK_URL: 'https://hooks.example.com/generic',
    });

    expect(result.providers.map((provider) => provider.name)).toEqual([
      'Discord',
      'Generic webhook',
    ]);
    expect(result.configurationErrors).toEqual([]);
  });

  it('keeps notification failures from failing a successful email delivery', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const fetchMock = vi.fn<typeof fetch>(async (input) => {
      if (String(input) === 'https://api.resend.com/emails') {
        return new Response(null, { status: 200 });
      }

      return new Response('Unavailable', { status: 503 });
    });
    vi.stubGlobal('fetch', fetchMock);

    const response = await worker.fetch(
      new Request('https://worker.example.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
      }),
      {
        ...baseEnv,
        DISCORD_WEBHOOK_URL: 'https://hooks.example.com/discord',
      }
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ success: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(errorSpy).toHaveBeenCalledWith(
      'Discord notification error:',
      expect.stringContaining('HTTP 503')
    );
  });

  it('returns an error when the required Resend delivery fails', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const fetchMock = vi.fn<typeof fetch>(async (input) => {
      if (String(input) === 'https://api.resend.com/emails') {
        return new Response('Unavailable', { status: 503 });
      }

      return new Response(null, { status: 200 });
    });
    vi.stubGlobal('fetch', fetchMock);

    const response = await worker.fetch(
      new Request('https://worker.example.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
      }),
      {
        ...baseEnv,
        DISCORD_WEBHOOK_URL: 'https://hooks.example.com/discord',
      }
    );

    expect(response.status).toBe(500);
    expect(await response.json()).toEqual({
      error: 'Unable to send your message. Please try again later.',
    });
    expect(errorSpy).toHaveBeenCalledWith('Resend error:', expect.stringContaining('HTTP 503'));
  });
});
