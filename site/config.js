/* =========================================================
   THE NIL PLAYBOOK — Site Config
   ALL human-supplied values live here. Edit this one file before launch.
   See GO-LIVE.md for step-by-step instructions on what to paste where.
   ========================================================= */
window.NIL_CONFIG = {
  // --- Your live domain (used for canonical URLs / sharing). No trailing slash. ---
  SITE_URL: "https://thenilplaybook.com",            // REPLACE_ME with your real domain

  // --- Stripe checkout (Payment Link or hosted Checkout URL) for the $29/$49 product. ---
  // Create in Stripe → Product → Payment Link. Set its success URL to COURSE_ACCESS_URL below.
  CHECKOUT_URL: "REPLACE_ME_STRIPE_PAYMENT_LINK",

  // --- Where buyers land after paying (unlisted access page). Set this as Stripe's success URL. ---
  COURSE_ACCESS_URL: "/course/?access=member",        // keep, or point to an unlisted page you choose

  // --- Email capture. Paste your provider's form ACTION endpoint (e.g. ConvertKit/Mailchimp/Formspree). ---
  // The form POSTs the email here. See GO-LIVE.md for the exact value to copy from your provider.
  EMAIL_ENDPOINT: "REPLACE_ME_EMAIL_FORM_ENDPOINT",
  EMAIL_FIELD_NAME: "email",                          // some providers use "email_address" — check provider docs

  // --- Analytics (optional). Paste your measurement ID, e.g. "G-XXXXXXX". Leave blank to skip. ---
  ANALYTICS_ID: "",

  // --- Your contact + social URLs (used in footer, video hub, schema). ---
  CONTACT_EMAIL: "hello@thenilplaybook.com",          // REPLACE_ME
  SOCIAL: {
    tiktok:    "https://tiktok.com/@thenilplaybook",     // REPLACE_ME
    youtube:   "https://youtube.com/@thenilplaybook",    // REPLACE_ME
    instagram: "https://instagram.com/thenilplaybook",   // REPLACE_ME
    facebook:  "https://facebook.com/thenilplaybook"     // REPLACE_ME
  }
};
