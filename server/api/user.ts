import api from "@/server/api"

const fetchUser = (email: string, token: string) => {
    return api.get(
        `/users/${email}`,
        {
            headers: { 
                'Authorization': `${token}`
            }
        }
    ).then((response) => {
        return response
    }).catch((error) => {
        console.error("Error fetching user", error)
        throw error
    })
}

const addUser = (name: string, email: string) => {
    return api.post(
        `/users`,
        {
            name: name,
            email: email
        }
    ).then((response) => {
        return response
    }).catch((error) => {
        console.error("Error adding user", error)
        throw error
    })
}


export { fetchUser, addUser }