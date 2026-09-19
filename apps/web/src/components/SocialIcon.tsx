import Icon from './Icon';

interface SocialIconProps {
  href: string;
  icon: string;
  label: string;
  external?: boolean;
}

export default function SocialIcon({ href, icon, label, external = true }: SocialIconProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="rounded-lg bg-slate-50 p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
      aria-label={label}
    >
      <Icon name={icon} size={20} />
    </a>
  );
}
