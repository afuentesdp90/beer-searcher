<script setup>
defineProps({
  beer: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="
      mx-auto
      group
      aspect-h-7 aspect-w-10
      block
      w-full
      overflow-hidden
      rounded-lg
      focus-within:ring-2
      focus-within:ring-indigo-500
      focus-within:ring-offset-2
      focus-within:ring-offset-gray-100
      cursor-pointer
    "
  >
    <img
      :src="beer.image_url"
      :alt="beer.name"
      class="
        mx-auto
        pointer-events-none
        object-cover
        group-hover:opacity-75
        h-80
      "
    />
    <p class="pointer-events-none mt-2 block truncate text-xl font-bold text-center md:text-left">
      {{ beer.name }}
    </p>
    <p class="pointer-events-none block text-sm font-medium text-gray-500 ">
      <ul>
        <li v-for="(food, idx) in beer.food_pairing" :key="idx">
          · {{ food }}
        </li>
      </ul>
    </p>
  </div>
</template>

<style scoped></style>
