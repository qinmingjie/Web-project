import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './static/css/rest.scss'
// import './assets/css/swiper.min.css'
import 'swiper/css/swiper.min.css'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
