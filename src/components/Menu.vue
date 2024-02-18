<script setup>
import { RouterLink } from 'vue-router'
import { useNavigationStore } from '../stores/navigation'

const { navigationList } = useNavigationStore()
</script>

<template>
  <div class="rounded-xl py-6 px-4 gap-y-4 flex flex-col">
    <div
      class="border-b hover:text-black/70 transition-all border-grey"
      v-for="navigationItem in navigationList">
      <RouterLink active-class="font-semibold" :to="navigationItem.link">
        {{ navigationItem.title }}
      </RouterLink>
    </div>
  </div>
</template>
