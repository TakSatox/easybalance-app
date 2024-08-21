<template>

    <div class="sidebar">
        <div class="header">
            <RouterLink to="/">
                <img :src="header" />
            </RouterLink>
        </div>
        
        <div class="menu">
            <SidebarItem img-filename="dashboard.png" title="Dashboard" item-route="/dashboard"></SidebarItem>
            <SidebarItem img-filename="transaction.png" title="Transações" item-route="/transactions"></SidebarItem>
            <SidebarItem img-filename="pending.png" title="Pendências" item-route="/pending"></SidebarItem>
            <SidebarItem img-filename="record-transaction.png" title="Registrar Transação" item-route="/record-transactions"></SidebarItem>
        </div>


        <div class="footer" ref="logoutRef">
            <div @click.stop="isEnabled = !isEnabled" class="user">
                <img id="user-img" :src="user.picture" />
                <span id="user-name">{{ user.name }}</span>

                <img v-if="isEnabled" class="arrow" :src="arrowUp"/>
                <img v-else class="arrow" :src="arrowDown"/>
                
                <Transition name="fade">
                    <button v-if="isEnabled" @click.stop="logout" class="logout">Sair</button>
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
import header from '@/assets/home/sidebar/header.svg'
import linkedin from '@/assets/home/sidebar/linkedin.png'
import arrowDown from '@/assets/home/arrow-down.png'
import arrowUp from '@/assets/home/arrow-up.png'


import SidebarItem from '@/components/SidebarItem.vue'
import { useUserStore } from "@/stores/user";
import { ref, onMounted, onUnmounted } from 'vue';


const user = useUserStore(piniaInstance)
const isEnabled = ref(false)
const logoutRef = ref(null)

const handleClickOutside = (event) => {
    if (!logoutRef.value.contains(event.target)) {
        isEnabled.value = false;
    }
};

const logout = () => {
    const idToken = useCookie('idToken')
    idToken.value = null
    location.reload()
}

onMounted(() => {
    window.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
    window.removeEventListener('click', handleClickOutside)
})

</script>


<style>
/* Whole sidebar */
.sidebar {
    background-color: #FFF;
    height: 100%;
    width: 310px;
    position: fixed;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

/* Header */
.sidebar .header img {
    width: 280px;
    margin-bottom: 20px;
    user-select: none;
}


/* Menu items */
.sidebar .menu {
    display: flex;
    flex-direction: column;
    align-items: left;
}

.sidebar .menu img {
    width: 30px;
}

.sidebar .menu .item {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-top: 20px;
    padding-left: 10px;
    padding-bottom: 20px;
    color: #00173393;
}

.sidebar .menu .item:hover {
    color: #5F43F4;
}

.sidebar .menu .item-highlight {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding-top: 20px;
    padding-left: 10px;
    padding-bottom: 20px;
    box-shadow: 0px 4px 8px rgba(95, 67, 244, 0.2);
    
}

.sidebar .menu .item #title {
    font-size: 20.4px;
    font-weight: bold;
    margin-left: 15px;
}

.sidebar .menu .item-highlight #title {
    color: #5F43F4;
    font-size: 20.4px;
    font-weight: bold;
    margin-left: 15px;
}

/* Footer */
.sidebar .footer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: auto;
}

.sidebar .footer .user {
    font-weight: bold;
    color: #00173393;
    margin-left: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 250px;
    display: flex;
    border-radius: 10px;
    align-items: left;
    cursor: pointer;
}

.sidebar .footer .user img {
    width: 50px;
    border-radius: 50%;
    margin-left: 10px;
    user-select: none;
}

.sidebar .footer .user #user-name {
    font-size: 20px;
    margin-left: 15px;
    align-self: center;
    user-select: none;
}

.sidebar .footer .user .arrow {
    width: 20px;
    margin-left: 100px;
    align-self: center;
    user-select: none;
}

.sidebar .footer hr {
    margin-top: 15px;
    margin-bottom: 15px;
    width: 240px;
    color: 7A7E80;
}

.sidebar .footer .logout {
    position: absolute;
    text-align: center;
    padding: 10px;
    border: none;
    color: #00173393;
    background-color: white;
    width: 100px;
    box-shadow: 0 0px 8px rgba(0, 0, 0, 0.2);
    top: 58px;
    left: 25px;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    margin-left: 160px;
    margin-top: -10px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 15px;
}

.sidebar .footer .logout:hover {
    color: #5F43F4;
}


.sidebar .footer #linkedin {
    margin-top: 0px;
    scale: 0.80;
    z-index: 1;
    user-select: none;
    
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>