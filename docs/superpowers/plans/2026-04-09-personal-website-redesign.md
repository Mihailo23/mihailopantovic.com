# Personal Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild mihailopantovic.com as a modern Vue 3 + Vite+ one-pager portfolio with dark theme, timeline layout, and EN/SR i18n.

**Architecture:** Single-page Vue 3 SPA with no router — anchor-scroll navigation between sections. Vite+ toolchain for dev/build/lint. Vue I18n for English/Serbian. @unhead/vue for meta tags. Deployed as static files to Netlify.

**Tech Stack:** Vue 3, TypeScript, Vite+ (`vite-plus` + `@voidzero-dev/vite-plus-core`), `@vitejs/plugin-vue`, `vue-i18n` ^11, `@unhead/vue`, Raleway + JetBrains Mono fonts.

**Reference project:** `/Users/mihailopantovic/code/spot-montenegro` uses the same Vite+ stack — mirror its config patterns.

---

## File Map

| File | Responsibility |
|---|---|
| `package.json` | Dependencies, scripts (`vp dev`, `vp build`, `vp preview`) |
| `vite.config.ts` | Vite+ config with vue plugin and staged linting |
| `tsconfig.json` | Single TS config for both app and node files |
| `index.html` | Entry HTML with font preloads |
| `src/env.d.ts` | Vue module type declarations |
| `src/main.ts` | App bootstrap: createApp, i18n, unhead |
| `src/App.vue` | Root component composing all sections |
| `src/style.css` | CSS custom properties, global reset, typography |
| `src/locales/en.ts` | English translations |
| `src/locales/sr.ts` | Serbian translations |
| `src/components/NavBar.vue` | Fixed nav with anchor links + EN/SR switcher |
| `src/components/HeroSection.vue` | Hero with SVG illustration + name + socials |
| `src/components/HeroSvg.vue` | SVG illustration extracted from old MSVG.vue (colors adjusted for dark bg) |
| `src/components/ExperienceSection.vue` | Vertical timeline with gradient accent |
| `src/components/TechSection.vue` | Categorized technology tag pills |
| `src/components/ProjectsSection.vue` | Project cards with external links |
| `src/components/EducationSection.vue` | Education entry |
| `src/components/ContactSection.vue` | Labeled contact links |
| `src/components/FooterSection.vue` | Copyright footer |

---

### Task 1: Clean Old Files

**Files:**
- Delete: All old Nuxt 2 files (everything except `.git/`, `docs/`, `.gitignore`)
- Modify: `.gitignore`

- [ ] **Step 1: Delete all old project files**

```bash
cd /Users/mihailopantovic/code/mihailopantovic.com
rm -rf assets components dist layouts locales middleware pages plugins static store .nuxt .vscode .editorconfig .eslintrc.js nuxt.config.js now.json package.json README.md tailwind.config.js yarn.lock node_modules
```

- [ ] **Step 2: Update .gitignore for Vite+ project**

Replace `.gitignore` with:

```gitignore
node_modules/
dist/
*.log
.DS_Store
*.local
.superpowers/
```

- [ ] **Step 3: Commit clean slate**

```bash
git add -A
git commit -m "chore: remove old Nuxt 2 project files"
```

---

### Task 2: Scaffold Vite+ Project

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `index.html`
- Create: `src/env.d.ts`
- Create: `src/main.ts` (minimal — just mounts empty app)
- Create: `src/App.vue` (minimal — just a `<div>`)
- Create: `src/style.css` (empty for now)

- [ ] **Step 1: Create package.json**

```json
{
  "name": "mihailopantovic",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vp dev",
    "build": "vue-tsc -b && vp build",
    "preview": "vp preview"
  },
  "dependencies": {
    "@unhead/vue": "^2.1.12",
    "vue": "^3.5.30",
    "vue-i18n": "^11.3.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^6.0.5",
    "@vue/tsconfig": "^0.9.0",
    "typescript": "~5.9.3",
    "vite": "npm:@voidzero-dev/vite-plus-core@latest",
    "vite-plus": "latest",
    "vue-tsc": "^3.2.5"
  },
  "overrides": {
    "vite": "npm:@voidzero-dev/vite-plus-core@latest"
  }
}
```

