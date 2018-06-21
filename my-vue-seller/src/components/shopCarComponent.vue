<template>
  <div class="content">
    <div class="shop_car"></div>
    <div class="money">￥0</div>
    <div class="other_pay">另需配送费￥4元</div>
    <div class="check">￥20起送</div>
  </div>
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../static/css/mixin.styl'
  .content
    display: flex
    height: 1.466667rem
    background: #778899 
    align-items: center
    color: white
    position: relative
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
