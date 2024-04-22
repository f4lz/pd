import { createRouter, createWebHistory } from 'vue-router'
import defaultLayout from '../components/layouts/default.vue'
import noFooterLayout from '../components/layouts/nofooter.vue'
import About from '../pages/About.vue'
import FeedBack from '../pages/FeedBack.vue'
import Login from '../pages/Login.vue'
import Main from '../pages/Main.vue'
import Profile from '../pages/Profile.vue'
import Registration from '../pages/Registration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: defaultLayout,
      children: [
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
      ],
    },
    {
      path: '/',
      component: noFooterLayout,
      children: [
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
          path: '/profile',
          name: 'profile',
          component: Profile,
        },
        {
          path: '/feedback',
          name: 'feedback',
          component: FeedBack,
        },
      ],
    },
  ],
})

export default router
