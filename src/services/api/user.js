import api from "@/services/api"

const fetchUserProfile = (token) => {
    return api.get(
        '/user/profile',
        {
            headers: { 
                'Authorization': `${token}`
            }
        }
    ).then((response) => {
        return response
    }).catch((error) => {
        console.error("Erro fetching user profile", error)
        throw error
    })
}


export { fetchUserProfile }