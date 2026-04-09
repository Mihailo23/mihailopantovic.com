<script setup lang="ts">
import { useI18n } from "vue-i18n";
import HeroSvg from "./HeroSvg.vue";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section class="hero">
    <div class="hero-svg" role="img" :aria-label="t('aria.heroSvg')">
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
