<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

const jobs = [
  {
    key: "snappy",
    tech: ["Vue.js", "TypeScript", "Tailwind CSS", "Sass", "Laravel"],
  },
  {
    key: "helbiz",
    tech: ["Vue.js", "React", "React Native", "TypeScript", "Nuxt", "Tailwind CSS", "Sass"],
  },
  {
    key: "yamba",
    tech: ["Vue.js", "JavaScript", "Tailwind CSS", "Sass", "Bootstrap"],
  },
  {
    key: "presta",
    tech: ["WordPress", "PHP", "jQuery", "HTML", "CSS", "Sass"],
  },
] as const;
</script>

<template>
  <section id="experience">
    <h2 class="section-title">{{ t("section.experience") }}</h2>
    <div class="timeline">
      <div v-for="job in jobs" :key="job.key" class="timeline-item">
        <div class="timeline-line">
          <div class="timeline-dot" />
        </div>
        <div class="timeline-content">
          <h3>{{ t(`experience.${job.key}.role`) }}</h3>
          <div class="company">{{ t(`experience.${job.key}.company`) }}</div>
          <div class="date">{{ t(`experience.${job.key}.date`) }}</div>
          <ul v-if="Array.isArray(t(`experience.${job.key}.desc`))" class="desc-list">
            <li v-for="(item, i) in t(`experience.${job.key}.desc`)" :key="i">{{ item }}</li>
          </ul>
          <div v-else class="desc">{{ t(`experience.${job.key}.desc`) }}</div>
          <div class="tech-tags">
            <span v-for="tech in job.tech" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
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
  margin: 0 0 32px;
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

.desc-list {
  font-size: 13px;
  color: var(--color-muted);
  list-style: none;
  padding: 0;
  margin: 0;
}

.desc-list li {
  position: relative;
  padding-left: 14px;
  margin-bottom: 4px;
}

.desc-list li::before {
  content: "–";
  position: absolute;
  left: 0;
  color: var(--color-accent-start);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}

.tech-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  padding: 3px 10px;
  background: var(--color-tag-bg);
  color: var(--color-tag-text);
  border-radius: 16px;
  border: 1px solid var(--color-tag-border);
  transition: border-color 0.2s ease;
}

.tech-tag:hover {
  border-color: var(--color-border-card-hover);
}
</style>
