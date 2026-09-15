import type { Project } from '../data/portfolio';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-hover group overflow-hidden">
      {/* Header: dark gradient with preview */}
      <div className={`relative -m-6 mb-6 flex h-40 items-center justify-center bg-gradient-to-br ${project.previewGradient || 'from-slate-900 to-slate-800'}`}>
        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            Featured
          </span>
        )}
        {project.status && (
          <span className="absolute right-4 top-4 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            {project.status}
          </span>
        )}
        <span className="text-4xl font-bold text-white/10 transition-colors group-hover:text-white/20">
          {project.title.charAt(0)}
        </span>
      </div>

      {/* Body */}
      <h3 className="mb-1 text-lg font-semibold text-slate-900 transition-colors group-hover:text-[#0891b2]">
        {project.title}
      </h3>
      {project.metric && (
        <p className="mb-2 text-xs font-medium text-[#0891b2]">{project.metric}</p>
      )}
      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-600">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag text-[11px]">{tag}</span>
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
            <span className="material-symbols-outlined text-[16px]">code</span>
            Source
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0891b2] transition-colors hover:text-[#0e7490]"
          >
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            Live Demo
          </a>
        )}
        {project.links.chrome && (
          <a
            href={project.links.chrome}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0891b2] transition-colors hover:text-[#0e7490]"
          >
            <span className="material-symbols-outlined text-[16px]">extension</span>
            Chrome Store
          </a>
        )}
      </div>
    </div>
  );
}
