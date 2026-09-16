import IconBox from './IconBox';

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
        <span className="block text-[11px] uppercase tracking-wider font-semibold text-slate-400">
          {label}
        </span>
        <p className="text-sm font-bold text-slate-900 leading-snug">{value}</p>
      </div>
    </div>
  );
}
