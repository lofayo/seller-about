<template>
  <div class="content">
    <div class="category">
      <ul class="category_lists">
        <li v-for='good of goods'>{{good.name}}</li>
      </ul>
    </div>
    <div class="category_items">
      <div class="item" v-for='good of goods'>
        <p class="item_title">{{good.name}}</p>
        <div class="item_info" v-for='food of good.foods'>
          <img class="food_img" :src="food.icon" alt="">
          <div class="food_info">
            <p class="food_title">{{food.name}}</p>
            <p>
              <span>月售{{food.sellCount}}份</span>
              <span>好评率{{food.rating}}%</span>
            </p>
            <p class="price">
              <span class="now_price">￥{{food.price}}</span>
              <span v-if='food.oldPrice' class="history_price">￥{{food.oldPrice}}</span>
            </p>
          </div>
          <div class="add_goods"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import data from '../data.json'
  export default {
    data() {
      return {
        goods: data.goods
      }
    }
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../static/css/mixin.styl'
  .content
    display: flex
    .category
      .category_lists
        width: 2.16rem
        box-sizing: border-box
        padding: 0 0.266667rem
        background: #eee
        height: 66vh
        overflow: auto
        &>li
          height: 1.48rem
          display: flex
          align-items: center
          border-bottom: 0.026667rem solid #ccc
        &>li:last-child
          border: none
    .category_items
      height: 66vh
      overflow: auto
      flex: 1
      .item_title
        color: #666
        height: 0.733333rem
        line-height: 0.733333rem
        border-left: 0.053333rem solid #999
        background: #eee
        padding-left: 0.533333rem
      .item_info
        position: relative
        display: flex
        align-items: center
        padding: 0.533333rem 0
        margin: 0 0.533333rem
        border-bottom: 0.026667rem solid #ccc
        .food_img
          width: 1.52rem
          height: 1.52rem
          margin-right: 0.266667rem
        .food_info
          display: flex
          flex-direction: column
          justify-content: space-between
          flex: none
          .food_title
            font-size: 0.373333rem
            font-weight: bold
          &>p:nth-child(2)
            color: #999
          .price
            .now_price
              color: red
              font-size: 0.373333rem
              font-weight: bold
            .history_price
              font-weight: bold
              text-decoration: line-through
        .add_goods
          position: absolute
          right: 0
          bottom: 0.133333rem
          width: 1.066667rem
          height: 1.066667rem
          margin-left: 0.266667rem
          bg('~images/add')
      .item_info:last-child
        border: none
</style>
