<script setup>
import { ref } from 'vue'
import Logo from '../../assets/images/6468df3cfdeb4a9f1e2b4454_IMG_2839 1.png'

const menuItems = ref([
  { label: 'Про курс', link: '/' },
  { label: 'Відгуки', link: '/reviews' },
  { label: 'Ціни', link: '/price' },
  { label: 'Відповіді на питання', link: '/faq' }
])
</script>

<template>
  <div class="navigation-list flex items-center justify-between pt-[4.813rem]">
    <router-link to="/">
      <div class="navigation-list__logo">
        <img width="70" height="70" :src="Logo" alt="Logo" />
      </div>
    </router-link>
    <nav class="navigation-list__menu">
      <ul class="flex gap-[2.625rem] items-center">
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link class="text-c104 text-[1.25rem]" :to="item.link">{{ item.label }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>