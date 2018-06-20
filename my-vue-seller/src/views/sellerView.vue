<template>
  <div class="content">
    <section class="section_1">
      <div class="section_1_1">
        <div class="seller_info">
          <p>粥品香坊（大运村）</p>
          <div class="nums">
            <bigStarComponent />
            <p>(661)    月售690单</p>
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
          <p><span class="large">20</span>元</p>
        </div>
        <div>
          <p>商家配送</p>
          <p><span class="large">4</span>元</p>
        </div>
        <div>
          <p>平均配送时间</p>
          <p><span class="large">39</span>分钟</p>
        </div>
      </div>
    </section>
    <section class="section_2">
      <div class="activity">
        <p class="title">
          公告与活动
        </p>
        <p class="activity_text">
          粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现
        </p>
      </div>
      <ul class="activity_lists">
        <li>
          <span class="icon icon_1"></span>在线支付满28减5，满50减10
        </li>
        <li>
          <span class="icon icon_2"></span>单人精彩赛
          <span class="icon icon_2"></span>清肺雪梨汤8折抢购
        </li>
        <li>
          <span class="icon icon_3"></span>特价饮品八折抢购
          <span class="icon icon_3"></span>单人特色套餐
        </li>
        <li>
          <span class="icon icon_4"></span>该商家支持开发票，请在下单时填写好发票抬头
          <span class="icon icon_4"></span>已加入“外卖保”计划，食品安全保障
        </li>
      </ul>
    </section>
    <section class="section_3">
      <p class="title">商家实景</p>
      <ul>
        <li><img src="" alt=""></li>
      </ul>
    </section>
    <section class="section_4">
      <p class="title">商家信息</p>
      <ul class="seller_mes">
        <li>地址：北京市昌平区回龙观西大街龙观置业大厦底商B座</li>
        <li>营业时间：10:00 - 20:30</li>
      </ul>
    </section>
  </div>
</template>

<script>
  import bigStarComponent from '@/components/bigStarComponent'
export default {
  components: {
    bigStarComponent
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
        background-color: #ccc
    .section_1
      .section_1_1
        display: flex
        justify-content: space-between
        padding-bottom: 0.533333rem
        .seller_info
          .nums
            display: flex
            margin-top: 0.533333rem
        .collect
          display: flex
          flex-direction: column
          align-items: center
          .collect_logo
            width: 0.533333rem
            height: 0.533333rem
            bg('~images/heart')
</style>
