<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <transition mode="out-in" name="router">
    <RouterView />
  </transition>
</template>

<style>
.router-enter-active,
.router-leave-active {
  transition: opacity 0.3s ease;
}

.router-enter-from,
.router-leave-to {
  opacity: 0;
}
</style>
