// /services index and the eight service pages, from website-content/pages/services/*.
const H = require('../helpers');
const S = require('../site');

const PAY_CARD = `<div class="lh-card lh-card--flat">
  <h2 class="lh-h3">How it is paid for</h2>
  <p class="lh-body mt-3 measure">For children who qualify for the Georgia Pediatric Program (GAPP), Georgia Medicaid pays for this nursing. You pay nothing out of pocket. Medicaid decides approval and hours based on what your child’s doctor documents. We put the request together and follow it through.</p>
  <p class="mt-4">${H.link('See if your child qualifies', '/families/gapp')}</p>
</div>`;

// Per-service copy, verbatim from the page files.
const PAGES = [
  {
    slug: 'private-duty-nursing',
    title: 'Private duty nursing at Home in Georgia · Little Hearts Home Care',
    name: 'Private duty nursing',
    description: 'Private duty nursing at home for medically complex children under 21 in Georgia. Pediatric RNs and LPNs, one child per shift, paid for through GAPP for families who qualify.',
    h1: 'A pediatric nurse in your home, for the hours your child needs.',
    lead: 'One RN or LPN, one child, one shift. Our nurse follows your child’s plan of care in your home so you can sleep, work, or just be a parent for a few hours.',
    shift: [
      'Takes report from you or the nurse going off',
      'Checks vitals and your child’s baseline',
      'Gives feeds, meds and treatments on schedule',
      'Runs and checks equipment: vent, oxygen, pump, monitors',
      'Watches for changes and calls the RN supervisor and your doctor when needed',
      'Charts every shift so the next nurse and your doctor see the same record',
      'Gives you report before leaving',
    ],
    whoFor: 'Children under 21 with a documented need for skilled nursing at home. Common examples: ventilator or oxygen dependence, tracheostomy, feeding tube, seizure disorders, complex medication schedules, and children coming home after a long hospital stay.',
    faqs: [
      ['How many hours can we get?', 'Georgia Medicaid decides hours from what your child’s doctor documents. We can’t promise a number. We can make sure the request shows everything your child needs.'],
      ['Can we choose nights?', 'Yes. Tell us the hours that matter most and we’ll staff toward them.'],
      ['Will it be the same nurse?', 'We keep the same nurses on a case as long as we can. When someone new is coming, we tell you first.'],
    ],
  },
  {
    slug: 'respiratory-care',
    title: 'Respiratory care at Home in Georgia · Little Hearts Home Care',
    name: 'Respiratory care',
    description: 'Pediatric respiratory care at home in Georgia: suction, oxygen, nebulizer treatments, airway clearance and monitoring by RNs and LPNs, through GAPP for families who qualify.',
    h1: 'Breathing treatments and airway care, done the way your doctor ordered.',
    lead: 'Suction, oxygen, nebulizers, chest physiotherapy and oxygen saturation monitoring, by a nurse who knows what your child’s normal looks like.',
    shift: [
      'Oral and nasal suction as ordered',
      'Oxygen delivery and flow checks',
      'Nebulizer and inhaled medication treatments',
      'Airway clearance as ordered: chest PT, vest, cough assist',
      'Continuous or spot pulse oximetry, with your child’s alarm limits',
      'Signs of trouble: work of breathing, color, secretions, fever; escalation to your doctor',
    ],
    whoFor: 'Children with chronic lung disease, airway conditions, neuromuscular weakness, or any condition where breathing treatments and monitoring are part of the daily plan.',
    faqs: [
      ['Do you handle oxygen tanks and concentrators?', 'We use what your supply company provides and check it every shift. Ordering and repairs stay with your supplier; we’ll call them for you.'],
      ['What happens if my child’s oxygen drops at night?', 'Your nurse follows the plan of care and your doctor’s parameters, and calls 911 if your child needs it. Then the nurse calls you and the RN supervisor.'],
    ],
  },
  {
    slug: 'ventilator-management',
    title: 'Ventilator management at Home in Georgia · Little Hearts Home Care',
    name: 'Ventilator management',
    description: 'Home ventilator management for children in Georgia: settings checks, alarms, circuit changes and emergency readiness by trach and vent trained pediatric nurses, through GAPP for families who qualify.',
    h1: 'Nurses who know home vents, at your child’s bedside.',
    lead: 'Every nurse we send to a vent case is checked on your child’s specific ventilator before the first shift. Settings, alarms, circuits, humidification and the backup plan.',
    shift: [
      'Confirms settings against the doctor’s orders at the start of every shift',
      'Responds to alarms and troubleshoots the circuit',
      'Circuit, filter and humidifier changes on schedule',
      'Manual ventilation with a bag when needed',
      'Keeps the backup vent, suction and emergency kit checked and within reach',
      'Documents settings, alarms and any changes',
    ],
    whoFor: 'Children who depend on a ventilator at home full time or part time, including nighttime only, with a tracheostomy or noninvasive interface. Often children coming home from a long NICU or PICU stay.',
    faqs: [
      ['Are your nurses trained on my child’s ventilator?', 'Every nurse on a vent case is checked on your child’s specific ventilator before the first shift. If your child uses equipment we haven’t staffed, we train on it with your supplier before we start.'],
      ['What if the power goes out?', 'Your plan of care includes battery, backup and 911 steps. We review it with you at the first visit.'],
    ],
  },
  {
    slug: 'enteral-feeding',
    title: 'Enteral feeding at Home in Georgia · Little Hearts Home Care',
    name: 'Enteral feeding',
    description: 'Enteral feeding at home for children in Georgia: pump and bolus tube feeds, formula prep, tolerance and growth tracking by pediatric nurses, through GAPP for families who qualify.',
    h1: 'Feeds on schedule, intake tracked, tolerance watched.',
    lead: 'Pump feeds, bolus feeds, water flushes and medications through an NG, G or GJ tube, by a nurse who logs every feed so your doctor and dietitian see the whole picture.',
    shift: [
      'Prepares formula as ordered and runs the pump or bolus on schedule',
      'Checks placement and site before each feed',
      'Flushes and vents the tube as ordered',
      'Watches for reflux, retching, bloating, diarrhea and aspiration signs',
      'Logs intake and output every shift',
      'Coordinates with your dietitian and supply company',
    ],
    whoFor: 'Children who get some or all of their nutrition through a feeding tube: NG, G tube, GJ tube or J tube, on continuous, overnight or bolus schedules.',
    faqs: [
      ['Can the nurse change the formula?', 'No. Formula, rate and volume are your doctor’s or dietitian’s orders. If something isn’t working, we document it and call them.'],
      ['Do you handle blended diets?', 'Ask us. We follow the feeding plan your doctor or dietitian orders, and we’ll talk it through on your child’s case.'],
    ],
  },
  {
    slug: 'g-tube-care',
    title: 'G tube care at Home in Georgia · Little Hearts Home Care',
    name: 'G tube care',
    description: 'Pediatric G tube care at home in Georgia: stoma and site care, dressing changes, granulation tissue checks, venting and family training by pediatric nurses, through GAPP.',
    h1: 'Site care, button checks, and a plan for when it comes out.',
    lead: 'Daily stoma care, dressing changes and button checks, plus training so you feel steady doing it yourself.',
    shift: [
      'Cleans the stoma and checks the skin each shift',
      'Dressing changes as ordered',
      'Checks button fit, balloon volume and rotation as ordered',
      'Watches for granulation tissue, leaks, redness and infection',
      'Vents the tube for gas and discomfort',
      'Knows the plan if the tube comes out, and teaches it to you',
    ],
    whoFor: 'Children with a gastrostomy tube or button, whether newly placed or long standing, including children who also have a fundoplication or GJ tube.',
    faqs: [
      ['The button came out. What do we do?', 'Your plan of care has the steps and the timeline, and your nurse knows them. If your nurse isn’t there, call your doctor’s line first and us second. Time matters, so the plan is on your fridge.'],
      ['Can you teach a grandparent or sibling?', 'Yes, anyone who cares for your child at home. Ask us.'],
    ],
  },
  {
    slug: 'tracheostomy-care',
    title: 'Tracheostomy care at Home in Georgia · Little Hearts Home Care',
    name: 'Tracheostomy care',
    description: 'Pediatric tracheostomy care at home in Georgia: suctioning, stoma care, tie and tube changes and emergency readiness by trach trained nurses, through GAPP for families who qualify.',
    h1: 'Trach care, suction and tie changes. Emergency kit checked every shift.',
    lead: 'Suctioning, stoma care, tie changes and scheduled tube changes, by a nurse who checks the emergency trach kit before doing anything else.',
    shift: [
      'Checks the emergency kit at the start of every shift: spare trach, one size down, ties, suction, bag',
      'Suctions as needed and as ordered',
      'Cleans the stoma and checks the skin',
      'Tie changes on schedule, with a second person when required',
      'Routine trach changes as ordered, by a nurse with shown trach competency',
      'Humidification and HME management',
      'Signs of trouble: plugging, bleeding, breakdown, decannulation, and what to do',
    ],
    whoFor: 'Children with a tracheostomy, with or without a ventilator, including children going home with a new trach for the first time.',
    faqs: [
      ['Do you send nurses on the day we come home from the hospital?', 'When we can, yes. Tell us the discharge date as early as you can and we’ll work the schedule around it. Hospital discharges get priority on our calendar.'],
      ['Are your nurses trained on trach changes?', 'Every nurse on a trach case shows competency on trach care before the first shift. Routine trach changes follow your doctor’s order and our policy.'],
    ],
  },
  {
    slug: 'medication-management',
    title: 'Medication management at Home in Georgia · Little Hearts Home Care',
    name: 'Medication management',
    description: 'Pediatric medication management at home in Georgia: scheduled and as needed medications, reconciliation with every order change, side effect monitoring, through GAPP for families who qualify.',
    h1: 'The right dose at the right time, logged for every nurse.',
    lead: 'Scheduled meds, as needed meds, and a single medication record that every nurse, parent and doctor reads from.',
    shift: [
      'Gives scheduled medications by mouth, tube, inhalation, injection or rectal route as ordered',
      'Gives as needed medications within your doctor’s parameters and documents why',
      'Reconciles the medication list every time an order changes or your child comes home from the hospital',
      'Watches for side effects and interactions and reports them',
      'Keeps the medication record current for you and your doctor',
      'Tracks refills with you and the pharmacy',
    ],
    whoFor: 'Children with complex medication schedules, seizure rescue plans, or medications that need monitoring, and families who want one accurate list everyone works from.',
    faqs: [
      ['Can the nurse pick up prescriptions?', 'Ask us when we set up your child’s case. Our job is to make sure a dose is never missed while we work out the details with you.'],
      ['What about controlled substances at home?', 'We count and document them by policy, and we’ll walk you through the storage rules.'],
    ],
  },
  {
    slug: 'care-coordination',
    title: 'Care coordination at Home in Georgia · Little Hearts Home Care',
    name: 'Care coordination',
    description: 'Care coordination for medically complex children at home in Georgia: one agency keeping physicians, specialists, DME suppliers, pharmacies and the Medicaid case manager aligned.',
    h1: 'Your doctors, supply company and case manager, on the same page.',
    lead: 'A medically complex child can have six doctors, two suppliers, a pharmacy, a school nurse and a Medicaid case manager. We keep them talking to each other, and to you.',
    shift: [
      'One plan of care shared with every nurse and updated when orders change',
      'Calls to specialists, DME suppliers and pharmacies when something isn’t working',
      'Renewal dates tracked and started early: GAPP, physician orders, DMA forms',
      'Hospital discharge planning with the inpatient team so care starts when your child comes home',
      'School and therapy schedules built into the nursing schedule',
      'Help with appeals if Medicaid denies or reduces hours',
    ],
    whoFor: 'Every family we serve. Care coordination isn’t an add on; it is part of how we run a case.',
    faqs: [
      ['Is care coordination billed separately?', 'No. It’s part of running your child’s case.'],
      ['Who is my point of contact?', 'We’re owner operated, so the person you reach can actually decide things: clinical questions, paperwork and Medicaid, or scheduling. One call covers all of it.'],
    ],
  },
];

