# The NIL Game Plan

Plain-English financial education for NCAA college athletes earning NIL money — taught without the jargon, the suits, or the fees that quietly drain athletes.

> **No jargon. No suits. No fees you didn't sign up for.**

## What's in this repo

| Path | What it is |
|---|---|
| **`site/`** | The complete website — **this folder IS the deployable site** (static, no backend). Drag it to any host. |
| `site/course/` + `site/assets/data/curriculum.js` | The mobile-first step-by-step video course (24 lessons, progress tracking, Stripe-gated). |
| `site/blog/` | 17 SEO/AIO articles (a pillar guide + 16 deep-dives). |
| `site/assets/videos/` | Finished faceless videos (AI voiceover + branded captions). |
| `course/scripts/` | 24 faceless lesson production packages (voiceover + storyboards). |
| `social/` | 30-day calendar, 50+ faceless video scripts, profile kit, workflow. |
| `emails/` | 6-email welcome sequence. |
| `build/make_lesson_video.py` | The one-command faceless-video assembly pipeline. |
| **`GO-LIVE.md`** | ⭐ Step-by-step launch checklist (domain, host, Stripe, email). |
| `VIDEO-PRODUCTION.md` | The repeatable faceless-video pipeline. |
| `BUILD-LOG.md` | Build decisions, verification results, and accuracy flags. |
| `The-NIL-Game-Plan.pdf`, `NIL-Money-Starter-Checklist.pdf` | The guide + the free lead-magnet checklist. |

## Go live

See **[`GO-LIVE.md`](GO-LIVE.md)**. In short: buy a domain → drag `site/` to Netlify → paste your email + Stripe links into `site/config.js`. ~60–90 minutes, no coding.

## Tech

Hand-authored static HTML/CSS/JS — no build step, no framework, no server. One stylesheet (`site/assets/css/styles.css`), one config file (`site/config.js`), progressive-enhancement JS. Full SEO (JSON-LD, sitemap, OG) and AIO (`llms.txt`, AI-crawler-friendly `robots.txt`).

## ⚖️ Disclaimer

Educational content only — not personalized financial, tax, investment, or legal advice, and not a recommendation to buy any specific investment. Consult a licensed professional. Investing involves risk, including possible loss of principal.
