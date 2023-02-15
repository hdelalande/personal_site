import {defineStore} from "pinia";

export const useMainStore = defineStore("mainStore", () => {
    const currentPage = ref('home');
});