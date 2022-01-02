import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoList.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/:id',
    name: 'TaskDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/TaskDetail.vue')
  },
  {
    path: '/json',
    name: 'Json',
    component: () => import(/* webpackChunkName: "about" */ '../views/Json.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
