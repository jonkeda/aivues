# Selector Redesign — Phone & Language

Move the iPhone/Android selector to the menu bar and restyle both selectors as button groups.

---

## Current State

### Phone toggle
- **Component:** `src/_includes/components/phone-toggle.njk` — renders a `<fieldset>` with radio buttons inside page content
- **Included from:** setup.md, training.md, use.md, apps.md (EN + NL = 8 pages)
- **JS:** `src/js/main.js` — reads radio buttons, toggles `body.phone-android` class, persists to localStorage key `phone`, auto-detects Android UA on first visit
- **CSS:** `src/css/style.css` — `.android-only { display: none }`, `body.phone-android .android-only { display: block }`, `body.phone-android .iphone-only { display: none }`
- **Content pattern:** Pages wrap platform-specific blocks in `<div class="iphone-only">` / `<div class="android-only">` — only setup.md, training.md, and use.md use these divs (EN + NL = 6 files)

### Language switcher
- **Location:** `src/_includes/layouts/base.njk` → `<div class="controls">` → a single `<a>` showing "NL" or "EN"
- **Behavior:** Links to the other-language page via `translationUrl` filter (full page navigation, not JS toggle)

---

## Changes Required

### 1. Move phone selector to menu bar (`base.njk`)

**File:** `src/_includes/layouts/base.njk`

Replace the in-page phone-toggle includes with a global selector in the header controls bar.

Current controls area:
```html
<div class="controls">
  <a href="..." lang="nl" aria-label="Nederlands">NL</a>
  <button class="theme-toggle">...</button>
</div>
```

New controls area:
```html
<div class="controls">
  <div class="selector phone-selector" role="group" aria-label="Phone type">
    <button class="selector-btn" data-phone="iphone" aria-pressed="true">iPhone</button>
    <button class="selector-btn" data-phone="android" aria-pressed="false">Android</button>
  </div>
  <div class="selector lang-selector" role="group" aria-label="Language">
    <a href="/en/..." class="selector-btn{% if lang == 'en' %} is-active{% endif %}">English</a>
    <a href="/nl/..." class="selector-btn{% if lang == 'nl' %} is-active{% endif %}">Nederlands</a>
  </div>
  <button class="theme-toggle">...</button>
</div>
```

Key decisions:
- Phone selector uses `<button>` elements (JS toggle, no page navigation)
- Language selector uses `<a>` elements (real navigation to the other-language page)
- Both use the same `.selector` / `.selector-btn` CSS class for identical visual appearance
- The phone selector uses `aria-pressed` for screen reader state
- The language selector uses `is-active` class for the current language

### 2. Remove in-page phone-toggle includes

**Files to edit (remove `{% include "components/phone-toggle.njk" %}` lines):**
- `src/en/setup.md`
- `src/en/training.md`
- `src/en/use.md`
- `src/en/apps.md`
- `src/nl/setup.md`
- `src/nl/training.md`
- `src/nl/use.md`
- `src/nl/apps.md`

Also remove the `{% set legend = "..." %}` line before each include.

**File to delete:**
- `src/_includes/components/phone-toggle.njk`

### 3. Duplicate Siri/Google-specific paragraphs (not just tables)

Currently the content pages have platform-specific content inside `<div class="iphone-only">` / `<div class="android-only">`. This pattern already works and stays the same — the only change is the selector moves to the menu bar instead of being inline.

However, some content mentions "Hey Siri" or "Hey Google" in regular text (not inside platform divs). These should be reviewed and duplicated into `iphone-only` / `android-only` blocks where the wording differs by platform. Examples:

**`use.md` (EN + NL) — "Both Together" section:**
The section says `"Hey Siri" / "Hey Google"` — this could stay as-is (it explains both), or be split into two platform-specific versions. Recommendation: keep as-is since it's educational and mentions both.

**`training.md` (EN + NL) — multiple lessons:**
Several lessons say things like "Hey Siri/Google, navigate to..." — these should each be wrapped in platform divs:
```markdown
<div class="iphone-only">

- Say: **"Hey Siri, navigate to [address]"**

</div>
<div class="android-only">

- Say: **"Hey Google, navigate to [address]"**

</div>
```

