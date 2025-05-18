import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortCalls from '../components/PortCalls.vue'
import ContainerStatus from '../components/ContainerStatus.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
