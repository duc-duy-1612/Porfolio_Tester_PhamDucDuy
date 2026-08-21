import { X, ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

interface LightboxImageProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function LightboxImage({ src, alt, isOpen, onClose }: LightboxImageProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Reset state when opening/closing
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    // Prevent default to stop text selection while dragging
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const zoomSensitivity = 0.005;
    const newScale = scale - e.deltaY * zoomSensitivity;
    setScale(Math.max(0.5, Math.min(newScale, 5)));
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center touch-none"
            onWheel={handleWheel}
          >
            {/* Toolbar */}
            <div className="absolute top-4 right-4 z-10 flex gap-4">
              <button
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                onClick={() => setScale((s) => Math.min(s + 0.5, 5))}
                aria-label="Zoom in"
              >
                <ZoomIn size={24} />
              </button>
              <button
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                onClick={() => setScale((s) => Math.max(s - 0.5, 0.5))}
                aria-label="Zoom out"
              >
                <ZoomOut size={24} />
              </button>
              <button
                className="p-2 bg-red-500/80 hover:bg-red-500 rounded-full text-white transition-colors ml-4"
                onClick={onClose}
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            {/* Instruction */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm pointer-events-none">
              Scroll to zoom • Click and drag to pan
            </div>

            {/* Draggable/Zoomable Image */}
            <div
              className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                draggable={false}
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  transition: isDragging ? "none" : "transform 0.1s ease-out",
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  objectFit: "contain",
                }}
                className="select-none pointer-events-none"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
