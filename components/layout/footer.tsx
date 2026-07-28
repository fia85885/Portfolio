"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { NAV, SITE } from "@/constants/site";
import { scrollToTop } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";

export function Footer() {
  return (
    <footer className="bg-[#0B0B0C] text-white">
      <div className="container-x py-16 md:py-20">
        {/* Big email — the reference footer's signature move */}
        <div className="flex flex-col gap-10 border-b border-white/10 pb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Get in touch
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-3 inline-block break-all text-3xl font-semibold tracking-tight transition-colors hover:text-white/70 md:text-5xl"
            >
              {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Magnetic>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <Github size={17} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <Linkedin size={17} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <Mail size={17} />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Nav + meta */}
        <div className="flex flex-col gap-8 pt-10 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {[...NAV, { label: "Contact", href: "#contact" }].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
            >
              Back to top
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
