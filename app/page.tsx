import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { BannerCta } from "@/components/sections/banner-cta";
import { Projects } from "@/components/sections/projects";
import { Specializations } from "@/components/sections/specializations";
import { TechStack } from "@/components/sections/tech-stack";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { GithubShowcase } from "@/components/sections/github-showcase";
import { Blog } from "@/components/sections/blog";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <BannerCta />
      <Projects />
      <Specializations />
      <TechStack />
      <Education />
      <Certifications />
      <GithubShowcase />
      <Blog />
      <ContactCta />
    </main>
  );
}
