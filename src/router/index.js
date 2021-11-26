import Vue from 'vue'
import VueRouter from 'vue-router'
import Definitions from '../views/Definitions'

Vue.use(VueRouter)

const routes = [
    {
        path: '/definitions',
        name: 'Definitions',
        component: Definitions,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  })
  
  export default router
  