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
