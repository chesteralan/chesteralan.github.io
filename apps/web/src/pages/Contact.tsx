import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Code2, UserRound, MapPin } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { socialLinks } from '../data/portfolio';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return;
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in all required fields.');
      setStatus('error');
      return;
    }
    if (!EMAIL_REGEX.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    setStatus('sending');
    setErrorMsg('');
    try {
      const endpoint =
        import.meta.env.VITE_CONTACT_ENDPOINT ||
        `https://us-central1-${import.meta.env.VITE_FIREBASE_PROJECT_ID || 'YOUR_PROJECT_ID'}.cloudfunctions.net/sendContactToSlack`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact Message',
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });
      if (!response.ok) throw new Error('Failed to send message');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', website: '' });
    } catch {
      setErrorMsg('Something went wrong. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <div>
      <section>
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-500">
                  Get in Touch
                </p>
                <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
                  Let's <span className="gradient-text">talk</span>
                </h1>
                <p className="mb-8 leading-relaxed text-gray-600">
                  Have a project, collaboration idea, or just want to say hi? I'm always open to new
                  opportunities and conversations.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-4">
                  <a href={`mailto:${socialLinks.email}`} className="card-hover flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                      <Mail className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <p className="text-sm text-gray-500">{socialLinks.email}</p>
                    </div>
                  </a>
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="card-hover flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                      <Code2 className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">GitHub</p>
                      <p className="text-sm text-gray-500">@chesteralan</p>
                    </div>
                  </a>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="card-hover flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                      <UserRound className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">LinkedIn</p>
                      <p className="text-sm text-gray-500">/in/chesteralan</p>
                    </div>
                  </a>
                  <div className="card flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50">
                      <MapPin className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Location</p>
                      <p className="text-sm text-gray-500">Davao City, Philippines</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-3">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="card p-8">
                  <div className="pointer-events-none absolute h-0 overflow-hidden opacity-0" aria-hidden="true">
                    <label htmlFor="website">Leave this blank</label>
                    <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                  </div>
                  <div className="mb-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                        placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-gray-700">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                      placeholder="What's this about?" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6}
                      className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                      placeholder="Tell me about your project, idea, or just say hi!" />
                  </div>

                  {status === 'success' && (
                    <div className="mb-4 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      <div>
                        <p className="text-sm font-medium text-green-800">Message sent!</p>
                        <p className="text-sm text-green-600">Thanks for reaching out. I'll get back to you soon!</p>
                      </div>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="mb-4 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                      <p className="text-sm text-red-700">{errorMsg}</p>
                    </div>
                  )}

                  <button type="submit" disabled={status === 'sending'}
                    className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-50">
                    {status === 'sending' ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="h-4 w-4" /> Send Message</>
                    )}
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
