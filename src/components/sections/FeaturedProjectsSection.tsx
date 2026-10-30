import { projects } from "../../data/projects";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../projects/ProjectCard";

export function FeaturedProjectsSection() {
  const qaAutomationProject = projects.find(p => p.slug === "web-functional-testing");
  const internshipProjects = projects.filter(p => p.category === "internship" || p.slug === "wearable-health-data-integration" || p.slug === "homecare-workflow-mapping" || p.slug === "clinical-feature-catalogue");
  const otherProjects = projects.filter(p => p.slug === "online-food-delivery-system");

  return (
    <section className="section" id="case-studies" aria-labelledby="case-studies-title">
      <div className="section-container">
        <SectionHeading
          eyebrow="Evidence"
          title="Featured Case Studies"
          description="Selected testing projects, automation suites, and QA case studies demonstrating hands-on test design, defect reporting, and requirement validation."
        />
        
        {qaAutomationProject && (
          <div style={{ marginTop: '32px' }}>
            <h3 style={{ marginBottom: '24px', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              FEATURED QA & AUTOMATION CASE STUDY
            </h3>
            <div className="project-grid">
              <FadeIn delay={0.05}>
                <ProjectCard project={qaAutomationProject} />
              </FadeIn>
            </div>
          </div>
        )}

        <h3 style={{ marginTop: '48px', marginBottom: '24px', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          INTERNSHIP QA & INTEGRATION TESTING (TMA SOLUTIONS)
        </h3>
        <div className="project-grid">
          {internshipProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <h3 style={{ marginTop: '48px', marginBottom: '24px', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              REQUIREMENT ANALYSIS & UAT VALIDATION
            </h3>
            <div className="project-grid">
              {otherProjects.map((project, index) => (
                <FadeIn key={project.slug} delay={index * 0.05}>
                  <ProjectCard project={project} />
                </FadeIn>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
