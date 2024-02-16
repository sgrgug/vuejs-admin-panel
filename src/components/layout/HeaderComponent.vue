<script setup>
// import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useHeaderStore } from '@/stores/header'
import { storeToRefs } from 'pinia';


let { menuToggle } = storeToRefs(useHeaderStore());

const menuBtn = () => {
    menuToggle.value = !menuToggle.value;
}

</script>

<template>
    <div class=" bg-white sticky top-0 z-10">
        <div class="flex justify-between items-center p-2 lg:p-3 border-b-[1px]">
            <div class="flex justify-start items-center space-x-3">
                <div @click="menuBtn()"
                    class="text-2xl lg:text-lg text-zinc-600 bg-hover-pimary rounded-full w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
                    <font-awesome-icon :icon="['fas', 'bars']" />
                </div>
                <div class="font-semibold text-slate-800 text-base select-none">Demo Software</div>
            </div>
            <div class="flex items-center space-x-3">
                <div class="bg-hover-pimary hover:rounded-full flex justify-center items-center p-2 cursor-pointer text-lg">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </div>
                <div class="bg-hover-pimary hover:rounded-full flex justify-center items-center p-2 cursor-pointer">
                    <font-awesome-icon class="text-lg" :icon="['fas', 'circle-question']" />
                </div>
                <div
                    class="bg-hover-pimary hover:rounded-full flex justify-center items-center w-[30px] h-[30px] cursor-pointer text-lg">
                    <font-awesome-icon :icon="['far', 'bell']" />
                </div>
                <div class="text-white p-1 bg-hover-pimary hover:rounded-full cursor-pointer">
                    <div class="bg-purple-800 rounded-full p-1 text-xs">SG</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
