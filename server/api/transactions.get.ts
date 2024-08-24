import api from "@/server/api"
import { useUserStore } from "@/stores/user";
import { piniaInstance } from "@/stores/user";

const user = useUserStore(piniaInstance)


export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const transactions = await fetchTransactions(query.id as number)

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