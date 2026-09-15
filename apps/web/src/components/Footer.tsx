import { Code2, UserRound, Mail, Heart } from 'lucide-react';
import { socialLinks } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-lg font-bold text-gray-900">
              <span className="gradient-text">Alchie Tagudin</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Frontend developer crafting meaningful digital experiences from Davao City, Philippines.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">Navigate</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Projects', href: '/projects' },
                { label: 'Extensions', href: '/extensions' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-500 transition-colors hover:text-primary-500">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">Connect</h4>
            <div className="flex items-center gap-3">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                className="rounded-xl bg-gray-100 p-2.5 text-gray-600 transition-all hover:bg-gray-200 hover:text-primary-500"
                aria-label="GitHub">
                <Code2 className="h-5 w-5" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                className="rounded-xl bg-gray-100 p-2.5 text-gray-600 transition-all hover:bg-gray-200 hover:text-primary-500"
                aria-label="LinkedIn">
                <UserRound className="h-5 w-5" />
              </a>
              <a href={`mailto:${socialLinks.email}`}
                className="rounded-xl bg-gray-100 p-2.5 text-gray-600 transition-all hover:bg-gray-200 hover:text-primary-500"
                aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row">
          <p className="text-sm text-gray-400">&copy; {currentYear} Alchie Tagudin. All rights reserved.</p>
          <p className="flex items-center gap-1 text-xs text-gray-400">
            Built with <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
