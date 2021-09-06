<template>
  <div>
    <swiper></swiper>
    <product></product>
    <operat></operat>
    <qv></qv>
    <exams></exams>
    <business :business="business"></business>
    <power></power>
  </div>
</template>
<script>
import Swiper from './components/swiper.vue'
import Product from './components/product.vue'
import Operat from './components/operat.vue'
import Qv from './components/qv.vue'
import Exams from './components/exams.vue'
import Business from '../../components/Business.vue'
import Power from './components/power.vue'
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
  },
  data () {
    return {
      business: [
        '腾讯', '京东', '今日头条', '58到家', '新东方', '3节课', '唯品会', '华安保险', '斑马',
        '喜马拉雅', '宝洁', '学而思', '爱奇艺', '每日优鲜', '作业帮', '元气森林', '猿辅导', '携程',
        '交个朋友', '美团', '转转', '百度健康', '智联招聘', '苏泊尔', '混沌大学', '蘑菇街', '金山文档', '幸福西饼', '美的', '橙心优选'
      ]
    }
  }
}
</script>
