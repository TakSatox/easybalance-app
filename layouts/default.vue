<template>
    <main class="home">
        <LeftSidebar />

        <div class="dropdown-container">
            <div id="dropdown" v-if="!isRecordTransaction && !isRoot">
                <DateDropdownButton :title="allMonths[month]" :options="months"></DateDropdownButton>
                <DateDropdownButton :title="year.toString()" :options="years"></DateDropdownButton>
            </div>
        </div>

        <div class="content">
            <slot />
        </div>
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
body {
    background-image: url('@/assets/home/bg-home-desktop.png');
    background-size: cover;
}

.home {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    position: relative;
}

.home .content {
    flex: 1;
    display: flex;
    justify-content: center; 
    padding: 20px; 
    box-sizing: border-box; 
    margin-top: 50px;
}

.dropdown-container {
    display: flex;
    justify-content: center; 
    width: calc(100% - 250px); 
    position: absolute;
    top: 20px; 
    left: 250px;
}

#dropdown {
    display: flex;
    flex-direction: row;
    user-select: none;
}

#dropdown .item {
    display: flex;
    flex-direction: row;
    background-color: #FFF;
    padding: 10px;
    height: 40px;
    width: 300px;
    border-radius: 20px;
    margin-left: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: #DDDDDD;
    cursor: pointer;
    color: #00173393;
}

#dropdown .item:hover {
    color: #5F43F4;
}

#dropdown .item #title {
    margin: auto;
    font-size: 20px;
    font-weight: bold;
}

#dropdown .item .arrow {
    align-self: center;
}

#dropdown ul {
    font-size: 20px;
    list-style-type: none;
    background-color: #FFF;
    padding: 10px;
    width: 300px;
    margin-top: 6px;
    margin-left: 20px;
    position: fixed;
    height: 200px;
    overflow-y: auto;
    border-radius: 10px;
    border: 1px solid #DDDDDD;
}

#dropdown li {
    font-weight: bold;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    color: #00173393;
    cursor: pointer;
    border-radius: 10px;
}

#dropdown li:hover {
    color: #5F43F4;
    box-shadow: 0px 4px 8px rgba(95, 67, 244, 0.2);
}

#dropdown ul::-webkit-scrollbar {
    width: 10px;
}

#dropdown ul::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

#dropdown ul::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}

#dropdown ul::-webkit-scrollbar-thumb:active {
    background: #555; 
}
</style>
