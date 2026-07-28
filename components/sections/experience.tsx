"use client";

import { ArrowUpRight, Building2 } from "lucide-react";
import { EXPERIENCE } from "@/constants/experience";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

export function Experience() {
  return (
    <section id="experience" className="section" aria-label="Work experience">
      <div className="container-x">
        {/* Split header — mirrors the reference layout */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            chapter="02"
            eyebrow="Proof of Work"
            title="Explore My AI Journey"
          />
          <Reveal delay={0.15} className="max-w-sm">
            <p className="text-sm leading-relaxed text-muted">
              From securing systems to teaching them — internships across
              cybersecurity and machine learning shaped how I build reliable,
              intelligent software.
            </p>
            <Magnetic className="mt-5">
              <ButtonLink href="#contact" variant="primary" size="sm">
                Let&apos;s Talk
                <ArrowUpRight size={14} />
              </ButtonLink>
            </Magnetic>
          </Reveal>
        </div>

        {/* Journey rows */}
        <div className="mt-14 border-t border-line">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company} delay={0.08 * i}>
              <article className="group border-b border-line py-8 transition-colors hover:bg-ink/[0.015] md:py-10">
                <div className="grid gap-6 md:grid-cols-[1.1fr_1.5fr_auto] md:items-start">
                  {/* Company */}
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-line bg-card text-muted transition-colors group-hover:text-accent"
                      aria-hidden
                    >
                      <Building2 size={18} />
                    </span>
                    <div>
                      <h3 className="font-semibold leading-snug">
                        {job.company}
                      </h3>
                      <p className="mt-1 flex items-center gap-2 text-xs text-muted">
                        <span
                          className="h-1 w-1 rounded-full bg-accent"
                          aria-hidden
                        />
                        {job.period}
                        {job.current && (
                          <Badge variant="accent" size="sm">
                            Current
                          </Badge>
                        )}
                      </p>
                      <p className="mt-1 text-xs text-muted/70">
                        {job.location}
                      </p>
                    </div>
                  </div>

                  {/* Role + description */}
                  <div>
                    <p className="text-sm font-medium">{job.role}</p>
                    <ul className="mt-2 space-y-1.5">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="text-sm leading-relaxed text-muted"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {job.tags.map((tag) => (
                      <Badge key={tag} size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
