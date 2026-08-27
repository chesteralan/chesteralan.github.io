import { ArrowDown, ExternalLink, Code2, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import { projects, skills, socialLinks } from '../data/portfolio';

const skillCategories = [
  {
    key: 'frontend',
    label: 'Frontend',
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  },
  {
    key: 'backend',
    label: 'Backend',
    color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
  },
  {
    key: 'tools',
    label: 'Tools',
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
  },
  {
    key: 'cloud',
    label: 'Cloud',
    color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
  },
] as const;

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div>
      {/* ─── Hero Section ─── */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="dark:from-primary-950/20 dark:to-accent-950/20 pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-50/40 via-transparent to-accent-50/30 dark:via-transparent" />
        <div className="section-container w-full">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-600 dark:text-primary-400">
                Frontend Developer
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I'm <span className="gradient-text">Alchie Tagudin</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl">
                I build clean, performant web experiences from{' '}
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  Davao City, Philippines
                </span>
                . Specializing in React, TypeScript, and crafting tools that make developers' lives
                easier.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/projects" className="btn-primary">
                  <ExternalLink className="h-4 w-4" />
                  View My Work
                </Link>
                <Link to="/contact" className="btn-outline">
                  Get in Touch
                </Link>
                <div className="ml-2 flex items-center gap-2">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl p-2.5 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                    aria-label="GitHub"
                  >
                    <Code2 className="h-5 w-5" />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl p-2.5 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <UserRound className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-5 w-5 text-gray-400" />
        </div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section className="bg-gray-50/50 dark:bg-surface-dark-card/50">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle mb-12">
              A selection of projects I've poured my heart into.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ScrollReveal key={project.id}>
                <div className="relative">
                  <ProjectCard project={project} />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-10 text-center">
              <Link to="/projects" className="btn-outline">
                View All Projects →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Skills ─── */}
      <section>
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">Skills & Tools</h2>
            <p className="section-subtitle mb-12">Technologies I work with daily and love using.</p>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((cat) => (
              <ScrollReveal key={cat.key}>
                <div className="card">
                  <h3
                    className={`mb-4 inline-block rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${cat.color}`}
                  >
                    {cat.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter((s) => s.category === cat.key)
                      .map((skill) => (
                        <span key={skill.name} className="tag text-sm">
                          {skill.name}
                        </span>
                      ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Let's Build Something Together
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-primary-100">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-semibold text-primary-700 transition-all duration-200 hover:bg-primary-50 active:scale-95"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
