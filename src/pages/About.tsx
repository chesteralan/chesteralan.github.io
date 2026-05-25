import { MapPin, Briefcase, Code2, Calendar } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { skills } from '../data/portfolio';

const experience = [
  {
    company: 'PetLabCo.',
    role: 'Frontend Developer',
    period: 'Present',
    description:
      'Building and maintaining modern web applications with React, TypeScript, and Tailwind CSS. Collaborating on cross-functional teams to deliver high-quality user experiences.',
    highlights: [
      'Developed responsive interfaces using React + TypeScript',
      'Integrated Firebase backend services',
      'Optimized application performance and accessibility',
    ],
  },
];

const timeline = [
  {
    year: '2012',
    event: 'Started GitHub journey',
    description: 'Joined GitHub — began contributing to open source and building side projects.',
  },
  {
    year: '2015',
    event: 'Launched Altrugenix.js.org',
    description: 'Created a community hub dedicated to JavaScript developers and resources.',
  },
  {
    year: '2020',
    event: 'First Chrome Extension',
    description: 'Published Bootstrap 3.3.x Offline Guide on the Chrome Web Store.',
  },
  {
    year: '2024',
    event: 'PayrollPH & Agent Docs',
    description: 'Built payroll management system for PH businesses and AI documentation tools.',
  },
];

export default function About() {
  return (
    <div>
      {/* ─── Bio Section ─── */}
      <section>
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Text */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <p className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-4">
                  About Me
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  I craft digital experiences from{' '}
                  <span className="gradient-text">Davao City</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    I'm a frontend developer with a passion for building clean, intuitive, and 
                    performant web applications. Based in Davao City, Philippines, I specialize in 
                    React, TypeScript, and modern CSS frameworks like Tailwind.
                  </p>
                  <p>
                    Over the years, I've built everything from charity platforms and payroll systems 
                    to developer tools and Chrome extensions. I believe in writing code that's not 
                    just functional, but also maintainable and delightful to work with.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring the latest in web technologies, 
                    contributing to open source, or finding ways to make developer workflows smoother 
                    through CLI tools and browser extensions.
                  </p>
                </div>
              </ScrollReveal>

              {/* Quick Info */}
              <ScrollReveal>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="card flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Davao City, Philippines</p>
                    </div>
                  </div>
                  <div className="card flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-primary-500 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Role</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer at PetLabCo.</p>
                    </div>
                  </div>
                  <div className="card flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-primary-500 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">GitHub</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">chesteralan · 77+ repos</p>
                    </div>
                  </div>
                  <div className="card flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary-500 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Building since</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">2012 and counting</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Photo / Avatar placeholder */}
            <div className="lg:col-span-2 lg:sticky lg:top-24">
              <ScrollReveal>
                <div className="card p-0 overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-primary-100 via-accent-50 to-primary-50 dark:from-primary-900/30 dark:via-accent-900/20 dark:to-primary-900/30 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto rounded-full bg-white dark:bg-surface-dark-card shadow-lg flex items-center justify-center mb-4">
                        <span className="text-4xl font-bold gradient-text">AT</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Alchie Tagudin</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">@chesteralan</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Experience ─── */}
      <section className="bg-gray-50/50 dark:bg-surface-dark-card/50">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle mb-12">Where I've been and what I've been up to.</p>
          </ScrollReveal>
          <div className="space-y-6">
            {experience.map((exp) => (
              <ScrollReveal key={exp.company}>
                <div className="card">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{exp.description}</p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section>
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">Timeline</h2>
            <p className="section-subtitle mb-12">Key moments in my dev journey.</p>
          </ScrollReveal>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

            <div className="space-y-10">
              {timeline.map((item) => (
                <ScrollReveal key={item.year}>
                  <div className="relative pl-10">
                    {/* Dot */}
                    <div className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full bg-white dark:bg-surface-dark border-[3px] border-primary-500" />
                    <div>
                      <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{item.event}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Skills Full ─── */}
      <section className="bg-gray-50/50 dark:bg-surface-dark-card/50">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">Full Stack</h2>
            <p className="section-subtitle mb-12">Every tool in my belt.</p>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill.name} className="tag text-sm px-4 py-2">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
