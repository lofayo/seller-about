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
    changeNum(state,num) {
      state.totalNum += num
    },
    countTotalMoney(state, currentPrice) {
      state.totalMoney += currentPrice
    },
    emptyShopedGoods(state) {
      state.totalNum = 0
      state.totalMoney = 0
      state.shopedGoods.splice(0)
    },
    minusGoods(state, payload) {
      let shopedGoods = state.shopedGoods
      for (let i = 0; i < shopedGoods.length; i++) {
        if (shopedGoods[i].name === payload.name) {
          shopedGoods[i].num--
          if (shopedGoods[i].num === 0) {
            shopedGoods.splice(i,1)
          }
          return
        }
      }
    },
    addGoodsToCar(state, payload) {
      for (let item of state.shopedGoods) {
        if (item.name === payload.name) {
          item.num++
          return
        }
      }
      let tempJson = {}
      tempJson.name = payload.name
      tempJson.price = payload.price
      tempJson.num = 1
      state.shopedGoods.push(tempJson)
    }
  }
})


