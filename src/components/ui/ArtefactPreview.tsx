import { useState } from "react";
import type { Artefact } from "../../types/portfolio";

interface ArtefactPreviewProps {
  artefact?: Artefact;
  projectTitle: string;
  compact?: boolean;
}

export function ArtefactPreview({ artefact, projectTitle, compact = false }: ArtefactPreviewProps) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!artefact) return null;

  if (artefact.image && !imageFailed) {
    return (
      <img
        className="artefact-preview__image"
        src={artefact.image}
        alt={artefact.alt ?? `${projectTitle} - ${artefact.title}`}
        loading="lazy"
        onError={() => setImageFailed(true)}
      />
    );
  }

  return (
    <div className={`diagram-preview ${compact ? "diagram-preview--compact" : ""}`}>
      <div className="diagram-preview__topline">
        <span>{artefact.type}</span>
        <span>{projectTitle}</span>
      </div>
      <div className="diagram-preview__canvas" aria-hidden="true">
        <span className="diagram-node diagram-node--primary" />
        <span className="diagram-line diagram-line--one" />
        <span className="diagram-node diagram-node--accent" />
        <span className="diagram-line diagram-line--two" />
        <span className="diagram-node" />
        <span className="diagram-lane diagram-lane--one" />
        <span className="diagram-lane diagram-lane--two" />
        <span className="diagram-lane diagram-lane--three" />
      </div>
      <div className="diagram-preview__label">
        <strong>{artefact.title}</strong>
        <span>{artefact.caption}</span>
      </div>
    </div>
  );
}
