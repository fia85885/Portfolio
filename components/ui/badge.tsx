import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-medium tracking-wide transition-colors",
  {
    variants: {
      variant: {
        outline: "border border-line bg-card text-ink",
        soft: "bg-ink/[0.05] text-ink",
        dark: "bg-ink text-bg",
        accent: "bg-accent/10 text-accent",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[11px]",
        md: "px-3.5 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  }
);

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}
