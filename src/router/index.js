import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import EnterPlayer from '../components/EnterPlayer.vue'
import AssignRoles from '../components/AssignRoles.vue'
import NightPhase from '../components/NightPhase.vue'
import DayPhase from '../components/DayPhase.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/enterplayer',
    name: 'EnterPlayer',
    component: EnterPlayer
  },
  {
    path: '/assignroles',
    name: 'AssignRoles',
    component: AssignRoles
  },
  {
    path: '/nightphase',
    name: 'NightPhase',
    component: NightPhase
  },
  {
    path: '/dayphase',
    name: 'DayPhase',
    component: DayPhase
  },
]

const router = new VueRouter({
  routes,
  mode: 'history' //delete # (add for older browser support)
})

export default router
