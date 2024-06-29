<template>
    <div class="item">
        <img :src="getImageUrl()" />
        <span id="title"> {{ title }} </span>
    </div>
</template>


<script setup>
const props = defineProps({
    imgFilename: String,
    title: String
})


function getImageUrl() {
  return new URL(`../assets/sidebar/${props.imgFilename}`, import.meta.url).href
}


</script>


<style>
</style>