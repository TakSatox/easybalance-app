import { defineStore, createPinia, setActivePinia } from "pinia";
export const piniaInstance = createPinia()

export default { store: setActivePinia(piniaInstance) }


export const useUserStore = defineStore('user',{
    state: () => {
        return {
            name: '' as string,
            picture: '' as string,
        }
    },

    actions: {
        updateUser(name: string, picture: string) {
            this.name = name,
            this.picture = picture
        }
    },
})
