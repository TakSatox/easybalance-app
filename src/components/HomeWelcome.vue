<template>
    <main class="welcome-component">
        <img :src="store.picture" />
        <h1>Seja bem vindo, {{ store.name }}!</h1>

        <div class="credits">
            <a href="https://www.linkedin.com/in/carlostak/" target="_blank">
                <span>Developed by Carlos Takeshi Sato</span>
            </a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-lucas-a460b421b/" target="_blank">
                <span>Design by João Lucas Barbosa Correia de Freitas</span>
            </a>
        </div>
    </main>
</template>


<script setup>
import { useUserStore } from "@/stores/user";
import "@/css/home-welcome.css"
const store = useUserStore();


</script>