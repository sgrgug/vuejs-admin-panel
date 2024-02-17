<script setup>
import HeaderComponent from './components/layout/HeaderComponent.vue';
import SideBarComponent from './components/layout/SideBarComponent.vue';
import { RouterView } from 'vue-router'
import { useHeaderStore } from '@/stores/header';
import { storeToRefs } from 'pinia';

const { menuToggle } = storeToRefs(useHeaderStore());

</script>

<template>
  <HeaderComponent />
  <div class="flex">
    <SideBarComponent />
    <RouterView class="flex-grow border-l-2" :class="{ 'sl1' : menuToggle, 'sl2' : !menuToggle }"/>
  </div>
</template>

<style scoped>
@keyframes sl1 {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: 240px;
  }
}
@keyframes sl2 {
  0% {
    margin-left: 240px;
  }
  100% {
    margin-left: 0;
  }
}
.sl1 {
  animation: sl1 0.5s ease-in-out forwards;
}
.sl2 {
  animation: sl2 0.5s ease-in-out forwards;
}
</style>
