import { cn } from '../lib/cn';

interface BulletListItemProps {
  children: React.ReactNode;
  variant?: 'dot' | 'checkmark';
  className?: string;
}

export default function BulletListItem({
  children,
  variant = 'dot',
  className = '',
}: BulletListItemProps) {
  if (variant === 'checkmark') {
    return (
      <li className={cn('flex items-start gap-2.5 text-xs text-slate-600', className)}>
        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-[#0891b2] text-[10px]">
          ✓
        </span>
        {children}
      </li>
    );
  }

  return (
    <li className={cn('flex items-start gap-2 text-sm text-slate-500', className)}>
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0891b2]" />
      {children}
    </li>
  );
}