**Files to audit for "Siri/Google" combined references:**
- `src/en/training.md` — navigation lesson, Siri shortcuts lesson, messages lesson, daily routine lesson
- `src/nl/training.md` — same lessons
- `src/en/use.md` — "Both Together" section (can stay)
- `src/nl/use.md` — same

### 4. Restyle selectors as button groups (`style.css`)

**File:** `src/css/style.css`

Remove the old `.phone-toggle` styles (fieldset, legend, radio labels). Add new shared `.selector` styles:

```css
/* --- Selector Button Group (phone + language) --- */
.selector {
  display: inline-flex;
  border: 2px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.selector-btn {
  padding: 0.25rem 0.75rem;
  min-height: 44px;
  min-width: 44px;
  border: none;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.selector-btn + .selector-btn {
  border-left: 2px solid var(--border);
}

/* Active state — same for both phone (aria-pressed) and language (is-active) */
.selector-btn[aria-pressed="true"],
.selector-btn.is-active {
  background: var(--accent);
  color: #fff;
}

.selector-btn:hover:not([aria-pressed="true"]):not(.is-active) {
  background: var(--card-bg);
}
```

Print rule: add `.selector` to the hidden-on-print list alongside `.controls`.

### 5. Update JavaScript (`main.js`)

**File:** `src/js/main.js`

Replace the radio-button phone toggle logic with button-click logic:

```js
// Phone selector (buttons in header)
var phoneBtns = document.querySelectorAll('.phone-selector .selector-btn');
function applyPhone(value) {
  document.body.classList.toggle('phone-android', value === 'android');
  phoneBtns.forEach(function (btn) {
    btn.setAttribute('aria-pressed', String(btn.dataset.phone === value));
  });
}

if (phoneBtns.length) {
  var saved = localStorage.getItem('phone');
  if (!saved) {
    saved = /android/i.test(navigator.userAgent) ? 'android' : 'iphone';
  }
  phoneBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      localStorage.setItem('phone', btn.dataset.phone);
      applyPhone(btn.dataset.phone);
    });
  });
  applyPhone(saved);
}
```

Remove the old `document.querySelectorAll('.phone-toggle input[type="radio"]')` block.

### 6. Mobile responsive considerations

The controls bar already collapses behind the hamburger menu at 768px. The two selectors + theme toggle need to fit on small screens.

Options:
- Stack the selectors vertically inside the hamburger menu on mobile
- Or keep them always visible in the header (outside the hamburger), since they're important for the user experience

Recommendation: **keep always visible** — the phone/language choice affects all content on the page. Put them in a row before the hamburger button. On narrow screens, use a compact layout:

```
[iPhone | Android]  [English | Nederlands]  [☀️]  [☰]
```

If too wide on very narrow screens (< 360px), the selector text can be shortened:
- "iPhone" → "iPhone", "Android" → "Android" (already short)
- "English" → "EN", "Nederlands" → "NL" (fallback at tiny sizes via CSS)

---

## Files Changed Summary

| File | Change |
|------|--------|
| `src/_includes/layouts/base.njk` | Replace language `<a>` with button-group selectors; add phone selector |
| `src/_includes/components/phone-toggle.njk` | **DELETE** |
| `src/css/style.css` | Remove `.phone-toggle` rules; add `.selector` / `.selector-btn` rules |
| `src/js/main.js` | Replace radio logic with button-click logic |
| `src/en/setup.md` | Remove `{% include "components/phone-toggle.njk" %}` |
| `src/en/training.md` | Remove include; split "Siri/Google" combined text into platform divs |
| `src/en/use.md` | Remove include |
| `src/en/apps.md` | Remove include |
| `src/nl/setup.md` | Remove include |
| `src/nl/training.md` | Remove include; split "Siri/Google" combined text into platform divs |
| `src/nl/use.md` | Remove include |
| `src/nl/apps.md` | Remove include |

---

## Execution Order

1. Add new `.selector` CSS styles, keep old `.phone-toggle` styles temporarily
2. Add phone selector + restyle language selector in `base.njk`
3. Update `main.js` — new button logic (keep old radio logic for backward compat)
4. Remove `{% include %}` lines from all 8 content pages
5. Split "Siri/Google" combined references in training.md (EN + NL) into platform-specific divs
6. Delete `phone-toggle.njk` component
7. Remove old `.phone-toggle` CSS and old radio JS code
8. Test: build site, verify phone toggle works globally, verify platform content shows/hides correctly
