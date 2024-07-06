<template>
    <main class="home-record-transaction">
        <div class="category">
            <CategoryDropDownButton :title="selectedMainCategory.name" :img-file-name="selectedMainCategory.imgFileName" :options="mainCategories" @valueSelected="updateMainSelectedCategory"/>
            <CategoryDropDownButton :title="selectedCategory.name" :img-file-name="selectedCategory.imgFileName" :options="filteredCategories" @valueSelected="updateSelectedCategory"/>
        </div>
    </main>
</template>


<script setup>
import CategoryDropDownButton from '@/components/CategoryDropDownButton.vue'
import { ref, computed } from 'vue'


const selectedMainCategory = ref({
    id: 'expense',
    name: 'Despesa',
    imgFileName: 'expense.png'
})

const selectedCategory = ref({
    id: 'recurring-bill',
    name: 'Assinatura',
    imgFileName: 'recurring-bill.png'
})


const categories = [
    {
        mainCategory: "expense",
        categories: [
            "recurring-bill",
            "food",
            "entertainment",
            "investment",
            "health",
            "transport",
            "vacation",
            "others"
        ]

    },
    {
        mainCategory: "income",
        categories: [
            "bonus",
            "fixed-income",
            "others"
        ]
    }
]


function updateMainSelectedCategory(value) {
    selectedMainCategory.value = value

    if (
        selectedMainCategory.value.id === 'expense' &&
        (selectedCategory.value.id === 'fixed-income' || selectedCategory.value.id === 'bonus')
    ) {
        selectedCategory.value = filteredCategories.value.find(category => category.id === 'recurring-bill')
    }else if (
        selectedMainCategory.value.id === 'income' &&
        !(selectedCategory.value.id === 'fixed-income' || selectedCategory.value.id === 'bonus')
    ){
        selectedCategory.value = filteredCategories.value.find(category => category.id === 'bonus')
    }
}

function updateSelectedCategory(value) {
    selectedCategory.value = value
}

const mainCategories = computed(() => {
    const category = categories.map(category => category.mainCategory)
    
    return category.map(categoryName => {
        let id, name, imgFileName
        switch (categoryName) {
            case 'expense':
                id = 'expense'
                name = 'Despesa'
                imgFileName = 'expense.png'
                break
            case 'income':
                id = 'income'
                name = 'Renda'
                imgFileName = 'income.png'
                break
        }
        return { id, name, imgFileName }
    })
})

const filteredCategories = computed(() => {
    const category = categories.find(c => c.mainCategory === selectedMainCategory.value.id)
    return category ? category.categories.map(categoryName => {
        let id, name, imgFileName
        switch (categoryName) {
            case 'recurring-bill':
                id = 'recurring-bill'
                name = 'Assinatura'
                imgFileName = 'recurring-bill.png'
                break
            case 'food':
                id = 'food'
                name = 'Comida'
                imgFileName = 'food.png'
                break
            case 'entertainment':
                id = 'entertainment'
                name = 'Entretenimento'
                imgFileName = 'entertainment.png'
                break
            case 'investment':
                id = 'investment'
                name = 'Investimento'
                imgFileName = 'investment.png'
                break
            case 'health':
                id = 'health'
                name = 'Saúde'
                imgFileName = 'health.png'
                break
            case 'transport':
                id = 'transport'
                name = 'Transporte'
                imgFileName = 'transport.png'
                break
            case 'vacation':
                id = 'vacation'
                name = 'Viagem'
                imgFileName = 'vacation.png'
                break
            case 'bonus':
                id = 'bonus'
                name = 'Gratificação'
                imgFileName = 'bonus.png'
                break
            case 'fixed-income':
                id = 'fixed-income'
                name = 'Renda Fixa'
                imgFileName = 'fixed-income.png'
                break
            case 'others':
                id = 'others'
                name = 'Outros'
                imgFileName = 'others.png'
                break
        }
        return { id, name, imgFileName }
    }) : []
})

</script>


<style>

</style>