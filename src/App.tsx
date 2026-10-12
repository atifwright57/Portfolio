import { ArchitectureSection, AboutSection, ExperienceSection, ProjectsSection, SkillsSection } from "./components/PortfolioSections";
import { ContactSection, Footer } from "./components/ContactFooter";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArchitectureSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
