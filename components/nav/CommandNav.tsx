"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { portfolioData } from "@/data/portfolio";

export function CommandNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const navItems = [
    { label: "Systems", href: "#systems", group: "SECTIONS", desc: "Selected engineering projects & harnesses" },
    { label: "Engineering", href: "#engineering", group: "SECTIONS", desc: "Technical skill matrix & toolchains" },
    { label: "Experience", href: "#experience", group: "SECTIONS", desc: "Industry internships & leadership roles" },
    { label: "Currently", href: "#currently", group: "SECTIONS", desc: "Active learning, building & exploration" },
    { label: "Contact", href: "#contact", group: "SECTIONS", desc: "Direct channels & collaboration paths" },
    { label: "GitHub Profile", href: portfolioData.contact.github, external: true, group: "EXTERNAL", desc: "View repositories & code contributions" },
    { label: "LinkedIn Profile", href: portfolioData.contact.linkedin, external: true, group: "EXTERNAL", desc: "Professional network & background" },
    { label: "Resume", href: portfolioData.contact.resumePath, external: true, group: "ACTIONS", desc: "View verified engineering CV on Google Drive" },
    { label: "Copy Email", action: "copy-email", group: "ACTIONS", desc: portfolioData.contact.email },
  ];

  const filteredItems = navItems.filter((item) => {
    const q = query.toLowerCase().trim();
    return (
      item.label.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.group.toLowerCase().includes(q)
    );
  });

  const openCommandMenu = useCallback(() => {
    setQuery("");
    setSelectedIndex(0);
    setIsOpen(true);
  }, []);

  const closeCommandMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Global keydown listener for Cmd+K / Ctrl+K & Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) {
            setQuery("");
            setSelectedIndex(0);
            return true;
          }
          return false;
        });
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        closeCommandMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCommandMenu]);

  // Synchronize body scroll and focus when modal state changes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleSelect = (item: (typeof navItems)[number]) => {
    if (item.action === "copy-email") {
      navigator.clipboard.writeText(portfolioData.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      closeCommandMenu();
      return;
    }

    closeCommandMenu();
    if (item.external && item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else if (item.href) {
      const targetEl = document.querySelector(item.href);
      targetEl?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleModalKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === "Enter" && filteredItems.length > 0) {
      e.preventDefault();
      handleSelect(filteredItems[selectedIndex]);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[var(--color-rule)] bg-[var(--color-paper)]/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Brand identifier */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="font-mono text-xs tracking-wider uppercase text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-none"
            >
              <span className="text-[var(--color-accent)] font-semibold">❯</span> {portfolioData.identity.name}
            </a>
            <span className="hidden sm:inline-block h-3 w-px bg-[var(--color-rule)]" />
            <span className="hidden md:inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--color-neutral)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-status-active)]" />
              OPS: READY
            </span>
          </div>

          {/* Hallmark N13: Inline ⌘K Command Pill */}
          <button
            type="button"
            onClick={openCommandMenu}
            aria-label="Open Command Menu (Press ⌘K or Ctrl+K)"
            className="flex items-center gap-2.5 h-8 px-3 rounded-sm border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[var(--color-muted)] hover:border-[var(--color-neutral)] hover:text-[var(--color-ink)] transition-colors text-xs font-mono"
          >
            <svg
              className="h-3.5 w-3.5 text-[var(--color-neutral)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden sm:inline">Navigate command…</span>
            <span className="sm:hidden">Jump…</span>
            <span className="flex items-center gap-0.5 rounded border border-[var(--color-rule)] bg-[var(--color-paper)] px-1 py-0.5 text-[10px] text-[var(--color-neutral)] font-sans font-medium">
              <kbd className="font-mono">⌘</kbd>
              <kbd className="font-mono">K</kbd>
            </span>
          </button>

          {/* Direct section links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-mono text-[var(--color-muted)]">
            <a href="#systems" className="hover:text-[var(--color-ink)] transition-colors">
              {"// Systems"}
            </a>
            <a href="#engineering" className="hover:text-[var(--color-ink)] transition-colors">
              {"// Engineering"}
            </a>
            <a href="#experience" className="hover:text-[var(--color-ink)] transition-colors">
              {"// Experience"}
            </a>
            <a href="#currently" className="hover:text-[var(--color-ink)] transition-colors">
              {"// Currently"}
            </a>
            <a href="#contact" className="hover:text-[var(--color-accent)] transition-colors text-[var(--color-ink)] font-medium">
              {"// Contact"}
            </a>
          </nav>
        </div>
      </header>

      {/* Copy toast feedback */}
      {copied && (
        <div className="fixed bottom-6 right-6 z-50 rounded border border-[var(--color-accent)] bg-[var(--color-paper-2)] px-4 py-2 font-mono text-xs text-[var(--color-accent)] shadow-lg">
          ✓ Email copied to clipboard
        </div>
      )}

      {/* N13 Command Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
            onClick={closeCommandMenu}
            aria-hidden="true"
          />

          {/* Dialog Panel */}
          <div
            className="relative w-full max-w-xl rounded border border-[var(--color-rule)] bg-[var(--color-paper)] shadow-2xl overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            onKeyDown={handleModalKeyDown}
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 border-b border-[var(--color-rule)] px-4 py-3 bg-[var(--color-paper-2)]">
              <span className="font-mono text-sm text-[var(--color-accent)]">❯</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a section name or command..."
                className="w-full bg-transparent font-mono text-sm text-[var(--color-ink)] placeholder-[var(--color-neutral)] focus:outline-none"
              />
              <button
                type="button"
                onClick={closeCommandMenu}
                className="rounded border border-[var(--color-rule)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-neutral)] hover:text-[var(--color-ink)]"
              >
                ESC
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredItems.length === 0 ? (
                <div className="p-4 text-center font-mono text-xs text-[var(--color-neutral)]">
                  No matching commands or sections found.
                </div>
              ) : (
                <div className="space-y-1">
                  {filteredItems.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={`${item.group}-${item.label}`}
                        type="button"
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded text-left font-mono text-xs transition-colors ${
                          isSelected
                            ? "bg-[var(--color-paper-3)] text-[var(--color-ink)] border-l-2 border-[var(--color-accent)]"
                            : "text-[var(--color-muted)] hover:bg-[var(--color-paper-2)]"
                        }`}
                      >
                        <div className="flex flex-col gap-0.5">
                          <span className={`font-medium ${isSelected ? "text-[var(--color-accent)]" : "text-[var(--color-ink)]"}`}>
                            {item.label}
                          </span>
                          <span className="text-[11px] text-[var(--color-neutral)]">
                            {item.desc}
                          </span>
                        </div>
                        <span className="text-[10px] text-[var(--color-neutral)] uppercase tracking-wider">
                          {item.group}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer keyboard guidance */}
            <div className="flex items-center justify-between border-t border-[var(--color-rule)] px-4 py-2 bg-[var(--color-paper-2)] font-mono text-[11px] text-[var(--color-neutral)]">
              <div className="flex items-center gap-3">
                <span><kbd className="text-[var(--color-muted)]">↑</kbd><kbd className="text-[var(--color-muted)]">↓</kbd> navigate</span>
                <span><kbd className="text-[var(--color-muted)]">↵</kbd> select</span>
                <span><kbd className="text-[var(--color-muted)]">esc</kbd> close</span>
              </div>
              <span>REHAN SAIFI // TERMINAL</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
