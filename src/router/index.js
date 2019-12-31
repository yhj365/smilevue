import Vue from 'vue'
import Router from 'vue-router'
import shoppingMall from '@/components/page/shoppingMall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingMall',
      component: shoppingMall
    }
  ]
})
