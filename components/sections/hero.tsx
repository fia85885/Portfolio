"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import gsap from "gsap";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { SITE, STATS } from "@/constants/site";
import { EASE } from "@/lib/motion";
import { Counter } from "@/components/ui/counter";
import { Magnetic } from "@/components/ui/magnetic";
import { Portrait } from "@/components/ui/portrait";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 32, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, ease: EASE, delay },
});

export function Hero() {
  const scope = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Cinematic tilt — the portrait leans gently toward the cursor.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [3.5, -3.5]), {
    stiffness: 140,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-3.5, 3.5]), {
    stiffness: 140,
    damping: 18,
  });

  const onPortraitMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onPortraitLeave = () => {
    px.set(0);
    py.set(0);
  };

  useEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.to(".hero-orb-a", {
        y: -28,
        x: 16,
        duration: 7,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
      gsap.to(".hero-orb-b", {
        y: 24,
        x: -14,
        duration: 9,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
      gsap.to(".hero-ring", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });
    }, scope);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      ref={scope}
      id="top"
      className="relative overflow-hidden pb-20 pt-32 md:pt-40"
      aria-label="Introduction"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-dots absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
        <div className="hero-orb-a absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
        <div className="hero-orb-b absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/[0.07] blur-3xl" />
        <div className="hero-ring absolute right-[8%] top-[14%] hidden h-72 w-72 rounded-full border border-dashed border-ink/10 lg:block" />
      </div>

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Vertical side label — mirrors the reference's rotated caption */}
        <span
          aria-hidden
          className="absolute -left-2 top-1/2 hidden -translate-y-1/2 text-[11px] uppercase tracking-[0.35em] text-muted/70 2xl:block"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {SITE.role}
        </span>

        <div>
          {/* Stat counters */}
          <motion.dl
            {...rise(0.1)}
            className="mb-10 grid max-w-md grid-cols-2 gap-x-10 gap-y-5 sm:grid-cols-4"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight">
                  <span className="text-accent">+</span>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
                <dd className="mt-0.5 text-[11px] uppercase tracking-wider text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>

          <motion.h1
            {...rise(0.2)}
            className="text-hero font-semibold text-balance"
          >
            Hello<span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            {...rise(0.3)}
            className="mt-5 text-xl font-medium md:text-2xl"
          >
            <span className="text-muted">—</span> I&apos;m {SITE.name},{" "}
            <span className="text-muted">{SITE.role}</span>
          </motion.p>

          <motion.div {...rise(0.4)} className="mt-5 flex flex-wrap gap-2">
            {SITE.taglines.map((t) => (
              <Badge key={t} variant="soft">
                {t}
              </Badge>
            ))}
          </motion.div>

          <motion.p
            {...rise(0.5)}
            className="mt-6 max-w-xl leading-relaxed text-muted"
          >
            {SITE.intro}
          </motion.p>

          <motion.div
            {...rise(0.6)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <ButtonLink href={SITE.resumeFile} download variant="primary">
                <Download size={16} />
                Download Resume
              </ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink href="#contact" variant="outline">
                <Mail size={16} />
                Contact Me
              </ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="icon"
                aria-label="GitHub profile"
              >
                <Github size={17} />
              </ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="icon"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={17} />
              </ButtonLink>
            </Magnetic>
          </motion.div>

          <motion.a
            {...rise(0.8)}
            href="#about"
            className="mt-14 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            Scroll down
            <ArrowDown size={14} className="animate-bounce-soft" />
          </motion.a>
        </div>

        {/* Portrait composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: EASE, delay: 0.35 }}
          className="relative mx-auto w-full max-w-md"
          style={
            reduce
              ? undefined
              : { rotateX, rotateY, transformPerspective: 1000 }
          }
          onMouseMove={reduce ? undefined : onPortraitMove}
          onMouseLeave={reduce ? undefined : onPortraitLeave}
        >
          <Portrait className="aspect-[4/5] w-full shadow-lift" />

          {/* Floating glass chips */}
          <div
            className="glass absolute -left-6 top-10 hidden animate-float rounded-2xl px-4 py-3 sm:block"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-xs font-semibold">RAG Pipelines</p>
            <p className="text-[11px] text-muted">~95% answer relevance</p>
          </div>
          <div
            className="glass absolute -right-4 top-1/3 hidden animate-float rounded-2xl px-4 py-3 sm:block"
            style={{ animationDelay: "1.1s" }}
          >
            <p className="text-xs font-semibold">MCP Server</p>
            <p className="text-[11px] text-muted">Claude Desktop ready</p>
          </div>
          <div
            className="glass absolute -left-8 bottom-24 hidden animate-float rounded-2xl px-4 py-3 sm:block"
            style={{ animationDelay: "2s" }}
          >
            <p className="text-xs font-semibold">Agentic AI</p>
            <p className="text-[11px] text-muted">Gmail → WhatsApp</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
