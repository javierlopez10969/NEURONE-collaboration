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
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/General/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/General/LoginView.vue')
  },

  //User
  {
    path: '/home',
    name: 'landing',
    component: () => import('../views/User/LandingView.vue')
  },
  {
    path: '/editprofile',
    name: 'Edit Profile',
    component: () => import('../views/User/EditProfile.vue')
  },
  {
    path: '/my-group/:id',
    name: 'group',
    component: () => import('../views/User/GroupView.vue')
  },
  //Chat
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/ChatView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/TestView.vue')
  },

  //Widget
  {
    path: '/widget',
    name: 'widget',
    component: () => import('../views/Widget/WidgetView.vue')
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router