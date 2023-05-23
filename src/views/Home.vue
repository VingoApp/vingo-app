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

            <ion-card v-for="item in feed" :key="item.id">
                <div class="relative h-60 w-full">
                    <div class="h-20 px-5 py-2.5 z-10 w-full absolute top-0 left-0 bg-gradient-to-b from-black to-transparent bg-opacity-50 opacity-70" />
                    <div class="w-full absolute top-0 left-0 px-5 py-2.5 z-20 flex items-center gap-2">
                        <div class="flex items-center gap-2">
                            <ion-img class="w-8 h-8 min-w-[2rem] rounded-full object-cover overflow-hidden bg-slate-400" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                            <p class="text-[16px] font-medium text-white">{{ item.sellerName }}</p>
                        </div>
                        <!-- <p class="text-white text-opacity-80 font-bold -mt-1">|</p>
                        <div class="flex items-center gap-1">
                            <div class="flex items-center w-fit">
                                <svg class="w-3 h-3 fill-amber-400" role="img" viewBox="0 0 24 24" aria-hidden="true"><title>1</title><path d="M10.19.63l-2.06,6H1.38a.88.88,0,0,0-.84.61.9.9,0,0,0,.33,1l5.4,3.87L3.94,19a.78.78,0,0,0,.11.68.75.75,0,0,0,.61.32.74.74,0,0,0,.45-.15L11,15.63V0A1,1,0,0,0,10.19.63Z" transform="translate(1 2)"></path>	<path d="M11.81.63l2.06,6h6.75a.88.88,0,0,1,.51,1.6l-5.4,3.87L18.06,19a.78.78,0,0,1-.11.68.75.75,0,0,1-.61.32.74.74,0,0,1-.45-.15L11,15.63V0A1,1,0,0,1,11.81.63Z" transform="translate(1 2)"></path></svg>
                                <svg class="w-3 h-3 fill-amber-400" role="img" viewBox="0 0 24 24" aria-hidden="true"><title>1</title><path d="M10.19.63l-2.06,6H1.38a.88.88,0,0,0-.84.61.9.9,0,0,0,.33,1l5.4,3.87L3.94,19a.78.78,0,0,0,.11.68.75.75,0,0,0,.61.32.74.74,0,0,0,.45-.15L11,15.63V0A1,1,0,0,0,10.19.63Z" transform="translate(1 2)"></path>	<path d="M11.81.63l2.06,6h6.75a.88.88,0,0,1,.51,1.6l-5.4,3.87L18.06,19a.78.78,0,0,1-.11.68.75.75,0,0,1-.61.32.74.74,0,0,1-.45-.15L11,15.63V0A1,1,0,0,1,11.81.63Z" transform="translate(1 2)"></path></svg>
                                <svg class="w-3 h-3 fill-amber-400" role="img" viewBox="0 0 24 24" aria-hidden="true"><title>1</title><path d="M10.19.63l-2.06,6H1.38a.88.88,0,0,0-.84.61.9.9,0,0,0,.33,1l5.4,3.87L3.94,19a.78.78,0,0,0,.11.68.75.75,0,0,0,.61.32.74.74,0,0,0,.45-.15L11,15.63V0A1,1,0,0,0,10.19.63Z" transform="translate(1 2)"></path>	<path d="M11.81.63l2.06,6h6.75a.88.88,0,0,1,.51,1.6l-5.4,3.87L18.06,19a.78.78,0,0,1-.11.68.75.75,0,0,1-.61.32.74.74,0,0,1-.45-.15L11,15.63V0A1,1,0,0,1,11.81.63Z" transform="translate(1 2)"></path></svg>
                                <svg class="w-3 h-3 fill-amber-400" role="img" viewBox="0 0 24 24" aria-hidden="true"><title>1</title><path d="M10.19.63l-2.06,6H1.38a.88.88,0,0,0-.84.61.9.9,0,0,0,.33,1l5.4,3.87L3.94,19a.78.78,0,0,0,.11.68.75.75,0,0,0,.61.32.74.74,0,0,0,.45-.15L11,15.63V0A1,1,0,0,0,10.19.63Z" transform="translate(1 2)"></path>	<path d="M11.81.63l2.06,6h6.75a.88.88,0,0,1,.51,1.6l-5.4,3.87L18.06,19a.78.78,0,0,1-.11.68.75.75,0,0,1-.61.32.74.74,0,0,1-.45-.15L11,15.63V0A1,1,0,0,1,11.81.63Z" transform="translate(1 2)"></path></svg>
                                <svg class="w-3 h-3 fill-amber-400" role="img" viewBox="0 0 24 24" aria-hidden="true"><title>1</title><path d="M10.19.63l-2.06,6H1.38a.88.88,0,0,0-.84.61.9.9,0,0,0,.33,1l5.4,3.87L3.94,19a.78.78,0,0,0,.11.68.75.75,0,0,0,.61.32.74.74,0,0,0,.45-.15L11,15.63V0A1,1,0,0,0,10.19.63Z" transform="translate(1 2)"></path>	<path d="M11.81.63l2.06,6h6.75a.88.88,0,0,1,.51,1.6l-5.4,3.87L18.06,19a.78.78,0,0,1-.11.68.75.75,0,0,1-.61.32.74.74,0,0,1-.45-.15L11,15.63V0A1,1,0,0,1,11.81.63Z" transform="translate(1 2)"></path></svg>
                            </div>
                            <p class="text-white">(293)</p>
                        </div> -->
                    </div>
                    <ion-img class="h-full w-full object-cover absolute top-0 left-0" onerror="this.onerror=null;this.src='https://static.rdc.moveaws.com/images/common/photos-coming-soon.svg';" :src="item.thumbnail" />
                </div>
                <ion-card-header>
                    <ion-card-title>{{ item.title }}</ion-card-title>
                    <ion-card-subtitle class="uppercase">{{ item.brand }} — {{ item.size }}</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content class="pb-3">
                    <!-- <p>Ensemble Nike, le sweat est une taille s et le jogging une taille m, en bon état général...</p> -->
                    <h2 class="text-lg !font-semibold">Prix: {{ item.price }}€ (Frais: ~{{ item.service_fee }}€)</h2>
                </ion-card-content>
                <ion-card-content class="pt-0">
                    <div class="flex gap-3">
                        <a :href="`https://www.vinted.fr/items/${item.itemId}`" target="_blank" class="ion-activatable ripple-parent h-fit w-full py-3 px-4 justify-center items-center relative rounded-xl overflow-hidden bg-primary text-white">
                            <p class="text-center !text-base whitespace-nowrap">Voir l'article</p>
                            <ion-ripple-effect></ion-ripple-effect>
                        </a>
                        <a :href="`https://www.vinted.fr/transaction/buy/new?source_screen=item&transaction%5Bitem_id%5D=${item.itemId}`" target="_blank" class="ion-activatable ripple-parent h-fit w-fit min-w-max py-3 px-4 justify-center items-center relative rounded-xl overflow-hidden border-primary border text-primary">
                            <p class="text-center !text-base whitespace-nowrap">Acheter</p>
                            <ion-ripple-effect></ion-ripple-effect>
                        </a>
                    </div>
                </ion-card-content>
            </ion-card>
            <NoResult v-if="feed.length == 0" name="Aucun article trouvé" :description="`Si vous n'avez pas de filtres, 
            créez-en un !`" />
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonCard, IonCardContent, IonButton, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar, IonImg, IonRippleEffect } from '@ionic/vue';
import NoResult from '@/components/NoResult.vue';
</script>

<script lang="ts">
import { defineComponent } from 'vue';
import { getUserFeed } from '../mixins/user.js'
export default defineComponent({
    components: { IonContent, IonHeader, IonRefresher, IonRefresherContent, IonTitle, IonToolbar },
    data() {
        return {
            feed: []
        }
    },
    methods: {
        handleRefresh(event: CustomEvent){
            setTimeout(async () => {
                this.feed = await getUserFeed()
                event.target?.complete();
            }, 2000);
        }
    },
    async mounted() {
        this.feed = await getUserFeed()
    },
});
</script>
