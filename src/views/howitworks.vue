<template>
    <ion-page>
        <div class="p-5 py-24 !overflow-y-scroll !h-full">
            <toast-install />
    <!--         <img src="/icons/icon_192x192.png" class="w-20 mb-5"/>
            <div class="flex flex-col pb-2">
                <h1 class="text-dark dark:text-white text-3xl font-bold">Vingo</h1>
            </div>
            <p class="text-dark dark:text-white text-2xl pb-5">Comment installer l'application ?</p> -->

            <div class="!overflow-y-scroll h-fit" v-if="os == 'ios'">
                <p class="text-primary text-xl font-medium pb-3">Étape n°1</p>
                <img src="how_it_works/ios/1.PNG" class="w-full mb-5 rounded-xl border border-light dark:border-secondary"/>
                <p class="text-primary text-xl font-medium pb-3">Étape n°2</p>
                <img src="how_it_works/ios/2.PNG" class="w-full mb-5 rounded-xl border border-light dark:border-secondary"/>
                <p class="text-primary text-xl font-medium pb-3">Étape n°3</p>
                <img src="how_it_works/ios/3.PNG" class="w-full mb-5 rounded-xl border border-light dark:border-secondary"/>
                <p class="text-dark dark:text-white text-2xl font-medium pb-3 w-full text-center pt-5">Et voilà ! 🎉</p>
            </div>
            <div v-else>
                <p class="text-primary text-xl font-medium pb-3">Étape n°1</p>
                <img src="how_it_works/ios/1.PNG" class="w-full mb-5 rounded-xl border border-light dark:border-secondary"/>
                <p class="text-primary text-xl font-medium pb-3">Étape n°2</p>
                <img src="how_it_works/ios/2.PNG" class="w-full mb-5 rounded-xl border border-light dark:border-secondary"/>
                <p class="text-primary text-xl font-medium pb-3">Étape n°3</p>
                <img src="how_it_works/ios/3.PNG" class="w-full mb-5 rounded-xl border border-light dark:border-secondary"/>
                <p class="text-dark dark:text-white text-2xl font-medium pb-3 w-full text-center pt-5">Et voilà ! 🎉</p>
            </div>

            <div class="ion-padding flex flex-col gap-3">
                <div @click="backHome" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden bg-primary text-white">
                    <p class="text-center !text-base">Revenir à l'accueil</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
            </div>
        </div>
    </ion-page>
</template>

<script lang="ts">
import ToastInstall from "@/components/ToastInstall.vue"
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonCardContent, IonRippleEffect, IonCardHeader, IonCardSubtitle, IonCardTitle, IonModal, IonInput, IonItem, IonSegment, IonSegmentButton, IonLabel, IonButtons, IonButton } from '@ionic/vue';

export default {
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonCardContent, IonRippleEffect, IonCardHeader, IonCardSubtitle, IonCardTitle, IonModal, IonInput, IonItem, IonSegment, IonSegmentButton, IonLabel, IonButtons, IonButton, ToastInstall },
    data() {
        return {
            os: null
        }
    },
    mounted() {
        this.os = /^iP/.test(navigator.platform) ? 'ios' : 'android'
    },
    methods: {
        backHome() {
            this.$router.push({ path: "/home"})
        }
    },
}
</script>