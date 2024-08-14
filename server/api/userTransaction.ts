import api from "@/server/api"

const fetchUserTransactions = (id: number) => {
    return api.get(
        `/users/${id}/transactions`,
    ).then((response) => {
        return response
    }).catch((error) => {
        console.error("Error fetching user transactions", error)
        throw error
    })
}

const addUserTransaction = (
    id: number,
    title: string,
    description: string,
    paymentMethod: string,
    type: string,
    initialDate: string,
    endDate: string,
    totalInstallment: number,
    value: number,
    categoryId: number
) => {
    return api.post(
        `/users/${id}/transactions`,
        {
            title: title,
            description: description,
            paymentMethod: paymentMethod,
            type: type,
            initialDate: initialDate,
            endDate: endDate,
            totalInstallment: totalInstallment,
            value: value,
            categoryId: categoryId
        }
    ).then((response) => {
        return response
    }).catch((error) => {
        console.error("Error adding user transaction", error)
        throw error
    })
}

export { fetchUserTransactions, addUserTransaction }