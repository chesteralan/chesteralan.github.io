import { cn } from '../lib/cn';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  filled?: boolean;
}

export default function Icon({ name, size = 24, className = '', filled = false }: IconProps) {
  return (
    <span
      className={cn('material-symbols-outlined', className)}
      style={{
        fontSize: size,
        fontVariationSettings: filled ? "'FILL' 1" : undefined,
      }}
    >
      {name}
    </span>
  );
}
