/* One-click unsubscribe: marks the subscriber so the drip stops, and best-effort
 * unsubscribes them from the Resend Audience. Handles GET (link) and POST
 * (List-Unsubscribe-Post one-click). */
import { KEY, subscribers, keyFor, SITE } from "./_lib.js";

export const handler = async (event) => {
  const email = (event.queryStringParameters?.e || "").trim();
  if (email) {
    try {
      const store = subscribers();
      const k = keyFor(email);
      const rec = (await store.get(k, { type: "json" })) || { email, ts: Date.now(), sent: [] };
      rec.unsub = true;
      await store.setJSON(k, rec);
    } catch (e) {}

    if (process.env.RESEND_AUDIENCE_ID && KEY) {
      fetch(`https://api.resend.com/audiences/${process.env.RESEND_AUDIENCE_ID}/contacts/${encodeURIComponent(email)}`, {
        method: "PATCH",
        headers: { "Authorization": `Bearer ${KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ unsubscribed: true })
      }).catch(() => {});
    }
  }

  // one-click POST (email clients) -> 200 no body; GET -> friendly page
  if (event.httpMethod === "POST")
    return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: "{}" };

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Unsubscribed</title>
    <style>body{font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:#0b1f33;color:#fff;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0;text-align:center;padding:24px}
    .c{max-width:420px}.g{color:#f2b705;font-weight:900}a{color:#f2b705}</style></head>
    <body><div class="c"><div style="font-weight:900;font-size:20px;margin-bottom:16px">The NIL <span class="g">Game Plan</span></div>
    <h1>You're unsubscribed.</h1><p style="color:#cdd9e4">You won't get any more emails from us. No hard feelings — the <a href="${SITE}/blog/">free guides</a> are always here if you need them.</p></div></body></html>`
  };
};
