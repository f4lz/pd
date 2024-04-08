<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="bg-[#404040]">
    <div class="container text-white flex justify-between pt-[47px] pb-[27px]">
      <div class="flex flex-col gap-y-[46px]">
        <h3 class="uppercase">Контакты</h3>
        <div class="flex gap-x-[5px] items-center">
          <a href="tel:73025550107">+7 (302) 55-50-107</a>
          <div class="flex items-center">
            <Icon icon="uiw:mail" class="!w-[44px] !h-[30px]" />
            <p class="text-2xl">123@web.ru</p>
          </div>
        </div>
        <p class="text-2xl mt-[15px]">
          © 2024–2024 ГОСТ. Все права защищены / Terms of Use / Privacy Policy
        </p>
      </div>
      <img
        class="lg:block hidden"
        src="../assets/img/logo.svg"
        alt="Московский политех" />
    </div>
  </div>
</template>
