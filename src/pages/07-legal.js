// Legal pages. DRAFTS built from the outlines in website-content/pages/legal/index.md.
// The copy deck says: have the owners' attorney review all four before launch.
const H = require('../helpers');
const S = require('../site');

const attorneyNote = `<p class="notice lh-body"><b>Draft.</b> [CONFIRM: This page is a draft built from the site outline. The owners’ attorney must review and approve the final text before launch.]</p>`;

function legalPage(slug, name, title, description, proseHtml) {
  return {
    path: `/legal/${slug}`,
    navId: '',
    title,
    description,
    ctaBand: 'standard',
    crumbs: [['Legal', `/legal/${slug}`], [name, `/legal/${slug}`]],
    body: `<section class="hero" aria-label="Introduction"><div class="inner">
      <p class="lh-eyebrow">Legal</p>
      <h1 class="lh-h1">${name}</h1>
      ${attorneyNote}
    </div></section>
    ${H.section(`<div class="prose lh-body">${proseHtml}</div>`, { white: true, label: name })}`,
  };
}

const privacy = legalPage('privacy', 'Privacy policy',
  'Privacy Policy · Little Hearts Home Care',
  'How Little Hearts Home Care handles the information you share through this website.',
  `
  <h2 class="lh-h3">What we collect</h2>
  <p>When you use a form on this site, we collect what you type: your name, phone number, email, county, and what you tell us about your child’s needs or a patient’s needs. If you call or email us, we keep a record of that contact.</p>
  <h2 class="lh-h3">Why we collect it</h2>
  <p>To respond to requests for care, referrals from clinicians, and applications from nurses. That is all.</p>
  <h2 class="lh-h3">Who sees it</h2>
  <p>The owners and the staff who need it to respond to you. We do not sell your information. We do not share it with marketers.</p>
  <h2 class="lh-h3">Health information</h2>
  <p>This website is not for sending medical records. Please do not put detailed health information in a web form. For patients and families we serve, our HIPAA Notice of Privacy Practices applies and is available on request.</p>
  <h2 class="lh-h3">Cookies and analytics</h2>
  <p>This site does not use third party marketing scripts. [CONFIRM: list any analytics tool the owners add, or state that none is used.]</p>
  <h2 class="lh-h3">Your choices</h2>
  <p>Ask us what we have about you, ask us to correct it, or ask us to delete it. Call [MAIN PHONE] or email hello@littleheartshc.com [CONFIRM].</p>
  <h2 class="lh-h3">Contact</h2>
  <p>Little Hearts HC, LLC, [STREET], [CITY], GA [ZIP]. Phone [MAIN PHONE].</p>
  <h2 class="lh-h3">Effective date</h2>
  <p>[DATE].</p>`);

const terms = legalPage('terms', 'Terms of use',
  'Terms of Use · Little Hearts Home Care',
  'The terms that apply to using the Little Hearts Home Care website.',
  `
  <h2 class="lh-h3">General information, not medical advice</h2>
  <p>The content on this site is general information about our services and Georgia programs. It is not medical advice. Talk to your child’s doctor about medical decisions.</p>
  <h2 class="lh-h3">No guarantee of eligibility, approval or hours</h2>
  <p>Georgia Medicaid decides who qualifies for the Georgia Pediatric Program (GAPP), which services are covered and how many hours are approved. Nothing on this site is a promise of approval or hours.</p>
  <h2 class="lh-h3">Emergencies</h2>
  <p>If your child is having an emergency, call 911. Do not use this website for emergencies.</p>
  <h2 class="lh-h3">Intellectual property</h2>
  <p>The Little Hearts Home Care name, logo and site content belong to Little Hearts HC, LLC. Do not reuse them without written permission.</p>
  <h2 class="lh-h3">Links to other sites</h2>
  <p>We link to Georgia programs and other organizations to help you. We do not control those sites and are not responsible for their content.</p>
  <h2 class="lh-h3">Governing law</h2>
  <p>These terms are governed by the laws of the State of Georgia.</p>
  <h2 class="lh-h3">Contact</h2>
  <p>Little Hearts HC, LLC, [STREET], [CITY], GA [ZIP]. Phone [MAIN PHONE].</p>`);

const accessibility = legalPage('accessibility', 'Accessibility statement',
  'Accessibility Statement · Little Hearts Home Care',
  'Little Hearts Home Care built this site to WCAG 2.2 AA. If something doesn’t work for you, tell us and we’ll fix it or help you another way.',
  `
  <p>Little Hearts Home Care wants every family to be able to use this site. We built it to WCAG 2.2 AA: keyboard navigation, visible focus, text contrast, labels on every form field, alt text on images, and reduced motion when your device asks for it.</p>
  <p>If something doesn’t work for you, call [MAIN PHONE] or email hello@littleheartshc.com [CONFIRM EMAIL] and we’ll fix it or help you another way.</p>
  <p>Last reviewed: [date].</p>`);

const nondiscrimination = legalPage('nondiscrimination', 'Nondiscrimination notice',
  'Nondiscrimination Notice · Little Hearts Home Care',
  'Section 1557 nondiscrimination notice for Little Hearts HC, LLC, with free language assistance information.',
  `
  <p>Little Hearts HC, LLC complies with applicable federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability or sex. We do not exclude people or treat them differently because of any of these.</p>
  <h2 class="lh-h3">Free help in your language</h2>
  <p>Free language assistance and aids for people with disabilities are available. Call [MAIN PHONE].</p>
  <p lang="es">ATENCIÓN: si habla español, tiene a su disposición servicios gratuitos de asistencia lingüística. Llame al [MAIN PHONE].</p>
  <p lang="vi">CHÚ Ý: Nếu bạn nói Tiếng Việt, có các dịch vụ hỗ trợ ngôn ngữ miễn phí dành cho bạn. Gọi số [MAIN PHONE].</p>
  <p lang="ko">주의: 한국어를 사용하시는 경우, 언어 지원 서비스를 무료로 이용하실 수 있습니다. [MAIN PHONE] 번으로 전화해 주십시오.</p>
  <p lang="zh">注意：如果您使用繁體中文，您可以免費獲得語言援助服務。請致電 [MAIN PHONE]。</p>
  <p>[CONFIRM: taglines for the remaining top languages for Georgia per HHS guidance.]</p>
  <h2 class="lh-h3">How to file a grievance</h2>
  <p>If you believe we have failed to provide these services or discriminated in another way, you can file a grievance with us: Little Hearts HC, LLC, [STREET], [CITY], GA [ZIP], phone [MAIN PHONE], email hello@littleheartshc.com [CONFIRM]. You can file in person, by mail, by fax or by email. We can help you file.</p>
  <p>You can also file a civil rights complaint with the U.S. Department of Health and Human Services, Office for Civil Rights, at ocrportal.hhs.gov, or by mail: U.S. Department of Health and Human Services, 200 Independence Avenue SW, Room 509F, HHH Building, Washington, DC 20201, or by phone: 1-800-368-1019 (TDD 1-800-537-7697).</p>`);

module.exports = [privacy, terms, accessibility, nondiscrimination];
