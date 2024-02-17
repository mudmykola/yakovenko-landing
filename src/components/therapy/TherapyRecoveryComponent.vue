<script setup>
import TherapyRecoveryListComponent from '@/components/therapy/TherapyRecoveryListComponent.vue'
import useHighlightTitle from '@/components/therapy/useHighlightTitle.js'

import treeLeft from '@/assets/images/therapy-image-1.png'
import treeRight from '@/assets/images/therapy-image-2.png'

const { highlightTitle } = useHighlightTitle()
</script>

<template>
  <div class="therapy-recovery mt-[9.375rem] mb-[6.313rem]">
    <div class="therapy-recovery__inner">
      <h2 class="w-[42.375rem] text-[2rem] leading-[2.5rem] mb-[2.938rem]"
          v-html="highlightTitle( $t('therapy.title'))"></h2>
      <div class="therapy-recovery__inner--box flex items-start justify-between">
        <div class="therapy-recovery__inner--text w-[42rem]">
          <therapy-recovery-list-component />
        </div>
        <div class="therapy-recovery__inner--image flex items-center gap-1 text-center">
          <div class="therapy-recovery__inner--image__left flex flex-col items-center w-[15.25rem]">
            <img width="209" height="236" :src="treeLeft" alt="tree-left" loading="lazy">
            <p class="text-[1.5rem] font-bold leading-[1.875rem]">{{ $t('therapy.tree-title-1') }}</p>
          </div>
          <div class="therapy-recovery__inner--image__right flex flex-col items-center w-[15.25rem]">
            <img width="209" height="236" :src="treeRight" alt="tree-right" loading="lazy">
            <p class="text-[1.5rem] font-bold leading-[1.875rem]">{{ $t('therapy.tree-title-2') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>