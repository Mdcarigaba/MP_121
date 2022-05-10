import { createRouter, createWebHistory } from "vue-router";
import Home from '../Views/ProductPage.vue'

const routes = [
    { /*login page*/
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../Views/LogIn'),
    },
    { /*Profiles Page*/
        path: '/ProfilePage',
        name: 'ProfilePage',
        component: () => import('../Views/ProfilePage'),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router