<script setup></script>

<template>
  <div class="text-center flex flex-col gap-y-[80px] items-center">
    <h1>Обратная связь</h1>
    <div
      class="bg-[#4CAF50] max-w-[808px] w-full items-center py-9 flex flex-col gap-y-[18px] rounded-md px-12">
      <h3>Свяжитесь с нами</h3>
      <input type="text" class="mt-[47px]" placeholder="Ваше имя" />
      <input type="email" placeholder="Ваша почта" />
      <input
        type="text"
        class="h-[142px] rounded-2xl"
        placeholder="Введите ваше сообщение" />
      <button class="button-primary">Отправить</button>
    </div>
  </div>
</template>
