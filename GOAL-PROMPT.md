# /goal — Build the complete, launch-ready "NIL Game Plan" program

## MISSION
Build the entire **NIL Game Plan** program end-to-end and make it 100% launch-ready. The NIL Game Plan is a low-cost educational product that teaches NCAA college athletes how to keep, grow, and protect their NIL (Name, Image, Likeness) money — without overpaying financial advisors. The centerpiece is a high-quality, fast, **SEO- and AIO-optimized website** that serves as the home base for all video content and sells the guide. When you are done, the only things left for a human to do are: buy a domain, upload the finished site folder to a host, paste in account keys (email + payment), and add real video URLs. Everything else must be complete, polished, and verified.

Optimize relentlessly for two things: **(1) genuine value and clarity for an 18–22-year-old with zero financial experience**, and **(2) being discoverable by everyone — traditional search engines AND AI answer engines.**

---

## OPERATING PRINCIPLES (this runs unattended overnight)
- **Work fully autonomously. Do NOT stop to ask questions.** Make reasonable, well-reasoned decisions and record them in `BUILD-LOG.md`. When you hit a fork, pick the option that best serves athlete value + discoverability + launch-readiness, note it, and keep moving.
- **Quality bar: "as well as possible."** Do not cut corners or leave stubs. If something is worth doing, finish it.
- **Plain English always.** Every concept gets a real-world analogy; every number gets a concrete dollar example; every term is defined the moment it appears. Assume the reader knows nothing about money. Short sentences. No jargon.
- **Education, not advice.** This is the legal foundation and it is non-negotiable. Teach how money/taxes/fees/investing work and what questions to ask — never tell anyone to buy a specific security or give personalized advice. Disclaimers on every page.
- **Verify your own work.** Render pages and take screenshots, check every internal link, validate HTML, confirm structured data is well-formed, confirm mobile layout, confirm the site builds/opens cleanly. Fix what you find. Re-verify.
- **Keep `BUILD-LOG.md`** updated as you go: decisions made, assumptions, what's done, what's left for the human, and how to verify each piece.
- **Leave only account-dependent steps for the human**, collected in a single `GO-LIVE.md`. Everything that can be built without the user's private accounts must be fully built and wired to clearly-labeled config placeholders.

---

## CONTEXT & EXISTING ASSETS (reuse and elevate these)
Working directory contains prior work — read it first and build on it; do not throw it away:
- `01-foundation-brand-plan.md` — brand, positioning, pricing, legal framing, funnel. **Source of truth for decisions.**
- `02-the-nil-playbook-guide.md` — full 8-chapter guide content.
- `03-free-checklist-lead-magnet.md` — the free 1-page checklist (email magnet).
- `04-social-content.md` — 20 video scripts + social strategy.
- `index.html` — a first-draft landing page (replace/upgrade into the full site).
- `build/guide-print.html`, `build/checklist-print.html` — print-styled HTML that renders to the PDFs.
- `The-NIL-Game-Plan.pdf`, `NIL-Money-Starter-Checklist.pdf` — the current PDF products.

**Brand (keep consistent everywhere):**
- Name: **The NIL Game Plan**. Tagline: *"No jargon. No suits. No fees you didn't sign up for."*
- Voice: a confident teammate, not a suit. Talks to athletes, never down to them. Anti-jargon is the personality.
- Colors: ink navy `#0b1f33`, field green `#0e7c5a` / `#0a5e44`, trophy gold `#f2b705`, mist `#f4f7f9`.
- Target reader: mid-tier NIL earners ($5k–$50k/yr), but content serves all athletes.
- Pricing ladder: free social tips + free checklist (email magnet) → **$49 guide ($29 launch price)** → optional subscription tier later.

---

## VIDEO PRODUCTION — FACELESS / AI-GENERATED (applies to ALL videos: course + social)
**Hard requirement: every video is faceless and AI-generated. The user will NOT appear on camera, will NOT record their own voice, and should not be required to show their face or speak.** Design the entire video system so nothing depends on the user being on screen.

