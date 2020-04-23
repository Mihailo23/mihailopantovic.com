<template>
  <div class="container px-2 sm:px-0">
    <div class="flex">
      <h1
        class="md:mt-32 my-8 text-brand text-4xl sm:text-5xl font-bold leading-none capitalize"
        v-text="$t(project.name)"
      />
    </div>
    <div class="flex items-center justify-center">
      <m-testimonial v-if="project.testimonial" :project="project" />
    </div>
  </div>
</template>

<script>
import projects from "~/assets/projects.json";
import MTestimonial from "~/components/UI/MTestimonial";
export default {
  components: {
    MTestimonial
  },
  computed: {
    project() {
      return projects[this.$route.params.project];
    }
  }
};
</script>
