"use client";

import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/constants/blog";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Blog() {
  return (
    <section id="blog" className="section" aria-label="Blog">
      <div className="container-x">
        <SectionHeading
          eyebrow="Blog"
          title="AI Insights & Notes"
          description="Writing in progress — field notes from building with LLMs, retrieval and agents."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.title} delay={0.08 * i}>
              <article className="card-surface group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                {/* Typographic cover */}
                <div
                  className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${post.hue}`}
                >
                  <span
                    className="select-none text-6xl font-bold tracking-tighter text-ink/15 transition-transform duration-700 group-hover:scale-110 dark:text-white/15"
                    aria-hidden
                  >
                    {post.glyph}
                  </span>
                  <span className="absolute left-4 top-4">
                    <Badge variant="dark" size="sm">
                      {post.tag}
                    </Badge>
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[11px] uppercase tracking-wider text-muted">
                    {post.readTime} · Coming soon
                  </p>
                  <h3 className="mt-2.5 font-semibold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent">
                    Read article
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
