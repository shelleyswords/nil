# VIDEO-PRODUCTION.md — The Faceless Video Pipeline

This is the complete, repeatable system for mass-producing The NIL Playbook lesson videos **without ever appearing on camera or recording your own voice.** Every video = AI voiceover + visuals + captions + light music. Follow this once, build your templates, and each new lesson becomes an assembly job instead of a creative project.

---

## ✅ ALREADY DONE — and a one-command way to make the rest

**5 finished faceless videos already ship with this project** (real AI voiceover + branded animated caption slides):
- Course **L00 Welcome** and **L01 "Tool, not trophy"** → `site/assets/videos/L00.mp4`, `L01.mp4` (already wired into the course player as the free preview).
- 3 social shorts (9:16) → `site/assets/videos/social/short-1-fee.mp4`, `short-2-taxes.mp4`, `short-3-scam.mp4` (already on the Videos page).

**A working assembly script is in the repo:** `build/make_lesson_video.py`. It turns a voiceover MP3 + a JSON list of caption slides into a finished, branded MP4 (16:9 for lessons, 9:16 for shorts). This is how the 5 videos above were made. To produce the remaining lessons:

1. **Voiceover:** generate the narration from each `course/scripts/Lxx.md` using an AI voice tool (the brand voice is a consistent casual-professional female narrator — see §1 below). Save the MP3.
2. **Slides:** copy one of the example slide files (`build/slides-L00.json`, `build/slides-L01.json` for 16:9; `build/slides-S1.json` for 9:16) and edit the `eyebrow`/`headline` text to match that lesson's storyboard.
3. **Assemble (one command):**
   ```bash
   # 16:9 course lesson:
   python3 build/make_lesson_video.py L02 build/audio/L02.mp3 build/slides-L02.json site/assets/videos/L02.mp4
   # 9:16 social short (note the trailing 1080 1920):
   python3 build/make_lesson_video.py S4 build/audio/S4.mp3 build/slides-S4.json site/assets/videos/social/short-4.mp4 1080 1920
   ```
4. **Wire it in:** paste the path into the lesson's `video:` field in `site/assets/data/curriculum.js` (or add a short to `site/assets/data/videos.js`).

Requires `ffmpeg` and Google Chrome (both already on this machine). The sections below cover the higher-production-value path (motion B-roll, AI image visuals, richer editing) if you want to upgrade beyond the clean caption-slide style.

> **Tool categories, not gospel.** Specific products change and prices move. This guide recommends *categories* and names *current popular options* in each so you can pick. The category and the settings matter more than the exact brand.

---

## 0. The brand spec (lock this once, reuse forever)

Everything below should be saved as reusable presets/templates so every video looks and sounds like the same show.

- **Palette:** navy (background/base), green (accents, positive/"do this"), gold (highlights, money, headlines).
- **Look:** clean, athletic, premium, minimal. Lots of negative space. Big bold numbers for dollar examples.
- **Fonts:** one strong bold sans-serif for headlines, one clean readable sans for captions. Pick two, never change them.
- **Aspect:** 16:9 (1920×1080) for the course. Optionally re-cut a 9:16 (1080×1920) version for social teasers.
- **Every video ends with the disclaimer** (on-screen card + narrated): *"Educational content only — not personalized financial, tax, or legal advice. Consult a licensed professional about your specific situation."*

---

## 1. The consistent FEMALE narrator (the most important spec)

The single biggest thing that makes a faceless course feel professional is **one voice that never changes.** Pick one voice, lock its settings, and use it for all 24 lessons. Never swap mid-course.

### Voice profile to target
- **Gender/age feel:** female, sounds ~22–30. Trustworthy older-sister/teammate, not a corporate announcer.
- **Tone:** casual-but-professional, warm, confident, relatable to college athletes. Smiles through the voice.
- **Pace:** conversational — medium, with natural pauses. Not rushed, not sleepy.

### Recommended AI voiceover tools (beginner-friendly)
| Tier | Tool category / examples | Why |
|------|--------------------------|-----|
| **Best quality (recommended)** | **ElevenLabs** | Most natural, expressive female voices; fine-grained stability/style controls; supports a fixed voice so every lesson matches. Generous enough free/low tier to produce the course. |
| **All-in-one (easiest)** | **Murf**, **Play.ht**, **Speechify Studio** | Solid natural voices *and* basic video/slide assembly in one place. Great if you want fewer tools. |
| **Free / built-in** | **Capcut** built-in TTS, **ElevenLabs** free tier, **Microsoft/Edge natural voices** | Zero cost to start; quality is "good enough" to launch and upgrade later. |

