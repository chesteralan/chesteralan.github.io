import type { NotificationProvider } from '../types';
import { postJson, truncate } from './http';

export const discordProvider: NotificationProvider = {
  name: 'Discord',
  isConfigured: (env) => Boolean(env.DISCORD_WEBHOOK_URL?.trim()),
  async send(env, contact) {
    const webhookUrl = env.DISCORD_WEBHOOK_URL?.trim();
    if (!webhookUrl) {
      throw new Error('DISCORD_WEBHOOK_URL is not configured');
    }

    await postJson(webhookUrl, {
      embeds: [
        {
          title: 'New contact form message',
          fields: [
            { name: 'Name', value: truncate(contact.name, 256), inline: true },
            { name: 'Email', value: truncate(contact.email, 256), inline: true },
          ],
          description: truncate(contact.message, 4096),
        },
      ],
    });
  },
};
