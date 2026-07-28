import type { PinnedRepo } from "@/types";

/** Pinned repository showcase — mirrors the three featured projects. */
export const PINNED_REPOS: PinnedRepo[] = [
  {
    name: "Medical-Query-System",
    description:
      "RAG pipeline for clinical & genetic disorder queries — GPT-4o-mini + text-embedding-3-small.",
    language: "Python",
    topics: ["rag", "openai", "healthcare"],
    href: "https://github.com/fia85885/Medical-Query-System",
  },
  {
    name: "MCP-Research-Assistant",
    description:
      "Custom MCP server with ArXiv & web search connectors, ChromaDB retrieval and citation tracking.",
    language: "Python",
    topics: ["mcp", "chromadb", "arxiv"],
    href: "https://github.com/fia85885/MCP-Research-Assistant",
  },
  {
    name: "Job-Alert-AI-Agent",
    description:
      "AI agent connecting Gmail to WhatsApp via Twilio — automated job email summarization.",
    language: "Python",
    topics: ["agents", "gmail-api", "twilio"],
    href: "https://github.com/fia85885/Job-Alert-AI-Agent",
  },
];

/** Representative placeholder metrics for the showcase panel. */
export const GH_STATS = [
  { label: "Featured Projects", value: "3" },
  { label: "Primary Language", value: "Python" },
  { label: "Focus", value: "AI / ML" },
] as const;

export const TOP_LANGUAGES = [
  { name: "Python", pct: 76, color: "bg-accent" },
  { name: "Jupyter Notebook", pct: 18, color: "bg-ink/40" },
  { name: "Other", pct: 6, color: "bg-ink/15" },
] as const;
