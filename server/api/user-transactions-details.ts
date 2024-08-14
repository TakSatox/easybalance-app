import api from "@/server/api"

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

const fetchUserTransactionsDetailsTotals = (
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


const fetchUserTransactionsDetailsPeriods = (id: number) => {
    return api.get(
        `/users/${id}/transactions/details/periods`,
    ).then((response) => {
        return response
    }).catch((error) => {
        console.error("Error fetching user transactions details periods", error)
        throw error
    })
}

export { fetchUserTransactionsDetails, fetchUserTransactionsDetailsTotals, fetchUserTransactionsDetailsPeriods }