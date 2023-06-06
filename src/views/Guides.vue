<template>
  <ion-page>
    <ion-header class="header-patch">
      <ion-toolbar>
        <ion-title>Guides</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Guides</ion-title>
        </ion-toolbar>
      </ion-header>

      <NoResult name="Aucun guide" description="Les guides arrivent bientôt." />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import NoResult from '@/components/NoResult.vue';
</script>
