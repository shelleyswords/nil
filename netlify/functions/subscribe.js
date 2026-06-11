/* Email signup: sends the free checklist via Resend, records the subscriber
 * (Netlify Blobs) so the scheduled drip can follow up, and optionally adds them
 * to a Resend Audience. Secrets live in Netlify env vars, never in the repo. */
import { KEY, FROM, SITE, send, wrap, subscribers, keyFor } from "./_lib.js";

export const handler = async (event) => {
  const headers = { "Content-Type": "application/json" };
  if (event.httpMethod !== "POST")
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };

  // parse email (JSON or form-encoded)
  let email = "";
  try {
    const ct = (event.headers["content-type"] || "").toLowerCase();
    if (ct.includes("application/json")) email = (JSON.parse(event.body || "{}").email || "").trim();
    else email = decodeURIComponent((event.body || "").split("&").map(p => p.split("="))
      .find(p => p[0] === "email")?.[1] || "").replace(/\+/g, " ").trim();
  } catch (e) {}

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Please enter a valid email." }) };
  if (!KEY)
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Email not configured yet." }) };

  const checklistUrl = SITE + "/downloads/NIL-Money-Starter-Checklist.pdf";
  const html = wrap("Here's your checklist 🙌", `
    <p style="font-size:16px;line-height:1.6;color:#41566b;margin:0 0 18px">You're in. Here are the 7 money moves to make <em>before</em> you spend a dollar of NIL money — one page, plain English.</p>
    <p style="margin:0 0 22px"><a href="${checklistUrl}" style="display:inline-block;background:#f2b705;color:#1a1300;font-weight:800;text-decoration:none;padding:14px 26px;border-radius:999px">Download the checklist →</a></p>
    <p style="font-size:16px;line-height:1.6;color:#41566b;margin:0 0 8px"><strong>Quick win to do today:</strong> the moment any NIL money lands, move <strong>30% into a separate savings account</strong> for taxes and pretend it doesn't exist. Nobody withholds taxes on NIL money — that one habit saves you from a tax-season nightmare.</p>
    <p style="font-size:16px;line-height:1.6;color:#41566b;margin:18px 0 0">Over the next few days we'll send you the other big ones — the fee trap, simple investing, and how to spot scams. Keep an eye out. — The NIL Game Plan</p>`, email);

  try {
    const r = await send(email, "Here's your NIL Money Starter Checklist 🏈", html);
    if (!r.ok) {
      const detail = await r.text();
      return { statusCode: 502, headers, body: JSON.stringify({ error: "Could not send email.", detail }) };
    }

    // record subscriber for the drip (best-effort; don't fail the signup if storage hiccups)
    try {
      const store = subscribers();
      const k = keyFor(email);
      const existing = await store.get(k, { type: "json" });
      if (!existing) {
        await store.setJSON(k, { email, ts: Date.now(), sent: [1], unsub: false });
      }
    } catch (e) { /* storage optional */ }

    // optional Resend Audience
    if (process.env.RESEND_AUDIENCE_ID) {
      fetch(`https://api.resend.com/audiences/${process.env.RESEND_AUDIENCE_ID}/contacts`, {
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
