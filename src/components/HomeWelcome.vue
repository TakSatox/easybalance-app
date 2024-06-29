<template>
    <h1>Seja bem vindo, {{ store.name }}!</h1>
</template>


<script setup>
import { useUserStore } from "@/stores/user";
const store = useUserStore();


</script>