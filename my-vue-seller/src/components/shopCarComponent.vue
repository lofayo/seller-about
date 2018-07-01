<template>
  <div class="content">
    <div class="shop_car_goods_lists" :class='{active: isShowShopGoods}'>
      <p class="shop_car_title">
        <span>购物车</span>
        <span @click='empty' class="clear">清空</span>
      </p>
      <ul v-if='shopedGoods.length > 0' class="shop_goods_lists">
        <li v-for='item of shopedGoods'>
          <span>{{item.name}}</span>
          <span class="price">￥{{item.price}}</span>
          <span class="minus" @click='minusGoods(-1,item.name,item.price)'></span>
          <span>{{item.num}}</span>
          <span class="add" @click='addGoods(1,item.name,item.price)'></span>
        </li>
      </ul>
    </div>
    <div class="shop_car_init" @click='showHideShopGoods'>
      <div class="shop_car" :class='{active: totalNum > 0}'>
        <span class="totalNum" :class='{active: totalNum > 0}'>{{totalNum}}</span>
      </div>
      <div class="money">合计:￥{{totalMoney}}</div>
      <div class="other_pay">另需配送费￥4元</div>
      <div class="check" @click='check' :class='{active: totalMoney >= 20}'>{{ totalMoney >= 20 ? '去结算('+totalMoney+'+'+4+')' : '￥20起送'}}</div>
    </div>
    <div class="mask" @click='showHideShopGoods' :class='{active: isShowMask}'>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowShopGoods: false,
      isShowMask: false
    }
  },
  computed: {
    totalNum() {
      return this.$store.state.totalNum
    },
    totalMoney() {
      return this.$store.state.totalMoney
    },
    shopedGoods() {
      return this.$store.state.shopedGoods
    }
  },
  methods: {
    showHideShopGoods() {
      this.isShowShopGoods = !this.isShowShopGoods
      this.isShowMask = !this.isShowMask
    },
    check(e) {
      if (this.totalMoney > 20) {
        e.stopPropagation()
        alert('合计：'+(this.totalMoney+4))
      }
    },
    empty() {
      this.$store.commit('emptyShopedGoods')
      this.showHideShopGoods()
    },
    addGoods(num,name,price) {
      this.$store.commit('changeNum',num)
      this.$store.commit('addGoodsToCar',{name})
      this.$store.commit('countTotalMoney',price)
    },
    minusGoods(num,name,price) {
      this.$store.commit('changeNum',num)
      this.$store.commit('minusGoods',{name})
      this.$store.commit('countTotalMoney',-price)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../static/css/mixin.styl'
  .content
    position: relative
    .mask
      position: fixed
      left: 0
      top: 0
      width: 100vw
      height: 100vh
      background: rgba(0,0,0,0.2)
      opacity: 0
      z-index: -1
      &.active
        z-index: 0
        opacity: 1
    .shop_car_goods_lists
      background: white
      position: fixed
      left: 0
      bottom: 1.333333rem
      z-index: 2
      transform: translate(0, 100%)
      transition: all 0.5s
      width: 100%
      padding-bottom: 0.533333rem
      box-shadow: 0 -0.026667rem 0.133333rem 0.026667rem #ccc
      max-height: 5.333333rem
      overflow-y: auto
      -webkit-overflow-scrolling: touch
      .shop_car_title
        height: 1.066667rem
        padding: 0 0.533333rem
        background: #eee
        display: flex
        justify-content: space-between
        align-items: center
        border-bottom: 1px solid #ccc
        .clear
          color: blue
      .shop_goods_lists
        &>li
          height: 1.2rem
          padding-right: 0.533333rem
          display: flex
          justify-content: space-between
          align-items: center
          border-bottom: 1px solid #ccc
          &>span
            margin-left: 0.533333rem
          .price
            font-size: 0.373333rem
            font-weight: bold
            color: red
            flex: 1
            text-align: right
          .minus
            width: 0.64rem
            height: 0.64rem
            bg('~images/minus')
          .add
            width: 0.64rem
            height: 0.64rem
            bg('~images/add')
   
      &.active
        transform: translate(0, 0)
    .shop_car_init
      position: fixed
      left: 0
      bottom: 0
      z-index: 2
      display: flex
      height: 1.333333rem
      width: 100%
      background: #778899 
      align-items: center
      color: white
      
      .shop_car
        position: relative
        width: 1.2rem
        height: 1.2rem
        background-image: url('~images/shop_car.png')
        background-repeat: no-repeat
        background-position: center
        background-size: 0.6rem 0.6rem
        background-color: #707070
        border: 0.133333rem solid #778899
        border-radius: 50%
        margin-top: -0.533333rem
        margin-left: 0.533333rem
        &.active
          background-image: url('~images/shop_car_green.png')
          background-color: skyblue
        .totalNum
          position: absolute
          left: 0.833333rem
          top: 0
          display: inline-block
          padding: 0 0.133333rem
          height: 0.4rem
          line-height: 0.4rem
          border-radius: 1.333333rem
          background: #ccc
          color: white
          font-size: 0.32rem
          text-align: center
          display: none
          &.active
            display: block
            background: #00EE00
            color: black
      .money
        padding: 0.133333rem 0.266667rem
        border-right: 0.026667rem solid #ccc
      .other_pay
        padding: 0.133333rem 0.266667rem
        flex: 1
      .check
        width: 2.84rem
        height: 100%
        display: flex
        align-items: center
        justify-content: center
        background: #707070
        &.active
          background: #00EE00
          color: black
</style>
