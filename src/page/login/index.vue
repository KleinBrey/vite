<template>
  <div class="login">
    <div class="logincontent"></div>
  </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("/@/assets/img/homepage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .logincontent {
    width: 300px;
    height: 500px;
    background-color: aqua;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
