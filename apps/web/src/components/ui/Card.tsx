import { cn } from '@/lib/cn';

interface CardProps {
  children: React.ReactNode;
  hoverable?: boolean;
  padding?: 'none' | 'compact' | 'default' | 'lg';
  className?: string;
}

const paddingMap = {
  none: '',
  compact: 'p-4',
  default: 'p-6',
  lg: 'p-8',
};

export default function Card({
  children,
  hoverable = false,
  padding = 'default',
  className = '',
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200/90 bg-white shadow-sm',
        hoverable && 'transition-shadow hover:shadow-md',
        paddingMap[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
