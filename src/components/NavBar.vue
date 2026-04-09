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
