import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import Card from '../components/Card';
import BadgePill from '../components/BadgePill';
import BulletListItem from '../components/BulletListItem';
import Icon from '../components/Icon';
import IconBox from '../components/IconBox';
import PageHeading from '../components/PageHeading';
import SectionContainer from '../components/SectionContainer';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import SkillCategoryCard from '../components/SkillCategoryCard';
import Tag from '../components/Tag';
import ToolItem from '../components/ToolItem';
import { skillCategories, experience } from '../data/portfolio';

const iconColorMap: Record<string, 'cyan' | 'purple' | 'slate'> = {
  frontend: 'cyan',
  backend: 'purple',
  cloud: 'cyan',
};

export default function About() {
  const totalCategories = skillCategories.length;

  return (
    <div>
      {/* Hero Section */}
      <SectionContainer padding="pt-10 md:pt-15 pb-0">
        <ScrollReveal>
          <BadgePill icon="info" className="mb-4">
            About Alchie Tagudin
          </BadgePill>
        </ScrollReveal>
        <ScrollReveal>
          <PageHeading className="mb-4 max-w-4xl leading-[1.15]">
            About Me & Engineering Philosophy
          </PageHeading>
        </ScrollReveal>
        <ScrollReveal>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            Frontend developer leveraging AI-assisted development to ship production applications,
            developer platforms, and resilient cloud infrastructure — faster iteration, sharper
            code, better outcomes.
          </p>
        </ScrollReveal>
      </SectionContainer>

      {/* Skills Matrix */}
      <SectionContainer padding="!pt-12" id="skills">
        <ScrollReveal>
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader icon="inventory_2" label="Capabilities" title="Technical Skills" />
            <div className="inline-flex self-start rounded-lg border border-slate-200 bg-white p-1 text-xs font-medium shadow-sm md:self-auto">
              <Tag variant="active">All Domains</Tag>
              <span className="px-3 py-1 text-slate-600">{totalCategories} Categories</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.slice(0, 3).map((cat) => (
            <ScrollReveal key={cat.id}>
              <SkillCategoryCard
                icon={cat.icon}
                color={iconColorMap[cat.id] || 'cyan'}
                badge={cat.badge}
                title={cat.title}
                description={cat.description}
                skills={cat.skills}
                footerLabel={cat.footerLabel}
                footerValue={cat.footerValue}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Tools & DevOps */}
        <div className="mt-6">
          <ScrollReveal>
            <Card className="flex h-full flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <IconBox icon="build" color="slate" size="md" rounded="xl" />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Tools & DevOps</h3>
                      <div className="text-[11px] text-slate-500">
                        Developer tooling, version control, and deployment automation
                      </div>
                    </div>
                  </div>
                  <Tag variant="purple">Tooling</Tag>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
                  <ToolItem title="Git & GitHub" subtitle="Version Control" />
                  <ToolItem title="VS Code" subtitle="Primary IDE" />
                  <ToolItem title="Chrome Extensions" subtitle="Browser Tooling" />
                  <ToolItem title="CLI Tools" subtitle="Terminal Power" />
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['ESLint & Prettier Configs', 'Postman / Insomnia', 'Sentry Error Tracking'].map(
                    (item) => (
                      <Tag key={item} variant="default">
                        {item}
                      </Tag>
                    )
                  )}
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </SectionContainer>

      {/* Career Timeline */}
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

      {/* CTA Banner */}
      <SectionContainer padding="!pt-12 !pb-20">
        <ScrollReveal>
          <div className="overflow-hidden rounded-3xl border border-cyan-100/80 bg-gradient-to-r from-cyan-50/70 via-cyan-50/50 to-purple-50/50 p-8 shadow-sm sm:p-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl space-y-3">
                <Badge icon="description">My Background</Badge>
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                  Want to learn more about my experience?
                </h2>
                <p className="text-sm text-slate-600 sm:text-base">
                  Take a look at my detailed resume and technical background, or reach out to
                  discuss a project, contract, or full-time opportunity.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a
                  href="https://cdn.alchie.cc/resume/Alchie%20Tagudin%20Resume%209.2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shadow-sm"
                >
                  <Icon name="download" size={18} />
                  <span>Download Resume (PDF)</span>
                </a>
                <Link to="/contact" className="btn-outline">
                  <span>Get in Touch</span>
                  <Icon name="arrow_forward" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </SectionContainer>
    </div>
  );
}
