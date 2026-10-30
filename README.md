# Kehinde Abiuwa — Portfolio

Personal site for Kehinde Abiuwa, Cloud Engineer & Solutions Architect.
Built by JayDev Studio with Next.js 14 (App Router), Tailwind CSS and Framer Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production check before pushing
```

Deploy: push to GitHub and import the repo in Vercel. No environment variables needed.

## Pages

| Route | What's on it |
| --- | --- |
| `/` | Hero, stats, about preview, tools marquee, case-study previews, press, call to action |
| `/about` | Full story in a white text box, tools marquee |
| `/work` | Four case studies (white cards) and the services clients can hire him for (dark cards) |
| `/experience` | Timeline, each role in a white card |
| `/lab` | Featured repositories, the 41-lab notebook with topic filters, Dev.to series |
| `/recognition` | Press coverage with article screenshots, the Titans of Tech award, certifications |
| `/contact` | Email, socials, and separate cards for recruiters and clients |

Card rule used throughout: on dark sections cards are white, on white sections cards are dark.

## Where things live

| What | Where |
| --- | --- |
| All copy, links, page headers, stats, case studies, labs, press, certifications | `src/lib/data.ts` |
| Colours (ink, ivory, brass) and marquee speed | `tailwind.config.ts` |
| Fonts, justified text rules, button styles | `src/app/globals.css` |
| KA monogram (vector, uses currentColor) | `src/components/Monogram.tsx` |
| Favicon / Apple icon / share image | `src/app/icon.svg`, `src/app/apple-icon.png`, `public/og.jpg` |
| Photos, award images and press screenshots | `public/images/` |
| Tool logos (official brand colours, from Devicon) | `public/icons/` |

## Before going live

1. **CV download.** Save a public copy of the CV (without phone number or home address) as
   `public/cv/kehinde-abiuwa-cv.pdf`, then set `cvAvailable: true` in `src/lib/data.ts`.
   Until then, every CV button opens an email asking for it, so nothing links to a missing file.
2. **Domain.** If you use a custom domain, update `metadataBase` in `src/app/layout.tsx`
   so social share previews point at the right URL.
3. **CI/CD article series.** The Dev.to links for the 7-part CI/CD series in the GitHub README
   are draft preview links. Once they are published, add them to `articles` in `src/lib/data.ts`.

## Notes

- Every paragraph is justified on every screen size, with hyphenation (`lang="en-GB"`) to keep
  word spacing even on phones. Centred intro paragraphs use `.justify-center-last`.
- Fonts are self-hosted through Fontsource (Cormorant Garamond + Manrope), so there is no runtime
  call to Google Fonts.
- Motion respects the visitor's reduced-motion setting; the tool marquee pauses on hover.
