<template>
  <!-- 增长模型 -->
  <div class="grow">
    <div class="center">
      <p class="title fs40">构建企业微信获客增长模型，一体化私域增长运营平台</p>
      <div class="grow-flex">
        <div class="grow-itme grow-itme1 fs18">
          <p>企微号裂变 <span></span></p>
          <p>企微群裂变 <span></span></p>
          <p>红包裂变 <span></span></p>
          <p>企微+<br>公众号裂变 <span></span></p>
        </div>
        <div class="grow-itme  grow-itme2 fs18">
          <p>自动批量<br>添加好友 <span></span></p>
          <p>无限分流账号 <span></span></p>
          <p>标签群发<br>SOP推送 <span></span></p>
          <p>渠道活码<span></span></p>
        </div>
        <div class="grow-img"></div>
        <div class="grow-itme grow-itme3 grow-itme-right fs18">
          <p><span></span>个性化欢迎语 </p>
          <p><span></span>自动拉群</p>
          <p><span></span>自动打标签</p>
          <p><span></span>企微朋友圈</p>
        </div>
        <div class="grow-itme grow-itme4 grow-itme-right fs18">
          <p><span></span>会话内容存档</p>
          <p><span></span>客户流失提醒</p>
          <p><span></span>违规关键词提醒</p>
          <p><span></span>客户聊天统计</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/*增长模型*/
.grow {
  padding-top: 83px;
  padding-bottom: 82px;
}
.grow .title {
  font-weight: 700;
  color: #333;
  margin-bottom: 82px;
  text-align: center;
}
.grow .grow-flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.grow .grow-itme {
  position: relative;
}
.grow .grow-itme p {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  margin-bottom: 30px;
  height: 56px;
  padding-right: 82px;
}
.grow .grow-itme p:nth-of-type(2) {
  padding-right: 108px;
}
.grow .grow-itme p:nth-of-type(3) {
  padding-right: 108px;
}
.grow .grow-itme p:last-child {
  margin-bottom: 0;
}
.grow .grow-itme-right p {
  text-align: left;
  padding-right: 0;
  padding-left: 82px;
  justify-content: flex-start;
}
.grow .grow-itme-right p:nth-of-type(2) {
  padding-right: 0;
  padding-left: 108px;
}
.grow .grow-itme-right p:nth-of-type(3) {
  padding-right: 0;
  padding-left: 108px;
}
.grow-itme::after {
  content: '';
  display: block;
  position: absolute;
  width: 82px;
  height: 100%;
  background-image: url(../../../assets/img/scrm/grow1.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: contain;
  top: 0;
  right: 0;
}
.grow-itme-right::after {
  top: 0;
  left: 0;
}
.grow-itme2::after {
  background-image: url(../../../assets/img/scrm/grow2.png);
}
.grow-itme3::after {
  background-image: url(../../../assets/img/scrm/grow3.png);
}
.grow-itme4::after {
  background-image: url(../../../assets/img/scrm/grow4.png);
}
.grow-img {
  width: 202px;
  height: 202px;
  border: 24px solid #deecff;
  background-color: #006BFF;
  border-radius: 50%;
  background-image: url(../../../assets/img/scrm/grow-center.png);
  background-repeat: no-repeat;
  background-size: 60% auto;
  background-position: center center;
}
</style>
