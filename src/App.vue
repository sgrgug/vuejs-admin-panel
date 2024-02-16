<script setup>
import HeaderComponent from './components/layout/HeaderComponent.vue';
import SideBarComponent from './components/layout/SideBarComponent.vue';
import { RouterView } from 'vue-router'

</script>

<template>
  <HeaderComponent />
  <div class="flex">
    <SideBarComponent />
    <RouterView class="flex-grow basis-60 border-l-2" />
  </div>
</template>

<style scoped></style>
