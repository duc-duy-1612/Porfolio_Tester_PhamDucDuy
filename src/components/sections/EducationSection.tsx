import { Award, GraduationCap } from "lucide-react";
import { awards, education } from "../../data/education";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

export function EducationSection() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="section-container">
        <SectionHeading eyebrow="Academic foundation" title="Education and Recognition" />
        <div className="education-grid">
          <FadeIn className="education-card">
            <GraduationCap aria-hidden="true" size={28} />
            <p className="eyebrow">{education.period}</p>
            <h3>{education.degree}</h3>
            <p>{education.university}</p>
            <dl className="education-card__facts">
              <div>
                <dt>Expected graduation</dt>
                <dd>{education.expectedGraduation}</dd>
              </div>
              <div>
                <dt>GPA</dt>
                <dd>{education.gpa}</dd>
              </div>
            </dl>
            <div className="coursework">
              {education.coursework.map((course) => (
                <span key={course}>{course}</span>
              ))}
            </div>
          </FadeIn>

          <div className="award-list">
            {awards.map((item, index) => (
              <FadeIn className="award-card" key={`${item.title}-${item.period}`} delay={index * 0.05}>
                <Award aria-hidden="true" size={24} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.period}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
