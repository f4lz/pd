<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="wrapper">
    <Header />
    <div class="bg-background-secondary content">
      <transition mode="out-in" name="router">
        <RouterView class="container mt-9" />
      </transition>
    </div>
    <Footer class="footer" />
  </div>
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
