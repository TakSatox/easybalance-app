import { defineStore, createPinia, setActivePinia } from "pinia";
export const piniaInstance = createPinia()

export default { store: setActivePinia(piniaInstance) }


export const useUserStore = defineStore('user', () => {
    const name = ref('')
    const picture = ref('')

    return { name, picture }
  })
