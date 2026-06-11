/* =========================================================
   THE NIL GAME PLAN — Site Config
   ALL human-supplied values live here. Edit this one file before launch.
   See GO-LIVE.md for step-by-step instructions on what to paste where.
   ========================================================= */
window.NIL_CONFIG = {
  // --- Your live domain (used for canonical URLs / sharing). No trailing slash. ---
  SITE_URL: "https://thenilgameplan.app",            // REPLACE_ME with your real domain

  // --- Stripe checkout (Payment Link) for the product. ---
  // NOTE: this is a Stripe TEST-mode link (only test cards work). Before launch,
  // replace it with the LIVE Payment Link (same URL without "test_").
  CHECKOUT_URL: "https://buy.stripe.com/test_7sY6oHddYfSkgUQ1X9dEs00",

  // --- Where buyers land after paying (unlisted access page). Set this as Stripe's success URL. ---
  COURSE_ACCESS_URL: "/course/?access=member",        // keep, or point to an unlisted page you choose

  // --- Email capture. Paste your provider's form ACTION endpoint (e.g. ConvertKit/Mailchimp/Formspree). ---
  // The form POSTs the email here. See GO-LIVE.md for the exact value to copy from your provider.
  EMAIL_ENDPOINT: "REPLACE_ME_EMAIL_FORM_ENDPOINT",
  EMAIL_FIELD_NAME: "email",                          // some providers use "email_address" — check provider docs

  // --- Analytics (optional). Paste your measurement ID, e.g. "G-XXXXXXX". Leave blank to skip. ---
  ANALYTICS_ID: "",

  // --- Your contact + social URLs (used in footer, video hub, schema). ---
  CONTACT_EMAIL: "hello@thenilgameplan.app",          // REPLACE_ME
  SOCIAL: {
    tiktok:    "https://tiktok.com/@thenilgameplan",     // REPLACE_ME
    youtube:   "https://youtube.com/@thenilgameplan",    // REPLACE_ME
    instagram: "https://instagram.com/thenilgameplan",   // REPLACE_ME
    facebook:  "https://facebook.com/thenilgameplan"     // REPLACE_ME
  }
};
