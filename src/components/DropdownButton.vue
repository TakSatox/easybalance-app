<template>
    <div class="drop-down" @click="isEnabled = !isEnabled">
        <span>{{ title }}</span>
        <img v-if="isEnabled" id="user-arrow" :src="arrowUp"/>
        <img v-else id="user-arrow" :src="arrowDown"/>
    </div>

</template>

<script setup>
import arrowDown from '@/assets/sidebar/arrow-down.png'
import arrowUp from '@/assets/sidebar/arrow-up.png'
import { ref } from 'vue';

const props = defineProps({
    title: String
})


const isEnabled = ref(false);

</script>