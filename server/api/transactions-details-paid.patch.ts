import api from "@/server/api"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const query = getQuery(event)

    const user = await patchIsPaid(query.id as number, body.isPaid as boolean)

    return user.data
})

const patchIsPaid = (id: number, isPaid: boolean) => {
    return api.patch(
        `/transactions/details/${id}/paid`,
        {
            isPaid: isPaid
        }
    ).then((response) => {
        return response
    }).catch((error) => {
        console.error("Error adding user", error)
        throw error
    })
}