- [ ] **Step 2: Create vite.config.ts**

```typescript
import { defineConfig } from "vite-plus";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  lint: { options: { typeAware: true, typeCheck: true } },
  plugins: [vue()],
});
```

- [ ] **Step 3: Create tsconfig.json**

```json
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.tsbuildinfo",
    "types": ["vite/client"],
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue", "vite.config.ts"]
}
```

- [ ] **Step 4: Create index.html**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

- [ ] **Step 5: Create src/env.d.ts**

```typescript
/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<object, object, unknown>;
  export default component;
}
```

- [ ] **Step 6: Create minimal src/style.css**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0a0f1a;
  color: #c8d6e5;
  font-family: "Raleway", sans-serif;
}

#app {
  min-height: 100vh;
}
```

- [ ] **Step 7: Create minimal src/App.vue**

```vue
<script setup lang="ts">
</script>

<template>
  <div>Hello from Vite+</div>
</template>
```

- [ ] **Step 8: Create minimal src/main.ts**

```typescript
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");
```

- [ ] **Step 9: Install dependencies and verify dev server**

```bash
cd /Users/mihailopantovic/code/mihailopantovic.com
npm install
npx vp dev
```

Expected: Dev server starts, browser shows "Hello from Vite+" on dark background. Kill the server after verifying.

- [ ] **Step 10: Commit scaffold**

```bash
git add package.json vite.config.ts tsconfig.json index.html src/env.d.ts src/style.css src/App.vue src/main.ts .gitignore
git commit -m "feat: scaffold Vite+ Vue 3 project"
```

---

### Task 3: Global Styles

**Files:**
- Modify: `src/style.css`

- [ ] **Step 1: Write full global styles with CSS custom properties**

Replace `src/style.css` with:

```css
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&family=JetBrains+Mono:wght@400;500&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* Background */
  --color-bg: #0a0f1a;
  --color-bg-card: rgba(65, 197, 231, 0.03);

  /* Text */
  --color-heading: #f0f0f0;
  --color-body: #c8d6e5;
  --color-secondary: #8899aa;
  --color-muted: #667788;
  --color-faint: #4a6070;

  /* Accent */
  --color-accent-start: #41c5e7;
  --color-accent-end: #7affc4;
  --color-tag-bg: rgba(65, 197, 231, 0.08);
  --color-tag-border: rgba(65, 197, 231, 0.15);
  --color-tag-text: #7affc4;

  /* Borders */
  --color-border: rgba(65, 197, 231, 0.08);
  --color-border-card: rgba(65, 197, 231, 0.1);
  --color-border-card-hover: rgba(122, 255, 196, 0.3);
  --color-border-nav: rgba(65, 197, 231, 0.1);

  /* Typography */
  --font-body: "Raleway", "Helvetica Neue", Helvetica, sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;

  /* Layout */
  --max-width: 800px;
  --nav-height: 60px;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: calc(var(--nav-height) + 24px);
}

