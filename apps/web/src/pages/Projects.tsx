import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
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
      {/* Hero */}
      <section className="hero-glow border-b border-slate-200/60 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#0891b2] mb-3">
              <span className="bg-cyan-50 px-2.5 py-1 rounded border border-cyan-200/60">
                Engineering Portfolio
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-500 font-normal">Production Case Studies &amp; Systems</span>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                Featured Work &amp; Engineering Projects
              </h1>
              <p className="text-slate-600 text-base leading-relaxed">
                A curated collection of web applications, Chrome extensions, and developer tools
                engineered for scale, resiliency, and optimal user experience.
              </p>
            </div>
          </ScrollReveal>
          {/* Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {metrics.map((m) => (
              <ScrollReveal key={m.label}>
                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-2xl font-bold text-[#0891b2] font-mono tracking-tight">
                      {m.value}
                    </span>
                    <span className="material-symbols-outlined text-slate-400 text-[22px]">
                      {m.icon}
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5">
                    {m.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Search Toolbar + Project Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter & Search */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                {filterPills.map((pill, i) => (
                  <button
                    key={pill}
                    className={
                      i === 0
                        ? 'px-3.5 py-1.5 bg-[#0891b2] text-white text-xs font-semibold rounded-md shadow-xs'
                        : 'px-3.5 py-1.5 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 text-xs font-medium rounded-md transition-colors'
                    }
                  >
                    {pill}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-2.5 w-full md:w-auto justify-end">
                <div className="relative w-full md:w-64">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <span className="material-symbols-outlined text-[16px]">search</span>
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
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-12 bg-white/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#0891b2] mb-1">
                  <span className="material-symbols-outlined text-[16px]">commit</span>
                  <span>Engineering Pulse</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Commitment to Open Source &amp; Quality
                </h2>
              </div>
              <a
                href="https://github.com/chesteralan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 px-3.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors shadow-xs"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                <span>github.com/chesteralan</span>
                <span className="material-symbols-outlined text-[10px] text-slate-400">
                  open_in_new
                </span>
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
                  bg: 'bg-cyan-50',
                  border: 'border-cyan-100',
                  iconColor: 'text-[#0891b2]',
                },
                {
                  value: '42 PRs',
                  label: 'Merged across upstream repos',
                  icon: 'alt_route',
                  bg: 'bg-purple-50',
                  border: 'border-purple-100',
                  iconColor: 'text-purple-700',
                },
                {
                  value: '9 Packages',
                  label: 'Published to npm & Chrome Store',
                  icon: 'inventory_2',
                  bg: 'bg-amber-50',
                  border: 'border-amber-100',
                  iconColor: 'text-amber-700',
                },
              ].map((stat) => (
                <ScrollReveal key={stat.label}>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center space-x-4">
                    <div
                      className={`w-11 h-11 rounded-lg ${stat.bg} border ${stat.border} flex items-center justify-center ${stat.iconColor}`}
                    >
                      <span className="material-symbols-outlined text-lg">{stat.icon}</span>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-900 font-mono">{stat.value}</div>
                      <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                    </div>
                  </div>
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
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                        Last 52 Weeks
                      </span>
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
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="relative overflow-hidden bg-gradient-to-r from-cyan-50 via-sky-50 to-white border border-cyan-100 rounded-2xl p-8 md:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 px-2.5 py-0.5 rounded-full mb-2">
                  Ready to Collaborate
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                  Looking to architect a new platform or modernize legacy software?
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  I partner with tech founders and engineering teams to design resilient systems,
                  optimize frontend response latencies, and deliver scalable production code.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="px-5 py-2.5 bg-[#0891b2] hover:bg-[#0e7490] text-white rounded-lg text-xs font-semibold shadow-xs flex items-center space-x-2 transition-all"
                >
                  <span>Start a Conversation</span>
                  <span className="material-symbols-outlined text-[14px]">chat_bubble_outline</span>
                </Link>
                <a
                  href="mailto:tagudinalchie@gmail.com"
                  className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-lg text-xs font-medium shadow-xs flex items-center space-x-2 transition-all"
                >
                  <span>Direct Email</span>
                  <span className="material-symbols-outlined text-[14px] text-slate-500">
                    mail
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
