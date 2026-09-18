import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import Icon from '../components/Icon';
import Tag from '../components/Tag';
import SectionHeader from '../components/SectionHeader';
import SectionContainer from '../components/SectionContainer';
import StatCard from '../components/StatCard';
import CTASection from '../components/CTASection';
import { projects } from '../data/portfolio';

const metrics = [
  { value: `${projects.length}`, label: 'Total Projects', icon: 'folder_special' },
  {
    value: `${projects.filter((p) => p.status === 'Production').length}`,
    label: 'Production Ready',
    icon: 'rocket_launch',
  },
  {
    value: `${projects.filter((p) => p.status === 'Open Source').length}`,
    label: 'Open Source',
    icon: 'code',
  },
  {
    value: `${new Set(projects.flatMap((p) => p.tags)).size}+`,
    label: 'Technologies',
    icon: 'developer_board',
  },
];

const filterPills = ['All Projects', 'Frontend', 'Chrome Extensions', 'Open Source'];

const heatmapCells = [
  // Row 1
  'bg-slate-100',
  'bg-teal-200',
  'bg-teal-400',
  'bg-teal-700',
  'bg-teal-400',
  'bg-slate-100',
  'bg-teal-200',
  // Row 2
  'bg-teal-200',
  'bg-teal-700',
  'bg-teal-400',
  'bg-teal-700',
  'bg-slate-100',
  'bg-teal-200',
  'bg-teal-400',
  // Row 3
  'bg-teal-400',
  'bg-slate-100',
  'bg-teal-200',
  'bg-teal-700',
  'bg-teal-700',
  'bg-teal-400',
  'bg-slate-100',
  // Row 4
  'bg-teal-700',
  'bg-teal-400',
  'bg-teal-200',
  'bg-slate-100',
  'bg-teal-400',
  'bg-teal-700',
  'bg-teal-200',
  // Row 5
  'bg-slate-100',
  'bg-teal-200',
  'bg-teal-400',
  'bg-teal-700',
  'bg-teal-200',
  'bg-slate-100',
  'bg-teal-400',
  // Row 6
  'bg-teal-200',
  'bg-teal-400',
  'bg-teal-700',
  'bg-teal-700',
  'bg-teal-400',
  'bg-teal-200',
  'bg-slate-100',
  // Row 7
  'bg-teal-400',
  'bg-slate-100',
  'bg-teal-200',
  'bg-teal-400',
  'bg-teal-700',
  'bg-teal-400',
  'bg-slate-100',
  // Row 8
  'bg-teal-700',
  'bg-teal-400',
  'bg-teal-700',
  'bg-teal-200',
  'bg-slate-100',
  'bg-teal-400',
  'bg-teal-700',
  // Row 9
  'bg-teal-200',
  'bg-teal-400',
  'bg-slate-100',
  'bg-teal-700',
  'bg-teal-400',
  'bg-slate-100',
  'bg-teal-200',
  // Row 10
  'bg-teal-400',
  'bg-teal-700',
  'bg-teal-200',
  'bg-slate-100',
  'bg-teal-400',
  'bg-teal-700',
  'bg-teal-200',
  // Row 11
  'bg-slate-100',
  'bg-teal-200',
  'bg-teal-400',
  'bg-teal-700',
  'bg-teal-400',
  'bg-slate-100',
  'bg-teal-200',
  // Row 12
  'bg-teal-200',
  'bg-teal-400',
  'bg-slate-100',
  'bg-teal-700',
  'bg-teal-400',
  'bg-teal-200',
  'bg-teal-700',
  // Row 13
  'bg-teal-400',
  'bg-slate-100',
  'bg-teal-200',
  'bg-teal-400',
  'bg-teal-700',
  'bg-slate-100',
  'bg-teal-400',
  // Row 14
  'bg-teal-700',
  'bg-teal-200',
  'bg-teal-400',
  'bg-teal-700',
  'bg-slate-100',
  'bg-teal-400',
  'bg-teal-200',
  // Row 15
  'bg-slate-100',
  'bg-teal-400',
  'bg-teal-700',
  'bg-teal-200',
  'bg-teal-400',
  'bg-teal-700',
  'bg-slate-100',
  // Row 16
  'bg-teal-200',
  'bg-teal-700',
  'bg-slate-100',
  'bg-teal-400',
  'bg-teal-700',
  'bg-teal-400',
  'bg-slate-100',
  // Row 17
  'bg-slate-100',
  'bg-teal-200',
  'bg-teal-400',
  'bg-teal-700',
  'bg-teal-400',
  'bg-teal-200',
  'bg-teal-700',
  // Row 18
  'bg-teal-400',
  'bg-teal-700',
  'bg-slate-100',
  'bg-teal-200',
  'bg-teal-700',
  'bg-slate-100',
  'bg-teal-400',
];

