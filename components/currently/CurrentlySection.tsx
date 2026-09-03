import { portfolioData } from "@/data/portfolio";

export function CurrentlySection() {
  const { currently } = portfolioData;

  const getTrackColor = (track: string) => {
    switch (track) {
      case "LEARNING":
        return "text-[var(--color-status-prod)] border-[var(--color-status-prod)]/40";
      case "BUILDING":
        return "text-[var(--color-accent)] border-[var(--color-accent)]/40";
      case "EXPLORING":
      default:
        return "text-[var(--color-status-active)] border-[var(--color-status-active)]/40";
    }
  };

  return (
    <section id="currently" className="relative w-full border-b border-[var(--color-rule)] bg-[var(--color-paper)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[var(--color-rule)] pb-4">
          <div>
            <span className="font-mono text-xs tracking-widest text-[var(--color-accent)] uppercase">
              04 // TELEMETRY
            </span>
            <h2 className="mt-1 font-sans text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              Currently
            </h2>
          </div>
          <p className="mt-2 sm:mt-0 font-mono text-xs text-[var(--color-neutral)]">
            ACTIVE ENGINEERING PIPELINE & WORK IN PROGRESS
          </p>
        </div>

        {/* 3-Column Radar Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {currently.map((block) => (
            <div
              key={block.track}
              className="border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6"
            >
              {/* Top Track Identifier */}
              <div className="flex items-center justify-between border-b border-[var(--color-rule-subtle)] pb-3 font-mono text-xs">
                <span className={`font-bold tracking-wider ${getTrackColor(block.track)}`}>
                  [{block.track}]
                </span>
                <span className="text-[10px] text-[var(--color-neutral)]">
                  {block.label}
                </span>
              </div>

              {/* Items List */}
              <ul className="mt-5 space-y-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 font-mono text-xs text-[var(--color-ink)]"
                  >
                    <span className="text-[var(--color-accent)]">❯</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
