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
      class="p-2 m-8 border w-80 rounded-md mb-4"
    />
    <ul
      role="list"
      class="
        grid grid-cols-1
        gap-x-4 gap-y-8
        sm:grid-cols-3 sm:gap-x-6
        lg:grid-cols-4
        xl:grid-cols-5 xl:gap-x-8
        p-8
      "
    >
      <BeerItem
        v-for="(beer, idx) in storeBeers.getBeers"
        :key="idx"
        :beer="beer"
      />
    </ul>
  </div>
</template>

<style scoped></style>
