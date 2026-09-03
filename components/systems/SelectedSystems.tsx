import { portfolioData, type ProjectSystem } from "@/data/portfolio";

export function SelectedSystems() {
  const { systems } = portfolioData;

  const getStatusBadge = (status: ProjectSystem["status"]) => {
    switch (status) {
      case "PRODUCTION":
        return "border-[var(--color-status-prod)]/50 text-[var(--color-status-prod)] bg-[var(--color-status-prod)]/10";
      case "RESEARCH":
        return "border-[var(--color-status-research)]/50 text-[var(--color-status-research)] bg-[var(--color-status-research)]/10";
      case "ACTIVE":
      default:
        return "border-[var(--color-status-active)]/50 text-[var(--color-status-active)] bg-[var(--color-status-active)]/10";
    }
  };

  return (
    <section id="systems" className="relative w-full border-b border-[var(--color-rule)] bg-[var(--color-paper)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[var(--color-rule)] pb-4">
          <div>
            <span className="font-mono text-xs tracking-widest text-[var(--color-accent)] uppercase">
              01 // WORKBENCH
            </span>
            <h2 className="mt-1 font-sans text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              Selected Systems
            </h2>
          </div>
          <p className="mt-2 sm:mt-0 font-mono text-xs text-[var(--color-neutral)]">
            ARCHITECTURAL SCHEMATICS & TESTBEDS [TOTAL: 4]
          </p>
        </div>

        {/* Workbench Layout: Asymmetric, system-specific editorial presentations */}
        <div className="mt-12 space-y-12">
          {/* SYSTEM 01: Android Device Harness (Lead Workbench View) */}
          {systems[0] && (
            <article className="border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 sm:p-8">
              {/* Telemetry Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-rule)] pb-4 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[var(--color-accent)]">{systems[0].code}</span>
                  <span className="text-[var(--color-rule)]">|</span>
                  <span className="text-[var(--color-neutral)]">{systems[0].category}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`rounded px-2 py-0.5 text-[10px] font-semibold border ${getStatusBadge(systems[0].status)}`}>
                    {systems[0].status}
                  </span>
                  <span className="text-[var(--color-neutral)]">YEAR: {systems[0].year}</span>
                </div>
              </div>

              {/* Main Diptych Grid */}
              <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-xl font-bold text-[var(--color-ink)] sm:text-2xl">
                    {systems[0].name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {systems[0].description}
                  </p>

                  <div className="pt-2">
                    <p className="font-mono text-xs font-semibold text-[var(--color-ink)] uppercase">
                      Problem & Architectural Challenge:
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted)]">
                      Physical and virtual Android testbeds frequently enter unrecoverable hung states during continuous CI/CD test runs. This framework provisions autonomous device health diagnostics, connection pooling, and automated daemon reboot routines to maintain continuous test availability.
                    </p>
                  </div>

                  {/* Stack Badges */}
                  <div className="pt-2">
                    <p className="font-mono text-[11px] text-[var(--color-neutral)] uppercase tracking-wider mb-2">
                      Core Stack:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {systems[0].stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-xs border border-[var(--color-rule)] bg-[var(--color-paper)] px-2.5 py-1 font-mono text-xs text-[var(--color-ink)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Repos */}
                  <div className="pt-4 flex items-center gap-3">
                    {systems[0].repoUrl ? (
                      <a
                        href={systems[0].repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-terminal"
                      >
                        <span>View Repository</span>
                        <span className="text-xs">↗</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-neutral)] border border-dashed border-[var(--color-rule)] px-3 py-1.5 rounded-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-neutral)]" />
                        Codebase: Private / Config in data/portfolio.ts
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Side: Execution Telemetry Box */}
                <div className="lg:col-span-6 rounded border border-[var(--color-rule)] bg-[var(--color-paper)] p-4 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-2 text-[11px] text-[var(--color-neutral)]">
                    <span>EXECUTION_PIPELINE // HARNESS</span>
                    <span className="text-[var(--color-accent)]">DAEMON_VERIFIED</span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="rounded border border-[var(--color-rule-subtle)] bg-[var(--color-paper-2)] p-3">
                      <div className="text-[11px] font-semibold text-[var(--color-accent)]">
                        PHASE 01: ADB POOL DISCOVERY
                      </div>
                      <p className="mt-1 text-[11px] text-[var(--color-muted)] leading-relaxed">
                        Polls local and networked ADB endpoints, serializes device properties, and isolates degraded hardware states.
                      </p>
                    </div>

                    <div className="rounded border border-[var(--color-rule-subtle)] bg-[var(--color-paper-2)] p-3">
                      <div className="text-[11px] font-semibold text-[var(--color-status-active)]">
                        PHASE 02: RECOVERY & HEALTH PROTOCOL
                      </div>
                      <p className="mt-1 text-[11px] text-[var(--color-muted)] leading-relaxed">
                        Executes automated ADB server restarts, USB bus resets, and package caches purge without requiring manual device unplugs.
                      </p>
                    </div>

                    <div className="rounded border border-[var(--color-rule-subtle)] bg-[var(--color-paper-2)] p-3">
                      <div className="text-[11px] font-semibold text-[var(--color-ink)]">
                        PHASE 03: PYTEST & DOCKER RUNNER
                      </div>
                      <p className="mt-1 text-[11px] text-[var(--color-muted)] leading-relaxed">
                        Executes test suites across concurrent emulators with artifacts captured and reported in GitHub Actions workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* SYSTEM 02: WireGuard Quantum-Protected Mesh VPN */}
          {systems[1] && (
            <article className="border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-rule)] pb-4 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[var(--color-accent)]">{systems[1].code}</span>
                  <span className="text-[var(--color-rule)]">|</span>
                  <span className="text-[var(--color-neutral)]">{systems[1].category}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`rounded px-2 py-0.5 text-[10px] font-semibold border ${getStatusBadge(systems[1].status)}`}>
                    {systems[1].status}
                  </span>
                  <span className="text-[var(--color-neutral)]">YEAR: {systems[1].year}</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xl font-bold text-[var(--color-ink)] sm:text-2xl">
                    {systems[1].name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {systems[1].description}
                  </p>

                  <div className="pt-2">
                    <p className="font-mono text-xs font-semibold text-[var(--color-ink)] uppercase">
                      Architecture & Cryptographic Protocol:
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted)]">
                      Investigates post-quantum hybrid key encapsulation mechanisms (KEM) to future-proof Linux WireGuard tunnels. Bridges decentralized peer mesh routing with cryptographic primitives designed to withstand quantum cryptanalysis.
                    </p>
                  </div>

                  <div className="pt-2">
                    <p className="font-mono text-[11px] text-[var(--color-neutral)] uppercase tracking-wider mb-2">
                      Core Stack:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {systems[1].stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-xs border border-[var(--color-rule)] bg-[var(--color-paper)] px-2.5 py-1 font-mono text-xs text-[var(--color-ink)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    {systems[1].repoUrl ? (
                      <a
                        href={systems[1].repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-terminal"
                      >
                        <span>View Repository</span>
                        <span className="text-xs">↗</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-neutral)] border border-dashed border-[var(--color-rule)] px-3 py-1.5 rounded-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-neutral)]" />
                        Research Codebase: Config in data/portfolio.ts
                      </span>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-5 rounded border border-[var(--color-rule)] bg-[var(--color-paper)] p-4 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-2 text-[11px] text-[var(--color-neutral)]">
                    <span>SECURITY_LAYER // TOPOLOGY</span>
                    <span className="text-[var(--color-accent)]">WG_MESH</span>
                  </div>
                  <div className="mt-3 space-y-2 text-[11px] text-[var(--color-muted)]">
                    <div className="border-l-2 border-[var(--color-accent)] pl-2.5 py-1">
                      <span className="text-[var(--color-ink)] font-semibold">KERNEL INTERFACE:</span>
                      <p className="text-[10px] text-[var(--color-neutral)] mt-0.5">Direct WireGuard wg0 interface configuration with custom MTU tuning</p>
                    </div>
                    <div className="border-l-2 border-[var(--color-rule)] pl-2.5 py-1">
                      <span className="text-[var(--color-ink)] font-semibold">HYBRID KEM:</span>
                      <p className="text-[10px] text-[var(--color-neutral)] mt-0.5">Combines Curve25519 with lattice-based key exchange algorithms</p>
                    </div>
                    <div className="border-l-2 border-[var(--color-rule)] pl-2.5 py-1">
                      <span className="text-[var(--color-ink)] font-semibold">NETFILTER RULES:</span>
                      <p className="text-[10px] text-[var(--color-neutral)] mt-0.5">Strict Linux nftables forward isolation and peer authorization</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* DUAL COLUMN WORKBENCH: Systems 03 & 04 */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* SYSTEM 03: FinVantage */}
            {systems[2] && (
              <article className="flex flex-col justify-between border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 sm:p-7">
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-3 font-mono text-xs">
                    <span className="font-bold text-[var(--color-accent)]">{systems[2].code}</span>
                    <div className="flex items-center gap-2">
                      <span className={`rounded px-2 py-0.5 text-[10px] font-semibold border ${getStatusBadge(systems[2].status)}`}>
                        {systems[2].status}
                      </span>
                      <span className="text-[var(--color-neutral)]">{systems[2].year}</span>
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-[var(--color-ink)]">
                    {systems[2].name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[var(--color-neutral)]">
                    {systems[2].category}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                    {systems[2].description}
                  </p>

                  <div className="mt-4 rounded border border-[var(--color-rule)] bg-[var(--color-paper)] p-3 font-mono text-[11px] space-y-1.5">
                    <div className="text-[var(--color-accent)] font-semibold">ARCHITECTURE NOTE:</div>
                    <p className="text-[var(--color-neutral)] leading-relaxed">
                      Edge-cached serverless deployment on Cloudflare orchestrating Gemini API structured queries to synthesize market data without cold-start latency.
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="font-mono text-[11px] text-[var(--color-neutral)] uppercase tracking-wider mb-2">
                      Stack:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {systems[2].stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-xs border border-[var(--color-rule)] bg-[var(--color-paper)] px-2 py-0.5 font-mono text-xs text-[var(--color-ink)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--color-rule-subtle)] flex flex-wrap items-center gap-3">
                  {systems[2].liveUrl && (
                    <a
                      href={systems[2].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-terminal-primary"
                    >
                      <span>Live Production Demo</span>
                      <span className="text-xs">↗</span>
                    </a>
                  )}
                  {systems[2].repoUrl && (
                    <a
                      href={systems[2].repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-terminal"
                    >
                      <span>Source</span>
                      <span className="text-xs">↗</span>
                    </a>
                  )}
                </div>
              </article>
            )}

            {/* SYSTEM 04: BioBuddy */}
            {systems[3] && (
              <article className="flex flex-col justify-between border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 sm:p-7">
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-3 font-mono text-xs">
                    <span className="font-bold text-[var(--color-accent)]">{systems[3].code}</span>
                    <div className="flex items-center gap-2">
                      <span className={`rounded px-2 py-0.5 text-[10px] font-semibold border ${getStatusBadge(systems[3].status)}`}>
                        {systems[3].status}
                      </span>
                      <span className="text-[var(--color-neutral)]">{systems[3].year}</span>
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-[var(--color-ink)]">
                    {systems[3].name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[var(--color-neutral)]">
                    {systems[3].category}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                    {systems[3].description}
                  </p>

                  <div className="mt-4 rounded border border-[var(--color-rule)] bg-[var(--color-paper)] p-3 font-mono text-[11px] space-y-1.5">
                    <div className="text-[var(--color-accent)] font-semibold">ARCHITECTURE NOTE:</div>
                    <p className="text-[var(--color-neutral)] leading-relaxed">
                      Multi-turn pedagogical agent connecting Python backend retrieval pipelines to Gemini multimodal models for step-by-step biological concept breakdown.
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="font-mono text-[11px] text-[var(--color-neutral)] uppercase tracking-wider mb-2">
                      Stack:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {systems[3].stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-xs border border-[var(--color-rule)] bg-[var(--color-paper)] px-2 py-0.5 font-mono text-xs text-[var(--color-ink)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--color-rule-subtle)] flex flex-wrap items-center gap-3">
                  {systems[3].liveUrl ? (
                    <a
                      href={systems[3].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-terminal-primary"
                    >
                      <span>Launch App</span>
                      <span className="text-xs">↗</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-neutral)] border border-dashed border-[var(--color-rule)] px-3 py-1.5 rounded-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-neutral)]" />
                      Repository: Config in data/portfolio.ts
                    </span>
                  )}
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
