import { useMemo } from 'react';
import CyanActionLink from '@/components/shared/CyanActionLink';
import SectionContainer from '@/components/layout/SectionContainer';
import ScrollReveal from '@/components/layout/ScrollReveal';
import ProjectCard from '@/components/shared/ProjectCard';
import SectionHeader from '@/components/shared/SectionHeader';
import { projects } from '@/data/portfolio';

export default function HomeSelectedWork() {
  const featuredProjects = useMemo(() => projects.filter((p) => p.featured), []);

  return (
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
  );
}
