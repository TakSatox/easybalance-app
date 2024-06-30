<template>
    <main class="home">
        <SideBarComponent></SideBarComponent>

        <div class="date">
            <DropdownButton title="Dezembro"></DropdownButton>
            <DropdownButton title="2024"></DropdownButton>
        </div>

        <HomeWelcome v-if="isRoot"/>
        <router-view></router-view>
        
    </main>
</template>


<script setup>
import '@/css/sidebar.css'

import { useRoute } from 'vue-router';
import { computed } from 'vue';

import SideBarComponent from '@/components/SidebarComponent.vue'
import HomeWelcome from '@/components/HomeWelcome.vue'
import DropdownButton from '@/components/DropdownButton.vue';


const route = useRoute()

const isRoot = computed(() => route.path === '/')

</script>

<style>

</style>