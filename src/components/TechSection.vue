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
