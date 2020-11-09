import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Topics from '../components/Topics.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/topics',
    name: 'Topics',
    component: Topics
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router