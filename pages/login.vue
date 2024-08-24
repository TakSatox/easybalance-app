<template>
    <Login />

    <div class="linkedin">
        <a href="https://www.linkedin.com/in/carlostak/" target="_blank"><img src="../assets/login/linkedin-carlos-sato.png"></a>
        <a href="https://www.linkedin.com/in/joão-lucas-a460b421b/" target="_blank"><img src="../assets/login/linkedin-joao-lucas.png"></a>
        <a href="https://www.linkedin.com/in/ricardo-porfírio-vieira/" target="_blank"><img src="../assets/login/linkedin-ricardo-porfirio.png"></a>
    </div>
</template>

<script setup>
import Login from '../components/Login.vue'

definePageMeta({
  layout: 'login'
})
</script>

<style>
.linkedin {
    display: flex;
    justify-content: space-around;
    margin-top: 280px;
}
</style>

