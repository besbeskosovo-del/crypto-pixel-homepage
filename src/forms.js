// The three forms, fields and messages from 03-global-elements.md.
// Static markup wired for Netlify Forms (swap the attributes for Formspree or
// a serverless endpoint if the owners choose one). Honeypot on every form.
// No patient identifiers are collected in the referral web form.

let fid = 0;
function field(label, inputHtmlFn, { hint = '', error = '' } = {}) {
  const id = `f${++fid}`;
  const errId = `${id}-err`;
  return `<div class="field">
    <label for="${id}">${label}</label>
    ${hint ? `<p class="hint" id="${id}-hint">${hint}</p>` : ''}
    ${error ? `<p class="field-error" id="${errId}">${error}</p>` : ''}
    ${inputHtmlFn(id, error ? errId : '')}
  </div>`;
}

const text = (name, { required = false, type = 'text', autocomplete = '' } = {}) =>
  (id) => `<input type="${type}" id="${id}" name="${name}"${required ? ' required' : ''}${autocomplete ? ` autocomplete="${autocomplete}"` : ''}>`;
const textarea = (name) => (id) => `<textarea id="${id}" name="${name}"></textarea>`;
const select = (name, options, { required = false } = {}) => (id) =>
  `<select id="${id}" name="${name}"${required ? ' required' : ''}>
    <option value="">Choose one</option>
    ${options.map((o) => `<option>${o}</option>`).join('')}
  </select>`;

function checkboxGroup(legend, name, options) {
  return `<fieldset>
    <legend>${legend}</legend>
    ${options.map((o, i) => `<label class="choice"><input type="checkbox" name="${name}" value="${o}">${o}</label>`).join('')}
  </fieldset>`;
}

function radioGroup(legend, name, options, { required = false } = {}) {
  return `<fieldset>
    <legend>${legend}</legend>
    ${options.map((o, i) => `<label class="choice"><input type="radio" name="${name}" value="${o}"${required && i === 0 ? ' required' : ''}>${o}</label>`).join('')}
  </fieldset>`;
}

function consent(text) {
  const id = `f${++fid}`;
  return `<div class="field">
    <p class="field-error" id="${id}-err">Check the box so we know we can contact you.</p>
    <label class="choice"><input type="checkbox" id="${id}" name="consent" value="yes" required>${text}</label>
  </div>`;
}

function formWrap(name, inner, submitLabel) {
  return `<form class="form" name="${name}" method="POST" action="/thanks-${name}" data-netlify="true" netlify-honeypot="company" data-validate>
    <input type="hidden" name="form-name" value="${name}">
    <p class="hp-field" aria-hidden="true"><label>Leave this field empty<input type="text" name="company" tabindex="-1" autocomplete="off"></label></p>
    ${inner}
    <p><button class="lh-btn" type="submit">${submitLabel}</button></p>
  </form>`;
}

function requestCareForm() {
  return formWrap('request-care', [
    field('Your name', text('name', { required: true, autocomplete: 'name' }), { error: 'Enter your name.' }),
    field('Best phone', text('phone', { required: true, type: 'tel', autocomplete: 'tel' }), { error: 'Enter a phone number we can call.' }),
    field('Email (optional)', text('email', { type: 'email', autocomplete: 'email' }), { error: 'That email doesn’t look right. Check it or leave it blank.' }),
    field('Child’s age', text('child-age')),
    field('County', text('county')),
    radioGroup('Does your child have Georgia Medicaid?', 'medicaid', ['Yes', 'No', 'Not sure']),
    checkboxGroup('What does your child need help with?', 'needs',
      ['Ventilator', 'Trach', 'Feeding tube', 'Oxygen or breathing treatments', 'Seizures', 'Medications', 'Other']),
    radioGroup('Is your child in the hospital now?', 'in-hospital', ['Yes', 'No']),
    field('Anything else you want us to know', textarea('notes')),
    radioGroup('How should we reach you?', 'reach', ['Call', 'Text']),
    consent('We’ll use this to call or text you about care for your child. We won’t share it with anyone else.'),
  ].join(''), 'Send request');
}

function referralForm() {
  return formWrap('refer-a-patient', [
    `<p class="form-note"><b>Do not enter patient identifiers here.</b> Fax or call with the patient’s name, date of birth and Medicaid ID.</p>`,
    field('Your name', text('name', { required: true, autocomplete: 'name' }), { error: 'Enter your name.' }),
    field('Role', select('role', ['Physician', 'Discharge planner', 'Case manager', 'Other'])),
    field('Practice or facility', text('facility')),
    field('Phone', text('phone', { required: true, type: 'tel' }), { error: 'Enter a phone number we can call.' }),
    field('Email', text('email', { type: 'email' }), { error: 'That email doesn’t look right.' }),
    field('NPI (optional)', text('npi')),
    field('Urgency', select('urgency', ['Routine', 'Discharge planned', 'Urgent'])),
    field('Patient age', text('patient-age')),
    field('County', text('county')),
    field('Primary diagnosis', text('diagnosis')),
    checkboxGroup('Equipment and skilled needs', 'needs',
      ['Ventilator', 'Tracheostomy', 'Feeding tube', 'Oxygen', 'Seizure management', 'Complex medications', 'Other']),
    radioGroup('Does the patient have Georgia Medicaid?', 'medicaid', ['Yes', 'No', 'Not sure']),
    field('Notes', textarea('notes')),
    consent('I am authorized to share this information for care coordination.'),
  ].join(''), 'Send referral');
}

function applyForm() {
  return formWrap('apply', [
    field('Name', text('name', { required: true, autocomplete: 'name' }), { error: 'Enter your name.' }),
    field('Phone', text('phone', { required: true, type: 'tel', autocomplete: 'tel' }), { error: 'Enter a phone number we can call.' }),
    field('Email', text('email', { type: 'email', autocomplete: 'email' }), { error: 'That email doesn’t look right.' }),
    field('License', select('license', ['RN', 'LPN', 'Other'])),
    field('Georgia license number', text('license-number')),
    field('Pediatric experience (years)', text('experience', { type: 'number' })),
    radioGroup('Trach or vent experience?', 'trach-vent', ['Yes', 'No']),
    checkboxGroup('Availability', 'availability', ['Days', 'Nights', 'Weekends', 'Part time', 'Full time']),
    field('County you live in', text('county')),
    `<div class="field"><label for="resume">Resume upload (optional)</label><input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx"></div>`,
    consent('We’ll use this to contact you about working with us. We won’t share it with anyone else.'),
  ].join(''), 'Apply');
}

module.exports = { requestCareForm, referralForm, applyForm };
