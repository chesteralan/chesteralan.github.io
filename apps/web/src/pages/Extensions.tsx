import ScrollReveal from '../components/ScrollReveal';
import { extensions } from '../data/portfolio';

export default function Extensions() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-glow border-b border-slate-200/60 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#0891b2] mb-3">
              <span className="bg-cyan-50 px-2.5 py-1 rounded border border-cyan-200/60">
                Chrome Extensions
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-500 font-normal">Productivity-Boosting Browser Tools</span>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                Browser Tools
              </h1>
              <p className="text-slate-600 text-base leading-relaxed">
                Productivity-boosting Chrome extensions I've built and published.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

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
