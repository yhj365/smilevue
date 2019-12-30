// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 不推荐全局引入，使用babel-plugin-import
// import vant from 'vant'
// import 'vant/lib/index.css'
import { Button, Row, Col, Swipe, SwipeItem, Lazyload } from 'vant'

Vue.config.productionTip = false

Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
