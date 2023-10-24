<script setup>
defineProps({
  beer: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="mx-auto">
    <h2 class="text-xl text-center font-bold">{{ beer.name }}</h2>
    <img :src="beer.image_url" :alt="beer.name" />
  </div>
</template>

<style scoped></style>
