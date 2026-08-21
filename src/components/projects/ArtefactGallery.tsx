import { useState } from "react";
import type { Artefact } from "../../types/portfolio";
import { ArtefactPreview } from "../ui/ArtefactPreview";
import { ImageLightbox } from "../ui/ImageLightbox";

interface ArtefactGalleryProps {
  artefacts: Artefact[];
  projectTitle: string;
}

export function ArtefactGallery({ artefacts, projectTitle }: ArtefactGalleryProps) {
  const [selected, setSelected] = useState<Artefact | null>(null);

  return (
    <>
      <div className="artefact-gallery">
        {artefacts.map((artefact) => (
          <article className="artefact-card" key={artefact.title}>
            <button type="button" onClick={() => setSelected(artefact)} aria-label={`Open ${artefact.title}`}>
              <ArtefactPreview artefact={artefact} projectTitle={projectTitle} />
            </button>
            <div>
              <p className="eyebrow">{artefact.type}</p>
              <h3>{artefact.title}</h3>
              <p>{artefact.caption}</p>
            </div>
          </article>
        ))}
      </div>
      <ImageLightbox artefact={selected} projectTitle={projectTitle} onClose={() => setSelected(null)} />
    </>
  );
}
