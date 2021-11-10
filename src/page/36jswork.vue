<template>
  <ul>
    <li style="display:flex;list-style-type:none">
      <div style="width:200px;font-weight:bold">
        2018.01 - 2018.07
      </div>
      <div style="width:800px;">
        <div style="width:500px;float:left;font-weight:bold">
          宁海县农村污水处理管理平台
        </div>
        <div style="font-weight:bold">
          Java后端研发(实习)
        </div>
        <div>
          <ul>
            <li style="list-style-type:disc;text-align: left;">项目描述：宁波宁海县200多个农污站点的综合管理展示系统，包括现场处理数据采集接入、工艺展示7777778888888888888888887</li>
            <li style="list-style-type:disc;text-align: left;">完成 DRG 采集系统设计，完成 DRG 数据分</li>
            <li style="list-style-type:disc;text-align: left;">涉及技术：基于微服务SpringBoot+Shiro+其他中间件+Vue.js构建管理平台</li>
          </ul>
        </div>
      </div>
    </li>
    <li style="display:flex;list-style-type:none">
      <div style="width:200px;font-weight:bold">
        2018.01 - 2018.07
      </div>
      <div>
        <div style="width:500px;float:left;font-weight:bold">
          杭州海知慧环境科技有限公司
        </div>
        <div style="font-weight:bold">
          Java后端研发(实习)
        </div>
        <div>
          <ul>
            <li style="list-style-type:disc;">完成 DRG 采集系统设计，完成 DRG 数据分</li>
            <li style="list-style-type:disc;">完成 DRG 采集系统设计，完成 DRG 数据分</li>
            <li style="list-style-type:disc;">涉及技术：完成 DRG 采集系统设计，完成 DRG 数据分</li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>
<script setup>
import { ref, nextTick } from "vue";
// 类型判断
// Object.property.toString.call()

/* const type = val => {
  const type = Object.prototype.toString.call(val); // [object Number]
  console.log(
    type
      .slice(8, -1)
      .toLowerCase()
  );
  console.log(type.match(/\[object (.*?)\]/)[1].toLowerCase());
};
type(67);
type([]);
type({});
type(true); */

//原型链继承
/* function Animal() {
  this.colors = ["black", "white"];
}
Animal.prototype.getColor = function() {
  return this.colors;
};
function Dog() {}
Dog.prototype = new Animal();

let dog1 = new Dog();
dog1.colors.push("bro");
let dog2 = new Dog();
console.log(dog2.colors); // ['black', 'white', 'bro']
console.log(dog2.getColor()); // ['black', 'white', 'bro'] */

// 数组去重
// 1.遍历数组

/* const arr = [2, 8, 5, 0, 5, 2, 6, 7, 2, 5];
const method1 = array => {
  // 往里面存
  let newarray = [];
  for (let i = 0; i < array.length; i++) {
    // 第一种
    // if (newarray.indexOf(array[i]) == -1) {
    //   newarray.push(array[i]);
    // }
    // 第二种
    // if (array.indexOf(array[i]) == i) {
    //   newarray.push(array[i]);
    // }
  }
  console.log(newarray);
  return newarray;
}; */

// 2.ES6 set
/* function method2(arr) {
  var x = new Set(arr);
  console.log([...x]);
  return [...x];
}
method2(arr); */

// 数组扁平化
function flatten (arr) {
  var result = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      console.log(flatten(arr[i]))
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flatten([1, [2, 3, [4]]])) // [1,2,3,4]
</script>
<style>
</style>

