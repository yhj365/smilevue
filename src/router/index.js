import Vue from 'vue'
import Router from 'vue-router'
import shoppingMail from '@/components/page/shoppingMail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingMail',
      component: shoppingMail
    }
  ]
})
