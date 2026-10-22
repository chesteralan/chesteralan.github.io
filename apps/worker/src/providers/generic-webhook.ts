import type { NotificationProvider } from '../types';
import { postJson } from './http';

export const genericWebhookProvider: NotificationProvider = {
  name: 'Generic webhook',
  isConfigured: (env) => Boolean(env.GENERIC_WEBHOOK_URL?.trim()),
  async send(env, contact) {
    const webhookUrl = env.GENERIC_WEBHOOK_URL?.trim();
    if (!webhookUrl) {
      throw new Error('GENERIC_WEBHOOK_URL is not configured');
    }

    await postJson(webhookUrl, {
      event: 'contact.submitted',
      createdAt: new Date().toISOString(),
      contact: {
        name: contact.name,
        email: contact.email,
        message: contact.message,
      },
    });
  },
};
