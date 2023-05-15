<template>

</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonButtons,
    IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonInput, IonList, IonRange,
    IonSegment, IonSegmentButton
} from '@ionic/vue';
import { homeOutline, personCircleOutline, notifications, addCircleOutline, funnelOutline, flashOffOutline, flashOutline } from 'ionicons/icons';

import { defineComponent, ref } from 'vue';
import { toastController } from '@ionic/vue';
import { addFilter } from '@/mixins/filters.js'
export default defineComponent({
    props: ['comboName', 'page'],
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
            addFilter: addFilter,
        };
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
    },
    mounted() {
        this.presentingElement = this.$refs.page
    },

});
</script>
