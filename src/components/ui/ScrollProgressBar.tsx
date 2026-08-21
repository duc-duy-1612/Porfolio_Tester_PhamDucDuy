import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (windowHeight === 0) {
        setScrollProgress(0);
        return;
      }
      
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (scrollProgress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-blue-600 z-[9999] transition-all duration-75 ease-out shadow-sm shadow-blue-500/50"
      style={{ width: `${scrollProgress * 100}%` }}
      aria-hidden="true"
    />
  );
}
