import { Link } from 'react-router-dom';
import BadgePill from '../components/BadgePill';
import CyanActionLink from '../components/CyanActionLink';
import PageHeading from '../components/PageHeading';
import PulseDot from '../components/PulseDot';
import SectionContainer from '../components/SectionContainer';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import Icon from '../components/Icon';
import Tag from '../components/Tag';
import IconBox from '../components/IconBox';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import StatCard from '../components/StatCard';
import CTASection from '../components/CTASection';
import { projects, skills, stats, testimonials } from '../data/portfolio';
import AlchieImage from '../assets/alchietagudin.jpg';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div>
      {/* Hero */}
      <SectionContainer padding="py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column */}
          <div className="flex flex-col items-start lg:col-span-7">
            <ScrollReveal>
              <BadgePill icon="terminal" size="md" className="mb-4">
                Frontend Developer
              </BadgePill>
            </ScrollReveal>
            <ScrollReveal>
              <PageHeading className="mb-6 leading-tight">
                Building apps with AI-assisted development — faster iteration, sharper code, better
                outcomes.
              </PageHeading>
            </ScrollReveal>
            <ScrollReveal>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
                Hi, I'm Alchie Tagudin — a full-stack developer using AI tooling to ship production
                apps faster. Based in Davao City, Philippines.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="mb-10 flex flex-wrap items-center gap-4">
                <Link to="/projects" className="btn-primary">
                  <span>View Featured Work</span>
                  <Icon name="arrow_forward" size={18} />
                </Link>
                <Link to="/contact" className="btn-outline">
                  <Icon name="mail" size={18} />
                  <span>Get in Touch</span>
                </Link>
              </div>
            </ScrollReveal>
            {/* Tech Stack */}
            <ScrollReveal>
              <div className="w-full border-t border-slate-200 pt-4">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Core Tech Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) =>
                      ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js'].includes(s.name)
                    )
                    .map((skill) => (
                      <Tag key={skill.name}>{skill.name}</Tag>
                    ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column — Avatar */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <ScrollReveal>
              <div className="relative">
                <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-white shadow-xl ring-4 ring-cyan-100 sm:h-80 sm:w-80">
                  <img
                    src={AlchieImage}
                    alt="Alchie Tagudin"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Floating badge bottom-left */}
                <div className="absolute -bottom-3 -left-4 flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 shadow-lg">
                  <PulseDot color="emerald" size="md" />
                  <span className="text-xs font-semibold text-slate-800">
                    Available for Projects
                  </span>
                </div>
                {/* Floating badge top-right */}
                <div className="absolute -right-2 -top-3 flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-4 py-2 shadow-lg">
                  <IconBox icon="verified" color="cyan" size="xs" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold leading-tight text-slate-900">
                      Frontend Developer
                    </span>
                    <span className="text-[10px] text-slate-500">8+ Yrs Experience</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionContainer>

      {/* Stats */}
      <SectionContainer padding="py-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            {
              value: `${stats.yearsExperience}+`,
              label: 'Years Experience',
              icon: 'workspace_premium',
            },
            {
              value: `${stats.projectsCompleted}+`,
              label: 'Projects Shipped',
              icon: 'rocket_launch',
            },
            {
              value: `${stats.extensionsPublished}`,
              label: 'Extensions Published',
              icon: 'verified',
            },
            { value: `${stats.happyClients}+`, label: 'Happy Clients', icon: 'code_blocks' },
          ].map((stat) => (
            <ScrollReveal key={stat.label}>
              <StatCard value={stat.value} label={stat.label} icon={stat.icon} />
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Selected Work */}
      <SectionContainer padding="py-16" id="projects">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-8 sm:flex-row sm:items-end">
          <SectionHeader
            icon="briefcase"
            label="Portfolio"
            title="Selected Work"
            subtitle="Things I've built and shipped"
          />
          <CyanActionLink to="/projects" icon="arrow_forward">
            View all projects
          </CyanActionLink>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ScrollReveal key={project.id}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Testimonial */}
      {testimonials.length > 0 && (
        <SectionContainer padding="pb-10">
          <ScrollReveal>
            <Card padding="lg" className="relative overflow-hidden">
              <div className="mb-4 flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="star" size={20} className="text-amber-400" />
                ))}
              </div>
              <blockquote className="mb-6 text-xl font-medium leading-relaxed text-slate-800 lg:text-2xl">
                "{testimonials[0].content}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white shadow-sm">
                  {testimonials[0].initials}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonials[0].name}</div>
                  <div className="text-sm text-slate-500">{testimonials[0].role}</div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </SectionContainer>
      )}

      {/* Contact CTA */}
      <CTASection
        variant="dark"
        badge={{ icon: 'handshake', text: 'Collaboration' }}
        heading="Have a project in mind?"
        description="Let's build reliable, performant software together. I'm always open to new opportunities."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow transition-all hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-md"
        >
          <span>Start a Conversation</span>
          <Icon name="arrow_forward" size={18} />
        </Link>
      </CTASection>
    </div>
  );
}
