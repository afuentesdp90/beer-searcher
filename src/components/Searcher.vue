<script setup>
import { useBeersStore } from "../stores/beers.js";
import { storeToRefs } from "pinia";

const storeBeers = useBeersStore();
const { beers } = storeToRefs(storeBeers);
</script>

<template>
  <p class="bg-red-500">{{ beers }}</p>
</template>

<style scoped></style>
