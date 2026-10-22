import type { NotificationProvider } from '../types';
import { postJson, truncate } from './http';

export const telegramProvider: NotificationProvider = {
  name: 'Telegram',
  isConfigured: (env) => Boolean(env.TELEGRAM_BOT_TOKEN?.trim() && env.TELEGRAM_CHAT_ID?.trim()),
  configurationError(env) {
    const hasToken = Boolean(env.TELEGRAM_BOT_TOKEN?.trim());
    const hasChatId = Boolean(env.TELEGRAM_CHAT_ID?.trim());
    return hasToken === hasChatId
      ? undefined
      : 'Telegram requires both TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID';
  },
  async send(env, contact) {
    const token = env.TELEGRAM_BOT_TOKEN?.trim();
    const chatId = env.TELEGRAM_CHAT_ID?.trim();
    if (!token || !chatId) {
      throw new Error('TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID must both be configured');
    }

    const message = [
      'New Alchie.cc contact form message',
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      '',
      contact.message,
    ].join('\n');

    await postJson(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: chatId,
      text: truncate(message, 4096),
    });
  },
};