### Suggested settings to keep it consistent (ElevenLabs-style controls)
- **Pick ONE voice** and write down its exact name/ID. This is now "the narrator" forever.
- **Stability:** medium (≈50%). Too high = flat/robotic; too low = drifts in tone between lessons. Medium keeps her warm but consistent.
- **Similarity / clarity:** high (≈75%) so she sounds the same every render.
- **Style/expressiveness:** low-to-medium. Enough warmth and "smile," not theatrical.
- **Speed:** ~0.95–1.0× (a touch relaxed reads as more trustworthy).
- Save these as a **named preset** and never change them.

### Making the narration sound human (use the script cues)
- The scripts already contain **`[pause]` cues** and short sentences. Honor them: insert a small break (most tools accept SSML `<break time="0.5s"/>` or just split the line / add an ellipsis "…").
- Read **per-lesson "AI voice direction"** at the bottom of each script and nudge expressiveness slightly to match (e.g., warmer on L23, fierce on L12) — but keep the **same voice + base settings**.
- Pronunciation watch-list (spell phonetically if the tool mangles them): "Roth I-R-A", "fiduciary" (fih-DOO-shee-air-ee), "ten-ninety-nine" for 1099, percentages read as "one percent" not "1%".
- Generate each lesson's narration as one clean WAV/MP3. Re-render any sentence that sounds off — don't ship a weird read.

---

## 2. Video assembly (putting voice + visuals together)

Two paths. Start cheap; step up only if/when it pays for itself.

### Path A — Low / no-cost (recommended to launch)
- **CapCut (desktop, free)** or **Canva (free/Pro)** — both are beginner-friendly timeline/slide editors with templates, text animation, transitions, stock, and auto-captions built in. You can produce the entire course in either.
- **Workflow fit:** build a master **template project** (intro card, lower-thirds, caption style, outro disclaimer card) once, then **duplicate it per lesson** and swap the voiceover + visuals. This is the secret to batching.

### Path B — Step-up (faster at scale / more polish)
- **Descript** — edit video by editing the *text transcript*; great auto-captions, easy trims, "studio sound." Excellent once you're producing weekly.
- **Premiere Pro / DaVinci Resolve (free tier)** — full control, motion graphics templates, precise audio ducking. Use when you want a more cinematic look.
- **Faceless-automation tools** (e.g. **Pictory**, **InVideo AI**, **Fliki**) — paste a script and they auto-assemble stock + captions + AI voice. Fastest for volume; less control over exact on-brand visuals, so treat their output as a rough cut you refine.

---

## 3. Visuals — B-roll, stock, and AI generation

Each script's **storyboard** already gives you, per beat, either a **B-roll keyword** or a ready-to-use **AI image/video prompt**. Your job is just to fetch/generate and drop them on the timeline.

### B-roll & stock (footage of real athletes, money, phones, etc.)
- **Free:** Pexels, Pixabay, Mixkit, Coverr — search the storyboard keyword (e.g. "athlete locker room", "phone banking app", "receipt close-up").
- **Paid (bigger library):** Storyblocks, Artgrid, Envato Elements — worth it once you're producing volume.
- Keep clips short (2–5 s), muted, and color-consistent with the navy/green/gold palette (apply a subtle LUT/filter to unify).

### AI-generated images & video (on-brand graphics the storyboards request)
- **AI images:** Midjourney, DAL·E, Ideogram (good at clean text/graphics), or Leonardo. Paste the storyboard's AI prompt; **append your brand line** to every prompt: *"navy background, green and gold accents, clean, minimal, athletic, flat illustration, no text"* (add text in your editor so captions stay crisp and editable).
- **AI video / motion:** Runway, Pika, Kling, or Luma for short animated clips (e.g., a coin growing into a tree). Keep these to 2–4 s accent moments — they're seasoning, not the whole meal.
- **Slides/diagrams** (the math examples, the "$10,000 → $3,000 taxes" bars, step staircases): build these directly in Canva/CapCut with animated text and shapes. These are the backbone of the money-education visuals — make them clean and bold.

### Consistency tips
- Reuse the **same icon set** and the **same chart style** across all lessons (e.g., the shield icon means "protect", gold checkmark means "do this").
- Make 3–4 reusable **background templates** (plain navy, navy+yard-lines, split-screen, quote card) and rotate them.

