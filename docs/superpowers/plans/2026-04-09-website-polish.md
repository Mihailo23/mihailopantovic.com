# Website Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix mobile navigation (hamburger menu), unify role naming, fix heading hierarchy, improve accessibility, and add favicon.

**Architecture:** Small targeted changes across existing Vue components and CSS. No new dependencies. Follows existing patterns in the codebase.

**Tech Stack:** Vue 3, TypeScript, CSS, vue-i18n

---

## File Map

| File | Change |
|---|---|
| `src/components/NavBar.vue` | Add hamburger menu for mobile |
| `src/locales/en.ts` | Unify role names, add SVG aria label |
| `src/locales/sr.ts` | Unify role names, add SVG aria label |
| `src/components/ExperienceSection.vue` | Section title div → h2 |
| `src/components/TechSection.vue` | Section title div → h2 |
| `src/components/ProjectsSection.vue` | Section title div → h2 |
| `src/components/EducationSection.vue` | Section title div → h2 |
| `src/components/ContactSection.vue` | Section title div → h2 |
| `src/components/HeroSvg.vue` | Add role="img" and aria-label |
| `src/style.css` | Add focus-visible styles, fix color contrast |
| `public/favicon.svg` | Create MP monogram favicon |

---

### Task 1: Unify Role Names in Locales

**Files:**
- Modify: `src/locales/en.ts`
- Modify: `src/locales/sr.ts`

- [ ] **Step 1: Update en.ts role names**

In `src/locales/en.ts`, make these changes:

```typescript
// Line 27 — change:
role: "Lead Front-End Web Developer",
// to:
role: "Lead Frontend Developer",

// Line 33 — change:
role: "Lead Front-End Web Developer",
// to:
role: "Lead Frontend Developer",

// Line 39 — change:
role: "Front-End Web Developer",
// to:
role: "Frontend Developer",
```

Also add an `aria` section at the end of the default export (before the closing `};`):

```typescript
  aria: {
    heroSvg: "Developer illustration",
  },
```

- [ ] **Step 2: Update sr.ts role names**

In `src/locales/sr.ts`, make these changes:

```typescript
// Line 27 — change:
role: "Vodeći Front-End Web Developer",
// to:
role: "Vodeći Frontend Developer",

// Line 33 — change:
role: "Vodeći Front-End Web Developer",
// to:
role: "Vodeći Frontend Developer",

// Line 39 — change:
role: "Front-End Web Developer",
// to:
role: "Frontend Developer",
```

Also add an `aria` section at the end (before the closing `};`):

```typescript
  aria: {
    heroSvg: "Ilustracija programera",
  },
```

- [ ] **Step 3: Commit**

```bash
git add src/locales/en.ts src/locales/sr.ts
git commit -m "fix: unify role names and add aria locale keys"
```

---

### Task 2: Fix Heading Hierarchy (All Section Components)

**Files:**
- Modify: `src/components/ExperienceSection.vue`
- Modify: `src/components/TechSection.vue`
- Modify: `src/components/ProjectsSection.vue`
- Modify: `src/components/EducationSection.vue`
- Modify: `src/components/ContactSection.vue`

- [ ] **Step 1: In ExperienceSection.vue, change section title from div to h2**

Change:
```html
<div class="section-title">{{ t("section.experience") }}</div>
```
To:
```html
<h2 class="section-title">{{ t("section.experience") }}</h2>
```

- [ ] **Step 2: In TechSection.vue, change section title from div to h2**

Change:
```html
<div class="section-title">{{ t("section.tech") }}</div>
```
To:
```html
<h2 class="section-title">{{ t("section.tech") }}</h2>
```

- [ ] **Step 3: In ProjectsSection.vue, change section title from div to h2**

Change:
```html
<div class="section-title">{{ t("section.projects") }}</div>
```
To:
```html
<h2 class="section-title">{{ t("section.projects") }}</h2>
```

- [ ] **Step 4: In EducationSection.vue, change section title from div to h2**

Change:
```html
<div class="section-title">{{ t("section.education") }}</div>
```
To:
```html
<h2 class="section-title">{{ t("section.education") }}</h2>
```

- [ ] **Step 5: In ContactSection.vue, change section title from div to h2**

