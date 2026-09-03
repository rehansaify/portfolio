"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export function ContactSection() {
  const { contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full border-b border-[var(--color-rule)] bg-[var(--color-paper)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-[var(--color-rule)] pb-4">
          <div>
            <span className="font-mono text-xs tracking-widest text-[var(--color-accent)] uppercase">
              05 // DISPATCH
            </span>
            <h2 className="mt-1 font-sans text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              Let&apos;s build reliable systems.
            </h2>
          </div>
          <p className="mt-2 sm:mt-0 font-mono text-xs text-[var(--color-neutral)]">
            AVAILABILITY // 2026 ENG ROLES
          </p>
        </div>

        {/* Contact Body */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-[var(--color-muted)]">
              {contact.availability}
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-neutral)] font-mono">
              Whether you are scaling automated test infrastructure, standardizing CI/CD pipelines, or deploying cloud systems, feel free to reach out directly.
            </p>

            {/* Email Primary Card */}
            <div className="mt-6 rounded border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="font-mono text-[11px] text-[var(--color-neutral)] uppercase tracking-wider block">
                    DIRECT INBOX:
                  </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-mono text-base font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors mt-1 block"
                  >
                    {contact.email}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="btn-terminal-primary text-xs"
                  >
                    <span>Send Message</span>
                    <span>↗</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn-terminal text-xs"
                  >
                    <span>{copied ? "✓ Copied" : "Copy Address"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* External Coordinates Column */}
          <div className="lg:col-span-4 rounded border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-5 font-mono text-xs">
            <span className="text-[var(--color-accent)] font-semibold block border-b border-[var(--color-rule)] pb-2 uppercase tracking-wider">
              COORDINATES // CHANNELS
            </span>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between py-1 border-b border-[var(--color-rule-subtle)]">
                <span className="text-[var(--color-neutral)]">GITHUB</span>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-1"
                >
                  <span>Profile</span>
                  <span>↗</span>
                </a>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-[var(--color-rule-subtle)]">
                <span className="text-[var(--color-neutral)]">LINKEDIN</span>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-1"
                >
                  <span>Connect</span>
                  <span>↗</span>
                </a>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-[var(--color-neutral)]">RESUME</span>
                <a
                  href={contact.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Google Drive / PDF</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
