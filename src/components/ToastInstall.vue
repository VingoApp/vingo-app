<template>
  <div v-if="show" class="w-full h-fit fixed top-0 left-0 flex items-center gap-2 bg-white dark:bg-black z-[99] py-4 shadow-lg px-4 justify-between">
    <div class="flex items-center gap-2">
        <svg @click="close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 opacity-50">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <img src="icons/icon_512x512.png" class="w-14 h-14 rounded-xl mr-1.5" />
        <div class="flex flex-col">
            <p class="font-bold text-lg">Installez l'application</p>
            <p class="opacity-60">Cliquez et suivez le tuto</p>
        </div>
    </div>
    <div @click="tuto" class="px-4 py-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
    </div>
    

  </div>
</template>

<script setup lang="ts">
defineProps({
    name: String,
    description: String
});
</script>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    data() {
        return {
            show: true
        }
    },
    methods: {
        close() {
            this.show = false
        },
        tuto() {
            
        }
    },
})
</script>