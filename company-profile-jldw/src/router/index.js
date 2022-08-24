import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TemplateView from '../views/TemplateView.vue'

const routes = [
  {
    path: '/',
    name: 'template',
    component: TemplateView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
