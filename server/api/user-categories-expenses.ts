import api from "@/server/api"

const fetchUserCategoriesExpenses = (
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


export { fetchUserCategoriesExpenses }