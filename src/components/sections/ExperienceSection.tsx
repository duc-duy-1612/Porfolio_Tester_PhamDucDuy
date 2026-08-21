import { BriefcaseBusiness, LockKeyhole } from "lucide-react";
import { experience } from "../../data/experience";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceSection() {
  return (
    <section className="section section--tinted" id="experience" aria-labelledby="experience-title">
      <div className="section-container">
        <SectionHeading eyebrow="Internship" title="Experience" />
        <FadeIn className="experience-card">
          <div className="experience-card__header">
            <div className="experience-icon" aria-hidden="true">
              <BriefcaseBusiness size={24} />
            </div>
            <div>
              <p className="eyebrow">{experience.domain}</p>
              <h3>{experience.position}</h3>
              <p>
                {experience.company} · {experience.period}
              </p>
            </div>
          </div>
          <p className="experience-summary">{experience.summary}</p>
          <div className="flex flex-col gap-4 w-full">
            {experience.capabilities.map((capability, index) => (
              <article className="capability-card w-full" key={capability.title}>
                <div className="text-xl font-bold text-[var(--primary)] mb-2">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h4>{capability.title}</h4>
                <ul>
                  {capability.items.map((item) => (
                    <li key={item} className="text-justify hyphens-auto">{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="confidentiality-note">
            <LockKeyhole aria-hidden="true" size={18} />
            {experience.confidentialityNote}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
