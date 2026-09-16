import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import Card from '../components/Card';
import BadgePill from '../components/BadgePill';
import BulletListItem from '../components/BulletListItem';
import CardFooter from '../components/CardFooter';
import Icon from '../components/Icon';
import IconBox from '../components/IconBox';
import PageHeading from '../components/PageHeading';
import SectionContainer from '../components/SectionContainer';
import SubHeading from '../components/SubHeading';
import ProfileDetail from '../components/ProfileDetail';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import MetricStat from '../components/MetricStat';
import SkillCategoryCard from '../components/SkillCategoryCard';
import Tag from '../components/Tag';
import ToolItem from '../components/ToolItem';
import { skillCategories, experience } from '../data/portfolio';

const pillars = [
  {
    title: 'Pragmatic Architecture',
    description: 'Simple architectures that outlive hype cycles and scale without operational bloat.',
    icon: 'code',
  },
  {
    title: 'Obsessive DX & Quality',
    description: 'Strict type safety, self-documenting APIs, and end-to-end telemetry embedded by default.',
    icon: 'science',
  },
  {
    title: 'Reliability at Scale',
    description: 'Fault-tolerant distributed pipelines, predictable degradation, and graceful failovers.',
    icon: 'verified',
  },
];

const values = [
  {
    title: 'Scalability by Design',
    description:
      'Building systems ready to accommodate 10x traffic expansion without premature complexity. Clear data boundaries, decoupled queue workers, and defensive caching are standard table stakes.',
    icon: 'trending_up',
    footer: 'Measurable scalability',
    color: 'cyan' as const,
    footerColor: 'text-[#0891b2]',
  },
  {
    title: 'User-Centric Craft',
    description:
      'Speed, accessibility (a11y), and buttery micro-interactions matter just as much as backend fault tolerance. A fast, intuitive UI conveys trust and respect for end-user attention.',
    icon: 'mood',
    footer: 'Uncompromising UX',
    color: 'purple' as const,
    footerColor: 'text-purple-700',
  },
  {
    title: 'Continuous Learning',
    description:
      'Technology is never static. An active open-source contributor and technical mentor who cultivates curiosity, conducts constructive code reviews, and experiments with emerging runtimes.',
    icon: 'science',
    footer: 'Mentorship & Open Source',
    color: 'cyan' as const,
    footerColor: 'text-[#0891b2]',
  },
];

const iconColorMap: Record<string, 'cyan' | 'purple' | 'slate'> = {
  frontend: 'cyan',
  backend: 'purple',
  tools: 'slate',
  cloud: 'cyan',
};



