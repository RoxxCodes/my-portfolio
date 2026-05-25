# Roshan Gupta — Portfolio

Personal portfolio site built with Next.js 15, TypeScript, and Tailwind CSS.

## Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Fonts:** Geist Sans + Geist Mono
- **Deployment:** Vercel (recommended)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All content lives in `src/content/` so the components stay clean:

| File                       | What it controls                          |
| -------------------------- | ----------------------------------------- |
| `profile.ts`               | Name, role, summary, bio, contact links   |
| `metrics.ts`               | The impact-numbers strip under the hero   |
| `skills.ts`                | Skill chips in the About section          |
| `experience.ts`            | Work history timeline + education         |
| `projects.ts`              | Project cards                             |
| `systemDesign.ts`          | Deep-dive architecture case studies       |

Update any of those files and the site updates automatically.

## Resume

The downloadable resume lives at `public/Roshan_Gupta_Resume.pdf`.
Replace that file (keep the same filename) to swap in a new version.

## Open Graph / social previews

`src/app/opengraph-image.tsx` dynamically generates a 1200×630 PNG for
LinkedIn, Twitter, WhatsApp, etc. Edit it to tweak branding.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Accept defaults — Vercel auto-detects Next.js.
4. (Optional) Add a custom domain in the Vercel dashboard.

## Production build

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Home page composition
│   ├── globals.css         # Tailwind + design tokens
│   └── opengraph-image.tsx # Dynamic OG image
├── components/             # Section + UI components
├── content/                # All editable content
└── lib/                    # Small utilities
```
