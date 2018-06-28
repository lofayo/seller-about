<template>
  <div class="content">
    <div class="category">
      <ul class="category_lists">
        <li v-for='(good,index) of goods'>
          <a :class='{active: selectCategory === index}' @click='select(index)' :href="'#'+index">{{good.name}}</a>
        </li>
      </ul>
    </div>
    <div class="category_items">
      <div class="item" v-for='(good,index1) of goods'>
        <p class="item_title">
          <a :name='index1'>{{good.name}}</a>
        </p>
        <div class="item_info" v-for='(food,index2) of good.foods'>
          <router-link :to="'/detail/'+index1+'/'+index2">
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
          </router-link>
        </div>
      </div>
    </div>
    <div id="ball"></div>
  </div>
</template>

<script>
  import data from '../data.json'
  export default {
    data() {
      return {
        goods: data.goods,
        selectCategory: 0
      }
    },
    methods: {
      parabola(evt) {
        let $ball = document.getElementById('ball')
        console.log(evt.pageX,evt.pageY)
        $ball.style.display = 'block';
        $ball.style.top = evt.pageY+'px';
        $ball.style.left = evt.pageX+'px';
        $ball.style.transition = 'left 0s, top 0s';
        setTimeout(()=>{
            $ball.style.top = '614px';
            $ball.style.left = '45px';
            $ball.style.transition = 'left 1s linear, top 1s ease-in';
        }, 20)

      },
      select(index) {
        this.selectCategory = index
      }
    }
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../static/css/mixin.styl'
    .content
      display: flex
      flex: 1
      #ball
        display: none
        width: 0.32rem
        height: 0.32rem
        border-radius: 50%
        background: green
        position: fixed
        transition: left 1s linear, top 1s ease-in
      .category
        overflow: auto
        .category_lists
          width: 2.16rem
          box-sizing: border-box
          padding: 0 0.266667rem
          background: #eee
          &>li>a
            height: 1.48rem
            display: flex
            align-items: center
            border-bottom: 0.026667rem solid #ccc
            &.active
              background: white
          &>li:last-child
            border: none
      .category_items
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
          &>a
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
              bottom: 0.266667rem
              width: 0.64rem
              height: 0.64rem
              bg('~images/add')
        .item_info:last-child a
          border: none
</style>
