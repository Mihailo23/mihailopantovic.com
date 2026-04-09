# Personal Website Redesign — mihailopantovic.com

## Overview

Complete rebuild of Mihailo Pantovic's personal portfolio website. Replacing the old Nuxt 2 + Vue 2 site with a modern Vite+ SPA using Vue 3, TypeScript, and Vue I18n (English/Serbian).

## Tech Stack

- **Framework:** Vue 3 (^3.5)
- **Language:** TypeScript
- **Toolchain:** Vite+ (`vite-plus` + `@voidzero-dev/vite-plus-core`)
- **Build plugin:** `@vitejs/plugin-vue`
- **I18n:** `vue-i18n` ^11 (EN/SR)
- **Meta tags:** `@unhead/vue`
- **Typography:** Raleway (body) + JetBrains Mono (monospace accents)
- **Deployment:** Netlify (static files, already configured)
- **No router** — single page with anchor-scroll navigation

## Project Structure

```
mihailopantovic.com/
├── src/
│   ├── components/
│   │   ├── NavBar.vue             # Fixed nav with section anchors + EN/SR switcher
│   │   ├── HeroSection.vue        # SVG illustration (left) + name/title/socials (right)
│   │   ├── ExperienceSection.vue  # Vertical timeline with gradient line
│   │   ├── TechSection.vue        # Categorized technology tag pills
│   │   ├── ProjectsSection.vue    # Project cards with external links
│   │   ├── EducationSection.vue   # Education entry
│   │   ├── ContactSection.vue     # Labeled contact links
│   │   └── FooterSection.vue      # Copyright footer
│   ├── assets/
│   │   └── hero.svg               # Extracted from existing MSVG.vue component
│   ├── locales/
│   │   ├── en.ts                  # English translations
│   │   └── sr.ts                  # Serbian translations
│   ├── App.vue                    # Root component composing all sections
│   ├── main.ts                    # App bootstrap with i18n + unhead
│   └── style.css                  # Global styles, CSS custom properties
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Design Decisions

### Layout: Left-aligned with Timeline

- Hero section: SVG illustration on the left, name/title/social icons on the right
- Experience uses a vertical timeline with the gradient accent line
- Content is left-aligned in a single column (max-width: 800px, centered)
- Sections separated by subtle borders

### Color Scheme: Dark Developer

- **Background:** `#0a0f1a` (dark navy)
- **Primary text:** `#f0f0f0` (headings), `#c8d6e5` (body), `#8899aa` (secondary)
- **Muted text:** `#667788`, `#4a6070`
- **Accent gradient:** `#41C5E7` → `#7AFFC4` (from existing SVG)
- **Tag background:** `rgba(65,197,231,0.08)` with `rgba(65,197,231,0.15)` border
- **Tag text:** `#7AFFC4`
- **Card borders:** `rgba(65,197,231,0.1)`, hover: `rgba(122,255,196,0.3)`

### Typography: Raleway + JetBrains Mono

- **Raleway:** Headings and body text (weights: 300, 400, 600, 700)
- **JetBrains Mono:** Section titles, dates, labels, tech tags (weights: 400, 500)
- Google Fonts loaded via `<link>` in `index.html`

### Navigation

- Fixed top bar with glassmorphism effect (`backdrop-filter: blur`)
- Section anchor links: Experience, Tech, Projects, Contact
- Language switcher: `EN / SR` toggle
- Logo: "MP" initials

## Content

### Hero

- Reuse existing MSVG.vue illustration (developer at laptop with circuit board lines, cyan-to-green gradient)
- Name: Mihailo Pantovic (Mihailo Pantović in SR)
- Title: Lead Frontend Developer
- Social icons: GitHub, LinkedIn, Email

### Experience (4 entries, newest first)

1. **Lead Frontend Developer** — Snappy Kraken (Feb 2023 – Present)
2. **Lead Front-End Web Developer** — Helbiz (Oct 2019 – Feb 2023) — Micromobility startup
3. **Lead Front-End Web Developer** — YAMBA S.a.r.l., Luxembourg (Dec 2016 – Oct 2019) — Social network startup
4. **Front-End Web Developer** — Presta D.O.O., Belgrade (Sep 2013 – Dec 2016) — Team of 15, front-end and WordPress integration

### Technologies (4 categories)

- **Languages:** JavaScript, TypeScript, HTML, CSS, PHP
- **Frameworks & Libraries:** Vue.js, Nuxt, React, React Native, Tailwind CSS, Sass, jQuery, Bootstrap, WordPress, Laravel
- **Databases:** MySQL, MongoDB
- **Tools:** Git, VS Code, Linux, macOS

### Projects (3 entries)

1. **spotmontenegro.com** — Montenegro tour company website
2. **osbrankopesic.edu.rs** — Belgrade school website
3. **asteria-adventures.com** — Croatian ATV tours website

### Education

- **Faculty of Organizational Sciences, Belgrade** — BSc Computer Science (Oct 2007 – Jun 2013)

### Contact

- Email: pantovic.mihailo@gmail.com
- GitHub: github.com/Mihailo23
- LinkedIn: linkedin.com/in/mihailo-pantovic-a790a157

## I18n Strategy

- Two locales: `en` (default) and `sr` (Serbian)
- No URL-based routing — locale stored in memory, toggled via nav switcher
- All user-facing text in locale files
- `localStorage` to persist language preference across visits

## SEO

- `@unhead/vue` for `<title>`, `<meta description>`, Open Graph tags
- Single canonical URL (no locale prefixes in URL)
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`, `<address>`)

## Migration Plan

- Delete all old Nuxt 2 files (components, pages, layouts, plugins, store, middleware, assets, locales, config files, .nuxt, dist, node_modules)
- Keep `.git` directory
- Keep `MSVG.vue` content — extract SVG markup to `src/assets/hero.svg`
- Adjust SVG body fills: the original uses `#050718` which is invisible on the `#0a0f1a` background. Lighten the body/clothing fills (e.g. `#1a2a3a` or use the gradient accent) so the figure is visible against the dark background. The gradient lines (`#41C5E7` → `#7AFFC4`) are fine as-is.
- Scaffold fresh Vite+ project in place
- Add `.superpowers/` to `.gitignore`
