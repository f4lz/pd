<script setup>
import { Icon } from '@iconify/vue'
import { vOnClickOutside } from '@vueuse/components'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useNavigationStore } from '../stores/navigation'
import Menu from './Menu.vue'

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const currentTheme = ref(localStorage.getItem('theme'))

const { navigationList } = useNavigationStore()

const isMenuOpen = ref(false)

const menuRef = ref()

const menuBurger = ref()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleTheme = () => {
  if (localStorage.theme === 'dark') {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  }
  currentTheme.value = localStorage.getItem('theme')
}

const onClickOutsideHandler = [
  () => {
    isMenuOpen.value = false
  },
  { ignore: [menuBurger, menuRef] },
]
</script>

<template>
  <div
    class="shadow-lg relative py-2 bg-background-primary dark:bg-background-primaryDark">
    <div class="container flex justify-between">
      <Icon
        ref="menuBurger"
        class="!w-14 !h-14 lg:hidden block"
        icon="radix-icons:hamburger-menu"
        @click.stop="toggleMenu" />
      <div class="lg:flex hidden items-center gap-x-[93px]">
        <div v-for="navigationItem in navigationList">
          <RouterLink active-class="font-semibold" :to="navigationItem.link">
            <p class="text-3xl">{{ navigationItem.title }}</p>
          </RouterLink>
        </div>
      </div>
      <div class="flex gap-x-12">
        <button class="cursor-pointer" @click="toggleTheme">
          <Icon
            class="!w-14 !h-14"
            :icon="
              currentTheme === 'dark'
                ? 'material-symbols:sunny'
                : 'ri:moon-fill'
            " />
        </button>
        <button class="cursor-pointer">
          <Icon class="!w-14 !h-14" icon="carbon:notification" />
        </button>
        <RouterLink to="/registration">
          <Icon class="!w-14 !h-14" icon="octicon:person-24" />
        </RouterLink>
      </div>
      <transition name="menu">
        <Menu
          class="absolute top-0 z-30 translate-y-1/2 bg-background-primary dark:bg-background-primaryDark"
          v-on-click-outside="onClickOutsideHandler"
          v-if="isMenuOpen"
          ref="menuRef" />
      </transition>
    </div>
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
