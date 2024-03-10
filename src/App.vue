<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="wrapper">
    <div class="dark:bg-background-primary bg-background-primaryDark py-5">
      <h1 class="dark:text-black text-white text-center font-normal">ГОСТ</h1>
    </div>
    <Header />
    <div
      class="bg-background-secondary dark:bg-background-secondaryDark flex items-center justify-center content">
      <transition mode="out-in" name="router">
        <RouterView class="container my-9" />
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
