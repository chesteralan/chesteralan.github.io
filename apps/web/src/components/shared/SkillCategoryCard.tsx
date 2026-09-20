import Card from '@/components/ui/Card';
import IconBox from '@/components/ui/IconBox';
import Tag from '@/components/ui/Tag';

interface SkillCategoryCardProps {
  icon: string;
  color?: 'cyan' | 'purple' | 'slate';
  badge: string;
  title: string;
  description: string;
  skills: string[];
  footerLabel: string;
  footerValue: string;
}

export default function SkillCategoryCard({
  icon,
  color = 'cyan',
  badge,
  title,
  description,
  skills,
  footerLabel,
  footerValue,
}: SkillCategoryCardProps) {
  return (
    <Card className="flex h-full flex-grow flex-col">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <IconBox icon={icon} color={color} size="md" rounded="xl" />
          <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700">
            {badge}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">{description}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-2">
          {skills.map((skill) => (
            <Tag key={skill} variant="purple">
              {skill}
            </Tag>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
        <span className="text-slate-500">{footerLabel}</span>
        <span className="font-bold text-brand-600">{footerValue}</span>
      </div>
    </Card>
  );
}
