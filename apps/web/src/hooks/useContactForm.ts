import { useState } from 'react';
import { socialLinks } from '../data/portfolio';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  website: string;
}

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

function validateForm(data: ContactFormData): string | null {
  if (data.website) return null;
  if (!data.name || !data.email || !data.message) {
    return 'Please fill in all required fields.';
  }
  if (!EMAIL_REGEX.test(data.email)) {
    return 'Please enter a valid email address.';
  }
  return null;
}

function buildPayload(data: ContactFormData): ContactPayload {
  return {
    name: data.name,
    email: data.email,
    subject: 'Contact Form Message',
    message: data.message,
    timestamp: new Date().toISOString(),
  };
}

function getEndpoint(): string {
  return (
    import.meta.env.VITE_CONTACT_ENDPOINT ||
    'https://contact-form-alchie-cc.chesteralan.workers.dev/'
  );
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    website: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMsg('');
    }
  };

  const handleCopyEmail = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(socialLinks.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (formData.website) return;

    const error = validateForm(formData);
    if (error) {
      setErrorMsg(error);
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMsg('');
    try {
      const response = await fetch(getEndpoint(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildPayload(formData)),
      });
      if (!response.ok) throw new Error('Failed to send message');
      setStatus('success');
      setFormData({ name: '', email: '', message: '', website: '' });
    } catch {
      setErrorMsg('Something went wrong. Please try again later.');
      setStatus('error');
    }
  };

  return { formData, status, errorMsg, copied, handleChange, handleCopyEmail, handleSubmit };
}
