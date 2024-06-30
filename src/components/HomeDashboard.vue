<template>
    <main>
        <div class="main-card">
            <MoneyCard v-for="mainCard in mainCards"
            :key="mainCard.id"
            :img-filename="mainCard.imgFilename"
            :title="mainCard.title"
            :value="mainCard.value"
            />
        </div>

        <div class="rigth-card">
            <MoneyCard  
            v-for="rightCard in rightCards" 
            :key="rightCard.id" 
            :img-filename="rightCard.imgFilename"
            :title="rightCard.title"
            :value="rightCard.value" 
            />
        </div>

        <div class="chart">
            <h1>SIM</h1>
        </div>
    </main>
</template>


<script setup>
import '@/css/home-dashboard.css'
import MoneyCard from './MoneyCard.vue';
import { ref } from 'vue';

const mainCards = ref([
    {
        imgFilename: "icon-balance.png",
        title: "Saldo",
        value: "6599.90"
    },
    {
        imgFilename: "icon-income.png",
        title: "Receitas",
        value: "6999.90"
    },
    {
        imgFilename: "icon-expense.png",
        title: "Despesas",
        value: "6999.90"
    },
]) 


const rightCards =  ref([
    {
        imgFilename: "icon-income.png",
        title: "Janeiro",
        value: "6000.00"
    },
    {
        imgFilename: "icon-income.png",
        title: "Fevereiro",
        value: "6000.00"
    },
    {
        imgFilename: "icon-income.png",
        title: "Março",
        value: "6000.00"
    },
    {
        imgFilename: "icon-income.png",
        title: "Abril",
        value: "6000.00"
    },
    {
        imgFilename: "icon-income.png",
        title: "Maio",
        value: "6000.00"
    }
])

</script>