<script setup>
import { Icon } from '@iconify/vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Menu from './Menu.vue'

const isMenuOpen = ref(false)

const menuRef = ref()

const toggleMenu = () => {
  isMenuOpen.value ? (isMenuOpen.value = false) : (isMenuOpen.value = true)
}

onClickOutside(menuRef, () => {
  isMenuOpen.value = false
})
</script>

<template>
  <div class="flex justify-between container py-2">
    <div class="flex gap-x-12">
      <button class="cursor-pointer" @click.stop="toggleMenu">
        <Icon class="!w-14 !h-14" icon="radix-icons:hamburger-menu" />
      </button>
      <RouterLink to="/docs">
        <Icon class="!w-14 !h-14" icon="solar:document-text-broken" />
      </RouterLink>
    </div>
    <div class="flex gap-x-12">
      <button class="cursor-pointer">
        <Icon class="!w-14 !h-14" icon="carbon:notification" />
      </button>
      <RouterLink to="/login">
        <Icon class="!w-14 !h-14" icon="octicon:person-24" />
      </RouterLink>
    </div>
    <transition name="menu">
      <Menu
        class="absolute top-0 z-30 translate-y-1/2 bg-background-primary"
        v-if="isMenuOpen"
        ref="menuRef"></Menu>
    </transition>
  </div>
</template>

<style>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
