// Shared HTML helpers. Every visual value comes from the brand kit tokens.
const fs = require('fs');
const path = require('path');

const ICON_DIR = path.join(__dirname, '..', 'assets', 'icons');
const iconCache = {};

// Inline a brand icon SVG, stripped of metadata, decorative by default.
function icon(name, size = 56, extraClass = '') {
  if (!iconCache[name]) {
    let svg = fs.readFileSync(path.join(ICON_DIR, `${name}.svg`), 'utf8');
    svg = svg.replace(/<metadata>[\s\S]*?<\/metadata>/g, '');
    svg = svg.replace(/\s+xmlns:c2pa="[^"]*"/g, '');
    iconCache[name] = svg;
  }
  let svg = iconCache[name];
  svg = svg.replace('<svg ', `<svg aria-hidden="true" focusable="false"${extraClass ? ` class="${extraClass}"` : ''} `);
  svg = svg.replace(/width="48" height="48"/, `width="${size}" height="${size}"`);
  return svg;
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Wrap [bracketed placeholders] so the owners can find them. Applied to body HTML;
// authored markup never uses square brackets inside attributes.
function markPlaceholders(html) {
  return html.replace(/\[([^\[\]<>]{1,300})\]/g, '<mark class="todo">[$1]</mark>');
}

const btn = (label, href, extra = '') => `<a class="lh-btn" href="${href}"${extra}>${label}</a>`;
const link = (label, href, cls = 'lh-link') => `<a class="${cls}" href="${href}">${label}</a>`;

function sectionHead(eyebrow, title, body = '', headingLevel = 2) {
  return `<div class="section-head">
    ${eyebrow ? `<p class="lh-eyebrow">${eyebrow}</p>` : ''}
    <h${headingLevel} class="lh-h2">${title}</h${headingLevel}>
    ${body ? `<p class="lh-body">${body}</p>` : ''}
  </div>`;
}

function section(inner, { white = false, tight = false, label = '', id = '' } = {}) {
  return `<section class="section${white ? ' section--white' : ''}${tight ? ' section--tight' : ''}"${id ? ` id="${id}"` : ''}${label ? ` aria-label="${label}"` : ''}>
    <div class="inner">${inner}</div>
  </section>`;
}

// Service card. With href, the whole card is a link.
function serviceCard(iconName, title, body, href) {
  const inner = `<div class="lh-service">
    ${icon(iconName, 56, 'lh-service__icon')}
    <h3 class="lh-service__title">${title}</h3>
    <p class="lh-service__body">${body}</p>
  </div>`;
  return href ? `<a class="service-link" href="${href}">${inner}</a>` : inner;
}

function stepGrid(steps, cols = 4, headingTag = 'h3') {
  return `<div class="grid-${cols}">` + steps.map(([title, body], i) => `
    <div class="lh-card lh-card--flat step-card">
      <span class="lh-step" aria-hidden="true">${i + 1}</span>
      <${headingTag} class="lh-h4">${title}</${headingTag}>
      <p class="lh-small">${body}</p>
    </div>`).join('') + `</div>`;
}

function truthBox(html) {
  return `<div class="truth-box">
    ${icon('care-coordination', 40)}
    <p class="lh-body">${html}</p>
  </div>`;
}

function faqGrid(items, headingTag = 'h3') {
  return `<div class="faq-grid">` + items.map(([q, a]) => `
    <div>
      <${headingTag} class="lh-h4">${q}</${headingTag}>
      <p class="lh-small">${a}</p>
    </div>`).join('') + `</div>`;
}

function photoSlot(composition, altIntent, ratio = '3 / 2') {
  // Photography is unshot. Honest empty slot naming the composition; no stock.
  return `<div class="photo-slot" data-photo-slot="${esc(composition)}" data-alt="${esc(altIntent)}" style="aspect-ratio:${ratio}">
    <p class="lh-caption">Photo to shoot &middot; ${esc(composition)}<br>${esc(altIntent)}</p>
  </div>`;
}

function checkList(items, single = false) {
  return `<ul class="check-list${single ? ' check-list--single' : ''}">` +
    items.map((it) => `<li><span>${it}</span></li>`).join('') + `</ul>`;
}

module.exports = {
  icon, esc, markPlaceholders, btn, link, sectionHead, section,
  serviceCard, stepGrid, truthBox, faqGrid, photoSlot, checkList,
};
