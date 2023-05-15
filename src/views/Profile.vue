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
            <ion-card>
                <ion-card-header>
                    <ion-card-title>{{ user.username }}</ion-card-title>
                    <ion-card-subtitle>UTILISATEUR</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content class="flex items-center gap-1">
                    <h2 class="!font-bold">Votre offre : </h2>
                    <ion-chip v-if="user?.plan == 10" color="warning">Premium</ion-chip>
                    <ion-chip v-else>Gratuite</ion-chip>
                </ion-card-content>
            </ion-card>
            <div class="ion-padding flex flex-col gap-3">
                <div class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden bg-green-500 text-white">
                    <p class="text-center !text-base">Changer d'offre</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div @click="logout()" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden bg-red-500 text-white">
                    <p class="text-center !text-base">Se déconnecter</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
            </div>

           <!--  <ion-card>
                <ion-content>
                    <ion-card-header>
                        <ion-card-title>Test</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        Test
                    </ion-card-content>
                </ion-content>
            </ion-card> -->

            <NoResult v-if="!user" name="Impossible de charger le profil" />
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonList, IonRippleEffect } from '@ionic/vue';
import { toastController } from '@ionic/vue';
import NoResult from '@/components/NoResult.vue';
import { getUser } from '../mixins/user.js'
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip, IonRippleEffect, NoResult },
    data() {
        return {
            user: {}
        }
    },
    methods: {
        async presentToast(message:any) {
            const toast = await toastController.create({
                message: message,
                duration: 1500,
                position: 'top',
            });

            await toast.present();
        },
        logout() {
            window.localStorage.removeItem('token')
            window.location.reload()
        }
    },
    async mounted() {
        this.user = await getUser()
        if (!this.user?.id) return await this.presentToast("Une erreur s'est produite.")
    }
});
</script>

