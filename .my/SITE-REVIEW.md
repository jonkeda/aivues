# AiVues Site Review — Honest Assessment

*Reviewed: April 12, 2026*
*Reviewer: Copilot, after full codebase and live site audit*

---

## Overall Verdict

**Strong foundation, genuinely useful concept, but has real issues that need fixing before showing it to professionals or organizations.** The site serves a narrow audience well (VIP users + helpers setting up Ray-Ban Meta glasses), but content drift, data inconsistencies, and some design gaps undermine credibility.

**Score: 6.5/10** — Good bones, needs polish.

---

## What Works Well

### 1. Clear Purpose and Audience
The site knows exactly who it's for and doesn't try to be more than it is. Home page immediately routes people to the right place. "Is This For Me?" is excellent — honest about limitations (no darkness, no face recognition, not a cane replacement). This builds trust.

### 2. Bilingual from Day One
EN/NL implemented at the architecture level (separate content trees, shared layouts, translationUrl filter). Dutch content is properly localized, not machine-translated — it reads naturally. Voice commands stay in English in both versions, which is the right call.

### 3. Accessibility Built In
Skip link, `aria-current="page"`, `aria-label` on nav/language toggle, `prefers-reduced-motion`, large touch targets (44px min), keyboard focus indicators, print styles. The phone toggle uses proper `<fieldset>`/`<legend>`. For a site targeting screen reader users, this is table stakes — and you actually did it.

### 4. Training Program is the Killer Feature
28 lessons across 4 guides with progress checkboxes that persist via localStorage. The pacing is smart — one new skill per lesson, rest days built in, graduated difficulty. This is the strongest part of the site. Nothing else like it exists for this product.

### 5. TeachMe System is Innovative
The voice.njk layout + custom instruction approach is clever. Minimal HTML pages that Meta AI can extract cleanly, triggered by natural voice phrases. The simulation we did earlier worked — that's a good sign. The content is well-written for spoken delivery.

### 6. Technical Stack is Right-Sized
Eleventy 3.1.5 with zero client-side frameworks. ~5KB CSS, one small JS file. Fast, deployable, minimal dependencies. The pathPrefix transform for GitHub Pages works correctly. No over-engineering.

### 7. Opticians Page
Unusual and valuable. Demo script, conversation starters, insurance context — gives opticians a reason to recommend the product. Nothing else like this exists.

---

## What Needs Work

### 1. CRITICAL: Training Page Has Stale App References
**Severity: High.** The training page (both EN and NL) still references apps that were removed from the apps list:

- **Lesson 6 (Guide 1):** "install the 8 essential apps" → should be 7
- **Lesson 2 (Guide 4):** Still teaches Lazarillo with full exercise
- **Lesson 3 (Guide 4):** Still teaches Cash Reader with full exercise
- **Lesson 4 (Guide 4):** Still teaches Seeing AI (iPhone) / Google Lookout (Android)
- **Lesson 5 (Guide 4):** References Lazarillo and Cash Reader in daily routine

These are active lessons that tell users to install and practice with apps that are no longer on the apps page. A user following the training will hit dead ends. **This is the most urgent fix.**

### 2. CRITICAL: site.json Has Wrong URL
`site.json` has `"url": "https://aivues.github.io"` but the actual site is at `https://jonkeda.github.io/aivues/`. This doesn't break anything visible right now (the URL isn't rendered in templates), but it's wrong metadata that could cause issues with canonical URLs, social sharing, or RSS in the future.

### 3. Google Maps References are Inconsistent
Google Maps was removed from the apps list but is still referenced across the site as if it's an installed app:
- `use.md` (EN+NL): navigation command tables reference "via Google Maps"
- `training.md` (EN+NL): Lesson 2 (Guide 3) says navigation "opens Google Maps"
- `teach/navigation.md` and `teach/navigatie.md`: mention Google Maps

**The question is:** Google Maps still works as a phone app even if it's no longer in the "essential 7" list. These references may actually be correct — users should have Google Maps or Apple Maps on their phone regardless. But the training page explicitly says to use Lazarillo for surroundings, which IS a removed app. The Google Maps references should be reviewed: either add it back to the list or change the references to be generic ("your map app").

### 4. No Landing Page / Language Router
Visiting `https://jonkeda.github.io/aivues/` gives a 404. There's no root index that detects language or offers EN/NL choice. Users must know to go to `/en/` or `/nl/`. This is a poor first impression.

### 5. No Meta/OG Tags for Sharing
Pages have `<title>` and `<meta name="description">` but no Open Graph or Twitter Card tags. If someone shares the site on WhatsApp, Facebook, or Slack, it'll show a bare URL with no preview. For a site about accessibility, that matters — helpers and opticians share links.

### 6. No Favicon
No favicon configured. Shows the default browser icon. Minor but looks unfinished.

### 7. Dutch Apps Page Has Wrong Count
`src/nl/apps.md` line 45 still says "acht basisapps" (eight basic apps). Should be "zeven" (seven).

