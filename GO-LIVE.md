# 🚀 GO-LIVE — Launch The NIL Playbook

Everything is built. The website lives in the **`site/`** folder — that whole folder is your website. To go live, you only need to do the account-dependent steps below (the stuff that needs *your* logins). Nothing here requires coding.

**Estimated time to launch: about 60–90 minutes.**

Do them in this order. Each step says exactly where to paste each value — almost everything lives in one file: **`site/config.js`**.

---

## ✅ Step 1 — Buy a domain (10 min)
1. Go to a domain registrar (Namecheap, Cloudflare, or Google Domains/Squarespace).
2. Search for and buy your domain. Recommended: **thenilplaybook.com** (or `.co` / `getnilplaybook.com` if taken).
3. You don't need to configure anything yet — you'll point it at your host in Step 2.

> After you have the domain, open **`site/config.js`** and set `SITE_URL` to your domain (e.g. `https://thenilplaybook.com`). Also update the `<link rel="canonical">` and `og:url` domains if you chose a different domain (find-and-replace `thenilplaybook.com` across the `site/` folder).

---

## ✅ Step 2 — Put the site online (15 min) — easiest path: Netlify Drop
1. Go to **app.netlify.com/drop**.
2. **Drag the entire `site/` folder** onto the page. It uploads and gives you a live URL instantly (e.g. `random-name.netlify.app`).
3. In Netlify → **Site settings → Domain management**, add your custom domain from Step 1 and follow their instructions to point it (they walk you through DNS). Netlify gives you free HTTPS automatically.

**Alternatives (all free, all fine):**
- **Vercel** (vercel.com) — drag-and-drop or connect a folder.
- **Cloudflare Pages** — upload the `site/` folder.
- **GitHub Pages** — push `site/` to a repo and enable Pages.

That's it — your site is live. Now wire up the money and email pieces below.

---

## ✅ Step 3 — Turn on email capture (15 min)
The free-checklist forms are built and ready; they just need your email provider's endpoint.
1. Create a free account with a beginner-friendly email tool. **Recommended: MailerLite or ConvertKit/Kit** (both have free tiers and simple forms). Mailchimp also works.
2. Create an **audience/list** and a **signup form** (or an "embedded form"). Find the form's **action URL / endpoint** (the address the form submits to). In most tools this is in the embedded form's HTML as `action="..."`.
3. Open **`site/config.js`** and paste it into `EMAIL_ENDPOINT`. If your provider names the email field something other than `email` (e.g. `email_address` or `fields[email]`), set `EMAIL_FIELD_NAME` to match.
4. In your email tool, set up the **welcome automation** using the ready-made copy in the **`emails/`** folder (6 emails + a README explaining timing). Attach the checklist PDF (in `site/downloads/NIL-Money-Starter-Checklist.pdf`) to the first email, or link to it.
5. Re-upload the `site/` folder to your host (just drag it again on Netlify) so the new config goes live.

> Until you do this, the forms run in "demo mode" (they show a success message but don't store the email). Once `EMAIL_ENDPOINT` is set, they submit for real.

---

## ✅ Step 4 — Set up payment with Stripe (20 min)
1. Create a free **Stripe** account (stripe.com) and complete the basic business verification.
2. In the Stripe Dashboard → **Product catalog → Add product**: name it "The NIL Playbook", price **$29** (one-time). Save.
3. On the product, click **Create payment link**. In the payment-link settings:
   - Under **After payment**, choose **"Don't show confirmation page — redirect to your website"** and set the redirect (success) URL to your course access page: **`https://YOURDOMAIN/course/?access=member`**.
   - (Optional) Enable Stripe's confirmation email so buyers get a receipt.
4. Copy the **Payment Link URL**, open **`site/config.js`**, and paste it into `CHECKOUT_URL`. Every "Get the Playbook — $29" button now works.
5. Deliver the goods after purchase: the redirect takes buyers to the course (it unlocks automatically). Also link the guide PDF (`site/downloads/The-NIL-Playbook.pdf`) on the course welcome lesson or email it to buyers. (For automatic file delivery you can also use Stripe's built-in checkout or a tool like Gumroad — but the redirect-to-course method works out of the box.)
6. Re-upload the `site/` folder.

> **How access works (no logins needed):** when someone pays, Stripe sends them to `/course/?access=member`, which unlocks all lessons on their device and remembers it. It's a simple, friction-free gate — good enough to launch. If you later want stronger protection, see the note at the bottom.

---

## ✅ Step 5 — Add your videos (ongoing)
Your videos are **faceless / AI-generated** — see **`VIDEO-PRODUCTION.md`** for the full step-by-step pipeline (it uses a consistent female AI narrator, casual-but-professional). The scripts are all written:
- **Course lessons:** scripts in **`course/scripts/`**. Produce each video, then paste its embed URL into **`site/assets/data/curriculum.js`** (the `video:` field for each lesson). Until then, lessons show a tasteful "video coming soon" placeholder with the written recap — so the course is usable today.
- **Social videos:** 50+ scripts in **`social/`**. Post them, then add the best ones to **`site/assets/data/videos.js`** so they appear on your Videos page.

---

## ✅ Step 6 — Social accounts + analytics (15 min)
1. Create accounts on TikTok, YouTube, Instagram, and Facebook using the bios in **`social/profile-kit.md`** (suggested handle: **@thenilplaybook**).
2. Open **`site/config.js`** and paste each profile URL into the `SOCIAL` block, and set your `CONTACT_EMAIL`. Now every footer/Follow link works.
3. (Optional) Create a free Google Analytics 4 property, copy the **Measurement ID** (looks like `G-XXXXXXX`), and paste it into `ANALYTICS_ID` in `config.js`.
4. Re-upload the `site/` folder one last time.

---

## ✅ Step 7 — Before you sell: a quick accuracy check (recommended)
The tax/investing content is written as **general education with disclaimers**, which is the right legal footing. Before promoting paid sales, have a **CPA glance at the tax specifics** (the 30% rule, ~15% self-employment tax, quarterly dates, Roth IRA limits) to confirm current-year figures for your audience. See accuracy flags in `BUILD-LOG.md`.

---

## 🎉 You're live
Once Steps 1–6 are done, the funnel runs on its own:
**Social videos → free checklist (captures email) → welcome emails → $29 Playbook + course.**

Post consistently from the `social/` calendar, and the rest compounds.

---

### Reference: the one config file
Everything you paste lives in **`site/config.js`**:
| Value | What it is | From which step |
|---|---|---|
| `SITE_URL` | Your domain | Step 1 |
| `EMAIL_ENDPOINT` / `EMAIL_FIELD_NAME` | Email form target | Step 3 |
| `CHECKOUT_URL` | Stripe payment link | Step 4 |
| `COURSE_ACCESS_URL` | Where buyers land (default works) | Step 4 |
| `CONTACT_EMAIL` | Your contact email | Step 6 |
| `SOCIAL` | Your 4 profile URLs | Step 6 |
| `ANALYTICS_ID` | Google Analytics ID (optional) | Step 6 |

### Optional later: stronger course protection
The `?access=member` gate is friction-free but not locked down (a determined person could share the link). It's the right call for launch. If sales grow and you want real accounts/protection, move the course behind a course platform (Teachable, Podia) or a Stripe + members tool — your scripts and videos carry over unchanged.
