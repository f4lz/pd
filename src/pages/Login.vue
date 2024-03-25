<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="text-center justify-center bg-background-primary dark:bg-background-primaryDark max-w-[429px] w-full items-center py-9 flex flex-col gap-y-[18px] rounded-lg px-12 shadow-xl">
    <h3>Авторизация</h3>
    <input type="text" class="mt-[47px]" placeholder="Логин" />
    <input type="password" placeholder="Пароль" />
    <RouterLink to="/" class="underline">Забыли пароль</RouterLink>
    <button class="button-primary w-full max-w-[429px] rounded-full">
      Войти
    </button>
    <hr class="w-full my-[18px]" />
    <p class="text-base text-black/50 dark:text-white leading-5 w-[389px]">
      Нажимая на кнопку, вы принимаете условия пользовательского соглашения
    </p>
  </div>
</template>
