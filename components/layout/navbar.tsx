"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Command, Menu, X } from "lucide-react";
import { NAV, SITE } from "@/constants/site";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        className="container-x flex h-16 items-center justify-between lg:h-[72px]"
        aria-label="Primary"
      >
        {/* Wordmark */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-sm font-bold text-bg transition-transform duration-300 group-hover:rotate-[-6deg]">
            FK
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {SITE.firstName}
            <span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-ink/[0.05] hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            aria-label="Open command palette"
            onClick={() => window.dispatchEvent(new Event("open-cmdk"))}
            className="hidden h-10 items-center gap-2 rounded-full border border-line bg-card px-3.5 text-xs text-muted transition-colors hover:bg-ink/[0.05] hover:text-ink lg:inline-flex"
          >
            <Command size={13} />
            <span>K</span>
          </button>
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex"
          >
            Let&apos;s Talk
            <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-40 bg-bg md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-10">
              {[...NAV, { label: "Contact", href: "#contact" }].map(
                (item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4, ease: EASE }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-4 text-3xl font-semibold tracking-tight transition-colors hover:bg-ink/[0.04]"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
