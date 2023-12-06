import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/errors/NotFound.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/:pathMatch(.*)", component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;