Change:
```html
<div class="section-title">{{ t("section.contact") }}</div>
```
To:
```html
<h2 class="section-title">{{ t("section.contact") }}</h2>
```

- [ ] **Step 6: Add h2 reset to section-title style**

Since each component has its own scoped `.section-title` styles, the `h2` will inherit browser margins. The existing styles already set `margin-bottom: 32px` and `font-size: 11px` etc., so the h2 defaults get overridden. But to be safe, add `margin: 0` to the `.section-title` rule in each component. The simplest approach: add `margin: 0;` to the `.section-title` CSS block in each of the 5 files. Example for ExperienceSection.vue:

```css
.section-title {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-accent-start);
  margin: 0 0 32px;
}
```

Repeat for all 5 components — replace `margin-bottom: 32px;` with `margin: 0 0 32px;` in each `.section-title` block.

- [ ] **Step 7: Commit**

```bash
git add src/components/ExperienceSection.vue src/components/TechSection.vue src/components/ProjectsSection.vue src/components/EducationSection.vue src/components/ContactSection.vue
git commit -m "fix: use h2 for section titles to fix heading hierarchy"
```

---

### Task 3: Hero SVG Accessibility

**Files:**
- Modify: `src/components/HeroSvg.vue`
- Modify: `src/components/HeroSection.vue`

- [ ] **Step 1: Add role and aria-label to the SVG in HeroSvg.vue**

At the top of the `<svg>` element in `HeroSvg.vue` (line 2), add `role="img"` and keep it generic since the aria-label will come from the parent wrapper:

Change the opening `<svg` tag from:
```html
<svg
    id="Layer_1"
    version="1.1"
```
To:
```html
<svg
    id="Layer_1"
    role="img"
    aria-hidden="true"
    version="1.1"
```

We use `aria-hidden="true"` on the SVG itself because the parent `div.hero-svg` in HeroSection will provide the accessible label.

- [ ] **Step 2: Add aria-label to the hero-svg wrapper in HeroSection.vue**

In `src/components/HeroSection.vue`, change:
```html
<div class="hero-svg">
  <HeroSvg />
</div>
```
To:
```html
<div class="hero-svg" role="img" :aria-label="t('aria.heroSvg')">
  <HeroSvg />
</div>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/HeroSvg.vue src/components/HeroSection.vue
git commit -m "fix: add accessible name to hero SVG illustration"
```

---

### Task 4: Focus Styles and Color Contrast

**Files:**
- Modify: `src/style.css`

- [ ] **Step 1: Add focus-visible styles**

At the end of `src/style.css` (before the `@media` query), add:

```css
:focus-visible {
  outline: 2px solid var(--color-accent-start);
  outline-offset: 2px;
}
```

- [ ] **Step 2: Fix color contrast**

In the `:root` custom properties section, change:
```css
--color-faint: #4a6070;
```
To:
```css
--color-faint: #6a8898;
```

- [ ] **Step 3: Commit**

```bash
git add src/style.css
git commit -m "fix: add focus-visible styles and improve color contrast for WCAG AA"
```

---

### Task 5: Favicon

**Files:**
- Create: `public/favicon.svg`

- [ ] **Step 1: Create public directory**

```bash
mkdir -p /Users/mihailopantovic/code/mihailopantovic.com/public
```

- [ ] **Step 2: Create favicon.svg**

Create `public/favicon.svg` with an "MP" monogram using the accent gradient:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#41C5E7"/>
      <stop offset="1" stop-color="#7AFFC4"/>
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="6" fill="#0a0f1a"/>
  <text x="16" y="22" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="14" fill="url(#g)">MP</text>
</svg>
```

- [ ] **Step 3: Commit**

```bash
git add public/favicon.svg
git commit -m "feat: add MP monogram favicon"
```

---

### Task 6: Mobile Hamburger Menu

**Files:**
- Modify: `src/components/NavBar.vue`

- [ ] **Step 1: Replace NavBar.vue with updated version including hamburger menu**

Replace the entire content of `src/components/NavBar.vue` with:

```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({ useScope: "global" });
const scrolled = ref(false);
const menuOpen = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 20;
}

function toggleLocale() {
  const next = locale.value === "en" ? "sr" : "en";
  locale.value = next;
  localStorage.setItem("locale", next);
  document.documentElement.setAttribute("lang", next);
}

