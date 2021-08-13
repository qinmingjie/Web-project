<template>
  <div class="product">
    <div class="prod-wrap center">
      <p class="prod-title fs40">星耀裂变两大核心产品</p>
      <p class="prod-info fs18">专注微信生态用户指数增长</p>
      <div class="prod-content">
        <div class="prod-item">
          <p class="prod-item-header fs26">企业微信</p>
          <ul class="fs16">
            <li class="prod-item-title fs24">星耀企微宝<span></span></li>
            <li>多场景裂变玩法</li>
            <li>配合自动打标签、渠道活码群发助手</li>
            <li>实现用户私域分层</li>
            <li>精细化运营管理</li>
          </ul>
          <img src="@/assets/img/prod-left.png" alt="星耀裂变" />
        </div>
        <div class="prod-item">
          <p class="prod-item-header fs26">微信公众号</p>
          <ul class="fs16">
            <li class="prod-item-title fs24">星耀任务宝<span></span></li>
            <li>一分钟搭建裂变活动，完成增长传播闭环</li>
          </ul>
          <ul class="fs16">
            <li class="prod-item-title fs24">星耀消息通<span></span></li>
            <li>支持服务号/订阅号定向定时、多次群发消息</li>
          </ul>
          <img src="@/assets/img/prod-right.png" alt="星耀裂变" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/static/css/rest.scss";
/*两大产品*/
.product {
  padding-top: 164px;
  padding-bottom: 76px;
  background-image: url(../../../assets/img/product-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
}
.prod-title {
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.09em;
  margin-bottom: 35px;
}

.prod-info {
  color: #333333;
  text-align: center;
  margin-bottom: 85px;
}

.prod-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.prod-content .prod-item {
  width: 580px;
  background-color: #fff;
  border: 1px solid $themes-color;
  border-radius: 10px;
  padding: 110px 59px 42px 59px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

.prod-content .prod-item ul {
  margin-bottom: 30px;
}

.prod-content .prod-item li {
  margin-bottom: 12px;
  color: #333333;
}

.prod-content .prod-item .prod-item-header {
  width: 317px;
  color: #fff;
  font-weight: 700;
  padding: 10px 0;
  text-align: center;
  position: absolute;
  background-image: url(../../../assets/img/prod-icon.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
  top: -9px;
  left: 50%;
  transform: translateX(-50%);
}

.prod-content .prod-item .prod-item-header::before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-bottom: 9px solid #061dab;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  position: absolute;
  top: 0;
  left: -3px;
  margin: 0;
  padding: 0;
}

.prod-content .prod-item .prod-item-header::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-bottom: 9px solid #061dab;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  position: absolute;
  top: 0;
  right: -3px;
  margin: 0;
  padding: 0;
}

.prod-content .prod-item .prod-item-title {
  font-weight: 700;
  margin-bottom: 20px;
}

.prod-content .prod-item .prod-item-title span {
  display: inline-block;
  width: 19px;
  height: 19px;
  position: relative;
  top: 1px;
  background-image: url(../../../assets/img/prod-icon1.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 center;
  margin-left: 10px;
}

.prod-content .prod-item img {
  position: absolute;
  top: 75px;
  left: 278px;
  z-index: -1;
}
</style>
