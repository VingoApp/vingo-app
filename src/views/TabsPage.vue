<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home" href="/home">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    <p>Accueil</p>
                </ion-tab-button>

                <ion-tab-button tab="filters" href="/filters">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>

                    <p>Filtres</p>
                </ion-tab-button>

                <ion-button color="gray" size="large" id="open-modal" expand="block" fill="clear">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <!--     -->
                </ion-button>
                <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
                    <ion-header>
                        <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-button @click="cancel()">Cancel</ion-button>
                        </ion-buttons>
                        <ion-title>Welcome</ion-title>
                        <ion-buttons slot="end">
                            <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
                        </ion-buttons>
                        </ion-toolbar>
                    </ion-header>
                    <ion-content class="ion-padding">
                        <ion-list>
                            <ion-item>
                                <ion-input label="Text input" placeholder="Enter text"></ion-input>
                            </ion-item>
                        </ion-list>
                    </ion-content>
                </ion-modal>

                <ion-tab-button tab="notifs" href="/notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>

                    <p>Notif</p>
                </ion-tab-button>

                <ion-tab-button tab="profil" href="/profil">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    <p>Profil</p>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput, IonList } from '@ionic/vue';
</script>

<script lang="ts">

import { homeOutline, personCircleOutline, notifications, addCircleOutline, funnelOutline } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    data() {
        return {
            message: 'This modal example uses triggers to automatically open a modal when the button is clicked.',
            homeOutline,
            personCircleOutline,
            notifications,
            addCircleOutline,
            funnelOutline
        };
    },
    methods: {
        cancel() {
            this.$refs.modal.$el.dismiss(null, 'cancel');
        },
        confirm() {
            const name = this.$refs.input.$el.value;
            this.$refs.modal.$el.dismiss(name, 'confirm');
        },
        onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
            if (ev.detail.role === 'confirm') {
                this.message = `Hello, ${ev.detail.data}!`;
            }
        },
    },
});
</script>
