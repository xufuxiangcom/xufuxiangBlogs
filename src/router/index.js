import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/home.vue'
import Science from '../views/science.vue'
import Mood from '../views/mood.vue'
import Resource from '../views/resource.vue'
import About from '../views/about.vue'
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
