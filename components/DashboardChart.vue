<template>
    <main class="chart">
        <h1>Gastos por categoria</h1>

        <div class="bar-line">
            <ChartBar 
            v-for="bar in bars"
            :key="bar.id"
            :img-file-name="bar.name"
            :bar-size="bar.normalizedHeight + 'px'"
            :value="bar.value"
            />
        </div>

        
    </main>
</template>


<script setup>
import ChartBar from '@/components/ChartBar.vue'
import { calculateBarsHeight } from '~/server/composables/getBarsHeight';

// TODO comes from API
const categories = [
    {
        name: "recurring-bill",
        value: 922
    },
    {
        name: "food",
        value: 800
    },
    {
        name: "entertainment",
        value: 200
    },
    {
        name: "investment",
        value: 500
    },
    {
        name: "others",
        value: 350
    },
    {
        name: "health",
        value: 2020
    },
    {
        name: "transport",
        value: 900
    },
    {
        name: "vacation",
        value: 2000
    }
]

const bars = calculateBarsHeight(categories, 340, 60);


</script>

<style>
.home .chart {
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    height: 500px;
    width: 1110px;
    margin-left: 350px;
    margin-top: -513px;
    border-radius: 10px;
    border: 1px solid #DDDDDD;
}

.home .chart h1 {
    text-align: center;
    margin-top: 30px;
    margin-left: 20px;
    width: 340px;
}

.home .chart .bar-line {
    display: flex;
    margin-top: auto;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
}
</style>