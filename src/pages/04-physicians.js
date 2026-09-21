// The three physician pages, from website-content/pages/for-physicians/*.
const H = require('../helpers');
const S = require('../site');
const { referralForm } = require('../forms');

const crumbsBase = ['For physicians', '/physicians/refer'];
const related = `<p class="after-grid">${H.link('Our clinical model', '/physicians/clinical-model')} &nbsp; ${H.link('Conditions we serve', '/physicians/conditions')} &nbsp; ${H.link('Refer a patient', '/physicians/refer')}</p>`;

/* ---------- Refer a patient ---------- */
const refer = {
  path: '/physicians/refer',
  navId: 'physicians',
  title: 'Refer a Patient · Little Hearts Home Care',
  description: 'Refer a pediatric patient for skilled nursing at home in Georgia. Direct line to an owner, fax for orders, and a referral form that reaches a clinician the same day.',
  ctaBand: 'physician',
  crumbs: [crumbsBase, ['Refer a patient', '/physicians/refer']],
  body: [
    `<section class="hero" aria-label="Introduction"><div class="inner">
      <p class="lh-eyebrow">For physicians, discharge planners and case managers</p>
      <h1 class="lh-h1">Refer a patient. Talk to an owner, not an intake queue.</h1>
      <p class="lead lh-body-lg">Little Hearts Home Care takes Georgia Medicaid members under 21 who need skilled nursing at home: ventilator, tracheostomy, enteral feeding, complex airway, seizure and complex medication cases. Every referral is read by an owner, not routed to a queue.</p>
      <div class="hero-actions">
        ${H.btn('Send a referral', '#form')}
        ${H.link('Fax orders to [FAX]', '/contact')}
      </div>
    </div></section>`,
    H.section(
      `<h2 class="lh-h2">What we need to start</h2><div class="mt-6">${H.checkList([
        'Patient name, date of birth and Medicaid ID (by fax or phone, not the web form)',
        'Primary diagnosis and current equipment',
        'Your plan of treatment or discharge orders, if you have them',
        'Expected discharge date, if inpatient',
        'Family contact and best language',
      ])}</div>
      <p class="lh-body mt-5 measure">We take the rest: Medicaid verification, the GAPP packet, the family’s forms and the home assessment.</p>`,
      { white: true, label: 'What we need' }),
    H.section(
      `<h2 class="lh-h2">What happens next</h2><div class="mt-6">${H.stepGrid([
        ['First call', 'An owner calls you and the family, usually the same day.'],
        ['Assessment', 'An RN completes a home or bedside assessment within a few days and drafts the plan of care.'],
        ['Submission', 'We send you the plan of treatment for signature and submit the GAPP request to Georgia Medicaid.'],
        ['Decision and staffing', 'We tell you and the family the decision the day we hear it, and we staff the case as soon as it is approved.'],
      ])}</div>`,
      { label: 'What happens next' }),
    H.section(
      `<h2 class="lh-h2">Discharge this week?</h2>
      <p class="lh-body mt-4 measure">Call <a class="lh-link" href="${S.TEL_HREF}">${S.MAIN_PHONE}</a> rather than using the form. We’ll join the discharge planning call, coordinate with the DME supplier, and check nurse competency on the patient’s equipment before the first shift.</p>`,
      { white: true, tight: true, label: 'Discharges' }),
    H.section(
      `<h2 class="lh-h2" id="form">Send a referral</h2>
      <div class="mt-6">${referralForm()}</div>
      <p class="form-note mt-5">An owner will call you within one business day of a referral. For a discharge this week, call ${S.MAIN_PHONE} instead of waiting.</p>
      <p class="after-grid">${H.link('Our clinical model', '/physicians/clinical-model')} &nbsp; ${H.link('Conditions we serve', '/physicians/conditions')}</p>`,
      { label: 'Referral form' }),
  ].join('\n'),
};

