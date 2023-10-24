<script setup>
import { useBeersStore } from "../stores/beers.js";
import { storeToRefs } from "pinia";
import BeerItem from "./BeerItem.vue";
import { ref } from "vue";

const storeBeers = useBeersStore();
const { beers } = storeToRefs(storeBeers);

const searchTerm = ref("");

const searchBeers = () => {
  if (!searchTerm.value) return storeBeers.$patch({ beers: [] });
  storeBeers.fetchBeers(searchTerm.value);
};
</script>

<template>
  <div>
    <input
      v-model="searchTerm"
      @input="searchBeers"
      placeholder="Buscar cervezas por nombre o alimentos"
      class="p-2 border rounded-md w-full mb-4"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <BeerItem
        v-for="(beer, idx) in storeBeers.getBeers"
        :key="idx"
        :beer="beer"
      />
    </div>
  </div>
</template>

<style scoped></style>
