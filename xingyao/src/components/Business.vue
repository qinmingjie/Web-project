<template>
  <!-- 合作企业 -->
  <div class="business">
    <div class="center">
      <p class="business-title fs40">35000+家企业的信赖之选</p>
      <div class="business-content business-content1">
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">腾讯</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">京东</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">今日头条</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">58到家</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">新东方</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">3节课</p>
        </div>
      </div>
      <div class="business-content business-content2">
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">唯品会</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">华安保险</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">斑马</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">喜马拉雅</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">宝洁</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">学而思</p>
        </div>
      </div>
      <div class="business-content business-content3">
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">爱奇艺</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">每日优鲜</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">作业帮</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">元气森林</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">猿辅导</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">携程</p>
        </div>
      </div>
      <div class="business-content business-content4">
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">交个朋友</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">美团</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">转转</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">百度健康</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">智联招聘</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">苏泊尔</p>
        </div>
      </div>
      <div class="business-content business-content5">
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">混沌大学</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">蘑菇街</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">金山文档</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">幸福西饼</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">美的</p>
        </div>
        <div class="business-item">
          <span class="business-icon"></span>
          <p class="business-name fs15">橙心优选</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/static/css/rest.scss";
/*合作企业*/
.business {
  padding-top: 77px;
  padding-bottom: 94px;
  color: #333;
}

.business-title {
  text-align: center;
  font-weight: 700;
  margin-bottom: 70px;
}

.business-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.business-content:nth-of-type(odd) .business-item:nth-of-type(even) {
  background-color: #fff;
}

.business-content:nth-of-type(odd) .business-item:nth-of-type(odd) {
  background-color: #f2f2f2;
}

.business-content:nth-of-type(even) .business-item:nth-of-type(odd) {
  background-color: #fff;
}

.business-content:nth-of-type(even) .business-item:nth-of-type(even) {
  background-color: #f2f2f2;
}

.business-content .business-item {
  width: 16.66667%;
  height: 140px;
  position: relative;
}

.business-content .business-item .business-icon {
  display: inline-block;
  width: 100%;
  height: 100px;
  background-image: url(../assets/img/business-logo.png);
  background-repeat: no-repeat;
  background-position: 0 0;
}

.business-content .business-item:nth-of-type(2) .business-icon {
  background-position: -201px 0;
}

.business-content .business-item:nth-of-type(3) .business-icon {
  background-position: -402px 0;
}

.business-content .business-item:nth-of-type(4) .business-icon {
  background-position: -603px 0;
}

.business-content .business-item:nth-of-type(5) .business-icon {
  background-position: -804px 0;
}

.business-content .business-item .business-icon {
  background-position: -1005px 0;
}

.business-content .business-item p {
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
}

.business-content1 .business-item:nth-of-type(1) .business-icon {
  background-position: 0 0;
}

.business-content2 .business-item .business-icon {
  background-position: 0 -101px;
}

.business-content2 .business-item:nth-of-type(2) .business-icon {
  background-position: -201px -101px;
}

.business-content2 .business-item:nth-of-type(3) .business-icon {
  background-position: -402px -101px;
}

.business-content2 .business-item:nth-of-type(4) .business-icon {
  background-position: -603px -101px;
}

.business-content2 .business-item:nth-of-type(5) .business-icon {
  background-position: -804px -101px;
}

.business-content2 .business-item:nth-of-type(6) .business-icon {
  background-position: -1005px -101px;
}

.business-content3 .business-item .business-icon {
  background-position: 0 -202px;
}

.business-content3 .business-item:nth-of-type(2) .business-icon {
  background-position: -201px -202px;
}

.business-content3 .business-item:nth-of-type(3) .business-icon {
  background-position: -402px -202px;
}

.business-content3 .business-item:nth-of-type(4) .business-icon {
  background-position: -603px -202px;
}

.business-content3 .business-item:nth-of-type(5) .business-icon {
  background-position: -804px -202px;
}

.business-content3 .business-item:nth-of-type(6) .business-icon {
  background-position: -1005px -202px;
}

.business-content4 .business-item .business-icon {
  background-position: 0 -303px;
}

.business-content4 .business-item:nth-of-type(2) .business-icon {
  background-position: -201px -303px;
}

.business-content4 .business-item:nth-of-type(3) .business-icon {
  background-position: -402px -303px;
}

.business-content4 .business-item:nth-of-type(4) .business-icon {
  background-position: -603px -303px;
}

.business-content4 .business-item:nth-of-type(5) .business-icon {
  background-position: -804px -303px;
}

.business-content4 .business-item:nth-of-type(6) .business-icon {
  background-position: -1005px -303px;
}

.business-content5 .business-item .business-icon {
  background-position: 0 -404px;
}

.business-content5 .business-item:nth-of-type(2) .business-icon {
  background-position: -201px -404px;
}

.business-content5 .business-item:nth-of-type(3) .business-icon {
  background-position: -402px -404px;
}

.business-content5 .business-item:nth-of-type(4) .business-icon {
  background-position: -603px -404px;
}

.business-content5 .business-item:nth-of-type(5) .business-icon {
  background-position: -804px -404px;
}

.business-content5 .business-item:nth-of-type(6) .business-icon {
  background-position: -1005px -404px;
}
</style>
