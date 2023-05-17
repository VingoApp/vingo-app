<template>
    <ion-page>
        <toast-install />
        <div class="w-full h-screen flex flex-col items-center py-24 px-5">
            <div class="w-full flex flex-col items-center gap-2">
                <img class="w-24" src="/logo/logo.png" />
                <h1 class="text-md text-neutral-500 dark:text-neutral-400 font-medium">Trouvez les meilleurs articles</h1>
<!--                 <router-link to="/register" class="text-primary font-medium">S'inscrire</router-link> -->
            </div>

   <!--          <div class="w-full flex flex-col items-center gap-6 pt-12">
                <div class="w-full flex flex-col gap-2">
                    <label>Votre adresse email</label>
                    <input type="email" placeholder="example@domain.com" ref="email" name="email" class="w-full rounded-full border-neutral-200 dark:border-neutral-500 border py-3 px-4 focus:ring-black focus:dark:ring-white focus:ring-1 outline-none" id="email" />
                </div>
                <div class="w-full flex flex-col gap-2 relative">
                    <label>Votre mot de passe</label>
                    <input type="password" placeholder="**************" class="w-full rounded-full border-neutral-200 dark:border-neutral-500 border py-3 px-4 focus:ring-black focus:dark:ring-white focus:ring-1 outline-none" ref="password" name="password" id="password"/>
                    <svg v-if="eyesPassword" @click="eyesPassword = !eyesPassword" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 absolute top-2/4 mt-1 right-4 z-10 text-neutral-400">
                        <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                        <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                    </svg>
                    <svg v-else @click="eyesPassword = !eyesPassword" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 absolute top-2/4 mt-1 right-4 z-10 text-neutral-300">
                        <path fill-rule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clip-rule="evenodd" />
                        <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                    </svg>
                </div>

                <button @click="login()" type="submit" class="px-4 py-3 w-full rounded-full bg-primary text-white font-medium relative flex items-center justify-center active:bg-primaryactive group">
                    <span>Continuer</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 absolute right-4 group-active:translate-x-1 transition-all">
                        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            <div class="flex items-center w-full gap-1 py-5">
                <div class="w-full h-[1px] bg-neutral-500" />
                <p class="text-sm text-neutral-300 font-medium">ou</p>
                <div class="w-full h-[1px] bg-neutral-500" />
            </div> -->

            <div class="w-full flex flex-col items-center gap-4 pt-12">
                <a :href="env.VITE_API_URL+'/login/federated/google'" class="px-4 py-3 w-full rounded-full border border-neutral-200 dark:border-neutral-500 text-dark font-medium relative flex items-center justify-center active:bg-neutral-100 active:dark:bg-neutral-500 group gap-2">
                    <img class="w-5 h-5" src="/icons/google.svg" />
                    <span>S'inscrire avec Google</span>
                </a>
                <a :href="env.VITE_API_URL+'/login/federated/microsoft'" class="px-4 py-3 w-full rounded-full border border-neutral-200 dark:border-neutral-500 text-dark font-medium relative flex items-center justify-center active:bg-neutral-100 active:dark:bg-neutral-500 group gap-2">
                    <img class="w-5 h-5" src="/icons/microsoft.svg" />
                    <span>S'inscrire avec Microsoft</span>
                </a>
               <!--   <a class="px-4 py-3 w-full rounded-full border border-neutral-200 text-dark font-medium relative flex items-center justify-center active:bg-neutral-100 group gap-2">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="4 32 376.4 449.4" width="2230" height="2500"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                    <span>S'inscrire avec Apple</span>
                </a> -->
            </div>
        </div>
    </ion-page>
</template>

<script setup lang="ts">
import ToastInstall from '@/components/ToastInstall.vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
import { toastController, IonicSafeString } from '@ionic/vue';
import { setLocalStorage } from '../../mixins/auth.js';

export default defineComponent({
    data() {
        return {
            eyesPassword: false,
            setLocalStorage: setLocalStorage,
            env: import.meta.env
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
        async login() {
            let { email, password }:any = this.$refs
            if (!email || !password) return await this.presentToast("Une erreur s'est produite.")
            let response:any = await axios.post(this.env.VITE_API_URL + '/login', {
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    email: email?.value,
                    password: password?.value,
                }
            }).catch(async e => { console.log(e); return await this.presentToast(e.response?.data?.msg) })
            if (!response?.data.success) return
            console.log(response)
            this.setLocalStorage(response.data)
            this.$router.push({ path: 'home' })
        },
    },
})
</script>
