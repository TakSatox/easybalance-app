<template>
    <main class="home-record-transaction">
        <div class="category">
            <CategoryDropDownButton 
            :title="selectedMainCategory.name" 
            drop-size="small" 
            :img-file-name="selectedMainCategory.imgFileName" 
            :options="mainCategories.filter(mc => mc.id !== selectedMainCategory.id)" 
            @valueSelected="updateMainSelectedCategory"
            />

            <CategoryDropDownButton 
            :title="selectedCategory.name" 
            :drop-size="selectedMainCategory.id === 'income' ? 'small' : 'large'" 
            :img-file-name="selectedCategory.imgFileName" 
            :options="filteredCategories.filter(c => c.id !== selectedCategory.id)" 
            @valueSelected="updateSelectedCategory"
            />
        </div>


        <form>
            <div class="label-box">
                <label class="label" for="name" id="name">Nome</label>
                <input class="box" type="string" name="name" required>
            </div>

            <div class="lower-boxes">
                <div class="left">
                    <div class="label-box">
                        <label class="label" for="description">Descrição (opcional)</label>
                        <input class="box" id="description" type="text" name="description" required>
                    </div>

                    <div class="label-box">
                        <label class="label" for="date">Data inicial</label>
                        <input class="box date" type="month" name="date" required>
                    </div>

                    <div class="label-box">
                        <label class="label" for="end-date">Data final (opcional)</label>
                        <input class="box date" type="month" name="end-date" required>
                    </div>

                </div>

                <div class="right">
                    <div class="label-box">
                        <label class="label" for="value">Valor total (R$)</label>
                        <input class="box" id="value" type="number" name="value" required>
                    </div>

                    <div class="label-box">
                        <span class="label" >Parcelamento</span>
                        <DropdownButton class="box dropdown" id="installment" :title="selectedInstallment" :options="installmentDropDown" />
                    </div>

                    <div class="label-box" v-if="isPaymentMethodEnabled">
                        <label class="label" for="payment-method">Forma de Pagamento</label>
                        <DropdownButton class="box dropdown" :title="selectedPaymentMethod" :options="paymentMethodDropDown" />
                    </div>
                </div>
            </div>
        </form>

        <button id="save">Salvar</button>

    </main>
</template>


<script setup>
import CategoryDropDownButton from '@/components/CategoryDropDownButton.vue'
import DropdownButton from '@/components/DropdownButton.vue';

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


const selectedInstallment = ref('1x')
const selectedPaymentMethod = ref('Cartão de Crédito')

const isPaymentMethodEnabled = ref(true)

const installmentDropDown = ref([
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
    '11x',
    '12x'
])

const paymentMethodDropDown = ref([
    'Cartão de Crédito',
    'Cartão de Débito',
    'Dinheiro'
])


// TODO comes from API
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
    isPaymentMethodEnabled.value = true

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
        isPaymentMethodEnabled.value = false
    }
}

function updateSelectedCategory(value) {
    selectedCategory.value = value
}

// Mapping the main categories inserting portuguese name and image file name
const mainCategories = computed(() => {
    const category = categories.map(category => category.mainCategory)
    
    return category.map(categoryName => {
        let id, name, imgFileName
        switch (categoryName) {
            case 'expense':
                name = 'Despesa'
                imgFileName = 'expense.png'
                break
            case 'income':
                name = 'Renda'
                imgFileName = 'income.png'
                break
        }
        id = categoryName
        return { id, name, imgFileName }
    })
})

