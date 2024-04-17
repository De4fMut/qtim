import { createRouter, createWebHistory } from "vue-router";
import General from "@/views/General.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: General },
        { path: "/posts/:postId", component: () => import("@/views/Post.vue") },
    ],
});
