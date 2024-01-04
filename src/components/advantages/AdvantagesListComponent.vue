<script setup>
const cardData = [
  { number: '01', text: 'advantages.cardText1' },
  { number: '02', text: 'advantages.cardText2' },
  { number: '03', text: 'advantages.cardText3' },
  { number: '04', text: 'advantages.cardText4' }
]
</script>

<template>
  <div class="advantages-list mt-[7.875rem]">
    <div class="advantages-list__title">
      <h2 class="text-[2.813rem]">{{ $t('advantages.title') }}</h2>
      <p class="mt-[3.125rem] text-[1.875rem]">{{ $t('advantages.subTitle') }}</p>
    </div>
    <div class="advantages-list__box flex mt-[3.625rem]">
      <ul class="flex w-full justify-between">
        <li
          class=" w-[18.75rem] bg-c100 rounded-[1.313rem] p-[1.25rem] cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105"
          v-for="card in cardData"
          :key="card.number">
          <p class="text-center text-[2.5rem] font-bold">{{ card.number }}</p>
          <h2 class="text-[0.938rem]">{{ $t(card.text) }}</h2>
        </li>
      </ul>
    </div>
  </div>
</template>