export default function About() {
  const totalCategories = 4;

  return (
    <div>
      {/* Hero Section */}
      <SectionContainer padding="!pb-0">
        <ScrollReveal>
          <BadgePill icon="info">About Alchie Tagudin</BadgePill>
        </ScrollReveal>
        <ScrollReveal>
          <PageHeading className="mb-4 max-w-4xl leading-[1.15]">
            About Me & Engineering Philosophy
          </PageHeading>
        </ScrollReveal>
        <ScrollReveal>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            Full-stack software architect with 8+ years of experience engineering high-throughput web
            applications, developer platforms, and resilient cloud infrastructure.
          </p>
        </ScrollReveal>
      </SectionContainer>

      {/* Journey & Quick Profile */}
      <SectionContainer padding="!pt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Journey */}
          <div className="space-y-6 lg:col-span-7">
            <ScrollReveal>
              <Card padding="lg">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0891b2]">
                    <Icon name="code" size={16} />
                    The Journey
                  </div>
                  <h2 className="text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                    Crafting dependable systems through systematic craft
                  </h2>
                  <div className="space-y-4 text-[15px] leading-relaxed text-slate-600">
                    <p>
                      My foundation began in core computer science, diving deep into data structures,
                      algorithms, and the mechanics of web technologies. Over the past eight years, that
                      theoretical rigor evolved into real-world production engineering across charity
                      platforms, payroll systems, and developer tools.
                    </p>
                    <p>
                      I view software engineering not as simply gluing frameworks together, but as
                      constructing transparent, highly observable applications. Every architectural
                      choice — from state management strategies to component organization — must serve
                      measurable performance and bulletproof reliability.
                    </p>
                  </div>
                  {/* Quick Metrics */}
                  <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-4">
                    <MetricStat value="8+" label="Years Experience" />
                    <MetricStat value="15+" label="Projects Shipped" />
                    <MetricStat value="3" label="Extensions Published" />
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {pillars.map((pillar) => (
                <ScrollReveal key={pillar.title}>
                  <Card padding="compact">
                    <div className="space-y-2.5">
                      <IconBox icon={pillar.icon} color="cyan" size="sm" rounded="lg" />
                      <h3 className="text-sm font-bold text-slate-900">{pillar.title}</h3>
                      <p className="text-xs leading-relaxed text-slate-500">{pillar.description}</p>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Quick Profile */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <Card padding="lg">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                      <Icon name="person" size={16} className="text-[#0891b2]" />
                      Quick Profile
                    </div>
                    <Badge dot>Active</Badge>
                  </div>

                  {/* Avatar */}
                  <div className="relative overflow-hidden rounded-xl border border-slate-200">
                    <div className="flex h-56 items-center justify-center bg-gradient-to-br from-[#0891b2] to-cyan-400">
                      <span className="text-5xl font-bold text-white">AT</span>
                    </div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white/95 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm">
                      <Icon name="laptop_mac" size={14} className="text-[#0891b2]" />
                      Principal Craft
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4 text-sm">
                    <ProfileDetail
                      icon="location_on"
                      label="Location"
                      value="Davao City, Philippines"
                      description="Available for remote teams worldwide"
                    />
                    <ProfileDetail
                      icon="bolt"
                      label="Current Focus"
                      value="React • TypeScript • Cloud"
                      description="Building scalable web applications & developer tools"
                      color="purple"
                    />
                    <ProfileDetail
                      icon="school"
                      label="GitHub"
                      value="chesteralan"
                      description="77+ repositories & open source contributions"
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <Link to="/projects" className="btn-primary flex-1 justify-center text-xs">
                      <span>View Tech Matrix</span>
                      <Icon name="arrow_downward" size={16} />
                    </Link>
                    <Link to="/contact" className="btn-outline text-xs">
                      Career Log
                    </Link>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </SectionContainer>

      {/* Skills Matrix */}
      <SectionContainer padding="!pt-0" id="skills">
        <ScrollReveal>
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              icon="inventory_2"
              label="Capabilities & Arsenal"
              title="Technical Skills Matrix"
              subtitle="A comprehensive overview of the technologies, runtimes, and orchestration suites I utilize to deliver enterprise-grade digital systems."
            />
            <div className="inline-flex self-start rounded-lg border border-slate-200 bg-white p-1 text-xs font-medium shadow-sm md:self-auto">
              <Tag variant="active">All Domains</Tag>
              <span className="cursor-pointer px-3 py-1 text-slate-600 hover:text-slate-900">
                {totalCategories} Categories
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Top Row: 3 columns */}
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

        {/* Bottom Row: 2 cards in 5/7 layout */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Card 4 */}
          <ScrollReveal className="lg:col-span-5">
            <SkillCategoryCard
              icon={skillCategories[3]?.icon || 'cloud'}
              color="cyan"
              badge={skillCategories[3]?.badge || 'Infrastructure'}
              title={skillCategories[3]?.title || 'Cloud & Deployment'}
              description={skillCategories[3]?.description || 'Cloud platform deployment and hosting.'}
              skills={skillCategories[3]?.skills || []}
              footerLabel="Deployment Platforms"
              footerValue="3 Providers"
            />
          </ScrollReveal>

          {/* Card 5: Tools & DevOps (wider) */}
          <ScrollReveal className="lg:col-span-7">
            <Card className="flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <IconBox icon="build" color="slate" size="md" rounded="xl" />
                    <div>
                      <SubHeading>Tools & DevOps</SubHeading>
                      <div className="text-[11px] text-slate-500">
                        Developer tooling, version control, and deployment automation
                      </div>
                    </div>
                  </div>
                  <Tag variant="purple">Tooling</Tag>
                </div>
                <p className="text-xs leading-relaxed text-slate-600 pt-1">
                  I prioritize efficient development workflows through automated tooling, version control
                  best practices, and streamlined build pipelines rather than manual processes alone.
                </p>
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
                    ),
                  )}
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </SectionContainer>

      {/* Career Timeline */}
      <SectionContainer padding="!pt-0" id="experience">
        <ScrollReveal>
          <div className="mb-8">
            <SectionHeader
              icon="trending_up"
              label="Proven Execution"
              title="Career Timeline & Experience"
              subtitle="Impact-focused track record building web applications and developer tools with modern technologies."
            />
          </div>
        </ScrollReveal>

        <div className="relative space-y-8 pl-6 before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200 sm:pl-8 sm:before:left-[15px]">
          {experience.map((exp) => (
            <ScrollReveal key={exp.id}>
              <div className="relative">
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[30px] top-6 h-4 w-4 rounded-full border-4 border-white ring-4 ring-slate-100 sm:-left-[39px] ${exp.dotColor}`}
                />
                {/* Card */}
                <Card padding="lg" className="space-y-4">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                      <div className="text-sm font-semibold text-[#0891b2]">
                        {exp.company}
                      </div>
                    </div>
                    <span className="self-start rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 sm:self-auto">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{exp.description}</p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <BulletListItem key={i}>
                        {h}
                      </BulletListItem>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tags.map((tag) => (
                      <Tag key={tag} variant="default">{tag}</Tag>
                    ))}
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Engineering Values */}
      <SectionContainer padding="!pt-0">
        <ScrollReveal>
          <div className="mb-8 text-center">
            <SectionHeader
              icon="tune"
              label="Guiding Convictions"
              title="Engineering Values & Principles"
              subtitle="The non-negotiable mental models and behavioral baselines I bring to high-performing product engineering teams."
              centered
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((value) => (
            <ScrollReveal key={value.title}>
              <Card className="flex flex-col justify-between">
                <div className="space-y-3">
                  <IconBox icon={value.icon} color={value.color} size="md" rounded="xl" />
                  <SubHeading>{value.title}</SubHeading>
                  <p className="text-xs leading-relaxed text-slate-600">{value.description}</p>
                </div>
                <CardFooter
                  left={
                    <>
                      <Icon name="check_circle" size={16} />
                      {value.footer}
                    </>
                  }
                  className={value.footerColor}
                />
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* CTA Banner */}
      <SectionContainer padding="!pt-0 !pb-20">
        <ScrollReveal>
          <div className="overflow-hidden rounded-3xl border border-cyan-100/80 bg-gradient-to-r from-cyan-50/70 via-cyan-50/50 to-purple-50/50 p-8 shadow-sm sm:p-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl space-y-3">
                <Badge icon="description">Documented Background</Badge>
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                  Interested in working together or hiring?
                </h2>
                <p className="text-sm text-slate-600 sm:text-base">
                  Grab a detailed PDF copy of my technical track record or start a direct conversation
                  regarding contract or full-time opportunities.
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
