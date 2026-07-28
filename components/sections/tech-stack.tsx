"use client";

import { Database, LineChart } from "lucide-react";
import {
  SiGit,
  SiHuggingface,
  SiLangchain,
  SiPython,
  SiPytorch,
  SiStreamlit,
  SiTensorflow,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { ICON_CLOUD, TECH_GROUPS } from "@/constants/skills";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const CLOUD_ICONS: Record<
  string,
  { Icon: React.ComponentType<{ size?: number | string }>; label: string }
> = {
  python: { Icon: SiPython, label: "Python" },
  pytorch: { Icon: SiPytorch, label: "PyTorch" },
  tensorflow: { Icon: SiTensorflow, label: "TensorFlow" },
  openai: { Icon: RiOpenaiFill, label: "OpenAI" },
  langchain: { Icon: SiLangchain, label: "LangChain" },
  huggingface: { Icon: SiHuggingface, label: "Hugging Face" },
  streamlit: { Icon: SiStreamlit, label: "Streamlit" },
  git: { Icon: SiGit, label: "Git" },
  database: { Icon: Database, label: "ChromaDB" },
  chart: { Icon: LineChart, label: "Matplotlib" },
};

export function TechStack() {
  return (
    <section id="stack" className="section" aria-label="Technology stack">
      <div className="container-x">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools of the Trade"
          align="center"
        />

        {/* Floating icon cloud */}
        <Reveal delay={0.15}>
          <div className="card-surface relative mt-14 h-[280px] overflow-hidden sm:h-[340px] md:h-[380px]">
            <div
              aria-hidden
              className="bg-dots absolute inset-0 opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]"
            />
            {ICON_CLOUD.map((item) => {
              const entry = CLOUD_ICONS[item.name];
              if (!entry) return null;
              const { Icon, label } = entry;
              return (
                <div
                  key={item.name}
                  className="group absolute animate-float"
                  style={{
                    left: `min(${item.x}%, calc(100% - ${item.size + 10}px))`,
                    top: `min(${item.y}%, calc(100% - ${item.size + 10}px))`,
                    animationDuration: `${item.dur}s`,
                    animationDelay: `${item.delay}s`,
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-2xl border border-line bg-card text-ink shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:text-accent group-hover:shadow-lift max-sm:scale-90"
                    style={{ width: item.size, height: item.size }}
                    title={label}
                  >
                    <Icon size={item.size * 0.45} />
                  </div>
                  <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Grouped lists */}
        <div className="mt-10 space-y-0 border-t border-line">
          {TECH_GROUPS.map((group, i) => (
            <Reveal key={group.label} delay={0.05 * i}>
              <div className="grid gap-3 border-b border-line py-6 md:grid-cols-[220px_1fr] md:items-baseline">
                <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
