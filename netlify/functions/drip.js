/* Scheduled drip: runs daily (see schedule in netlify.toml). For each subscriber,
 * sends any sequence email that is due (day 2/4/6/8/10 after signup) and not yet
 * sent. Skips anyone who unsubscribed. State lives in Netlify Blobs. */
import { KEY, send, subscribers, SEQUENCE } from "./_lib.js";

const DAY = 24 * 60 * 60 * 1000;

export const handler = async () => {
  if (!KEY) return { statusCode: 200, body: "RESEND_API_KEY not set; skipping." };

  const store = subscribers();
  let list;
  try { list = await store.list(); } catch (e) { return { statusCode: 200, body: "No store yet." }; }

  const now = Date.now();
  let sentCount = 0, checked = 0;

  for (const item of (list.blobs || [])) {
    let rec;
    try { rec = await store.get(item.key, { type: "json" }); } catch (e) { continue; }
    if (!rec || rec.unsub) continue;
    checked++;

    const days = (now - (rec.ts || now)) / DAY;
    const sent = new Set(rec.sent || []);
    let changed = false;

    for (const step of SEQUENCE) {
      if (days >= step.day && !sent.has(step.id)) {
        try {
          const r = await send(rec.email, step.subject, step.render(rec.email));
          if (r.ok) { sent.add(step.id); changed = true; sentCount++; }
        } catch (e) { /* try again next run */ }
      }
    }

    if (changed) {
      rec.sent = [...sent];
      try { await store.setJSON(item.key, rec); } catch (e) {}
    }
  }

  return { statusCode: 200, body: `Drip run complete. Checked ${checked} subscribers, sent ${sentCount} emails.` };
};
