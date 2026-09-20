import { cn } from '@/lib/cn';

interface PageHeadingProps {
  children: React.ReactNode;
  size?: 'lg' | 'md';
  className?: string;
}

export default function PageHeading({ children, size = 'lg', className = '' }: PageHeadingProps) {
  const sizeClasses =
    size === 'lg' ? 'text-4xl sm:text-5xl leading-tight' : 'text-3xl sm:text-4xl leading-tight';

  return (
    <h1 className={cn('font-extrabold tracking-tight text-slate-900', sizeClasses, className)}>
      {children}
    </h1>
  );
}
