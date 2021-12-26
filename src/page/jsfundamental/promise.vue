<template>
  <div id="trafic-light">{{ color }}</div>
</template>
<script>
import { ref, nextTick, onMounted } from "vue";

export default {
  props: {

  },
  setup (props) {
    const sleep = (delay) => {
      return new Promise((resolve, reject) => {
        setTimeout(delay === 2000 ? reject("到绿色了") : resolve, delay)
      })
    }
    const usefunction = async (delay, color) => {
      document.getElementById("trafic-light").style.background = color
      try {
        await sleep(delay)
      }
      catch (err) {
        console.log(err)
      }
    }
    const main = async () => {
      while (true) {
        await usefunction(4000, "red");
        await usefunction(3000, "yellow");
        await usefunction(2000, "green")
      }
    };
    onMounted(() => {
      main()
    });
  }
}

</script>
<style>
#trafic-light {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  line-height: 300px;
  background-color: pink;
  font-weight: 500;
}
</style>