import { defineStore, createPinia, setActivePinia } from "pinia";
import { ref } from "vue";

export const piniaInstance = createPinia()

export default { store: setActivePinia(piniaInstance) }

export const useUserStore = defineStore('user', () => {
    const id = ref('')
    const name = ref('')
    const email = ref('')
    const picture = ref('')
    


    return { id, name, email, picture }
  })
