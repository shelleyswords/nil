# Blog article build spec — match the template EXACTLY

**Reference template (copy its structure byte-for-byte):** `/Users/jamiedewar/Desktop/AI/Projects/NIL/site/blog/nil-money-guide.html`

Every article you write must reuse that file's exact `<head>` boilerplate, `<nav>`, `<footer>`, the email-capture `<section>`, and the script tags at the bottom — only changing the title/description/canonical/slug/schema and the article body. Write each as a complete standalone `.html` file in `/Users/jamiedewar/Desktop/AI/Projects/NIL/site/blog/`.

## Per-article requirements
- **Title tag:** `<Specific Title> | The NIL Playbook` (under ~60 chars where possible).
- **Meta description:** unique, <155 chars, includes the target keyword naturally.
- **Canonical + og:url:** `https://thenilplaybook.com/blog/<slug>.html`
- **JSON-LD:** include `Article`, `BreadcrumbList`, and `FAQPage` blocks (copy the pillar's pattern; update headline, url, and the FAQ Q&As to match the article). datePublished/dateModified: `2026-06-09`.
- **Body structure (answer-first):**
  1. Breadcrumb + `article-tag` + `<h1>` + `article-meta` (e.g., "Plain English · ~6 min read · Updated June 2026").
  2. An `.answer-box` opening with the direct, quotable answer in the first 1–2 sentences.
  3. 800–1,500 words of genuinely useful, plain-English content: short paragraphs, `<h2>`/`<h3>` headings, lists, and at least one callout (`.box box-tip` / `.box-note` / `.box-warn`) and where useful a `.pull` quote or `.table`.
  4. Real dollar examples the reader can picture. Define every term. Casual-but-professional teammate voice. No jargon.
  5. 2–4 internal links to related blog articles (use the slugs in the list below) and a link to `/playbook.html` or `/free-checklist.html`.
  6. An `<h2>Frequently asked questions</h2>` with a `.faq` block of 3 Q&As that MATCH the FAQPage schema.
  7. A `.disclaimer` line: educational only, not advice, figures change, investing risk.
- Keep the same email-capture section + footer as the template.

## Voice & legal
Casual but professional, plain English, analogies, dollar examples, never condescending. **Education, not advice.** Never tell readers to buy a specific security; explain concepts and questions to ask.

## All slugs (for internal linking)
nil-money-guide (pillar) · do-college-athletes-pay-taxes-on-nil · how-much-to-save-for-nil-taxes · how-to-invest-nil-money · what-is-an-index-fund · roth-ira-for-college-athletes · do-i-need-a-financial-advisor-nil · financial-advisor-fees-explained · nil-money-scams · what-to-do-with-first-nil-check · nil-quarterly-estimated-taxes · should-athletes-form-llc-nil · high-yield-savings-accounts-explained · how-to-read-an-nil-contract · budgeting-irregular-nil-income · friends-family-want-nil-money · nil-money-mistakes-to-avoid

Always link back to the pillar (`nil-money-guide.html`) where natural.

## Source material
Pull facts/voice from `/Users/jamiedewar/Desktop/AI/Projects/NIL/02-the-nil-playbook-guide.md` (the full guide). Keep tax specifics general (e.g., "set aside about 30%", "~15% self-employment tax", "limits change yearly — confirm with a CPA").
