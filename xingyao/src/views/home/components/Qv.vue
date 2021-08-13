<template>
  <!-- 企微私域运营 -->
  <div class="qv">
    <div class="center">
      <p class="qv-title fs40">企业微信私域运营一站式解决方案</p>
      <div class="qv-content">
        <div class="qv-item">
          <div class="qv-header">
            <span class="qv-header-icon"></span>
            <p class="fs20">裂变获客</p>
          </div>
          <ul>
            <li><span></span>企微号裂变</li>
            <li><span></span>企微群裂变</li>
            <li><span></span>红包裂变</li>
            <li><span></span>联动裂变</li>
            <li><span></span>盲盒裂变</li>
            <li><span></span>抽奖裂变</li>
          </ul>
          <div class="qv-btn fs14">
            <a href="" class="qv-free-btn">免费试用</a>
            <a href="" class="qv-think-btn">了解更多</a>
          </div>
        </div>
        <div class="qv-item">
          <div class="qv-header">
            <span class="qv-header-icon"></span>
            <p class="fs20">客户营销</p>
          </div>
          <ul>
            <li><span></span>标签群发SOP推送</li>
            <li><span></span>多形式营销内容</li>
            <li><span></span>客户信息管理</li>
            <li><span></span>客户标签管理</li>
            <li><span></span>企微朋友圈</li>
            <li><span></span>企微群模板</li>
          </ul>
          <div class="qv-btn fs14">
            <a href="" class="qv-free-btn">免费试用</a>
            <a href="" class="qv-think-btn">了解更多</a>
          </div>
        </div>
        <div class="qv-item">
          <div class="qv-header">
            <span class="qv-header-icon"></span>
            <p class="fs20">客户转化</p>
          </div>
          <ul>
            <li><span></span>群发助手</li>
            <li><span></span>雷达跟踪</li>
            <li><span></span>个性化欢迎语</li>
            <li><span></span>渠道活码</li>
            <li><span></span>自动打标签</li>
            <li><span></span>自定义表单</li>
          </ul>
          <div class="qv-btn fs14">
            <a href="" class="qv-free-btn">免费试用</a>
            <a href="" class="qv-think-btn">了解更多</a>
          </div>
        </div>
        <div class="qv-item">
          <div class="qv-header">
            <span class="qv-header-icon"></span>
            <p class="fs20">客户管理</p>
          </div>
          <ul>
            <li><span></span>好友欢迎语</li>
            <li><span></span>群欢迎语</li>
            <li><span></span>快捷回复</li>
            <li><span></span>自动回复</li>
            <li><span></span>客户CRM体系</li>
            <li><span></span>客户分层管理</li>
          </ul>
          <div class="qv-btn fs14">
            <a href="" class="qv-free-btn">免费试用</a>
            <a href="" class="qv-think-btn">了解更多</a>
          </div>
        </div>
        <div class="qv-item">
          <div class="qv-header">
            <span class="qv-header-icon"></span>
            <p class="fs20">风控管理</p>
          </div>
          <ul>
            <li><span></span>会话内容存档</li>
            <li><span></span>违规关键词提醒</li>
            <li><span></span>客户流失提醒</li>
            <li><span></span>客户聊天统计</li>
            <li><span></span>群聊统计</li>
            <li><span></span>聊天敏感词</li>
          </ul>
          <div class="qv-btn fs14">
            <a href="" class="qv-free-btn">免费试用</a>
            <a href="" class="qv-think-btn">了解更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/static/css/rest.scss";
/*企业微信私域运营*/
.qv {
  background-color: #f4f7ff;
  padding: 76px 0;
  box-sizing: border-box;
}

.qv-title {
  font-weight: 700;
  text-align: center;
  margin-bottom: 70px;
  letter-spacing: 0.09em;
}

.qv-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  border: 1px solid #eee;
}

.qv-item {
  width: 20%;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  color: #333;
  position: relative;
  transition: all 0.4s;
  border-right: 1px solid #eee;
}

.qv-item:last-child {
  border: 0;
}

.qv-item .qv-header .qv-header-icon {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-image: url(../../../assets/img/qv-header-icon.png);
  background-repeat: no-repeat;
  background-size: auto 200%;
  background-position: 0 0;
  margin-bottom: 23px;
  margin-left: 10px;
}