function servicePage(p) {
  const hero = `<section class="hero" aria-label="Introduction">
    <div class="inner hero--split">
      <div>
        <p class="hero-icon">${H.icon(p.slug, 56)}</p>
        <p class="lh-eyebrow">Our services</p>
        <h1 class="lh-h1">${p.h1}</h1>
        <p class="lead lh-body-lg">${p.lead}</p>
        <div class="hero-actions">${H.btn('Talk to an owner', S.TEL_HREF)}</div>
      </div>
      ${H.photoSlot('Composition C, detail', `A nurse’s hands during ${p.name.toLowerCase()}, the child’s home around them.`)}
    </div>
  </section>`;
  const body = [
    hero,
    H.section(
      `<h2 class="lh-h2">What our nurse does each shift</h2><div class="mt-6">${H.checkList(p.shift)}</div>`,
      { white: true, label: 'What our nurse does' }),
    H.section(
      `<h2 class="lh-h2">Who this is for</h2><p class="lh-body mt-4 measure">${p.whoFor}</p>`,
      { label: 'Who this is for' }),
    H.section(PAY_CARD, { white: true, tight: true, label: 'How it is paid for' }),
    H.section(
      `<h2 class="lh-h2">Questions about this service</h2><div class="mt-6">${H.faqGrid(p.faqs)}</div>`,
      { label: 'Questions about this service' }),
    H.section(
      `<h2 class="lh-h2">More services</h2><div class="mt-6">${S.servicesGrid(p.slug)}</div>`,
      { white: true, label: 'More services' }),
  ].join('\n');
  return {
    path: `/services/${p.slug}`,
    navId: 'services',
    title: p.title,
    description: p.description,
    ctaBand: 'standard',
    crumbs: [['Services', '/services'], [p.name, `/services/${p.slug}`]],
    body,
  };
}

