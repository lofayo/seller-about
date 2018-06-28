<template>
  <div class="content">
    <div class="shop_car_goods_lists" :class='{active: isShowShopGoods}'>
      <p class="shop_car_title">
        <span>购物车</span>
        <span class="clear">清空</span>
      </p>
      <ul class="shop_goods_lists">
        <li>
          <span>莲子核桃黑米粥</span>
          <span class="price">￥10</span>
          <span class="minus"></span>
          <span>1</span>
          <span class="add"></span>
        </li>
        <li>
          <span>莲子核桃黑米粥</span>
          <span class="price">￥10</span>
          <span class="minus"></span>
          <span>1</span>
          <span class="add"></span>
        </li>
        <li>
          <span>莲子核桃黑米粥</span>
          <span class="price">￥10</span>
          <span class="minus"></span>
          <span>1</span>
          <span class="add"></span>
        </li>
        <li>
          <span>莲子核桃黑米粥</span>
          <span class="price">￥10</span>
          <span class="minus"></span>
          <span>1</span>
          <span class="add"></span>
        </li>
      </ul>
    </div>
    <div class="shop_car_init" @click='showHideShopGoods'>
      <div class="shop_car"></div>
      <div class="money">￥0</div>
      <div class="other_pay">另需配送费￥4元</div>
      <div class="check">￥20起送</div>
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
  methods: {
    showHideShopGoods() {
      this.isShowShopGoods = !this.isShowShopGoods
      this.isShowMask = !this.isShowMask
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
      transform: translate(0, 100%)
      z-index: 1
      transition: all 0.5s
      width: 100%
      padding-bottom: 0.533333rem
      box-shadow: 0 -0.026667rem 0.133333rem 0.026667rem #ccc
      .shop_car_title
        height: 1.066667rem
        padding: 0 0.533333rem
        background: #eee
        display: flex
        justify-content: space-between
        align-items: center
        border-bottom: 0.026667rem solid #ccc
        .clear
          color: blue
      .shop_goods_lists
        &>li
          height: 1.2rem
          padding-right: 0.533333rem
          display: flex
          justify-content: space-between
          align-items: center
          border-bottom: 0.026667rem solid #ccc
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
      display: flex
      height: 1.333333rem
      background: #778899 
      align-items: center
      color: white
      position: relative
      z-index: 1
      .shop_car
        width: 1.2rem
        height: 1.2rem
        bg('~images/shop_car')
        background-size: 0.6rem 0.6rem
        background-color: #707070
        border: 0.133333rem solid #778899
        border-radius: 50%
        margin-top: -0.533333rem
        margin-left: 0.533333rem
      .money
        padding: 0.133333rem 0.533333rem
        border-right: 0.026667rem solid #ccc
      .other_pay
        padding: 0.133333rem 0.533333rem
        flex: 1
      .check
        width: 2.84rem
        height: 100%
        display: flex
        align-items: center
        justify-content: center
        background: #707070
</style>
