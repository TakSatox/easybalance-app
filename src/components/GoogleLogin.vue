<template>
      <div class="welcome">
        <h1 id="app-name">EasyBalance</h1>
        <p id="message">Controle sua vida financeira pessoal facilmente com o EasyBalance</p>
      </div>

      <div class="login">
        <p id="message">Entre com sua conta Google</p>
        <GoogleLogin id="g-button" :callback="callback"/>
      </div>
</template>


<script setup>
import { onMounted } from "vue"
import { googleOneTap } from "vue3-google-login"
import { setIdTokenCookie } from '@/services/auth'

onMounted(() => {
  googleOneTap({ autoLogin: true })
    .then((response) => {
      setIdTokenCookie(response);
    })
    .catch((error) => {
      console.error("Failed to login sign in with one tap", error)
    })
})

const callback = (response) => {
  setIdTokenCookie(response);
}
</script>


<style>

</style>
  

