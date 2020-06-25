import Vue from 'vue'
import VueRouter from 'vue-router'

// import Index from '../views/index.vue'
const Index = () => import(/* webpackChunkName: "index_home" */ '../views/index.vue')
// import Home from '../views/home.vue'
const Home = () => import(/* webpackChunkName: "index_home" */ '../views/home.vue')

// import Science from '../views/science.vue'
const Science = () => import(/* webpackChunkName: "science_mood" */ '../views/science.vue')
// import Mood from '../views/mood.vue'
const Mood = () => import(/* webpackChunkName: "science_mood" */ '../views/mood.vue')

// import Resource from '../views/resource.vue'
const Resource = () => import(/* webpackChunkName: "resource_about" */ '../views/resource.vue')
// import About from '../views/about.vue'
const About = () => import(/* webpackChunkName: "resource_about" */ '../views/about.vue')
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Index,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/science', component: Science },
      { path: '/mood', component: Mood },
      { path: '/resource', component: Resource},
      { path: '/mood', component: Mood }, 
      { path: '/about', component: About }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
