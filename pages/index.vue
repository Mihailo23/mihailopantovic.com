<template>
  <div class="container px-2 sm:px-0 pt-32">
    <hr class="my-4" />
    <div class="flex flex-wrap justify-between">
      <div class="my-4">
        <h1 class="text-blue-500 text-6xl font-bold leading-none">
          Mihailo Pantovic
        </h1>
        <h2>Front-End Developer</h2>
      </div>
      <Address />
    </div>
    <div class="flex flex-wrap -mx-2">
      <div class="w-full sm:w-2/3 px-2">
        <main>
          <hr class="my-4" />
          <h3 class="text-blue-500 text-2xl font-bold leading-none">
            EXPERIENCE
          </h3>

          <Card
            title="Helbiz - Lead Front-End Web Developer"
            link="https://helbiz.com"
            date="OCTOBER 2019 - PRESENT"
          >
            <p class="text-sm">Micromobility Startup</p>
          </Card>

          <Card
            title="YAMBA S.a.r.l., Luxembourg — Lead Front-End Web Developer"
            link="https://yamba.com"
            date="DECEMBER 2016 - OCTOBER 2019"
          >
            <p class="text-sm">
              Social Network Startup
            </p>
          </Card>
          <Card
            title="Presta D.O.O., Belgrade— Front-End Web Developer"
            link="https://wearepresta.com"
            date="SEPTEMBER 2013 - DECEMBER 2016"
          >
            <p class="text-sm">
              Working in a big team (15 people), with lots of projects, mostly
              front-endand wordpress integration
            </p>
          </Card>
          <hr class="my-4" />
          <h3 class="text-blue-500 text-2xl font-bold leading-none">
            EDUCATION
          </h3>
          <div class="card my-8">
            <Card
              title="Faculty of Organizational Sciences, Belgrade — BSC Computer Science"
              date="OCTOBER 2007 - JUNE 2013"
            />
          </div>
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
import Address from "~/components/UI/Address.vue";
export default {
  components: {
    Sidebar,
    Card,
    Address
  }
};
</script>

<style></style>
