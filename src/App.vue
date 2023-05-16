<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<script lang="ts">
import { defineComponent } from 'vue';
import { toastController } from '@ionic/vue';
export default defineComponent({
    mounted() {
        if ('serviceWorker' in window.navigator) {
            window.navigator.serviceWorker.register('/sw-notif.js', { scope: '/' })
        }
    },
})
</script>
