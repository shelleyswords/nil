/* Netlify serverless function: email signup via Resend.
 * Receives an email from the site's opt-in forms, emails the free checklist,
 * and (optionally) adds the contact to a Resend Audience.
 *
 * SECRETS LIVE IN NETLIFY ENV VARS — never in this file or the repo:
 *   RESEND_API_KEY        (required)  e.g. re_xxx
 *   RESEND_FROM           (required)  e.g. "The NIL Game Plan <hello@thenilgameplan.app>"
 *   SITE_URL              (optional)  e.g. https://thenilgameplan.app  (for the checklist link)
 *   RESEND_AUDIENCE_ID    (optional)  to also save contacts to a Resend Audience
 */
exports.handler = async (event) => {
  const headers = { "Content-Type": "application/json" };

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  // parse email from JSON or form-encoded body
  let email = "";
  try {
    const ct = (event.headers["content-type"] || "").toLowerCase();
    if (ct.includes("application/json")) {
      email = (JSON.parse(event.body || "{}").email || "").trim();
    } else {
      email = decodeURIComponent((event.body || "").split("&")
        .map(p => p.split("="))
        .find(p => p[0] === "email")?.[1] || "").replace(/\+/g, " ").trim();
    }
  } catch (e) { /* fall through to validation */ }

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Please enter a valid email." }) };
  }

  const KEY = process.env.RESEND_API_KEY;
  const FROM = process.env.RESEND_FROM || "The NIL Game Plan <onboarding@resend.dev>";
  const SITE = (process.env.SITE_URL || "https://thenilgameplan.app").replace(/\/$/, "");
  if (!KEY) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Email not configured yet." }) };
  }

  const checklistUrl = SITE + "/downloads/NIL-Money-Starter-Checklist.pdf";
  const html = welcomeEmail(SITE, checklistUrl);

  try {
    // 1) send the welcome email with the checklist
    const sendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM,
        to: [email],
        subject: "Here's your NIL Money Starter Checklist 🏈",
        html
      })
    });
    if (!sendRes.ok) {
      const detail = await sendRes.text();
      return { statusCode: 502, headers, body: JSON.stringify({ error: "Could not send email.", detail }) };
    }

    // 2) optionally store the contact in a Resend Audience
    if (process.env.RESEND_AUDIENCE_ID) {
      await fetch(`https://api.resend.com/audiences/${process.env.RESEND_AUDIENCE_ID}/contacts`, {
        method: "POST",
        headers: { "Authorization": `Bearer ${KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ email, unsubscribed: false })
      }).catch(() => {});
    }

    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Something went wrong." }) };
  }
};

function welcomeEmail(site, checklistUrl) {
  return `<!DOCTYPE html><html><body style="margin:0;background:#f4f7f9;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0b1f33">
  <div style="max-width:560px;margin:0 auto;padding:28px 22px">
    <div style="font-weight:900;font-size:20px;color:#0b1f33">The NIL <span style="color:#f2b705">Game Plan</span></div>
    <div style="background:#fff;border:1px solid #e2e8ee;border-radius:14px;padding:28px;margin-top:18px">
      <h1 style="font-size:22px;margin:0 0 12px">Here's your checklist 🙌</h1>
      <p style="font-size:16px;line-height:1.6;color:#41566b;margin:0 0 18px">You're in. Here are the 7 money moves to make <em>before</em> you spend a dollar of NIL money — one page, plain English.</p>
      <p style="margin:0 0 24px"><a href="${checklistUrl}" style="display:inline-block;background:#f2b705;color:#1a1300;font-weight:800;text-decoration:none;padding:14px 26px;border-radius:999px">Download the checklist →</a></p>
      <p style="font-size:16px;line-height:1.6;color:#41566b;margin:0 0 8px"><strong>Quick win to do today:</strong> the moment any NIL money lands, move <strong>30% into a separate savings account</strong> for taxes and pretend it doesn't exist. Nobody withholds taxes on NIL money — that one habit saves you from a tax-season nightmare.</p>
      <p style="font-size:16px;line-height:1.6;color:#41566b;margin:18px 0 0">Over the next few days I'll send you the other big ones — the fee trap, simple investing, and how to spot scams. Keep an eye out.</p>
      <hr style="border:none;border-top:1px solid #e2e8ee;margin:24px 0">
      <p style="font-size:15px;line-height:1.6;color:#41566b;margin:0">Want the full step-by-step system? <a href="${site}/guide.html" style="color:#0a5e44;font-weight:700">The NIL Game Plan guide + course</a> walks you through every move, with a year-one plan built for how much you earn.</p>
    </div>
    <p style="font-size:12px;line-height:1.5;color:#8a99a8;margin:18px 4px 0">No jargon. No suits. No fees you didn't sign up for.<br>Educational content only — not personalized financial, tax, or legal advice. You're receiving this because you signed up at ${site}. Unsubscribe anytime.</p>
  </div></body></html>`;
}
