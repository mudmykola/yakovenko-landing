<script setup>
import { ref } from 'vue'
import GlobalBtn from '@/global/GlobalBtn.vue'
import OrderImage from '@/assets/images/order-image.png'


const isHovered = ref(false)

const buttonClasses = function() {
  return 'bg-c103 ' + (isHovered.value ? 'hover:bg-c104' : '')
}

const handleMouseOver = function() {
  isHovered.value = true
}

const handleMouseOut = function() {
  isHovered.value = false
}

</script>

<template>
  <div class="order-content flex items-center justify-between">

    <div class="order-content__text w-[39.375rem]">
      <h2 class="text-[2.813rem] mb-[3.125rem]">{{ $t('order.title') }}</h2>
      <p class="text-[1.25rem] mb-[3.125rem]">{{ $t('order.desc') }}</p>
      <global-btn :class="buttonClasses()" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
        {{ $t('order.btn') }}
      </global-btn>
    </div>
    <div class="order-content__image">
      <img width="460" height="377" :src="OrderImage" alt="order-image">
    </div>
  </div>
</template>