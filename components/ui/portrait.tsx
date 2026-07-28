"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE } from "@/constants/site";

/**
 * Editorial monochrome portrait — real photograph (/hero.png) rendered in
 * grayscale, warming to color on hover. Falls back to abstract art if the
 * photo is missing.
 */
export function Portrait({ className }: { className?: string }) {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-400 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-900",
        className
      )}
    >
      {/* Concentric rings + node network backdrop */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        viewBox="0 0 400 500"
        fill="none"
        aria-hidden
      >
        <circle cx="200" cy="210" r="150" stroke="white" strokeOpacity="0.5" />
        <circle cx="200" cy="210" r="110" stroke="white" strokeOpacity="0.35" />
        <circle cx="200" cy="210" r="70" stroke="white" strokeOpacity="0.25" />
        {!photoOk && (
          <>
            <circle cx="200" cy="185" r="52" fill="black" fillOpacity="0.18" />
            <path
              d="M110 500 C110 380 150 330 200 330 C250 330 290 380 290 500 Z"
              fill="black"
              fillOpacity="0.18"
            />
          </>
        )}
        <g stroke="white" strokeOpacity="0.4">
          <line x1="70" y1="90" x2="120" y2="130" />
          <line x1="120" y1="130" x2="90" y2="180" />
          <line x1="300" y1="80" x2="330" y2="140" />
          <line x1="330" y1="140" x2="290" y2="170" />
        </g>
        <g fill="white" fillOpacity="0.7">
          <circle cx="70" cy="90" r="3" />
          <circle cx="120" cy="130" r="4" />
          <circle cx="90" cy="180" r="3" />
          <circle cx="300" cy="80" r="3" />
          <circle cx="330" cy="140" r="4" />
          <circle cx="290" cy="170" r="3" />
        </g>
      </svg>

      {/* Photograph — quiet monochrome, color on hover */}
      {photoOk && (
        <Image
          src="/hero.png"
          alt={`Portrait of ${SITE.name}`}
          fill
          priority
          sizes="(min-width: 1024px) 28rem, 90vw"
          className="object-cover object-top grayscale contrast-[1.06] transition-[filter] duration-700 ease-out group-hover:grayscale-0"
          onError={() => setPhotoOk(false)}
        />
      )}

      {/* Ghost initials — placeholder mode only */}
      {!photoOk && (
        <span
          className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none text-[10rem] font-semibold leading-none tracking-tighter text-white/25 dark:text-white/10"
          aria-hidden
        >
          FK
        </span>
      )}

      {/* Bottom vignette keeps the caption legible over any photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/25 to-transparent"
      />

      {/* Glass caption */}
      <div className="glass absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl px-4 py-3">
        <div>
          <p className="text-sm font-semibold">{SITE.name}</p>
          <p className="text-xs text-muted">{SITE.role}</p>
        </div>
        <span
          className="h-2 w-2 rounded-full bg-accent shadow-glow"
          aria-hidden
        />
      </div>
    </div>
  );
}
