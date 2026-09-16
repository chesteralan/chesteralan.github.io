import { Link } from 'react-router-dom';
import { cn } from '../lib/cn';
import Icon from './Icon';

interface CyanActionLinkProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  icon?: string;
  iconSize?: number;
  className?: string;
}

export default function CyanActionLink({
  to,
  href,
  children,
  icon,
  iconSize = 14,
  className = '',
}: CyanActionLinkProps) {
  const classes = cn('inline-flex items-center gap-1.5 text-xs font-semibold text-[#0891b2] hover:text-[#0e7490] transition-colors', className);

  const content = (
    <>
      {children}
      {icon && <Icon name={icon} size={iconSize} />}
    </>
  );

  if (to) {
    return <Link to={to} className={classes}>{content}</Link>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {content}
    </a>
  );
}
