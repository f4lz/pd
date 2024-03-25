<script setup>
defineProps({
  select: {
    options: Array,
    name: String,
    id: Number,
    title: String,
  },
})
</script>

<template>
  <div class="flex flex-col gap-y-[52px]">
    <label :for="select.name">{{ select.title }}</label>
    <select
      class="bg-white border dark:text-black rounded-md py-[14px] px-5"
      :name="select.name"
      :id="select.id">
      <option
        class="dark:text-black"
        :value="option.value"
        v-for="option of select.options">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>
