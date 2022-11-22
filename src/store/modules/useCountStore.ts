
import { defineStore } from 'pinia'
import { ref } from 'vue';
export const useCountStore = defineStore('main', () => {
    let count = ref(0)
    function add(){
        count.value++;
    }
    return { count, add }
})