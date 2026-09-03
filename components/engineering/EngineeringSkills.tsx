import { portfolioData } from "@/data/portfolio";

export function EngineeringSkills() {
  const { engineeringSkills } = portfolioData;

  return (
    <section id="engineering" className="relative w-full border-b border-[var(--color-rule)] bg-[var(--color-paper)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[var(--color-rule)] pb-4">
          <div>
            <span className="font-mono text-xs tracking-widest text-[var(--color-accent)] uppercase">
              02 // TOOLCHAINS & RUNTIMES
            </span>
            <h2 className="mt-1 font-sans text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              Engineering Matrix
            </h2>
          </div>
          <p className="mt-2 sm:mt-0 font-mono text-xs text-[var(--color-neutral)]">
            SYSTEM DOMAINS & CORE PROFICIENCIES
          </p>
        </div>

        {/* 6-Category Hairline Grid (No fake proficiency bars) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--color-rule)]">
          {engineeringSkills.map((category) => (
            <div
              key={category.code}
              className="border-r border-b border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 transition-colors hover:bg-[var(--color-paper-3)]"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between font-mono text-xs text-[var(--color-neutral)] border-b border-[var(--color-rule-subtle)] pb-2.5">
                <span className="font-semibold text-[var(--color-accent)]">{category.code}</span>
                <span>CLUSTER</span>
              </div>

              <h3 className="mt-3 font-mono text-sm font-bold tracking-wider text-[var(--color-ink)] uppercase">
                {category.title}
              </h3>

              {/* Skill Tags */}
              <ul className="mt-4 space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 font-mono text-xs text-[var(--color-muted)]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                    <span className="text-[var(--color-ink)] font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="mt-8 rounded border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-4 font-mono text-xs text-[var(--color-muted)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2 text-[var(--color-ink)]">
            <span className="text-[var(--color-accent)]">ℹ</span>
            <span>EVALUATION METHODOLOGY:</span>
            <span className="text-[var(--color-neutral)]">Practical system construction over arbitrary percentage bars.</span>
          </div>
          <span className="text-[var(--color-neutral)] text-[11px]">VERIFIED IN LAB & CI/CD RUNNERS</span>
        </div>
      </div>
    </section>
  );
}
