import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/cn';
import { stripBase } from '../lib/config';
import Icon from './Icon';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string): boolean => {
    const p = stripBase(location.pathname);
    return path === '/' ? p === '/' : p.startsWith(path);
  };

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-slate-200 bg-white/90 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo & Availability */}
        <div className="flex items-center gap-3">
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-lg font-bold text-white shadow-sm">
              A
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">Alchie Tagudin</span>
          </Link>
          <div className="hidden items-center gap-1.5 rounded-full border border-cyan-200/80 bg-cyan-50 px-3 py-1 sm:inline-flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-cyan-800">Available for Projects</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 rounded-xl bg-slate-100/80 p-1.5 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'rounded-lg px-4 py-1.5 transition-colors',
                isActive(link.path)
                  ? 'bg-white font-semibold text-slate-900 shadow-sm'
                  : 'hover:bg-white/60 hover:text-slate-900'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Avatar */}
        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-primary hidden sm:inline-flex">
            Get in Touch
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            <Icon name={isOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 md:hidden',
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="border-t border-slate-100 bg-white px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={cn(
                'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                isActive(link.path)
                  ? 'bg-cyan-50 text-brand-600'
                  : 'text-slate-600 hover:bg-slate-50'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="btn-primary mt-2 w-full justify-center"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
