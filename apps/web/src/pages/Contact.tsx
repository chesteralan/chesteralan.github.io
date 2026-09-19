import Badge from '../components/Badge';
import BadgePill from '../components/BadgePill';
import Card from '../components/Card';
import ContactInfoRow from '../components/ContactInfoRow';
import FieldLabel from '../components/FieldLabel';
import FormAlert from '../components/FormAlert';
import FormField from '../components/FormField';
import Icon from '../components/Icon';
import IconBox from '../components/IconBox';
import PageHeading from '../components/PageHeading';
import PulseDot from '../components/PulseDot';
import ScrollReveal from '../components/ScrollReveal';
import SectionContainer from '../components/SectionContainer';
import SocialCard from '../components/SocialCard';
import { socialLinks } from '../data/portfolio';
import { useContactForm } from '../hooks/useContactForm';

const SOCIALS = [
  { label: 'GitHub', handle: '@chesteralan', href: socialLinks.github, icon: 'code' },
  { label: 'LinkedIn', handle: '/in/chesteralan', href: socialLinks.linkedin, icon: 'person' },
  { label: 'Website', handle: 'alchie.cc', href: socialLinks.website, icon: 'language' },
  { label: 'Email', handle: socialLinks.email, href: `mailto:${socialLinks.email}`, icon: 'mail' },
];

function ContactSidebar({ copied, onCopy }: { copied: boolean; onCopy: () => void }) {
  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:col-span-5">
      <ScrollReveal>
        <Card>
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <PulseDot color="cyan" size="md" />
              <span className="text-sm font-bold text-slate-900">Available for Projects</span>
            </div>
            <Badge>Remote Only</Badge>
          </div>
          <p className="text-sm leading-relaxed text-slate-500">
            Accepting scoped deliverables, feature builds, and consulting engagements.
          </p>
        </Card>
      </ScrollReveal>

      <ScrollReveal>
        <Card className="space-y-5">
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-start gap-3.5">
              <IconBox icon="mail" size="sm" />
              <div>
                <FieldLabel>Direct Email</FieldLabel>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="text-sm font-bold text-slate-900 transition-colors hover:text-brand-600"
                >
                  {socialLinks.email}
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={onCopy}
              aria-label={copied ? 'Email copied' : 'Copy email'}
              className="inline-flex shrink-0 items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
            >
              <Icon name={copied ? 'check' : 'content_copy'} size={14} />
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <div className="border-b border-slate-100 pb-4">
            <ContactInfoRow icon="location_on" label="Location" value="Davao City, Philippines" />
          </div>
          <ContactInfoRow
            icon="bolt"
            label="Response Window"
            value="Typically responds within 24 hours"
          />
        </Card>
      </ScrollReveal>

      <ScrollReveal>
        <Card>
          <FieldLabel className="mb-3">Developer Presence</FieldLabel>
          <div className="grid grid-cols-2 gap-3">
            {SOCIALS.map((social) => (
              <SocialCard
                key={social.label}
                href={social.href}
                icon={social.icon}
                label={social.label}
                handle={social.handle}
              />
            ))}
          </div>
        </Card>
      </ScrollReveal>
    </aside>
  );
}

function ContactForm({
  formData,
  status,
  errorMsg,
  onChange,
  onSubmit,
}: {
  formData: { name: string; email: string; message: string; website: string };
  status: string;
  errorMsg: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <Card className="p-6 sm:p-8">
      <div className="mb-7">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Get in Touch</h2>
        <p className="mt-1 text-sm text-slate-500">
          Have a question or want to work together? Drop me a message.
        </p>
      </div>

      <div
        className="pointer-events-none absolute h-0 overflow-hidden opacity-0"
        aria-hidden="true"
      >
        <label htmlFor="website">Leave this blank</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={onChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <FormField
          id="name"
          name="name"
          label="Name"
          required
          value={formData.name}
          onChange={onChange}
          placeholder="Your name"
          errorId={status === 'error' ? 'contact-form-error' : undefined}
        />
        <FormField
          id="email"
          name="email"
          label="Email"
          type="email"
          required
          value={formData.email}
          onChange={onChange}
          placeholder="you@example.com"
          errorId={status === 'error' ? 'contact-form-error' : undefined}
        />
        <div>
          <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-slate-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onChange}
            required
            rows={4}
            className="w-full resize-y rounded-lg border border-slate-200 bg-slate-50/70 p-3.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-transparent focus:bg-white focus:ring-2 focus:ring-brand-600"
            placeholder="Your message..."
            aria-describedby={status === 'error' ? 'contact-form-error' : undefined}
          />
        </div>

        <div aria-live="polite" aria-atomic="true">
          {status === 'success' && (
            <FormAlert
              type="success"
              message="Thanks for reaching out. I'll get back to you soon!"
            />
          )}
          {status === 'error' && (
            <FormAlert id="contact-form-error" type="error" message={errorMsg} />
          )}
        </div>

        <div className="space-y-3 pt-2" role="status" aria-live="polite">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-sm transition-all hover:bg-brand-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === 'sending' ? (
              <>
                <Icon name="hourglass_top" size={16} className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Icon name="send" size={16} />
              </>
            )}
          </button>
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
            <Icon name="lock" size={14} />
            <span>Your information is kept strictly confidential and will never be shared.</span>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default function Contact() {
  const { formData, status, errorMsg, copied, handleChange, handleCopyEmail, handleSubmit } =
    useContactForm();

  return (
    <div>
      <SectionContainer padding="pt-16 pb-8">
        <ScrollReveal>
          <BadgePill size="md" className="mb-4">
            GET IN TOUCH
          </BadgePill>
        </ScrollReveal>
        <ScrollReveal>
          <PageHeading size="lg" className="mb-4">
            Let's Build Something Exceptional
          </PageHeading>
        </ScrollReveal>
        <ScrollReveal>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Currently available for freelance engineering contracts, consulting, and full-time
            senior engineering roles.
          </p>
        </ScrollReveal>
      </SectionContainer>

      <SectionContainer padding="pb-20">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <ContactSidebar copied={copied} onCopy={handleCopyEmail} />
          <div className="lg:col-span-7">
            <ScrollReveal>
              <ContactForm
                formData={formData}
                status={status}
                errorMsg={errorMsg}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </ScrollReveal>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
