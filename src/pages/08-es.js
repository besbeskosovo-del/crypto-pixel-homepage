// Spanish routes, from website-content/pages/spanish.md.
// Built now with the English copy and a "translation pending" notice, noindex,
// until the human translation (reviewed by a native speaker) is supplied.
const S = require('../site');

const home = require('./01-home');
const [howItWorks, gapp, , requestCare] = require('./03-families');
const [, contact] = require('./06-about-contact-careers');

const PAIRS = [
  [home, '/es', 'Enfermería pediátrica a domicilio en Georgia · Little Hearts Home Care'],
  [howItWorks, '/es/como-funciona', 'Cómo funciona · Little Hearts Home Care'],
  [gapp, '/es/gapp', 'GAPP y elegibilidad · Little Hearts Home Care'],
  [requestCare, '/es/solicitar-atencion', 'Solicitar atención · Little Hearts Home Care'],
  [contact, '/es/contacto', 'Contacto · Little Hearts Home Care'],
];

const NOTICE = `<div class="inner"><p class="notice lh-body" lang="es"><b>Traducción en curso.</b> Esta página estará disponible en español pronto. La traducción será hecha y revisada por un hablante nativo, nunca por máquina. [CONFIRM: publicar cuando la traducción esté aprobada.]
<span lang="en">Translation pending. Until it is approved, the English text is shown below.</span></p></div>`;

function hreflangLinks(enPath, esPath) {
  const enUrl = `${S.SITE_URL}${enPath === '/' ? '/' : enPath}`;
  const esUrl = `${S.SITE_URL}${esPath}`;
  return `<link rel="alternate" hreflang="en" href="${enUrl}">
<link rel="alternate" hreflang="es" href="${esUrl}">
<link rel="alternate" hreflang="x-default" href="${enUrl}">`;
}

const esPages = PAIRS.map(([en, esPath, esTitle]) => {
  const hreflang = hreflangLinks(en.path, esPath);
  en.hreflang = hreflang; // English side of the pair gets the same alternates
  return {
    ...en,
    path: esPath,
    title: esTitle,
    noindex: true,
    hreflang,
    // Keep lang="en" while the body is still the English copy; the notice is Spanish.
    lang: 'en',
    crumbs: [['Español', '/es'], ...(en.crumbs || []).slice(en.path === '/' ? 0 : 1)],
    body: NOTICE + en.body,
  };
});

module.exports = esPages;
