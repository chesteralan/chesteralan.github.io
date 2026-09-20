import Card from '@/components/ui/Card';
import IconBox from '@/components/ui/IconBox';
import Tag from '@/components/ui/Tag';
import ToolItem from '@/components/shared/ToolItem';
import SkillCategoryCard from '@/components/shared/SkillCategoryCard';
import SectionContainer from '@/components/layout/SectionContainer';
import ScrollReveal from '@/components/layout/ScrollReveal';
import SectionHeader from '@/components/shared/SectionHeader';
import { skillCategories } from '@/data/portfolio';

const iconColorMap: Record<string, 'cyan' | 'purple' | 'slate'> = {
  frontend: 'cyan',
  backend: 'purple',
  cloud: 'cyan',
};

export default function AboutSkills() {
  const totalCategories = skillCategories.length;

  return (
    <SectionContainer padding="!pt-12" id="skills">
      <ScrollReveal>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader icon="inventory_2" label="Capabilities" title="Technical Skills" />
          <div className="inline-flex self-start rounded-lg border border-slate-200 bg-white p-1 text-xs font-medium shadow-sm md:self-auto">
            <Tag variant="active">All Domains</Tag>
            <span className="px-3 py-1 text-slate-600">{totalCategories} Categories</span>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.slice(0, 3).map((cat) => (
          <ScrollReveal key={cat.id}>
            <SkillCategoryCard
              icon={cat.icon}
              color={iconColorMap[cat.id] || 'cyan'}
              badge={cat.badge}
              title={cat.title}
              description={cat.description}
              skills={cat.skills}
              footerLabel={cat.footerLabel}
              footerValue={cat.footerValue}
            />
          </ScrollReveal>
        ))}
      </div>

      {/* Tools & DevOps */}
      <div className="mt-6">
        <ScrollReveal>
          <Card className="flex h-full flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <IconBox icon="build" color="slate" size="md" rounded="xl" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Tools & DevOps</h3>
                    <div className="text-[11px] text-slate-500">
                      Developer tooling, version control, and deployment automation
                    </div>
                  </div>
                </div>
                <Tag variant="purple">Tooling</Tag>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
                <ToolItem title="Git & GitHub" subtitle="Version Control" />
                <ToolItem title="VS Code" subtitle="Primary IDE" />
                <ToolItem title="Chrome Extensions" subtitle="Browser Tooling" />
                <ToolItem title="CLI Tools" subtitle="Terminal Power" />
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['ESLint & Prettier Configs', 'Postman / Insomnia', 'Sentry Error Tracking'].map(
                  (item) => (
                    <Tag key={item} variant="default">
                      {item}
                    </Tag>
                  )
                )}
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
}
