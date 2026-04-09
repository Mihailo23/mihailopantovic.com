<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    {{ t("footer.copy", { year }) }}
  </footer>
</template>

<style scoped>
footer {
  padding: 32px 0;
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-faint);
}
</style>