// Mapping the categories inserting portuguese name and image file name
const filteredCategories = computed(() => {
    const category = categories.find(c => c.mainCategory === selectedMainCategory.value.id)
    return category ? category.categories.map(categoryName => {
        let id, name, imgFileName
        switch (categoryName) {
            case 'recurring-bill':
                name = 'Assinatura'
                imgFileName = 'recurring-bill.png'
                break
            case 'food':
                name = 'Comida'
                imgFileName = 'food.png'
                break
            case 'entertainment':
                name = 'Entretenimento'
                imgFileName = 'entertainment.png'
                break
            case 'investment':
                name = 'Investimento'
                imgFileName = 'investment.png'
                break
            case 'health':
                name = 'Saúde'
                imgFileName = 'health.png'
                break
            case 'transport':
                name = 'Transporte'
                imgFileName = 'transport.png'
                break
            case 'vacation':
                name = 'Viagem'
                imgFileName = 'vacation.png'
                break
            case 'bonus':
                name = 'Gratificação'
                imgFileName = 'bonus.png'
                break
            case 'fixed-income':
                name = 'Renda Fixa'
                imgFileName = 'fixed-income.png'
                break
            case 'others':
                name = 'Outros'
                imgFileName = 'others.png'
                break
            default:
                console.error('Category sent by API is not mapped')
        }
        id = categoryName
        return { id, name, imgFileName }
    }) : []
})


</script>


<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.home-record-transaction {
    display: flex;
    flex-direction: column;
}

.home-record-transaction form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 110px;
    width: 1200px;
    height: 600px;
    margin-left: 450px;
    z-index: 0;
}

.home-record-transaction form .box {
    border-radius: 10px;
    border: 1px solid #DDDDDD;
    width: 550px;
    padding: 25px;
    font-size: 20px;
    text-align: center;
}

.home-record-transaction .label-box {
    display: flex;
    flex-direction: column;
}

.home-record-transaction form .lower-boxes {
    display: flex;
    margin-top: 50px
}

.home-record-transaction form .lower-boxes div {
    margin-bottom: 50px;
}

.home-record-transaction form .label-box:hover {
    color: #735df0;
    cursor: pointer;
}


.home-record-transaction form .lower-boxes .left {
    font-display: flex;
    flex-direction: column;
    margin-left: 20px;
}

.home-record-transaction form .lower-boxes .right {
    font-display: flex;
    flex-direction: column;
    margin-left: 50px;
}

.home-record-transaction form .label {
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
}

.home-record-transaction #save {
    background-color: #735df0;
    color: #FFF;
    font-weight: bold;
    font-size: 20px;
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 50px;
    margin-left: 800px;
    width: 500px;
    padding: 18px;
    border-radius: 30px;
    cursor: pointer;
}


.home-record-transaction .lower-boxes .right .label-box .dropdown {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 25px;
    user-select: none;
    background-color: #FFF;
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    border-color: #DDDDDD;
    cursor: pointer;
    color: #00173393;
}

.home-record-transaction .lower-boxes .right .label-box .dropdown .item {
    display: flex;
    flex-direction: row;
    padding: 25px;
    padding-left: 260px;
    padding-right: 260px;
    margin-top: 25px;
    margin-bottom: 25px;
}

.home-record-transaction .lower-boxes .right .label-box .dropdown .item:hover {
    cursor: pointer;
}

.home-record-transaction .lower-boxes .right .label-box .dropdown .item #title {
    text-align: center;
    white-space: nowrap;
    font-size: 20px;
    font-weight: bold;
}


.home-record-transaction .lower-boxes .right .label-box .dropdown ul {
    font-size: 20px;
    list-style-type: none;
    background-color: #FFF;
    padding: 10px;
    width: 300px;
    margin-top: 245px;
    position: fixed;
    width: 580px;
    height: 120px;
    overflow-y: auto;
    border-radius: 10px;
    border: 1px solid #DDDDDD;
    
}

.home-record-transaction .lower-boxes .right .label-box .dropdown li {
    font-weight: bold;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    color: #00173393;
    cursor: pointer;
    border-radius: 10px;
}

.home-record-transaction .lower-boxes .right .label-box .dropdown li:hover {
    color: #5F43F4;
    box-shadow: 0px 4px 8px rgba(95, 67, 244, 0.2);
}

.home-record-transaction .lower-boxes .right .label-box .dropdown ul::-webkit-scrollbar {
    width: 10px;
}


.home-record-transaction .lower-boxes .right .label-box .dropdown ul::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}


.home-record-transaction .lower-boxes .right .label-box .dropdown ul::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}


.home-record-transaction .lower-boxes .right .label-box .dropdown ul::-webkit-scrollbar-thumb:active {
    background: #555; 
}

</style>