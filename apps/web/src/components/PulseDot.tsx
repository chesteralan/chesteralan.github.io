import { cn } from '../lib/cn';

interface PulseDotProps {
  color?: 'emerald' | 'cyan';
  size?: 'sm' | 'md';
  className?: string;
}

export default function PulseDot({ color = 'emerald', size = 'sm', className = '' }: PulseDotProps) {
  const sizeClasses = size === 'md' ? 'h-2.5 w-2.5' : 'h-2 w-2';
  const colorClasses = color === 'cyan' ? 'bg-[#0891b2]' : 'bg-emerald-500';

  return (
    <span className={cn('rounded-full animate-pulse', sizeClasses, colorClasses, className)} />
  );
}
