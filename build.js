#!/usr/bin/env node
// Static site build for littleheartshc.com. No dependencies.
// Reads src/pages/*.js, wraps each in the shared layout, writes dist/.
const fs = require('fs');
const path = require('path');
const { markPlaceholders, esc } = require('./src/helpers');
const S = require('./src/site');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');

/* ---------- layout pieces ---------- */

function headerNav(activeTop) {
  const chevron = `<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const items = S.NAV.map((item) => {
    const current = item.id === activeTop;
    if (!item.children) {
      return `<li class="nav-item"><a class="nav-top" href="${item.href}"${current ? ' aria-current="true"' : ''}>${item.label}</a></li>`;
    }
    const menu = item.children.map(([label, href]) =>
      `<li><a href="${href}">${label}</a></li>`).join('');
    return `<li class="nav-item" data-nav="${item.id}">
      <a class="nav-top" href="${item.href}"${current ? ' aria-current="true"' : ''}>${item.label}</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="menu-${item.id}">
        <span class="visually-hidden">Open ${item.label} menu</span>${chevron}
      </button>
      <ul class="nav-menu" id="menu-${item.id}">${menu}</ul>
    </li>`;
  }).join('');
  return `<nav class="site-nav" aria-label="Main">
    <ul>${items}</ul>
  </nav>`;
}

function mobilePanel() {
  const groups = S.NAV.map((item) => {
    if (!item.children) {
      return `<details><summary>${item.label}</summary><ul><li><a href="${item.href}">${item.label}</a></li></ul></details>`;
    }
    const links = item.children.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join('');
    return `<details><summary>${item.label}</summary><ul><li><a href="${item.href}">${item.label} overview</a></li>${links}</ul></details>`;
  }).join('');
  return `<div class="mobile-panel" id="mobile-panel" hidden>
    <div class="mobile-panel__top">
      <picture>
        <source srcset="/assets/derived/header-mark.webp" type="image/webp">
        <img src="/assets/derived/header-mark.png" alt="Little Hearts Home Care" height="40" width="42">
      </picture>
      <button class="mobile-panel__close" type="button" id="panel-close">Close<span class="visually-hidden"> menu</span></button>
    </div>
    <a class="mobile-panel__phone" href="${S.TEL_HREF}">Call ${S.MAIN_PHONE}</a>
    ${groups}
    <div class="mobile-panel__links">
      <a href="/contact">Contact</a>
      <a href="/es" lang="es">Espa&ntilde;ol</a>
    </div>
  </div>`;
}

function header(page) {
  const phoneIcon = `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const ctaLabel = page.headerCta === 'apply' ? 'Apply' : 'Call an owner';
  const ctaHref = page.headerCta === 'apply' ? '/careers#apply' : S.TEL_HREF;
  return `<header class="site-header">
    <div class="inner">
      <a class="header-logo header-logo--desktop" href="/">
        <picture>
          <source srcset="/assets/derived/header-logo.webp" type="image/webp">
          <img src="/assets/derived/header-logo.png" alt="Little Hearts Home Care — home" height="64" width="196">
        </picture>
      </a>
      <a class="header-logo header-logo--mobile" href="/">
        <picture>
          <source srcset="/assets/derived/header-mark.webp" type="image/webp">
          <img src="/assets/derived/header-mark.png" alt="Little Hearts Home Care — home" height="40" width="42">
        </picture>
      </a>
      ${headerNav(page.navId)}
      <a class="lh-btn header-cta" href="${ctaHref}">${ctaLabel}</a>
      <a class="lh-btn header-call-mobile" href="${page.headerCta === 'apply' ? '/careers#apply' : S.TEL_HREF}">${page.headerCta === 'apply' ? 'Apply' : `${phoneIcon}Call`}</a>
      <button class="menu-button" type="button" id="menu-open" aria-expanded="false" aria-controls="mobile-panel">
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>
        Menu
      </button>
    </div>
  </header>
  ${mobilePanel()}`;
}

function breadcrumbs(page) {
  if (!page.crumbs || page.path === '/') return '';
  const items = [['Home', '/']].concat(page.crumbs);
  const lis = items.map(([label, href], i) => {
    const last = i === items.length - 1;
    return last
      ? `<li><span aria-current="page">${label}</span></li>`
      : `<li><a href="${href}">${label}</a></li>`;
  }).join('');
  return `<nav class="breadcrumbs lh-small" aria-label="Breadcrumb"><div class="inner"><ol>${lis}</ol></div></nav>`;
}