body {
  font-family: var(--font-body);
  font-weight: 400;
  color: var(--color-body);
  background: var(--color-bg);
  line-height: 1.7;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4 {
  font-family: var(--font-body);
  font-weight: 700;
  color: var(--color-heading);
  line-height: 1.3;
}

a {
  color: var(--color-tag-text);
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: var(--color-accent-start);
}

img {
  max-width: 100%;
  display: block;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 32px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
}
```

- [ ] **Step 2: Verify styles load**

```bash
npx vp dev
```

Expected: Dark background, no flash of unstyled content. Kill server after verifying.

- [ ] **Step 3: Commit**

```bash
git add src/style.css
git commit -m "feat: add global styles with dark theme CSS custom properties"
```

---

### Task 4: I18n Setup

**Files:**
- Create: `src/locales/en.ts`
- Create: `src/locales/sr.ts`
- Modify: `src/main.ts`

- [ ] **Step 1: Create src/locales/en.ts**

```typescript
export default {
  nav: {
    experience: "Experience",
    tech: "Tech",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    name: "Mihailo Pantovic",
    title: "Lead Frontend Developer",
  },
  section: {
    experience: "// Experience",
    tech: "// Technologies",
    projects: "// Projects",
    education: "// Education",
    contact: "// Contact",
  },
  experience: {
    snappy: {
      role: "Lead Frontend Developer",
      company: "Snappy Kraken",
      date: "Feb 2023 – Present",
      desc: "Marketing automation platform for financial advisors",
    },
    helbiz: {
      role: "Lead Front-End Web Developer",
      company: "Helbiz",
      date: "Oct 2019 – Feb 2023",
      desc: "Micromobility startup",
    },
    yamba: {
      role: "Lead Front-End Web Developer",
      company: "YAMBA S.a.r.l., Luxembourg",
      date: "Dec 2016 – Oct 2019",
      desc: "Social network startup",
    },
    presta: {
      role: "Front-End Web Developer",
      company: "Presta D.O.O., Belgrade",
      date: "Sep 2013 – Dec 2016",
      desc: "Working in a team of 15, mostly front-end and WordPress integration",
    },
  },
  tech: {
    languages: "Languages",
    frameworks: "Frameworks & Libraries",
    databases: "Databases",
    tools: "Tools",
  },
  projects: {
    spot: {
      name: "spotmontenegro.com",
      desc: "Montenegro tour company website",
    },
    school: {
      name: "osbrankopesic.edu.rs",
      desc: "Belgrade school website",
    },
    asteria: {
      name: "asteria-adventures.com",
      desc: "Croatian ATV tours website",
    },
  },
  education: {
    institution: "Faculty of Organizational Sciences, Belgrade",
    degree: "BSc Computer Science",
    date: "Oct 2007 – Jun 2013",
  },
  contact: {
    email: "email",
    github: "github",
    linkedin: "linkedin",
  },
  footer: {
    copy: "\u00A9 {year} Mihailo Pantovic",
  },
};
```

- [ ] **Step 2: Create src/locales/sr.ts**

```typescript
export default {
  nav: {
    experience: "Iskustvo",
    tech: "Tehnologije",
    projects: "Projekti",
    contact: "Kontakt",
  },
  hero: {
    name: "Mihailo Pantovi\u0107",
    title: "Vodi Frontend Developer",
  },
  section: {
    experience: "// Iskustvo",
    tech: "// Tehnologije",
    projects: "// Projekti",
    education: "// Obrazovanje",
    contact: "// Kontakt",
  },
  experience: {
    snappy: {
      role: "Vodi Frontend Developer",
      company: "Snappy Kraken",
      date: "Feb 2023 \u2013 Danas",
      desc: "Marketing automatizacija za finansijske savetnike",
    },
    helbiz: {
      role: "Vodi Front-End Web Developer",
      company: "Helbiz",
      date: "Okt 2019 \u2013 Feb 2023",
      desc: "Mikromobilnost startup",
    },
    yamba: {
      role: "Vodi Front-End Web Developer",
      company: "YAMBA S.a.r.l., Luksemburg",
      date: "Dec 2016 \u2013 Okt 2019",
      desc: "Startup dru\u0161tvene mre\u017ee",
    },
    presta: {
      role: "Front-End Web Developer",
      company: "Presta D.O.O., Beograd",
      date: "Sep 2013 \u2013 Dec 2016",
      desc: "Rad u timu od 15 ljudi, uglavnom front-end i WordPress integracija",
    },
  },
  tech: {
    languages: "Jezici",
    frameworks: "Frejmvorci i Biblioteke",
    databases: "Baze Podataka",
    tools: "Alati",
  },
  projects: {
    spot: {
      name: "spotmontenegro.com",
      desc: "Sajt turisti\u010dke agencije u Crnoj Gori",
    },
    school: {
      name: "osbrankopesic.edu.rs",
      desc: "Sajt beogradske \u0161kole",
    },
    asteria: {
      name: "asteria-adventures.com",
      desc: "Sajt za ATV ture u Hrvatskoj",
    },
  },
  education: {
    institution: "Fakultet Organizacionih Nauka, Beograd",
    degree: "BSc Ra\u010dunarske nauke",
    date: "Okt 2007 \u2013 Jun 2013",
  },
  contact: {
    email: "email",
    github: "github",
    linkedin: "linkedin",
  },
  footer: {
    copy: "\u00A9 {year} Mihailo Pantovi\u0107",
  },
};
```

- [ ] **Step 3: Update src/main.ts to wire up i18n**

```typescript
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createHead } from "@unhead/vue";
import "./style.css";
import App from "./App.vue";
import en from "./locales/en";
import sr from "./locales/sr";

