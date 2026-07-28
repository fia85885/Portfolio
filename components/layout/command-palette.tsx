"use client";

import { useCallback, useEffect, useState } from "react";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  ArrowUpRight,
  Copy,
  Download,
  Github,
  Home,
  Linkedin,
  Mail,
  MoonStar,
  Search,
} from "lucide-react";
import { NAV, SITE } from "@/constants/site";
import { scrollToId, scrollToTop } from "@/lib/utils";

const itemClass =
  "flex cursor-pointer select-none items-center gap-3 rounded-xl px-3.5 py-3 text-sm text-ink outline-none transition-colors data-[selected=true]:bg-ink/[0.06]";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-cmdk", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-cmdk", onOpen);
    };
  }, []);

  const run = useCallback((action: () => void) => {
    setOpen(false);
    // Let the dialog close before the action fires.
    setTimeout(action, 60);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[95] flex items-start justify-center bg-black/40 px-4 pt-[18vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.22 }}
            className="w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Command
              label="Command palette"
              className="overflow-hidden rounded-3xl border border-line bg-card shadow-lift"
            >
              <div className="flex items-center gap-3 border-b border-line px-4">
                <Search size={16} className="shrink-0 text-muted" />
                <Command.Input
                  placeholder="Search sections, links, actions…"
                  className="h-14 w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
                />
                <kbd className="rounded-md border border-line px-1.5 py-0.5 text-[10px] text-muted">
                  ESC
                </kbd>
              </div>
              <Command.List className="max-h-[320px] overflow-y-auto p-2">
                <Command.Empty className="px-4 py-8 text-center text-sm text-muted">
                  No results found.
                </Command.Empty>

                <Command.Group
                  heading="Navigate"
                  className="px-2 py-1.5 text-[11px] uppercase tracking-widest text-muted [&_[cmdk-group-heading]]:mb-1"
                >
                  <Command.Item
                    className={itemClass}
                    onSelect={() => run(scrollToTop)}
                  >
                    <Home size={15} className="text-muted" />
                    Top
                  </Command.Item>
                  {[...NAV, { label: "Contact", href: "#contact" }].map(
                    (item) => (
                      <Command.Item
                        key={item.href}
                        className={itemClass}
                        onSelect={() => run(() => scrollToId(item.href))}
                      >
                        <ArrowUpRight size={15} className="text-muted" />
                        {item.label}
                      </Command.Item>
                    )
                  )}
                </Command.Group>

                <Command.Group
                  heading="Links"
                  className="px-2 py-1.5 text-[11px] uppercase tracking-widest text-muted [&_[cmdk-group-heading]]:mb-1"
                >
                  <Command.Item
                    className={itemClass}
                    onSelect={() =>
                      run(() => window.open(SITE.github, "_blank"))
                    }
                  >
                    <Github size={15} className="text-muted" />
                    GitHub Profile
                  </Command.Item>
                  <Command.Item
                    className={itemClass}
                    onSelect={() =>
                      run(() => window.open(SITE.linkedin, "_blank"))
                    }
                  >
                    <Linkedin size={15} className="text-muted" />
                    LinkedIn
                  </Command.Item>
                  <Command.Item
                    className={itemClass}
                    onSelect={() =>
                      run(() => (window.location.href = `mailto:${SITE.email}`))
                    }
                  >
                    <Mail size={15} className="text-muted" />
                    Send Email
                  </Command.Item>
                </Command.Group>

                <Command.Group
                  heading="Actions"
                  className="px-2 py-1.5 text-[11px] uppercase tracking-widest text-muted [&_[cmdk-group-heading]]:mb-1"
                >
                  <Command.Item
                    className={itemClass}
                    onSelect={() =>
                      run(() => window.open(SITE.resumeFile, "_blank"))
                    }
                  >
                    <Download size={15} className="text-muted" />
                    Download Resume
                  </Command.Item>
                  <Command.Item
                    className={itemClass}
                    onSelect={() =>
                      run(() =>
                        setTheme(resolvedTheme === "dark" ? "light" : "dark")
                      )
                    }
                  >
                    <MoonStar size={15} className="text-muted" />
                    Toggle Theme
                  </Command.Item>
                  <Command.Item
                    className={itemClass}
                    onSelect={() =>
                      run(() => navigator.clipboard.writeText(SITE.email))
                    }
                  >
                    <Copy size={15} className="text-muted" />
                    Copy Email Address
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
