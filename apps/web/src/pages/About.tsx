import { Link } from 'react-router-dom';
import ProfileDetail from '../components/ProfileDetail';
import ScrollReveal from '../components/ScrollReveal';
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
    color: 'bg-cyan-100 text-cyan-800',
    footerColor: 'text-[#0891b2]',
  },
  {
    title: 'User-Centric Craft',
    description:
      'Speed, accessibility (a11y), and buttery micro-interactions matter just as much as backend fault tolerance. A fast, intuitive UI conveys trust and respect for end-user attention.',
    icon: 'mood',
    footer: 'Uncompromising UX',
    color: 'bg-purple-100 text-purple-800',
    footerColor: 'text-purple-700',
  },
  {
    title: 'Continuous Learning',
    description:
      'Technology is never static. An active open-source contributor and technical mentor who cultivates curiosity, conducts constructive code reviews, and experiments with emerging runtimes.',
    icon: 'science',
    footer: 'Mentorship & Open Source',
    color: 'bg-cyan-100 text-cyan-800',
    footerColor: 'text-[#0891b2]',
  },
];

const iconColorMap: Record<string, string> = {
  frontend: 'bg-cyan-50 text-cyan-700',
  backend: 'bg-purple-50 text-purple-700',
  tools: 'bg-slate-100 text-slate-700',
  cloud: 'bg-cyan-50 text-cyan-700',
};

const badgeColorMap: Record<string, string> = {
  'Core Mastery': 'bg-purple-50 text-purple-700 border-purple-100',
  Distributed: 'bg-slate-100 text-slate-700 border-slate-200',
  Tooling: 'bg-slate-100 text-slate-700 border-slate-200',
  Infrastructure: 'bg-cyan-50 text-cyan-700 border-cyan-100',
};

