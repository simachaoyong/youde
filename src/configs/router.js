import Vue from 'vue'
import VueRouter from 'vue-router'

// import App from '../App.vue'
// import Home from './components/Home.Vue'
// import List from './components/List.Vue'
import List from '../pages/List.vue'
import Home from '../pages/Home.vue'
import Mine from '../pages/Mine.vue'
import Cart from '../pages/Cart.vue'
// import App from '../App.vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home

    },
    {
        path: '/list',
        name: 'list',
        component: List
    },
    {
        path: '/mine',
        name: 'mine',
        component:Mine
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/',
        name: 'home',
        component: Home
    }
]
const router = new VueRouter({
    routes
})

export default router