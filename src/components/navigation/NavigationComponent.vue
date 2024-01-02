<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Logo from '../../assets/images/6468df3cfdeb4a9f1e2b4454_IMG_2839 1.png'

const menuItems = ref([
  { labelKey: 'navigation.aboutTheCourse', link: '#about' },
  { labelKey: 'navigation.reviews', link: '/reviews' },
  { labelKey: 'navigation.price', link: '/price' },
  { labelKey: 'navigation.faq', link: '/faq' }
])

const { t, locale, availableLocales } = useI18n()
const activeLocale = ref(locale.value)

const changeLocale = (newLocale) => {
  if (availableLocales.includes(newLocale) && newLocale !== locale.value) {
    locale.value = newLocale
    activeLocale.value = newLocale
  }
}
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
          <router-link class="text-c104 text-[1.25rem]" :to="item.link">
            {{ t(item.labelKey) }}
          </router-link>
        </li>
        <div class="navigation-list__locales gap-[0.5rem] flex">
          <button
            class="gap-[1rem]"
            v-for="localeItem in availableLocales"
            :key="localeItem"
            @click="changeLocale(localeItem)"
            :class="{ active: localeItem === activeLocale }"
          >
            {{ localeItem.toUpperCase() }}
          </button>
        </div>
      </ul>
    </nav>
  </div>
</template>

<style lang="css">
.navigation-list__locales button.active {
  color: #C98660;
  font-weight: 900;
}
</style>