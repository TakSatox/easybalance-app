<template>
    <main> 
        
        <SideBarComponent></SideBarComponent>

        <div>
            <HomeDashBoard></HomeDashBoard>
        </div>
        
    </main>
</template>


<script setup>
import HomeDashBoard from '@/components/HomeDashboard.vue'
import SideBarComponent from '@/components/SidebarComponent.vue'


document.body.className = 'home'

</script>

<style>

</style>