<template>
    <main class="home">
        
        <SideBarComponent></SideBarComponent>

        <HomeWelcome id="component" v-if="isRoot"/>
        <router-view></router-view>
        
    </main>
</template>


<script setup>
import '@/css/sidebar.css'

import { useRoute } from 'vue-router';
import { computed } from 'vue';

import SideBarComponent from '@/components/SidebarComponent.vue'
import HomeWelcome from '@/components/HomeWelcome.vue'


const route = useRoute()

const isRoot = computed(() => route.path === '/')

</script>

<style>
.home #component {
    margin: auto;
    margin-top: 400px;
}
</style>