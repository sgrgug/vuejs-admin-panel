<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
    <div>
        <div class="flex justify-between items-center p-2 lg:p-3 border-b-[1px]">
            <div class="flex justify-start items-center space-x-3">
                <div class="text-2xl lg:text-lg text-zinc-600 hover:bg-slate-200 rounded-full px-2 py-1 cursor-pointer">
                    <font-awesome-icon :icon="['fas', 'bars']" />
                </div>
                <div class="font-semibold text-slate-800 text-base">Demo Software</div>
            </div>
            <div class="flex items-center space-x-3">
                <div
                    class="hover:bg-slate-200 hover:rounded-full flex justify-center items-center p-2 cursor-pointer text-lg">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </div>
                <div class="hover:bg-slate-200 hover:rounded-full flex justify-center items-center p-2 cursor-pointer">
                    <font-awesome-icon class="text-lg" :icon="['fas', 'circle-question']" />
                </div>
                <div
                    class="hover:bg-slate-200 hover:rounded-full flex justify-center items-center p-2 cursor-pointer text-lg">
                    <font-awesome-icon :icon="['far', 'bell']" />
                </div>
                <div class="text-white p-1 hover:bg-slate-200 hover:rounded-full cursor-pointer">
                    <div class="bg-purple-800 rounded-full p-1 text-xs">SG</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
