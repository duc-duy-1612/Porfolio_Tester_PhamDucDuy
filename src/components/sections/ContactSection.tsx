import { ArrowRight, Github, Linkedin } from "lucide-react";
import { profile } from "../../data/profile";
import { isConfigured, mailto, optionalUrl, withBasePath } from "../../utils/config";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";
import { ContactForm } from "../ui/ContactForm";

export function ContactSection() {
  const email = isConfigured(profile.contact.email) ? profile.contact.email : undefined;
  const emailHref = mailto(profile.contact.email);
  const linkedin = optionalUrl(profile.contact.linkedin);
  const github = optionalUrl(profile.contact.github);
  const resumeHref = withBasePath(optionalUrl(profile.contact.resumeFile));
  const hasLinks = Boolean(emailHref || linkedin || github || resumeHref);

  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="section-container">
        <SectionHeading eyebrow="Contact" title="Let's Connect" />
        <FadeIn className="contact-panel grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <div className="contact-panel__copy flex flex-col justify-between">
            <div>
              <h3>Looking for a Fresher IT Business Analyst who can bridge business and technology?</h3>
              <p>
                I am open to opportunities where I can contribute to requirement analysis, process improvement,
                product delivery and cross-functional collaboration.
              </p>
              <div style={{ marginTop: '16px', color: 'var(--text-muted)' }}>
                {email && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 800 }}>Email:</span> <a href={emailHref} style={{ color: 'inherit', textDecoration: 'none' }}>{email}</a>
                  </div>
                )}
                {isConfigured(profile.contact.phone) && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 800 }}>Phone:</span> {profile.contact.phone}
                  </div>
                )}
                {isConfigured(profile.location) && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: 800 }}>Location:</span> {profile.location}
                  </div>
                )}
              </div>
            </div>

            {hasLinks ? (
              <div className="flex flex-wrap gap-4 mt-8" aria-label="Contact actions">
                {linkedin ? (
                  <a className="button button--secondary" href={linkedin} target="_blank" rel="noreferrer">
                    <Linkedin aria-hidden="true" size={18} />
                    LinkedIn
                  </a>
                ) : null}
                {github ? (
                  <a className="button button--secondary" href={github} target="_blank" rel="noreferrer">
                    <Github aria-hidden="true" size={18} />
                    GitHub
                  </a>
                ) : null}
                {resumeHref ? (
                  <a href={resumeHref} target="_blank" rel="noopener noreferrer" className="button button--primary flex items-center gap-2">
                    View CV <ArrowRight size={18} />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="w-full">
            <ContactForm />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
