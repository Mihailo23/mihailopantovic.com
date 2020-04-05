<template>
  <div class="container px-2 sm:px-0">
    <div class="my-4">
      <h1
        class="text-blue-500 text-6xl font-bold leading-none"
        v-text="$t('projects.title')"
      />
    </div>
    <div class="flex flex-wrap -mx-2">
      <div class="w-full sm:w-2/3 px-2">
        <main>
          <m-card :title="$t('projects.dev9t.title')" link="http://dev9t.com" />
          <m-card
            :title="$t('projects.branko-pesic.title')"
            link="https://osbrankopesic.edu.rs"
          />
          <m-card
            :title="$t('projects.asteria-led.title')"
            link="http://asteria-led.com"
          />
          <m-card
            :title="$t('projects.asteria-adventures.title')"
            link="http://asteria-adventures.com"
          />
        </main>
      </div>
      <div class="w-full sm:w-1/3 px-2">
        <m-sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import MSidebar from "~/components/MSidebar.vue";
import MCard from "~/components/UI/MCard.vue";
export default {
  components: {
    MSidebar,
    MCard
  }
};
</script>

<style lang="scss" scoped></style>
