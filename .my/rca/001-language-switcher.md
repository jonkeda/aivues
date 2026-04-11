# RCA-001: Language Switcher Broken for Translated Slugs

## Symptoms

1. **No opticians page in Dutch** — clicking NL from `/en/opticians/` goes to `/nl/opticians/` (404). Dutch page lives at `/nl/opticiens/`.
2. **Language switch stays on wrong page** — e.g. on `/en/help/` clicking NL goes to `/nl/help/` (404) instead of `/nl/hulp/`.

## Root Cause

`src/_includes/layouts/base.njk` lines 32-35 uses a naive string replace for the language switcher:

```nunjucks
page.url | replace('/en/', '/nl/')
page.url | replace('/nl/', '/en/')
```

This only works when slugs are identical across languages. Four out of seven pages have different slugs:

| EN slug | NL slug | Switcher produces | Correct |
|---------|---------|-------------------|---------|
| `/en/setup/` | `/nl/instellen/` | `/nl/setup/` ❌ | `/nl/instellen/` |
| `/en/use/` | `/nl/gebruik/` | `/nl/use/` ❌ | `/nl/gebruik/` |
| `/en/help/` | `/nl/hulp/` | `/nl/help/` ❌ | `/nl/hulp/` |
| `/en/opticians/` | `/nl/opticiens/` | `/nl/opticians/` ❌ | `/nl/opticiens/` |

## Proposals

### A — Custom Eleventy filter (recommended)

Add a `translationUrl` filter in `.eleventy.js` that looks up `page.url` in `navigation.json` and returns the other language's URL. Falls back to the simple replace for pages not in navigation.

```js
eleventyConfig.addFilter("translationUrl", function (pageUrl, navigation, lang) {
  const otherLang = lang === "en" ? "nl" : "en";
  const key = "url_" + lang;
  const targetKey = "url_" + otherLang;
  for (const item of navigation.items) {
    if (item[key] === pageUrl) return item[targetKey];
  }
  return pageUrl.replace("/" + lang + "/", "/" + otherLang + "/");
});
```

Template becomes:
```nunjucks
<a href="{{ page.url | translationUrl(navigation, lang) }}">
```

**Pros:** Single source of truth (navigation.json), zero per-page maintenance.
**Cons:** None significant.

### B — Front matter `translationUrl`

Add `translationUrl: /nl/hulp/` to each page's front matter. Template reads `{{ translationUrl }}`.

**Pros:** Explicit, simple.
**Cons:** Must maintain in every file; easy to forget on new pages.

### C — Computed data

Use `eleventyComputed.js` to auto-derive `translationUrl` from navigation data at build time.

**Pros:** Automatic, no template changes needed beyond reading the computed field.
**Cons:** Adds complexity with a computed data file; harder to debug.

## Recommendation

**Proposal A** — one filter, one template change, zero per-page overhead. Navigation.json already has all the URL mappings.
