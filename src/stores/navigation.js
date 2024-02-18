import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', () => {
  const navigationList = [
    {
      title: 'Главная',
      link: '/',
    },
    {
      title: 'О проекте',
      link: '/about',
    },
    {
      title: 'Обратная связь',
      link: '/feedback',
    },
  ]
  return { navigationList }
})
