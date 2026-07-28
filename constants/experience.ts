import type { ExperienceItem } from "@/types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Unified Mentor Pvt Ltd",
    location: "Hyderabad, India",
    role: "Machine Learning Intern",
    period: "Oct 2025 — Apr 2026",
    current: true,
    points: [
      "Developing and deploying Machine Learning models for real-world applications.",
      "Working with Supervised, Unsupervised, and Reinforcement Learning techniques.",
      "Achieved ~90% accuracy in classification model development.",
    ],
    tags: ["Machine Learning", "Model Deployment"],
  },
  {
    company: "Hunt Metrics Pvt Ltd",
    location: "Hyderabad, India",
    role: "Cybersecurity Intern",
    period: "Aug 2023 — Sep 2023",
    points: [
      "Developed a proof-of-concept exploit for XXE vulnerabilities demonstrating SSRF attacks.",
      "Performed vulnerability analysis and provided recommendations to improve system defences.",
      "Delivered recommendations that reduced exposure to potential security risk by ~30%.",
    ],
    tags: ["Security", "Vulnerability Analysis"],
  },
];
