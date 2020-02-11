import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Members from '../components/Members.vue'
import Register from '../components/Register.vue'
import Maps from '../components/Maps.vue'

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
    path: '/members',
    name: 'members',
    component: Members
  },
  {
    path: '/members/:id',
    name: 'member',
    component: Members
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
  }
]

const router = new VueRouter({
  routes
})

export default router
