<template>
  <a
    href=""
    title="Change Language"
    @click.prevent="setLocale($i18n.locale === 'en' ? 'rs' : 'en')"
    v-text="$i18n.locale"
  ></a>
</template>

<script>
export default {
  data() {
    return { langs: ["rs", "en"] };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
};
</script>

<style lang="scss" scoped></style>
