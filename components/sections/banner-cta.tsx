"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

/** Dark mid-page banner — the reference's "consultation" moment, repurposed. */
export function BannerCta() {
  return (
    <section className="py-6" aria-label="Availability">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#0B0B0C] px-5 py-10 text-center text-white sm:px-8 sm:py-14 md:px-16 md:py-20">
            {/* Quiet blue glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
            />
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              ( Seeking meaningful AI projects )
            </p>
            <h2 className="text-display mx-auto mt-5 max-w-2xl font-semibold text-balance">
              Open to AI Engineering Roles &amp; Research Collaborations
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/60">
              I&apos;m looking for opportunities to contribute to meaningful AI
              projects while continuing to grow as an engineer and researcher.
            </p>
            <Magnetic className="mt-9">
              <ButtonLink href="#contact" variant="inverted" size="lg">
                Let&apos;s Talk
                <ArrowUpRight size={17} />
              </ButtonLink>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
