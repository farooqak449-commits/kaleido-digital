import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
          scrolled ? "glass shadow-[var(--shadow-card)]" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="inline-block size-7 rounded-lg bg-[var(--gradient-text)]" style={{ background: "var(--gradient-text)" }} />
          Scalex<span className="text-gradient">Studio</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://calendly.com/scalexstudio/30min"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:opacity-90 transition"
          >
            Book a call
          </a>
          <button
            className="md:hidden glass rounded-full p-2.5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden mt-2 mx-auto max-w-6xl glass rounded-2xl p-4 animate-in fade-in slide-in-from-top-2">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block py-1">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
