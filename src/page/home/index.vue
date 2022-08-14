<template>
  <div class="content">
    <div class="left">111111</div>
    <div class="main">
      <span>4444444</span>
    </div>
    <div class="right">222222</div>
  </div>
</template>
<script setup>
</script>
<style lang="less">
.content {
  width: 100%;
  height: 100%;
  display: flex;
  //   .left {
  //     width: 200px;
  //     float: left;
  //     background: red;
  //     height: 100%;
  //   }
  //   .right {
  //     width: 100px;
  //     float: right;
  //     background: green;
  //     height: 100%;
  //   }
  //   .main {
  //     background: gold;
  //     height: 100%;
  //     margin-left: 200px;
  //     margin-right: 100px;
  //   }
  //   .main {
  //     /* 如果缺少overflow: hidden; 此div会占满父级元素宽度，且会被两侧的块挡住*/
  //     overflow: hidden;
  //     background: gold;
  //     height: 100%;
  //   }

  // ---------------------------
  // .left {
  //   width: 200px;
  //   background: red;
  //   height: 100%;
  // }
  // .right {
  //   width: 200px;
  //   background: green;
  //   height: 100%;
  // }
  // .main {
  //   flex: 1;
  //   background: gold;
  // }
  // ---------------------------
  .left {
    width: 200px;
    background: red;
    height: 100%;
  }
  .right {
    width: 200px;
    background: green;
    height: 100%;
  }
  .main {
    width: calc(100% - 400px);
    background: gold;
  }
}
</style>