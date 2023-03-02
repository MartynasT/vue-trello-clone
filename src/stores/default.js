import { defineStore } from "pinia";

export const useDefaultStore = defineStore("default", {
  state: () => ({
    message: "Vue + Vite + Pinia + Tailwind",
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});
