"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type HScrollProps = {
  children: React.ReactNode;
  /** Outer wrapper (spacing relative to siblings). */
  className?: string;
  /** The scrollable viewport (margins, padding, snap, etc.). */
  viewportClassName?: string;
  /** The indicator track below the viewport. */
  trackClassName?: string;
};

/**
 * Horizontal scroller with a custom always-visible indicator bar.
 * Mobile browsers hide native scrollbars on touch; this draws its own —
 * synced to swipe position and draggable — and disappears entirely
 * when the content fits.
 */
export function HScroll({
  children,
  className,
  viewportClassName,
  trackClassName,
}: HScrollProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [bar, setBar] = useState({ width: 0, left: 0, visible: false });

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      const { scrollWidth, clientWidth, scrollLeft } = el;
      if (scrollWidth <= clientWidth + 1) {
        setBar((b) => (b.visible ? { ...b, visible: false } : b));
        return;
      }
      const width = Math.max((clientWidth / scrollWidth) * 100, 12);
      const left = (scrollLeft / (scrollWidth - clientWidth)) * (100 - width);
      setBar({ width, left, visible: true });
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  const scrollToPointer = (clientX: number) => {
    const el = viewportRef.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    el.scrollLeft = ratio * (el.scrollWidth - el.clientWidth);
  };

  return (
    <div className={className}>
      <div
        ref={viewportRef}
        className={cn(
          "overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          viewportClassName
        )}
      >
        {children}
      </div>
      {bar.visible && (
        <div
          ref={trackRef}
          aria-hidden
          className={cn(
            "mt-3 h-1.5 cursor-pointer touch-none rounded-full bg-ink/[0.08]",
            trackClassName
          )}
          onPointerDown={(e) => {
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            scrollToPointer(e.clientX);
          }}
          onPointerMove={(e) => {
            if (dragging.current) scrollToPointer(e.clientX);
          }}
          onPointerUp={() => {
            dragging.current = false;
          }}
        >
          <div
            className="h-full rounded-full bg-accent/70"
            style={{ width: `${bar.width}%`, marginLeft: `${bar.left}%` }}
          />
        </div>
      )}
    </div>
  );
}
