import IconBox from '@/components/ui/IconBox';

interface ContactInfoRowProps {
  icon: string;
  label: string;
  value: string;
}

export default function ContactInfoRow({ icon, label, value }: ContactInfoRowProps) {
  return (
    <div className="flex items-start gap-3.5">
      <IconBox icon={icon} size="sm" />
      <div>
        <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </span>
        <p className="text-sm font-bold leading-snug text-slate-900">{value}</p>
      </div>
    </div>
  );
}
