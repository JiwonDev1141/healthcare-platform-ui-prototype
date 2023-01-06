import { createWebHistory, createRouter } from "vue-router";
import JejuDiver from "../pages/jejudiver/JejuDiver.vue"
import MirmetaCare from "../pages/mirmetacare/MirmetaCare.vue"

const routes = [
    {
        path: "/jeju-diver",
        name: "JejuDiver",
        component: JejuDiver
    },
    {
        path: "/mirmeta-care",
        name: "MirmetaCare",
        component: MirmetaCare
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;