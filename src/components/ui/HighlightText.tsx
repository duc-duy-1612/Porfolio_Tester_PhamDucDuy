import React, { useMemo } from 'react';

interface HighlightTextProps {
  text: string;
  keywords?: string[];
  className?: string;
}

const DEFAULT_KEYWORDS = [
  "BPMN", "UML", "Agile", "Scrum", "API", "SQL", "Figma", "Jira", 
  "Data Analysis", "User Stories", "Acceptance Criteria", 
  "System Design", "Healthcare", "E-commerce", "Confluence", "Postman",
  "Draw.io", "Process Flow", "Data Integrity", "Traceability",
  "UAT", "Unit Test", "Integration Test", "SDLC", "Wireframe",
  "Requirement", "Functional", "Non-functional", "Mockup"
];

export function HighlightText({ text, keywords = DEFAULT_KEYWORDS, className = "" }: HighlightTextProps) {
  const parts = useMemo(() => {
    if (!text || keywords.length === 0) return [{ text, highlight: false }];
    
    // Sort keywords by length descending to match longer phrases first
    const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
    const escapedKeywords = sortedKeywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    // Use a non-capturing group (?:...) around the joined keywords 
    // so that the optional 's?' applies to ALL of them.
    const regex = new RegExp(`\\b((?:${escapedKeywords.join('|')})s?)\\b`, 'gi');
    
    const splitText = text.split(regex);
    const result = [];
    
    for (let i = 0; i < splitText.length; i++) {
      const part = splitText[i];
      if (!part) continue;
      
      const isHighlight = sortedKeywords.some(
        keyword => {
          const lowerK = keyword.toLowerCase();
          const lowerP = part.toLowerCase();
          return lowerP === lowerK || lowerP === lowerK + 's';
        }
      );
      
      result.push({ text: part, highlight: isHighlight });
    }
    
    return result;
  }, [text, keywords]);

  return (
    <span className={className}>
      {parts.map((part, i) => (
        part.highlight ? (
          <strong key={i} style={{ color: 'var(--primary)', fontWeight: 600 }}>
            {part.text}
          </strong>
        ) : (
          <React.Fragment key={i}>{part.text}</React.Fragment>
        )
      ))}
    </span>
  );
}
