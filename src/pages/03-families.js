// The four family pages, from website-content/pages/for-families/*.
const H = require('../helpers');
const S = require('../site');
const { requestCareForm } = require('../forms');

const crumbsBase = ['For families', '/families/how-it-works'];

/* ---------- How it works ---------- */
const howSteps = [
  ['You call. Or we call you.',
    'Talk to an owner, not a screener. We’ll ask about your child, the equipment, the diagnosis, and whether your child has Georgia Medicaid. If GAPP doesn’t look like a fit, we’ll say so and tell you what might be.',
    'You need: 15 minutes and your child’s basic medical history.'],
  ['We build the GAPP request.',
    'We collect what Georgia Medicaid requires: the physician’s plan of treatment, medical records, the medication list and equipment details. We fill out the forms with you and get your doctor’s signature. [Owner 2 name] does this personally.',
    'You need: to sign a few forms and tell us your doctor’s name.'],
  ['Georgia Medicaid reviews.',
    'Medicaid’s review team decides whether skilled nursing is approved and how many hours. Georgia Medicaid says a decision can take up to 30 days after a complete request. We can’t speed that up or promise the result, but we make sure nothing is missing, and we call you the day we hear.',
    'You need: patience, and a phone we can reach.'],
  ['Nursing starts.',
    'An RN visits your home and writes the plan of care with you. We match nurses to your child’s equipment and schedule and check their competency on your setup. An owner comes to the first shift.',
    'You need: a place for the nurse to chart and a copy of the emergency plan on the fridge.'],
];

const howItWorks = {
  path: '/families/how-it-works',
  navId: 'families',
  title: 'How It Works · Little Hearts Home Care',
  description: 'From your first call to the first nursing shift: how Little Hearts Home Care helps Georgia families get pediatric nursing at home through GAPP.',
  ctaBand: 'standard',
  crumbs: [crumbsBase, ['How it works', '/families/how-it-works']],
  body: [
    `<section class="hero" aria-label="Introduction"><div class="inner">
      <p class="lh-eyebrow">For families</p>
      <h1 class="lh-h1">From your first call to the first shift.</h1>
      <p class="lead lh-body-lg">Here is what happens, in order, and who does what. Most of the work is ours. Your part is a few signatures and a home visit.</p>
    </div></section>`,
    H.section(`<div class="grid-2">${howSteps.map(([t, b, need], i) => `
      <div class="lh-card step-card">
        <span class="lh-step" aria-hidden="true">${i + 1}</span>
        <h2 class="lh-h3">${t}</h2>
        <p class="lh-body">${b}</p>
        <p class="lh-small"><b>${need.split(':')[0]}:</b>${need.split(':').slice(1).join(':')}</p>
      </div>`).join('')}</div>`,
      { white: true, label: 'The steps' }),
    H.section(
      `<h2 class="lh-h2">Coming home from the hospital?</h2>
      <p class="lh-body mt-4 measure">Call us as soon as discharge is being discussed, even if the date isn’t set. We work with the discharge planner so the GAPP request, the equipment and the nursing schedule are ready when your child is. Hospital discharges go to the front of our calendar. [CONFIRM]</p>`,
      { tight: true, label: 'Coming home from the hospital' }),
    H.section(
      `<h2 class="lh-h2">What it’s like after the first week</h2><div class="mt-6">${H.stepGrid([
        ['Your nurses', 'The same nurses as often as we can manage. When someone new is coming, you hear it from us first.'],
        ['Your owners', 'Three cell numbers. Clinical questions, paperwork, scheduling. Call the one that fits, or any of them.'],
        ['Your renewals', 'GAPP approvals expire. We track the dates and start renewals early, so your child’s hours don’t lapse. [CONFIRM]'],
      ], 3)}</div>`,
      { white: true, label: 'After you start' }),
    H.section(
      H.sectionHead('Straight answers', 'Questions parents ask us first') +
      H.faqGrid(S.FAQ_PREVIEW) +
      `<p class="after-grid">${H.link('All questions', '/resources/faq')}</p>` +
      `<p class="after-grid">${H.link('GAPP and eligibility', '/families/gapp')} &nbsp; ${H.link('Request care', '/families/request-care')}</p>`,
      { label: 'Frequently asked questions' }),
  ].join('\n'),
};

