import { cn } from '../lib/cn';

interface FieldLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function FieldLabel({ children, className = '' }: FieldLabelProps) {
  return (
    <span
      className={cn('block text-[11px] font-semibold uppercase tracking-wider text-slate-400', className)}
    >
      {children}
    </span>
  );
}
