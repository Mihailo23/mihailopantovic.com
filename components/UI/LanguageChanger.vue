<template>
  <div class="relative w-6 h-6">
    <a
      class="lang absolute outline-none uppercase font-bold z-20 w-6 h-6 bg-gray-200 text-gray-800 border-black border-2 rounded-full flex items-center justify-center"
      :class="active && 'active'"
      href=""
      title="Change Language"
      @click.prevent="active = !active"
      v-text="$i18n.locale"
    ></a>
    <a
      v-if="$i18n.locale !== 'en'"
      class="lang absolute invisible outline-none uppercase font-bold z-10 w-6 h-6 bg-gray-200 text-gray-800 border-black border-2 rounded-full flex items-center justify-center"
      :class="active && 'moving'"
      href=""
      title="EN"
      @click.prevent="setLocale('en')"
    >
      en
    </a>
    <a
      v-if="$i18n.locale !== 'rs'"
      class="lang absolute invisible outline-none uppercase font-bold z-10 w-6 h-6 bg-gray-200 text-gray-800 border-black border-2 rounded-full flex items-center justify-center"
      :class="active && 'moving'"
      href=""
      title="RS"
      @click.prevent="setLocale('rs')"
    >
      rs
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langs: ["rs", "en"],
      active: false
    };
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
      setTimeout(() => {
        this.active = false;
      }, 300);
    }
  }
};
</script>

<style lang="scss" scoped>
.lang {
  transition: all 0.6s ease;
  font-size: 0.625rem;
  &:hover,
  &:focus {
    box-shadow: 0 0 14px;
  }
}
.active {
  box-shadow: 0 0 14px;
}
.moving {
  visibility: visible;
  transform: translateY(2rem);
}
</style>