/* ---------- GAPP and eligibility ---------- */
const gapp = {
  path: '/families/gapp',
  navId: 'families',
  title: 'GAPP and Eligibility · Little Hearts Home Care',
  description: 'Who qualifies for the Georgia Pediatric Program (GAPP), what it pays for, and how Little Hearts Home Care helps Georgia families apply. Plain English.',
  ctaBand: 'standard',
  crumbs: [crumbsBase, ['GAPP and eligibility', '/families/gapp']],
  body: [
    `<section class="hero" aria-label="Introduction"><div class="inner">
      <p class="lh-eyebrow">For families</p>
      <h1 class="lh-h1">GAPP, in plain English.</h1>
      <p class="lead lh-body-lg">The Georgia Pediatric Program (GAPP) is a Georgia Medicaid program. It pays for skilled nursing at home, and in some cases personal care support, for medically fragile children under 21. Here is what it covers, who qualifies, and how the decision gets made.</p>
    </div></section>`,
    H.section(
      `<h2 class="lh-h2">Who qualifies</h2><div class="grid-3 mt-6">
        <div class="lh-card"><h3 class="lh-h4">Your child is under 21.</h3><p class="lh-small mt-2">GAPP serves children from birth until they turn 21.</p></div>
        <div class="lh-card"><h3 class="lh-h4">Your child has Georgia Medicaid.</h3><p class="lh-small mt-2">Any Georgia Medicaid plan, including the CMO plans (Amerigroup, CareSource, Peach State) and fee for service. [CONFIRM current plan names]</p></div>
        <div class="lh-card"><h3 class="lh-h4">Your child’s doctor documents a need for skilled nursing.</h3><p class="lh-small mt-2">The doctor signs a plan of treatment that says what nursing tasks your child needs and how often.</p></div>
      </div>
      <p class="lh-body mt-6 measure">All three have to be true. If your child doesn’t have Medicaid yet, read the Katie Beckett section below before you give up.</p>`,
      { white: true, label: 'Who qualifies' }),
    H.section(
      `<h2 class="lh-h2">What GAPP pays for</h2><div class="split mt-6">
        <div><h3 class="lh-h4">Covered</h3><div class="mt-4">${H.checkList([
          'Private duty nursing at home by an RN or LPN, for the hours Medicaid approves',
          'Nursing for ventilators, trachs, feeding tubes, oxygen, seizures and complex medications',
          'Personal care support services by an aide, in some cases including a trained parent [CONFIRM: whether Little Hearts provides this]',
        ], true)}</div></div>
        <div><h3 class="lh-h4">Not covered by GAPP</h3><ul class="lh-body mt-4">
          <li>Housekeeping and babysitting</li>
          <li>Therapy visits (PT, OT, speech)</li>
          <li>Medical equipment and supplies (those come through DME benefits)</li>
          <li>Care for other family members</li>
        </ul></div>
      </div>`,
      { label: 'What GAPP pays for' }),
    H.section(
      `<div class="truth-box" style="margin-top:0">${H.icon('care-coordination', 40)}<div>
        <h2 class="lh-h3">Who decides, and what we control</h2>
        <p class="lh-body mt-3">Georgia Medicaid’s review team decides whether your child qualifies and how many hours are approved. They decide from the documents: the doctor’s plan of treatment, medical records, and the forms. We don’t decide, and no agency can promise you a number of hours before the review. What we control is the request. We make it complete, we make it clear, and we follow it until there is an answer.</p>
      </div></div>`,
      { white: true, tight: true, label: 'Who decides' }),
    H.section(
      `<h2 class="lh-h2">What the request needs</h2><div class="mt-6">${H.checkList([
        'Proof of Georgia Medicaid',
        'Physician plan of treatment, signed and dated within the last 30 days',
        'Medicaid forms DMA-6A and DMA-80 [CONFIRM current form names]',
        'Recent hospital or specialist records',
        'Current medication list with doses',
        'Equipment list: vent, pump, oxygen, monitors',
        'A description of what caregivers do at home now and where the gaps are',
      ])}</div>
      <p class="lh-body mt-5 measure">We gather and fill out all of this with you. You sign.</p>`,
      { label: 'The paperwork' }),
    H.section(
      `<h2 class="lh-h2">How long it takes</h2><div class="mt-6">${H.stepGrid([
        ['Getting the packet together', 'Usually one to three weeks, mostly waiting on records and signatures. [CONFIRM]'],
        ['Medicaid’s review', 'Georgia Medicaid says up to 30 days after a complete request.'],
        ['Starting nursing', 'As soon as we have the approval and a matched nurse. Hospital discharges are staffed first when we can.'],
      ], 3)}</div>`,
      { white: true, label: 'Timeline' }),
    H.section(
      `<div class="split">
        <div><h2 class="lh-h3">Renewals</h2><p class="lh-body mt-3">GAPP approvals are time limited. Renewal needs updated orders, records and forms. We track your dates and start early. [CONFIRM tracking process]</p></div>
        <div><h2 class="lh-h3">Appeals</h2><p class="lh-body mt-3">If Medicaid denies the request or approves fewer hours than your doctor ordered, you have the right to appeal. We’ll help you and your doctor put the appeal together.</p></div>
      </div>`,
      { tight: true, label: 'Renewals and appeals' }),
    H.section(
      `<h2 class="lh-h2">Katie Beckett</h2>
      <p class="lh-body mt-4 measure">Georgia’s Katie Beckett program (also called the Deeming Waiver) lets a child with significant medical needs qualify for Medicaid based on the child’s own income and needs, not the parents’ income. If you’ve been told your family earns too much, ask us about it. Many GAPP families got there through Katie Beckett.</p>`,
      { white: true, tight: true, label: 'Katie Beckett' }),
    H.section(
      `<h2 class="lh-h2" id="form">See if your child qualifies</h2>
      <p class="lh-body mt-3 measure">Fill this out and one of the three owners will call you.</p>
      <div class="mt-6">${requestCareForm()}</div>`,
      { label: 'Request care' }),
  ].join('\n'),
};

