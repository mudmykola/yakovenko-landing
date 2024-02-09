<script setup>
import TherapyRecoveryListComponent from '@/components/therapy/TherapyRecoveryListComponent.vue'
import useHighlightTitle from '@/components/therapy/useHighlightTitle.js'

const { highlightTitle } = useHighlightTitle()
</script>

<template>
  <div class="therapy-recovery mt-[9.375rem]">
    <div class="therapy-recovery__inner">
      <h2 class="w-[42.375rem] text-[2rem] leading-[2.5rem] mb-[2.938rem]"
          v-html="highlightTitle( $t('therapy.title'))"></h2>
      <div class="therapy-recovery__inner--box">
        <div class="therapy-recovery__inner--text">
          <therapy-recovery-list-component />
        </div>
        <div class="therapy-recovery__inner--image"></div>
      </div>
    </div>
  </div>
</template>