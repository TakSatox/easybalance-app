<template>
    <main class="dropdown" ref="dropdownRef">
        <div class="item" @click.stop="isEnabled = !isEnabled">
            <img id="category-img" :src="getImageUrl(imgFileName)" />
            <span id="title">{{ title }}</span>
        </div>
    
        <Transition name="fade">
            <ul v-if="isEnabled && dropSize === 'large'" style="height: 500px;">
                <li v-for="option in options" :key="option.id" @click.stop="selectValue(option)" @click="$emit('valueSelected', option)">
                    <div class="list-item">
                        <img id="selected-category-img" :src="getImageUrl(option.imgFileName)"/>
                        <span id="text">{{ option.name }}</span>
                    </div>
                </li>
            </ul>
            
            <ul v-else-if="isEnabled && dropSize === 'small'" style="height: 110px;">
                <li v-for="option in options" :key="option.id" @click.stop="selectValue(option)" @click="$emit('valueSelected', option)">
                    <div class="list-item">
                        <img id="selected-category-img" :src="getImageUrl(option.imgFileName)"/>
                        <span id="text">{{ option.name }}</span>
                    </div>
                </li>
            </ul>
        </Transition>
    </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    title: String,
    imgFileName: String,
    options: Array,
    dropSize: String
})

const isEnabled = ref(false)
const selectedValue = ref(props.title)
const dropdownRef = ref(null)


const selectValue = (option) => {
   selectedValue.value = option
   isEnabled.value = false
}

function getImageUrl(fileName) {
  return new URL(`../assets/home/${fileName}`, import.meta.url).href
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

.home-record-transaction .category {
    display: flex;
    flex-direction: row;
    margin-left: 700px;
    margin-top: 20px;
    width: 900px;
    user-select: none;
}

.home-record-transaction .category .dropdown .item {
    display: flex;
    flex-direction: row;
    background-color: #FFF;
    padding: 10px;
    width: 300px;
    height: 40px;
    border-radius: 20px;
    margin-left: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: #DDDDDD;
    cursor: pointer;
    color: #00173393;
}

.home-record-transaction .category .dropdown .item #category-img {
    width: 50px;
    height: 50px;
    align-self: center;
    border-radius: 30px;
}

.home-record-transaction .category .dropdown .item:hover {
    color: #5F43F4;
}

.home-record-transaction .category .dropdown .item #title {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    margin-left: 70px;
    font-size: 20px;
    font-weight: bold;
}


.home-record-transaction .category .dropdown .item .arrow {
    align-self: center;
}

.home-record-transaction .category .dropdown ul {
    font-size: 20px;
    list-style-type: none;
    background-color: #FFF;
    padding: 10px;
    width: 300px;
    margin-top: 6px;
    margin-left: 20px;
    position: fixed;
    width: 300px;
    height: 160px;
    overflow-y: auto;
    border-radius: 10px;
    border: 1px solid #DDDDDD;
    z-index: 2;
}

.home-record-transaction .category .dropdown .list-item {
    display: flex;
    margin-left: 20px;
}


.home-record-transaction .category .dropdown .list-item #selected-category-img {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    margin-right: 10px;
}

.home-record-transaction .category .dropdown .list-item #text {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    font-size: 20px;
    font-weight: bold;
}

.home-record-transaction .category .dropdown li {
    font-weight: bold;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    color: #00173393;
    cursor: pointer;
    border-radius: 10px;
}

.home-record-transaction .category .dropdown li:hover {
    color: #5F43F4;
    box-shadow: 0px 4px 8px rgba(95, 67, 244, 0.2);
}

.home-record-transaction .category .dropdown ul::-webkit-scrollbar {
    width: 10px; 
}

.home-record-transaction .category .dropdown ul::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 10px; 
}

.home-record-transaction .category .dropdown ul::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px; 
}

.home-record-transaction .category .dropdown ul::-webkit-scrollbar-thumb:active {
    background: #555; 
}
</style>