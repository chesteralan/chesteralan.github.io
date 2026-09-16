import { cn } from '../lib/cn';

interface ToggleButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function ToggleButton({
  active,
  onClick,
  children,
  className = '',
}: ToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-xl text-xs font-semibold transition-colors',
        active
          ? 'bg-[#0891b2] text-white shadow-sm'
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200',
        className
      )}
    >
      {children}
    </button>
  );
}
