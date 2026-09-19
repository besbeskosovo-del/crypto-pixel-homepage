// Form success pages (messages from 03-global-elements.md) and the 404 page.
const H = require('../helpers');
const S = require('../site');

function thanksPage(path, title, heading, bodyHtml) {
  return {
    path,
    navId: '',
    title,
    description: 'Little Hearts Home Care has received your message.',
    noindex: true,
    ctaBand: false,
    crumbs: [['Thank you', path]],
    body: `<section class="hero" aria-label="Confirmation"><div class="inner">
      <h1 class="lh-h1">${heading}</h1>
      <p class="lead lh-body-lg">${bodyHtml}</p>
      <div class="hero-actions">${H.btn('Back to the home page', '/')}</div>
    </div></section>`,
  };
}

const thanksRequest = thanksPage('/thanks-request-care',
  'Request received · Little Hearts Home Care',
  'Thank you.',
  `One of the three owners will call you [CONFIRM: by the next business day]. If your child is in the hospital and going home soon, call <a class="lh-link" href="${S.TEL_HREF}">${S.MAIN_PHONE}</a> now.`);

const thanksRefer = thanksPage('/thanks-refer-a-patient',
  'Referral received · Little Hearts Home Care',
  'Received.',
  `An owner will call you [CONFIRM: within one business day]. For a discharge this week, call <a class="lh-link" href="${S.TEL_HREF}">${S.MAIN_PHONE}</a> instead of waiting.`);

const thanksApply = thanksPage('/thanks-apply',
  'Application received · Little Hearts Home Care',
  'Thanks.',
  `[Owner, clinical lead] reviews every application personally and will call you [CONFIRM: within two business days].`);

const notFound = {
  path: '/404.html',
  navId: '',
  title: 'Page Not Found · Little Hearts Home Care',
  description: 'That page doesn’t exist. Here is how to find what you need.',
  noindex: true,
  ctaBand: 'standard',
  crumbs: null,
  body: `<section class="hero" aria-label="Page not found"><div class="inner">
    <h1 class="lh-h1">We can’t find that page.</h1>
    <p class="lead lh-body-lg">The link may be old or mistyped. These pages answer most questions, or call an owner and ask.</p>
    <div class="hero-actions">
      ${H.btn(`Call ${S.MAIN_PHONE}`, S.TEL_HREF)}
      ${H.link('Home', '/')}
      ${H.link('Our services', '/services')}
      ${H.link('GAPP and eligibility', '/families/gapp')}
      ${H.link('Contact', '/contact')}
    </div>
  </div></section>`,
};

module.exports = [thanksRequest, thanksRefer, thanksApply, notFound];
