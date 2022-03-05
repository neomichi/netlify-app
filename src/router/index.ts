import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    meta: { role: 0, title: 'main', showInMenu: true },
    path: '/',
    name: 'home',
    component: Home
  }
]
const history = createWebHistory()
const router = createRouter({
  history, routes
})

export default router
