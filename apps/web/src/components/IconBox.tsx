import { cn } from '../lib/cn';
import Icon from './Icon';

interface IconBoxProps {
  icon: string;
  color?: 'cyan' | 'purple' | 'slate' | 'green' | 'amber';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  rounded?: 'lg' | 'xl';
  className?: string;
}

const colorMap = {
  cyan: 'bg-cyan-50 text-brand-600',
  purple: 'bg-purple-50 text-purple-700',
  slate: 'bg-slate-100 text-slate-700',
  green: 'bg-green-50 text-green-700',
  amber: 'bg-amber-50 text-amber-700',
};

const sizeMap = {
  xs: 'h-7 w-7',
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-11 w-11',
};

export default function IconBox({
  icon,
  color = 'cyan',
  size = 'md',
  rounded = 'xl',
  className = '',
}: IconBoxProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        sizeMap[size],
        'shrink-0',
        `rounded-${rounded}`,
        colorMap[color],
        className
      )}
    >
      <Icon name={icon} size={size === 'xs' ? 16 : size === 'sm' ? 18 : size === 'lg' ? 24 : 22} />
    </div>
  );
}
