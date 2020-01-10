import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'shoppingMall',
      component: resolve => require(['@/components/page/shoppingMall'], resolve)
    }, {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/components/page/register'], resolve)
    }, {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/page/login'], resolve)
    }, {
      path: '/Goods',
      name: 'Goods',
      component: resolve => require(['@/components/page/Goods'], resolve)
    }
  ]
})
