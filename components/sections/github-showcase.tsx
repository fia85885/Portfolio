"use client";

import { ArrowUpRight, GitFork, Github, Star } from "lucide-react";
import { GH_STATS, PINNED_REPOS, TOP_LANGUAGES } from "@/constants/github";
import { SITE } from "@/constants/site";
import { seeded } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { HScroll } from "@/components/ui/hscroll";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const WEEKS = 52;
const DAYS = 7;

const LEVEL_CLASSES = [
  "bg-ink/[0.05]",
  "bg-accent/25",
  "bg-accent/45",
  "bg-accent/70",
  "bg-accent",
];

function levelFor(i: number) {
  const v = seeded(i);
  if (v < 0.52) return 0;
  if (v < 0.74) return 1;
  if (v < 0.88) return 2;
  if (v < 0.96) return 3;
  return 4;
}

export function GithubShowcase() {
  return (
    <section id="github" className="section" aria-label="GitHub showcase">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="GitHub"
            title="Open Source Activity"
            description="Where the projects live — code, experiments and works in progress."
          />
          <Reveal delay={0.15}>
            <Magnetic>
              <ButtonLink
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <Github size={16} />
                @{SITE.githubUser}
                <ArrowUpRight size={14} />
              </ButtonLink>
            </Magnetic>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Contribution graph — representative placeholder */}
          <Reveal>
            <div className="card-surface overflow-hidden p-4 sm:p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">Contribution activity</h3>
                <span className="text-[10px] uppercase tracking-wider text-muted/70">
                  Representative
                </span>
              </div>
              <HScroll
                className="mt-5"
                viewportClassName="-mx-4 px-4 sm:-mx-7 sm:px-7"
              >
                <div
                  className="grid w-max grid-flow-col gap-[3px]"
                  style={{ gridTemplateRows: `repeat(${DAYS}, 10px)` }}
                  aria-hidden
                >
                  {Array.from({ length: WEEKS * DAYS }, (_, i) => (
                    <span
                      key={i}
                      className={`h-[10px] w-[10px] rounded-[3px] ${
                        LEVEL_CLASSES[levelFor(i)]
                      }`}
                    />
                  ))}
                </div>
              </HScroll>
              <div className="mt-3 flex items-center justify-end gap-1.5 text-[10px] text-muted">
                Less
                {LEVEL_CLASSES.map((cls) => (
                  <span
                    key={cls}
                    className={`h-[10px] w-[10px] rounded-[3px] ${cls}`}
                    aria-hidden
                  />
                ))}
                More
              </div>
            </div>
          </Reveal>

          {/* Stats + languages */}
          <div className="flex min-w-0 flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="card-surface overflow-hidden p-2">
                <HScroll trackClassName="mx-2 mb-1 mt-2">
                  <div className="grid min-w-[400px] grid-cols-3 divide-x divide-line">
                    {GH_STATS.map((stat) => (
                      <div key={stat.label} className="px-4 py-5 text-center">
                        <p className="text-lg font-semibold tracking-tight">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-wider text-muted">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </HScroll>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="card-surface flex-1 p-5 sm:p-7">
                <h3 className="text-sm font-semibold">Top languages</h3>
                <HScroll viewportClassName="-mx-1 px-1">
                  <div className="min-w-[280px]">
                    <div className="mt-4 flex h-2.5 overflow-hidden rounded-full">
                      {TOP_LANGUAGES.map((lang) => (
                        <span
                          key={lang.name}
                          className={lang.color}
                          style={{ width: `${lang.pct}%` }}
                          aria-hidden
                        />
                      ))}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {TOP_LANGUAGES.map((lang) => (
                        <li
                          key={lang.name}
                          className="flex items-center justify-between gap-4 text-sm"
                        >
                          <span className="flex items-center gap-2 whitespace-nowrap text-muted">
                            <span
                              className={`h-2 w-2 rounded-full ${lang.color}`}
                              aria-hidden
                            />
                            {lang.name}
                          </span>
                          <span className="text-xs text-muted">{lang.pct}%</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </HScroll>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Pinned repositories */}
        <HScroll
          className="mt-6"
          viewportClassName="-mx-4 px-4 pb-1 sm:-mx-6 sm:px-6 md:mx-0 md:overflow-visible md:px-0 md:pb-0"
        >
          <div className="flex snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 md:gap-6">
            {PINNED_REPOS.map((repo, i) => (
            <Reveal key={repo.name} delay={0.07 * i} className="min-w-[280px] flex-shrink-0 snap-start md:min-w-0 md:flex-shrink">
              <a
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface group block h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2 text-sm font-semibold">
                    <Github size={15} className="text-muted" aria-hidden />
                    {repo.name}
                  </h3>
                  <ArrowUpRight
                    size={15}
                    className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    aria-hidden
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {repo.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {repo.topics.map((topic) => (
                    <Badge key={topic} size="sm" variant="soft">
                      {topic}
                    </Badge>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="h-2.5 w-2.5 rounded-full bg-accent"
                      aria-hidden
                    />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={12} aria-hidden /> —
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} aria-hidden /> —
                  </span>
                </div>
              </a>
            </Reveal>
            ))}
          </div>
        </HScroll>
      </div>
    </section>
  );
}
