import { createRouter, createWebHistory } from 'vue-router'

import ContainerStatus from '../views/ContainerStatus.vue'
import PortCalls from '@/views/PortCalls.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/containerStatus',
    name: 'containerStatus',
    component: ContainerStatus
  },
  {
    path: '/portCalls',
    name: 'portCalls',
    component: PortCalls
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
