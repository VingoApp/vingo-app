<template>
    <ion-modal animated="true" ref="modal" trigger="open-modal" @willDismiss="onWillDismiss" :presentingElement="presentingElement">
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
            <ion-list class="mt-3 rounded-xl overflow-hidden">
                <ion-item>
                    <ion-segment class="my-3" value="disabled">
                        <ion-segment-button value="disabled">
                        <ion-label>Email</ion-label>
                        </ion-segment-button>
                        <ion-segment-button value="segment">
                        <ion-label>Notification push</ion-label>
                        </ion-segment-button>
                    </ion-segment>
                </ion-item>
                <ion-item lines="none">
                    <ion-label position="stacked">Fréquence (par jour)</ion-label>
                    <div class="w-full px-[1rem] -mt-2.5">
                        <ion-range class=" w-full" aria-label="Range with ticks" :ticks="true" :pin="true" :pin-formatter="pinFormatter" :snaps="true" :min="0" :max="5"></ion-range>
                    </div>
                </ion-item>
            </ion-list>
            <ion-list class="mt-5 rounded-xl overflow-hidden">
                <ion-item>
                    <ion-label>Catégories</ion-label>
                    <ion-button fill="outline" expand="block">Ajouter</ion-button>
                </ion-item>
                <ion-item>
                    <ion-label>Marques</ion-label>
                    <ion-button fill="outline" expand="block">Ajouter</ion-button>
                </ion-item>
                <ion-item>
                    <ion-label>Tailles</ion-label>
                    <ion-button fill="outline" expand="block">Ajouter</ion-button>
                </ion-item>
                <ion-item>
                    <ion-label>Couleurs</ion-label>
                    <ion-button fill="outline" expand="block">Ajouter</ion-button>
                </ion-item>
                <ion-item lines="none">
                    <ion-label>État du produit</ion-label>
                    <ion-button fill="outline" expand="block">Ajouter</ion-button>
                </ion-item>
            </ion-list>
            <ion-list class="mt-3 rounded-xl overflow-hidden">
                <ion-item>
                    <ion-label aria-label="prix minimum" color="success">Prix minimum</ion-label>
                    <ion-input
                        placeholder="0"
                        type="number"
                        class="rounded-xl"
                    ></ion-input>
                </ion-item>
                <ion-item lines="none">
                    <ion-label aria-label="prix minimum" color="danger">Prix maximum</ion-label>
                    <ion-input
                        placeholder="100"
                        type="number"
                        class="rounded-xl"
                    ></ion-input>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-modal>
</template>


<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonButtons,
    IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonInput, IonList, IonRange,
    IonSegment, IonSegmentButton
} from '@ionic/vue';
import { homeOutline, personCircleOutline, notifications, addCircleOutline, funnelOutline, flashOffOutline, flashOutline } from 'ionicons/icons';

import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonButtons,
        IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonInput, IonList, IonRange,
        IonSegment, IonSegmentButton
    },
    setup() {
        return {
            pinFormatter: (value: number) => `${value} fois`,
        }
    },
    data() {
        return {
            homeOutline,
            personCircleOutline,
            notifications,
            addCircleOutline,
            funnelOutline,
            flashOffOutline,
            flashOutline,
            presentingElement: null,
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
    mounted() {
      this.presentingElement = this.$refs.page.$el;
    },

});
</script>
