<script setup>
import { useUserStore } from "@/stores/user";

const store = useUserStore();

document.body.className = 'home'

</script>


<template>
    <main>  
        <img :src="store.picture" />
        <h1 class="animate__fadeInUp">Olá {{ store.name }}</h1>
    </main>
</template>


<style>
</style>