<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  name: 'my-home',
  components: {
    Header
  }
}
</script>
<style lang="scss">
</style>
