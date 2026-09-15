import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { socialLinks } from '../data/portfolio';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const SCOPE_OPTIONS = [
  'Web Application',
  'Chrome Extension',
  'Mobile App',
  'API/Backend',
  'UI/UX Design',
  'Other',
];

const TIMELINE_OPTIONS = [
  'Urgent (1-2 weeks)',
  'Standard (1-2 months)',
  'Flexible (3+ months)',
  'Just Exploring',
];

const BUDGET_OPTIONS = [
  'Under ₱25,000',
  '₱25,000 - ₱50,000',
  '₱50,000 - ₱100,000',
  '₱100,000+',
];

const CORE_AREAS = [
  'Full-stack web application development (MVP to production)',
  'Responsive UI/UX with modern frameworks (React, TypeScript)',
  'REST API design, backend services & database architecture',
  'Chrome extensions & developer tooling',
];

const SOCIALS = [
  { label: 'GitHub', handle: '@chesteralan', href: socialLinks.github, icon: 'code' },
  { label: 'LinkedIn', handle: '/in/chesteralan', href: socialLinks.linkedin, icon: 'person' },
  { label: 'Website', handle: 'alchie.cc', href: socialLinks.website, icon: 'language' },
  { label: 'Email', handle: socialLinks.email, href: `mailto:${socialLinks.email}`, icon: 'mail' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    scope: [] as string[],
    timeline: '',
    budget: '',
    details: '',
    website: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleScope = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      scope: prev.scope.includes(option)
        ? prev.scope.filter((s) => s !== option)
        : [...prev.scope, option],
    }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return;
    if (!formData.firstName || !formData.email || !formData.details) {
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
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          subject: `Project Inquiry — ${formData.scope.join(', ') || 'General'}`,
          message: [
            formData.details,
            '',
            formData.timeline ? `Timeline: ${formData.timeline}` : '',
            formData.budget ? `Budget: ${formData.budget}` : '',
            formData.scope.length ? `Scope: ${formData.scope.join(', ')}` : '',
          ]
            .filter(Boolean)
            .join('\n'),
          timestamp: new Date().toISOString(),
        }),
      });
      if (!response.ok) throw new Error('Failed to send message');
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        scope: [],
        timeline: '',
        budget: '',
        details: '',
        website: '',
      });
    } catch {
      setErrorMsg('Something went wrong. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#0891b2] border border-cyan-200 text-sm font-medium mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0891b2]" />
            GET IN TOUCH
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-4">
            Let's Build Something Exceptional
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Currently available for freelance engineering contracts, consulting, and full-time senior engineering roles.
          </p>
        </ScrollReveal>
      </section>

      {/* 2-Column Content */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column — Sidebar */}
          <aside className="lg:col-span-5 space-y-6">
            {/* Status Card */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0891b2] animate-pulse" />
                    <span className="font-bold text-slate-900 text-sm">Available for Projects</span>
                  </div>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#0891b2] border border-cyan-100">
                    Remote &amp; Hybrid
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Accepting scoped deliverables, feature builds, and consulting engagements.
                </p>
              </div>
            </ScrollReveal>

            {/* Contact Methods */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-5">
                {/* Email */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-cyan-50 text-[#0891b2] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[18px]">mail</span>
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider font-semibold text-slate-400">Direct Email</span>
                      <a href={`mailto:${socialLinks.email}`} className="text-sm font-bold text-slate-900 hover:text-[#0891b2] transition-colors">
                        {socialLinks.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 px-2.5 py-1.5 rounded-md border border-slate-200 transition-colors shrink-0"
                  >
                    <span className="material-symbols-outlined text-[14px]">{copied ? 'check' : 'content_copy'}</span>
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-cyan-50 text-[#0891b2] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider font-semibold text-slate-400">Location</span>
                    <p className="text-sm font-bold text-slate-900 leading-snug">Davao City, Philippines</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-50 text-[#0891b2] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">bolt</span>
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider font-semibold text-slate-400">Response Window</span>
                    <p className="text-sm font-bold text-slate-900 leading-snug">Typically responds within 24 hours</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Developer Presence */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <span className="block text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-3">Developer Presence</span>
                <div className="grid grid-cols-2 gap-3">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100"
                    >
                      <div className="w-7 h-7 rounded-lg bg-cyan-100/60 text-[#0891b2] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px]">{social.icon}</span>
                      </div>
                      <div className="overflow-hidden">
                        <span className="block text-xs font-bold text-slate-900 truncate">{social.label}</span>
                        <span className="block text-[11px] text-slate-500 truncate">{social.handle}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Core Areas */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-[18px] text-[#0891b2]">check_circle</span>
                  <h2 className="text-sm font-bold text-slate-900">Core Areas of Engagement</h2>
                </div>
                <ul className="space-y-3">
                  {CORE_AREAS.map((area) => (
                    <li key={area} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <span className="w-4 h-4 rounded-full bg-cyan-50 text-[#0891b2] flex items-center justify-center shrink-0 mt-0.5 text-[10px]">✓</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </aside>

          {/* Right Column — Inquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-6 sm:p-9 border border-slate-100 shadow-sm">
                <div className="mb-7">
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Send a Project Inquiry</h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Fill out the details below. For urgent requirements, feel free to contact directly via email.
                  </p>
                </div>

                {/* Honeypot */}
                <div className="pointer-events-none absolute h-0 overflow-hidden opacity-0" aria-hidden="true">
                  <label htmlFor="website">Leave this blank</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First / Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl bg-slate-50/70 border border-slate-200 text-slate-800 text-sm px-3.5 py-2.5 focus:bg-white focus:ring-2 focus:ring-[#0891b2] focus:border-transparent outline-none transition-all"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl bg-slate-50/70 border border-slate-200 text-slate-800 text-sm px-3.5 py-2.5 focus:bg-white focus:ring-2 focus:ring-[#0891b2] focus:border-transparent outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Work Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl bg-slate-50/70 border border-slate-200 text-slate-800 text-sm px-3.5 py-2.5 focus:bg-white focus:ring-2 focus:ring-[#0891b2] focus:border-transparent outline-none transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>

                  {/* Scope / Engagement Type */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">Project Scope / Engagement Type</label>
                    <div className="flex flex-wrap gap-2">
                      {SCOPE_OPTIONS.map((option) => {
                        const active = formData.scope.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleScope(option)}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                              active
                                ? 'bg-[#0891b2] text-white shadow-sm'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label htmlFor="timeline" className="block text-xs font-semibold text-slate-700 mb-1.5">Estimated Timeline</label>
                    <div className="relative">
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl bg-slate-50/70 border border-slate-200 text-slate-800 text-sm px-3.5 py-2.5 pr-8 focus:bg-white focus:ring-2 focus:ring-[#0891b2] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select a timeline</option>
                        {TIMELINE_OPTIONS.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                        <span className="material-symbols-outlined text-[18px]">expand_more</span>
                      </div>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">Approximate Budget (PHP)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_OPTIONS.map((option) => {
                        const active = formData.budget === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, budget: active ? '' : option }))}
                            className={`py-2.5 px-3 text-xs font-semibold rounded-xl transition-colors text-center ${
                              active
                                ? 'bg-[#0891b2] text-white shadow-sm'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="details" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full rounded-xl bg-slate-50/70 border border-slate-200 text-slate-800 text-sm p-3.5 focus:bg-white focus:ring-2 focus:ring-[#0891b2] focus:border-transparent outline-none transition-all placeholder:text-slate-400 resize-y"
                      placeholder="Tell me about your project, goals, tech stack, and timeline..."
                    />
                  </div>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
                      <span className="material-symbols-outlined mt-0.5 h-5 w-5 shrink-0 text-green-500">check_circle</span>
                      <div>
                        <p className="text-sm font-medium text-green-800">Message sent!</p>
                        <p className="text-sm text-green-600">Thanks for reaching out. I'll get back to you soon!</p>
                      </div>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                      <span className="material-symbols-outlined mt-0.5 h-5 w-5 shrink-0 text-red-500">error</span>
                      <p className="text-sm text-red-700">{errorMsg}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="space-y-3 pt-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0891b2] hover:bg-[#0e7490] text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="material-symbols-outlined h-4 w-4 animate-spin">hourglass_top</span>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <span className="material-symbols-outlined h-4 w-4">send</span>
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
                      <span className="material-symbols-outlined text-[14px]">lock</span>
                      <span>Your information is kept strictly confidential and will never be shared.</span>
                    </div>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
