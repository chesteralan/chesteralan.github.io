import type { NotificationProvider } from '../types';
import { postJson, truncate } from './http';

export const googleChatProvider: NotificationProvider = {
  name: 'Google Chat',
  isConfigured: (env) => Boolean(env.GOOGLE_CHAT_WEBHOOK_URL?.trim()),
  async send(env, contact) {
    const webhookUrl = env.GOOGLE_CHAT_WEBHOOK_URL?.trim();
    if (!webhookUrl) {
      throw new Error('GOOGLE_CHAT_WEBHOOK_URL is not configured');
    }

    const message = [
      'New Alchie.cc contact form message',
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      '',
      contact.message,
    ].join('\n');

    await postJson(webhookUrl, { text: truncate(message, 4096) });
  },
};
