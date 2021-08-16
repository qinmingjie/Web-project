<template>
  <!-- footer -->
  <div class="footer">
    <div class="center">
      <div class="footer-content">
        <div class="footer-left">
          <p class="footer-logo"></p>
          <div class="footer-time">
            <p class="fs28"><i></i> <span>029-87574220</span></p>
            <p class="fs14"><i></i> <span>工作日 9:00-18:30</span></p>
          </div>
          <div class="footer-code">
            <div>
              <img src="@/assets/img/footer1.png" alt="星耀裂变" />
              <p class="fs12">在线咨询</p>
            </div>
            <div>
              <img src="@/assets/img/footer2.png" alt="星耀裂变" />
              <p class="fs12">微信公众号</p>
            </div>
          </div>
        </div>
        <div class="footer-right">
          <ul class="fs14">
            <li class="footer-title fs16">产品中心</li>
            <li><a href="" target="_blank">企业微信SCRM</a></li>
            <li><a href="" target="_blank">公众号拉新</a></li>
            <li><a href="" target="_blank">公众号互动</a></li>
            <li><a href="" target="_blank">公众号转化</a></li>
          </ul>
          <ul class="fs14">
            <li class="footer-title fs16">解决方案</li>
            <li><a href="" target="_blank">教育培训</a></li>
            <li><a href="" target="_blank">零售行业</a></li>
            <li><a href="" target="_blank">电商行业</a></li>
            <li><a href="" target="_blank">美妆行业</a></li>
          </ul>
          <ul class="fs14">
            <li class="footer-title fs16">增长学院</li>
            <li><a href="" target="_blank">企微学院</a></li>
            <li><a href="" target="_blank">裂变学院</a></li>
          </ul>
          <ul class="fs14">
            <li class="footer-title fs16">媒体报道</li>
            <li>
              <a href="" target="_blank"
                >星耀裂变-2021·逆势增长！第四届陕西互联网人年会主办</a
              >
            </li>
            <li>
              <a href="" target="_blank"
                >星耀裂变-洞察·2020 第三届陕西互联网运营人年会主办</a
              >
            </li>
            <li>
              <a href="" target="_blank"
                >星耀裂变-引爆力916·用户裂变增长峰会在西安联合主办</a
              >
            </li>
          </ul>
        </div>
      </div>
      <p class="footer-xy fs12">
        星耀裂变仅提供技术服务,请您务必严格遵守微信相关协议
        <a href="" target="_blank" class="themes-color">《微信公众平台协议》</a>
        、
        <a href="" target="_blank" class="themes-color"
          >《微信外部链接内容管理规范》</a
        >、
        <a href="" target="_blank" class="themes-color">《企业微信服务协议》</a
        >等微信相关管理规范。
      </p>
      <p class="footer-copy fs12">
        Copyright © 2015-2021西安星耀网络科技有限公司 All Rights Reserved
        陕ICP备15001693号-1
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-footer'
}
</script>
<style lang="scss" scoped>
/*footer*/
.footer {
  background-color: #20212b;
  color: #fff;
  padding-top: 40px;
  padding-bottom: 10px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-bottom: 40px;
}

.footer-logo {
  width: 174px;
  height: 62px;
  background-image: url(../assets/img/logo-white.png);
  background-size: contain;
  margin-bottom: 35px;
}

.footer-left {
  width: 255px;
}

.footer-time {
  margin-bottom: 30px;
}

.footer-time i {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-size: contain;
  background-position: 0 0;
  margin-right: 10px;
}

.footer-time p {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
}

.footer-time p:nth-of-type(1) {
  font-weight: 700;
  margin-bottom: 14px;
}

.footer-time p:nth-of-type(1) i {
  background-image: url(../assets/img/phone-icon.png);
}

.footer-time p:nth-of-type(2) i {
  background-image: url(../assets/img/time-icon.png);
}

.footer-code {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.footer-code img {
  width: 117px;
  height: 117px;
  margin-bottom: 9px;
}

.footer-right {
  flex: 0.89;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding-top: 55px;
  position: relative;
}

.footer-right::before {
  content: "";
  display: block;
  width: 100%;
  border-bottom: 1px solid #fff;
  position: absolute;
  top: 88px;
}

.footer-right .footer-title {
  font-weight: 700;
  margin-bottom: 60px;
}

.footer-right li {
  margin-bottom: 30px;
}

.footer-right li:last-child {
  margin-bottom: 0;
}

.footer-right li a:hover {
  color: #999;
}

.footer-xy,
.footer-copy {
  text-align: center;
}

.footer-copy {
  color: #c9c9c9;
  transform: scale(0.9);
}

.footer-xy {
  margin-bottom: 10px;
}
</style>
