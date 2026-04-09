<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

const jobs = ["snappy", "helbiz", "yamba", "presta"] as const;
</script>

<template>
  <section id="experience">
    <div class="section-title">{{ t("section.experience") }}</div>
    <div class="timeline">
      <div v-for="job in jobs" :key="job" class="timeline-item">
        <div class="timeline-line">
          <div class="timeline-dot" />
        </div>
        <div class="timeline-content">
          <h3>{{ t(`experience.${job}.role`) }}</h3>
          <div class="company">{{ t(`experience.${job}.company`) }}</div>
          <div class="date">{{ t(`experience.${job}.date`) }}</div>
          <div class="desc">{{ t(`experience.${job}.desc`) }}</div>
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
  margin-bottom: 32px;
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
</style>
