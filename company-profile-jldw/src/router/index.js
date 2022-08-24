import { createRouter, createWebHistory } from 'vue-router'
import TemplateView from '../views/TemplateView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import WorkView from '../views/WorkView.vue'

const routes = [
  {
    path: '/',
    name: 'template',
    component: TemplateView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/work',
    name: 'work',
    component: WorkView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
