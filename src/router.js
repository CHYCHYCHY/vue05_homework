import VueRouter from 'vue-router';
import Vue from 'vue'
import Home from './views/Home.vue';
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: Login,
        },
        {
            path: "/Home",
            component: Home,
            props: true,
           

        },
        {
            path: "*",
            component: NotFound

        }
    ],
});


export default router;