"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#system-design", label: "System Design" },
  { href: "/writing", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <nav className="container-max flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-foreground hover:text-accent transition-colors"
        >
          <span className="text-accent">~/</span>roshan.gupta
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Roshan_Gupta_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent hover:bg-accent/20 transition"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <ul className="container-max py-3 flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Roshan_Gupta_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="block py-2 text-sm text-accent"
              >
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
