// Global site data and shared blocks, from website-content/02-menu-structure.md
// and 03-global-elements.md. Square brackets are owner placeholders on purpose.
const { btn, link, serviceCard, stepGrid, faqGrid } = require('./helpers');

const SITE_URL = 'https://littleheartshc.com';
const MAIN_PHONE = '[MAIN PHONE]';
const FAX = '[FAX]';
const TEL_HREF = 'tel:+10000000000'; // replace with the real main number

const NAV = [
  {
    label: 'For families', href: '/families/how-it-works', id: 'families',
    children: [
      ['How it works', '/families/how-it-works'],
      ['GAPP and eligibility', '/families/gapp'],
      ['Paid parent caregiver', '/families/paid-parent-caregiver'],
      ['Request care', '/families/request-care'],
    ],
  },
  {
    label: 'Services', href: '/services', id: 'services',
    children: [
      ['Private duty nursing', '/services/private-duty-nursing'],
      ['Respiratory care', '/services/respiratory-care'],
      ['Ventilator management', '/services/ventilator-management'],
      ['Enteral feeding', '/services/enteral-feeding'],
      ['G tube care', '/services/g-tube-care'],
      ['Tracheostomy care', '/services/tracheostomy-care'],
      ['Medication management', '/services/medication-management'],
      ['Care coordination', '/services/care-coordination'],
    ],
  },
  {
    label: 'For physicians', href: '/physicians/refer', id: 'physicians',
    children: [
      ['Refer a patient', '/physicians/refer'],
      ['Our clinical model', '/physicians/clinical-model'],
      ['Conditions we serve', '/physicians/conditions'],
    ],
  },
  {
    label: 'Resources', href: '/resources', id: 'resources',
    children: [
      ['Family resource hub', '/resources'],
      ['GAPP guide', '/resources/gapp-guide'],
      ['Questions parents ask', '/resources/faq'],
    ],
  },
  { label: 'About', href: '/about', id: 'about' },
  { label: 'Careers', href: '/careers', id: 'careers' },
];

// The eight services: [slug, icon, title, one-line body] from home.md.
const SERVICES = [
  ['private-duty-nursing', 'Private duty nursing', 'A pediatric RN or LPN in your home for the hours GAPP approves.'],
  ['respiratory-care', 'Respiratory care', 'Suction, oxygen and breathing treatments, as your doctor ordered.'],
  ['ventilator-management', 'Ventilator management', 'Settings checks, alarms and circuit changes on home vents.'],
  ['enteral-feeding', 'Enteral feeding', 'Pump and bolus feeds on schedule, with intake logged.'],
  ['g-tube-care', 'G tube care', 'Site care, venting, and what to do if the button comes out.'],
  ['tracheostomy-care', 'Tracheostomy care', 'Trach care, suction and tie changes. Emergency kit checked every shift.'],
  ['medication-management', 'Medication management', 'The right dose at the right time, logged for every nurse.'],
  ['care-coordination', 'Care coordination', 'Your doctors, supply company and case manager, on the same page.'],
];

function servicesGrid(excludeSlug) {
  const items = SERVICES.filter(([slug]) => slug !== excludeSlug);
  return `<div class="grid-4">` +
    items.map(([slug, title, body]) => serviceCard(slug, title, body, `/services/${slug}`)).join('') +
    `</div>`;
}

const GAPP_STEPS = [
  ['Call us', 'Talk to an owner. We’ll ask about your child and tell you plainly whether GAPP looks like a fit.'],
  ['We build the request', 'We work with your child’s doctor to gather orders and records for a complete request.'],
  ['Medicaid reviews', 'Georgia Medicaid decides if nursing is approved and how many hours. We tell you as soon as we hear.'],
  ['Nursing starts', 'We match a nurse to your child, and an owner comes to the first visit.'],
];

const FAQ_PREVIEW = [
  ['Do we really pay nothing?', 'If your child qualifies for GAPP, Georgia Medicaid pays for our nursing. You pay nothing out of pocket for it.'],
  ['How many hours will we get?', 'Georgia Medicaid decides that, not us. We’ll help you ask for what your child’s doctor orders.'],
  ['Who do I call at night?', 'You’ll reach an owner, not an answering service. We go over after hours contact with you at the first visit.'],
  ['What if our nurse can’t make a shift?', 'We’ll tell you as soon as we know, and we’ll tell you what we’re doing to fill it.'],
];

const PROOF_STRIP = `
<div class="proof-strip">
  <div class="inner">
    <p><b>Owner operated.</b> When you call, you reach the people who run the agency.</p>
    <p><b>No out of pocket cost.</b> For families whose children qualify for GAPP.</p>
    <p><b>Children under 21.</b> Medically complex kids, newborns to young adults.</p>
  </div>
</div>`;

const TRUST_LINE = `Georgia licensed private home care provider [LICENSE NUMBER] &middot; Enrolled GAPP provider [CONFIRM] &middot; Nurses screened, trained and supervised by an RN`;

const DISCLAIMER = 'Georgia Medicaid decides who qualifies for the Georgia Pediatric Program (GAPP), which services are covered and how many hours are approved. Nothing on this site is a promise of approval or hours. Talk to your child’s doctor about medical decisions. If your child is having an emergency, call 911.';

// Closing CTA band. Variants from 03-global-elements.md.
function ctaBand(variant = 'standard') {
  let heading, lead = '', button, secondary;
  if (variant === 'physician') {
    heading = 'Refer a patient. Talk to an owner, not an intake queue.';
    button = btn('Send a referral', '/physicians/refer#form');
    secondary = `Fax ${FAX} or call <a class="lh-link lh-link--inverse" href="${TEL_HREF}">${MAIN_PHONE}</a>`;
  } else if (variant === 'careers') {
    heading = 'One child, one family, one shift at a time.';
    button = btn('Apply', '/careers#apply');
    secondary = '';
  } else if (variant === 'phone-only') {
    heading = 'Talk to an owner today.';
    lead = 'We’ll tell you plainly what we can do.';
    button = btn(`Call ${MAIN_PHONE}`, TEL_HREF);
    secondary = '';
  } else {
    heading = 'Talk to an owner today.';
    lead = 'We’ll tell you plainly what we can do.';
    button = btn(`Call ${MAIN_PHONE}`, TEL_HREF);
    secondary = `Or <a class="lh-link lh-link--inverse" href="/families/request-care">send a request and we’ll call you</a>`;
  }
  return `<section class="lh-band band--center" aria-label="Contact Little Hearts">
    <div class="inner">
      <h2 class="lh-band__title">${heading}</h2>
      ${lead ? `<p class="lh-band__lead">${lead}</p>` : ''}
      <p>${button}</p>
      ${secondary ? `<p class="band-secondary">${secondary}</p>` : ''}
    </div>
  </section>`;
}

module.exports = {
  SITE_URL, MAIN_PHONE, FAX, TEL_HREF, NAV, SERVICES, servicesGrid,
  GAPP_STEPS, FAQ_PREVIEW, PROOF_STRIP, TRUST_LINE, DISCLAIMER, ctaBand,
  stepGrid, faqGrid,
};
