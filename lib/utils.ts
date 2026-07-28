import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type Lenis from "lenis";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/** Smooth-scroll to an element id, preferring Lenis when active. */
export function scrollToId(id: string, offset = -80) {
  const el = document.querySelector(id.startsWith("#") ? id : `#${id}`);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el as HTMLElement, { offset });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function scrollToTop() {
  if (window.__lenis) {
    window.__lenis.scrollTo(0);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

/** Deterministic pseudo-random in [0, 1) — safe for SSR hydration. */
export function seeded(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}
