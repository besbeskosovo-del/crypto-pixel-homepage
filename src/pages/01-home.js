// Home, from website-content/pages/home.md.
const H = require('../helpers');
const S = require('../site');

const heroSection = `<section class="hero" aria-label="Introduction">
  <div class="inner hero--split">
    <div>
      <p class="lh-eyebrow">Pediatric home nursing in Georgia</p>
      <h1 class="lh-display">Skilled nursing at home for children with complex medical needs.</h1>
      <p class="lead lh-body-lg">Pediatric RNs and LPNs in your home, for children under 21 on vents, trachs, feeding tubes and more. If your child qualifies for the Georgia Pediatric Program (GAPP), you pay nothing out of pocket.</p>
      <div class="hero-actions">
        ${H.btn('Talk to an owner', S.TEL_HREF)}
        ${H.link('See if your child qualifies', '/families/gapp')}
      </div>
      <p class="hero-note lh-small">Georgia Medicaid decides approval and hours. We help you with every form.</p>
      <p class="hero-note lh-small">${S.TRUST_LINE}</p>
    </div>
    ${H.photoSlot('Composition A, floor time', 'A nurse kneels beside a child playing on a living room floor, a ventilator on its cart behind them.')}
  </div>
</section>`;

const ownersBand = `<section class="lh-band" aria-label="The owners">
  <div class="inner">
    <h2 class="lh-band__title">Three owners. One phone call.</h2>
    <p class="lh-band__lead">No call center. No rotating coordinator. Every family gets all three of us.</p>
    <div class="grid-3 band-cards">
      ${S.OWNERS.map(([name]) => `
      <div class="lh-card lh-card--raised">
        <h3 class="lh-h4">${name}</h3>
        <p class="lh-small mt-2">[One line: what families call this owner about.]</p>
      </div>`).join('')}
    </div>
    <p class="mt-6"><a class="lh-link lh-link--inverse" href="/about">Meet the owners</a></p>
  </div>
</section>`;

const servicesSection = H.section(
  H.sectionHead('What our nurses do', 'Care that follows your child’s orders, at home.',
    'Every nurse we send is matched to your child’s equipment and needs before the first shift.') +
  S.servicesGrid(),
  { label: 'Our services' });

const gappSection = H.section(
  H.sectionHead('Georgia Pediatric Program (GAPP)', 'How GAPP works',
    'GAPP is a Georgia Medicaid program. It pays for skilled nursing at home for children under 21 who qualify.') +
  H.stepGrid(S.GAPP_STEPS) +
  H.truthBox('<b>What we can’t promise.</b> We can’t control whether GAPP is approved or how many hours are approved. We can make sure the request is complete, and we’ll help you appeal if you want to.') +
  `<p class="after-grid">${H.link('Read the full GAPP guide', '/resources/gapp-guide')}</p>`,
  { white: true, label: 'How GAPP works' });

const audienceSection = H.section(`<div class="grid-2">
  <div class="lh-card audience-card">
    ${H.photoSlot('Composition B, kitchen table', 'An owner and a parent go through GAPP paperwork together at a kitchen table.', '2 / 1')}
    <p class="lh-eyebrow">For physicians, discharge planners and case managers</p>
    <h2 class="lh-h3">Refer a patient. Talk to an owner, not an intake queue.</h2>
    <ul class="lh-body">
      <li>Pediatric patients under 21 with skilled nursing needs</li>
      <li>Vent, trach, G tube and enteral feeding cases</li>
      <li>We handle the GAPP request with the family</li>
    </ul>
    <div class="card-actions">
      ${H.btn('Send a referral', '/physicians/refer')}
      ${H.link('Download the referral form (PDF) [CONFIRM: build]', '/physicians/refer')}
    </div>
  </div>
  <div class="lh-card audience-card">
    ${H.photoSlot('Composition C, detail', 'A nurse’s hands checking a feeding pump, the child’s drawing taped to the IV pole.', '2 / 1')}
    <p class="lh-eyebrow">For pediatric RNs and LPNs</p>
    <h2 class="lh-h3">One child, one family, one shift at a time.</h2>
    <ul class="lh-body">
      <li>Pediatric home cases across metro Atlanta and Georgia</li>
      <li>Trach and vent experience welcome; we train on the rest</li>
      <li>An owner’s number, not a ticket system</li>
    </ul>
    <div class="card-actions">
      ${H.btn('See open cases', '/careers')}
      ${H.link('What a shift looks like', '/careers#shift')}
    </div>
  </div>
</div>`, { label: 'Referrers and nurses' });

const serviceArea = H.section(
  H.sectionHead('', 'Where we work',
    'We staff cases across metro Atlanta and take calls from anywhere in Georgia. If you’re outside the counties below, call anyway. We’ll tell you plainly if we can cover you.') +
  `<p class="lh-body measure">[CONFIRM county list. Suggested starting list: Fulton, DeKalb, Cobb, Gwinnett, Clayton, Henry, Cherokee, Forsyth, Douglas, Fayette, Rockdale, Paulding, Coweta, Newton, Hall, Bartow, Carroll, Walton]</p>`,
  { label: 'Service area' });

// Families' words: dropped until real, released quotes exist (per home.md).

const faqSection = H.section(
  H.sectionHead('Straight answers', 'Questions parents ask us first') +
  H.faqGrid(S.FAQ_PREVIEW) +
  `<p class="after-grid">${H.link('All questions', '/resources/faq')}</p>`,
  { white: true, label: 'Frequently asked questions' });

module.exports = {
  path: '/',
  navId: '',
  title: 'Pediatric Home Nursing in Georgia · Little Hearts Home Care',
  description: 'Owner operated pediatric home nursing in Georgia. Skilled RN and LPN care at home for medically complex children under 21, paid for through GAPP for families who qualify.',
  ctaBand: 'standard',
  crumbs: null,
  body: [heroSection, S.PROOF_STRIP, ownersBand, servicesSection, gappSection, audienceSection, serviceArea, faqSection].join('\n'),
};
