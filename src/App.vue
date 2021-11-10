<template>
  <img alt="Vue logo"
       src="./assets/logo.png" />
  <!-- <HelloWorld :msg="rgrg" @myclick="add" /> -->
  <router-view  />
</template>

<script setup>
import HelloWorld from "./page/home.vue";
import { ref } from "vue";
const rgrg = ref("etettetetet");
const add = () => {
  rgrg.value = "6777";
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
