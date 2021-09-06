<template>
  <!-- 裂变获客 -->
  <div class="getuser">
    <div class="center">
      <p class="title fs40">裂变获客</p>
      <p class="info fs18">
        15种裂变玩法，自动引流存量用户，裂变获取精准新客
      </p>
      <div class="getuser-content">
        <div class="getuser-itme">
          <div class="number-icon"><span></span></div>
          <div class="getuser-itme-txt">
            <p class="getuser-itme-title fs24">企业微信号裂变</p>
            <p class="getuser-itme-info fs18">为企业微信成员号快速拉新</p>
          </div>
          <div class="getuser-itme-flex fs16 ">
            <span>企微号裂变</span>
            <span>红包裂变</span>
            <span>线下核销</span>
            <span>小程序</span>
            <span>微信商城</span>
            <span>课程平台</span>
            <span>APP</span>
            <span>官网</span>
          </div>
        </div>
        <div class="getuser-itme">
          <div class="number-icon"><span></span></div>
          <div class="getuser-itme-txt">
            <p class="getuser-itme-title fs24">企业微信群裂变</p>
            <p class="getuser-itme-info fs18">轻松裂变N多个企业微信群</p>
          </div>
          <div class="getuser-itme-flex fs16 ">
            <span>企微群裂变</span>
            <span>社群秒杀</span>
            <span>社群团购</span>
            <span>社群拼团</span>
            <span>抖音引流</span>
            <span>淘宝引流</span>
            <span>淘宝引流</span>
          </div>
        </div>
        <div class="getuser-itme">
          <div class="number-icon"><span></span></div>
          <div class="getuser-itme-txt">
            <p class="getuser-itme-title fs24">企微+公众号双重裂变</p>
            <p class="getuser-itme-info fs18">
              同时实现企业微信、公众号双重裂变增长
            </p>
          </div>
          <div class="getuser-itme-flex fs16">
            <span class="flex-row">企微+公众号双重裂变</span>
            <span>盲盒裂变</span>
            <span>抽奖裂变</span>
            <span>一元解锁</span>
            <span>有赞商城</span>
            <span>卡密推送</span>
            <span>排行榜裂变</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/static/css/rest.scss';
/*裂变获客*/
.getuser {
  background-color: #F4F7FF;
  padding-top: 83px;
  padding-bottom: 74px;
}
.getuser .title {
  font-weight: 700;
  text-align: center;
  margin-bottom: 39px;
}
.getuser .info {
  text-align: center;
  color: #333;
  margin-bottom: 65px;
}
.getuser-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.getuser-itme {
  width: 358px;
  text-align: center;
  padding: 31px 17px 24px 17px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 3px 4px 10px 0 rgba(39, 35, 96, 0.2);
  transition: transform 0.3s;
}
.getuser-itme:hover {
  transform: scale(1.07);
}
.getuser-itme .number-icon {
  margin-bottom: 25px;
}
.getuser-itme .number-icon span {
  display: inline-block;
  width: 73px;
  height: 67px;
  background-image: url(../../../assets/img/scrm/number.png);
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 0 0;
}
.getuser-itme .getuser-itme-title {
  font-weight: 700;
  margin-bottom: 14px;
}
.getuser-itme .getuser-itme-info {
  color: #666;
  margin-bottom: 39px;
}
.getuser-itme .getuser-itme-flex {
  padding: 33px 25px 5px 25px;
  border: 1px dashed $themes-color;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: $themes-color;
}
.getuser-itme .getuser-itme-flex span {
  width: 45%;
  line-height: 29px;
  background-color: #EBF4FF;
  margin-bottom: 30px;
  border-radius: 5px;
}
.getuser-itme:nth-of-type(2) .number-icon span {
  width: 89px;
  height: 67px;
  background-position: -74px 0;
}
.getuser-itme:nth-of-type(2) .getuser-itme-flex {
  border-color: #00AA58;
}
.getuser-itme:nth-of-type(2) .getuser-itme-flex span {
  background-color: #D6FFEB;
  color: #00AA58;
}
.getuser-itme:nth-of-type(3) .number-icon span {
  width: 89px;
  height: 67px;
  background-position: -165px 0;
}
.getuser-itme:nth-of-type(3) .getuser-itme-flex {
  border-color: #FF5408;
}
.getuser-itme:nth-of-type(3) .getuser-itme-flex span {
  background-color: #FFE0D3;
  color: #FF5408;
}
.getuser-itme:nth-of-type(3) .flex-row {
  flex-grow: 1;
  width: 100%;
}
</style>
