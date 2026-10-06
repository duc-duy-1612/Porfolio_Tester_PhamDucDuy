import { Download, Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../../data/profile";
import { useActiveSection } from "../../hooks/useActiveSection";
import { optionalUrl, withBasePath } from "../../utils/config";
import { MagneticButton } from "../ui/MagneticButton";

interface HeaderProps {}

const sectionIds = ["hero", "about", "experience", "case-studies", "skills", "education", "contact"];

const navItems = [
  { label: "Home", href: "/#hero", section: "hero" },
  { label: "About", href: "/#about", section: "about" },
  { label: "Experience", href: "/#experience", section: "experience" },
  { label: "Case Studies", href: "/#case-studies", section: "case-studies" },
  { label: "Skills", href: "/#skills", section: "skills" },
  { label: "Education", href: "/#education", section: "education" },
  { label: "Contact", href: "/#contact", section: "contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const activeSection = useActiveSection(sectionIds);
  const menuId = useId();
  const resumeHref = withBasePath(optionalUrl(profile.contact.resumeFile));
  const isHome = location.pathname === "/";

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" to="/#hero" aria-label="Go to homepage">
          <span>
            <strong>{profile.fullName}</strong>
            <small>{profile.role}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.section}
              to={item.href}
              className={isHome && activeSection === item.section ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
          {resumeHref && (
            <MagneticButton href={resumeHref} download className="nav-cta">
              <Download aria-hidden="true" size={16} />
              Download CV
            </MagneticButton>
          )}
        </nav>

        <div className="site-header__actions">
          {/* Theme toggle removed */}
          <button
            className="icon-button mobile-menu-button"
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls={menuId}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </div>

        {isOpen && (
          <div className="mobile-nav mobile-nav--open" id={menuId}>
            <nav aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.section}
                  to={item.href}
                  className={isHome && activeSection === item.section ? "active" : ""}
                >
                  {item.label}
                </Link>
              ))}
              {resumeHref && (
                <MagneticButton href={resumeHref} download className="nav-cta">
                  <Download aria-hidden="true" size={16} />
                  Download CV
                </MagneticButton>
              )}
            </nav>
          </div>
        )}
    </header>
  );
}
