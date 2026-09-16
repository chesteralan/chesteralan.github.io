import { cn } from '../lib/cn';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'purple' | 'active' | 'outline' | 'overlay';
  className?: string;
}

const variantStyles = {
  default: 'border border-slate-200 bg-slate-100 text-slate-700',
  purple: 'border border-purple-100 bg-purple-50 text-purple-700',
  active: 'bg-[#0891b2] text-white shadow-xs',
  outline: 'border border-slate-200 bg-white text-slate-600',
  overlay: 'bg-white/10 text-white/80 backdrop-blur',
};

export default function Tag({ children, variant = 'default', className = '' }: TagProps) {
  return (
    <span
      className={cn('inline-block rounded-md px-2.5 py-1 text-xs font-medium', variantStyles[variant], className)}
    >
      {children}
    </span>
  );
}
