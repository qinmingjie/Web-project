<template>
  <!-- 轮播及资料 -->
  <div class="swiper-resource">
    <!-- 轮播 -->
    <div class="swiper swiper-container swiper-no-swiping">
      <div class="swiper-wrapper">
        <div class="swiper1 swiper-slide">
          <div class="swiper-content center clearfix">
            <div class="sc-left">
              <p class="sc-title fs40">企业微信私域增长运营平台</p>
              <p class="sc-info fs18">
                实现企业微信指数裂变增长，构建裂变获客增长模型
              </p>
              <p class="sc-info fs18">帮助企业快速搭建私域流量池</p>
              <p class="sc-underline fs12">低成本拥有500强企业同款工具</p>
              <a href="" class="free-btn fs18">免费试用</a>
            </div>
            <div class="sc-right">
              <img src="@/assets/img/swiper1.gif" alt="星耀裂变" />
            </div>
          </div>
        </div>
        <div class="swiper2 swiper-slide">
          <div class="swiper-content center clearfix">
            <div class="sc-left">
              <p class="sc-title fs40">微信公众号拉新必备工具</p>
              <p class="sc-info fs18">
                帮助公众号低成本轻松获客，支持多账号矩阵增长
              </p>
              <p class="sc-info fs18">实现高效裂变引流</p>
              <p class="sc-underline fs12">低成本拥有500强企业同款工具</p>
              <a href="" class="free-btn fs18">免费试用</a>
            </div>
            <div class="sc-right">
              <img src="@/assets/img/swiper2.gif" alt="星耀裂变" />
            </div>
          </div>
        </div>
      </div>
      <div class="center swiper-btn">
        <div class="prev">
          <img src="@/assets/img/prev-icon.png" alt="星耀裂变" />
        </div>
        <div class="next">
          <img src="@/assets/img/prev-icon.png" alt="星耀裂变" />
        </div>
      </div>
      <div class="center swiper-pagination" id="elpagination"></div>
    </div>
    <!-- 资料 -->
    <div class="resources center">
      <div class="res-item" v-for="(itme, index) in resources" :key="index">
        <p class="res-title fs20">{{ itme.title }}</p>
        <p class="res-info fs16">{{ itme.info }}</p>
        <span class="way"></span>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  name: 'my-swiper',
  data () {
    return {
      resources: [
        { title: '企微全行业裂变玩法', info: '盘点行业最全企业微信裂变玩法' },
        { title: '100+企业微信经典案例', info: '覆盖教育/电商/零售等10+行业' },
        { title: '裂变活动sop文档', info: '10套活动执行内部绝密文档' },
        { title: '1500+裂变海报合集', info: '爆款活动裂变海报，推广必备' }
      ]
    }
  },
  mounted () {
    this.initSwiper()
  },
  methods: {
    initSwiper () {
      const swiper = new Swiper('.swiper-container', {
        autoplay: {
          disableOnInteraction: false
        },
        loop: true,
        speed: 800,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/static/css/rest.scss";
/*轮播*/
.swiper-resource {
  position: relative;
}

.swiper {
  height: 530px !important;
  color: #fff;
  position: relative;
}

.swiper1,
.swiper2 {
  background-image: url(../../../assets/img/swiper1-bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}

.swiper2 {
  background-image: url(../../../assets/img/swiper2-bg.png);
}

.sc-title {
  font-weight: 700;
  letter-spacing: 0.09em;
  margin-bottom: 40px;
  line-height: 40px;
}

.sc-info {
  margin-bottom: 10px;
}

.sc-info:nth-of-type(0) {
  color: red;
}

.sc-underline {
  text-decoration: underline;
  margin-top: 70px;
  margin-bottom: 9px;
}

.free-btn {
  display: inline-block;
  padding: 10px 50px;
  border-radius: 2px;
  background-color: #fff;
  transition: opacity 0.5s;
  color: $themes-color;
}

.free-btn:hover {
  color: $themes-color;
  opacity: 0.9;
}

.sc-left {
  float: left;
  padding-top: 130px;
}

.sc-right {
  float: right;
  padding-top: 44px;
  padding-right: 25px;
}

.sc-right img {
  width: 468px;
}

.swiper-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9;
  transform: translate(-50%, -50%);
}

.swiper-btn img {
  width: 18px;
  transition: transform 0.5s;
  cursor: pointer;
}

.swiper-btn img:hover {
  transform: scale(1.1);
}

.swiper-btn .next {
  position: absolute;
  right: -8%;
  top: -18px;
  transform: rotate(180deg);
}

.swiper-btn .prev {
  position: absolute;
  left: -8%;
  top: -18px;
}

#elpagination {
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
}

#elpagination span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: transparent;
  box-sizing: border-box;
  margin: 0 8px;
}

.swiper-pagination-bullet {
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background-color: #fff;
}

/* 资料*/
.resources {
  color: #333333;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -90px;
  z-index: 9;
  display: grid;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 0 22px;
}

.res-item {
  padding: 22px 28px 17px 28px;
  background-image: url(../../../assets/img/res2-bg.png);
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: 0 0 10px 0px #ccc;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  top: 0;
  transition: all 0.4s ease;
}

.res-item p {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.res-item .way {
  display: inline-block;
  width: 43px;
  height: 2px;
  background-color: $themes-color;
  position: relative;
  top: -5px;
}

.res-item .way::after {
  content: "";
  display: block;
  width: 12px;
  height: 2px;
  background-color: inherit;
  right: -12px;
  bottom: -2px;
  transform-origin: 0 0;
  transform: rotate(-150deg);
  position: absolute;
}

.res-item:hover {
  background-image: url(../../../assets/img/res1-bg.png);
  top: -14px;
  box-shadow: none;
}

.res-item:hover .res-title,
.res-item:hover .res-info {
  color: #fff;
}

.res-item:hover .way {
  background-color: #fff;
}

.res-title {
  font-weight: 700;
  margin-bottom: 13px;
}

.res-info {
  margin-bottom: 20px;
  color: #666;
}
.swiper-container {
  --swiper-pagination-color: #fff; /* 两种都可以 */
}
</style>
