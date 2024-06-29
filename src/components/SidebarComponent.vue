<template>

    <div class="sidebar">
        <div class="header">
            <RouterLink to="/">
                <img :src="header" />
            </RouterLink>
        </div>
        
        <div class="menu">
            <SidebarItem img-filename="home.png" title="Dashboard" link="/dashboard"></SidebarItem>
            <SidebarItem img-filename="transaction.png" title="Transações" link="/transactions"></SidebarItem>
            <SidebarItem img-filename="pending.png" title="Pendências" link="/pending"></SidebarItem>
            <SidebarItem img-filename="record-transaction.png" title="Registrar Transação" link="/record-transactions"></SidebarItem>
        </div>


        <div class="footer">
            <div @click="isEnabled = !isEnabled" class="user">
                <img id="user-img" :src="store.picture" />
                <span id="user-name">{{ store.name }}</span>

                <img v-if="isEnabled" id="user-arrow" :src="arrowUp"/>
                <img v-else id="user-arrow" :src="arrowDown"/>
                
                <Transition name="fade">
                    <button v-if="isEnabled" @click="deleteIdTokenCookie" class="logout">Sair</button>
                </Transition>
                
            </div>

        
            <hr>
            
            <a href="https://www.linkedin.com/in/carlostak/" target="_blank">
                <img id="linkedin" :src="linkedin" />
            </a>
            
        </div>
    </div>

</template>


<script setup>
import header from '@/assets/sidebar/header.svg'
import linkedin from '@/assets/sidebar/linkedin.png'
import arrowDown from '@/assets/sidebar/arrow-down.png'
import arrowUp from '@/assets/sidebar/arrow-up.png'


import SidebarItem from '@/components/SidebarItem.vue'
import { useUserStore } from "@/stores/user";
import { deleteIdTokenCookie } from '@/services/auth';
import { ref } from 'vue';


const store = useUserStore();
const isEnabled = ref(false);


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