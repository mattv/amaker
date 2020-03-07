import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Assessment from '../views/Assessment.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/assess',
    name: 'Assessment',
    component: Assessment
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
