<template>
  <header>
    <div class="init_header">
      <div class="shop_info">
        <div class="shop_logo"></div>
        <div class="shop_text">
          <p>
            <span class="brand"></span>{{seller.name}}
          </p>
          <p>
            {{seller.description}} / {{seller.deliveryTime}}分钟送达
          </p>
          <p class="discount">
            <span class="discount_1"></span>在线支付满28减5，满50减10
          </p>
        </div>
        <div class="nums" @click='showDetails'>5个 ></div>
      </div>
      <div class="ad" @click='showDetails'>
        <span class="ad_logo"></span>{{seller.bulletin}}
      </div>
      <div class="nav">
        <router-link to='/goods'><span>商品</span></router-link>
        <router-link to='/rating'><span>评价</span></router-link>
        <router-link to='/seller'><span>商家</span></router-link>
      </div>
    </div>
    <div class="ad_details" :class='{active: isShowDetails}'>
      <div class="content">
        <div class="details_header">
          <p>{{seller.name}}</p>
          <bigStarComponent :score='seller.score' />
        </div>
        <div class="discount_mes">
          <p class="details_title">优惠信息</p>
          <p v-for='(support,index) of seller.supports' :key='index'>
            <span class="discount_icon" :class="generateClass(index+1)"></span>{{support.description}}
          </p>
        </div>
        <div class="bulletin">
          <p class="details_title">商家公告</p>
          <p class="bulletin_text">
            {{seller.bulletin}}
          </p>
        </div>
        </div>
      <div class="close" @click='closeDetails'>
        
      </div>
    </div>
  </header>
</template>

<script>
  import data from '../data.json'
  import bigStarComponent from '@/components/bigStarComponent'
  console.log(data)
  export default {
    data() {
      return {
        seller: data.seller,
        isShowDetails: true

      }
    },
    components: {
      bigStarComponent
    },
    methods: {
      showDetails() {
        this.isShowDetails = true
      },
      closeDetails() {
        this.isShowDetails = false
      },
      generateClass(index) {
        return 'discount_' + index
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../static/css/mixin.styl'
  
  header
    position: relative
    .init_header
      position: relative
      overflow: hidden
      &::before
        content: ''
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        bg('~images/shop_logo')
        filter: blur(0.266667rem)
        z-index: -2
      &::after
        content: ''
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
        background-color: rgba(0,0,0,0.1)
        z-index: -1
      .shop_info
        padding: 0.64rem
        position: relative
        display: flex
        color: white
        .shop_logo
          width: 1.706667rem
          height: 1.706667rem
          bg('../../static/images/shop_logo')
          margin-right: 0.426667rem
        .shop_text
          display: flex
          flex-direction: column
          justify-content: space-between
          &>p:nth-child(1)
            font-size: 0.426667rem
            display: flex
            align-items: center
            font-weight: bold
            .brand
              display: inline-block
              width: 0.8rem
              height: 0.48rem
              bg_dpr23('~images/brand')
              margin-right: 0.213333rem
          &>p:nth-child(2)
            font-size: 0.32rem
          &>p:nth-child(3)
            font-size: 0.266667rem
            display: flex
            align-items: center
            .discount_1
              display: inline-block
              width: 0.32rem
              height: 0.32rem
              bg_dpr23('~images/decrease_1')
              margin-right: 0.133333rem
        .nums
          position: absolute
          right: 0.266667rem
          bottom: 0.266667rem
          padding: 0.186667rem 0.213333rem
          background-color: rgba(0,0,0,0.2)
          border-radius: 1.333333rem
      .ad
        height: 0.8rem
        line-height: 0.8rem
        padding: 0 0.266667rem
        padding-right: 0.533333rem
        color: white
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        background: url('../../static/images/svg/arrow_right.svg') no-repeat right center / 1.066667rem 0.533333rem
        background-color: rgba(7,17,27,0.2)
        .ad_logo
          display: inline-block
          width: 0.586667rem
          height: 0.32rem
          bg_dpr23('~images/bulletin')
          margin-right: 0.133333rem
          // vertical-align: middle
      .nav
        height: 1.066667rem
        line-height: 1.066667rem
        display: flex
        text-align: center
        font-size: 0.373333rem
        font-weight: bold
        &>a
          flex: 1
          color: black
          &.router-link-active
            color: red
        .active
          color: red
    .ad_details
      position: fixed
      left: 0
      top: 0
      width: 100%
      box-sizing: border-box
      padding: 1.706667rem 0.96rem
      text-align: center
      color: white
      font-size: 0.32rem
      z-index: 1
      height: 100vh
      padding-bottom: 0
      transition: all 0.5s
      transform: translate(100%,0)
      &.active
        transform: translate(0,0)
      &::before 
        content: ''
        position: absolute
        left: 0
        top: 0
        width: 100%
        min-height: 100vh
        background-color: rgba(0,0,0,0.8)
        z-index: -1
      .content
        min-height: 100%
        padding-bottom: 2.666667rem
        box-sizing: border-box
        &>div
          margin-bottom: 0.746667rem
        .details_header
          &>p:nth-child(1)
            margin-bottom: 0.426667rem
            font-size: 0.426667rem
            font-weight: bold
        .details_title
          font-size: 0.373333rem
          font-weight: bold
          margin: 0 auto 0.266667rem 0 !important
          display: flex
          align-items: center
          &::before
            content: ''
            display: inline-block
            border-bottom: 1px solid white
            margin-right: 0.266667rem
            flex: auto
          &::after
            content: ''
            display: inline-block
            border-bottom: 1px solid white
            margin-left: 0.266667rem
            flex: auto
        .discount_mes
          &>p
            display: flex
            align-items: center 
            margin-bottom: 0.266667rem
            margin-left: 0.266667rem
          .discount_icon
            width: 0.426667rem
            height: 0.426667rem
            margin-right: 0.266667rem
          .discount_1
            bg_dpr23('~images/decrease_2')
          .discount_2
            bg_dpr23('~images/discount_2')
          .discount_3
            bg_dpr23('~images/guarantee_2')
          .discount_4
            bg_dpr23('~images/special_2')
          .discount_5
            bg_dpr23('~images/invoice_2')
      .close
        width: 0.506667rem
        height: 0.506667rem
        background: url('../../static/images/svg/close.svg') no-repeat center / cover
        margin: 0.853333rem auto
        margin-top: -2.666667rem
        background-color: white
</style>
