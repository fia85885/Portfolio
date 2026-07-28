"use client";

import { ThemeProvider } from "next-themes";
import { SmoothScroll } from "@/components/layout/smooth-scroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <SmoothScroll>{children}</SmoothScroll>
    </ThemeProvider>
  );
}
