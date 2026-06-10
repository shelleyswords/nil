# PRODUCE-ME — The NIL Playbook Video Course

This is the production checklist for turning the lesson scripts into finished videos.

## ⚠️ Read this first: these videos are FACELESS / AI-generated

Nobody films themselves. Nobody records their own voice. Every lesson video is built from:

- **AI voiceover narration** — one consistent **female** AI voice (casual-but-professional, trustworthy older-sister/teammate energy) reading the script.
- **Visuals** — B-roll/stock clips, AI-generated images and video, animated on-screen text, and simple slides/diagrams in the brand palette (navy / green / gold, athletic, clean).
- **Auto-captions** + light royalty-free background music.

You do **not** need a camera, a studio, a mic, or to be on screen. The full repeatable pipeline — recommended tools, settings, and the step-by-step process — lives in **[`../VIDEO-PRODUCTION.md`](../VIDEO-PRODUCTION.md)** (project root). Read that once before producing your first video, then come back here as your shot list.

## How each script is structured

Every file in `scripts/` already contains everything a producer needs:
- **Voiceover script** → paste straight into the AI voice tool.
- **Scene-by-scene storyboard** → tells you the on-screen text and the exact visual (B-roll keyword or an AI image/video prompt) for every beat.
- **AI voice direction** → the tone/pace note to keep the narrator consistent.
- Learning objective, action steps, runtime estimate, outcome line, and the disclaimer footer (the disclaimer must appear on-screen and/or be narrated at the end of every video).

## Where finished videos go

When a video is rendered and uploaded (YouTube unlisted, Vimeo, or your hosting/CDN of choice), **paste its URL into `site/assets/data/curriculum.js`** against the matching lesson `id`. The course site reads that file to display and play each lesson. Keep the lesson `id`s below identical to the ones in `curriculum.js` so they line up.

## Production order & shot list

Produce in order — the scripts reference each other ("next lesson…", "remember the fee trap…"), so producing sequentially keeps continuity tight.

### Module 0 — Welcome
| ID | Title | Script file | Suggested length |
|----|-------|-------------|------------------|
| L00 | Welcome: How this course works | `scripts/L00-welcome.md` | ~3 min |

### Module 1 — Mindset: Don't Fumble the First Check
| ID | Title | Script file | Suggested length |
|----|-------|-------------|------------------|
| L01 | Treat it like a tool, not a trophy | `scripts/L01-tool-not-trophy.md` | ~4 min |
| L02 | The 30-day rule (beating lifestyle creep) | `scripts/L02-30-day-rule.md` | ~4 min |
| L03 | Why athletes go broke — and why you won't | `scripts/L03-why-athletes-go-broke.md` | ~5 min |

### Module 2 — Taxes First
| ID | Title | Script file | Suggested length |
|----|-------|-------------|------------------|
| L04 | Why nobody withholds your taxes | `scripts/L04-nobody-withholds.md` | ~4 min |
| L05 | The 30% rule: set money aside the day it lands | `scripts/L05-30-percent-rule.md` | ~4 min |
| L06 | Self-employment tax and the 1099 form | `scripts/L06-self-employment-tax-1099.md` | ~5 min |
| L07 | Quarterly taxes, deductions & keeping receipts | `scripts/L07-quarterly-taxes-deductions-receipts.md` | ~5 min |
| L08 | Hiring a CPA (and exactly what to ask) | `scripts/L08-hiring-a-cpa.md` | ~4 min |

### Module 3 — The Simple Foundation
| ID | Title | Script file | Suggested length |
|----|-------|-------------|------------------|
| L09 | Your emergency fund | `scripts/L09-emergency-fund.md` | ~4 min |
| L10 | High-yield savings accounts explained | `scripts/L10-high-yield-savings.md` | ~3 min |
| L11 | Killing high-interest (credit card) debt | `scripts/L11-killing-high-interest-debt.md` | ~4 min |

### Module 4 — Investing Without Getting Ripped Off
| ID | Title | Script file | Suggested length |
|----|-------|-------------|------------------|
| L12 | The fee trap: how 1% steals a fortune | `scripts/L12-the-fee-trap.md` | ~5 min |
| L13 | What is an index fund? | `scripts/L13-what-is-an-index-fund.md` | ~5 min |
| L14 | The Roth IRA superpower | `scripts/L14-roth-ira-superpower.md` | ~4 min |
| L15 | Build your boring portfolio (step by step) | `scripts/L15-build-your-boring-portfolio.md` | ~5 min |
| L16 | What to avoid: meme stocks, crypto gambling, hot tips | `scripts/L16-what-to-avoid.md` | ~4 min |

### Module 5 — Protect Yourself
| ID | Title | Script file | Suggested length |
|----|-------|-------------|------------------|
| L17 | Spotting scams and red flags | `scripts/L17-spotting-scams.md` | ~4 min |
| L18 | Friends and family who want your money | `scripts/L18-friends-and-family.md` | ~4 min |
| L19 | How to read an NIL contract | `scripts/L19-read-an-nil-contract.md` | ~4 min |
| L20 | When you actually need a pro (and what to pay) | `scripts/L20-when-you-need-a-pro.md` | ~5 min |

### Module 6 — Your Year-One Plan
| ID | Title | Script file | Suggested length |
|----|-------|-------------|------------------|
| L21 | The order of operations | `scripts/L21-order-of-operations.md` | ~5 min |
| L22 | Your plan by income level | `scripts/L22-your-plan-by-income-level.md` | ~6 min |
| L23 | Next steps & staying consistent | `scripts/L23-next-steps-staying-consistent.md` | ~5 min |

**Total: 24 lessons across 7 modules. ~105 minutes of finished video.**

## Per-video quality checklist (before you mark a lesson "done")

- [ ] Narration uses the **same female voice + settings** as every other lesson (see VIDEO-PRODUCTION.md).
- [ ] Brand palette throughout: **navy / green / gold**, clean, athletic.
- [ ] On-screen text matches the storyboard captions; dollar examples shown as graphics.
- [ ] Auto-captions burned in and **proofread** (numbers, "Roth IRA", "fiduciary", "1099" spelled right).
- [ ] **Disclaimer** shown on-screen and/or narrated at the end.
- [ ] Background music is royalty-free, low volume, ducked under the voice.
- [ ] Exported 1080p (16:9 for the course; optionally a 9:16 cut for social teasers).
- [ ] Final URL pasted into `site/assets/data/curriculum.js` against the matching lesson `id`.
