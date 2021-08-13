<template>
  <!-- 头部导航 -->
  <div class="header">
    <div class="center clearfix h-content">
      <div class="h-left clearfix">
        <h1 class="logo">星耀裂变</h1>
        <div class="h-brand">
          <img src="../assets/img/brand.png" alt="星耀裂变" class="h-brand" />
        </div>
      </div>
      <div class="h-nav fs16">
        <router-link :to="itme.link" v-for="itme in links" :key="itme.link">{{
          itme.title
        }}</router-link>
      </div>
      <div class="h-action fs14">
        <a href="" class="login">登 录</a>
        <a href="" class="register">免费注册</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'public-header',
  data () {
    return {
      links: [
        { title: '首页', link: '/' },
        { title: '企微SCRM', link: '/scrm' },
        { title: '公众号拉新', link: '/gzh' },
        { title: '行业解决方案', link: '/plan' },
        { title: '企微学院', link: '/qvcollage' },
        { title: '裂变学院', link: '/collage' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/static/css/rest.scss";
.header {
  width: 100%;
  height: 70px;
}
.h-content {
  height: 100%;
}
.h-left {
  float: left;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 3.78151%;
}
h1 {
  overflow: hidden;
  text-indent: -9999px;
  width: 115px;
  height: 40px;
  background-image: url(../assets/img/logo-black.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
  margin-right: 9px;
}
.h-brand {
  width: 121px;
}
.h-nav {
  width: 58.15126%;
  height: 100%;
  float: left;
  line-height: 70px;
  color: #333;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  letter-spacing: 0.05em;
  margin-right: 2.85%;
}
.h-nav a:hover {
  color: $themes-color;
}
.h-action {
  height: 100%;
  float: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
.h-action a {
  border-radius: 2px;
  transition: opacity 0.5s;
}
.h-action a.login {
  padding: 4px 24px;
  border: 1px solid $themes-color;
  margin-right: 9px;
}
.h-action a.register {
  padding: 5px 12px;
  background-color: $themes-color;
  color: #fff;
}
.h-action a:hover {
  opacity: 0.7;
}
</style>
