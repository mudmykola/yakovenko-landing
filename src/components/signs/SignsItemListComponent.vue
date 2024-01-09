<script setup>
import { defineProps } from 'vue'

const props = defineProps(['items'])
</script>

<template>
  <ul class="grid grid-cols-3 gap-[2rem] mt-[3.125rem]">
    <li
      class="flex justify-center py-[0.625rem] px-[1.25rem] border-2 border-c103 w-full rounded-[0.625rem] text-[1.563rem] hover:bg-c101 hover:text-default cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 hover:border-default"
      v-for="item in items"
      :key="item">
      {{ $t(item) }}
    </li>
  </ul>
</template>