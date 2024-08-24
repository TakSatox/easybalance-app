import api from "@/server/api"
import { useUserStore } from "@/stores/user";
import { piniaInstance } from "@/stores/user";

const user = useUserStore(piniaInstance)

export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const periods = await fetchPeriods(query.id as number as number)

    return periods.data
})

const fetchPeriods = (id: number) => {
    return api.get(
        `/users/${id}/transactions/details/periods`,
    ).then((response) => {
        return response
    }).catch((error) => {
        console.error("Error fetching user transactions details periods", error)
        throw error
    })
}