- **Format:** AI voiceover narration + visuals. Visuals are some mix of: B-roll/stock footage, AI-generated images/video, animated on-screen text and motion graphics, simple slides/illustrations, screen recordings/diagrams, and (optionally) an AI avatar/presenter — but never the user's real face or voice.
- **For every video (course lesson and social short), produce a complete faceless production package**, not just a script:
  - **Voiceover script** written specifically for AI narration (natural spoken cadence, short sentences, clear pronunciation; mark emphasis and pauses).
  - **Scene-by-scene storyboard / shot list:** each line of narration paired with exactly what's on screen — the on-screen text/captions, the visual (specific B-roll keyword, AI image/video prompt, or graphic), and timing.
  - **AI image/video generation prompts** for each visual that needs to be generated (detailed, on-brand: navy/green/gold, athletic, clean, modern).
  - **AI voice direction — consistent narrator across ALL videos:** use a single recurring **female** AI narrator as the brand voice. Tone is **casual but professional** — warm, confident, down-to-earth, relatable to college athletes (a smart, trustworthy older-sister/teammate energy), never stiff or corporate and never condescending. Young-adult sounding, natural conversational pace, clear pronunciation. Pick one specific AI voice and use it for every course lesson and social video for brand consistency; document the exact voice/settings in `VIDEO-PRODUCTION.md` so it's reproducible.
  - **Captions/subtitles** (burned-in style recommended for social) and a title/thumbnail concept.
  - **Music/SFX direction** (royalty-free mood suggestion).
- **Actually generate finished videos where tooling is available.** This environment may expose AI generation tools (image generation, video generation, text-to-speech/voiceover, music). Use them to **produce real, finished faceless videos** — at minimum: the course intro, the free-preview lesson(s), and the first batch (5–10) of short-form social videos — and save them as files (e.g., `course/videos/` and `social/videos/`). Generate the AI voiceover audio, generate or source the visuals, and assemble. If full automated assembly isn't possible in-environment, generate the components (voiceover audio + key visuals/images) and provide an exact, repeatable assembly recipe.
- **Document a repeatable faceless pipeline** in `VIDEO-PRODUCTION.md`: the exact recommended toolchain and step-by-step process to mass-produce the rest of the videos faceless and cheaply (recommend specific beginner-friendly options for AI voiceover, faceless video assembly, stock/B-roll, and auto-captioning; include a low/no-cost path). Anyone should be able to follow it to crank out every remaining video without appearing on camera.
- Replace any earlier notion of the user "filming themselves" — there is no self-filming. The user's only remaining video task is optional review/approval and (where not auto-generated) running the documented generation pipeline, then the videos auto-populate via `curriculum.json`/`videos.json`.

## TECH STACK & ARCHITECTURE
- **Static site, NO backend, no database.** The output must be a folder of static files that can be uploaded to any host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, or plain web hosting) with zero server configuration.
- Prefer a fast, maintainable approach. You may use a static-site generator (e.g., Astro or Eleventy) **only if** you also produce the final built static output in a `/public` (or `/dist`) folder that is ready to upload as-is. If any required tooling isn't available in this environment, fall back to clean hand-authored semantic HTML + a shared CSS file + minimal vanilla JS — and still deliver a ready-to-upload folder. **Whatever you choose, the deliverable is a folder a non-technical person can drag-and-drop to a host.**
- No frameworks that require a running server. Keep JavaScript minimal and progressive-enhancement only (the site must fully work with JS disabled).
- Mobile-first, responsive, accessible (WCAG AA: semantic landmarks, alt text, color contrast, focus states, keyboard nav).
- Performance: target Lighthouse 95+ on Performance, SEO, Accessibility, Best Practices. Inline critical CSS or keep CSS small; compress/lazy-load images; use system fonts or a single preloaded web font; no render-blocking junk.
- Put the deployable site in a clearly named folder (e.g., `/site` for source and `/site/public` or `/dist` for the upload-ready build). Document which folder to upload in `GO-LIVE.md`.

---

