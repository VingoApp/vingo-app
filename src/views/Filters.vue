<template>
  <ion-page id="page">
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Mes filtres</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="false">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Mes filtres</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
            <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
      <ion-list>
        <ion-card id="ralph_lauren_vetement">
            <ion-card-header>
                <ion-card-title>Ralph Lauren</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (S/M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Sweat / Pull / Polo
                <div v-if="!comboList?.find(c=>c?.name=='ralph_lauren_vetement')" id="open-ralph_lauren_vetement" @click="selectCombo('ralph_lauren_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('ralph_lauren_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <ion-modal animated="true" ref="ralph_lauren_vetement" trigger="open-ralph_lauren_vetement" @willDismiss="onWillDismiss" :presentingElement="presentingElement">
                    <ion-header>
                        <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-button @click="cancel('ralph_lauren_vetement')">Cancel</ion-button>
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
                                <ion-label aria-label="prix minimum" color="success">Prix minimum</ion-label>
                                <ion-input
                                    placeholder="0"
                                    type="number"
                                    name="priceDown"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                            <ion-item lines="none">
                                <ion-label aria-label="prix maximum" color="danger">Prix maximum</ion-label>
                                <ion-input
                                    placeholder="100"
                                    type="number"
                                    name="priceUp"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                        </ion-list>
                    </ion-content>
                </ion-modal>
            </ion-card-content>
        </ion-card>
        <ion-card id="nike_vetement">
            <ion-card-header>
                <ion-card-title>Nike</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (S/M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Sweat / Pull / Jogging / Survêtements / Parachute Pants / Cargo
                <div v-if="!comboList?.find(c=>c?.name=='nike_vetement')" id="open-nike_vetement" @click="selectCombo('nike_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('nike_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <ion-modal animated="true" ref="nike_vetement" trigger="open-nike_vetement" @willDismiss="onWillDismiss" :presentingElement="presentingElement">
                    <ion-header>
                        <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-button @click="cancel('nike_vetement')">Cancel</ion-button>
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
                                <ion-label aria-label="prix minimum" color="success">Prix minimum</ion-label>
                                <ion-input
                                    placeholder="0"
                                    type="number"
                                    name="priceDown"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                            <ion-item lines="none">
                                <ion-label aria-label="prix maximum" color="danger">Prix maximum</ion-label>
                                <ion-input
                                    placeholder="100"
                                    type="number"
                                    name="priceUp"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                        </ion-list>
                    </ion-content>
                </ion-modal>
            </ion-card-content>
        </ion-card>
        <ion-card id=tommy_hilfiger_vetement>
            <ion-card-header>
                <ion-card-title>Tommy Hilfiger</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (S/M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Sweat / Pull / Polo
                <div v-if="!comboList?.find(c=>c?.name=='tommy_hilfiger_vetement')" id="open-tommy_hilfiger_vetement" @click="selectCombo('tommy_hilfiger_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('tommy_hilfiger_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <ion-modal animated="true" ref="tommy_hilfiger_vetement" trigger="open-tommy_hilfiger_vetement" @willDismiss="onWillDismiss" :presentingElement="presentingElement">
                    <ion-header>
                        <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-button @click="cancel('tommy_hilfiger_vetement')">Cancel</ion-button>
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
                                <ion-label aria-label="prix minimum" color="success">Prix minimum</ion-label>
                                <ion-input
                                    placeholder="0"
                                    type="number"
                                    name="priceDown"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                            <ion-item lines="none">
                                <ion-label aria-label="prix maximum" color="danger">Prix maximum</ion-label>
                                <ion-input
                                    placeholder="100"
                                    type="number"
                                    name="priceUp"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                        </ion-list>
                    </ion-content>
                </ion-modal>
            </ion-card-content>
        </ion-card>
        <ion-card id="lacoste_vetement">
            <ion-card-header>
                <ion-card-title>Lacoste</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (S/M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Sweat / Pull / Polo / Survêtements / Jogging
                <div v-if="!comboList?.find(c=>c?.name=='lacoste_vetement')" id="open-lacoste_vetement" @click="selectCombo('lacoste_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('lacoste_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <ion-modal animated="true" ref="lacoste_vetement" trigger="open-lacoste_vetement" @willDismiss="onWillDismiss" :presentingElement="presentingElement">
                    <ion-header>
                        <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-button @click="cancel('lacoste_vetement')">Cancel</ion-button>
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
                                <ion-label aria-label="prix minimum" color="success">Prix minimum</ion-label>
                                <ion-input
                                    placeholder="0"
                                    type="number"
                                    name="priceDown"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                            <ion-item lines="none">
                                <ion-label aria-label="prix maximum" color="danger">Prix maximum</ion-label>
                                <ion-input
                                    placeholder="100"
                                    type="number"
                                    name="priceUp"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                        </ion-list>
                    </ion-content>
                </ion-modal>
            </ion-card-content>
        </ion-card>
        <ion-card id="the_north_face_vetement">
            <ion-card-header>
                <ion-card-title>The North Face</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (S/M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Sweat / Pull / Blouson
                <div v-if="!comboList?.find(c=>c?.name=='the_north_face_vetement')" id="open-the_north_face_vetement" @click="selectCombo('the_north_face_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('the_north_face_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <ion-modal animated="true" ref="the_north_face_vetement" trigger="open-the_north_face_vetement" @willDismiss="onWillDismiss" :presentingElement="presentingElement">
                    <ion-header>
                        <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-button @click="cancel('the_north_face_vetement')">Cancel</ion-button>
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
                                <ion-label aria-label="prix minimum" color="success">Prix minimum</ion-label>
                                <ion-input
                                    placeholder="0"
                                    type="number"
                                    name="priceDown"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                            <ion-item lines="none">
                                <ion-label aria-label="prix maximum" color="danger">Prix maximum</ion-label>
                                <ion-input
                                    placeholder="100"
                                    type="number"
                                    name="priceUp"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                        </ion-list>
                    </ion-content>
                </ion-modal>
            </ion-card-content>
        </ion-card>
        <ion-card id="jodarn_vetement">
            <ion-card-header>
                <ion-card-title>Jordan</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (S/M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Sweat / Tee-shirt / Jogging/ Survêtements
                <div v-if="!comboList?.find(c=>c?.name=='jodarn_vetement')" id="open-jodarn_vetement" @click="selectCombo('jodarn_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('jodarn_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <ion-modal animated="true" ref="jodarn_vetement" trigger="open-jodarn_vetement" @willDismiss="onWillDismiss" :presentingElement="presentingElement">
                    <ion-header>
                        <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-button @click="cancel('jodarn_vetement')">Cancel</ion-button>
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
                                <ion-label aria-label="prix minimum" color="success">Prix minimum</ion-label>
                                <ion-input
                                    placeholder="0"
                                    type="number"
                                    name="priceDown"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                            <ion-item lines="none">
                                <ion-label aria-label="prix maximum" color="danger">Prix maximum</ion-label>
                                <ion-input
                                    placeholder="100"
                                    name="priceUp"
                                    type="number"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                        </ion-list>
                    </ion-content>
                </ion-modal>
            </ion-card-content>
        </ion-card>
        <ion-card id="stussy_vetement">
            <ion-card-header>
                <ion-card-title>Stussy</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (S/M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Tee-shirt / Sweat / Pull / Jogging
                <div v-if="!comboList?.find(c=>c?.name=='stussy_vetement')" id="open-stussy_vetement" @click="selectCombo('stussy_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('stussy_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <ion-modal animated="true" ref="stussy_vetement" trigger="open-stussy_vetement" @willDismiss="onWillDismiss" :presentingElement="presentingElement">
                    <ion-header>
                        <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-button @click="cancel('stussy_vetement')">Cancel</ion-button>
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
                                <ion-label aria-label="prix minimum" color="success">Prix minimum</ion-label>
                                <ion-input
                                    placeholder="0"
                                    type="number"
                                    name="priceDown"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                            <ion-item lines="none">
                                <ion-label aria-label="prix maximum" color="danger">Prix maximum</ion-label>
                                <ion-input
                                    placeholder="100"
                                    type="number"
                                    name="priceUp"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                        </ion-list>
                    </ion-content>
                </ion-modal>
            </ion-card-content>
        </ion-card>
        <ion-card id="trapstar_vetement">
            <ion-card-header>
                <ion-card-title>Trapstar</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (S/M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Sweat / Pull / Jogging / Survêtements
                <div v-if="!comboList?.find(c=>c?.name=='trapstar_vetement')" id="open-trapstar_vetement" @click="selectCombo('trapstar_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('trapstar_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <ion-modal animated="true" ref="trapstar_vetement" trigger="open-trapstar_vetement" @willDismiss="onWillDismiss" :presentingElement="presentingElement">
                    <ion-header>
                        <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-button @click="cancel('trapstar_vetement')">Cancel</ion-button>
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
                                <ion-label aria-label="prix minimum" color="success">Prix minimum</ion-label>
                                <ion-input
                                    placeholder="0"
                                    type="number"
                                    name="priceDown"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                            <ion-item lines="none">
                                <ion-label aria-label="prix maximum" color="danger">Prix maximum</ion-label>
                                <ion-input
                                    placeholder="100"
                                    name="priceUp"
                                    type="number"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                        </ion-list>
                    </ion-content>
                </ion-modal>
            </ion-card-content>
        </ion-card>
        <ion-card id="corteiz_vetement">
            <ion-card-header>
                <ion-card-title>Corteiz</ion-card-title>
                <ion-card-subtitle>👚 vêtements — (S/M/L)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Tee-shirt / Sweat / Pull / Jogging / Pantalon
                <div v-if="!comboList?.find(c=>c?.name=='corteiz_vetement')" id="open-corteiz_vetement" @click="selectCombo('corteiz_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('corteiz_vetement')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <ion-modal animated="true" ref="corteiz_vetement" trigger="open-corteiz_vetement" @willDismiss="onWillDismiss" :presentingElement="presentingElement">
                    <ion-header>
                        <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-button @click="cancel('corteiz_vetement')">Cancel</ion-button>
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
                                <ion-label aria-label="prix minimum" color="success">Prix minimum</ion-label>
                                <ion-input
                                    placeholder="0"
                                    type="number"
                                    name="priceDown"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                            <ion-item lines="none">
                                <ion-label aria-label="prix maximum" color="danger">Prix maximum</ion-label>
                                <ion-input
                                    placeholder="100"
                                    name="priceUp"
                                    type="number"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                        </ion-list>
                    </ion-content>
                </ion-modal>
            </ion-card-content>
        </ion-card>
        <ion-card ref="sneakers">
            <ion-card-header>
                <ion-card-title>Sneakers</ion-card-title>
                <ion-card-subtitle>👟 Chaussures — (38-44)</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
                Nike / Jordan / Converse / Lacoste / Yeezy
                <div v-if="!comboList?.find(c=>c?.name=='sneakers')" id="open-sneakers" @click="selectCombo('sneakers')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-green-500 text-white">
                    <p class="text-center !text-base">Activer</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <div v-else @click="_removeFilter('sneakers')" class="ion-activatable ripple-parent h-fit w-full py-3 px-6 justify-center items-center relative rounded-xl overflow-hidden mt-3 bg-red-500 text-white">
                    <p class="text-center !text-base">Désactiver</p>
                    <ion-ripple-effect></ion-ripple-effect>
                </div>
                <ion-modal animated="true" ref="sneakers" trigger="open-sneakers" @willDismiss="onWillDismiss" :presentingElement="presentingElement">
                    <ion-header>
                        <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-button @click="cancel('sneakers')">Cancel</ion-button>
                        </ion-buttons>
                        <ion-title>Ajouter un filtre</ion-title>
                        <ion-buttons slot="end">
                            <ion-button :strong="true" @click="_addFilter(selectedCombo)">Confirm</ion-button>
                        </ion-buttons>
                        </ion-toolbar>
                    </ion-header>
                    <ion-content class="ion-padding">
                        <!-- <ion-list class="mt-3 rounded-xl overflow-hidden">
                            <ion-item lines="none">
                                <ion-segment :disabled="user?.plan == 0" class="my-3" value="disabled">
                                    <ion-segment-button value="disabled">
                                    <ion-label>Email</ion-label>
                                    </ion-segment-button>
                                    <ion-segment-button value="segment">
                                    <ion-label>Notification push</ion-label>
                                    </ion-segment-button>
                                </ion-segment>
                            </ion-item>
                        </ion-list> -->
                        <ion-list class="mt-3 rounded-xl overflow-hidden">
                            <ion-item>
                                <ion-label aria-label="prix minimum" color="success">Prix minimum</ion-label>
                                <ion-input
                                    placeholder="0"
                                    name="priceDown"
                                    type="number"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                            <ion-item lines="none">
                                <ion-label aria-label="prix maximum" color="danger">Prix maximum</ion-label>
                                <ion-input
                                    placeholder="100"
                                    name="priceUp"
                                    type="number"
                                    class="rounded-xl"
                                ></ion-input>
                            </ion-item>
                        </ion-list>
                    </ion-content>
                </ion-modal>
            </ion-card-content>
        </ion-card>
    </ion-list>
    <!-- <NoResult name="Aucun filtre" description="Cliquez sur le + pour en créer un." /> -->
    </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonCardContent, IonRippleEffect, IonCardHeader, IonCardSubtitle, IonCardTitle, IonModal, IonInput, IonItem, IonSegment, IonSegmentButton, IonLabel, IonButtons, IonButton, IonRefresher, IonRefresherContent } from '@ionic/vue';
import NoResult from '@/components/NoResult.vue';
import FilterModal from '@/components/modals/Filter.vue'
import { defineComponent } from 'vue';
import { toastController } from '@ionic/vue';
import { addFilter, removeFilter } from '../mixins/filters.js'
import { getUser } from '@/mixins/user.js';
import { ref, onMounted } from 'vue';
export default defineComponent({
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonCardContent, IonRippleEffect, IonCardHeader, IonCardSubtitle, IonCardTitle, FilterModal, IonModal, IonInput, IonItem, IonSegment, IonSegmentButton, IonLabel, IonButtons, IonButton, IonRefresher, IonRefresherContent },
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
        handleRefresh(event: CustomEvent){
            setTimeout(async () => {
                await this.updateUser()
                event.target?.complete();
            }, 2000);
        },
        async presentToast(message:any) {
            const toast = await toastController.create({
                message: message,
                duration: 1500,
                position: 'top',
            });

            await toast.present();
        },
        cancel(ref:any) {
            this.$refs[ref].$el.dismiss(null, 'cancel');
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
            window.location.hash = id
            window.location.reload()
            return await this.presentToast("Filtre désactivé")
        },
        async _addFilter(name: String) {
            let parent = this.$refs[name].$el
            let priceDownInput = parent.querySelector('input[name=priceDown]')
            let priceUpInput = parent.querySelector('input[name=priceUp]')
            if (!name) return await this.presentToast("Une erreur s'est produite.")
            if (!priceDownInput.value || !priceUpInput.value) return await this.presentToast("Veuillez remplir les champs")
            let user = await addFilter({ name, priceDown: priceDownInput.value, priceUp: priceUpInput.value })
            if (!user) return await this.presentToast("Une erreur s'est produite.")
            this.$refs[name].$el.dismiss(null, 'cancel');
            window.location.reload()
            return await this.presentToast("Filtre activé")
        },
        scrollToBottom(ref: any) {
            this.$refs[ref].$el.scrollIntoView()
        },
        async updateUser() {
            this.user = await getUser()
            if (!this.user) return await this.presentToast("Une erreur s'est produite.")
            this.comboList = this.user?.combo
        }
    },
    async mounted() {
        await this.updateUser()
        this.presentingElement = window.document.getElementById('page')
        if (this.$route.hash) {
            let scrollItem = this.$refs[this.$route.hash.replace('#', '')]?.$el
        }
    },
});
</script>

