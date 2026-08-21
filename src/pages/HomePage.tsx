import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { EducationSection } from "../components/sections/EducationSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { FeaturedProjectsSection } from "../components/sections/FeaturedProjectsSection";
import { HeroSection } from "../components/sections/HeroSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { profile } from "../data/profile";
import { useSEO } from "../hooks/useSEO";
import { optionalUrl } from "../utils/config";


export function HomePage() {
  useSEO({
    title: "Phạm Đức Duy | Fresher IT Business Analyst",
    description:
      "Portfolio of Phạm Đức Duy, a Fresher IT Business Analyst with healthcare product experience, technical foundations and case studies in requirement analysis, process modelling, data mapping and system design.",
    canonical: optionalUrl(profile.contact.canonicalUrl),
    ogImage: optionalUrl(profile.contact.ogImage),
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.fullName,
      jobTitle: profile.role,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ho Chi Minh City",
        addressCountry: "VN",
      },
      alumniOf: "Ho Chi Minh City University of Technology",
      description: profile.positioning,
    },
  });

  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
