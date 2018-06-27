<template>
  <div class="content">
    <section class="rating_total">
      <div class="left">
        <p>{{seller.score}}</p>
        <p>综合评分</p>
        <p>高于周边商家69.2%</p>
      </div>
      <div class="right">
        <div>
          <p>服务态度</p>
          <bigStarComponent :score='seller.serviceScore'/>
          <p class="score">{{seller.serviceScore}}</p>
        </div>
        <div>
          <p>食品质量</p>
          <bigStarComponent :score='seller.foodScore'/>
          <p class="score">{{seller.foodScore}}</p>
        </div>
        <div>
          <p>送达时间</p>
          <p class="score">44分钟</p>
        </div>
      </div>
    </section>
    <section class="rating_box">
      <div class="rating_header">
        <p :class='{active: currentRateType === 2}' @click='filterRatingArray(2,isOnlyContent)'>全部 {{ratings.length}}</p>
        <p :class='{active: currentRateType === 0}' @click='filterRatingArray(0,isOnlyContent)'>满意 {{ratings.filter((item)=> item.rateType === 0).length}}</p>
        <p :class='{active: currentRateType === 1}' @click='filterRatingArray(1,isOnlyContent)'>不满意 {{ratings.filter((item)=> item.rateType === 1).length}}</p>
      </div>
      <div class="only_look" @click='checkOnlyContent'>
        <span :class="{only_content:isOnlyContent}"></span>只看有内容的评价
      </div>
      <ul class="rating_lists">
        <li v-for='(rating,index) of filterRatings' :key='index'>
          <div class="deliver_mes">
            <img class="customer_logo" :src="rating.avatar" alt="">
            <div>
              <p>{{rating.username}}</p>
              <bigStarComponent :score='rating.score' />
            </div>
            <div>
              <p>{{timestampToTime(rating.rateTime)}}</p>
              <p>{{rating.deliveryTime ? rating.deliveryTime : '?'}}分钟送达</p>
            </div>
          </div>
          <div class="rating_mes">
            {{rating.text}}
          </div>
          <div class="rating_thumb">
            <span v-if='rating.recommend.length > 0' class="thumb_up"></span>
            <span v-for='item of rating.recommend' class="rating_goods">{{item}}</span>
          </div>
        </li>
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
      ratings: data.ratings,
      seller: data.seller,
      filterRatings: data.ratings,
      isOnlyContent: false,
      currentRateType: 2
    }
  },
  components:{
    bigStarComponent
  },
  methods: {
    timestampToTime:function(timestamp) {  
      let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000  
      let Y = date.getFullYear() + '-';  
      let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';  
      let D = date.getDate() + ' ';  
      let h = date.getHours() + ':';  
      let m = date.getMinutes(); 
      return Y+M+D+h+m;  
    },
    filterRatingArray(rateType, isOnlyContent) {
      this.currentRateType = rateType
      this.filterRatings = this.ratings.filter(item => {
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
    .rating_total
      padding-bottom: 0.533333rem
      display: flex
      .left
        text-align: center
        padding-right: 0.533333rem
        &>p:nth-child(1)
          font-width: 0.48rem
          color: yellowgreen
        &>p:nth-child(3)
          color: #ccc
      .right /deep/
        padding-left: 0.533333rem
        border-left: 0.026667rem solid #ccc
        display: flex
        flex-direction: column
        justify-content: space-between
        .star
          margin-left: 0.133333rem
          width: 0.32rem
          height: 0.32rem
        .score
          color: yellowgreen
          margin-left: 0.266667rem
        &>div
          display: flex
    .rating_box
      margin-bottom: 0
      .rating_header
        display: flex
        padding-bottom: 0.266667rem
        border-bottom: 1px solid #ccc
        .active
          background: yellowgreen
          color: black
        &>p
          padding: 0.266667rem
          margin-right: 0.266667rem
          background: skyblue
          color: #fff
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
      .rating_lists
        &>li
          border-top: 1px solid #ccc
          padding: 0.266667rem 0
          &>div
            margin-left: 1.333333rem
            margin-bottom: 0.133333rem
          .deliver_mes /deep/
            margin-left: 0
            margin-bottom: 0.266667rem
            display: flex
            align-items: center
            text-align: center
            .star
              width: 0.32rem
              height: 0.32rem
              margin-left: 0.133333rem 
            .customer_logo
              width: 0.746667rem
              height: 0.746667rem
              border-radius: 50%
              bg('~images/thumbs_up')
            &>div
              display: flex
              flex-direction: column
            &>div:nth-child(2)
              margin-left: 0.566667rem
            &>div:nth-child(3)
              margin-left: 2.333333rem
          .rating_mes
          .rating_thumb
            display: flex
            align-items: center
            flex-wrap: wrap
            color: #999
            &>span
              flex: none
              display: inline-block
              margin-right: 0.266667rem
              padding: 0.066667rem 0.266667rem
              border: 0.026667rem solid #ccc
            .thumb_up
              width: 0.32rem
              height: 0.32rem
              border: none
              bg('~images/thumbs_up')
            .thumb_down
              width: 0.32rem
              height: 0.32rem
              border: none
              bg('~images/thumbs_down')
</style>
