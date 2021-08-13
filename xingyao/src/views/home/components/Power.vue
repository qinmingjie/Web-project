<template>
  <!-- 研发实力 -->
  <div class="power">
    <div class="center">
      <div class="power-title fs40">
        <p>强大的研发实力，专业的招生策划团队支持</p>
        <span class="fs18"
          >来自互联网优秀的技术研发团队，打造安全稳定可用的系统</span
        >
      </div>
      <div class="power-data">
        <div class="power-item">
          <p class="fs64">99.9<span class="fs16">%</span></p>
          <p class="fs20">系统稳定性</p>
        </div>
        <div class="power-item">
          <p class="fs64">10000<span class="fs16">张</span></p>
          <p class="fs20">每秒生成海报数</p>
        </div>
        <div class="power-item">
          <p class="fs64">&lt;500<span class="fs16">毫秒</span></p>
          <p class="fs20">服务平均响应</p>
        </div>
      </div>
      <div class="power-sort themes-color">
        <div class="power-sort-item">
          <div>
            <p class="power-sort-title fs24">安全稳定</p>
            <p class="power-sort-info fs16">
              多年技术积累，混合云部署，云防火墙，多地互备，服务治理，弹性伸缩能力，全方位监控，为超成百招生团队及上千校区招生保驾护航。
            </p>
          </div>
          <img src="@/assets/img/power-icon1.png" alt="星耀裂变" />
        </div>
        <div class="power-sort-item">
          <div>
            <p class="power-sort-title fs24">极致体验</p>
            <p class="power-sort-info fs16">
              从操盘招生角度实战出发，研发产品，每个功能对应完善的解决方案，应用实战场景，为家长报课提供更好的用户体验。
            </p>
          </div>
          <img src="@/assets/img/power-icon2.png" alt="星耀裂变" />
        </div>
        <div class="power-sort-item">
          <div>
            <p class="power-sort-title fs24">高效服务</p>
            <p class="power-sort-info fs16">
              打造专业服务团队，全程1V1售后服务及招生策划、数据分析，活动全程跟踪，活动上线前全面检查每一个环节。
            </p>
          </div>
          <img src="@/assets/img/power-icon3.png" alt="星耀裂变" />
        </div>
        <div class="power-sort-item">
          <div>
            <p class="power-sort-title fs24">收款结算</p>
            <p class="power-sort-info fs16">
              同时支持自有微信商户后台及我司代收款商户后台功能，结算佣金透明，时效超快，活动结束24小时内打款，费率超低。
            </p>
          </div>
          <img src="@/assets/img/power-icon4.png" alt="星耀裂变" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/static/css/rest.scss";
/*研发实力*/
.power {
  text-align: center;
  background-image: url(../../../assets/img/power-bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
  padding-top: 80px;
  padding-bottom: 77px;
}

.power-title {
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.09em;
  margin-bottom: 70px;
}

.power-title p {
  margin-bottom: 20px;
}

.power-title span {
  font-weight: normal;
  letter-spacing: normal;
}

.power-info {
  color: #fff;
}

.power-data {
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  text-align: left;
  margin-bottom: 64px;
}

.power-item {
  position: relative;
  padding-left: 16px;
}

.power-item p:nth-of-type(1) {
  margin-bottom: 10px;
}

.power-item p:nth-of-type(1) span {
  margin-left: 4px;
}

.power-item::before {
  content: "";
  display: block;
  width: 6px;
  height: 50%;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
}
.power-sort {
  color: $themes-color;
}
.power-sort .power-sort-item:last-child {
  margin-bottom: 0;
}

.power-sort-item {
  min-height: 150px;
  background-color: #fff;
  margin-bottom: 30px;
  padding: 0 50px 0 30px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  transition: all 0.5s;
}

.power-sort-item .power-sort-title {
  font-weight: 700;
  margin-bottom: 29px;
}

.power-sort-item img {
  transition: all 0.2s ease-in-out;
  position: relative;
  left: 0;
}

.power-sort-item:hover img {
  left: -10px;
}
</style>
