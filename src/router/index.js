import Vue from 'vue'
import Router from 'vue-router'
import shoppingMall from '@/components/page/shoppingMall'
import register from '@/components/page/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingMall',
      component: shoppingMall
    }, {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
