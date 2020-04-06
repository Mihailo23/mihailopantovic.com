<template>
  <address class="my-4 sm:text-right not-italic">
    <p class="text-gray-700">Branka Momirova 10b</p>
    <p
      class="text-gray-700"
      v-text="`${$t('info.city')}, ${$t('info.country')}`"
    />
    <p class="text-blue-500">
      <a href="mailto:pantovic.mihailo@gmail.com">
        pantovic.mihailo@gmail.com
      </a>
    </p>
    <p class="text-gray-600">
      <a href="tel:+381642889346">(+381) 64/2889-346</a>
    </p>
  </address>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
