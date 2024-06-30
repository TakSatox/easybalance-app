<template>

  <div class="bg" :style="{ 'background-image': 'url(' + image + ')' }">
    <router-view v-slot="{ Component }">
      <transition
      v-if="isRoute"
      enter-active-class="animate__animated animate__fadeInUp"
      mode="out-in"
      >
        <component :is="Component" />
      </transition>
      <component :is="Component" />
    </router-view>
  </div>

</template>

<script setup>
import { getBackgroundSize } from './composables/getBackgroundSize';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


let viewportWidth = ref(window.innerWidth);
let viewportHeight = ref(window.innerHeight);

const router = useRouter()
const image = ref("home")
const backgroundSize = ref("");


backgroundSize.value = getBackgroundSize(
  viewportWidth.value,
  viewportHeight.value
);

const isRoute = ref(false)

router.beforeEach(async (to) => {
  if(to.name === 'login') {
    image.value = `src/assets/login/bg-login-${backgroundSize.value}.png`
    isRoute.value = true
  }else {
    image.value = `src/assets/home/bg-home-${backgroundSize.value}.png`
    isRoute.value = false
  }

})


</script>



<style>
</style>
