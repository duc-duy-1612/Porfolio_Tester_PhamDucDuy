import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // Delay scroll slightly to allow Framer Motion exit animation to complete smoothly
    // so the old page doesn't snap to top before disappearing.
    const timeout = setTimeout(() => {
      if (!location.hash) {
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      const id = location.hash.slice(1);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 250); // Matches the exit animation duration

    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);
}

