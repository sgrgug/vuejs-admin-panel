<script setup>
import HeaderComponent from './components/layout/HeaderComponent.vue';
import SideBarComponent from './components/layout/SideBarComponent.vue';
import { RouterView } from 'vue-router'

</script>

<template>
  <HeaderComponent />
  <div class="flex">
    <SideBarComponent />
    <RouterView class="flex-grow"/>
  </div>
</template>

<style scoped></style>
