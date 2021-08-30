<template>
  <!-- 合作企业 -->
  <div class="business">
    <div class="center">
      <p class="business-title fs40">35000+家企业的信赖之选</p>
      <div class="business-content" :class="'business-content' + num" v-for="num of busnum" :key="num">
        <div class="business-item" v-for="itme in verify(1)" :key="itme">
          <span class="business-icon"></span>
          <p class="business-name fs15">{{ itme }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-business',
  props: {
    business: {
      type: Array
    }
  },
  created () {
    console.log(this.business.length / 6)
  },
  methods: {
    verify (num) {
      const newbus = this.business.filter((itme, index, array) => {
        if (index >= (num - 1) * 6 && index < num * 6) {
          return itme
        }
      })
      return newbus
    }
  },
  computed: {
    busnum () {
      return this.business.length / 6
    }
  }
}
</script>
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
  background-position: -200px 0;
}

.business-content .business-item:nth-of-type(3) .business-icon {
  background-position: -400px 0;
}

.business-content .business-item:nth-of-type(4) .business-icon {
  background-position: -600px 0;
}

.business-content .business-item:nth-of-type(5) .business-icon {
  background-position: -800px 0;
}

.business-content .business-item .business-icon {
  background-position: -1000px 0;
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
  background-position: 0 -100px;
}

.business-content2 .business-item:nth-of-type(2) .business-icon {
  background-position: -200px -100px;
}

.business-content2 .business-item:nth-of-type(3) .business-icon {
  background-position: -400px -100px;
}

.business-content2 .business-item:nth-of-type(4) .business-icon {
  background-position: -600px -100px;
}

.business-content2 .business-item:nth-of-type(5) .business-icon {
  background-position: -800px -100px;
}

.business-content2 .business-item:nth-of-type(6) .business-icon {
  background-position: -1000px -100px;
}

.business-content3 .business-item .business-icon {
  background-position: 0 -200px;
}

.business-content3 .business-item:nth-of-type(2) .business-icon {
  background-position: -200px -200px;
}

.business-content3 .business-item:nth-of-type(3) .business-icon {
  background-position: -400px -200px;
}

.business-content3 .business-item:nth-of-type(4) .business-icon {
  background-position: -600px -200px;
}

.business-content3 .business-item:nth-of-type(5) .business-icon {
  background-position: -800px -200px;
}

.business-content3 .business-item:nth-of-type(6) .business-icon {
  background-position: -1000px -200px;
}

.business-content4 .business-item .business-icon {
  background-position: 0 -300px;
}

.business-content4 .business-item:nth-of-type(2) .business-icon {
  background-position: -200px -300px;
}

.business-content4 .business-item:nth-of-type(3) .business-icon {
  background-position: -400px -300px;
}

.business-content4 .business-item:nth-of-type(4) .business-icon {
  background-position: -600px -300px;
}

.business-content4 .business-item:nth-of-type(5) .business-icon {
  background-position: -800px -300px;
}

.business-content4 .business-item:nth-of-type(6) .business-icon {
  background-position: -1000px -300px;
}

.business-content5 .business-item .business-icon {
  background-position: 0 -400px;
}

.business-content5 .business-item:nth-of-type(2) .business-icon {
  background-position: -200px -400px;
}

.business-content5 .business-item:nth-of-type(3) .business-icon {
  background-position: -400px -400px;
}

.business-content5 .business-item:nth-of-type(4) .business-icon {
  background-position: -600px -400px;
}

.business-content5 .business-item:nth-of-type(5) .business-icon {
  background-position: -800px -400px;
}

.business-content5 .business-item:nth-of-type(6) .business-icon {
  background-position: -1000px -400px;
}
</style>
