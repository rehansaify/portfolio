import { portfolioData } from "@/data/portfolio";

export function ColophonFooter() {
  const { identity, contact } = portfolioData;

  return (
    <footer className="w-full bg-[var(--color-paper)] py-12 font-mono text-xs text-[var(--color-neutral)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hallmark Ft1: Mast-headed Band */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 border-b border-[var(--color-rule)] pb-8">
          {/* Brand Wordmark & Tagline */}
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-ink)]">
              <span className="text-[var(--color-accent)] font-semibold">❯</span>
              <span>{`${identity.name} // ARCHIVE`}</span>
            </div>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed">
              {identity.statement}
            </p>
            <p className="text-[11px] text-[var(--color-neutral)]">
              Designed with Hallmark Terminal specification — strictly anti-slop, honest telemetry, zero fabricated claims.
            </p>
          </div>

          {/* Colophon Technical Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-[11px]">
            <div>
              <span className="text-[var(--color-ink)] font-semibold block mb-2 uppercase">
                STACK SPECS
              </span>
              <ul className="space-y-1 text-[var(--color-muted)]">
                <li>Next.js 16 (App Router)</li>
                <li>React 19.2</li>
                <li>Tailwind CSS v4</li>
                <li>OKLCH Color Space</li>
              </ul>
            </div>

            <div>
              <span className="text-[var(--color-ink)] font-semibold block mb-2 uppercase">
                TYPOGRAPHY
              </span>
              <ul className="space-y-1 text-[var(--color-muted)]">
                <li>Geist Sans (UI / Body)</li>
                <li>Geist Mono (Code / Meta)</li>
                <li>Roman Headings Only</li>
              </ul>
            </div>

            <div>
              <span className="text-[var(--color-ink)] font-semibold block mb-2 uppercase">
                QUICK JUMP
              </span>
              <ul className="space-y-1 text-[var(--color-muted)]">
                <li>
                  <a href="#systems" className="hover:text-[var(--color-accent)] transition-colors">
                    Systems
                  </a>
                </li>
                <li>
                  <a href="#engineering" className="hover:text-[var(--color-accent)] transition-colors">
                    Engineering
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-[var(--color-accent)] transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href={contact.resumePath} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
                    Resume ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px]">
          <div>
            <span>© {new Date().getFullYear()} {identity.name}. All verified systems unembellished.</span>
          </div>
          <div className="flex items-center gap-4 text-[var(--color-muted)]">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-ink)] transition-colors">
              GitHub
            </a>
            <span>·</span>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-ink)] transition-colors">
              LinkedIn
            </a>
            <span>·</span>
            <a href={`mailto:${contact.email}`} className="hover:text-[var(--color-ink)] transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
