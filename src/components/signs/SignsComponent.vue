<script setup>
import SignsItemListComponent from '@/components/signs/SignsItemListComponent.vue'

const signsItemList = [
  'signs.itemListText1',
  'signs.itemListText2',
  'signs.itemListText3',
  'signs.itemListText4',
  'signs.itemListText5',
  'signs.itemListText6',
  'signs.itemListText7',
  'signs.itemListText8',
  'signs.itemListText9',
  'signs.itemListText10',
  'signs.itemListText11',
  'signs.itemListText12'
]
</script>

<template>
  <div class="signs mt-[3.625rem]">
    <h2 class="text-[1.875rem]">{{ $t('signs.title') }}</h2>
    <signs-item-list-component :items="signsItemList" />
  </div>
</template>