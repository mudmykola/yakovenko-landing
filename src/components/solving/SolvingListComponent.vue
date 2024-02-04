<script setup>
import solvingItems from '@/components/solving/solvingItems.js'

</script>

<template>
  <div>
    <div class="rounded-[0.938rem]" v-for="(item, index) in solvingItems" :key="index"
         :class="['solving-list', `${item.background}`, `text-${item.color}`, index !== solvingItems.length - 1 ? 'mb-[1.75rem]': '']"
         :style="{ width: item.length * 10 + 'px' }">
      <p class="py-[1.563rem] px-[2.625rem] text-[1.3rem]">
        {{ $t(item.text) }}
      </p>
    </div>
  </div>
</template>