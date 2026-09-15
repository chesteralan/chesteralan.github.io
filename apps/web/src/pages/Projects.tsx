import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <div>
      <section>
        <div className="section-container">
          <ScrollReveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-500">
              My Work
            </p>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">Projects</h1>
            <p className="section-subtitle mb-12">
              A collection of things I've built — from web apps to developer tools.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ScrollReveal key={project.id}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
