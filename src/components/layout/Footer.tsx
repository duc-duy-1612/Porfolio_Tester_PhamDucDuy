import { ArrowUp, Github, Linkedin } from "lucide-react";
import { profile } from "../../data/profile";
import { optionalUrl } from "../../utils/config";

export function Footer() {
  const linkedin = optionalUrl(profile.contact.linkedin);
  const github = optionalUrl(profile.contact.github);

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          Designed and developed as a case-study-driven Business Analyst portfolio. ©{" "}
          {new Date().getFullYear()} {profile.fullName}.
        </p>
        <div className="site-footer__links">
          {linkedin ? (
            <a href={linkedin} aria-label="LinkedIn profile" target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" size={18} />
              LinkedIn
            </a>
          ) : null}
          {github ? (
            <a href={github} aria-label="GitHub profile" target="_blank" rel="noreferrer">
              <Github aria-hidden="true" size={18} />
              GitHub
            </a>
          ) : null}
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <ArrowUp aria-hidden="true" size={18} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
