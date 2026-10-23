export interface Env {
  ALLOWED_ORIGIN: string;
  CONTACT_EMAIL: string;
  RESEND_API_KEY: string;
  SLACK_WEBHOOK_URL?: string;
  DISCORD_WEBHOOK_URL?: string;
  GOOGLE_CHAT_WEBHOOK_URL?: string;
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
  MICROSOFT_TEAMS_WEBHOOK_URL?: string;
  GENERIC_WEBHOOK_URL?: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export interface NotificationProvider {
  name: string;
  isConfigured(env: Env): boolean;
  send(env: Env, contact: ContactSubmission): Promise<void>;
  configurationError?(env: Env): string | undefined;
}
