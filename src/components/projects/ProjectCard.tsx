import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../../types/portfolio";
import { ArtefactPreview } from "../ui/ArtefactPreview";
import { TagList } from "../ui/TagList";
import { TiltCard } from "../ui/TiltCard";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TiltCard>
      <article className="project-card h-full">
        <Link className="project-card__preview" to={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
          <ArtefactPreview artefact={project.artefacts?.[0]} projectTitle={project.title} compact />
        </Link>
        <div className="project-card__body">
          <h3>
            <Link to={`/projects/${project.slug}`}>
              {project.title}
              {project.isAnonymised && <LockKeyhole className="inline-icon" size={16} aria-label="Anonymised" style={{ marginLeft: '8px', display: 'inline', color: 'var(--text-muted)' }} />}
            </Link>
          </h3>
          <p className="project-card__role">
            {project.role}
            {project.publicLabel && <span className="badge" style={{ marginLeft: '8px', fontSize: '0.75rem', padding: '2px 6px', background: 'var(--surface-muted)', borderRadius: '4px' }}>{project.publicLabel}</span>}
          </p>
          <p className="project-card__problem">{project.problem}</p>
          <TagList tags={project.tags.slice(0, 4)} variant="subtle" />
          <Link className="text-link" to={`/projects/${project.slug}`}>
            View Case Study
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </article>
    </TiltCard>
  );
}
