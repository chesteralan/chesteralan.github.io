import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import ContactInfoRow from '@/components/form/ContactInfoRow';
import FieldLabel from '@/components/form/FieldLabel';
import Icon from '@/components/ui/Icon';
import IconBox from '@/components/ui/IconBox';
import PulseDot from '@/components/ui/PulseDot';
import ScrollReveal from '@/components/layout/ScrollReveal';
import SocialCard from '@/components/shared/SocialCard';
import { socialLinks } from '@/data/portfolio';

const SOCIALS = [
  { label: 'GitHub', handle: '@chesteralan', href: socialLinks.github, icon: 'code' },
  { label: 'LinkedIn', handle: '/in/chesteralan', href: socialLinks.linkedin, icon: 'person' },
  { label: 'Website', handle: 'alchie.cc', href: socialLinks.website, icon: 'language' },
  { label: 'Email', handle: socialLinks.email, href: `mailto:${socialLinks.email}`, icon: 'mail' },
];

export default function ContactSidebar({
  copied,
  onCopy,
}: {
  copied: boolean;
  onCopy: () => void;
}) {
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
