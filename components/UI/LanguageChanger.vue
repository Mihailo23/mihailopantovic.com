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
  created() {
    const lang = localStorage.getItem("lang");
    if (lang) {
      this.$store.commit("UPDATE_LOCALE", lang);
    }
  },
  methods: {
    setLocale(locale) {
      localStorage.setItem("lang", locale);
      this.$store.commit("UPDATE_LOCALE", locale);
      this.$i18n.locale = locale;
    }
  }
};
</script>

<style lang="scss" scoped></style>
