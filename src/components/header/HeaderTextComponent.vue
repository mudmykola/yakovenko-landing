<script setup>
import GlobalBtn from '@/global/GlobalBtn.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handlePrimaryClick = () => {

  router.push({ hash: '#' })
}
</script>

<template>
  <div class="header-text w-[43.75rem]">
    <span class="text-[1.875rem] font-normal">{{ $t('header.headerTitleSub') }}</span>
    <h1 class="pt-[2.188rem] text-[3.125rem] font-bold text-c106">{{ $t('header.headerTitle') }} </h1>
    <span class="pt-[0.563rem] text-[3.125rem] font-bold text-c101">{{ $t('header.headerSubTitle')
      }}</span>
    <p class="mt-[3.125rem] text-[1.563rem] font-normal text-c106"> {{ $t('header.headerDesc') }}</p>
    <global-btn class="mt-[3.75rem]" type="primary" @click="handlePrimaryClick">{{ $t('header.headerBtn') }}
    </global-btn>
    <p class="mt-[0.625rem] text-[1.25rem]">{{ $t('header.headerDescGroup') }}</p>
  </div>
</template>