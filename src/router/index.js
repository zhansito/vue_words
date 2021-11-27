import Vue from 'vue'
import VueRouter from 'vue-router'
import Definitions from '../views/Definitions'
import Synonyms from '../views/Synonyms'
import ExplanatoryDictionary from '../views/ExplanatoryDictionary'

Vue.use(VueRouter)

const routes = [
    {
        path: '/definitions',
        name: 'Definitions',
        component: Definitions,
    },
    {
        path: '/synonyms',
        name: 'Synonyms',
        component: Synonyms,
    },
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
  