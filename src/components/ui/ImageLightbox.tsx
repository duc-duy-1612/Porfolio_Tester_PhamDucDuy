import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Artefact } from "../../types/portfolio";
import { ArtefactPreview } from "./ArtefactPreview";

interface ImageLightboxProps {
  artefact: Artefact | null;
  projectTitle: string;
  onClose: () => void;
}

export function ImageLightbox({ artefact, projectTitle, onClose }: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!artefact) {
      return;
    }

    const previousActiveElement = document.activeElement as HTMLElement | null;
    document.body.classList.add("body-lock");
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((element) => !element.hasAttribute("disabled"));

        if (!focusable.length) {
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("body-lock");
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [artefact, onClose]);

  if (!artefact) {
    return null;
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      ref={dialogRef}
    >
      <button className="lightbox__backdrop" type="button" aria-label="Close preview" onClick={onClose} />
      <div className="lightbox__panel">
        <div className="lightbox__header">
          <div>
            <p className="eyebrow">{artefact.type}</p>
            <h2 id="lightbox-title">{artefact.title}</h2>
          </div>
          <button ref={closeButtonRef} className="icon-button" type="button" onClick={onClose} aria-label="Close preview">
            <X aria-hidden="true" size={20} />
          </button>
        </div>
        <ArtefactPreview artefact={artefact} projectTitle={projectTitle} />
        <p className="lightbox__caption">{artefact.caption}</p>
      </div>
    </div>
  );
}
