import { memo } from 'react';
import type { Project } from '@/data/portfolio';
import { cn } from '@/lib/cn';
import Tag from '@/components/ui/Tag';
import Icon from '@/components/ui/Icon';

interface ProjectCardProps {
  project: Project;
}

export default memo(function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card-hover group overflow-hidden">
      {/* Header: dark gradient with preview */}
      <div
        className={cn(
          'relative -m-6 mb-6 flex h-40 items-center justify-center bg-gradient-to-br',
          project.previewGradient || 'from-slate-900 to-slate-800'
        )}
      >
        {project.featured && (
          <Tag variant="overlay" className="absolute left-4 top-4">
            Featured
          </Tag>
        )}
        {project.status && (
          <Tag variant="overlay" className="absolute right-4 top-4">
            {project.status}
          </Tag>
        )}
        <span className="text-4xl font-bold text-white/10 transition-colors group-hover:text-white/20">
          {project.title.charAt(0)}
        </span>
      </div>

      {/* Body */}
      <h3 className="mb-1 text-lg font-semibold text-slate-900 transition-colors group-hover:text-brand-600">
        {project.title}
      </h3>
      {project.metric && (
        <p className="mb-2 text-xs font-medium text-brand-600">{project.metric}</p>
      )}
      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-600">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Tag key={tag} className="text-[11px]">
            {tag}
          </Tag>
        ))}
      </div>

      {/* Footer: links */}
      <div className="flex items-center gap-4 border-t border-slate-100 pt-3">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-700"
          >
            <Icon name="code" size={16} />
            Source
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 transition-colors hover:text-brand-700"
          >
            <Icon name="open_in_new" size={16} />
            Live Demo
          </a>
        )}
        {project.links.chrome && (
          <a
            href={project.links.chrome}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 transition-colors hover:text-brand-700"
          >
            <Icon name="extension" size={16} />
            Chrome Store
          </a>
        )}
      </div>
    </div>
  );
});
