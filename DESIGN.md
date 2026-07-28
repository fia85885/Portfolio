# Design Analysis — Reference Deconstruction

The reference (`refrence/UI.webp`) is a minimal personal-portfolio landing page.
This document records what was extracted from it and how each decision maps to
the AI-engineer rebuild.

## Typography

- Single grotesque sans throughout (Helvetica-like) → rebuilt with **Geist**
  (display) + **Inter** (body fallback).
- Hero "Hello" is enormous (~90px+), tight leading (~0.95), heavy negative
  tracking → `.text-hero` = `clamp(3.5rem, 9vw, 5.625rem)`, `-0.04em`.
- Section titles ~56px → `.text-display` = `clamp(2.125rem, 4.6vw, 3.5rem)`.
- Eyebrow labels are tiny (11–12px), uppercase, letter-spaced, prefixed with a
  colored dot ("• Experiences") → `SectionHeading` component.
- Body 16px, secondary copy in a muted gray.

## Color

- Warm off-white canvas (#FAFAFA), pure white cards, near-black ink (#111),
  gray secondary (#6B7280).
- Accents are used *sparingly* — a single small colored dot, dark pill
  buttons. Rebuild adds one restrained blue accent (#3B82F6) as glow/dot only.
- Two dark inversions: the mid-page CTA banner and the footer (#0B0B0C).

## Grid & Spacing

- Content column ≈ 1140–1160px, generous horizontal padding.
- Section rhythm ≈ 96–128px vertical (`.section` = `py-24 md:py-32`).
- Cards use large radius (24px → `rounded-3xl`), hairline borders
  (`rgba(0,0,0,.06)`), and soft, wide shadows.
- Works/Blog grids are 3-up with equal gutters (~24px).

## Section-by-section mapping

| Reference                          | Rebuild                                        |
| ---------------------------------- | ---------------------------------------------- |
| Nav: glyph left, links, "Book A Call ↗" | Monogram FK, links, ⌘K, theme, "Let's Talk ↗" |
| Hero: stats top-left, huge "Hello", portrait right, scroll-down | Same composition; counters (3+ projects, 15+ tech…), monochrome portrait placeholder with glass chips |
| About: story left, stat card center (120%), bullets right | Story · 95%-relevance stat card · "+" bullets; plus 6 premium info cards (MSc, B.Tech, Focus, Languages, Location, Availability) |
| "Explore My Design Journey" rows with tag pills, one expanded with thumbs | "Explore My AI Journey" — internships as rows, current role expanded with thumbnails + arrow button |
| Dark "Free Consultation" banner    | Dark "Open to AI Engineering Roles" banner     |
| Latest Works 3-up cards            | Featured AI Projects — large interactive cards with handcrafted mock dashboards (RAG chat, MCP terminal, agent pipeline), filters + search |
| Design Insights & Trends blog cards | AI Insights & Notes — 3 typographic-cover cards with read-time pills |
| "Got a Vision?" centered CTA       | "Let's Build Intelligent Systems Together." + contact form (EmailJS w/ mailto fallback) |
| Dark footer, big email             | Dark footer, giant `fia85885@gmail.com`, nav, socials, back-to-top |

Sections the brief added beyond the reference (Specializations, Tech Stack
cloud, Education timeline, Certifications, GitHub showcase) reuse the same
card language, eyebrow headings and rhythm so they read as native.

## Animation plan

- One easing everywhere: `cubic-bezier(0.22, 1, 0.36, 1)` (`lib/motion.ts`).
- House reveal: blur + rise on scroll (`<Reveal>`), 0.7s, staggered ~80ms.
- Hero: sequential rise cascade; GSAP floats the background orbs and rotates
  the dashed ring; glass chips float on CSS keyframes.
- Counters animate on first view (Framer `animate`).
- Magnetic wrapper on primary buttons/socials; hover lift + shadow on cards.
- Lenis smooth scroll; scroll-progress bar; preloader wipe (clip-path).
- Everything honors `prefers-reduced-motion` (components bail out; global CSS
  kill-switch as backstop).

## Component architecture

```
app/            layout (SEO, fonts, JSON-LD), page, robots, sitemap, og-image
components/
  layout/       navbar, footer, preloader, cursor, scroll-progress,
                back-to-top, command-palette, theme-toggle, smooth-scroll
  sections/     hero, about, experience, banner-cta, projects,
                project-mocks, specializations, tech-stack, education,
                certifications, github-showcase, blog, contact-cta
  ui/           button, badge, reveal, counter, magnetic,
                section-heading, portrait
constants/      all resume-derived content (single source of truth)
hooks/ lib/ types/ styles/
```

Content lives exclusively in `constants/` — the components are pure layout,
so swapping copy, projects or links never touches JSX.
