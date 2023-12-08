import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import NotFound from "../views/errors/NotFound.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/dashboard", component: Dashboard },
    { path: "/:pathMatch(.*)", component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;