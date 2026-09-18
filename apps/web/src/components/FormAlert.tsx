import { cn } from '../lib/cn';
import Icon from './Icon';

interface FormAlertProps {
  id?: string;
  type: 'success' | 'error';
  message: string;
}

const styles = {
  success: {
    border: 'border-emerald-200',
    bg: 'bg-emerald-50',
    icon: 'check_circle',
    iconColor: 'text-emerald-500',
    titleColor: 'text-emerald-800',
    textColor: 'text-emerald-600',
  },
  error: {
    border: 'border-red-200',
    bg: 'bg-red-50',
    icon: 'error',
    iconColor: 'text-red-500',
    titleColor: 'text-red-800',
    textColor: 'text-red-600',
  },
};

export default function FormAlert({ id, type, message }: FormAlertProps) {
  const s = styles[type];
  return (
    <div id={id} className={cn('flex items-start gap-3 rounded-xl border', s.border, s.bg, 'p-4')}>
      <Icon name={s.icon} size={20} className={cn('mt-0.5 shrink-0', s.iconColor)} />
      <div>
        <p className={cn('text-sm font-medium', s.titleColor)}>
          {type === 'success' ? 'Message sent!' : 'Error'}
        </p>
        <p className={cn('text-sm', s.textColor)}>{message}</p>
      </div>
    </div>
  );
}