function detectLocale(): "en" | "sr" {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("locale");
  if (saved === "en" || saved === "sr") return saved;
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("sr") || lang.startsWith("hr") || lang.startsWith("bs"))
    return "sr";
  return "en";
}

const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: "en",
  messages: { en, sr },
});

const head = createHead();
const app = createApp(App);
app.use(i18n);
app.use(head);
app.mount("#app");
```

- [ ] **Step 4: Verify i18n loads without errors**

```bash
npx vp dev
```

Expected: App loads, no console errors. Kill server after verifying.

- [ ] **Step 5: Commit**

```bash
git add src/locales/en.ts src/locales/sr.ts src/main.ts
git commit -m "feat: add vue-i18n with English and Serbian locales"
```

---

### Task 5: NavBar Component

**Files:**
- Create: `src/components/NavBar.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: Create src/components/NavBar.vue**

```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({ useScope: "global" });
const scrolled = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 20;
}

function toggleLocale() {
  const next = locale.value === "en" ? "sr" : "en";
  locale.value = next;
  localStorage.setItem("locale", next);
  document.documentElement.setAttribute("lang", next);
}

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
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

@media (max-width: 768px) {
  .nav-inner {
    padding: 12px 20px;
  }

  .links {
    gap: 12px;
  }

  .links a {
    font-size: 10px;
    letter-spacing: 0.5px;
  }
}
</style>
```

- [ ] **Step 2: Update src/App.vue to use NavBar**

```vue
<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <main class="container">
    <p style="padding-top: 100px;">Sections go here</p>
  </main>
</template>
```

- [ ] **Step 3: Verify nav renders**

```bash
npx vp dev
```

Expected: Fixed dark nav bar at top with "MP" logo, section links, and EN/SR toggle. Clicking toggle swaps active language highlight. Kill server after verifying.

- [ ] **Step 4: Commit**

```bash
git add src/components/NavBar.vue src/App.vue
git commit -m "feat: add NavBar with anchor links and language switcher"
```

---

### Task 6: Hero Section with SVG

**Files:**
- Create: `src/components/HeroSvg.vue` (copied from old `components/MSVG.vue` with color adjustments)
- Create: `src/components/HeroSection.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: Create src/components/HeroSvg.vue**

Copy the entire content of `/Users/mihailopantovic/code/mihailopantovic.com/components/MSVG.vue` (this file was deleted in Task 1, so copy from git history):

```bash
git show HEAD~2:components/MSVG.vue > src/components/HeroSvg.vue
```

Then make these color adjustments for visibility on dark background:

1. In the `<style>` section, replace all instances of `fill: #050718` with `fill: #1a2a3a` (3 occurrences: `.st39`, `.st50` fill, and `.st0` fill)
2. Replace all instances of `stroke: #050718` with `stroke: #1a2a3a` (2 occurrences: `.st40`, `.st53`, `.st54`)
3. In `.st0`, change `fill: #050718` to `fill: #1a2a3a`
4. In `.st50`, change `fill: #050718` to `fill: #1a2a3a`

These changes make the figure body visible against the `#0a0f1a` background while keeping the cyan-to-green gradient lines unchanged.

- [ ] **Step 2: Create src/components/HeroSection.vue**

```vue
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import HeroSvg from "./HeroSvg.vue";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section class="hero">
    <div class="hero-svg">
      <HeroSvg />
    </div>
    <div class="hero-text">
      <h1>{{ t("hero.name") }}</h1>
      <p class="subtitle">{{ t("hero.title") }}</p>
      <div class="socials">
        <a
          href="https://github.com/Mihailo23"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          aria-label="GitHub"
        >
          GH
        </a>
        <a
          href="https://www.linkedin.com/in/mihailo-pantovic-a790a157/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          LI
        </a>
        <a
          href="mailto:pantovic.mihailo@gmail.com"
          title="Email"
          aria-label="Email"
        >
          @
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 140px 0 80px;
  display: flex;
  align-items: center;
  gap: 40px;
}

.hero-svg {
  flex-shrink: 0;
  width: 200px;
}

.hero-svg :deep(svg) {
  width: 100%;
  height: auto;
}

.hero-text h1 {
  font-size: 36px;
  margin-bottom: 4px;
}

.subtitle {
  font-size: 16px;
  color: var(--color-secondary);
  margin-bottom: 16px;
}

.socials {
  display: flex;
  gap: 12px;
}

.socials a {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--color-border-card);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-muted);
  font-size: 11px;
  font-family: var(--font-mono);
  transition: all 0.2s ease;
}

.socials a:hover {
  border-color: var(--color-accent-start);
  color: var(--color-tag-text);
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 120px 0 60px;
    gap: 24px;
  }

  .hero-svg {
    width: 160px;
  }

  .hero-text h1 {
    font-size: 28px;
  }

  .socials {
    justify-content: center;
  }
}
</style>
```

