import { skillGroups } from "../../data/skills";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";
import { Figma, Database, Workflow, Send, FileText, CheckCircle2, Trello, Code2, PenTool } from "lucide-react";

const getSkillIcon = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes('figma')) return <Figma size={16} />;
  if (s.includes('sql') || s.includes('database')) return <Database size={16} />;
  if (s.includes('draw.io') || s.includes('bpmn') || s.includes('process')) return <Workflow size={16} />;
  if (s.includes('postman') || s.includes('api')) return <Send size={16} />;
  if (s.includes('jira')) return <Trello size={16} />;
  if (s.includes('confluence') || s.includes('document')) return <FileText size={16} />;
  if (s.includes('html') || s.includes('css') || s.includes('javascript') || s.includes('react')) return <Code2 size={16} />;
  if (s.includes('wireframe') || s.includes('mockup')) return <PenTool size={16} />;
  return null; // Return null if no specific icon
};

export function SkillsSection() {
  return (
    <section className="section section--tinted" id="skills" aria-labelledby="skills-title">
      <div className="section-container">
        <SectionHeading eyebrow="Capability map" title="Skills and Capabilities" />
        <div className="flex flex-col gap-4 w-full">
          {skillGroups.map((group, index) => (
            <FadeIn className="skill-card w-full" key={group.title} delay={index * 0.05}>
              <h3>{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    {getSkillIcon(skill)}
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
