<template>
    <div class="drop-down" @click="isEnabled = !isEnabled">
        <span id="title">{{ title }}</span>
        <img v-if="isEnabled" id="arrow" :src="arrowUp"/>
        <img v-else id="arrow" :src="arrowDown"/>
    </div>

</template>

<script setup>
import arrowDown from '@/assets/sidebar/arrow-down.png'
import arrowUp from '@/assets/sidebar/arrow-up.png'
import { ref } from 'vue';

defineProps({
    title: String
})


const isEnabled = ref(false);

</script>