import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Video from '../views/Video'
import Index from '../views/Index'
import SpecialView from '../views/SpecialView'


const routes = [
  {
    path: '/',
    redirect: "/1"
  },
  {
    path: "/special",
    name: 'Special',
    component: SpecialView
  },
  {
    path: "/:page",
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/video/:vid/:eid',
    name: 'Video',
    component: Video,

  }
]

const router = new VueRouter({
  routes
})

export default router
