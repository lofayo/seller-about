<template>
  <div class="content">
    <section class="goods_info">
      <img class="goods_img" :src="food.image" alt="">
      <p>
        <span class="goods_name">{{food.name}}</span>
        <span>月售{{food.sellCount}}份&nbsp;&nbsp;好评率{{food.rating}}%</span>
      </p>
      <p>
        <span class="now_price">￥{{food.price}}</span>
        <span v-if='food.oldPrice' class="history_price">￥{{food.oldPrice}}</span>
        <span class="add_shop_car" @click='addGoods($event,1,food.name,food.price)'>加入购物车</span>
      </p>
    </section>
    <section class="goods_intro">
      <p class="intro_title">商品介绍</p>
      <p>{{food.info ? food.info : '......'}}</p>
    </section>
    <section class="goods_ratings">
      <p class="ratings_title">商品评价</p>
      <p class="check_btn">
        <span :class='{active: currentRateType === 2}' @click='filterRatingArray(2,isOnlyContent)'>全部{{food.ratings.length}}</span>
        <span :class='{active: currentRateType === 0}' @click='filterRatingArray(0,isOnlyContent)'>推荐{{food.ratings.filter((item)=> item.rateType === 0).length}}</span>
        <span :class='{active: currentRateType === 1}' @click='filterRatingArray(1,isOnlyContent)'>吐槽{{food.ratings.filter((item)=> item.rateType === 1).length}}</span>
      </p>
      <div class="only_look" @click='checkOnlyContent'>
        <span :class="{only_content:isOnlyContent}"></span>只看有内容的评价
      </div>
      <ul class="ratings_lists">
        <li v-for='rating of filterRatings'>
          <p>
            <span>{{utils.timestampToTime(rating.rateTime)}}</span>
            <span class="username">{{rating.username}}</span>
            <img class="user_avatar" :src="rating.avatar" />
          </p>
          <p>
            <img :src='rating.rateType === 0 ? "../../static/images/thumbs_up.png" : "../../static/images/thumbs_down.png"' class="thumb" />
            <span>{{rating.text ? rating.text : '......'}}</span>
          </p>
        </li>
      </ul>
    </section>
    <div id="ball"></div>
  </div>
</template>

<script>
  import data from '../data.json'
  import utils from '@static/js/utils'

  export default {
    data() {
      return {
        food: {},
        filterRatings: [],
        isOnlyContent: false,
        currentRateType: 2,
        utils
      }
    },
    created() {
      let index1 = this.$route.params.index1
      let index2 = this.$route.params.index2
      this.food = data.goods[index1].foods[index2]
      this.filterRatings = this.food.ratings
    },
    methods: {
      filterRatingArray(rateType, isOnlyContent) {
        this.currentRateType = rateType
        this.filterRatings = this.food.ratings.filter(item => {
          if (isOnlyContent) {
            if (rateType !== 2) {
              return item.text !== '' && item.rateType === rateType 
            }
            return item.text !== ''
          } else {
            if (rateType !== 2) {
              return item.rateType === rateType 
            }
            return true
          }
        })
      },
      checkOnlyContent() {
        this.isOnlyContent = !this.isOnlyContent
        this.filterRatingArray(this.currentRateType,this.isOnlyContent)
      },
      addGoods(evt,num,name,price) {
        let $ball = document.getElementById('ball')
        console.log(evt.pageX,evt.pageY)
        $ball.style.display = 'block';
        $ball.style.top = evt.pageY+'px';
        $ball.style.left = evt.pageX+'px';
        $ball.style.transition = 'left 0s, top 0s';
        setTimeout(()=>{
            $ball.style.top = (document.body.clientHeight - 25)/37.5+'rem';
            $ball.style.left = '45px';
            $ball.style.transition = 'left 1s linear, top 1s ease-in';
            setTimeout(()=>{
              this.$store.commit('changeNum',1)
              this.$store.commit('countTotalMoney',price)
              this.$store.commit('addGoodsToCar',{price,name})
            },1000)
        }, 20)
      },  
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
    background: #eee
    overflow-y: auto
    -webkit-overflow-scrolling: touch
    #ball
      display: none
      width: 0.32rem
      height: 0.32rem
      border-radius: 50%
      background: green
      position: fixed
      transition: left 1s linear, top 1s ease-in
    &>section
      margin-bottom: 0.533333rem
      background: white
    &>section:last-child
      margin: 0
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
          margin-bottom: 0.266667rem
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
              border-radius: 50%
          &>p:nth-child(2)
            display: flex
            align-items: center
            .thumb
              width: 0.32rem
              height: 0.32rem
              margin-right: 0.266667rem
          
</style>
