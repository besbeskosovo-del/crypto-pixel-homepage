// Resources hub, GAPP guide, FAQ. From website-content/pages/resources/*.
const H = require('../helpers');
const S = require('../site');

const crumbsBase = ['Resources', '/resources'];

/* ---------- Resource hub ---------- */
const hub = {
  path: '/resources',
  navId: 'resources',
  title: 'Family Resources · Little Hearts Home Care',
  description: 'Links and downloads for Georgia families of medically complex children: GAPP, Katie Beckett, Medicaid plans, equipment, respite and support.',
  ctaBand: 'standard',
  crumbs: [crumbsBase],
  body: [
    `<section class="hero" aria-label="Introduction"><div class="inner">
      <p class="lh-eyebrow">Resources</p>
      <h1 class="lh-h1">Things parents ask us for.</h1>
      <p class="lead lh-body-lg">Links we send families most often, in one place. If you can’t find something, call an owner and ask.</p>
    </div></section>`,
    H.section(
      `<h2 class="lh-h2">From us</h2><div class="grid-3 mt-6">
        <div class="lh-card"><h3 class="lh-h4"><a class="lh-link" href="/resources/gapp-guide">GAPP guide</a></h3><p class="lh-small mt-2">The long version, with the document checklist.</p></div>
        <div class="lh-card"><h3 class="lh-h4"><a class="lh-link" href="/resources/faq">Questions parents ask us</a></h3><p class="lh-small mt-2">Every FAQ, grouped.</p></div>
      </div>`,
      { white: true, label: 'From us' }),
    H.section(
      `<h2 class="lh-h2">Georgia programs</h2><ul class="lh-body mt-6">
        <li><b>Georgia Pediatric Program (GAPP)</b>, Georgia Department of Community Health. The state program that pays for nursing at home. Search “GAPP Georgia DCH” for the official page.</li>
        <li><b>Katie Beckett (Deeming Waiver).</b> Medicaid for children with significant needs based on the child’s income, not the parents’.</li>
        <li><b>Georgia Medicaid CMO plans.</b> Your child’s Medicaid card says which plan they have. Ask us if you’re not sure.</li>
        <li><b>Children’s Medical Services (Georgia DPH).</b> Care coordination for children with special health care needs.</li>
        <li><b>Babies Can’t Wait.</b> Early intervention for children under three.</li>
        <li><b>Georgia Family Support / NOW and COMP waivers.</b> Developmental disability supports through DBHDD.</li>
        <li><b>Parent to Parent of Georgia.</b> Family to family support and navigation.</li>
      </ul>`,
      { label: 'Georgia programs' }),
    H.section(
      `<h2 class="lh-h2">Practical</h2><ul class="lh-body mt-6">
        <li>Georgia Power and Georgia EMC medical priority programs for families with life support equipment at home</li>
        <li>Your county’s 911 special needs registry, where offered</li>
        <li>Ronald McDonald House Charities of Georgia</li>
        <li>Children’s Healthcare of Atlanta family resource library</li>
      </ul>`,
      { white: true, label: 'Practical' }),
  ].join('\n'),
};

