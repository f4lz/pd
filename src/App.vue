<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
  <div class="wrapper">
    <Header />
    <div class="bg-background-secondary content">
      <RouterView class="container" />
    </div>
    <Footer class="footer" />
  </div>
</template>
