<script setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex justify-between container">
    <div class="flex gap-x-12">
      <button class="cursor-pointer">
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
  </div>
</template>
