import Card from '@/components/ui/Card';
import BulletListItem from '@/components/ui/BulletListItem';
import Tag from '@/components/ui/Tag';
import SectionContainer from '@/components/layout/SectionContainer';
import ScrollReveal from '@/components/layout/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';
import { experience } from '@/data/portfolio';

export default function AboutTimeline() {
  return (
    <SectionContainer padding="!pt-12" id="experience">
      <ScrollReveal>
        <div className="mb-8">
          <SectionHeader icon="trending_up" label="Proven Execution" title="Career Timeline" />
        </div>
      </ScrollReveal>

      <div className="relative space-y-8 pl-6 before:absolute before:bottom-3 before:left-[11px] before:top-3 before:w-0.5 before:bg-slate-200 sm:pl-8 sm:before:left-[15px]">
        {experience.map((exp) => (
          <ScrollReveal key={exp.id}>
            <div className="relative">
              {/* Timeline dot */}
              <div
                className={`absolute -left-[20px] top-3 h-4 w-4 rounded-full border-4 border-white ring-4 ring-slate-100 sm:-left-[25px] sm:top-0 ${exp.dotColor}`}
              />
              {/* Card */}
              <Card padding="lg" className="space-y-4">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                    <div className="text-sm font-semibold text-brand-600">{exp.company}</div>
                  </div>
                  <span className="self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 sm:self-auto">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{exp.description}</p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <BulletListItem key={i}>{h}</BulletListItem>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tags.map((tag) => (
                    <Tag key={tag} variant="default">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </Card>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  );
}
