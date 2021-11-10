<template>
  <div class="allbutton">
    <button class="btn button1"><span class="mask mask-1"></span></button>
    <button class="btn button2"><span class="mask mask-2"></span></button>
    <button class="btn button3"><span class="mask mask-3"></span></button>
    <button class="btn button4"><span class="mask mask-4"></span></button>

  </div>
</template>
<script setup>

</script>
<style lang="less" scoped>
// animation 动画
// transform 平移
@keyframes scdme {
  0% {
    width: 0;
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
}
@keyframes scdme2 {
  0% {
    width: 1px;
    height: 1px;
    opacity: 1;
    transform: scale(0);
  }
  100% {
    width: 1px;
    height: 1px;
    opacity: 0;
    transform: scale(100);
  }
}

button {
  outline: none;
  border: none;
  cursor: pointer;
}
.allbutton {
  display: flex;
  margin: 0 auto;
  width: 1000px;
  justify-content: space-around;
  .btn {
    position: relative;
    width: 100px;
    height: 60px;
    border-radius: 10px;
    z-index: 100;
    .mask {
      position: absolute;
      display: block;
      background-color: #fff;
    }
    .mask-1 {
      left: 0;
      top: 0;
      height: 100%;
    }
    .mask-2 {
      left: 0;
      top: 0;
      height: 100%;
      border-top-right-radius: 40px;
    }
    .mask-3 {
      top: 50%;
      left: 50%;
      border-radius: 50%;
    }
  }
  .button1 {
    background: red;
  }
  .button1:hover .mask {
    animation: scdme 1s;
  }

  .button2 {
    background: green;
  }
  .button2:hover .mask {
    animation: scdme 1s;
  }
  .button3 {
    background: black;
  }
  .button3 .mask {
    animation: scdme2 1s infinite ;
  }
  .button4{
    background: blueviolet;
    transform: 0.5s all
  }
}
</style>