import Vue from 'vue'
import VueRouter from 'vue-router'
import Words from '../views/Words'

Vue.use(VueRouter)

const routes = [
    {
        path: '/words',
        name: 'Words',
        component: Words,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  })
  
  export default router
  