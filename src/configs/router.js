import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App.vue'
import List from '../pages/List.vue'
import Home from '../pages/Home.vue'
import Mine from '../pages/Mine.vue'
import Cart from '../pages/Cart.vue'
import Detail from '../pages/Details.vue'

Vue.use(VueRouter)
const routes = [
    // 利用路由嵌套，底部的必须嵌套
    {
        path:'/app',
        name:'app',
        component:App,
        children:[
            {
                path: 'home',
                name: 'home',
                component: Home
        
            },
            {
                path: 'list',
                name: 'list',
                component: List
            },
            {
                path: 'mine',
                name: 'mine',
                component:Mine
            },
            {
                path: 'cart',
                name: 'cart',
                component: Cart
            }
        ]},
    // 详情页路由
    {
        path: '/details',
        name: 'details',
        component: Detail
    },
    // 路由重定向
    { path: '/', redirect: { name: 'home' }}
];
const router = new VueRouter({
    routes
})

export default router;