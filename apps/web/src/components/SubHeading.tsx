import { cn } from '../lib/cn';

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SubHeading({ children, className = '' }: SubHeadingProps) {
  return (
    <h3 className={cn('text-lg font-bold text-slate-900', className)}>{children}</h3>
  );
}