/* ---------- Paid parent caregiver ---------- */
const paidParent = {
  path: '/families/paid-parent-caregiver',
  navId: 'families',
  title: 'Paid Parent Caregiver in Georgia · Little Hearts Home Care',
  description: 'Georgia allows parents to be paid for personal care support hours under GAPP. What that means, what it doesn’t, and how Little Hearts Home Care handles it.',
  ctaBand: 'standard',
  crumbs: [crumbsBase, ['Paid parent caregiver', '/families/paid-parent-caregiver']],
  body: [
    `<section class="hero" aria-label="Introduction"><div class="inner">
      <p class="lh-eyebrow">For families</p>
      <h1 class="lh-h1">Can I be paid to care for my own child?</h1>
      <p class="lead lh-body-lg">In some cases, yes. Georgia Medicaid allows parents and other legally responsible adults to be paid for personal care support hours under the Georgia Pediatric Program (GAPP). Here is what that means, plainly.</p>
      <p class="hero-note lh-small">[CONFIRM: Keep this page only if Little Hearts is enrolled to provide GAPP personal care support services (PCS) and will employ parents. If not, replace the page with a short note under GAPP and eligibility that points families to agencies that do.]</p>
    </div></section>`,
    H.section(
      `<div class="lh-card lh-card--flat"><h2 class="lh-h3">What the rule says</h2>
      <p class="lh-body mt-3 measure">Georgia Medicaid approved payment to parents and legal guardians for personal care services to children under 21 in GAPP. The approval runs through December 31, 2029. Personal care means help with daily living: bathing, feeding, dressing, positioning, toileting. It does not mean skilled nursing tasks. Skilled nursing still has to be done by an RN or LPN.</p></div>`,
      { white: true, tight: true, label: 'What Georgia allows' }),
    H.section(
      `<h2 class="lh-h2">How it works with us</h2><div class="mt-6">${H.stepGrid([
        ['Approval', 'Your child is approved for personal care support hours by Georgia Medicaid.'],
        ['Training', 'You complete the training and screening our agency requires for every aide. [CONFIRM: what the training covers and how long it takes]'],
        ['We employ you', 'We employ you as a caregiver and schedule you for the approved hours.'],
        ['You are paid', 'You chart the hours you work, and we pay you on our regular payroll. [CONFIRM pay rate and schedule]'],
      ])}</div>`,
      { label: 'How it works with us' }),
    H.section(
      `<div class="split">
        <div><h2 class="lh-h3">It doesn’t mean</h2><ul class="lh-body mt-4">
          <li>Payment for skilled nursing hours. Those go to an RN or LPN.</li>
          <li>Payment for all the hours you already spend caring for your child. Only the hours Medicaid approves.</li>
          <li>A guaranteed number of hours. Medicaid decides.</li>
        </ul></div>
        <div><h2 class="lh-h3">It does mean</h2><div class="mt-4">${H.checkList([
          'Some of the care you already give can be paid.',
          'You can combine parent hours with nursing hours on the same case.',
          'You keep the right to change agencies.',
        ], true)}</div></div>
      </div>`,
      { white: true, label: 'What it does and doesn’t mean' }),
    H.section(
      `<h2 class="lh-h2">Questions</h2><div class="mt-6">${H.faqGrid([
        ['Can both parents be paid?', '[CONFIRM current rule.]'],
        ['Can a grandparent?', 'A legally responsible adult means a parent or legal guardian. Other relatives can sometimes be hired as aides through the normal route. Ask us.'],
        ['Does this affect my child’s nursing hours?', 'Personal care support and skilled nursing are separate approvals. We’ll explain how they fit together on your child’s case.'],
      ])}</div>
      <p class="after-grid">${H.link('GAPP and eligibility', '/families/gapp')} &nbsp; ${H.link('Request care', '/families/request-care')}</p>`,
      { label: 'Questions' }),
  ].join('\n'),
};