## DELIVERABLE 1 — THE WEBSITE (the hub)
A complete multi-page site. Every page: responsive, fast, accessible, on-brand, with full SEO + AIO treatment (see Deliverables 4 & 5), and a footer disclaimer.

Build at least these pages:
1. **Home** — hero, the problem, the "$400k fee" hook, what's inside, social proof placeholders, free-checklist opt-in, primary CTA to the guide. Clear path to videos and blog.
2. **The Game Plan (sales page)** — long-form sales page for the $49 guide: who it's for, what's inside (8 chapters), sample/preview, FAQ, pricing ($29 launch / $49), strong CTA wired to a configurable **Stripe** checkout link (use a Stripe Payment Link / Stripe-hosted Checkout — no backend required; a single `CONFIG.CHECKOUT_URL` placeholder). Money-back-style reassurance where truthful.
3. **Free Checklist (opt-in / lead magnet)** — dedicated landing page with a **working email capture form** wired to a configurable provider (see Deliverable 5). On submit: success state + instructions; the form must actually POST to the provider via a single clearly-labeled config value.
4. **Videos / Watch** — the content hub. A responsive grid that embeds the user's videos and links out to their channels (TikTok, YouTube Shorts, Facebook, Instagram). Build the full structure with **clearly-labeled placeholders** (sample embed slots + a simple data file like `videos.json` the user fills in with video IDs/URLs). Include lazy-loaded embeds and `VideoObject` structured data per video. Add prominent follow buttons for all platforms.
5. **Course** — the step-by-step video course home + mobile-first lesson player. See Deliverable 3.5.
6. **Blog / Learn (index + articles)** — the SEO/AIO engine. See Deliverable 3.
7. **About** — the brand story and E-E-A-T/credibility signals (mission, why this exists, who it's for, the education-not-advice stance, how to contact). This page matters for both trust and AI citation.
8. **Start Here / Free Resources** — a friendly hub linking the checklist, top articles, the course, and the guide; great entry point for new visitors and AI answers.
9. **Legal pages** — `Disclaimer` (education-not-advice, no RIA relationship, investing risk), `Privacy Policy` (email collection, analytics), `Terms`. Plain-language but complete. Link in footer.
10. **404 page** — on-brand, helpful links back.

Global elements: sticky header with nav + persistent CTA; footer with nav, social links, disclaimer, copyright; consistent CTA components; email opt-in component reused across pages.

---

## DELIVERABLE 2 — THE PROGRAM CONTENT (the products)
1. **The full guide** — finalize and polish the 8-chapter NIL Game Plan. Re-render the polished PDF from print HTML. Also produce a **web (HTML) version** of the guide for buyers and for SEO (can be gated/teaser on the public site, full version delivered post-purchase). Ensure accuracy of all financial concepts and that every term is defined and every figure illustrated with an example. Keep the education-not-advice framing and disclaimers.
2. **The free checklist** — finalize and re-render the polished 1-page PDF. Make a matching web version for the opt-in confirmation page.
3. **Accuracy pass** — review all tax/investing specifics for correctness and current general accuracy; where exact figures change yearly (contribution limits, tax brackets, dates), phrase as general guidance and add a "verify current figures with a professional" note. Flag anything that a CPA should confirm in `BUILD-LOG.md`.

---

## DELIVERABLE 3 — THE CONTENT ENGINE (value + discoverability)
1. **Blog/Learn articles — write 15–20 long-form articles** (~1,000–1,800 words each), each genuinely useful, answer-first, and SEO/AIO-optimized. Each targets a real question athletes search. Cover at minimum:
   - Do college athletes pay taxes on NIL money?
   - How much should I set aside for NIL taxes?
   - How to invest your NIL money (beginner's guide)
   - What is an index fund? (explained for athletes)
   - Roth IRA for college athletes, explained
   - Do I need a financial advisor for NIL money?
   - How financial advisor fees work (and the 1% trap)
   - NIL money scams and red flags to avoid
   - What to do with your first NIL check
   - NIL and quarterly estimated taxes
   - Should an athlete form an LLC for NIL?
   - High-yield savings accounts explained
   - How to read an NIL contract (red flags)
   - Budgeting on irregular NIL income
   - "Friends and family want my NIL money" — how to handle it
   - Plus several more by income level / by sport / FAQs.
   Each article: one clear `<h1>`, answer-first opening (the direct answer in the first 1–2 sentences), scannable headings, short paragraphs, lists/tables, a relevant FAQ block with `FAQPage` schema, `BlogPosting`/`Article` schema, internal links to related articles + the guide, a CTA to the free checklist, and a disclaimer. Use a topic-cluster model: a pillar page ("The complete guide to NIL money") linking to all the cluster articles, and articles linking back.
2. **Video content plan (faceless)** — expand `04-social-content.md` into a **30-day content calendar** plus **40+ short-form faceless video packages** (per the VIDEO PRODUCTION section: voiceover script + scene-by-scene storyboard + AI image/video prompts + on-screen text + caption + hashtags), each tagged by platform (TikTok / YouTube Shorts / IG Reels / Facebook) and content pillar. Include a posting workflow and a "one faceless video → repurpose into 4 platform posts" guide. Actually generate the first batch (5–10) as finished faceless videos using available AI tools.
3. **Email welcome sequence** — write a **5–7 email autoresponder sequence** (in `emails/` as ready-to-paste copy) that delivers the free checklist, builds trust with value, and sells the $49 guide. Include subject lines, preview text, and send-timing guidance. Plain-text-friendly and on-brand.
4. **Social profile kit** — bios for TikTok/YouTube/IG/Facebook, channel/banner copy, link-in-bio structure pointing to the site, and a consistent handle recommendation.

---

## DELIVERABLE 3.5 — THE STEP-BY-STEP VIDEO COURSE (mobile-first)
A complete, sequenced **video course** that turns the playbook and checklist into an ordered, do-this-then-that program. The user will film the actual videos, so your job is to build **everything around the videos** so that recording + pasting URLs is all that's left. Treat this as a flagship deliverable.

1. **Curriculum (sequenced, actionable):** Design the course as ordered **modules → lessons**, mapped 1:1 to the playbook chapters and to every item on the free checklist, arranged as actionable steps in the exact order an athlete should do them (e.g., Module 1 Mindset → Module 2 Taxes-first → Module 3 Foundation/HYSA/emergency fund → Module 4 Kill debt → Module 5 Investing/Roth IRA/index funds → Module 6 Protect yourself/scams/contracts → Module 7 Your year-one plan by income level → Bonus/FAQ). Every checklist item and every key playbook concept gets its own focused lesson that explains it in **more depth** than the guide. Document the full outline in `BUILD-LOG.md` and as a `curriculum.json` data file the player reads.
2. **A faceless production package for every lesson:** For each lesson produce (per the VIDEO PRODUCTION section, faceless/AI-generated — no self-filming) a one-line learning objective, the specific **actionable step(s)** the athlete completes by the end, the full **AI voiceover script** in the brand voice (plain English, analogies, dollar examples), a **scene-by-scene storyboard** (narration paired with on-screen text + the visual/AI image-video prompt for each beat), AI voice direction, an estimated runtime (keep lessons ~3–8 min), and a "by the end you will have…" outcome. Store these in `course/scripts/`. Also produce a short **course intro/welcome** and a **closing/next-steps** package. Generate the intro and the free-preview lesson(s) as finished faceless videos using available AI tools.
3. **Per-lesson resources:** For each lesson include a downloadable companion (worksheet, checklist excerpt, or template) where useful, plus a 2–3 sentence written recap and the action step in text — so the lesson works even before videos are filmed and supports mobile learners who want to skim.
4. **A complete, mobile-first course player on the site** (static, no backend):
   - A **Course home** page: modules overview, total lessons/time, what they'll achieve, and a clear "Start the course" CTA.
   - **Lesson pages** driven by `curriculum.json`: a responsive, **mobile-optimized video player** (sticky/large on mobile, lazy-loaded embed), lesson title, the written recap + action step, downloadable resources, and **previous/next lesson** navigation.
   - **Progress tracking without a backend:** "Mark lesson complete," a visible progress bar / % through the course, and "resume where you left off," persisted in the browser via `localStorage`. A simple module/lesson sidebar or accordion that shows completed vs. remaining.
   - **Free preview vs. paid:** make the first lesson (or first module) a free preview to drive sign-ups; gate the rest behind purchase. Use Stripe's **post-payment success URL** to deliver access — i.e., after paying via the Stripe Payment Link, the buyer is redirected to an unlisted course/download access page (its URL set in `CONFIG`). Use this simple static access approach (unlisted access URL as the Stripe success redirect) — do not build fake authentication; document exactly how access works in `GO-LIVE.md`.
   - **Video URL placeholders:** every lesson's video field reads from `curriculum.json`/`videos.json` with obvious placeholders (e.g., `REPLACE_ME_VIDEO_URL`) and supports YouTube/Vimeo embeds and self-hosted files. The whole player must render and be navigable with placeholder videos in place.
5. **Mobile optimization is a hard requirement:** the course must be fully usable on a phone — large tap targets, readable type, sticky video while scrolling notes, no horizontal scroll, fast on mobile data. Verify on a mobile viewport with screenshots.
6. **Production guide for the user (faceless):** a `course/PRODUCE-ME.md` that lists every lesson in order with its production-package file and suggested length, and references the repeatable faceless `VIDEO-PRODUCTION.md` pipeline, so the remaining videos can be AI-generated (no self-filming) and the URLs pasted into `curriculum.json`. Note which lessons are already generated as finished videos.

Add a **Course** page to the site navigation and link it from the home page, the sales page (as part of/above the $49 offer — decide and document whether the course is included in the guide purchase or positioned as the premium tier; default: include the core course with the guide and clearly note it), and the relevant blog articles.

## DELIVERABLE 4 — SEO PACKAGE (be found by traditional search)
Implement thoroughly across every page:
- **Per-page metadata:** unique title tag (<60 chars), meta description (<155 chars), canonical URL, meaningful slug/URL. One `<h1>` per page; logical heading hierarchy.
- **Keyword strategy:** map target keywords to pages (do real on-page optimization for the queries above without keyword-stuffing). Document the keyword→page map in `BUILD-LOG.md`.
- **Structured data (JSON-LD):** `Organization` + `WebSite` (with `SearchAction`) site-wide; `Product` + `Offer` on the sales page; `FAQPage` on pages with FAQs; `Article`/`BlogPosting` on articles (with author, datePublished, dateModified); `BreadcrumbList` on inner pages; `VideoObject` on video items. Validate all of it.
- **Social sharing:** Open Graph + Twitter Card tags on every page, with a branded default share image plus per-article images (generate simple on-brand share images).
- **Crawlability:** `robots.txt`, a complete `sitemap.xml`, clean internal linking, breadcrumb navigation, descriptive anchor text, image `alt` text everywhere.
- **Technical:** fast load, mobile-friendly, no broken links, HTTPS-ready (relative or https URLs), proper `lang`, favicon + touch icons, web manifest.
- **Analytics-ready:** include a single clearly-labeled placeholder for an analytics snippet (e.g., a `CONFIG.ANALYTICS_ID`) the user fills in — do not invent a tracking ID.

---

## DELIVERABLE 5 — AIO / ANSWER-ENGINE OPTIMIZATION (be cited by AI)
The user wants to be "found by all" — including ChatGPT, Perplexity, Google AI Overviews, Claude, etc. Do all of this:
- **Answer-first content:** every article and key page leads with a direct, self-contained, quotable answer before elaborating. Write in clear, factual, citable statements.
- **Structured, extractable formatting:** definitions, Q&A blocks, bulleted lists, comparison tables — formats AI engines parse and quote easily. Pair with `FAQPage` schema.
- **`llms.txt` and `llms-full.txt`** at the site root: a concise, well-structured index of the site's key pages and a plain-text summary of the core guidance, following the emerging llms.txt convention, so AI crawlers can understand and cite the site.
- **Allow reputable AI crawlers** in `robots.txt` (e.g., `GPTBot`, `PerplexityBot`, `ClaudeBot`/`Anthropic-AI`, `Google-Extended`, `CCBot`) since the goal is maximum discoverability. Document this choice.
- **E-E-A-T / trust signals:** clear About page, stated mission and stance, transparent disclaimers, contact info, consistent NAP/brand, dated and "last updated" content, and cite reputable general sources (e.g., IRS basics, SEC investor education) where appropriate without giving advice.
- **Entity clarity:** consistent naming, a clear one-line description of what The NIL Game Plan is, and an `Organization`/`Author` schema so engines understand the entity.
- **Freshness:** include visible published/updated dates and keep `dateModified` in schema.

---

## LAUNCH PACKAGE & DEFINITION OF DONE
Produce:
- **`GO-LIVE.md`** — a plain-English, numbered launch checklist for a non-technical user covering ONLY the account-dependent steps (with exactly where to paste each value):
  1. Buy a domain (suggested names + how).
  2. Upload the `/dist` (or named) folder to a host (step-by-step for Netlify drag-and-drop as the recommended easy path, plus Vercel/Cloudflare/GitHub Pages alternatives).
  3. Create an email provider account (recommend one beginner-friendly option) and paste the form ID/endpoint into the labeled `CONFIG` value.
  4. Set up the product checkout in **Stripe** — create a Payment Link (or hosted Checkout) for the $29/$49 digital product, set the post-payment redirect/access, and paste the link into `CONFIG.CHECKOUT_URL`. Step-by-step Stripe instructions for a non-technical user (create product → create Payment Link → set success URL → enable digital delivery).
  5. Generate any remaining faceless videos via the `VIDEO-PRODUCTION.md` pipeline (no self-filming), then paste their URLs/IDs into `videos.json` / `curriculum.json`. Note which videos the build already generated.
  6. Add the analytics ID.
  7. Create social accounts using the provided bios and start posting from the calendar.
- **`CONFIG`** — centralize every human-supplied value (checkout URL, email endpoint, analytics ID, social URLs, contact email, canonical domain) in ONE obvious place (a single `config.js`/`config.json` or a documented constants block) so the user changes values in one spot. Use safe, obvious placeholders (e.g., `REPLACE_ME_CHECKOUT_URL`).
- **`BUILD-LOG.md`** — decisions, assumptions, keyword map, accuracy flags, and a self-verification report (what you tested and the results).
- **Final self-verification before finishing:** open/preview the built site, screenshot the key pages (home, sales, checklist, a sample article, videos, mobile view), confirm no broken internal links, confirm forms point to the config placeholder, confirm structured data validates, confirm the build folder is upload-ready. Summarize results in `BUILD-LOG.md`.

**You are DONE when:** the complete site + all content + both PDFs + the full step-by-step video course (curriculum, every lesson script, and a working mobile-first player verified on a phone viewport) + email sequence + social kit exist; the site is fully built into an upload-ready static folder; SEO + AIO are fully implemented and verified; and the ONLY remaining actions are the account-dependent items in `GO-LIVE.md` (including generating any remaining faceless videos via the documented AI pipeline — never self-filming — and pasting their URLs). Nothing should be a stub, a placeholder-where-real-content-was-possible, or "to be written later." Build it as well as possible.

---

## WHAT TO LEAVE FOR THE HUMAN (do NOT fake these)
These require the user's private accounts/assets — wire them to clearly-labeled config and document in `GO-LIVE.md`, but do not invent credentials or fake data:
- Domain purchase and DNS.
- Uploading to a host / going live.
- Email provider account + real form endpoint/API key.
- Payment processor account + real product/buy link.
- Bulk faceless video generation that exceeds in-environment tool quotas/time (generate as many finished faceless videos as feasible — at minimum the course intro, free-preview lesson(s), and the first 5–10 social videos — then leave the rest to the documented `VIDEO-PRODUCTION.md` pipeline; never require the user to self-film or appear on camera).
- Real analytics ID.
- Any claim that needs a licensed CPA's sign-off (flag in `BUILD-LOG.md`).

Everything else: finish it.
