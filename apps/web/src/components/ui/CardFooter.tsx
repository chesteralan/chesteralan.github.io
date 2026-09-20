import { cn } from '@/lib/cn';

interface CardFooterProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  align?: 'between' | 'left';
  className?: string;
}

export default function CardFooter({
  left,
  right,
  align = 'between',
  className = '',
}: CardFooterProps) {
  return (
    <div
      className={cn(
        'flex items-center border-t border-slate-100 pt-4 text-xs',
        align === 'between' ? 'justify-between' : 'gap-1.5',
        className
      )}
    >
      {left && <span className="text-slate-500">{left}</span>}
      {right && <span className="font-bold text-brand-600">{right}</span>}
    </div>
  );
}
