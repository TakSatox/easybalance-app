import { fetchUserProfile } from '@/services/api/user'
import Cookies from "js-cookie"
import { useUserStore } from '@/stores/user'

const store = useUserStore()

const isAuthenticated = async () => {
    const token = Cookies.get('id_token')

    try {
        const response = await fetchUserProfile(token)

        store.$patch({
            name: response.data.name,
            picture: response.data.picture
        })

        return true
    } catch (error) {
        return false
    }

}

const setIdTokenCookie = (response) => {
    if(response) {
        Cookies.set('id_token', response.credential)
        location.reload()
    }
}

const deleteIdTokenCookie = () => {
    Cookies.remove('id_token')
    location.reload()
}

export { isAuthenticated, setIdTokenCookie, deleteIdTokenCookie }