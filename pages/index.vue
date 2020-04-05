<template>
  <div class="container px-2 sm:px-0 pt-16">
    <hr class="my-4" />
    <div class="flex flex-wrap justify-between">
      <div class="my-4">
        <h1 class="text-blue-500 text-4xl sm:text-5xl font-bold leading-none">
          Mihailo Pantović
        </h1>
        <h2>Front-End Developer</h2>
      </div>
      <m-address />
    </div>
    <div class="flex flex-wrap -mx-2">
      <div class="w-full sm:w-2/3 px-2">
        <main>
          <hr class="my-4" />
          <h3
            class="text-blue-500 text-2xl font-bold uppercase leading-none"
            v-text="$t('experience.title')"
          />
          <m-card
            :title="$t('experience.helbiz.title')"
            link="https://helbiz.com"
            :date="$t('experience.helbiz.duration')"
          >
            <p class="text-sm" v-text="$t('experience.helbiz.desc')" />
          </m-card>

          <m-card
            :title="$t('experience.yamba.title')"
            link="https://yamba.com"
            :date="$t('experience.yamba.duration')"
          >
            <p class="text-sm" v-text="$t('experience.yamba.desc')" />
          </m-card>
          <m-card
            :title="$t('experience.presta.title')"
            link="https://wearepresta.com"
            :date="$t('experience.presta.duration')"
          >
            <p class="text-sm" v-text="$t('experience.presta.desc')" />
          </m-card>
          <hr class="my-4" />
          <h3
            class="text-blue-500 text-2xl font-bold leading-none"
            v-text="$t('education.title')"
          />
          <div class="card my-8">
            <m-card
              :title="$t('education.fon.title')"
              :date="$t('education.fon.duration')"
            />
          </div>
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
import MAddress from "~/components/UI/MAddress.vue";
export default {
  components: {
    MSidebar,
    MCard,
    MAddress
  }
};
</script>

<style></style>
