import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage from '../components/FirstPage.vue'
import SecondPage from '../components/SecondPage.vue'
import EnterPlayer from '../components/EnterPlayer.vue'
import AssignRoles from '../components/AssignRoles.vue'
import NightPhase from '../components/NightPhase.vue'
import DayPhase from '../components/DayPhase.vue'
import Team from '../components/Team.vue'


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
  {
    path: '/team',
    name: 'Team',
    component: Team
  },

]

const router = new VueRouter({
  routes,
  mode: 'history' //delete # (add for older browser support)
})

export default router
