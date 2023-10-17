import { defineStore } from "pinia";

export const useBeersStore = defineStore("beers", {
  state: () => ({
    beers: ["pepepep", "estrella galicia", "mahou", "alhambra"],
  }),
});
