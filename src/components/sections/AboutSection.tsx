import { CheckCircle2, Target } from "lucide-react";
import { profile } from "../../data/profile";
import { withBasePath } from "../../utils/config";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="section-container">
        <SectionHeading eyebrow="Profile" title="About Me" />
        <div className="about-grid">
          <FadeIn className="about-copy">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {profile.careerObjective && (
              <div 
                className="career-objective"
                style={{ 
                  border: '1px solid rgba(59, 130, 246, 0.25)', 
                  background: 'rgba(30, 58, 138, 0.15)', 
                  borderRadius: '12px', 
                  padding: '20px', 
                  marginTop: '20px',
                  marginBottom: '20px'
                }}
              >
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                  <Target size={20} style={{ color: '#3b82f6' }} />
                  Career Objectives
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', whiteSpace: 'nowrap', marginTop: '2px' }}>Short-term</span>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>{profile.careerObjective.shortTerm}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', whiteSpace: 'nowrap', marginTop: '2px' }}>Long-term</span>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>{profile.careerObjective.longTerm}</p>
                  </div>
                </div>
              </div>
            )}
            <div className="principles" aria-label="How I work">
              {profile.workPrinciples.map((principle) => (
                <div className="principle-card" key={principle}>
                  <CheckCircle2 aria-hidden="true" size={20} />
                  <p>{principle}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="info-panel" delay={0.1}>
            {profile.contact.profileImage && profile.contact.profileImage !== "TODO_PROFILE_IMAGE" && (
              <img 
                src={withBasePath(profile.contact.profileImage)} 
                alt={`Portrait of ${profile.fullName}`} 
                loading="lazy"
                className="about-avatar" 
              />
            )}
            <dl>
              {profile.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
