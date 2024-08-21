import api from "@/server/api"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const idParam = getRouterParam(event, 'id')

    const id = idParam ? parseInt(idParam, 10) : undefined;

    const user = await patchIsPaid(id as number, body.isPaid as boolean)

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