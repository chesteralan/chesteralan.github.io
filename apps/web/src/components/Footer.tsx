import { Link } from 'react-router-dom';
import { socialLinks } from '../data/portfolio';
import Tag from './Tag';
import SocialIcon from './SocialIcon';

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
            Building clean, accessible, and high-performance digital experiences with AI-assisted
            development.
          </p>
        </div>

        {/* Links & Socials */}
        <div className="flex min-w-0 flex-wrap items-center gap-6 sm:gap-8">
          <nav className="mx-auto flex items-center gap-6 text-xs font-semibold text-slate-600">
            <Link to="/" className="transition-colors hover:text-slate-900">
              Home
            </Link>
            <Link to="/projects" className="transition-colors hover:text-slate-900">
              Projects
            </Link>
            <Link to="/about" className="transition-colors hover:text-slate-900">
              About
            </Link>
            <Link to="/contact" className="transition-colors hover:text-slate-900">
              Contact
            </Link>
          </nav>
          <div className="mx-auto flex items-center gap-3 border-slate-200 text-slate-500 md:border-l md:pl-6">
            <SocialIcon href={socialLinks.github} icon="code" label="GitHub" />
            <SocialIcon href={socialLinks.linkedin} icon="work" label="LinkedIn" />
            <SocialIcon
              href={`mailto:${socialLinks.email}`}
              icon="mail"
              label="Email"
              external={false}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
