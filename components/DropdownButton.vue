<template>
    <main ref="dropdownRef">
        <div class="item" @click.stop="isEnabled = !isEnabled">
            <span id="title">{{ selectedValue }}</span>
        </div>
    
        <Transition name="fade">
            <ul v-if="isEnabled">
                <li v-for="option in options.filter(v => v !== selectedValue)" :key="option.id" @click.stop="selectValue(option)">{{ option }}</li>
            </ul>            
        </Transition>
    </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    title: String,
    options: Array
})

const isEnabled = ref(false)
const dropdownRef = ref(null)
const selectedValue = ref(props.title)


const selectValue = (option) => {
   selectedValue.value = option
   isEnabled.value = false
}

const handleClickOutside = (event) => {
    if (!dropdownRef.value.contains(event.target)) {
        isEnabled.value = false;
    }
};

onMounted(() => {
    window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    window.removeEventListener('click', handleClickOutside)
})

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