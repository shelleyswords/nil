/* THE NIL PLAYBOOK — shared site JS (progressive enhancement only).
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

  /* ---- email capture forms ---- */
  document.querySelectorAll('form[data-optin]').forEach(function (form) {
    var endpoint = cfg.EMAIL_ENDPOINT || '';
    if (endpoint && endpoint.indexOf('REPLACE_ME') === -1) {
      form.setAttribute('action', endpoint);
      form.setAttribute('method', 'post');
    }
    form.addEventListener('submit', function (e) {
      // If a real endpoint is configured, let the browser POST normally.
      var configured = endpoint && endpoint.indexOf('REPLACE_ME') === -1;
      if (configured) return; // native submit to provider
      // Otherwise, demo mode: show success state so the page is testable pre-launch.
      e.preventDefault();
      var success = form.parentNode.querySelector('.success-msg');
      form.style.display = 'none';
      if (success) success.style.display = 'block';
      try { console.log('[NIL] Email captured (demo mode — wire EMAIL_ENDPOINT in config.js):', form.querySelector('input[type=email]').value); } catch (e2) {}
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
