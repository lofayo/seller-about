<template>
  <div id="app">
    <headerComponent />
    <router-view/>
  </div>
</template>

<script>
  import headerComponent from '@/components/headerComponent'
  export default {
    components: {
      headerComponent
    }
  }
</script>

<style>
</style>
