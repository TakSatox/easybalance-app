<template>
    <main class="dropdown">
        <div class="item" @click="isEnabled = !isEnabled">
            <span id="title">{{ selectedValue }}</span>
            <img v-if="isEnabled" class="arrow" :src="arrowUp"/>
            <img v-else class="arrow" :src="arrowDown"/>
        </div>
    
        <Transition name="fade">
            <ul v-if="isEnabled">
                <li v-for="option in options" :key="option.id" @click="selectValue(option)">{{ option }}</li>
            </ul>            
        </Transition>
    </main>





</template>

<script setup>
import arrowDown from '@/assets/arrow-down.png'
import arrowUp from '@/assets/arrow-up.png'
import { ref } from 'vue';

const props = defineProps({
    title: String,
    options: Array
})

const isEnabled = ref(false);

const selectedValue = ref(props.title) 


const selectValue = (option) => {
   selectedValue.value = option
   isEnabled.value = false
}


</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>