import { cn } from '../lib/cn';
import Icon from './Icon';

interface BadgePillProps {
  icon?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md';
  variant?: 'cyan' | 'white';
  className?: string;
}

export default function BadgePill({
  icon,
  children,
  size = 'sm',
  variant = 'cyan',
  className = '',
}: BadgePillProps): JSX.Element {
  const sizeClasses = size === 'md' ? 'px-4 py-1.5 text-sm' : 'px-3 py-1 text-xs';
  const variantClasses =
    variant === 'white'
      ? 'border border-slate-100 bg-white text-slate-700'
      : 'border border-cyan-200 bg-cyan-50 text-brand-600';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-semibold uppercase tracking-wider',
        sizeClasses,
        variantClasses,
        className
      )}
    >
      {icon && <Icon name={icon} size={size === 'md' ? 18 : 14} />}
      {children}
    </span>
  );
}
