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
          <Card
            title="dev9t.com— website for a Belgrade festival"
            link="http://dev9t.com"
          >
          </Card>

          <Card
            title="osbrankopesic.edu.rs — website for a school in Belgrade"
            link="https://osbrankopesic.edu.rs"
          >
          </Card>

          <Card
            title="asteria-led.com — website for Croatian LED company"
            link="http://asteria-led.com"
          >
          </Card>

          <Card
            title="asteria-adventures.com — website for Croatian ATV company"
            link="http://asteria-adventures.com"
          >
          </Card>
        </main>
      </div>
      <div class="w-full sm:w-1/3 px-2">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";
import Card from "~/components/UI/Card.vue";
export default {
  components: {
    Sidebar,
    Card
  }
};
</script>

<style lang="scss" scoped></style>
