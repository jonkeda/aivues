# AiVues Site Review #2 — Post-Fix Assessment

*Reviewed: April 12, 2026 — after all critical fixes from Review #1*

---

## Status After Review #1 Fixes

The critical data consistency issues from Review #1 are resolved:

- Training lessons updated for 7-app list ✅
- App counts fixed everywhere ✅
- site.json URL corrected ✅
- Root landing page added ✅
- OG/Twitter meta tags added ✅
- Favicon added ✅
- Custom 404 page added ✅
- Mobile hamburger menu added ✅
- Phone toggle auto-detects Android ✅
- FAQ structured data added (EN help page) ✅
- Google Maps references made platform-appropriate ✅

**Updated Score: 7.5/10** — up from 6.5. Solid, but room remains.

---

## Remaining Issues

### MODERATE: use.md Camera Apps Section Outdated (EN + NL)

**File:** `src/en/use.md` lines 118–130, `src/nl/use.md` lines 118–130

The "Apps That Use the Glasses Camera" section says "four apps" and lists ScribeMe as "(beta) — real-time captions". This needs updating:

- ScribeMe description should match apps.json: "AI scanner, live visual assistant and document reader" — not "real-time captions"
- Check if the "four apps" count is still accurate
- Check if Ally also works through the glasses camera (if so, count should be 5)

**Fix:** Update the description and verify which apps actually use the glasses camera vs phone camera.

---

### MODERATE: No Meta Descriptions on 15 Main Pages

**Files:** All pages in `src/en/*.md` and `src/nl/*.md` except `training.md`

No `description:` in frontmatter. The template falls back to `site.tagline[lang]` ("Smart glasses guide for visually impaired people"), so every page gets the same meta description. This means:

- Google shows the same snippet for all pages
- OG descriptions are all identical when shared
- Each page's unique purpose is invisible to search engines

**Fix:** Add unique `description:` to each page's frontmatter. For example:

- `setup.md`: "Step-by-step setup guide for Ray-Ban Meta smart glasses — pairing, accessibility, and essential apps"
- `help.md`: "FAQ, troubleshooting, and resources for Ray-Ban Meta smart glasses users"
- `apps.md`: "The 7 essential apps for visually impaired Ray-Ban Meta smart glasses users"

---

### MODERATE: No Canonical or Hreflang Tags

**File:** `src/_includes/layouts/base.njk`

The site has EN and NL versions of every page but no:

- `<link rel="canonical">` — tells search engines the preferred URL
- `<link rel="alternate" hreflang="en">` / `<link rel="alternate" hreflang="nl">` — tells search engines about the translation

Without these, Google may index both versions but not understand they're translations of each other, potentially showing the wrong language to users.

**Fix:** Add to `base.njk` `<head>`:

```html
<link rel="canonical" href="{{ site.url }}{{ page.url }}">
<link rel="alternate" hreflang="en" href="{{ site.url }}{{ page.url | translationUrl(navigation, lang) if lang == 'nl' else page.url }}">
<link rel="alternate" hreflang="nl" href="{{ site.url }}{{ page.url | translationUrl(navigation, lang) if lang == 'en' else page.url }}">
```

---

### MODERATE: NL Help Page Missing FAQ Schema

**File:** `src/nl/help.md`

The EN help page has JSON-LD FAQ structured data; the NL help page does not. Google may show FAQ rich results for the EN page but not the NL page. Should have schema in both languages.

**Fix:** Add equivalent `<script type="application/ld+json">` block at the end of `src/nl/help.md` with Dutch Q&A pairs.

---

### MINOR: Redundant Template Files

**Files:** `src/_includes/layouts/page.njk` and `src/_includes/layouts/page-with-sidebar.njk`

Both are identical:

```
---
layout: layouts/base.njk
---
{{ content | safe }}
```

The sidebar logic is in `base.njk` (via `{% if sidebar %}`), so `page-with-sidebar.njk` is redundant. Having two identical files is confusing for future maintainers.

**Fix:** Keep both for clarity of intent (it documents "this page has a sidebar"), OR consolidate to one `page.njk` and update frontmatter in all pages that use `page-with-sidebar.njk`. Low priority — no user impact.

---

### MINOR: ChatGPT Link on Help Pages (EN + NL)

**Files:** `src/en/help.md`, `src/nl/help.md`

Both help pages link to ChatGPT with a prefilled query. Issues:

- Says "AI chat is coming in a future update" — is this still the plan? If not, remove the promise
- ChatGPT may give inaccurate info about specific Ray-Ban Meta features
- The `<a>` tag has `class="routing-links"` but that CSS class styles `<ul>` list items, not standalone `<a>` tags — it renders as blue/white button text without the button shape

