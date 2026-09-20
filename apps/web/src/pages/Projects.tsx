import PageHero from '@/components/shared/PageHero';
import ProjectsFilter from '@/components/sections/ProjectsFilter';
import ProjectsCta from '@/components/sections/ProjectsCta';

export default function Projects() {
  return (
    <div>
      <PageHero
        badge="Engineering Portfolio"
        subtitle="Production Case Studies &amp; Systems"
        heading="Featured Work &amp; Engineering Projects"
        description="A curated collection of web applications, Chrome extensions, and developer tools engineered for scale, resiliency, and optimal user experience."
      />
      <ProjectsFilter />
      <ProjectsCta />
    </div>
  );
}
