import api from "@/server/api"
import { useUserStore } from "@/stores/user";

const user = useUserStore()


export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    const transaction = await addTransaction(
        user.id as number,
        body.title,
        body.description,
        body.paymentMethod,
        body.type,
        body.initialDate,
        body.endDate,
        body.totalInstallment,
        body.value,
        body.categoryId
    )

    return transaction.data
    
})

const addTransaction = (
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
