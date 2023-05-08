<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mon profil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Mon profil</ion-title>
        </ion-toolbar>
      </ion-header>

      <NoResult name="Impossible de charger le profil" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import NoResult from '@/components/NoResult.vue';
</script>