/* ---------- GAPP guide (long form with sticky TOC) ---------- */
const GUIDE = [
  ['what-gapp-is', 'What GAPP is',
   `<p>GAPP is a Georgia Medicaid program run by the Georgia Department of Community Health. It pays for medically necessary nursing care and personal care support services at home for medically fragile children under 21 who have Georgia Medicaid. The care is delivered by GAPP enrolled agencies like ours.</p>`],
  ['who-qualifies', 'Who qualifies',
   `<p>Three things must be true: your child is under 21, has Georgia Medicaid, and has a documented need for skilled nursing or personal care support. The need is documented by your child’s physician on a plan of treatment. Common examples: ventilator dependence, tracheostomy, feeding tube dependence, seizure disorders needing rescue medication, and complex medication regimens. A diagnosis alone doesn’t qualify a child; the documented need does.</p>`],
  ['what-it-pays-for', 'What it pays for and what it doesn’t',
   `<p>Pays for: skilled nursing by an RN or LPN at home; personal care support by an aide, in some cases including a trained parent. Doesn’t pay for: housekeeping, childcare, therapy sessions, medical equipment and supplies, or care for anyone but the child. Those may be covered by other Medicaid benefits.</p>`],
  ['who-decides', 'Who decides',
   `<p>Georgia Medicaid’s medical review team (through its contractor, currently Alliant Health Solutions, or your child’s CMO plan) reviews the request and decides approval and hours. Agencies don’t decide. Doctors recommend; Medicaid approves.</p>`],
  ['the-documents', 'The documents',
   `<ul>
      <li>Proof of active Georgia Medicaid</li>
      <li>Physician plan of treatment, signed and dated within 30 days of submission</li>
      <li>The current Medicaid forms: DMA-6A (valid for one year) and DMA-80</li>
      <li>A caregiver and home information supplement, completed with the agency</li>
      <li>Letter of understanding and freedom of choice forms, signed yearly</li>
      <li>Recent hospital and specialist records, medication list, equipment list</li>
      <li>Optional: a letter of medical necessity from the physician, which helps</li>
    </ul>
    <p>We prepare all of it with you.</p>`],
  ['the-timeline', 'The timeline',
   `<p>Assembling the packet usually takes one to three weeks, mostly waiting on records and signatures. Georgia Medicaid says the review can take up to 30 days after a complete request. Hospital discharges can move faster when the inpatient team and the agency work together. We can’t promise a date.</p>`],
  ['hours', 'Hours',
   `<p>Medicaid approves hours based on documented medical necessity: what your child’s doctor says is needed and what the records support. No agency can promise a number of hours before the review. If the approved hours are fewer than your doctor ordered, you can appeal. See <a class="lh-link" href="#denials-and-appeals">Denials and appeals</a>.</p>`],
  ['choosing-agencies', 'Choosing and changing agencies',
   `<p>You choose the GAPP agency. You can change agencies without losing your child’s approval. If you’re unhappy with an agency, you don’t have to stay.</p>`],
  ['renewals', 'Renewals',
   `<p>GAPP approvals are time limited. Renewal needs an updated plan of treatment, records and forms, and the DMA-6A expires every year. We track your dates and start renewals 30 to 60 days early so hours don’t lapse.</p>`],
  ['denials-and-appeals', 'Denials and appeals',
   `<p>If Medicaid denies or reduces hours, you get a written notice with the reason and your appeal rights. Appeals have deadlines. We help you and your doctor answer the reason in the notice with the right documents. Ask us the day you get a notice.</p>`],
  ['paid-parent-caregivers', 'Paid parent caregivers',
   `<p>Georgia Medicaid allows parents and legal guardians to be paid for personal care support hours under GAPP, approved through December 31, 2029. This covers daily living care, not skilled nursing. See our <a class="lh-link" href="/families/paid-parent-caregiver">paid parent caregiver page</a>.</p>`],
  ['katie-beckett', 'Katie Beckett',
   `<p>If your family’s income is too high for regular Medicaid, the Katie Beckett program (Deeming Waiver) can qualify your child based on the child’s own income and level of need. Katie Beckett Medicaid can then be used for GAPP. Applications go through Georgia’s Division of Family and Children Services and a medical review. Start early; it takes months.</p>`],
  ['turning-21', 'Turning 21',
   `<p>GAPP ends at 21. Adult Medicaid programs and waivers (such as the NOW and COMP waivers, or the Independent Care Waiver Program) have their own rules and waiting lists. We start the conversation with you a year ahead.</p>`],
];

const gappGuide = {
  path: '/resources/gapp-guide',
  navId: 'resources',
  title: 'The Georgia Pediatric Program (GAPP) Guide · Little Hearts Home Care',
  description: 'A parent’s guide to GAPP in Georgia: eligibility, documents, timeline, hours, renewals, appeals, paid parent caregiving and Katie Beckett. Plain English.',
  ctaBand: 'standard',
  crumbs: [crumbsBase, ['GAPP guide', '/resources/gapp-guide']],
  body: [
    `<section class="hero" aria-label="Introduction"><div class="inner">
      <p class="lh-eyebrow">Resources</p>
      <h1 class="lh-h1">The GAPP guide.</h1>
      <p class="lead lh-body-lg">Everything we tell families about the Georgia Pediatric Program (GAPP), written down. Read the parts you need. Call an owner for the rest.</p>
    </div></section>`,
    H.section(
      `<div class="article-layout">
        <nav class="article-toc" aria-label="Contents">
          <h2 class="lh-h4">Contents</h2>
          <ol>${GUIDE.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol>
        </nav>
        <div class="article-body lh-body">
          ${GUIDE.map(([id, t, html], i) => `<h2 class="lh-h3" id="${id}">${i + 1}. ${t}</h2>${html}`).join('\n')}
        </div>
      </div>`,
      { white: true, label: 'GAPP guide' }),
  ].join('\n'),
};