export default function About() {
  const totalCategories = 4;

  return (
    <div>
      {/* Hero Section */}
      <section className="section-container !pb-0">
        <ScrollReveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0891b2]">
            <span className="material-symbols-outlined text-[16px]">info</span>
            About Alchie Tagudin
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className="mb-4 max-w-4xl text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl">
            About Me & Engineering Philosophy
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            Full-stack software architect with 8+ years of experience engineering high-throughput web
            applications, developer platforms, and resilient cloud infrastructure.
          </p>
        </ScrollReveal>
      </section>

      {/* Journey & Quick Profile */}
      <section className="section-container !pt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Journey */}
          <div className="space-y-6 lg:col-span-7">
            <ScrollReveal>
              <div className="card !p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0891b2]">
                    <span className="material-symbols-outlined text-[16px]">code</span>
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
                    <div>
                      <div className="text-2xl font-extrabold text-[#0891b2] sm:text-3xl">8+</div>
                      <div className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Years Experience
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-[#0891b2] sm:text-3xl">15+</div>
                      <div className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Projects Shipped
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-[#0891b2] sm:text-3xl">3</div>
                      <div className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Extensions Published
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {pillars.map((pillar) => (
                <ScrollReveal key={pillar.title}>
                  <div className="card !p-5">
                    <div className="space-y-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 text-[#0891b2]">
                        <span className="material-symbols-outlined text-[18px]">{pillar.icon}</span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">{pillar.title}</h3>
                      <p className="text-xs leading-relaxed text-slate-500">{pillar.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column: Quick Profile */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="card !p-7">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                      <span className="material-symbols-outlined text-[16px] text-[#0891b2]">
                        person
                      </span>
                      Quick Profile
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-0.5 text-xs font-semibold text-cyan-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      Active
                    </span>
                  </div>

                  {/* Avatar */}
                  <div className="relative overflow-hidden rounded-xl border border-slate-200">
                    <div className="flex h-56 items-center justify-center bg-gradient-to-br from-[#0891b2] to-cyan-400">
                      <span className="text-5xl font-bold text-white">AT</span>
                    </div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md border border-slate-200/80 bg-white/95 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm">
                      <span className="material-symbols-outlined text-[14px] text-[#0891b2]">
                        laptop_mac
                      </span>
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
                      <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                    </Link>
                    <Link to="/contact" className="btn-outline text-xs">
                      Career Log
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="section-container !pt-0" id="skills">
        <ScrollReveal>
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="section-label mb-2 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">inventory_2</span>
                Capabilities & Arsenal
              </div>
              <h2 className="section-title">Technical Skills Matrix</h2>
              <p className="section-subtitle mt-1 text-sm">
                A comprehensive overview of the technologies, runtimes, and orchestration suites I
                utilize to deliver enterprise-grade digital systems.
              </p>
            </div>
            <div className="inline-flex self-start rounded-lg border border-slate-200 bg-white p-1 text-xs font-medium shadow-sm md:self-auto">
              <span className="rounded bg-[#0891b2] px-3 py-1 font-semibold text-white">
                All Domains
              </span>
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
              <div className="card flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconColorMap[cat.id] || 'bg-cyan-50 text-cyan-700'}`}
                    >
                      <span className="material-symbols-outlined text-[20px]">{cat.icon}</span>
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${badgeColorMap[cat.badge] || 'bg-slate-100 text-slate-700 border-slate-200'}`}
                    >
                      {cat.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{cat.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-purple-100 bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                  <span className="text-slate-500">
                    {cat.footerLabel}: {cat.footerValue}
                  </span>
                  <span className="font-bold text-[#0891b2]">{cat.footerValue}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Row: 2 cards in 5/7 layout */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Card 4 */}
          <ScrollReveal className="lg:col-span-5">
            <div className="card flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-[#0891b2]">
                    <span className="material-symbols-outlined text-[20px]">
                      {skillCategories[3]?.icon || 'cloud'}
                    </span>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700">
                    {skillCategories[3]?.badge || 'Infrastructure'}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {skillCategories[3]?.title || 'Cloud & Deployment'}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {skillCategories[3]?.description || 'Cloud platform deployment and hosting.'}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {(skillCategories[3]?.skills || []).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-purple-100 bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                <span className="text-slate-500">Deployment Platforms</span>
                <span className="font-bold text-[#0891b2]">3 Providers</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 5: Tools & DevOps (wider) */}
          <ScrollReveal className="lg:col-span-7">
            <div className="card flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                      <span className="material-symbols-outlined text-[20px]">build</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Tools & DevOps</h3>
                      <div className="text-[11px] text-slate-500">
                        Developer tooling, version control, and deployment automation
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full border border-purple-100 bg-purple-50 px-2.5 py-0.5 text-[11px] font-semibold text-purple-700">
                    Tooling
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-slate-600 pt-1">
                  I prioritize efficient development workflows through automated tooling, version control
                  best practices, and streamlined build pipelines rather than manual processes alone.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
                  <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                    <div className="text-xs font-bold text-slate-900">Git & GitHub</div>
                    <div className="mt-0.5 text-[11px] text-slate-500">Version Control</div>
                  </div>
                  <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                    <div className="text-xs font-bold text-slate-900">VS Code</div>
                    <div className="mt-0.5 text-[11px] text-slate-500">Primary IDE</div>
                  </div>
                  <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                    <div className="text-xs font-bold text-slate-900">Chrome Extensions</div>
                    <div className="mt-0.5 text-[11px] text-slate-500">Browser Tooling</div>
                  </div>
                  <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                    <div className="text-xs font-bold text-slate-900">CLI Tools</div>
                    <div className="mt-0.5 text-[11px] text-slate-500">Terminal Power</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['ESLint & Prettier Configs', 'Postman / Insomnia', 'Sentry Error Tracking'].map(
                    (item) => (
                      <span key={item} className="rounded border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section-container !pt-0" id="experience">
        <ScrollReveal>
          <div className="mb-8">
            <div className="section-label mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">trending_up</span>
              Proven Execution
            </div>
            <h2 className="section-title">Career Timeline & Experience</h2>
            <p className="section-subtitle text-sm">
              Impact-focused track record building web applications and developer tools with modern
              technologies.
            </p>
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
                <div className="card space-y-4 !p-6 sm:!p-7">
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
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-500"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0891b2]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Engineering Values */}
      <section className="section-container !pt-0">
        <ScrollReveal>
          <div className="mb-8 text-center">
            <div className="section-label mb-2 flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">tune</span>
              Guiding Convictions
            </div>
            <h2 className="section-title">Engineering Values & Principles</h2>
            <p className="section-subtitle mx-auto text-sm">
              The non-negotiable mental models and behavioral baselines I bring to high-performing
              product engineering teams.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((value) => (
            <ScrollReveal key={value.title}>
              <div className="card flex flex-col justify-between">
                <div className="space-y-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${value.color}`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{value.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{value.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600">{value.description}</p>
                </div>
                <div
                  className={`mt-6 flex items-center gap-1.5 border-t border-slate-100 pt-4 text-xs font-semibold ${value.footerColor}`}
                >
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  {value.footer}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-container !pt-0 !pb-20">
        <ScrollReveal>
          <div className="overflow-hidden rounded-3xl border border-cyan-100/80 bg-gradient-to-r from-cyan-50/70 via-cyan-50/50 to-purple-50/50 p-8 shadow-sm sm:p-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl space-y-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-xs">
                  <span className="material-symbols-outlined text-[14px] text-[#0891b2]">
                    description
                  </span>
                  Documented Background
                </span>
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
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>Download Resume (PDF)</span>
                </a>
                <Link to="/contact" className="btn-outline">
                  <span>Get in Touch</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
