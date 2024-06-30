<template>
<main class="money-card">
  <img :src="getImageUrl()" />
  <div class="text">
    <span id="title">{{ title }}</span>
    <span id="value">{{ currency }} 6.320,90</span>
  </div>
</main>
</template>


<script setup>
import { ref } from 'vue'

const props = defineProps({
    imgFilename: String,
    title: String
})

const currency = ref("R$")


function getImageUrl() {
  return new URL(`../assets/home/dashboard/${props.imgFilename}`, import.meta.url).href
}

</script>