/* ---------- Request care ---------- */
const requestCare = {
  path: '/families/request-care',
  navId: 'families',
  title: 'Request Care · Little Hearts Home Care',
  description: 'Ask Little Hearts Home Care about pediatric nursing at home for your child. One of the three owners calls you back.',
  ctaBand: 'phone-only',
  crumbs: [crumbsBase, ['Request care', '/families/request-care']],
  body: [
    `<section class="hero" aria-label="Introduction"><div class="inner">
      <p class="lh-eyebrow">For families</p>
      <h1 class="lh-h1">Tell us about your child.</h1>
      <p class="lead lh-body-lg">Fill out what you know. Skip what you don’t. One of the three owners will call you, not a screener.</p>
      <p class="hero-note lh-body">If your child is in the hospital and going home soon, call <a class="lh-link" href="${S.TEL_HREF}">${S.MAIN_PHONE}</a> now instead.</p>
    </div></section>`,
    H.section(
      `<div class="split">
        <div>${requestCareForm()}</div>
        <div class="lh-card lh-card--flat">
          <h2 class="lh-h3">What happens next</h2>
          <ol class="lh-body mt-4">
            <li>An owner calls you [CONFIRM: by the next business day].</li>
            <li>We talk through your child’s needs and whether GAPP looks like a fit.</li>
            <li>If it does, we start the request with your doctor.</li>
          </ol>
          <p class="lh-small mt-4">We’ll use this to reach you about your child. We won’t share it or sell it.</p>
          <p class="mt-4">${H.link('GAPP and eligibility', '/families/gapp')}</p>
        </div>
      </div>`,
      { white: true, label: 'Request care form' }),
  ].join('\n'),
};

module.exports = [howItWorks, gapp, paidParent, requestCare];
