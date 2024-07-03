import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register' ,
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/chat',
    name: 'chat' ,
    component: () => import('@/views/chat.vue')
  },
  {
    path: '/chat_history',
    name: 'chat_history' ,
    component: () => import('@/views/chat_history.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router