import api from "@/server/api"
import { useUserStore } from "@/stores/user";

const user = useUserStore()

export default defineEventHandler(async (event) => {
    const periods = await fetchPeriods(user.id as number)

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