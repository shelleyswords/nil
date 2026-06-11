# 📧 Email setup (Resend) — for The NIL Game Plan

The site captures emails and sends the free checklist through **Resend**, using a small **Netlify serverless function** (`netlify/functions/subscribe.js`). Your API key lives in **Netlify environment variables** — never in the code or the repo.

## One-time setup

### 1. Add your secrets to Netlify (NOT to the repo)
In Netlify → your site → **Site configuration → Environment variables → Add a variable**, add:

| Key | Value | Required? |
|---|---|---|
| `RESEND_API_KEY` | your `re_...` key from Resend | ✅ required |
| `RESEND_FROM` | `The NIL Game Plan <hello@thenilgameplan.app>` | ✅ required |
| `SITE_URL` | `https://thenilgameplan.app` (your live domain) | recommended |
| `RESEND_AUDIENCE_ID` | a Resend Audience ID, to also save contacts to a list | optional |

After adding them, **redeploy** (Netlify → Deploys → Trigger deploy) so the function picks them up.

### 2. Verify your sending domain in Resend ⚠️ (the important gotcha)
Until you verify a domain, Resend will only let you send to **your own Resend account email** — real subscribers won't receive anything. To fix:
1. In Resend → **Domains → Add domain** → enter `thenilgameplan.app`.
2. Resend gives you **DNS records** (SPF, DKIM, etc.). Add them at your domain registrar / DNS host (Netlify DNS if you're using it).
3. Wait for Resend to show the domain **Verified** (usually minutes).
4. Make sure `RESEND_FROM` uses an address **at that verified domain** (e.g. `hello@thenilgameplan.app`).

> This requires the domain to actually be **registered** first. Until it is, you can still test the whole flow by signing up with the **email address you used for Resend** (Resend allows sending to yourself pre-verification).

## How to test
1. After deploy + env vars set, go to the live site and submit the **free checklist** form with your own email.
2. The button shows "Sending…", then the success message; check your inbox for the checklist email.
3. If it errors: Netlify → **Functions → subscribe → logs** shows the reason (usually a missing env var or an unverified domain).

## What it does today (and the one limitation)
- ✅ Captures the email, **emails the free checklist immediately**, and (if `RESEND_AUDIENCE_ID` is set) saves the contact to a Resend Audience.
- ⚠️ **Resend does not have built-in drip automation.** The other 5 nurture emails (`emails/email-2.md` … `email-6.md`) aren't sent automatically yet. Two options:
  1. **Manual broadcasts** — periodically send them from Resend → Broadcasts to your Audience (simplest).
  2. **Automate the drip** — I can build a scheduled Netlify function that sends the timed sequence. Just ask.

## Editing the welcome email
The email's content/HTML lives in `welcomeEmail()` at the bottom of `netlify/functions/subscribe.js`. Edit there, commit, and it redeploys.
