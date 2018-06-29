import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 在store中全局定义所有状态值，并且定义好操作状态的方法
export default new Vuex.Store({
  state: {
    totalNum: 0,
    totalMoney: 0,
    shopedGoods: []
  },
  mutations: {
    addNum(state) {
      this.state.totalNum++
    },
    countTotalMoney(state, currentPrice) {
      this.state.totalMoney += currentPrice
    },
    addGoodsToCar(state, payload) {
      console.log(payload,4444)

      for (let item of this.state.shopedGoods) {
        if (item.name === payload.name) {
          item.num++
          return
        }
      }
      let tempJson = {}
      tempJson.name = payload.name
      tempJson.price = payload.price
      tempJson.num = 1
      this.state.shopedGoods.push(tempJson)
    },
    emptyShopedGoods(state) {
      this.state.shopedGoods.length = 0
    }
  }
})