function footer() {
  const ownerLines = S.OWNERS.map(([name, what, phone]) =>
    `<p>${name}: ${phone}. ${what}</p>`).join('');
  const col = (heading, links) => `<div>
    <h2>${heading}</h2>
    <ul>${links.map(([label, href, lang]) => `<li><a class="lh-link lh-link--inverse" href="${href}"${lang ? ` lang="${lang}"` : ''}>${label}</a></li>`).join('')}</ul>
  </div>`;
  return `<footer class="site-footer">
    <div class="inner">
      <div>
        <p class="footer-logo"><picture>
          <source srcset="/assets/derived/footer-logo-white.webp" type="image/webp">
          <img src="/assets/derived/footer-logo-white.png" alt="Little Hearts Home Care" width="180" height="158" loading="lazy">
        </picture></p>
        <p class="footer-tagline">Skilled pediatric nursing at home for children under 21 in Georgia.</p>
        <div class="footer-owners lh-small">${ownerLines}</div>
      </div>
      ${col('Families', [
        ['How it works', '/families/how-it-works'],
        ['GAPP and eligibility', '/families/gapp'],
        ['Request care', '/families/request-care'],
        ['Questions parents ask', '/resources/faq'],
        ['Español', '/es', 'es'],
      ])}
      ${col('Professionals', [
        ['Refer a patient', '/physicians/refer'],
        ['Our clinical model', '/physicians/clinical-model'],
        ['Conditions we serve', '/physicians/conditions'],
        ['Careers', '/careers'],
      ])}
      <div>
        <h2>Contact</h2>
        <p>Main: ${S.MAIN_PHONE}<br>Fax: ${S.FAX}<br>Email: hello@littleheartshc.com [CONFIRM mailbox]<br>Office: [STREET], [CITY], GA [ZIP]</p>
        <p class="mt-3">We answer the phone [CONFIRM hours].</p>
      </div>
      <p class="footer-bottom">&copy; 2026 Little Hearts HC, LLC &middot; littleheartshc.com &middot;
        <a class="lh-link lh-link--inverse" href="/legal/privacy">Privacy</a> &middot;
        <a class="lh-link lh-link--inverse" href="/legal/terms">Terms</a> &middot;
        <a class="lh-link lh-link--inverse" href="/legal/accessibility">Accessibility</a> &middot;
        <a class="lh-link lh-link--inverse" href="/legal/nondiscrimination">Nondiscrimination notice</a>
      </p>
      <p class="footer-disclaimer lh-small">${S.DISCLAIMER}</p>
    </div>
  </footer>`;
}

function schemaBlocks(page) {
  const business = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Little Hearts Home Care',
    legalName: 'Little Hearts HC, LLC',
    url: S.SITE_URL,
    logo: `${S.SITE_URL}/assets/logos/lh-logo-stacked.png`,
    image: `${S.SITE_URL}/assets/meta/og-image.png`,
    description: 'Owner operated pediatric home nursing in Georgia. Skilled RN and LPN care at home for medically complex children under 21, paid for through the Georgia Pediatric Program (GAPP) for families who qualify.',
    medicalSpecialty: 'Pediatric',
    email: 'hello@littleheartshc.com',
    address: { '@type': 'PostalAddress', addressRegion: 'GA', addressCountry: 'US' },
    areaServed: { '@type': 'State', name: 'Georgia' },
  };
  const blocks = [business];
  if (page.crumbs && page.path !== '/') {
    const items = [['Home', '/']].concat(page.crumbs);
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map(([name, href], i) => ({
        '@type': 'ListItem', position: i + 1, name,
        item: `${S.SITE_URL}${href === '/' ? '' : href}`,
      })),
    });
  }
  if (page.faqSchema) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqSchema.map(([q, a]) => ({
        '@type': 'Question', name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    });
  }
  return blocks.map((b) => `<script type="application/ld+json">${JSON.stringify(b)}</script>`).join('\n');
}

function layout(page) {
  const canonical = `${S.SITE_URL}${page.path === '/' ? '/' : page.path}`;
  const bodyHtml = markPlaceholders(page.body);
  const bandVariant = page.ctaBand === false ? '' : S.ctaBand(page.ctaBand || 'standard');
  return `<!DOCTYPE html>
<html lang="${page.lang || 'en'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
${page.noindex ? '<meta name="robots" content="noindex">' : ''}
<link rel="canonical" href="${canonical}">
${page.hreflang || ''}
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/assets/meta/favicon-32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/assets/meta/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Little Hearts Home Care">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${S.SITE_URL}/assets/meta/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<link rel="preload" href="/assets/fonts/Figtree-Variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/AtkinsonHyperlegibleNext-Variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/css/site.css">
${schemaBlocks(page)}
<!-- analytics hook: add the owners' chosen analytics snippet here, if any -->
</head>
<body class="lh-page">
<a class="skip-link" href="#main">Skip to main content</a>
${header(page)}
${breadcrumbs(page)}
<main id="main">
${bodyHtml}
</main>
${markPlaceholders(bandVariant)}
${markPlaceholders(footer())}
<script src="/js/nav.js" defer></script>
</body>
</html>`;
}

