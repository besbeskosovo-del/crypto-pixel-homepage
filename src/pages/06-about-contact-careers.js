// About, Contact, Careers. From website-content/pages/{about,contact,careers}.md.
const H = require('../helpers');
const S = require('../site');
const { applyForm } = require('../forms');

/* ---------- About ---------- */
const about = {
  path: '/about',
  navId: 'about',
  title: 'About Us · Little Hearts Home Care',
  description: 'Little Hearts Home Care is owner operated: the people who run the agency answer the phone. Pediatric home nursing in Georgia for children under 21.',
  ctaBand: 'standard',
  crumbs: [['About us', '/about']],
  body: [
    `<section class="hero" aria-label="Introduction"><div class="inner">
      <p class="lh-eyebrow">About Little Hearts</p>
      <h1 class="lh-h1">Owners who answer their own phones.</h1>
      <p class="lead lh-body-lg">We started Little Hearts because families of medically complex children deserve a nursing agency small enough to reach and serious enough to trust. When you call, you reach the people who run it.</p>
    </div></section>`,
    H.section(
      `<h2 class="lh-h2">How we run the agency</h2><div class="grid-4 mt-6">
        <div class="lh-card lh-card--flat"><h3 class="lh-h4">Small on purpose.</h3><p class="lh-small mt-2">We take on the cases we can staff well. We’d rather say no than send a nurse who doesn’t know your child’s equipment.</p></div>
        <div class="lh-card lh-card--flat"><h3 class="lh-h4">Nurses who stay.</h3><p class="lh-small mt-2">We match a nurse to your child and keep the same nurses on the case for as long as we can, so they learn your child’s baseline.</p></div>
        <div class="lh-card lh-card--flat"><h3 class="lh-h4">An RN supervises every case.</h3><p class="lh-small mt-2">An RN supervisor reviews the care plan, checks nurse competency on your child’s equipment and visits the home.</p></div>
        <div class="lh-card lh-card--flat"><h3 class="lh-h4">The paperwork is our job.</h3><p class="lh-small mt-2">GAPP forms, physician orders, renewals and appeals. You sign. We chase.</p></div>
      </div>`,
      { white: true, label: 'How we run' }),
    H.section(
      `<h2 class="lh-h2">Licensed and accountable</h2>
      <p class="lh-body mt-4 measure">Little Hearts HC, LLC is licensed by the Georgia Department of Community Health as a private home care provider, license [CONFIRM license number]. We are an enrolled Georgia Medicaid and GAPP provider [CONFIRM]. Our nurses hold active Georgia RN or LPN licenses, current BLS, background checks and health clearances. We follow HIPAA.</p>`,
      { tight: true, label: 'Licenses and standards' }),
    S.PROOF_STRIP,
  ].join('\n'),
};

/* ---------- Contact ---------- */
const contact = {
  path: '/contact',
  navId: '',
  title: 'Contact Us · Little Hearts Home Care',
  description: 'Call an owner of Little Hearts Home Care directly. Pediatric home nursing in Georgia. Phone, fax, email and office address.',
  ctaBand: 'phone-only',
  crumbs: [['Contact', '/contact']],
  body: [
    `<section class="hero" aria-label="Introduction"><div class="inner">
      <h1 class="lh-h1">Call us. You’ll reach an owner.</h1>
      <p class="lead lh-body-lg">No phone tree. No call center. Call the main number or send the form, and the people who run the agency will sort it out with you.</p>
    </div></section>`,
    H.section(
      `<div class="split">
        <div class="lh-body">
          <h2 class="lh-h2">Reach us</h2>
          <p class="mt-4"><b>Main phone:</b> <a class="lh-link" href="${S.TEL_HREF}">${S.MAIN_PHONE}</a><br>
          <b>Fax (referrals and orders):</b> ${S.FAX}<br>
          <b>Email:</b> hello@littleheartshc.com<br>
          <b>Office:</b> [STREET], [CITY], GA [ZIP]. By appointment.<br>
          <b>Hours:</b> [CONFIRM office hours]. Families on service get an after hours contact plan at the first visit.</p>
          <p class="mt-4"><b>Emergencies:</b> Call 911. Then call us.</p>
        </div>
        ${H.photoSlot('Office or map', 'The Little Hearts office entrance, or a simple map to it.')}
      </div>`,
      { white: true, label: 'Contact details' }),
    H.section(
      `<h2 class="lh-h2">Which page do you need?</h2><div class="grid-3 mt-6">
        <div class="lh-card lh-card--flat"><h3 class="lh-h4">Families</h3><p class="lh-small mt-2">${H.link('Request care', '/families/request-care')}</p></div>
        <div class="lh-card lh-card--flat"><h3 class="lh-h4">Physicians and case managers</h3><p class="lh-small mt-2">${H.link('Refer a patient', '/physicians/refer')}</p></div>
        <div class="lh-card lh-card--flat"><h3 class="lh-h4">Nurses</h3><p class="lh-small mt-2">${H.link('Apply', '/careers')}</p></div>
      </div>`,
      { white: true, label: 'Which page do you need' }),
  ].join('\n'),
};

