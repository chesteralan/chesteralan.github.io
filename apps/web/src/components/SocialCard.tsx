import IconBox from './IconBox';

interface SocialCardProps {
  href: string;
  icon: string;
  label: string;
  handle: string;
}

export default function SocialCard({ href, icon, label, handle }: SocialCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100"
    >
      <IconBox icon={icon} size="xs" color="cyan" rounded="lg" />
      <div className="overflow-hidden">
        <span className="block text-xs font-bold text-slate-900 truncate">{label}</span>
        <span className="block text-[11px] text-slate-500 truncate">{handle}</span>
      </div>
    </a>
  );
}
