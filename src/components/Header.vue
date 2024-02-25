<script setup>
import { Icon } from '@iconify/vue'
import { vOnClickOutside } from '@vueuse/components'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Menu from './Menu.vue'

const isMenuOpen = ref(false)

const menuRef = ref()

const burger = ref()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const onClickOutsideHandler = [
  () => {
    isMenuOpen.value = false
  },
  { ignore: [burger, menuRef] },
]
</script>

<template>
  <div class="flex relative justify-between container py-2">
    <div class="flex gap-x-12">
      <Icon
        ref="burger"
        class="!w-14 !h-14"
        icon="radix-icons:hamburger-menu"
        @click.stop="toggleMenu" />
      <RouterLink to="/docs">
        <Icon class="!w-14 !h-14" icon="solar:document-text-broken" />
      </RouterLink>
    </div>
    <div class="flex gap-x-12">
      <button class="cursor-pointer">
        <Icon class="!w-14 !h-14" icon="carbon:notification" />
      </button>
      <RouterLink to="/registration">
        <Icon class="!w-14 !h-14" icon="octicon:person-24" />
      </RouterLink>
    </div>
    <transition name="menu">
      <Menu
        class="absolute top-0 z-30 translate-y-1/2 bg-background-primary"
        v-on-click-outside="onClickOutsideHandler"
        v-if="isMenuOpen"
        ref="menuRef" />
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
