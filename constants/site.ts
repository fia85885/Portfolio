import type { NavItem, Stat } from "@/types";

export const SITE = {
  name: "Furqan Ahmed Khan",
  firstName: "Furqan",
  role: "AI / ML Engineer",
  taglines: ["Generative AI", "RAG Systems", "Agentic AI", "Python"],
  email: "fia85885@gmail.com",
  github: "https://github.com/fia85885",
  githubUser: "fia85885",
  linkedin: "https://linkedin.com/in/furqan-ahmed-khan121",
  location: "Paderborn, Germany",
  resumeFile: "/Furqan_Ahmed_Khan_Resume.pdf",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://furqan-ahmed-khan.vercel.app",
  intro:
    "Computer Science graduate specializing in Artificial Intelligence and Machine Learning, with hands-on experience building RAG pipelines, AI-powered automation tools and data-driven applications in Python.",
  profile:
    "Computer Science graduate specializing in Artificial Intelligence and Machine Learning with a strong interest in machine learning, natural language processing, and generative AI. Through academic projects and internships, I have developed practical experience in building RAG pipelines, AI-powered automation tools, and data-driven applications using Python.",
  seeking:
    "I am seeking opportunities where I can contribute to meaningful AI projects while continuing to grow as an engineer and researcher.",
} as const;

export const NAV: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "GitHub", href: "#github" },
  { label: "Blog", href: "#blog" },
];

export const STATS: Stat[] = [
  { value: 3, suffix: "+", label: "AI Projects" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 4, suffix: "+", label: "Years Learning" },
  { value: 1, suffix: "", label: "Certification" },
];

export const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
} as const;
