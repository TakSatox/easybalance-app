<template>
    <main class="welcome-component">
        <img :src="store.picture" />
        <h1>Seja bem vindo, {{ store.name }}!</h1>
    </main>
</template>


<script setup>
import { useUserStore } from "@/stores/user";
const store = useUserStore();


</script>

<style>
.home .welcome-component {
    margin-top: 300px;
    text-align: center;
}

.home .welcome-component img {
    width: 200px;
    border-radius: 50%;
}

</style>