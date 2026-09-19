# Build report

Date: 2026-09-19. Build: `node build.js` — 37 generated pages plus `/todo`, `robots.txt`, `sitemap.xml`.

## Lighthouse (mobile emulation, throttled, local static server)

| Page | Performance | Accessibility | Best practices | SEO |
| --- | --- | --- | --- | --- |
| Home `/` | 100 | 100 | 100 | 100 |
| `/services/tracheostomy-care` | 99 | 100 | 100 | 100 |
| `/families/gapp` | 99 | 100 | 100 | 100 |

Home LCP 1.8 s, CLS 0, TBT 0 ms on throttled mobile. Production hosting adds compression and cache headers, which the local server lacks.

## Accessibility check (axe-core 4.x, WCAG 2.0/2.1/2.2 A+AA plus best-practice rules)

Run on all 40 routes (every sitemap URL plus `/todo`, `/es`, `/404.html`, `/thanks-request-care`):
**0 violations on every page.**

Issues found during the build and fixed before this report:

* Small white text on the sky band failed 4.5:1 — the closing band's secondary line and inverse links on sky are now 24px Figtree 600, per the brand rule that only 24px+ white type sits on sky.
* `/services` jumped h1 to h3 — a visually hidden h2 now labels the grid.
* Header logo `width`/`height` didn't match the PNG's real aspect ratio — replaced with right-sized 2x derivatives (WebP with PNG fallback).

## Other checks

* Internal link check: every `href`/`src` on every page resolves inside `dist/`. 0 broken.
* Keyboard: dropdowns open on click, close on Escape (verified in headless Chromium); mobile panel opens, traps scroll, closes on Escape.
* Placeholders: 542 `[bracketed]` items across 36 pages, all listed on `/todo` (global footer/band items listed once).

## Screenshots

`docs/screenshots/`: Home at 1280 and 390, tracheostomy care, GAPP and eligibility, Refer a patient and Careers at 1280, plus the open desktop dropdown and the mobile menu panel.
