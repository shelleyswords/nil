/* Shared helpers for The NIL Game Plan email functions (Resend + Netlify Blobs). */
import { getStore } from "@netlify/blobs";

export const KEY  = process.env.RESEND_API_KEY;
export const FROM = process.env.RESEND_FROM || "The NIL Game Plan <onboarding@resend.dev>";
export const SITE = (process.env.SITE_URL || "https://thenilgameplan.app").replace(/\/$/, "");

export function subscribers() { return getStore("subscribers"); }
export function keyFor(email) { return Buffer.from(email.toLowerCase()).toString("base64url"); }
export function unsubUrl(email) { return `${SITE}/.netlify/functions/unsubscribe?e=${encodeURIComponent(email)}`; }

/* Send one email via Resend. Returns the fetch Response. */
export async function send(to, subject, html) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Authorization": `Bearer ${KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM, to: [to], subject, html,
      headers: { "List-Unsubscribe": `<${unsubUrl(to)}>`, "List-Unsubscribe-Post": "List-Unsubscribe=One-Click" }
    })
  });
}

/* Branded HTML wrapper for every email. */
export function wrap(headline, innerHtml, email) {
  return `<!DOCTYPE html><html><body style="margin:0;background:#f4f7f9;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0b1f33">
  <div style="max-width:560px;margin:0 auto;padding:28px 22px">
    <div style="font-weight:900;font-size:20px">The NIL <span style="color:#f2b705">Game Plan</span></div>
    <div style="background:#fff;border:1px solid #e2e8ee;border-radius:14px;padding:28px;margin-top:18px">
      <h1 style="font-size:22px;margin:0 0 14px">${headline}</h1>
      ${innerHtml}
    </div>
    <p style="font-size:12px;line-height:1.5;color:#8a99a8;margin:18px 4px 0">No jargon. No suits. No fees you didn't sign up for.<br>
    Educational content only — not personalized financial, tax, or legal advice. Consult a licensed professional.<br>
    <a href="${unsubUrl(email)}" style="color:#8a99a8">Unsubscribe</a></p>
  </div></body></html>`;
}

function p(t)   { return `<p style="font-size:16px;line-height:1.6;color:#41566b;margin:0 0 16px">${t}</p>`; }
function cta(href, label) { return `<p style="margin:6px 0 18px"><a href="${href}" style="display:inline-block;background:#f2b705;color:#1a1300;font-weight:800;text-decoration:none;padding:13px 24px;border-radius:999px">${label}</a></p>`; }

/* The drip: emails 2–6, sent on day 2/4/6/8/10 after signup. */
export const SEQUENCE = [
  {
    id: 2, day: 2,
    subject: "The fee that quietly steals $400,000",
    render: (email) => wrap("The silent killer: fees", [
      p("Quick one today — because this single idea can be worth a fortune to you."),
      p("A financial advisor who charges <strong>1% a year</strong> sounds cheap. It isn't. That 1% comes off your <em>entire</em> balance every year, forever — including money that would've kept growing."),
      p("Over a lifetime, starting young, that “tiny” fee can quietly cost you <strong>$300,000–$500,000+</strong>. Same investments. The only difference is the fee."),
      p("So before you let anyone manage your money, ask them one question: <strong>“Are you a fee-only fiduciary, and how exactly do you get paid?”</strong> If the answer is fuzzy — walk away."),
      p("More soon. — Coach")
    ].join(""), email)
  },
  {
    id: 3, day: 4,
    subject: "Before you invest a dollar, do this",
    render: (email) => wrap("Build the boring base first", [
      p("Investing is exciting. But if you skip the foundation, one bad week can wipe it out. Do these three first, in order:"),
      p("<strong>1. A starter emergency fund.</strong> Save $1,000 for life's surprises, then build toward 3–6 months of expenses."),
      p("<strong>2. Keep it in a high-yield savings account.</strong> Same safety as a normal bank, but it actually pays you real interest. This is where your emergency fund and tax money live."),
      p("<strong>3. Kill credit-card debt.</strong> At 20%+ interest, paying it off beats almost any investment — it's a guaranteed return."),
      p("Boring? Yes. It's also what keeps you steady when everything else gets bumpy.")
    ].join(""), email)
  },
  {
    id: 4, day: 6,
    subject: "How to invest without getting ripped off",
    render: (email) => wrap("The boring portfolio that wins", [
      p("Forget stock-picking and hot tips. The approach that quietly beats most professional money managers is simple:"),
      p("<strong>Own a little of everything, cheaply, for a long time.</strong> An <em>index fund</em> buys a tiny piece of thousands of companies at once — cheap, spread-out, and it beats most pros over time."),
      p("Hold it inside a <strong>Roth IRA</strong> so the growth comes out <strong>tax-free</strong>. Add money automatically every month. Then leave it alone."),
      p("That's it. Done for years, that simple system builds real wealth — especially because you're starting young, when time does the heavy lifting."),
      cta(`${SITE}/blog/how-to-invest-nil-money.html`, "Read the full breakdown →")
    ].join(""), email)
  },
  {
    id: 5, day: 8,
    subject: "If it slid into your DMs, it's a scam",
    render: (email) => wrap("Protect what you earned", [
      p("Money attracts people. The more visible you get, the more they come. Learn these red flags once and you'll spot them for life:"),
      p("• <strong>“Guaranteed” returns</strong> — no real investment guarantees big returns. Ever.<br>• <strong>Pressure to act now</strong> — urgency is a manipulation tactic.<br>• <strong>You don't understand it</strong> — confusion is a sales tool.<br>• <strong>It came from your DMs</strong> — real opportunities don't hunt you there."),
      p("And the hard one: friends and family who want a piece. Simple rule — only risk money you'd be fine never seeing again, and <strong>never</strong> your tax, emergency, or retirement money. “No” is a complete sentence."),
      p("Keep your guard up. You earned this.")
    ].join(""), email)
  },
  {
    id: 6, day: 10,
    subject: "Ready for the full game plan?",
    render: (email) => wrap("You've got the foundation — here's the whole system", [
      p("Over the last week you got the highlights: taxes first, dodge the fees, build the base, invest simple, don't get scammed. That alone puts you ahead of almost every athlete out there."),
      p("If you want it <strong>all in one place</strong> — step by step, with a year-one plan built for exactly how much you earn — that's <strong>The NIL Game Plan</strong>: the full guide plus a short, mobile-friendly video course."),
      p("It's <strong>$29</strong> right now (launch price; goes to $49). One payment, yours forever — the opposite of a 1%-a-year advisor."),
      cta(`${SITE}/guide.html`, "Get the NIL Game Plan — $29"),
      p("Either way, I'm glad you're here. Go keep your money. — Coach")
    ].join(""), email)
  }
];
