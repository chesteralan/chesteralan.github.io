import { cn } from '../lib/cn';
import Icon from './Icon';

interface CTASectionProps {
  variant?: 'dark' | 'light';
  badge?: { icon?: string; text: string };
  heading: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

export default function CTASection({
  variant = 'dark',
  badge,
  heading,
  description,
  children,
  className = '',
}: CTASectionProps) {
  const bg =
    variant === 'dark'
      ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950'
      : 'bg-gradient-to-r from-cyan-50/70 via-cyan-50/50 to-purple-50/50';

  return (
    <section className={cn('mx-auto max-w-7xl px-6 py-20', className)}>
      <div className={cn('relative overflow-hidden rounded-2xl', bg, 'p-8 shadow-lg lg:p-12')}>
        <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl space-y-3">
            {badge && (
              <div
                className={cn(
                  'inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider',
                  variant === 'dark' ? 'text-cyan-400' : 'text-brand-600'
                )}
              >
                {badge.icon && <Icon name={badge.icon} size={20} />}
                <span>{badge.text}</span>
              </div>
            )}
            <h2
              className={cn(
                'text-2xl font-bold tracking-tight lg:text-3xl',
                variant === 'dark' ? 'text-white' : 'text-slate-900'
              )}
            >
              {heading}
            </h2>
            <p
              className={cn(
                'text-base leading-relaxed',
                variant === 'dark' ? 'text-slate-300' : 'text-slate-600'
              )}
            >
              {description}
            </p>
          </div>
          <div className="flex-shrink-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