export default function Projects() {
  return (
    <div>
      <PageHero
        badge="Engineering Portfolio"
        subtitle="Production Case Studies &amp; Systems"
        heading="Featured Work &amp; Engineering Projects"
        description="A curated collection of web applications, Chrome extensions, and developer tools engineered for scale, resiliency, and optimal user experience."
      />
      {/* Metrics Strip */}
      <SectionContainer padding="py-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {metrics.map((m) => (
            <ScrollReveal key={m.label}>
              <StatCard value={m.value} label={m.label} icon={m.icon} />
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Filter & Search Toolbar + Project Grid */}
      <SectionContainer padding="py-10">
        {/* Filter & Search */}
        <ScrollReveal>
          <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex w-full flex-wrap items-center gap-1.5 md:w-auto">
              {filterPills.map((pill, i) => (
                <Tag key={pill} variant={i === 0 ? 'active' : 'outline'}>
                  {pill}
                </Tag>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 3-Column Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ScrollReveal key={project.id}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>

      {/* Open Source Section */}
      <SectionContainer padding="py-12" className="border-y border-slate-200/80 bg-white/70">
        <ScrollReveal>
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <SectionHeader
              icon="commit"
              label="Engineering Pulse"
              title="Commitment to Open Source &amp; Quality"
            />
            <a
              href="https://github.com/chesteralan"
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-xs inline-flex items-center space-x-2 rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              <Icon name="code" size={16} />
              <span>github.com/chesteralan</span>
              <Icon name="open_in_new" size={10} className="text-slate-500" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          {/* Left: Stats Cards */}
          <div className="space-y-4 lg:col-span-4">
            {[
              {
                value: '1,840+',
                label: 'Annual Git Commits in 2024',
                icon: 'trending_up',
                color: 'cyan' as const,
              },
              {
                value: '42 PRs',
                label: 'Merged across upstream repos',
                icon: 'alt_route',
                color: 'purple' as const,
              },
              {
                value: '9 Packages',
                label: 'Published to npm & Chrome Store',
                icon: 'inventory_2',
                color: 'amber' as const,
              },
            ].map((stat) => (
              <ScrollReveal key={stat.label}>
                <StatCard
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  layout="horizontal"
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Right: Contribution Heatmap */}
          <div className="shadow-xs flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 lg:col-span-8">
            <ScrollReveal>
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-slate-900">
                      Contribution Stream
                    </span>
                    <Tag variant="overlay">Last 52 Weeks</Tag>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[10px] text-slate-500">
                    <span>Less</span>
                    <span className="h-2.5 w-2.5 rounded-sm border border-slate-200 bg-slate-100" />
                    <span className="h-2.5 w-2.5 rounded-sm bg-teal-200" />
                    <span className="h-2.5 w-2.5 rounded-sm bg-teal-400" />
                    <span className="h-2.5 w-2.5 rounded-sm bg-teal-700" />
                    <span>More</span>
                  </div>
                </div>
                {/* Month labels */}
                <div className="mb-2 flex justify-between px-1 font-mono text-[10px] text-slate-500">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
                {/* Heatmap grid */}
                <div className="overflow-x-auto pb-2">
                  <div className="grid min-w-[420px] grid-flow-col grid-rows-7 justify-between gap-1 sm:min-w-[550px]">
                    {heatmapCells.map((color, i) => (
                      <div key={i} className={`h-2.5 w-2.5 rounded-sm ${color}`} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                <span>Primary Focus: Web Apps &amp; Developer Tools</span>
                <span className="font-medium text-brand-600">Continuous Delivery</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionContainer>

      {/* Collaboration CTA */}
      <CTASection
        variant="light"
        badge={{ text: 'Ready to Collaborate' }}
        heading="Looking to architect a new platform or modernize legacy software?"
        description="I partner with tech founders and engineering teams to design resilient systems, optimize frontend response latencies, and deliver scalable production code."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="shadow-xs flex items-center space-x-2 rounded-lg bg-brand-600 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-brand-700"
          >
            <span>Start a Conversation</span>
            <Icon name="chat_bubble_outline" size={14} />
          </Link>
          <a
            href="mailto:tagudinalchie@gmail.com"
            className="shadow-xs flex items-center space-x-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 transition-all hover:bg-slate-50"
          >
            <span>Direct Email</span>
            <Icon name="mail" size={14} className="text-slate-500" />
          </a>
        </div>
      </CTASection>
    </div>
  );
}
