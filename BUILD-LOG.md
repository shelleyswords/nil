# BUILD LOG — The NIL Game Plan program

Autonomous build executing `GOAL-PROMPT.md`. Started 2026-06-09 (overnight run).

## Approach & key decisions
- **Static, hand-authored site** (no build step) in `/site` → the whole folder is the deployable artifact (truly drag-and-drop to any host). Chosen over a generator for zero-tooling-risk and so a non-technical user can deploy without a build.
- **One stylesheet** (`site/assets/css/styles.css`) = full design system. **One config file** (`site/config.js`) holds every human-supplied value. **One JS file** (`site/assets/js/main.js`) for progressive enhancement; site works fully with JS off.
- **Brand:** ink navy `#0b1f33`, field green `#0e7c5a`, gold `#f2b705`. Voice: casual-but-professional teammate. Education-not-advice framing + disclaimers everywhere.
- **Payments:** Stripe Payment Link → `CONFIG.CHECKOUT_URL`; Stripe success URL delivers course access (unlisted page). No backend.
- **Videos:** faceless / AI-generated, single consistent **female** narrator (casual-pro, athlete-relatable). Build produces full production packages + attempts sample asset generation; bulk generation documented in `VIDEO-PRODUCTION.md`.

## Keyword → page map (SEO)
| Page | Primary keyword |
|---|---|
| Home | NIL money / how to manage NIL money |
| guide.html | NIL money guide / NIL financial guide |
| free-checklist.html | NIL money checklist |
| blog: nil-taxes | do college athletes pay taxes on NIL |
| blog: how-much-nil-taxes | how much to set aside for NIL taxes |
| blog: invest-nil-money | how to invest NIL money |
| blog: index-funds | what is an index fund |
| blog: roth-ira-athletes | Roth IRA for college athletes |
| blog: need-financial-advisor | do I need a financial advisor for NIL |
| blog: advisor-fees | financial advisor fees / 1% fee |
| blog: nil-scams | NIL money scams |
| blog: first-nil-check | what to do with first NIL check |
| blog: quarterly-taxes | NIL quarterly estimated taxes |
| blog: nil-llc | should athletes form an LLC for NIL |
| blog: high-yield-savings | high-yield savings account |
| blog: read-nil-contract | how to read an NIL contract |
| blog: budgeting-irregular-income | budgeting irregular income athletes |
| blog: friends-family-money | friends and family want my NIL money |
| blog: nil-money-mistakes | NIL money mistakes |
| blog: pillar (nil-money-guide) | complete guide to NIL money |

## Progress checklist — ✅ COMPLETE
- [x] Design system CSS
- [x] config.js, main.js
- [x] Home page
- [x] Sales page (guide.html)
- [x] Free checklist opt-in page
- [x] Course home + mobile player + curriculum.js (24 lessons, progress tracking, free/paid gating)
- [x] Video hub + videos.js
- [x] Blog index + 17 articles (1 pillar + 16 cluster)
- [x] About, Start Here
- [x] Legal: disclaimer, privacy, terms
- [x] 404
- [x] SEO: robots.txt, sitemap.xml, OG image, JSON-LD, favicon, manifest, touch icon
- [x] AIO: llms.txt, llms-full.txt, AI-crawler allow in robots.txt
- [x] Course lesson scripts — 24 faceless production packages (course/scripts/)
- [x] Email welcome sequence — 6 emails + README (emails/)
- [x] Social — 30-day calendar + 52 total scripts + profile kit + workflow (social/)
- [x] VIDEO-PRODUCTION.md (faceless pipeline, female narrator spec)
- [x] PDFs in site/downloads/
- [x] GO-LIVE.md
- [x] Self-verification (screenshots desktop+mobile, 1006-link check, schema validation)

## Media generation status (honest note)
- **Branded OG share image + favicon + touch icon:** generated via Chrome (real PNG/SVG assets in site/assets/img/).
- **AI brand illustration:** generated successfully via the image MCP (site/assets/img/brand-hero.png, featured on About page).
- **AI voiceover + video assembly — NOW WORKING & 5 VIDEOS RENDERED.** The ElevenLabs voice MCP came back online (the earlier failure was a credits issue). Built a real assembly pipeline (`build/make_lesson_video.py`: ElevenLabs VO → branded caption slides via Chrome → ffmpeg → MP4, 16:9 or 9:16). Produced & wired in:
  - Course **L00** (2:05) and **L01** (2:21) → `site/assets/videos/` — these are the free-preview lessons, now playing real video in the course player.
  - 3 social shorts (9:16): `site/assets/videos/social/short-{1-fee,2-taxes,3-scam}.mp4` — live on the Videos page.
- **Remaining 22 lessons + more shorts:** ship as complete production packages; the proven `make_lesson_video.py` pipeline reproduces them in one command each (documented at the top of `VIDEO-PRODUCTION.md`). Lessons without a video yet show a tasteful placeholder + the written recap.
- **AI brand illustration:** `site/assets/img/brand-hero.png` (image MCP), on the About page.
- **OG share image + favicon + touch icon:** generated via Chrome.

## Accuracy flags (for CPA review before selling)
- Tax set-aside rule (30%), self-employment tax (~15.3%), quarterly dates, Roth IRA limits/income phase-outs — written as general education; flagged to confirm current-year figures with a CPA.

## Verification notes
- **Local server test:** all key routes return HTTP 200 (home, playbook, course, blog, articles, CSS).
- **Link integrity:** automated check of **1,006 internal links across 29 pages → 0 broken.**
- **Encoding:** scanned all HTML for replacement-char glitches → none (one was caught & fixed on the home page during build).
- **Structured data:** all cluster articles carry valid `Article` + `BreadcrumbList` + `FAQPage` JSON-LD; FAQ schema matches on-page accordions. All pages have OG tags + canonical.
- **Visual QA (screenshots):** home (desktop + mobile), course player, OG image reviewed and corrected (cover fill + OG brand-line collision fixed).
- **Mobile:** layout stacks correctly, hamburger nav, full-width buttons, sticky video in course on small screens.
- **Total project file count:** ~50+ deliverable files (29 HTML pages, 24 lesson scripts, 6 emails, 4 social docs, PDFs, data + asset files, launch docs).
