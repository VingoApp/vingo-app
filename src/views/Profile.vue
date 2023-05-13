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

            <ion-list class="theme-list" lines="full">
          <ion-item>
            <ion-icon slot="start" icon="moon" class="component-icon component-icon-dark"></ion-icon>
            <ion-toggle v-model="toggleValue" ionChange="handleToggleChange">
              Dark Mode
            </ion-toggle>
          </ion-item>
        </ion-list>


            <ion-card>
                <ion-card-header>
                    <ion-card-title>{{ user.username }}</ion-card-title>
                    <ion-card-subtitle>UTILISATEUR</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content class="flex items-center gap-1">
                    <h2 class="!font-bold">Votre offre : </h2><ion-chip>Gratuite</ion-chip>
                </ion-card-content>
            </ion-card>

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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip } from '@ionic/vue';
import NoResult from '@/components/NoResult.vue';
import { getUser } from '../mixins/user.js'
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonChip },
    setup() {
        const toggleValue = ref(false);

        const handleToggleChange = () => {
        console.log('Toggle value:', toggleValue.value);
        }

        return {
            toggleValue,
            handleToggleChange,
        }
    },
    data() {
        return {
            user: {}
        }
    },
    methods: {
        toggleDarkMode() {
            console.log('dark')
            document.body.classList.toggle('dark');
        }
    },
    async mounted() {
        this.user = await getUser()
        console.log(this.user)
    },
});
</script>

