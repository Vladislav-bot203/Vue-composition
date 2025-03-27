import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from './views/HomePageView.vue'
import ReusablePageView from './views/ReusablePageView.vue'
import VuexPage from './views/VuexPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePageView, alias: '/home' },
    { path: '/reusable', component: ReusablePageView },
    { path: '/vuex', component: VuexPage }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
