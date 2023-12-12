import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: () => import("../views/Home.vue") },
    { path: "/dashboard", component: () => import("../views/Dashboard.vue") },
    { path: "/:pathMatch(.*)", component: () => import("../views/errors/NotFound.vue") },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;