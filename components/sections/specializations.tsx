"use client";

import { SPECIALIZATIONS } from "@/constants/skills";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Specializations() {
  return (
    <section className="section" aria-label="AI specializations">
      <div className="container-x">
        <SectionHeading
          chapter="04"
          eyebrow="How I Think"
          title="Where I Go Deep"
          description="Not a list of buzzwords — the specific disciplines I practice, project after project."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {SPECIALIZATIONS.map((spec, i) => (
            <Reveal key={spec.name} delay={0.05 * i}>
              <div className="card-surface group h-full p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink/[0.04] text-ink transition-all duration-500 group-hover:rotate-[8deg] group-hover:bg-accent/10 group-hover:text-accent">
                  <spec.icon size={19} aria-hidden />
                </span>
                <h3 className="mt-4 text-sm font-semibold leading-snug">
                  {spec.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {spec.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
