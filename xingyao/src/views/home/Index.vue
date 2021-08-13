<template>
  <div>
    <Swiper />
    <Product />
    <Operat />
    <Qv />
    <Exams />
    <Business />
    <Power />
  </div>
</template>
<script>
import Swiper from './components/swiper.vue'
import Product from './components/product.vue'
import Operat from './components/Operat.vue'
import Qv from './components/Qv.vue'
import Exams from './components/Exams.vue'
import Business from '../../components/Business.vue'
import Power from './components/Power.vue'
export default {
  name: 'my-home',
  components: {
    Swiper,
    Product,
    Operat,
    Qv,
    Exams,
    Business,
    Power
  }
}
</script>
