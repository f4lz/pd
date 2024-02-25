<script setup>
import UiInput from '../components/ui/UiInput.vue'
import UiSelect from '../components/ui/UiSelect.vue'

const select = {
  options: [
    { value: 1, name: 'Заголовок 1' },
    { value: 2, name: 'Заголовок 2' },
  ],
  name: 'title',
  id: 1,
  title: 'Выберите заголовок:',
}
</script>

<template>
  <div>
    <div class="grid grid-cols-2 gap-x-[152px] gap-y-[127px]">
      <UiSelect :select="select" />
      <UiInput title="Выберите отступ:" placeholder="Введите отступ" />
      <UiInput title="Пример 1:" placeholder="Введите пример 1" />
      <UiInput title="Пример 2:" placeholder="Введите пример 2" />
    </div>
    <div
      class="mt-[266px] bg-green flex flex-col gap-y-[50px] text-center items-center">
      <p class="max-w-[1381px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus
        risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet
        dolor et magna facilisis rhoncus. Curabitur maximus est sed porta
        scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi
        tristique nibh, mollis vehicula lectus tortor eu purus.
      </p>
      <input type="file" class="max-w-[796px]" />
    </div>
  </div>
</template>
