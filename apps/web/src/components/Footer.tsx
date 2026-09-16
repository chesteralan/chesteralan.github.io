import { Link } from 'react-router-dom';
import { socialLinks } from '../data/portfolio';
import Tag from './Tag';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm sm:flex-row">
        {/* Brand */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <span className="font-bold text-slate-900">Alchie Tagudin</span>
            <Tag variant="default">Frontend Developer</Tag>
          </div>
          <p className="max-w-sm text-xs text-slate-500">
            Crafting clean, accessible, and high-performance digital experiences across the web.
          </p>
        </div>

        {/* Links & Socials */}
        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-6 text-xs font-semibold text-slate-600">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <Link to="/projects" className="hover:text-slate-900 transition-colors">Projects</Link>
            <Link to="/about" className="hover:text-slate-900 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center gap-3 border-l border-slate-200 pl-6 text-slate-400">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-50 p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              aria-label="GitHub"
            >
              <Icon name="code" size={20} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-50 p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              aria-label="LinkedIn"
            >
              <Icon name="work" size={20} />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="rounded-lg bg-slate-50 p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              aria-label="Email"
            >
              <Icon name="mail" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
