import type { Project } from "@/types";

export const PROJECT_FILTERS = ["All", "RAG", "MCP", "Agents"] as const;

export const PROJECTS: Project[] = [
  {
    id: "medical-query-system",
    title: "Medical Query System",
    subtitle: "RAG Pipeline for clinical intelligence",
    description:
      "A retrieval-augmented generation pipeline that answers clinical and genetic disorder queries with grounded, cited responses.",
    points: [
      "Designed and implemented a RAG pipeline for clinical and genetic disorder queries.",
      "Integrated OpenAI GPT-4o-mini and text-embedding-3-small models.",
      "Achieved ~95% answer relevance on a manually evaluated validation set.",
    ],
    tech: ["Python", "OpenAI", "GPT-4o-mini", "Embeddings", "RAG"],
    categories: ["RAG"],
    github: "https://github.com/fia85885/Medical-Query-System",
    mock: "rag",
  },
  {
    id: "research-assistant-mcp",
    title: "Research Assistant",
    subtitle: "Custom MCP Server for real-time research",
    description:
      "A Model Context Protocol server that ingests research papers, embeds them, and serves grounded answers with live citations — designed for Claude Desktop.",
    points: [
      "Built a custom MCP server to ingest research papers, embed content with OpenAI embeddings, and query via ChromaDB.",
      "Integrated ArXiv and Web Search connectors with citation tracking for real-time research insights.",
      "Designed a modular, scalable architecture for seamless front-end integration (Claude Desktop).",
    ],
    tech: ["Python", "MCP", "ChromaDB", "OpenAI", "ArXiv"],
    categories: ["MCP", "RAG"],
    github: "https://github.com/fia85885/MCP-Research-Assistant",
    mock: "mcp",
  },
  {
    id: "job-alert-ai-agent",
    title: "Job Alert AI Agent",
    subtitle: "Autonomous Gmail → WhatsApp pipeline",
    description:
      "A Python-based AI agent that reads job emails from Gmail, summarizes them with OpenAI, and delivers digests straight to WhatsApp via Twilio.",
    points: [
      "Developed a Python-based AI agent connecting Gmail to WhatsApp via Twilio.",
      "Integrated Gmail APIs and OpenAI APIs to automate job email summarization and delivery.",
      "Implemented a Gmail client with robust multipart handling for both plain text and HTML content.",
    ],
    tech: ["Python", "OpenAI", "Gmail API", "Twilio", "Automation"],
    categories: ["Agents"],
    github: "https://github.com/fia85885/Job-Alert-AI-Agent",
    mock: "agent",
  },
];
