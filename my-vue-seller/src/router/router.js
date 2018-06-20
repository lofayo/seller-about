import Vue from 'vue'
import Router from 'vue-router'

import goodsView from '@/views/goodsView'
import ratingView from '@/views/ratingView'
import sellerView from '@/views/sellerView'

import bigStarComponent from '@/components/bigStarComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    }, {
      path: '/goods',
      component: goodsView
    }, {
      path: '/rating',
      component: ratingView
    }, {
      path: '/seller',
      component: sellerView
    }
  ]
})
