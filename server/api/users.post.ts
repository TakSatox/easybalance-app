import api from "@/server/api"

export default defineEventHandler(async (event) => {
    
    const body = await readBody(event)

    if (body.email === undefined || body.name === undefined) {
        throw new Error('Email or name is undefined')
    }

    const user = await addUser(body.name as string, body.email as string)

    return user.data
    
})

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