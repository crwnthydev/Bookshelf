import Main from "@/views/Home";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/inner',
        component: () => import('../views/Inner.vue')
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL),
});

export default router;