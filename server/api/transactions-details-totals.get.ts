import api from "@/server/api"
import { useUserStore } from "@/stores/user";

const user = useUserStore()


export default defineEventHandler(async (event) => {
    
    const query = getQuery(event)

    const totals = await fetchTotals(user.id as number, query.month as number, query.year as number)

    return totals.data
    
})

const fetchTotals = (
    id: number,
    month: number,
    year: number,
) => {
    return api.get(
        `/users/${id}/transactions/details/totals?month=${month}&year=${year}`,
    ).then((response) => {
        return response
    }).catch((error) => {
        console.error("Error fetching user transactions details totals", error)
        throw error
    })
}