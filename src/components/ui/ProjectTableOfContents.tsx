import { useEffect, useState } from 'react';

export function ProjectTableOfContents() {
  const [sections, setSections] = useState<{ id: string; title: string }[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Small delay to ensure the DOM is fully rendered with project data
    const timeoutId = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll('section.case-study-block'));
      const sectionData = elements.map(el => {
        const heading = el.querySelector('h2');
        return {
          id: el.getAttribute('aria-labelledby') || el.id || '',
          title: heading?.textContent || 'Section'
        };
      }).filter(s => s.id && s.title);
      
      setSections(sectionData);

      if (sectionData.length > 0) {
        setActiveId(sectionData[0].id); // Default to first
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.getAttribute('aria-labelledby') || entry.target.id || '');
            }
          });
        },
        { rootMargin: '-10% 0px -80% 0px' }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  if (sections.length === 0) return null;

  return (
    <nav className="project-toc hidden lg:block sticky top-24 self-start max-h-[calc(100vh-8rem)] overflow-y-auto w-64 pr-4">
      <h4 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>Table of Contents</h4>
      <ul className="flex flex-col gap-1 border-l-2" style={{ borderColor: 'var(--border)' }}>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="block pl-4 py-1 text-sm transition-colors border-l-2 -ml-[2px]"
              style={
                activeId === section.id
                  ? { color: 'var(--primary)', borderColor: 'var(--primary)', fontWeight: 600 }
                  : { color: 'var(--text-secondary)', borderColor: 'transparent' }
              }
              onMouseEnter={(e) => {
                if (activeId !== section.id) {
                  e.currentTarget.style.color = 'var(--text)';
                  e.currentTarget.style.borderColor = 'var(--text-muted)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeId !== section.id) {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                setActiveId(section.id);
              }}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