/* ---------- FAQ ---------- */
const FAQ_GROUPS = [
  ['Cost and GAPP', [
    ['Do we really pay nothing?', 'If your child qualifies for the Georgia Pediatric Program (GAPP), Georgia Medicaid pays for our nursing. You pay nothing out of pocket for it. There are no application fees.'],
    ['Who qualifies?', 'Children under 21 with Georgia Medicaid and a physician documented need for skilled nursing at home. Read <a class="lh-link" href="/families/gapp">GAPP and eligibility</a>.'],
    ['How many hours will we get?', 'Georgia Medicaid decides that from what your child’s doctor documents. We can’t promise a number. We’ll help you ask for what your child needs, and help you appeal if the answer is less than that.'],
    ['How long does approval take?', 'Georgia Medicaid says up to 30 days after a complete request. Putting the request together usually takes one to three weeks before that.'],
    ['We were told we make too much for Medicaid.', 'Ask us about Katie Beckett. It qualifies children based on their own income and needs, not the parents’.'],
    ['Can I be paid to care for my child?', 'In some cases, for personal care support hours. Read <a class="lh-link" href="/families/paid-parent-caregiver">Paid parent caregiver</a>.'],
  ]],
  ['Nurses and care', [
    ['Who will be in my home?', 'A pediatric RN or LPN with an active Georgia license, BLS, a background check and health clearances, matched to your child’s equipment and checked on it before the first shift.'],
    ['Will it be the same nurse?', 'We keep the same nurses on a case as long as we can. When someone new is coming, we tell you first.'],
    ['Are your nurses trained on my child’s vent or trach?', 'Every nurse on a trach or vent case shows competency on that equipment before the first shift. If your child uses equipment we haven’t staffed, we train on it with your supplier first.'],
    ['Can the nurse take my child to school or appointments?', 'It depends on your child’s plan of care and what Medicaid approved. Ask us about your child’s case and we’ll tell you plainly.'],
    ['What does the nurse do if my child gets sick on a shift?', 'Follows the plan of care and your doctor’s parameters, calls the RN supervisor and your doctor, and calls 911 if your child needs it. Then calls you.'],
  ]],
  ['Scheduling and contact', [
    ['Who do I call at night?', 'You’ll reach an owner, not an answering service. We go over after hours contact with you at the first visit.'],
    ['What if our nurse can’t make a shift?', 'We’ll tell you as soon as we know, and we’ll tell you what we’re doing to fill it. We won’t leave you guessing.'],
    ['Can we choose nights or school hours?', 'Tell us the hours that matter most and we staff toward them. Approved hours are set by Medicaid; when they fall is worked out with you.'],
    ['Do you cover my county?', 'We staff across metro Atlanta and take calls from all of Georgia. Call and we’ll tell you plainly.'],
  ]],
  ['Getting started', [
    ['My child is in the hospital. When should I call?', 'Now, even without a discharge date. We work with the discharge planner so nursing is ready when your child comes home.'],
    ['What do I need for the first call?', 'Fifteen minutes, your child’s basic history, and whether your child has Georgia Medicaid.'],
    ['Can we switch to you from another agency?', 'Yes. Your child’s GAPP approval stays with your child, not the agency.'],
    ['What happens at 21?', 'GAPP ends at 21. We start planning the transition with you a year ahead.'],
  ]],
];

const stripTags = (s) => s.replace(/<[^>]+>/g, '');

const faq = {
  path: '/resources/faq',
  navId: 'resources',
  title: 'FAQ · Little Hearts Home Care',
  description: 'Straight answers about cost, GAPP, hours, nurses, scheduling and what to expect from pediatric home nursing with Little Hearts Home Care in Georgia.',
  ctaBand: 'standard',
  crumbs: [crumbsBase, ['Questions parents ask us', '/resources/faq']],
  faqSchema: FAQ_GROUPS.flatMap(([, items]) => items.map(([q, a]) => [q, stripTags(a)])),
  body: [
    `<section class="hero" aria-label="Introduction"><div class="inner">
      <p class="lh-eyebrow">Resources</p>
      <h1 class="lh-h1">Questions parents ask us.</h1>
      <p class="lead lh-body-lg">Every question, grouped, all answers open so you can read or print the whole page.</p>
    </div></section>`,
    ...FAQ_GROUPS.map(([group, items], i) => H.section(
      `<h2 class="lh-h2">${group}</h2><div class="mt-6">${H.faqGrid(items)}</div>`,
      { white: i % 2 === 0, label: group })),
  ].join('\n'),
};

module.exports = [hub, gappGuide, faq];
