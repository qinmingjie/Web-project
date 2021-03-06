import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
const Collage = () => import('../views/collage/index.vue')
const Qvcollage = () => import('../views/qv_collage/index.vue')
const Plan = () => import('../views/plan/index.vue')
const Gzh = () => import('../views/gzh/index.vue')
const Scrm = () => import('../views/scrm/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/collage',
    name: 'Collage',
    component: Collage
  }, {
    path: '/qvcollage',
    name: 'Qvcollage',
    component: Qvcollage
  }, {
    path: '/plan',
    name: 'Plan',
    component: Plan
  }, {
    path: '/gzh',
    name: 'Gzh',
    component: Gzh
  }, {
    path: '/scrm',
    name: 'Scrm',
    component: Scrm
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
