import { ExternalLink, Code2 } from 'lucide-react';
import type { Project } from '../data/portfolio';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-hover group relative">
      <div className="mb-3 flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="tag text-xs">{tag}</span>
        ))}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-primary-500">
        {project.title}
      </h3>
      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
        {project.description}
      </p>
      <div className="flex items-center gap-3">
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 transition-colors hover:text-gray-700">
            <Code2 className="h-4 w-4" /> Source
          </a>
        )}
        {project.links.live && (
          <a href={project.links.live} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-500 transition-colors hover:text-primary-600">
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        )}
        {project.links.chrome && (
          <a href={project.links.chrome} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-500 transition-colors hover:text-primary-600">
            <ExternalLink className="h-4 w-4" /> Chrome Store
          </a>
        )}
      </div>
      {project.featured && (
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-primary-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-500">
            Featured
          </span>
        </div>
      )}
    </div>
  );
}
