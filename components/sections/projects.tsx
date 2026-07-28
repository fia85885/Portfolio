"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Search } from "lucide-react";
import { PROJECT_FILTERS, PROJECTS } from "@/constants/projects";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { AgentMock, McpMock, RagMock } from "./project-mocks";

const MOCKS = {
  rag: RagMock,
  mcp: McpMock,
  agent: AgentMock,
} as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Mock = MOCKS[project.mock];
  const flipped = index % 2 === 1;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="card-surface group overflow-hidden"
    >
      <div
        className={cn(
          "grid gap-0 lg:grid-cols-2",
          flipped && "lg:[direction:rtl]"
        )}
      >
        {/* Preview */}
        <div className="relative overflow-hidden border-b border-line bg-ink/[0.02] p-6 [direction:ltr] lg:border-b-0 lg:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
          <div className="aspect-[4/3] min-h-[270px] w-full transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:-rotate-[0.5deg] sm:min-h-0">
            <Mock />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-7 [direction:ltr] lg:p-12">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            {project.subtitle}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed text-muted">
            {project.description}
          </p>
          <ul className="mt-5 space-y-2">
            {project.points.slice(0, 2).map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
                <span
                  className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} size="sm">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <ButtonLink
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
              >
                <Github size={14} />
                GitHub
              </ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
              >
                Case Study
                <ArrowUpRight size={14} />
              </ButtonLink>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof PROJECT_FILTERS)[number]>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesFilter =
        filter === "All" || p.categories.includes(filter as never);
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section id="work" className="section" aria-label="Featured projects">
      <div className="container-x">
        <SectionHeading
          chapter="03"
          eyebrow="Problems I've Solved"
          title="Featured AI Projects"
          description="Three real problems, three working systems — clinical answers people can verify, research that cites itself, and a job hunt that runs on autopilot."
          align="center"
        />

        {/* Filters + search */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div
              className="flex flex-wrap justify-center gap-1.5"
              role="group"
              aria-label="Filter projects"
            >
              {PROJECT_FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-all duration-300",
                    filter === f
                      ? "bg-ink text-bg shadow-card"
                      : "border border-line bg-card text-muted hover:text-ink"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
            <label className="relative">
              <span className="sr-only">Search projects</span>
              <Search
                size={14}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="h-10 w-56 rounded-full border border-line bg-card pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent/50"
              />
            </label>
          </div>
        </Reveal>

        {/* Cards */}
        <motion.div layout className="mt-12 flex flex-col gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
          {visible.length === 0 && (
            <p className="py-16 text-center text-muted">
              No projects match that search.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
