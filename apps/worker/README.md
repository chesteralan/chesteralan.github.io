# Contact Worker

The worker sends each valid contact submission through Resend and any configured
notification providers. Resend is required; notification providers are optional
and can be enabled independently.

## Required configuration

Set these as Cloudflare Worker variables/secrets:

- `ALLOWED_ORIGIN`: the website origin permitted by the worker's CORS response.
- `CONTACT_EMAIL`: the inbox that receives contact submissions.
- `RESEND_API_KEY`: Resend API key, set as a secret.

For example:

```bash
pnpm --dir apps/worker exec wrangler secret put RESEND_API_KEY
```

Set `ALLOWED_ORIGIN` and `CONTACT_EMAIL` as Worker variables in the Cloudflare
dashboard or in a local `.dev.vars` file.

## Optional notification providers

Set the applicable values as Worker secrets. Only providers with complete
configuration are used.

| Provider                         | Configuration                               |
| -------------------------------- | ------------------------------------------- |
| Slack                            | `SLACK_WEBHOOK_URL`                         |
| Discord                          | `DISCORD_WEBHOOK_URL`                       |
| Google Chat                      | `GOOGLE_CHAT_WEBHOOK_URL`                   |
| Telegram                         | `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` |
| Microsoft Teams                  | `MICROSOFT_TEAMS_WEBHOOK_URL`               |
| Zapier, Make, or another service | `GENERIC_WEBHOOK_URL`                       |

Slack, Discord, and Google Chat use their incoming webhook URLs. Teams should
use a Workflows webhook configured to receive an Adaptive Card. Telegram needs
a bot token and the destination chat ID; both values must be set together.

The generic webhook receives a JSON `POST` request with this shape:

```json
{
  "event": "contact.submitted",
  "createdAt": "2026-01-01T12:00:00.000Z",
  "contact": {
    "name": "Example Name",
    "email": "example@example.com",
    "message": "Contact message"
  }
}
```

Configure the destination URL only on the worker; it is never accepted from the
contact form. Store webhook URLs and bot tokens as secrets.

## Delivery behavior

Resend and all configured notification providers are called concurrently. A
Resend failure returns an error to the form. A notification-provider failure
is logged but does not prevent a successful email from being acknowledged.
With no notification providers configured, the worker sends email only.

## Development

```bash
pnpm install
pnpm --dir apps/worker test
pnpm --dir apps/worker build
pnpm --dir apps/worker exec wrangler deploy --dry-run
```
