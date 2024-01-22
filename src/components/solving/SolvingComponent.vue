<script setup>
import SolvingListComponent from '@/components/solving/SolvingListComponent.vue'
import SolvingElement from '@/assets/images/solving-el.png'
</script>

<template>
  <div class="solving mt-[7.875rem] relative z-[9999]">
    <div class="solving-title mb-[3.625rem] w-[56.5rem]">
      <h2 class="text-[2.813rem]">{{ $t('solving.title') }}</h2>
      <p class="text-[2.813rem] text-c102 mb-[3.125rem]">{{ $t('solving.titleColor') }}</p>
      <span class="text-[1.25rem] w-[35rem] block">{{ $t('solving.subTitle') }}</span>
    </div>
    <solving-list-component />
    <div class="solving-decor absolute top-[14%] left-[45%] z-[-1]">
      <img width="967" height="969" :src="SolvingElement" alt="solving-image">
    </div>
  </div>
</template>