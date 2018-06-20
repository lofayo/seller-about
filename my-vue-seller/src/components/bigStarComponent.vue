<template>
  <p class="star_box">
    <span v-for='(star,index) of starArray' :key='index' v-if='star === 1' class="star star_on"></span> 
    <span v-else class="star star_off"></span>
  </p>
</template>

<script>

  import starArray from '../../static/js/utils.js'
export default {
  props: ['score'],
  data() {
    return {
      starArray:[],
    }
  },
  created: function() {
    this.starArray = starArray.starArray(this.score)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../static/css/mixin.styl'

  .star_box
    display: inline-block
    .star
      display: inline-block
      width: 0.533333rem
      height: 0.506667rem
    .star+.star
      margin-left: 0.266667rem  
    .star_on
      bg_dpr23('~images/star48_on')
    .star_off
      bg_dpr23('~images/star48_off')
</style>
