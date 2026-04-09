# Website Polish: Responsive, SEO, A11y, Content Fixes

## Overview

A focused set of improvements to mihailopantovic.com after initial launch. Addresses mobile navigation, SEO gaps, accessibility issues, and content consistency.

## Changes

### 1. Mobile Hamburger Menu

**Problem:** On mobile (< 768px), nav links are crammed into a tiny row with 10px text.

**Fix:** Replace the inline nav links with a hamburger toggle on mobile:

- Show a 3-bar hamburger icon on screens < 768px, hide the inline links
- Clicking the hamburger opens a full-width dropdown below the nav bar with links stacked vertically + language toggle
- Animated transition: bars rotate into an X when open (same pattern as spot-montenegro)
- Clicking a link closes the menu and scrolls to the section
- Clicking outside or pressing Escape also closes the menu

**Files:** `src/components/NavBar.vue`

### 2. Unify Role Naming

**Problem:** Inconsistent job title format across experience entries:
- "Lead Frontend Developer" (Snappy Kraken — no hyphen, no "Web")
- "Lead Front-End Web Developer" (Helbiz, YAMBA — hyphenated, has "Web")
- "Front-End Web Developer" (Presta)

**Fix:** Standardize all to:
- Lead roles → **"Lead Frontend Developer"**
- Non-lead → **"Frontend Developer"**

Drop "Web" and "Front-End" hyphenation everywhere, both EN and SR locales.

**EN changes:**
- `experience.helbiz.role`: "Lead Front-End Web Developer" → "Lead Frontend Developer"
- `experience.yamba.role`: "Lead Front-End Web Developer" → "Lead Frontend Developer"
- `experience.presta.role`: "Front-End Web Developer" → "Frontend Developer"

**SR changes:**
- `experience.helbiz.role`: "Vodeći Front-End Web Developer" → "Vodeći Frontend Developer"
- `experience.yamba.role`: "Vodeći Front-End Web Developer" → "Vodeći Frontend Developer"
- `experience.presta.role`: "Front-End Web Developer" → "Frontend Developer"

**Files:** `src/locales/en.ts`, `src/locales/sr.ts`

### 3. Heading Hierarchy (SEO + A11y)

**Problem:** Heading structure skips from H1 directly to H3. Section titles are `<div>` elements, not headings at all. Screen readers and search engines expect H1 → H2 → H3.

**Fix:** Change section title elements from `<div class="section-title">` to `<h2 class="section-title">` in all section components. The H3s for job roles, project names, etc. remain as-is (they're correctly nested under the new H2s).

**Files:** `ExperienceSection.vue`, `TechSection.vue`, `ProjectsSection.vue`, `EducationSection.vue`, `ContactSection.vue`

### 4. Hero SVG Accessibility

**Problem:** The hero SVG has no accessible name — screen readers don't know what it is.

**Fix:** Add `role="img"` and `aria-label="Developer illustration"` to the SVG element in `HeroSvg.vue`. Also add the i18n key so SR locale gets a translated label.

**Files:** `src/components/HeroSvg.vue`, `src/locales/en.ts`, `src/locales/sr.ts`

### 5. Favicon

**Problem:** `/favicon.svg` returns 404 — console error on every page load.

**Fix:** Create a simple SVG favicon with the "MP" monogram using the accent gradient. Place in `public/favicon.svg`.

**Files:** `public/favicon.svg`

### 6. Missing og:image

**Problem:** No Open Graph image — social media shares show no preview.

**Fix:** This requires creating an actual image file (1200x630). For now, skip this — it can be done later with a proper design or screenshot. Remove the gap from the audit as a known deferral.

### 7. Focus Styles (A11y)

**Problem:** No custom focus indicators. Browser defaults are barely visible on the dark background.

**Fix:** Add `:focus-visible` styles to `style.css` for all interactive elements using the accent color:

```css
:focus-visible {
  outline: 2px solid var(--color-accent-start);
  outline-offset: 2px;
}
```

**Files:** `src/style.css`

### 8. Color Contrast (A11y)

**Problem:** `--color-faint` (`#4a6070`) on `#0a0f1a` background has ~3.1:1 contrast ratio, failing WCAG AA for normal text (needs 4.5:1).

**Fix:** Bump `--color-faint` from `#4a6070` to `#6a8898` (~4.7:1 ratio, passes AA). This affects dates in the timeline, contact labels, footer text.

**Files:** `src/style.css`

## Out of Scope

- og:image (needs a designed asset, deferred)
- Skip-to-content link (nice to have, not critical for a one-pager with nav anchors)
- Reduced motion preferences (no heavy animations currently)
