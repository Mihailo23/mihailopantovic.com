<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import TechSection from "./components/TechSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
</script>

<template>
  <NavBar />
  <main class="container">
    <HeroSection />
    <ExperienceSection />
    <TechSection />
    <ProjectsSection />
  </main>
</template>
