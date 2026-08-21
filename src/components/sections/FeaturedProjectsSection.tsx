import { projects } from "../../data/projects";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../projects/ProjectCard";

export function FeaturedProjectsSection() {
  const internshipProjects = projects.filter(p => p.category === "internship" || p.slug === "wearable-health-data-integration" || p.slug === "homecare-workflow-mapping" || p.slug === "clinical-feature-catalogue");
  const otherProjects = projects.filter(p => p.category !== "internship" && p.slug !== "wearable-health-data-integration" && p.slug !== "homecare-workflow-mapping" && p.slug !== "clinical-feature-catalogue");

  return (
    <section className="section" id="case-studies" aria-labelledby="case-studies-title">
      <div className="section-container">
        <SectionHeading
          eyebrow="Evidence"
          title="Featured Case Studies"
          description="Selected internship deliverables and independent case studies showing how I approach workflows, requirements, data and solution design."
        />
        
        <h3 style={{ marginTop: '24px', marginBottom: '24px', fontSize: '1.5rem', fontWeight: 700 }}>SELECTED INTERNSHIP WORK</h3>
        <div className="project-grid">
          {internshipProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        <h3 style={{ marginTop: '48px', marginBottom: '24px', fontSize: '1.5rem', fontWeight: 700 }}>INDEPENDENT & ACADEMIC CASE STUDIES</h3>
        <div className="project-grid">
          {otherProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
