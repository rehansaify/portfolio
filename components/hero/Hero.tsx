import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { identity, contact } = portfolioData;

  return (
    <section className="relative w-full border-b border-[var(--color-rule)] bg-[var(--color-paper)] pt-12 pb-16 sm:pt-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Terminal Header Telemetry */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-rule-subtle)] pb-4 font-mono text-[11px] text-[var(--color-neutral)]">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-status-active)]" />
            <span className="text-[var(--color-ink)] font-medium">SYS_STATUS:</span>
            <span>{identity.statusIndicator}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>LOC: {identity.location}</span>
            <span>STACK: LINUX // CLOUD // SDET</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Core Positioning & Identity */}
          <div className="lg:col-span-8">
            <p className="font-mono text-xs tracking-widest text-[var(--color-accent)] uppercase">
              ENGINEERING PORTFOLIO // 2026
            </p>

            <h1 className="mt-3 font-sans text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              {identity.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-baseline gap-2 sm:gap-3">
              <span className="font-mono text-lg font-semibold text-[var(--color-ink)] sm:text-xl">
                {identity.headlineRole}
              </span>
              <span className="font-mono text-sm text-[var(--color-neutral)]">
                /
              </span>
              <span className="font-mono text-sm font-normal text-[var(--color-muted)] sm:text-base">
                {identity.subRole}
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              {identity.statement}
            </p>

            {/* Target Alignment Note */}
            <div className="mt-4 max-w-2xl border-l-2 border-[var(--color-rule)] pl-3 text-xs leading-relaxed text-[var(--color-neutral)] font-mono">
              Evaluated for internships & entry-level engineering roles across Cloud, DevOps, SDET, Platform, and Device Quality.
            </div>

            {/* Primary Action Buttons (Hallmark 8-state compliant) */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#systems"
                className="btn-terminal-primary"
              >
                <span>View Work</span>
                <span className="text-xs">↓</span>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terminal"
              >
                <span>GitHub</span>
                <span className="text-xs">↗</span>
              </a>

              <a
                href={contact.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terminal"
              >
                <span>Resume</span>
                <span className="text-xs">↗</span>
              </a>

              <a
                href="#contact"
                className="btn-terminal"
              >
                <span>Contact</span>
                <span className="text-xs">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Systems Telemetry Spec Panel */}
          <div className="lg:col-span-4">
            <div className="rounded border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-4 font-mono text-xs text-[var(--color-muted)]">
              <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-2.5">
                <span className="text-[var(--color-accent)] font-semibold">
                  SPEC_MANIFEST.JSON
                </span>
                <span className="text-[10px] text-[var(--color-neutral)]">
                  VER: 1.0.4
                </span>
              </div>

              <dl className="mt-3 space-y-2.5 text-[11px]">
                <div className="flex justify-between">
                  <dt className="text-[var(--color-neutral)]">PRIMARY FOCUS</dt>
                  <dd className="text-[var(--color-ink)] font-medium">Cloud / DevOps & SDET</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--color-neutral)]">CORE RUNTIME</dt>
                  <dd className="text-[var(--color-ink)]">Linux · Docker · Python</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--color-neutral)]">CI / PIPELINES</dt>
                  <dd className="text-[var(--color-ink)]">GitHub Actions · Pytest</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--color-neutral)]">NETWORKING</dt>
                  <dd className="text-[var(--color-ink)]">WireGuard · REST · Cloudflare</dd>
                </div>
                <div className="flex justify-between border-t border-[var(--color-rule-subtle)] pt-2">
                  <dt className="text-[var(--color-neutral)]">TARGET ROLES</dt>
                  <dd className="text-[var(--color-accent)]">Intern / Entry SWE · SDET</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
