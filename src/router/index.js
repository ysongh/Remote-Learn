import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Topics from '../components/Topics.vue'
import AddTopic from '../components/AddTopic.vue'
import TopicDetail from '../components/TopicDetail.vue'

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
  {
    path: '/addtopic',
    name: 'AddTopic',
    component: AddTopic
  },
  {
    path: '/topic/:id',
    name: 'TopicDetail',
    component: TopicDetail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router