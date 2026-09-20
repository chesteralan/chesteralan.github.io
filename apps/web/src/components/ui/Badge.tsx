import { cn } from '@/lib/cn';
import Icon from './Icon';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'active';
  dot?: boolean;
  icon?: string;
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  dot = false,
  icon,
  className = '',
}: BadgeProps) {
  const base =
    variant === 'active'
      ? 'border border-purple-200 bg-purple-50 text-purple-700'
      : 'border border-cyan-200/60 bg-cyan-50 text-brand-600';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
        base,
        className
      )}
    >
      {dot && <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />}
      {icon && <Icon name={icon} size={14} />}
      {children}
    </span>
  );
}
