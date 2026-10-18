import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ArenaSection } from "@/components/sections/ArenaSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <ArenaSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
