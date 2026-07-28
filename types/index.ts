import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  current?: boolean;
  points: string[];
  tags: string[];
};

export type ProjectCategory = "RAG" | "MCP" | "Agents";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  tech: string[];
  categories: ProjectCategory[];
  github: string;
  mock: "rag" | "mcp" | "agent";
};

export type Specialization = {
  name: string;
  blurb: string;
  icon: IconType | LucideIcon;
};

export type TechGroup = {
  label: string;
  items: string[];
};

export type CloudIcon = {
  name: string;
  x: number;
  y: number;
  size: number;
  dur: number;
  delay: number;
};

export type EducationItem = {
  period: string;
  degree: string;
  school: string;
  place: string;
  detail: string;
  focus: string[];
  current?: boolean;
};

export type Certification = {
  title: string;
  issuer: string;
  href?: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  glyph: string;
  hue: string;
  image: string;
};

export type PinnedRepo = {
  name: string;
  description: string;
  language: string;
  topics: string[];
  href: string;
};
