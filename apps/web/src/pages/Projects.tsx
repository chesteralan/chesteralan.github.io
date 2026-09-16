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

const filterPills = ['All Projects', 'Full-Stack Web', 'Chrome Extensions', 'Open Source'];

const heatmapCells = [
  // Row 1
  'bg-slate-100','bg-teal-200','bg-teal-400','bg-teal-700','bg-teal-400','bg-slate-100','bg-teal-200',
  // Row 2
  'bg-teal-200','bg-teal-700','bg-teal-400','bg-teal-700','bg-slate-100','bg-teal-200','bg-teal-400',
  // Row 3
  'bg-teal-400','bg-slate-100','bg-teal-200','bg-teal-700','bg-teal-700','bg-teal-400','bg-slate-100',
  // Row 4
  'bg-teal-700','bg-teal-400','bg-teal-200','bg-slate-100','bg-teal-400','bg-teal-700','bg-teal-200',
  // Row 5
  'bg-slate-100','bg-teal-200','bg-teal-400','bg-teal-700','bg-teal-200','bg-slate-100','bg-teal-400',
  // Row 6
  'bg-teal-200','bg-teal-400','bg-teal-700','bg-teal-700','bg-teal-400','bg-teal-200','bg-slate-100',
  // Row 7
  'bg-teal-400','bg-slate-100','bg-teal-200','bg-teal-400','bg-teal-700','bg-teal-400','bg-slate-100',
  // Row 8
  'bg-teal-700','bg-teal-400','bg-teal-700','bg-teal-200','bg-slate-100','bg-teal-400','bg-teal-700',
  // Row 9
  'bg-teal-200','bg-teal-400','bg-slate-100','bg-teal-700','bg-teal-400','bg-slate-100','bg-teal-200',
  // Row 10
  'bg-teal-400','bg-teal-700','bg-teal-200','bg-slate-100','bg-teal-400','bg-teal-700','bg-teal-200',
  // Row 11
  'bg-slate-100','bg-teal-200','bg-teal-400','bg-teal-700','bg-teal-400','bg-slate-100','bg-teal-200',
  // Row 12
  'bg-teal-200','bg-teal-400','bg-slate-100','bg-teal-700','bg-teal-400','bg-teal-200','bg-teal-700',
  // Row 13
  'bg-teal-400','bg-slate-100','bg-teal-200','bg-teal-400','bg-teal-700','bg-slate-100','bg-teal-400',
  // Row 14
  'bg-teal-700','bg-teal-200','bg-teal-400','bg-teal-700','bg-slate-100','bg-teal-400','bg-teal-200',
  // Row 15
  'bg-slate-100','bg-teal-400','bg-teal-700','bg-teal-200','bg-teal-400','bg-teal-700','bg-slate-100',
  // Row 16
  'bg-teal-200','bg-teal-700','bg-slate-100','bg-teal-400','bg-teal-700','bg-teal-400','bg-slate-100',
  // Row 17
  'bg-slate-100','bg-teal-200','bg-teal-400','bg-teal-700','bg-teal-400','bg-teal-200','bg-teal-700',
  // Row 18
  'bg-teal-400','bg-teal-700','bg-slate-100','bg-teal-200','bg-teal-700','bg-slate-100','bg-teal-400',
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                {filterPills.map((pill, i) => (
                  <Tag key={pill} variant={i === 0 ? 'active' : 'outline'}>
                    {pill}
                  </Tag>
                ))}
              </div>
              <div className="flex items-center space-x-2.5 w-full md:w-auto justify-end">
                <div className="relative w-full md:w-64">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Icon name="search" size={16} />
                  </span>
                  <input
                    className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0891b2] focus:border-[#0891b2]"
                    placeholder="Search tech or keywords..."
                    type="text"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 3-Column Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ScrollReveal key={project.id}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
      </SectionContainer>

      {/* Open Source Section */}
      <SectionContainer padding="py-12" className="bg-white/70 border-y border-slate-200/80">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <SectionHeader
                icon="commit"
                label="Engineering Pulse"
                title="Commitment to Open Source &amp; Quality"
              />
              <a
                href="https://github.com/chesteralan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 px-3.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors shadow-xs"
              >
                <Icon name="code" size={16} />
                <span>github.com/chesteralan</span>
                <Icon name="open_in_new" size={10} className="text-slate-400" />
              </a>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Stats Cards */}
            <div className="lg:col-span-4 space-y-4">
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
                  <StatCard value={stat.value} label={stat.label} icon={stat.icon} layout="horizontal" />
                </ScrollReveal>
              ))}
            </div>

            {/* Right: Contribution Heatmap */}
            <div className="lg:col-span-8 bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between h-full">
              <ScrollReveal>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-semibold text-slate-900">Contribution Stream</span>
                      <Tag variant="overlay">Last 52 Weeks</Tag>
                    </div>
                    <div className="flex items-center space-x-1.5 text-[10px] text-slate-500">
                      <span>Less</span>
                      <span className="w-2.5 h-2.5 rounded-sm bg-slate-100 border border-slate-200" />
                      <span className="w-2.5 h-2.5 rounded-sm bg-teal-200" />
                      <span className="w-2.5 h-2.5 rounded-sm bg-teal-400" />
                      <span className="w-2.5 h-2.5 rounded-sm bg-teal-700" />
                      <span>More</span>
                    </div>
                  </div>
                  {/* Month labels */}
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mb-2 px-1">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
                    <span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
                    <span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                  </div>
                  {/* Heatmap grid */}
                  <div className="overflow-x-auto pb-2">
                    <div className="grid grid-flow-col grid-rows-7 gap-1 min-w-[550px] justify-between">
                      {heatmapCells.map((color, i) => (
                        <div key={i} className={`w-2.5 h-2.5 rounded-sm ${color}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Primary Focus: Web Apps &amp; Developer Tools</span>
                  <span className="font-medium text-[#0891b2]">Continuous Delivery</span>
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
            className="px-5 py-2.5 bg-[#0891b2] hover:bg-[#0e7490] text-white rounded-lg text-xs font-semibold shadow-xs flex items-center space-x-2 transition-all"
          >
            <span>Start a Conversation</span>
            <Icon name="chat_bubble_outline" size={14} />
          </Link>
          <a
            href="mailto:tagudinalchie@gmail.com"
            className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-lg text-xs font-medium shadow-xs flex items-center space-x-2 transition-all"
          >
            <span>Direct Email</span>
            <Icon name="mail" size={14} className="text-slate-500" />
          </a>
        </div>
      </CTASection>
    </div>
  );
}
