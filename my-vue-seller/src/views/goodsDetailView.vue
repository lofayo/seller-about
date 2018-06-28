<template>
  <div class="content">
    <!-- <h3>{{$route.params.index1}}，{{$route.params.index2}}</h3> -->
    <section class="goods_info">
      <img class="goods_img" src="" alt="">
      <p>
        <span class="goods_name">皮蛋瘦肉粥</span>
        <span>月售1132份&nbsp;&nbsp;好评率100%</span>
      </p>
      <p>
        <span class="now_price">￥24</span>
        <span class="history_price">￥28</span>
        <span class="add_shop_car">加入购物车</span>
      </p>
    </section>
    <section class="goods_intro">
      <p class="intro_title">商品介绍</p>
      <p>商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍</p>
    </section>
    <section class="goods_ratings">
      <p class="ratings_title">商品评价</p>
      <p class="check_btn">
        <span>全部3</span>
        <span>推荐2</span>
        <span>吐槽1</span>
      </p>
      <div class="only_look">
        <span></span>只看有内容的评价
      </div>
      <ul class="ratings_lists">
        <li>
          <p>
            <span>2016/09/09</span>
            <span class="username">lofayo</span>
            <img class="user_avatar" />
          </p>
          <p>
            <img class="thumb" />
            <span>太少了，不够一个人吃</span>
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import data from '../data.json'
  export default {
    data() {
      return {
        food: {}
      }
    },
    created() {
      let index1 = this.$route.params.index1
      let index2 = this.$route.params.index2
      this.food = data[index1][index2]
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../static/css/mixin.styl'
  .content
    width: 100vw
    height: 100vh
    position: fixed
    top: 0
    left: 0
    z-index: 5
    background: #eee
    overflow: auto
    &>section
      margin-bottom: 0.533333rem
      background: white
    .goods_info
      display: flex
      flex-direction: column
      .goods_img
        width: 10.0rem
        height: 10.0rem
      &>p
        padding: 0 0.533333rem
        height: 1.466667rem
        line-height: 0.8rem
      &>p:nth-child(2)
        display: flex
        flex-direction: column
        justify-content: space-around
        .goods_name
          font-size: 0.373333rem
          font-weight: bold
      &>p:nth-child(3)
        .now_price
          color: red
          font-size: 0.373333rem
          font-weight: bold
        .history_price
          text-decoration: line-through
        .add_shop_car
          color: white
          padding: 0.133333rem 0.266667rem
          border-radius: 1.333333rem
          background: blue
          float: right
          line-height: 1.2
    .goods_intro
      padding: 0.533333rem
      .intro_title
        font-size: 0.373333rem
        font-weight: bold
      &>p:nth-child(2)
        color: #666
        padding: 0.133333rem
        line-height: 0.533333rem
    .goods_ratings
      padding: 0 0.533333rem
      &>p
        height: 1.466667rem
        display: flex
        align-items: center
      .ratings_title
        font-size: 0.373333rem
        font-weight: bold
      .check_btn
        &>span
          padding: 0.266667rem
          margin-right: 0.266667rem
          background: skyblue
          color: #fff
          &.active
            background: yellowgreen
            color: black
      .only_look
        padding: 0.266667rem 0
        color: #999
        display: flex
        align-items: center
        &>span
          display: inline-block
          width: 0.533333rem
          height: 0.533333rem
          margin-right: 0.266667rem    
          bg('~images/right')
        .only_content
          bg('~images/right-green')
      .ratings_lists
        padding: 0.533333rem 0
        border-top: 0.026667rem solid #ccc
        &>li
          line-height: 1.6
          &>p:first-child
            display: flex
            align-items: center
            .username
              flex: 1
              text-align: right
              margin-right: 0.266667rem
            .user_avatar
              display: inline-block
              width: 0.32rem
              height: 0.32rem
          &>p:nth-child(2)
            display: flex
            align-items: center
            .thumb
              width: 0.32rem
              height: 0.32rem
              margin-right: 0.266667rem
          
</style>
