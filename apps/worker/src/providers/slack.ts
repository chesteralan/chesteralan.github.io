import type { NotificationProvider } from '../types';
import { postJson, truncate } from './http';

export const slackProvider: NotificationProvider = {
  name: 'Slack',
  isConfigured: (env) => Boolean(env.SLACK_WEBHOOK_URL?.trim()),
  async send(env, contact) {
    const webhookUrl = env.SLACK_WEBHOOK_URL?.trim();
    if (!webhookUrl) {
      throw new Error('SLACK_WEBHOOK_URL is not configured');
    }

    await postJson(webhookUrl, {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '📬 New Alchie.cc Contact Form Message',
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Name:*\n${contact.name}`,
            },
            {
              type: 'mrkdwn',
              text: `*Email:*\n${contact.email}`,
            },
          ],
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Message:*\n${truncate(contact.message, 3000)}`,
          },
        },
      ],
    });
  },
};
