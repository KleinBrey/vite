<template>
  <el-row>
    <el-col
      v-for="(o, index) in 3"
      :key="o"
      :span="7"
      :offset="index > 0 ? 1 : 0"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
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