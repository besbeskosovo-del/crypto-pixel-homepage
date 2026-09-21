// Progressive enhancement: dropdown menus, the mobile panel, and plain-word
// form errors. The site works without this file; it only improves it.
(function () {
  'use strict';

  /* Desktop dropdowns: click toggles, Escape closes, outside click closes. */
  var items = document.querySelectorAll('.nav-item[data-nav]');
  function closeAll(except) {
    items.forEach(function (it) {
      if (it !== except) {
        it.classList.remove('open');
        var b = it.querySelector('.nav-toggle');
        if (b) b.setAttribute('aria-expanded', 'false');
      }
    });
  }
  items.forEach(function (item) {
    var toggle = item.querySelector('.nav-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      if (open) closeAll(item);
    });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        item.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-item')) closeAll();
  });

  /* Mobile panel */
  var openBtn = document.getElementById('menu-open');
  var closeBtn = document.getElementById('panel-close');
  var panel = document.getElementById('mobile-panel');
  function setPanel(open) {
    if (!panel) return;
    panel.hidden = !open;
    panel.classList.toggle('open', open);
    document.body.classList.toggle('panel-open', open);
    if (openBtn) openBtn.setAttribute('aria-expanded', String(open));
    if (open && closeBtn) closeBtn.focus();
    if (!open && openBtn) openBtn.focus();
  }
  if (openBtn) openBtn.addEventListener('click', function () { setPanel(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setPanel(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel && !panel.hidden) setPanel(false);
  });

  /* Forms: show the plain-word error next to the field on submit. */
  document.querySelectorAll('form[data-validate]').forEach(function (form) {
    form.setAttribute('novalidate', '');
    form.addEventListener('submit', function (e) {
      var firstBad = null;
      form.querySelectorAll('.field').forEach(function (field) {
        var input = field.querySelector('input, select, textarea');
        if (!input) return;
        var bad = !input.checkValidity();
        field.classList.toggle('invalid', bad);
        var err = field.querySelector('.field-error');
        if (err) input.setAttribute('aria-describedby', err.id);
        input.setAttribute('aria-invalid', String(bad));
        if (bad && !firstBad) firstBad = input;
      });
      // required consent checkboxes
      form.querySelectorAll('.choice input[required]').forEach(function (input) {
        var wrap = input.closest('.field') || input.closest('.choice');
        var bad = !input.checkValidity();
        if (wrap && wrap.classList) wrap.classList.toggle('invalid', bad);
        if (bad && !firstBad) firstBad = input;
      });
      if (firstBad) {
        e.preventDefault();
        firstBad.focus();
      }
    });
  });
})();
