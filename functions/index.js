const { onRequest } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const admin = require('firebase-admin');

admin.initializeApp();

// Define Slack webhook URL as a secret (set via `firebase functions:secrets:set SLACK_WEBHOOK_URL`)
const slackWebhookUrl = defineSecret('SLACK_WEBHOOK_URL');

/**
 * Receives contact form submissions and forwards them to Slack.
 *
 * POST /sendContactToSlack
 * Body: { name, email, subject, message, timestamp }
 */
exports.sendContactToSlack = onRequest(
  {
    secrets: [slackWebhookUrl],
    cors: true,
  },
  async (req, res) => {
    // Only allow POST
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const { name, email, subject, message, timestamp } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      res.status(400).json({ error: 'Missing required fields: name, email, message' });
      return;
    }

    const slackMessage = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '📬 New Contact Form Submission',
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            { type: 'mrkdwn', text: `*Name:*\n${sanitize(name)}` },
            { type: 'mrkdwn', text: `*Email:*\n<mailto:${sanitize(email)}|${sanitize(email)}>` },
            { type: 'mrkdwn', text: `*Subject:*\n${sanitize(subject || 'N/A')}` },
            { type: 'mrkdwn', text: `*Time:*\n${new Date(timestamp || Date.now()).toLocaleString('en-PH', { timeZone: 'Asia/Manila' })}` },
          ],
        },
        {
          type: 'divider',
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Message:*\n${sanitize(message)}`,
          },
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `🌐 From alchie.cc — ${sanitize(name)} (${sanitize(email)})`,
            },
          ],
        },
      ],
    };

    try {
      const response = await fetch(slackWebhookUrl.value(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackMessage),
      });

      if (!response.ok) {
        console.error('Slack webhook error:', response.status, await response.text());
        res.status(500).json({ error: 'Failed to send to Slack' });
        return;
      }

      // Also store in Firestore for record
      await admin.firestore().collection('contact_messages').add({
        name,
        email,
        subject: subject || '',
        message,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      res.json({ success: true });
    } catch (error) {
      console.error('Error sending to Slack:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

function sanitize(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '\n');
}
