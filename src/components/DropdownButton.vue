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
import arrowDown from '@/assets/home/arrow-down.png'
import arrowUp from '@/assets/home/arrow-up.png'
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

.home .date {
    display: flex;
    flex-direction: row;
    margin-left: 700px;
    margin-top: 20px;
    width: 900px;
    user-select: none;
}

.home .date .dropdown .item {
    display: flex;
    flex-direction: row;
    background-color: #FFF;
    padding: 10px;
    width: 300px;
    border-radius: 10px;
    margin-left: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: #DDDDDD;
    cursor: pointer;
    color: #00173393;
}

.home .date .dropdown .item:hover {
    color: #5F43F4;
}

.home .date .dropdown .item #title {
    margin: auto;
    font-size: 20px;
    font-weight: bold;
}


.home .date .dropdown .item .arrow {
    align-self: center;
}


.home .date .dropdown ul {
    font-size: 20px;
    list-style-type: none;
    background-color: #FFF;
    padding: 10px;
    width: 300px;
    margin-top: 6px;
    margin-left: 20px;
    position: fixed;
    width: 300px;
    height: 200px;
    overflow-y: auto;
    border-radius: 10px;
    border: 1px solid #DDDDDD;
    
}

.home .date .dropdown li {
    font-weight: bold;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    color: #00173393;
    cursor: pointer;
    border-radius: 10px;
}

.home .date .dropdown li:hover {
    color: #5F43F4;
    box-shadow: 0px 4px 8px rgba(95, 67, 244, 0.2);
}

.home .date .dropdown ul::-webkit-scrollbar {
    width: 10px; /* largura da barra de rolagem */
}

/* Estiliza o trilho da barra de rolagem */
.home .date .dropdown ul::-webkit-scrollbar-track {
    background: #f1f1f1; /* cor de fundo do trilho */
    border-radius: 10px; /* bordas arredondadas do trilho */
}

/* Estiliza o polegar da barra de rolagem */
.home .date .dropdown ul::-webkit-scrollbar-thumb {
    background: #888; /* cor do polegar */
    border-radius: 10px; /* bordas arredondadas do polegar */
}

/* Estiliza o polegar quando estiver sendo pressionado */
.home .date .dropdown ul::-webkit-scrollbar-thumb:active {
    background: #555; /* cor do polegar quando pressionado */
}
</style>