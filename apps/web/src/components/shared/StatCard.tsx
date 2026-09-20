import { memo } from 'react';
import { cn } from '@/lib/cn';
import Icon from '@/components/ui/Icon';

interface StatCardProps {
  value: string;
  label: string;
  icon?: string;
  layout?: 'vertical' | 'horizontal';
  className?: string;
}

export default memo(function StatCard({
  value,
  label,
  icon,
  layout = 'vertical',
  className = '',
}: StatCardProps) {
  if (layout === 'horizontal') {
    return (
      <div
        className={cn(
          'shadow-xs flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4',
          className
        )}
      >
        {icon && (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-brand-600">
            <Icon name={icon} size={22} />
          </div>
        )}
        <div>
          <div className="text-xl font-bold tracking-tight text-slate-900">{value}</div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {label}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm', className)}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-3xl font-extrabold text-brand-600">{value}</span>
        {icon && <Icon name={icon} size={26} className="text-slate-500" />}
      </div>
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</span>
    </div>
  );
});
