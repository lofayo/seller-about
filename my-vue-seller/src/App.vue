<template>
  <div id="app">
    <headerComponent />
    <router-view/>
    <shopCarComponent />
  </div>
</template>

<script>
  import headerComponent from '@/components/headerComponent'
  import shopCarComponent from '@/components/shopCarComponent'
  export default {
    components: {
      headerComponent,
      shopCarComponent
    },
    mounted() {
      // alert(document.body.clientHeight)
      // alert(document.body.clientWidth)
    }
  }
</script>

<style lang="stylus" scoped>
  #app
    height: 100vh
    width: 100vw
    display: flex
    flex-direction: column
</style>
