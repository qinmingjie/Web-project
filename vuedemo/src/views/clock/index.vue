<template>
  <div class="main">
    <div class="oclock">
      <div class="shadow-oclock">
        <span class="circle"></span>
      </div>
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="hour" ref="hour"></div>
      <div class="minute" ref="minute"></div>
      <div class="seconds" ref="seconds"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'olock',
  mounted () {
    this.$nextTick(() => {
      this.initTime()
    })
  },
  methods: {
    // 初始化事件
    initTime () {
      const nowDate = new Date()
      let hour = nowDate.getHours() < 12 ? nowDate.getHours() : nowDate.getHours() - 12
      let minute = nowDate.getMinutes()
      let seconds = nowDate.getSeconds()
      this.$refs.seconds.style.transform = `rotate(${6 * seconds}deg) translate(-50%, -90%)`
      this.$refs.minute.style.transform = `rotate(${6 * minute + 0.1 * seconds}deg) translate(-50%, -90%)`
      this.$refs.hour.style.transform = `rotate(${30 * hour + 0.5 * minute}deg) translate(-50%, -90%)`
      setInterval(() => {
        seconds++
        if (seconds % 60 === 1) {
          seconds = 1
          minute += 1
        } else if (minute % 60 === 1) {
          hour += 1
        }
        this.$refs.seconds.style.transform = `rotate(${6 * seconds}deg) translate(-50%, -90%)`
        this.$refs.minute.style.transform = `rotate(${6 * minute + 0.1 * seconds}deg) translate(-50%, -90%)`
        this.$refs.hour.style.transform = `rotate(${30 * hour + 0.5 * minute}deg) translate(-50%, -90%)`
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
$width: 1/7.5;
body,
div {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  position: relative;
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
}
.oclock {
  width: 350px;
  height: 350px;
  border: 10px solid #CDA280;
  border-radius: 50%;
  background-color: #DEE3E7;
  box-shadow: -20px 6px 24px 0px rgba(0, 0, 0, 0.3);
  position: relative;
}
.shadow-oclock {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: -10px 5px 10px 5px rgba(0, 0, 0, 0.3) inset;
  position: relative;
  .circle {
    content: '';
    display: block;
    width: 2%;
    height: 2%;
    border-radius: 50%;
    background-color: #1F272A;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 4;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  }
}
.shadow-oclock::before {
  content: '';
  display: block;
  width: 78%;
  height: 78%;
  border-radius: 50%;
  background-color: #DEE3E7;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
}
.shadow-oclock::after {
  content: '';
  display: block;
  width: 3%;
  height: 3%;
  background-color: #212A29;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.oclock::before {
  content: '';
  display: block;
  width: 2%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #3E4649;
}
.oclock::after {
  content: '';
  display: block;
  width: 90%;
  height: 2%;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #3E4649;
  transform-origin: center center;
  transform:translate(-50%, -50%) rotate(180deg);
}
.line1,
.line2 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.line1::before {
  content: '';
  display: block;
  width: 1%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(30deg);
  background-color: #3E4649;
}
.line1::after {
  content: '';
  display: block;
  width: 1%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center center;
  transform: translate(-50%, -50%) rotate(60deg);
  background-color: #3E4649;
}
.line2::before {
  content: '';
  display: block;
  width: 1%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center center;
  transform: translate(-50%, -50%) rotate(120deg);
  background-color: #3E4649;
}
.line2::after {
  content: '';
  display: block;
  width: 1%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(150deg);
  background-color: #3E4649;
}
.hour {
  height: 28%;
  width: 8px;
  background-color: #41464A;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
}
.minute {
  height: 36%;
  width: 6px;
  background-color: #3B3C40;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
}
.seconds {
  height: 40%;
  width: 4px;
  background-color: #24292C;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
}
.hour,
.minute,
.seconds {
  transform-origin: 0 0;
  transform: translate(-50%, -90%);
}
@media screen and (max-width:1100px) {
  .oclock {
    width: 400 * $width + vw;
    height: 400 * $width + vw;
    box-shadow: -20 * $width + vw 6 * $width + vw 24 * $width + vw 0 rgba(0, 0, 0, 0.3);
    border-width: 10 * $width + vw;
  }
  .shadow-oclock {
    box-shadow: -10 * $width + vw 5 * $width + vw 10 * $width + vw 5 * $width + vw rgba(0, 0, 0, 0.3) inset;
  }
  .hour {
    width: 8 * $width + vw;
  }
  .minute {
    width: 6 * $width + vw;
  }
  .seconds {
    width: 4 * $width + vw;
  }
}
</style>
