import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import { projects, skills, stats, testimonials } from '../data/portfolio';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 text-[#0891b2] border border-cyan-200 text-sm font-medium mb-6">
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                Frontend Developer
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                Crafting robust, scalable web applications & seamless digital experiences.
              </h1>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
                Hi, I'm Alchie Tagudin — specializing in React, TypeScript, and crafting tools that make developers' lives easier. Based in Davao City, Philippines.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link to="/projects" className="btn-primary">
                  <span>View Featured Work</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link to="/contact" className="btn-outline">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  <span>Get in Touch</span>
                </Link>
              </div>
            </ScrollReveal>
            {/* Tech Stack */}
            <ScrollReveal>
              <div className="w-full pt-4 border-t border-slate-200">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Core Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {skills.filter(s => ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js'].includes(s.name)).map((skill) => (
                    <span key={skill.name} className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-sm">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column — Avatar */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal>
              <div className="relative">
                <div className="h-72 w-72 sm:h-80 sm:w-80 overflow-hidden rounded-full border-4 border-white shadow-xl ring-4 ring-cyan-100">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0891b2] to-cyan-400 text-5xl font-bold text-white">
                    AT
                  </div>
                </div>
                {/* Floating badge bottom-left */}
                <div className="absolute -bottom-3 -left-4 flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 shadow-lg">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-800">Available for work</span>
                </div>
                {/* Floating badge top-right */}
                <div className="absolute -right-2 -top-3 flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-4 py-2 shadow-lg">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-50 text-[#0891b2]">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold leading-tight text-slate-900">Frontend Developer</span>
                    <span className="text-[10px] text-slate-500">8+ Yrs Experience</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: `${stats.yearsExperience}+`, label: 'Years Experience', icon: 'workspace_premium' },
            { value: `${stats.projectsCompleted}+`, label: 'Projects Shipped', icon: 'rocket_launch' },
            { value: `${stats.extensionsPublished}`, label: 'Extensions Published', icon: 'verified' },
            { value: `${stats.happyClients}+`, label: 'Happy Clients', icon: 'code_blocks' },
          ].map((stat) => (
            <ScrollReveal key={stat.label}>
              <div className="flex flex-col justify-between rounded-lg border border-slate-200/80 bg-white p-6 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-[#0891b2]">{stat.value}</span>
                  <span className="material-symbols-outlined text-slate-400 text-[26px]">{stat.icon}</span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section className="max-w-7xl mx-auto px-6 py-16" id="projects">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-slate-200">
          <div>
            <div className="section-label flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0891b2]" />
              Portfolio
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Selected Work</h2>
            <p className="text-slate-600 mt-1">Things I've built and shipped</p>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm font-semibold text-[#0891b2] hover:text-[#0e7490] transition-colors">
            <span>View all projects</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {featuredProjects.map((project) => (
            <ScrollReveal key={project.id}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      {testimonials.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-10">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 lg:p-10 shadow-sm">
              <div className="mb-4 flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <blockquote className="mb-6 text-xl lg:text-2xl font-medium leading-relaxed text-slate-800">
                "{testimonials[0].content}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0891b2] text-sm font-bold text-white shadow-sm">
                  {testimonials[0].initials}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonials[0].name}</div>
                  <div className="text-sm text-slate-500">{testimonials[0].role}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950 p-8 lg:p-12 shadow-lg">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-xl space-y-3">
                <div className="inline-flex items-center gap-1.5 text-cyan-400 text-xs uppercase tracking-wider font-bold">
                  <span className="material-symbols-outlined text-[20px]">handshake</span>
                  <span>Collaboration</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white">Have a project in mind?</h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  Let's build reliable, performant software together. I'm always open to new opportunities.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow transition-all hover:shadow-md hover:-translate-y-0.5 hover:bg-slate-100">
                  <span>Start a Conversation</span>
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
