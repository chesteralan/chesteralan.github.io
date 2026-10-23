import { validateContactSubmission } from './contact';
import { getConfiguredNotificationProviders } from './providers';
import { sendContactEmail } from './providers/resend';
import type { Env } from './types';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin');
    const allowedOrigin = origin === env.ALLOWED_ORIGIN ? origin : env.ALLOWED_ORIGIN;

    const corsHeaders: Record<string, string> = {
      'Access-Control-Allow-Origin': allowedOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      Vary: 'Origin',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    if (request.method !== 'POST') {
      return Response.json(
        { error: 'Method not allowed' },
        {
          status: 405,
          headers: corsHeaders,
        }
      );
    }

    let data: unknown;
    try {
      data = await request.json();
    } catch {
      return Response.json(
        { error: 'Invalid request body' },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    const validation = validateContactSubmission(data);
    if (!validation.valid) {
      return Response.json(
        { error: validation.error },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    const { contact } = validation;
    const { providers, configurationErrors } = getConfiguredNotificationProviders(env);

    for (const error of configurationErrors) {
      console.error('Notification provider configuration error:', error);
    }

    const deliveries: Array<{ name: string; promise: Promise<void> }> = [
      { name: 'Resend', promise: sendContactEmail(env, contact) },
      ...providers.map((provider) => ({
        name: provider.name,
        promise: provider.send(env, contact),
      })),
    ];
    const results = await Promise.allSettled(deliveries.map(({ promise }) => promise));
    const [emailResult, ...notificationResults] = results;

    if (emailResult.status === 'rejected') {
      console.error('Resend error:', String(emailResult.reason));

      return Response.json(
        { error: 'Unable to send your message. Please try again later.' },
        {
          status: 500,
          headers: corsHeaders,
        }
      );
    }

    notificationResults.forEach((result, index) => {
      if (result.status === 'rejected') {
        console.error(`${deliveries[index + 1].name} notification error:`, String(result.reason));
      }
    });

    return Response.json(
      { success: true },
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  },
};
