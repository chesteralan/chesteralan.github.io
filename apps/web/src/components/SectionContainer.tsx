import { cn } from '../lib/cn';

interface SectionContainerProps {
  children: React.ReactNode;
  padding?: string;
  className?: string;
  id?: string;
}

export default function SectionContainer({
  children,
  padding = 'py-20',
  className = '',
  id,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn('max-w-7xl mx-auto px-6', padding, className)}>
      {children}
    </section>
  );
}