- [ ] **Step 3: Update src/App.vue**

```vue
<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
</script>

<template>
  <NavBar />
  <main class="container">
    <HeroSection />
  </main>
</template>
```

- [ ] **Step 4: Verify hero renders with SVG**

```bash
npx vp dev
```

Expected: Hero section with the developer SVG illustration on the left, name/title on the right, social icon circles below. SVG figure body should be visible (lighter than background). Kill server after verifying.

- [ ] **Step 5: Commit**

```bash
git add src/components/HeroSvg.vue src/components/HeroSection.vue src/App.vue
git commit -m "feat: add hero section with SVG illustration and social links"
```

---

### Task 7: Experience Section

**Files:**
- Create: `src/components/ExperienceSection.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: Create src/components/ExperienceSection.vue**

```vue
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

const jobs = ["snappy", "helbiz", "yamba", "presta"] as const;
</script>

<template>
  <section id="experience">
    <div class="section-title">{{ t("section.experience") }}</div>
    <div class="timeline">
      <div v-for="job in jobs" :key="job" class="timeline-item">
        <div class="timeline-line">
          <div class="timeline-dot" />
        </div>
        <div class="timeline-content">
          <h3>{{ t(`experience.${job}.role`) }}</h3>
          <div class="company">{{ t(`experience.${job}.company`) }}</div>
          <div class="date">{{ t(`experience.${job}.date`) }}</div>
          <div class="desc">{{ t(`experience.${job}.desc`) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 48px 0;
  border-top: 1px solid var(--color-border);
}

.section-title {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-accent-start);
  margin-bottom: 32px;
}

.timeline-item {
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-line {
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--color-accent-start),
    var(--color-accent-end)
  );
  border-radius: 1px;
  flex-shrink: 0;
  position: relative;
}

.timeline-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent-end);
  position: absolute;
  left: -3px;
  top: 4px;
}

.timeline-content h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 2px;
}

.company {
  font-size: 14px;
  color: var(--color-secondary);
  margin-bottom: 2px;
}

.date {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-faint);
  margin-bottom: 6px;
}

.desc {
  font-size: 13px;
  color: var(--color-muted);
}
</style>
```

- [ ] **Step 2: Add ExperienceSection to src/App.vue**

```vue
<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
</script>

<template>
  <NavBar />
  <main class="container">
    <HeroSection />
    <ExperienceSection />
  </main>
</template>
```

- [ ] **Step 3: Verify timeline renders**

```bash
npx vp dev
```

Expected: Experience section with gradient timeline line, 4 job entries with dots, roles, companies, dates, descriptions. Kill server after verifying.

- [ ] **Step 4: Commit**

```bash
git add src/components/ExperienceSection.vue src/App.vue
git commit -m "feat: add experience section with gradient timeline"
```

---

### Task 8: Technologies Section

**Files:**
- Create: `src/components/TechSection.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: Create src/components/TechSection.vue**

