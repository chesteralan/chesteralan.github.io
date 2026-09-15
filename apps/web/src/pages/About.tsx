import { MapPin, Briefcase, Code2, Calendar } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { skills, experience } from '../data/portfolio';

const timeline = [
  { year: '2012', event: 'Started GitHub journey', description: 'Joined GitHub — began contributing to open source and building side projects.' },
  { year: '2015', event: 'Launched Altrugenix.js.org', description: 'Created a community hub dedicated to JavaScript developers and resources.' },
  { year: '2020', event: 'First Chrome Extension', description: 'Published Bootstrap 3.3.x Offline Guide on the Chrome Web Store.' },
  { year: '2024', event: 'PayrollPH', description: 'Built a payroll management system for Philippine businesses.' },
];

export default function About() {
  return (
    <div>
      {/* Bio */}
      <section>
        <div className="section-container">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-500">
                  About Me
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
                  I craft digital experiences from <span className="gradient-text">Davao City</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal>
                <div className="space-y-4 leading-relaxed text-gray-600">
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
                    contributing to open source, or finding ways to make developer workflows
                    smoother through CLI tools and browser extensions.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="card flex items-center gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-primary-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Location</p>
                      <p className="text-sm text-gray-500">Davao City, Philippines</p>
                    </div>
                  </div>
                  <div className="card flex items-center gap-3">
                    <Briefcase className="h-5 w-5 shrink-0 text-primary-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Role</p>
                      <p className="text-sm text-gray-500">Freelance Web Developer</p>
                    </div>
                  </div>
                  <div className="card flex items-center gap-3">
                    <Code2 className="h-5 w-5 shrink-0 text-primary-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">GitHub</p>
                      <p className="text-sm text-gray-500">chesteralan · 77+ repos</p>
                    </div>
                  </div>
                  <div className="card flex items-center gap-3">
                    <Calendar className="h-5 w-5 shrink-0 text-primary-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Building since</p>
                      <p className="text-sm text-gray-500">2012 and counting</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:sticky lg:top-24 lg:col-span-2">
              <ScrollReveal>
                <div className="card overflow-hidden p-0">
                  <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-primary-100 via-accent-50 to-primary-50">
                    <div className="p-8 text-center">
                      <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
                        <span className="gradient-text text-4xl font-bold">AT</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Alchie Tagudin</h3>
                      <p className="text-sm text-gray-500">@chesteralan</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-gray-50/50">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle mb-12">Where I've been and what I've been up to.</p>
          </ScrollReveal>
          <div className="space-y-6">
            {experience.map((exp) => (
              <ScrollReveal key={exp.id}>
                <div className="card">
                  <div className="mb-3 flex flex-col justify-between sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                      <p className="text-sm font-medium text-primary-500">{exp.company}</p>
                    </div>
                    <span className="mt-1 text-sm text-gray-500 sm:mt-0">{exp.period}</span>
                  </div>
                  <p className="mb-3 text-sm text-gray-600">{exp.description}</p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
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

      {/* Timeline */}
      <section>
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">Timeline</h2>
            <p className="section-subtitle mb-12">Key moments in my dev journey.</p>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gray-200" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <ScrollReveal key={item.year}>
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-[3px] border-primary-500 bg-white" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary-500">
                        {item.year}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-gray-900">{item.event}</h3>
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-50/50">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="section-title">Full Stack</h2>
            <p className="section-subtitle mb-12">Every tool in my belt.</p>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill.name} className="tag px-4 py-2 text-sm">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
