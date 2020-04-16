import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import EnterPlayer from '../components/EnterPlayer.vue'
import AssignRoles from '../components/AssignRoles.vue'
import Game from '../components/Game.vue'


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
    path: '/game',
    name: 'Game',
    component: Game
  },
]

const router = new VueRouter({
  routes,
  mode: 'history' //delete # (add for older browser support)
})

export default router
