<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section id="education">
    <h2 class="section-title">{{ t("section.education") }}</h2>
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
  margin: 0 0 32px;
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
