import { ExternalLink, Globe } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { extensions } from '../data/portfolio';

export default function Extensions() {
  return (
    <div>
      <section>
        <div className="section-container">
          <ScrollReveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-600 dark:text-primary-400">
              Chrome Extensions
            </p>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Browser Tools
            </h1>
            <p className="section-subtitle mb-12">
              Productivity-boosting Chrome extensions I've built and published.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {extensions.map((ext) => (
              <ScrollReveal key={ext.id}>
                <a
                  href={ext.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover group block"
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30">
                    <Globe className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                    {ext.title}
                  </h3>

                  {/* Desc */}
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {ext.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {ext.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-600 dark:text-primary-400">
                    <ExternalLink className="h-4 w-4" />
                    View in Chrome Web Store
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
