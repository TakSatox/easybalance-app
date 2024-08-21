import api from "@/server/api"

export default defineEventHandler(async (event) => {
    
    const query = getQuery(event)

    if (query.email === undefined) {
        throw new Error('Email is undefined')
    }

    const user = await fetchUser(query.email as string)

    return user.data
    
})


const fetchUser = (email: string) => {
    return api.get(
        `/users/${email}`,
    ).then((response) => {
        return response
    }).catch((error) => {
        console.error("Error fetching user", error)
        throw error
    })
}