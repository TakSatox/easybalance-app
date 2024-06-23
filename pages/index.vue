<script setup lang="ts">
import { useUserStore } from "~/stores/user";
import { piniaInstance } from "~/stores/user"; 

const store = useUserStore(piniaInstance);

</script>
<template>
    <img :src="store.picture" />
    <h1>Olá {{ store.name }}</h1>
</template>


<style>
body {
    background-image: none;
    background-color: #EEF4F7;
}
</style>