<script setup>
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useHeaderStore } from '@/stores/header';
import { storeToRefs } from 'pinia';
// import { ref, onMounted, onUnmounted, beforeUnmount } from 'vue';

const { menuToggle } = storeToRefs(useHeaderStore());


</script>

<template>
    <div id="sideBar" v-if="menuToggle" class="max-w-72 min-w-72 slideFromLeft">
        <div class="px-2 border-r-4 border-slate-200">
            <div class="uppercase font-bold text-xs cursor-pointer pt-5">planning</div>

            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'chart-line']" />
                <span class="text-stone-700">Dashboard</span>
            </div>

            <RouterLink to="/">
                <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                    <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                    <span class="text-stone-700">Home</span>
                </div>
            </RouterLink>

            <RouterLink to="/about">
                <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                    <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                    <span class="text-stone-700">About</span>
                </div>
            </RouterLink>

            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                <span class="text-stone-700">Goals</span>
            </div>
            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                <span class="text-stone-700">Goals</span>
            </div>
        </div>

        <div class="px-2 border-r-4 border-slate-200">
            <div class="uppercase font-bold text-xs cursor-pointer pt-5">Development</div>

            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'chart-line']" />
                <span class="text-stone-700">Code</span>
            </div>
            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'chart-line']" />
                <span class="text-stone-700">Code</span>
            </div>
            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'chart-line']" />
                <span class="text-stone-700">Code</span>
            </div>
            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                <span class="text-stone-700">Testing</span>
            </div>
            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                <span class="text-stone-700">Testing</span>
            </div>
            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                <span class="text-stone-700">Testing</span>
            </div>
            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                <span class="text-stone-700">Testing</span>
            </div>
            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                <span class="text-stone-700">Testing</span>
            </div>
            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                <span class="text-stone-700">Testing</span>
            </div>
            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                <span class="text-stone-700">Testing</span>
            </div>
            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                <span class="text-stone-700">Testing</span>
            </div>
            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                <span class="text-stone-700">Testing</span>
            </div>
            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                <span class="text-stone-700">Testing</span>
            </div>
            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                <span class="text-stone-700">Testing</span>
            </div>
            <div class="flex items-center space-x-3 py-2 hover:bg-blue-100 hover:cursor-pointer pl-4 rounded-md">
                <font-awesome-icon class="text-xl" :icon="['fas', 'circle-question']" />
                <span class="text-stone-700">Testing</span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