```vue
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

const categories = [
  { key: "languages", items: ["JavaScript", "TypeScript", "HTML", "CSS", "PHP"] },
  {
    key: "frameworks",
    items: [
      "Vue.js",
      "Nuxt",
      "React",
      "React Native",
      "Tailwind CSS",
      "Sass",
      "jQuery",
      "Bootstrap",
      "WordPress",
      "Laravel",
    ],
  },
  { key: "databases", items: ["MySQL", "MongoDB"] },
  { key: "tools", items: ["Git", "VS Code", "Linux", "macOS"] },
] as const;
</script>

<template>
  <section id="tech">
    <div class="section-title">{{ t("section.tech") }}</div>
    <div v-for="cat in categories" :key="cat.key" class="category">
      <div class="category-title">{{ t(`tech.${cat.key}`) }}</div>
      <div class="tags">
        <span v-for="item in cat.items" :key="item" class="tag">
          {{ item }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 48px 0;
  border-top: 1px solid var(--color-border);
}

.section-title {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-accent-start);
  margin-bottom: 32px;
}

.category {
  margin-bottom: 24px;
}

.category:last-child {
  margin-bottom: 0;
}

.category-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-secondary);
  margin-bottom: 10px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 5px 14px;
  background: var(--color-tag-bg);
  color: var(--color-tag-text);
  border-radius: 20px;
  border: 1px solid var(--color-tag-border);
}
</style>
```

- [ ] **Step 2: Add TechSection to src/App.vue**

```vue
<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import TechSection from "./components/TechSection.vue";
</script>

<template>
  <NavBar />
  <main class="container">
    <HeroSection />
    <ExperienceSection />
    <TechSection />
  </main>
</template>
```

- [ ] **Step 3: Verify tech tags render**

```bash
npx vp dev
```

Expected: Technologies section with 4 categories, pill-shaped tags with green text on dark tinted backgrounds. Kill server after verifying.

- [ ] **Step 4: Commit**

```bash
git add src/components/TechSection.vue src/App.vue
git commit -m "feat: add technologies section with categorized tag pills"
```

---

### Task 9: Projects Section

**Files:**
- Create: `src/components/ProjectsSection.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: Create src/components/ProjectsSection.vue**

```vue
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

const projects = [
  { key: "spot", url: "https://spotmontenegro.com" },
  { key: "school", url: "https://osbrankopesic.edu.rs" },
  { key: "asteria", url: "https://asteria-adventures.com" },
] as const;
</script>

<template>
  <section id="projects">
    <div class="section-title">{{ t("section.projects") }}</div>
    <div class="projects-grid">
      <a
        v-for="project in projects"
        :key="project.key"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card"
      >
        <div>
          <h3>{{ t(`projects.${project.key}.name`) }}</h3>
          <p>{{ t(`projects.${project.key}.desc`) }}</p>
        </div>
        <span class="arrow">&rarr;</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 48px 0;
  border-top: 1px solid var(--color-border);
}

.section-title {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-accent-start);
  margin-bottom: 32px;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-radius: 8px;
  border: 1px solid var(--color-border-card);
  background: var(--color-bg-card);
  text-decoration: none;
  transition: border-color 0.2s ease;
}

.project-card:hover {
  border-color: var(--color-border-card-hover);
}

.project-card h3 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
}

.project-card p {
  font-size: 12px;
  color: var(--color-muted);
}

.arrow {
  color: var(--color-accent-start);
  font-size: 18px;
  flex-shrink: 0;
  margin-left: 16px;
}
</style>
```

- [ ] **Step 2: Add ProjectsSection to src/App.vue**

```vue
<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import TechSection from "./components/TechSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
</script>

<template>
  <NavBar />
  <main class="container">
    <HeroSection />
    <ExperienceSection />
    <TechSection />
    <ProjectsSection />
  </main>
</template>
```

- [ ] **Step 3: Verify project cards render**

```bash
npx vp dev
```

Expected: Three project cards with names, descriptions, and arrow icons. Cards have subtle border that lights up on hover. Links open in new tab. Kill server after verifying.

- [ ] **Step 4: Commit**

```bash
git add src/components/ProjectsSection.vue src/App.vue
git commit -m "feat: add projects section with linked cards"
```

---

### Task 10: Education, Contact, and Footer Sections

**Files:**
- Create: `src/components/EducationSection.vue`
- Create: `src/components/ContactSection.vue`
- Create: `src/components/FooterSection.vue`
- Modify: `src/App.vue`

- [ ] **Step 1: Create src/components/EducationSection.vue**

```vue
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="education">
    <div class="section-title">{{ t("section.education") }}</div>
    <div class="edu-item">
      <h3>{{ t("education.institution") }}</h3>
      <div class="degree">{{ t("education.degree") }}</div>
      <div class="date">{{ t("education.date") }}</div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 48px 0;
  border-top: 1px solid var(--color-border);
}

