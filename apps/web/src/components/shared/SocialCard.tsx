import IconBox from '@/components/ui/IconBox';

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
      className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-2.5 transition-colors hover:bg-slate-100"
    >
      <IconBox icon={icon} size="xs" color="cyan" rounded="lg" />
      <div className="overflow-hidden">
        <span className="block truncate text-xs font-bold text-slate-900">{label}</span>
        <span className="block truncate text-[11px] text-slate-500">{handle}</span>
      </div>
    </a>
  );
}
