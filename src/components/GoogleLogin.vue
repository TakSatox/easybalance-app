<template>
      <div class="login-welcome">
        <h1 id="login-app-name">EasyBalance</h1>
        <p id="login-welcome-message">Controle sua vida financeira pessoal facilmente com o EasyBalance</p>
      </div>

      <div class="g-login">
        <p id="g-login-message">Entre com sua conta Google</p>
        <div id="g-login-button">
          <GoogleLogin :callback="callback"/>
        </div>
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

.login-welcome {
    color:white;
    margin-left: 100px;
    margin-top: 180px;
    margin-bottom: 100px;
}

#login-app-name {
    font-size: 100px;
    margin-bottom: 30px;
}

#login-welcome-message {
    font-size: 30px;
    margin-top: auto;
}

#g-login-message {
  margin-bottom: 50px;
  font-size: 40px;
  font-weight: 700;
  font-style: normal;
}

.g-login {
  color: white;
  text-align: center;
}

#g-login-button {
  transform: scale(2);
}

</style>
  

