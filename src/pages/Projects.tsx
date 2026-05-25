import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <div>
      <section>
        <div className="section-container">
          <ScrollReveal>
            <p className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-4">
              My Work
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h1>
            <p className="section-subtitle mb-12">
              A collection of things I've built — from web apps to developer tools.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
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
