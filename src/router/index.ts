import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

import auth from '../middleware/auth';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/auth/Login.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/tuto',
        name: 'Tuto',
        component: () => import('@/views/howitworks.vue'),
    },
    {
        path: '/',
        component: TabsPage,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                redirect: '/home',
            },
            {
                path: 'home',
                component: () => import('@/views/Home.vue'),
                meta: { requiresAuth: true },
            },
            {
                path: 'filters',
                component: () => import('@/views/Filters.vue')
            },
            {
                path: 'guides',
                component: () => import('@/views/Guides.vue')
            },
            {
                path: 'profil',
                component: () => import('@/views/Profile.vue')
            }
        ]
    }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(auth);

export default router
