---
layout: layouts/page.njk
title: Accessibility Statement
description: "AiVues accessibility statement — WCAG conformance, known issues, and contact information"
lang: en
permalink: /en/accessibility/
---

# Accessibility Statement

AiVues is committed to making this site accessible to everyone, including people who use screen readers, magnifiers, keyboard navigation, and other assistive technologies.

## Conformance

This site aims to conform to **WCAG 2.1 Level AA**. We have implemented:

- Semantic HTML with proper heading hierarchy
- Skip navigation link
- ARIA attributes for interactive controls
- Keyboard-accessible navigation and controls
- Focus indicators on all interactive elements
- Minimum 44×44 px touch targets
- Dark mode and system-preference support
- Reduced motion support via `prefers-reduced-motion`
- Print-friendly styles
- Bilingual content with proper `lang` attributes and `hreflang` links
- Voice-optimized pages for screen reader and smart glasses use

## Known Limitations

- This site has not yet been formally audited by an independent accessibility assessor.
- The site does not yet support Windows High Contrast Mode (`forced-colors`).

## Feedback

If you experience any accessibility barriers on this site, please let us know:

- **GitHub:** [Open an issue](https://github.com/jonkeda/aivues/issues)

We take accessibility feedback seriously and will address reported issues promptly.

## Technical Details

- Static HTML generated with [Eleventy](https://www.11ty.dev/)
- No JavaScript frameworks — vanilla JS only
- CSS: ~5 KB, JS: ~4 KB — minimal page weight
- All pages work without JavaScript enabled
