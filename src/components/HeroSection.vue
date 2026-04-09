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
  padding: 120px 0 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
}

.hero-svg {
  width: 380px;
  max-width: 90%;
}

.hero-svg :deep(svg) {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 0 40px rgba(65, 197, 231, 0.08));
}

.hero-text h1 {
  font-size: 40px;
  margin-bottom: 6px;
  letter-spacing: -0.5px;
}

.subtitle {
  font-size: 17px;
  color: var(--color-secondary);
  margin-bottom: 20px;
  font-weight: 300;
  letter-spacing: 0.5px;
}

.socials {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.socials a {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--color-border-card);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-muted);
  font-size: 11px;
  font-family: var(--font-mono);
  transition: all 0.25s ease;
}

.socials a:hover {
  border-color: var(--color-accent-start);
  color: var(--color-tag-text);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(65, 197, 231, 0.15);
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 48px;
    gap: 24px;
  }

  .hero-svg {
    width: 300px;
  }

  .hero-text h1 {
    font-size: 30px;
  }

  .subtitle {
    font-size: 15px;
  }
}
</style>
