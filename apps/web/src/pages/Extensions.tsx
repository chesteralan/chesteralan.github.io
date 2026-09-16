import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import { extensions } from '../data/portfolio';

export default function Extensions() {
  return (
    <div>
      <PageHero
        badge="Chrome Extensions"
        subtitle="Productivity-Boosting Browser Tools"
        heading="Browser Tools"
        description="Productivity-boosting Chrome extensions I've built and published."
      />

      {/* Extensions Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extensions.map((ext) => (
              <ScrollReveal key={ext.id}>
                <a
                  href={ext.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-cyan-200 transition-all group"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-50 border border-cyan-100 text-[#0891b2]">
                    <span className="material-symbols-outlined text-[20px]">extension</span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900 tracking-tight group-hover:text-[#0891b2] transition-colors">
                    {ext.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">{ext.description}</p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {ext.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-600 border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0891b2] group-hover:text-[#0e7490] transition-colors">
                    View in Chrome Web Store
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
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
