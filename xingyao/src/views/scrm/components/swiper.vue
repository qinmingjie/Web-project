<template>
  <div>
    <div class="swiper-resource">
      <div class="swiper swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper1 swiper-slide">
            <div class="swiper-content center clearfix">
              <div class="sc-left">
                <p class="sc-title fs40">星耀企微宝</p>
                <p class="sc-info fs22">企业微信SCRM，</p>
                <p class="sc-info fs22">私域获客+营销+管理一站式解决方案</p>
                <p class="sc-underline fs12">低成本拥有500强企业同款工具</p>
                <a href="" class="free-btn themes-color fs18">免费试用</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/static/css/rest.scss';
/*轮播*/
.swiper-resource {
  position: relative;
}
.swiper {
  height: 530px !important;
  color: #fff;
  position: relative;
}
.swiper-wrapper {
  height: 100%;
}
.swiper1 {
  background-image: url(../../../assets/img/scrm/swiper1.png);
  background-repeat: no-repeat;
  background-size: auto auto;
  background-position: center center;
  height: 100%;
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
  margin-top: 94px;
  margin-bottom: 9px;
}
.free-btn {
  display: inline-block;
  padding: 10px 50px;
  border-radius: 2px;
  color: $themes-color;
  background-color: #fff;
  transition: opacity 0.5s;
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
</style>
