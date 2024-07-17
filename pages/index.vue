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
const store = useUserStore(piniaInstance);


</script>

<style>
.home .welcome-component {
    margin-top: 300px;
    margin-left: 250px;
    text-align: center;
}

.home .welcome-component img {
    width: 130px;
    border-radius: 50%;
    user-select: none;
}

.home .welcome-component h1 {
    color: #25282C;
}

.home .credits {
    display: flex;
    flex-direction: column;
    margin-top: 370px;
    font-weight: bold;
    text-align: center;
    color: #25282C;
}

.home .credits :hover {
    color: #5F43F4;
}

.home .credits a {
    text-decoration: none;
    margin-bottom: 10px;
}

.home .credits a:visited {
    color: inherit;
}
</style>