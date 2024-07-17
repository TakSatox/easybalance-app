<script setup lang="ts">

import { GoogleSignInButton, type CredentialResponse } from "vue3-google-signin";


const handleLoginSuccess = async (response: CredentialResponse) => {
  const { credential } = response;

  // credential is the access token
  if (credential) {
    const tokenCookie = useCookie('idToken');
    tokenCookie.value = credential;
    location.reload();
  }

};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};

</script>


<template>
      <div class="login-welcome">
        <h1 id="login-app-name">EasyBalance</h1>
        <p id="login-welcome-message">Controle sua vida financeira pessoal facilmente com o EasyBalance</p>
      </div>

      <div class="g-login">
        <p id="g-login-message">Entre com sua conta Google</p>
        <div>
          <GoogleSignInButton id="g-login-button"
            @success="handleLoginSuccess"
            @error="handleLoginError"
            shape="pill"
            text="continue_with"
          ></GoogleSignInButton>
        </div>
      </div>
</template>


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
  

