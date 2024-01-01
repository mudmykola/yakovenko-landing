<script setup>
import NavigationComponent from '@/components/navigation/NavigationComponent.vue'
</script>

<template>
<div class="wrapper xl:container mx-auto">
  <div class="navigation">
    <navigation-component/>
  </div>
  <main>
    <slot/>
  </main>
  <footer></footer>
</div>
</template>