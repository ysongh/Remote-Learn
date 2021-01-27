import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Topics from '../components/Topics.vue'
import AddTopic from '../components/AddTopic.vue'
import AddInstructor from '../components/AddInstructor.vue'
import TopicDetail from '../components/TopicDetail.vue'
import SignIn from '../components/SignIn.vue'
import Profile from '../components/Profile.vue'
import AddChannel from '../components/AddChannel.vue'

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
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/addtopic',
    name: 'AddTopic',
    component: AddTopic
  },
  {
    path: '/profile/:email',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/addchannel/:email',
    name: 'AddChannel',
    component: AddChannel
  },
  {
    path: '/addinstructor/:id',
    name: 'AddInstructor',
    component: AddInstructor
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