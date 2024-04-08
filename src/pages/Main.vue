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
    <div
      class="grid grid-cols-2 lg:gap-x-[152px] gap-x-6 gap-y-6 items-end lg:gap-y-[127px] bg-background-primary dark:bg-background-primaryDark py-[166px] px-9 shadow-xl rounded-lg">
      <UiSelect :select="select" />
      <UiInput title="Выберите отступ:" placeholder="Введите отступ" />
      <UiInput title="Пример 1:" placeholder="Введите пример 1" />
      <UiInput title="Пример 2:" placeholder="Введите пример 2" />
    </div>
    <div
      class="mt-[266px] bg-background-primary dark:bg-background-primaryDark rounded-lg shadow-xl py-[110px] px-9 flex flex-col gap-y-[50px] text-center items-center">
      <p class="max-w-[1381px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus
        risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet
        dolor et magna facilisis rhoncus. Curabitur maximus est sed porta
        scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi
        tristique nibh, mollis vehicula lectus tortor eu purus.
      </p>
      <div class="file max-w-[796px] w-full">
        <input type="file" class="input-visibility dark:bg-[#121212]" />
        <label class="absolute top-1/2 -translate-x-1/2 mt-2 left-1/2">
          Нажмите сюда чтобы выбрать файл
        </label>
      </div>
    </div>
  </div>
</template>

<style>
.input-visibility {
  font-size: 0px;
  content-visibility: hidden;
  border: 1px rgb(94, 94, 94);
  border-style: dotted;
  padding: 90px 0;
  border-radius: 10px;
  cursor: pointer;
}

.file {
  position: relative;
}

.file::after {
  content: '';
  position: absolute;
  transform: translateY(-50%);
  transform: translateX(-50%);
  width: 145.54px;
  height: 100px;
  display: block;
  top: 0;
  left: 50%;
  background-image: url(/src/assets/img/folder.svg);
}
</style>
