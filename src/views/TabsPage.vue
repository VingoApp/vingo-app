<template>
    <ion-page ref="page">
        <toast-install />
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button @click="askPermission" tab="home" href="/home">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    <p>Accueil</p>
                </ion-tab-button>

                <ion-tab-button @click="askPermission" tab="filters" href="/filters">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>

                    <p>Filtres</p>
                </ion-tab-button>

                <ion-tab-button @click="askPermission" tab="guides" href="/guides">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                    </svg>


                    <p>Guides</p>
                </ion-tab-button>

                <ion-tab-button @click="askPermission" tab="profil" href="/profil">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    <p>Profil</p>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import ToastInstall from '@/components/ToastInstall.vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonButtons,
    IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonInput, IonList, IonRange,
    IonSegment, IonSegmentButton
} from '@ionic/vue';
import { homeOutline, personCircleOutline, notifications, addCircleOutline, funnelOutline, flashOffOutline, flashOutline } from 'ionicons/icons';

import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonButtons,
        IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonInput, IonList, IonRange,
        IonSegment, IonSegmentButton,
        ToastInstall
    },
    data() {
        return {
            homeOutline,
            personCircleOutline,
            notifications,
            addCircleOutline,
            funnelOutline,
            flashOffOutline,
            flashOutline
        };
    },
    methods: {
        async askPermission() {
            /* if (!("Notification" in window)) return
            if (window?.Notification?.permission == "granted") return */
            Notification.requestPermission().then(async (permission) => {
                if (permission == "granted") {
                    await this.registerServiceWorker();
                }
            })
        },
        async registerServiceWorker() {
            let registration;
            let subscription;
            try {
                registration = await navigator.serviceWorker.register("/sw-notif.js", { scope: '/' });
                subscription = await registration.pushManager.getSubscription();
            } catch (e) {
                alert(e)
                console.log(e)
            }

            // L'utilisateur n'est pas déjà abonné, on l'abonne au notification push
            if (!subscription) {
                try {
                    subscription = await registration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: await this.getPublicKey(),
                    });
                } catch (e) {
                    alert(e)
                    console.log(e)
                }
            }
            await this.saveSubscription(subscription);
        },
        async saveSubscription(subscription) {
            await fetch(import.meta.env.VITE_API_URL + "/push/register", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + window.localStorage.getItem('token')
                },
                body: JSON.stringify(subscription.toJSON()),
            }).catch(e => {
                return console.log(e)
            })
        },
        async getPublicKey() {
            const key = await fetch(import.meta.env.VITE_API_URL +"/push/key", {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + window.localStorage.getItem('token')
                },
            }).then((r) => r.json());
            return key;
        },
    },

});
</script>