/* ---------- Careers ---------- */
const careers = {
  path: '/careers',
  navId: 'careers',
  headerCta: 'apply',
  title: 'Pediatric RN and LPN Jobs · Little Hearts Home Care',
  description: 'Pediatric private duty nursing jobs in metro Atlanta and Georgia. One child per shift, an RN supervisor you can reach, and an owner’s number instead of a ticket system.',
  ctaBand: 'careers',
  crumbs: [['Careers', '/careers']],
  body: [
    `<section class="hero" aria-label="Introduction"><div class="inner">
      <p class="lh-eyebrow">For pediatric RNs and LPNs</p>
      <h1 class="lh-h1">One child, one family, one shift at a time.</h1>
      <p class="lead lh-body-lg">Private duty pediatric nursing in the child’s home. You’ll know the case before your first shift, you’ll have an RN to call, and you’ll have an owner’s cell number.</p>
      <div class="hero-actions">
        ${H.btn('Apply', '#apply')}
      </div>
    </div></section>`,
    H.section(
      `<h2 class="lh-h2">What is actually different here</h2><div class="grid-3 mt-6">
        <div class="lh-card lh-card--flat"><h3 class="lh-h4">One patient. Not six.</h3><p class="lh-small mt-2">One child, one home, one plan of care, and time to do it right.</p></div>
        <div class="lh-card lh-card--flat"><h3 class="lh-h4">Owners who pick up.</h3><p class="lh-small mt-2">This is an owner operated agency. When you call about a case, you reach a decision maker, not a ticket system.</p></div>
        <div class="lh-card lh-card--flat"><h3 class="lh-h4">Trained on the child’s equipment before shift one.</h3><p class="lh-small mt-2">We check your competency on the actual vent, pump or trach setup in the home before you take the case.</p></div>
        <div class="lh-card lh-card--flat"><h3 class="lh-h4">Pay that matches the case.</h3><p class="lh-small mt-2">Hourly rates by license, experience and acuity. Trach and vent cases pay more. We tell you the rate before you accept a case.</p></div>
        <div class="lh-card lh-card--flat"><h3 class="lh-h4">Cases near you.</h3><p class="lh-small mt-2">We match you to families in your part of metro Atlanta or Georgia so the commute doesn’t eat the shift.</p></div>
      </div>`,
      { white: true, label: 'What is different here' }),
    H.section(
      `<div class="split" id="shift">
        <div>
          <h2 class="lh-h2">What a shift looks like</h2>
          <p class="lh-body mt-4">You arrive and get report from the parent or the nurse going off. You check the equipment and the emergency kit. You follow the plan of care: feeds, meds, suction, vent checks, therapies the family does at home, and the ordinary parts of a kid’s day. You chart as you go. If something changes, you call the RN supervisor, then the family’s doctor if needed. You give report at the end. Nights are quieter, but you stay awake and alert.</p>
        </div>
        ${H.photoSlot('Composition C, detail', 'A nurse’s hands checking a feeding pump, the child’s drawing taped to the IV pole.')}
      </div>`,
      { label: 'What a shift looks like' }),
    H.section(
      `<h2 class="lh-h2">Open roles</h2>
      <ul class="lh-body mt-6">
        <li><b>Pediatric RN, private duty.</b> Metro Atlanta and Georgia. Days, nights, weekends. Part time or full time.</li>
        <li><b>Pediatric LPN, private duty.</b> Same.</li>
        <li><b>Trach and vent trained nurse (RN or LPN).</b> Higher rate. Nights available.</li>
      </ul>
      <p class="lh-body mt-5 measure">We hire for specific cases. If there isn’t a match today, we keep your application and call when there is.</p>`,
      { white: true, label: 'Open roles' }),
    H.section(
      `<div class="split">
        <div><h2 class="lh-h3">Requirements</h2><ul class="lh-body mt-4">
          <li>Active, unrestricted Georgia RN or LPN license</li>
          <li>Current BLS. PALS a plus.</li>
          <li>Background check, drug screen, TB test and health clearances</li>
          <li>Reliable transportation</li>
          <li>Pediatric experience preferred. Trach, vent and G tube experience valued and paid for.</li>
          <li>Comfortable working alone in a family’s home and communicating with parents</li>
        </ul></div>
        <div><h2 class="lh-h3">What you get</h2><div class="mt-4">${H.checkList([
          'Hourly pay by license, experience and acuity',
          'Schedule you choose, cases near you',
          'Competency training on the child’s equipment',
          'An RN supervisor you can actually reach',
          'Continuity: the same child and family, shift after shift',
        ], true)}</div></div>
      </div>`,
      { label: 'What we need from you' }),
    H.section(
      `<h2 class="lh-h2" id="apply">Apply</h2>
      <div class="mt-6">${applyForm()}</div>
      <p class="form-note mt-5">We review every application ourselves. No recruiter, no automated screen.</p>`,
      { white: true, label: 'Apply' }),
  ].join('\n'),
};

module.exports = [about, contact, careers];
