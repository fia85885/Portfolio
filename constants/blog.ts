import type { BlogPost } from "@/types";

/** Placeholder editorial content — topics reflect real areas of practice. */
export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Designing Production-Ready RAG Pipelines",
    excerpt:
      "Chunking strategies, embedding models and evaluation loops — what actually matters when retrieval meets generation.",
    tag: "RAG",
    readTime: "5 min read",
    glyph: "RAG",
    hue: "from-sky-200/70 to-blue-300/50 dark:from-sky-500/20 dark:to-blue-500/10",
    image: "/blog/rag.png",
  },
  {
    title: "Building MCP Servers for AI Assistants",
    excerpt:
      "How the Model Context Protocol turns LLMs into extensible research tools — architecture, connectors and citation tracking.",
    tag: "MCP",
    readTime: "6 min read",
    glyph: "MCP",
    hue: "from-zinc-200/80 to-slate-300/60 dark:from-zinc-500/20 dark:to-slate-500/10",
    image: "/blog/mcp.png",
  },
  {
    title: "Prompt Engineering Patterns That Hold Up",
    excerpt:
      "Beyond one-shot tricks: structured prompting, guardrails and evaluation habits for reliable LLM outputs.",
    tag: "LLMs",
    readTime: "4 min read",
    glyph: "LLM",
    hue: "from-indigo-200/70 to-violet-300/50 dark:from-indigo-500/20 dark:to-violet-500/10",
    image: "/blog/llm.png",
  },
];
