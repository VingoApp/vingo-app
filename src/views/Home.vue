<template>
    <ion-page>
        <ion-header translucent>
            <ion-toolbar>
                <ion-title>Annonces</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="false">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Annonces</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-searchbar class="-my-2" placeholder="Rechercher"></ion-searchbar>
            <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
                <ion-refresher-content></ion-refresher-content>
            </ion-refresher>

            <ion-card>
                <div class="relative h-60 w-full">
                    <div class="h-20 px-5 py-2.5 z-10 w-full absolute top-0 left-0 bg-gradient-to-b from-black to-transparent bg-opacity-50 opacity-70" />
                    <div class="w-full absolute top-0 left-0 px-5 py-2.5 z-20 flex items-center gap-2">
                        <div class="flex items-center gap-2">
                            <img class="w-8 h-8 min-w-[2rem] rounded-full object-cover" src="https://images1.vinted.net/t/02_02675_wJCLSBTBSMeoAbgDrCv7us26/f800/1658664034.jpeg?s=ec8c2df352653ec06922f79d23792a38c1071e7e" />
                            <p class="text-[16px] font-medium text-white">Valerie06</p>
                        </div>
                        <p class="text-white text-opacity-80 font-bold -mt-1">|</p>
                        <div class="flex items-center gap-1">
                            <div class="flex items-center w-fit">
                                <svg class="w-3 h-3 fill-amber-400" role="img" viewBox="0 0 24 24" aria-hidden="true"><title>1</title><path d="M10.19.63l-2.06,6H1.38a.88.88,0,0,0-.84.61.9.9,0,0,0,.33,1l5.4,3.87L3.94,19a.78.78,0,0,0,.11.68.75.75,0,0,0,.61.32.74.74,0,0,0,.45-.15L11,15.63V0A1,1,0,0,0,10.19.63Z" transform="translate(1 2)"></path>	<path d="M11.81.63l2.06,6h6.75a.88.88,0,0,1,.51,1.6l-5.4,3.87L18.06,19a.78.78,0,0,1-.11.68.75.75,0,0,1-.61.32.74.74,0,0,1-.45-.15L11,15.63V0A1,1,0,0,1,11.81.63Z" transform="translate(1 2)"></path></svg>
                                <svg class="w-3 h-3 fill-amber-400" role="img" viewBox="0 0 24 24" aria-hidden="true"><title>1</title><path d="M10.19.63l-2.06,6H1.38a.88.88,0,0,0-.84.61.9.9,0,0,0,.33,1l5.4,3.87L3.94,19a.78.78,0,0,0,.11.68.75.75,0,0,0,.61.32.74.74,0,0,0,.45-.15L11,15.63V0A1,1,0,0,0,10.19.63Z" transform="translate(1 2)"></path>	<path d="M11.81.63l2.06,6h6.75a.88.88,0,0,1,.51,1.6l-5.4,3.87L18.06,19a.78.78,0,0,1-.11.68.75.75,0,0,1-.61.32.74.74,0,0,1-.45-.15L11,15.63V0A1,1,0,0,1,11.81.63Z" transform="translate(1 2)"></path></svg>
                                <svg class="w-3 h-3 fill-amber-400" role="img" viewBox="0 0 24 24" aria-hidden="true"><title>1</title><path d="M10.19.63l-2.06,6H1.38a.88.88,0,0,0-.84.61.9.9,0,0,0,.33,1l5.4,3.87L3.94,19a.78.78,0,0,0,.11.68.75.75,0,0,0,.61.32.74.74,0,0,0,.45-.15L11,15.63V0A1,1,0,0,0,10.19.63Z" transform="translate(1 2)"></path>	<path d="M11.81.63l2.06,6h6.75a.88.88,0,0,1,.51,1.6l-5.4,3.87L18.06,19a.78.78,0,0,1-.11.68.75.75,0,0,1-.61.32.74.74,0,0,1-.45-.15L11,15.63V0A1,1,0,0,1,11.81.63Z" transform="translate(1 2)"></path></svg>
                                <svg class="w-3 h-3 fill-amber-400" role="img" viewBox="0 0 24 24" aria-hidden="true"><title>1</title><path d="M10.19.63l-2.06,6H1.38a.88.88,0,0,0-.84.61.9.9,0,0,0,.33,1l5.4,3.87L3.94,19a.78.78,0,0,0,.11.68.75.75,0,0,0,.61.32.74.74,0,0,0,.45-.15L11,15.63V0A1,1,0,0,0,10.19.63Z" transform="translate(1 2)"></path>	<path d="M11.81.63l2.06,6h6.75a.88.88,0,0,1,.51,1.6l-5.4,3.87L18.06,19a.78.78,0,0,1-.11.68.75.75,0,0,1-.61.32.74.74,0,0,1-.45-.15L11,15.63V0A1,1,0,0,1,11.81.63Z" transform="translate(1 2)"></path></svg>
                                <svg class="w-3 h-3 fill-amber-400" role="img" viewBox="0 0 24 24" aria-hidden="true"><title>1</title><path d="M10.19.63l-2.06,6H1.38a.88.88,0,0,0-.84.61.9.9,0,0,0,.33,1l5.4,3.87L3.94,19a.78.78,0,0,0,.11.68.75.75,0,0,0,.61.32.74.74,0,0,0,.45-.15L11,15.63V0A1,1,0,0,0,10.19.63Z" transform="translate(1 2)"></path>	<path d="M11.81.63l2.06,6h6.75a.88.88,0,0,1,.51,1.6l-5.4,3.87L18.06,19a.78.78,0,0,1-.11.68.75.75,0,0,1-.61.32.74.74,0,0,1-.45-.15L11,15.63V0A1,1,0,0,1,11.81.63Z" transform="translate(1 2)"></path></svg>
                            </div>
                            <p class="text-white">(293)</p>
                        </div>
                    </div>
                    <img class="h-full w-full object-cover absolute top-0 left-0" src="https://images1.vinted.net/t/03_00dbb_3koAcPA9Juw7SebtvJv7Kn5L/f800/1683216876.jpeg?s=a4654c85409b26f7e877c7f78b2e2ac41c86fe20" />
                </div>
                <ion-card-header>
                    <ion-card-title>Ensemble Nike</ion-card-title>
                    <ion-card-subtitle>NIKE — S</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                    <p>Ensemble Nike, le sweat est une taille s et le jogging une taille m, en bon état général...</p>
                    <h2 class="text-lg !font-bold pt-2">Prix: 34,50€</h2>
                </ion-card-content>
                <ion-card-content class="pt-0">
                    <div class="flex gap-2">
                        <ion-button >Réserver</ion-button>
                        <ion-button fill="outline" >Voir détails</ion-button>
                    </div>
                </ion-card-content>
            </ion-card>

            <ion-card>
                <div class="relative h-60 w-full">
                    <div class="h-20 px-5 py-2.5 z-10 w-full absolute top-0 left-0 bg-gradient-to-b from-black to-transparent bg-opacity-50 opacity-70" />
                    <div class="w-full absolute top-0 left-0 px-5 py-2.5 z-20 flex items-center gap-2">
                        <div class="flex items-center gap-2">
                            <img class="w-8 h-8 min-w-[2rem] rounded-full object-cover" src="https://www.vinted.fr/assets/no-photo/user-empty-state.svg" />
                            <p class="text-[16px] font-medium text-white">enza.jouet</p>
                        </div>
                        <p class="text-white text-opacity-80 font-bold -mt-1">|</p>
                        <div class="flex items-center gap-1">
                            <div class="flex items-center w-fit">
                                <svg class="w-3 h-3 fill-amber-400" role="img" viewBox="0 0 24 24" aria-hidden="true"><title>1</title><path d="M10.19.63l-2.06,6H1.38a.88.88,0,0,0-.84.61.9.9,0,0,0,.33,1l5.4,3.87L3.94,19a.78.78,0,0,0,.11.68.75.75,0,0,0,.61.32.74.74,0,0,0,.45-.15L11,15.63V0A1,1,0,0,0,10.19.63Z" transform="translate(1 2)"></path>	<path d="M11.81.63l2.06,6h6.75a.88.88,0,0,1,.51,1.6l-5.4,3.87L18.06,19a.78.78,0,0,1-.11.68.75.75,0,0,1-.61.32.74.74,0,0,1-.45-.15L11,15.63V0A1,1,0,0,1,11.81.63Z" transform="translate(1 2)"></path></svg>
                                <svg class="w-3 h-3 fill-amber-400" role="img" viewBox="0 0 24 24" aria-hidden="true"><title>1</title><path d="M10.19.63l-2.06,6H1.38a.88.88,0,0,0-.84.61.9.9,0,0,0,.33,1l5.4,3.87L3.94,19a.78.78,0,0,0,.11.68.75.75,0,0,0,.61.32.74.74,0,0,0,.45-.15L11,15.63V0A1,1,0,0,0,10.19.63Z" transform="translate(1 2)"></path>	<path d="M11.81.63l2.06,6h6.75a.88.88,0,0,1,.51,1.6l-5.4,3.87L18.06,19a.78.78,0,0,1-.11.68.75.75,0,0,1-.61.32.74.74,0,0,1-.45-.15L11,15.63V0A1,1,0,0,1,11.81.63Z" transform="translate(1 2)"></path></svg>
                                <svg class="w-3 h-3 fill-amber-400" role="img" viewBox="0 0 24 24" aria-hidden="true"><title>1</title><path d="M10.19.63l-2.06,6H1.38a.88.88,0,0,0-.84.61.9.9,0,0,0,.33,1l5.4,3.87L3.94,19a.78.78,0,0,0,.11.68.75.75,0,0,0,.61.32.74.74,0,0,0,.45-.15L11,15.63V0A1,1,0,0,0,10.19.63Z" transform="translate(1 2)"></path>	<path d="M11.81.63l2.06,6h6.75a.88.88,0,0,1,.51,1.6l-5.4,3.87L18.06,19a.78.78,0,0,1-.11.68.75.75,0,0,1-.61.32.74.74,0,0,1-.45-.15L11,15.63V0A1,1,0,0,1,11.81.63Z" transform="translate(1 2)"></path></svg>
                                <svg class="w-3 h-3 fill-amber-400" role="img" viewBox="0 0 24 24" aria-hidden="true"><title>1</title><path d="M10.19.63l-2.06,6H1.38a.88.88,0,0,0-.84.61.9.9,0,0,0,.33,1l5.4,3.87L3.94,19a.78.78,0,0,0,.11.68.75.75,0,0,0,.61.32.74.74,0,0,0,.45-.15L11,15.63V0A1,1,0,0,0,10.19.63Z" transform="translate(1 2)"></path>	<path d="M11.81.63l2.06,6h6.75a.88.88,0,0,1,.51,1.6l-5.4,3.87L18.06,19a.78.78,0,0,1-.11.68.75.75,0,0,1-.61.32.74.74,0,0,1-.45-.15L11,15.63V0A1,1,0,0,1,11.81.63Z" transform="translate(1 2)"></path></svg>
                                <svg class="w-3 h-3" role="img" viewBox="0 0 24 24" aria-hidden="true"><title>1</title><path class="fill-amber-400" d="M10.19.63l-2.06,6H1.38a.88.88,0,0,0-.84.61.9.9,0,0,0,.33,1l5.4,3.87L3.94,19a.78.78,0,0,0,.11.68.75.75,0,0,0,.61.32.74.74,0,0,0,.45-.15L11,15.63V0A1,1,0,0,0,10.19.63Z" transform="translate(1 2)"></path>	<path class="fill-neutral-300" d="M11.81.63l2.06,6h6.75a.88.88,0,0,1,.51,1.6l-5.4,3.87L18.06,19a.78.78,0,0,1-.11.68.75.75,0,0,1-.61.32.74.74,0,0,1-.45-.15L11,15.63V0A1,1,0,0,1,11.81.63Z" transform="translate(1 2)"></path></svg></div>
                            <p class="text-white">(27)</p>
                        </div>
                    </div>
                    <img class="h-full w-full object-cover absolute top-0 left-0" src="https://images1.vinted.net/t/02_026c9_vxLGB2Pk4NNjM6Voe8NHEYaC/f800/1683481382.jpeg?s=70eedf49de170b1975f23260cb1ca8efda7aecbb" />
                </div>
                <ion-card-header>
                    <ion-card-title>Ensemble Nike 3-6 mois</ion-card-title>
                    <ion-card-subtitle>NIKE — 3-6 MOIS / 62 CM</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                    <p>Taille jusqu’à 6 mois.</p>
                    <h2 class="text-lg !font-bold pt-2">Prix: 10,00€</h2>
                </ion-card-content>
                <ion-card-content class="pt-0">
                    <div class="flex gap-2">
                        <ion-button >Réserver</ion-button>
                        <ion-button fill="outline" >Voir détails</ion-button>
                    </div>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonCard, IonCardContent, IonButton, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar } from '@ionic/vue';
</script>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        components: { IonContent, IonHeader, IonRefresher, IonRefresherContent, IonTitle, IonToolbar },

        methods: {
            handleRefresh(event: CustomEvent){
                setTimeout(() => {
                // Any calls to load data go here
                event.target.complete();
                }, 2000);
            }
        },
    });
</script>
