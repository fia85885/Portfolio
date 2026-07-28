"use client";

import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/constants/education";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  return (
    <section className="section" aria-label="Education">
      <div className="container-x">
        <SectionHeading eyebrow="Education" title="Academic Foundations" />

        <div className="relative mt-14">
          {/* Timeline spine */}
          <span
            aria-hidden
            className="absolute left-[22px] top-2 h-[calc(100%-16px)] w-px bg-line md:left-1/2"
          />

          <div className="space-y-10">
            {EDUCATION.map((item, i) => (
              <Reveal key={item.degree} delay={0.1 * i}>
                <div
                  className={`relative flex flex-col gap-6 md:flex-row md:items-start ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Node */}
                  <span
                    className="absolute left-[13px] top-7 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-card md:left-1/2 md:-translate-x-1/2"
                    aria-hidden
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        item.current ? "bg-accent" : "bg-ink/30"
                      }`}
                    />
                  </span>

                  {/* Card */}
                  <div className="ml-14 md:ml-0 md:w-[calc(50%-40px)]">
                    <div className="card-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs uppercase tracking-[0.15em] text-muted">
                          {item.period}
                        </p>
                        {item.current && (
                          <Badge variant="accent" size="sm">
                            Current
                          </Badge>
                        )}
                      </div>
                      <h3 className="mt-3 flex items-start gap-2.5 font-semibold leading-snug">
                        <GraduationCap
                          size={18}
                          className="mt-0.5 shrink-0 text-muted"
                          aria-hidden
                        />
                        {item.degree}
                      </h3>
                      <p className="mt-2 text-sm text-muted">
                        {item.school} · {item.place}
                      </p>
                      <p className="mt-1 text-sm font-medium text-accent">
                        {item.detail}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.focus.map((f) => (
                          <Badge key={f} size="sm" variant="soft">
                            {f}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the opposite column */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
