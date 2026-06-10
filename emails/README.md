# The NIL Playbook — Welcome Email Sequence

A 6-email automated welcome sequence that runs the moment someone downloads the free **NIL Money Starter Checklist**. It delivers the lead magnet, teaches genuinely useful money lessons in the brand's plain-English voice, builds trust, and ends with a soft pitch for **The NIL Playbook** ($29 launch price / $49 regular).

The goal: even someone who never buys walks away better off. That's the brand promise — *No jargon. No suits. No fees you didn't sign up for.*

---

## The sequence at a glance

| # | File | Send timing | Purpose | CTA |
|---|------|-------------|---------|-----|
| 1 | `email-1.md` | Immediately | Deliver the checklist + quick win (set aside 30% for taxes) | Download the checklist |
| 2 | `email-2.md` | Day 2 | The fee trap — how 1% can cost $300k–$500k+ | (teach only — ask the magic question) |
| 3 | `email-3.md` | Day 4 | The simple foundation — emergency fund + high-yield savings | (teach only — open a HYSA) |
| 4 | `email-4.md` | Day 6 | Investing without getting ripped off — index funds + Roth IRA | (teach only — open a Roth IRA) |
| 5 | `email-5.md` | Day 8 | Protect yourself — scams, "friends with deals," red flags | (teach only — save the magic question) |
| 6 | `email-6.md` | Day 10 | Soft pitch The NIL Playbook as the natural next step | **[Get the Playbook]** → /playbook.html |

---

## Sequence strategy (why it's built this way)

**Deliver first, sell last.** Email 1 hands over what they signed up for and gives an instant win, so the relationship starts with value, not a pitch. Emails 2–5 are pure education — each one teaches one chapter-sized idea from The Playbook and ends by handing the reader a concrete action, not a "buy now."

**Trust compounds.** By the time the offer arrives in Email 6, the reader has gotten five emails of real, usable help for free. The pitch lands as "here's the organized, complete version of what's already helping me," not a cold sell. Email 6 recaps the week so the value is undeniable, then frames $29 against the $300k mistake it prevents.

**Each email teaches one thing.** Short paragraphs, one core idea, one clear next step. No email tries to cover everything — that's what The Playbook is for, and the sequence is honest about that gap.

**Every email "open-loops" to the next** ("Tomorrow I'll show you…") to lift open rates across the series.

**Voice consistency:** casual-but-professional, teammate/older-sibling tone, concrete dollar examples, zero jargon. Each email closes with the recurring line *"No jargon. No suits. No fees you didn't sign up for."* and a one-line educational disclaimer footer (legal requirement — keep it on every send).

---

## Recommended send timing / delays

Set these as **delays relative to the previous email**, triggered off the checklist opt-in:

- Email 1 → **immediately** on confirmed opt-in (or on form submit if you're using single opt-in)
- Email 2 → **+1 day** (≈24h after Email 1)
- Email 3 → **+2 days**
- Email 4 → **+2 days**
- Email 5 → **+2 days**
- Email 6 → **+2 days**

Total runtime: ~10 days from signup to the offer.

**Optional tuning:**
- For a faster/hotter list, compress Emails 2–6 to +1 day each (offer by Day 5).
- Add a follow-up "offer reminder" email 2–3 days after Email 6 for non-buyers (Email 6's content + a soft deadline on the $29 launch price). Not included here.
- Best send window for a college-athlete audience tends to be early evening local time. A/B test.

---

## How to load it into an email provider

These files are plain-text-friendly markdown. The body copy pastes directly into any major platform (ConvertKit/Kit, Mailchimp, ActiveCampaign, Beehiiv, Flodesk, MailerLite, etc.).

**General steps:**

1. **Create an automation / sequence** (sometimes called a "flow," "journey," or "automation"). Trigger it off the checklist opt-in form or the tag/list the opt-in applies.
2. **Add one email per step.** For each step, open the matching `email-#.md` file and copy:
   - **Subject line** — pick one of the three options (A/B test the others if your platform supports it).
   - **Preview text** — paste into the "preview"/"preheader" field.
   - **Body** — paste the body copy. Most editors auto-handle line breaks; in a rich-text editor, keep the short paragraph spacing.
3. **Set the delay** before each email per the timing table above (Email 1 = immediately; Emails 2–6 = the +day delays).
4. **Wire up the links:**
   - Email 1: point **[Download your NIL Money Starter Checklist]** to your hosted checklist PDF (or a thank-you page that serves it).
   - Email 6: point **[Get the Playbook]** to **/playbook.html** (the sales page).
   - Add UTM parameters if you track campaigns.
5. **Keep the disclaimer footer** on every email. You can also drop it into your global email footer/template so it's never missing.
6. **Send yourself a test** of each email, check links and rendering on mobile, then activate the automation.

**Note on subject lines:** each file lists 3 options. Use one as the default and feed the others into your platform's A/B testing to find the best performer over time.
