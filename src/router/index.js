import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: resolve => require(['@/components/page/Main'], resolve),
      children: [
        {
          path: '/',
          name: 'shoppingMall',
          component: resolve => require(['@/components/page/shoppingMall'], resolve)
        }, {
          path: '/CategoryList',
          name: 'CategoryList',
          component: resolve => require(['@/components/page/CategoryList'], resolve)
        }, {
          path: '/Cart',
          name: 'Cart',
          component: resolve => require(['@/components/page/Cart'], resolve)
        }, {
          path: '/Member',
          name: 'Member',
          component: resolve => require(['@/components/page/Member'], resolve)
        }
      ]
    },{
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
