import { cn } from '../lib/cn';
import Icon from './Icon';

interface ProfileDetailProps {
  icon: string;
  label: string;
  value: string;
  description: string;
  color?: 'cyan' | 'purple';
}

const colorMap = {
  cyan: 'bg-cyan-50 text-brand-600',
  purple: 'bg-purple-50 text-purple-700',
};

export default function ProfileDetail({
  icon,
  label,
  value,
  description,
  color = 'cyan',
}: ProfileDetailProps) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={cn(
          'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
          colorMap[color]
        )}
      >
        <Icon name={icon} size={16} />
      </div>
      <div>
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{label}</div>
        <div className="font-bold text-slate-900">{value}</div>
        <div className="mt-0.5 text-xs text-slate-500">{description}</div>
      </div>
    </div>
  );
}
