<template>
  <div id="trafic-light">{{color}}</div>
</template>
<script setup>
import { ref, nextTick, onMounted } from "vue";
const color = ref("5555");
// 
const trypromise = number => {
  return new Promise((resolve, reject) => {
    // settimeout 宏任务切开微任务
    setTimeout(() => resolve((number += 1)), 1000);
  });
};
const usedata = async () => {
  // 1 
  trypromise(5).then(res => (color.value = res));
  // 2
  try {
    const data1 = await trypromise(1);
    const data2 = await trypromise(data1);
    const data3 = await trypromise(data2);
    console.log(data1, data2, data3);
  } catch (e) {
    // 接受报错
    console.log(e, "err");
  }
};
usedata();
// promise
const sleep = delay => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
};
const use = async (delay, colo) => {
  nextTick(() => {});
  document.getElementById("trafic-light").style.background = colo;
  color.value = colo;
  await sleep(delay);
};
const main = async () => {
  while (true) {
    await use(3000, "red");
    await use(1000, "yellow");
    await use(2000, "green");
  }
};
onMounted(() => {
  main();
});
</script>
<style>
#trafic-light {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  text-align: center;
  line-height: 300px;
  background-color: pink;
  font-weight: 500;
}
</style>