import ScrollReveal from './ScrollReveal';

interface PageHeroProps {
  badge: string;
  separator?: string;
  subtitle: string;
  heading: string;
  description: string;
}

export default function PageHero({
  badge,
  separator = '·',
  subtitle,
  heading,
  description,
}: PageHeroProps) {
  return (
    <section className="hero-glow border-b border-slate-200/60 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#0891b2] mb-3">
            <span className="bg-cyan-50 px-2.5 py-1 rounded border border-cyan-200/60">
              {badge}
            </span>
            <span className="text-slate-400">{separator}</span>
            <span className="text-slate-500 font-normal">{subtitle}</span>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              {heading}
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              {description}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
