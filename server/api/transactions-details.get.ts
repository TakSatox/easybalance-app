import api from "@/server/api"
import { useUserStore } from "@/stores/user";

const user = useUserStore()


export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const details = await fetchUserTransactionsDetails(user.id as number, query.month as number, query.year as number, query.paid as boolean)

    return details.data
})


const fetchUserTransactionsDetails = (
    id: number,
    month: number,
    year: number,
    paid: boolean
) => {
    return api.get(
        `/users/${id}/transactions/details?month=${month}&year=${year}&paid=${paid}`,
    ).then((response) => {
        return response
    }).catch((error) => {
        console.error("Error fetching user transactions details", error)
        throw error
    })
}