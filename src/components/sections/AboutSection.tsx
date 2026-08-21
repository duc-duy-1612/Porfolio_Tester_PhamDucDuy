import { CheckCircle2 } from "lucide-react";
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
                alt={profile.fullName} 
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
