<template>
  <div class="examples">
    <div class="center">
      <p class="examples-title fs40">行业实战裂变案例</p>
      <div class="examples-tab fs20">
        <span class="tab-active">家用电器</span>
        <span>直播电商</span>
        <span>线下商场</span>
        <span>水果生鲜</span>
        <span>职业教育</span>
      </div>
      <div class="exam-tablist">
        <div class="exam-tab-item exam-tab-item1 clearfix tab-show">
          <div class="exam-ti-count">
            <div class="exam-ti-left"></div>
            <div class="exam-ti-right">
              <span class="exam-icon"></span>
              <p class="exam-item-title fs30">裂变层级19级，裂变率1906%</p>
              <p class="exam-item-info fs16">
                用漱口水，洗手液作诱饵，实现为企业微信，公众号双重裂变增长，裂变层级19级，一级用户仅1000人
              </p>
              <a href="" class="fs16 themes-color">了解详情</a>
            </div>
          </div>
        </div>
        <div class="exam-tab-item exam-tab-item1 clearfix">
          <div class="exam-ti-count">
            <div class="exam-ti-left"></div>
            <div class="exam-ti-right">
              <span class="exam-icon"></span>
              <p class="exam-item-title fs30">
                搭建"企业微信+抖音"裂变增长闭环
              </p>
              <p class="exam-item-info fs16">
                通过企业微信拉新获客，再在企微社群引导转化，最终将用户引流沉淀在抖音直播间，完成实现闭环
              </p>
              <a href="" class="fs16 themes-color">了解详情</a>
            </div>
          </div>
        </div>
        <div class="exam-tab-item exam-tab-item1 clearfix">
          <div class="exam-ti-count">
            <div class="exam-ti-left"></div>
            <div class="exam-ti-right">
              <span class="exam-icon"></span>
              <p class="exam-item-title fs30">1人带来100人</p>
              <p class="exam-item-info fs16">
                利用企业微信号裂变玩法，用购物卡，口红作诱饵，轻松裂变近万人本地精准用户，为商场成功引流
              </p>
              <a href="" class="fs16 themes-color">了解详情</a>
            </div>
          </div>
        </div>
        <div class="exam-tab-item exam-tab-item1 clearfix">
          <div class="exam-ti-count">
            <div class="exam-ti-left"></div>
            <div class="exam-ti-right">
              <span class="exam-icon"></span>
              <p class="exam-item-title fs30">引流企微，成交小程序</p>
              <p class="exam-item-info fs16">
                用1元吃水果的活动主题，吸引大批用户参与活动， 添加企业微信，
                再让用户在小程序领券并消费，完成拉新转化闭环
              </p>
              <a href="" class="fs16 themes-color">了解详情</a>
            </div>
          </div>
        </div>
        <div class="exam-tab-item exam-tab-item1 clearfix">
          <div class="exam-ti-count">
            <div class="exam-ti-left"></div>
            <div class="exam-ti-right">
              <span class="exam-icon"></span>
              <p class="exam-item-title fs30">2天裂变50个企业微信群</p>
              <p class="exam-item-info fs16">
                用企业微信群裂变将大批用户引流到社群，在通过拼团，发券，直播等形式，引导用户购买课程
              </p>
              <a href="" class="fs16 themes-color">了解详情</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-plan',
  mounted () {
    this.$nextTick(() => {
      this.tabTouch()
    })
  },
  methods: {
    tabTouch () {
      const tabList = document.querySelectorAll('.examples-tab span')
      const tabSwiper = document.querySelectorAll('.exam-tab-item')
      tabList.forEach((itme, index) => {
        itme.setAttribute('key', index)
        itme.addEventListener('mouseenter', function () {
          tabList.forEach((tabItme, tabIndex) => {
            tabItme.classList = ''
            tabSwiper[tabIndex].classList = 'exam-tab-item exam-tab-item1 clearfix'
          })
          this.classList = 'tab-active'
          tabSwiper[index].classList = 'exam-tab-item exam-tab-item1 clearfix tab-show'
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/static/css/rest.scss";
/*行业案例*/
.examples {
  background-image: url(../../../assets/img/examples-bg.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  padding: 76px 0 80px 0;
}
.examples-title {
  text-align: center;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.09em;
  margin-bottom: 70px;
}

.examples-tab {
  width: 100%;
  text-align: center;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-bottom: 60px;
}

.examples-tab span {
  display: block;
  width: 25%;
  line-height: 44px;
  border-right: 1px solid #fff;
  transition: all 0.5s;
  cursor: pointer;
}

.examples-tab span:last-child {
  border: 0;
}

.examples-tab span:hover {
  background-color: #fff;
  color: $themes-color;
  cursor: pointer;
}

.examples-tab span.tab-active {
  background-color: #fff;
  color: $themes-color;
  cursor: pointer;
}

.exam-tablist {
  height: 420px;
  padding: 9px 0;
  position: relative;
  overflow: hidden;
}

.exam-tab-item {
  width: 100%;
  height: 420px;
  position: absolute;
  opacity: 0;
}

.exam-ti-count {
  width: 100%;
  position: absolute;
  background-color: #fff;
  color: #333;
}

.exam-ti-left {
  width: 440px;
  height: 0;
  border-top: 437px solid transparent;
  border-right: 165px solid transparent;
  border-image: url(../../../assets/img/tab-swiper1.png) 440 165 0 0;
  position: absolute;
  top: -9px;
  left: -1px;
  transform: translateY(-100%);
  z-index: 9;
}

.exam-tablist .exam-tab-item:nth-of-type(2) .exam-ti-left {
  border-image: url(../../../assets/img/tab-swiper2.png) 440 165 0 0;
}

.exam-tablist .exam-tab-item:nth-of-type(3) .exam-ti-left {
  border-image: url(../../../assets/img/tab-swiper3.png) 440 165 0 0;
}

.exam-tablist .exam-tab-item:nth-of-type(4) .exam-ti-left {
  border-image: url(../../../assets/img/tab-swiper4.png) 440 165 0 0;
}

.exam-tablist .exam-tab-item:nth-of-type(5) .exam-ti-left {
  border-image: url(../../../assets/img/tab-swiper5.png) 440 165 0 0;
}

.exam-ti-right {
  height: 420px;
  width: 50%;
  background-color: inherit;
  float: right;
  padding-left: 35px;
  padding-right: 63px;
  padding-top: 52px;
  box-sizing: border-box;
  transform: translateY(110%);
  position: relative;
  z-index: 8;
}

.exam-ti-right .exam-icon {
  display: block;
  width: 166px;
  height: 58px;
  background-image: url(../../../assets/img/exam-icon1.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;
  margin-bottom: 56px;
}

.exam-ti-right .exam-item-title {
  margin-bottom: 25px;
  font-weight: 700;
}

.exam-ti-right .exam-item-info {
  color: #666;
  margin-bottom: 56px;
  letter-spacing: 0.03em;
  line-height: 22px;
}

.exam-ti-right a {
  padding: 7px 28px;
  border: 1px solid $themes-color;
}

.exam-tab-item:nth-of-type(2) .exam-icon {
  background-image: url(../../../assets/img/exam-icon2.png);
}

.exam-tab-item:nth-of-type(3) .exam-icon {
  background-image: url(../../../assets/img/exam-icon3.png);
}

.exam-tab-item:nth-of-type(4) .exam-icon {
  background-image: url(../../../assets/img/exam-icon4.png);
}

.exam-tab-item:nth-of-type(5) .exam-icon {
  background-image: url(../../../assets/img/exam-icon5.png);
}

.exam-tab-item.tab-show {
  opacity: 1;
  transition: 0.5s ease-in-out;
}

.exam-tab-item.tab-show .exam-ti-left,
.exam-tab-item.tab-show .exam-ti-right {
  transition: 0.5s ease-in-out;
  transform: translateY(0);
}
</style>
