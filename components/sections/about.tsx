"use client";

import {
  BadgeCheck,
  GraduationCap,
  Languages,
  MapPin,
  School,
  Target,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "@/constants/site";
import { LANGUAGES } from "@/constants/education";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Counter } from "@/components/ui/counter";

const highlights = [
  "Hands-on experience building RAG pipelines, AI-powered automation tools and data-driven applications in Python.",
  "Achieved ~90% classification accuracy during my Machine Learning internship at Unified Mentor.",
  "Currently deepening my research foundations through an M.Sc. in Computer Science at Universität Paderborn.",
];

const infoCards: {
  icon: LucideIcon;
  title: string;
  body: string;
  note?: string;
}[] = [
  {
    icon: GraduationCap,
    title: "M.Sc. Computer Science",
    body: "Universität Paderborn · 2026 — Present",
    note: "Currently enrolled",
  },
  {
    icon: School,
    title: "B.Tech CSE — AI & ML",
    body: "Osmania University · 2021 — 2025",
    note: "GPA 8.93 / 10",
  },
  {
    icon: Target,
    title: "Current Focus",
    body: "RAG Systems · Agentic AI · NLP",
    note: "Generative AI engineering",
  },
  {
    icon: Languages,
    title: "Languages",
    body: LANGUAGES.map((l) => `${l.name} (${l.level})`).join(" · "),
    note: "Learning German",
  },
  {
    icon: MapPin,
    title: "Based in",
    body: SITE.location,
  },
  {
    icon: BadgeCheck,
    title: "Open to Opportunities",
    body: "AI Engineering & Research roles",
    note: "Internships · Working student",
  },
];

export function About() {
  return (
    <section id="about" className="section" aria-label="About me">
      <div className="container-x">
        <SectionHeading
          chapter="01"
          eyebrow="Who I Am"
          title="Turning complex problems into intelligent systems."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Story */}
          <Reveal className="lg:pr-6">
            <p className="leading-relaxed text-muted">{SITE.profile}</p>
            <p className="mt-5 leading-relaxed text-muted">{SITE.seeking}</p>
          </Reveal>

          {/* Center stat card — mirrors the reference's highlight metric */}
          <Reveal delay={0.1}>
            <div className="card-surface flex h-full flex-col justify-between p-8">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line"
                aria-hidden
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <div className="mt-8">
                <p className="text-5xl font-semibold tracking-tight">
                  <Counter value={95} suffix="%" />
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Answer relevance achieved by my Medical Query RAG pipeline on
                  a manually evaluated validation set.
                </p>
              </div>
              <div className="mt-8 rounded-2xl bg-ink/[0.04] px-4 py-3">
                <p className="text-xs text-muted">
                  GPT-4o-mini · text-embedding-3-small
                </p>
              </div>
            </div>
          </Reveal>

          {/* Highlight bullets */}
          <Reveal delay={0.2}>
            <ul className="flex h-full flex-col justify-center gap-6">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-bg"
                    aria-hidden
                  >
                    <span className="text-xs leading-none">+</span>
                  </span>
                  <p className="text-sm leading-relaxed text-muted">{item}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Info cards */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {infoCards.map((card, i) => (
            <Reveal key={card.title} delay={0.06 * i}>
              <div className="card-surface group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <card.icon
                  size={20}
                  className="text-muted transition-colors group-hover:text-accent"
                  aria-hidden
                />
                <h3 className="mt-4 font-semibold">{card.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{card.body}</p>
                {card.note && (
                  <p className="mt-3 text-xs uppercase tracking-wider text-muted/70">
                    {card.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