**Fix:** remove the section

---

### MINOR: `phone-iphone` CSS Class Unused

**File:** `src/css/style.css`, `src/js/main.js`

`main.js` toggles `body.phone-iphone` class, but no CSS rules target `.phone-iphone`. The iPhone-specific styling works because iPhone content is the default (Android content is hidden with `.android-only { display: none }`). The class is set but never read by CSS.

**Fix:** Either remove the class toggle from JS (since it's never used in CSS), or keep it for potential future use. Very low priority.

---

### MINOR: `video-link` Component Never Used

**Files:** `src/_includes/components/video-link.njk`, `src/css/style.css` (`.video-link` class)

The component exists but is never included by any page. Dead code.

**Fix:** Remove the component and CSS class if there are no plans to use it.

---

### MINOR: Root Index Page Missing Favicon in Dark Mode

**File:** `src/root-index.njk`

The root landing page has inline styles but no favicon `<link>`. Also, the SVG favicon uses a blue circle (#0056b3) which doesn't adapt to dark mode — it looks fine on dark backgrounds but could potentially blend on certain screens.

**Fix:** Add `<link rel="icon" href="/favicon.svg" type="image/svg+xml">` to root-index.njk. Consider making the SVG responsive with `prefers-color-scheme` media query inside the SVG.

---

### SUGGESTION: Teach Index Pages Not Linked from Main Nav

The teach index pages (`/en/teach/`, `/nl/teach/`) exist but are only accessible if you know the URL. They're not linked from any main page. The only way a user finds them is if they read the custom instruction documentation.

**Fix:** Add a link to the teach index from the training page or help page. Something like:

> "Your glasses can also teach you directly. Say 'Hey Meta, teach me' or browse [all topics](/en/teach/)."

---

### SUGGESTION: No Print-Friendly Version of Training

The training page is likely the most-printed page (helpers and trainers print it for reference). Although print styles exist (hiding nav/footer), the collapsible `<details>` elements are closed in print — meaning the actual lesson content doesn't appear on paper.

**Fix:** Add a CSS print rule: `@media print { details { display: block; } details > div { display: block; } summary { page-break-inside: avoid; } }` to force all lessons open when printing.

---

### SUGGESTION: Progress Checkbox IDs Use Old Week Naming

The checkbox IDs in training.md still use `w1d1`, `w2d1`, etc. (week 1 day 1). The site now calls these "Guides" not "Weeks". If a user's localStorage has progress saved, changing IDs would reset their progress — but for new users the naming is confusing in dev tools.

**Fix:** No action needed now. If you ever reset the training structure, rename to `g1l1` (guide 1 lesson 1).

---

### SUGGESTION: Add `lang` Attribute to Voice Commands

Throughout the NL pages, English voice commands appear inline (e.g., "Zeg: **Hey Meta, what do you see?**"). Screen readers reading a Dutch page will pronounce these English phrases with Dutch pronunciation.

**Fix:** Wrap EN commands in `<span lang="en">` where they appear in NL pages. This tells screen readers to switch pronunciation. Example:

```markdown
Zeg: **<span lang="en">"Hey Meta, what do you see?"</span>**
```

This is a significant accessibility improvement for the primary audience (screen reader users).

---

## Summary of Improvements

| #  | Issue                                                        | Severity | Effort |
| -- | ------------------------------------------------------------ | -------- | ------ |
| 1  | Fix use.md camera apps section (ScribeMe description, count) | Moderate | 10 min |
| 2  | Add meta descriptions to all 15 main pages                   | Moderate | 20 min |
| 3  | Add canonical + hreflang tags                                | Moderate | 10 min |
| 4  | Add FAQ schema to NL help page                               | Moderate | 10 min |
| 5  | Fix ChatGPT link section or replace with teach               | Minor    | 5 min  |
| 6  | Add teach index links from training/help pages               | Minor    | 5 min  |
| 7  | Add favicon to root-index.njk                                | Minor    | 2 min  |
| 8  | Add print CSS for details/summary                            | Minor    | 5 min  |
| 9  | Add `lang="en"` to voice commands in NL pages              | Minor    | 30 min |
| 10 | Remove unused video-link component                           | Minor    | 2 min  |
| 11 | Remove unused phone-iphone class                             | Minor    | 2 min  |

**Total estimated effort: ~1.5 hours for all improvements**

---

## Bottom Line

The site went from 6.5 → 7.5 after Review #1 fixes. The remaining issues are mostly SEO polish (#2, #3), accessibility refinement (#9), and content accuracy (#1). None are show-stoppers. The `lang="en"` suggestion for voice commands in Dutch pages is the most impactful remaining accessibility fix for the target audience.
