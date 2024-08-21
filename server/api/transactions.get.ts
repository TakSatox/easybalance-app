import api from "@/server/api"
import { useUserStore } from "@/stores/user";

const user = useUserStore()


export default defineEventHandler(async (event) => {

    const transactions = await fetchTransactions(user.id as number)

    return transactions.data
    
})

const fetchTransactions = (id: number) => {
    return api.get(
        `/users/${id}/transactions`,
    ).then((response) => {
        return response
    }).catch((error) => {
        console.error("Error fetching user transactions", error)
        throw error
    })
}