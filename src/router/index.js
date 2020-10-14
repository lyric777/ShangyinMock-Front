import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/components/Login'
import Index from '@/components/Index'
import ReadApi from '@/components/ReadApi'
import ReadResult from '@/components/ReadResult'
import UseApi from '@/components/UseApi'
import ReadApiDetail from '@/components/ReadApiDetail'
import Api from '@/components/Api'
import ReadResultDetail from '@/components/ReadResultDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/readApi',
    name: 'ReadApi',
    component: ReadApi
  },
  {
    path: '/readResult',
    name: 'ReadResult',
    component: ReadResult
  },
  {
    path: '/useApi',
    name: 'UseApi',
    component: UseApi
  },
  {
    path: '/readApi/:api',
    name: 'ReadApiDetail',
    component: ReadApiDetail
  },
  {
    path: '/readResult/:api',
    name: 'ReadResultDetail',
    component: ReadResultDetail
  },
  {
    path: '/api/:api',
    name: 'Api',
    component: Api
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
