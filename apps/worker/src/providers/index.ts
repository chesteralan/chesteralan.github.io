import type { Env, NotificationProvider } from '../types';
import { discordProvider } from './discord';
import { genericWebhookProvider } from './generic-webhook';
import { googleChatProvider } from './google-chat';
import { microsoftTeamsProvider } from './microsoft-teams';
import { slackProvider } from './slack';
import { telegramProvider } from './telegram';

const providers: NotificationProvider[] = [
  slackProvider,
  discordProvider,
  googleChatProvider,
  telegramProvider,
  microsoftTeamsProvider,
  genericWebhookProvider,
];

export function getConfiguredNotificationProviders(env: Env): {
  providers: NotificationProvider[];
  configurationErrors: string[];
} {
  const configuredProviders: NotificationProvider[] = [];
  const configurationErrors: string[] = [];

  for (const provider of providers) {
    const configurationError = provider.configurationError?.(env);
    if (configurationError) {
      configurationErrors.push(`${provider.name}: ${configurationError}`);
    } else if (provider.isConfigured(env)) {
      configuredProviders.push(provider);
    }
  }

  return {
    providers: configuredProviders,
    configurationErrors,
  };
}
