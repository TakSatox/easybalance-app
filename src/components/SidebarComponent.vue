<template>

    <div class="sidebar">
        <div class="header">
            <img :src="header" />
        </div>
        
        <div class="menu">
            <SidebarItem img-filename="home.png" title="Dashboard" ></SidebarItem>
            <SidebarItem img-filename="transaction.png" title="Transações" ></SidebarItem>
            <SidebarItem img-filename="pending.png" title="Pendências" ></SidebarItem>
            <SidebarItem img-filename="record-transaction.png" title="Registrar Transação" ></SidebarItem>
        </div>


        <div class="footer">
            <div class="user">
                <img id="user-img" :src="store.picture" />
                <span id="user-name">{{ store.name }}</span>
                <a id="user-arrow-down" >
                    <img :src="arrowDown"/>
                </a>
            </div>

            <hr>
            
            <a href="https://www.linkedin.com/in/carlostak/" target="_blank">
                <img id="linkedin" :src="linkedin" />
            </a>
            
        </div>
    </div>

</template>


<script setup>
import SidebarItem from '@/components/SidebarItem.vue'
import { useUserStore } from "@/stores/user";
import header from '@/assets/sidebar/header.svg'
import linkedin from '@/assets/sidebar/linkedin.png'
import arrowDown from '@/assets/sidebar/arrow-down.png'

const store = useUserStore();


</script>