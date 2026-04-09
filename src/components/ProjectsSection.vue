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
    <h2 class="section-title">{{ t("section.projects") }}</h2>
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
  margin: 0 0 32px;
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
