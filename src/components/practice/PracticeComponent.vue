<script setup>
import GlobalBtn from '@/global/GlobalBtn.vue'
import usePracticeTitle from '@/components/practice/usePracticeTitle.js'

const { practiceTitle } = usePracticeTitle()

</script>

<template>
  <div class="practice mt-[7.875rem]">
    <h2 class="text-[2.913rem] leading-[3.125rem]" v-html="practiceTitle($t('practice.title'))"></h2>
    <p class="py-[3.125rem] text-[1.25rem] leading-[1.875rem]">{{ $t('practice.desc') }}</p>
    <global-btn class="bg-c103 hover:bg-c104">
      {{ $t('practice.btn')
      }}
    </global-btn>
  </div>
</template>

<style scoped lang="css">

</style>