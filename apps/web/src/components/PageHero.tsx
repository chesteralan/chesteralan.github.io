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
    <section className="hero-glow border-b border-slate-200/60 pb-8 pt-12">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-3 flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
            <span className="rounded border border-cyan-200/60 bg-cyan-50 px-2.5 py-1">
              {badge}
            </span>
            <span className="text-slate-500">{separator}</span>
            <span className="font-normal text-slate-500">{subtitle}</span>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="max-w-3xl">
            <h1 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
              {heading}
            </h1>
            <p className="text-base leading-relaxed text-slate-600">{description}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
