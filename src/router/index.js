import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Profile from '../components/Profile.vue'
import Register from '../components/Register.vue'
import Maps from '../components/Maps.vue'
import Streams from '../components/Streams.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/maps',
    name: 'maps',
    component: Maps,
  },
  {
    path: '/streams',
    name: 'streams',
    component: Streams
  },
  {
    path: '/streams/:id',
    name: 'stream', 
    component: Streams,
  },
]

const router = new VueRouter({
  routes
})

export default router