### 8. Help Page Links to ChatGPT Awkwardly
The "Ask AI" section links to ChatGPT with a prefilled query. The link text is styled as a `.routing-links` button but the markup is a `<p><a>` not a list item. More importantly, linking to an external AI chat as a support channel is risky — ChatGPT might give wrong info about these specific glasses. Consider removing this or adding a strong disclaimer.

### 9. No 404 Page
No custom 404 page. GitHub Pages shows its default. Given that teach pages are noindex and the URL structure matters for the TeachMe system, a custom 404 that helps people find the right page would be valuable.

### 10. Phone Toggle Defaults to iPhone
The phone toggle defaults to iPhone in the HTML (`checked` on the iPhone radio). The JS reads from localStorage and applies the saved value, but on first visit with no saved preference, Android users see iPhone content. Detecting the user agent and setting the default would be better. (Note: screen reader users may not even see the toggle if they don't know to look for it.)

### 11. Mobile Navigation May Be Problematic
The nav has 8 items in a horizontal flex row. On narrow screens these wrap, but there's no hamburger menu. With a screen reader this is fine (it reads them sequentially), but sighted helpers on phones see a potentially messy wrapped nav bar.

### 12. No Structured Data
No JSON-LD or schema.org markup. The FAQ section on the help page is a natural fit for FAQ structured data, which would improve search visibility.

### 13. Template Inconsistency
`page.njk` and `page-with-sidebar.njk` are identical files — both just extend `base.njk` and render `{{ content | safe }}`. The sidebar logic is in `base.njk` (via `{% if sidebar %}`). Having two identical template files is confusing.

---

## Content Quality Assessment

### English Content: **8/10**
Well-written, follows the styleguide consistently. Warm but direct tone. Good sentence length for the audience. The training lessons are particularly well-structured — clear objectives, concrete exercises, test-then-confirm pattern.

### Dutch Content: **7/10**
Good localization, not a word-for-word translation. Reads naturally. A few places where terminology isn't quite standard Dutch accessibility language (minor). Voice commands correctly stay in English.

### Styleguide Compliance: **7/10**
Most pages follow the intro → grouped bullets → closing pattern. Some pages (training, setup) have long sections that deviate — but those pages need the extra structure (step-by-step lessons, platform-specific instructions). The styleguide is well-written but might need updating to account for these structural exceptions.

---

## Architecture Assessment

### What's Solid
- Collection globs (`src/en/*.md`) correctly exclude teach subdirectories from nav
- Nunjucks comment delimiter override (`<# #>`) solves the `{#id}` conflict cleanly
- pathPrefix transform handles GitHub Pages subpath correctly
- Phone toggle with localStorage persistence is well-implemented
- Progress checkboxes with localStorage are a nice touch

### What Could Be Better
- **No build-time link checking.** Internal links could break silently (they already reference apps that match the removed-app issue above)
- **No sitemap.** Not crucial for a small site, but useful if you want search engines to discover the teach index pages
- **pathPrefix is hardcoded twice** — once in the `url` filter and once in the Eleventy config return. If these drift, links break
- **`base.njk` does too much.** Header, footer, sidebar logic, skip link — all in one file. Works at this scale but will get messy if the site grows

---

## Security & Privacy

- No tracking, analytics, or third-party scripts. Good.
- No forms, no user accounts, no server-side code. Minimal attack surface.
- localStorage is used for theme, phone toggle, and progress — appropriate and not sensitive.
- External links are all HTTPS. No mixed content.
- The ChatGPT link sends a prefilled query which is fine — no user data is exposed.
- **No Content-Security-Policy header.** GitHub Pages doesn't support custom headers easily, but an upgrade to a hosting platform with CSP support would be worth it if the site grows.

---

## Summary of Priorities

### Fix Now (blocks credibility)
1. Update training.md EN+NL: rewrite Guide 4 lessons 2-4 for current app list (Envision AI, Ally, ScribeMe instead of Lazarillo, Cash Reader, Seeing AI/Lookout)
2. Fix training.md EN+NL lesson 6: "8 essential apps" → "7 essential apps"
3. Fix nl/apps.md: "acht" → "zeven"
4. Add a root index page with language choice (even a simple redirect to /en/)

### Fix Soon (improves professionalism)
5. Fix site.json URL
6. Add OG/Twitter meta tags to base.njk
7. Add a favicon
8. Add a custom 404 page
9. Review Google Maps references — decide: keep or make generic

### Consider Later (nice to have)
10. Platform detection for phone toggle default  
11. Mobile hamburger menu
12. FAQ structured data
13. Sitemap generation
14. Build-time link checking

---

## Bottom Line

This is a genuinely useful site that fills a real gap — no other resource like this exists for visually impaired Meta glasses users. The training program and TeachMe system are innovative. But the app list update wasn't propagated to the training page, which is the page users spend the most time on. That's the kind of inconsistency that erodes trust with an audience that depends on accuracy. Fix the data inconsistencies first, then worry about the cosmetics.
