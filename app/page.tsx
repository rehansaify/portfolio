import { CommandNav } from "@/components/nav/CommandNav";
import { Hero } from "@/components/hero/Hero";
import { SelectedSystems } from "@/components/systems/SelectedSystems";
import { EngineeringSkills } from "@/components/engineering/EngineeringSkills";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { CurrentlySection } from "@/components/currently/CurrentlySection";
import { ContactSection } from "@/components/contact/ContactSection";
import { ColophonFooter } from "@/components/footer/ColophonFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-black">
      {/* Hallmark N13: Inline ⌘K Command Navigation */}
      <CommandNav />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Selected Systems (Workbench Macrostructure) */}
        <SelectedSystems />

        {/* Section 3: Engineering Matrix */}
        <EngineeringSkills />

        {/* Section 4: Experience Chronology */}
        <ExperienceSection />

        {/* Section 5: Currently Active Pipelines */}
        <CurrentlySection />

        {/* Section 6: Direct Contact / Dispatch */}
        <ContactSection />
      </main>

      {/* Hallmark Ft1: Colophon Masthead Footer */}
      <ColophonFooter />
    </div>
  );
}
