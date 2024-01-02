<script setup>
import BgImage from '@/assets/images/bg-image.webp'
import HeaderBgEl1 from '@/assets/images/header-bg-el-1.png'
import HeaderBgEl2 from '@/assets/images/header-bg-el-2.png'

</script>

<template>
  <div class="relative ml-[0.688rem]">
    <img width="303" height="561" :src="BgImage" alt="BgImage" />
    <span
      class="header-image__gradient"></span>
    <div class="header-bg-el-1 absolute top-[-4%] left-[-58%] z-[-1] ">
      <img :src="HeaderBgEl1" alt="HeaderBgEl1" />
    </div>
    <div class="header-bg-el-1 absolute top-[10%] z-[-1] right-[-22%]">
      <img :src="HeaderBgEl2" alt="HeaderBgEl2" />
    </div>
  </div>
</template>

<style lang="css">
.header-image__gradient {
  z-index: 5;
  position: absolute;
  height: 100%;
  background-image: linear-gradient(to top, #fff, rgba(0, 0, 0, 0) 35%);
  top: auto;
  left: 0;
  right: 0;
  bottom: 0;

}
</style>