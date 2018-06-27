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
    }
  }
</script>

<style lang="stylus" scoped>

</style>
