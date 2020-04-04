<template>
  <div class="container px-2 sm:px-0">
    <div class="my-4">
      <h1 class="text-blue-500 text-6xl font-bold leading-none">
        Projects
      </h1>
    </div>
    <div class="flex flex-wrap -mx-2">
      <div class="w-full sm:w-2/3 px-2">
        <main>
          <m-card
            title="dev9t.com— website for a Belgrade festival"
            link="http://dev9t.com"
          >
          </m-card>

          <m-card
            title="osbrankopesic.edu.rs — website for a school in Belgrade"
            link="https://osbrankopesic.edu.rs"
          >
          </m-card>

          <m-card
            title="asteria-led.com — website for Croatian LED company"
            link="http://asteria-led.com"
          >
          </m-card>

          <m-card
            title="asteria-adventures.com — website for Croatian ATV company"
            link="http://asteria-adventures.com"
          >
          </m-card>
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
