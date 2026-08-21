import { ArrowRight, Download, Mail, ShieldCheck } from "lucide-react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { optionalUrl, withBasePath } from "../../utils/config";
import { FadeIn } from "../ui/FadeIn";
import { InitialsAvatar } from "../ui/InitialsAvatar";

const workspaceCards = [
  { title: "User Stories & Acceptance Criteria", desc: "Structured 340+ features and defined meticulous acceptance criteria for complex healthcare and e-commerce systems." },
  { title: "BPMN / Process Flow", desc: "Modelled cross-system swimlanes, AS-IS/TO-BE workflows, and user journeys bridging business needs and technical logic." },
  { title: "Integration Flow", desc: "Analysed API hand-offs, asynchronous data synchronisation, and third-party vendor integrations (e.g., Wearables, Payment)." },
  { title: "UAT & Validation", desc: "Designed positive, negative, and edge-case test scenarios, utilizing Selenium IDE for functional automation testing." },
  { title: "Case Study Preview", desc: "Explore my detailed academic and anonymised internship deliverables showcasing end-to-end Business Analysis." },
];

export function HeroSection() {
  const resumeHref = withBasePath(optionalUrl(profile.contact.resumeFile));
  const profileImage = withBasePath(optionalUrl(profile.contact.profileImage));

  return (
    <section className="hero-section section" id="hero" aria-labelledby="hero-title">
      <div className="section-container hero-grid">
        <FadeIn className="hero-copy">
          <p className="eyebrow">{profile.heroEyebrow}</p>
          <div className="status-badge">
            <ShieldCheck aria-hidden="true" size={18} />
            {profile.status}
          </div>
          <h1 id="hero-title">{profile.heroHeadline}</h1>
          <p className="hero-supporting">{profile.heroSupportingHeadline}</p>
          <p className="hero-description">{profile.heroDescription}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <Link className="button button--primary" to="/#case-studies">
              View Case Studies
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            {resumeHref && (
              <a 
                className="button button--secondary" 
                href={resumeHref} 
                download
                onClick={() => {
                  // TODO: Add real analytics tracking here (e.g. Google Analytics)
                  console.log("Resume downloaded!");
                }}
              >
                <Download aria-hidden="true" size={18} />
                Download Resume
              </a>
            )}
            {(optionalUrl(profile.contact.email) || optionalUrl(profile.contact.linkedin)) && (
              <Link className="button button--ghost" to="/#contact">
                <Mail aria-hidden="true" size={18} />
                Contact Me
              </Link>
            )}
          </div>
          <ul className="credibility-list" aria-label="Quick credibility indicators">
            {profile.credibility.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn className="hero-visual" delay={0.1}>
          <div className="workspace-card workspace-card--profile">
            <InitialsAvatar initials={profile.initials} name={profile.fullName} />
            <div>
              <strong>{profile.fullName}</strong>
              <span>{profile.positioning}</span>
            </div>
          </div>

          <div className="workspace-stack flex sm:grid overflow-x-auto sm:overflow-visible snap-x pb-4 sm:pb-0" aria-label="Business Analyst workspace preview">
            {workspaceCards.map((card, index) => (
              <a
                href="#case-studies"
                className="workspace-card shrink-0 w-[85%] sm:w-auto snap-center hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer block no-underline"
                key={card.title}
                style={{ "--card-index": index } as CSSProperties}
              >
                <span className="workspace-card__number">0{index + 1}</span>
                <strong>{card.title}</strong>
                <p className="text-sm mt-2 opacity-80 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </a>
            ))}
          </div>

          <div className="flex items-center w-full max-w-2xl mt-8 text-sm font-semibold text-gray-400">
            <span className="shrink-0 hover:text-blue-400 transition-colors">Problem</span>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-900 to-blue-500 mx-4"></div>
            <span className="shrink-0 hover:text-blue-400 transition-colors">Analysis</span>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500 to-blue-900 mx-4"></div>
            <span className="shrink-0 hover:text-blue-400 transition-colors">Solution</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


