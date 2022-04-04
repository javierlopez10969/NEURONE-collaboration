import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/General/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    //General views
    path: '/',
    name: 'home',
    component: HomeView
  },

  //Chat
  {
    path: '/chat/',
    name: 'chat',
    component: () => import('../views/ChatView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/TestView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router