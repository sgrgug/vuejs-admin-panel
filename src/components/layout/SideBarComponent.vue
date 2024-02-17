<script setup>
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useHeaderStore } from '@/stores/header';
import { storeToRefs } from 'pinia';

const { menuToggle } = storeToRefs(useHeaderStore());

</script>

<template>
    <div class="bg-white max-w-60 fixed top-14" :class="{ 'slideFromLeft': menuToggle, 'slideToLeft': !menuToggle }">
        <div class="px-2 h-[80vh] overflow-hidden hover:overflow-y-scroll custom-scrollbar">
            <div class="">
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

            <div class="">
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
        <div class="h-[20vh] text-center text-nowrap">
            <hr>
            <div class="text-xs pt-5">
                You're in a team-managed project
            </div>
            <div class="font-semibold pt-1 text-xs">Learn More</div>
        </div>
    </div>
</template>

<style scoped>
@keyframes slideFromLeft {
    0% {
        width: 0%;
        transform: translateX(-240px);
    }

    100% {
        transform: translateX(0);
        width: 240px;
    }
}

@keyframes slideToLeft {
    0% {
        width: 240px;
        transform: translateX(0);
    }

    100% {
        width: 0%;
        transform: translateX(-240px);
    }
}

.slideToLeft {
    animation: slideToLeft .5s ease-in-out forwards;
}

.slideFromLeft {
    animation: slideFromLeft .5s ease-in-out forwards;
}
</style>
