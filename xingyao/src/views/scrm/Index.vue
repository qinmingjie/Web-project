<template>
  <div>
    <swiper></swiper>
    <grow></grow>
    <get-user></get-user>
    <get-user-section></get-user-section>
  </div>
</template>
<script>
import Swiper from './components/swiper.vue'
import Grow from './components/grow.vue'
import GetUser from './components/getUser.vue'
import GetUserSection from './components/getUserSection.vue'
export default {
  name: 'scrm',
  components: {
    Swiper,
    Grow,
    GetUser,
    GetUserSection
  }
}
</script>
<style lang="scss" scoped>
@import '@/static/css/rest.scss';
</style>
