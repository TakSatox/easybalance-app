<template>
    <RouterLink :class="isHighligth ?  'item-highlight' : 'item' " :to="link">
        <img :src="getImageUrl()" />
        <span id="title"> {{ title }} </span>
    </RouterLink>
</template>


<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const props = defineProps({
    imgFilename: String,
    title: String,
    link: String
})


const route = useRoute()

const isHighligth = computed(() => {
    if(route.path === props.link) {
        return '-highlight'
    }

    return ''
})

const fileName = props.imgFilename.split('.')[0]
const extension = props.imgFilename.split('.')[1]


function getImageUrl() {
  return new URL(`../assets/sidebar/${fileName + isHighligth.value}.${extension}`, import.meta.url).href
}


</script>


<style>
</style>