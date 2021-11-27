import Vue from 'vue'
import VueRouter from 'vue-router'
import ExplanatoryDictionary from '../views/ExplanatoryDictionary'

Vue.use(VueRouter)

const routes = [
    {
        path: '/dictionary',
        name: 'Dictionary',
        component: ExplanatoryDictionary,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  })
  
  export default router
  