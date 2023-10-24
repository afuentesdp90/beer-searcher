import { defineStore } from "pinia";

export const useBeersStore = defineStore("beers", {
  state: () => ({
    beers: [],
  }),
  getters: {
    getBeers() {
      return this.beers;
    },
  },
  actions: {
    async fetchBeers(search = "") {
      try {
        const beersByName = await fetch(
          `https://api.punkapi.com/v2/beers?&beer_name=${search}`
        ).then((res) => res.json());

        const beersByFood = await fetch(
          `https://api.punkapi.com/v2/beers?&food=${search}`
        ).then((res) => res.json());

        this.beers = [...beersByName, ...beersByFood];
      } catch (error) {
        console.log(error);
      }
    },
  },
});
