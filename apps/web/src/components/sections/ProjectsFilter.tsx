import { useState } from 'react';
import ScrollReveal from '@/components/layout/ScrollReveal';
import ProjectCard from '@/components/shared/ProjectCard';
import Tag from '@/components/ui/Tag';
import SectionContainer from '@/components/layout/SectionContainer';
import { projects } from '@/data/portfolio';

const filterPills = ['All Projects', 'Frontend', 'Chrome Extensions', 'Open Source'] as const;
type FilterType = (typeof filterPills)[number];

export default function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All Projects');

  const filteredItems = projects.filter((item) => {
    switch (activeFilter) {
      case 'Frontend':
        return item.category === 'web';
      case 'Chrome Extensions':
        return item.category === 'extension';
      case 'Open Source':
        return item.status === 'Open Source';
      default:
        return true;
    }
  });

  return (
    <SectionContainer padding="py-10">
      {/* Filter & Search */}
      <ScrollReveal>
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex w-full flex-wrap items-center gap-1.5 md:w-auto">
            {filterPills.map((pill) => (
              <button key={pill} onClick={() => setActiveFilter(pill)} className="cursor-pointer">
                <Tag variant={activeFilter === pill ? 'active' : 'outline'}>{pill}</Tag>
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* 3-Column Project Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <ScrollReveal key={item.id}>
            <ProjectCard project={item} />
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  );
}
