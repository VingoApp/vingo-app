<template>
  <ion-page id="page">
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
                <div v-if="!comboList.find(c=>c?.name=='ralph_lauren_vetement')" @click="_addFilter('ralph_lauren_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
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
                <div v-if="!comboList.find(c=>c?.name=='nike_vetement')" @click="_addFilter('nike_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('nike_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
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
                <div v-if="!comboList.find(c=>c?.name=='tommy_hilfiger_vetement')" @click="_addFilter('tommy_hilfiger_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('tommy_hilfiger_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
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
                <div v-if="!comboList.find(c=>c?.name=='lacoste_vetement')" @click="_addFilter('lacoste_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('lacoste_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
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
                <div v-if="!comboList.find(c=>c?.name=='the_north_face_vetement')" @click="_addFilter('the_north_face_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('the_north_face_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
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
                <div v-if="!comboList.find(c=>c?.name=='jodarn_vetement')" @click="_addFilter('jodarn_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('jodarn_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
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
                <div v-if="!comboList.find(c=>c?.name=='stussy_vetement')" @click="_addFilter('stussy_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('stussy_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
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
                <div v-if="!comboList.find(c=>c?.name=='trapstar_vetement')" @click="_addFilter('trapstar_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('trapstar_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
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
                <div v-if="!comboList.find(c=>c?.name=='corteiz_vetement')" @click="_addFilter('corteiz_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('corteiz_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
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
                <div v-if="!comboList.find(c=>c?.name=='sneakers')" id="open-modal" @click="selectCombo('sneakers')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('sneakers')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
            </ion-card-content>
        </ion-card>
    </ion-list>
    <!-- <NoResult name="Aucun filtre" description="Cliquez sur le + pour en créer un." /> -->
</ion-content>
<ion-modal animated="true" ref="modal" trigger="open-modal" @willDismiss="onWillDismiss" :presentingElement="presentingElement">
    <ion-header>
        <ion-toolbar>
        <ion-buttons slot="start">
            <ion-button @click="cancel()">Cancel</ion-button>
        </ion-buttons>
        <ion-title>Ajouter un filtre</ion-title>
        <ion-buttons slot="end">
            <ion-button :strong="true" @click="_addFilter(selectedCombo)">Confirm</ion-button>
        </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-list class="mt-3 rounded-xl overflow-hidden">
            <ion-item>
                <ion-segment :disabled="user?.plan == 0" class="my-3" value="disabled">
                    <ion-segment-button value="disabled">
                    <ion-label>Email</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="segment">
                    <ion-label>Notification push</ion-label>
                    </ion-segment-button>
                </ion-segment>
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
</ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonCardContent, IonRippleEffect, IonCardHeader, IonCardSubtitle, IonCardTitle, IonModal, IonInput, IonItem, IonSegment, IonSegmentButton, IonLabel, IonButtons, IonButton } from '@ionic/vue';
import NoResult from '@/components/NoResult.vue';
import FilterModal from '@/components/modals/Filter.vue'
import { defineComponent } from 'vue';
import { toastController } from '@ionic/vue';
import { addFilter, removeFilter } from '../mixins/filters.js'
import { getUser } from '@/mixins/user.js';
import { ref, onMounted } from 'vue';
export default defineComponent({
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonCardContent, IonRippleEffect, IonCardHeader, IonCardSubtitle, IonCardTitle, FilterModal, IonModal, IonInput, IonItem, IonSegment, IonSegmentButton, IonLabel, IonButtons, IonButton },
    data() {
        return {
            comboList: [],
            addFilter: addFilter,
            removeFilter: removeFilter,
            page: null,
            selectedCombo: null,
            presentingElement: null,
            user: null
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
        selectCombo(name:any) {
            this.selectedCombo = name
        },
        async _removeFilter(id:any){
            let user = await removeFilter(id)
            this.comboList = this.comboList.filter(c => c?.name != id)
            if (!user) return await this.presentToast("Une erreur s'est produite.")
        },
        async _addFilter(id:any){
            let user = await addFilter(id)
            if (!user) return await this.presentToast("Une erreur s'est produite.")
            this.$refs.modal.$el.dismiss(null, 'cancel');
            window.location.reload()
        },
    },
    async mounted() {
        this.user = await getUser()
        if (!this.user) return await this.presentToast("Une erreur s'est produite.")
        console.log(this.user)
        this.comboList = this.user?.combo
        this.presentingElement = window.document.getElementById('page')
    },
});
</script>

