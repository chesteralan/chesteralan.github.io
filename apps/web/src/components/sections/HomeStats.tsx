import SectionContainer from '@/components/layout/SectionContainer';
import ScrollReveal from '@/components/layout/ScrollReveal';
import StatCard from '@/components/shared/StatCard';
import { stats } from '@/data/portfolio';

export default function HomeStats() {
  return (
    <SectionContainer padding="py-8">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {[
          {
            value: `${stats.yearsExperience}+`,
            label: 'Years Experience',
            icon: 'workspace_premium',
          },
          {
            value: `${stats.projectsCompleted}+`,
            label: 'Projects Shipped',
            icon: 'rocket_launch',
          },
          {
            value: `${stats.extensionsPublished}`,
            label: 'Extensions Published',
            icon: 'verified',
          },
          { value: `${stats.happyClients}+`, label: 'Happy Clients', icon: 'code_blocks' },
        ].map((stat) => (
          <ScrollReveal key={stat.label}>
            <StatCard value={stat.value} label={stat.label} icon={stat.icon} />
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  );
}
