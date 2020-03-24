import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage from '../components/FirstPage.vue'
import SecondPage from '../components/SecondPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FirstPage',
    component: FirstPage
  },
  {
    path: '/secondpage',
    name: 'SecondPage',
    component: SecondPage
  }
]

const router = new VueRouter({
  routes,
  mode: 'history' //delete # (add for older browser support)
})

export default router