---

## 4. Auto-captioning

Captions are non-negotiable — most viewers watch muted, and athletes scroll on phones.

- **Built-in auto-captions:** CapCut, Canva, Descript, and YouTube Studio all auto-generate captions from the audio in one click.
- **Always proofread** the auto-output. The usual mistakes: numbers ("$10,000"), "Roth IRA", "fiduciary", "1099", percentages, brand names.
- **Style:** bold, high-contrast (white or gold text on a subtle navy bar), large enough for mobile, 1–2 lines at a time, synced word-by-word or phrase-by-phrase. Save the caption style as a preset.
- Optionally also export an **.srt file** and upload it to YouTube/Vimeo for accessibility + SEO.

---

## 5. The step-by-step process (script → export)

Repeat this for every lesson:

1. **Script** — open the lesson file in `course/scripts/`. Skim the voiceover, storyboard, and voice-direction note.
2. **Voiceover** — paste the voiceover text into your AI voice tool with the **locked narrator preset**. Honor `[pause]` cues. Render to one audio file. Re-do any off-sounding lines. Name it `L00-vo.mp3`.
3. **Visuals** — go down the storyboard. For each beat: grab the B-roll (keyword search) or generate the AI image/video (paste prompt + brand line), and build the slides/diagrams in your editor.
4. **Assemble** — duplicate your **master template project**. Drop the voiceover on the audio track. Lay each visual under its matching narration beat (the storyboard order = your timeline order). Add the on-screen text/captions from the storyboard.
5. **Caption** — run auto-captions, **proofread**, apply the caption style preset.
6. **Music** — add a royalty-free bed, low volume, ducked under the voice (see §7).
7. **Outro** — append the standard disclaimer card (narrated + on-screen).
8. **Export** — 1080p, 16:9. Optional 9:16 social cut.
9. **Publish** — upload (YouTube unlisted / Vimeo / your CDN) and **paste the URL into `site/assets/data/curriculum.js`** against the lesson `id`.

---

## 6. Batching tips (produce a whole module in a sitting)

Faceless video is a factory — batch by *step*, not by *video*. It's far faster to do one task across many lessons than to finish one whole video at a time.

- **Batch all voiceovers first:** render L00–L23 narration back-to-back in one session while the narrator preset is dialed in. Guarantees voice consistency and gets you in a rhythm.
- **Batch visuals next:** generate all AI images for a module in one prompt session; pull all B-roll in one search session.
- **Batch assembly:** with audio + visuals ready, duplicating the template and dropping assets is fast.
- **Build once, reuse always:** intro/outro cards, lower-thirds, caption style, color filter, music bed, disclaimer card — make them once, reuse for all 24.
- **Keep a tracking sheet:** lesson ID → VO done? visuals done? assembled? captioned? exported? URL in curriculum.js? Tick across.
- **Aim for a module per session** once your templates exist.

---

## 7. Royalty-free music

- **Where:** YouTube Audio Library (free, cleared for monetization), Pixabay Music, Uppbeat, Mixkit (free); Epidemic Sound, Artlist, Soundstripe (paid subscriptions, biggest libraries).
- **Vibe:** light, modern, upbeat-but-unobtrusive, slightly hip/athletic. It supports the voice; it never competes with it.
- **Levels:** music sits **way under** the narration — roughly **-18 to -24 dB** below the voice. Use **auto-ducking** (CapCut/Descript/Premiere) so music dips automatically whenever she speaks.
- **Licensing:** confirm the track is cleared for commercial use + the platform you're posting on. Keep a note of the license/source per track. When in doubt, use the YouTube Audio Library — it's safe.
- **Consistency:** pick 2–3 tracks and rotate them across the course so the show has a recognizable sonic identity.

---

## 8. Quick start (your first video)

1. Lock the **narrator voice + preset** (§1) — do this before anything else.
2. Build the **master template** (intro, caption style, outro disclaimer, music bed) in CapCut or Canva (§2, §0).
3. Produce **L00-welcome** end-to-end using §5 — this is your proof-of-concept and your reusable template test.
4. Once L00 looks/sounds right, **batch the rest** module by module (§6).
5. Paste each finished URL into `site/assets/data/curriculum.js`.

That's the whole machine. Lock the voice, build the template, batch by step, ship a module at a time.
