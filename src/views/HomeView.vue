<template>
    <main class="home">
        <LeftSidebar />

        <HomeWelcome v-if="isRoot"/>

        <div class="date" v-else>
            <DropdownButton :title="allMonths[month]" :options="months"></DropdownButton>
            <DropdownButton :title="year" :options="years"></DropdownButton>
        </div>
        
        <router-view></router-view>

    </main>
    
</template>


<script setup>
import '@/css/sidebar.css'
import '@/css/home.css'

import { useRoute } from 'vue-router';
import { computed } from 'vue';


import LeftSidebar from '@/components/LeftSidebar.vue'
import HomeWelcome from '@/components/HomeWelcome.vue'
import DropdownButton from '@/components/DropdownButton.vue'


const route = useRoute()

const isRoot = computed(() => route.path === '/')


const date = new Date()

date.setMonth(date.getMonth() + 1)

const year = date.getFullYear()
const month = date.getMonth()

const years = [
    "2024",
    "2025",
    "2026"
]

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

</style>