/* ---------- Clinical model ---------- */
const clinicalModel = {
  path: '/physicians/clinical-model',
  navId: 'physicians',
  title: 'Our Clinical Model · Little Hearts Home Care',
  description: 'How Little Hearts Home Care staffs, supervises, trains and documents pediatric private duty nursing in Georgia homes.',
  ctaBand: 'physician',
  crumbs: [crumbsBase, ['Our clinical model', '/physicians/clinical-model']],
  body: [
    `<section class="hero" aria-label="Introduction"><div class="inner">
      <p class="lh-eyebrow">For physicians</p>
      <h1 class="lh-h1">Small agency. Tight supervision.</h1>
      <p class="lead lh-body-lg">We keep our caseload at what the owners can supervise personally. Here is how a case runs from your order to your next visit.</p>
    </div></section>`,
    H.section(
      `<div class="split">
        <div><h2 class="lh-h2">Staffing</h2><div class="mt-4">${H.checkList([
          'Pediatric RNs and LPNs with active Georgia licenses, BLS, background checks and health clearances',
          'One nurse per patient per shift. No shared assignments.',
          'Nurses matched to the patient’s equipment and acuity, and competency checked on that equipment before shift one',
          'Continuity: the same nurses on a case as far as staffing allows',
          'Trach and vent cases staffed only by nurses who have shown trach and vent competency',
        ], true)}</div></div>
        <div><h2 class="lh-h2">Supervision</h2><div class="mt-4">${H.checkList([
          'A named RN supervisor on every case',
          'Initial RN assessment in the home, plan of care built from your orders',
          'Supervisory visits at least every 30 days and after any change in condition',
          'An RN and an owner reachable after hours for active cases',
          'Incident reporting to you and the family the same day',
        ], true)}</div></div>
      </div>`,
      { white: true, label: 'Staffing and supervision' }),
    H.section(
      `<h2 class="lh-h2">Documentation</h2><div class="mt-4">${H.checkList([
        'Charting every shift: vitals, feeds, meds, vent settings, interventions, escalations',
        'Medication reconciliation at every order change and every hospital discharge',
        'A summary to you monthly, on request and at recertification',
        'Plan of treatment renewals sent to you 30 days before expiration',
      ])}</div>`,
      { label: 'Documentation' }),
    H.section(
      `<div class="lh-card lh-card--flat"><h2 class="lh-h3">When something changes</h2>
      <p class="lh-body mt-3 measure">The nurse follows your parameters in the plan of care. Outside them, the nurse calls the RN supervisor, then your office or the on call line, and 911 when the child needs it. The family is told every time. You get a written note within 24 hours.</p></div>`,
      { white: true, tight: true, label: 'Escalation' }),
    H.section(
      `<h2 class="lh-h2">Licensing and compliance</h2>
      <p class="lh-body mt-4 measure">Georgia Department of Community Health private home care provider license [CONFIRM license number]. Enrolled GAPP provider [CONFIRM]. HIPAA compliant.</p>
      <p class="lh-small mt-3 measure">[CONFIRM: supervision and documentation intervals on this page reflect common practice; owner to verify before publishing]</p>
      ${related}`,
      { tight: true, label: 'Compliance' }),
  ].join('\n'),
};

/* ---------- Conditions we serve ---------- */
const conditionCards = [
  ['Airway and breathing', 'Tracheostomy, home ventilation (invasive and noninvasive), oxygen dependence, chronic lung disease of prematurity, airway malacia.'],
  ['Nutrition', 'NG, G, GJ and J tube feeding, continuous and bolus schedules.'],
  ['Neurologic', 'Seizure disorders with rescue medication plans, cerebral palsy with skilled needs, spinal muscular atrophy, muscular dystrophy, traumatic brain injury.'],
  ['Congenital and genetic', 'Spina bifida, congenital heart disease after surgery, chromosomal and metabolic disorders with skilled needs.'],
  ['Complex medications', 'Multiple daily scheduled medications, injectables, controlled substances, medications requiring monitoring.'],
  ['Post hospital', 'NICU and PICU graduates, post surgical care, children going home on new equipment.'],
];

const conditions = {
  path: '/physicians/conditions',
  navId: 'physicians',
  title: 'Conditions We Serve · Little Hearts Home Care',
  description: 'Diagnoses and equipment Little Hearts Home Care staffs for pediatric private duty nursing at home in Georgia.',
  ctaBand: 'physician',
  crumbs: [crumbsBase, ['Conditions we serve', '/physicians/conditions']],
  body: [
    `<section class="hero" aria-label="Introduction"><div class="inner">
      <p class="lh-eyebrow">For physicians</p>
      <h1 class="lh-h1">What we staff.</h1>
      <p class="lead lh-body-lg">GAPP approves a documented need for skilled nursing, not a diagnosis. These are the needs and diagnoses we see most and staff with confidence. If a case isn’t on the list, call. We’ll tell you plainly whether we can take it.</p>
    </div></section>`,
    H.section(
      `<h2 class="lh-h2">By skilled need</h2><div class="grid-3 mt-6">${conditionCards.map(([t, b]) => `
        <div class="lh-card lh-card--flat"><h3 class="lh-h4">${t}</h3><p class="lh-small mt-2">${b}</p></div>`).join('')}</div>`,
      { white: true, label: 'By skilled need' }),
    H.section(
      `<div class="split">
        <div><h2 class="lh-h3">Cases we refer elsewhere</h2>
        <p class="lh-body mt-3">Home infusion services beyond what our nurses can administer within the plan of care, inpatient level monitoring, behavioral health cases without a skilled nursing need, and adults over 21. We’ll give you a name to call.</p></div>
        <div><h2 class="lh-h3">Ages</h2>
        <p class="lh-body mt-3">Birth to 21. GAPP ends at 21, and we start transition planning with the family and you a year before.</p></div>
      </div>
      ${related}`,
      { label: 'Scope' }),
  ].join('\n'),
};

module.exports = [refer, clinicalModel, conditions];
