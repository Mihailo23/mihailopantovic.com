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
