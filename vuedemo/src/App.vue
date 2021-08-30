<template>
  <div class="main">
    <div class="oclock-wrap">
      <div class="oclock">
        <div class="shadow-oclock"></div>
        <div class="line1"></div>
        <div class="line2"></div>
      </div>
    </div>
  </div>
</template>

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
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
}
.oclock-wrap {
  width: 740px;
  height: 530px;
  box-sizing: border-box;
  background-color: #E8E8E6;
  display: flex;
  justify-content: center;
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
  z-index: 5;
  transform: translate(-50%, -50%);
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
  transform: translate(-50%, -50%) rotate(215deg);
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
  transform: translate(-50%, -50%) rotate(245deg);
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
  transform: translate(-50%, -50%) rotate(245deg);
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
  transform: translate(-50%, -50%) rotate(245deg);
  background-color: #3E4649;
}
</style>
