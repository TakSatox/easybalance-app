<template>
<main class="money-card">
  <img :src="imgUrl" />
  <div class="text">
    <span id="title">{{ title }}</span>
    <span id="value">{{ currency }} {{ value }}</span>
  </div>
</main>
</template>


<script setup>
import { ref } from 'vue'

const props = defineProps({
    imgFilename: String,
    title: String,
    value: String
})

const currency = ref("R$")

const imgUrl = ref('')

onMounted(() => {
  imgUrl.value = getImageUrl()
});

function getImageUrl() {
  return new URL(`../assets/home/${props.imgFilename}`, import.meta.url).href
}

</script>