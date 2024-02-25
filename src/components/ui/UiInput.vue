<script setup>
defineProps({
  title: String,
  placeholder: String,
})
</script>

<template>
  <div class="flex flex-col gap-y-[52px]">
    <label>{{ title }}</label>
    <input
      class="bg-white border rounded-md px-5 py-[14px] placeholder-black"
      type="text"
      :placeholder="placeholder" />
  </div>
</template>
