"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/constants/site";
import { EASE } from "@/lib/motion";

/** Brief branded loading veil — wipes away once the page is ready. */
export function Preloader() {
  const [show, setShow] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setShow(false), reduce ? 150 : 1300);
    return () => clearTimeout(t);
  }, [reduce]);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-bg"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.7, ease: EASE },
          }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-lg font-bold text-bg"
          >
            FK
          </motion.span>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
              className="text-sm font-medium tracking-[0.2em] text-muted"
            >
              {SITE.name.toUpperCase()}
            </motion.p>
          </div>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="h-px w-40 origin-left bg-ink/20"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
