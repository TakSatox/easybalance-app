<script setup>
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition
    enter-active-class="animate__animated animate__fadeInUp"
    mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
</style>
