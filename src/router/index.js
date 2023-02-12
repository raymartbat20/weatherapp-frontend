import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LandingPage
    },
    {
      path: '/weather-forecast',
      name: 'weather-forecast',
      component: () => import('../views/WeatherForecast.vue')
    }
  ]
})


router.beforeEach((to,from,next) => {
  const isAuthenticated = window.localStorage.getItem('authUser');

  if(!isAuthenticated && to.name !== "login"){
    next({name: "login"})
  }

  next();
})

export default router
