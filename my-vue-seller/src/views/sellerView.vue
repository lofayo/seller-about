<template>
  <div class="content">
    <section class="section_1">
      <div class="section_1_1">
        <div class="seller_info">
          <p class="title">{{seller.name}}</p>
          <div class="nums">
            <bigStarComponent :score='seller.score' />
            <p>(661)    月售{{seller.sellCount}}单</p>
          </div>
        </div>
        <div class="collect">
          <span class="collect_logo"></span>
          <span class="isCollect">已收藏</span>
        </div>
      </div>
      <hr class="hr1px"></hr>
      <div class="section_1_2">
        <div>
          <p>起送价</p>
          <p><span class="large">{{seller.minPrice}}</span>元</p>
        </div>
        <div>
          <p>商家配送</p>
          <p><span class="large">{{seller.deliveryPrice}}</span>元</p>
        </div>
        <div>
          <p>平均配送时间</p>
          <p><span class="large">{{seller.deliveryTime}}</span>分钟</p>
        </div>
      </div>
    </section>
    <section class="section_2">
      <div class="activity">
        <p class="title">
          公告与活动
        </p>
        <p class="activity_text">
          {{seller.bulletin}}
        </p>
      </div>
      <ul class="activity_lists">
        <li v-for='(support,index) of seller.supports' :key='index'>
          <span class="icon" :class='generateClass(index+1)'></span>{{support.description}}
        </li>
      </ul>
    </section>
    <section class="section_3">
      <p class="title">商家实景</p>
      <ul class="img_lists">
        <li v-for='(pic,index) of seller.pics' :key='index'>
          <img :src="pic" alt="">
        </li>
      </ul>
    </section>
    <section class="section_4">
      <p class="title">商家信息</p>
      <ul class="seller_mes">
        <li v-for='info of seller.infos' >{{info}}</li>
      </ul>
    </section>
  </div>
</template>

<script>
  import bigStarComponent from '@/components/bigStarComponent'
  import data from '../data.json'

export default {
  data() {
    return {
      seller: data.seller
    }
  },
  components: {
    bigStarComponent
  },
  methods: {
    generateClass(index) {
      return 'discount_' + index
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../static/css/mixin.styl'
  .content
    background: #eee
    &>section
      margin-bottom: 0.533333rem
      border-top: 1px solid #ccc
      border-bottom: 1px solid #ccc
      padding: 0.533333rem
      background-color: white
      .hr1px
        border: none
        height: 0.026667rem
        background-color: #ddd
      .title
        font-size: 0.373333rem
        color: rgb(7,17,27)
        margin-bottom: 0.266667rem
        font-weight: bold
    .section_1
      .section_1_1
        display: flex
        justify-content: space-between
        padding-bottom: 0.266667rem
        .seller_info
          .nums /deep/
            display: flex
            margin-top: 0.266667rem
            .star
              width: 0.426667rem
              height: 0.426667rem
            .star+.star
              margin-left: 0.133333rem
        .collect
          display: flex
          flex-direction: column
          align-items: center
          justify-content:space-around
          .collect_logo
            width: 0.533333rem
            height: 0.533333rem
            bg('~images/heart')
      .section_1_2
        display: flex
        padding-top: 0.266667rem
        &>div+div
          border-left: 0.026667rem solid #ddd
        &>div
          flex: 1
          text-align: center
          .large
            font-size: 0.533333rem
    .section_2
      .activity_text
        padding-left:0.266667rem
        font-size: 0.32rem
        color: rgb(240,20,20)
        line-height: 0.64rem
        margin-bottom: 0.533333rem
      .activity_lists
        &>li
          padding: 0.426667rem
          border-top: 0.026667rem solid rgba(7,17,27,0.1)
          display:flex
          align-items: center
          .icon
            display: inline-block
            width: 0.426667rem
            height: 0.426667rem
            margin-right: 0.266667rem
          .discount_1
            bg_dpr23('~images/decrease_4')
          .discount_2,.discount_3
            bg_dpr23('~images/discount_4')
          .discount_4
            bg_dpr23('~images/special_4')
          .discount_5
            bg_dpr23('~images/guarantee_4')
    .section_3
      .img_lists
        display: flex
        width: 100%
        overflow: auto
        &>li
          width: 3.2rem
          height: 2.4rem
          margin-right: 0.266667rem
          flex: none
          &>img
            width: 100%
            height: 100%
    .section_4
      margin-bottom: 0
      .seller_mes
        &>li
          padding: 0.426667rem
          border-top: 0.026667rem solid #ddd
</style>
