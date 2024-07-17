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
.welcome {
    display: flex;
    flex-direction: column;
    color:white;
    margin-left: 100px;
    margin-top: 100px;
    margin-bottom: 100px;
}

.welcome #app-name {
    text-align: left;
    font-size: 100px;
    margin-bottom: 30px;
}

.welcome #message {
    font-size: 30px;
    margin-top: auto;
}

.login {
    color: white;
    text-align: center;
}

.login #message {
  margin-bottom: 50px;
  font-size: 40px;
  font-weight: 700;
  font-style: normal;
}

.login #g-button {
  transform: scale(1.5);
}
</style>
  

