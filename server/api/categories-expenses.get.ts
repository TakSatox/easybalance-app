import api from "@/server/api"
import { useUserStore } from "@/stores/user";

const user = useUserStore()

export default defineEventHandler(async (event) => {
    
    const query = getQuery(event)

    const expenses = await fetchExpenses(user.id as number, query.month as number, query.year as number)

    return expenses.data
    
})

const fetchExpenses = (
    id: number,
    month: number,
    year: number,
) => {
    return api.get(
        `/users/${id}/categories/expenses?month=${month}&year=${year}`,
    ).then((response) => {
        return response
    }).catch((error) => {
        console.error("Error fetching user categories expenses", error)
        throw error
    })
}