const index = {
  path: '/services',
  navId: 'services',
  title: 'Pediatric Home Nursing Services · Little Hearts Home Care',
  description: 'Private duty nursing, ventilator and trach care, feeding tube and G tube care, respiratory care, medication management and care coordination for children at home in Georgia.',
  ctaBand: 'standard',
  crumbs: [['Services', '/services']],
  body: [
    `<section class="hero" aria-label="Introduction"><div class="inner">
      <p class="lh-eyebrow">Our services</p>
      <h1 class="lh-h1">Skilled nursing at home, matched to your child.</h1>
      <p class="lead lh-body-lg">Every service here is delivered by a pediatric RN or LPN in your home, following orders from your child’s doctor. For families whose child qualifies for the Georgia Pediatric Program (GAPP), there is no out of pocket cost.</p>
    </div></section>`,
    H.section(`<h2 class="visually-hidden">The eight services</h2>` + S.servicesGrid(), { white: true, label: 'All services' }),
    H.section(
      `<h2 class="lh-h2">Before the first shift</h2><div class="mt-6">${H.stepGrid([
        ['An RN visits', 'An RN visits your home, reads the orders and writes the plan of care with you.'],
        ['We match nurses', 'We match nurses to your child’s equipment and schedule, and check their competency on your setup.'],
        ['An owner is there', 'An owner comes to the first shift, and you’ll have a direct line from day one.'],
      ], 3)}</div>`,
      { label: 'How a case starts' }),
    H.section(
      `<h2 class="lh-h2">What GAPP nursing does not cover</h2>
      <p class="lh-body mt-4 measure">GAPP pays for skilled nursing and, in some cases, personal care support hours. It does not pay for housekeeping, babysitting, therapy sessions, medical equipment or care for other family members. Those come through other Medicaid benefits. If you need them, we’ll point you to the right place.</p>`,
      { white: true, tight: true, label: 'What GAPP nursing does not cover' }),
  ].join('\n'),
};

module.exports = [index, ...PAGES.map(servicePage)];
