<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mes filtres</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Mes filtres</ion-title>
        </ion-toolbar>
      </ion-header>

      <NoResult name="Aucun filtre" description="Cliquez sur le + pour en créer un." />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import NoResult from '@/components/NoResult.vue';
</script>
