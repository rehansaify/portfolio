import { portfolioData } from "@/data/portfolio";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative w-full border-b border-[var(--color-rule)] bg-[var(--color-paper)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[var(--color-rule)] pb-4">
          <div>
            <span className="font-mono text-xs tracking-widest text-[var(--color-accent)] uppercase">
              03 // CHRONOLOGY
            </span>
            <h2 className="mt-1 font-sans text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              Experience
            </h2>
          </div>
          <p className="mt-2 sm:mt-0 font-mono text-xs text-[var(--color-neutral)]">
            INDUSTRY APPRENTICESHIP & ORGANIZATIONAL LEADERSHIP
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mt-10 space-y-8">
          {experience.map((item) => (
            <div
              key={item.id}
              className="border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 sm:p-8"
            >
              {/* Header metadata */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[var(--color-rule)] pb-4 gap-2">
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-ink)] sm:text-xl">
                    {item.role}
                  </h3>
                  <p className="font-mono text-xs text-[var(--color-accent)] mt-0.5">
                    {item.organization}
                    {item.location && <span className="text-[var(--color-neutral)]"> · {item.location}</span>}
                  </p>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[var(--color-neutral)]">
                  <span className="rounded border border-[var(--color-rule)] bg-[var(--color-paper)] px-2 py-0.5 text-[11px] text-[var(--color-ink)] font-semibold">
                    {item.period}
                  </span>
                  <span className="text-[10px] text-[var(--color-neutral)] uppercase tracking-wider">
                    [{item.type}]
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-5 space-y-2.5">
                {item.description.map((desc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)] leading-relaxed">
                    <span className="font-mono text-xs text-[var(--color-accent)] mt-0.5">❯</span>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-6 pt-4 border-t border-[var(--color-rule-subtle)] flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] text-[var(--color-neutral)] mr-1">
                  FOCUS:
                </span>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xs border border-[var(--color-rule)] bg-[var(--color-paper)] px-2 py-0.5 font-mono text-xs text-[var(--color-ink)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
