import { createRouter, createWebHistory } from 'vue-router'
import About from '../pages/About.vue'
import FeedBack from '../pages/FeedBack.vue'
import Login from '../pages/Login.vue'
import Main from '../pages/Main.vue'
import Registration from '../pages/Registration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: FeedBack,
    },
  ],
})

export default router
