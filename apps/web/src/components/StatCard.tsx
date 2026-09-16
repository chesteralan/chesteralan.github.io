import Icon from './Icon';

interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
  layout?: 'vertical' | 'horizontal';
  className?: string;
}

export default function StatCard({
  value,
  label,
  icon,
  layout = 'vertical',
  className = '',
}: StatCardProps) {
  if (layout === 'horizontal') {
    return (
      <div className={`flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-xs ${className}`}>
        {icon && (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-[#0891b2]">
            <Icon name={icon} size={22} />
          </div>
        )}
        <div>
          <div className="text-xl font-bold tracking-tight text-slate-900">{value}</div>
          <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase">{label}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm ${className}`}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-3xl font-extrabold text-[#0891b2]">{value}</span>
        {icon && <Icon name={icon} size={26} className="text-slate-400" />}
      </div>
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</span>
    </div>
  );
}
