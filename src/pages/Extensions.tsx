import { ExternalLink, Globe } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { extensions } from '../data/portfolio';

export default function Extensions() {
  return (
    <div>
      <section>
        <div className="section-container">
          <ScrollReveal>
            <p className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-4">
              Chrome Extensions
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Browser Tools
            </h1>
            <p className="section-subtitle mb-12">
              Productivity-boosting Chrome extensions I've built and published.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {extensions.map((ext) => (
              <ScrollReveal key={ext.id}>
                <a
                  href={ext.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover group block"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {ext.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {ext.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ext.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-600 dark:text-primary-400">
                    <ExternalLink className="w-4 h-4" />
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
