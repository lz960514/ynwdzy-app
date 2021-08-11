import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView/Home.vue'),
    meta: {
      title: '首页-云南万达纸业',
      isLogin: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView/Login.vue'),
    meta: {
      title: '登录-云南万达纸业',
      isLogin: false
    }
  },
  {
    path: '/password',
    name: 'Password',
    component: () => import('../views/LoginView/Password.vue'),
    meta: {
      title: '找回密码-云南万达纸业',
      isLogin: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/LoginView/Register.vue'),
    meta: {
      title: '注册-云南万达纸业',
      isLogin: false
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to: any, from: any, next: any) => {
  const isLogin: boolean = localStorage.getItem('tsToken') ? true : false
  if (to.meta.title) {
    document.title = to.meta.title
    next()
  } else {
    document.title = '首页-云南万达纸业'
    next()
  }

  if (!to.meta.isLogin) {
    next();
  } else {
    isLogin ? next('/home') : next('/login')
  }
})

export default router