.section-title {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-accent-start);
  margin-bottom: 32px;
}

.edu-item h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 2px;
}

.degree {
  font-size: 14px;
  color: var(--color-secondary);
  margin-bottom: 2px;
}

.date {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-faint);
}
</style>
```

- [ ] **Step 2: Create src/components/ContactSection.vue**

```vue
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="contact">
    <div class="section-title">{{ t("section.contact") }}</div>
    <div class="contact-links">
      <a class="contact-link" href="mailto:pantovic.mihailo@gmail.com">
        <span class="label">{{ t("contact.email") }}</span>
        pantovic.mihailo@gmail.com
      </a>
      <a
        class="contact-link"
        href="https://github.com/Mihailo23"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="label">{{ t("contact.github") }}</span>
        github.com/Mihailo23
      </a>
      <a
        class="contact-link"
        href="https://www.linkedin.com/in/mihailo-pantovic-a790a157/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="label">{{ t("contact.linkedin") }}</span>
        linkedin.com/in/mihailo-pantovic
      </a>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 48px 0;
  border-top: 1px solid var(--color-border);
}

.section-title {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-accent-start);
  margin-bottom: 32px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-secondary);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: var(--color-tag-text);
}

.label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-faint);
  width: 64px;
  flex-shrink: 0;
}
</style>
```

- [ ] **Step 3: Create src/components/FooterSection.vue**

```vue
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    {{ t("footer.copy", { year }) }}
  </footer>
</template>

<style scoped>
footer {
  padding: 32px 0;
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-faint);
}
</style>
```

- [ ] **Step 4: Update src/App.vue with all sections**

```vue
<script setup lang="ts">
import { useHead } from "@unhead/vue";
import { useI18n } from "vue-i18n";
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import TechSection from "./components/TechSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import EducationSection from "./components/EducationSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSection.vue";

const { t } = useI18n({ useScope: "global" });

useHead({
  title: "Mihailo Pantovic — Lead Frontend Developer",
  meta: [
    {
      name: "description",
      content:
        "Personal portfolio of Mihailo Pantovic, Lead Frontend Developer. Vue.js, TypeScript, React, and modern web technologies.",
    },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Mihailo Pantovic — Lead Frontend Developer" },
    {
      property: "og:description",
      content:
        "Personal portfolio of Mihailo Pantovic, Lead Frontend Developer. Vue.js, TypeScript, React, and modern web technologies.",
    },
    { property: "og:url", content: "https://mihailopantovic.com" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "index, follow" },
  ],
  link: [{ rel: "canonical", href: "https://mihailopantovic.com" }],
});
</script>

<template>
  <NavBar />
  <main class="container">
    <HeroSection />
    <ExperienceSection />
    <TechSection />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />
    <FooterSection />
  </main>
</template>
```

- [ ] **Step 5: Verify all sections render**

```bash
npx vp dev
```

Expected: Full page with all sections: Nav, Hero, Experience, Technologies, Projects, Education, Contact, Footer. Anchor links in nav scroll to correct sections. Language toggle switches all text. Kill server after verifying.

- [ ] **Step 6: Commit**

```bash
git add src/components/EducationSection.vue src/components/ContactSection.vue src/components/FooterSection.vue src/App.vue
git commit -m "feat: add education, contact, footer sections and SEO meta tags"
```

---

### Task 11: Production Build and Final Verification

**Files:**
- No new files

- [ ] **Step 1: Run production build**

```bash
cd /Users/mihailopantovic/code/mihailopantovic.com
npx vue-tsc -b && npx vp build
```

Expected: Build succeeds with no TypeScript errors. Output in `dist/` directory.

- [ ] **Step 2: Preview production build**

```bash
npx vp preview
```

Expected: Production build serves correctly. All sections render, fonts load, nav links work, language toggle works. Kill server after verifying.

- [ ] **Step 3: Fix any build issues**

If TypeScript errors occur, fix them. If there are no issues, skip this step.

- [ ] **Step 4: Commit any fixes**

Only if changes were made in Step 3:

```bash
git add -A
git commit -m "fix: resolve build issues"
```
