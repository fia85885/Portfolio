# Furqan Ahmed Khan — AI/ML Engineer Portfolio

A handcrafted, single-page portfolio built to mirror the provided reference
design system, rebuilt for an AI engineering identity.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **TailwindCSS** (design tokens via CSS variables, dark mode)
- **Framer Motion** (reveals, counters, magnetic, transitions) · **GSAP**
  (ambient hero motion) · **Lenis** (smooth scroll)
- **cmdk** (⌘K command palette) · **next-themes** · **Lucide** + **React Icons**
- **EmailJS** contact form with graceful `mailto:` fallback

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Configuration

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO / sitemap / robots |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service (optional) |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template (optional) |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key (optional) |

Without EmailJS keys the contact form delivers via
[FormSubmit](https://formsubmit.co) directly to `fia85885@gmail.com` — the
first-ever submission triggers a one-time activation email you must click.
See `docs/CONTACT_EMAIL.md` for details and email templates.

## Editing content

All copy, projects, experience, skills and links live in `constants/` —
components never hard-code content.

- `constants/site.ts` — name, role, links, stats, intro
- `constants/projects.ts` — featured projects (+ mock previews in
  `components/sections/project-mocks.tsx`)
- `constants/experience.ts`, `education.ts`, `skills.ts`, `github.ts`, `blog.ts`

The resume served by the Download button is `public/Furqan_Ahmed_Khan_Resume.pdf`.

## Features

Dark/light theme · ⌘K command palette · Lenis smooth scroll · preloader ·
custom cursor · scroll progress · animated counters · magnetic buttons ·
project filters + search · reduced-motion support · JSON-LD, OpenGraph,
sitemap.xml, robots.txt · Vercel Analytics ready.

## Deploy

Push to a Git repo and import into [Vercel](https://vercel.com) — zero config
required. Set `NEXT_PUBLIC_SITE_URL` to the production domain.

See `DESIGN.md` for the reference-design analysis this build follows.
