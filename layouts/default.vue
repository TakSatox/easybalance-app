<template>
    <main class="home">
        <LeftSidebar />

        <div id="dropdown" v-if="!isRecordTransaction">
            <DateDropdownButton :title="allMonths[month]" :options="months"></DateDropdownButton>
            <DateDropdownButton :title="year.toString()" :options="years"></DateDropdownButton>
        </div>
        
        <slot></slot>

    </main>
    
</template>


<script setup>

import { useRoute } from 'vue-router';
import { computed } from 'vue';


import LeftSidebar from '@/components/LeftSidebar.vue'
import DateDropdownButton from '@/components/DropdownButton.vue'


const route = useRoute()

const isRoot = computed(() => route.path === '/')
const isRecordTransaction = computed(() => route.path === '/record-transactions')


// TODO comes from API
const years = [
    "2024",
    "2025",
    "2026"
]

// TODO comes from API
const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

const date = new Date()
date.setMonth(date.getMonth() + 1)
const year = date.getFullYear()
const month = date.getMonth()
const allMonths = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

</script>

<style>
.home #dropdown {
    display: flex;
    flex-direction: row;
    margin-left: 700px;
    margin-top: 20px;
    width: 900px;
    user-select: none;
}

.home  #dropdown .item {
    display: flex;
    flex-direction: row;
    background-color: #FFF;
    padding: 10px;
    height: 40px;;
    width: 300px;
    border-radius: 20px;
    margin-left: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: #DDDDDD;
    cursor: pointer;
    color: #00173393;
}

.home  #dropdown .item:hover {
    color: #5F43F4;
}

.home  #dropdown .item #title {
    margin: auto;
    font-size: 20px;
    font-weight: bold;
}


.home  #dropdown .item .arrow {
    align-self: center;
}


.home  #dropdown ul {
    font-size: 20px;
    list-style-type: none;
    background-color: #FFF;
    padding: 10px;
    width: 300px;
    margin-top: 6px;
    margin-left: 20px;
    position: fixed;
    width: 300px;
    height: 200px;
    overflow-y: auto;
    border-radius: 10px;
    border: 1px solid #DDDDDD;
    
}

.home  #dropdown li {
    font-weight: bold;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    color: #00173393;
    cursor: pointer;
    border-radius: 10px;
}

.home  #dropdown li:hover {
    color: #5F43F4;
    box-shadow: 0px 4px 8px rgba(95, 67, 244, 0.2);
}

.home  #dropdown ul::-webkit-scrollbar {
    width: 10px;
}


.home  #dropdown ul::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}


.home  #dropdown ul::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}


.home  #dropdown ul::-webkit-scrollbar-thumb:active {
    background: #555; 
}
</style>