import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHeaderStore = defineStore('header', () => {
    let menuToggle = ref(true);
    let menuClass = ref(false);

    return { menuToggle, menuClass }
})