.qv-item .qv-header p {
  padding-left: 10px;
  font-weight: 700;
  padding-bottom: 20px;
  border-bottom: 1px solid $themes-color;
  margin-bottom: 40px;
}

.qv-item ul {
  margin-bottom: 45px;
}

.qv-item ul li {
  margin-bottom: 16px;
  padding-left: 36px;
  position: relative;
}

.qv-item ul li span {
  display: inline-block;
  width: 19px;
  height: 19px;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-image: url(../../../assets/img/qv-icon1.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: auto 1000;
}

.qv-item .qv-btn a {
  display: block;
  line-height: 28px;
  border: 1px solid #fff;
  width: 110px;
  margin-left: 5px;
  border-radius: 1px;
  text-align: center;
}

.qv-item .qv-btn .qv-free-btn {
  background-color: #fff;
  margin-bottom: 15px;
  visibility: hidden;
  color: $themes-color;
}

.qv-item .qv-btn .qv-think-btn {
  background-color: $themes-color;
  color: #fff;
  border: 1px solid transparent;
}

.qv-item:nth-of-type(1) li:nth-of-type(1) span,
.qv-item:nth-of-type(2) li:nth-of-type(1) span,
.qv-item:nth-of-type(3) li:nth-of-type(1) span,
.qv-item:nth-of-type(4) li:nth-of-type(1) span,
.qv-item:nth-of-type(5) li:nth-of-type(1) span {
  background-position: 0 0;
}

.qv-item:nth-of-type(1) li:nth-of-type(2) span,
.qv-item:nth-of-type(2) li:nth-of-type(2) span,
.qv-item:nth-of-type(3) li:nth-of-type(2) span,
.qv-item:nth-of-type(4) li:nth-of-type(2) span,
.qv-item:nth-of-type(5) li:nth-of-type(2) span {
  background-position: -19px 0;
}

.qv-item:nth-of-type(1) li:nth-of-type(3) span,
.qv-item:nth-of-type(2) li:nth-of-type(3) span,
.qv-item:nth-of-type(3) li:nth-of-type(3) span,
.qv-item:nth-of-type(4) li:nth-of-type(3) span,
.qv-item:nth-of-type(5) li:nth-of-type(3) span {
  background-position: -38px 0;
}

.qv-item:nth-of-type(1) li:nth-of-type(4) span,
.qv-item:nth-of-type(2) li:nth-of-type(4) span,
.qv-item:nth-of-type(3) li:nth-of-type(4) span,
.qv-item:nth-of-type(4) li:nth-of-type(4) span,
.qv-item:nth-of-type(5) li:nth-of-type(4) span {
  background-position: -57px 0;
}

.qv-item:nth-of-type(1) li:nth-of-type(5) span,
.qv-item:nth-of-type(2) li:nth-of-type(5) span,
.qv-item:nth-of-type(3) li:nth-of-type(5) span,
.qv-item:nth-of-type(4) li:nth-of-type(5) span,
.qv-item:nth-of-type(5) li:nth-of-type(5) span {
  background-position: -76px 0;
}

.qv-item:nth-of-type(1) li:nth-of-type(6) span,
.qv-item:nth-of-type(2) li:nth-of-type(6) span,
.qv-item:nth-of-type(3) li:nth-of-type(6) span,
.qv-item:nth-of-type(4) li:nth-of-type(6) span,
.qv-item:nth-of-type(5) li:nth-of-type(6) span {
  background-position: -95px 0;
}

.qv-item:nth-of-type(2) .qv-header .qv-header-icon {
  background-position: -50px 0;
}

.qv-item:nth-of-type(2) li span {
  background-image: url(../../../assets/img/qv-icon2.png);
}

.qv-item:nth-of-type(3) .qv-header .qv-header-icon {
  background-position: -100px 0;
}

.qv-item:nth-of-type(3) li span {
  background-image: url(../../../assets/img/qv-icon3.png);
}

.qv-item:nth-of-type(4) .qv-header .qv-header-icon {
  background-position: -150px 0;
}

.qv-item:nth-of-type(4) li span {
  background-image: url(../../../assets/img/qv-icon4.png);
}

.qv-item:nth-of-type(5) .qv-header .qv-header-icon {
  background-position: -200px 0;
}

.qv-item:nth-of-type(5) li span {
  background-image: url(../../../assets/img/qv-icon5.png);
}

.qv-item:hover {
  transform: scale(1.02) translateY(-5px);
  background-color: $themes-color;
  color: #fff;
  z-index: 9;
}

.qv-item:hover:nth-of-type(1) .qv-header .qv-header-icon {
  background-position: 0px -50px;
}

.qv-item:hover:nth-of-type(2) .qv-header .qv-header-icon {
  background-position: -50px -50px;
}

.qv-item:hover:nth-of-type(3) .qv-header .qv-header-icon {
  background-position: -100px -50px;
}

.qv-item:hover:nth-of-type(4) .qv-header .qv-header-icon {
  background-position: -150px -50px;
}

.qv-item:hover:nth-of-type(5) .qv-header .qv-header-icon {
  background-position: -200px -50px;
}

.qv-item:hover:nth-of-type(1) .qv-header .qv-header-icon,
.qv-item:hover:nth-of-type(2) .qv-header .qv-header-icon,
.qv-item:hover:nth-of-type(3) .qv-header .qv-header-icon,
.qv-item:hover:nth-of-type(4) .qv-header .qv-header-icon,
.qv-item:hover:nth-of-type(5) .qv-header .qv-header-icon {
  background-position: 0px -50px;
}

.qv-item:hover:nth-of-type(1) li:nth-of-type(1) span,
.qv-item:hover:nth-of-type(2) li:nth-of-type(1) span,
.qv-item:hover:nth-of-type(3) li:nth-of-type(1) span,
.qv-item:hover:nth-of-type(4) li:nth-of-type(1) span,
.qv-item:hover:nth-of-type(5) li:nth-of-type(1) span {
  background-position: 0 -19px;
}

.qv-item:hover:nth-of-type(1) li:nth-of-type(2) span,
.qv-item:hover:nth-of-type(2) li:nth-of-type(2) span,
.qv-item:hover:nth-of-type(3) li:nth-of-type(2) span,
.qv-item:hover:nth-of-type(4) li:nth-of-type(2) span,
.qv-item:hover:nth-of-type(5) li:nth-of-type(2) span {
  background-position: -19px -19px;
}

.qv-item:hover:nth-of-type(1) li:nth-of-type(3) span,
.qv-item:hover:nth-of-type(2) li:nth-of-type(3) span,
.qv-item:hover:nth-of-type(3) li:nth-of-type(3) span,
.qv-item:hover:nth-of-type(4) li:nth-of-type(3) span,
.qv-item:hover:nth-of-type(5) li:nth-of-type(3) span {
  background-position: -38px -19px;
}

.qv-item:hover:nth-of-type(1) li:nth-of-type(4) span,
.qv-item:hover:nth-of-type(2) li:nth-of-type(4) span,
.qv-item:hover:nth-of-type(3) li:nth-of-type(4) span,
.qv-item:hover:nth-of-type(4) li:nth-of-type(4) span,
.qv-item:hover:nth-of-type(5) li:nth-of-type(4) span {
  background-position: -57px -19px;
}

.qv-item:hover:nth-of-type(1) li:nth-of-type(5) span,
.qv-item:hover:nth-of-type(2) li:nth-of-type(5) span,
.qv-item:hover:nth-of-type(3) li:nth-of-type(5) span,
.qv-item:hover:nth-of-type(4) li:nth-of-type(5) span,
.qv-item:hover:nth-of-type(5) li:nth-of-type(5) span {
  background-position: -76px -19px;
}

.qv-item:hover:nth-of-type(1) li:nth-of-type(6) span,
.qv-item:hover:nth-of-type(2) li:nth-of-type(6) span,
.qv-item:hover:nth-of-type(3) li:nth-of-type(6) span,
.qv-item:hover:nth-of-type(4) li:nth-of-type(6) span,
.qv-item:hover:nth-of-type(5) li:nth-of-type(6) span {
  background-position: -95px -19px;
}

.qv-item:hover .qv-free-btn {
  visibility: visible;
}

.qv-item:hover .qv-think-btn {
  border: 1px solid #fff;
}
</style>