function navigateTo() {
  menuOpen.value = false;
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape" && menuOpen.value) {
    menuOpen.value = false;
  }
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
  window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <nav :class="{ scrolled }">
    <div class="nav-inner">
      <span class="logo">MP</span>
      <div class="links">
        <a href="#experience">{{ t("nav.experience") }}</a>
        <a href="#tech">{{ t("nav.tech") }}</a>
        <a href="#projects">{{ t("nav.projects") }}</a>
        <a href="#contact">{{ t("nav.contact") }}</a>
        <button class="lang-toggle" @click="toggleLocale">
          <span :class="{ active: locale === 'en' }">EN</span>
          /
          <span :class="{ active: locale === 'sr' }">SR</span>
        </button>
      </div>
      <button
        class="hamburger"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span class="bar" :class="{ open: menuOpen }" />
      </button>
    </div>
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <a href="#experience" @click="navigateTo">{{ t("nav.experience") }}</a>
      <a href="#tech" @click="navigateTo">{{ t("nav.tech") }}</a>
      <a href="#projects" @click="navigateTo">{{ t("nav.projects") }}</a>
      <a href="#contact" @click="navigateTo">{{ t("nav.contact") }}</a>
      <button class="lang-toggle" @click="toggleLocale">
        <span :class="{ active: locale === 'en' }">EN</span>
        /
        <span :class="{ active: locale === 'sr' }">SR</span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 15, 26, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

nav.scrolled {
  border-bottom-color: var(--color-border-nav);
}

.nav-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: 700;
  color: var(--color-heading);
  font-size: 15px;
}

.links {
  display: flex;
  gap: 24px;
  align-items: center;
}

.links a {
  color: var(--color-secondary);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: color 0.2s ease;
}

.links a:hover {
  color: var(--color-tag-text);
}

.lang-toggle {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-muted);
  background: none;
  border: 1px solid var(--color-border-card);
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.lang-toggle:hover {
  border-color: var(--color-accent-start);
}

.lang-toggle .active {
  color: var(--color-tag-text);
}

/* Hamburger button — hidden on desktop */
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  width: 32px;
  height: 32px;
  position: relative;
}

.bar,
.bar::before,
.bar::after {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--color-heading);
  border-radius: 1px;
  transition: all 0.3s ease;
  position: absolute;
  left: 6px;
}

.bar {
  top: 15px;
}

.bar::before {
  content: "";
  top: -6px;
}

.bar::after {
  content: "";
  top: 6px;
}

.bar.open {
  background: transparent;
}

.bar.open::before {
  top: 0;
  transform: rotate(45deg);
}

.bar.open::after {
  top: 0;
  transform: rotate(-45deg);
}

/* Mobile menu — hidden on desktop */
.mobile-menu {
  display: none;
}

@media (max-width: 768px) {
  .nav-inner {
    padding: 12px 20px;
  }

  .links {
    display: none;
  }

  .hamburger {
    display: block;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
    border-top: 1px solid transparent;
  }

  .mobile-menu.open {
    max-height: 300px;
    padding: 24px 20px;
    border-top-color: var(--color-border-nav);
  }

  .mobile-menu a {
    color: var(--color-secondary);
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .mobile-menu a:hover {
    color: var(--color-tag-text);
  }
}
</style>
```

- [ ] **Step 2: Verify on desktop**

```bash
npx vp dev
```

Expected: Desktop view is unchanged — hamburger is hidden, inline links show normally.

- [ ] **Step 3: Verify on mobile (resize browser to 375px)**

Expected: Inline links disappear, hamburger icon appears. Clicking it opens a dropdown with stacked links. Clicking a link closes the menu and scrolls. Pressing Escape closes the menu. Bars animate to X when open.

- [ ] **Step 4: Commit**

```bash
git add src/components/NavBar.vue
git commit -m "feat: add hamburger menu for mobile navigation"
```

---

### Task 7: Production Build and Push

**Files:** None (verification only)

- [ ] **Step 1: Type check**

```bash
npx vue-tsc -b
```

Expected: No errors.

- [ ] **Step 2: Build**

```bash
npx vp build
```

Expected: Build succeeds.

- [ ] **Step 3: Push**

```bash
git push origin master
```
