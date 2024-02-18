<script setup>
import courseItems from './courseItems.js'
import courseListElement from '@/assets/images/course-el.png'
</script>

<template>
  <div class="course">
    <h2 class="text-[2.813rem] leading-[3.125rem] mb-[3.625rem]">{{ $t('course.title') }}</h2>
    <ul class="course-list flex justify-between gap-[2.438rem] relative z-20">
      <li class="h-[13.688rem] flex items-center rounded-[1.313rem] " v-for="(item, index) in courseItems"
          :key="index"
          :class="['course-item', `${item.background}`, `text-${item.color}`]">
        <p class="text-[1.563rem] px-5">{{ $t(item.text) }}</p>
      </li>
      <div class="course-list__el absolute -right-5 z-[-1] -top-[7rem] w-[46%]">
        <img :src="courseListElement" alt="course-el" loading="lazy">
      </div>
    </ul>
  </div>
</template>