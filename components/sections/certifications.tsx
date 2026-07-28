"use client";

import { Award, ArrowUpRight } from "lucide-react";
import { CERTIFICATIONS } from "@/constants/education";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Certifications() {
  return (
    <section className="section pt-0" aria-label="Certifications">
      <div className="container-x">
        <SectionHeading eyebrow="Certifications" title="Credentials" />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CERTIFICATIONS.map((cert, i) => {
            const cardClass =
              "card-surface group flex items-center justify-between gap-6 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift";
            const inner = (
              <>
                <div className="flex items-center gap-5">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink/[0.04] text-ink transition-colors group-hover:bg-accent/10 group-hover:text-accent"
                    aria-hidden
                  >
                    <Award size={22} />
                  </span>
                  <div>
                    <h3 className="font-semibold leading-snug">{cert.title}</h3>
                    <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                    {cert.href && (
                      <p className="mt-2 text-xs font-medium text-accent">
                        View credential
                      </p>
                    )}
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  aria-hidden
                />
              </>
            );
            return (
              <Reveal key={cert.title} delay={0.08 * i}>
                {cert.href ? (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View credential: ${cert.title} — ${cert.issuer}`}
                    className={cardClass}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cardClass}>{inner}</div>
                )}
              </Reveal>
            );
          })}

          {/* Quiet companion card keeps the grid balanced */}
          <Reveal delay={0.16}>
            <div className="flex h-full flex-col justify-center rounded-3xl border border-dashed border-ink/15 p-7">
              <p className="text-sm font-medium text-muted">
                Continuously learning.
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted/70">
                Currently deepening research foundations through the M.Sc.
                program at Universität Paderborn.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
