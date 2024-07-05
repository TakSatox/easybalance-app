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

            <img id="tree" :src="InvestingTree" />
        </div>

        

        
        <DashboardChart />
        
    </main>
</template>


<script setup>
import MoneyCard from '@/components/MoneyCard.vue';
import DashboardChart from '@/components/DashboardChart.vue'

import InvestingTree from '@/assets/home/dashboard/investing-tree.png'

import { ref } from 'vue';

const mainCards = ref([
    {
        imgFilename: "balance.png",
        title: "Saldo",
        value: "6599.90"
    },
    {
        imgFilename: "income.png",
        title: "Receitas",
        value: "6999.90"
    },
    {
        imgFilename: "expense.png",
        title: "Despesas",
        value: "6999.90"
    },
]) 


const rightCards =  ref([
    {
        imgFilename: "income.png",
        title: "Janeiro",
        value: "6000.00"
    },
    {
        imgFilename: "income.png",
        title: "Fevereiro",
        value: "6000.00"
    },
    {
        imgFilename: "income.png",
        title: "Março",
        value: "6000.00"
    }
])

</script>


<style>
/* Top cards */
.home .main-card {
    display: flex;
    flex-direction: row;
    margin-left: 350px;
    margin-top: 110px;
    width: 1180px;
}

.home .main-card .money-card {
    display: flex;
    margin-right: 20px;
    background-color: #FFF;
    border-color: #DDDDDD;
    border-width: 1px;
    border-style: solid;
    border-radius: 10px;
    padding: 50px;
}

.home .main-card .money-card .text {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-left: 20px;
    font-weight: bold;
}

.home .main-card .money-card .text #title {
    color: #00173393;
    font-size: 20px;
}

.home .main-card .money-card .text #value {
    color: #25282C;
    font-size: 30px;
}


.home .main-card img {
    width: 80px;
}

/* Right cards */
.home .rigth-card {
    display: flex;
    flex-direction: column;
    margin-left: 1530px;
    margin-top: -180px;
}

.home .rigth-card .money-card {
    display: flex;
    flex-direction: row;
    background-color: #FFF;
    width: 230px;
    border: 1px solid #DDDDDD;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 40px;
    padding-top: 35px;
    padding-bottom: 35px;
}

.home .rigth-card img {
    width: 60px;
}

.home .rigth-card .money-card .text {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-left: 20px;
    font-weight: bold;
}

.home .rigth-card .money-card .text #title {
    color: #00173393;
    font-size: 20px;
}

.home .rigth-card .money-card .text #value {
    color: #25282C;
    font-size: 20px;
}


.home .rigth-card #tree {
    width: 310px;
    height: 310px;
}

</style>