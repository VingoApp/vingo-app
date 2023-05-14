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
      <ion-list>
        <ion-card>
            <ion-card-header>
                <ion-card-title>Ralph Lauren</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Sweat / Pull / Polo
                <div v-if="!comboList['ralph_lauren_vetement']" @click="_addFilter('ralph_lauren_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('ralph_lauren_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>

            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-card-header>
                <ion-card-title>Nike</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Sweat / Pull / Jogging / Survêtements / Parachute Pants / Cargo
                <div class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-card-header>
                <ion-card-title>Tommy Hilfiger</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Sweat / Pull / Polo
                <div class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-card-header>
                <ion-card-title>Lacoste</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Sweat / Pull / Polo / Survêtements / Jogging
                <div class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-card-header>
                <ion-card-title>The North Face</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Sweat / Pull / Blouson
                <div class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-card-header>
                <ion-card-title>Jordan</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Sweat / Tee-shirt / Jogging/ Survêtements
                <div class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-card-header>
                <ion-card-title>Stussy</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Tee-shirt / Sweat / Pull / Jogging
                <div class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-card-header>
                <ion-card-title>Trapstar</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Sweat / Pull / Jogging / Survêtements
                <div class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-card-header>
                <ion-card-title>Corteiz</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Tee-shirt / Sweat / Pull / Jogging / Pantalon
                <div class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-card-header>
                <ion-card-title>Sneakers</ion-card-title>
                <ion-card-subtitle>👟 Chaussures — (38-44)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Nike / Jordan / Converse / Lacoste / Yeezy
                <div class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
            </ion-card-content>
        </ion-card>
      </ion-list>
      <!-- <NoResult name="Aucun filtre" description="Cliquez sur le + pour en créer un." /> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonCardContent, IonRippleEffect, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import NoResult from '@/components/NoResult.vue';
</script>


<script lang="ts">
import { defineComponent } from 'vue';
import { toastController } from '@ionic/vue';
import { addFilter, removeFilter } from '../mixins/filters.js'
import { getUser } from '@/mixins/user.js';
export default defineComponent({
    data() {
        return {
            comboList: [],
            addFilter: addFilter,
            removeFilter: removeFilter
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
        async _addFilter(id:any){
            let user = await addFilter(id)
            if (!user) return await this.presentToast("Une erreur s'est produite.")
        },
        async _removeFilter(id:any){
            let user = await removeFilter(id)
            if (!user) return await this.presentToast("Une erreur s'est produite.")
        }
    },
    async mounted() {
        let user = await getUser()
        if (!user) return await this.presentToast("Une erreur s'est produite.")
        this.comboList = user.comboId
        console.log(this.comboList)
    },
});
</script>

