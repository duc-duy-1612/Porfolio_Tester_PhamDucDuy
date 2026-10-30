import { ArrowRight, Check, Copy, Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "../../data/profile";
import { isConfigured, mailto, optionalUrl, withBasePath } from "../../utils/config";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";
import { ContactForm } from "../ui/ContactForm";

export function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const copyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleCopy = (text: string, key: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = window.setTimeout(() => {
        setCopiedKey(null);
      }, 2000);
    }
  };

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
              <h3>Looking for a Fresher Software Tester / QA with strong testing acumen?</h3>
              <p>
                I am open to opportunities where I can contribute to manual testing, test automation,
                requirement analysis, and defect reporting in Agile/Scrum teams.
              </p>
              <div style={{ marginTop: '16px', color: 'var(--text-muted)' }}>
                {email && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 800 }}>Email:</span>{" "}
                    <a href={emailHref} style={{ color: 'inherit', textDecoration: 'none' }}>{email}</a>
                    <button 
                      type="button"
                      onClick={() => handleCopy(email, 'email')}
                      aria-label="Copy email address"
                      className="copy-btn"
                      title={copiedKey === 'email' ? 'Copied!' : 'Copy to clipboard'}
                    >
                      {copiedKey === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      {copiedKey === 'email' && <span className="copied-tooltip">Copied!</span>}
                    </button>
                  </div>
                )}
                {isConfigured(profile.contact.phone) && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 800 }}>Phone:</span>{" "}
                    <a href={`tel:${profile.contact.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {profile.contact.phone}
                    </a>
                    <button 
                      type="button"
                      onClick={() => handleCopy(profile.contact.phone!, 'phone')}
                      aria-label="Copy phone number"
                      className="copy-btn"
                      title={copiedKey === 'phone' ? 'Copied!' : 'Copy to clipboard'}
                    >
                      {copiedKey === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      {copiedKey === 'phone' && <span className="copied-tooltip">Copied!</span>}
                    </button>
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
