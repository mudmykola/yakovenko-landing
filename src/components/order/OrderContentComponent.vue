<script setup>
import GlobalBtn from '@/global/GlobalBtn.vue'
import OrderImage from '@/assets/images/order-image.png'
</script>

<template>
  <div class="order-content flex items-center justify-between">

    <div class="order-content__text w-[39.375rem]">
      <h2 class="text-[2.813rem] mb-[3.125rem]">{{ $t('order.title') }}</h2>
      <p class="text-[1.25rem] mb-[3.125rem]">{{ $t('order.desc') }}</p>
      <global-btn class="bg-c103 hover:bg-c104">{{ $t('order.btn') }}</global-btn>
    </div>
    <div class="order-content__image">
      <img width="460" height="377" :src="OrderImage" alt="order-image">
    </div>
  </div>
</template>