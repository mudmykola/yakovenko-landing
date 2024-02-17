<script setup>
import therapyItems from '@/components/therapy/therapyItems.js'
import useHighlightText from '@/components/therapy/useHighlightText.js'

const { highlightText } = useHighlightText()
</script>

<template>
  <div class="therapy-recovery__list">
    <ul>
      <li v-for="(item, index) in therapyItems" :key="index">
        <p class="text-[1.25rem] leading-[1.875rem]" v-html="highlightText($t(item.text))"></p>
      </li>
    </ul>
  </div>
</template>

<style lang="css">
.therapy-recovery__list li + li {
  margin-top: 49px;
}
</style>