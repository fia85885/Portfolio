import type { Certification, EducationItem } from "@/types";

export const EDUCATION: EducationItem[] = [
  {
    period: "Oct 2026 — Present",
    degree: "M.Sc. Computer Science",
    school: "Universität Paderborn",
    place: "Paderborn, Germany",
    detail: "Currently enrolled",
    focus: ["Artificial Intelligence", "Research"],
    current: true,
  },
  {
    period: "Nov 2021 — May 2025",
    degree: "B.Tech in CSE — Artificial Intelligence & Machine Learning",
    school: "Lords Institute of Engineering and Technology, Osmania University",
    place: "Hyderabad, India",
    detail: "GPA 8.93 / 10",
    focus: ["Machine Learning", "Deep Learning", "NLP", "Generative AI"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    href: "https://www.coursera.org/account/accomplishments/specialization/certificate/ASFS89HATE6Z",
  },
];

export const LANGUAGES = [
  { name: "English", level: "Fluent" },
  { name: "German", level: "A2" },
] as const;
