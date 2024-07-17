<template>
    <RouterLink :class="isHighligth ?  'item-highlight' : 'item' " :to="itemRoute">
        <img :src="imgUrl" />
        <span id="title"> {{ title }} </span>
    </RouterLink>
</template>


<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';

const props = defineProps({
    imgFilename: String,
    title: String,
    itemRoute: String
})


const route = useRoute()

const isHighligth = computed(() => {
    if(route.path === props.itemRoute) {
        return '-highlight'
    }

    return ''
})

const fileName = props.imgFilename.split('.')[0]
const extension = props.imgFilename.split('.')[1]
const imgUrl = ref('')

onMounted(() => {
  imgUrl.value = getImageUrl()
});

function getImageUrl() {
  return new URL(`../assets/home/sidebar/${fileName + isHighligth.value}.${extension}`, import.meta.url).href
}


</script>


<style>
</style>