import {
  Brain,
  Network,
  Sparkles,
  Wand2,
  FileSearch,
} from "lucide-react";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiLangchain,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import type { CloudIcon, Specialization, TechGroup } from "@/types";

export const SPECIALIZATIONS: Specialization[] = [
  {
    name: "Machine Learning",
    blurb: "Supervised, unsupervised & reinforcement learning",
    icon: Brain,
  },
  {
    name: "Deep Learning",
    blurb: "Neural networks with PyTorch & TensorFlow",
    icon: Network,
  },
  {
    name: "Generative AI",
    blurb: "LLM-powered applications & pipelines",
    icon: Sparkles,
  },
  {
    name: "Prompt Engineering",
    blurb: "Structured prompting for reliable outputs",
    icon: Wand2,
  },
  {
    name: "RAG",
    blurb: "Retrieval-augmented generation with vector search",
    icon: FileSearch,
  },
  {
    name: "LangChain",
    blurb: "Chains, agents & tool orchestration",
    icon: SiLangchain,
  },
  {
    name: "OpenAI APIs",
    blurb: "GPT-4o & embedding model integration",
    icon: RiOpenaiFill,
  },
  {
    name: "TensorFlow",
    blurb: "Model building, training & evaluation",
    icon: SiTensorflow,
  },
  {
    name: "PyTorch",
    blurb: "Research-grade deep learning workflows",
    icon: SiPytorch,
  },
  {
    name: "Python",
    blurb: "The backbone of every system I build",
    icon: SiPython,
  },
];

export const TECH_GROUPS: TechGroup[] = [
  { label: "Programming", items: ["Python"] },
  {
    label: "Frameworks",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "Hugging Face",
      "LangChain",
      "Streamlit",
    ],
  },
  {
    label: "AI / ML Expertise",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Generative AI",
      "RAG Pipelines",
      "Agentic AI",
    ],
  },
  { label: "Databases", items: ["ChromaDB"] },
  {
    label: "Developer Tools",
    items: ["Git", "Matplotlib", "Prompt Engineering", "MS Office"],
  },
];

/** Deterministic scatter layout for the floating icon cloud. */
export const ICON_CLOUD: CloudIcon[] = [
  { name: "python", x: 10, y: 22, size: 58, dur: 6.5, delay: 0 },
  { name: "pytorch", x: 27, y: 58, size: 48, dur: 7.2, delay: 0.4 },
  { name: "tensorflow", x: 44, y: 18, size: 46, dur: 6.1, delay: 0.8 },
  { name: "openai", x: 60, y: 55, size: 54, dur: 7.8, delay: 0.2 },
  { name: "langchain", x: 77, y: 20, size: 50, dur: 6.8, delay: 0.6 },
  { name: "huggingface", x: 88, y: 58, size: 44, dur: 7.4, delay: 1.0 },
  { name: "streamlit", x: 18, y: 78, size: 40, dur: 6.4, delay: 1.2 },
  { name: "database", x: 52, y: 80, size: 42, dur: 7.0, delay: 0.9 },
  { name: "git", x: 70, y: 76, size: 40, dur: 6.2, delay: 0.5 },
  { name: "chart", x: 34, y: 38, size: 38, dur: 7.6, delay: 1.4 },
];
