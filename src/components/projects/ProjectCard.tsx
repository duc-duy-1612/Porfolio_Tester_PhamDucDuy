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
  const isFeatured = project.slug === "web-functional-testing";

  return (
    <TiltCard>
      <article className={`project-card h-full ${isFeatured ? "project-card--featured" : ""}`}>
        {isFeatured && (
          <div className="cyber-radar-scan" aria-hidden="true">
            <div className="cyber-scanline" />
          </div>
        )}
        <Link className="project-card__preview" to={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
          <ArtefactPreview artefact={project.artefacts?.[0]} projectTitle={project.title} compact />
        </Link>
        <div className="project-card__body">
          <div className="project-card__topline">
            {isFeatured && (
              <span className="badge badge--highlight">
                <span className="radar-pulse-dot" />
                ⭐ Featured QA Case Study
              </span>
            )}
            {project.publicLabel && <span className="badge badge--label">{project.publicLabel}</span>}
          </div>
          <h3>
            <Link to={`/projects/${project.slug}`}>
              {project.title}
              {project.isAnonymised && <LockKeyhole className="inline-icon" size={16} aria-label="Anonymised" style={{ marginLeft: '8px', display: 'inline', color: 'var(--text-muted)' }} />}
            </Link>
          </h3>
          <p className="project-card__role">
            {project.role}
          </p>
          <p className="project-card__problem">{project.problem}</p>

          {project.summaryMetrics && project.summaryMetrics.length > 0 && (
            <div className="project-card__metrics" aria-label="Key project metrics">
              {project.summaryMetrics.slice(0, 3).map((metric, idx) => (
                <div key={idx} className="metric-pill">
                  <span className="metric-pill__value">{metric.value}</span>
                  <span className="metric-pill__label">{metric.label}</span>
                </div>
              ))}
            </div>
          )}

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
