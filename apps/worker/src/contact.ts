import type { ContactSubmission } from './types';

type ContactValidationResult =
  { valid: true; contact: ContactSubmission } | { valid: false; error: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function validateContactSubmission(value: unknown): ContactValidationResult {
  if (!isRecord(value)) {
    return { valid: false, error: 'Invalid request body' };
  }

  const name = getTrimmedString(value.name);
  const email = getTrimmedString(value.email);
  const message = getTrimmedString(value.message);

  if (!name || !email || !message) {
    return { valid: false, error: 'Name, email, and message are required.' };
  }

  const lengthError = [
    { value: name, limit: 100, error: 'Name is too long.' },
    { value: email, limit: 254, error: 'Email is too long.' },
    { value: message, limit: 5000, error: 'Message is too long.' },
  ].find(({ value: field, limit }) => field.length > limit)?.error;

  if (lengthError) {
    return { valid: false, error: lengthError };
  }

  return { valid: true, contact: { name, email, message } };
}

function getTrimmedString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}