/* ---------- build ---------- */

function writePage(page) {
  const html = layout(page);
  const outPath = page.path === '/' ? '/index.html'
    : page.path.endsWith('.html') ? page.path
    : `${page.path}/index.html`;
  const file = path.join(DIST, outPath);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  return { path: page.path, file: outPath, html };
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function bundleCss() {
  const parts = ['fonts.css', 'colors.css', 'typography.css', 'spacing.css', 'patterns.css', 'site.css']
    .map((f) => `/* === ${f} === */\n` + fs.readFileSync(path.join(ROOT, 'css', f), 'utf8'));
  fs.mkdirSync(path.join(DIST, 'css'), { recursive: true });
  fs.writeFileSync(path.join(DIST, 'css', 'site.css'), parts.join('\n'));
}

function main() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  // assets
  copyDir(path.join(ROOT, 'assets'), path.join(DIST, 'assets'));
  fs.rmSync(path.join(DIST, 'assets', 'logos', 'original-logo-supplied.png'), { force: true });
  fs.copyFileSync(path.join(ROOT, 'assets', 'meta', 'favicon.ico'), path.join(DIST, 'favicon.ico'));
  bundleCss();
  copyDir(path.join(ROOT, 'js'), path.join(DIST, 'js'));

  // pages
  const pageDir = path.join(ROOT, 'src', 'pages');
  const pages = [];
  for (const f of fs.readdirSync(pageDir).sort()) {
    if (!f.endsWith('.js')) continue;
    const mod = require(path.join(pageDir, f));
    const list = Array.isArray(mod) ? mod : [mod];
    pages.push(...list);
  }

  const written = [];
  for (const page of pages) written.push({ page, out: writePage(page) });

  // /todo — list every remaining placeholder (noindex)
  const todoEntries = [];
  for (const { page, out } of written) {
    if (page.path === '/todo') continue;
    const marks = [...new Set([...out.html.matchAll(/<mark class="todo">\[([^\]]+)\]<\/mark>/g)].map((m) => m[1]))];
    todoEntries.push({ path: page.path, title: page.title, marks });
  }
  // Marks on every page live in the shared layout (footer, CTA band); list them once.
  const globalMarks = todoEntries[0].marks.filter((m) => todoEntries.every((e) => e.marks.includes(m)));
  const pageEntries = todoEntries
    .map((e) => ({ ...e, marks: e.marks.filter((m) => !globalMarks.includes(m)) }))
    .filter((e) => e.marks.length);
  const entryHtml = (heading, href, marks) => `
      <h2 class="lh-h3">${heading}${href ? ` &middot; <a class="lh-link" href="${href}">${href}</a>` : ''} &middot; ${marks.length} item${marks.length === 1 ? '' : 's'}</h2>
      <ul class="lh-small">${marks.map((m) => `<li>[${esc(m)}]</li>`).join('')}</ul>`;
  const todoBody = `<div class="section"><div class="inner">
    <p class="lh-eyebrow">Pre-launch checklist</p>
    <h1 class="lh-h1 mt-3">Placeholders still on the site</h1>
    <p class="lh-body-lg mt-4 measure">Every <mark class="todo">[bracketed]</mark> item below must be filled in or confirmed by the owners before launch. The site is not launch ready while this page has entries. Items repeated on every page (footer, contact band) are listed once under Every page.</p>
    <div class="prose mt-6">
    ${entryHtml('Every page (shared footer and contact band)', '', globalMarks)}
    ${pageEntries.map((e) => entryHtml(esc(e.title.replace(' · Little Hearts Home Care', '')), e.path, e.marks)).join('')}
    </div>
  </div></div>`;
  writePage({
    path: '/todo',
    title: 'Launch checklist · Little Hearts Home Care',
    description: 'Internal list of placeholders to fill before launch.',
    noindex: true, ctaBand: false, crumbs: [['Launch checklist', '/todo']],
    body: todoBody,
  });

  // robots.txt + sitemap.xml
  fs.writeFileSync(path.join(DIST, 'robots.txt'),
    `User-agent: *\nAllow: /\nDisallow: /todo\nSitemap: ${S.SITE_URL}/sitemap.xml\n`);
  const urls = written
    .filter(({ page }) => !page.noindex && !page.path.endsWith('.html'))
    .map(({ page }) => `  <url><loc>${S.SITE_URL}${page.path === '/' ? '/' : page.path}</loc></url>`)
    .join('\n');
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);

  console.log(`Built ${written.length + 1} pages, ${todoEntries.reduce((n, e) => n + e.marks.length, 0)} placeholders across ${todoEntries.length} pages.`);
}

main();
