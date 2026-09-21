# Little Hearts Home Care — littleheartshc.com

Static website for Little Hearts Home Care, built from the Little Hearts brand kit (design source of truth) and the `website-content/` copy deck (structure and copy source of truth). No CMS, no client side framework; the shipped pages are plain HTML, one CSS file and one small progressive enhancement script for the menus and form errors.

## Install and build

Requires Node 18+. There are no npm dependencies.

```
node build.js        # builds the whole site into dist/
npm run serve        # serves dist/ at http://localhost:8080 (python3)
```

`dist/` is committed, so the current build is always browsable and deployable without running anything.

## Deploy

Deploy the `dist/` folder to any static host (Netlify, Cloudflare Pages, Vercel).

* Build command: `node build.js` · Publish directory: `dist`
* The three forms are marked up for **Netlify Forms** (`data-netlify`, honeypot field, success pages at `/thanks-request-care`, `/thanks-refer-a-patient`, `/thanks-apply`). On another host, point each form's `action` at Formspree or a small serverless function and keep the honeypot and server side validation.
* `robots.txt`, `sitemap.xml`, `404.html`, favicons and the Open Graph image are generated into `dist/`.

## Where things live

| Path | What it is |
| --- | --- |
| `build.js` | The whole build: shared layout (header, breadcrumbs, footer, CTA band), schema.org, sitemap, robots, and the `/todo` placeholder report. |
| `src/site.js` | Global data: navigation, the eight services, owners, disclaimer, CTA band variants, phone placeholders. |
| `src/pages/*.js` | One module per page group. The page copy lives here, taken verbatim from the copy deck. |
| `src/forms.js` | The three forms (request care, refer a patient, apply). |
| `src/helpers.js` | HTML helpers: cards, grids, checklists, inline icons, placeholder marking. |
| `css/` | Brand tokens (copied unchanged from the kit: colors, typography, spacing, patterns) plus `site.css` (page layout only). Bundled into `dist/css/site.css` at build. |
| `js/nav.js` | Dropdowns, mobile panel, form error messages. The site works without it. |
| `assets/` | Logos, the eight service icons, the two variable fonts (SIL OFL), derived favicons/OG image/right-sized header logos. |
| `docs/` | Build report and screenshots. |

## How to update a page

1. Find the page in `src/pages/` (file names follow the site map).
2. Edit the HTML template string. Use the `lh-*` classes and CSS custom properties; never write a color, size or font as a literal.
3. Run `node build.js` and check the page in `dist/`.

## How to fill in placeholders

Everything the owners must supply is written as `[square brackets]` in the source and rendered highlighted with `<mark class="todo">`. The build collects every remaining placeholder onto **`/todo`** (noindex), grouped by page. The site is not launch ready while `/todo` has entries. Most placeholders live in `src/site.js` (phone numbers, owners) — fill those once and they update everywhere. When you set the real main phone number, also replace `TEL_HREF` in `src/site.js`.

## How to add a Spanish page

Spanish routes are currently omitted (per the owners' request, until a human translation reviewed by a native speaker exists). To add them back, create `src/pages/08-es.js` exporting page objects that mirror the English ones with translated `body`, `lang: 'es'` and paired `hreflang` links; keep "GAPP" and "Georgia Medicaid" untranslated.

## Rules the build enforces

* Copy comes from `website-content/pages/` verbatim; placeholders stay visible.
* Coral is the only button and link accent; sky bands carry only 24px+ white type; accent colors appear only inside the service icons.
* WCAG 2.2 AA: skip link, one h1, landmarks, 3px focus ring, 48px tap targets, labelled fields with plain-word errors, `prefers-reduced-motion` respected. `docs/build-report.md` has the axe-core and Lighthouse results.
* Photo slots render honest empty frames (`data-photo-slot`) naming the composition to shoot. No stock photography.
