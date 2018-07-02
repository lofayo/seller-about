// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 全局引入请求数据的模块，这样就可以在每个视图文件使用该方法请求数据了

import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false

import '../static/css/common.styl'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
