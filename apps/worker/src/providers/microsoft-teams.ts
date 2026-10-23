import type { NotificationProvider } from '../types';
import { postJson } from './http';

export const microsoftTeamsProvider: NotificationProvider = {
  name: 'Microsoft Teams',
  isConfigured: (env) => Boolean(env.MICROSOFT_TEAMS_WEBHOOK_URL?.trim()),
  async send(env, contact) {
    const webhookUrl = env.MICROSOFT_TEAMS_WEBHOOK_URL?.trim();
    if (!webhookUrl) {
      throw new Error('MICROSOFT_TEAMS_WEBHOOK_URL is not configured');
    }

    await postJson(webhookUrl, {
      type: 'message',
      attachments: [
        {
          contentType: 'application/vnd.microsoft.card.adaptive',
          content: {
            $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
            type: 'AdaptiveCard',
            version: '1.4',
            body: [
              {
                type: 'TextBlock',
                text: 'New Alchie.cc contact form message',
                weight: 'Bolder',
                size: 'Medium',
              },
              {
                type: 'TextBlock',
                text: `Name: ${contact.name}\nEmail: ${contact.email}`,
                wrap: true,
              },
              {
                type: 'TextBlock',
                text: contact.message,
                wrap: true,
              },
            ],
          },
        },
      ],
    });
  },
};
