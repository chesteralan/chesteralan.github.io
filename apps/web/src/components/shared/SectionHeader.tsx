import { cn } from '@/lib/cn';
import Icon from '@/components/ui/Icon';

interface SectionHeaderProps {
  icon?: string;
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  icon,
  label,
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      <div
        className={cn('section-label mb-2 flex items-center gap-1.5', centered && 'justify-center')}
      >
        {icon && <Icon name={icon} size={14} />}
        {label}
      </div>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className={cn('section-subtitle mt-2', centered && 'mx-auto')}>{subtitle}</p>}
    </div>
  );
}
