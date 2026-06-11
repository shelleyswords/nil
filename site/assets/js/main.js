/* THE NIL GAME PLAN — shared site JS (progressive enhancement only).
   The site fully works with JS disabled; this adds nav toggle, config-driven
   links, email capture wiring, and optional analytics. */
(function () {
  var cfg = window.NIL_CONFIG || {};

  /* ---- mobile nav ---- */
  var toggle = document.querySelector('.nav-toggle');
  var mobile = document.querySelector('.nav-mobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      var open = mobile.style.display === 'block';
      mobile.style.display = open ? 'none' : 'block';
      toggle.setAttribute('aria-expanded', String(!open));
    });
  }

  /* ---- wire config-driven links ---- */
  document.querySelectorAll('[data-checkout]').forEach(function (el) {
    if (cfg.CHECKOUT_URL) el.setAttribute('href', cfg.CHECKOUT_URL);
  });
  document.querySelectorAll('[data-social]').forEach(function (el) {
    var key = el.getAttribute('data-social');
    if (cfg.SOCIAL && cfg.SOCIAL[key]) el.setAttribute('href', cfg.SOCIAL[key]);
  });
  document.querySelectorAll('[data-contact-email]').forEach(function (el) {
    if (cfg.CONTACT_EMAIL) { el.textContent = cfg.CONTACT_EMAIL; el.setAttribute('href', 'mailto:' + cfg.CONTACT_EMAIL); }
  });

  /* ---- email capture forms (AJAX -> serverless function / provider) ---- */
  document.querySelectorAll('form[data-optin]').forEach(function (form) {
    var endpoint = cfg.EMAIL_ENDPOINT || '';
    var configured = endpoint && endpoint.indexOf('REPLACE_ME') === -1;
    var success = form.parentNode.querySelector('.success-msg');
    var btn = form.querySelector('button[type=submit]');

    function showSuccess() {
      form.style.display = 'none';
      if (success) success.style.display = 'block';
    }
    function showError(msg) {
      if (btn) { btn.disabled = false; btn.textContent = btn.getAttribute('data-label') || 'Send it to me'; }
      var note = form.parentNode.querySelector('.form-note');
      if (note) { note.textContent = msg || 'Something went wrong — please try again.'; note.style.color = '#ffd9d2'; }
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailEl = form.querySelector('input[type=email]');
      var email = emailEl ? emailEl.value.trim() : '';
      if (!email) return;

      // Demo mode (no endpoint configured yet): just show success so the page is testable.
      if (!configured) {
        showSuccess();
        try { console.log('[NIL] Email captured (demo mode — set EMAIL_ENDPOINT in config.js):', email); } catch (e2) {}
        return;
      }

      if (btn) { btn.setAttribute('data-label', btn.textContent); btn.disabled = true; btn.textContent = 'Sending…'; }
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
      }).then(function (r) {
        if (r.ok) { showSuccess(); }
        else { return r.json().then(function (j) { showError(j && j.error); }).catch(function () { showError(); }); }
      }).catch(function () { showError('Network error — please try again.'); });
    });
  });

  /* ---- optional analytics ---- */
  if (cfg.ANALYTICS_ID && cfg.ANALYTICS_ID.indexOf('G-') === 0) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + cfg.ANALYTICS_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', cfg.ANALYTICS_ID);
  }

  /* ---- footer year ---- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
